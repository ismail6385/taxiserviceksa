import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Hilton Convention Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Hilton Makkah Convention Hotel (Ajyad, near King Abdul Aziz Gate). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Hilton Convention taxi', 'Hilton Convention hotel transfer', 'Hilton Convention Makkah pickup', 'KAIA to Hilton Convention', 'Hilton Convention taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-convention-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Hilton Convention Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Hilton Makkah Convention Hotel (Ajyad, near King Abdul Aziz Gate). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-convention-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Hyatt Regency Jabal Omar', url: '/routes/jeddah-to-hyatt-regency-jabal-omar-makkah-taxi/' },
        { name: 'Movenpick Hajar Tower', url: '/routes/jeddah-to-movenpick-hajar-tower-makkah-taxi/' },
        { name: 'Pullman ZamZam Makkah', url: '/routes/jeddah-to-pullman-makkah-taxi/' },
];

export default function HiltonConventionMakkahTaxiPage() {
    const hotel = getMakkahHotel('hilton-convention-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
