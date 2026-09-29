'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Luggage, ArrowRight } from 'lucide-react';

// Seat counts come from the booking system's vehicle list (lib/supabase.ts).
const V = {
    camry: { name: 'Toyota Camry', book: 'Toyota Camry', type: 'Sedan', img: '/toyota-camry.webp', seats: 4 },
    veloz: { name: 'Toyota Veloz', book: 'Toyota Veloz 2024', type: 'Family MPV', img: '/fleet/toyota-veloz-2024-dammam-jubail-bahrain-chauffeur.webp', seats: 7 },
    staria: { name: 'Hyundai Staria', book: 'Hyundai Staria VIP', type: 'Family van', img: '/hyundai-staria.webp', seats: 7 },
    yukon: { name: 'GMC Yukon', book: 'GMC Yukon XL / Denali', type: 'Large SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7 },
    hiace: { name: 'Toyota Hiace', book: 'Toyota Hiace', type: 'Group van', img: '/toyota-hiace.webp', seats: 11 },
    sprinter: { name: 'Mercedes Sprinter', book: 'Mercedes Sprinter', type: 'Group van', img: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', seats: 14 },
};
type Key = keyof typeof V;

const PAX = ['2', '3', '4', '5', '6', '7', '8+'];
const BAGS = [
    { key: 'small', label: 'Small', hint: 'Hand luggage or a laptop bag each' },
    { key: 'medium', label: 'Medium', hint: 'About one suitcase per person' },
    { key: 'large', label: 'Large', hint: 'Several big suitcases, samples or equipment' },
];

function suggest(pax: string, bags: string): { pick: Key; alt?: Key; note?: string } {
    const n = pax === '8+' ? 8 : Number(pax);
    if (n >= 8) return bags === 'large' ? { pick: 'hiace', note: 'Send the exact head count - larger groups may need a Coaster or two vehicles.' } : { pick: 'hiace', alt: 'sprinter', note: 'Send the exact head count so we can match the van.' };
    if (n >= 5) return bags === 'large' ? { pick: 'yukon', alt: 'hiace' } : { pick: 'veloz', alt: 'staria' };
    if (n === 4) return bags === 'small' ? { pick: 'camry', alt: 'veloz' } : { pick: 'veloz', alt: 'yukon' };
    return bags === 'large' ? { pick: 'veloz', alt: 'yukon' } : { pick: 'camry', alt: 'veloz' };
}

// Passenger + luggage picker that points to a sensible vehicle category rather than the biggest one.
export default function DammamVehicleSelector() {
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('medium');
    const s = suggest(pax, bags);
    const pick = V[s.pick];
    const alt = s.alt ? V[s.alt] : null;

    const chip = (on: boolean) =>
        `rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${on ? 'border-[#07141f] bg-[#07141f] text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-teal-600'}`;

    const params = new URLSearchParams({ vehicle: pick.book, passengers: pax === '8+' ? '8' : pax });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-7">
                <fieldset>
                    <legend className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-teal-700" aria-hidden="true" /> Passengers</legend>
                    <div className="flex flex-wrap gap-2">
                        {PAX.map((p) => (
                            <button key={p} type="button" aria-pressed={pax === p} onClick={() => setPax(p)} className={`${chip(pax === p)} min-w-[3rem]`}>{p}</button>
                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2"><Luggage className="w-4 h-4 text-teal-700" aria-hidden="true" /> Luggage</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {BAGS.map((b) => (
                            <button key={b.key} type="button" aria-pressed={bags === b.key} onClick={() => setBags(b.key)} className={`${chip(bags === b.key)} text-left`}>
                                <span className="block">{b.label}</span>
                                <span className={`block text-xs font-normal mt-0.5 ${bags === b.key ? 'text-slate-300' : 'text-slate-500'}`}>{b.hint}</span>
                            </button>
                        ))}
                    </div>
                </fieldset>
                <p className="text-xs text-slate-500">A starting point, not a rule. Luggage space differs by vehicle and by bag size, so we confirm the vehicle with your quote.</p>
            </div>

            <div aria-live="polite" key={pick.name} className="rounded-3xl bg-white border border-slate-200 overflow-hidden animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div className="relative aspect-[16/9] bg-slate-100">
                    <Image src={pick.img} alt={pick.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">Suggested: {pick.type}</p>
                    <p className="text-2xl font-bold text-slate-900">{pick.name}</p>
                    <p className="text-sm text-slate-600 mt-1">Up to {pick.seats} passengers</p>
                    {alt && <p className="text-sm text-slate-500 mt-3">Also worth a look: {alt.name} ({alt.type}, up to {alt.seats}).</p>}
                    {s.note && <p className="text-sm text-slate-500 mt-3">{s.note}</p>}
                    <Link href={`/booking/?${params.toString()}`} className="group mt-5 inline-flex items-center gap-2 font-bold text-teal-800">
                        Quote with the {pick.name} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
