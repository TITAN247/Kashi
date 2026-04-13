import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Users, Flame, Calendar, Compass, X, ChevronRight } from 'lucide-react';
import { useJourneyStore, type ExperienceType } from '@/store/journeyStore';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 'citylife' as ExperienceType,
    name: 'City Life',
    sanskrit: 'नगर जीवन',
    description: 'Experience the vibrant daily rhythms of Varanasi, from morning rituals to evening aartis.',
    image: '/images/experience-citylife.jpg',
    icon: Users,
    color: 'from-amber-600 to-orange-700',
  },
  {
    id: 'spirituality' as ExperienceType,
    name: 'Spirituality',
    sanskrit: 'आध्यात्मिकता',
    description: 'Dive deep into the spiritual essence of Kashi through meditation, yoga, and sacred rituals.',
    image: '/images/experience-spirituality.jpg',
    icon: Sparkles,
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'mahashivratri' as ExperienceType,
    name: 'Mahashivratri',
    sanskrit: 'महाशिवरात्रि',
    description: 'Witness the grandest celebration dedicated to Lord Shiva, a night of divine awakening.',
    image: '/images/experience-mahashivratri.jpg',
    icon: Flame,
    color: 'from-orange-600 to-red-700',
    featured: true,
  },
  {
    id: 'festivals' as ExperienceType,
    name: 'Festivals',
    sanskrit: 'त्योहार',
    description: 'Join the colorful celebrations that bring the city to life throughout the year.',
    image: '/images/experience-festivals.jpg',
    icon: Calendar,
    color: 'from-pink-600 to-rose-700',
  },
  {
    id: 'tourism' as ExperienceType,
    name: 'Tourism',
    sanskrit: 'पर्यटन',
    description: 'Plan your perfect journey with guided tours, maps, and insider recommendations.',
    image: '/images/experience-tourism.jpg',
    icon: Compass,
    color: 'from-teal-600 to-cyan-700',
  },
];

