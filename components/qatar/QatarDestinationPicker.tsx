'use client';

import { useState } from 'react';
import { Building2, PlaneTakeoff, Landmark, Home, MapPin, ArrowUp } from 'lucide-react';

const DESTS = [
    { key: 'doha', label: 'Doha', tags: 'Hotels • Business • City', to: 'Doha, Qatar', icon: Building2, note: 'Send the hotel or office name and full address - Doha is spread out and the last stretch depends on where you are staying.', cta: 'Get Al Khobar → Doha quote' },
    { key: 'doh', label: 'Hamad International Airport', tags: 'Airport transfer', to: 'Hamad International Airport (DOH), Qatar', icon: PlaneTakeoff, note: 'Because border processing is variable, allow a substantial buffer before your flight. Add your flight number and departure time.', cta: 'Get Hamad Airport quote' },
    { key: 'lusail', label: 'Lusail', tags: 'Business • Hotels • Events', to: 'Lusail, Qatar', icon: Landmark, note: 'North of central Doha. For events, check drop-off arrangements with the venue and plan around event traffic.', cta: 'Get Lusail quote' },
    { key: 'wakrah', label: 'Al Wakrah', tags: 'Residential • Business', to: 'Al Wakrah, Qatar', icon: Home, note: 'South of Doha, towards the airport side of the city. Send the full address or compound name.', cta: 'Get Al Wakrah quote' },
    { key: 'other', label: 'Other Qatar destination', tags: 'Custom address', to: '', icon: MapPin, note: 'Type the exact address in the booking form. We confirm the route when we quote.', cta: 'Enter my Qatar address' },
];

// "Where in Qatar?" - chooses the destination, fills the hero quote card and shows a planning note.
export default function QatarDestinationPicker() {
    const [k, setK] = useState('doha');
    const d = DESTS.find((x) => x.key === k)!;

    const apply = () => {
        window.dispatchEvent(new CustomEvent('routequote:set', { detail: { to: d.to } }));
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById('quote')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        window.setTimeout(() => document.getElementById(d.to ? 'rq-date' : 'rq-to')?.focus(), reduce ? 0 : 500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
            <div role="radiogroup" aria-label="Qatar destination" className="flex flex-col gap-2">
                {DESTS.map((x) => {
                    const on = x.key === k;
                    return (
                        <button
                            key={x.key}
                            type="button"
                            role="radio"
                            aria-checked={on}
                            onClick={() => setK(x.key)}
                            className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538] ${on ? 'border-[#8a1538] bg-[#8a1538] text-white' : 'border-slate-200 bg-white text-[#0b1c3d] hover:border-[#8a1538]/50'}`}
                        >
                            <x.icon className={`w-6 h-6 shrink-0 ${on ? 'text-white' : 'text-[#8a1538]'}`} aria-hidden="true" />
                            <span className="flex-1">
                                <span className="block font-bold">{x.label}</span>
                                <span className={`block text-xs ${on ? 'text-white/70' : 'text-slate-500'}`}>{x.tags}</span>
                            </span>
                            <span className={`w-4 h-4 rounded-full border-2 shrink-0 ${on ? 'border-white bg-white' : 'border-slate-300'}`} aria-hidden="true" />
                        </button>
                    );
                })}
            </div>
            <div aria-live="polite" key={d.key} className="lg:sticky lg:top-28 rounded-3xl bg-[#0b1c3d] text-white p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8a3b6] mb-2">Planning note</p>
                <h3 className="mb-3">{d.label}</h3>
                <p className="text-white/80 leading-relaxed mb-7">{d.note}</p>
                <button type="button" onClick={apply} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-[#0b1c3d] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a3b6]">
                    <ArrowUp className="w-4 h-4" aria-hidden="true" /> {d.cta}
                </button>
                <p className="text-xs text-white/50 mt-3">Fills the destination in the quote form at the top of the page.</p>
            </div>
        </div>
    );
}
