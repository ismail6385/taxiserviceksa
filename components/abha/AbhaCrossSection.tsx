'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Illustrative west-to-east cross-section. Heights are relative, not measured.
const NODES = [
    {
        key: 'rijal',
        name: 'Rijal Almaa',
        x: 70, y: 250,
        type: 'Heritage village · below the escarpment',
        text: 'West of Abha and far lower down - roughly 50–60 km, often 60–90 minutes on winding descent roads. Usually booked as a return, or combined with Soudah.',
        quote: { from: 'Abha', to: 'Rijal Almaa', notes: 'Return trip / waiting time: ' },
        more: null as null | { label: string; href: string },
    },
    {
        key: 'soudah',
        name: 'Soudah',
        x: 230, y: 40,
        type: 'Mountain destination · the high point',
        text: 'Around 20 km north-west of Abha as the crow flies, up on the highest ridges. Hotels and chalets are spread out, so send the exact property or viewpoint.',
        quote: { from: 'Abha', to: 'Al Soudah' },
        more: { label: 'Abha → Soudah transfers', href: '/locations/abha/al-soudah/' },
    },
    {
        key: 'abha',
        name: 'Abha',
        x: 390, y: 95,
        type: 'City · your base',
        text: 'Hotels, the city centre and residential districts sit high on the plateau. Most mountain trips and intercity drives start here.',
        quote: { from: 'Abha' },
        more: null,
    },
    {
        key: 'ahb',
        name: 'AHB Airport',
        x: 540, y: 120,
        type: 'Airport · on the plateau between the two cities',
        text: 'About 18 km from central Abha and roughly 20 km by road from Khamis Mushait. From here the car heads west to Abha and the mountains, or east to Khamis.',
        quote: { from: 'Abha International Airport (AHB)' },
        more: null,
    },
    {
        key: 'khamis',
        name: 'Khamis Mushait',
        x: 690, y: 125,
        type: 'Neighbouring city · regional connection',
        text: 'Abha’s larger neighbour to the east, on the same plateau. Hotel, family and business trips between the two are some of the most frequent in the region.',
        quote: { from: 'Abha', to: 'Khamis Mushait' },
        more: { label: 'Transport in Khamis Mushait', href: '/locations/khamis-mushait/' },
    },
];

const PROFILE = 'M0 300 L 0 270 C 40 262, 60 255, 70 250 C 120 230, 160 120, 200 70 C 215 50, 225 42, 230 40 C 245 38, 270 60, 300 80 C 330 95, 360 96, 390 95 C 450 100, 500 118, 540 120 C 600 122, 650 124, 690 125 C 730 126, 770 128, 800 130 L 800 300 Z';

// "From Airport to Highlands" - clickable illustrative cross-section of the Abha region.
export default function AbhaCrossSection() {
    const [k, setK] = useState('soudah');
    const n = NODES.find((x) => x.key === k)!;

    return (
        <div>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#dfe8e3] to-[#f3f1ea]">
                <svg viewBox="0 0 800 300" className="w-full h-auto" role="img" aria-label="Illustrative cross-section from Rijal Almaa in the west, up to Soudah, across Abha and the airport to Khamis Mushait in the east. Not to scale.">
                    <defs>
                        <linearGradient id="ab-land" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#4d7c5a" />
                            <stop offset="1" stopColor="#1d3a2e" />
                        </linearGradient>
                    </defs>
                    {/* contour hints */}
                    {[60, 100, 140, 180, 220].map((y) => (
                        <path key={y} d={`M0 ${y} H 800`} stroke="#1d3a2e" strokeOpacity="0.06" strokeDasharray="2 8" />
                    ))}
                    <path d={PROFILE} fill="url(#ab-land)" />
                    {/* road along the surface */}
                    <path d="M70 250 C 120 230, 160 120, 200 70 C 215 50, 225 42, 230 40 C 245 38, 270 60, 300 80 C 330 95, 360 96, 390 95 C 450 100, 500 118, 540 120 C 600 122, 650 124, 690 125" fill="none" stroke="#e0a526" strokeWidth="3" strokeLinecap="round" strokeDasharray="1" pathLength={1} className="route-draw" />
                    {NODES.map((x) => {
                        const on = x.key === k;
                        return (
                            <g key={x.key}>
                                <circle cx={x.x} cy={x.y} r={on ? 11 : 7} fill={on ? '#e0a526' : '#f3f1ea'} stroke="#16231f" strokeWidth="2.5" />
                                <text x={x.key === 'rijal' ? x.x - 40 : x.x} y={x.key === 'rijal' ? x.y + 32 : x.y - 18} textAnchor={x.key === 'rijal' ? 'start' : 'middle'} fontSize="18" fontWeight={on ? 800 : 600} fill={x.key === 'rijal' ? '#f3f1ea' : '#16231f'}>{x.name}</text>
                            </g>
                        );
                    })}
                    <text x="12" y="22" fontSize="12" fill="#16231f" fillOpacity="0.5">WEST</text>
                    <text x="788" y="292" fontSize="12" fill="#e9efec" fillOpacity="0.8" textAnchor="end">EAST</text>
                </svg>
                <p className="absolute top-3 right-4 text-[11px] text-[#16231f]/60">Illustrative - not to scale</p>
            </div>

            <div role="group" aria-label="Choose a place" className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {NODES.map((x) => (
                    <button
                        key={x.key}
                        type="button"
                        aria-pressed={x.key === k}
                        onClick={() => setK(x.key)}
                        className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] ${x.key === k ? 'border-[#16231f] bg-[#16231f] text-white' : 'border-[#16231f]/20 text-[#16231f] hover:border-[#16231f]'}`}
                    >
                        {x.name}
                    </button>
                ))}
            </div>

            <div aria-live="polite" key={n.key} className="mt-4 rounded-3xl bg-white border border-[#16231f]/10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 items-center animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a10] mb-2">{n.type}</p>
                    <h3 className="mb-2 text-[#16231f]">{n.name}</h3>
                    <p className="text-slate-700 leading-relaxed">{n.text}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href={`/booking/?${new URLSearchParams(n.quote as Record<string, string>).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#16231f] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526] focus-visible:ring-offset-2">
                        Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {n.more && <Link href={n.more.href} className="text-center text-sm font-bold text-[#2f5d46] hover:underline py-2">{n.more.label}</Link>}
                </div>
            </div>
        </div>
    );
}
