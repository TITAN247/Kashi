import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ShoppingBag, Train, Building2, Store, Landmark, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modernLandmarks = [
    {
        name: 'Kashi Vishwanath Corridor',
        hindi: 'काशी विश्वनाथ धाम',
        description: 'A monumental ₹800 crore revitalization project connecting the ancient Kashi Vishwanath Temple directly to the Ganga ghats. Spanning 5 lakh sq ft, it features 24 buildings with museums, galleries, a Mumukshu Bhavan, and a Mandir Chowk — transforming the temple precinct into a world-class spiritual destination.',
        category: 'Landmark',
        icon: Landmark,
        image: '/images/attraction-vishwanath.jpg'
    },
    {
        name: 'Swarved Mahamandir',
        hindi: 'स्वर्वेद महामंदिर',
        description: 'A magnificent 7-floor meditation center adorned with 3,000 verses of the Swarveda carved into its walls. Built with modern architecture and surrounded by lush gardens, it is dedicated to Vihangam Yoga and can accommodate 20,000 meditators simultaneously.',
        category: 'Spiritual',
        icon: Building2,
        image: '/images/sp.jpg'
    },
    {
        name: 'Varanasi Cantt Railway Station',
        hindi: 'वाराणसी कैंट रेलवे स्टेशन',
        description: 'The main gateway to the city, undergoing a ₹328 crore modernization with state-of-the-art amenities, covered platforms, escalators, and a new concourse. The station handles millions of pilgrims annually, especially during festivals.',
        category: 'Transport',
        icon: Train,
        image: '/images/city.jpg'
    },
    {
        name: 'Lal Bahadur Shastri International Airport',
        hindi: 'लाल बहादुर शास्त्री अंतर्राष्ट्रीय हवाई अड्डा',
        description: 'Named after India\'s second Prime Minister, this airport connects Varanasi to major cities and international destinations. The renovated terminal features modern facilities with design elements inspired by the city\'s spiritual heritage.',
        category: 'Transport',
        icon: Building2,
        image: '/images/tou.jpg'
    },
    {
        name: 'Banaras Hindu University (BHU)',
        hindi: 'काशी हिन्दू विश्वविद्यालय',
        description: 'One of Asia\'s largest residential universities, founded in 1916 by Madan Mohan Malaviya. The sprawling 1,300-acre campus houses the stunning New Vishwanath Temple, Bharat Kala Bhavan museum, and is itself a city within a city.',
        category: 'Education',
        icon: Landmark,
        image: '/Kashi_Photos/Temples/Kashi Vishwanath (Golden Temple).jpg' // Placeholder, will fix path if invalid
    },
    {
        name: 'Rudraksha Convention Centre',
        hindi: 'रुद्राक्ष कन्वेंशन सेंटर',
        description: 'Built with Japanese assistance by JICA, this international convention centre hosts cultural events, diplomatic summits, and performances. Its architecture blends modern design with spiritual symbolism, including a Rudraksha-shaped facade.',
        category: 'Modern',
        icon: Building2,
        image: '/images/city.jpg'
    },
];

const markets = [
    {
        name: 'Godowlia Market',
        hindi: 'गोदौलिया बाज़ार',
        description: 'The beating heart of Banaras commerce. Famous for Banarasi silk sarees, brocade fabrics, jewelry, and handicrafts. The narrow lanes burst with life from dawn to late night.',
        specialty: 'Banarasi Silk, Jewelry, Handicrafts',
        image: '/images/city.jpg'
    },
    {
        name: 'Vishwanath Gali',
        hindi: 'विश्वनाथ गली',
        description: 'The bustling lane leading to the Kashi Vishwanath Temple. Every inch of this lane sells religious offerings, sweets, handmade toys, bangles, dupattas, and the famous Banarasi Paan.',
        specialty: 'Religious Items, Sweets, Paan',
        image: '/images/attraction-vishwanath.jpg'
    },
    {
        name: 'Thatheri Bazar',
        hindi: 'ठठेरी बाज़ार',
        description: 'A UNESCO-recognized intangible heritage market, famous for exquisite brass and copper utensils. Artisans here have practiced the craft for generations, creating everything from temple bells to ritual vessels.',
        specialty: 'Brassware, Copperware, Temple Bells',
        image: '/images/unexplored-1.jpg'
    },
    {
        name: 'Lahurabir Market',
        hindi: 'लहुराबीर बाज़ार',
        description: 'A large commercial area known for electronics, clothing, and daily essentials. Named after the local deity Lahurabir, this market is always buzzing with local shoppers.',
        specialty: 'Electronics, Clothing, Daily Goods',
        image: '/images/city.jpg'
    },
    {
        name: 'Golghar Market',
        hindi: 'गोलघर मार्केट',
        description: 'One of the biggest markets in Varanasi — a one-stop destination for daily necessities, gift items, designer footwear, and trendy fashion. Always crowded and always alive.',
        specialty: 'Fashion, Footwear, Gift Items',
        image: '/images/city.jpg'
    },
    {
        name: 'Dal Mandi',
        hindi: 'दाल मंडी',
        description: 'A prominent wholesale garment hub offering high-quality salwar suits, sarees, and ethnic wear at wholesale prices. A paradise for bulk buyers and bargain hunters.',
        specialty: 'Wholesale Garments, Sarees',
        image: '/images/city.jpg'
    },
];

