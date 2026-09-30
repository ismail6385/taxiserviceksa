'use client';

import { useState } from 'react';
import QuoteLink from './QuoteLink';

const TUU = 'Tabuk Airport (TUU)';

const DESTS = [
    { label: 'Tabuk', to: 'Tabuk city', type: 'Airport transfer', text: 'A point-to-point ride from arrivals to your hotel, residence or meeting. Send the hotel name or address.' },
    { label: 'NEOM', to: 'NEOM', type: 'Long-distance transfer to a confirmed NEOM destination', text: 'Tell us the exact accommodation, site or meeting point. NEOM access and project-site entry depend on the destination and current authorization requirements.' },
    { label: 'AlUla', to: 'AlUla', type: 'Intercity transfer', text: 'One vehicle from the airport to your AlUla hotel or resort. Add a return leg if you fly back out of Tabuk.' },
    { label: 'Haql', to: 'Haql', type: 'Coastal transfer', text: 'A longer road journey to the Gulf of Aqaba. Send the exact hotel or address in Haql.' },
    { label: 'Al Wajh', to: 'Al Wajh', type: 'Coastal transfer', text: 'A longer road journey to the Red Sea coast. Send the exact hotel, resort or address.' },
    { label: 'Other', to: '', type: 'Custom route', text: 'Type your destination on the quote form and we confirm whether we can cover it.' },
];
const GROUPS = [
    { label: '1–3', pax: 2, vehicle: 'A sedan usually fits; choose an SUV if you have several large bags.' },
    { label: '4–7', pax: 5, vehicle: 'A large SUV or a van, depending on luggage.' },
    { label: '8+', pax: 9, vehicle: 'A group van or minibus - or two vehicles.' },
];

const opt = (on: boolean) => `min-h-[44px] rounded-xl px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] ${on ? 'bg-[#e2a23b] text-[#241a12]' : 'border border-white/20 text-white hover:border-[#e2a23b]'}`;

// Landing at TUU -> where to -> how many: the booking type to ask for, then a prefilled quote.
export default function TabukArrivalPlanner() {
    const [d, setD] = useState(0);
    const [g, setG] = useState(0);
    const dest = DESTS[d];
    const group = GROUPS[g];
    return (
        <div className="rounded-3xl bg-[#241a12] text-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="space-y-6">
                <div>
                    <p className="text-sm font-bold mb-2">Where are you landing?</p>
                    <span className="inline-flex min-h-[44px] items-center rounded-xl bg-white/10 px-4 text-sm font-bold">TUU · Tabuk Airport</span>
                </div>
                <fieldset>
                    <legend className="text-sm font-bold mb-2">Where are you going?</legend>
                    <div className="flex flex-wrap gap-2">
                        {DESTS.map((x, i) => <button key={x.label} type="button" aria-pressed={i === d} onClick={() => setD(i)} className={opt(i === d)}>{x.label}</button>)}
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold mb-2">How many passengers?</legend>
                    <div className="flex flex-wrap gap-2">
                        {GROUPS.map((x, i) => <button key={x.label} type="button" aria-pressed={i === g} onClick={() => setG(i)} className={opt(i === g)}>{x.label}</button>)}
                    </div>
                </fieldset>
            </div>
            <div aria-live="polite" className="rounded-2xl bg-[#f3ebdd] text-[#241a12] p-6 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9a4f1c] mb-2">Recommended booking type</p>
                <h3 className="mb-3">{dest.type}</h3>
                <p className="text-sm text-stone-700 mb-3">{dest.text}</p>
                <p className="text-sm text-stone-700 mb-6 flex-1"><strong className="text-[#241a12]">Vehicle:</strong> {group.vehicle}</p>
                <QuoteLink set={{ from: TUU, to: dest.to, pax: group.pax }} className="self-start inline-flex items-center rounded-xl bg-[#241a12] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] focus-visible:ring-offset-2">
                    Get Quote
                </QuoteLink>
            </div>
        </div>
    );
}
