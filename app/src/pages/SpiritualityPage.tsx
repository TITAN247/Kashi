import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, BookOpen, Waves, Sun, Moon, Heart, Eye, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const temples = [
    {
        name: 'Kashi Vishwanath Temple',
        hindi: 'काशी विश्वनाथ मंदिर',
        description: 'The holiest Shiva shrine in the world and one of the 12 Jyotirlingas. The temple has been destroyed and rebuilt multiple times over millennia. The current structure was built by Ahilyabai Holkar in 1780, and the gold plating on the dome was donated by Maharaja Ranjit Singh.',
        significance: 'Liberation (Moksha) for all who worship here',
        image: '/images/attraction-vishwanath.jpg'
    },
    {
        name: 'Sankat Mochan Temple',
        hindi: 'संकट मोचन हनुमान मंदिर',
        description: 'Founded by the great poet-saint Tulsidas at the spot where he had a vision of Lord Hanuman. The temple is believed to relieve all troubles (sankat) of devotees. Its besan ladoos are famous across India.',
        significance: 'Relief from all sorrows and obstacles',
        image: '/images/attraction-sankatmochan.jpg'
    },
    {
        name: 'Kaal Bhairav Temple',
        hindi: 'काल भैरव मंदिर',
        description: 'Dedicated to the fierce form of Shiva as the guardian (Kotwal) of Kashi. Ancient tradition says one must visit Kaal Bhairav before any other deity in Varanasi. Liquor is offered as prasad — a unique practice found nowhere else.',
        significance: 'Guardian deity of Kashi, Kotwal of Varanasi',
        image: '/Kashi_Photos/Temples/Batuk Bhairav Temple.jpg' // Use Batuk as proxy if Kaal Bhairav missing, or find specific
    },
    {
        name: 'Annapurna Temple',
        hindi: 'अन्नपूर्णा मंदिर',
        description: 'Dedicated to Maa Annapurna, the Goddess of Food. Legend says Goddess Parvati took this form to feed the hungry when Shiva renounced the world. The temple is adorned with a gold idol and intricate silver work.',
        significance: 'May no one in Kashi ever go hungry',
        image: '/Kashi_Photos/Temples/Annapurna Devi Old Shrine.jpg'
    },
    {
        name: 'Durga Temple (Monkey Temple)',
        hindi: 'दुर्गा मंदिर',
        description: 'An 18th-century temple built in Nagara architectural style, dedicated to Goddess Durga. The temple is known for its deep red color symbolizing the power of the feminine divine. The surrounding pond (Durga Kund) adds to its beauty.',
        significance: 'Power of the divine feminine (Shakti)',
        image: '/Kashi_Photos/Ghats/Durga Kund Old Steps.jpg' // Best proxy available from list
    },
    {
        name: 'Tulsi Manas Temple',
        hindi: 'तुलसी मानस मंदिर',
        description: 'Built at the spot where Goswami Tulsidas composed the Ramcharitmanas — the Hindi retelling of the Ramayana that transformed Indian devotion. The entire epic is carved into the temple walls in marble.',
        significance: 'Where the Ramcharitmanas was written',
        image: '/images/sp.jpg'
    },
];

const sacredPractices = [
    {
        name: 'Ganga Snan (Sacred Dip)',
        icon: Waves,
        description: 'Pilgrims believe that bathing in the Ganges at Varanasi purifies the soul, washes away sins of this life and past lives, and earns spiritual merit. The most auspicious ghats for bathing are Dashashwamedh, Assi, Manikarnika, and Panchganga.',
    },
    {
        name: 'Ganga Aarti',
        icon: Flame,
        description: 'The world-famous evening ceremony at Dashashwamedh Ghat. Seven priests perform synchronized rituals with multi-tiered brass lamps, conch shells, and incense, while Vedic chanting fills the air. A morning aarti (Subah-e-Banaras) also takes place at Assi Ghat with yoga and devotional music.',
    },
    {
        name: 'Moksha — Liberation Through Death',
        icon: Sun,
        description: 'Varanasi is the only city where death is considered a celebration. Hindus believe that dying in Kashi grants automatic moksha — liberation from the cycle of rebirth. Lord Shiva himself whispers the Taraka Mantra into the ears of the dying. The cremation fires at Manikarnika Ghat have burned continuously for over 3,000 years.',
    },
    {
        name: 'Pind Daan & Shraddh',
        icon: Heart,
        description: 'Sacred rituals performed to offer prayers, food, and spiritual merit to deceased ancestors, ensuring their peaceful passage to the afterlife. Varanasi is one of the most important places in India for performing these rites, especially at Pishach Mochan Kund.',
    },
    {
        name: 'Rudra Abhishek',
        icon: Moon,
        description: 'A profound Vedic ceremony dedicated to Lord Shiva, performed at the Kashi Vishwanath Temple. The Shiva Lingam is bathed with milk, yogurt, honey, ghee, and water while 11 chapters of the Rudram are chanted. It is believed to purify karma and fulfill wishes.',
    },
    {
        name: 'Deep Daan (Lamp Offering)',
        icon: Flame,
        description: 'Devotees place lit oil lamps in small leaf boats and set them floating on the Ganga at dusk. Each lamp carries a prayer, a wish, or a memory of a loved one. The sight of thousands of floating lights on the dark Ganga is hauntingly beautiful.',
    },
];

