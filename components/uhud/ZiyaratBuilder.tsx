'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Minus, Plus } from 'lucide-react';

export interface BuilderClass { cls: string; vehicles: { name: string; passengers: number; luggage: number }[] }

const START = ['Madinah hotel', 'Madinah Airport (MED)', 'Madinah Train Station'] as const;
const PRESETS: { l: string; stops: string[] }[] = [
    { l: 'Uhud only', stops: ['Mount Uhud'] },
    { l: 'Uhud + Quba', stops: ['Mount Uhud', 'Masjid Quba'] },
    { l: 'Uhud + Qiblatain', stops: ['Mount Uhud', 'Masjid Qiblatain'] },
];

const pill = (on: boolean) => `min-h-[44px] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b48a] ${on ? 'border-[#e2b48a] bg-[#e2b48a] text-[#2b2522]' : 'border-white/20 text-white/[0.85] hover:border-white/50'}`;

// Madinah Ziyarat route builder. Stops come from the site's Madinah Ziyarat list; the plan goes to /booking/.
export default function ZiyaratBuilder({ sites, classes }: { sites: string[]; classes: BuilderClass[] }) {
    const router = useRouter();
    const [stops, setStops] = useState<string[]>(['Mount Uhud']);
    const [start, setStart] = useState<(typeof START)[number]>('Madinah hotel');
    const [cls, setCls] = useState(classes[0]?.cls ?? '');
    const [pax, setPax] = useState(2);
    const toggle = (s: string) => setStops((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
    const vehicle = classes.find((c) => c.cls === cls)?.vehicles.find((v) => v.passengers >= pax);
    const presetOn = (p: string[]) => p.length === stops.length && p.every((x) => stops.includes(x));

    const go = () => {
        const list = stops.length ? stops : ['Mount Uhud'];
        const p = new URLSearchParams({ from: start, to: list[list.length - 1], passengers: String(pax), luggage: '0' });
        if (vehicle) p.set('vehicle', vehicle.name);
        p.set('notes', [`Madinah Ziyarat: ${start} → ${list.join(' → ')} → back to start.`, !vehicle ? `Preferred: ${cls}; please suggest a vehicle for ${pax} passengers.` : ''].filter(Boolean).join(' '));
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <div className="space-y-6">
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Quick options</legend>
                    <div className="flex flex-wrap gap-2">
                        {PRESETS.map((p) => <button key={p.l} type="button" aria-pressed={presetOn(p.stops)} onClick={() => setStops(p.stops)} className={pill(presetOn(p.stops))}>{p.l}</button>)}
                    </div>
                </fieldset>
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Or choose your stops, in order</legend>
                    <div className="flex flex-wrap gap-2">
                        {sites.map((s) => {
                            const on = stops.includes(s);
                            return <button key={s} type="button" aria-pressed={on} onClick={() => toggle(s)} className={pill(on)}>{on && <Check className="inline w-4 h-4 mr-1 -mt-0.5" aria-hidden="true" />}{s}</button>;
                        })}
                    </div>
                </fieldset>
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Start</legend>
                    <div className="flex flex-wrap gap-2">{START.map((s) => <button key={s} type="button" aria-pressed={start === s} onClick={() => setStart(s)} className={pill(start === s)}>{s}</button>)}</div>
                </fieldset>
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Vehicle</legend>
                    <div className="flex flex-wrap gap-2">{classes.map((c) => <button key={c.cls} type="button" aria-pressed={cls === c.cls} onClick={() => setCls(c.cls)} className={pill(cls === c.cls)}>{c.cls}</button>)}</div>
                </fieldset>
                <div>
                    <p id="zb-pax" className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Passengers</p>
                    <div role="group" aria-labelledby="zb-pax" className="inline-flex items-center rounded-xl border border-white/20">
                        <button type="button" onClick={() => setPax(Math.max(1, pax - 1))} disabled={pax <= 1} aria-label="Fewer passengers" className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b48a]"><Minus className="w-4 h-4" aria-hidden="true" /></button>
                        <output aria-live="polite" className="w-10 text-center text-lg font-bold">{pax}</output>
                        <button type="button" onClick={() => setPax(Math.min(14, pax + 1))} disabled={pax >= 14} aria-label="More passengers" className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-r-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b48a]"><Plus className="w-4 h-4" aria-hidden="true" /></button>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl bg-[#fbf8f4] text-[#2b2522] p-6 lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Your route</p>
                <ol className="relative border-l-2 border-dashed border-[#b5703f]/50 ml-2 space-y-3 mb-5" aria-live="polite">
                    {[start, ...(stops.length ? stops : ['Mount Uhud']), 'Back to start'].map((s, i, a) => (
                        <li key={`${s}-${i}`} className="pl-5 relative">
                            <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${i === 0 || i === a.length - 1 ? 'bg-[#2b2522]' : 'bg-[#b5703f]'}`} aria-hidden="true" />
                            <span className="font-semibold">{s}</span>
                        </li>
                    ))}
                </ol>
                <p className="text-sm mb-5"><strong>Vehicle:</strong> {vehicle ? vehicle.name.split(' /')[0] : `${cls} - we'll suggest one for ${pax} passengers`}</p>
                <button type="button" onClick={go} className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2b2522] px-5 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f] focus-visible:ring-offset-2">
                    Build My Ziyarat Trip <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </button>
                <p className="text-xs text-stone-500 mt-3">You see the price before you confirm.</p>
            </div>
        </div>
    );
}
