'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Luggage } from 'lucide-react';

// Capacities mirror the booking system's vehicle list (lib/supabase.ts).
const VEHICLES = [
    { name: 'Toyota Camry', type: 'Sedan', img: '/toyota-camry.webp', pax: 4, bags: 2 },
    { name: 'Hyundai Staria', type: 'Family van', img: '/hyundai-staria.webp', pax: 7, bags: 4 },
    { name: 'GMC Yukon', type: 'Premium SUV', img: '/gmc-yukon.webp', pax: 7, bags: 5 },
    { name: 'Toyota Hiace', type: 'Group van', img: '/toyota-hiace.webp', pax: 11, bags: 16 },
    { name: 'Toyota Coaster', type: 'Minibus', img: '/toyota-coaster.webp', pax: 17, bags: 20 },
];

const PAX = [
    { label: '1-2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5-7', value: 7 },
    { label: '8-11', value: 11 },
    { label: '12+', value: 17 },
];

const BAGS = [
    { label: '1-2 bags', value: 2 },
    { label: '3-4 bags', value: 4 },
    { label: '5-8 bags', value: 8 },
    { label: 'A lot (plus Zamzam)', value: 12 },
];

function recommend(pax: number, bags: number) {
    return VEHICLES.find((v) => v.pax >= pax && v.bags >= bags) ?? VEHICLES[VEHICLES.length - 1];
}

export default function VehicleSelector() {
    const [pax, setPax] = useState(2);
    const [bags, setBags] = useState(2);
    const pick = recommend(pax, bags);
    const alt = pick.name === 'Hyundai Staria' ? VEHICLES[2] : null;

    const chip = (active: boolean) =>
        `rounded-lg border px-3.5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${active ? 'border-emerald-800 bg-emerald-800 text-white' : 'border-stone-300 bg-white text-gray-800 hover:border-emerald-700'}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <fieldset>
                    <legend className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-emerald-700" aria-hidden="true" /> Passengers</legend>
                    <div className="flex flex-wrap gap-2">
                        {PAX.map((p) => (
                            <button key={p.label} type="button" aria-pressed={pax === p.value} onClick={() => setPax(p.value)} className={chip(pax === p.value)}>{p.label}</button>
                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2"><Luggage className="w-4 h-4 text-emerald-700" aria-hidden="true" /> Large suitcases</legend>
                    <div className="flex flex-wrap gap-2">
                        {BAGS.map((b) => (
                            <button key={b.label} type="button" aria-pressed={bags === b.value} onClick={() => setBags(b.value)} className={chip(bags === b.value)}>{b.label}</button>
                        ))}
                    </div>
                </fieldset>
                <p className="text-xs text-stone-500">Suggestion based on the passenger and bag figures in our booking system. We confirm the final choice with your quote.</p>
            </div>
            <div aria-live="polite" key={pick.name} className="rounded-2xl bg-white border border-stone-200 overflow-hidden animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div className="relative aspect-[16/9] bg-stone-100">
                    <Image src={pick.img} alt={pick.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Suggested: {pick.type}</p>
                    <p className="text-2xl font-bold text-gray-900">{pick.name}</p>
                    <p className="text-sm text-gray-600 mt-1">Up to {pick.pax} passengers · about {pick.bags} large bags</p>
                    {alt && <p className="text-sm text-gray-500 mt-3">Want a little more room? The {alt.name} takes about {alt.bags} large bags.</p>}
                </div>
            </div>
        </div>
    );
}
