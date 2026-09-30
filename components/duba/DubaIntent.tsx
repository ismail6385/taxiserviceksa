'use client';

import { useState } from 'react';
import { ArrowRight, Hotel, Landmark, Briefcase, Route, Waves, Plane } from 'lucide-react';
import { setDubaQuote } from './setQuote';
import type { DubaSetDetail } from './DubaQuoteCard';

const CARDS: { i: typeof Hotel; t: string; s: string; d: string; cta: string; set: DubaSetDetail }[] = [
    { i: Hotel, t: 'Coastal stay', s: 'Hotel, resort or coastal travel', d: 'A car from your hotel or residence to where you are going on the coast - give us the exact place.', cta: 'Quote a coastal trip', set: { from: 'Duba hotel', to: '', notes: 'Coastal stay - destination: ' } },
    { i: Landmark, t: 'Heritage visit', s: 'Historic Duba and nearby sites', d: 'Duba’s old town and the historic fort south of the city, with the car waiting between stops.', cta: 'Quote a heritage visit', set: { from: 'Duba city', to: '', trip: 'hourly', notes: 'Heritage visit - places: ' } },
    { i: Briefcase, t: 'Business travel', s: 'Work and project journeys', d: 'Transport to offices and project locations, planned to the exact entrance or reception you give us.', cta: 'Quote a business trip', set: { from: 'Duba city', to: '', notes: 'Business travel - site or office: ' } },
    { i: Route, t: 'Intercity journey', s: 'Onward to another Saudi city', d: 'Door-to-door to Tabuk, AlUla or another city, with room for your luggage.', cta: 'Quote an intercity trip', set: { from: 'Duba city', to: 'Tabuk' } },
    { i: Waves, t: 'Red Sea road trip', s: 'A custom coastal itinerary', d: 'Several coastal stops in one booking - build the route further down this page.', cta: 'Plan a road trip', set: { from: 'Duba city', to: '', trip: 'hourly', notes: 'Coastal road trip - stops: ' } },
    { i: Plane, t: 'Airport connection', s: 'Through a regional airport', d: 'To or from Tabuk Airport (TUU) with your flight number.', cta: 'Quote an airport run', set: { from: 'Duba city', to: 'Tabuk Airport (TUU)' } },
];

// "What brings you to Duba?" - each card sets up the quote card for that kind of trip.
export default function DubaIntent() {
    const [k, setK] = useState(0);
    const c = CARDS[k];
    return (
        <div>
            <div role="group" aria-label="Reason for travelling" className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:mx-0 md:px-0">
                {CARDS.map((x, i) => {
                    const on = i === k;
                    return (
                        <button key={x.t} type="button" aria-pressed={on} aria-controls="duba-intent" onClick={() => setK(i)} className={`snap-start shrink-0 w-[44%] sm:w-[30%] md:w-auto text-left rounded-2xl border p-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f8b] motion-reduce:transition-none ${on ? 'border-[#0b2a3a] bg-[#0b2a3a] text-white' : 'border-[#0b2a3a]/10 bg-white text-[#0b2a3a] hover:border-[#1f6f8b]'}`}>
                            <x.i className={`w-6 h-6 mb-3 ${on ? 'text-[#cfa77a]' : 'text-[#1f6f8b]'}`} aria-hidden="true" />
                            <span className="block font-bold leading-snug">{x.t}</span>
                            <span className={`block text-xs mt-1 ${on ? 'text-white/70' : 'text-slate-500'}`}>{x.s}</span>
                        </button>
                    );
                })}
            </div>
            <div id="duba-intent" aria-live="polite" key={c.t} className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-white border border-[#0b2a3a]/10 p-5 sm:p-6 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-[#0b2a3a]"><strong>{c.t}:</strong> {c.d}</p>
                <button type="button" onClick={() => setDubaQuote(c.set)} className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b2a3a] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] focus-visible:ring-offset-2">
                    {c.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
