import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, ArrowRight, Clock, DollarSign, MapPin, Car, Building2, Globe, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'All Routes | Taxi Service KSA - Fixed Price Intercity & Cross-Border Transfers',
    description: 'Every fixed-price transfer route we cover in Saudi Arabia: Jeddah to Makkah (80km), Makkah to Madinah (450km), hotel transfers, Tabuk intercity, and GCC cross-border routes. 24/7 service.',
    keywords: ['transfer routes Saudi Arabia', 'Jeddah Makkah transfer', 'Makkah Madinah transfer', 'intercity Taxi Service KSA', 'Saudi Arabia cross border taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/',
    },
};

const routes = [
    {
        name: 'Jeddah → Makkah',
        distance: '80 km',
        duration: '60-90 minutes',
        price: 'Fixed Rates',
        description: 'Most popular route for Umrah pilgrims. Direct transfer from King Abdulaziz Airport to Makkah hotels.',
        image: '/makkah-kaaba-night.webp',
        href: '/routes/jeddah-makkah/',
        highlights: ['Airport pickup', 'Meet & greet', 'Train alternative'],
        isPopular: true
    },
    {
        name: 'Makkah → Madinah',
        distance: '450 km',
        duration: '4-5 hours',
        price: 'Fixed Rates',
        description: 'Complete your Umrah journey. Comfortable transfer with rest stops between the two holy cities.',
        image: '/makkah-kaaba-night.webp',
        href: '/routes/makkah-madinah/',
        highlights: ['Rest stops included', 'Prayer breaks', 'Zamzam accommodation'],
        isPopular: true
    },
    {
        name: 'Makkah → Jeddah',
        distance: '85 km',
        duration: '60-90 minutes',
        price: 'Fixed Rates',
        description: 'Quick return transfer to Jeddah city or King Abdulaziz Airport after completing Umrah.',
        image: '/makkah-kaaba-night.webp',
        href: '/routes/makkah-jeddah/',
        highlights: ['Airport drop-off', 'Hotel pickup', 'Direct route'],
        isPopular: false
    },
    {
        name: 'Jeddah → Madinah',
        distance: '410 km',
        duration: '4-5 hours',
        price: 'Fixed Rates',
        description: 'Direct intercity transfer from Jeddah to the Holy City of Madinah. Travel in comfort.',
        image: '/madinah-prophets-mosque.webp',
        href: '/routes/jeddah-madinah/',
        highlights: ['Long distance comfort', 'Professional drivers', 'Door-to-door'],
        isPopular: false
    },
    {
        name: 'Madinah → Jeddah',
        distance: '450 km',
        duration: '4-5 hours',
        price: 'Fixed Rates',
        description: 'Reliable return transfer to Jeddah Airport. Comfortable journey for pilgrims departing from Madinah.',
        image: '/madinah-prophets-mosque.webp',
        href: '/routes/madinah-jeddah/',
        highlights: ['Airport drop-off', 'Rest stops included', 'Group friendly'],
        isPopular: true
    },
    {
        name: 'Jeddah → Taif',
        distance: '170 km',
        duration: '2.5-3 hours',
        price: 'Fixed Rates',
        description: 'Scenic mountain drive to the City of Roses. Enjoy the cool weather and nature of Taif.',
        image: '/hero-slide-3.webp',
        href: '/routes/jeddah-taif/',
        highlights: ['Mountain views', 'Cable car access', 'Cool climate'],
        isPopular: true
    },
    {
        name: 'Riyadh → Jeddah',
        distance: '950 km',
        duration: '10-12 hours',
        price: 'Fixed Rates',
        description: 'Premium long-distance chauffeur service. Travel between the capital and the coast in comfort.',
        image: '/jeddah-corniche-sunset.webp',
        href: '/routes/riyadh-jeddah/',
        highlights: ['Luxury vehicles', 'Professional drivers', 'Door-to-door'],
        isPopular: false
    },
    {
        name: 'Jeddah → Yanbu',
        distance: '330 km',
        duration: '3.5-4 hours',
        price: 'Fixed Rates',
        description: 'Express transfer to the Industrial City and Royal Commission. Scenic drive along the Red Sea coast.',
        image: '/yanbu-lake.webp',
        href: '/routes/jeddah-yanbu/',
        highlights: ['RCY drop-off', 'Coastal highway', 'Business travel'],
        isPopular: false
    },
    {
        name: 'Jeddah → Al Ula',
        distance: '700 km',
        duration: '7-8 hours',
        price: 'Fixed Rates',
        description: 'Journey to the ancient city of Hegra. Long-distance comfort for the ultimate heritage experience.',
        image: '/alula-hegra.webp',
        href: '/routes/jeddah-alula/',
        highlights: ['Hegra visit', 'Desert landscapes', 'Premium SUVs'],
        isPopular: false
    },
    {
        name: 'Madinah → Al Ula',
        distance: '330 km',
        duration: '3.5 hours',
        price: 'Fixed Rates',
        description: 'Direct transfer to the ancient heritage sites of AlUla. The most convenient travel option from the Prophet\'s City.',
        image: '/alula-hegra-tombs.webp',
        href: '/routes/madinah-alula/',
        highlights: ['Hegra tombs', 'Door-to-door transfer', 'Resort direct access'],
        isPopular: true
    },
];

