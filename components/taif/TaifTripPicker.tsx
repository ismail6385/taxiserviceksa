'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, Mountain, Flower2, Route, CableCar } from 'lucide-react';

const TRIPS: { key: string; icon: typeof Plane; label: string; sub: string; service: string; send: string; routes: string[]; quote: Record<string, string> }[] = [
    { key: 'airport', icon: Plane, label: 'Airport', sub: 'TIF transfer', service: 'One-way airport transfer', send: 'Flight number, arrival time, passengers, suitcases and where you are going.', routes: ['TIF → Taif hotel', 'TIF → Al Hada', 'TIF → Makkah'], quote: { from: 'Taif International Airport (TIF)' } },
    { key: 'city', icon: Building2, label: 'City', sub: 'Local transfer', service: 'City transfer, or a return if you want the car to come back', send: 'Pickup, destination and whether you need a return time.', routes: ['Hotel → souq', 'Hotel → restaurant → hotel', 'Home → TIF'], quote: { from: 'Taif' } },
    { key: 'mountains', icon: Mountain, label: 'Mountains', sub: 'Al Hada / Al Shafa', service: 'Return transfer or a driver by the hour', send: 'The exact resort, viewpoint or farm - and how long you plan to stay.', routes: ['Taif → Al Hada', 'Taif → Al Shafa', 'Al Hada → Al Shafa'], quote: { from: 'Taif', to: 'Al Hada', notes: 'Return / waiting time: ' } },
    { key: 'seasonal', icon: Flower2, label: 'Seasonal', sub: 'Rose farms', service: 'Hourly driver for several farm stops', send: 'Your preferred start time and any farms or factories you want to visit.', routes: ['Hotel → rose farms', 'Farm → factory → hotel'], quote: { trip: 'hourly', hours: '4', from: 'Taif', notes: 'Rose season visit: ' } },
    { key: 'intercity', icon: Route, label: 'Intercity', sub: 'Makkah / Jeddah', service: 'One-way or return intercity transfer', send: 'Pickup address, destination hotel or airport, passengers and bags.', routes: ['Taif → Makkah', 'Taif → Jeddah Airport', 'Makkah → Taif'], quote: { from: 'Taif', to: 'Makkah' } },
    { key: 'attractions', icon: CableCar, label: 'Attractions', sub: 'Cable car & viewpoints', service: 'Return transfer or hourly driver', send: 'Which attraction, your start time and whether the car should wait.', routes: ['Hotel → cable-car area', 'Cable car → Al Hada viewpoints'], quote: { from: 'Taif', to: 'Al Hada cable car area', notes: 'Return / waiting time: ' } },
];

// "What kind of Taif trip?" - six trip types updating service, info needed, routes and CTA.
export default function TaifTripPicker() {
    const [k, setK] = useState('mountains');
    const t = TRIPS.find((x) => x.key === k)!;

    return (
        <div>
            <div role="tablist" aria-label="What kind of Taif trip?" className="flex gap-2 overflow-x-auto snap-x pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-6 lg:overflow-visible">
                {TRIPS.map((x) => {
                    const on = x.key === k;
                    return (
                        <button
                            key={x.key}
                            role="tab"
                            id={`tt2-${x.key}`}
                            aria-selected={on}
                            aria-controls="tt2-panel"
                            onClick={() => setK(x.key)}
                            className={`snap-start shrink-0 w-36 lg:w-auto rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${on ? 'border-[#be185d] bg-[#fdf2f6] text-[#2a1a22]' : 'border-[#2a1a22]/10 bg-white text-[#2a1a22] hover:border-[#be185d]/50'}`}
                        >
                            <x.icon className={`w-6 h-6 mb-3 ${on ? 'text-[#be185d]' : 'text-[#7c5a66]'}`} aria-hidden="true" />
                            <span className="block font-bold">{x.label}</span>
                            <span className="block text-xs text-slate-500">{x.sub}</span>
                        </button>
                    );
                })}
            </div>
            <div id="tt2-panel" role="tabpanel" aria-labelledby={`tt2-${t.key}`} key={t.key} className="mt-4 rounded-3xl bg-[#2a1a22] text-white p-6 md:p-9 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300 mb-2">Recommended</p>
                    <h3 className="mb-4">{t.service}</h3>
                    <p className="text-white/75 leading-relaxed"><span className="font-semibold text-white">Send us: </span>{t.send}</p>
                </div>
                <div className="flex flex-col">
                    <ul className="space-y-2 mb-6 text-sm">
                        {t.routes.map((r) => <li key={r} className="rounded-lg bg-white/10 px-3 py-2 font-semibold">{r}</li>)}
                    </ul>
                    <Link href={`/booking/?${new URLSearchParams(t.quote).toString()}`} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#f472b6] px-5 py-3.5 font-bold text-[#2a1a22] hover:bg-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        Quote this trip <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
