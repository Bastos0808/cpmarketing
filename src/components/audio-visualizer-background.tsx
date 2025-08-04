"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { GUI } from "dat.gui";


const AudioVisualizerBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const playButtonRef = useRef<HTMLButtonElement>(null);
    const fpsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current || !canvasRef.current || !playButtonRef.current || !fpsRef.current) return;
        
        let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer;
        let shaderMaterial: THREE.ShaderMaterial;
        let time = 0;
        let frameCount = 0;
        let lastTime = performance.now();
        let fpsElement = fpsRef.current;
        let gui: GUI;

        let audioContext: AudioContext, analyser: AnalyserNode, dataArray: Uint8Array;
        let audioElement: HTMLAudioElement;
        let lowFreq = 0, midFreq = 0, highFreq = 0;
        let playing = false;
        let audioSource: MediaElementAudioSourceNode;
        
        let kickDetected = false;
        let kickEnergy = 0;
        const kickDecay = 0.8;
        const kickThreshold = 0.05;
        const kickSensitivity = 2.0;
        let kickImpactDuration = 0;
        
        let bandEnergies = Array(8).fill(0);
        let bandHistories = Array(8).fill(null).map(() => []);

        let beatTime = 0;
        let lastKickTime = 0;
        let beatInterval = 0;
        let beatPhase = 0;

        let transitionFactor = 0;
        let idleAnimation = 0;

        const settings = {
            baseSpeed: 1.0,
            idleSpeed: 0.1,
            bassReactivity: 0.4,
            midReactivity: 0.5,
            highReactivity: 0.4,
            kickReactivity: 0.6,
            bounceIntensity: 0.15,
            waveIntensity: 0.08,
            waveComplexity: 2.2,
            rippleIntensity: 0.25,
            lineThickness: 1.8,
            lineStraightness: 2.53,
            idleWaveHeight: 0.01,
            transitionSmoothness: 0.03,
            colorPreset: "Warm",
            bgColorDown: [40, 20, 10],
            bgColorUp: [20, 10, 5],
            color1In: [255, 200, 0],
            color1Out: [255, 100, 0],
            color2In: [255, 100, 100],
            color2Out: [200, 50, 50],
            color3In: [255, 150, 50],
            color3Out: [200, 100, 0],
            enableGrain: true,
            grainIntensity: 0.075,
            grainSpeed: 2.0,
            grainMean: 0.0,
            grainVariance: 0.5,
            grainBlendMode: "Addition",
            showGui: true,
            showDebug: false,
            resetColors: () => {
                applyColorPreset(settings.colorPreset);
            }
        };

        const colorPresets = {
            Default: { bgColorDown: [51, 25, 25], bgColorUp: [25, 25, 51], color1In: [255, 128, 0], color1Out: [255, 0, 0], color2In: [0, 128, 255], color2Out: [0, 0, 255], color3In: [0, 255, 128], color3Out: [0, 200, 100] },
            Neon: { bgColorDown: [10, 10, 20], bgColorUp: [5, 5, 15], color1In: [255, 0, 255], color1Out: [128, 0, 255], color2In: [0, 255, 255], color2Out: [0, 128, 255], color3In: [255, 255, 0], color3Out: [255, 128, 0] },
            Warm: { bgColorDown: [40, 20, 10], bgColorUp: [20, 10, 5], color1In: [255, 200, 0], color1Out: [255, 100, 0], color2In: [255, 100, 100], color2Out: [200, 50, 50], color3In: [255, 150, 50], color3Out: [200, 100, 0] },
            Cool: { bgColorDown: [10, 20, 30], bgColorUp: [5, 10, 20], color1In: [100, 200, 255], color1Out: [0, 100, 200], color2In: [100, 255, 200], color2Out: [0, 150, 100], color3In: [150, 200, 255], color3Out: [50, 100, 200] },
            Monochrome: { bgColorDown: [10, 10, 10], bgColorUp: [20, 20, 20], color1In: [200, 200, 200], color1Out: [150, 150, 150], color2In: [255, 255, 255], color2Out: [100, 100, 100], color3In: [180, 180, 180], color3Out: [120, 120, 120] },
            Cyberpunk: { bgColorDown: [20, 0, 40], bgColorUp: [0, 20, 40], color1In: [255, 0, 128], color1Out: [200, 0, 100], color2In: [0, 255, 128], color2Out: [0, 200, 100], color3In: [255, 255, 0], color3Out: [200, 200, 0] }
        };

        function applyColorPreset(presetName: keyof typeof colorPresets) {
            const preset = colorPresets[presetName];
            if (preset) {
                Object.assign(settings, preset);
                updateShaderColors();
                if (gui) {
                    gui.destroy();
                    setupGUI();
                }
            }
        }
        
        function updateShaderColors() {
          if (!shaderMaterial) return;
        
          shaderMaterial.uniforms.bgColorDown.value.set(settings.bgColorDown[0] / 255, settings.bgColorDown[1] / 255, settings.bgColorDown[2] / 255);
          shaderMaterial.uniforms.bgColorUp.value.set(settings.bgColorUp[0] / 255, settings.bgColorUp[1] / 255, settings.bgColorUp[2] / 255);
          shaderMaterial.uniforms.color1In.value.set(settings.color1In[0] / 255, settings.color1In[1] / 255, settings.color1In[2] / 255);
          shaderMaterial.uniforms.color1Out.value.set(settings.color1Out[0] / 255, settings.color1Out[1] / 255, settings.color1Out[2] / 255);
          shaderMaterial.uniforms.color2In.value.set(settings.color2In[0] / 255, settings.color2In[1] / 255, settings.color2In[2] / 255);
          shaderMaterial.uniforms.color2Out.value.set(settings.color2Out[0] / 255, settings.color2Out[1] / 255, settings.color2Out[2] / 255);
          shaderMaterial.uniforms.color3In.value.set(settings.color3In[0] / 255, settings.color3In[1] / 255, settings.color3In[2] / 255);
          shaderMaterial.uniforms.color3Out.value.set(settings.color3Out[0] / 255, settings.color3Out[1] / 255, settings.color3Out[2] / 255);
        }

        const vertexShaderSource = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;
            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;
            uniform float lowFreq;
            uniform float midFreq;
            uniform float highFreq;
            uniform bool isPlaying;
            uniform float transitionFactor;
            uniform float lineStraightness;
            uniform float idleAnimation;
            uniform float idleWaveHeight;
            uniform float kickEnergy;
            uniform float beatPhase;
            uniform float bounceEffect;
            uniform float baseSpeed;
            uniform float idleSpeed;
            uniform float bassReactivity;
            uniform float midReactivity;
            uniform float highReactivity;
            uniform float kickReactivity;
            uniform float bounceIntensity;
            uniform float waveIntensity;
            uniform float waveComplexity;
            uniform float rippleIntensity;
            uniform float lineThickness;
            uniform bool enableGrain;
            uniform float grainIntensity;
            uniform float grainSpeed;
            uniform float grainMean;
            uniform float grainVariance;
            uniform int grainBlendMode;
            uniform vec3 bgColorDown;
            uniform vec3 bgColorUp;
            uniform vec3 color1In;
            uniform vec3 color1Out;
            uniform vec3 color2In;
            uniform vec3 color2Out;
            uniform vec3 color3In;
            uniform vec3 color3Out;
            varying vec2 vUv;

            float squared(float value) { return value * value; }
            float smootherstep(float edge0, float edge1, float x) {
                float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
                return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
            }

            vec3 channel_mix(vec3 a, vec3 b, vec3 w) { return vec3(mix(a.r, b.r, w.r), mix(a.g, b.g, w.g), mix(a.b, b.b, w.b)); }
            float gaussian(float z, float u, float o) { return (1.0 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o)))); }
            vec3 screen(vec3 a, vec3 b, float w) { return mix(a, vec3(1.0) - (vec3(1.0) - a) * (vec3(1.0) - b), w); }
            vec3 overlay(vec3 a, vec3 b, float w) { return mix(a, channel_mix(2.0 * a * b, vec3(1.0) - 2.0 * (vec3(1.0) - a) * (vec3(1.0) - b), step(vec3(0.5), a)), w); }
            vec3 soft_light(vec3 a, vec3 b, float w) { return mix(a, pow(a, pow(vec3(2.0), 2.0 * (vec3(0.5) - b))), w); }

            vec3 applyGrain(vec3 color, vec2 uv) {
                if (!enableGrain) return color;
                float t = iTime * grainSpeed;
                float seed = dot(uv, vec2(12.9898, 78.233));
                float noise = fract(sin(seed) * 43758.5453 + t);
                noise = gaussian(noise, grainMean, grainVariance * grainVariance);
                vec3 grain = vec3(noise) * (1.0 - color);
                if (grainBlendMode == 0) { color += grain * grainIntensity; }
                else if (grainBlendMode == 1) { color = screen(color, grain, grainIntensity); }
                else if (grainBlendMode == 2) { color = overlay(color, grain, grainIntensity); }
                else if (grainBlendMode == 3) { color = soft_light(color, grain, grainIntensity); }
                else if (grainBlendMode == 4) { color = max(color, grain * grainIntensity); }
                return color;
            }

            float kickRipple(vec2 uv, float energy, float time) {
                float dist = distance(uv, vec2(0.5, 0.5));
                float width = 0.05;
                float speed = 1.2;
                float ripple1 = smootherstep(energy * speed * time - width, energy * speed * time, dist) * smootherstep(dist, dist + width, energy * speed * time + width);
                float ripple2 = smootherstep(energy * speed * (time - 0.2) - width, energy * speed * (time - 0.2), dist) * smootherstep(dist, dist + width, energy * speed * (time - 0.2) + width);
                return (ripple1 + ripple2 * 0.5) * energy * 0.7;
            }

            void mainImage(out vec4 fragColor, in vec2 fragCoord) {
                vec2 p = fragCoord.xy / iResolution.xy;
                vec3 bgCol = mix(bgColorDown, bgColorUp, clamp(p.y * 2.0, 0.0, 1.0));
                float speed = mix(idleSpeed, baseSpeed, transitionFactor);
                float ballVisibility = mix(0.8, 0.2, transitionFactor);
                float straightnessFactor = mix(1.0, lineStraightness, transitionFactor);
                float idleWave = idleWaveHeight * sin(p.x * 5.0 + idleAnimation * 0.2);
                float bassPulse = squared(lowFreq) * bassReactivity * transitionFactor;
                float midPulse = squared(midFreq) * midReactivity * transitionFactor;
                float highPulse = squared(highFreq) * highReactivity * transitionFactor;
                float kickPulse = squared(kickEnergy) * kickReactivity * 1.5 * transitionFactor;
                float bounce = bounceEffect * bounceIntensity * transitionFactor;
                float curveIntensity = mix(idleWaveHeight, 0.05 + waveIntensity * (bassPulse + kickPulse * 0.7), transitionFactor);
                float curveSpeed = speed;
                float curve = curveIntensity * sin((6.25 * p.x) + (curveSpeed * iTime));
                float ripple = rippleIntensity * kickRipple(p, kickEnergy, mod(iTime, 10.0)) * transitionFactor;
                float audioWave = mix(0.0, (0.1 * sin(p.x * 20.0 * waveComplexity) * bassPulse + 0.08 * sin(p.x * 30.0 * waveComplexity) * midPulse + 0.05 * sin(p.x * 50.0 * waveComplexity) * highPulse) / straightnessFactor, transitionFactor);
                float lineAFreq = 40.0 * waveComplexity + 80.0 * bassPulse + 90.0 * kickPulse;
                float lineASpeed = 1.5 * speed + 6.0 * bassPulse + 6.0 * kickPulse;
                float lineAWave = mix(idleWave, (0.01 + 0.05 * bassPulse + 0.1 * kickPulse) / straightnessFactor, transitionFactor);
                float kickWaveEffect = 0.0;
                if (kickEnergy > 0.1) { kickWaveEffect = kickEnergy * 0.3 * sin(15.0 * (p.x - iTime * 0.5)) * transitionFactor; }
                float lineAOffset = bassPulse * 0.3 * sin(p.x * 10.0 - iTime * 2.0) + kickWaveEffect * 0.7;
                float lineAY = 0.5;
                float lineAActive = lineAY + curve + audioWave + lineAWave * sin((lineAFreq * p.x) + (-lineASpeed * iTime)) + lineAOffset - bounce;
                float lineAIdle = lineAY + idleWave;
                float lineAAnim = mix(lineAIdle, lineAActive, transitionFactor);
                float lineAThickness = lineThickness * (1.0 + bassPulse * 0.4 + kickPulse * 0.8);
                float lineADist = distance(p.y, lineAAnim) * (2.0 / lineAThickness);
                float lineAShape = smootherstep(1.0 - clamp(lineADist, 0.0, 1.0), 1.0, 0.99);
                vec3 kickColor = vec3(1.0, 0.7, 0.3);
                vec3 enhancedColor1In = mix(color1In, kickColor, kickEnergy * 0.6 * transitionFactor);
                vec3 enhancedColor1Out = mix(color1Out, vec3(1.0, 0.5, 0.0), kickEnergy * 0.4 * transitionFactor);
                vec3 lineACol = (1.0 - lineAShape) * vec3(mix(enhancedColor1In, enhancedColor1Out, lineAShape));
                float ballASize = 0.5 + 0.4 * bassPulse + kickEnergy * 1.2 * transitionFactor;
                float ballAX = 0.2 + 0.1 * sin(iTime * 0.2 * speed) * midPulse;
                float ballADist = distance(p, vec2(ballAX, lineAAnim));
                float ballAShape = smootherstep(1.0 - clamp(ballADist * ballASize, 0.0, 1.0), 1.0, 0.99);
                vec3 ballACol = (1.0 - ballAShape) * vec3(mix(enhancedColor1In, enhancedColor1Out, ballAShape)) * mix(1.0, ballVisibility, transitionFactor);
                float lineBFreq = 50.0 * waveComplexity + 100.0 * midPulse;
                float lineBSpeed = 2.0 * speed + 8.0 * midPulse;
                float lineBWave = mix(idleWave * 0.8, (0.01 + 0.05 * midPulse) / straightnessFactor, transitionFactor);
                float lineBOffset = midPulse * 0.2 * sin(p.x * 15.0 - iTime * 1.5) + kickEnergy * 0.1 * sin(p.x * 25.0 - iTime * 3.0) * transitionFactor;
                float lineBY = 0.5;
                float lineBActive = lineBY + curve - audioWave + lineBWave * sin((lineBFreq * p.x) + (lineBSpeed * iTime)) * sin(lineBSpeed * iTime) + lineBOffset - bounce * 0.5;
                float lineBIdle = lineBY + idleWave * 0.8;
                float lineBAnim = mix(lineBIdle, lineBActive, transitionFactor);
                float lineBThickness = lineThickness * (1.0 + midPulse * 0.3 + kickEnergy * 0.3 * transitionFactor);
                float lineBDist = distance(p.y, lineBAnim) * (2.0 / lineBThickness);
                float lineBShape = smootherstep(1.0 - clamp(lineBDist, 0.0, 1.0), 1.0, 0.99);
                vec3 enhancedColor2In = mix(color2In, vec3(1.0, 0.5, 0.5), kickEnergy * 0.3 * transitionFactor);
                vec3 lineBCol = (1.0 - lineBShape) * vec3(mix(enhancedColor2In, color2Out, lineBShape));
                float ballBSize = 0.5 + 0.4 * highPulse + kickEnergy * 0.3 * transitionFactor;
                float ballBX = 0.8 - 0.1 * sin(iTime * 0.3 * speed) * midPulse;
                float ballBDist = distance(p, vec2(ballBX, lineBAnim));
                float ballBShape = smootherstep(1.0 - clamp(ballBDist * ballBSize, 0.0, 1.0), 1.0, 0.99);
                vec3 ballBCol = (1.0 - ballBShape) * vec3(mix(enhancedColor2In, color2Out, ballBShape)) * mix(1.0, ballVisibility, transitionFactor);
                float lineCFreq = 60.0 * waveComplexity + 120.0 * highPulse;
                float lineCSpeed = 2.5 * speed + 10.0 * highPulse;
                float lineCWave = mix(idleWave * 1.2, (0.01 + 0.05 * highPulse) / straightnessFactor, transitionFactor);
                float lineCOffset = highPulse * 0.15 * sin(p.x * 20.0 - iTime * 1.0);
                float lineCY = 0.5;
                float lineCActive = lineCY + curve * 0.7 - audioWave * 0.5 + lineCWave * sin((lineCFreq * p.x) + (lineCSpeed * iTime)) * sin(lineCSpeed * (iTime + 0.1)) + lineCOffset - bounce * 0.3;
                float lineCIdle = lineCY + idleWave * 1.2;
                float lineCAnim = mix(lineCIdle, lineCActive, transitionFactor);
                float lineCThickness = lineThickness * (1.0 + highPulse * 0.2 + kickEnergy * 0.1 * transitionFactor);
                float lineCDist = distance(p.y, lineCAnim) * (2.0 / lineCThickness);
                float lineCShape = smootherstep(1.0 - clamp(lineCDist, 0.0, 1.0), 1.0, 0.99);
                vec3 lineCCol = (1.0 - lineCShape) * vec3(mix(color3In, color3Out, lineCShape));
                float ballCSize = 0.5 + 0.4 * highPulse + kickEnergy * 0.1 * transitionFactor;
                float ballCX = 0.5 + 0.15 * sin(iTime * 0.4 * speed) * highPulse;
                float ballCDist = distance(p, vec2(ballCX, lineCAnim));
                float ballCShape = smootherstep(1.0 - clamp(ballCDist * ballCSize, 0.0, 1.0), 1.0, 0.99);
                vec3 ballCCol = (1.0 - ballCShape) * vec3(mix(color3In, color3Out, ballCShape)) * mix(1.0, ballVisibility, transitionFactor);
                bgCol = mix(bgCol, mix(bgCol, vec3(1.0), 0.2), kickEnergy * 0.4 * transitionFactor);
                vec3 rippleCol = vec3(1.0, 0.8, 0.4) * ripple * transitionFactor;
                vec3 fcolor = bgCol + lineACol + lineBCol + lineCCol + ballACol + ballBCol + ballCCol + rippleCol;
                fcolor = applyGrain(fcolor, p);
                fragColor = vec4(fcolor, 1.0);
            }

            void main() {
                vec2 fragCoord = vUv * iResolution;
                vec4 fragColor;
                mainImage(fragColor, fragCoord);
                gl_FragColor = fragColor;
            }
        `;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            camera.position.z = 1;
            renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            shaderMaterial = new THREE.ShaderMaterial({
                vertexShader: vertexShaderSource,
                fragmentShader: fragmentShaderSource,
                uniforms: {
                    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    iTime: { value: 0 },
                    iMouse: { value: new THREE.Vector2(0.5, 0.5) },
                    lowFreq: { value: 0 },
                    midFreq: { value: 0 },
                    highFreq: { value: 0 },
                    isPlaying: { value: false },
                    transitionFactor: { value: 0 },
                    lineStraightness: { value: settings.lineStraightness },
                    idleAnimation: { value: 0 },
                    idleWaveHeight: { value: settings.idleWaveHeight },
                    kickEnergy: { value: 0 },
                    beatPhase: { value: 0 },
                    bounceEffect: { value: 0 },
                    baseSpeed: { value: settings.baseSpeed },
                    idleSpeed: { value: settings.idleSpeed },
                    bassReactivity: { value: settings.bassReactivity },
                    midReactivity: { value: settings.midReactivity },
                    highReactivity: { value: settings.highReactivity },
                    kickReactivity: { value: settings.kickReactivity },
                    bounceIntensity: { value: settings.bounceIntensity },
                    waveIntensity: { value: settings.waveIntensity },
                    waveComplexity: { value: settings.waveComplexity },
                    rippleIntensity: { value: settings.rippleIntensity },
                    lineThickness: { value: settings.lineThickness },
                    enableGrain: { value: settings.enableGrain },
                    grainIntensity: { value: settings.grainIntensity },
                    grainSpeed: { value: settings.grainSpeed },
                    grainMean: { value: settings.grainMean },
                    grainVariance: { value: settings.grainVariance },
                    grainBlendMode: { value: 0 },
                    bgColorDown: { value: new THREE.Vector3(settings.bgColorDown[0] / 255, settings.bgColorDown[1] / 255, settings.bgColorDown[2] / 255) },
                    bgColorUp: { value: new THREE.Vector3(settings.bgColorUp[0] / 255, settings.bgColorUp[1] / 255, settings.bgColorUp[2] / 255) },
                    color1In: { value: new THREE.Vector3(settings.color1In[0] / 255, settings.color1In[1] / 255, settings.color1In[2] / 255) },
                    color1Out: { value: new THREE.Vector3(settings.color1Out[0] / 255, settings.color1Out[1] / 255, settings.color1Out[2] / 255) },
                    color2In: { value: new THREE.Vector3(settings.color2In[0] / 255, settings.color2In[1] / 255, settings.color2In[2] / 255) },
                    color2Out: { value: new THREE.Vector3(settings.color2Out[0] / 255, settings.color2Out[1] / 255, settings.color2Out[2] / 255) },
                    color3In: { value: new THREE.Vector3(settings.color3In[0] / 255, settings.color3In[1] / 255, settings.color3In[2] / 255) },
                    color3Out: { value: new THREE.Vector3(settings.color3Out[0] / 255, settings.color3Out[1] / 255, settings.color3Out[2] / 255) },
                }
            });

            const geometry = new THREE.PlaneGeometry(2, 2);
            const mesh = new THREE.Mesh(geometry, shaderMaterial);
            scene.add(mesh);
            setupGUI();
            setupEventListeners();
            setupAudio();
            animate();
        }

        function setupGUI() {
            if (document.querySelector('.dg.main')) {
                document.querySelector('.dg.main')?.remove();
            }
            gui = new GUI({ width: 300 });

            const animationFolder = gui.addFolder("Animation");
            animationFolder.add(settings, "baseSpeed", 0.1, 3.0).onChange((value) => { shaderMaterial.uniforms.baseSpeed.value = value; });
            animationFolder.add(settings, "idleSpeed", 0.01, 0.5).onChange((value) => { shaderMaterial.uniforms.idleSpeed.value = value; });
            
            const audioFolder = gui.addFolder("Audio Reactivity");
            audioFolder.add(settings, "bassReactivity", 0.0, 3.0).onChange((value) => { shaderMaterial.uniforms.bassReactivity.value = value; });
            audioFolder.add(settings, "midReactivity", 0.0, 3.0).onChange((value) => { shaderMaterial.uniforms.midReactivity.value = value; });
            audioFolder.add(settings, "highReactivity", 0.0, 3.0).onChange((value) => { shaderMaterial.uniforms.highReactivity.value = value; });
            
            const kickFolder = gui.addFolder("Kick/Beat Effects");
            kickFolder.add(settings, "kickReactivity", 0.0, 3.0).name("Kick Reactivity").onChange((value) => { shaderMaterial.uniforms.kickReactivity.value = value; });
            kickFolder.add(settings, "bounceIntensity", 0.0, 1.0).name("Bounce Intensity").onChange((value) => { shaderMaterial.uniforms.bounceIntensity.value = value; });
            kickFolder.add(settings, "rippleIntensity", 0.0, 2.0).name("Ripple Intensity").onChange((value) => { shaderMaterial.uniforms.rippleIntensity.value = value; });

            const transitionFolder = gui.addFolder("Transition Settings");
            transitionFolder.add(settings, "idleWaveHeight", 0.0, 0.1).name("Idle Wave Height").onChange((value) => { shaderMaterial.uniforms.idleWaveHeight.value = value; });
            transitionFolder.add(settings, "transitionSmoothness", 0.01, 0.1).name("Transition Speed");

            const visualFolder = gui.addFolder("Visual Settings");
            visualFolder.add(settings, "waveIntensity", 0.01, 1.0).onChange((value) => { shaderMaterial.uniforms.waveIntensity.value = value; });
            visualFolder.add(settings, "waveComplexity", 0.5, 3.0).onChange((value) => { shaderMaterial.uniforms.waveComplexity.value = value; });
            visualFolder.add(settings, "lineThickness", 0.5, 3.0).onChange((value) => { shaderMaterial.uniforms.lineThickness.value = value; });
            visualFolder.add(settings, "lineStraightness", 0.1, 5.0).name("Line Straightness").onChange((value) => { shaderMaterial.uniforms.lineStraightness.value = value; });

            const colorFolder = gui.addFolder("Color Settings");
            colorFolder.add(settings, "colorPreset", Object.keys(colorPresets)).onChange(applyColorPreset as any);
            colorFolder.addColor(settings, "bgColorDown").onChange(updateShaderColors);
            colorFolder.addColor(settings, "bgColorUp").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color1In").name("Bass Line In").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color1Out").name("Bass Line Out").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color2In").name("Mid Line In").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color2Out").name("Mid Line Out").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color3In").name("High Line In").onChange(updateShaderColors);
            colorFolder.addColor(settings, "color3Out").name("High Line Out").onChange(updateShaderColors);
            colorFolder.add(settings, "resetColors");

            const grainFolder = gui.addFolder("Film Grain");
            grainFolder.add(settings, "enableGrain").onChange((value) => { shaderMaterial.uniforms.enableGrain.value = value; });
            grainFolder.add(settings, "grainIntensity", 0.0, 0.3).onChange((value) => { shaderMaterial.uniforms.grainIntensity.value = value; });
            grainFolder.add(settings, "grainSpeed", 0.1, 5.0).onChange((value) => { shaderMaterial.uniforms.grainSpeed.value = value; });
            grainFolder.add(settings, "grainMean", -0.5, 0.5).onChange((value) => { shaderMaterial.uniforms.grainMean.value = value; });
            grainFolder.add(settings, "grainVariance", 0.1, 1.0).onChange((value) => { shaderMaterial.uniforms.grainVariance.value = value; });
            grainFolder.add(settings, "grainBlendMode", ["Addition", "Screen", "Overlay", "Soft Light", "Lighten-Only"]).onChange((value) => {
                const modeMap = { "Addition": 0, "Screen": 1, "Overlay": 2, "Soft Light": 3, "Lighten-Only": 4 };
                shaderMaterial.uniforms.grainBlendMode.value = modeMap[value as keyof typeof modeMap];
            });

            gui.close();
        }

        function setupEventListeners() {
            const onResize = () => {
                renderer.setSize(window.innerWidth, window.innerHeight);
                shaderMaterial.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
            };
            window.addEventListener("resize", onResize);
            playButtonRef.current?.addEventListener("click", toggleAudio);
            
            return () => {
                window.removeEventListener('resize', onResize);
                playButtonRef.current?.removeEventListener('click', toggleAudio);
            }
        }

        function setupAudio() {
            audioElement = new Audio();
            audioElement.crossOrigin = "anonymous";
            audioElement.preload = "auto";
            audioElement.src = "https://assets.codepen.io/7558/kosikk-slow-motion.ogg";
            audioElement.loop = true;
        }

        function toggleAudio() {
            if (!playing) {
                if (!audioContext) {
                    audioContext = new (window.AudioContext)();
                    analyser = audioContext.createAnalyser();
                    analyser.fftSize = 1024;
                    dataArray = new Uint8Array(analyser.frequencyBinCount);
                    audioSource = audioContext.createMediaElementSource(audioElement);
                    audioSource.connect(analyser);
                    analyser.connect(audioContext.destination);
                }
                audioContext.resume().then(() => {
                    audioElement.play().catch(e => console.error("Error playing audio:", e));
                });
                if(playButtonRef.current) playButtonRef.current.textContent = "STOP";
                playing = true;
                shaderMaterial.uniforms.isPlaying.value = true;
                beatTime = 0; lastKickTime = 0; beatInterval = 0;
            } else {
                audioElement.pause();
                if(playButtonRef.current) playButtonRef.current.textContent = "PLAY";
                playing = false;
                shaderMaterial.uniforms.isPlaying.value = false;
            }
        }
        
        function updateFrequencies() {
            if (!playing || !analyser) return;
            analyser.getByteFrequencyData(dataArray);

            const bands = [ { range: [1, 4] }, { range: [4, 9] }, { range: [9, 20] }, { range: [20, 40] }, { range: [40, 80] }, { range: [80, 160] }, { range: [160, 300] }, { range: [300, 500] } ];
            
            for (let i = 0; i < bands.length; i++) {
                const bandSlice = dataArray.slice(bands[i].range[0], bands[i].range[1]);
                const bandAvg = getWeightedAverage(bandSlice);
                bandEnergies[i] = bandAvg;
                bandHistories[i].unshift(bandAvg);
                if (bandHistories[i].length > 4) bandHistories[i].pop();
            }

            const kickAvg = bandEnergies[1];
            const kickHistory = bandHistories[1];
            const recentKickAvg = kickHistory.slice(1).reduce((sum, val) => sum + val, 0) / (kickHistory.length - 1 || 1);
            const kickJump = kickAvg - recentKickAvg;
            
            if (kickJump > kickThreshold * 1.2 && kickAvg > 0.15 && (!kickDetected || performance.now() - lastKickTime > 150)) {
                kickDetected = true;
                kickEnergy = Math.min(1.0, kickAvg * kickSensitivity);
                kickImpactDuration = 10;
                const now = performance.now();
                if (lastKickTime > 0) {
                    const newInterval = now - lastKickTime;
                    if (newInterval > 200 && newInterval < 2000) { beatInterval = beatInterval * 0.7 + newInterval * 0.3; }
                }
                lastKickTime = now;
                beatTime = 0;
            } else {
                kickEnergy *= kickDecay;
                if (kickEnergy < 0.05) kickDetected = false;
                if (kickImpactDuration > 0) kickImpactDuration--;
            }

            if (beatInterval > 0) {
                beatTime += 16.67;
                beatPhase = (beatTime % beatInterval) / beatInterval;
            }

            let bounceValue = 0;
            if (kickImpactDuration > 0) { bounceValue = Math.pow(kickImpactDuration / 10, 0.6) * 0.03; }
            bounceValue += kickEnergy * 0.025;

            const combinedBass = (bandEnergies[1] * 1.2 + bandEnergies[2]) / 2.2;
            lowFreq = (combinedBass > lowFreq * 1.1) ? (lowFreq * 0.3 + combinedBass * 0.7) : (lowFreq * 0.85 + combinedBass * 0.15);
            
            const combinedMid = (bandEnergies[3] + bandEnergies[4]) / 2;
            midFreq = (combinedMid > midFreq * 1.1) ? (midFreq * 0.4 + combinedMid * 0.6) : (midFreq * 0.8 + combinedMid * 0.2);
            
            const combinedHigh = (bandEnergies[5] + bandEnergies[6] + bandEnergies[7]) / 3;
            highFreq = (combinedHigh > highFreq * 1.05) ? (highFreq * 0.5 + combinedHigh * 0.5) : (highFreq * 0.8 + combinedHigh * 0.2);

            lowFreq = Math.max(lowFreq, kickEnergy * 0.6);

            shaderMaterial.uniforms.lowFreq.value = lowFreq;
            shaderMaterial.uniforms.midFreq.value = midFreq;
            shaderMaterial.uniforms.highFreq.value = highFreq;
            shaderMaterial.uniforms.kickEnergy.value = kickEnergy;
            shaderMaterial.uniforms.beatPhase.value = beatPhase;
            shaderMaterial.uniforms.bounceEffect.value = bounceValue;
        }

        function getWeightedAverage(array: Uint8Array) {
            if (array.length === 0) return 0;
            let sum = 0, weight = 0, maxVal = 0;
            for (let i = 0; i < array.length; i++) {
                const value = array[i] / 255;
                maxVal = Math.max(maxVal, value);
                const emphasized = Math.pow(value, 1.5);
                sum += emphasized;
                weight++;
            }
            return (sum / weight) * 0.7 + maxVal * 0.3;
        }
        
        function animate() {
            if (!renderer) return;
            requestAnimationFrame(animate);
            time += 0.01;
            shaderMaterial.uniforms.iTime.value = time;
            idleAnimation += 0.01;
            shaderMaterial.uniforms.idleAnimation.value = idleAnimation;
            const transitionRate = settings.transitionSmoothness;
            if (playing && transitionFactor < 1.0) {
                transitionFactor = Math.min(transitionFactor + transitionRate, 1.0);
            } else if (!playing && transitionFactor > 0.0) {
                transitionFactor = Math.max(transitionFactor - transitionRate, 0.0);
                if (transitionFactor === 0) { lowFreq = 0; midFreq = 0; highFreq = 0; kickEnergy = 0; shaderMaterial.uniforms.lowFreq.value = 0; shaderMaterial.uniforms.midFreq.value = 0; shaderMaterial.uniforms.highFreq.value = 0; shaderMaterial.uniforms.kickEnergy.value = 0; shaderMaterial.uniforms.bounceEffect.value = 0; }
            }
            shaderMaterial.uniforms.transitionFactor.value = transitionFactor;
            updateFrequencies();
            renderer.render(scene, camera);
            frameCount++;
            const now = performance.now();
            if (now - lastTime >= 1000) {
                fpsElement.textContent = `FPS: ${Math.round((frameCount * 1000) / (now - lastTime))}`;
                frameCount = 0;
                lastTime = now;
            }
        }
        
        init();
        applyColorPreset(settings.colorPreset);
        
        const resizeListener = () => {
             if(renderer && shaderMaterial) {
                renderer.setSize(window.innerWidth, window.innerHeight);
                shaderMaterial.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
             }
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            if (gui) gui.destroy();
            if (renderer) renderer.dispose();
            if(audioContext) audioContext.close();
            window.removeEventListener('resize', resizeListener);
        }

    }, []);

    return (
        <div ref={containerRef} id="canvas-container">
            <canvas ref={canvasRef} id="visualizer-canvas" />
            <div id="controls">
                <button ref={playButtonRef} id="playButton">PLAY</button>
            </div>
            <div ref={fpsRef} id="fps">FPS: 0</div>
        </div>
    );
};

export default AudioVisualizerBackground;
