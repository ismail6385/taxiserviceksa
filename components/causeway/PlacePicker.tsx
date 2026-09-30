'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CausewaySetDetail } from './CausewayQuoteCard';

export interface Place {
    name: string;
    tag: string;
    text: string;
    set: CausewaySetDetail;
    link?: { label: string; href: string };
}

// Pick a place -> short explanation, then prefill the quote card at the top of the page.
export default function PlacePicker({ places, label, tone = 'light' }: { places: Place[]; label: string; tone?: 'light' | 'dark' }) {
    const [i, setI] = useState(0);
    const p = places[i];
    const dark = tone === 'dark';
    const use = () => {
        window.dispatchEvent(new CustomEvent<CausewaySetDetail>('causeway:set', { detail: p.set }));
        document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6">
            <div role="group" aria-label={label} className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-col md:overflow-visible">
                {places.map((x, k) => (
                    <button key={x.name} type="button" aria-pressed={k === i} onClick={() => setI(k)} className={`shrink-0 text-left rounded-xl border px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872] ${k === i ? (dark ? 'border-[#e9b872] bg-[#e9b872]/10' : 'border-[#06232b] bg-[#06232b] text-white') : dark ? 'border-white/[0.15] hover:border-white/40' : 'border-[#06232b]/10 bg-white hover:border-[#06232b]/40'}`}>
                        <span className="block font-bold">{x.name}</span>
                        <span className={`block text-xs ${k === i && !dark ? 'text-white/70' : dark ? 'text-white/60' : 'text-slate-500'}`}>{x.tag}</span>
                    </button>
                ))}
            </div>
            <div aria-live="polite" key={p.name} className={`rounded-2xl p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100 ${dark ? 'bg-white text-[#06232b]' : 'bg-[#06232b] text-white'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${dark ? 'text-[#0f5e6e]' : 'text-[#e9b872]'}`}>{p.tag}</p>
                <h3 className="mb-3">{p.name}</h3>
                <p className={`leading-relaxed mb-6 ${dark ? 'text-slate-600' : 'text-white/75'}`}>{p.text}</p>
                <div className="flex flex-wrap items-center gap-4">
                    <button type="button" onClick={use} className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872] focus-visible:ring-offset-2 ${dark ? 'bg-[#06232b] text-white hover:bg-black' : 'bg-[#e9b872] text-[#06232b] hover:bg-[#f1c98c]'}`}>
                        Use in my quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </button>
                    {p.link && <Link href={p.link.href} className={`text-sm font-semibold hover:underline ${dark ? 'text-[#0f5e6e]' : 'text-[#e9b872]'}`}>{p.link.label}</Link>}
                </div>
            </div>
        </div>
    );
}
