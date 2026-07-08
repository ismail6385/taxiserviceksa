import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Elaf Kinda Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Elaf Kinda Hotel Makkah (Kinda, Ajyad). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Elaf Kinda taxi', 'Elaf Kinda hotel transfer', 'Elaf Kinda Makkah pickup', 'KAIA to Elaf Kinda', 'Elaf Kinda taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-elaf-kinda-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Elaf Kinda Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Elaf Kinda Hotel Makkah (Kinda, Ajyad). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-elaf-kinda-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Voco Makkah', url: '/routes/jeddah-to-voco-makkah-taxi/' },
        { name: 'Conrad Makkah', url: '/routes/jeddah-to-conrad-makkah-taxi/' },
        { name: 'Fairmont Clock Tower', url: '/routes/jeddah-to-fairmont-makkah/' },
];

export default function ElafKindaMakkahTaxiPage() {
    const hotel = getMakkahHotel('elaf-kinda-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
