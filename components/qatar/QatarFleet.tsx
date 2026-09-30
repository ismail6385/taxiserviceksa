'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2, for: 'Individuals, couples, light luggage' },
    { name: 'Hyundai Staria VIP', cat: 'Family van', img: '/hyundai-staria.webp', seats: 7, bags: 4, for: 'Families on a long road journey' },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5, for: 'Executive travel, extra luggage' },
    { name: 'Toyota Hiace', cat: 'Van', img: '/toyota-hiace.webp', seats: 11, bags: 16, for: 'Groups' },
];
const PAX = [{ l: '1–2', n: 2 }, { l: '3–4', n: 4 }, { l: '5–7', n: 7 }, { l: '8+', n: 11 }];
const LUG = [{ l: 'Light', f: 0.5 }, { l: 'Normal', f: 1 }, { l: 'Large', f: 1.5 }];

// Passengers + luggage -> smallest listed vehicle that fits, for a long international drive.
export default function QatarFleet() {
    const [p, setP] = useState(0);
    const [g, setG] = useState(1);
    const pax = PAX[p].n;
    const bags = Math.ceil(pax * LUG[g].f);
    const pick = FLEET.find((v) => v.seats >= pax && v.bags >= bags);

    const seg = (on: boolean) => `flex-1 rounded-lg py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538] ${on ? 'bg-[#0b1c3d] text-white' : 'text-[#0b1c3d] hover:bg-white'}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div className="space-y-5">
                <fieldset>
                    <legend className="text-sm font-bold text-[#0b1c3d] mb-2">Passengers</legend>
                    <div className="flex gap-1 rounded-xl bg-slate-100 p-1">{PAX.map((x, i) => <button key={x.l} type="button" aria-pressed={p === i} onClick={() => setP(i)} className={seg(p === i)}>{x.l}</button>)}</div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0b1c3d] mb-2">Luggage</legend>
                    <div className="flex gap-1 rounded-xl bg-slate-100 p-1">{LUG.map((x, i) => <button key={x.l} type="button" aria-pressed={g === i} onClick={() => setG(i)} className={seg(g === i)}>{x.l}</button>)}</div>
                </fieldset>
                <div className="rounded-2xl border-l-4 border-[#8a1538] bg-white p-5" aria-live="polite">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Recommended vehicle</p>
                    {pick ? (
                        <>
                            <p className="text-xl font-bold text-[#0b1c3d]">{pick.cat} - {pick.name.split(' /')[0]}</p>
                            <Link href={`/booking/?${new URLSearchParams({ from: 'Al Khobar', to: 'Doha, Qatar', vehicle: pick.name, passengers: String(pax), luggage: String(bags) }).toString()}`} className="group mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#8a1538]">
                                Quote with this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        </>
                    ) : (
                        <p className="text-[#0b1c3d]">Send exact numbers - we will suggest a larger vehicle or two cars.</p>
                    )}
                </div>
                <p className="text-xs text-slate-500">Not every vehicle is set up for international travel. We confirm a vehicle and driver eligible for the Qatar crossing when we quote, so the final vehicle may differ.</p>
            </div>
            <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const on = pick?.name === v.name;
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-64 sm:w-auto rounded-2xl overflow-hidden bg-white border-2 transition ${on ? 'border-[#8a1538] shadow-lg' : 'border-transparent'}`}>
                            <div className="relative aspect-[16/9] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 640px) 30vw, 256px" className="object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#8a1538]">{v.cat}</p>
                                <p className="font-bold text-[#0b1c3d]">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-slate-600">{v.for}</p>
                                <p className="text-xs text-slate-500 mt-1">Up to {v.seats} passengers · about {v.bags} large bags</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