const sacredTexts = [
    { name: 'Kashi Khand (Skanda Purana)', description: 'The primary scripture glorifying Kashi, describing it as Shiva\'s eternal city that exists on his Trident and will survive even the great dissolution (Mahapralaya).' },
    { name: 'Ramcharitmanas', description: 'Composed by Tulsidas in Varanasi, this Hindi retelling of the Ramayana transformed devotion across North India and is recited daily in millions of homes.' },
    { name: 'Kabir Dohe', description: 'The mystic poet Kabir, born and raised in Varanasi, created verses that challenged caste, dogma, and religious boundaries — still quoted today as the voice of truth.' },
    { name: 'The Vedas', description: 'Hindu tradition holds that Lord Shiva first revealed the four Vedas to the Saptarishis on the ghats of Kashi, making it the original seat of knowledge.' },
];

const yogaMeditation = [
    { name: 'Assi Ghat Morning Yoga', description: 'Free community yoga sessions at dawn, part of the Subah-e-Banaras program. Practitioners salute the sun as it rises over the Ganga.' },
    { name: 'Sarnath Meditation', description: 'The Dhamek Stupa area in Sarnath, where Buddha gave his first sermon, remains a powerful meditation spot. Buddhist monasteries offer retreats and vipassana courses.' },
    { name: 'Ashram Retreats', description: 'Numerous ashrams along the ghats offer immersive spiritual retreats combining yoga, meditation, Ayurveda, Sanskrit studies, and classical music training.' },
    { name: 'Vihangam Yoga (Swarved Mahamandir)', description: 'The newly built 7-floor Swarved Mahamandir offers Vihangam Yoga — an ancient meditation technique focusing on the soul\'s journey to its divine source.' },
];

export default function SpiritualityPage() {
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
                <div className="absolute inset-0 bg-[url('/images/spirituality.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1b] via-[#2a1f1b]/60 to-transparent" />
                <div className="relative z-10 text-center px-4">
                    <span className="text-[#f29066] tracking-[0.3em] uppercase text-sm mb-4 block">आध्यात्म की नगरी</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Spirituality of <span className="text-[#f29066]">Kashi</span>
                    </h1>
                    <p className="text-[#e6d1b1]/80 text-lg max-w-2xl mx-auto">
                        The city where the veil between the mortal and the divine is thinnest. Where every stone is sacred, every breath is a prayer, and death itself is a doorway to liberation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Sacred Practices */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">Devotion</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Sacred <span className="text-[#f29066]">Practices</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">The rituals that have sustained Kashi's spiritual fire for over 5,000 years.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sacredPractices.map((practice, i) => {
                            const Icon = practice.icon;
                            return (
                                <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500">
                                    <div className="p-3 rounded-xl bg-[#f29066]/10 w-fit mb-4">
                                        <Icon size={24} className="text-[#f29066]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{practice.name}</h3>
                                    <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{practice.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Temples */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">मंदिर</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Sacred <span className="text-[#f29066]">Temples</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">Varanasi is called the City of Temples — with over 23,000 shrines spread across its labyrinthine lanes.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-8">
                            {temples.map((temple, i) => (
                                <div key={i} className="reveal-card group rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/25 transition-all duration-500 overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                                            {/* @ts-ignore */}
                                            <img src={temple.image} alt={temple.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent md:bg-gradient-to-r" />
                                        </div>
                                        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{temple.name}</h3>
                                            <p className="text-sm text-[#f29066]/50 mb-3">{temple.hindi}</p>
                                            <p className="text-sm text-[#e6d1b1]/70 leading-relaxed mb-4">{temple.description}</p>
                                            <div className="flex items-center gap-2 mt-auto">
                                                <Eye size={14} className="text-[#f29066]" />
                                                <span className="text-xs text-[#f29066]/80 italic">{temple.significance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sacred Texts */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">ग्रंथ</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Sacred <span className="text-[#f29066]">Texts</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">The literary and spiritual heritage born from this city.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sacredTexts.map((text, i) => (
                            <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <BookOpen size={18} className="text-[#f29066]" />
                                    <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{text.name}</h3>
                                </div>
                                <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{text.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Yoga & Meditation */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#f29066] tracking-[0.3em] uppercase text-xs">योग & ध्यान</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Yoga & <span className="text-[#f29066]">Meditation</span>
                        </h2>
                        <p className="text-[#e6d1b1]/60 mt-4 max-w-xl mx-auto">Where ancient wisdom meets inner stillness.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {yogaMeditation.map((item, i) => (
                            <div key={i} className="reveal-card p-6 rounded-2xl bg-[#1a1410] border border-[#f29066]/10 hover:border-[#f29066]/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <Compass size={18} className="text-[#f29066]" />
                                    <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{item.name}</h3>
                                </div>
                                <p className="text-sm text-[#e6d1b1]/70 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Moksha Quote */}
                <section className="reveal-card text-center py-16 border-y border-[#f29066]/10">
                    <blockquote className="text-2xl md:text-4xl text-[#f29066]/80 italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
                        "काश्यां मरणान्मुक्तिः"
                    </blockquote>
                    <p className="text-lg text-[#e6d1b1]/60 mt-4">Kashyam Maranam Mukti</p>
                    <p className="text-sm text-[#e6d1b1]/40 mt-2">Death in Kashi is Liberation</p>
                </section>
            </div>
        </div>
    );
}
