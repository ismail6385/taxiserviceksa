'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface FleetCard { cls: string; name: string; image: string; passengers: number; luggage: number; studio: boolean; comfort: string; use: string }

const GROUP = [{ l: '1–2', n: 2 }, { l: '3–4', n: 4 }, { l: '5–7', n: 7 }, { l: '8+', n: 8 }];

// Group-size chips mark which cards fit; all cards stay visible and swipe on mobile.
// Seats and bags come from the booking system's vehicle list.
export default function KhaybarFleet({ cards }: { cards: FleetCard[] }) {
    const [g, setG] = useState(1);
    const n = GROUP[g].n;
    return (
        <div>
            <div role="group" aria-label="Group size" className="flex flex-wrap gap-2 mb-6">
                {GROUP.map((x, k) => (
                    <button key={x.l} type="button" aria-pressed={k === g} onClick={() => setG(k)} className={`min-h-[44px] rounded-full border px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a] ${k === g ? 'border-[#1b1a18] bg-[#1b1a18] text-white' : 'border-stone-300 bg-white text-[#1b1a18] hover:border-stone-500'}`}>{x.l} people</button>
                ))}
            </div>
            <ul className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:mx-0 md:px-0">
                {cards.map((c) => {
                    const fits = c.passengers >= n;
                    return (
                        <li key={c.name} className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-auto">
                            <div className={`h-full rounded-2xl overflow-hidden border bg-white transition motion-reduce:transition-none ${fits ? 'border-[#c08a4a] shadow-md' : 'border-stone-200 opacity-60'}`}>
                                <div className="relative aspect-[16/10] bg-[#efe9df]">
                                    <Image src={c.image} alt={c.name.split(' /')[0]} fill sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 70vw" className={c.studio ? 'object-contain p-3' : 'object-cover'} />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#9b6a35]">{c.cls}</p>
                                    <p className="font-bold text-[#1b1a18]">{c.name.split(' /')[0]}</p>
                                    <p className="text-sm text-stone-600 mt-2">{c.use}</p>
                                    <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-stone-600">
                                        <dt className="text-stone-400">Seats</dt><dd>Up to {c.passengers}</dd>
                                        <dt className="text-stone-400">Luggage</dt><dd>About {c.luggage} large bags</dd>
                                        <dt className="text-stone-400">Comfort</dt><dd>{c.comfort}</dd>
                                    </dl>
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
