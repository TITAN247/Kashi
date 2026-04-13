import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useJourneyStore, type EraType } from '@/store/journeyStore';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EraData {
  id: EraType;
  name: string;
  sanskrit: string;
  title: string;
  description: string;
  fullDescription: string[];
  image: string;
  colorTheme: string;
}

const erasData: EraData[] = [
  {
    id: 'birth',
    name: 'Birth of Kashi',
    sanskrit: 'सृष्टि से पूर्व',
    title: 'Before Time Began',
    description: 'When the universe was void and dark, Lord Shiva manifested Kashi as the Infinite Light.',
    fullDescription: [
      `"Kashi creation se pehle bhi thi..."`,
      `Long before the cosmos was born, when there was only darkness... Lord Shiva established Kashi as the Anant Jyoti - the pillar of infinite light.`,
      `The city does not rest on the earth. It stands eternally on the tip of Shiva's Trident (Trishul).`,
      `"Isliye pralay bhi ise destroy nahi kar sakta." Even when the universe dissolves, Kashi remains.`,
      `"Yahan marne wale ko Shiv khud 'Taraka Mantra' dete hain." This is the only place where death is not the end, but the beginning of liberation.`
    ],
    image: '/Backgrounds/1st.MP4',
    colorTheme: 'from-[#1a0f2e] via-[#2d1b4e] to-[#000000]',
  },
  {
    id: 'satya',
    name: 'Satya Yuga',
    sanskrit: 'सत्य युग',
    title: 'The Age of Truth',
    description: 'Kashi becomes the first center of knowledge in the universe.',
    fullDescription: [
      `"Kashi gyaan ka pehla kendra bani..."`,
      `In the age of Truth, Kashi emerged as the spiritual university of the universe.`,
      `It was on these very ghats that Shiva revealed the Vedas to the Saptarishis.`,
      `No kings. No politics. No borders.`,
      `The society was governed solely by Dharma and Gyaan. A beacon of pure consciousness drawing seekers from across the galaxies.`
    ],
    image: '/Backgrounds/sat.jpg',
    colorTheme: 'from-[#064e3b] via-[#065f46] to-[#000000]',
  },
  {
    id: 'treta',
    name: 'Treta Yuga',
    sanskrit: 'त्रेता युग',
    title: 'The Era of Ram & Dharma',
    description: 'Lord Rama worships Shiva here, establishing the eternal bond.',
    fullDescription: [
      `"Kashi me Shiv-Vishnu ekta ka praman mila."`,
      `Following his victory over Ravana, Lord Rama came to Kashi to perform penance and worship Lord Shiva.`,
      `This moment established the eternal bond between Hari (Vishnu) and Hara (Shiva).`,
      `"Kashi Dharma ka moral compass ban gayi." Even the gods looked to this city to understand righteousness.`
    ],
    image: '/Backgrounds/tre.jpg',
    colorTheme: 'from-[#78350f] via-[#92400e] to-[#000000]',
  },
  {
    id: 'dwapar',
    name: 'Dwapar Yuga',
    sanskrit: 'द्वापर युग',
    title: 'Krishna & The Culture',
    description: 'The city flourishes as a hub of trade, music, and devotion.',
    fullDescription: [
      `Lord Krishna graced Kashi with his presence, transforming it into a vibrant hub of culture.`,
      `"Yahan ke log Shiv bhakt aur karm yogi the." Devoted to Shiva, yet actively engaged in the world.`,
      `Even during the catastrophic war of Mahabharata, Kashi remained a neutral spiritual ground.`,
      `"Yahan yudh se zyada gyaan bada." In Kashi, wisdom always held a higher place than war.`
    ],
    image: '/Backgrounds/do.jpg',
    colorTheme: 'from-[#1e3a8a] via-[#1e40af] to-[#000000]',
  },
  {
    id: 'kali',
    name: 'Kali Yuga',
    sanskrit: 'कलियुग',
    title: 'The Age of Resilience',
    description: 'Time and again destruction came. Time and again, Kashi rose.',
    fullDescription: [
      `In this current age, Kashi has faced the greatest tests.`,
      `Temples were razed. Idols were smashed. The sacred was desecrated.`,
      `"Fir bhi Kashi kabhi mari nahi." But the spirit of Kashi is indestructible.`,
      `"Har baar phir se khadi hui." Each time it was destroyed, it rose again, more resilient than before.`,
      `The Kashi Vishwanath Jyotirlinga remains the beating heart, pulsating with an energy that defies time.`
    ],
    image: '/Backgrounds/kal.jpeg',
    colorTheme: 'from-[#450a0a] via-[#7f1d1d] to-[#000000]',
  },
  {
    id: 'middle',
    name: 'Modern Era',
    sanskrit: 'आधुनिक काल',
    title: 'From Medieval to Global',
    description: 'Where the ancient Vedas meet the modern world.',
    fullDescription: [
      `The timeline of Kashi is a tapestry of eras.`,
      `From the Gupta golden age of art... to the British era where BHU blended ancient wisdom with modern science.`,
      `Today, in the 21st Century, Kashi stands as the Global Spiritual Capital.`,
      `It is a city where the ancient and the modern coexist—where Vedic chants meet the bustle of modern life.`
    ],
    image: '/Backgrounds/mid.jpg',
    colorTheme: 'from-[#431407] via-[#78350f] to-[#000000]',
  },
  {
    id: 'end',
    name: 'End of Time',
    sanskrit: 'महाप्रलय',
    title: 'The Eternal Remainder',
    description: 'When all ends, Kashi remains.',
    fullDescription: [
      `Prophecy says that at the end of Kali Yuga, when the great dissolution consumes the universe...`,
      `"Sab kuch nasht ho jayega..." Everything will be destroyed.`,
      `"Sirf Kashi bachegi." Only this city, upheld on Shiva's Trident, will survive.`,
      `Lord Shiva will perform the Tandav here. And from the ashes of the old world... a new Yug will begin.`,
      `Kashi is not just a city. It is the seed of the universe. The Eternal City.`
    ],
    image: '/Backgrounds/last.jpeg',
    colorTheme: 'from-[#2e1065] via-[#4c1d95] to-[#000000]',
  },
];

