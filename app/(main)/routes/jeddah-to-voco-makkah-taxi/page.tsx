import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Voco Makkah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Voco Makkah (Central Makkah, near the Haram). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Voco Makkah taxi', 'Voco Makkah hotel transfer', 'Voco Makkah pickup', 'KAIA to Voco Makkah', 'Voco taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-voco-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Voco Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Voco Makkah (Central Makkah, near the Haram). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-voco-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'M Hotel Makkah', url: '/routes/jeddah-to-m-hotel-millennium-makkah-taxi/' },
        { name: 'Hilton Suites', url: '/routes/jeddah-to-hilton-suites-makkah-taxi/' },
        { name: 'Pullman ZamZam Makkah', url: '/routes/jeddah-to-pullman-makkah-taxi/' },
];

export default function VocoMakkahTaxiPage() {
    const hotel = getMakkahHotel('voco-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
