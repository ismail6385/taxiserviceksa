import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getMakkahHotel } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Address Jabal Omar Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Address Jabal Omar Makkah (Jabal Omar Complex). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Address Jabal Omar taxi', 'Address Jabal Omar hotel transfer', 'Address Jabal Omar Makkah pickup', 'KAIA to Address Jabal Omar', 'Address Jabal Omar taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-address-jabal-omar-makkah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Address Jabal Omar Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Address Jabal Omar Makkah (Jabal Omar Complex). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-address-jabal-omar-makkah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Sheraton Makkah', url: '/routes/jeddah-to-sheraton-makkah-taxi/' },
        { name: 'Elaf Kinda', url: '/routes/jeddah-to-elaf-kinda-makkah-taxi/' },
        { name: 'Pullman ZamZam Makkah', url: '/routes/jeddah-to-pullman-makkah/' },
];

export default function AddressJabalOmarMakkahTaxiPage() {
    const hotel = getMakkahHotel('address-jabal-omar-makkah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
