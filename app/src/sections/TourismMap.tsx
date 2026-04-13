import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Utensils, Timer, IndianRupee, Filter, X, Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type CategoryType = 'all' | 'temples' | 'ghats' | 'heritage' | 'education' | 'citylife';

interface Location {
  id: number;
  name: string;
  sanskrit: string;
  category: CategoryType;
  x: number;
  y: number;
  significance: string;
  timing: string;
  food: string;
  duration: string;
  cost: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    sanskrit: 'काशी विश्वनाथ मंदिर',
    category: 'temples',
    x: 45,
    y: 35,
    significance: 'The holiest Shiva temple, one of the twelve Jyotirlingas',
    timing: '3:00 AM - 11:00 PM',
    food: 'Try Bati Chokha nearby, Kachori at Ram Bhandar',
    duration: '2-3 hours',
    cost: 'Free entry, Special darshan ₹300',
  },
  {
    id: 2,
    name: 'Dashashwamedh Ghat',
    sanskrit: 'दशाश्वमेध घाट',
    category: 'ghats',
    x: 50,
    y: 55,
    significance: 'Main ghat where the spectacular Ganga Aarti is performed daily',
    timing: 'Open 24 hours, Aarti at 6:30 PM',
    food: 'Blue Lassi, Deena Chat Bhandar',
    duration: '1-2 hours',
    cost: 'Free, Boat ride ₹100-500',
  },
  {
    id: 3,
    name: 'Banaras Hindu University',
    sanskrit: 'काशी हिंदू विश्वविद्यालय',
    category: 'education',
    x: 70,
    y: 60,
    significance: 'One of Asia\'s largest residential universities, founded in 1916',
    timing: '9:00 AM - 5:00 PM',
    food: 'Campus canteens, Lanka market eateries',
    duration: '3-4 hours',
    cost: 'Free entry',
  },
  {
    id: 4,
    name: 'Sarnath',
    sanskrit: 'सारनाथ',
    category: 'heritage',
    x: 85,
    y: 45,
    significance: 'Where Buddha gave his first sermon after enlightenment',
    timing: 'Sunrise to Sunset',
    food: 'Dhamekh Stupa area cafes',
    duration: 'Half day',
    cost: '₹25 Indians, ₹300 foreigners',
  },
  {
    id: 5,
    name: 'Manikarnika Ghat',
    sanskrit: 'मणिकर्णिका घाट',
    category: 'ghats',
    x: 48,
    y: 50,
    significance: 'The primary cremation ghat, symbolizing the cycle of life and death',
    timing: 'Open 24 hours',
    food: 'Respectful distance recommended',
    duration: '30 minutes',
    cost: 'Free',
  },
  {
    id: 6,
    name: 'Ramnagar Fort',
    sanskrit: 'रामनगर किला',
    category: 'heritage',
    x: 55,
    y: 75,
    significance: '18th-century fort and palace of the Maharaja of Banaras',
    timing: '10:00 AM - 5:00 PM',
    food: 'Ramnagar market street food',
    duration: '2-3 hours',
    cost: '₹20 Indians, ₹150 foreigners',
  },
  {
    id: 7,
    name: 'Sankat Mochan Temple',
    sanskrit: 'संकट मोचन मंदिर',
    category: 'temples',
    x: 65,
    y: 50,
    significance: 'Dedicated to Lord Hanuman, relieves devotees of troubles',
    timing: '5:00 AM - 10:00 PM',
    food: 'Lassi at nearby shops',
    duration: '1-2 hours',
    cost: 'Free',
  },
  {
    id: 8,
    name: 'Assi Ghat',
    sanskrit: 'अस्सी घाट',
    category: 'ghats',
    x: 35,
    y: 60,
    significance: 'Southernmost ghat, popular for morning yoga and rituals',
    timing: 'Open 24 hours, Morning Aarti at 5:30 AM',
    food: 'Pizzeria Vaatika Cafe, Flavours Cafe',
    duration: '1-2 hours',
    cost: 'Free',
  },
];

const routes = [
  { id: 'first', name: 'First Timer', color: '#f29066', locations: [1, 2, 8, 7] },
  { id: 'spiritual', name: 'Spiritual Walk', color: '#7d9d9d', locations: [1, 5, 2, 4] },
  { id: 'heritage', name: 'Heritage Trail', color: '#e6d1b1', locations: [6, 4, 3, 1] },
  { id: 'citylife', name: 'City Explorer', color: '#7d8a6e', locations: [8, 3, 7, 2] },
];

const categories: { id: CategoryType; name: string; icon: typeof MapPin }[] = [
  { id: 'all', name: 'All', icon: MapPin },
  { id: 'temples', name: 'Temples', icon: MapPin },
  { id: 'ghats', name: 'Ghats', icon: MapPin },
  { id: 'heritage', name: 'Heritage', icon: MapPin },
  { id: 'education', name: 'Education', icon: MapPin },
  { id: 'citylife', name: 'City Life', icon: MapPin },
];

