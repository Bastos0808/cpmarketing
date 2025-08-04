"use client";

import React, { useRef, useEffect } from 'react';

const WarpSpeedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext("2d");
        if (!c) return;

        let numStars = 1900;
        const radius = '0.' + Math.floor(Math.random() * 9) + 1;
        let focalLength = canvas.width * 2;
        let warp = 0; // Set to 0 for the initial moving stars effect without trails
        let centerX: number, centerY: number;

        let stars: { x: number, y: number, z: number, o: string }[] = [];

        const initializeStars = () => {
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            stars = [];
            for (let i = 0; i < numStars; i++) {
                const star = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    o: '0.' + Math.floor(Math.random() * 99) + 1
                };
                stars.push(star);
            }
        };

        const moveStars = () => {
            for (let i = 0; i < numStars; i++) {
                let star = stars[i];
                star.z--;

                if (star.z <= 0) {
                    star.z = canvas.width;
                }
            }
        };

        const drawStars = () => {
            if (!c) return;
            let pixelX, pixelY, pixelRadius;

            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initializeStars();
            }

            if (warp === 0) {
                c.fillStyle = "rgba(0,10,20,1)";
                c.fillRect(0, 0, canvas.width, canvas.height);
            }

            c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
            for (let i = 0; i < numStars; i++) {
                const star = stars[i];

                pixelX = (star.x - centerX) * (focalLength / star.z);
                pixelX += centerX;
                pixelY = (star.y - centerY) * (focalLength / star.z);
                pixelY += centerY;
                pixelRadius = 1 * (focalLength / star.z);

                c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
                c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
            }
        };
        
        const executeFrame = () => {
            moveStars();
            drawStars();
            animationFrameId.current = requestAnimationFrame(executeFrame);
        };

        const handleResize = () => {
            if(canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                focalLength = canvas.width * 2;
                initializeStars();
            }
        };

        window.addEventListener('resize', handleResize);
        
        initializeStars();
        executeFrame();

        return () => {
            if(animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div id="warp-canvas-container">
            <canvas ref={canvasRef} id="warp-canvas" />
        </div>
    );
};

export default WarpSpeedBackground;
