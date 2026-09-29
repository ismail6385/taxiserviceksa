'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PlaneLanding, Factory, Waves, Route, Briefcase, Sun } from 'lucide-react';

type Journey = {
    key: string;
    label: string;
    sub: string;
    icon: typeof PlaneLanding;
    heading: string;
    guidance: string[];
    routes: string[];
    quote: Record<string, string>;
    link?: { label: string; href: string };
};

const JOURNEYS: Journey[] = [
    {
        key: 'airport',
        label: 'Airport',
        sub: 'YNB → Yanbu',
        icon: PlaneLanding,
        heading: 'Landing at Yanbu Airport',
        guidance: [
            'The airport is just north of Yanbu Al Bahr, so most hotel runs in the old town are short.',
            'The industrial city is further south - allow for the longer drive if your hotel or site is there.',
            'Add your flight number so the pickup can be coordinated around your arrival.',
        ],
        routes: ['YNB → Yanbu Al Bahr hotel', 'YNB → Yanbu Industrial City', 'YNB → Madinah'],
        quote: { from: 'Yanbu Airport (YNB)' },
    },
    {
        key: 'industrial',
        label: 'Industrial',
        sub: 'Industrial City',
        icon: Factory,
        heading: 'Getting to Yanbu Industrial City',
        guidance: [
            'Give us the company or facility name and the exact gate or reception you report to.',
            'Some sites have their own entry rules - the car goes to the point you are allowed to be dropped at.',
            'Morning drop-off and evening pickup can be booked together.',
        ],
        routes: ['Hotel → worksite', 'YNB → worksite', 'Worksite → Yanbu Al Bahr'],
        quote: { to: 'Yanbu Industrial City', notes: 'Industrial City destination - company / gate: ' },
        link: { label: 'More on Yanbu Industrial City', href: '/locations/yanbu/industrial-city/' },
    },
    {
        key: 'city',
        label: 'City & coast',
        sub: 'Yanbu Al Bahr',
        icon: Waves,
        heading: 'Around Yanbu Al Bahr',
        guidance: [
            'Hotel to the waterfront, a restaurant, a friend’s house or a shopping trip - booked in advance, not hailed.',
            'Need to wait and bring you back? Book a return or a few hours with a driver.',
        ],
        routes: ['Hotel → waterfront', 'Home → mall', 'Hotel → YNB'],
        quote: { from: 'Yanbu Al Bahr' },
    },
    {
        key: 'intercity',
        label: 'Intercity',
        sub: 'Madinah / Jeddah',
        icon: Route,
        heading: 'Leaving Yanbu by road',
        guidance: [
            'Madinah is inland, about 2.5 hours away; Jeddah is down the coast, about 3.5 hours.',
            'One private car from your Yanbu pickup to your door at the other end, with stops when you ask.',
        ],
        routes: ['Yanbu → Madinah hotel', 'Yanbu → Jeddah Airport', 'Yanbu → AlUla'],
        quote: { from: 'Yanbu', to: 'Madinah' },
        link: { label: 'Yanbu to Jeddah route', href: '/routes/yanbu-jeddah/' },
    },
    {
        key: 'business',
        label: 'Business',
        sub: 'Corporate travel',
        icon: Briefcase,
        heading: 'A business trip to Yanbu',
        guidance: [
            'Typical pattern: fly into YNB or Jeddah, stay in a hotel, travel to meetings or a site, and back.',
            'Book each leg, a driver for the day, or a repeating daily schedule for a multi-day assignment.',
        ],
        routes: ['Airport → hotel', 'Hotel ↔ site (daily)', 'Hotel → airport'],
        quote: { notes: 'Business trip - schedule: ' },
        link: { label: 'Corporate travel', href: '/services/corporate-travel/' },
    },
    {
        key: 'leisure',
        label: 'Leisure',
        sub: 'Red Sea side',
        icon: Sun,
        heading: 'A day by the Red Sea',
        guidance: [
            'Beaches, the waterfront, a dive centre or a coastal resort - tell us the exact place so we know where to drop you.',
            'If you would like the car to wait, an hourly booking is usually simpler than two transfers.',
        ],
        routes: ['Hotel → beach', 'Hotel → dive centre', 'Resort → YNB'],
        quote: { from: 'Yanbu hotel', notes: 'Leisure trip - destination: ' },
    },
];

// "Where are you going in Yanbu?" - pick the journey; get guidance, common routes and a pre-filled quote.
export default function YanbuJourneyPlanner() {
    const [active, setActive] = useState('airport');
    const j = JOURNEYS.find((x) => x.key === active)!;
    const href = `/booking/?${new URLSearchParams(j.quote).toString()}`;

    return (
        <div>
            <div role="tablist" aria-label="Type of Yanbu journey" className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-6 lg:overflow-visible">
                {JOURNEYS.map((x) => {
                    const on = active === x.key;
                    return (
                        <button
                            key={x.key}
                            role="tab"
                            id={`yj-${x.key}`}
                            aria-selected={on}
                            aria-controls="yj-panel"
                            onClick={() => setActive(x.key)}
                            className={`snap-start shrink-0 w-40 lg:w-auto text-left rounded-2xl border p-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${on ? 'border-[#e8765a] bg-white text-[#0a2540] shadow-lg' : 'border-white/15 bg-white/5 text-white hover:bg-white/10'}`}
                        >
                            <x.icon className={`w-6 h-6 mb-3 ${on ? 'text-[#e8765a]' : 'text-sky-300'}`} aria-hidden="true" />
                            <span className="block font-bold">{x.label}</span>
                            <span className={`block text-xs mt-0.5 ${on ? 'text-slate-500' : 'text-sky-100/60'}`}>{x.sub}</span>
                        </button>
                    );
                })}
            </div>

            <div id="yj-panel" role="tabpanel" aria-labelledby={`yj-${j.key}`} key={j.key} className="mt-6 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 rounded-3xl bg-white p-6 md:p-9 text-[#0a2540] animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <h3 className="mb-4">{j.heading}</h3>
                    <ul className="space-y-3">
                        {j.guidance.map((g) => (
                            <li key={g} className="flex gap-3 text-slate-700 leading-relaxed">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#e8765a] shrink-0" aria-hidden="true" />
                                {g}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl bg-[#f3ecdf] p-6 flex flex-col">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0f5c8c] mb-3">Common routes</p>
                    <ul className="space-y-2 mb-6 text-sm font-semibold">
                        {j.routes.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                    <Link href={href} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5c8c] px-5 py-3.5 text-center font-bold text-white hover:bg-[#0a4a72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2">
                        Quote this journey <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {j.link && (
                        <Link href={j.link.href} className="mt-3 text-center text-sm font-bold text-[#0f5c8c] hover:underline">{j.link.label}</Link>
                    )}
                </div>
            </div>
        </div>
    );
}
