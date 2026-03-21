import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DriverJoinClient from '@/app/(main)/join-as-driver/[city]/DriverJoinClient';

const cities = [
    { id: 'riyadh', name: 'Riyadh', opps: ['Corporate clients', 'Airport rides', 'Long-distance business trips'] },
    { id: 'jeddah', name: 'Jeddah', opps: ['Airport transfers', 'VIP tourists', 'Hotel pickups'] },
    { id: 'makkah', name: 'Makkah', opps: ['Umrah & Hajj passengers', 'Haram routes', '24/7 demand'] },
    { id: 'madinah', name: 'Madinah', opps: ['Ziyarah tours', 'Airport transfers', 'Intercity spiritual trips'] },
    { id: 'dammam', name: 'Dammam', opps: ['Bahrain border trips', 'Business travelers', 'Oil company clients'] },
    { id: 'khobar', name: 'Khobar', opps: ['Bahrain border trips', 'Business travelers', 'Oil company clients'] },
    { id: 'dhahran', name: 'Dhahran', opps: ['Corporate contracts', 'Aramco visitors', 'Executive airport transfers'] },
    { id: 'taif', name: 'Taif', opps: ['Tourism', 'Family trips', 'Weekend demand'] },
    { id: 'tabuk', name: 'Tabuk', opps: ['NEOM business travelers', 'Tourism trips', 'Regional transport'] },
    { id: 'abha', name: 'Abha', opps: ['Tourism', 'Family trips', 'Weekend demand'] },
    { id: 'khamis-mushait', name: 'Khamis Mushait', opps: ['Commercial hub transfers', 'Military base visitors', 'Regional business trips'] },
    { id: 'hail', name: 'Hail', opps: ['Tourism', 'Heritage tours', 'Business transfers'] },
    { id: 'buraidah', name: 'Buraidah', opps: ['Agricultural corporate clients', 'Intercity business trips', 'Regional commuting'] },
    { id: 'najran', name: 'Najran', opps: ['Border transport', 'Business travelers', 'Local premium transfers'] },
    { id: 'jubail', name: 'Jubail', opps: ['Industrial city visitors', 'Corporate long-distance', 'Business executives'] },
    { id: 'yanbu', name: 'Yanbu', opps: ['Industrial business clients', 'Red Sea resort transfers', 'Cruise terminal pickups'] },
    { id: 'al-qassim', name: 'Al Qassim', opps: ['Business and agriculture visitors', 'Domestic airport transfers', 'Intercity corporate trips'] },
    { id: 'al-ahsa', name: 'Al Ahsa', opps: ['Tourism and heritage visitors', 'GCC border trips', 'Weekend family trips'] },
];

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.id,
    }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const cityObj = cities.find((c) => c.id === params.city);
    if (!cityObj) return {};

    const { name } = cityObj;

    return {
        title: `Driver Jobs in ${name} - Join as a VIP Chauffeur`,
        description: `Looking for private driver jobs in ${name}? Join our elite network. We are hiring professional drivers in ${name} with their own cars (2020+). High-value clients and long-distance trips.`,
        openGraph: {
            title: `Driver Jobs in ${name} - Join as a VIP Chauffeur`,
            description: `We are hiring professional VIP chauffeurs in ${name}. Earn 7000-15000 SAR/month with direct bookings and premium clients.`,
        },
        alternates: {
            canonical: `/join-as-driver/${params.city}`,
        }
    };
}

export default function JoinAsDriverCityPage({ params }: { params: { city: string } }) {
    const cityObj = cities.find((c) => c.id === params.city);

    if (!cityObj) {
        notFound();
    }

    return <DriverJoinClient cityObj={cityObj} allCities={cities} />;
}
