'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PLANS = [
    { h: 2, label: '2 hrs', stops: ['Hotel', 'Meeting in Al Khobar', 'Hotel'], note: 'One meeting and back, with the car waiting outside.' },
    { h: 4, label: '4 hrs', stops: ['Hotel', 'Dhahran meeting', 'Lunch', 'Al Khobar office', 'Hotel'], note: 'Two appointments in different cities without booking four separate transfers.' },
    { h: 8, label: '8 hrs', stops: ['Hotel', 'Dammam', 'Dhahran', 'Corniche dinner', 'Hotel'], note: 'A full working day or a family day out - stops decided as you go.' },
];

// Duration picker for hourly chauffeur hire; shows an example day and hands off in hourly mode.
export default function KhobarHourly() {
    const [h, setH] = useState(4);
    const p = PLANS.find((x) => x.h === h)!;
    const href = `/booking/?${new URLSearchParams({ trip: 'hourly', hours: String(h), from: 'Al Khobar' }).toString()}`;

    return (
        <div className="rounded-3xl bg-[#0b1535] text-white p-6 md:p-8">
            <div role="radiogroup" aria-label="Hours" className="flex gap-1 rounded-xl bg-white/10 p-1 mb-7 max-w-sm">
                {PLANS.map((x) => (
                    <button
                        key={x.h}
                        type="button"
                        role="radio"
                        aria-checked={h === x.h}
                        onClick={() => setH(x.h)}
                        className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${h === x.h ? 'bg-white text-[#0b1535]' : 'text-slate-300 hover:text-white'}`}
                    >
                        {x.label}
                    </button>
                ))}
            </div>
            <div key={h} aria-live="polite" className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-4 text-sm font-semibold" aria-label="Example day">
                    {p.stops.map((s, i) => (
                        <li key={`${s}-${i}`} className="flex items-center gap-2">
                            <span className="rounded-lg bg-white/10 px-3 py-1.5">{s}</span>
                            {i < p.stops.length - 1 && <span className="text-sky-300" aria-hidden="true">→</span>}
                        </li>
                    ))}
                </ol>
                <p className="text-slate-300 text-sm mb-7">{p.note}</p>
            </div>
            <Link href={href} className="group inline-flex items-center gap-2 rounded-xl bg-[#2f6bff] px-5 py-3.5 font-bold text-white hover:bg-[#1f55e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                Request a {h}-hour quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
        </div>
    );
}
