'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export interface RegionData {
    key: string;
    name: string;
    col: string;
    places: { name: string; href: string }[];
    services: { name: string; href: string }[];
}

// Tile layout that keeps the regions' rough relative positions without pretending to be a map.
export default function RegionMap({ regions }: { regions: RegionData[] }) {
    const [k, setK] = useState(regions[0].key);
    const r = regions.find((x) => x.key === k)!;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div role="group" aria-label="Regions" className="grid grid-cols-3 grid-rows-3 gap-2 aspect-[4/3] max-w-md w-full mx-auto">
                {regions.map((x) => {
                    const on = x.key === k;
                    return (
                        <button key={x.key} type="button" aria-pressed={on} onClick={() => setK(x.key)} className={`${x.col} rounded-2xl border p-3 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] motion-reduce:transition-none ${on ? 'border-[#c8a24a] bg-[#c8a24a] text-[#131a2e]' : 'border-white/[0.15] bg-white/5 text-white hover:border-white/40'}`}>
                            <MapPin className="w-4 h-4 mb-1" aria-hidden="true" />
                            {x.name}
                        </button>
                    );
                })}
            </div>
            <div aria-live="polite" key={r.key} className="rounded-3xl bg-white text-[#131a2e] p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <h3 className="mb-4">{r.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Places with a guide page</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                    {r.places.map((p) => <li key={p.href}><Link href={p.href} className="inline-block rounded-full border border-[#131a2e]/[0.15] px-3.5 py-2 text-sm font-semibold hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">{p.name}</Link></li>)}
                </ul>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Services often booked here</p>
                <ul className="flex flex-wrap gap-2">
                    {r.services.map((s) => <li key={s.href}><Link href={s.href} className="inline-block rounded-full bg-[#f4f1ea] px-3.5 py-2 text-sm font-semibold text-[#131a2e] hover:bg-[#ebe5d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">{s.name}</Link></li>)}
                </ul>
                <p className="text-xs text-slate-500 mt-6">Service for a specific address is confirmed when you request a quote.</p>
            </div>
        </div>
    );
}
