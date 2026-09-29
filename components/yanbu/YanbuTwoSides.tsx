'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';

const SIDES = {
    bahr: {
        name: 'Yanbu Al Bahr',
        tag: 'The old town and the coast',
        points: [
            'Where most city hotels, the waterfront and older neighbourhoods are',
            'Close to Yanbu Airport - often a short transfer',
            'Trips here are usually leisure, family visits, dinners and shopping',
            'Good base for beach and dive-centre days along the Red Sea',
        ],
        cta: { label: 'Book a Yanbu Al Bahr transfer', params: { to: 'Yanbu Al Bahr' } },
    },
    rc: {
        name: 'Yanbu Industrial City',
        tag: 'The planned industrial city further south',
        points: [
            'Managed by the Royal Commission, with industrial plants and residential districts',
            'Where most business and contractor travel ends up',
            'Hotel ↔ work location runs, often at shift or meeting times',
            'Airport to site transfers for visiting engineers and consultants',
        ],
        cta: { label: 'Book an Industrial City transfer', params: { to: 'Yanbu Industrial City' } },
        link: { label: 'Yanbu Industrial City in detail', href: '/locations/yanbu/industrial-city/' },
    },
} as const;
type Side = keyof typeof SIDES;

// Split view of Yanbu's two halves with a schematic map; the toggle switches the detail panel.
export default function YanbuTwoSides() {
    const [side, setSide] = useState<Side>('bahr');
    const s = SIDES[side];
    const on = (k: Side) => side === k;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div className="rounded-3xl overflow-hidden bg-[#0a2540]">
                <svg viewBox="0 0 640 420" className="w-full h-auto" role="img" aria-label="Schematic map: Yanbu Airport just north of Yanbu Al Bahr, and Yanbu Industrial City about 20 to 25 km along the coast to the south-east.">
                    <defs>
                        <linearGradient id="ys-sea" x1="0" y1="1" x2="0.6" y2="0">
                            <stop offset="0" stopColor="#1d6fa3" />
                            <stop offset="1" stopColor="#0f5c8c" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    {/* Red Sea to the south-west */}
                    <path d="M0 170 C 110 190, 170 240, 260 260 S 440 330, 520 380 L 560 420 L 0 420 Z" fill="url(#ys-sea)" />
                    <text x="40" y="360" className="fill-sky-100/50" fontSize="16" fontStyle="italic" letterSpacing="4">RED SEA</text>
                    {/* Road between the two sides */}
                    <path d="M210 175 C 300 210, 420 250, 520 300" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="12" strokeLinecap="round" />
                    <path key={side} d="M210 175 C 300 210, 420 250, 520 300" fill="none" stroke="#e8765a" strokeWidth="3" strokeLinecap="round" strokeDasharray="1" pathLength={1} className="route-draw" />
                    <text x="370" y="205" fontSize="15" className="fill-sky-100/70">≈ 20–25 km</text>
                    {/* Airport */}
                    <path d="M200 110 L 200 70" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="3 5" />
                    <circle cx="200" cy="62" r="8" fill="#0a2540" stroke="#bae6fd" strokeWidth="2" />
                    <text x="216" y="67" fontSize="16" fontWeight="600" className="fill-sky-100">YNB Airport</text>
                    {/* Al Bahr */}
                    <circle cx="210" cy="175" r={on('bahr') ? 22 : 14} fill={on('bahr') ? '#efe3cc' : '#0a2540'} stroke="#efe3cc" strokeWidth="3" />
                    <text x="150" y="140" fontSize="19" fontWeight={on('bahr') ? 800 : 500} textAnchor="middle" className={on('bahr') ? 'fill-white' : 'fill-slate-400'}>Yanbu Al Bahr</text>
                    {/* Industrial City */}
                    <g>
                        <rect x={on('rc') ? 498 : 506} y={on('rc') ? 278 : 286} width={on('rc') ? 44 : 28} height={on('rc') ? 44 : 28} rx="6" fill={on('rc') ? '#e8765a' : '#0a2540'} stroke="#e8765a" strokeWidth="3" />
                        <text x="520" y="360" fontSize="19" fontWeight={on('rc') ? 800 : 500} textAnchor="middle" className={on('rc') ? 'fill-white' : 'fill-slate-400'}>Industrial City</text>
                    </g>
                </svg>
                <p className="px-5 pb-4 text-xs text-sky-100/50">Schematic, not to scale.</p>
            </div>

            <div>
                <div role="tablist" aria-label="Part of Yanbu" className="inline-grid grid-cols-2 gap-1 rounded-2xl bg-[#e6dccb] p-1 mb-6 w-full sm:w-auto">
                    {(Object.keys(SIDES) as Side[]).map((k) => (
                        <button
                            key={k}
                            role="tab"
                            id={`ys-${k}`}
                            aria-selected={on(k)}
                            aria-controls="ys-panel"
                            onClick={() => setSide(k)}
                            className={`rounded-xl px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${on(k) ? 'bg-[#0a2540] text-white' : 'text-[#0a2540] hover:bg-white/60'}`}
                        >
                            {SIDES[k].name}
                        </button>
                    ))}
                </div>
                <div id="ys-panel" role="tabpanel" aria-labelledby={`ys-${side}`} key={side} className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#e8765a] mb-2">{s.tag}</p>
                    <h3 className="mb-4 text-[#0a2540]">{s.name}</h3>
                    <ul className="space-y-3 mb-6">
                        {s.points.map((p) => (
                            <li key={p} className="flex gap-3 text-slate-700">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#0f5c8c] shrink-0" aria-hidden="true" />
                                {p}
                            </li>
                        ))}
                    </ul>
                    {side === 'rc' && (
                        <p className="text-sm text-slate-600 flex gap-2 mb-6 rounded-xl bg-white border border-[#e6dccb] p-4">
                            <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#0f5c8c]" aria-hidden="true" />
                            Access to some industrial or restricted facilities may depend on the destination&apos;s own entry requirements. Confirm the exact pickup/drop-off point when booking.
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={`/booking/?${new URLSearchParams(s.cta.params).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a2540] px-5 py-3.5 font-bold text-white hover:bg-[#071a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2">
                            {s.cta.label} <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                        {'link' in s && (
                            <Link href={s.link.href} className="inline-flex items-center justify-center px-4 py-3 font-bold text-[#0f5c8c] hover:underline">{s.link.label}</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
