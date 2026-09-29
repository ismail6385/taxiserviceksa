'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MODES: { key: string; label: string; best: string[]; example: string[]; params: Record<string, string> }[] = [
    {
        key: 'transfer', label: 'Transfer',
        best: ['One pickup', 'One destination', 'No stops on the way'],
        example: ['AHB Airport', 'Soudah hotel'],
        params: { from: 'Abha International Airport (AHB)', to: 'Al Soudah' },
    },
    {
        key: 'return', label: 'Return transfer',
        best: ['Visiting one place', 'Coming back later', 'Keeping the same booking'],
        example: ['Abha', 'Rijal Almaa', 'wait', 'Abha'],
        params: { from: 'Abha', to: 'Rijal Almaa', notes: 'Return trip - waiting time about: ' },
    },
    {
        key: 'hourly', label: 'Hourly driver',
        best: ['Several stops', 'Meetings or sightseeing', 'A plan that may change'],
        example: ['Abha', 'Rijal Almaa', 'Soudah', 'Abha'],
        params: { trip: 'hourly', hours: '8', from: 'Abha' },
    },
];

// Transfer vs return vs hourly driver, each with an example day. Examples only, not packages.
export default function AbhaTripMode() {
    const [k, setK] = useState('return');
    const m = MODES.find((x) => x.key === k)!;

    return (
        <div className="rounded-3xl bg-white border border-[#16231f]/10 p-6 md:p-8">
            <div role="radiogroup" aria-label="Type of booking" className="grid grid-cols-3 gap-1 rounded-2xl bg-[#f3f1ea] p-1 mb-7">
                {MODES.map((x) => (
                    <button
                        key={x.key}
                        type="button"
                        role="radio"
                        aria-checked={k === x.key}
                        onClick={() => setK(x.key)}
                        className={`rounded-xl px-2 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] ${k === x.key ? 'bg-[#16231f] text-white' : 'text-[#16231f] hover:bg-white'}`}
                    >
                        {x.label}
                    </button>
                ))}
            </div>
            <div key={k} aria-live="polite" className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a10] mb-3">Best when</p>
                    <ul className="space-y-2 text-[#16231f]">
                        {m.best.map((b) => <li key={b} className="flex gap-2"><span className="text-[#2f5d46]" aria-hidden="true">✓</span>{b}</li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a10] mb-3">Example</p>
                    <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-[#16231f]">
                        {m.example.map((s, i) => (
                            <li key={`${s}-${i}`} className="flex items-center gap-1.5">
                                <span className={`rounded-lg px-2.5 py-1 ${s === 'wait' ? 'bg-[#e0a526]/20 italic' : 'bg-[#f3f1ea]'}`}>{s}</span>
                                {i < m.example.length - 1 && <span aria-hidden="true">→</span>}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <Link href={`/booking/?${new URLSearchParams(m.params).toString()}`} className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2f5d46] px-5 py-3.5 font-bold text-white hover:bg-[#244a38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] focus-visible:ring-offset-2">
                Book a {m.label.toLowerCase()} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
        </div>
    );
}
