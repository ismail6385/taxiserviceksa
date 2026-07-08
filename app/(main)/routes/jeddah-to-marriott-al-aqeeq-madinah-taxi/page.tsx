import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Marriott Al Aqeeq Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Madinah Marriott Hotel Al Aqeeq (Al Aqeeq district). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Marriott Al Aqeeq taxi', 'Marriott Al Aqeeq hotel transfer', 'Marriott Al Aqeeq Madinah pickup', 'KAIA to Marriott Al Aqeeq', 'Marriott Al Aqeeq taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-marriott-al-aqeeq-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Marriott Al Aqeeq Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Madinah Marriott Hotel Al Aqeeq (Al Aqeeq district). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-marriott-al-aqeeq-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Millennium Aljawhara', url: '/routes/jeddah-to-millennium-taiba-aljawhara-madinah-taxi/' },
        { name: 'Anwar Al Madinah Mövenpick', url: '/routes/jeddah-to-movenpick-anwar-al-madinah-taxi/' },
        { name: 'Dar Al Taqwa Madinah', url: '/routes/jeddah-to-dar-al-taqwa-madinah/' },
];

export default function MarriottAlAqeeqMadinahTaxiPage() {
    const hotel = getMadinahHotel('marriott-al-aqeeq-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
