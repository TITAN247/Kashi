import { useState, useRef, useEffect } from 'react';
import { mapLocations } from '@/data/touristPlaces';
import type { MapLocation, TouristCategory } from '@/data/touristPlaces';
import { X, Clock, Coins, UtensilsCrossed, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const categoryStyles: Record<TouristCategory, { color: string; label: string; markerBg: string }> = {
    education: { color: '#f29066', label: 'Education', markerBg: 'bg-orange-500' },
    temples: { color: '#ffd900', label: 'Temples', markerBg: 'bg-yellow-500' },
    heritage: { color: '#e6d1b1', label: 'Heritage', markerBg: 'bg-amber-600' },
    'city-life': { color: '#4ade80', label: 'City Life', markerBg: 'bg-green-500' },
    ghats: { color: '#60a5fa', label: 'Ghats', markerBg: 'bg-blue-400' },
    unexplored: { color: '#c084fc', label: 'Unexplored', markerBg: 'bg-purple-500' },
};

const categories: TouristCategory[] = ['temples', 'ghats', 'heritage', 'education', 'city-life', 'unexplored'];

export default function InteractiveMap() {
    const [activeCategory, setActiveCategory] = useState<TouristCategory | 'all'>('all');
    const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const filteredLocations = activeCategory === 'all'
        ? mapLocations
        : mapLocations.filter(loc => loc.category === activeCategory);

    useEffect(() => {
        if (selectedLocation && cardRef.current) {
            gsap.fromTo(cardRef.current, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' });
        }
    }, [selectedLocation]);

    return (
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#f29066]/10 shadow-2xl min-h-[600px]">
            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0 bg-[#120a09] border-r border-[#f29066]/10 p-6 overflow-y-auto custom-scrollbar relative z-20">
                <h3 className="text-xl font-bold text-[#f29066] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Suggested Routes
                </h3>
                <p className="text-xs text-[#e6d1b1]/50 mb-6">Select a category to filter locations</p>

                {/* Filter Buttons */}
                <div className="space-y-2 mb-8">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === 'all' ? 'bg-[#f29066]/20 text-[#f29066] border border-[#f29066]/30' : 'text-[#e6d1b1]/70 hover:bg-white/5 border border-transparent'}`}
                    >
                        All Locations
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 ${activeCategory === cat ? 'border' : 'border border-transparent hover:bg-white/5'}`}
                            style={activeCategory === cat ? { backgroundColor: `${categoryStyles[cat].color}20`, color: categoryStyles[cat].color, borderColor: `${categoryStyles[cat].color}40` } : { color: '#e6d1b1aa' }}
                        >
                            <span className={`w-2.5 h-2.5 rounded-full ${categoryStyles[cat].markerBg}`} />
                            {categoryStyles[cat].label}
                        </button>
                    ))}
                </div>

                {/* Locations List */}
                <div className="border-t border-[#f29066]/10 pt-4">
                    <p className="text-[10px] text-[#e6d1b1]/40 uppercase tracking-widest mb-3">Locations ({filteredLocations.length})</p>
                    <div className="space-y-1">
                        {filteredLocations.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc)}
                                className={`w-full text-left px-3 py-2 rounded-md text-xs transition-all duration-200 ${selectedLocation?.id === loc.id ? 'bg-white/10 text-white' : 'text-[#e6d1b1]/60 hover:text-[#e6d1b1] hover:bg-white/5'}`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-[#e6d1b1] overflow-hidden group">
                {/* Map Background */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url('/images/kashi-map.jpg')`, filter: 'sepia(30%) contrast(110%)' }}
                />

                {/* Parchment Texture Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(139,90,43,0.3)_100%)]" />

                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

                {/* Compass Rose */}
                <div className="absolute top-6 right-6 w-16 h-16 opacity-40">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#5a3a1a]">N</span>
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#5a3a1a]">S</span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#5a3a1a]">W</span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#5a3a1a]">E</span>
                        <div className="w-8 h-8 border-2 border-[#5a3a1a]/40 rounded-full" />
                        <div className="absolute w-[1px] h-10 bg-[#5a3a1a]/30" />
                        <div className="absolute w-10 h-[1px] bg-[#5a3a1a]/30" />
                    </div>
                </div>

                {/* Map Markers */}
                {filteredLocations.map(loc => {
                    const style = categoryStyles[loc.category];
                    const isSelected = selectedLocation?.id === loc.id;
                    const isUnexplored = loc.category === 'unexplored';

                    return (
                        <button
                            key={loc.id}
                            onClick={() => setSelectedLocation(loc)}
                            className={`absolute z-10 transform -translate-x-1/2 -translate-y-full transition-all duration-300 group/pin ${isSelected ? 'scale-125 z-30' : 'hover:scale-110'}`}
                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                            title={loc.name}
                        >
                            {/* Pin */}
                            <div className="relative flex flex-col items-center">
                                <div
                                    className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all ${isUnexplored ? 'shadow-purple-500/50' : ''}`}
                                    style={{ backgroundColor: style.color }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-white/80" />
                                </div>
                                <div
                                    className="w-0.5 h-3"
                                    style={{ backgroundColor: style.color }}
                                />
                                {/* Label */}
                                <span className="absolute top-full mt-1 whitespace-nowrap text-[9px] font-bold text-[#3a2a1a] bg-[#e6d1b1]/80 px-1.5 py-0.5 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity">
                                    {loc.name}
                                </span>
                            </div>
                        </button>
                    );
                })}

                {/* Info Card */}
                {selectedLocation && (
                    <div ref={cardRef} className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-40">
                        <div className="bg-[#1a0f0a]/95 backdrop-blur-md rounded-xl border border-[#f29066]/20 p-6 shadow-2xl">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                                        style={{ backgroundColor: `${categoryStyles[selectedLocation.category].color}20`, color: categoryStyles[selectedLocation.category].color }}
                                    >
                                        {categoryStyles[selectedLocation.category].label}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {selectedLocation.name}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedLocation(null)}
                                    className="text-[#e6d1b1]/50 hover:text-white transition-colors p-1"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <p className="text-[#e6d1b1]/70 text-sm mb-4 leading-relaxed">{selectedLocation.description}</p>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="flex items-center gap-2 text-[#e6d1b1]/60">
                                    <Clock size={12} className="text-[#f29066]" />
                                    <span>{selectedLocation.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#e6d1b1]/60">
                                    <Coins size={12} className="text-[#ffd900]" />
                                    <span>{selectedLocation.cost}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#e6d1b1]/60">
                                    <UtensilsCrossed size={12} className="text-[#4ade80]" />
                                    <span>{selectedLocation.food}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#e6d1b1]/60">
                                    <Sparkles size={12} className="text-[#c084fc]" />
                                    <span>{selectedLocation.significance}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
