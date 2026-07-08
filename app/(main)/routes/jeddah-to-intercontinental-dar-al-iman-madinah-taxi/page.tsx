import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Dar Al Iman InterContinental Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Dar Al Iman InterContinental Madinah (Central Area, King Fahd Road). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Dar Al Iman InterContinental taxi', 'Dar Al Iman InterContinental hotel transfer', 'Dar Al Iman InterContinental Madinah pickup', 'KAIA to Dar Al Iman InterContinental', 'Dar Al Iman InterContinental taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-intercontinental-dar-al-iman-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Dar Al Iman InterContinental Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Dar Al Iman InterContinental Madinah (Central Area, King Fahd Road). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-intercontinental-dar-al-iman-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Crowne Plaza Madinah', url: '/routes/jeddah-to-crowne-plaza-madinah-taxi/' },
        { name: 'Millennium Aljawhara', url: '/routes/jeddah-to-millennium-taiba-aljawhara-madinah-taxi/' },
        { name: 'Dar Al Taqwa Madinah', url: '/routes/jeddah-to-dar-al-taqwa-madinah-taxi/' },
];

export default function IntercontinentalDarAlImanMadinahTaxiPage() {
    const hotel = getMadinahHotel('intercontinental-dar-al-iman-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
