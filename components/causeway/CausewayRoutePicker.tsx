'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CausewayRoute } from '@/data/causewayRoutes';

// "Where are you starting?" - short cards that hand off to each dedicated route page.
export default function CausewayRoutePicker({ saudi, bahrain }: { saudi: CausewayRoute[]; bahrain: CausewayRoute[] }) {
    const [side, setSide] = useState<'sa' | 'bh'>('sa');
    const routes = side === 'sa' ? saudi : bahrain;
    return (
        <div>
            <div role="tablist" aria-label="Starting country" className="inline-grid grid-cols-2 gap-1 rounded-xl bg-[#06232b]/5 p-1 mb-8">
                {([['sa', 'Starting in Saudi Arabia'], ['bh', 'Starting in Bahrain']] as const).map(([k, l]) => (
                    <button key={k} role="tab" id={`cwr-tab-${k}`} aria-selected={side === k} aria-controls="cwr-panel" onClick={() => setSide(k)} className={`h-11 rounded-lg px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e] ${side === k ? 'bg-[#06232b] text-white' : 'text-[#06232b]/70 hover:text-[#06232b]'}`}>{l}</button>
                ))}
            </div>
            <ul id="cwr-panel" role="tabpanel" aria-labelledby={`cwr-tab-${side}`} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {routes.map((r, i) => (
                    <li key={r.href} className="snap-start shrink-0 w-[78%] sm:w-[48%] md:w-auto animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${i * 60}ms` }}>
                        <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-[#06232b]/10 bg-white p-6 transition hover:border-[#0f5e6e] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e]">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#0f5e6e] mb-2">{side === 'sa' ? 'Saudi → Bahrain' : 'Bahrain → Saudi'}</span>
                            <span className="text-lg font-bold text-[#06232b] leading-snug mb-2">{r.from} → {r.to}</span>
                            <span className="text-sm text-slate-600 flex-1 mb-5">{r.note}</span>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#06232b]">Route details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
