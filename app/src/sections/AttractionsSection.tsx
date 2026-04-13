import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Landmark, ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const attractions = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    sanskrit: 'काशी विश्वनाथ मंदिर',
    description: 'The holiest of Shiva temples, standing as the spiritual heart of Kashi for over three millennia.',
    image: '/images/attraction-vishwanath.jpg',
    rating: 4.9,
    type: 'Temple',
  },
  {
    id: 2,
    name: 'Dashashwamedh Ghat',
    sanskrit: 'दशाश्वमेध घाट',
    description: 'The main ghat where the magnificent Ganga Aarti is performed every evening at sunset.',
    image: '/images/attraction-dashashwamedh.jpg',
    rating: 4.8,
    type: 'Ghat',
  },
  {
    id: 3,
    name: 'Sankat Mochan Temple',
    sanskrit: 'संकट मोचन मंदिर',
    description: 'Dedicated to Lord Hanuman, this temple is believed to relieve devotees of their troubles.',
    image: '/images/attraction-sankatmochan.jpg',
    rating: 4.7,
    type: 'Temple',
  },
  {
    id: 4,
    name: 'Assi Ghat',
    sanskrit: ' अस्सी घाट',
    description: 'A peaceful ghat at the southern end, famous for morning rituals and yoga sessions.',
    image: '/images/attraction-assighat.jpg',
    rating: 4.6,
    type: 'Ghat',
  },
];

export default function AttractionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.fromTo(
        '.attractions-title',
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
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
  };
  
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };
  
  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };
  
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + attractions.length) % attractions.length);
    const adjustedDiff = normalizedDiff > attractions.length / 2 
      ? normalizedDiff - attractions.length 
      : normalizedDiff;
    
    const rotateY = adjustedDiff * 45;
    const translateX = adjustedDiff * 300;
    const translateZ = Math.abs(adjustedDiff) * -200;
    const scale = 1 - Math.abs(adjustedDiff) * 0.2;
    const opacity = 1 - Math.abs(adjustedDiff) * 0.4;
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: Math.max(opacity, 0.3),
      zIndex: 10 - Math.abs(adjustedDiff),
    };
  };
  
  return (
    <section
      ref={sectionRef}
      id="attractions"
      className="relative py-24 md:py-32 bg-[#2a1f1b] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f29066]/5 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="attractions-title text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Landmark className="w-5 h-5 text-[#f29066]" />
            <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm">
              Sacred Sites
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f2] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Top <span className="text-gradient-saffron">Attractions</span>
          </h2>
          
          <p className="text-lg text-[#e6d1b1]/80 max-w-2xl mx-auto">
            Discover the most revered temples, ghats, and heritage structures 
            that have drawn pilgrims for thousands of years.
          </p>
        </div>
        
        {/* 3D Carousel */}
        <div 
          ref={carouselRef}
          className="relative h-[500px] md:h-[600px] perspective-[1000px]"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.id}
                className="absolute w-[300px] md:w-[400px] transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#1a1410] shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#f29066]/20 backdrop-blur-sm rounded-full">
                      <span className="text-xs text-[#f29066] font-medium">
                        {attraction.type}
                      </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[#2a1f1b]/80 backdrop-blur-sm rounded-full">
                      <Star className="w-3 h-3 text-[#ffd900] fill-[#ffd900]" />
                      <span className="text-xs text-[#f8f5f2]">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-[#f29066]/70 tracking-wider mb-1">
                      {attraction.sanskrit}
                    </p>
                    <h3 
                      className="text-xl font-bold text-[#f8f5f2] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[#e6d1b1]/70 line-clamp-2">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#2a1f1b]/80 backdrop-blur-sm text-[#f8f5f2] hover:bg-[#f29066]/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#2a1f1b]/80 backdrop-blur-sm text-[#f8f5f2] hover:bg-[#f29066]/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {attractions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[#f29066] w-8'
                  : 'bg-[#f29066]/30 hover:bg-[#f29066]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
