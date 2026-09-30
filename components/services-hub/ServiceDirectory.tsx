'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, X } from 'lucide-react';
import type { Service } from '@/data/serviceHub';

type Opt = { v: string; l: string };
const JOURNEY: Opt[] = [
    { v: 'airport', l: 'Airport' }, { v: 'intercity', l: 'Intercity' }, { v: 'hourly', l: 'Hourly' }, { v: 'tourism', l: 'Tourism' },
    { v: 'pilgrimage', l: 'Pilgrimage' }, { v: 'corporate', l: 'Corporate' }, { v: 'cross-border', l: 'Cross-border' },
];
const AUDIENCE: Opt[] = [{ v: 'solo', l: 'Solo' }, { v: 'family', l: 'Family' }, { v: 'group', l: 'Group' }, { v: 'business', l: 'Business' }, { v: 'vip', l: 'VIP' }];
const REGION: Opt[] = [{ v: 'western', l: 'Western' }, { v: 'central', l: 'Central' }, { v: 'eastern', l: 'Eastern' }, { v: 'southern', l: 'Southern' }, { v: 'northern', l: 'Northern' }, { v: 'gcc', l: 'GCC' }];

function Filter({ label, opts, v, set }: { label: string; opts: Opt[]; v: string; set: (x: string) => void }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                {label}
                <select value={v} onChange={(e) => set(e.target.value)} className="mt-1.5 block w-full h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold normal-case tracking-normal text-[#131a2e] focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/50">
                    <option value="">Any</option>
                    {opts.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                </select>
            </label>
        </div>
    );
}

// Search and filter every service page. Cards stay short: purpose, best for, link.
export default function ServiceDirectory({ services }: { services: Service[] }) {
    const [q, setQ] = useState('');
    const [j, setJ] = useState('');
    const [a, setA] = useState('');
    const [r, setR] = useState('');
    const list = useMemo(() => {
        const t = q.trim().toLowerCase();
        return services.filter((s) =>
            (!t || [s.name, s.shortDescription, ...s.bestFor, s.category].join(' ').toLowerCase().includes(t)) &&
            (!j || s.journeys.includes(j as Service['journeys'][number])) &&
            (!a || s.audiences.includes(a as Service['audiences'][number])) &&
            (!r || s.regions.includes(r as Service['regions'][number])),
        );
    }, [services, q, j, a, r]);
    const any = q || j || a || r;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-3 mb-4 items-end">
                <div>
                    <label htmlFor="svc-search" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Search</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                        <input id="svc-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search airport transfer, chauffeur, Umrah, business…" className="w-full h-11 rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-base text-[#131a2e] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/50" />
                    </div>
                </div>
                <Filter label="Journey" opts={JOURNEY} v={j} set={setJ} />
                <Filter label="Who's travelling" opts={AUDIENCE} v={a} set={setA} />
                <Filter label="Region" opts={REGION} v={r} set={setR} />
            </div>
            <div className="flex items-center justify-between gap-3 mb-5 min-h-[44px]">
                <p className="text-sm text-slate-600" aria-live="polite">{list.length} service{list.length === 1 ? '' : 's'}</p>
                {any && (
                    <button type="button" onClick={() => { setQ(''); setJ(''); setA(''); setR(''); }} className="inline-flex items-center gap-1.5 min-h-[44px] px-2 text-sm font-semibold text-[#8a6d2c] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] rounded">
                        <X className="w-4 h-4" aria-hidden="true" /> Clear filters
                    </button>
                )}
            </div>
            {list.length ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {list.map((s) => (
                        <li key={s.id} className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                            <Link href={s.href} className="group flex h-full flex-col rounded-2xl bg-white border border-[#131a2e]/10 p-5 transition hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                                <span className="flex items-start justify-between gap-2">
                                    <span className="font-bold text-[#131a2e]">{s.name}</span>
                                    {s.status === 'coming-soon' && <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">Coming soon</span>}
                                </span>
                                <span className="text-sm text-slate-600 mt-1">{s.shortDescription}</span>
                                <span className="text-xs text-slate-500 mt-3 flex-1"><strong className="text-slate-600">Best for:</strong> {s.bestFor.join(' · ')}</span>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#131a2e]">Explore Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="rounded-2xl bg-white border border-[#131a2e]/10 p-6 text-slate-600">Nothing matches those filters. Try fewer filters, or ask us on WhatsApp.</p>
            )}
        </div>
    );
}
