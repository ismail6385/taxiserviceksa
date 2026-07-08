import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Rua Al Madinah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Rua Al Madinah District Hotels (Rua Al Madinah development, adjacent to the Central Area). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Rua Al Madinah taxi', 'Rua Al Madinah hotel transfer', 'Rua Al Madinah pickup', 'KAIA to Rua Al Madinah', 'Rua Al taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-rua-al-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Rua Al Madinah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Rua Al Madinah District Hotels (Rua Al Madinah development, adjacent to the Central Area). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-rua-al-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Anwar Al Madinah Mövenpick', url: '/routes/jeddah-to-movenpick-anwar-al-madinah-taxi/' },
        { name: 'Crowne Plaza Madinah', url: '/routes/jeddah-to-crowne-plaza-madinah-taxi/' },
        { name: 'Dar Al Taqwa Madinah', url: '/routes/jeddah-to-dar-al-taqwa-madinah-taxi/' },
];

export default function RuaAlMadinahTaxiPage() {
    const hotel = getMadinahHotel('rua-al-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
