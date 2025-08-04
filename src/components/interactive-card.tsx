"use client";

import React, { useRef, useEffect, ReactNode } from 'react';

type InteractiveCardProps = {
    children: ReactNode;
};

export const InteractiveCard = ({ children }: InteractiveCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const $card = cardRef.current;
        if (!$card) return;

        const cardUpdate = (e: PointerEvent) => {
            const position = pointerPositionRelativeToElement($card, e);
            const [px, py] = position.pixels;
            const [dx, dy] = distanceFromCenter($card, px, py);
            const edge = closenessToEdge($card, px, py);
            const angle = angleFromPointerEvent($card, dx, dy);

            $card.style.setProperty('--pointer-x', `${round(position.percent[0])}%`);
            $card.style.setProperty('--pointer-y', `${round(position.percent[1])}%`);
            $card.style.setProperty('--pointer-°', `${round(angle)}deg`);
            $card.style.setProperty('--pointer-d', `${round(edge * 100)}`);

            $card.classList.remove('animating');
        };

        const playAnimation = () => {
            const angleStart = 310;
            const angleEnd = 525;

            $card.style.setProperty('--pointer-°', `${angleStart}deg`);
            $card.classList.add('animating');

            animateNumber({
                ease: easeOutCubic,
                duration: 500,
                onUpdate: (v) => {
                    $card.style.setProperty('--pointer-d', v.toString());
                }
            });

            animateNumber({
                ease: easeInCubic,
                delay: 0,
                duration: 1500,
                endValue: 50,
                onUpdate: (v) => {
                    const d = (angleEnd - angleStart) * (v / 100) + angleStart;
                    $card.style.setProperty('--pointer-°', `${d}deg`);
                }
            });

            animateNumber({
                ease: easeOutCubic,
                delay: 1500,
                duration: 2250,
                startValue: 50,
                endValue: 100,
                onUpdate: (v) => {
                    const d = (angleEnd - angleStart) * (v / 100) + angleStart;
                    $card.style.setProperty('--pointer-°', `${d}deg`);
                }
            });

            animateNumber({
                ease: easeInCubic,
                duration: 1500,
                delay: 2500,
                startValue: 100,
                endValue: 0,
                onUpdate: (v) => {
                    $card.style.setProperty('--pointer-d', v.toString());
                },
                onEnd: () => {
                    $card.classList.remove('animating');
                }
            });
        };

        const timeoutId = setTimeout(playAnimation, 500);
        $card.addEventListener("pointermove", cardUpdate);

        return () => {
            clearTimeout(timeoutId);
            $card.removeEventListener("pointermove", cardUpdate);
        };
    }, []);

    return (
        <div ref={cardRef} className="card-interactive-wrapper h-full">
            {children}
        </div>
    );
};

// Helper functions
const centerOfElement = ($el: HTMLElement) => {
    const { width, height } = $el.getBoundingClientRect();
    return [width / 2, height / 2];
};

const pointerPositionRelativeToElement = ($el: HTMLElement, e: PointerEvent) => {
    const pos = [e.clientX, e.clientY];
    const { left, top, width, height } = $el.getBoundingClientRect();
    const x = pos[0] - left;
    const y = pos[1] - top;
    const px = clamp((100 / width) * x);
    const py = clamp((100 / height) * y);
    return { pixels: [x, y], percent: [px, py] };
};

const angleFromPointerEvent = ($el: HTMLElement, dx: number, dy: number) => {
    let angleRadians = 0;
    let angleDegrees = 0;
    if (dx !== 0 || dy !== 0) {
        angleRadians = Math.atan2(dy, dx);
        angleDegrees = angleRadians * (180 / Math.PI) + 90;
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }
    }
    return angleDegrees;
};

const distanceFromCenter = ($card: HTMLElement, x: number, y: number) => {
    const [cx, cy] = centerOfElement($card);
    return [x - cx, y - cy];
};

const closenessToEdge = ($card: HTMLElement, x: number, y: number) => {
    const [cx, cy] = centerOfElement($card);
    const [dx, dy] = distanceFromCenter($card, x, y);
    let k_x = Infinity;
    let k_y = Infinity;
    if (dx !== 0) {
        k_x = cx / Math.abs(dx);
    }
    if (dy !== 0) {
        k_y = cy / Math.abs(dy);
    }
    return clamp((1 / Math.min(k_x, k_y)), 0, 1);
};

const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

function easeOutCubic(x: number) {
    return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x: number) {
    return x * x * x;
}

type AnimateNumberOptions = {
    startValue?: number;
    endValue?: number;
    duration?: number;
    delay?: number;
    onUpdate?: (v: number) => void;
    ease?: (t: number) => number;
    onStart?: () => void;
    onEnd?: () => void;
};

function animateNumber(options: AnimateNumberOptions) {
    const {
        startValue = 0,
        endValue = 100,
        duration = 1000,
        delay = 0,
        onUpdate = () => {},
        ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
        onStart = () => {},
        onEnd = () => {},
    } = options;

    const startTime = performance.now() + delay;

    function update() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1);
        const easedValue = startValue + (endValue - startValue) * ease(t);

        onUpdate(easedValue);

        if (t < 1) {
            requestAnimationFrame(update);
        } else if (t >= 1) {
            onEnd();
        }
    }

    setTimeout(() => {
        onStart();
        requestAnimationFrame(update);
    }, delay);
}