const hotelTransfers = [
    { slug: 'jeddah-to-address-jabal-omar-makkah-taxi', label: 'Address Jabal Omar', dest: 'makkah' },
    { slug: 'jeddah-to-al-balad-jeddah-taxi', label: 'Al-Balad', dest: 'jeddah' },
    { slug: 'jeddah-to-al-kiswah-towers-makkah-taxi', label: 'Al Kiswah Towers Hotel', dest: 'makkah' },
    { slug: 'jeddah-to-al-safwah-royale-orchid-makkah-taxi', label: 'Al Safwah Royale Orchid', dest: 'makkah' },
    { slug: 'jeddah-to-anjum-hotel-makkah-taxi', label: 'Anjum Hotel', dest: 'makkah' },
    { slug: 'jeddah-to-aziziyah-makkah-taxi', label: 'Aziziyah Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-conrad-makkah-taxi', label: 'Conrad Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-crowne-plaza-jeddah-taxi', label: 'Crowne Plaza Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-crowne-plaza-madinah-taxi', label: 'Crowne Plaza Madinah', dest: 'madinah' },
    { slug: 'jeddah-to-dar-al-taqwa-madinah-taxi', label: 'Dar Al Taqwa Madinah', dest: 'madinah' },
    { slug: 'jeddah-to-elaf-kinda-makkah-taxi', label: 'Elaf Kinda', dest: 'makkah' },
    { slug: 'jeddah-to-elaf-taiba-madinah-taxi', label: 'Elaf Taiba', dest: 'madinah' },
    { slug: 'jeddah-to-fairmont-makkah-taxi', label: 'Fairmont Makkah Clock Royal Tower', dest: 'makkah' },
    { slug: 'jeddah-to-hilton-convention-makkah-taxi', label: 'Hilton Convention', dest: 'makkah' },
    { slug: 'jeddah-to-hilton-jeddah-taxi', label: 'Jeddah Hilton', dest: 'jeddah' },
    { slug: 'jeddah-to-hilton-madinah-taxi', label: 'Madinah Hilton', dest: 'madinah' },
    { slug: 'jeddah-to-hilton-suites-makkah-taxi', label: 'Hilton Suites', dest: 'makkah' },
    { slug: 'jeddah-to-hyatt-regency-jabal-omar-makkah-taxi', label: 'Hyatt Regency Jabal Omar', dest: 'makkah' },
    { slug: 'jeddah-to-intercontinental-dar-al-iman-madinah-taxi', label: 'Dar Al Iman InterContinental', dest: 'madinah' },
    { slug: 'jeddah-to-intercontinental-jeddah-taxi', label: 'InterContinental Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-jeddah-marriott-taxi', label: 'Jeddah Marriott', dest: 'makkah' },
    { slug: 'jeddah-to-king-abdullah-stadium-jeddah-taxi', label: 'King Abdullah Stadium', dest: 'jeddah' },
    { slug: 'jeddah-to-m-hotel-millennium-makkah-taxi', label: 'M Hotel Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-marriott-al-aqeeq-madinah-taxi', label: 'Marriott Al Aqeeq', dest: 'madinah' },
    { slug: 'jeddah-to-marriott-jabal-omar-makkah-taxi', label: 'Marriott Jabal Omar', dest: 'makkah' },
    { slug: 'jeddah-to-millennium-taiba-aljawhara-madinah-taxi', label: 'Millennium Aljawhara', dest: 'madinah' },
    { slug: 'jeddah-to-movenpick-anwar-al-madinah-taxi', label: 'Anwar Al Madinah Mövenpick', dest: 'madinah' },
    { slug: 'jeddah-to-movenpick-hajar-tower-makkah-taxi', label: 'Movenpick Hajar Tower', dest: 'makkah' },
    { slug: 'jeddah-to-movenpick-jeddah-taxi', label: 'Movenpick Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-oberoi-madinah-taxi', label: 'Oberoi Madinah', dest: 'madinah' },
    { slug: 'jeddah-to-park-hyatt-jeddah-taxi', label: 'Park Hyatt Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-pullman-makkah-taxi', label: 'Pullman ZamZam Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-pullman-zamzam-madinah-taxi', label: 'Pullman ZamZam Madina', dest: 'madinah' },
    { slug: 'jeddah-to-radisson-blu-jeddah-taxi', label: 'Radisson Blu Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-raffles-makkah-palace-taxi', label: 'Raffles Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-rosewood-jeddah-taxi', label: 'Rosewood Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-rua-al-madinah-taxi', label: 'Rua Al Madinah', dest: 'madinah' },
    { slug: 'jeddah-to-sheraton-jeddah-taxi', label: 'Sheraton Jeddah', dest: 'jeddah' },
    { slug: 'jeddah-to-sheraton-makkah-taxi', label: 'Sheraton Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-sofitel-shahd-al-madinah-taxi', label: 'Sofitel Shahd Al Madinah', dest: 'madinah' },
    { slug: 'jeddah-to-swissotel-al-maqam-makkah-taxi', label: 'Swissôtel Al Maqam', dest: 'makkah' },
    { slug: 'jeddah-to-swissotel-makkah-taxi', label: 'Swissotel Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-voco-makkah-taxi', label: 'Voco Makkah', dest: 'makkah' },
    { slug: 'jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi', label: 'Waldorf Astoria Jeddah', dest: 'jeddah' },
];

