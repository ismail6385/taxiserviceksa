'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface FilterOption { value: string; label: string }

interface DriverFilterBarProps {
    locationOptions: FilterOption[];
    vehicleOptions: FilterOption[];
    serviceOptions: FilterOption[];
}

/** Client-side filter bar for /drivers/ — updates the URL query string so
 *  filtering stays server-driven (the page itself is a Server Component
 *  that reads searchParams and re-queries the DB). */
export default function DriverFilterBar({ locationOptions, vehicleOptions, serviceOptions }: DriverFilterBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) params.set(key, value); else params.delete(key);
        const qs = params.toString();
        router.push(`/drivers/${qs ? `?${qs}` : ''}`);
    };

    const selectClass = 'text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-primary';

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            <select className={selectClass} value={searchParams.get('location') || ''} onChange={e => updateParam('location', e.target.value)}>
                <option value="">All Locations</option>
                {locationOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <select className={selectClass} value={searchParams.get('vehicle') || ''} onChange={e => updateParam('vehicle', e.target.value)}>
                <option value="">All Vehicle Types</option>
                {vehicleOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <select className={selectClass} value={searchParams.get('service') || ''} onChange={e => updateParam('service', e.target.value)}>
                <option value="">All Services</option>
                {serviceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
        </div>
    );
}
