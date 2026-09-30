'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface VehicleClass { cls: string; note: string; name: string; image: string; passengers: number; luggage: number; studio: boolean }

const PAX = [{ l: '1–3', n: 3 }, { l: '4–7', n: 7 }, { l: '8–11', n: 11 }, { l: '12+', n: 12 }];

// Pick a group size -> vehicle classes with enough seats. Seats and bags come from the booking system's vehicle list.
export default function VehicleMatch({ classes }: { classes: VehicleClass[] }) {
    const [i, setI] = useState(0);
    const n = PAX[i].n;
    const fits = classes.filter((c) => c.passengers >= n);
    return (
        <div>
            <div role="group" aria-label="Passengers" className="inline-flex flex-wrap gap-2 mb-6">
                {PAX.map((p, k) => (
                    <button key={p.l} type="button" aria-pressed={k === i} onClick={() => setI(k)} className={`min-h-[44px] rounded-full border px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] ${k === i ? 'border-[#131a2e] bg-[#131a2e] text-white' : 'border-[#131a2e]/[0.15] bg-white text-[#131a2e] hover:border-[#131a2e]/50'}`}>{p.l} passengers</button>
                ))}
            </div>
            <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:mx-0 md:px-0" aria-live="polite">
                {fits.map((c) => (
                    <li key={c.cls} className="snap-start shrink-0 w-[62%] sm:w-[40%] md:w-auto animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <div className="h-full rounded-2xl bg-white border border-[#131a2e]/10 overflow-hidden">
                            <div className="relative aspect-[16/10] bg-[#f4f1ea]">
                                <Image src={c.image} alt={c.name.split(' /')[0]} fill sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 62vw" className={c.studio ? 'object-contain p-3' : 'object-cover'} />
                            </div>
                            <div className="p-4">
                                <p className="font-bold text-[#131a2e]">{c.cls}</p>
                                <p className="text-xs text-slate-500 mb-1">{c.name.split(' /')[0]}</p>
                                <p className="text-xs text-slate-600">{c.note} · up to {c.passengers} seats · about {c.luggage} large bags</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {n >= 12 && <p className="text-sm text-slate-600 mt-2">Larger groups can also be split across several vehicles.</p>}
        </div>
    );
}
