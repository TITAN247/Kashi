import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Star, Flame, Music, Droplets, Sun, Moon, Sparkles, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Festival {
    name: string;
    hindi: string;
    month: string;
    description: string;
    highlights: string[];
    icon: typeof Calendar;
    color: string;
    image?: string;
}

const festivals: Festival[] = [
    {
        name: 'Mahashivratri',
        hindi: 'महाशिवरात्रि',
        month: 'February / March',
        description: 'The Great Night of Shiva — the biggest festival in Varanasi. The city transforms into an open-air temple as millions gather for the divine wedding procession (Shiv Baraat), all-night prayers, and cosmic celebrations at Kashi Vishwanath.',
        highlights: ['Shiv Baraat procession through old city', 'All-night darshan at Kashi Vishwanath', 'Panchkroshi Parikrama by barefoot pilgrims', 'Dhrupad Mela classical music festival'],
        icon: Moon,
        color: '#c084fc',
        image: '/images/maha.jpg'
    },
    {
        name: 'Dev Deepawali',
        hindi: 'देव दीपावली',
        month: 'November (Kartik Purnima)',
        description: 'The Diwali of the Gods. On the full moon of Kartik, the gods descend to bathe in the Ganges. Every ghat is illuminated with over a million earthen diyas, creating a river of light that has no parallel on earth.',
        highlights: ['1 million+ diyas on 84 ghats', 'Fireworks reflected in the Ganga', 'Special Ganga Aarti on all ghats', 'Cultural performances & boat parades'],
        icon: Flame,
        color: '#ffd900',
        image: '/images/fes.jpg'
    },
    {
        name: 'Holi & Rangbhari Ekadashi',
        hindi: 'होली & रंगभरी एकादशी',
        month: 'March',
        description: 'Holi in Banaras starts early with Rangbhari Ekadashi at Kashi Vishwanath, where even Lord Shiva plays with colors. The celebrations then explode across the city with thandai, bhang, gulal, and music in every lane.',
        highlights: ['Rangbhari Ekadashi at Kashi Vishwanath', 'Thandai & Bhang in every gali', 'Music & dance at the ghats', 'Week-long celebrations across the city'],
        icon: Droplets,
        color: '#f472b6',
        image: '/images/fes.jpg'
    },
    {
        name: 'Ganga Dussehra',
        hindi: 'गंगा दशहरा',
        month: 'May / June',
        description: 'Celebrates the descent of the holy Ganga from heaven to earth. Thousands take sacred dips, perform rituals, and float diyas on the river, honoring the life-giving force that sustains Kashi.',
        highlights: ['Mass sacred dips at all ghats', 'Floating diya ceremonies', 'Special puja at Dashashwamedh', 'Boat processions on the Ganga'],
        icon: Droplets,
        color: '#60a5fa',
        image: '/images/hero-ganga-waves.jpg'
    },
    {
        name: 'Shravan Maah',
        hindi: 'सावन का महीना',
        month: 'July / August',
        description: 'The holiest month for Lord Shiva. Millions of Kanwariyas walk barefoot carrying Ganga water to offer at Kashi Vishwanath. Every Monday is a mega-event with special prayers and fasting.',
        highlights: ['Millions of Kanwariya pilgrims', 'Special Monday fasts & prayers', 'Decorated temples across the city', 'Bol Bam chants echo through streets'],
        icon: Star,
        color: '#4ade80',
        image: '/images/attraction-vishwanath.jpg'
    },
    {
        name: 'Navratri & Durga Puja',
        hindi: 'नवरात्रि & दुर्गा पूजा',
        month: 'September / October',
        description: 'Nine nights of Goddess Durga worship. Massive pandals are erected, classical dance performances fill the evenings, and the city buzzes with the energy of the divine feminine.',
        highlights: ['Grand pandals across the city', 'Garba & Dandiya nights', 'Classical music performances', 'Vijayadashami idol immersion'],
        icon: Star,
        color: '#f29066',
        image: '/images/fes.jpg'
    },
    {
        name: 'Ram Leela & Bharat Milap',
        hindi: 'रामलीला & भारत मिलाप',
        month: 'October',
        description: 'The legendary Ramnagar Ram Leela, organized by the Kashi Naresh for over 200 years, is a month-long dramatic retelling of the Ramayana. It culminates in the emotional Bharat Milap — the reunion of Lord Ram with his brother Bharat.',
        highlights: ['200+ year old tradition', 'Month-long at Ramnagar Fort', 'Kashi Naresh leads the audience', 'Bharat Milap\'s emotional climax'],
        icon: Heart,
        color: '#e6d1b1',
        image: '/images/fes.jpg'
    },
    {
        name: 'Makar Sankranti',
        hindi: 'मकर संक्रान्ति',
        month: 'January',
        description: 'Marks the sun\'s northward journey. Varanasi celebrates with sacred dips, kite flying over the ghats, and sesame-jaggery sweets (til-gur). The sky above the Ganga becomes a canvas of colorful kites.',
        highlights: ['Kite flying over the Ganga', 'Sacred dips at all ghats', 'Til-Gur & Khichdi feasts', 'Bonfires at the ghats'],
        icon: Sun,
        color: '#fb923c',
        image: '/images/fes.jpg'
    },
    {
        name: 'Ganga Mahotsav',
        hindi: 'गंगा महोत्सव',
        month: 'November',
        description: 'A 5-day cultural extravaganza organized by UP Tourism, celebrating the sacred Ganges with classical music, folk dance, boat races, and wrestling competitions on the ghats.',
        highlights: ['Classical music at Dashashwamedh', 'Boat races on the Ganga', 'Wrestling (Kushti) competitions', 'Craft exhibitions & food stalls'],
        icon: Music,
        color: '#7dd3fc',
        image: '/images/hero-ganga-waves.jpg'
    },
    {
        name: 'Annakut (Govardhan Puja)',
        hindi: 'अन्नकूट',
        month: 'October / November',
        description: 'The day after Diwali, temples prepare mountains of food offerings (up to 56 varieties — Chhappan Bhog) to Lord Krishna. Vishwanath Temple and other shrines are piled high with sweets and dishes.',
        highlights: ['56 varieties of food offerings', 'Chhappan Bhog at temples', 'Community feasting', 'Temple decoration competitions'],
        icon: Sparkles,
        color: '#a78bfa',
        image: '/images/fes.jpg'
    },
    {
        name: 'Buddha Purnima',
        hindi: 'बुद्ध पूर्णिमा',
        month: 'May',
        description: 'Sarnath, just 10 km from Varanasi, becomes the epicenter of Buddhist celebrations as monks and devotees gather to honor Buddha\'s birth, enlightenment, and passing at the very spot of his first sermon.',
        highlights: ['Grand celebrations at Sarnath', 'International Buddhist gatherings', 'Meditation & prayer ceremonies', 'Dhamek Stupa illuminated'],
        icon: Sun,
        color: '#fde047',
        image: '/images/fes.jpg'
    },
    {
        name: 'Hanuman Jayanti',
        hindi: 'हनुमान जयंती',
        month: 'April',
        description: 'Special celebrations at the famous Sankat Mochan Temple, founded by Tulsidas himself. Devotees throng the temple for darshan, and the famous Sankat Mochan Sangeet Samaroh (music festival) is held.',
        highlights: ['Grand puja at Sankat Mochan', 'Sankat Mochan Sangeet Samaroh', '5-day classical music festival', 'Free prasad distribution'],
        icon: Star,
        color: '#fb7185',
        image: '/images/attraction-sankatmochan.jpg'
    },
];

