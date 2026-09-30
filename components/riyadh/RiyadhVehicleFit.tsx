'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type FleetItem = { name: string; image: string; passengers: number; luggage: number; label: string };

const NEEDS = [
    { key: 'small', label: '1–3 passengers', pax: 3, bags: 2, exec: false },
    { key: 'family', label: 'Family / extra luggage', pax: 4, bags: 4, exec: false },
    { key: 'group7', label: '5–7 passengers', pax: 7, bags: 5, exec: false },
    { key: 'exec', label: 'Executive travel', pax: 2, bags: 2, exec: true },
    { key: 'large', label: 'Larger group', pax: 11, bags: 11, exec: false },
];

// Vehicle fit using the booking system's own seat and bag figures (passed in from the server).
export default function RiyadhVehicleFit({ standard, executive }: { standard: FleetItem[]; executive: FleetItem[] }) {
    const [k, setK] = useState('small');
    const n = NEEDS.find((x) => x.key === k)!;
    const list = n.exec ? executive : standard;
    const pick = list.find((v) => v.passengers >= n.pax && v.luggage >= n.bags);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            <div role="radiogroup" aria-label="What do you need?" className="flex flex-col gap-2">
                {NEEDS.map((x) => (
                    <button key={x.key} type="button" role="radio" aria-checked={k === x.key} onClick={() => setK(x.key)} className={`rounded-2xl border px-5 py-4 text-left font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a7432] ${k === x.key ? 'border-[#14161b] bg-[#14161b] text-white' : 'border-[#14161b]/10 bg-white text-[#14161b] hover:border-[#9a7432]'}`}>
                        {x.label}
                    </button>
                ))}
            </div>
            <div aria-live="polite" key={k} className="rounded-3xl bg-white border border-[#14161b]/10 overflow-hidden flex flex-col animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                {pick ? (
                    <>
                        <div className="relative aspect-[16/9] bg-slate-100">
                            <Image src={pick.image} alt={pick.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#9a7432]">{pick.label}</p>
                            <p className="text-2xl font-bold text-[#14161b]">{pick.name.split(' /')[0]}</p>
                            <p className="text-sm text-slate-600 mt-1 mb-5">Up to {pick.passengers} passengers · about {pick.luggage} large bags</p>
                            <Link href={`/booking/?${new URLSearchParams({ vehicle: pick.name, passengers: String(n.pax), from: 'Riyadh' }).toString()}`} className="group mt-auto inline-flex items-center gap-2 font-bold text-[#9a7432]">
                                Quote with this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        </div>
                    </>
                ) : (
                    <p className="p-8">Send the exact passenger and bag count and we suggest a combination.</p>
                )}
            </div>
        </div>
    );
}
