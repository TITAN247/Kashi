import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Flame, Music, Users, Calendar, Clock, MapPin, Star, Heart, Sparkles, BookOpen, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const rituals = [
    {
        name: 'Shiv Baraat',
        hindi: 'शिव बारात',
        icon: Users,
        description: 'The grand wedding procession of Lord Shiva through the ancient lanes of Varanasi. Participants dress as Shiva (with dreadlocks, tiger-skin, trident, and sometimes live snakes), accompanied by Nandi, ghouls, spirits, and celestial beings. Bronze-masked swordsmen, marching bands, conch shells, and massive drums create a carnival of divine madness. Women along the route offer flowers and sweets.',
        time: 'Evening, day before Mahashivratri',
        image: '/images/maha.jpg'
    },
    {
        name: 'Panchkroshi Parikrama',
        hindi: 'पंचकोशी परिक्रमा',
        icon: MapPin,
        description: 'Hundreds of thousands of barefoot pilgrims undertake this 72-km sacred circumambulation of Kashi, chanting "Har-Har Bam-Bam." The route connects five sacred temples and takes 5 days to complete on foot. Some devotees complete it in a single day of non-stop walking.',
        time: 'Begins 5 days before Mahashivratri',
        image: '/Kashi_Photos/Ghats/Old Panchkoshi Route Shrines.jpeg'
    },
    {
        name: 'Abhishek at Kashi Vishwanath',
        hindi: 'काशी विश्वनाथ अभिषेक',
        icon: Flame,
        description: 'The Jyotirlinga is bathed with milk, yogurt, honey, ghee, water, and sandalwood paste throughout the night. Bilva (bael) leaves, considered most sacred to Shiva, are offered in the thousands. The temple remains open for 24 hours with continuous darshan.',
        time: 'All night, Mahashivratri',
        image: '/images/attraction-vishwanath.jpg'
    },
    {
        name: 'Char Prahar Puja',
        hindi: 'चार प्रहर पूजा',
        icon: Moon,
        description: 'The night is divided into four watches (prahars). In each prahar, a special puja is performed with different offerings — symbolizing the four aspects of human pursuit: Dharma, Artha, Kama, and Moksha. Devotees fast and stay awake through all four.',
        time: 'Four prahars through the night',
        image: '/images/maha.jpg'
    },
    {
        name: 'Haldi Ceremony',
        hindi: 'हल्दी समारोह',
        icon: Star,
        description: 'A unique tradition where haldi (turmeric) is applied to the Shiva Lingam at temples and at the house of the Mahant of the former Kashi Vishwanath temple, as if preparing the groom (Shiva) for his wedding.',
        time: 'Morning of Mahashivratri',
        image: '/images/sp.jpg'
    },
    {
        name: 'Dhrupad Mela',
        hindi: 'ध्रुपद मेला',
        icon: Music,
        description: 'The world-famous Dhrupad music festival held in Varanasi during Mahashivratri week. Dhrupad is the oldest form of Hindustani classical music, considered the music of the gods. Top musicians from across India perform through the night.',
        time: 'Multi-day festival around Mahashivratri',
        image: '/images/fes.jpg'
    },
];

const offerings = [
    { name: 'Bilva Leaves (बेलपत्र)', description: 'The three-leaved bael is Shiva\'s most beloved offering, representing his three eyes.' },
    { name: 'Milk (दूध)', description: 'Poured over the Lingam to cool Shiva\'s fiery energy from the poison he consumed.' },
    { name: 'Datura Flowers', description: 'The thorny, intoxicating flower is sacred to Shiva — what is poison to others is nectar to him.' },
    { name: 'Bhang & Thandai', description: 'Cannabis-infused drink associated with Shiva\'s ascetic practices. Consumed by devotees as prasad.' },
    { name: 'Vibhuti (Sacred Ash)', description: 'Applied to the forehead in three lines, symbolizing the destruction of ego, karma, and maya.' },
    { name: 'Rudraksha Mala', description: 'Beads formed from Shiva\'s tears, worn during worship for spiritual power and protection.' },
];

