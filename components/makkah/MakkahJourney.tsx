'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PlaneLanding, Hotel, Landmark, Route } from 'lucide-react';

const JOURNEYS = [
    {
        key: 'arrive',
        label: 'Arrive',
        icon: PlaneLanding,
        stops: ['Jeddah Airport or Haramain Station', 'Private car', 'Your Makkah hotel'],
        text: 'Most visitors reach Makkah from Jeddah airport or on the Haramain train. A car meets you and takes you, and your bags, to your hotel.',
        cta: { label: 'Jeddah to Makkah transfer', href: '/routes/jeddah-makkah/' },
    },
    {
        key: 'stay',
        label: 'Stay',
        icon: Hotel,
        stops: ['Your hotel', 'Haram area or another destination', 'Back to your hotel'],
        text: 'Short journeys around the city: between hotels, to the Haram area, or elsewhere in Makkah. Drop-off points follow the traffic controls in place at the time.',
        cta: { label: 'Getting around Makkah', href: '/services/makkah-city-transport/' },
    },
    {
        key: 'explore',
        label: 'Explore',
        icon: Landmark,
        stops: ['Your hotel', 'Ziyarat stops you choose', 'Back to your hotel'],
        text: 'A private car for visiting places such as Jabal al-Nour, Jabal Thawr and Arafat, waiting while you visit.',
        cta: { label: 'Makkah Ziyarat transport', href: '/locations/makkah-ziyarat/' },
    },
    {
        key: 'depart',
        label: 'Depart',
        icon: Route,
        stops: ['Your Makkah hotel', 'Private car', 'Madinah, Jeddah or the airport'],
        text: 'When you leave, one car from your hotel door to Madinah, a Jeddah hotel or the airport for your flight.',
        cta: { label: 'Makkah to Madinah transfer', href: '/routes/makkah-madinah/' },
    },
];

// "Your Makkah Journey": pick a stage of the trip, see the journey and the matching service.
export default function MakkahJourney() {
    const [active, setActive] = useState('arrive');
    const j = JOURNEYS.find((x) => x.key === active)!;

    return (
        <div>
            <div role="tablist" aria-label="Stage of your trip" className="grid grid-cols-4 gap-2 rounded-2xl bg-white/5 p-1.5 mb-10 max-w-xl">
                {JOURNEYS.map((x) => (
                    <button
                        key={x.key}
                        role="tab"
                        id={`mj-${x.key}`}
                        aria-selected={active === x.key}
                        aria-controls="mj-panel"
                        onClick={() => setActive(x.key)}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${active === x.key ? 'bg-amber-300 text-[#1a1208]' : 'text-stone-300 hover:text-white'}`}
                    >
                        <x.icon className="w-4 h-4" aria-hidden="true" />
                        {x.label}
                    </button>
                ))}
            </div>

            <div id="mj-panel" role="tabpanel" aria-labelledby={`mj-${j.key}`} key={j.key} className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <ol className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                    {j.stops.map((s, i) => (
                        <li key={s} className="flex md:flex-1 items-center gap-3">
                            <span className={`flex-1 rounded-xl px-4 py-4 text-center text-sm font-semibold ${i === 1 ? 'bg-white/10 text-white' : 'bg-white text-[#1a1208]'}`}>{s}</span>
                            {i < j.stops.length - 1 && (
                                <svg viewBox="0 0 40 12" className="w-10 h-3 shrink-0 rotate-90 md:rotate-0" aria-hidden="true">
                                    <path d="M2 6 H 34" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" pathLength={1} className="route-draw" fill="none" />
                                    <path d="M30 2 L 36 6 L 30 10" stroke="#fcd34d" strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                            )}
                        </li>
                    ))}
                </ol>
                <div>
                    <p className="text-stone-300 leading-relaxed mb-5">{j.text}</p>
                    <Link href={j.cta.href} className="group inline-flex items-center gap-2 font-bold text-amber-300">
                        {j.cta.label} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
