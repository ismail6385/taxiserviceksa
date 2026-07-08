import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Jeddah Hilton Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Jeddah Hilton (Corniche, North Jeddah). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Jeddah Hilton taxi', 'Jeddah Hilton hotel transfer', 'Jeddah Hilton pickup', 'KAIA to Jeddah Hilton', 'Jeddah Hilton taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Jeddah Hilton Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Jeddah Hilton (Corniche, North Jeddah). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-hilton-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Rosewood Jeddah', url: '/routes/jeddah-to-rosewood-jeddah-taxi/' },
        { name: 'Jeddah Marriott', url: '/routes/jeddah-to-jeddah-marriott-taxi/' },
        { name: 'Sheraton Jeddah', url: '/routes/jeddah-to-sheraton-jeddah-taxi/' },
];

export default function HiltonJeddahTaxiPage() {
    const hotel = getJeddahHotel('hilton-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
