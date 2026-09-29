'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Flag, Briefcase, Building2, Route } from 'lucide-react';

const CHOICES = [
    {
        key: 'airport',
        icon: Plane,
        label: 'Airport',
        sub: 'DMM Airport',
        title: 'Flying in or out of DMM',
        body: 'The airport is on the far side of Dammam, so from Al Khobar it is a proper drive, not a hop. Book the departure pickup with time to spare for traffic and check-in; for arrivals, add your flight number.',
        steps: ['Al Khobar', 'Dammam', 'DMM Airport'],
        cta: { label: 'Quote a DMM transfer', params: { from: 'Al Khobar', to: 'King Fahd International Airport (DMM)' } },
        more: { label: 'Khobar to DMM Airport', href: '/routes/khobar-to-dammam-airport/' },
    },
    {
        key: 'border',
        icon: Flag,
        label: 'Border',
        sub: 'Bahrain via the Causeway',
        title: 'Crossing to Bahrain',
        body: 'The causeway starts just south of the city, which is why so many Bahrain trips begin in Al Khobar. The drive is short; the border is what makes timing uncertain.',
        steps: ['Al Khobar', 'King Fahd Causeway', 'Bahrain'],
        cta: { label: 'Quote a Bahrain transfer', params: { from: 'Al Khobar', to: 'Bahrain' } },
        more: { label: 'Private Bahrain transfer', href: '/routes/khobar-bahrain/' },
    },
    {
        key: 'business',
        icon: Briefcase,
        label: 'Business',
        sub: 'Dhahran & the province',
        title: 'Meetings in Dhahran and beyond',
        body: 'A Khobar hotel is often the base for work in Dhahran, Dammam or Jubail. Book single legs, or a driver who waits between meetings.',
        steps: ['Khobar hotel', 'Dhahran office', 'Next meeting'],
        cta: { label: 'Quote a business transfer', params: { from: 'Al Khobar', to: 'Dhahran' } },
        more: { label: 'Hourly chauffeur service', href: '/services/private-driver/' },
    },
    {
        key: 'city',
        icon: Building2,
        label: 'City',
        sub: 'Al Khobar & Dammam',
        title: 'Around Al Khobar and into Dammam',
        body: 'Hotel moves, the Corniche in the evening, shopping, family visits across town or into Dammam - pre-booked, with a return if you need one.',
        steps: ['Your address', 'Corniche or Dammam', 'Back again'],
        cta: { label: 'Quote a city transfer', params: { from: 'Al Khobar' } },
        more: { label: 'Al Khobar Corniche transportation', href: '/locations/al-khobar/corniche/' },
    },
    {
        key: 'long',
        icon: Route,
        label: 'Long distance',
        sub: 'Jubail / Riyadh / GCC',
        title: 'Further afield',
        body: 'North to Jubail, inland to Riyadh, or across a land border to Kuwait or Qatar - one private car the whole way, with stops when you ask.',
        steps: ['Al Khobar', 'Highway', 'Jubail, Riyadh or GCC'],
        cta: { label: 'Quote a long-distance trip', params: { from: 'Al Khobar' } },
        more: { label: 'All routes', href: '/routes/' },
    },
];

// "Where are you going from Al Khobar?" - five large choices that swap the content and CTA.
export default function KhobarDestinations() {
    const [k, setK] = useState('border');
    const c = CHOICES.find((x) => x.key === k)!;

    return (
        <div>
            <div role="tablist" aria-label="Where are you going?" className="grid grid-cols-5 gap-2 sm:gap-3">
                {CHOICES.map((x) => {
                    const on = x.key === k;
                    return (
                        <button
                            key={x.key}
                            role="tab"
                            id={`kd-${x.key}`}
                            aria-selected={on}
                            aria-controls="kd-panel"
                            onClick={() => setK(x.key)}
                            className={`group flex flex-col items-center sm:items-start gap-2 rounded-2xl border px-1 py-4 sm:p-5 text-center sm:text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] ${on ? 'border-[#0b1535] bg-[#0b1535] text-white' : 'border-slate-200 bg-white text-[#0b1535] hover:border-[#2f6bff]'}`}
                        >
                            <x.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${on ? 'text-sky-300' : 'text-[#2f6bff]'}`} aria-hidden="true" />
                            <span className="text-[11px] sm:text-base font-bold leading-tight">{x.label}</span>
                            <span className={`hidden sm:block text-xs ${on ? 'text-slate-300' : 'text-slate-500'}`}>{x.sub}</span>
                        </button>
                    );
                })}
            </div>

            <div id="kd-panel" role="tabpanel" aria-labelledby={`kd-${c.key}`} key={c.key} className="mt-4 rounded-3xl bg-white border border-slate-200 p-6 md:p-9 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <h3 className="mb-3 text-[#0b1535]">{c.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-6">{c.body}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={`/booking/?${new URLSearchParams(c.cta.params as Record<string, string>).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bff] px-5 py-3.5 font-bold text-white hover:bg-[#1f55e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] focus-visible:ring-offset-2">
                            {c.cta.label} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                        <Link href={c.more.href} className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-[#2f6bff] hover:underline">{c.more.label}</Link>
                    </div>
                </div>
                <ol className="flex flex-col gap-2" aria-label="Journey">
                    {c.steps.map((s, i) => (
                        <li key={s} className="flex items-center gap-3">
                            <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-black ${i === c.steps.length - 1 ? 'bg-[#2f6bff] text-white' : 'bg-[#eef2fb] text-[#0b1535]'}`} aria-hidden="true">{i + 1}</span>
                            <span className="font-semibold text-[#0b1535]">{s}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