const dammamAirportGcc = [
    { slug: 'dammam-airport-to-al-khor-taxi', label: 'Al Khor' },
    { slug: 'dammam-airport-to-al-wakrah-taxi', label: 'Al Wakrah' },
    { slug: 'dammam-airport-to-amwaj-islands-taxi', label: 'Amwaj Islands' },
    { slug: 'dammam-airport-to-bahrain-airport-taxi', label: 'Bahrain Airport' },
    { slug: 'dammam-airport-to-doha-taxi', label: 'Doha' },
    { slug: 'dammam-airport-to-fahaheel-taxi', label: 'Fahaheel' },
    { slug: 'dammam-airport-to-hawally-taxi', label: 'Hawally' },
    { slug: 'dammam-airport-to-jahra-taxi', label: 'Jahra' },
    { slug: 'dammam-airport-to-khobar', label: 'Khobar' },
    { slug: 'dammam-airport-to-kuwait', label: 'Kuwait' },
    { slug: 'dammam-airport-to-kuwait-city-taxi', label: 'Kuwait City' },
    { slug: 'dammam-airport-to-lusail-taxi', label: 'Lusail' },
    { slug: 'dammam-airport-to-manama-taxi', label: 'Manama' },
    { slug: 'dammam-airport-to-muharraq-taxi', label: 'Muharraq' },
    { slug: 'dammam-airport-to-riffa-taxi', label: 'Riffa' },
    { slug: 'dammam-airport-to-salmiya-taxi', label: 'Salmiya' },
    { slug: 'dammam-airport-to-the-pearl-qatar-taxi', label: 'The Pearl-Qatar' },
];

const bahrainToDammamAirport = [
    { slug: 'bahrain-airport-to-dammam-airport-taxi', label: 'Bahrain Airport' },
    { slug: 'manama-to-dammam-airport-taxi', label: 'Manama' },
    { slug: 'muharraq-to-dammam-airport-taxi', label: 'Muharraq' },
    { slug: 'riffa-to-dammam-airport-taxi', label: 'Riffa' },
    { slug: 'amwaj-islands-to-dammam-airport-taxi', label: 'Amwaj Islands' },
];

