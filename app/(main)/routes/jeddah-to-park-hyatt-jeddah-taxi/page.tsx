import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Park Hyatt Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Park Hyatt Jeddah - Marina, Club and Spa (Corniche Marina, North Jeddah). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Park Hyatt Jeddah taxi', 'Park Hyatt Jeddah hotel transfer', 'Park Hyatt Jeddah pickup', 'KAIA to Park Hyatt Jeddah', 'Park Hyatt Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-park-hyatt-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Park Hyatt Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Park Hyatt Jeddah - Marina, Club and Spa (Corniche Marina, North Jeddah). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-park-hyatt-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Jeddah Marriott', url: '/routes/jeddah-to-jeddah-marriott-taxi/' },
        { name: 'Sheraton Jeddah', url: '/routes/jeddah-to-sheraton-jeddah-taxi/' },
        { name: 'Jeddah Hilton', url: '/routes/jeddah-to-hilton-jeddah-taxi/' },
];

export default function ParkHyattJeddahTaxiPage() {
    const hotel = getJeddahHotel('park-hyatt-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
