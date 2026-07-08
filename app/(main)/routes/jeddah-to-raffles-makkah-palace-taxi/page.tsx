import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Raffles Makkah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Raffles Makkah Palace (Abraj Al Bait Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Raffles Makkah taxi', 'Raffles Makkah hotel transfer', 'Raffles Makkah pickup', 'KAIA to Raffles Makkah', 'Raffles taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-raffles-makkah-palace-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Raffles Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Raffles Makkah Palace (Abraj Al Bait Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-raffles-makkah-palace-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Conrad Makkah', url: '/routes/jeddah-to-conrad-makkah-taxi/' },
        { name: 'Marriott Jabal Omar', url: '/routes/jeddah-to-marriott-jabal-omar-makkah-taxi/' },
        { name: 'Pullman ZamZam Makkah', url: '/routes/jeddah-to-pullman-makkah-taxi/' },
];

export default function RafflesMakkahPalaceTaxiPage() {
    const hotel = getMakkahHotel('raffles-makkah-palace-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