const legends = [
    {
        title: 'The Divine Marriage',
        description: 'Mahashivratri celebrates the cosmic wedding of Lord Shiva and Goddess Parvati — the union of consciousness (Purusha) and energy (Prakriti). Their marriage symbolizes the balance of all opposing forces in the universe: creation and destruction, stillness and movement, the ascetic and the householder.',
    },
    {
        title: 'Samudra Manthan — The Churning of the Ocean',
        description: 'When the cosmic ocean was churned by gods and demons, a deadly poison (Halahala) emerged that threatened all creation. Lord Shiva drank the poison to save the universe, holding it in his throat which turned blue — earning him the name Neelkanth. Mahashivratri honors this supreme sacrifice.',
    },
    {
        title: 'The Night of the Tandava',
        description: 'Hindu tradition holds that on this night, Lord Shiva performs the Tandava — the cosmic dance of creation, preservation, and destruction. His dance sustains the rhythm of the universe, and witnessing or meditating upon it on this night grants spiritual liberation.',
    },
    {
        title: 'The Lingam of Light',
        description: 'It is believed that on Mahashivratri, Shiva first manifested as an infinite pillar of light (Jyotirlinga) — without beginning or end. Both Brahma and Vishnu could not find its extent. The 12 Jyotirlingas across India, including Kashi Vishwanath, commemorate this event.',
    },
];

const timeline = [
    { time: '3:00 AM', event: 'Mangala Aarti & first Abhishek at Kashi Vishwanath' },
    { time: '5:00 AM', event: 'Devotees begin arriving, queues stretch for kilometers' },
    { time: '8:00 AM', event: 'Haldi ceremony at prominent temples' },
    { time: '12:00 PM', event: 'Continuous darshan, fasting devotees recite Shiva stotras' },
    { time: '4:00 PM', event: 'Preparations for Shiv Baraat begin across the city' },
    { time: '6:00 PM', event: 'Grand Ganga Aarti at Dashashwamedh Ghat' },
    { time: '7:00 PM', event: 'Shiv Baraat processions begin through old city lanes' },
    { time: '9:00 PM', event: 'First Prahar Puja begins at temples' },
    { time: '12:00 AM', event: 'Second Prahar — the peak of spiritual energy' },
    { time: '3:00 AM', event: 'Third Prahar — the deepest hour of meditation' },
    { time: '5:00 AM', event: 'Fourth Prahar — dawn approaches, devotees break their fast' },
    { time: '6:00 AM', event: 'Sunrise — a new dawn after the Great Night' },
];