const intlCityPairs = [
    { slug: 'abu-dhabi-dammam', from: 'Abu Dhabi', to: 'Dammam' },
    { slug: 'abu-dhabi-jeddah', from: 'Abu Dhabi', to: 'Jeddah' },
    { slug: 'abu-dhabi-madinah', from: 'Abu Dhabi', to: 'Madinah' },
    { slug: 'abu-dhabi-makkah', from: 'Abu Dhabi', to: 'Makkah' },
    { slug: 'abu-dhabi-riyadh', from: 'Abu Dhabi', to: 'Riyadh' },
    { slug: 'amman-dammam', from: 'Amman', to: 'Dammam' },
    { slug: 'amman-jeddah', from: 'Amman', to: 'Jeddah' },
    { slug: 'amman-madinah', from: 'Amman', to: 'Madinah' },
    { slug: 'amman-makkah', from: 'Amman', to: 'Makkah' },
    { slug: 'amman-riyadh', from: 'Amman', to: 'Riyadh' },
    { slug: 'bahrain-dammam', from: 'Bahrain', to: 'Dammam' },
    { slug: 'bahrain-jeddah', from: 'Bahrain', to: 'Jeddah' },
    { slug: 'bahrain-madinah', from: 'Bahrain', to: 'Madinah' },
    { slug: 'bahrain-makkah', from: 'Bahrain', to: 'Makkah' },
    { slug: 'bahrain-riyadh', from: 'Bahrain', to: 'Riyadh' },
    { slug: 'dammam-abu-dhabi', from: 'Dammam', to: 'Abu Dhabi' },
    { slug: 'dammam-amman', from: 'Dammam', to: 'Amman' },
    { slug: 'dammam-bahrain', from: 'Dammam', to: 'Bahrain' },
    { slug: 'dammam-doha', from: 'Dammam', to: 'Doha' },
    { slug: 'dammam-dubai', from: 'Dammam', to: 'Dubai' },
    { slug: 'dammam-jeddah', from: 'Dammam', to: 'Jeddah' },
    { slug: 'dammam-kuwait', from: 'Dammam', to: 'Kuwait' },
    { slug: 'dammam-madinah', from: 'Dammam', to: 'Madinah' },
    { slug: 'dammam-makkah', from: 'Dammam', to: 'Makkah' },
    { slug: 'dammam-muscat', from: 'Dammam', to: 'Muscat' },
    { slug: 'dammam-riyadh', from: 'Dammam', to: 'Riyadh' },
    { slug: 'dammam-sharjah', from: 'Dammam', to: 'Sharjah' },
    { slug: 'doha-dammam', from: 'Doha', to: 'Dammam' },
    { slug: 'doha-jeddah', from: 'Doha', to: 'Jeddah' },
    { slug: 'doha-madinah', from: 'Doha', to: 'Madinah' },
    { slug: 'doha-makkah', from: 'Doha', to: 'Makkah' },
    { slug: 'doha-riyadh', from: 'Doha', to: 'Riyadh' },
    { slug: 'dubai-dammam', from: 'Dubai', to: 'Dammam' },
    { slug: 'dubai-jeddah', from: 'Dubai', to: 'Jeddah' },
    { slug: 'dubai-madinah', from: 'Dubai', to: 'Madinah' },
    { slug: 'dubai-makkah', from: 'Dubai', to: 'Makkah' },
    { slug: 'dubai-riyadh', from: 'Dubai', to: 'Riyadh' },
    { slug: 'jeddah-abu-dhabi', from: 'Jeddah', to: 'Abu Dhabi' },
    { slug: 'jeddah-amman', from: 'Jeddah', to: 'Amman' },
    { slug: 'jeddah-bahrain', from: 'Jeddah', to: 'Bahrain' },
    { slug: 'jeddah-dammam', from: 'Jeddah', to: 'Dammam' },
    { slug: 'jeddah-doha', from: 'Jeddah', to: 'Doha' },
    { slug: 'jeddah-dubai', from: 'Jeddah', to: 'Dubai' },
    { slug: 'jeddah-kuwait', from: 'Jeddah', to: 'Kuwait' },
    { slug: 'jeddah-madinah', from: 'Jeddah', to: 'Madinah' },
    { slug: 'jeddah-makkah', from: 'Jeddah', to: 'Makkah' },
    { slug: 'jeddah-muscat', from: 'Jeddah', to: 'Muscat' },
    { slug: 'jeddah-riyadh', from: 'Jeddah', to: 'Riyadh' },
    { slug: 'jeddah-sharjah', from: 'Jeddah', to: 'Sharjah' },
    { slug: 'kuwait-dammam', from: 'Kuwait', to: 'Dammam' },
    { slug: 'kuwait-jeddah', from: 'Kuwait', to: 'Jeddah' },
    { slug: 'kuwait-madinah', from: 'Kuwait', to: 'Madinah' },
    { slug: 'kuwait-makkah', from: 'Kuwait', to: 'Makkah' },
    { slug: 'kuwait-riyadh', from: 'Kuwait', to: 'Riyadh' },
    { slug: 'madinah-abu-dhabi', from: 'Madinah', to: 'Abu Dhabi' },
    { slug: 'madinah-amman', from: 'Madinah', to: 'Amman' },
    { slug: 'madinah-bahrain', from: 'Madinah', to: 'Bahrain' },
    { slug: 'madinah-dammam', from: 'Madinah', to: 'Dammam' },
    { slug: 'madinah-doha', from: 'Madinah', to: 'Doha' },
    { slug: 'madinah-dubai', from: 'Madinah', to: 'Dubai' },
    { slug: 'madinah-jeddah', from: 'Madinah', to: 'Jeddah' },
    { slug: 'madinah-kuwait', from: 'Madinah', to: 'Kuwait' },
    { slug: 'madinah-makkah', from: 'Madinah', to: 'Makkah' },
    { slug: 'madinah-muscat', from: 'Madinah', to: 'Muscat' },
    { slug: 'madinah-sharjah', from: 'Madinah', to: 'Sharjah' },
    { slug: 'makkah-abu-dhabi', from: 'Makkah', to: 'Abu Dhabi' },
    { slug: 'makkah-amman', from: 'Makkah', to: 'Amman' },
    { slug: 'makkah-bahrain', from: 'Makkah', to: 'Bahrain' },
    { slug: 'makkah-dammam', from: 'Makkah', to: 'Dammam' },
    { slug: 'makkah-doha', from: 'Makkah', to: 'Doha' },
    { slug: 'makkah-dubai', from: 'Makkah', to: 'Dubai' },
    { slug: 'makkah-jeddah', from: 'Makkah', to: 'Jeddah' },
    { slug: 'makkah-kuwait', from: 'Makkah', to: 'Kuwait' },
    { slug: 'makkah-madinah', from: 'Makkah', to: 'Madinah' },
    { slug: 'makkah-muscat', from: 'Makkah', to: 'Muscat' },
    { slug: 'makkah-sharjah', from: 'Makkah', to: 'Sharjah' },
    { slug: 'muscat-dammam', from: 'Muscat', to: 'Dammam' },
    { slug: 'muscat-jeddah', from: 'Muscat', to: 'Jeddah' },
    { slug: 'muscat-madinah', from: 'Muscat', to: 'Madinah' },
    { slug: 'muscat-makkah', from: 'Muscat', to: 'Makkah' },
    { slug: 'muscat-riyadh', from: 'Muscat', to: 'Riyadh' },
    { slug: 'riyadh-abu-dhabi', from: 'Riyadh', to: 'Abu Dhabi' },
    { slug: 'riyadh-amman', from: 'Riyadh', to: 'Amman' },
    { slug: 'riyadh-bahrain', from: 'Riyadh', to: 'Bahrain' },
    { slug: 'riyadh-dammam', from: 'Riyadh', to: 'Dammam' },
    { slug: 'riyadh-doha', from: 'Riyadh', to: 'Doha' },
    { slug: 'riyadh-dubai', from: 'Riyadh', to: 'Dubai' },
    { slug: 'riyadh-jeddah', from: 'Riyadh', to: 'Jeddah' },
    { slug: 'riyadh-kuwait', from: 'Riyadh', to: 'Kuwait' },
    { slug: 'riyadh-makkah', from: 'Riyadh', to: 'Makkah' },
    { slug: 'riyadh-muscat', from: 'Riyadh', to: 'Muscat' },
    { slug: 'riyadh-sharjah', from: 'Riyadh', to: 'Sharjah' },
    { slug: 'sharjah-dammam', from: 'Sharjah', to: 'Dammam' },
    { slug: 'sharjah-jeddah', from: 'Sharjah', to: 'Jeddah' },
    { slug: 'sharjah-madinah', from: 'Sharjah', to: 'Madinah' },
    { slug: 'sharjah-makkah', from: 'Sharjah', to: 'Makkah' },
    { slug: 'sharjah-riyadh', from: 'Sharjah', to: 'Riyadh' },
];

