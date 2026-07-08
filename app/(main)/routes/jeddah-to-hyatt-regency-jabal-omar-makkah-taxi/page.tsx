import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Hyatt Regency Jabal Omar Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Hyatt Regency Makkah Jabal Omar (Jabal Omar Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Hyatt Regency Jabal Omar taxi', 'Hyatt Regency Jabal Omar hotel transfer', 'Hyatt Regency Jabal Omar Makkah pickup', 'KAIA to Hyatt Regency Jabal Omar', 'Hyatt Regency Jabal Omar taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-hyatt-regency-jabal-omar-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Hyatt Regency Jabal Omar Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Hyatt Regency Makkah Jabal Omar (Jabal Omar Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-hyatt-regency-jabal-omar-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Marriott Jabal Omar', url: '/routes/jeddah-to-marriott-jabal-omar-makkah-taxi/' },
        { name: 'Anjum Hotel', url: '/routes/jeddah-to-anjum-hotel-makkah-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah-taxi/' },
];

export default function HyattRegencyJabalOmarMakkahTaxiPage() {
    const hotel = getMakkahHotel('hyatt-regency-jabal-omar-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
