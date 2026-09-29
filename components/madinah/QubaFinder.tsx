'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MoveRight, Repeat, Route, Users, Clock } from 'lucide-react';

const OPTIONS = [
    { key: 'visit', icon: MoveRight, q: 'Just going to Quba?', title: 'One-way transfer', text: 'A private car from your hotel to Masjid Quba. Useful if you plan to walk back, or continue with friends.', href: '#quote', cta: 'Book one way' },
    { key: 'return', icon: Repeat, q: 'Coming back to your hotel?', title: 'Return transfer', text: 'Hotel → Quba → hotel, with the ride back agreed before you set off.', href: '#quote', cta: 'Book a return' },
    { key: 'stops', icon: Route, q: 'Want several stops?', title: 'Private Ziyarat', text: 'Add Qiblatain, Uhud or other places to the same trip in one vehicle.', href: '/services/madinah-ziyarat/', cta: 'Plan private Ziyarat' },
    { key: 'family', icon: Users, q: 'Travelling with family?', title: 'Staria, Yukon or van', text: 'Pick a vehicle with room for everyone - tell us about older family members or children.', href: '#vehicles', cta: 'Choose a vehicle' },
    { key: 'longer', icon: Clock, q: 'Need a car for longer?', title: 'Private driver by the hour', text: 'Keep one car and driver for a set number of hours around your plans.', href: '/services/private-driver/', cta: 'Private driver service' },
];

// "Which Quba transfer do you need?" - question buttons with a matching answer panel.
export default function QubaFinder() {
    const [active, setActive] = useState(OPTIONS[1].key);
    const cur = OPTIONS.find((o) => o.key === active)!;
    const isAnchor = cur.href.startsWith('#');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
            <div className="flex flex-col gap-2.5" role="tablist" aria-label="What kind of Quba trip">
                {OPTIONS.map((o) => (
                    <button
                        key={o.key}
                        role="tab"
                        id={`qf-${o.key}`}
                        aria-selected={active === o.key}
                        aria-controls="qf-panel"
                        onClick={() => setActive(o.key)}
                        className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${active === o.key ? 'border-emerald-800 bg-emerald-800 text-white' : 'border-stone-200 bg-white text-gray-800 hover:border-emerald-700/60'}`}
                    >
                        <span className="flex items-center gap-3">
                            <o.icon className={`w-5 h-5 ${active === o.key ? 'text-amber-300' : 'text-emerald-700'}`} aria-hidden="true" />
                            {o.q}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${active === o.key ? 'translate-x-1 text-amber-300' : 'text-stone-300'} motion-reduce:transition-none`} aria-hidden="true" />
                    </button>
                ))}
            </div>
            <div id="qf-panel" role="tabpanel" aria-labelledby={`qf-${cur.key}`} key={cur.key} className="rounded-2xl bg-[#f3efe4] border border-amber-200/70 p-8 flex flex-col justify-center animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <cur.icon className="w-10 h-10 text-emerald-800 mb-4" aria-hidden="true" />
                <h3 className="mb-2">{cur.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{cur.text}</p>
                {isAnchor ? (
                    <a href={cur.href} className="group inline-flex items-center gap-2 font-bold text-emerald-800">{cur.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                ) : (
                    <Link href={cur.href} className="group inline-flex items-center gap-2 font-bold text-emerald-800">{cur.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                )}
            </div>
        </div>
    );
}
