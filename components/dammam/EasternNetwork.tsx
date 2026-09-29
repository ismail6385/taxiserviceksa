'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, Briefcase, Factory, Globe2, Route, Landmark } from 'lucide-react';

// Schematic positions only (not to scale): north is up, the Gulf coast is to the east.
const HUB = { x: 470, y: 250 };

type Dest = {
    key: string;
    name: string;
    kind: string;
    icon: typeof Plane;
    node: { x: number; y: number };
    path: string;
    labelDx?: number;
    labelAnchor?: 'start' | 'end' | 'middle';
    approx: string;
    text: string;
    booking: { from: string; to: string };
    more: { label: string; href: string };
};

const DESTS: Dest[] = [
    {
        key: 'airport',
        name: 'DMM Airport',
        kind: 'Airport transfer',
        icon: Plane,
        node: { x: 330, y: 150 },
        path: 'M470 250 C 430 220, 380 190, 330 150',
        labelAnchor: 'end',
        labelDx: -16,
        approx: 'About 35–40 km from central Dammam, typically 30–40 minutes by road.',
        text: 'King Fahd International Airport sits north-west of Dammam. Arrivals to hotels and homes in Dammam, Al Khobar, Dhahran or Jubail, and hotel pickups for departing flights.',
        booking: { from: 'King Fahd International Airport (DMM)', to: '' },
        more: { label: 'Dammam Airport transfers', href: '/dammam-airport-taxi/' },
    },
    {
        key: 'jubail',
        name: 'Jubail',
        kind: 'Industrial & intercity transfer',
        icon: Factory,
        node: { x: 380, y: 50 },
        path: 'M470 250 C 470 180, 430 110, 380 50',
        labelAnchor: 'end',
        labelDx: -16,
        approx: 'Roughly 95–110 km up the coast, often around an hour to 1 hour 15 minutes.',
        text: 'Jubail Industrial City and Jubail town for contractors, engineers and visiting teams - from Dammam, from DMM Airport, or as a return trip at the end of the day.',
        booking: { from: 'Dammam', to: 'Jubail Industrial City' },
        more: { label: 'Jubail Industrial City transfers', href: '/locations/jubail/industrial-city/' },
    },
    {
        key: 'dhahran',
        name: 'Dhahran',
        kind: 'Business & corporate transfer',
        icon: Briefcase,
        node: { x: 420, y: 345 },
        path: 'M470 250 C 455 285, 440 315, 420 345',
        labelAnchor: 'end',
        labelDx: -16,
        approx: 'A short cross-town journey; time depends on the exact addresses and traffic.',
        text: 'Offices, hotels and meetings in Dhahran, and connections to and from DMM Airport. We drive to the public entrance or reception point you give us.',
        booking: { from: 'Dammam', to: 'Dhahran' },
        more: { label: 'Transport in Dhahran', href: '/locations/dhahran/' },
    },
    {
        key: 'khobar',
        name: 'Al Khobar',
        kind: 'City & hotel transfer',
        icon: Building2,
        node: { x: 520, y: 360 },
        path: 'M470 250 C 490 285, 505 320, 520 360',
        labelAnchor: 'start',
        labelDx: 16,
        approx: 'About 20–25 km from central Dammam, usually 20–30 minutes.',
        text: 'Hotels, the Corniche, shopping and meetings in Al Khobar - and the Saudi side of the King Fahd Causeway, just south of the city.',
        booking: { from: 'Dammam', to: 'Al Khobar' },
        more: { label: 'Transport in Al Khobar', href: '/locations/al-khobar/' },
    },
    {
        key: 'bahrain',
        name: 'Bahrain',
        kind: 'Cross-border transfer',
        icon: Globe2,
        node: { x: 690, y: 410 },
        path: 'M470 250 C 495 300, 515 350, 540 395 L 690 410',
        labelAnchor: 'middle',
        approx: 'The King Fahd Causeway itself is about 25 km. Border time varies and is not something anyone can promise.',
        text: 'Dammam or Al Khobar across the King Fahd Causeway to your address in Bahrain, where our vehicle and driver are permitted to cross. Passengers carry their own valid travel documents.',
        booking: { from: 'Dammam', to: 'Bahrain' },
        more: { label: 'Dammam to Bahrain transfer', href: '/routes/dammam-bahrain/' },
    },
    {
        key: 'hofuf',
        name: 'Al Ahsa / Hofuf',
        kind: 'Intercity transfer',
        icon: Landmark,
        node: { x: 360, y: 480 },
        path: 'M470 250 C 440 330, 400 420, 360 480',
        labelAnchor: 'end',
        labelDx: -16,
        approx: 'About 150 km south-west, often around 1.5–2 hours.',
        text: 'Private transfers to the Al Ahsa oasis and Hofuf, for family visits, business or a day out.',
        booking: { from: 'Dammam', to: 'Hofuf, Al Ahsa' },
        more: { label: 'Transport in Hofuf', href: '/locations/hofuf/' },
    },
    {
        key: 'riyadh',
        name: 'Riyadh',
        kind: 'Long-distance transfer',
        icon: Route,
        node: { x: 70, y: 330 },
        path: 'M470 250 C 360 260, 200 300, 70 330',
        labelAnchor: 'middle',
        approx: 'About 400 km inland, typically 4–4.5 hours of driving before stops.',
        text: 'One car from your door in the Eastern Province to a Riyadh hotel, office or airport, with stops when you ask for them.',
        booking: { from: 'Dammam', to: 'Riyadh' },
        more: { label: 'Dammam to Riyadh transfer', href: '/routes/dammam-riyadh/' },
    },
];

