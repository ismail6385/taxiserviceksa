import Link from 'next/link';
import { Car, ArrowRight } from 'lucide-react';

export type FleetCategory = 'sedan' | 'suv' | 'van' | 'bus';

interface FleetVehicle {
    slug: string;
    name: string;
    category: FleetCategory;
}

// Mirrors the 17 folders under app/(main)/fleet/. Categorized from each
// page's own <title> (capacity + vehicle class), not a separate data source,
// so a new fleet page needs one line added here to join the linking graph.
const FLEET_VEHICLES: FleetVehicle[] = [
    { slug: 'bmw-7-series', name: 'BMW 7-Series', category: 'sedan' },
    { slug: 'ford-taurus', name: 'Ford Taurus', category: 'sedan' },
    { slug: 'genesis-g80', name: 'Genesis G80', category: 'sedan' },
    { slug: 'mercedes-s-class', name: 'Mercedes S-Class', category: 'sedan' },
    { slug: 'toyota-camry', name: 'Toyota Camry', category: 'sedan' },
    { slug: 'cadillac-escalade', name: 'Cadillac Escalade', category: 'suv' },
    { slug: 'gmc-yukon', name: 'GMC Yukon', category: 'suv' },
    { slug: 'gmc-yukon-xl', name: 'GMC Yukon XL', category: 'suv' },
    { slug: 'hyundai-starex', name: 'Hyundai Starex', category: 'van' },
    { slug: 'hyundai-staria', name: 'Hyundai Staria', category: 'van' },
    { slug: 'hyundai-staria-vip', name: 'Hyundai Staria VIP', category: 'van' },
    { slug: 'mercedes-vito', name: 'Mercedes Vito', category: 'van' },
    { slug: 'toyota-veloz', name: 'Toyota Veloz', category: 'van' },
    { slug: 'toyota-hiace', name: 'Toyota Hiace', category: 'van' },
    { slug: 'mercedes-sprinter', name: 'Mercedes Sprinter', category: 'bus' },
    { slug: 'toyota-coaster', name: 'Toyota Coaster', category: 'bus' },
    { slug: 'luxurious-bus', name: 'Luxurious Bus', category: 'bus' },
];

const CATEGORY_LABEL: Record<FleetCategory, string> = {
    sedan: 'Executive Sedan',
    suv: 'Luxury SUV',
    van: 'Premium Van',
    bus: 'Group Coach',
};

interface RelatedFleetProps {
    currentSlug: string;
    limit?: number;
}

/**
 * Reciprocal fleet linking: siblings in the same vehicle category, plus a
 * link back to /fleet/. Every fleet detail page previously called
 * <RelatedLocations currentCity="VIP Fleet" /> (or similar placeholder
 * strings that don't match any real Saudi region) and had no path back to
 * /fleet/ or to any other vehicle — this replaces that with something the
 * page is actually about.
 */
export default function RelatedFleet({ currentSlug, limit = 3 }: RelatedFleetProps) {
    const current = FLEET_VEHICLES.find((v) => v.slug === currentSlug);
    const category = current?.category;

    const siblings = FLEET_VEHICLES.filter((v) => v.slug !== currentSlug && v.category === category);
    const filler = FLEET_VEHICLES.filter((v) => v.slug !== currentSlug && v.category !== category);
    const picks = [...siblings, ...filler].slice(0, limit);

    return (
        <div className="border-t border-gray-200 pt-16 mt-16 pb-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                    {category ? `Compare Other ${CATEGORY_LABEL[category]}s` : 'Explore More of Our Fleet'}
                </h3>
                <p className="text-gray-500 mt-2">Every vehicle is available for airport, intercity, and Umrah transfers</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {picks.map((v) => (
                    <Link
                        key={v.slug}
                        href={`/fleet/${v.slug}/`}
                        className="group block bg-gray-50 hover:bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Car className="w-4 h-4 text-primary" />
                            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{v.name}</h4>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{CATEGORY_LABEL[v.category]}</p>
                        <div className="flex items-center text-xs font-semibold text-primary">
                            View Vehicle <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
                <Link
                    href="/fleet/"
                    className="group flex flex-col items-center justify-center gap-2 bg-primary/5 hover:bg-primary/10 p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all text-center"
                >
                    <span className="font-bold text-primary text-sm">View Full Fleet</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
