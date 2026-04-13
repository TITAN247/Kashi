export type TouristCategory = 'education' | 'temples' | 'heritage' | 'city-life' | 'ghats' | 'unexplored';

export interface MapLocation {
    id: string;
    name: string;
    x: number; // Percentage from left
    y: number; // Percentage from top
    category: TouristCategory;
    description: string;
    time: string;
    cost: string;
    food: string;
    significance: string;
}

export const mapLocations: MapLocation[] = [
    // TEMPLE
    {
        id: 'kashi-vishwanath',
        name: 'Kashi Vishwanath Temple',
        x: 45,
        y: 40,
        category: 'temples',
        description: "The heart of Kashi. One of the 12 Jyotirlingas.",
        time: "6:00 AM - 9:00 PM",
        cost: "Free (VIP Darshan Available)",
        food: "Blue Lassi Shop nearby",
        significance: "The holiest Shiva shrine in the world."
    },
    {
        id: 'sankat-mochan',
        name: 'Sankat Mochan Hanuman',
        x: 30,
        y: 75,
        category: 'temples',
        description: "Temple of Lord Hanuman, established by Tulsidas.",
        time: "5:00 AM - 10:00 PM",
        cost: "Free",
        food: "Temple Besan Ladoo",
        significance: "Relieves devotees from all troubles (Sankat)."
    },

    // GHATS
    {
        id: 'ass-ghat',
        name: 'Assi Ghat',
        x: 35,
        y: 85,
        category: 'ghats',
        description: "Where the river Assi meets the Ganga. Famous for Morning Aarti.",
        time: "24 Hours (Aarti at 5:30 AM)",
        cost: "Free",
        food: "Pizzeria Vaatika Cafe",
        significance: "Southernmost ghat, culturally vibrant."
    },
    {
        id: 'dashashwamedh',
        name: 'Dashashwamedh Ghat',
        x: 50,
        y: 50,
        category: 'ghats',
        description: "The main ghat known for the spectacular evening Ganga Aarti.",
        time: "24 Hours (Aarti at 6:30 PM)",
        cost: "Free (Boat ride extra)",
        food: "Street food galore",
        significance: "Where Lord Brahma performed the ten-horse sacrifice."
    },
    {
        id: 'manikarnika',
        name: 'Manikarnika Ghat',
        x: 55,
        y: 35,
        category: 'ghats',
        description: "The Burning Ghat. The place of liberation (Moksha).",
        time: "24 Hours",
        cost: "Free (Respectful distance required)",
        food: "None (Place of cremation)",
        significance: "One of the holiest cremation grounds on earth."
    },

    // EDUCATION
    {
        id: 'bhu',
        name: 'Banaras Hindu University',
        x: 20,
        y: 90,
        category: 'education',
        description: "Asia's largest residential university. A city within a city.",
        time: "Open Campus",
        cost: "Free",
        food: "VT Canteen (Cold Coffee)",
        significance: "Center of learning established by Madan Mohan Malaviya."
    },

    // HERITAGE
    {
        id: 'ramnagar-fort',
        name: 'Ramnagar Fort',
        x: 70,
        y: 80,
        category: 'heritage',
        description: "Ancestral home of the Kashi Naresh (King of Kashi).",
        time: "10:00 AM - 5:00 PM",
        cost: "₹50",
        food: "Lassi opposite the gate",
        significance: "18th-century sandstone fortress on the eastern bank."
    },

    // UNEXPLORED
    {
        id: 'markandeya',
        name: 'Markandeya Mahadev',
        x: 80,
        y: 10,
        category: 'unexplored',
        description: "Peaceful temple at the confluence of Ganga and Gomti.",
        time: "Dawn to Dusk",
        cost: "Free",
        food: "Local Dhabas",
        significance: "Where Sage Markandeya conquered death."
    },
    {
        id: 'kardameshwar',
        name: 'Kardameshwar Mahadev',
        x: 10,
        y: 60,
        category: 'unexplored',
        description: "Oldest surviving temple in Kashi.",
        time: "Sunrise to Sunset",
        cost: "Free",
        food: "Bring your own",
        significance: "Only temple to survive Aurangzeb's destruction."
    }
];
