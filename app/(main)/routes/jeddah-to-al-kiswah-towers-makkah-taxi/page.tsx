import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Al Kiswah Towers Hotel Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Al Kiswah Towers Hotel, Makkah (At Tayseer District). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Al Kiswah Towers taxi', 'Al Kiswah Towers hotel transfer', 'Al Kiswah Towers pickup', 'KAIA to Al Kiswah Towers', 'Al Kiswah Towers taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-al-kiswah-towers-makkah-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Jeddah Airport to Al Kiswah Towers Hotel Taxi | Fixed Price Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Jeddah Airport to Al Kiswah Towers Hotel Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Al Kiswah Towers Hotel (At Tayseer District, Makkah). drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-al-kiswah-towers-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Anjum Hotel', url: '/routes/jeddah-to-anjum-hotel-makkah-taxi/' },
        { name: 'Al Safwah Royale Orchid', url: '/routes/jeddah-to-al-safwah-royale-orchid-makkah-taxi/' },
        { name: 'Elaf Kinda', url: '/routes/jeddah-to-elaf-kinda-makkah-taxi/' },
];

export default function AlKiswahTowersMakkahTaxiPage() {
    const hotel = getMakkahHotel('al-kiswah-towers-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