// "Where are you travelling?" - schematic Eastern Province network. Choosing a
// destination highlights its route from Dammam and shows the matching service.
export default function EasternNetwork() {
    const [active, setActive] = useState('airport');
    const d = DESTS.find((x) => x.key === active)!;

    const params = new URLSearchParams();
    if (d.booking.from) params.set('from', d.booking.from);
    if (d.booking.to) params.set('to', d.booking.to);
    const quoteHref = `/booking/?${params.toString()}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-start">
            <div>
                {/* Map (decorative; the buttons below carry the interaction) */}
                <div className="relative rounded-3xl bg-[#0a1b29] ring-1 ring-white/10 overflow-hidden">
                    <svg viewBox="0 0 800 520" className="w-full h-auto" role="img" aria-label={`Schematic map of routes from Dammam. Highlighted: Dammam to ${d.name}.`}>
                        <defs>
                            <linearGradient id="en-sea" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0" stopColor="#0e3a4f" stopOpacity="0" />
                                <stop offset="1" stopColor="#0e3a4f" stopOpacity="0.9" />
                            </linearGradient>
                        </defs>
                        {/* Gulf */}
                        <path d="M560 0 C 520 90, 540 170, 520 230 S 590 330, 600 420 S 560 480, 580 520 L 800 520 L 800 0 Z" fill="url(#en-sea)" />
                        <text x="740" y="120" textAnchor="end" className="fill-cyan-200/40" fontSize="15" fontStyle="italic" letterSpacing="3">ARABIAN GULF</text>
                        {/* Bahrain island */}
                        <path d="M672 380 C 690 370, 712 378, 712 400 C 714 428, 700 450, 684 446 C 670 440, 664 400, 672 380 Z" fill="#1d4d5f" opacity="0.8" />
                        {/* Causeway */}
                        <path d="M540 395 L 672 408" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="3" strokeDasharray="2 6" />

                        {/* All routes, faint */}
                        {DESTS.map((x) => (
                            <path key={x.key} d={x.path} fill="none" stroke="#ffffff" strokeOpacity={x.key === active ? 0 : 0.14} strokeWidth="2" />
                        ))}
                        {/* Active route */}
                        <path d={d.path} fill="none" stroke="#2dd4bf" strokeOpacity="0.25" strokeWidth="10" strokeLinecap="round" />
                        <path key={d.key} d={d.path} fill="none" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" pathLength={1} className="route-draw" />

                        {/* Nodes */}
                        {DESTS.map((x) => {
                            const on = x.key === active;
                            return (
                                <g key={x.key}>
                                    <circle cx={x.node.x} cy={x.node.y} r={on ? 11 : 7} fill={on ? '#5eead4' : '#0a1b29'} stroke={on ? '#ccfbf1' : '#94a3b8'} strokeWidth="2" />
                                    <text
                                        x={x.node.x + (x.labelDx ?? 0)}
                                        y={x.labelAnchor === 'middle' ? x.node.y + 38 : x.node.y + 7}
                                        textAnchor={x.labelAnchor ?? 'start'}
                                        fontSize="22"
                                        fontWeight={on ? 700 : 500}
                                        className={on ? 'fill-white' : 'fill-slate-400'}
                                    >
                                        {x.name}
                                    </text>
                                </g>
                            );
                        })}
                        {/* Hub */}
                        <circle cx={HUB.x} cy={HUB.y} r="16" fill="#f5d08a" />
                        <circle cx={HUB.x} cy={HUB.y} r="26" fill="none" stroke="#f5d08a" strokeOpacity="0.35" strokeWidth="2" />
                        <text x={HUB.x + 34} y={HUB.y + 6} fontSize="24" fontWeight="800" className="fill-[#f5d08a]">Dammam</text>
                    </svg>
                </div>
                <p className="mt-2 text-xs text-slate-400">Schematic map, not to scale.</p>

                <div role="group" aria-label="Choose a destination" className="mt-4 flex flex-wrap gap-2">
                    {DESTS.map((x) => (
                        <button
                            key={x.key}
                            type="button"
                            aria-pressed={active === x.key}
                            onClick={() => setActive(x.key)}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${active === x.key ? 'border-teal-300 bg-teal-300 text-[#07141f]' : 'border-white/20 text-slate-200 hover:border-teal-300/70'}`}
                        >
                            <x.icon className="w-4 h-4" aria-hidden="true" />
                            {x.name}
                        </button>
                    ))}
                </div>
            </div>

            <div aria-live="polite" key={d.key} className="rounded-3xl bg-white text-slate-900 p-7 md:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">{d.kind}</p>
                <h3 className="mb-3 flex items-center gap-3">
                    <d.icon className="w-6 h-6 text-teal-700 shrink-0" aria-hidden="true" />
                    {d.key === 'airport' ? 'DMM Airport' : `Dammam → ${d.name}`}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">{d.text}</p>
                <p className="text-sm text-slate-600 border-l-2 border-teal-500 pl-4 mb-7">{d.approx}</p>
                <div className="flex flex-col gap-3">
                    <Link
                        href={quoteHref}
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#07141f] px-5 py-4 text-center font-bold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                    >
                        Get a quote for this trip
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    <Link href={d.more.href} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-center text-sm font-bold text-slate-800 hover:border-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                        {d.more.label} <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
