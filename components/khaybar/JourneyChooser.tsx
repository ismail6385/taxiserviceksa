'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { setKhaybarQuote } from './setQuote';
import type { KhaybarSetDetail } from './KhaybarQuoteCard';

const OPTIONS: { n: string; t: string; who: string; text: string; examples?: string[]; note?: string; cta: string; set: KhaybarSetDetail }[] = [
    { n: '01', t: 'Khaybar day trip', who: 'Starting in Madinah or nearby', text: 'A private vehicle for a planned Khaybar visit, with the driver waiting and the return drive included.', cta: 'Plan Day Trip', set: { start: 'Madinah', need: 'Full-day Khaybar visit', to: 'Khaybar' } },
    { n: '02', t: 'One-way transfer', who: 'Continuing your journey', text: 'Straight to or from Khaybar, with your luggage.', examples: ['Madinah → Khaybar', 'Khaybar → AlUla', 'Khaybar → another destination'], cta: 'Request Transfer', set: { start: 'Madinah', need: 'One-way transfer', to: 'Khaybar' } },
    { n: '03', t: 'Heritage & oasis visit', who: 'Several planned stops', text: 'Transport between the areas you plan to visit, waiting between stops.', note: 'Not every archaeological or natural area is open to visitors - plan around current access arrangements.', cta: 'Build My Route', set: { need: 'Multi-stop itinerary', to: 'Khaybar', notes: 'Heritage and oasis visit - places I plan to visit: ' } },
    { n: '04', t: 'Multi-stop Northwest journey', who: 'Madinah + Khaybar + AlUla, or your own plan', text: 'One vehicle across a longer itinerary, over one day or several.', cta: 'Create Itinerary', set: { start: 'Madinah', need: 'Multi-stop itinerary', to: 'AlUla', notes: 'Madinah → Khaybar → AlUla. ' } },
];

// "How would you like to experience Khaybar?" - choosing an option updates the quote card.
export default function JourneyChooser() {
    const [i, setI] = useState(0);
    return (
        <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
            {OPTIONS.map((o, k) => {
                const on = k === i;
                return (
                    <li key={o.n} className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-auto">
                        <div className={`h-full flex flex-col rounded-3xl p-6 border transition motion-reduce:transition-none ${on ? 'bg-[#1b1a18] text-white border-[#1b1a18] shadow-xl' : 'bg-[#faf7f1] text-[#1b1a18] border-stone-200'}`}>
                            <button type="button" aria-pressed={on} onClick={() => setI(k)} className="text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a]">
                                <span className={`block text-sm font-bold ${on ? 'text-[#e0b07a]' : 'text-[#9b6a35]'}`}>{o.n}</span>
                                <span className="block text-xl font-bold mt-2">{o.t}</span>
                                <span className={`block text-xs mt-1 ${on ? 'text-white/60' : 'text-stone-500'}`}>{o.who}</span>
                            </button>
                            <p className={`text-sm mt-4 ${on ? 'text-white/80' : 'text-stone-600'}`}>{o.text}</p>
                            {o.examples && <ul className={`mt-3 space-y-1 text-sm ${on ? 'text-white/80' : 'text-stone-600'}`}>{o.examples.map((e) => <li key={e}>{e}</li>)}</ul>}
                            {o.note && <p className={`mt-3 text-xs ${on ? 'text-white/60' : 'text-stone-500'}`}>{o.note}</p>}
                            <span className="flex-1" />
                            <button type="button" onClick={() => { setI(k); setKhaybarQuote(o.set); }} className={`group mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a] focus-visible:ring-offset-2 ${on ? 'bg-[#e0b07a] text-[#1b1a18] hover:bg-[#e8c08f]' : 'bg-[#1b1a18] text-white hover:bg-black'}`}>
                                {o.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
