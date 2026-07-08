import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Elaf Taiba Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Elaf Taiba Hotel Madinah (Central Area, near Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Elaf Taiba taxi', 'Elaf Taiba hotel transfer', 'Elaf Taiba Madinah pickup', 'KAIA to Elaf Taiba', 'Elaf Taiba taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-elaf-taiba-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Elaf Taiba Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Elaf Taiba Hotel Madinah (Central Area, near Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-elaf-taiba-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Rua Al Madinah', url: '/routes/jeddah-to-rua-al-madinah-taxi/' },
        { name: 'Dar Al Iman InterContinental', url: '/routes/jeddah-to-intercontinental-dar-al-iman-madinah-taxi/' },
        { name: 'The Oberoi Madinah', url: '/routes/jeddah-to-oberoi-madinah/' },
];

export default function ElafTaibaMadinahTaxiPage() {
    const hotel = getMadinahHotel('elaf-taiba-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
