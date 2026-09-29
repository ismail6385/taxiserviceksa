'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Luggage, Users, Package } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2 },
    { name: 'Hyundai Staria VIP', cat: 'Family van', img: '/hyundai-staria.webp', seats: 7, bags: 4 },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5 },
    { name: 'Toyota Hiace', cat: 'Van', img: '/toyota-hiace.webp', seats: 11, bags: 16 },
    { name: 'Toyota Coaster', cat: 'Minibus', img: '/toyota-coaster.webp', seats: 17, bags: 20 },
];

const LOADS = [
    { key: 'small', label: 'Small luggage', hint: 'Hand luggage only', icon: Briefcase, bags: 1 },
    { key: 'two', label: '2–3 suitcases', hint: 'A couple’s trip', icon: Luggage, bags: 3 },
    { key: 'family', label: 'Family luggage', hint: 'A case per person', icon: Users, bags: 5 },
    { key: 'large', label: 'Large / group', hint: 'Many cases or boxes', icon: Package, bags: 10 },
];
const PAX = [2, 3, 4, 5, 7, 11];

// "What are you carrying?" - passengers + luggage load point to the smallest listed vehicle that fits.
export default function AbhaLuggage() {
    const [load, setLoad] = useState('two');
    const [pax, setPax] = useState(2);
    const bags = LOADS.find((l) => l.key === load)!.bags;
    const pick = FLEET.find((v) => v.seats >= pax && v.bags >= bags);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 mb-8">
                <fieldset>
                    <legend className="text-sm font-bold text-[#16231f] mb-3">What are you carrying?</legend>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {LOADS.map((l) => (
                            <button
                                key={l.key}
                                type="button"
                                aria-pressed={load === l.key}
                                onClick={() => setLoad(l.key)}
                                className={`rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] ${load === l.key ? 'border-[#16231f] bg-[#16231f] text-white' : 'border-[#16231f]/15 bg-white text-[#16231f] hover:border-[#16231f]/50'}`}
                            >
                                <l.icon className={`w-5 h-5 mb-2 ${load === l.key ? 'text-[#e0a526]' : 'text-[#2f5d46]'}`} aria-hidden="true" />
                                <span className="block text-sm font-bold">{l.label}</span>
                                <span className={`block text-xs ${load === l.key ? 'text-white/60' : 'text-slate-500'}`}>{l.hint}</span>
                            </button>
                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#16231f] mb-3">How many people?</legend>
                    <div className="grid grid-cols-6 gap-2">
                        {PAX.map((p) => (
                            <button key={p} type="button" aria-pressed={pax === p} onClick={() => setPax(p)} className={`rounded-xl border py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] ${pax === p ? 'border-[#16231f] bg-[#16231f] text-white' : 'border-[#16231f]/15 bg-white text-[#16231f]'}`}>
                                {p === 11 ? '8+' : p === 7 ? '6–7' : p}
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-[#16231f] mt-4 rounded-xl bg-[#f3f1ea] px-4 py-3" aria-live="polite">
                        {pick ? <>Suggested: <span className="font-bold">{pick.cat} - {pick.name.split(' /')[0]}</span></> : 'Send the exact numbers - we will suggest a larger vehicle or two cars.'}
                    </p>
                </fieldset>
            </div>

            <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const on = pick?.name === v.name;
                    const fits = v.seats >= pax && v.bags >= bags;
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-60 lg:w-auto rounded-2xl overflow-hidden bg-white border-2 transition ${on ? 'border-[#e0a526]' : 'border-transparent'} ${fits ? '' : 'opacity-50'}`}>
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 20vw, 240px" className="object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#2f5d46]">{v.cat}</p>
                                <p className="font-bold text-[#16231f]">{v.name.split(' /')[0]}</p>
                                <p className="text-xs text-slate-500 mt-1">Up to {v.seats} passengers · about {v.bags} large bags</p>
                                {on && (
                                    <Link href={`/booking/?${new URLSearchParams({ vehicle: v.name, passengers: String(pax), luggage: String(bags), from: 'Abha' }).toString()}`} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#2f5d46]">
                                        Quote with this <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
            <p className="text-xs text-slate-500 mt-2">Bag figures are the booking system&apos;s guide for full-size suitcases. We do not advertise off-road or 4x4 capability; tell us about unusual luggage and we confirm the vehicle.</p>
        </div>
    );
}
