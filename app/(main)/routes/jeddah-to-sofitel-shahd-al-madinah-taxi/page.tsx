import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Sofitel Shahd Al Madinah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Sofitel Shahd Al Madinah (Central Area, near Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Sofitel Shahd Al Madinah taxi', 'Sofitel Shahd Al Madinah hotel transfer', 'Sofitel Shahd Al Madinah pickup', 'KAIA to Sofitel Shahd Al Madinah', 'Sofitel Shahd Al taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-sofitel-shahd-al-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Sofitel Shahd Al Madinah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Sofitel Shahd Al Madinah (Central Area, near Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-sofitel-shahd-al-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Marriott Al Aqeeq', url: '/routes/jeddah-to-marriott-al-aqeeq-madinah-taxi/' },
        { name: 'Rua Al Madinah', url: '/routes/jeddah-to-rua-al-madinah-taxi/' },
        { name: 'The Oberoi Madinah', url: '/routes/jeddah-to-oberoi-madinah/' },
];

export default function SofitelShahdAlMadinahTaxiPage() {
    const hotel = getMadinahHotel('sofitel-shahd-al-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
