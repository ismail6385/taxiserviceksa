import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Radisson Blu Jeddah Taxi | Hotel Drop-Off | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Radisson Blu Hotel Jeddah (Madinah Road area, Jeddah). Door-to-door drop-off. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Radisson Blu Jeddah taxi', 'Radisson Blu Jeddah hotel transfer', 'Radisson Blu Jeddah pickup', 'KAIA to Radisson Blu Jeddah', 'Radisson Blu Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-radisson-blu-jeddah-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Jeddah Airport to Radisson Blu Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Jeddah Airport to Radisson Blu Jeddah Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Radisson Blu Hotel Jeddah (Madinah Road area, Jeddah). drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-radisson-blu-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Jeddah Hilton', url: '/routes/jeddah-to-hilton-jeddah-taxi/' },
        { name: 'Park Hyatt Jeddah', url: '/routes/jeddah-to-park-hyatt-jeddah-taxi/' },
        { name: 'Movenpick Jeddah', url: '/routes/jeddah-to-movenpick-jeddah-taxi/' },
];

export default function RadissonBluJeddahTaxiPage() {
    const hotel = getJeddahHotel('radisson-blu-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