export default function EraPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setPhase, setCurrentEra, markEraComplete } = useJourneyStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Image Crossfades
      erasData.forEach((era, index) => {
        const triggerSelector = `#era-content-${era.id}`;
        const bgSelector = `#bg-${era.id}`;

        // Ensure first background is visible initially
        if (index === 0) {
          gsap.set(bgSelector, { opacity: 1 });
        } else {
          gsap.set(bgSelector, { opacity: 0 });
        }

        // Parallax/Fade Logic
        gsap.to(bgSelector, {
          opacity: 1,
          scrollTrigger: {
            trigger: triggerSelector,
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
            onEnter: () => {
              setCurrentEra(era.id);
              markEraComplete(era.id);
            }
          }
        });

        // Scale effect for "Ken Burns" feel on scroll
        gsap.fromTo(bgSelector,
          { scale: 1 },
          {
            scale: 1.1, scrollTrigger: {
              trigger: triggerSelector,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );

        // Text Animations (Float Up)
        const contentElements = document.querySelectorAll(`#era-content-${era.id} .animate-text`);
        gsap.fromTo(contentElements,
          { y: 50, opacity: 0, filter: 'blur(5px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: triggerSelector,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [setCurrentEra, markEraComplete]);

  const handleClose = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        setCurrentEra(null);
        setPhase('hero');
      },
    });
  };

  const handleFinish = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setCurrentEra(null);
        setPhase('exploration');
      }
    });
  };

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">

      {/* FIXED BACKGROUND LAYER - Now Fixed Position to ensure visibility */}
      <div id="era-background-container" className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {erasData.map((era, i) => (
          <div
            key={era.id}
            id={`bg-${era.id}`}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: i === 0 ? 1 : 0 }} // Initial state handled by CSS/React, animated by GSAP
          >
            {era.image.endsWith('.MP4') || era.image.endsWith('.mp4') ? (
              <video
                src={era.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={era.image}
                alt={era.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${era.colorTheme} opacity-80 mix-blend-multiply`} />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* FIXED NAVIGATION / CLOSE */}
      <button
        onClick={handleClose}
        className="fixed top-8 right-8 z-50 text-white/50 hover:text-[#f29066] transition-colors uppercase tracking-widest text-xs bg-black/20 backdrop-blur-md px-4 py-2 rounded-full"
      >
        Close Journey
      </button>

      {/* SCROLLABLE CONTENT LAYER */}
      <div className="relative z-10 w-full">
        {erasData.map((era) => (
          <section
            key={era.id}
            id={`era-content-${era.id}`}
            className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 md:py-32"
          >
            <div className="max-w-4xl text-center space-y-12">

              {/* Header Group */}
              <div className="space-y-4 animate-text">
                <div className="inline-block px-4 py-1 border border-[#f29066]/30 rounded-full">
                  <span className="text-[#f29066] uppercase tracking-[0.4em] text-xs font-bold">
                    {era.sanskrit}
                  </span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold text-[#f8f5f2] leading-tight drop-shadow-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {era.title}
                </h2>
              </div>

              {/* Description - Highlighted */}
              <p className="animate-text text-xl md:text-3xl text-[#f29066] font-light italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {era.description}
              </p>

              {/* Story Paragraphs */}
              <div className="space-y-8 mt-12">
                {era.fullDescription.map((para, idx) => (
                  <p
                    key={idx}
                    className="animate-text text-lg md:text-2xl text-[#e6d1b1] font-light leading-loose max-w-3xl mx-auto drop-shadow-sm"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Scroll Indicator (Only for non-last items) */}
              {era.id !== 'end' && (
                <div className="animate-text pt-16 opacity-50 animate-bounce">
                  <ChevronDown className="mx-auto w-8 h-8 text-white" />
                </div>
              )}

              {/* Final Button (Only for last item) */}
              {era.id === 'end' && (
                <div className="animate-text pt-16">
                  <button
                    onClick={handleFinish}
                    className="px-12 py-6 bg-gradient-to-r from-[#f29066] to-[#e07b4f] text-[#2a1f1b] font-bold text-xl uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl shadow-[#f29066]/50"
                  >
                    Enter Kashi
                  </button>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
