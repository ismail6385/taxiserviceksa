'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface DubaFleetCard { cls: string; name: string; image: string; passengers: number; luggage: number; studio: boolean; use: string }

const GROUP = [{ l: '1–2', n: 2 }, { l: '3–4', n: 4 }, { l: '5–7', n: 7 }, { l: '8+', n: 8 }];

// Horizontal vehicle selector: pick a group size, cards that fit are highlighted.
// Seats and bags come from the booking system's vehicle list.
export default function DubaFleet({ cards }: { cards: DubaFleetCard[] }) {
    const [g, setG] = useState(1);
    const n = GROUP[g].n;
    return (
        <div>
            <div role="group" aria-label="Group size" className="flex flex-wrap gap-2 mb-6">
                {GROUP.map((x, k) => <button key={x.l} type="button" aria-pressed={k === g} onClick={() => setG(k)} className={`min-h-[44px] rounded-full border px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f8b] ${k === g ? 'border-[#0b2a3a] bg-[#0b2a3a] text-white' : 'border-slate-300 bg-white text-[#0b2a3a] hover:border-slate-500'}`}>{x.l} people</button>)}
            </div>
            <ul className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {cards.map((c) => {
                    const fits = c.passengers >= n;
                    return (
                        <li key={c.name} className="snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto">
                            <div className={`h-full rounded-2xl overflow-hidden border bg-white transition motion-reduce:transition-none ${fits ? 'border-[#1f6f8b] shadow-md' : 'border-slate-200 opacity-60'}`}>
                                <div className="relative aspect-[16/10] bg-[#ece4d6]">
                                    <Image src={c.image} alt={c.name.split(' /')[0]} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 72vw" className={c.studio ? 'object-contain p-3' : 'object-cover'} />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#1f6f8b]">{c.cls}</p>
                                    <p className="font-bold text-[#0b2a3a]">{c.name.split(' /')[0]}</p>
                                    <p className="text-sm text-slate-600 mt-2">{c.use}</p>
                                    <p className="text-xs text-slate-500 mt-3">Up to {c.passengers} passengers · about {c.luggage} large bags</p>
                                    <p className="sr-only">{fits ? `Fits ${GROUP[g].l} people` : `Too small for ${GROUP[g].l} people`}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