const dailyRituals = [
    { name: 'Subah-e-Banaras', time: '5:00 AM', place: 'Assi Ghat', description: 'Morning aarti with yoga, meditation, and devotional music as the first rays of sun touch the Ganga.' },
    { name: 'Ganga Aarti', time: '6:30 PM', place: 'Dashashwamedh Ghat', description: 'The world-famous evening ceremony with synchronized priests, multi-tiered lamps, conch shells, and chanting.' },
    { name: 'Mangala Aarti', time: '3:00 AM', place: 'Kashi Vishwanath', description: 'The first aarti of the day at the Jyotirlinga, when the Shiva Lingam is bathed and adorned.' },
];

export default function FestivalsPage() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.reveal-card').forEach((el: any) => {
                gsap.fromTo(el,
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen bg-[#2a1f1b] text-[#f8f5f2]">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/festivals.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/60 to-transparent" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">उत्सव की नगरी</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Festivals of <span className="text-[#f29066]">Kashi</span>
                    </h1>
                    <p className="text-[#e6d1b1]/80 text-lg max-w-2xl mx-auto">
                        In Varanasi, every day is a festival. Every month brings a new reason to celebrate the divine. Here is the sacred calendar of the world's oldest living city.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Daily Rituals */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">Every Day</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Daily <span className="text-[#f29066]">Rituals</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">These timeless ceremonies happen every single day, rain or shine, without fail.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dailyRituals.map((ritual, i) => (
                            <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#f29066]/20 text-center">
                                <span className="text-3xl font-bold text-[#f29066]" style={{ fontFamily: 'Playfair Display, serif' }}>{ritual.time}</span>
                                <h3 className="text-xl font-bold mt-2 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{ritual.name}</h3>
                                <p className="text-xs text-[#f29066]/60 mb-3">{ritual.place}</p>
                                <p className="text-sm text-[#e6d1b1]/70">{ritual.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Festival Calendar */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">Sacred Calendar</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Annual <span className="text-[#f29066]">Celebrations</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {festivals.map((fest, i) => {
                            const Icon = fest.icon;
                            return (
                                <div key={i} className="reveal-card rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/25 transition-all duration-500 overflow-hidden group">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                                            {fest.image ? (
                                                <>
                                                    <img
                                                        src={fest.image}
                                                        alt={fest.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent md:bg-gradient-to-r" />
                                                </>
                                            ) : (
                                                <div className="w-full h-full bg-[#2a1f1b] flex items-center justify-center">
                                                    <Icon size={48} style={{ color: fest.color, opacity: 0.2 }} />
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4 md:hidden">
                                                <div className="p-2 rounded-lg backdrop-blur-md bg-black/30 border border-white/10">
                                                    <Icon size={20} style={{ color: fest.color }} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="hidden md:flex p-2 rounded-lg bg-[#f29066]/10">
                                                            <Icon size={18} style={{ color: fest.color }} />
                                                        </span>
                                                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: fest.color }}>{fest.month}</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-[#f8f5f2]" style={{ fontFamily: 'Playfair Display, serif' }}>{fest.name}</h3>
                                                    <p className="text-sm text-[#f29066]/50">{fest.hindi}</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-[#e6d1b1]/70 leading-relaxed mb-6">{fest.description}</p>

                                            {/* Highlights */}
                                            <div className="flex flex-wrap gap-2">
                                                {fest.highlights.map((h, j) => (
                                                    <span key={j} className="text-[10px] px-3 py-1 rounded-full border bg-[#f29066]/5" style={{ borderColor: `${fest.color}30`, color: `${fest.color}cc` }}>
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Quote */}
                <section className="reveal-card text-center py-16 border-y border-[#f29066]/10">
                    <blockquote className="text-2xl md:text-4xl text-[#f29066]/80 italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
                        "काशी में हर दिन एक त्योहार है, हर रात एक उत्सव।"
                    </blockquote>
                    <p className="text-sm text-[#e6d1b1]/60 mt-4">Every day in Kashi is a festival, every night a celebration.</p>
                </section>
            </div>
        </div>
    );
}
