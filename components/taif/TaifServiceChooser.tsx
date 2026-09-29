'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MODES: { key: string; label: string; best: string[]; days: { name: string; stops: string[] }[]; params: Record<string, string> }[] = [
    {
        key: 'oneway', label: 'One-way transfer',
        best: ['Airport runs', 'Hotel moves', 'Makkah or Jeddah'],
        days: [{ name: 'Example', stops: ['TIF Airport', 'Taif hotel'] }],
        params: { from: 'Taif' },
    },
    {
        key: 'return', label: 'Return transfer',
        best: ['Al Hada or Al Shafa', 'Cable car', 'A single attraction'],
        days: [{ name: 'Example', stops: ['Hotel', 'Al Hada', 'wait', 'Hotel'] }],
        params: { from: 'Taif', to: 'Al Hada', notes: 'Return with waiting time: ' },
    },
    {
        key: 'hourly', label: 'Hourly chauffeur',
        best: ['Several stops', 'Rose farms', 'A family or business day'],
        days: [
            { name: 'Mountain day', stops: ['Taif', 'Al Hada', 'Cable car', 'Taif'] },
            { name: 'Nature day', stops: ['Taif', 'Al Shafa', 'Viewpoints', 'Taif'] },
            { name: 'Rose season', stops: ['Hotel', 'Rose area', 'Local stops', 'Hotel'] },
            { name: 'Combined', stops: ['Taif', 'Al Hada', 'Al Shafa', 'Taif'] },
        ],
        params: { trip: 'hourly', hours: '8', from: 'Taif' },
    },
];

// Transfer vs return vs hourly chauffeur, with example days (examples, not packages).
export default function TaifServiceChooser() {
    const [k, setK] = useState('hourly');
    const m = MODES.find((x) => x.key === k)!;

    return (
        <div className="rounded-3xl bg-white border border-[#2a1a22]/10 p-6 md:p-8">
            <div role="radiogroup" aria-label="Type of booking" className="grid grid-cols-3 gap-1 rounded-2xl bg-[#f7efe9] p-1 mb-7">
                {MODES.map((x) => (
                    <button key={x.key} type="button" role="radio" aria-checked={k === x.key} onClick={() => setK(x.key)} className={`rounded-xl px-2 py-3 text-xs sm:text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${k === x.key ? 'bg-[#2a1a22] text-white' : 'text-[#2a1a22] hover:bg-white'}`}>
                        {x.label}
                    </button>
                ))}
            </div>
            <div key={k} aria-live="polite" className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#be185d] mb-3">Best for</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                    {m.best.map((b) => <li key={b} className="rounded-full bg-[#fdf2f6] px-3 py-1.5 text-sm font-semibold text-[#2a1a22]">{b}</li>)}
                </ul>
                <div className="space-y-3">
                    {m.days.map((d) => (
                        <div key={d.name} className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wider text-slate-500">{d.name}</span>
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-[#2a1a22]">
                                {d.stops.map((s, i) => (
                                    <li key={`${s}-${i}`} className="flex items-center gap-1.5">
                                        <span className={`rounded-lg px-2.5 py-1 ${s === 'wait' ? 'bg-pink-100 italic' : 'bg-[#f7efe9]'}`}>{s}</span>
                                        {i < d.stops.length - 1 && <span aria-hidden="true">→</span>}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-5">Examples, not fixed packages. Chauffeur service is transport - not licensed guiding.</p>
            <Link href={`/booking/?${new URLSearchParams(m.params).toString()}`} className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[#be185d] px-5 py-3.5 font-bold text-white hover:bg-[#9d174d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2">
                {m.key === 'hourly' ? 'Book an hourly chauffeur' : `Book a ${m.label.toLowerCase()}`} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
        </div>
    );
}
