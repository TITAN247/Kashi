import { useJourneyStore } from '@/store/journeyStore';
import LoadingScreen from '@/sections/LoadingScreen';
import StorytellingIntro from '@/sections/StorytellingIntro';
import HeroSection from '@/sections/HeroSection';
import EraPage from '@/sections/EraPage';
import OutroSection from '@/sections/OutroSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Sparkles, Calendar, Compass, Flame } from 'lucide-react';

export default function Home() {
    const { currentPhase, isLoadingComplete } = useJourneyStore();

    return (
        <div className="pt-20">
            {/* Loading Screen */}
            {currentPhase === 'loading' && <LoadingScreen />}

            {/* Storytelling Intro */}
            {currentPhase === 'storytelling' && isLoadingComplete && <StorytellingIntro />}

            {/* Main Content */}
            {(currentPhase === 'hero' || currentPhase === 'era' || currentPhase === 'exploration') && (
                <>
                    {/* Hero Section */}
                    <div id="home">
                        <HeroSection />
                    </div>

                    {/* Era Page Modal */}
                    {currentPhase === 'era' && <EraPage />}

                    {/* Previews Section */}
                    <div id="previews" className="bg-[#2a1f1b] text-[#f8f5f2] py-20 px-4">
                        <div className="max-w-7xl mx-auto space-y-32">

                            {/* Unexplored Preview */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="relative h-96 rounded-lg overflow-hidden group">
                                        <img
                                            src="/Backgrounds/un.jpeg"
                                            alt="Unexplored Kashi"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        The <span className="text-[#f29066]">Unexplored</span> City
                                    </h2>
                                    <p className="text-[#e6d1b1] text-lg leading-relaxed">
                                        "Kashi ko dekhne wale bahut hain. Par Kashi ko jaane wale bahut kam."
                                        Discover the temples without crowds, the shrines that refused to disappear, and the silence beyond the ghats.
                                    </p>
                                    <Link to="/unexplored" className="inline-flex items-center gap-2 text-[#f29066] uppercase tracking-widest hover:gap-4 transition-all">
                                        Discover Secrets <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Top Attractions Preview (Reverse Layout) */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="relative h-96 rounded-lg overflow-hidden group">
                                        <img
                                            src="/Backgrounds/heru.jpeg"
                                            alt="Top Attractions"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Legendary <span className="text-[#ffd900]">Heritage</span>
                                    </h2>
                                    <p className="text-[#e6d1b1] text-lg leading-relaxed">
                                        Witness the grandeur of Kashi Vishwanath, the evening glory of Dashashwamedh, and the architectural marvels that have stood the test of time.
                                    </p>
                                    <Link to="/top" className="inline-flex items-center gap-2 text-[#ffd900] uppercase tracking-widest hover:gap-4 transition-all">
                                        Explore Heritage <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Experience Section - Bento Grid */}
                            <div className="relative py-20 -mx-4 px-4 md:-mx-8 md:px-8 bg-[#120a08]">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f29066_1px,transparent_1px)] [background-size:16px_16px]" />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f1b] via-transparent to-[#120a08] opacity-80" />

                                <div className="relative max-w-7xl mx-auto space-y-12">
                                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Experience <span className="text-[#f29066]">Kashi</span>
                                    </h2>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ gridTemplateRows: 'repeat(2, 320px)' }}>
                                        {/* Column 1 & 2: Standard Cards */}
                                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8" style={{ gridTemplateRows: 'repeat(2, 320px)' }}>

                                            {/* City Life */}
                                            <Link to="/city-life" className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
                                                <img src="/images/city.jpg" alt="City Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                    <div className="flex items-center gap-2 text-orange-400 text-xs font-bold mb-3 uppercase tracking-widest">
                                                        <Users size={16} />
                                                        <span>नगर जीवन</span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white mb-2 font-serif">City Life</h3>
                                                    <p className="text-white/60 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                                                        Experience the vibrant daily rhythms of Varanasi, from morning rituals to evening aartis.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Spirituality */}
                                            <Link to="/spirituality" className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
                                                <img src="/images/sp.jpg" alt="Spirituality" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold mb-3 uppercase tracking-widest">
                                                        <Sparkles size={16} />
                                                        <span>आध्यात्मिकता</span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white mb-2 font-serif">Spirituality</h3>
                                                    <p className="text-white/60 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                                                        Dive deep into the spiritual essence of Kashi through meditation, yoga, and sacred rituals.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Festivals */}
                                            <Link to="/festivals" className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
                                                <img src="/images/fes.jpg" alt="Festivals" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                    <div className="flex items-center gap-2 text-pink-400 text-xs font-bold mb-3 uppercase tracking-widest">
                                                        <Calendar size={16} />
                                                        <span>त्योहार</span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white mb-2 font-serif">Festivals</h3>
                                                    <p className="text-white/60 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                                                        Join the colorful celebrations that bring the city to life throughout the year.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Tourism */}
                                            <Link to="/tourist" className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
                                                <img src="/images/tou.jpg" alt="Tourism" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                    <div className="flex items-center gap-2 text-teal-400 text-xs font-bold mb-3 uppercase tracking-widest">
                                                        <Compass size={16} />
                                                        <span>पर्यटन</span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white mb-2 font-serif">Tourism</h3>
                                                    <p className="text-white/60 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                                                        Plan your perfect journey with guided tours, maps, and insider recommendations.
                                                    </p>
                                                </div>
                                            </Link>

                                        </div>

                                        {/* Column 3: Featured Card (Mahashivratri) */}
                                        <div className="lg:col-span-1 lg:row-span-2 h-[500px] lg:h-auto">
                                            <Link to="/mahashivratri" className="relative block h-full group rounded-3xl overflow-hidden border border-red-500/20 shadow-2xl ring-1 ring-red-500/10">
                                                <img src="/images/maha.jpg" alt="Mahashivratri" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-black/40 to-transparent" />

                                                {/* Featured Badge */}
                                                <div className="absolute top-8 left-8">
                                                    <span className="bg-[#ffd900] text-black text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-yellow-500/20">
                                                        Featured
                                                    </span>
                                                </div>

                                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                                    <div className="flex items-center gap-2 text-red-400 text-sm font-bold mb-4 uppercase tracking-widest">
                                                        <Flame size={20} />
                                                        <span>महाशिवरात्रि</span>
                                                    </div>
                                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                                                        MAHASHIVRATRI
                                                    </h3>
                                                    <p className="text-red-100/70 text-base leading-relaxed group-hover:text-red-100/90 transition-colors">
                                                        Witness the grandest celebration dedicated to Lord Shiva, a night of divine awakening and eternal energy.
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Outro Section */}
                    <OutroSection />
                </>
            )}
        </div>
    );
}
