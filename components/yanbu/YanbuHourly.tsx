'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const OPTIONS = [
    { key: 'short', label: '2–3 hours', hours: '3', title: 'A few local stops', text: 'Hotel → pharmacy → mall → dinner on the waterfront → hotel. The car waits between stops.' },
    { key: 'half', label: 'Half day', hours: '5', title: 'Business plus the city', text: 'A meeting in the Industrial City, lunch, a second appointment in Yanbu Al Bahr, then back to the hotel.' },
    { key: 'full', label: 'Full day', hours: '10', title: 'Several destinations', text: 'Site visits, a beach afternoon, or a private itinerary with stops you decide on the day.' },
];

// Hourly chauffeur use-case picker; hands off to the booking form in hourly mode.
export default function YanbuHourly() {
    const [k, setK] = useState('short');
    const o = OPTIONS.find((x) => x.key === k)!;
    const href = `/booking/?${new URLSearchParams({ trip: 'hourly', hours: o.hours, from: 'Yanbu' }).toString()}`;

    return (
        <div className="rounded-3xl bg-white border border-[#e6dccb] p-6 md:p-8">
            <div role="radiogroup" aria-label="How long do you need the car?" className="grid grid-cols-3 gap-2 mb-6">
                {OPTIONS.map((x) => (
                    <button
                        key={x.key}
                        type="button"
                        role="radio"
                        aria-checked={k === x.key}
                        onClick={() => setK(x.key)}
                        className={`rounded-xl px-2 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${k === x.key ? 'bg-[#0f5c8c] text-white' : 'bg-[#f3ecdf] text-[#0a2540] hover:bg-[#e6dccb]'}`}
                    >
                        {x.label}
                    </button>
                ))}
            </div>
            <div key={o.key} aria-live="polite" className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <h3 className="mb-2 text-[#0a2540]">{o.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{o.text}</p>
            </div>
            <Link href={href} className="group inline-flex items-center gap-2 rounded-xl bg-[#0a2540] px-5 py-3.5 font-bold text-white hover:bg-[#071a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2">
                Request an hourly quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
        </div>
    );
}
