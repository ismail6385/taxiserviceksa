import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Anjum Hotel Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Anjum Hotel Makkah (Ajyad). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Anjum Hotel taxi', 'Anjum Hotel hotel transfer', 'Anjum Hotel Makkah pickup', 'KAIA to Anjum Hotel', 'Anjum Hotel taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-anjum-hotel-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Anjum Hotel Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Anjum Hotel Makkah (Ajyad). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-anjum-hotel-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Al Safwah Royale Orchid', url: '/routes/jeddah-to-al-safwah-royale-orchid-makkah-taxi/' },
        { name: 'Swissôtel Al Maqam', url: '/routes/jeddah-to-swissotel-al-maqam-makkah-taxi/' },
        { name: 'Pullman ZamZam Makkah', url: '/routes/jeddah-to-pullman-makkah-taxi/' },
];

export default function AnjumHotelMakkahTaxiPage() {
    const hotel = getMakkahHotel('anjum-hotel-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
