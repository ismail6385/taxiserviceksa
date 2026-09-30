'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

// A personal checklist: ticks stay on this page only and are not sent anywhere.
export default function TickList({ items, label, tone = 'light' }: { items: string[]; label: string; tone?: 'light' | 'dark' }) {
    const [done, setDone] = useState<string[]>([]);
    const dark = tone === 'dark';
    const toggle = (i: string) => setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));
    const pct = Math.round((done.length / items.length) * 100);
    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                <div className={`h-1.5 flex-1 rounded-full overflow-hidden ${dark ? 'bg-white/10' : 'bg-[#06232b]/10'}`}>
                    <div className="h-full bg-[#e9b872] transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
                </div>
                <p className={`text-xs font-bold ${dark ? 'text-white/70' : 'text-slate-600'}`} aria-live="polite">{done.length} of {items.length} ready</p>
            </div>
            <ul aria-label={label} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map((i) => {
                    const on = done.includes(i);
                    return (
                        <li key={i}>
                            <button type="button" role="checkbox" aria-checked={on} onClick={() => toggle(i)} className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872] ${on ? 'border-[#e9b872] bg-[#e9b872]/10' : dark ? 'border-white/[0.15] hover:border-white/40' : 'border-[#06232b]/10 bg-white hover:border-[#06232b]/30'} ${dark ? 'text-white' : 'text-[#06232b]'}`}>
                                <span className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center ${on ? 'bg-[#e9b872] border-[#e9b872]' : dark ? 'border-white/40' : 'border-[#06232b]/30'}`} aria-hidden="true">
                                    {on && <Check className="w-3.5 h-3.5 text-[#06232b]" />}
                                </span>
                                <span className={on ? 'line-through decoration-[#e9b872]/70' : ''}>{i}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
