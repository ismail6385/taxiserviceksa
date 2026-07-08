import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Sheraton Makkah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Sheraton Makkah Jabal Al Kaaba Hotel (Ajyad). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Sheraton Makkah taxi', 'Sheraton Makkah hotel transfer', 'Sheraton Makkah pickup', 'KAIA to Sheraton Makkah', 'Sheraton taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-sheraton-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Sheraton Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Sheraton Makkah Jabal Al Kaaba Hotel (Ajyad). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-sheraton-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Movenpick Hajar Tower', url: '/routes/jeddah-to-movenpick-hajar-tower-makkah-taxi/' },
        { name: 'Voco Makkah', url: '/routes/jeddah-to-voco-makkah-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah/' },
];

export default function SheratonMakkahTaxiPage() {
    const hotel = getMakkahHotel('sheraton-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
