import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Crowne Plaza Madinah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Crowne Plaza Madinah (Central Area, near Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Crowne Plaza Madinah taxi', 'Crowne Plaza Madinah hotel transfer', 'Crowne Plaza Madinah pickup', 'KAIA to Crowne Plaza Madinah', 'Crowne Plaza taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-crowne-plaza-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Crowne Plaza Madinah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Crowne Plaza Madinah (Central Area, near Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-crowne-plaza-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Sofitel Shahd Al Madinah', url: '/routes/jeddah-to-sofitel-shahd-al-madinah-taxi/' },
        { name: 'Elaf Taiba', url: '/routes/jeddah-to-elaf-taiba-madinah-taxi/' },
        { name: 'Madinah Hilton', url: '/routes/jeddah-to-hilton-madinah-taxi/' },
];

export default function CrownePlazaMadinahTaxiPage() {
    const hotel = getMadinahHotel('crowne-plaza-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
