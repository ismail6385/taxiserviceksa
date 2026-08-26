import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { driverLocationName, driverServiceLabel, firstVehicle } from '@/lib/driver-constants';

export interface DriverCardData {
    id: string;
    display_name: string | null;
    slug: string | null;
    profile_photo_url: string | null;
    bio: string | null;
    languages: string[] | null;
    driver_locations?: { location_slug: string }[];
    driver_services?: { service_slug: string }[];
    [key: string]: unknown; // driver_vehicles shape varies (object|array), read via firstVehicle()
}

interface DriverCardProps {
    driver: DriverCardData;
    /** When false (e.g. embedded on a location page), the card is not a
     *  link to the full profile — just a summary. */
    linkToProfile?: boolean;
}

export default function DriverCard({ driver, linkToProfile = true }: DriverCardProps) {
    const vehicle = firstVehicle(driver);
    const locations = (driver.driver_locations || []).map(l => driverLocationName(l.location_slug));
    const services = (driver.driver_services || []).map(s => driverServiceLabel(s.service_slug));
    const name = driver.display_name || 'Professional Driver';

    const showProfileLink = linkToProfile && !!driver.slug;
    const Header = (
        <div className="p-5 flex items-center gap-4 border-b border-gray-100">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-white shadow">
                {driver.profile_photo_url ? (
                    <Image src={driver.profile_photo_url} alt={name} fill className="object-cover" sizes="64px" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl font-bold bg-gray-100">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>
            <div className="min-w-0">
                <h3 className="font-bold text-gray-900 truncate group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-xs text-gray-500">Professional Chauffeur</p>
            </div>
        </div>
    );

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group h-full flex flex-col">
            {showProfileLink ? <Link href={`/drivers/${driver.slug}/`}>{Header}</Link> : Header}

            <div className="p-5 flex-1 flex flex-col gap-3">
                {vehicle && (
                    <div>
                        <p className="text-sm font-semibold text-gray-900">
                            {[vehicle.make, vehicle.model].filter(Boolean).join(' ') || vehicle.category}
                        </p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                            {vehicle.passenger_capacity != null && (
                                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-primary" /> {vehicle.passenger_capacity} Passengers</span>
                            )}
                            {vehicle.luggage_capacity != null && (
                                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-primary" /> {vehicle.luggage_capacity} Luggage</span>
                            )}
                        </div>
                    </div>
                )}

                {locations.length > 0 && (
                    <p className="text-xs text-gray-500 truncate">{locations.join(' • ')}</p>
                )}

                {services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {services.slice(0, 3).map(s => (
                            <span key={s} className="text-[11px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                    </div>
                )}

                {driver.languages && driver.languages.length > 0 && (
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        <Languages className="w-3.5 h-3.5 text-primary shrink-0" /> {driver.languages.join(', ')}
                    </p>
                )}

                <div className="mt-auto pt-2">
                    <Button asChild size="sm" className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                        <Link href={`/booking${driver.slug ? `?driver=${encodeURIComponent(driver.slug)}` : ''}`}>
                            Request a Quote
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
