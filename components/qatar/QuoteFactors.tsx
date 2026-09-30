'use client';

import { useState } from 'react';

const FACTORS = [
    { k: 'Pickup', d: 'Your exact Al Khobar address - or Dammam / DMM if you start there.' },
    { k: 'Destination', d: 'Doha, Hamad Airport, Lusail, Al Wakrah or another Qatar address. Distance inside Qatar varies.' },
    { k: 'Vehicle', d: 'Sedan, family van, premium SUV or van - and one eligible for the crossing.' },
    { k: 'Group', d: 'How many passengers are travelling.' },
    { k: 'Luggage', d: 'How many cases, and anything oversized.' },
    { k: 'Journey', d: 'One-way, return on another day, or a same-day return.' },
    { k: 'Waiting', d: 'Time the car waits in Qatar before a return.' },
    { k: 'Date & time', d: 'When you travel.' },
    { k: 'Border requirements', d: 'Anything specific to the vehicle, route or destination for the crossing.' },
];

// "What affects your quote?" - tap a factor to see what we need to know.
export default function QuoteFactors() {
    const [i, setI] = useState(0);
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">
            <div role="tablist" aria-label="Quote factors" className="flex flex-wrap gap-2">
                {FACTORS.map((f, n) => (
                    <button
                        key={f.k}
                        role="tab"
                        id={`qf-${n}`}
                        aria-selected={i === n}
                        aria-controls="qf-panel"
                        onClick={() => setI(n)}
                        className={`rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538] ${i === n ? 'border-[#8a1538] bg-[#8a1538] text-white' : 'border-slate-300 bg-white text-[#0b1c3d] hover:border-[#8a1538]'}`}
                    >
                        {f.k}
                    </button>
                ))}
            </div>
            <div id="qf-panel" role="tabpanel" aria-labelledby={`qf-${i}`} key={i} className="rounded-2xl bg-white border border-slate-200 p-6 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a1538] mb-1">{FACTORS[i].k}</p>
                <p className="text-[#0b1c3d]">{FACTORS[i].d}</p>
            </div>
        </div>
    );
}
