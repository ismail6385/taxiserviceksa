'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Minus, Plus } from 'lucide-react';

export interface ClassOption { cls: string; vehicles: { name: string; passengers: number; luggage: number }[] }

const PICKUP = ['Madinah', 'Madinah Airport (MED)', 'Custom'] as const;
const TRIP = ['Khaybar only', 'Khaybar + another stop', 'Custom itinerary'] as const;
const RETURN = ['Same day', 'One way', 'Custom return time'] as const;

function Seg<T extends string>({ label, opts, v, set }: { label: string; opts: readonly T[]; v: T; set: (x: T) => void }) {
    return (
        <fieldset className="min-w-0">
            <legend className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">{label}</legend>
            <div className="flex flex-wrap gap-2">
                {opts.map((o) => <button key={o} type="button" aria-pressed={v === o} onClick={() => set(o)} className={`min-h-[44px] rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b07a] ${v === o ? 'border-[#e0b07a] bg-[#e0b07a] text-[#1b1a18]' : 'border-white/20 text-white/[0.85] hover:border-white/50'}`}>{o}</button>)}
            </div>
        </fieldset>
    );
}

function Count({ id, label, v, set, min, max }: { id: string; label: string; v: number; set: (n: number) => void; min: number; max: number }) {
    return (
        <div>
            <p id={id} className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">{label}</p>
            <div role="group" aria-labelledby={id} className="inline-flex items-center rounded-xl border border-white/20">
                <button type="button" onClick={() => set(Math.max(min, v - 1))} disabled={v <= min} aria-label={`Fewer ${label.toLowerCase()}`} className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b07a]"><Minus className="w-4 h-4" aria-hidden="true" /></button>
                <output aria-live="polite" className="w-10 text-center text-lg font-bold">{v}</output>
                <button type="button" onClick={() => set(Math.min(max, v + 1))} disabled={v >= max} aria-label={`More ${label.toLowerCase()}`} className="w-11 h-11 flex items-center justify-center disabled:opacity-30 rounded-r-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b07a]"><Plus className="w-4 h-4" aria-hidden="true" /></button>
            </div>
        </div>
    );
}

// Day-trip builder: collects the plan and hands it to /booking/. No prices are calculated here.
export default function DayTripBuilder({ classes }: { classes: ClassOption[] }) {
    const router = useRouter();
    const [pickup, setPickup] = useState<(typeof PICKUP)[number]>('Madinah');
    const [custom, setCustom] = useState('');
    const [trip, setTrip] = useState<(typeof TRIP)[number]>('Khaybar only');
    const [cls, setCls] = useState(classes[0]?.cls ?? '');
    const [ret, setRet] = useState<(typeof RETURN)[number]>('Same day');
    const [pax, setPax] = useState(2);
    const [bags, setBags] = useState(1);
    const [error, setError] = useState('');

    // Smallest vehicle in the chosen class that fits; if none fits, leave it for us to suggest.
    const vehicle = classes.find((c) => c.cls === cls)?.vehicles.find((v) => v.passengers >= pax && v.luggage >= bags);

    const go = () => {
        const from = pickup === 'Custom' ? custom.trim() : pickup;
        if (!from) {
            setError('Add your pickup location.');
            return;
        }
        const p = new URLSearchParams({ from, to: 'Khaybar', passengers: String(pax), luggage: String(bags) });
        if (vehicle) p.set('vehicle', vehicle.name);
        p.set('notes', [`Khaybar day trip - ${trip}.`, ret === 'Same day' ? 'Same-day return, driver waits.' : ret === 'One way' ? 'One way only.' : 'Return at a custom time: ', !vehicle ? `Preferred: ${cls}; please suggest a vehicle that fits.` : ''].filter(Boolean).join(' '));
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <div className="space-y-6">
                <div>
                    <Seg label="Pickup" opts={PICKUP} v={pickup} set={(x) => { setPickup(x); setError(''); }} />
                    {pickup === 'Custom' && (
                        <div className="mt-3">
                            <label htmlFor="dt-custom" className="sr-only">Pickup location</label>
                            <input id="dt-custom" value={custom} onChange={(e) => { setCustom(e.target.value); setError(''); }} placeholder="City, hotel or address" className="w-full sm:max-w-sm h-12 rounded-lg border border-white/20 bg-white/[0.06] px-3 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e0b07a]" aria-invalid={!!error} aria-describedby={error ? 'dt-error' : undefined} />
                        </div>
                    )}
                </div>
                <Seg label="Trip" opts={TRIP} v={trip} set={setTrip} />
                <Seg label="Vehicle" opts={classes.map((c) => c.cls)} v={cls} set={setCls} />
                <Seg label="Return" opts={RETURN} v={ret} set={setRet} />
                <div className="flex flex-wrap gap-6">
                    <Count id="dt-pax" label="Passengers" v={pax} set={setPax} min={1} max={14} />
                    <Count id="dt-bags" label="Luggage" v={bags} set={setBags} min={0} max={16} />
                </div>
            </div>
            <div className="rounded-3xl bg-[#faf7f1] text-[#1b1a18] p-6 lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Your plan</p>
                <ul className="space-y-1.5 text-sm mb-5">
                    <li><strong>From:</strong> {pickup === 'Custom' ? custom || '-' : pickup}</li>
                    <li><strong>Trip:</strong> {trip}</li>
                    <li><strong>Return:</strong> {ret}</li>
                    <li><strong>Group:</strong> {pax} passenger{pax > 1 ? 's' : ''}, {bags} bag{bags === 1 ? '' : 's'}</li>
                    <li aria-live="polite"><strong>Vehicle:</strong> {vehicle ? vehicle.name.split(' /')[0] : `${cls} - we'll suggest one that fits`}</li>
                </ul>
                {error && <p id="dt-error" role="alert" className="mb-3 text-sm font-semibold text-red-700">{error}</p>}
                <button type="button" onClick={go} className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b1a18] px-5 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a] focus-visible:ring-offset-2">
                    Get a custom quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </button>
                <p className="text-xs text-stone-500 mt-3">You see the price before you confirm.</p>
            </div>
        </div>
    );
}
