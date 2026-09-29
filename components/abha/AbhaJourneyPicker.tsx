'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, Mountain, Landmark, Route } from 'lucide-react';

const OPTIONS = [
    {
        key: 'airport', icon: Plane, label: 'Airport', sub: 'AHB',
        routes: ['AHB → Abha hotel', 'AHB → Khamis Mushait', 'AHB → Soudah'],
        vehicle: 'Sedan for 1–3 with normal bags; Staria or Yukon for families.',
        note: 'Landing at AHB and staying in Soudah? Enter your flight number, hotel and luggage count so the vehicle can be planned for the mountain drive.',
        quote: { from: 'Abha International Airport (AHB)' },
    },
    {
        key: 'city', icon: Building2, label: 'City', sub: 'Abha',
        routes: ['Hotel → city centre', 'Hotel → cable car area', 'Home → restaurant and back'],
        vehicle: 'Any vehicle - pick by group size.',
        note: 'Short trips around the plateau. If you want the car to wait, a return or a few hours with a driver is simpler than two bookings.',
        quote: { from: 'Abha' },
    },
    {
        key: 'mountains', icon: Mountain, label: 'Mountains', sub: 'Soudah & highlands',
        routes: ['Abha → Soudah', 'AHB → Soudah hotel', 'Soudah → Abha'],
        vehicle: 'Staria or Yukon if you carry luggage or travel as a family.',
        note: 'Hotels and viewpoints are spread over the ridges - send the exact property name, not just “Soudah”.',
        quote: { from: 'Abha', to: 'Al Soudah' },
    },
    {
        key: 'heritage', icon: Landmark, label: 'Heritage', sub: 'Rijal Almaa',
        routes: ['Abha → Rijal Almaa → Abha', 'Soudah → Rijal Almaa', 'Hotel → Rijal Almaa (one way)'],
        vehicle: 'Sedan for couples; larger vehicle for families.',
        note: 'It is a long, winding descent. Most people book a return with waiting time - tell us how long you plan to stay.',
        quote: { from: 'Abha', to: 'Rijal Almaa', notes: 'Return with waiting time: ' },
    },
    {
        key: 'regional', icon: Route, label: 'Regional', sub: 'Khamis & intercity',
        routes: ['Abha ↔ Khamis Mushait', 'Abha → Jizan', 'Abha → Jeddah'],
        vehicle: 'For long drives, choose by luggage - more room makes the hours easier.',
        note: 'Khamis is next door on the same plateau; Jizan and Jeddah are proper road trips down from the highlands.',
        quote: { from: 'Abha', to: 'Khamis Mushait' },
    },
];

// "Your Abha journey" - five journey types that update routes, vehicle advice, a practical note and the CTA.
export default function AbhaJourneyPicker() {
    const [k, setK] = useState('airport');
    const o = OPTIONS.find((x) => x.key === k)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
            <div role="tablist" aria-label="Your Abha journey" className="flex lg:flex-col gap-2 overflow-x-auto snap-x pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
                {OPTIONS.map((x) => {
                    const on = x.key === k;
                    return (
                        <button
                            key={x.key}
                            role="tab"
                            id={`aj-${x.key}`}
                            aria-selected={on}
                            aria-controls="aj-panel"
                            onClick={() => setK(x.key)}
                            className={`snap-start shrink-0 w-36 lg:w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 rounded-2xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] ${on ? 'border-[#e0a526] bg-[#e0a526]/15 text-white' : 'border-white/15 text-white/80 hover:border-white/40'}`}
                        >
                            <x.icon className={`w-6 h-6 shrink-0 ${on ? 'text-[#e0a526]' : 'text-[#a9c8b4]'}`} aria-hidden="true" />
                            <span>
                                <span className="block font-bold">{x.label}</span>
                                <span className="block text-xs text-white/60">{x.sub}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
            <div id="aj-panel" role="tabpanel" aria-labelledby={`aj-${o.key}`} key={o.key} className="rounded-3xl bg-[#f3f1ea] text-[#16231f] p-6 md:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a10] mb-3">Typical routes</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                    {o.routes.map((r) => <li key={r} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold">{r}</li>)}
                </ul>
                <p className="text-sm mb-3"><span className="font-bold">Vehicle: </span>{o.vehicle}</p>
                <p className="text-sm text-slate-700 leading-relaxed border-l-2 border-[#e0a526] pl-4 mb-6">{o.note}</p>
                <Link href={`/booking/?${new URLSearchParams(o.quote as Record<string, string>).toString()}`} className="group inline-flex items-center gap-2 rounded-xl bg-[#16231f] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] focus-visible:ring-offset-2">
                    Quote this journey <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
