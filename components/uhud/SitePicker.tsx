'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { setUhudQuote } from './QuoteAction';
import type { UhudSetDetail } from './UhudQuoteCard';

const SITES: { t: string; d: string; set: UhudSetDetail; link?: { l: string; href: string } }[] = [
    { t: 'Mount Uhud', d: 'The mountain and the surrounding landscape north of the city.', set: { to: 'Mount Uhud', trip: 'return' } },
    { t: "Uhud Martyrs' Cemetery", d: 'For visitors including the cemetery area in their visit.', set: { to: "Uhud Martyrs' Cemetery area", trip: 'return' } },
    { t: 'Jabal al-Rumah', d: 'The small hill associated with the archers at the Battle of Uhud.', set: { to: 'Jabal al-Rumah area', trip: 'return' } },
    { t: 'Nearby Ziyarat stops', d: 'Combine Uhud with other places in Madinah in one trip.', set: { to: 'Mount Uhud', trip: 'ziyarat' }, link: { l: 'Madinah Ziyarat service', href: '/services/madinah-ziyarat/' } },
];

// "What would you like to see?" - choosing a card sets the destination on the quote card.
export default function SitePicker() {
    const [k, setK] = useState(0);
    return (
        <div>
            <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {SITES.map((s, i) => {
                    const on = i === k;
                    return (
                        <li key={s.t} className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-auto">
                            <div className={`h-full flex flex-col rounded-2xl border p-5 transition motion-reduce:transition-none ${on ? 'border-[#2b2522] bg-[#2b2522] text-white' : 'border-stone-200 bg-white text-[#2b2522]'}`}>
                                <button type="button" aria-pressed={on} onClick={() => setK(i)} className="text-left rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f]">
                                    <span className="block text-lg font-bold">{s.t}</span>
                                    <span className={`block text-sm mt-1.5 ${on ? 'text-white/75' : 'text-stone-600'}`}>{s.d}</span>
                                </button>
                                <span className="flex-1" />
                                <button type="button" onClick={() => { setK(i); setUhudQuote(s.set); }} className={`group mt-5 inline-flex items-center gap-2 text-sm font-bold rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f] ${on ? 'text-[#e2b48a]' : 'text-[#2b2522]'}`}>
                                    Add to my quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </button>
                                {s.link && <Link href={s.link.href} className={`mt-2 text-sm font-semibold hover:underline ${on ? 'text-white/80' : 'text-[#8a5530]'}`}>{s.link.l}</Link>}
                            </div>
                        </li>
                    );
                })}
            </ul>
            <p className="text-sm text-stone-600 mt-4">Access and visitor arrangements can change. Follow current site instructions on the day of your visit.</p>
        </div>
    );
}
