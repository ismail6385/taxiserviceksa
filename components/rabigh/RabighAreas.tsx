'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuoteLink from './QuoteLink';
import type { RabighSetDetail } from './RabighQuoteCard';

export interface Area {
    name: string;
    tag: string;
    text: string;
    tip: string;
    set: RabighSetDetail;
    link?: { label: string; href: string };
}

// Pickup areas around Rabigh: pick one -> what to send us for a clean pickup there.
export default function RabighAreas({ areas }: { areas: Area[] }) {
    const [i, setI] = useState(0);
    const a = areas[i];
    return (
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-6">
            <div role="group" aria-label="Pickup areas" className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-col md:overflow-visible">
                {areas.map((x, k) => (
                    <button key={x.name} type="button" aria-pressed={k === i} onClick={() => setI(k)} className={`shrink-0 text-left rounded-xl border px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] ${k === i ? 'border-[#f07b5a] bg-[#f07b5a]/10' : 'border-white/[0.15] hover:border-white/40'}`}>
                        <span className="block font-bold text-white">{x.name}</span>
                        <span className="block text-xs text-white/60">{x.tag}</span>
                    </button>
                ))}
            </div>
            <div aria-live="polite" key={a.name} className="rounded-2xl bg-[#f5efe4] text-[#10213f] p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-widest text-[#c4553a] mb-2">{a.tag}</p>
                <h3 className="mb-3">{a.name}</h3>
                <p className="text-slate-700 leading-relaxed mb-4">{a.text}</p>
                <p className="text-sm text-slate-600 border-l-2 border-[#f07b5a] pl-4 mb-6"><strong className="text-[#10213f]">Send us:</strong> {a.tip}</p>
                <div className="flex flex-wrap items-center gap-4">
                    <QuoteLink set={a.set} className="group inline-flex items-center gap-2 rounded-xl bg-[#10213f] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] focus-visible:ring-offset-2">
                        Use as my pickup
                    </QuoteLink>
                    {a.link && <Link href={a.link.href} className="text-sm font-semibold text-[#c4553a] hover:underline">{a.link.label}</Link>}
                </div>
            </div>
        </div>
    );
}
