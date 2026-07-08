import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Al Safwah Royale Orchid Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Al Safwah Royale Orchid Hotel Makkah (Ajyad). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Al Safwah Royale Orchid taxi', 'Al Safwah Royale Orchid hotel transfer', 'Al Safwah Royale Orchid Makkah pickup', 'KAIA to Al Safwah Royale Orchid', 'Al Safwah Royale Orchid taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-al-safwah-royale-orchid-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Al Safwah Royale Orchid Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Al Safwah Royale Orchid Hotel Makkah (Ajyad). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-al-safwah-royale-orchid-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Elaf Kinda', url: '/routes/jeddah-to-elaf-kinda-makkah-taxi/' },
        { name: 'Raffles Makkah', url: '/routes/jeddah-to-raffles-makkah-palace-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah-taxi/' },
];

export default function AlSafwahRoyaleOrchidMakkahTaxiPage() {
    const hotel = getMakkahHotel('al-safwah-royale-orchid-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
