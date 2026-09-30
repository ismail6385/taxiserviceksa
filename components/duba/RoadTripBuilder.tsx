'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Minus, Plus, Check } from 'lucide-react';

export interface TripClass { cls: string; vehicles: { name: string; passengers: number; luggage: number }[] }

function Count({ id, label, v, set, min, max }: { id: string; label: string; v: number; set: (n: number) => void; min: number; max: number }) {
    return (
        <div>
            <p id={id} className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">{label}</p>
            <div role="group" aria-labelledby={id} className="inline-flex items-center rounded-xl border border-white/20">
                <button type="button" onClick={() => set(Math.max(min, v - 1))} disabled={v <= min} aria-label={`Fewer ${label.toLowerCase()}`} className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a]"><Minus className="w-4 h-4" aria-hidden="true" /></button>
                <output aria-live="polite" className="w-10 text-center text-lg font-bold">{v}</output>
                <button type="button" onClick={() => set(Math.min(max, v + 1))} disabled={v >= max} aria-label={`More ${label.toLowerCase()}`} className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-r-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a]"><Plus className="w-4 h-4" aria-hidden="true" /></button>
            </div>
        </div>
    );
}

const pill = (on: boolean) => `min-h-[44px] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] ${on ? 'border-[#cfa77a] bg-[#cfa77a] text-[#0b2a3a]' : 'border-white/20 text-white/[0.85] hover:border-white/50'}`;

// Road-trip builder: start in Duba, add stops, choose where to finish. Sends the plan to /booking/ - no prices here.
export default function RoadTripBuilder({ stops, finishes, classes }: { stops: string[]; finishes: string[]; classes: TripClass[] }) {
    const router = useRouter();
    const [picked, setPicked] = useState<string[]>([]);
    const [finish, setFinish] = useState(finishes[0]);
    const [other, setOther] = useState('');
    const [cls, setCls] = useState(classes[0]?.cls ?? '');
    const [pax, setPax] = useState(2);
    const [bags, setBags] = useState(2);
    const [error, setError] = useState('');
    const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
    const end = finish === 'Another city' ? other.trim() : finish;
    const vehicle = classes.find((c) => c.cls === cls)?.vehicles.find((v) => v.passengers >= pax && v.luggage >= bags);
    const path = ['Duba', ...picked, end || '…'];

    const go = () => {
        if (!end) {
            setError('Tell us where the trip finishes.');
            return;
        }
        const p = new URLSearchParams({ from: 'Duba', to: end, passengers: String(pax), luggage: String(bags) });
        if (vehicle) p.set('vehicle', vehicle.name);
        p.set('notes', [`Road trip: ${['Duba', ...picked, end].join(' → ')}.`, !vehicle ? `Preferred: ${cls}; please suggest a vehicle that fits.` : ''].filter(Boolean).join(' '));
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <div className="space-y-6">
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Add stops, in order</legend>
                    <div className="flex flex-wrap gap-2">
                        {stops.map((s) => {
                            const on = picked.includes(s);
                            return <button key={s} type="button" aria-pressed={on} onClick={() => toggle(s)} className={pill(on)}>{on && <Check className="inline w-4 h-4 mr-1 -mt-0.5" aria-hidden="true" />}{s}</button>;
                        })}
                    </div>
                </fieldset>
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Finish</legend>
                    <div className="flex flex-wrap gap-2">
                        {finishes.map((f) => <button key={f} type="button" aria-pressed={finish === f} onClick={() => { setFinish(f); setError(''); }} className={pill(finish === f)}>{f}</button>)}
                    </div>
                    {finish === 'Another city' && (
                        <div className="mt-3">
                            <label htmlFor="rt-other" className="sr-only">City where the trip finishes</label>
                            <input id="rt-other" value={other} onChange={(e) => { setOther(e.target.value); setError(''); }} placeholder="City or address" className="w-full sm:max-w-sm h-12 rounded-lg border border-white/20 bg-white/[0.06] px-3 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#cfa77a]" aria-invalid={!!error} aria-describedby={error ? 'rt-error' : undefined} />
                        </div>
                    )}
                </fieldset>
                <fieldset className="min-w-0">
                    <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Vehicle</legend>
                    <div className="flex flex-wrap gap-2">{classes.map((c) => <button key={c.cls} type="button" aria-pressed={cls === c.cls} onClick={() => setCls(c.cls)} className={pill(cls === c.cls)}>{c.cls}</button>)}</div>
                </fieldset>
                <div className="flex flex-wrap gap-6">
                    <Count id="rt-pax" label="Passengers" v={pax} set={setPax} min={1} max={14} />
                    <Count id="rt-bags" label="Luggage" v={bags} set={setBags} min={0} max={16} />
                </div>
            </div>
            <div className="rounded-3xl bg-[#f6f0e6] text-[#0b2a3a] p-6 lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Your route</p>
                <ol className="relative border-l-2 border-dashed border-[#1f6f8b]/40 ml-2 space-y-3 mb-5" aria-live="polite">
                    {path.map((s, i) => (
                        <li key={`${s}-${i}`} className="pl-5 relative">
                            <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${i === 0 || i === path.length - 1 ? 'bg-[#0b2a3a]' : 'bg-[#cfa77a]'}`} aria-hidden="true" />
                            <span className="font-semibold">{s}</span>
                        </li>
                    ))}
                </ol>
                <p className="text-sm mb-5"><strong>Vehicle:</strong> {vehicle ? vehicle.name.split(' /')[0] : `${cls} - we'll suggest one that fits ${pax} people and ${bags} bags`}</p>
                {error && <p id="rt-error" role="alert" className="mb-3 text-sm font-semibold text-red-700">{error}</p>}
                <button type="button" onClick={go} className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b2a3a] px-5 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] focus-visible:ring-offset-2">
                    Build My Route <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </button>
                <p className="text-xs text-slate-500 mt-3">We check the route and send the price before you confirm.</p>
            </div>
        </div>
    );
}
