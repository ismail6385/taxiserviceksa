import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to InterContinental Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to InterContinental Jeddah (Al Hamra, Corniche). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to InterContinental Jeddah taxi', 'InterContinental Jeddah hotel transfer', 'InterContinental Jeddah pickup', 'KAIA to InterContinental Jeddah', 'InterContinental Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-intercontinental-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to InterContinental Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to InterContinental Jeddah (Al Hamra, Corniche). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-intercontinental-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Radisson Blu Jeddah', url: '/routes/jeddah-to-radisson-blu-jeddah-taxi/' },
        { name: 'Waldorf Astoria Jeddah', url: '/routes/jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi/' },
        { name: 'Crowne Plaza Jeddah', url: '/routes/jeddah-to-crowne-plaza-jeddah-taxi/' },
];

export default function IntercontinentalJeddahTaxiPage() {
    const hotel = getJeddahHotel('intercontinental-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
