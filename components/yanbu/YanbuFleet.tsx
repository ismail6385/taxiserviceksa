'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Users, Luggage, ArrowRight } from 'lucide-react';

// Seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const FLEET = [
    { name: 'Toyota Camry', cat: 'Sedan', img: '/toyota-camry.webp', seats: 4, bags: 2, use: 'Solo travellers and couples, airport runs, meetings.' },
    { name: 'Hyundai Staria VIP', cat: 'Family van', img: '/hyundai-staria.webp', seats: 7, bags: 4, use: 'Families, Madinah and Jeddah trips with luggage.' },
    { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5, use: 'Executive travel and families with extra bags.' },
    { name: 'Toyota Hiace', cat: 'Van', img: '/toyota-hiace.webp', seats: 11, bags: 16, use: 'Crews, teams and larger families.' },
    { name: 'Toyota Coaster', cat: 'Minibus', img: '/toyota-coaster.webp', seats: 17, bags: 20, use: 'Groups and site teams travelling together.' },
];

function Stepper({ label, icon: Icon, value, set, min, max }: { label: string; icon: typeof Users; value: number; set: (n: number) => void; min: number; max: number }) {
    const btn = 'w-11 h-11 rounded-full border border-[#0a2540]/20 flex items-center justify-center text-[#0a2540] hover:bg-[#0a2540] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#0a2540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600';
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white border border-[#e6dccb] px-5 py-3">
            <span className="flex items-center gap-2 font-semibold text-[#0a2540]"><Icon className="w-4 h-4 text-[#e8765a]" aria-hidden="true" />{label}</span>
            <div className="flex items-center gap-3">
                <button type="button" className={btn} onClick={() => set(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`}><Minus className="w-4 h-4" aria-hidden="true" /></button>
                <output className="w-8 text-center text-xl font-bold text-[#0a2540]" aria-live="polite">{value}</output>
                <button type="button" className={btn} onClick={() => set(Math.min(max, value + 1))} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`}><Plus className="w-4 h-4" aria-hidden="true" /></button>
            </div>
        </div>
    );
}

// Passengers -> luggage -> the smallest vehicle that fits, shown in a swipeable row of vehicle cards.
export default function YanbuFleet() {
    const [pax, setPax] = useState(2);
    const [bags, setBags] = useState(2);
    const pick = FLEET.find((v) => v.seats >= pax && v.bags >= bags);
    const rowRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!pick || !rowRef.current) return;
        const el = rowRef.current.querySelector<HTMLElement>(`[data-name="${pick.name}"]`);
        const row = rowRef.current;
        if (el && row.scrollWidth > row.clientWidth) {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            row.scrollTo({ left: el.offsetLeft - row.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
        }
    }, [pick]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-3 mb-8 items-stretch">
                <Stepper label="Passengers" icon={Users} value={pax} set={setPax} min={1} max={20} />
                <Stepper label="Large bags" icon={Luggage} value={bags} set={setBags} min={0} max={24} />
                <div className="rounded-2xl bg-[#0a2540] text-white px-5 py-3 flex items-center" aria-live="polite">
                    {pick ? (
                        <p className="text-sm"><span className="block text-xs uppercase tracking-wider text-sky-200/70">Fits your group</span><span className="font-bold text-base">{pick.cat} · {pick.name.split(' /')[0]}</span></p>
                    ) : (
                        <p className="text-sm">That is more than one vehicle carries. Send the exact numbers and we suggest a combination.</p>
                    )}
                </div>
            </div>

            <ul ref={rowRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible" aria-label="Vehicles">
                {FLEET.map((v) => {
                    const fits = v.seats >= pax && v.bags >= bags;
                    const chosen = pick?.name === v.name;
                    return (
                        <li key={v.name} data-name={v.name} className={`snap-start shrink-0 w-64 lg:w-auto rounded-3xl overflow-hidden bg-white border-2 transition ${chosen ? 'border-[#e8765a] shadow-xl' : 'border-transparent'} ${fits ? '' : 'opacity-50'}`}>
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 20vw, 256px" className="object-cover" />
                                {chosen && <span className="absolute top-3 left-3 rounded-full bg-[#e8765a] px-3 py-1 text-xs font-bold text-white">Suggested</span>}
                            </div>
                            <div className="p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#0f5c8c]">{v.cat}</p>
                                <p className="font-bold text-[#0a2540] text-lg leading-tight mb-2">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-slate-600 mb-3">{v.use}</p>
                                <p className="text-xs text-slate-500">Up to {v.seats} passengers · about {v.bags} large bags{!fits && <span className="block mt-1 font-semibold">Too small for this group</span>}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-500 max-w-xl">Bag figures are the booking system&apos;s guide for full-size suitcases. Oversized items, equipment cases or boxes - mention them and we confirm the vehicle.</p>
                {pick && (
                    <Link href={`/booking/?${new URLSearchParams({ vehicle: pick.name, passengers: String(pax), luggage: String(bags) }).toString()}`} className="group inline-flex items-center gap-2 font-bold text-[#0f5c8c]">
                        Quote with this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                )}
            </div>
        </div>
    );
}
