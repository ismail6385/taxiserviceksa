'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const ITEMS = ['Airport arrival', 'Executive passenger', 'Family group', 'Multiple stops', 'Large luggage', 'Child seat', 'Long-distance journey', 'Event transportation', 'Multi-day itinerary', 'Specific vehicle request', 'Language preference'];

// Tick what matters; the selection travels to the booking form as notes.
export default function VipChecklist() {
    const [sel, setSel] = useState<string[]>([]);
    const toggle = (i: string) => setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
    const href = `/booking/?${new URLSearchParams({ notes: `VIP chauffeur request.${sel.length ? ` Please note: ${sel.join(', ')}.` : ''}` }).toString()}`;

    return (
        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
                {ITEMS.map((i) => {
                    const on = sel.includes(i);
                    return (
                        <li key={i}>
                            <button type="button" role="checkbox" aria-checked={on} onClick={() => toggle(i)} className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c7a3] ${on ? 'border-[#d8c7a3] bg-[#d8c7a3]/10 text-white' : 'border-white/10 text-white/75 hover:border-white/30'}`}>
                                <span className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center ${on ? 'bg-[#d8c7a3] border-[#d8c7a3]' : 'border-white/30'}`} aria-hidden="true">
                                    {on && <Check className="w-3.5 h-3.5 text-[#0e1116]" />}
                                </span>
                                {i}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Link href={href} className="group inline-flex items-center gap-2 rounded-xl bg-[#d8c7a3] px-6 py-4 font-bold text-[#0e1116] hover:bg-[#e6d8b9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c7a3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1116]">
                Continue with {sel.length ? `${sel.length} detail${sel.length > 1 ? 's' : ''}` : 'my request'} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
        </div>
    );
}
