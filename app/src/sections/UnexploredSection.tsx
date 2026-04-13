import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const unexploredPlaces = [
  {
    id: 1,
    name: 'Hidden Temples',
    description: 'Ancient shrines tucked away in narrow alleys, known only to locals',
    image: '/images/unexplored-temple.jpg',
  },
  {
    id: 2,
    name: 'Silent Ghats',
    description: 'Peaceful riverfront steps away from the crowds, perfect for meditation',
    image: '/images/unexplored-ghat.jpg',
  },
  {
    id: 3,
    name: 'Forgotten Kunds',
    description: 'Ancient stepwells that hold stories of centuries past',
    image: '/images/unexplored-kund.jpg',
  },
  {
    id: 4,
    name: 'Secret Alleys',
    description: 'Narrow passages that reveal the authentic pulse of the city',
    image: '/images/unexplored-1.jpg',
  },
];

export default function UnexploredSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      // Cards stagger animation
      gsap.fromTo(
        '.unexplored-card',
        { y: 80, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section
      ref={sectionRef}
      id="unexplored"
      className="relative py-24 md:py-32 bg-[#2a1f1b] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f29066 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#f29066]" />
            <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm">
              Beyond the Obvious
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f2] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Unexplored <span className="text-gradient-saffron">Kashi</span>
          </h2>
          
          <p className="text-lg text-[#e6d1b1]/80 max-w-2xl mx-auto">
            Venture beyond the famous ghats into the secret corridors of the city, 
            where time moves differently and every corner holds a mystery.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {unexploredPlaces.map((place, index) => (
            <div
              key={place.id}
              className={`unexplored-card group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                index === 0 ? 'h-80 md:h-full' : 'h-64'
              }`}>
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 
                    className={`font-bold text-[#f8f5f2] mb-2 group-hover:text-[#f29066] transition-colors duration-300 ${
                      index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {place.name}
                  </h3>
                  
                  <p className={`text-[#e6d1b1]/80 mb-4 ${
                    index === 0 ? 'text-base' : 'text-sm'
                  }`}>
                    {place.description}
                  </p>
                  
                  {/* Hover Link */}
                  <div className="flex items-center gap-2 text-[#f29066] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">Discover</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-[#f29066]/0 group-hover:border-[#f29066]/30 rounded-2xl transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 px-6 py-3 border border-[#f29066]/50 text-[#f8f5f2] rounded-full hover:bg-[#f29066]/10 hover:border-[#f29066] transition-all duration-300">
            <span>View All Hidden Places</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
