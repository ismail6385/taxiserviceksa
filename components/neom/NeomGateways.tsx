'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PlaneLanding, Plane, HardHat, BedDouble, Waves } from 'lucide-react';

type Gateway = {
    key: string;
    code: string;
    label: string;
    sub: string;
    icon: typeof Plane;
    angle: number;
    type: string;
    text: string;
    send: string[];
    quote: Record<string, string>;
    more?: { label: string; href: string };
};

const GATEWAYS: Gateway[] = [
    {
        key: 'num', code: 'NUM', label: 'Flying into NEOM', sub: 'NEOM Bay Airport', icon: PlaneLanding, angle: -150,
        type: 'Airport transfer',
        text: 'NEOM Bay Airport is at Sharma on the coast. From the terminal we drive to your accommodation or to the pickup/drop-off point your destination has confirmed.',
        send: ['Flight number and arrival time', 'Accommodation or site name', 'Confirmed drop-off point, if your destination uses one'],
        quote: { from: 'NEOM Bay Airport (NUM)' },
    },
    {
        key: 'tuu', code: 'TUU', label: 'Flying via Tabuk', sub: 'Tabuk Airport → NEOM', icon: Plane, angle: 150,
        type: 'Long-distance transfer',
        text: 'Tabuk has more flight options, but NEOM destinations are a long drive west and south-west. Journey time depends on the exact destination, route conditions, checkpoints and access arrangements.',
        send: ['Flight number and arrival time', 'Exact NEOM destination', 'Whether you need to stop or overnight in Tabuk'],
        quote: { from: 'Tabuk Airport (TUU)', to: 'NEOM' },
        more: { label: 'Tabuk → NEOM transfer', href: '/routes/tabuk-neom/' },
    },
    {
        key: 'project', code: 'SITE', label: 'Project travel', sub: 'Project / contractor transfer', icon: HardHat, angle: -40,
        type: 'Project transfer',
        text: 'For project and construction destinations, the site decides who can enter and where vehicles may stop. We plan the transfer to the approved pickup/drop-off point you give us.',
        send: ['Project or site name', 'Approved pickup/drop-off point', 'Host or reporting details relevant to access'],
        quote: { to: 'NEOM project site', notes: 'Project / site name and approved drop-off point: ' },
    },
    {
        key: 'stay', code: 'STAY', label: 'Accommodation', sub: 'Hotel, camp or pickup point', icon: BedDouble, angle: 40,
        type: 'Accommodation transfer',
        text: 'Hotels, staff accommodation and designated meeting points each have their own arrangements. Give us the property name and any instructions it has sent you.',
        send: ['Property name', 'Check-in or reporting time', 'Any designated meeting point'],
        quote: { to: 'NEOM accommodation', notes: 'Accommodation name / meeting point: ' },
    },
    {
        key: 'coast', code: 'COAST', label: 'Northwest coast', sub: 'Duba / Sharma', icon: Waves, angle: 180,
        type: 'Regional transfer',
        text: 'Duba and Sharma sit along the coast road - Duba is roughly 100 km from Sharma. Useful starting points for trips into the NEOM region or back towards Tabuk.',
        send: ['Pickup address in Duba or Sharma', 'Destination', 'Return date, if needed'],
        quote: { from: 'Duba' },
        more: { label: 'Transport in Duba', href: '/locations/duba/' },
    },
];

// "Where are you starting?" - five gateways around NEOM; the chosen one explains the journey and what to send.
export default function NeomGateways() {
    const [k, setK] = useState('num');
    const g = GATEWAYS.find((x) => x.key === k)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-start">
            <div>
                {/* Hub diagram (decorative; the buttons below carry the interaction) */}
                <div className="relative hidden sm:block rounded-3xl border border-cyan-400/15 bg-[#0d151c] p-6 mb-4">
                    <svg viewBox="0 0 400 260" className="w-full h-auto" aria-hidden="true">
                        <defs>
                            <pattern id="ng-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M20 0 H0 V20" fill="none" stroke="#22d3ee" strokeOpacity="0.06" />
                            </pattern>
                        </defs>
                        <rect width="400" height="260" fill="url(#ng-grid)" />
                        {GATEWAYS.map((x) => {
                            const rad = (x.angle * Math.PI) / 180;
                            const nx = 200 + Math.cos(rad) * 150;
                            const ny = 130 + Math.sin(rad) * 95;
                            const on = x.key === k;
                            return (
                                <g key={x.key}>
                                    <line x1="200" y1="130" x2={nx} y2={ny} stroke={on ? '#22d3ee' : '#ffffff'} strokeOpacity={on ? 1 : 0.15} strokeWidth={on ? 2 : 1} strokeDasharray={on ? undefined : '3 5'} />
                                    <rect x={nx - 28} y={ny - 13} width="56" height="26" rx="6" fill={on ? '#22d3ee' : '#0a0f14'} stroke="#22d3ee" strokeOpacity={on ? 1 : 0.35} />
                                    <text x={nx} y={ny + 4} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700" fill={on ? '#0a0f14' : '#a5f3fc'}>{x.code}</text>
                                </g>
                            );
                        })}
                        <rect x="165" y="112" width="70" height="36" rx="8" fill="#0a0f14" stroke="#ffffff" strokeOpacity="0.8" />
                        <text x="200" y="135" textAnchor="middle" fontSize="15" fontWeight="800" letterSpacing="3" fill="#ffffff">NEOM</text>
                    </svg>
                    <p className="text-[11px] text-slate-500 mt-2">Diagram, not a map.</p>
                </div>
                <div role="tablist" aria-label="Where are you starting?" className="flex sm:grid sm:grid-cols-2 gap-2 overflow-x-auto snap-x pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {GATEWAYS.map((x) => {
                        const on = x.key === k;
                        return (
                            <button
                                key={x.key}
                                role="tab"
                                id={`ng-${x.key}`}
                                aria-selected={on}
                                aria-controls="ng-panel"
                                onClick={() => setK(x.key)}
                                className={`snap-start shrink-0 w-44 sm:w-auto flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${on ? 'border-cyan-300 bg-cyan-300/10 text-white' : 'border-white/10 text-slate-300 hover:border-white/30'}`}
                            >
                                <x.icon className={`w-5 h-5 shrink-0 ${on ? 'text-cyan-300' : 'text-slate-500'}`} aria-hidden="true" />
                                <span>
                                    <span className="block text-sm font-bold">{x.label}</span>
                                    <span className="block text-xs text-slate-400">{x.sub}</span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div id="ng-panel" role="tabpanel" aria-labelledby={`ng-${g.key}`} key={g.key} className="rounded-3xl bg-white text-[#0a0f14] p-6 md:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="font-mono text-xs font-bold tracking-widest text-cyan-700 mb-2">{g.code} · {g.type.toUpperCase()}</p>
                <h3 className="mb-3">{g.label}</h3>
                <p className="text-slate-700 leading-relaxed mb-5">{g.text}</p>
                <p className="text-sm font-bold mb-2">Send us</p>
                <ul className="space-y-1.5 mb-7 text-sm text-slate-700">
                    {g.send.map((s) => (
                        <li key={s} className="flex gap-2"><span className="mt-2 w-1.5 h-1.5 bg-cyan-600 shrink-0" aria-hidden="true" />{s}</li>
                    ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/booking/?${new URLSearchParams(g.quote).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a0f14] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2">
                        Request NEOM Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {g.more && <Link href={g.more.href} className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-cyan-800 hover:underline">{g.more.label}</Link>}
                </div>
            </div>
        </div>
    );
}
