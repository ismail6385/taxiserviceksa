import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Movenpick Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Movenpick Hotel Jeddah (Al Hamra, Corniche). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Movenpick Jeddah taxi', 'Movenpick Jeddah hotel transfer', 'Movenpick Jeddah pickup', 'KAIA to Movenpick Jeddah', 'Movenpick Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Movenpick Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Movenpick Hotel Jeddah (Al Hamra, Corniche). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Sheraton Jeddah', url: '/routes/jeddah-to-sheraton-jeddah-taxi/' },
        { name: 'Jeddah Hilton', url: '/routes/jeddah-to-hilton-jeddah-taxi/' },
        { name: 'Park Hyatt Jeddah', url: '/routes/jeddah-to-park-hyatt-jeddah-taxi/' },
];

export default function MovenpickJeddahTaxiPage() {
    const hotel = getJeddahHotel('movenpick-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
