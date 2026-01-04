import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export interface RelatedLocationsLabels {
    title: string;
    subtitle: string;
    viewRoutes: string;
}

export interface RelatedLink {
    name: string;
    url: string;
    description: string;
}

const defaultLinks: RelatedLink[] = [
    { name: 'Makkah (Haram Area)', url: '/locations/makkah/', description: '24/7 taxi services for Umrah pilgrims and Haram visitors' },
    { name: 'Madinah (Prophet\'s Mosque)', url: '/locations/madinah/', description: 'Reliable transport for Ziyarat and Mosque visits' },
    { name: 'Jeddah International Airport', url: '/locations/jeddah/', description: 'King Abdulaziz Airport (JED) meet & greet transfers' },
    { name: 'Riyadh (Capital City)', url: '/locations/riyadh/', description: 'Business and intercity transport in the capital' },
];

interface RelatedLocationsProps {
    currentCity: string;
    labels?: RelatedLocationsLabels;
    customLinks?: RelatedLink[];
    isRtl?: boolean;
}

export default function RelatedLocations({ currentCity, labels, customLinks, isRtl = false }: RelatedLocationsProps) {
    const activeLinks = customLinks || defaultLinks;
    const t: RelatedLocationsLabels = {
        title: `Explore Nearby Destinations from ${currentCity}`,
        subtitle: "Seamless connections across Saudi Arabia",
        viewRoutes: "View Routes",
        ...labels
    };

    // Filter out the current city (simple check)
    const links = activeLinks.filter(link => !link.name.toLowerCase().includes(currentCity.toLowerCase()) && !link.url.toLowerCase().includes(currentCity.toLowerCase()));

    return (
        <div className={`border-t border-gray-200 pt-16 mt-16 pb-8 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{t.title}</h3>
                <p className="text-gray-500 mt-2">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className="group block bg-gray-50 hover:bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{link.name}</h4>
                        </div>
                        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{link.description}</p>
                        <div className={`flex items-center text-xs font-semibold text-primary ${isRtl ? 'flex-row-reverse' : ''}`}>
                            {t.viewRoutes} <ArrowRight className={`w-3 h-3 ${isRtl ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform`} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