export default function MahashivratriPage() {
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
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/mahashivratri.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/50 to-[#1a0f2e]/60" />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 rounded-full bg-[#ffd900]/30 animate-pulse"
                            style={{ left: `${10 + Math.random() * 80}%`, top: `${20 + Math.random() * 60}%`, animationDelay: `${Math.random() * 3}s` }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center px-4">
                    <span className="text-[#c084fc] tracking-[0.3em] uppercase text-sm mb-4 block">ॐ नमः शिवाय</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Maha<span className="text-[#c084fc]">shivratri</span>
                    </h1>
                    <p className="text-[#e6d1b1]/80 text-lg max-w-2xl mx-auto mb-6">
                        The Great Night of Shiva — when the divine descends upon Kashi, when darkness becomes light, and when the cosmos itself bows to Mahadev.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm text-[#e6d1b1]/60">
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-[#c084fc]" /> February / March</span>
                        <span className="flex items-center gap-2"><Clock size={14} className="text-[#c084fc]" /> 24-Hour Celebration</span>
                        <span className="flex items-center gap-2"><Users size={14} className="text-[#c084fc]" /> Millions of Devotees</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Significance */}
                <section className="reveal-card">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#c084fc] tracking-[0.3em] uppercase text-xs">Significance</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Why <span className="text-[#c084fc]">Kashi</span>?
                        </h2>
                        <p className="text-lg text-[#e6d1b1]/80 leading-relaxed mb-6">
                            While Mahashivratri is celebrated across India, nowhere on earth does it hold as much significance as in Varanasi — the city that Lord Shiva himself chose as his eternal abode. Kashi is not just where Shiva lives; it <em>is</em> Shiva. The entire city is a Lingam, and on this night, the cosmic energy is believed to be at its absolute peak.
                        </p>
                        <p className="text-lg text-[#e6d1b1]/80 leading-relaxed">
                            Over 8 lakh devotees throng the Kashi Vishwanath Temple alone. The temple remains open for 24 hours. The entire old city becomes a procession route. And the Ganges — already sacred — is believed to become the very nectar of immortality on this night.
                        </p>
                    </div>
                </section>

                {/* Legends */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#c084fc] tracking-[0.3em] uppercase text-xs">पौराणिक कथाएँ</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            The <span className="text-[#c084fc]">Legends</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {legends.map((legend, i) => (
                            <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#c084fc]/10 hover:border-[#c084fc]/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen size={18} className="text-[#c084fc]" />
                                    <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{legend.title}</h3>
                                </div>
                                <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{legend.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Rituals */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#c084fc] tracking-[0.3em] uppercase text-xs">अनुष्ठान</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Rituals & <span className="text-[#c084fc]">Traditions</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-8">
                            {rituals.map((ritual, i) => {
                                const Icon = ritual.icon;
                                return (
                                    <div key={i} className="reveal-card group rounded-2xl bg-[#1a1410] border border-[#c084fc]/10 hover:border-[#c084fc]/25 transition-all duration-500 overflow-hidden">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                                                {/* @ts-ignore */}
                                                <img src={ritual.image} alt={ritual.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent md:bg-gradient-to-r" />
                                            </div>
                                            <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2 rounded-lg bg-[#c084fc]/10">
                                                        <Icon size={20} className="text-[#c084fc]" />
                                                    </div>
                                                    <span className="text-xs text-[#c084fc]/60 font-bold uppercase tracking-wider">{ritual.time}</span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{ritual.name}</h3>
                                                <p className="text-sm text-[#c084fc]/50 mb-3">{ritual.hindi}</p>
                                                <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{ritual.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#c084fc] tracking-[0.3em] uppercase text-xs">24 Hours</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            The Great <span className="text-[#c084fc]">Night</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">A hour-by-hour journey through Mahashivratri in Varanasi.</p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {timeline.map((item, i) => (
                            <div key={i} className="reveal-card flex gap-6 mb-0">
                                {/* Timeline line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-[#c084fc] border-2 border-[#2a1f1b] shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
                                    {i < timeline.length - 1 && <div className="w-[1px] flex-1 bg-[#c084fc]/20 min-h-[40px]" />}
                                </div>
                                {/* Content */}
                                <div className="pb-8">
                                    <span className="text-sm font-bold text-[#c084fc]">{item.time}</span>
                                    <p className="text-sm text-[#e6d1b1]/70 mt-1">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sacred Offerings */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#c084fc] tracking-[0.3em] uppercase text-xs">अर्पण</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Sacred <span className="text-[#c084fc]">Offerings</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">What pleases Mahadev — the offerings that carry deep cosmic symbolism.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {offerings.map((item, i) => (
                            <div key={i} className="reveal-card p-5 rounded-xl bg-[#1a1410] border border-[#c084fc]/10 hover:border-[#c084fc]/30 transition-all duration-500">
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={14} className="text-[#c084fc]" />
                                    <h3 className="text-sm font-bold">{item.name}</h3>
                                </div>
                                <p className="text-xs text-[#e6d1b1]/60 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Closing */}
                <section className="reveal-card text-center py-16 border-y border-[#c084fc]/10">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-[#c084fc]/10">
                            <Eye size={32} className="text-[#c084fc]" />
                        </div>
                    </div>
                    <blockquote className="text-2xl md:text-4xl text-[#c084fc]/80 italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
                        "जब शिव खुद बाराती बनकर निकलते हैं, तो काशी दुल्हन बन जाती है।"
                    </blockquote>
                    <p className="text-lg text-[#e6d1b1]/60 mt-4">When Shiva himself becomes the groom, Kashi becomes the bride.</p>
                    <div className="flex items-center justify-center gap-2 mt-8 text-[#e6d1b1]/40 text-sm">
                        <Heart size={14} className="text-[#c084fc] fill-[#c084fc]" />
                        <span>हर हर महादेव</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
