import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Al-Balad Taxi | Historic Jeddah Transfer | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Al-Balad, Historic Jeddah. Direct drop-off near Baab Makkah/Baab Jadid. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Al Balad taxi', 'Al Balad Jeddah transfer', 'KAIA to Al Balad', 'Al Balad taxi Jeddah', 'Historic Jeddah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-al-balad-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to Al-Balad Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Al-Balad, Historic Jeddah. VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-al-balad-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Jeddah Marriott', url: '/routes/jeddah-to-jeddah-marriott-taxi/' },
        { name: 'Radisson Blu Jeddah', url: '/routes/jeddah-to-radisson-blu-jeddah-taxi/' },
        { name: 'Crowne Plaza Jeddah', url: '/routes/jeddah-to-crowne-plaza-jeddah-taxi/' },
];

export default function AlBaladJeddahTaxiPage() {
    const hotel = getJeddahHotel('al-balad-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
