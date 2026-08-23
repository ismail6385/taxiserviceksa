import { Route, Clock, MapPin, Flag, Globe2, Car, Users } from 'lucide-react';
import type { DistanceRoute } from '@/data/distanceRoutes';

interface DistanceStatBarProps {
    route: DistanceRoute;
}

// The "quick answer" stats row for a Distance page — Road Distance, Driving Time,
// Starting Point, Destination, Route, Border, Travel Type. Mirrors the stat-card
// pattern already used on /border-crossings/ route pages (rounded-3xl white card,
// icon chip + label + value), so a Distance page feels native to the site.
export default function DistanceStatBar({ route }: DistanceStatBarProps) {
    const stats = [
        { icon: Route, label: 'Road Distance', value: route.distanceHeadline },
        { icon: Clock, label: 'Driving Time', value: route.drivingTimeHeadline },
        { icon: MapPin, label: 'Starting Point', value: route.origin },
        { icon: Flag, label: 'Destination', value: route.destination },
        { icon: Car, label: 'Route', value: route.routeHeadline },
        { icon: Globe2, label: 'Border', value: route.borderName },
        { icon: Users, label: 'Travel Type', value: route.travelType },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                            <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</span>
                        <span className="text-base sm:text-lg font-black text-gray-900 leading-tight">{stat.value}</span>
                    </div>
                ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">
                Figures above are estimates for planning purposes — actual distance and driving time depend on your exact pickup point, drop-off point, and route.
            </p>
        </div>
    );
}
