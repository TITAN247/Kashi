import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useJourneyStore } from '@/store/journeyStore';
import Damru from '@/components/Damru';
import { playDamruSound } from '@/lib/audioUtils';

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { setPhase, setLoadingComplete } = useJourneyStore();
  const [progress, setProgress] = useState(0);

  // Play Damru sound during loading
  useEffect(() => {
    const stopDamru = playDamruSound(0.2);
    return () => stopDamru();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline();

      // Text reveal animation
      tl.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo(
          subTextRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.6'
        );

      // Progress animation
      const progressTl = gsap.timeline({
        onUpdate: () => {
          setProgress(Math.round(gsap.getProperty(progressRef.current, '--progress') as number || 0));
        },
        onComplete: () => {
          // Exit animation
          gsap.to(containerRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 1.5,
            ease: 'power3.inOut',
            onComplete: () => {
              setLoadingComplete(true);
              setPhase('storytelling');
            },
          });
        },
      });

      // Simulate loading progress with organic movement
      progressTl
        .to(progressRef.current, {
          '--progress': 30,
          duration: 1.5,
          ease: 'power1.inOut',
        })
        .to(progressRef.current, {
          '--progress': 60,
          duration: 2,
          ease: 'power1.inOut',
        })
        .to(progressRef.current, {
          '--progress': 85,
          duration: 1.5,
          ease: 'power1.inOut',
        })
        .to(progressRef.current, {
          '--progress': 100,
          duration: 1,
          ease: 'power2.out',
        });

      // Background gradient pulse
      gsap.to('.bg-gradient', {
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, [setPhase, setLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: 'circle(100% at 50% 50%)' }}
    >
      {/* Animated Background Gradient */}
      <div className="bg-gradient absolute inset-0 bg-gradient-to-br from-[#2a1f1b] via-[#3d2418] to-[#2a1f1b]" />

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#f29066]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Damru Animation */}
        <div className="mb-8">
          <Damru />
        </div>

        {/* Title */}
        <h1
          ref={textRef}
          className="text-6xl md:text-8xl font-bold text-[#f8f5f2] mb-4 tracking-wider"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Kashi
        </h1>

        {/* Subtitle */}
        <p
          ref={subTextRef}
          className="text-xl md:text-2xl text-[#f29066] tracking-[0.3em] uppercase"
        >
          The Eternal City
        </p>

        {/* Progress Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-64 h-1 bg-[#2a1f1b] rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#f29066] to-[#ffd900] rounded-full transition-all"
              style={{
                width: 'var(--progress, 0%)',
                '--progress': '0%',
              } as React.CSSProperties}
            />
          </div>
          <p className="mt-3 text-sm text-[#e6d1b1]/60 tracking-widest">
            {progress}%
          </p>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-sm text-[#e6d1b1]/40 tracking-wider animate-pulse">
          Preparing your spiritual journey...
        </p>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f29066]/30 to-transparent" />
    </div>
  );
}
