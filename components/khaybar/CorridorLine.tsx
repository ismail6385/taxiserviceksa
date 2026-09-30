'use client';

import { useState } from 'react';

type Stop = { key: string; name: string; note: string };

// Madinah → Khaybar → AlUla as a line with markers; hover, focus or tap a marker for its note.
// An example travel corridor, not a fixed route.
export default function CorridorLine({ stops }: { stops: Stop[] }) {
    const [k, setK] = useState('khaybar');
    const active = stops.find((s) => s.key === k)!;
    return (
        <div className="rounded-2xl border border-white/[0.15] bg-black/25 backdrop-blur-sm p-4 sm:p-5">
            <div className="relative h-12 mx-3">
                <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-2 overflow-visible" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="4 5" />
                    <line x1="0" y1="1" x2="100" y2="1" stroke="#e0b07a" strokeWidth="2.5" vectorEffect="non-scaling-stroke" pathLength={1} className="route-draw" />
                </svg>
                <ol className="absolute inset-0 flex items-center justify-between" aria-label="Example corridor">
                    {stops.map((s) => {
                        const on = s.key === k;
                        return (
                            <li key={s.key}>
                                <button type="button" aria-pressed={on} onClick={() => setK(s.key)} onMouseEnter={() => setK(s.key)} onFocus={() => setK(s.key)} className="group relative -mx-5 flex flex-col items-center w-11 h-11 justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b07a]">
                                    <span className={`w-4 h-4 rounded-full border-2 transition motion-reduce:transition-none ${on ? 'bg-[#e0b07a] border-[#e0b07a] scale-125' : 'bg-[#1b1a18] border-white/70'}`} aria-hidden="true" />
                                    <span className={`absolute top-10 whitespace-nowrap text-xs sm:text-sm font-bold ${on ? 'text-white' : 'text-white/70'}`}>{s.name}</span>
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>
            <p aria-live="polite" className="mt-8 text-sm text-white/80 min-h-[1.25rem]"><strong className="text-white">{active.name}:</strong> {active.note}</p>
            <p className="mt-1 text-[11px] text-white/50">An example corridor, not a fixed route.</p>
        </div>
    );
}
