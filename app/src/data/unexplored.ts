export type Category = 'temples' | 'ghats' | 'heritage' | 'kunds' | 'sacred' | 'knowledge' | 'cultural';

export interface UnexploredPlace {
    name: string;
    description: string;
    history: string;
    image: string;
    category: Category;
    hiddenGem?: boolean;
    establishedBy?: string;
    establishedWhen?: string;
}

export const unexploredPlaces: UnexploredPlace[] = [
    // ═══════════════════════════════════════════
    //  UNEXPLORED TEMPLES
    // ═══════════════════════════════════════════
    {
        name: "Kardameshwar Mahadev",
        description: "The only surviving temple in Kashi from before the Mughal invasions — a rare relic of the Gahadavala dynasty.",
        history: "One of the oldest surviving temples in Varanasi, with carvings dating to the 6th–7th century AD. Much of the current structure was built during the 12th–13th century Gahadavala dynasty in the Nagara architectural style. It survived Mughal destruction because of its remote, densely wooded location far from the Ganga. Named after Rishi Kardam, who consecrated the Shiva Linga here. Legend says Lord Rama visited after killing Ravana to absolve himself of Brahmahatya dosha by bathing in the adjacent Kardama Kunda. The temple is the first night halt on the sacred 80-km Panchkroshi Yatra. Its walls feature intricate carvings of musicians, nagas, dancers, and mythical creatures. Mentioned extensively in the Kashi Khanda and Skanda Purana.",
        image: "/Kashi_Photos/Temples/Kardameshwar Mahadev.png",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Rishi Kardam; rebuilt by Gahadavala dynasty rulers",
        establishedWhen: "Original: ~6th century AD; Current structure: 12th–13th century"
    },
    {
        name: "Markandeya Mahadev",
        description: "Where the young sage Markandeya conquered death itself — Lord Shiva granted him immortality at this very spot.",
        history: "Located at the confluence of the Ganga and Gomti rivers in Kaithi Village, about 30 km from Varanasi. According to Hindu mythology, the sage Markandeya was destined to die at age 16. When Yama (Death) came to claim him, Markandeya clung to a Shiva Linga in desperate devotion. Lord Shiva appeared in his fierce form, defeated Yama, and granted the boy immortality. The temple marks this exact spot where the miracle occurred. It is considered one of the most powerful spiritual sites for Shiva devotees, believed to offer protection from untimely death and the blessing of long life.",
        image: "/Kashi_Photos/Temples/Markandeya Mahadev.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Sage Markandeya",
        establishedWhen: "Ancient (Puranic era, precise date unknown)"
    },
    {
        name: "Batuk Bhairav Temple",
        description: "Dedicated to the child form of Bhairav — guardian of Kashi. An eternal lamp has burned here without interruption for centuries.",
        history: "An ancient shrine dedicated to Batuk Bhairav, the child (Balaroop) manifestation of Lord Bhairav, the fierce form of Shiva. Located on the Rathyatra–Kamachha Road in Bhelupur. Lord Bhairav is considered the Kotwal (guardian) of Kashi — no spiritual journey in Varanasi is complete without his blessings. An Akhand Deep (eternal flame) burns continuously inside the temple; its oil is believed to have therapeutic and healing properties. The temple is a significant centre for Aghori and Tantric worship. Devotees offer toys, chocolates, and sweets to the child deity.",
        image: "/Kashi_Photos/Temples/Batuk Bhairav Temple.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Lord Shiva (manifested as Batuk Bhairav to protect Kashi)",
        establishedWhen: "Ancient (pre-medieval; exact date unknown)"
    },
    {
        name: "Vriddha Kaleshwar Temple",
        description: "The temple of 'Old Time' — where Shiva embodies the aging aspect of Time itself, mentioned in the Brahma Vaivart Puran.",
        history: "Located at K-52/39 in the Vriddha Kal area, within the premises of Mrityunjeshwar temple. Accessible from the Bishweshwarganj market area. This ancient temple finds mention in the Brahma Vaivart Puran and the Ling Puran. The Linga within is known as Vriddha Kaleshwar — 'Lord of Old Time' — symbolizing Shiva's dominion over the aging process and the passage of time itself. Near the temple is the sacred Kalodak Well, whose waters are traditionally believed to possess curative properties for various diseases.",
        image: "/Kashi_Photos/Temples/Vriddha Kaleshwar Temple.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Unknown (mentioned in Brahma Vaivart Puran & Ling Puran)",
        establishedWhen: "Ancient (Puranic era)"
    },
    {
        name: "Krittivaseshwar Mahadev",
        description: "One of three great Shiva temples demolished by Aurangzeb — called the 'forehead' of Baba Vishwanath. Hindu worship never stopped here.",
        history: "Krittivaseshwar Mahadev holds one of the most poignant histories in Varanasi. It was one of three major Shiva temples — alongside Kashi Vishwanath and Bindu Madhav — that were demolished by the Mughal emperor Aurangzeb in the 17th century. The temple is often referred to as the 'forehead' of Baba Vishwanath. Despite the destruction and a mosque being constructed on its ruins, Hindu worship has continued at the site without a single day of interruption — a testament to the unbreakable devotion of the people of Kashi.",
        image: "/Kashi_Photos/Temples/Krittivaseshwar Mahadev.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Ancient Kashi priests (one of the original great Shiva temples of Kashi)",
        establishedWhen: "Pre-13th century; demolished by Aurangzeb in 17th century"
    },
    {
        name: "Lakshmaneshwar Mahadev",
        description: "Established by Lakshmana, the devoted brother of Lord Rama, during the Treta Yuga.",
        history: "According to the Kashi Khanda, this Shiva Linga was established by Lakshmana — Lord Rama's younger brother and one of the most loyal devotees in Hindu mythology. The temple dates to the Treta Yuga in scriptural tradition. Lakshmana is said to have installed this Linga during his visit to Kashi as a mark of devotion to Lord Shiva. The temple sits quietly in the narrow lanes of Varanasi, visited primarily by local devotees who maintain its ancient traditions.",
        image: "/Kashi_Photos/Temples/Lakshmaneshwar Mahadev.jpg",
        category: "temples",
        establishedBy: "Lakshmana (brother of Lord Rama)",
        establishedWhen: "Treta Yuga (mythological); temple structure medieval"
    },
    {
        name: "Bhuteshwar Mahadev",
        description: "The 'Lord of Spirits' — a self-manifested (Swayambhu) Shiva Linga hidden deep in the narrow lanes.",
        history: "The Bhuteshwar Mahadev temple is dedicated to Shiva in his aspect as the Lord of Spirits (Bhutas). According to temple tradition, a Shiv Gan named Bhara Bhoot installed a Shiv Ling known as Bhara Bhooteshwar. The deity is considered self-manifested (Swayambhu). This temple, hidden in the labyrinthine lanes of old Varanasi, is where devotees pray for the peaceful passage of deceased loved ones. Devotees who worship this Linga in Kashi are believed to attain Mukti (liberation). It is mentioned in the Kashi Khanda among the important shrines of the Avimukta Kshetra.",
        image: "/Kashi_Photos/Temples/Bhuteshwar Mahadev.jpg",
        category: "temples",
        establishedBy: "Bhara Bhoot (a Shiv Gan); the Linga is Swayambhu (self-manifested)",
        establishedWhen: "Ancient (Swayambhu — considered timeless)"
    },
    {
        name: "Kapardishwar Mahadev",
        description: "Associated with the Pishach Mochan Kund rituals — where spirits find liberation through Shiva's grace.",
        history: "The Kapardishwar Mahadev temple is closely linked to the nearby Pishach Mochan Kund. According to legend, a Pishach (restless spirit) achieved liberation after bathing in the Kund and worshipping Lord Kapardishwar. The name 'Kapardi' refers to the matted locks of Shiva. This temple is considered especially powerful for performing Shraddh rituals (ancestral rites) and for liberating the souls of those who died unnatural deaths.",
        image: "/Kashi_Photos/Temples/Kameshwar Mahadev.jpg",
        category: "temples",
        establishedBy: "Unknown; mentioned in Kashi Khanda scriptures",
        establishedWhen: "Ancient (Puranic era)"
    },
    {
        name: "Avimukteshwar Mahadev",
        description: "One of the oldest Lingas in Kashi, representing the 'Never Forsaken' zone where death grants Moksha.",
        history: "Situated within the sacred Kashi Vishwanath Temple complex at CK-35/19, Chowk. Mentioned in the Ling Puran, Kashi Khand, and Brahma Vaivart Puran. Varanasi itself is revered as 'Avimukta Kshetra' — the sacred zone that Shiva has 'never abandoned.' The Avimukteshwar Linga represents this very concept. Devotees believe that darshan of this Linga absolves sins accumulated over several lifetimes and prevents rebirth into suffering.",
        image: "/Kashi_Photos/Temples/Avimukteshwar Mahadev.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Lord Shiva (the Linga embodies the concept of Avimukta Kshetra)",
        establishedWhen: "Timeless (mentioned in Ling Puran, Kashi Khand)"
    },
    {
        name: "Chandreshwar Mahadev",
        description: "Established by the Moon God (Chandra) himself after being cursed by Daksha — Shiva restored his luminance here.",
        history: "According to Hindu mythology, the Moon God Chandra was cursed by his father-in-law Daksha to lose his luminance. A devastated Chandra came to Kashi and prayed to Lord Shiva at this spot. Pleased by his devotion, Shiva placed Chandra on his own head — which is why Shiva is called Chandrashekhar. Chandra established this Linga in gratitude. The waxing and waning of the moon is said to be a remnant of Daksha's curse, partially mitigated by Shiva's blessing.",
        image: "/Kashi_Photos/Temples/Chandreshwar Mahadev.jpeg",
        category: "temples",
        establishedBy: "Chandra (the Moon God)",
        establishedWhen: "Satya Yuga (mythological)"
    },
    {
        name: "Brahmeshwar Mahadev",
        description: "Established by Lord Brahma, the Creator — one of the few Shiva Lingas consecrated by the gods themselves.",
        history: "The Brahmeshwar Mahadev temple houses a Shiva Linga said to have been established by Lord Brahma himself — the Creator of the universe. In Hindu theology, even Brahma worships Shiva, and this temple is the physical testament of that devotion. Brahma is said to have performed a grand yagna at this site before consecrating the Linga. The temple, though modest in structure, carries immense theological weight.",
        image: "/Kashi_Photos/Temples/Brahmaneshwar Mahadev.jpeg",
        category: "temples",
        establishedBy: "Lord Brahma (the Creator)",
        establishedWhen: "Satya Yuga (mythological)"
    },
    {
        name: "Nandikeshwar Mahadev",
        description: "Dedicated to Nandi, the eternal vehicle and gatekeeper of Lord Shiva — the embodiment of devotion.",
        history: "Nandikeshwar is dedicated to Nandi — Lord Shiva's bull, vehicle, and most devoted attendant. In Hindu tradition, Nandi is considered the ideal devotee, sitting eternally at the entrance of Shiva temples in perpetual meditation. This temple honors that devotion. The Nandikeshwar Linga is believed to have been established by Nandi himself. It is referenced in the Nandikeshvara Teertha pilgrimage traditions.",
        image: "/Kashi_Photos/Temples/Nandkeshwar Mahadev Mandir.jpeg",
        category: "temples",
        establishedBy: "Nandi (the sacred bull and chief attendant of Lord Shiva)",
        establishedWhen: "Ancient (Puranic era)"
    },
    {
        name: "Kameshwar Mahadev",
        description: "The 'Lord of Desire' — established by Durvasa Rishi after intense penance. Houses two sacred Lingams.",
        history: "According to the Kashi Mahatmya in Kashi Khand, Durvasa Rishi installed a Shiv Ling after digging a sacred pond and performing puja. He prayed to Shiva to fulfill his spiritual desires, and the Linga was named Kameshwar ('Lord of Desire'). The temple houses two lingams: a larger one called Durvaseshwar Mahadev (symbolizing Bhakti) and a smaller one called Kameshwar Mahadev (symbolizing Shakti). Also associated with the legend of Kamadeva (god of love) being both destroyed and resurrected by Shiva.",
        image: "/Kashi_Photos/Temples/Kameshwar Mahadev.jpg",
        category: "temples",
        establishedBy: "Durvasa Rishi",
        establishedWhen: "Ancient (mentioned in Kashi Khand); structure possibly 18th century"
    },
    {
        name: "Patalpuri Devi",
        description: "An underground temple dedicated to the Mother Goddess — one of the most mysterious shrines in Kashi.",
        history: "Patalpuri Devi is a subterranean temple dedicated to the Mother Goddess, located in the depths below street level in old Varanasi. 'Patal' means underworld, and the temple symbolizes the Goddess's dominion over both the earthly and subterranean realms. It is part of the Shakti Peetha tradition. Local traditions associate the temple with powerful tantric practices and ancient feminine worship.",
        image: "/Kashi_Photos/Temples/Patalpuri Devi.jpg",
        category: "temples",
        establishedBy: "Unknown (ancient Shakti Peetha tradition)",
        establishedWhen: "Ancient (pre-medieval)"
    },
    {
        name: "Krishneshwar Mahadev",
        description: "Mentioned in Kashi Khand Chapter 97 — worshipping here is said to lead the devotee to Vishnu Lok after death.",
        history: "Situated on the outer wall of the Sankata Devi temple at Ck.7/159, Varanasi, facing east, opposite the Harishchandreshwar Ling. Its origins are described in the Kashi Khand, Chapter 97, where Lord Shiva himself narrated to Goddess Parvati the various deities, Shiv Lings, and Teerths spread across Kashi. Krishneshwar is found in the vicinity of Vasishteshwar. A unique aspect is that worshipping here is believed to lead devotees to Vishnu Lok — the celestial realm of Lord Vishnu — after death, making it a rare bridge between Shaivite and Vaishnavite traditions. The temple is open at all times, and devotees may perform puja themselves.",
        image: "/Kashi_Photos/Temples/Karkotkeshwar Mahadev.jpeg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Described by Lord Shiva to Goddess Parvati (Kashi Khand Ch. 97)",
        establishedWhen: "Ancient (Puranic era, mentioned in Kashi Khand)"
    },
    {
        name: "Gyanvapi Koop Shrines",
        description: "The original site of the Vishwanath Linga — an archaeological and spiritual epicenter of Kashi.",
        history: "The Gyanvapi (Well of Knowledge) is one of Varanasi's most sacred sites. According to tradition, the original Vishwanath Linga was hidden in this well by priests to protect it from Mughal destruction. The well sits adjacent to the Gyanvapi Mosque (built by Aurangzeb after demolishing the original Vishwanath Temple in 1669). Recent archaeological surveys revealed remnants of the original temple structure. The well water is considered sacred — Shiva is said to have created it by piercing the earth with his trident.",
        image: "/Kashi_Photos/Temples/Gyanvapi Koop Shrines.jpg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "Lord Shiva (created the well with his trident); temple by ancient Kashi priests",
        establishedWhen: "Ancient; original temple destroyed by Aurangzeb in 1669"
    },
    {
        name: "Nepali Temple (Kathwala Temple)",
        description: "A stunning Nepali pagoda-style temple on Lalita Ghat — called 'Mini Khajuraho' for its intricate erotic wood carvings.",
        history: "Also known as Shri Samrajeswar Pashupatinath Mahadev Mandir, this temple was built as a replica of the famous Pashupatinath Temple in Kathmandu, Nepal. Its construction was initiated by King Rana Bahadur Shah of Nepal, who lived in exile in Varanasi from 1800 to 1804 under the name 'Swami Nirgunanda.' Rana Bahadur Shah was assassinated in Nepal in 1806 before the temple's completion. The work was finished by his son, Girvan Yuddha Bikram Shah Deva, around 1843. The construction took approximately 30–40 years. The temple is built entirely from terracotta, stone, and termite-resistant wood sourced from Nepal. It features intricate wood carvings depicting erotic and mythological scenes — earning it the nickname 'Mini Khajuraho.' King Rana Bahadur Shah also commissioned Lalita Ghat itself. The temple, ghat, and an adjacent dharamshala are still owned by the Nepal government, symbolizing the deep cultural bond between Nepal and India.",
        image: "/Kashi_Photos/Temples/Shri Ram Janki Mandir.jpeg",
        category: "temples",
        hiddenGem: true,
        establishedBy: "King Rana Bahadur Shah of Nepal; completed by his son Girvan Yuddha Bikram Shah Deva",
        establishedWhen: "Begun c. 1800; completed c. 1843 (~30–40 years of construction)"
    },
    {
        name: "Mahodayeshwar Temple",
        description: "A lesser-known but spiritually potent shrine where the great energy of Shiva's 'Great Rising' (Mahodaya) resides.",
        history: "The name 'Mahodaya' translates to 'Great Rising' or 'Great Fortune,' and the temple represents the auspicious, life-affirming aspect of Lord Shiva. Unlike the more fearsome forms worshipped at other temples, Mahodayeshwar is about prosperity, new beginnings, and spiritual awakening. The temple is listed among the sacred Lingas of the Avimukta Kshetra in the Kashi Khanda.",
        image: "/Kashi_Photos/Temples/Rameshwar Mahadev (local shrine).jpeg",
        category: "temples",
        establishedBy: "Unknown (mentioned in Kashi Khanda)",
        establishedWhen: "Ancient (Puranic era)"
    },
    {
        name: "Yagneshwar Mahadev",
        description: "Guardian of the sacred Yajnas (fire rituals) performed in Kashi since the Vedic age.",
        history: "Yagneshwar Mahadev is dedicated to Shiva as the Lord and Guardian of Yajnas — the Vedic fire rituals that are central to Hindu worship. Varanasi has been a centre of Vedic learning and ritual performance for over 3,000 years. According to the Kashi Khanda, this is the spot where the most powerful yajnas of ancient times were performed, with Shiva himself serving as the divine witness.",
        image: "/Kashi_Photos/Temples/Sheetla Mata Temple'.jpg",
        category: "temples",
        establishedBy: "Ancient Vedic priests of Kashi",
        establishedWhen: "Vedic period (~3,000+ years ago)"
    },
    {
        name: "Shwetaranyeshwar Temple",
        description: "Lord of the White Forest — an ancient form of Shiva from the Satya Yuga, when Kashi was a forest of light.",
        history: "Shwetaranyeshwar ('Lord of the White Forest') refers to an ancient legend that in the Satya Yuga (the first and purest age), Kashi was a luminous white forest where all beings lived in perfect dharma and Lord Shiva roamed freely. The temple preserves this primordial memory. The 'White Forest' is a metaphor for spiritual purity. The temple is mentioned in the Kashi Khanda as one of the sacred Lingas of the Avimukta Kshetra.",
        image: "/Kashi_Photos/Temples/Siddheshwari Devi.jpg",
        category: "temples",
        establishedBy: "Unknown (mentioned in Kashi Khanda)",
        establishedWhen: "Ancient (Satya Yuga in scripture; temple structure medieval)"
    },

    // ═══════════════════════════════════════════
    //  FORGOTTEN GHATS & KUNDS
    // ═══════════════════════════════════════════
    {
        name: "Adikeshava Ghat",
        description: "The oldest ghat — where Lord Vishnu first stepped into Kashi. The original sacred gateway of the city.",
        history: "Located at the confluence of the Varuna and Ganga rivers, Adikeshava Ghat is believed to be the original and oldest ghat in Varanasi — where Lord Vishnu first set foot in the city. 'Adi Keshava' means 'First Vishnu.' Referenced as Vedesvara Ghat in Gahadavala inscriptions dating to c. 1100 CE. Originally a natural clay embankment, it was made into a stone ghat in 1790 by a Divan of Scindhia State. Maharani Bhavani of Bengal later rebuilt it, and it was reconstructed again in 1906.",
        image: "/Kashi_Photos/Ghats/Adikesava Ghat.jpg",
        category: "ghats",
        hiddenGem: true,
        establishedBy: "Lord Vishnu (mythological); stone ghat by Divan of Scindhia State",
        establishedWhen: "Mythological origin; stone ghat: 1790; rebuilt: 1906 by Diwan Narsingh Rao Shitole"
    },
    {
        name: "Raj Ghat",
        description: "A 3,000-year-old archaeological site revealing the deepest layers of Kashi's continuous civilization.",
        history: "Rajghat sits near the confluence of the Ganga and Varana rivers — the very spot from which the city derives its name 'Varanasi.' Archaeological excavations led by Krishna Deva (ASI) in 1940 and Professor A.K. Narain (BHU) from 1957–1969 uncovered evidence of continuous settlement from the 8th century BCE to the 18th century CE. Finds include terracotta figurines, pottery, and a Gupta-period seal inscribed 'Varanasyadhishthanaadhikaranasya' (Seal of Varanasi City Administration).",
        image: "/Kashi_Photos/Ghats/Raj Ghat.jpg",
        category: "ghats",
        hiddenGem: true,
        establishedBy: "Natural settlement; excavated by ASI (Krishna Deva) & BHU (Prof. A.K. Narain)",
        establishedWhen: "Settlement: 8th century BCE; excavated: 1940–1969"
    },
    {
        name: "Chet Singh Ghat",
        description: "A fortress-ghat where the Battle of Benares was fought against the British East India Company in 1781.",
        history: "Built by Kashi Naresh Balwant Singh. Site of a fierce battle in 1781 between Raja Chet Singh of Banaras and Warren Hastings, the Governor-General of Bengal. Chet Singh resisted excessive demands for revenue and troops, leading to the Battle of Benares. Though defeated, his resistance is remembered as heroic. Later, King Prabhu Narayan Singh regained the fort and donated its northern portion to Naga Sadhus. Also known as Khirki Ghat.",
        image: "/Kashi_Photos/Ghats/Chet Singh Ghat.jpg",
        category: "ghats",
        hiddenGem: true,
        establishedBy: "Kashi Naresh Balwant Singh",
        establishedWhen: "Mid-18th century; Battle of Benares: 1781"
    },
    {
        name: "Scindia Ghat",
        description: "Home to the Ratneshwar Mahadev Temple — partially submerged in the Ganga and leaning more than the Tower of Pisa.",
        history: "At Scindia Ghat stands the Ratneshwar Mahadev Temple — leaning at 9 degrees (more than the Leaning Tower of Pisa) and partially submerged in the Ganges for 6–10 months of the year. Local legend attributes its tilt to a mother's curse ('Matru-rin'), while geologists point to foundation issues. The ghat was built by the Scindia dynasty of Gwalior.",
        image: "/Kashi_Photos/Ghats/Scindia Ghat Lower Stretch.jpg",
        category: "ghats",
        establishedBy: "Scindia dynasty of Gwalior; Ratneshwar Temple: unknown patron",
        establishedWhen: "Ghat: 19th century; Temple: 19th century"
    },
    {
        name: "Lolark Kund",
        description: "A sacred sun-temple stepwell dating to 1000 AD — where the 'trembling sun' reflects in holy waters.",
        history: "An ancient rectangular stepwell considered one of the oldest sacred sites in Varanasi, with texts dating it to around 1000 AD. The name 'Lolark' means 'trembling sun,' referring to the wavering reflection of Suryadev in its waters. Its importance is linked to the patronage of the Gahadavala kings. Rani Ahilyabai and the King of Cooch Bihar repaired its brownish-red stone architecture in the 18th century. An annual fair called 'Lolark Shashti' draws thousands seeking the blessing of children.",
        image: "/Kashi_Photos/Ghats/Lolark Kund.jpeg",
        category: "kunds",
        hiddenGem: true,
        establishedBy: "Gahadavala kings (patronage); repaired by Rani Ahilyabai & King of Cooch Bihar",
        establishedWhen: "~1000 AD; repaired: mid-to-late 18th century"
    },
    {
        name: "Durga Kund Old Steps",
        description: "The ancient stone steps of the Durga temple tank — a quiet corner of goddess worship often overlooked.",
        history: "The sacred tank adjacent to the famous Durga Temple (Monkey Temple), built in the 18th century in the Nagara architectural style. While tourists flock to the temple, the old stone steps leading down to the water remain largely unexplored. Used for centuries by devotees performing ritual ablutions before worshipping Goddess Durga. The architecture shows signs of multiple periods of construction.",
        image: "/Kashi_Photos/Ghats/Durga Kund Old Steps.jpg",
        category: "kunds",
        establishedBy: "Unknown (associated with the 18th-century Durga Temple)",
        establishedWhen: "Tank: ancient; current steps: 18th century onwards"
    },
    {
        name: "Kurukshetra Kund",
        description: "A sacred tank with immense historical significance — local tradition links it to the Mahabharata war.",
        history: "A sacred water tank whose name directly references the great battlefield of the Mahabharata. Local tradition holds that the spiritual merit of bathing here equals visiting the actual Kurukshetra in Haryana. In Kashi's sacred geography, several sites mirror the holiest places of India — the belief being that Kashi contains within itself the essence of every sacred place on earth.",
        image: "/Kashi_Photos/Ghats/Kurukshetra Kund (local).jpg",
        category: "kunds",
        establishedBy: "Unknown (ancient tradition linking Kashi to Mahabharata-era sacred sites)",
        establishedWhen: "Ancient (Puranic era)"
    },
    {
        name: "Pishach Mochan Kund",
        description: "Where ghosts and restless spirits find liberation — the most powerful site for ancestral rites in all of Kashi.",
        history: "'The pond where spirits are liberated.' Primarily associated with performing Shraddh rituals during Pitru Paksha. According to legend, a Pishach (restless spirit) achieved moksha after bathing here and worshipping Lord Kapardishwar. Uniquely potent for liberating the souls of those who died unnatural deaths and lacked proper funeral rites. The epicenter of Varanasi's role as the ultimate city of death and liberation.",
        image: "/Kashi_Photos/Ghats/Pishach Mochan Kund.jpg",
        category: "kunds",
        hiddenGem: true,
        establishedBy: "Unknown; sanctified by the legend of a Pishach's liberation",
        establishedWhen: "Ancient (Puranic era)"
    },

    // ═══════════════════════════════════════════
    //  HERITAGE & SACRED SPOTS
    // ═══════════════════════════════════════════
    {
        name: "Man Mandir Observatory",
        description: "The Jantar Mantar of Varanasi — an 18th-century astronomical observatory built by Maharaja Jai Singh II.",
        history: "Built in the early 18th century by Maharaja Sawai Jai Singh II of Jaipur atop the 16th-century Man Mahal Palace (built by Raja Man Singh) near Dashashwamedh Ghat. Features massive masonry instruments: Samrat Yantra (sundial), Digamsa Yantra, Nadivlay Yantra, Chakra Yantra, and Dhakshinottara Bhitti Yantra for measuring celestial positions. Now managed by the Indian Archaeological Department.",
        image: "/Kashi_Photos/Ghats/Man Mandir Back Observatory.jpeg",
        category: "heritage",
        hiddenGem: true,
        establishedBy: "Maharaja Sawai Jai Singh II of Jaipur (observatory); Raja Man Singh (palace)",
        establishedWhen: "Palace: 16th century; Observatory: early 18th century (c. 1710–1734)"
    },
    {
        name: "Ramnagar Fort",
        description: "The 1750 royal fortress of the Kashi Naresh — still the king's residence, standing guard over the Ganga.",
        history: "Constructed in 1750 by Kashi Naresh Maharaja Balwant Singh on the eastern bank of the Ganga. Built from Chunar sandstone, it blends Mughal and Rajput styles. Still the residence of the current Kashi Naresh, Anant Narayan Singh. Inside is the Saraswati Bhawan museum. Famous for the annual Ramnagar Ram Leela — a 200+ year tradition. Played roles during the Battle of Buxar (1764) and Indian Rebellion of 1857.",
        image: "/Kashi_Photos/Ghats/Ramnagar Fort Rear Ghats.jpg",
        category: "heritage",
        hiddenGem: true,
        establishedBy: "Kashi Naresh Maharaja Balwant Singh",
        establishedWhen: "1750"
    },
    {
        name: "Hidden Shrines of the Corridor",
        description: "Ancient idols rediscovered during construction of the Kashi Vishwanath Corridor — lost history emerging from the rubble.",
        history: "During the construction of the ₹800 crore Kashi Vishwanath Corridor project (inaugurated 2021), workers unearthed numerous ancient idols, Shiva Lingas, and temple fragments buried for centuries. Some artifacts date back to the Gupta and post-Gupta periods (5th–8th century CE). Many are now displayed in the corridor's museum — lost fragments of Kashi's sacred history literally rising from the earth.",
        image: "/Kashi_Photos/Temples/Annapurna Devi Old Shrine.jpg",
        category: "sacred",
        hiddenGem: true,
        establishedBy: "Original temples: unknown ancient builders; rediscovered during PM Modi's Corridor project",
        establishedWhen: "Artifacts: 5th–8th century CE; rediscovered: 2019–2021"
    },
    {
        name: "Tantric Worship Courtyards",
        description: "Private courtyards in the old city where tantric rituals have been performed for centuries.",
        history: "Behind the public face of Varanasi's temple culture lies a hidden world of tantric practice. Varanasi is one of the most important centres of Tantra in India, alongside Kamakhya and Tarapith. Practices include worship of fierce deities like Kali, Bhairav, and Chinnamasta. The Aghoris of Varanasi — who meditate in cremation grounds — represent the most extreme form of this tradition.",
        image: "/Kashi_Photos/Temples/Bhimchandi Devi.jpg",
        category: "cultural",
        establishedBy: "Tantric lineages of Varanasi (Aghori, Kapalika, Nath traditions)",
        establishedWhen: "Ancient (continuous tradition for over 1,000 years)"
    },
    {
        name: "Old Akharas",
        description: "Traditional wrestling arenas that have trained champions for centuries — where spirituality meets physical discipline.",
        history: "Varanasi has a centuries-old tradition of kushti (traditional Indian wrestling) practiced in mud-pit akharas. These are ashram-like institutions where wrestlers follow strict regimens of diet, celibacy, prayer, and training. Historically patronized by the Kashi Naresh and local zamindars. Wrestlers worship Lord Hanuman and consider their training a form of devotion. UNESCO-recognized intangible heritage.",
        image: "/Kashi_Photos/Temples/Sheetla Mata Temple'.jpg",
        category: "cultural",
        hiddenGem: true,
        establishedBy: "Patronized by Kashi Naresh and local zamindars",
        establishedWhen: "Several centuries old; tradition predates the Mughal era"
    },
    {
        name: "Old Panchkoshi Route Shrines",
        description: "Forgotten wayside shrines along the ancient 80-km Panchkroshi pilgrimage route around Kashi.",
        history: "The Panchkroshi Yatra is an approximately 80-km sacred circumambulation of Kashi, connecting five major temples. Along this route, dozens of small, forgotten shrines mark rest stops, sacred groves, and historical spots. Many carry inscriptions and carvings from the medieval period. During Mahashivratri, hundreds of thousands of barefoot pilgrims pass these shrines, chanting 'Har-Har Bam-Bam.'",
        image: "/Kashi_Photos/Ghats/Old Panchkoshi Route Shrines.jpeg",
        category: "sacred",
        hiddenGem: true,
        establishedBy: "Various donors and local communities along the Panchkroshi route",
        establishedWhen: "Medieval period (many carry inscriptions from 14th–18th century)"
    },
    {
        name: "Mangala Gauri Temple",
        description: "One of the Shakti Peethas — where Goddess Sati's body part fell and the divine feminine reigns supreme.",
        history: "Regarded as one of the Shakti Peethas — sacred sites where parts of Goddess Sati's body fell. Dedicated to Goddess Gauri (Parvati) in her auspicious (Mangala) form. One of the most important goddess temples in Varanasi, particularly revered by married women who pray for husbands' well-being. Especially crowded during Mangala Gauri Vrat in Shravan.",
        image: "/Kashi_Photos/Temples/Mangala Gauri Temple.jpg",
        category: "temples",
        establishedBy: "Ancient (Shakti Peetha tradition — considered self-manifested)",
        establishedWhen: "Ancient (Puranic era); temple structure medieval"
    },
    {
        name: "Katyayani Devi Temple",
        description: "Dedicated to Goddess Katyayani — the warrior form of Durga worshipped during Navratri.",
        history: "Dedicated to one of the nine forms of Goddess Durga — Katyayani, the warrior daughter of Sage Katyayana. When demons threatened the cosmos, the combined divine energy of all gods manifested as Goddess Katyayani in Sage Katyayana's ashram. In Varanasi, particularly revered during Navratri. Young women pray to Katyayani for a good husband — a tradition from the Bhagavata Purana.",
        image: "/Kashi_Photos/Temples/Katyayani Devi Temple.jpeg",
        category: "temples",
        establishedBy: "Ancient (associated with Sage Katyayana)",
        establishedWhen: "Ancient (Puranic era); current temple structure likely medieval"
    },
];
