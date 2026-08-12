import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Movenpick Hajar Tower Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Movenpick Hotel & Residences Hajar Tower Makkah (Directly at the King Abdul Aziz Gate). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Movenpick Hajar Tower taxi', 'Movenpick Hajar Tower hotel transfer', 'Movenpick Hajar Tower Makkah pickup', 'KAIA to Movenpick Hajar Tower', 'Movenpick Hajar Tower taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-hajar-tower-makkah-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Jeddah Airport to Movenpick Hajar Tower Taxi | Fixed Price Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Jeddah Airport to Movenpick Hajar Tower Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Movenpick Hotel & Residences Hajar Tower Makkah (Directly at the King Abdul Aziz Gate). drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-movenpick-hajar-tower-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Anjum Hotel', url: '/routes/jeddah-to-anjum-hotel-makkah-taxi/' },
        { name: 'M Hotel Makkah', url: '/routes/jeddah-to-m-hotel-millennium-makkah-taxi/' },
        { name: 'Fairmont Clock Tower', url: '/routes/jeddah-to-fairmont-makkah-taxi/' },
];

export default function MovenpickHajarTowerMakkahTaxiPage() {
    const hotel = getMakkahHotel('movenpick-hajar-tower-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
