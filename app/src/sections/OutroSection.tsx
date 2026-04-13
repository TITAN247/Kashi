import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OutroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const omRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.to(omRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.outro-particle', {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#2a1f1b] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/kashi-map.jpg"
          alt="Kashi Map"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/80 to-[#2a1f1b]" />
      </div>

      <div
        ref={omRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <span
          className="text-[30rem] text-[#f29066]/5 font-bold select-none"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          ॐ
        </span>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="outro-particle absolute w-1 h-1 rounded-full bg-[#ffd900]/30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-[#f29066]/10">
            <Sparkles className="w-8 h-8 text-[#f29066]" />
          </div>
        </div>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f2] mb-8"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Your Journey Through
          <span className="block text-[#f29066] mt-2">Time Continues</span>
        </h2>

        <p className="text-lg md:text-xl text-[#e6d1b1]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          Kashi is not merely a destination to be visited, but an experience to be lived.
          The city that exists beyond time awaits your return, for in Kashi,
          every ending is but a new beginning.
        </p>

        <blockquote className="mb-12">
          <p
            className="text-2xl md:text-3xl text-[#f29066]/80 italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Kashyam Maranam Mukti"
          </p>
          <p className="text-sm text-[#e6d1b1]/60 mt-2 tracking-wider">
            Death in Kashi is Liberation
          </p>
        </blockquote>

        <div className="flex items-center justify-center gap-2 text-[#e6d1b1]/60">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-[#b93b3b] fill-[#b93b3b]" />
          <span>for the eternal city</span>
        </div>

        <div className="mt-16 pt-8 border-t border-[#f29066]/10">
          <p className="text-sm text-[#e6d1b1]/40">
            May your path be illuminated by the divine light of Kashi
          </p>
          <p className="text-xs text-[#e6d1b1]/30 mt-4">
            ॐ नमः शिवाय
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f29066]/30 to-transparent" />
    </section>
  );
}
