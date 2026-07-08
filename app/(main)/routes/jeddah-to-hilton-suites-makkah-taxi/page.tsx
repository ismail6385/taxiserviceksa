import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Hilton Suites Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Hilton Suites Makkah (Ajyad, near King Abdul Aziz Gate). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Hilton Suites taxi', 'Hilton Suites hotel transfer', 'Hilton Suites Makkah pickup', 'KAIA to Hilton Suites', 'Hilton Suites taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-suites-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Hilton Suites Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Hilton Suites Makkah (Ajyad, near King Abdul Aziz Gate). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-suites-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Hilton Convention', url: '/routes/jeddah-to-hilton-convention-makkah-taxi/' },
        { name: 'Sheraton Makkah', url: '/routes/jeddah-to-sheraton-makkah-taxi/' },
        { name: 'Fairmont Clock Tower', url: '/routes/jeddah-to-fairmont-makkah/' },
];

export default function HiltonSuitesMakkahTaxiPage() {
    const hotel = getMakkahHotel('hilton-suites-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
