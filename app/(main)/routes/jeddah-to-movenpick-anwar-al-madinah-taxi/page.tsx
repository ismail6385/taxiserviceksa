import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Anwar Al Madinah Mövenpick Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Anwar Al Madinah Mövenpick (Central Area (Markaziyah), facing Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Anwar Al Madinah Mövenpick taxi', 'Anwar Al Madinah Mövenpick hotel transfer', 'Anwar Al Madinah Mövenpick Madinah pickup', 'KAIA to Anwar Al Madinah Mövenpick', 'Anwar Al Madinah Mövenpick taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-anwar-al-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Anwar Al Madinah Mövenpick Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Anwar Al Madinah Mövenpick (Central Area (Markaziyah), facing Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-anwar-al-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Pullman ZamZam Madina', url: '/routes/jeddah-to-pullman-zamzam-madinah-taxi/' },
        { name: 'Sofitel Shahd Al Madinah', url: '/routes/jeddah-to-sofitel-shahd-al-madinah-taxi/' },
        { name: 'Madinah Hilton', url: '/routes/jeddah-to-hilton-madinah/' },
];

export default function MovenpickAnwarAlMadinahTaxiPage() {
    const hotel = getMadinahHotel('movenpick-anwar-al-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
