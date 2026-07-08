import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Crowne Plaza Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Crowne Plaza Jeddah (Madinah Road area, Jeddah). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Crowne Plaza Jeddah taxi', 'Crowne Plaza Jeddah hotel transfer', 'Crowne Plaza Jeddah pickup', 'KAIA to Crowne Plaza Jeddah', 'Crowne Plaza Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-crowne-plaza-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Crowne Plaza Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Crowne Plaza Jeddah (Madinah Road area, Jeddah). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-crowne-plaza-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Movenpick Jeddah', url: '/routes/jeddah-to-movenpick-jeddah-taxi/' },
        { name: 'Radisson Blu Jeddah', url: '/routes/jeddah-to-radisson-blu-jeddah-taxi/' },
        { name: 'Waldorf Astoria Jeddah', url: '/routes/jeddah-to-waldorf-astoria-qasr-al-sharq-jeddah-taxi/' },
];

export default function CrownePlazaJeddahTaxiPage() {
    const hotel = getJeddahHotel('crowne-plaza-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
