import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to M Hotel Makkah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to M Hotel Makkah by Millennium (Central Makkah, near the Haram). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to M Hotel Makkah taxi', 'M Hotel Makkah hotel transfer', 'M Hotel Makkah pickup', 'KAIA to M Hotel Makkah', 'M Hotel taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-m-hotel-millennium-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to M Hotel Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to M Hotel Makkah by Millennium (Central Makkah, near the Haram). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-m-hotel-millennium-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Swissôtel Al Maqam', url: '/routes/jeddah-to-swissotel-al-maqam-makkah-taxi/' },
        { name: 'Hilton Convention', url: '/routes/jeddah-to-hilton-convention-makkah-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah/' },
];

export default function MHotelMillenniumMakkahTaxiPage() {
    const hotel = getMakkahHotel('m-hotel-millennium-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
