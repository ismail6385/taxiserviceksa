'use client';

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ITEMS = ['Flight number', 'Arrival date', 'Arrival time', 'Hotel or destination', 'Passenger count', 'Number of suitcases', 'Vehicle preference'];

// Tick-off list of what to have ready before requesting an airport quote.
export default function BookingChecklist({ quoteHref = '#quote' }: { quoteHref?: string }) {
    const [done, setDone] = useState<string[]>([]);
    const toggle = (i: string) => setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));
    const all = done.length === ITEMS.length;

    return (
        <div className="rounded-3xl bg-white border border-stone-200 p-7 md:p-9">
            <p className="text-sm font-bold text-gray-900 mb-5">Have these ready ({done.length}/{ITEMS.length})</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                {ITEMS.map((i) => {
                    const on = done.includes(i);
                    return (
                        <li key={i}>
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked={on}
                                onClick={() => toggle(i)}
                                className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${on ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-stone-200 text-gray-800 hover:border-stone-400'}`}
                            >
                                <span className={`w-5 h-5 rounded-md flex items-center justify-center border ${on ? 'bg-emerald-700 border-emerald-700' : 'border-stone-300'}`} aria-hidden="true">
                                    {on && <Check className="w-3.5 h-3.5 text-white" />}
                                </span>
                                {i}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <a
                href={quoteHref}
                className={`group inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${all ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
            >
                Get My Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </a>
        </div>
    );
}
