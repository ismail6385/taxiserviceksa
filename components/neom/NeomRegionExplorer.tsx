'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert } from 'lucide-react';

// Only neutral, stable descriptions - no project timelines or marketing claims.
const AREAS = [
    {
        key: 'bay', name: 'NEOM Bay & Sharma',
        what: 'The coastal area around Sharma, home to NEOM Bay Airport.',
        transport: 'Airport pickups and drop-offs, and transfers to accommodation nearby.',
        access: 'Hotels and public points are straightforward; any controlled area needs its own arrangement.',
        quote: { to: 'Sharma' },
        more: { label: 'Transport in Sharma', href: '/locations/sharma/' },
    },
    {
        key: 'oxagon', name: 'Oxagon',
        what: 'NEOM’s industrial and port area, near Duba.',
        transport: 'Accommodation ↔ worksite runs, airport transfers and scheduled business trips.',
        access: 'Industrial and port zones are controlled. Give us the company, gate and approved drop-off point.',
        quote: { to: 'Oxagon', notes: 'Oxagon - company / gate / approved drop-off point: ' },
        more: { label: 'Transport in Duba', href: '/locations/duba/' },
    },
    {
        key: 'line', name: 'The Line',
        what: 'A NEOM development area - not a public tourist destination.',
        transport: 'For approved visitors, project teams, contractors and authorised business travel only.',
        access: 'Access and pickup arrangements depend on current project requirements. We cannot arrange entry.',
        quote: { to: 'NEOM - The Line project area', notes: 'Approved destination / reporting point: ' },
        more: null,
    },
    {
        key: 'trojena', name: 'Trojena',
        what: 'NEOM’s mountain area, inland from the coast.',
        transport: 'Approved project travel to designated pickup points. Mountain roads and weather can add time.',
        access: 'Controlled access - confirm your designated pickup/drop-off point before booking.',
        quote: { to: 'NEOM - Trojena area', notes: 'Approved destination / designated pickup point: ' },
        more: null,
    },
    {
        key: 'communities', name: 'Project communities',
        what: 'Staff and contractor accommodation across the region.',
        transport: 'Airport ↔ accommodation, and accommodation ↔ site on a schedule.',
        access: 'Many are access-controlled. Drop-off may be at a reception or security point rather than your room.',
        quote: { to: 'NEOM project community', notes: 'Community name / reception point: ' },
        more: null,
    },
    {
        key: 'duba', name: 'Duba',
        what: 'The coastal town and port south of the NEOM coast road.',
        transport: 'A regular start or end point for trips to Sharma, Oxagon and back to Tabuk.',
        access: 'Public town - normal door-to-door pickups.',
        quote: { to: 'Duba' },
        more: { label: 'Transport in Duba', href: '/locations/duba/' },
    },
];

// "Where in NEOM are you going?" - region areas with transport and access notes.
export default function NeomRegionExplorer() {
    const [k, setK] = useState('bay');
    const a = AREAS.find((x) => x.key === k)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
            <div role="tablist" aria-label="NEOM areas" className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {AREAS.map((x) => (
                    <button
                        key={x.key}
                        role="tab"
                        id={`nr-${x.key}`}
                        aria-selected={x.key === k}
                        aria-controls="nr-panel"
                        onClick={() => setK(x.key)}
                        className={`rounded-xl border px-4 py-3.5 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${x.key === k ? 'border-[#0a0f14] bg-[#0a0f14] text-white' : 'border-slate-200 bg-white text-[#0a0f14] hover:border-cyan-600'}`}
                    >
                        {x.name}
                    </button>
                ))}
            </div>
            <div id="nr-panel" role="tabpanel" aria-labelledby={`nr-${a.key}`} key={a.key} className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <h3 className="mb-2 text-[#0a0f14]">{a.name}</h3>
                <p className="text-slate-600 mb-5">{a.what}</p>
                <dl className="space-y-4 mb-7">
                    <div>
                        <dt className="font-mono text-xs font-bold tracking-widest text-cyan-700 mb-1">TRANSPORT</dt>
                        <dd className="text-slate-800">{a.transport}</dd>
                    </div>
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                        <dt className="font-mono text-xs font-bold tracking-widest text-amber-800 mb-1 flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" /> ACCESS</dt>
                        <dd className="text-sm text-amber-950">{a.access}</dd>
                    </div>
                </dl>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/booking/?${new URLSearchParams(a.quote as Record<string, string>).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 py-3.5 font-bold text-white hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2">
                        Request {a.name.split(' &')[0]} transfer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {a.more && <Link href={a.more.href} className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-cyan-800 hover:underline">{a.more.label}</Link>}
                </div>
            </div>
        </div>
    );
}
