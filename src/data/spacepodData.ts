import { RoomType, AmenityItem, Review } from '../types';

export const BUSINESS_INFO = {
  name: 'Spacepod@hive',
  phone: '+6581684337',
  formattedPhone: '+65 8168 4337',
  address: '624 Serangoon Rd, Singapore 218223',
  email: 'stay@spacepodhive.com.sg',
  mrt: 'Farrer Park MRT (NE8) - 5 min walk | Boon Keng MRT (NE9) - 6 min walk',
  checkInTime: '14:00 (2:00 PM)',
  checkOutTime: '11:00 (11:00 AM)',
  whatsappUrl: 'https://wa.me/6581684337',
  googleMapsEmbed: 'https://maps.google.com/maps?q=624+Serangoon+Rd,+Singapore+218223&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const ROOMS: RoomType[] = [
  {
    id: 'single-pod',
    name: 'Futuristic Single Spacepod',
    tagline: 'Private ergonomic capsule designed for solo travelers & digital nomads',
    priceSGD: 45,
    capacity: 1,
    size: '1.2m x 2.1m',
    image: '/src/assets/images/room_single_pod_1790404484031.jpg',
    popularTag: 'Most Popular',
    features: [
      'Single Memory Foam Mattress',
      'Smart Climate & Air Flow Control',
      'Adjustable Ambient LED Lighting',
      'Universal Power Outlets & Fast USB Ports',
      'Private Keycard Pod Lock & Digital Safe',
    ],
    description: 'Step into your personal capsule sanctuary. Engineered for maximum privacy and tranquility, our Futuristic Single Spacepod features acoustic noise dampening, individual temperature control, ambient mood lighting, and high-speed Wi-Fi.',
    amenities: ['Memory Foam Bed', 'Privacy Blind', 'HD Mirror', 'Reading Light', 'Laptop Table', 'Digital Safe'],
  },
  {
    id: 'double-pod',
    name: 'Deluxe Double Spacepod',
    tagline: 'Spacious luxury pod designed for couples & travel duos',
    priceSGD: 75,
    capacity: 2,
    size: '1.6m x 2.1m',
    image: '/src/assets/images/room_double_pod_1790404500503.jpg',
    popularTag: 'Best for Couples',
    features: [
      'Queen-Size Memory Foam Mattress',
      'Dual Reading Lights & Power Outlets',
      'Built-In Smart Mirror & Ambient Mood Lights',
      'Extra Large Luggage Locker under Bed',
      'Enhanced Sound Insulation',
    ],
    description: 'Designed for couples or friends traveling together who want the capsule hotel experience with extra room to relax. Enjoy extra head room, dual LED lights, and plush premium bedding.',
    amenities: ['Queen Bed', 'Dual USB Chargers', 'Extra Locker Space', 'Smart Mirror', 'Plush Duvet', 'Air Purifier'],
  },
  {
    id: 'female-pod',
    name: 'Female Executive Pod Haven',
    tagline: 'Exclusive female-only pod floor with dedicated vanity room',
    priceSGD: 49,
    capacity: 1,
    size: '1.2m x 2.1m',
    image: '/src/assets/images/room_female_section_1790404514052.jpg',
    popularTag: 'Female Only',
    features: [
      'Female-Only Dedicated Security Floor',
      'Dyson Hair Dryers & Makeup Vanity Area',
      'Organic Bath Products Included',
      'Ultra-Soft Egyptian Cotton Linens',
      'Keycard Restricted Access Door',
    ],
    description: 'A quiet, immaculate sanctuary tailored specifically for female travelers. Features an exclusive keycard access floor, dedicated vanity mirrors, hair styling stations, and premium organic toiletries.',
    amenities: ['Female Only Floor', 'Dyson Hair Dryer', 'Vanity Station', 'Keycard Lock', 'Organic Toiletries', 'Extra Soft Towel'],
  },
  {
    id: 'quiet-zone-pod',
    name: 'Quiet Zone Single Pod (Premium)',
    tagline: 'Acoustically isolated pod for deep restful sleep',
    priceSGD: 52,
    capacity: 1,
    size: '1.2m x 2.1m',
    image: '/src/assets/images/hero_spacepod_hive_1790404464923.jpg',
    features: [
      'High-Density Acoustic Insulation',
      'Dimmable Sunset Mood Lights',
      'Ergonomic Fold-Down Work Desk',
      'Premium Memory Foam Pillow Selection',
      'Priority Late Check-out Availability',
    ],
    description: 'For light sleepers and business travelers needing uninterrupted sleep. Located in our quietest wing with strict 24-hour quiet zone rules, high-density acoustic padding, and dimmable sunset lighting.',
    amenities: ['Soundproof Walls', 'Work Desk', 'Custom Pillows', 'Earplugs Included', 'Sunset Lighting', 'Private Safe'],
  },
];

