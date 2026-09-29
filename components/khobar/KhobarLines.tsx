'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Stop = {
    key: string;
    name: string;
    type: string;
    approx: string;
    vehicle: string;
    text: string;
    quote: Record<string, string>;
    more?: { label: string; href: string };
};
type Line = { key: string; title: string; stops: Stop[] };

const KHOBAR: Stop = {
    key: 'khobar',
    name: 'Al Khobar',
    type: 'Your starting point',
    approx: 'Hotels, the Corniche, Al Ulaya, Al Aqrabiyah and the business districts',
    vehicle: 'Any - chosen by group and luggage',
    text: 'Most journeys on this page start at a hotel, home or office in Al Khobar. Pick another stop to see that route.',
    quote: { from: 'Al Khobar' },
};

// Approximate figures from central Al Khobar.
const LINES: Line[] = [
    {
        key: 'province',
        title: 'Across the Eastern Province',
        stops: [
            KHOBAR,
            { key: 'dhahran', name: 'Dhahran', type: 'Business transfer', approx: 'Next door - roughly 10–15 km', vehicle: 'Sedan, or Yukon for a small team', text: 'Offices, business hotels and meetings. For controlled sites, we drive to the public entrance or reception you give us.', quote: { from: 'Al Khobar', to: 'Dhahran' }, more: { label: 'Transport in Dhahran', href: '/locations/dhahran/' } },
            { key: 'dammam', name: 'Dammam', type: 'City transfer', approx: 'About 20–25 km to central Dammam', vehicle: 'Any', text: 'Hotels, family visits and meetings in Dammam - and the road north to the airport and Jubail.', quote: { from: 'Al Khobar', to: 'Dammam' }, more: { label: 'Transport in Dammam', href: '/locations/dammam/' } },
            { key: 'dmm', name: 'DMM Airport', type: 'Airport transfer', approx: 'Roughly 45–60 km, often 40–60 minutes', vehicle: 'Sedan for 1–3; MPV or SUV with more bags', text: 'King Fahd International Airport is north-west of Dammam, so from Al Khobar it is the longest of the local runs. Allow extra time at peak hours.', quote: { from: 'Al Khobar', to: 'King Fahd International Airport (DMM)' }, more: { label: 'Khobar to DMM Airport', href: '/routes/khobar-to-dammam-airport/' } },
            { key: 'jubail', name: 'Jubail', type: 'Regional transfer', approx: 'Roughly 110–130 km up the coast', vehicle: 'Sedan or SUV; Hiace for teams', text: 'Jubail Industrial City and Jubail town. For industrial facilities, confirm the exact destination and any access requirements when booking.', quote: { from: 'Al Khobar', to: 'Jubail' }, more: { label: 'Jubail Industrial City', href: '/locations/jubail/industrial-city/' } },
        ],
    },
    {
        key: 'causeway',
        title: 'Across the Causeway',
        stops: [
            KHOBAR,
            { key: 'causeway', name: 'King Fahd Causeway', type: 'Border crossing', approx: 'Starts just south of Al Khobar; about 25 km long', vehicle: 'A vehicle permitted to cross', text: 'Saudi departure and Bahrain entry both happen on the causeway. Time here varies with queues and processing - it is the part nobody can schedule precisely.', quote: { from: 'Al Khobar', to: 'Bahrain' }, more: { label: 'About the Causeway crossing', href: '/locations/al-khobar/bahrain-causeway/' } },
            { key: 'bahrain', name: 'Bahrain', type: 'Cross-border transfer', approx: 'Manama and most of Bahrain are a short drive past the causeway', vehicle: 'Chosen by group and luggage', text: 'Your hotel, office or the airport in Bahrain. Book one way, or a return for later the same day or another date.', quote: { from: 'Al Khobar', to: 'Bahrain' }, more: { label: 'Private Bahrain transfer', href: '/routes/khobar-bahrain/' } },
        ],
    },
    {
        key: 'gcc',
        title: 'Longer roads',
        stops: [
            KHOBAR,
            { key: 'riyadh', name: 'Riyadh', type: 'Intercity transfer', approx: 'About 420 km, roughly 4–4.5 hours of driving', vehicle: 'Choose by luggage for the long drive', text: 'Door to door to a Riyadh hotel, office or the airport, with stops when you ask.', quote: { from: 'Al Khobar', to: 'Riyadh' }, more: { label: 'Dammam to Riyadh route', href: '/routes/dammam-riyadh/' } },
            { key: 'kuwait', name: 'Kuwait', type: 'Land-border journey', approx: 'About 440 km to Kuwait City before border time', vehicle: 'Chosen by group and luggage', text: 'North via the Saudi–Kuwait land border. Passengers carry the documents their nationality requires.', quote: { from: 'Al Khobar', to: 'Kuwait' }, more: { label: 'Khobar to Kuwait route', href: '/routes/khobar-to-kuwait-taxi/' } },
            { key: 'qatar', name: 'Qatar', type: 'Land-border journey', approx: 'Several hours, plus time at the Salwa / Abu Samra border', vehicle: 'Chosen by group and luggage', text: 'South-east to the Saudi–Qatar land border and on to Doha. Passengers carry the documents their nationality requires.', quote: { from: 'Al Khobar', to: 'Qatar' }, more: { label: 'Khobar to Qatar route', href: '/routes/khobar-to-qatar-taxi/' } },
        ],
    },
];

