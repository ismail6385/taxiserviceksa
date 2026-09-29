'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2 },
    { name: 'Hyundai Staria VIP', cat: 'Family van', img: '/hyundai-staria.webp', seats: 7, bags: 4 },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5 },
    { name: 'Toyota Hiace', cat: 'Van', img: '/toyota-hiace.webp', seats: 11, bags: 16 },
    { name: 'Toyota Coaster', cat: 'Minibus', img: '/toyota-coaster.webp', seats: 17, bags: 20 },
];

// Passenger and bag steppers pick the smallest listed vehicle; a premium toggle prefers the Yukon.
export default function TaifFleet() {
    const [pax, setPax] = useState(4);
    const [bags, setBags] = useState(3);
    const [premium, setPremium] = useState(false);
    const list = premium ? FLEET.filter((v) => v.cat !== 'Family van' && v.cat !== 'Sedan') : FLEET;
    const pick = list.find((v) => v.seats >= pax && v.bags >= bags);

    const step = (label: string, v: number, set: (n: number) => void, min: number, max: number) => (
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-white border border-[#2a1a22]/10 px-4 py-2.5">
            <span className="text-sm font-bold text-[#2a1a22]">{label}</span>
            <span className="flex items-center gap-2">
                <button type="button" onClick={() => set(Math.max(min, v - 1))} disabled={v <= min} aria-label={`Fewer ${label.toLowerCase()}`} className="w-11 h-11 rounded-full border border-[#2a1a22]/20 text-lg font-bold text-[#2a1a22] disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">−</button>
                <output className="w-7 text-center text-lg font-bold text-[#2a1a22]" aria-live="polite">{v}</output>
                <button type="button" onClick={() => set(Math.min(max, v + 1))} disabled={v >= max} aria-label={`More ${label.toLowerCase()}`} className="w-11 h-11 rounded-full border border-[#2a1a22]/20 text-lg font-bold text-[#2a1a22] disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">+</button>
            </span>
        </div>
    );

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {step('Passengers', pax, setPax, 1, 17)}
                {step('Large bags', bags, setBags, 0, 20)}
                <label className="flex items-center justify-between gap-3 rounded-2xl bg-white border border-[#2a1a22]/10 px-4 py-2.5 cursor-pointer">
                    <span className="text-sm font-bold text-[#2a1a22]">Prefer premium SUV</span>
                    <input type="checkbox" checked={premium} onChange={(e) => setPremium(e.target.checked)} className="w-5 h-5 accent-[#be185d]" />
                </label>
            </div>
            <p className="text-sm text-[#2a1a22] mb-5" aria-live="polite">
                {pick ? <>Suggested: <span className="font-bold">{pick.cat} - {pick.name.split(' /')[0]}</span></> : 'More than one vehicle carries - send exact numbers and we suggest a combination.'}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const on = pick?.name === v.name;
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-60 lg:w-auto rounded-2xl overflow-hidden bg-white border-2 transition ${on ? 'border-[#be185d]' : 'border-transparent'}`}>
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 20vw, 240px" className="object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#be185d]">{v.cat}</p>
                                <p className="font-bold text-[#2a1a22]">{v.name.split(' /')[0]}</p>
                                <p className="text-xs text-slate-500 mt-1">Up to {v.seats} passengers · about {v.bags} large bags</p>
                                {on && (
                                    <Link href={`/booking/?${new URLSearchParams({ vehicle: v.name, passengers: String(pax), luggage: String(bags), from: 'Taif' }).toString()}`} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#be185d]">
                                        Quote with this <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
