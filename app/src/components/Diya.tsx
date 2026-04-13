import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Diya() {
    const diyaRef = useRef<SVGSVGElement>(null);
    const flameRef = useRef<SVGEllipseElement>(null);
    const [colors, setColors] = useState({
        bowl: '#8B4513',
        flameStart: '#ff6b35',
        flameMid: '#f29066',
        flameEnd: '#ffd900'
    });

    useEffect(() => {
        // Animation loop for changing structure/colors
        const interval = setInterval(() => {
            // Randomize slightly the flame colors for "different structure" effect
            const r = Math.floor(Math.random() * 50);
            setColors({
                bowl: '#8B4513',
                flameStart: `#ff${60 + r}35`,
                flameMid: `#f2${90 + Math.floor(Math.random() * 20)}66`,
                flameEnd: '#ffd900'
            });

            // Animate structure change (scale/skew)
            if (diyaRef.current) {
                gsap.to(diyaRef.current, {
                    scale: 1 + Math.random() * 0.1,
                    rotation: Math.random() * 5 - 2.5,
                    duration: 1.5,
                    ease: 'sine.inOut'
                });
            }
        }, 2000);

        const ctx = gsap.context(() => {
            // Continuous flame flicker
            if (flameRef.current) {
                gsap.to(flameRef.current, {
                    scaleY: 1.2,
                    skewX: -3,
                    duration: 0.1 + Math.random() * 0.1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                });
            }

            // Continuous glow pulse
            gsap.to('.diya-glow-hero', {
                opacity: 0.8,
                scale: 1.2,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, diyaRef);

        return () => {
            clearInterval(interval);
            ctx.revert();
        };
    }, []);

    return (
        <div className="relative w-32 h-20 md:w-40 md:h-24">
            <svg
                ref={diyaRef}
                viewBox="0 0 200 120"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(242,144,102,0.4)]"
            >
                {/* Glow Effect */}
                <circle
                    className="diya-glow-hero"
                    cx="100"
                    cy="60"
                    r="50"
                    fill="url(#glowGradientHero)"
                    opacity="0.5"
                />

                {/* Diya Bowl */}
                <path
                    d="M40 60 Q40 90 100 90 Q160 90 160 60 Q160 50 150 55 Q100 70 50 55 Q40 50 40 60"
                    fill="url(#diyaGradientHero)"
                    stroke="#f29066"
                    strokeWidth="2"
                />

                {/* Oil Level */}
                <path
                    d="M45 62 Q45 75 100 75 Q155 75 155 62 Q155 60 150 62 Q100 72 50 62 Q45 60 45 62"
                    fill="#ffd900"
                    opacity="0.8"
                />

                {/* Flame */}
                <g transform="translate(100, 45)">
                    <ellipse
                        ref={flameRef}
                        cx="0"
                        cy="0"
                        rx="8"
                        ry="20"
                        fill="url(#flameGradientHero)"
                        transform-origin="center bottom"
                    />
                    <ellipse
                        cx="0"
                        cy="5"
                        rx="4"
                        ry="10"
                        fill="#fff"
                        opacity="0.8"
                    />
                </g>

                {/* Gradients */}
                <defs>
                    <linearGradient id="diyaGradientHero" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={colors.bowl} />
                        <stop offset="50%" stopColor="#A0522D" />
                        <stop offset="100%" stopColor="#654321" />
                    </linearGradient>
                    <linearGradient id="flameGradientHero" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={colors.flameStart} />
                        <stop offset="50%" stopColor={colors.flameMid} />
                        <stop offset="100%" stopColor={colors.flameEnd} />
                    </linearGradient>
                    <radialGradient id="glowGradientHero">
                        <stop offset="0%" stopColor="#f29066" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#ffd900" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