export const AMENITIES: AmenityItem[] = [
  {
    id: 'wifi',
    title: '1 Gbps Ultra Fast Wi-Fi',
    description: 'High-speed fiber optic Wi-Fi throughout the entire property, perfect for streaming and remote work.',
    category: 'Tech & Connectivity',
    icon: 'Wifi',
  },
  {
    id: 'climate',
    title: 'Individual Climate Control',
    description: 'Fresh air circulation and personalized temperature controls in every single pod.',
    category: 'Comfort',
    icon: 'Wind',
  },
  {
    id: 'bathrooms',
    title: 'Spotless Rain Shower Facilities',
    description: 'Multiple daily cleanings ensure immaculate shared bathrooms with hot rain showers, body wash & shampoo.',
    category: 'Facilities',
    icon: 'ShowerHead',
  },
  {
    id: 'lounge',
    title: 'Co-Working & Social Lounge',
    description: 'Relaxed ambient lounge with power plugs, high seats, free tea/coffee, and comfortable lounge chairs.',
    category: 'Facilities',
    icon: 'Coffee',
  },
  {
    id: 'security',
    title: '24/7 Security & Smart Keycard',
    description: 'CCTV surveillance in all common areas and encrypted RFID keycard access for main doors, dorms, and pods.',
    category: 'Services',
    icon: 'ShieldCheck',
  },
  {
    id: 'lockers',
    title: 'Private Digital Safe & Lockers',
    description: 'Secure personal luggage locker for every guest with keycard or passcode access.',
    category: 'Facilities',
    icon: 'Lock',
  },
  {
    id: 'laundry',
    title: 'Self-Service Laundry Facilities',
    description: 'On-site washer and dryer available 24/7 with detergent provided for extended stay travelers.',
    category: 'Services',
    icon: 'Shirt',
  },
  {
    id: 'luggage',
    title: 'Free Luggage Storage',
    description: 'Arrived early or taking an evening flight? Store your luggage securely at no additional charge.',
    category: 'Services',
    icon: 'Luggage',
  },
];

export const WHY_STAY_POINTS = [
  {
    title: 'Prime Serangoon Location',
    description: 'Located at 624 Serangoon Rd, just 5 minutes walk to Farrer Park MRT station, 24-hour Mustafa Centre, and vibrant Little India cultural district.',
    icon: 'MapPin',
    image: '/src/assets/images/why_stay_location_1790405133737.jpg',
  },
  {
    title: 'Modern Japanese Pod Design',
    description: 'Experience futuristic pod architecture offering 100% privacy, personal ambient lights, touch controls, and ergonomic comfort.',
    icon: 'Sparkles',
    image: '/src/assets/images/why_stay_design_1790405151400.jpg',
  },
  {
    title: 'Immaculate Hygiene Standards',
    description: 'Cleanliness is our top priority. Bathrooms, pods, and common areas are sanitized multiple times daily by dedicated staff.',
    icon: 'Sparkle',
    image: '/src/assets/images/why_stay_hygiene_1790405167845.jpg',
  },
  {
    title: 'Affordable Singapore Stay',
    description: 'Enjoy high-end hotel amenities like memory foam beds, rain showers, and fast Wi-Fi at a fraction of standard hotel rates.',
    icon: 'BadgePercent',
    image: '/src/assets/images/why_stay_affordable_1790405182593.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Elena Rostova',
    country: 'Germany',
    rating: 5,
    date: 'September 2026',
    text: 'Spacepod@hive exceeded all my expectations! The pod was super clean, private, and cozy. Location on Serangoon Rd is perfect—Mustafa Centre is right around the corner and Farrer Park MRT takes you anywhere in Singapore in 15 mins.',
    podType: 'Futuristic Single Spacepod',
  },
  {
    id: '2',
    author: 'Marcus Vance',
    country: 'Australia',
    rating: 5,
    date: 'August 2026',
    text: 'As a digital nomad, fast Wi-Fi and quiet sleep are non-negotiable. The Quiet Zone pod delivered 100%. The staff at +6581684337 were incredibly friendly and helped me store my bags after check-out.',
    podType: 'Quiet Zone Single Pod',
  },
  {
    id: '3',
    author: 'Siddharth & Priya',
    country: 'India',
    rating: 5,
    date: 'August 2026',
    text: 'We stayed in the Deluxe Double Spacepod and loved the futuristic vibe! Very spacious for two people, awesome purple ambient lights, and extremely clean bathrooms.',
    podType: 'Deluxe Double Spacepod',
  },
];

export const FAQS = [
  {
    q: 'What is the exact location and how do I reach Spacepod@hive?',
    a: 'We are located at 624 Serangoon Rd, Singapore 218223. The closest train stations are Farrer Park MRT (NE8, Exit G or A) and Boon Keng MRT (NE9), both just a 5 to 6-minute walk away.',
  },
  {
    q: 'What are the Check-in and Check-out times?',
    a: 'Check-in is from 14:00 (2:00 PM) onwards and Check-out is by 11:00 AM. If you arrive early or depart late, you can leave your luggage at our complimentary storage area.',
  },
  {
    q: 'Are towels and toiletries provided?',
    a: 'Yes! Fresh towels, body wash, shampoo, and hand soap are provided complimentary for all guests.',
  },
  {
    q: 'How do I contact Spacepod@hive directly?',
    a: 'You can call or WhatsApp us anytime at +6581684337 or email stay@spacepodhive.com.sg.',
  },
  {
    q: 'Is there female-only accommodation available?',
    a: 'Yes! We have dedicated female-only pod dormitories with restricted keycard access and exclusive vanity facilities.',
  },
];
