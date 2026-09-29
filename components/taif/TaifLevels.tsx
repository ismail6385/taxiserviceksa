'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Illustrative "levels" diagram: plateau (city, airport), ridges (Al Hada, Al Shafa, cable car), lowlands (Makkah, Jeddah).
const NODES = [
    { key: 'taif', name: 'Taif city', x: 330, y: 150, level: 'Plateau', text: 'Hotels, the city centre and the rose-growing areas sit on the plateau. Most trips on this page start here.', quote: { from: 'Taif' }, more: null as null | { label: string; href: string } },
    { key: 'tif', name: 'TIF Airport', x: 480, y: 165, level: 'Plateau', text: 'About 27 km north-east of the city centre. Arrivals head into Taif, up to the mountains, or straight on to Makkah or Jeddah.', quote: { from: 'Taif International Airport (TIF)' }, more: null },
    { key: 'hada', name: 'Al Hada', x: 190, y: 70, level: 'Ridge', text: 'Roughly 20 km west of the city, on the escarpment edge - resorts, viewpoints and the cable-car area.', quote: { from: 'Taif', to: 'Al Hada' }, more: { label: 'Al Hada transfer', href: '/locations/taif/al-hada/' } },
    { key: 'shafa', name: 'Al Shafa', x: 250, y: 40, level: 'Ridge', text: 'Around 25 km south-west - higher ground with farms, viewpoints and mountain stays.', quote: { from: 'Taif', to: 'Al Shafa' }, more: { label: 'Al Shafa transport', href: '/locations/taif/al-shafa/' } },
    { key: 'makkah', name: 'Makkah', x: 110, y: 240, level: 'Lowlands', text: 'Roughly 85–100 km down the mountain, often 1.5–2 hours depending on the route and traffic.', quote: { from: 'Taif', to: 'Makkah' }, more: { label: 'Makkah to Taif route', href: '/routes/makkah-taif/' } },
    { key: 'jeddah', name: 'Jeddah', x: 30, y: 200, level: 'Lowlands', text: 'Roughly 167–200 km, often 2–2.5 hours. The route used may depend on current road conditions and access.', quote: { from: 'Taif', to: 'Jeddah' }, more: { label: 'Private Jeddah transfer', href: '/routes/taif-jeddah/' } },
];

export default function TaifLevels() {
    const [k, setK] = useState('hada');
    const n = NODES.find((x) => x.key === k)!;
    const taif = NODES[0];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 items-start">
            <div>
                <div className="relative rounded-3xl overflow-hidden bg-[#2a1a22]">
                    <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label={`Illustrative diagram of travel levels around Taif. Highlighted: ${n.name}.`}>
                        {/* level bands */}
                        <rect x="0" y="0" width="600" height="95" fill="#ffffff" fillOpacity="0.04" />
                        <rect x="0" y="95" width="600" height="95" fill="#ffffff" fillOpacity="0.07" />
                        <rect x="0" y="190" width="600" height="90" fill="#ffffff" fillOpacity="0.02" />
                        <text x="590" y="20" textAnchor="end" fontSize="11" letterSpacing="3" fill="#f3c6d6" fillOpacity="0.6">RIDGES</text>
                        <text x="590" y="115" textAnchor="end" fontSize="11" letterSpacing="3" fill="#f3c6d6" fillOpacity="0.6">PLATEAU</text>
                        <text x="590" y="210" textAnchor="end" fontSize="11" letterSpacing="3" fill="#f3c6d6" fillOpacity="0.6">LOWLANDS</text>
                        {NODES.slice(1).map((x) => {
                            const on = x.key === k;
                            const d = `M${taif.x} ${taif.y} C ${(taif.x + x.x) / 2} ${taif.y}, ${(taif.x + x.x) / 2} ${x.y}, ${x.x} ${x.y}`;
                            return (
                                <g key={x.key}>
                                    <path d={d} fill="none" stroke={on ? '#f472b6' : '#ffffff'} strokeOpacity={on ? 1 : 0.18} strokeWidth={on ? 3 : 1.5} strokeLinecap="round" />
                                    {on && <path key={`draw-${x.key}`} d={d} fill="none" stroke="#fde2ea" strokeWidth="1.5" strokeLinecap="round" pathLength={1} className="route-draw" />}
                                </g>
                            );
                        })}
                        {NODES.map((x) => {
                            const on = x.key === k;
                            return (
                                <g key={x.key}>
                                    <circle cx={x.x} cy={x.y} r={on ? 10 : x.key === 'taif' ? 9 : 6} fill={on ? '#f472b6' : x.key === 'taif' ? '#fde2ea' : '#2a1a22'} stroke="#fde2ea" strokeWidth="2" />
                                    <text x={x.x + (x.x < 60 ? 12 : 0)} y={x.y - 15} textAnchor={x.x < 60 ? 'start' : 'middle'} fontSize="15" fontWeight={on ? 800 : 600} fill="#ffffff" fillOpacity={on ? 1 : 0.75}>{x.name}</text>
                                </g>
                            );
                        })}
                    </svg>
                    <p className="absolute bottom-2 left-4 text-[11px] text-white/40">Illustrative - not a map</p>
                </div>
                <div role="group" aria-label="Choose a place" className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                    {NODES.map((x) => (
                        <button key={x.key} type="button" aria-pressed={x.key === k} onClick={() => setK(x.key)} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${x.key === k ? 'border-[#2a1a22] bg-[#2a1a22] text-white' : 'border-[#2a1a22]/20 text-[#2a1a22] hover:border-[#2a1a22]'}`}>
                            {x.name}
                        </button>
                    ))}
                </div>
            </div>
            <div aria-live="polite" key={n.key} className="rounded-3xl bg-white border border-[#2a1a22]/10 p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#be185d] mb-2">{n.level}</p>
                <h3 className="mb-3 text-[#2a1a22]">{n.key === 'taif' ? 'Taif city' : `Taif → ${n.name}`}</h3>
                <p className="text-slate-700 leading-relaxed mb-6">{n.text}</p>
                <div className="flex flex-col gap-2">
                    <Link href={`/booking/?${new URLSearchParams(n.quote as Record<string, string>).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2a1a22] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2">
                        Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {n.more && <Link href={n.more.href} className="text-center text-sm font-bold text-[#be185d] hover:underline py-2">{n.more.label}</Link>}
                </div>
                <p className="text-xs text-slate-500 mt-3">Distances and times are approximate; mountain weather and traffic change them.</p>
            </div>
        </div>
    );
}
