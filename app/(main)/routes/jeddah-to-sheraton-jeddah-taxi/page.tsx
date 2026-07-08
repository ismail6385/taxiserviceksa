import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Sheraton Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Sheraton Jeddah Hotel (North Jeddah, near the Corniche). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Sheraton Jeddah taxi', 'Sheraton Jeddah hotel transfer', 'Sheraton Jeddah pickup', 'KAIA to Sheraton Jeddah', 'Sheraton Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-sheraton-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Sheraton Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Sheraton Jeddah Hotel (North Jeddah, near the Corniche). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-sheraton-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'InterContinental Jeddah', url: '/routes/jeddah-to-intercontinental-jeddah-taxi/' },
        { name: 'Rosewood Jeddah', url: '/routes/jeddah-to-rosewood-jeddah-taxi/' },
        { name: 'Jeddah Marriott', url: '/routes/jeddah-to-jeddah-marriott-taxi/' },
];

export default function SheratonJeddahTaxiPage() {
    const hotel = getJeddahHotel('sheraton-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
