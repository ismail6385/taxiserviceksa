'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type VipVehicle = { name: string; image: string; passengers: number; luggage: number; kind: string; href: string };

const WHO = [{ l: '1–2 people', n: 2 }, { l: '3 people', n: 3 }, { l: '4–5 people', n: 5 }, { l: '6–7 people', n: 7 }, { l: '8+ people', n: 8 }];
const LUG = [{ l: 'Light', f: 0.5 }, { l: 'Normal', f: 1 }, { l: 'Heavy', f: 1.5 }];
const PRIORITY: { l: string; order: string[] }[] = [
    { l: 'Executive comfort', order: ['Mercedes S-Class', 'Genesis G80 VIP', 'Cadillac Escalade', 'GMC Yukon XL / Denali', 'Hyundai Staria VIP', 'Mercedes Sprinter'] },
    { l: 'Extra space', order: ['GMC Yukon XL / Denali', 'Hyundai Staria VIP', 'Cadillac Escalade', 'Mercedes Sprinter'] },
    { l: 'Luxury SUV', order: ['Cadillac Escalade', 'GMC Yukon XL / Denali', 'Mercedes Sprinter'] },
    { l: 'Group capacity', order: ['Hyundai Staria VIP', 'GMC Yukon XL / Denali', 'Cadillac Escalade', 'Mercedes Sprinter'] },
];

// Who is travelling + luggage + what matters most -> an available vehicle whose seats and bags fit
// (figures passed in from the booking system's vehicle list).
export default function VipVehicleMatch({ fleet }: { fleet: VipVehicle[] }) {
    const [w, setW] = useState(0);
    const [g, setG] = useState(1);
    const [p, setP] = useState(0);
    const pax = WHO[w].n;
    const bags = Math.ceil(pax * LUG[g].f);
    const fits = (v: VipVehicle) => v.passengers >= pax && v.luggage >= bags;
    const byName = (n: string) => fleet.find((v) => v.name === n);
    const pick = PRIORITY[p].order.map(byName).find((v) => v && fits(v)) ?? fleet.find(fits);

    const chip = (on: boolean) => `rounded-full border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8656] ${on ? 'border-[#0e1116] bg-[#0e1116] text-white' : 'border-[#0e1116]/[0.15] text-[#0e1116] hover:border-[#0e1116]/50'}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div className="space-y-7">
                <fieldset>
                    <legend className="text-sm font-bold text-[#0e1116] mb-3">Who is travelling?</legend>
                    <div className="flex flex-wrap gap-2">{WHO.map((x, i) => <button key={x.l} type="button" aria-pressed={w === i} onClick={() => setW(i)} className={chip(w === i)}>{x.l}</button>)}</div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0e1116] mb-3">How much luggage?</legend>
                    <div className="flex flex-wrap gap-2">{LUG.map((x, i) => <button key={x.l} type="button" aria-pressed={g === i} onClick={() => setG(i)} className={chip(g === i)}>{x.l}</button>)}</div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0e1116] mb-3">What matters most?</legend>
                    <div className="flex flex-wrap gap-2">{PRIORITY.map((x, i) => <button key={x.l} type="button" aria-pressed={p === i} onClick={() => setP(i)} className={chip(p === i)}>{x.l}</button>)}</div>
                </fieldset>
            </div>
            <div aria-live="polite" key={`${w}-${g}-${p}`} className="rounded-3xl bg-white border border-[#0e1116]/10 overflow-hidden animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                {pick ? (
                    <>
                        <div className="relative aspect-[16/9] bg-[#f3f1ec]">
                            <Image src={pick.image} alt={pick.name.split(' /')[0]} fill sizes="(min-width: 1024px) 45vw, 100vw" className={pick.image.startsWith('/fleet/') ? 'object-contain p-6' : 'object-cover'} />
                        </div>
                        <div className="p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b8656]">Recommended · {pick.kind}</p>
                            <p className="text-2xl font-semibold text-[#0e1116] mt-1">{pick.name.split(' /')[0]}</p>
                            <p className="text-sm text-slate-500 mt-1 mb-5">Up to {pick.passengers} passengers · about {pick.luggage} large bags</p>
                            <div className="flex flex-wrap gap-4">
                                <Link href={`/booking/?${new URLSearchParams({ vehicle: pick.name, passengers: String(pax), luggage: String(bags), notes: 'VIP chauffeur request.' }).toString()}`} className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">
                                    Request this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </Link>
                                <Link href={pick.href} className="text-sm font-semibold text-[#9b8656] hover:underline self-center">Vehicle details</Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="p-8">
                        <p className="text-xl font-semibold text-[#0e1116] mb-2">Two vehicles may suit you better</p>
                        <p className="text-slate-600">For larger groups or a lot of luggage, send the exact numbers and we suggest a combination.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
