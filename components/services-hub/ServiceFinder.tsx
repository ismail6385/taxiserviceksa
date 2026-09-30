'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, Route, Clock, Compass, Moon, Briefcase, Users, Globe2, Check } from 'lucide-react';
import { openQuote } from './QuotePanel';

// "What type of journey are you planning?" - pick a journey type, see which service page covers it.
const TYPES = [
    { k: 'airport', icon: Plane, t: 'Airport Transfer', s: 'Airport → hotel, city or destination', d: 'For passengers arriving at or leaving from a Saudi airport.', uses: ['Arrival to your hotel or home', 'Departure with time for check-in', 'Families with luggage'], service: 'airport', href: '/services/airport-transfers/', cta: 'Explore Airport Transfers' },
    { k: 'city', icon: Building2, t: 'City Transfer', s: 'A private ride within a city', d: 'A pre-booked private car from one address to another in the same city.', uses: ['Hotel to a meeting or dinner', 'Appointments', 'Shopping trips'], service: 'private-driver', href: '/locations/', cta: 'Find your city' },
    { k: 'intercity', icon: Route, t: 'Intercity', s: 'One city → another', d: 'Door-to-door travel between Saudi cities, with the vehicle sized to your group.', uses: ['Jeddah, Makkah and Madinah', 'Riyadh to Jeddah or Dammam', 'Groups with luggage'], service: 'intercity', href: '/services/intercity/', cta: 'Explore Intercity Transfers' },
    { k: 'chauffeur', icon: Clock, t: 'Chauffeur', s: 'Vehicle + driver for hours or a day', d: 'The car stays with you for the time you book, between as many stops as you plan.', uses: ['Several meetings in a day', 'Shopping and errands', 'A driver for a few days'], service: 'private-driver', href: '/services/private-driver/', cta: 'Explore Private Driver' },
    { k: 'tourism', icon: Compass, t: 'Tourism', s: 'Private sightseeing or a day trip', d: 'A private vehicle for sightseeing, heritage sites and day trips at your own pace.', uses: ['City sightseeing', 'AlUla and heritage sites', 'Day trips'], service: 'tourism', href: '/services/tourism-transport/', cta: 'Explore Tourism Transport' },
    { k: 'umrah', icon: Moon, t: 'Umrah & Ziyarat', s: 'Pilgrimage transport', d: 'Transfers between Jeddah, Makkah and Madinah, plus journeys within both cities.', uses: ['JED Airport → Makkah', 'Makkah → Madinah', 'Ziyarat visits'], service: 'umrah', href: '/services/umrah-transport/', cta: 'Explore Umrah Transport' },
    { k: 'business', icon: Briefcase, t: 'Business', s: 'Meetings, executive and corporate travel', d: 'One-off business trips, visiting executives or recurring company transport.', uses: ['Airport to office', 'Client pickups', 'Business days'], service: 'business', href: '/services/business/', cta: 'Explore Business Chauffeur' },
    { k: 'group', icon: Users, t: 'Group Transport', s: 'Families, groups and larger parties', d: 'Larger vehicles for families and groups, from MPVs and vans to minibuses.', uses: ['Large families', 'Pilgrim or tour groups', 'Event guests'], service: 'hiace', href: '/services/group-hiace-hire/', cta: 'Explore Group Hire' },
    { k: 'gcc', icon: Globe2, t: 'Cross-Border', s: 'Saudi Arabia ↔ GCC', d: 'Private road transfers between Saudi Arabia and neighbouring GCC countries.', uses: ['Saudi ↔ Bahrain', 'Saudi ↔ Qatar, Kuwait, UAE', 'Business trips'], service: 'gcc', href: '/services/gcc-chauffeur-service/', cta: 'Explore GCC Transfers' },
];

export default function ServiceFinder() {
    const [k, setK] = useState('airport');
    const t = TYPES.find((x) => x.k === k)!;
    return (
        <div>
            <div role="group" aria-label="Journey types" className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-9 md:overflow-visible md:mx-0 md:px-0">
                {TYPES.map((x) => {
                    const on = x.k === k;
                    return (
                        <button key={x.k} type="button" aria-pressed={on} aria-controls="finder-panel" onClick={() => setK(x.k)} className={`snap-start shrink-0 w-[46%] sm:w-[31%] md:w-auto text-left rounded-2xl border p-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] motion-reduce:transition-none ${on ? 'border-[#131a2e] bg-[#131a2e] text-white shadow-lg -translate-y-0.5 motion-reduce:translate-y-0' : 'border-[#131a2e]/10 bg-white text-[#131a2e] hover:border-[#131a2e]/40'}`}>
                            <x.icon className={`w-6 h-6 mb-3 ${on ? 'text-[#c8a24a]' : 'text-[#8a6d2c]'}`} aria-hidden="true" />
                            <span className="block font-bold leading-snug">{x.t}</span>
                            <span className={`block text-xs mt-1 ${on ? 'text-white/70' : 'text-slate-500'}`}>{x.s}</span>
                        </button>
                    );
                })}
            </div>
            <div id="finder-panel" aria-live="polite" key={t.k} className="mt-5 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 rounded-3xl bg-white border border-[#131a2e]/10 p-6 sm:p-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d2c] mb-2">{t.t}</p>
                    <p className="text-xl font-bold text-[#131a2e] mb-4">{t.d}</p>
                    <ul className="space-y-2 text-slate-700">
                        {t.uses.map((u) => <li key={u} className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#8a6d2c] shrink-0" aria-hidden="true" />{u}</li>)}
                    </ul>
                </div>
                <div className="flex flex-col justify-center gap-3 md:border-l md:border-[#131a2e]/10 md:pl-6">
                    <Link href={t.href} className="group inline-flex items-center justify-between gap-2 rounded-xl bg-[#131a2e] px-5 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] focus-visible:ring-offset-2">
                        {t.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    <button type="button" onClick={() => openQuote(t.service)} className="rounded-xl border border-[#131a2e]/[0.15] px-5 py-4 font-bold text-[#131a2e] hover:border-[#131a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                        Get a quote for this
                    </button>
                </div>
            </div>
        </div>
    );
}
