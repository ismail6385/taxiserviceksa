import { Metadata } from 'next';
import HotelTransferPage from '@/components/HotelTransferPage';
import { getJeddahHotel } from '@/data/jeddahHotels';

export const metadata: Metadata = {
    title: 'Jeddah Airport to King Abdullah Stadium Taxi | Matchday Transfer | Taxi Service KSA',
    description: 'Book private taxi from Jeddah Airport (KAIA) to King Abdullah Sports City Stadium. Direct drop-off near your gate, matchday and event transfers. Fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to King Abdullah Stadium taxi', 'King Abdullah Sports City taxi', 'KAIA to King Abdullah Stadium', 'Al Ittihad stadium taxi', 'Al Ahli stadium taxi Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-king-abdullah-stadium-jeddah-taxi/',
    },
    openGraph: {
        title: 'Jeddah Airport to King Abdullah Stadium Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to King Abdullah Sports City Stadium, North Jeddah. VIP drop-off service.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-king-abdullah-stadium-jeddah-taxi/',
        type: 'website',
    },
};

const otherHotels = [
        { name: 'Rosewood Jeddah', url: '/routes/jeddah-to-rosewood-jeddah-taxi/' },
        { name: 'Park Hyatt Jeddah', url: '/routes/jeddah-to-park-hyatt-jeddah-taxi/' },
        { name: 'InterContinental Jeddah', url: '/routes/jeddah-to-intercontinental-jeddah-taxi/' },
];

export default function KingAbdullahStadiumJeddahTaxiPage() {
    const hotel = getJeddahHotel('king-abdullah-stadium-jeddah-taxi')!;
    return <HotelTransferPage hotel={hotel} otherHotels={otherHotels} />;
}