// Signature view: three route lines out of Al Khobar with clickable stops.
export default function KhobarLines() {
    const [sel, setSel] = useState({ line: 'causeway', stop: 'bahrain' });
    const line = LINES.find((l) => l.key === sel.line)!;
    const stop = line.stops.find((s) => s.key === sel.stop)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 items-start">
            <div className="space-y-4">
                {LINES.map((l) => {
                    const activeIdx = sel.line === l.key ? l.stops.findIndex((s) => s.key === sel.stop) : -1;
                    return (
                        <div key={l.key} className={`rounded-3xl border p-5 sm:p-6 transition ${sel.line === l.key ? 'border-sky-300/50 bg-white/[0.06]' : 'border-white/10'}`}>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300/80 mb-5">{l.title}</p>
                            <ol className="relative flex items-start" aria-label={l.title}>
                                {/* base line + progress line */}
                                <span className="absolute top-[21px] h-0.5 bg-white/15" style={{ left: `${50 / l.stops.length}%`, right: `${50 / l.stops.length}%` }} aria-hidden="true" />
                                {activeIdx > 0 && (
                                    <span
                                        className="absolute top-[21px] h-0.5 bg-sky-300 transition-[width] duration-500 motion-reduce:transition-none"
                                        style={{ left: `${50 / l.stops.length}%`, width: `${(activeIdx * 100) / l.stops.length}%` }}
                                        aria-hidden="true"
                                    />
                                )}
                                {l.stops.map((s, i) => {
                                    const on = sel.line === l.key && sel.stop === s.key;
                                    const passed = activeIdx >= i;
                                    return (
                                        <li key={s.key} className="relative z-10 flex-1 min-w-0 px-0.5 flex flex-col items-center text-center">
                                            <button
                                                type="button"
                                                aria-pressed={on}
                                                aria-label={`${s.name}: ${s.type}`}
                                                onClick={() => setSel({ line: l.key, stop: s.key })}
                                                className="group/node w-11 h-11 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                                            >
                                                <span className={`block w-8 h-8 rounded-full border-2 transition ${on ? 'bg-sky-300 border-sky-300 scale-110' : passed ? 'bg-[#2f6bff] border-[#2f6bff]' : 'bg-[#0b1535] border-white/40 group-hover/node:border-sky-300'}`} aria-hidden="true" />
                                            </button>
                                            <span className={`mt-1 text-[11px] sm:text-sm leading-tight ${on ? 'text-white font-bold' : 'text-slate-300'}`}>{s.name}</span>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    );
                })}
            </div>

            <div aria-live="polite" key={`${sel.line}-${sel.stop}`} className="lg:sticky lg:top-28 rounded-3xl bg-white text-[#0b1535] p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2f6bff] mb-2">{stop.type}</p>
                <h3 className="mb-3">{stop.key === 'khobar' ? 'Al Khobar' : `Al Khobar → ${stop.name}`}</h3>
                <p className="text-slate-700 leading-relaxed mb-5">{stop.text}</p>
                <dl className="text-sm space-y-2 mb-6">
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-slate-500">Distance</dt><dd>{stop.approx}</dd></div>
                    <div className="flex gap-3"><dt className="w-20 shrink-0 font-semibold text-slate-500">Vehicle</dt><dd>{stop.vehicle}</dd></div>
                </dl>
                <div className="flex flex-col gap-2">
                    <Link href={`/booking/?${new URLSearchParams(stop.quote).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bff] px-5 py-3.5 font-bold text-white hover:bg-[#1f55e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] focus-visible:ring-offset-2">
                        Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {stop.more && <Link href={stop.more.href} className="text-center text-sm font-bold text-[#2f6bff] hover:underline py-2">{stop.more.label}</Link>}
                </div>
                <p className="text-xs text-slate-500 mt-3">Approximate; exact addresses, traffic and border time change the total.</p>
            </div>
        </div>
    );
}