const tabukRoutesFull = [
    { slug: 'tabuk-abha', label: 'Abha' },
    { slug: 'tabuk-abu-arish', label: 'Abu Arish' },
    { slug: 'tabuk-afif', label: 'Afif' },
    { slug: 'tabuk-al-bad', label: 'Al Bad' },
    { slug: 'tabuk-al-badai', label: 'Al Badai' },
    { slug: 'tabuk-al-bahah', label: 'Al Bahah' },
    { slug: 'tabuk-al-bukayriyah', label: 'Al Bukayriyah' },
    { slug: 'tabuk-al-ghat', label: 'Al Ghat' },
    { slug: 'tabuk-al-jafr', label: 'Al Jafr' },
    { slug: 'tabuk-al-khafji', label: 'Al Khafji' },
    { slug: 'tabuk-al-kharj', label: 'Al Kharj' },
    { slug: 'tabuk-al-khobar', label: 'Al Khobar' },
    { slug: 'tabuk-al-lith', label: 'Al Lith' },
    { slug: 'tabuk-al-majardah', label: 'Al Majardah' },
    { slug: 'tabuk-al-majmaah', label: 'Al Majmaah' },
    { slug: 'tabuk-al-makhwah', label: 'Al Makhwah' },
    { slug: 'tabuk-al-midhnab', label: 'Al Midhnab' },
    { slug: 'tabuk-al-mubarraz', label: 'Al Mubarraz' },
    { slug: 'tabuk-al-muzahmiyya', label: 'Al Muzahmiyya' },
    { slug: 'tabuk-al-nairyah', label: 'Al Nairyah' },
    { slug: 'tabuk-al-namas', label: 'Al Namas' },
    { slug: 'tabuk-al-qunfudhah', label: 'Al Qunfudhah' },
    { slug: 'tabuk-al-quwayiyah', label: 'Al Quwayiyah' },
    { slug: 'tabuk-al-rais', label: 'Al Rais' },
    { slug: 'tabuk-al-rass', label: 'Al Rass' },
    { slug: 'tabuk-al-uyun', label: 'Al Uyun' },
    { slug: 'tabuk-al-wajh', label: 'Al Wajh' },
    { slug: 'tabuk-alula', label: 'Alula' },
    { slug: 'tabuk-arar', label: 'Arar' },
    { slug: 'tabuk-baljurashi', label: 'Baljurashi' },
    { slug: 'tabuk-bareq', label: 'Bareq' },
    { slug: 'tabuk-bishah', label: 'Bishah' },
    { slug: 'tabuk-buqayq', label: 'Buqayq' },
    { slug: 'tabuk-buraidah', label: 'Buraidah' },
    { slug: 'tabuk-dammam', label: 'Dammam' },
    { slug: 'tabuk-dariya', label: 'Dariya' },
    { slug: 'tabuk-dawadmi', label: 'Dawadmi' },
    { slug: 'tabuk-dhahban', label: 'Dhahban' },
    { slug: 'tabuk-duba', label: 'Duba' },
    { slug: 'tabuk-hafar-al-batin', label: 'Hafar Al Batin' },
    { slug: 'tabuk-hail', label: 'Hail' },
    { slug: 'tabuk-haql', label: 'Haql' },
    { slug: 'tabuk-hofuf', label: 'Hofuf' },
    { slug: 'tabuk-huraymila', label: 'Huraymila' },
    { slug: 'tabuk-jeddah', label: 'Jeddah' },
    { slug: 'tabuk-jizan', label: 'Jizan' },
    { slug: 'tabuk-jubail', label: 'Jubail' },
    { slug: 'tabuk-kaec', label: 'KAEC' },
    { slug: 'tabuk-khafji', label: 'Khafji' },
    { slug: 'tabuk-khulais', label: 'Khulais' },
    { slug: 'tabuk-madinah', label: 'Madinah' },
    { slug: 'tabuk-magna', label: 'Magna' },
    { slug: 'tabuk-mahad-al-dhahab', label: 'Mahad Al Dhahab' },
    { slug: 'tabuk-makkah', label: 'Makkah' },
    { slug: 'tabuk-masturah', label: 'Masturah' },
    { slug: 'tabuk-najran', label: 'Najran' },
    { slug: 'tabuk-neom', label: 'Neom' },
    { slug: 'tabuk-qilwah', label: 'Qilwah' },
    { slug: 'tabuk-qurayyat', label: 'Qurayyat' },
    { slug: 'tabuk-rabigh', label: 'Rabigh' },
    { slug: 'tabuk-riyadh', label: 'Riyadh' },
    { slug: 'tabuk-rumah', label: 'Rumah' },
    { slug: 'tabuk-sabya', label: 'Sabya' },
    { slug: 'tabuk-sakaka', label: 'Sakaka' },
    { slug: 'tabuk-samtah', label: 'Samtah' },
    { slug: 'tabuk-sharma', label: 'Sharma' },
    { slug: 'tabuk-sharurah', label: 'Sharurah' },
    { slug: 'tabuk-taif', label: 'Taif' },
    { slug: 'tabuk-tanuma', label: 'Tanuma' },
    { slug: 'tabuk-tayma', label: 'Tayma' },
    { slug: 'tabuk-thadiq', label: 'Thadiq' },
    { slug: 'tabuk-thuwal', label: 'Thuwal' },
    { slug: 'tabuk-turaif', label: 'Turaif' },
    { slug: 'tabuk-umluj', label: 'Umluj' },
    { slug: 'tabuk-unaizah', label: 'Unaizah' },
    { slug: 'tabuk-wadi-ad-dawasir', label: 'Wadi Ad Dawasir' },
    { slug: 'tabuk-yanbu', label: 'Yanbu' },
    { slug: 'tabuk-zulfi', label: 'Zulfi' },
];

