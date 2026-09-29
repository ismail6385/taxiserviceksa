'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2, fit: '1–3 people, light luggage' },
    { name: 'Hyundai Staria VIP', cat: 'Van', img: '/hyundai-staria.webp', seats: 7, bags: 4, fit: 'Small teams with bags' },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5, fit: 'Executives and long drives' },
    { name: 'Toyota Hiace', cat: 'Group van', img: '/toyota-hiace.webp', seats: 11, bags: 16, fit: 'Crews with luggage' },
    { name: 'Toyota Coaster', cat: 'Minibus', img: '/toyota-coaster.webp', seats: 17, bags: 20, fit: 'Larger project teams' },
];

const TEAMS = [
    { key: '1', label: '1–3', pax: 3 },
    { key: '2', label: '4–6', pax: 6 },
    { key: '3', label: '7–11', pax: 11 },
    { key: '4', label: '12–17', pax: 17 },
];
const LOADS = [
    { key: 'light', label: 'Carry-on' },
    { key: 'normal', label: 'A case each' },
    { key: 'heavy', label: 'Cases + equipment' },
];

// Team size + luggage -> smallest listed vehicle; cards scroll horizontally on mobile.
export default function NeomFleet() {
    const [team, setTeam] = useState('1');
    const [load, setLoad] = useState('normal');
    const pax = TEAMS.find((t) => t.key === team)!.pax;
    const bags = load === 'light' ? 1 : load === 'normal' ? Math.ceil(pax * 0.8) : pax + 2;
    const pick = FLEET.find((v) => v.seats >= pax && v.bags >= bags);

    const chip = (on: boolean) =>
        `rounded-lg px-3.5 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${on ? 'bg-[#0a0f14] text-white' : 'bg-white border border-slate-200 text-[#0a0f14] hover:border-cyan-600'}`;

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <fieldset>
                    <legend className="font-mono text-xs font-bold tracking-widest text-slate-500 mb-2">PASSENGERS</legend>
                    <div className="flex gap-2">
                        {TEAMS.map((t) => <button key={t.key} type="button" aria-pressed={team === t.key} onClick={() => setTeam(t.key)} className={chip(team === t.key)}>{t.label}</button>)}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="font-mono text-xs font-bold tracking-widest text-slate-500 mb-2">LUGGAGE</legend>
                    <div className="flex flex-wrap gap-2">
                        {LOADS.map((l) => <button key={l.key} type="button" aria-pressed={load === l.key} onClick={() => setLoad(l.key)} className={chip(load === l.key)}>{l.label}</button>)}
                    </div>
                </fieldset>
            </div>
            <p className="mb-5 text-sm text-[#0a0f14]" aria-live="polite">
                {pick ? <>Suggested: <span className="font-bold">{pick.cat} - {pick.name.split(' /')[0]}</span>{load === 'heavy' && ' - tell us the equipment so we can confirm it fits.'}</> : 'More than one vehicle carries - send exact numbers and we suggest a combination.'}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const on = pick?.name === v.name;
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-60 lg:w-auto rounded-2xl overflow-hidden bg-white border-2 transition ${on ? 'border-cyan-500' : 'border-transparent'}`}>
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 20vw, 240px" className="object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="font-mono text-[11px] font-bold tracking-widest text-cyan-700">{v.cat.toUpperCase()}</p>
                                <p className="font-bold text-[#0a0f14]">{v.name.split(' /')[0]}</p>
                                <p className="text-xs text-slate-500 mt-1">{v.fit}</p>
                                <p className="text-xs text-slate-500">Up to {v.seats} passengers · about {v.bags} large bags</p>
                                {on && (
                                    <Link href={`/booking/?${new URLSearchParams({ vehicle: v.name, passengers: String(pax), to: 'NEOM' }).toString()}`} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-800">
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
