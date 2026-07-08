import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Swissôtel Al Maqam Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Swissôtel Al Maqam Makkah (Abraj Al Bait Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Swissôtel Al Maqam taxi', 'Swissôtel Al Maqam hotel transfer', 'Swissôtel Al Maqam Makkah pickup', 'KAIA to Swissôtel Al Maqam', 'Swissôtel Al Maqam taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-swissotel-al-maqam-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Swissôtel Al Maqam Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Swissôtel Al Maqam Makkah (Abraj Al Bait Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-swissotel-al-maqam-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Raffles Makkah', url: '/routes/jeddah-to-raffles-makkah-palace-taxi/' },
        { name: 'Hyatt Regency Jabal Omar', url: '/routes/jeddah-to-hyatt-regency-jabal-omar-makkah-taxi/' },
        { name: 'Fairmont Clock Tower', url: '/routes/jeddah-to-fairmont-makkah/' },
];

export default function SwissotelAlMaqamMakkahTaxiPage() {
    const hotel = getMakkahHotel('swissotel-al-maqam-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
