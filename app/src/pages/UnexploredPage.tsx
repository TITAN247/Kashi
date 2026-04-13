import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { unexploredPlaces, type Category } from '@/data/unexplored';
import { ChevronDown, ChevronUp, Sparkles, User, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function UnexploredPage() {
    const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const categories = [
        { id: 'all', label: 'All Hidden Gems' },
        { id: 'temples', label: 'Secret Temples' },
        { id: 'ghats', label: 'Forgotten Ghats' },
        { id: 'kunds', label: 'Mystic Kunds' },
        { id: 'heritage', label: 'Heritage Sites' },
        { id: 'sacred', label: 'Sacred Spots' },
        { id: 'cultural', label: 'Living Culture' },
    ];

    const filteredPlaces = activeCategory === 'all'
        ? unexploredPlaces
        : unexploredPlaces.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#2a1f1b] text-[#f8f5f2]">

            {/* Hero Banner */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/Backgrounds/un.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/60 to-transparent" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">अनदेखी काशी</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Unexplored <span className="text-[#f29066]">Kashi</span>
                    </h1>
                    <p className="text-[#e6d1b1]/80 text-lg max-w-2xl mx-auto italic">
                        "Kashi ko dekhne wale bahut hain. Par Kashi ko jaane wale bahut kam."
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id as Category | 'all'); setExpandedCard(null); }}
                            className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 border ${activeCategory === cat.id
                                ? 'bg-[#f29066] border-[#f29066] text-[#2a1f1b] font-semibold'
                                : 'bg-transparent border-[#e6d1b1]/30 text-[#e6d1b1] hover:border-[#f29066] hover:text-[#f29066]'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPlaces.map((place, index) => {
                        const isExpanded = expandedCard === index;
                        return (
                            <div
                                key={`${place.name}-${index}`}
                                className="group relative bg-[#1e1512] rounded-xl overflow-hidden border border-[#e6d1b1]/10 hover:border-[#f29066]/50 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1512] via-[#1e1512]/40 to-transparent" />

                                    {/* Hidden Gem Badge */}
                                    {place.hiddenGem && (
                                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-[#f29066]/20 border border-[#f29066]/30">
                                            <Sparkles size={10} className="text-[#f29066]" />
                                            <span className="text-[9px] text-[#f29066] uppercase tracking-wider font-bold">Hidden Gem</span>
                                        </div>
                                    )}

                                    <div className="absolute bottom-0 left-0 p-5">
                                        <span className="text-[#f29066] text-[10px] uppercase tracking-[0.2em] mb-1 block">
                                            {place.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-[#f8f5f2]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {place.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description & Establishment Info */}
                                <div className="p-5">
                                    <p className="text-[#e6d1b1]/80 leading-relaxed text-sm mb-3">
                                        {place.description}
                                    </p>

                                    {/* Established By & When */}
                                    {(place.establishedBy || place.establishedWhen) && (
                                        <div className="mb-3 space-y-1.5 py-2 border-t border-[#e6d1b1]/10">
                                            {place.establishedBy && (
                                                <div className="flex items-start gap-2">
                                                    <User size={12} className="text-[#f29066] mt-0.5 flex-shrink-0" />
                                                    <p className="text-[#e6d1b1]/50 text-[11px] leading-snug">
                                                        <span className="text-[#e6d1b1]/70 font-medium">Est. by:</span> {place.establishedBy}
                                                    </p>
                                                </div>
                                            )}
                                            {place.establishedWhen && (
                                                <div className="flex items-start gap-2">
                                                    <Clock size={12} className="text-[#f29066] mt-0.5 flex-shrink-0" />
                                                    <p className="text-[#e6d1b1]/50 text-[11px] leading-snug">
                                                        <span className="text-[#e6d1b1]/70 font-medium">Period:</span> {place.establishedWhen}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* History (expandable) */}
                                    {place.history && (
                                        <>
                                            <button
                                                onClick={() => setExpandedCard(isExpanded ? null : index)}
                                                className="w-full flex items-center justify-between text-[#f29066] text-xs tracking-widest uppercase hover:text-[#ffd900] transition-colors py-2 border-t border-[#e6d1b1]/10"
                                            >
                                                <span>{isExpanded ? 'Hide History' : 'Read History'}</span>
                                                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                            </button>
                                            {isExpanded && (
                                                <div className="mt-2 pt-3 border-t border-[#e6d1b1]/10">
                                                    <p className="text-[#e6d1b1]/60 text-xs leading-relaxed">
                                                        {place.history}
                                                    </p>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
