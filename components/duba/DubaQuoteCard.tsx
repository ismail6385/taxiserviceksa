'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export interface DubaSetDetail { from?: string; to?: string; trip?: 'one' | 'return' | 'hourly'; notes?: string }

const FROM = ['Duba city', 'Duba hotel', 'Duba residence', 'Duba coast'];
const TO = ['Tabuk', 'Tabuk Airport (TUU)', 'Al Wajh', 'Haql', 'NEOM area', 'AlUla'];
const TRIP = [{ v: 'one', l: 'One-way' }, { v: 'return', l: 'Return' }, { v: 'hourly', l: 'Hourly / itinerary' }] as const;

const field = 'w-full h-12 rounded-lg border border-slate-300 bg-white px-3 text-base text-[#0b2a3a] placeholder:text-slate-400 focus:border-[#0b2a3a] focus:outline-none focus:ring-2 focus:ring-[#cfa77a]/50';
const label = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5';
const chip = 'shrink-0 min-h-[36px] rounded-full border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 hover:border-[#1f6f8b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f8b]';

// Duba quote card. Hands off to the existing /booking/ flow (hourly mode for itineraries).
export default function DubaQuoteCard({ vehicleOptions }: { vehicleOptions: string[] }) {
    const router = useRouter();
    const [from, setFrom] = useState('Duba city');
    const [to, setTo] = useState('');
    const [trip, setTrip] = useState<'one' | 'return' | 'hourly'>('one');
    const [hours, setHours] = useState('6');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<DubaSetDetail>).detail || {};
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
            if (d.trip) setTrip(d.trip);
            if (d.notes !== undefined) setNotes(d.notes);
            setError('');
        };
        window.addEventListener('duba:set', on);
        return () => window.removeEventListener('duba:set', on);
    }, []);

    const hourly = trip === 'hourly';
    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || (!hourly && !to.trim())) {
            setError(hourly ? 'Add your pickup location.' : 'Add a pickup and a destination so we can quote the journey.');
            return;
        }
        const p = new URLSearchParams({ from: from.trim(), passengers: pax, luggage: bags });
        if (to.trim()) p.set('to', to.trim());
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        if (hourly) {
            p.set('trip', 'hourly');
            p.set('hours', hours);
        }
        const n = [trip === 'return' ? 'Return journey needed.' : '', notes.trim()].filter(Boolean).join(' ');
        if (n) p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <form onSubmit={submit} noValidate aria-labelledby="dq-title" className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] text-[#0b2a3a]">
            <h2 id="dq-title" className="route-quote-title mb-4">Where are you going from Duba?</h2>
            <div className="space-y-4">
                <div className="min-w-0">
                    <label htmlFor="dq-from" className={label}>Pickup</label>
                    <input id="dq-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder="Hotel, residence or address in Duba" autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'dq-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">{FROM.map((c) => <button key={c} type="button" onClick={() => setFrom(c)} className={chip}>{c}</button>)}</div>
                </div>
                <div className="min-w-0">
                    <label htmlFor="dq-to" className={label}>{hourly ? 'Destination (optional)' : 'Destination'}</label>
                    <input id="dq-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder="City, town, hotel or airport" autoComplete="off" aria-invalid={!!error && !hourly && !to.trim()} aria-describedby={error ? 'dq-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">{TO.map((c) => <button key={c} type="button" onClick={() => { setTo(c); setError(''); }} className={chip}>{c}</button>)}</div>
                </div>
                <fieldset className="min-w-0">
                    <legend className={label}>Trip</legend>
                    <div className="grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1">
                        {TRIP.map((t) => <button key={t.v} type="button" aria-pressed={trip === t.v} onClick={() => setTrip(t.v)} className={`min-h-[40px] rounded-lg px-1 text-xs sm:text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f8b] ${trip === t.v ? 'bg-[#0b2a3a] text-white' : 'text-slate-600'}`}>{t.l}</button>)}
                    </div>
                </fieldset>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="dq-date" className={label}>Date</label>
                        <input id="dq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dq-time" className={label}>Time</label>
                        <input id="dq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dq-pax" className={label}>Passengers</label>
                        <select id="dq-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>{Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}</select>
                    </div>
                    <div>
                        <label htmlFor="dq-bags" className={label}>Luggage</label>
                        <select id="dq-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>{Array.from({ length: 17 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}</select>
                    </div>
                    <div className={hourly ? '' : 'col-span-2'}>
                        <label htmlFor="dq-vehicle" className={label}>Vehicle</label>
                        <select id="dq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                            <option value="">Recommend one</option>
                            {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                        </select>
                    </div>
                    {hourly && (
                        <div>
                            <label htmlFor="dq-hours" className={label}>Hours</label>
                            <select id="dq-hours" className={field} value={hours} onChange={(e) => setHours(e.target.value)}>{['3', '4', '6', '8', '10', '12'].map((h) => <option key={h} value={h}>{h} hours</option>)}</select>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="dq-notes" className={label}>Notes (optional)</label>
                    <input id="dq-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Stops, flight number, exact place" maxLength={300} autoComplete="off" />
                </div>
            </div>
            {error && <p id="dq-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#0b2a3a] text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] focus-visible:ring-offset-2">
                Get a Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
