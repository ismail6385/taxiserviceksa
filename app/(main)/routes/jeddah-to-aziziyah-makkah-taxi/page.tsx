import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Aziziyah Makkah Taxi | Private Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Jeddah Airport (KAIA) to Aziziyah, Makkah. Direct door-to-door drop-off at your hotel or apartment in North or South Aziziyah. Fixed prices, 24/7 service.',
    keywords: ['Jeddah airport to Aziziyah taxi', 'Jeddah to Aziziyah Makkah taxi', 'Aziziyah Makkah transfer', 'KAIA to Aziziyah', 'Aziziyah taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-aziziyah-makkah-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Jeddah Airport to Aziziyah Makkah Taxi | Fixed Price Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Jeddah Airport to Aziziyah Makkah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to your hotel or apartment in Aziziyah, Makkah.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-aziziyah-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Hilton Suites Makkah', url: '/routes/jeddah-to-hilton-suites-makkah-taxi/' },
        { name: 'Movenpick Hajar Tower', url: '/routes/jeddah-to-movenpick-hajar-tower-makkah-taxi/' },
        { name: 'Swissotel Makkah', url: '/routes/jeddah-to-swissotel-makkah-taxi/' },
];

export default function AziziyahMakkahTaxiPage() {
    const hotel = getMakkahHotel('aziziyah-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
