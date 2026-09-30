'use client';

import { useState } from 'react';
import { Building2, PlaneTakeoff, Plane, Home, MapPin, Check } from 'lucide-react';

const DESTS = [
    { key: 'manama', label: 'Manama', sub: 'Business, hotels, city', to: 'Manama, Bahrain', icon: Building2 },
    { key: 'bah', label: 'Bahrain Airport', sub: 'BAH departures', to: 'Bahrain International Airport (BAH)', icon: PlaneTakeoff },
    { key: 'muharraq', label: 'Muharraq', sub: 'Airport area, hotels, city', to: 'Muharraq, Bahrain', icon: Plane },
    { key: 'riffa', label: 'Riffa', sub: 'Residential, business', to: 'Riffa, Bahrain', icon: Home },
    { key: 'other', label: 'Other address', sub: 'Type it in the form', to: '', icon: MapPin },
];

// "Where are you going in Bahrain?" - sets the destination on the hero quote card and scrolls to it.
export default function BahrainDestinationPicker() {
    const [k, setK] = useState<string | null>(null);

    const choose = (d: (typeof DESTS)[number]) => {
        setK(d.key);
        window.dispatchEvent(new CustomEvent('routequote:set', { detail: { to: d.to } }));
        const card = document.getElementById('quote');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        card?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        if (d.key === 'other') window.setTimeout(() => document.getElementById('rq-to')?.focus(), reduce ? 0 : 500);
    };

    return (
        <div>
            <div role="group" aria-label="Bahrain destination" className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {DESTS.map((d) => {
                    const on = k === d.key;
                    return (
                        <button
                            key={d.key}
                            type="button"
                            aria-pressed={on}
                            onClick={() => choose(d)}
                            className={`relative rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ce1126] ${on ? 'border-[#0a1a3a] bg-[#0a1a3a] text-white' : 'border-slate-200 bg-white text-[#0a1a3a] hover:border-[#0a1a3a]/50'} ${d.key === 'other' ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            {on && <Check className="absolute top-3 right-3 w-4 h-4 text-[#ff8a95]" aria-hidden="true" />}
                            <d.icon className={`w-6 h-6 mb-3 ${on ? 'text-[#ff8a95]' : 'text-[#ce1126]'}`} aria-hidden="true" />
                            <span className="block font-bold">{d.label}</span>
                            <span className={`block text-xs ${on ? 'text-white/60' : 'text-slate-500'}`}>{d.sub}</span>
                        </button>
                    );
                })}
            </div>
            <p className="text-sm text-slate-500 mt-3" aria-live="polite">
                {k ? (k === 'other' ? 'Type your Bahrain address in the Destination field.' : 'Added to the quote form above.') : 'Choosing a destination fills in the quote form.'}
            </p>
        </div>
    );
}