export default function TourismMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  const filteredLocations = activeCategory === 'all' 
    ? locations 
    : locations.filter(l => l.category === activeCategory);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.map-title',
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
      
      gsap.fromTo(
        '.map-container',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.map-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  const getCategoryColor = (category: CategoryType) => {
    const colors: Record<CategoryType, string> = {
      all: '#f29066',
      temples: '#ffd900',
      ghats: '#7d9d9d',
      heritage: '#e6d1b1',
      education: '#7d8a6e',
      citylife: '#b93b3b',
    };
    return colors[category];
  };
  
  return (
    <section
      ref={sectionRef}
      id="tourism"
      className="relative py-24 md:py-32 bg-[#2a1f1b] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="map-title text-center mb-12">
          <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">
            Plan Your Journey
          </span>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f2] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tourism <span className="text-gradient-saffron">Guide</span>
          </h2>
          
          <p className="text-lg text-[#e6d1b1]/80 max-w-2xl mx-auto">
            Navigate the eternal city with our interactive map. Filter by interest, 
            follow curated routes, and discover practical information for each location.
          </p>
        </div>
        
        {/* Route Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="text-[#e6d1b1]/60 text-sm flex items-center">
            <Navigation className="w-4 h-4 mr-2" />
            Suggested Routes:
          </span>
          {routes.map((route) => (
            <button
              key={route.id}
              onClick={() => setActiveRoute(activeRoute === route.id ? null : route.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeRoute === route.id
                  ? 'text-[#2a1f1b]'
                  : 'text-[#f8f5f2] bg-[#1a1410] hover:bg-[#2a1f1b]'
              }`}
              style={{
                backgroundColor: activeRoute === route.id ? route.color : undefined,
              }}
            >
              {route.name}
            </button>
          ))}
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="text-[#e6d1b1]/60 text-sm flex items-center mr-2">
            <Filter className="w-4 h-4 mr-2" />
            Filter:
          </span>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#f29066] text-[#2a1f1b]'
                    : 'bg-[#1a1410] text-[#e6d1b1] hover:bg-[#2a1f1b]'
                }`}
              >
                <Icon className="w-3 h-3" />
                {cat.name}
              </button>
            );
          })}
        </div>
        
        {/* Map Container */}
        <div className="map-container relative rounded-3xl overflow-hidden bg-[#1a1410] shadow-2xl">
          {/* Map Background */}
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src="/images/kashi-map.jpg"
              alt="Kashi Map"
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-[#1a1410]/40" />
            
            {/* Location Markers */}
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className="absolute group transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                <div 
                  className="relative"
                  style={{ color: getCategoryColor(location.category) }}
                >
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-6 h-6 rounded-full animate-ping opacity-40" 
                    style={{ backgroundColor: getCategoryColor(location.category) }}
                  />
                  
                  {/* Marker */}
                  <div 
                    className="relative w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: getCategoryColor(location.category) }}
                  >
                    <MapPin className="w-3 h-3 text-[#2a1f1b]" />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-[#2a1f1b]/90 rounded text-xs text-[#f8f5f2]">
                      {location.name}
                    </span>
                  </div>
                </div>
              </button>
            ))}
            
            {/* Route Lines */}
            {activeRoute && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={routes.find(r => r.id === activeRoute)?.color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={routes.find(r => r.id === activeRoute)?.color} stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {routes.find(r => r.id === activeRoute)?.locations.map((locId, index, arr) => {
                  if (index === arr.length - 1) return null;
                  const current = locations.find(l => l.id === locId);
                  const next = locations.find(l => l.id === arr[index + 1]);
                  if (!current || !next) return null;
                  return (
                    <line
                      key={`${locId}-${arr[index + 1]}`}
                      x1={`${current.x}%`}
                      y1={`${current.y}%`}
                      x2={`${next.x}%`}
                      y2={`${next.y}%`}
                      stroke="url(#routeGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>
            )}
          </div>
        </div>
        
        {/* Location Count */}
        <div className="mt-4 text-center text-sm text-[#e6d1b1]/60">
          Showing {filteredLocations.length} locations
          {activeRoute && ` on ${routes.find(r => r.id === activeRoute)?.name} route`}
        </div>
      </div>
      
      {/* Location Detail Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1f1b]/90 backdrop-blur-sm">
          <div className="relative max-w-lg w-full bg-[#1a1410] rounded-3xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2a1f1b]/80 text-[#f8f5f2] hover:bg-[#f29066]/20 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header */}
            <div 
              className="p-6"
              style={{ backgroundColor: `${getCategoryColor(selectedLocation.category)}20` }}
            >
              <span className="text-xs tracking-wider opacity-70">
                {selectedLocation.sanskrit}
              </span>
              <h3 
                className="text-2xl font-bold text-[#f8f5f2] mt-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {selectedLocation.name}
              </h3>
            </div>
            
            {/* Details */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-[#f29066] mb-1">Significance</h4>
                <p className="text-[#e6d1b1]/80 text-sm">{selectedLocation.significance}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#f29066] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f8f5f2]">Timing</h4>
                    <p className="text-[#e6d1b1]/70 text-xs">{selectedLocation.timing}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Timer className="w-4 h-4 text-[#f29066] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f8f5f2]">Duration</h4>
                    <p className="text-[#e6d1b1]/70 text-xs">{selectedLocation.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <IndianRupee className="w-4 h-4 text-[#f29066] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f8f5f2]">Cost</h4>
                    <p className="text-[#e6d1b1]/70 text-xs">{selectedLocation.cost}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-[#f29066] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f8f5f2]">Food Nearby</h4>
                    <p className="text-[#e6d1b1]/70 text-xs">{selectedLocation.food}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
