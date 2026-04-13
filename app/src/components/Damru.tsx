import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Damru() {
    const damruRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Shake animation
            gsap.to(damruRef.current, {
                rotation: 15,
                duration: 0.1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // String/Bead animation (simulated by scaling/moving parts if complex, or just the whole shake)
            // For a simple SVG, the rotation covers the "playing" effect.
        }, damruRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-32 h-32 flex items-center justify-center">
            <svg
                ref={damruRef}
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(242,144,102,0.4)]"
            >
                {/* Damru Body */}
                {/* Top Triangle */}
                <path
                    d="M30 30 L70 30 L50 50 Z"
                    fill="#3d2418"
                    stroke="#f29066"
                    strokeWidth="2"
                />
                {/* Bottom Triangle */}
                <path
                    d="M30 70 L70 70 L50 50 Z"
                    fill="#3d2418"
                    stroke="#f29066"
                    strokeWidth="2"
                />

                {/* Center Strings */}
                <line x1="40" y1="40" x2="60" y2="40" stroke="#f29066" strokeWidth="1" />
                <line x1="42" y1="60" x2="58" y2="60" stroke="#f29066" strokeWidth="1" />

                {/* Beads (Static representation, animated by parent rotation) */}
                <circle cx="20" cy="50" r="3" fill="#ffd900">
                    <animateMotion path="M 0 0 Q 10 -10 20 0" dur="0.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="50" r="3" fill="#ffd900">
                    <animateMotion path="M 0 0 Q -10 10 -20 0" dur="0.2s" repeatCount="indefinite" />
                </circle>

                {/* Strings holding beads */}
                <line x1="50" y1="50" x2="20" y2="50" stroke="#8B4513" strokeWidth="1" opacity="0.5" />
                <line x1="50" y1="50" x2="80" y2="50" stroke="#8B4513" strokeWidth="1" opacity="0.5" />
            </svg>
        </div>
    );
}
