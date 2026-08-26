import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getApprovedDriversForLocation } from '@/lib/driverOnboardingService';
import { driverLocationName } from '@/lib/driver-constants';
import DriverCard from './DriverCard';

interface ApprovedDriversForLocationProps {
    /** Location slug matching data/cities.ts (e.g. "riyadh"). */
    location: string;
    limit?: number;
}

/**
 * Drop-in section for location pages: <ApprovedDriversForLocation location="riyadh" />
 * Server Component — queries the DB directly (service-role client) at
 * request/build time. Renders nothing when there are no approved drivers
 * for this location yet, so it's always safe to add to a page even before
 * any driver has been onboarded there.
 */
export default async function ApprovedDriversForLocation({ location, limit = 3 }: ApprovedDriversForLocationProps) {
    const drivers = await getApprovedDriversForLocation(location, limit);
    if (!drivers.length) return null;

    const cityName = driverLocationName(location);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Available Drivers in {cityName}</h2>
                        <p className="text-gray-600 mt-2">Professional, verified chauffeurs ready to serve {cityName}.</p>
                    </div>
                    <Link href="/drivers/" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline shrink-0">
                        View All Drivers <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {drivers.map((driver: any) => (
                        <DriverCard key={driver.id} driver={driver} />
                    ))}
                </div>
            </div>
        </section>
    );
}
