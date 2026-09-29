'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Train, Landmark, Route, Clock, Users } from 'lucide-react';

const OPTIONS = [
    {
        key: 'plane',
        icon: Plane,
        label: 'Arriving by plane',
        title: 'Madinah Airport Transfer',
        text: 'A driver meets you at MED airport and takes you straight to your hotel, luggage and all. Departure pickups from your hotel work the same way in reverse.',
        href: '/locations/madinah/madinah-airport/',
        cta: 'Airport transfer details',
    },
    {
        key: 'train',
        icon: Train,
        label: 'Arriving by train',
        title: 'Haramain Station Transfer',
        text: 'The Haramain train runs between stations. We cover the part it does not: from the Madinah station to your hotel door, or back again for your departure.',
        href: '/locations/madinah/train-station/',
        cta: 'Station transfer details',
    },
    {
        key: 'ziyarat',
        icon: Landmark,
        label: 'Visiting Ziyarat',
        title: 'Private Ziyarat Transportation',
        text: 'A private car from your hotel to places such as Quba, Uhud and Qiblatain, waiting while you visit and bringing you back. You set the order and pace.',
        href: '/services/madinah-ziyarat/',
        cta: 'Plan Ziyarat transport',
    },
    {
        key: 'makkah',
        icon: Route,
        label: 'Travelling to Makkah',
        title: 'Madinah to Makkah by Private Car',
        text: 'Hotel to hotel, with your luggage in the boot the whole way and stops when you ask for them.',
        href: '/routes/madinah-makkah/',
        cta: 'Madinah to Makkah',
    },
    {
        key: 'hours',
        icon: Clock,
        label: 'A car for several hours',
        title: 'Private Driver by the Hour',
        text: 'Keep one vehicle and driver for a set number of hours - useful for several stops, family outings or hotel-to-hotel moves.',
        href: '/services/private-driver/',
        cta: 'Private driver service',
    },
    {
        key: 'family',
        icon: Users,
        label: 'Family or group',
        title: 'Staria, Yukon or Van',
        text: 'Tell us how many people and suitcases. Families usually fit a Staria or Yukon; larger groups a Hiace or Coaster.',
        href: '#vehicles',
        cta: 'See vehicles',
    },
];

// "What are you travelling to Madinah for?" - pick a reason, see the matching service.
export default function TripFinder() {
    const [active, setActive] = useState(OPTIONS[0].key);
    const current = OPTIONS.find((o) => o.key === active)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
            <div className="grid grid-cols-2 gap-3" role="tablist" aria-label="Reason for your trip">
                {OPTIONS.map((o) => (
                    <button
                        key={o.key}
                        role="tab"
                        id={`tf-tab-${o.key}`}
                        aria-selected={active === o.key}
                        aria-controls="tf-panel"
                        onClick={() => setActive(o.key)}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${active === o.key ? 'border-emerald-700 bg-emerald-800 text-white shadow-lg' : 'border-stone-200 bg-white text-gray-800 hover:border-emerald-700/50'}`}
                    >
                        <o.icon className={`w-5 h-5 shrink-0 ${active === o.key ? 'text-amber-300' : 'text-emerald-700'}`} aria-hidden="true" />
                        {o.label}
                    </button>
                ))}
            </div>
            <div
                id="tf-panel"
                role="tabpanel"
                aria-labelledby={`tf-tab-${current.key}`}
                key={current.key}
                className="rounded-2xl bg-white border border-stone-200 p-7 md:p-9 flex flex-col animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
            >
                <current.icon className="w-9 h-9 text-emerald-700 mb-4" aria-hidden="true" />
                <h3 className="mb-3">{current.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{current.text}</p>
                <Link href={current.href} className="group mt-6 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">
                    {current.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