const malls = [
    { name: 'JHV Mall', location: 'Cantonment Area', description: 'Varanasi\'s largest and most popular mall with international brands, gaming zone, food court, and PVR multiplex.', image: '/images/city.jpg' },
    { name: 'IP Sigra Mall', location: 'Sigra', description: 'The city\'s first mall. Houses IP Cinemas multiplex, branded clothing outlets, and fast-food chains.', image: '/images/city.jpg' },
    { name: 'IP Vijaya Mall', location: 'Sigra', description: 'Multi-storied shopping complex offering everything from graphic tees to Banarasi silk sarees, plus IP Cinemas.', image: '/images/city.jpg' },
    { name: 'PDR Mall', location: 'Sidhgiribagh', description: 'Modern shopping experience with retail stores, entertainment zones, a cinema hall, and diverse eateries.', image: '/images/city.jpg' },
    { name: 'Vinayak Plaza', location: 'Nadesar', description: 'Trendy mall featuring brands like Ritu Kumar, Reliance Trends, an entertainment zone, and casual dining.', image: '/images/city.jpg' },
];

const foodSpots = [
    { name: 'Kachori at Ram Bhandar', specialty: 'Since 1927, the legendary kachori-sabzi breakfast of Banaras.', image: '/images/city.jpg' },
    { name: 'Blue Lassi', specialty: 'World-famous lassi shop near Manikarnika Ghat, running since 1925.', image: '/images/city.jpg' },
    { name: 'Deena Chaat Bhandar', specialty: 'Iconic chaat corner at Godowlia known for tamatar chaat & tikki.', image: '/images/city.jpg' },
    { name: 'Baati Chokha', specialty: 'Traditional UP cuisine — roasted wheat balls with mashed veggies & ghee.', image: '/images/city.jpg' },
    { name: 'Malaiyo', specialty: 'Winter-only street delicacy — saffron-infused milk foam, ephemeral and divine.', image: '/images/city.jpg' },
    { name: 'Pizzeria Vaatika Café', specialty: 'Legendary rooftop café at Assi Ghat with Ganga views and wood-fired pizzas.', image: '/images/attraction-assighat.jpg' },
    { name: 'Kashi Chaat Bhandar', specialty: 'Famous for palak chaat, dahi puri, and the chaos of flavors.', image: '/images/city.jpg' },
    { name: 'Bati Chokha Restaurant', specialty: 'Full-service restaurant serving authentic Banarasi thalis and regional cuisine.', image: '/images/city.jpg' },
];

export default function CityLifePage() {
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
            {/* Hero Banner */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/city.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/60 to-transparent" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">बनारस का आधुनिक रूप</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        City <span className="text-[#f29066]">Life</span>
                    </h1>
                    <p className="text-[#e6d1b1]/80 text-lg max-w-2xl mx-auto">
                        Where ancient traditions meet modern aspirations. The chaos, the charm, the commerce — this is Banaras, alive and evolving.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Modern Landmarks */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">Landmarks</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Modern <span className="text-[#f29066]">Varanasi</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">The eternal city is transforming — monumental projects are reshaping its skyline while honoring its soul.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modernLandmarks.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="reveal-card group rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#f29066]/5 overflow-hidden">
                                    <div className="h-48 overflow-hidden relative">
                                        {/* @ts-ignore */}
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                                        <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                                            <Icon size={16} className="text-[#f29066]" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] uppercase tracking-widest text-[#f29066]">{item.category}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#f8f5f2] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{item.name}</h3>
                                        <p className="text-xs text-[#f29066]/60 mb-3">{item.hindi}</p>
                                        <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Famous Markets */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">बाज़ार</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Famous <span className="text-[#f29066]">Markets</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">Centuries-old bazaars where every lane tells a story, every shop holds a treasure.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {markets.map((market, i) => (
                            <div key={i} className="reveal-card group rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500 overflow-hidden">
                                <div className="h-40 overflow-hidden relative">
                                    {/* @ts-ignore */}
                                    <img src={market.image} alt={market.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Store size={14} className="text-[#f29066]" />
                                        <span className="text-xs text-[#e6d1b1]/60 uppercase tracking-wider">Market</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{market.name}</h3>
                                    <p className="text-xs text-[#f29066]/60 mb-3">{market.hindi}</p>
                                    <p className="text-sm text-[#e6d1b1]/70 leading-relaxed mb-4">{market.description}</p>
                                    <div className="flex items-center gap-2 pt-4 border-t border-[#f29066]/10">
                                        <ShoppingBag size={12} className="text-[#f29066]" />
                                        <span className="text-xs text-[#f29066]/80">{market.specialty}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Malls */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">Shopping</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Malls & <span className="text-[#f29066]">Plazas</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {malls.map((mall, i) => (
                            <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500">
                                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{mall.name}</h3>
                                <p className="text-xs text-[#f29066]/60 mb-3 flex items-center gap-1"><MapPin size={10} /> {mall.location}</p>
                                <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{mall.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Street Food */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">स्वाद</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Street <span className="text-[#f29066]">Food</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">No journey through Banaras is complete without tasting its soul. Here are the legendary spots.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {foodSpots.map((food, i) => (
                            <div key={i} className="reveal-card group rounded-xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500 overflow-hidden">
                                <div className="h-32 overflow-hidden relative">
                                    {/* @ts-ignore */}
                                    <img src={food.image} alt={food.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent opacity-80" />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Coffee size={14} className="text-[#f29066]" />
                                        <h3 className="text-sm font-bold truncate">{food.name}</h3>
                                    </div>
                                    <p className="text-xs text-[#e6d1b1]/60 leading-relaxed line-clamp-2">{food.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote Section */}
                <section className="reveal-card text-center py-16 border-y border-[#f29066]/10">
                    <blockquote className="text-2xl md:text-4xl text-[#f29066]/80 italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
                        "Banaras is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."
                    </blockquote>
                    <p className="text-sm text-[#e6d1b1]/40 mt-6 tracking-wider">— Mark Twain</p>
                </section>
            </div>
        </div>
    );
}