const moreRoutes = [
    { slug: 'alula-jeddah', label: 'Al Ula to Jeddah Taxi' },
    { slug: 'jazan-airport-to-bisha-airport-taxi', label: 'Jazan Airport to Bisha Airport Taxi' },
    { slug: 'jeddah-abha', label: 'Jeddah to Abha Taxi' },
    { slug: 'jeddah-alula', label: 'Jeddah to Al Ula Taxi' },
    { slug: 'jeddah-taif', label: 'Jeddah to Taif Taxi' },
    { slug: 'jeddah-to-shaza-al-hada-taif', label: 'Jeddah Airport to Shaza Al Hada Taxi' },
    { slug: 'jeddah-train-station-taxi', label: 'Jeddah Train Station Taxi' },
    { slug: 'jeddah-yanbu', label: 'Jeddah to Yanbu Taxi' },
    { slug: 'khobar-bahrain', label: 'Al Khobar to Bahrain Taxi' },
    { slug: 'khobar-to-dammam-airport', label: 'Khobar to Dammam Airport Taxi' },
    { slug: 'khobar-to-kuwait-taxi', label: 'Al Khobar to Kuwait Taxi' },
    { slug: 'khobar-to-qatar-taxi', label: 'Al Khobar to Qatar Taxi' },
    { slug: 'kuwait-to-dammam-airport', label: 'Kuwait to Dammam Airport Taxi' },
    { slug: 'madinah-alula', label: 'Madinah to AlUla Taxi' },
    { slug: 'madinah-to-jeddah-airport-departures', label: 'Madinah to Jeddah Airport Departures Taxi' },
    { slug: 'madinah-train-station-taxi', label: 'Madinah Train Station Taxi' },
    { slug: 'makkah-taif', label: 'Makkah to Taif Taxi' },
    { slug: 'neom-bay-airport-to-four-seasons-amaala-taxi', label: 'NEOM Bay Airport to Four Seasons AMAALA Taxi' },
    { slug: 'taif-jeddah', label: 'Taif to Jeddah Taxi' },
    { slug: 'yanbu-jeddah', label: 'Yanbu to Jeddah Taxi' },
];

