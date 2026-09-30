'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RouteVehicle { name: string; cls: string; image: string; passengers: number; luggage: number }

// `seats` / `bags` are the top of each band (or the floor, for the open-ended ones).
const GROUPS = [
    { label: '1–3', seats: 3 },
    { label: '4–5', seats: 5 },
    { label: '6–7', seats: 7 },
    { label: '8+', seats: 8 },
];
const LOADS = [
    { label: '1–2 bags', bags: 2 },
    { label: '3–5 bags', bags: 5 },
    { label: '6+ bags', bags: 6 },
];

function Choice({ legend, options, value, set }: { legend: string; options: string[]; value: number; set: (i: number) => void }) {
    return (
        <fieldset>
            <legend className="text-sm font-bold text-[#1f2a26] mb-2">{legend}</legend>
            <div className="flex flex-wrap gap-2">
                {options.map((o, i) => (
                    <button key={o} type="button" aria-pressed={i === value} onClick={() => set(i)} className={`min-h-[44px] rounded-xl px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d4b] focus-visible:ring-offset-2 ${i === value ? 'bg-[#2f5d4b] text-white' : 'bg-white border border-[#1f2a26]/[0.15] text-[#1f2a26] hover:border-[#2f5d4b]'}`}>{o}</button>
                ))}
            </div>
        </fieldset>
    );
}

// Passengers + large bags -> which of the route's vehicles have room. Figures come from the booking system's vehicle list.
export default function LuggageMatcher({ fleet }: { fleet: RouteVehicle[] }) {
    const [g, setG] = useState(1);
    const [l, setL] = useState(1);
    const { seats } = GROUPS[g];
    const { bags } = LOADS[l];
    const fits = (v: RouteVehicle) => v.passengers >= seats && v.luggage >= bags;
    const count = fleet.filter(fits).length;
    const open = g === GROUPS.length - 1 || l === LOADS.length - 1;

    return (
        <div>
            <div className="flex flex-wrap gap-x-10 gap-y-5 mb-6">
                <Choice legend="Passengers" options={GROUPS.map((x) => x.label)} value={g} set={setG} />
                <Choice legend="Luggage" options={LOADS.map((x) => x.label)} value={l} set={setL} />
            </div>
            <p className="text-sm text-stone-600 mb-5" aria-live="polite">
                {count ? `${count} of these ${count > 1 ? 'have' : 'has'} room for ${GROUPS[g].label} passengers with ${LOADS[l].label}.` : 'No single vehicle here covers that. Send exact numbers and we suggest a larger vehicle or two vehicles.'}
                {open && count > 0 && ' For larger numbers, send the exact count so we can confirm it fits.'}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x pb-3 -mx-4 px-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:mx-0 lg:px-0" aria-label="Vehicles on this route">
                {fleet.map((v) => {
                    const on = fits(v);
                    return (
                        <li key={v.name} className={`snap-start shrink-0 w-[62%] sm:w-[40%] lg:w-auto rounded-2xl overflow-hidden bg-white border-2 flex flex-col transition ${on ? 'border-[#2f5d4b]' : 'border-transparent opacity-50'}`}>
                            <div className="relative aspect-[4/3] bg-stone-100">
                                <Image src={v.image} alt={v.name.split(' /')[0]} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 62vw" className="object-cover" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#2f5d4b]">{v.cls}</p>
                                <p className="font-bold text-[#1f2a26]">{v.name.split(' /')[0]}</p>
                                <p className="text-xs text-stone-500 mt-1 flex-1">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                {on ? (
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Jeddah', to: 'Taif', vehicle: v.name, notes: `${GROUPS[g].label} passengers, ${LOADS[l].label}.` }).toString()}`} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#2f5d4b]">
                                        Quote with this <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                    </Link>
                                ) : (
                                    <p className="mt-3 text-xs font-semibold text-stone-500">Too small for this group</p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
