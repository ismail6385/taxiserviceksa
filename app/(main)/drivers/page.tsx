import { Metadata } from 'next';
import { listApprovedDrivers } from '@/lib/driverOnboardingService';
import { DRIVER_LOCATIONS, DRIVER_SERVICES, VEHICLE_CATEGORIES } from '@/lib/driver-constants';
import DriverCard from '@/components/DriverCard';
import DriverFilterBar from '@/components/DriverFilterBar';
import Hero from '@/components/Hero';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Our Drivers | Taxi Service KSA',
    description: 'Browse professional, verified chauffeurs available across Saudi Arabia.',
    alternates: { canonical: 'https://taxiserviceksa.com/drivers/' },
};

interface Props {
    searchParams: { location?: string; vehicle?: string; service?: string };
}

export default async function DriversDirectoryPage({ searchParams }: Props) {
    const drivers = await listApprovedDrivers({
        location: searchParams.location,
        vehicleCategory: searchParams.vehicle,
        service: searchParams.service,
    });

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                h1Text="Professional Drivers Across Saudi Arabia"
                title={<span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block">Our Drivers</span>}
                subtitle="Verified, Approved Chauffeurs"
                location="Browse by city, vehicle or service"
            />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <DriverFilterBar
                    locationOptions={DRIVER_LOCATIONS.map(l => ({ value: l.slug, label: l.name }))}
                    vehicleOptions={VEHICLE_CATEGORIES.map(c => ({ value: c, label: c }))}
                    serviceOptions={DRIVER_SERVICES.map(s => ({ value: s.slug, label: s.label }))}
                />

                {drivers.length === 0 ? (
                    <div className="text-center py-24 text-gray-500">
                        <p className="font-semibold">No drivers match these filters yet.</p>
                        <a href="/drivers/" className="text-primary hover:underline text-sm mt-2 inline-block">Clear filters</a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {drivers.map((driver: any) => (
                            <DriverCard key={driver.id} driver={driver} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
