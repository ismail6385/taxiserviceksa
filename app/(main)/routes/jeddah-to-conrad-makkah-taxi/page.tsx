import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Conrad Makkah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Conrad Makkah (Jabal Omar Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Conrad Makkah taxi', 'Conrad Makkah hotel transfer', 'Conrad Makkah pickup', 'KAIA to Conrad Makkah', 'Conrad taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-conrad-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Conrad Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Conrad Makkah (Jabal Omar Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-conrad-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Hilton Suites', url: '/routes/jeddah-to-hilton-suites-makkah-taxi/' },
        { name: 'Address Jabal Omar', url: '/routes/jeddah-to-address-jabal-omar-makkah-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah/' },
];

export default function ConradMakkahTaxiPage() {
    const hotel = getMakkahHotel('conrad-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
