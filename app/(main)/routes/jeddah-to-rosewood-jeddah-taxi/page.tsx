import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Rosewood Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Rosewood Jeddah (North Jeddah business district). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Rosewood Jeddah taxi', 'Rosewood Jeddah hotel transfer', 'Rosewood Jeddah pickup', 'KAIA to Rosewood Jeddah', 'Rosewood Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-rosewood-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Rosewood Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Rosewood Jeddah (North Jeddah business district). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-rosewood-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Waldorf Astoria Jeddah', url: '/routes/jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi/' },
        { name: 'Crowne Plaza Jeddah', url: '/routes/jeddah-to-crowne-plaza-jeddah-taxi/' },
        { name: 'InterContinental Jeddah', url: '/routes/jeddah-to-intercontinental-jeddah-taxi/' },
];

export default function RosewoodJeddahTaxiPage() {
    const hotel = getJeddahHotel('rosewood-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
