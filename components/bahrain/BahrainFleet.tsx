'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2, for: 'Couples and business trips with light bags' },
    { name: 'Toyota Veloz 2024', cat: 'Family MPV', img: '/fleet/toyota-veloz-2024-bahrain-causeway-khobar-taxi.webp', seats: 7, bags: 4, for: 'Families with moderate luggage' },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5, for: 'Executive travel and families wanting extra room' },
    { name: 'Toyota Hiace', cat: 'Large van', img: '/toyota-hiace.webp', seats: 11, bags: 16, for: 'Groups and lots of luggage' },
];

const PAX = [
    { key: 'a', label: '1–3', n: 3 },
    { key: 'b', label: '4–5', n: 5 },
    { key: 'c', label: '6–7', n: 7 },
    { key: 'd', label: '8+', n: 11 },
];
const LUG = [
    { key: 'light', label: 'Light', hint: 'Carry-ons', factor: 0.5 },
    { key: 'normal', label: 'Normal', hint: 'A suitcase each', factor: 1 },
    { key: 'large', label: 'Large', hint: 'Extra cases', factor: 1.5 },
];

// Passengers + luggage -> smallest listed vehicle that fits; cards swipe on mobile.
export default function BahrainFleet() {
    const [p, setP] = useState('a');
    const [l, setL] = useState('normal');
    const pax = PAX.find((x) => x.key === p)!.n;
    const bags = Math.ceil(pax * LUG.find((x) => x.key === l)!.factor);
    const pick = FLEET.find((v) => v.seats >= pax && v.bags >= bags);

    const chip = (on: boolean) =>
        `rounded-xl border px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ce1126] ${on ? 'border-[#0a1a3a] bg-[#0a1a3a] text-white' : 'border-slate-200 bg-white text-[#0a1a3a] hover:border-[#0a1a3a]/50'}`;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <fieldset>
                    <legend className="text-sm font-bold text-[#0a1a3a] mb-2">Passengers</legend>
                    <div className="grid grid-cols-4 gap-2">{PAX.map((x) => <button key={x.key} type="button" aria-pressed={p === x.key} onClick={() => setP(x.key)} className={chip(p === x.key)}>{x.label}</button>)}</div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0a1a3a] mb-2">Luggage</legend>
                    <div className="grid grid-cols-3 gap-2">
                        {LUG.map((x) => (
                            <button key={x.key} type="button" aria-pressed={l === x.key} onClick={() => setL(x.key)} className={chip(l === x.key)}>
                                <span className="block">{x.label}</span>
                                <span className={`block text-[11px] font-normal ${l === x.key ? 'text-white/60' : 'text-slate-500'}`}>{x.hint}</span>
                            </button>
                        ))}
                    </div>
                </fieldset>
            </div>
            <div className="rounded-2xl bg-[#0a1a3a] text-white px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3" aria-live="polite">
                {pick ? (
                    <p><span className="text-xs uppercase tracking-wider text-white/60 block">Vehicle recommendation</span><span className="font-bold text-lg">{pick.cat} - {pick.name.split(' /')[0]}</span></p>
                ) : (
                    <p>More than one vehicle carries - send exact numbers and we suggest a combination.</p>
                )}
                {pick && (
                    <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Bahrain', vehicle: pick.name, passengers: String(pax), luggage: String(bags) }).toString()}`} className="group inline-flex items-center gap-2 font-bold text-[#ff8a95]">
                        Quote with this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                )}
            </div>
            <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const on = pick?.name === v.name;
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-64 lg:w-auto rounded-2xl overflow-hidden bg-white border-2 transition ${on ? 'border-[#ce1126]' : 'border-transparent'}`}>
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 25vw, 256px" className="object-cover" />
                            </div>
                            <div className="p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#ce1126]">{v.cat}</p>
                                <p className="font-bold text-[#0a1a3a] text-lg">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-slate-600 mt-1">{v.for}</p>
                                <p className="text-xs text-slate-500 mt-2">Up to {v.seats} passengers · about {v.bags} large bags</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <p className="text-xs text-slate-500">Figures from our booking system. For the crossing we confirm a vehicle permitted to cross when you book, so the final vehicle may differ.</p>
        </div>
    );
}
