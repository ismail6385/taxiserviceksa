import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Millennium Aljawhara Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Millennium Al Jawhara Al Madinah (Central Area, near Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Millennium Aljawhara taxi', 'Millennium Aljawhara hotel transfer', 'Millennium Aljawhara Madinah pickup', 'KAIA to Millennium Aljawhara', 'Millennium Aljawhara taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-millennium-taiba-aljawhara-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Millennium Aljawhara Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Millennium Al Jawhara Al Madinah (Central Area, near Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-millennium-taiba-aljawhara-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Elaf Taiba', url: '/routes/jeddah-to-elaf-taiba-madinah-taxi/' },
        { name: 'Pullman ZamZam Madina', url: '/routes/jeddah-to-pullman-zamzam-madinah-taxi/' },
        { name: 'Madinah Hilton', url: '/routes/jeddah-to-hilton-madinah/' },
];

export default function MillenniumTaibaAljawharaMadinahTaxiPage() {
    const hotel = getMadinahHotel('millennium-taiba-aljawhara-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
