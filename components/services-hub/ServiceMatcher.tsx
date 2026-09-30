'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { openQuote } from './QuotePanel';

export interface MatchService { id: string; name: string; href: string; shortDescription: string }

const PURPOSE = ['Airport', 'City', 'Another city', 'Business', 'Tourism', 'Umrah', 'Event', 'Group', 'Cross-border'] as const;
const DURATION = ['One journey', 'A few hours', 'Full day', 'Multiple days'] as const;
const PAX = ['1–3', '4–7', '8–11', '12+'] as const;

// Three questions -> the likely service. Plain client-side rules, no backend.
function match(p: string, d: string, n: string): string {
    const long = d !== 'One journey';
    if (p === 'Cross-border') return 'gcc';
    if (p === 'Event') return 'events';
    if (p === 'Umrah') return long ? 'makkah-city' : 'umrah';
    if (p === 'Tourism') return d === 'Multiple days' ? 'tourism' : long ? 'tourism' : 'tours';
    if (p === 'Business') return d === 'Multiple days' ? 'corporate' : long ? 'vip' : 'business';
    if (p === 'Group' || n === '8–11' || n === '12+') return long ? 'private-driver' : p === 'Another city' ? 'intercity' : 'hiace';
    if (p === 'Airport') return 'airport';
    if (p === 'Another city') return 'intercity';
    return long ? 'private-driver' : 'city';
}

export default function ServiceMatcher({ services }: { services: MatchService[] }) {
    const [p, setP] = useState<string>('');
    const [d, setD] = useState<string>('');
    const [n, setN] = useState<string>('');
    const ready = p && d && n;
    const result = ready ? services.find((s) => s.id === match(p, d, n)) : undefined;
    const big = n === '8–11' || n === '12+';

    const Q = ({ id, q, opts, v, set }: { id: string; q: string; opts: readonly string[]; v: string; set: (x: string) => void }) => (
        <fieldset>
            <legend id={id} className="text-sm font-bold text-white mb-3">{q}</legend>
            <div className="flex flex-wrap gap-2">
                {opts.map((o) => (
                    <button key={o} type="button" aria-pressed={v === o} onClick={() => set(o)} className={`min-h-[44px] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] ${v === o ? 'border-[#c8a24a] bg-[#c8a24a] text-[#131a2e]' : 'border-white/20 text-white/[0.85] hover:border-white/50'}`}>{o}</button>
                ))}
            </div>
        </fieldset>
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="space-y-7">
                {Q({ id: 'm-p', q: '1. What are you travelling for?', opts: PURPOSE, v: p, set: setP })}
                {Q({ id: 'm-d', q: '2. How long do you need the vehicle?', opts: DURATION, v: d, set: setD })}
                {Q({ id: 'm-n', q: '3. How many passengers?', opts: PAX, v: n, set: setN })}
            </div>
            <div aria-live="polite" className="rounded-3xl bg-white text-[#131a2e] p-7 min-h-[240px]">
                {result ? (
                    <div key={result.id} className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d2c] mb-2">Your likely service</p>
                        <p className="text-2xl font-extrabold mb-2">{result.name}</p>
                        <p className="text-slate-600 mb-3">{result.shortDescription}</p>
                        {big && <p className="text-sm text-slate-600 mb-3">For {n} passengers we suggest a van or minibus, or more than one vehicle.</p>}
                        <div className="flex flex-col gap-2 mt-5">
                            <button type="button" onClick={() => openQuote(result.id)} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#131a2e] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] focus-visible:ring-offset-2">
                                Continue to Booking <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </button>
                            <Link href={result.href} className="text-center text-sm font-semibold text-[#8a6d2c] hover:underline py-2">About {result.name}</Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Your likely service</p>
                        <p className="text-slate-500">Answer the three questions and we&apos;ll point you to the right service.</p>
                        <p className="text-sm text-slate-400 mt-4">{[p, d, n].filter(Boolean).length} of 3 answered</p>
                    </div>
                )}
            </div>
        </div>
    );
}