const experienceDetails: Record<string, { title: string; content: string[]; tips: string[] }> = {
  citylife: {
    title: 'The Rhythms of Kashi',
    content: [
      'Wake up before dawn to witness the city come alive. The first light brings sadhus to the ghats for their morning rituals, while boatmen prepare their vessels for the day.',
      'Walk through the narrow galis (alleys) where life unfolds in its most authentic form. Watch artisans at work, smell the incense from tiny shops, and hear the constant chanting of mantras.',
      'As evening approaches, the ghats transform. The famous Ganga Aarti at Dashashwamedh Ghat is a spectacle of fire and devotion that draws thousands every day.',
    ],
    tips: ['Best time to visit ghats: 5-7 AM', 'Try local breakfast: Kachori Sabzi', 'Respect photography restrictions at temples'],
  },
  spirituality: {
    title: 'The Path Within',
    content: [
      'Kashi is not merely a destination but a journey inward. The city has been a center of spiritual learning for over three thousand years.',
      'Join morning yoga sessions on the ghats, learn meditation from resident gurus, or participate in sacred fire ceremonies.',
      'Visit the numerous ashrams where ancient wisdom is still transmitted from teacher to student in the traditional guru-shishya parampara.',
    ],
    tips: ['Many ashrams offer free meditation classes', 'Dress modestly when visiting spiritual sites', 'The best time for meditation is Brahma Muhurta (4-6 AM)'],
  },
  mahashivratri: {
    title: 'The Great Night of Shiva',
    content: [
      'Mahashivratri in Kashi is an experience unlike any other. The entire city becomes a temple, and the atmosphere is charged with divine energy.',
      'Devotees fast throughout the day and night, offering bael leaves and milk to Shiva lingams across the city. The Kashi Vishwanath Temple sees millions of visitors.',
      'The night-long vigil includes continuous chanting of Om Namah Shivaya, creating a vibration that permeates every corner of the city.',
    ],
    tips: ['Book accommodations months in advance', 'Expect massive crowds at all temples', 'The main celebrations start at sunset and continue until dawn'],
  },
  festivals: {
    title: 'Celebrations of Life',
    content: [
      'Kashi celebrates life in all its colors. From the vibrant Holi on the ghats to the luminous Dev Deepawali, every festival here has a unique flavor.',
      'Dev Deepawali, celebrated fifteen days after Diwali, sees millions of diyas lighting up the ghats, creating a spectacle that defies description.',
      'The month of Kartik brings special celebrations, with devotees taking holy dips in the Ganga every morning and evening.',
    ],
    tips: ['Dev Deepawali (Kartik Purnima) is the best time to visit', 'Holi on the ghats is an unforgettable experience', 'Check the lunar calendar for festival dates'],
  },
  tourism: {
    title: 'Your Journey, Your Way',
    content: [
      'Whether you are a first-time visitor or a returning pilgrim, Kashi offers experiences tailored to your interests and spiritual inclinations.',
      'Take a sunrise boat ride to see the ghats from the river perspective, or explore the city on foot with knowledgeable local guides.',
      'Plan your visit around specific interests - temple tours, heritage walks, culinary explorations, or spiritual retreats.',
    ],
    tips: ['Hire licensed guides for authentic experiences', 'Boat rides are best at sunrise and sunset', 'Allow at least 3-4 days to experience the city properly'],
  },
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType>(null);
  const { setCurrentExperience } = useJourneyStore();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.experience-title',
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
      
      // Cards animation
      gsap.fromTo(
        '.experience-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experience-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  const handleCardClick = (id: ExperienceType) => {
    setSelectedExperience(id);
    setCurrentExperience(id);
  };
  
  const handleClose = () => {
    setSelectedExperience(null);
    setCurrentExperience(null);
  };
  
  const selectedData = selectedExperience ? experienceDetails[selectedExperience] : null;
  const selectedExpData = experiences.find(e => e.id === selectedExperience);
  
  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 md:py-32 bg-[#2a1f1b] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #f29066 25%, transparent 25%), linear-gradient(-45deg, #f29066 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f29066 75%), linear-gradient(-45deg, transparent 75%, #f29066 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="experience-title text-center mb-16">
          <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">
            Immersive Experiences
          </span>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f2] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Experience <span className="text-gradient-saffron">Kashi</span>
          </h2>
          
          <p className="text-lg text-[#e6d1b1]/80 max-w-2xl mx-auto">
            Choose your path through the eternal city. Each experience offers a unique window 
            into the soul of Kashi.
          </p>
        </div>
        
        {/* Experience Cards Grid */}
        <div className="experience-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                onClick={() => handleCardClick(exp.id)}
                className={`experience-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  exp.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                {/* Background Image */}
                <div className={`relative overflow-hidden ${exp.featured ? 'h-80 lg:h-full' : 'h-64'}`}>
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {exp.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#ffd900] text-[#2a1f1b] text-xs font-bold rounded-full">
                      FEATURED
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs text-white/70 tracking-wider">
                        {exp.sanskrit}
                      </span>
                    </div>
                    
                    <h3 
                      className={`font-bold text-white mb-2 ${
                        exp.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {exp.name}
                    </h3>
                    
                    <p className={`text-white/80 ${exp.featured ? 'text-base' : 'text-sm'} line-clamp-2`}>
                      {exp.description}
                    </p>
                    
                    {/* Hover Action */}
                    <div className="flex items-center gap-2 mt-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Experience Detail Modal */}
      {selectedExperience && selectedData && selectedExpData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1f1b]/95 backdrop-blur-lg">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#1a1410] rounded-3xl">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-[#2a1f1b]/80 text-[#f8f5f2] hover:bg-[#f29066]/20 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedExpData.image}
                alt={selectedExpData.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedExpData.color} opacity-40`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#f29066] tracking-wider text-sm mb-2 block">
                  {selectedExpData.sanskrit}
                </span>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-[#f8f5f2]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {selectedData.title}
                </h2>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="space-y-6 mb-8">
                {selectedData.content.map((paragraph, index) => (
                  <p key={index} className="text-[#e6d1b1]/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Tips Section */}
              <div className="bg-[#2a1f1b] rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#f8f5f2] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#f29066]" />
                  Insider Tips
                </h3>
                <ul className="space-y-3">
                  {selectedData.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#e6d1b1]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f29066] mt-2 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
