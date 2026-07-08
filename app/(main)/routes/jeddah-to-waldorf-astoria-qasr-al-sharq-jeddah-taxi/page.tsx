import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Waldorf Astoria Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Waldorf Astoria Jeddah - Qasr Al Sharq (Corniche, North Jeddah). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Waldorf Astoria Jeddah taxi', 'Waldorf Astoria Jeddah hotel transfer', 'Waldorf Astoria Jeddah pickup', 'KAIA to Waldorf Astoria Jeddah', 'Waldorf Astoria Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Waldorf Astoria Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Waldorf Astoria Jeddah - Qasr Al Sharq (Corniche, North Jeddah). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Park Hyatt Jeddah', url: '/routes/jeddah-to-park-hyatt-jeddah-taxi/' },
        { name: 'Movenpick Jeddah', url: '/routes/jeddah-to-movenpick-jeddah-taxi/' },
        { name: 'Radisson Blu Jeddah', url: '/routes/jeddah-to-radisson-blu-jeddah-taxi/' },
];

export default function WaldorfAstoriaQasrAlSharqJeddahTaxiPage() {
    const hotel = getJeddahHotel('waldorf-astoria-qasr-al-sharq-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
