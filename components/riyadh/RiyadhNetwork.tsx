'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Briefcase, Ticket, Landmark, Route, Building2 } from 'lucide-react';

type Hub = {
    key: string;
    name: string;
    icon: typeof Plane;
    x: number;
    y: number;
    intent: string;
    text: string;
    pickup: string;
    links: { label: string; href: string }[];
    quote: Record<string, string>;
};

// Schematic only - positions show relationships, not geography.
const HUBS: Hub[] = [
    { key: 'ruh', name: 'RUH Airport', icon: Plane, x: 300, y: 40, intent: 'Airport transfers', text: 'King Khalid International Airport sits well north of the centre, so most airport runs are long city drives rather than short hops.', pickup: 'Pickups follow the meeting instructions sent with your booking.', links: [{ label: 'Riyadh airport transfers', href: '/riyadh-airport-taxi/' }], quote: { from: 'King Khalid International Airport (RUH)' } },
    { key: 'business', name: 'Business Riyadh', icon: Briefcase, x: 110, y: 150, intent: 'Meetings & offices', text: 'KAFD, Olaya and the Diplomatic Quarter are where most business visits happen. Office towers and controlled compounds often have set drop-off points.', pickup: 'Send the tower, gate or reception name.', links: [{ label: 'KAFD', href: '/locations/riyadh/kafd/' }, { label: 'Olaya', href: '/locations/riyadh/olaya/' }, { label: 'Diplomatic Quarter', href: '/locations/riyadh/diplomatic-quarter/' }], quote: { from: 'Riyadh hotel', to: 'KAFD, Riyadh' } },
    { key: 'city', name: 'Riyadh', icon: Building2, x: 300, y: 170, intent: 'Hotels & city travel', text: 'Hotels, homes and restaurants across a very spread-out city. Journeys that look close on a map can take a while at busy times.', pickup: 'Hotel entrance, or the exact address and landmark.', links: [{ label: 'Riyadh hotel transfers', href: '/services/riyadh-hotel-transfer/' }], quote: { from: 'Riyadh' } },
    { key: 'events', name: 'Events', icon: Ticket, x: 490, y: 150, intent: 'Venues & seasons', text: 'Riyadh Front, Boulevard World and other venues draw big crowds on event days, with temporary road closures and busy drop-off areas.', pickup: 'Drop-off and pickup follow the venue’s traffic arrangements on the day.', links: [{ label: 'Riyadh Front', href: '/locations/riyadh/front/' }, { label: 'Boulevard World', href: '/locations/riyadh/boulevard-world/' }, { label: 'Event transport', href: '/services/event-transport/' }], quote: { from: 'Riyadh hotel', to: 'Riyadh Front', notes: 'Event day - return time: ' } },
    { key: 'heritage', name: 'Diriyah', icon: Landmark, x: 170, y: 270, intent: 'Heritage & dining', text: 'North-west of the centre: At-Turaif, Bujairi Terrace and the restaurants around them - often an evening trip with a return later.', pickup: 'Drop-off at the visitor or restaurant access point.', links: [{ label: 'Diriyah', href: '/locations/riyadh/diriyah/' }, { label: 'Bujairi Terrace', href: '/locations/riyadh/bujairi-terrace/' }], quote: { from: 'Riyadh hotel', to: 'Diriyah', notes: 'Return time: ' } },
    { key: 'intercity', name: 'Saudi intercity', icon: Route, x: 430, y: 280, intent: 'Long distance', text: 'The capital sits in the middle of the country - Dammam to the east, Makkah and Jeddah to the west, Madinah to the north-west.', pickup: 'Door-to-door from your Riyadh address.', links: [{ label: 'All intercity routes', href: '/services/intercity/' }], quote: { from: 'Riyadh' } },
];

// "One Capital. Many Ways to Travel." - clickable network with Riyadh at the centre.
export default function RiyadhNetwork() {
    const [k, setK] = useState('ruh');
    const h = HUBS.find((x) => x.key === k)!;
    const centre = HUBS.find((x) => x.key === 'city')!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div>
                <div className="relative rounded-3xl bg-[#1b1d23] ring-1 ring-white/10 overflow-hidden">
                    <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-label={`Schematic network of travel from Riyadh. Highlighted: ${h.name}.`}>
                        <defs>
                            <pattern id="rn-najdi" width="24" height="12" patternUnits="userSpaceOnUse">
                                <path d="M0 12 L6 4 L12 12 L18 4 L24 12" fill="none" stroke="#d4a857" strokeOpacity="0.07" />
                            </pattern>
                        </defs>
                        <rect width="600" height="320" fill="url(#rn-najdi)" />
                        {HUBS.filter((x) => x.key !== 'city').map((x) => {
                            const on = x.key === k;
                            return <path key={x.key} d={`M${centre.x} ${centre.y} L ${x.x} ${x.y}`} stroke={on ? '#d4a857' : '#ffffff'} strokeOpacity={on ? 1 : 0.15} strokeWidth={on ? 2.5 : 1.5} strokeDasharray={on ? undefined : '4 6'} />;
                        })}
                        {HUBS.map((x) => {
                            const on = x.key === k;
                            const isCentre = x.key === 'city';
                            return (
                                <g key={x.key}>
                                    <circle cx={x.x} cy={x.y} r={isCentre ? 26 : on ? 16 : 11} fill={on || isCentre ? '#d4a857' : '#1b1d23'} stroke="#d4a857" strokeWidth="2" />
                                    <text x={x.x} y={x.y + (isCentre ? 46 : 32)} textAnchor="middle" fontSize="15" fontWeight={on || isCentre ? 800 : 600} fill="#ffffff" fillOpacity={on || isCentre ? 1 : 0.7}>{x.name}</text>
                                </g>
                            );
                        })}
                    </svg>
                    <p className="absolute top-2 right-4 text-[11px] text-white/40">Schematic, not a map</p>
                </div>
                <div role="group" aria-label="Choose where you are going" className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                    {HUBS.map((x) => (
                        <button key={x.key} type="button" aria-pressed={x.key === k} onClick={() => setK(x.key)} className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857] ${x.key === k ? 'border-[#d4a857] bg-[#d4a857] text-[#14161b]' : 'border-white/20 text-white/80 hover:border-[#d4a857]/70'}`}>
                            <x.icon className="w-4 h-4" aria-hidden="true" /> {x.name}
                        </button>
                    ))}
                </div>
            </div>
            <div aria-live="polite" key={h.key} className="rounded-3xl bg-[#f6f3ee] text-[#14161b] p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7432] mb-2">{h.intent}</p>
                <h3 className="mb-3">{h.name}</h3>
                <p className="text-slate-700 leading-relaxed mb-4">{h.text}</p>
                <p className="text-sm text-slate-600 border-l-2 border-[#d4a857] pl-4 mb-6">{h.pickup}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {h.links.map((l) => (
                        <Link key={l.href} href={l.href} className="rounded-full bg-white border border-[#14161b]/10 px-3.5 py-2 text-sm font-semibold hover:border-[#9a7432]">{l.label}</Link>
                    ))}
                </div>
                <Link href={`/booking/?${new URLSearchParams(h.quote).toString()}`} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14161b] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857] focus-visible:ring-offset-2">
                    Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
