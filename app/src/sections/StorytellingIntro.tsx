import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useJourneyStore } from '@/store/journeyStore';
import { playOmSound } from '@/lib/audioUtils';

const verses = [
  {
    text: "Long before Rome was built...",
    subtext: "Long before Babylon was born...",
    duration: 3
  },
  {
    text: "When the rest of the world was silent...",
    subtext: "One city was already chanting the name of Shiva.",
    duration: 3.5
  },
  {
    text: "Empires have risen and turned to dust.",
    subtext: "But the fires of Manikarnika have never gone cold.",
    duration: 3.5
  },
  {
    text: "This is not just a city.",
    subtext: "It is the bridge between the mortal and the infinite.",
    duration: 4
  }
];

export default function StorytellingIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const { setPhase, setStoryComplete } = useJourneyStore();
  const [currentVerse, setCurrentVerse] = useState(0);

  // Play Om sound during storytelling
  useEffect(() => {
    const stopOm = playOmSound(0.25, true);
    return () => stopOm();
  }, []);

  useEffect(() => {
    let verseIndex = 0;

    // Initial State
    gsap.set([textRef.current, subTextRef.current], {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)'
    });

    const ctx = gsap.context(() => {
      const processVerse = () => {
        if (verseIndex >= verses.length) {
          // Final Transition to Hero
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
              setStoryComplete(true);
              setPhase('hero');
            }
          });
          return;
        }

        const verse = verses[verseIndex];

        // Update content (React state update is batched, so we might need to rely on the index for logic)
        setCurrentVerse(verseIndex);

        const tl = gsap.timeline({
          onComplete: () => {
            verseIndex++;
            processVerse();
          }
        });

        // 1. Text Enter (Smooth, cinematic rise with blur removal)
        tl.to(textRef.current, {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power3.out'
        })
          .to(subTextRef.current, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 2,
            ease: 'power3.out'
          }, '-=1.5'); // Overlap for flow

        // 2. Hold (Let the user read)
        tl.to({}, { duration: verse.duration });

        // 3. Text Exit (Fade out and drift up)
        tl.to([textRef.current, subTextRef.current], {
          y: -40,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1.5,
          ease: 'power2.in'
        });

        // 4. Reset for next verse (Immediate set)
        tl.set([textRef.current, subTextRef.current], {
          y: 40,
          opacity: 0,
          filter: 'blur(10px)'
        });
      };

      // Start Sequence with a slight delay for video load
      setTimeout(processVerse, 500);

    }, containerRef);

    return () => ctx.revert();
  }, [setPhase, setStoryComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0503] overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="/Backgrounds/video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Vignette & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Skip Button (Subtle) */}
      <button
        onClick={() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              setStoryComplete(true);
              setPhase('hero');
            }
          });
        }}
        className="absolute top-8 right-8 z-50 text-[#f29066]/60 hover:text-[#f29066] text-xs tracking-[0.3em] uppercase transition-colors duration-500"
      >
        Skip Intro
      </button>

      {/* Content */}
      <div
        ref={textContainerRef}
        className="relative z-10 max-w-5xl px-8 text-center flex flex-col items-center"
      >
        <h2
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f8f5f2] mb-8 leading-tight drop-shadow-2xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {verses[currentVerse].text}
        </h2>

        <div className="overflow-hidden">
          <p
            ref={subTextRef}
            className="text-xl md:text-3xl text-[#f29066] font-light tracking-wide drop-shadow-lg"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {verses[currentVerse].subtext}
          </p>
        </div>
      </div>
    </div>
  );
}
