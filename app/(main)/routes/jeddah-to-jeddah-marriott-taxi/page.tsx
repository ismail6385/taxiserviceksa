import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Jeddah Marriott Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Jeddah Marriott Hotel (Central Jeddah, near the business district). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Jeddah Marriott taxi', 'Jeddah Marriott hotel transfer', 'Jeddah Marriott pickup', 'KAIA to Jeddah Marriott', 'Jeddah Marriott taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-jeddah-marriott-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Jeddah Marriott Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Jeddah Marriott Hotel (Central Jeddah, near the business district). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-jeddah-marriott-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Crowne Plaza Jeddah', url: '/routes/jeddah-to-crowne-plaza-jeddah-taxi/' },
        { name: 'InterContinental Jeddah', url: '/routes/jeddah-to-intercontinental-jeddah-taxi/' },
        { name: 'Rosewood Jeddah', url: '/routes/jeddah-to-rosewood-jeddah-taxi/' },
];

export default function JeddahMarriottTaxiPage() {
    const hotel = getJeddahHotel('jeddah-marriott-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
