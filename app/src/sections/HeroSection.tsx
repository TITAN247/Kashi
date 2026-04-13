import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useJourneyStore, type EraType } from '@/store/journeyStore';
import { ChevronRight, Waves } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const eras: { id: EraType; name: string; sanskrit: string; position: number }[] = [
  { id: 'birth', name: 'Birth of Kashi', sanskrit: 'काशी उत्पत्ति', position: 10 },
  { id: 'satya', name: 'Satya Yuga', sanskrit: 'सत्य युग', position: 22 },
  { id: 'treta', name: 'Treta Yuga', sanskrit: 'त्रेता युग', position: 36 },
  { id: 'dwapar', name: 'Dwapar Yuga', sanskrit: 'द्वापर युग', position: 50 },
  { id: 'kali', name: 'Kali Yuga', sanskrit: 'कलियुग', position: 64 },
  { id: 'middle', name: 'Middle Ages', sanskrit: 'मध्य काल', position: 78 },
  { id: 'end', name: 'End of Kali Yuga', sanskrit: 'कलियुग अंत', position: 92 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const { setPhase, setCurrentEra, setExplorationMode } = useJourneyStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );

      // Timeline markers entrance
      gsap.fromTo(
        '.era-marker',
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 1,
        }
      );

      // CTA button entrance
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1.5 }
      );

      // Floating particles
      gsap.to('.floating-particle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEraClick = (eraId: EraType) => {
    setCurrentEra(eraId);
    setPhase('era');
  };

  const handleStartJourney = () => {
    handleEraClick('birth');
  };

  const handleExplore = () => {
    setExplorationMode(true);
    const explorationSection = document.getElementById('exploration-content');
    if (explorationSection) {
      explorationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#2a1f1b]"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.67]"
        >
          <source src="/Backgrounds/video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f1b]/70 via-transparent to-[#2a1f1b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1f1b]/50 via-transparent to-[#2a1f1b]/50" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 rounded-full bg-[#ffd900]/40"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-[#f29066]" />
            <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm">
              Journey Through Time
            </span>
            <Waves className="w-6 h-6 text-[#f29066]" />
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f8f5f2] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Kashi
            <span className="block text-gradient-saffron">The Unexplored City</span>
          </h1>

          <p className="text-lg md:text-xl text-[#e6d1b1]/80 max-w-2xl mx-auto mb-8">
            Explore the seven epochs of the world's oldest living city,
            where every stone holds a story and every wave carries a prayer.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="w-full max-w-6xl mb-12"
        >
          {/* River Path Visualization */}
          <div className="relative h-32 md:h-40">
            {/* SVG River Path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q125,20 250,50 T500,50 T750,50 T1000,50"
                fill="none"
                stroke="url(#riverGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-60"
              />
              <defs>
                <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f29066" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#ffd900" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f29066" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Era Markers */}
            <div className="absolute inset-0 flex items-center">
              {eras.map((era, index) => (
                <button
                  key={era.id}
                  onClick={() => handleEraClick(era.id)}
                  className="era-marker absolute group cursor-pointer"
                  style={{ left: `${era.position}%` }}
                >
                  {/* Marker Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#f29066] group-hover:bg-[#ffd900] transition-all duration-300 group-hover:scale-150" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#f29066] animate-ping opacity-40" />
                  </div>

                  {/* Label */}
                  <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${index % 2 === 0 ? '-translate-y-2' : 'translate-y-2'
                    }`}>
                    <p className="text-xs text-[#e6d1b1]/60 tracking-wider">
                      {era.sanskrit}
                    </p>
                    <p className="text-sm text-[#f8f5f2] font-medium group-hover:text-[#ffd900] transition-colors">
                      {era.name}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#ffd900]/0 group-hover:bg-[#ffd900]/30 blur-xl transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            ref={ctaRef}
            onClick={handleStartJourney}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#f29066] to-[#e07b4f] text-[#2a1f1b] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#f29066]/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start the Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd900] to-[#f29066] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={handleExplore}
            className="px-8 py-4 border border-[#f29066]/50 text-[#f8f5f2] font-medium rounded-full hover:bg-[#f29066]/10 hover:border-[#f29066] transition-all duration-300"
          >
            Explore Kashi
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2a1f1b] to-transparent" />
    </div >
  );
}