// Group the GCC/international city-pairs by the non-Saudi city so travelers
// can scan by destination country instead of a flat 97-link list.
const KSA_CITIES = new Set(['Dammam', 'Jeddah', 'Madinah', 'Makkah', 'Riyadh']);
const intlGroups: Record<string, { slug: string; from: string; to: string }[]> = {};
for (const pair of intlCityPairs) {
    const intlCity = KSA_CITIES.has(pair.from) ? pair.to : pair.from;
    if (!intlGroups[intlCity]) intlGroups[intlCity] = [];
    intlGroups[intlCity].push(pair);
}
const INTL_ORDER = ['Bahrain', 'Kuwait', 'Doha', 'Dubai', 'Sharjah', 'Abu Dhabi', 'Muscat', 'Amman'];

function RouteChip({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-primary/10 hover:text-primary border border-gray-200 hover:border-primary/30 rounded-full px-3 py-1.5 transition-colors whitespace-nowrap"
        >
            {label}
        </Link>
    );
}

export default function RoutesPage() {
    const makkahHotels = hotelTransfers.filter(h => h.dest === 'makkah');
    const madinahHotels = hotelTransfers.filter(h => h.dest === 'madinah');
    const jeddahHotels = hotelTransfers.filter(h => h.dest === 'jeddah');

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        All Routes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Private Car, Taxi and Chauffeur Routes Across Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Fixed-price routes for your journey to the <Link href="/locations/makkah/" className="text-primary font-bold hover:underline">Holy City of Makkah</Link> and other major cities.
                        Direct intercity transfers with professional drivers and comfortable vehicles.
                    </p>
                </div>

                {/* Routes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {routes.map((route, index) => (
                        <Link key={index} href={route.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-primary flex flex-col">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={route.image}
                                        alt={route.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                    {/* Route Name Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Navigation className="w-6 h-6 text-white" />
                                            <h2 className="text-2xl font-bold text-white">{route.name}</h2>
                                        </div>
                                        {route.isPopular && (
                                            <span className="inline-block bg-primary text-white hover:text-black text-xs font-bold px-3 py-1 rounded-full">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Route Stats */}
                                    <div className="grid grid-cols-3 gap-2 mb-6 pb-6 border-b border-gray-200">
                                        <div className="text-center">
                                            <MapPin className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Distance</div>
                                            <div className="font-bold text-gray-900 text-sm">{route.distance}</div>
                                        </div>
                                        <div className="text-center">
                                            <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Duration</div>
                                            <div className="font-bold text-gray-900 text-sm">{route.duration}</div>
                                        </div>
                                        <div className="text-center">
                                            <DollarSign className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Price</div>
                                            <div className="font-bold text-primary text-sm">{route.price}</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 flex-1 text-sm">{route.description}</p>

                                    {/* Highlights */}
                                    <div className="space-y-2 mb-6">
                                        {route.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between text-gray-900 font-bold group-hover:text-accent transition-colors text-sm">
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Hotel Transfers from Jeddah Airport */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Building2 className="text-primary" /> Hotel Transfers from Jeddah Airport
                    </h2>
                    <p className="text-gray-500 mb-8">Fixed-price, named-hotel drop-off — {hotelTransfers.length} hotels across Makkah, Madinah, and Jeddah.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Makkah Hotels ({makkahHotels.length})</h3>
                            <div className="flex flex-wrap gap-2">
                                {makkahHotels.map(h => <RouteChip key={h.slug} href={`/routes/${h.slug}/`} label={h.label} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Madinah Hotels ({madinahHotels.length})</h3>
                            <div className="flex flex-wrap gap-2">
                                {madinahHotels.map(h => <RouteChip key={h.slug} href={`/routes/${h.slug}/`} label={h.label} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Jeddah City Hotels ({jeddahHotels.length})</h3>
                            <div className="flex flex-wrap gap-2">
                                {jeddahHotels.map(h => <RouteChip key={h.slug} href={`/routes/${h.slug}/`} label={h.label} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* International / Cross-Border Routes */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Globe className="text-primary" /> GCC & Cross-Border Routes
                    </h2>
                    <p className="text-gray-500 mb-8">Private door-to-door transfers between Saudi cities and neighboring countries — {intlCityPairs.length} routes.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {INTL_ORDER.filter(city => intlGroups[city]).map(city => (
                            <div key={city}>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">{city}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {intlGroups[city].map(p => (
                                        <RouteChip key={p.slug} href={`/routes/${p.slug}/`} label={`${p.from} → ${p.to}`} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dammam Airport to GCC Cities */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Plane className="text-primary" /> Dammam Airport to GCC Cities
                    </h2>
                    <p className="text-gray-500 mb-8">Direct transfers from King Fahd International Airport (DMM) to Bahrain, Qatar, and Kuwait destinations.</p>
                    <div className="flex flex-wrap gap-2">
                        {dammamAirportGcc.map(d => (
                            <RouteChip key={d.slug} href={`/routes/${d.slug}/`} label={d.label} />
                        ))}
                    </div>
                </div>

                {/* Bahrain to Dammam Airport (Return) */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Plane className="text-primary" /> Bahrain to Dammam Airport
                    </h2>
                    <p className="text-gray-500 mb-8">Direct transfers from Bahrain locations to King Fahd International Airport (DMM), for connecting flights.</p>
                    <div className="flex flex-wrap gap-2">
                        {bahrainToDammamAirport.map(d => (
                            <RouteChip key={d.slug} href={`/routes/${d.slug}/`} label={d.label} />
                        ))}
                    </div>
                </div>

                {/* Tabuk Routes Section */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <MapPin className="text-primary" /> Routes from Tabuk
                    </h2>
                    <p className="text-gray-500 mb-8">Intercity transfers from Tabuk to {tabukRoutesFull.length} destinations across Saudi Arabia.</p>
                    <div className="flex flex-wrap gap-2">
                        {tabukRoutesFull.map(t => (
                            <RouteChip key={t.slug} href={`/routes/${t.slug}/`} label={t.label} />
                        ))}
                    </div>
                </div>

                {/* More Routes */}
                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Navigation className="text-primary" /> More Routes
                    </h2>
                    <p className="text-gray-500 mb-8">Additional intercity, airport, and heritage-site transfers.</p>
                    <div className="flex flex-wrap gap-2">
                        {moreRoutes.map(m => (
                            <RouteChip key={m.slug} href={`/routes/${m.slug}/`} label={m.label} />
                        ))}
                    </div>
                </div>

                {/* Booking CTA */}
                <div className="bg-black text-white rounded-3xl p-12 text-center mb-16 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-white">Need a Custom Route?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            If you don't see your destination here, we can still provide a quote. Most pilgrims traveling between holy cities use our <Link href="/services/umrah-transport/" className="text-white underline font-bold hover:text-primary transition-colors">Umrah transport packages</Link> for the best value.
                        </p>
                        <Link href="/booking/">
                            <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 rounded-xl">
                                <Car className="w-5 h-5 mr-2" />
                                Book Your Transfer Online
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Strategic Internal Links Hub */}
                <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" /> Premium Fleet For Intercity
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>GMC Yukon (Top Rated for Long Trips)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Toyota HiAce (Umrah & Large Groups)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/" className="text-primary font-bold hover:underline">View All Vehicle Options →</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Service Hubs
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah (Haram & Umrah)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Madinah (Prophet's Mosque)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/" className="text-primary font-bold hover:underline">See All Service Locations →</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
