import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Marriott Jabal Omar Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Jabal Omar Marriott Hotel Makkah (Jabal Omar Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Marriott Jabal Omar taxi', 'Marriott Jabal Omar hotel transfer', 'Marriott Jabal Omar Makkah pickup', 'KAIA to Marriott Jabal Omar', 'Marriott Jabal Omar taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-marriott-jabal-omar-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Marriott Jabal Omar Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Jabal Omar Marriott Hotel Makkah (Jabal Omar Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-marriott-jabal-omar-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Address Jabal Omar', url: '/routes/jeddah-to-address-jabal-omar-makkah-taxi/' },
        { name: 'Al Safwah Royale Orchid', url: '/routes/jeddah-to-al-safwah-royale-orchid-makkah-taxi/' },
        { name: 'Fairmont Clock Tower', url: '/routes/jeddah-to-fairmont-makkah-taxi/' },
];

export default function MarriottJabalOmarMakkahTaxiPage() {
    const hotel = getMakkahHotel('marriott-jabal-omar-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
