export interface HeritageSite {
    id: string;
    name: string;
    description: string;
    history: string;
    activities: string[];
    coordinates: [number, number]; // [longitude, latitude]
    category: 'temple' | 'fort' | 'monument' | 'shrine';
    image?: string;
    isRare?: boolean;
}

export const heritageSites: HeritageSite[] = [
    {
        id: '1',
        name: 'Red Fort',
        description: 'A historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors.',
        history: 'Constructed in 1639 by Emperor Shah Jahan when he decided to shift his capital from Agra to Delhi. It represents the pinnacle of Mughal architecture, blending Persian, Timurid, and Indian styles.',
        activities: ['Sound and Light Show', 'Exploring Meena Bazaar', 'Visiting War Memorial Museum'],
        coordinates: [77.2410, 28.6562],
        category: 'fort',
        image: '/assets/red-fort.jpg',
        isRare: true
    },
    {
        id: '2',
        name: 'Qutub Minar',
        description: 'A 73-metre tall tapering tower of five storeys, built by Qutb-ud-din Aibak.',
        history: 'Inspired by the Minaret of Jam in Afghanistan, its construction was started in 1192 by Qutb-ud-din Aibak. The tower is built of red sandstone and marble, featuring intricate carvings and verses from the Quran.',
        activities: ['Climbing the nearby staircases', 'Viewing the Iron Pillar', 'Exploring the Qutub Complex'],
        coordinates: [77.1855, 28.5244],
        category: 'monument',
        image: '/assets/qutub-minar.jpg'
    },
    {
        id: '3',
        name: 'Humayun\'s Tomb',
        description: 'The tomb of the Mughal Emperor Humayun in Delhi, India.',
        history: 'Built in 1570, it was the first garden-tomb on the Indian subcontinent. It was commissioned by Humayun\'s first wife, Bega Begum, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad.',
        activities: ['Garden Walks', 'Photography', 'Exploring Sunder Nursery nearby'],
        coordinates: [77.2507, 28.5933],
        category: 'monument',
        image: '/assets/humayun-tomb.jpg'
    }
];
