import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMadinahHotel } from '@/data/madinahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Pullman ZamZam Madina Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Pullman ZamZam Madina (Central Area, near Masjid an-Nabawi). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Pullman ZamZam Madina taxi', 'Pullman ZamZam Madina hotel transfer', 'Pullman ZamZam Madina Madinah pickup', 'KAIA to Pullman ZamZam Madina', 'Pullman ZamZam Madina taxi Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-pullman-zamzam-madinah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Pullman ZamZam Madina Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Pullman ZamZam Madina (Central Area, near Masjid an-Nabawi). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-pullman-zamzam-madinah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Dar Al Iman InterContinental', url: '/routes/jeddah-to-intercontinental-dar-al-iman-madinah-taxi/' },
        { name: 'Marriott Al Aqeeq', url: '/routes/jeddah-to-marriott-al-aqeeq-madinah-taxi/' },
        { name: 'The Oberoi Madinah', url: '/routes/jeddah-to-oberoi-madinah-taxi/' },
];

export default function PullmanZamzamMadinahTaxiPage() {
    const hotel = getMadinahHotel('pullman-zamzam-madinah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
