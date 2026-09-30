'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const INTENTS = [
    { key: 'business', label: 'Business meetings', chain: ['KAFD', 'Hotel', 'Office', 'RUH'], tip: 'Several stops in one day usually suit an hourly driver.', href: '/booking/?trip=hourly&hours=6&from=Riyadh%20hotel' },
    { key: 'corporate', label: 'Corporate visitors', chain: ['RUH', 'Hotel', 'Meetings', 'RUH'], tip: 'Book the airport legs as transfers and the meeting day by the hour.', href: '/services/corporate-travel/' },
    { key: 'events', label: 'Event travel', chain: ['Hotel', 'Venue', 'Dinner', 'Hotel'], tip: 'Agree a return time - venue traffic is heavy when events end.', href: '/services/event-transport/' },
    { key: 'family', label: 'Family travel', chain: ['RUH', 'Hotel', 'Attractions', 'Hotel'], tip: 'Tell us every suitcase for the airport run; a van or SUV helps.', href: '/booking/?from=King%20Khalid%20International%20Airport%20(RUH)' },
    { key: 'day', label: 'Shopping / day out', chain: ['Hotel', 'Mall', 'Diriyah', 'Hotel'], tip: 'Keep the car with you instead of booking each leg.', href: '/booking/?trip=hourly&hours=4&from=Riyadh%20hotel' },
    { key: 'long', label: 'Long distance', chain: ['Riyadh', 'Highway', 'Planned stop', 'Another city'], tip: 'Say where you want to stop; long drives are easier with a break.', href: '/services/intercity/' },
];

// "One city, different reasons to travel" - pick an intent to see a typical day.
export default function RiyadhIntentJourneys() {
    const [k, setK] = useState('business');
    const it = INTENTS.find((x) => x.key === k)!;

    return (
        <div>
            <div role="tablist" aria-label="Reason for travel" className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {INTENTS.map((x) => (
                    <button key={x.key} role="tab" id={`ri-${x.key}`} aria-selected={k === x.key} aria-controls="ri-panel" onClick={() => setK(x.key)} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a7432] ${k === x.key ? 'bg-[#14161b] text-white' : 'bg-white border border-[#14161b]/10 text-[#14161b] hover:border-[#9a7432]'}`}>
                        {x.label}
                    </button>
                ))}
            </div>
            <div id="ri-panel" role="tabpanel" aria-labelledby={`ri-${it.key}`} key={it.key} className="mt-5 rounded-3xl bg-white border border-[#14161b]/10 p-6 md:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <ol className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-6">
                    {it.chain.map((s, i) => (
                        <li key={`${s}-${i}`} className="flex sm:flex-1 items-center gap-2">
                            <span className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-bold ${i === 0 || i === it.chain.length - 1 ? 'bg-[#14161b] text-white' : 'bg-[#f6f3ee] text-[#14161b]'}`}>{s}</span>
                            {i < it.chain.length - 1 && <span className="text-[#9a7432] rotate-90 sm:rotate-0 px-1" aria-hidden="true">→</span>}
                        </li>
                    ))}
                </ol>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-slate-700">{it.tip}</p>
                    <Link href={it.href} className="group shrink-0 inline-flex items-center gap-2 font-bold text-[#9a7432]">Plan this <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                </div>
            </div>
        </div>
    );
}
