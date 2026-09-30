'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export type UhudTrip = 'one' | 'return' | 'ziyarat';
export interface UhudSetDetail { from?: string; to?: string; trip?: UhudTrip; notes?: string }

const FROM = ['Madinah hotel', 'Prince Mohammad bin Abdulaziz Airport (MED)', 'Madinah Train Station'];
const TO = ['Mount Uhud', "Uhud Martyrs' Cemetery area", 'Jabal al-Rumah area', 'Other Ziyarat stop'];
const TRIPS: { v: UhudTrip; l: string }[] = [{ v: 'one', l: 'One way' }, { v: 'return', l: 'Return' }, { v: 'ziyarat', l: 'Ziyarat itinerary' }];
const RETURN = ['Driver waits', 'Scheduled return time'] as const;
const DURATION = ['Up to 1 hour', '1–2 hours', 'Not sure yet'] as const;
const short = (s: string) => s.replace('Prince Mohammad bin Abdulaziz Airport (MED)', 'Madinah Airport');

const field = 'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-[#2b2522] placeholder:text-stone-400 focus:border-[#2b2522] focus:outline-none focus:ring-2 focus:ring-[#b5703f]/40';
const label = 'block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5';
const chip = 'shrink-0 min-h-[36px] rounded-full border border-stone-200 bg-stone-50 px-3 text-xs font-semibold text-stone-700 hover:border-[#b5703f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f]';
const seg = (on: boolean) => `min-h-[40px] rounded-lg px-2 text-xs sm:text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f] ${on ? 'bg-[#2b2522] text-white' : 'text-stone-600'}`;

// Uhud quote card. Hands off to the existing /booking/ flow; return, waiting and stops go into the notes.
export default function UhudQuoteCard({ vehicleOptions }: { vehicleOptions: string[] }) {
    const router = useRouter();
    const [from, setFrom] = useState('Madinah hotel');
    const [to, setTo] = useState('Mount Uhud');
    const [trip, setTrip] = useState<UhudTrip>('return');
    const [ret, setRet] = useState<(typeof RETURN)[number]>('Driver waits');
    const [dur, setDur] = useState<(typeof DURATION)[number]>('Up to 1 hour');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('0');
    const [vehicle, setVehicle] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<UhudSetDetail>).detail || {};
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
            if (d.trip) setTrip(d.trip);
            if (d.notes !== undefined) setNotes(d.notes);
            setError('');
        };
        window.addEventListener('uhud:set', on);
        return () => window.removeEventListener('uhud:set', on);
    }, []);

    const airport = /airport|\bMED\b/i.test(from);
    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || !to.trim()) {
            setError('Add a pickup and a destination so we can quote your visit.');
            return;
        }
        const p = new URLSearchParams({ from: from.trim(), to: to.trim(), passengers: pax, luggage: bags });
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        const tripNote =
            trip === 'one' ? 'Uhud visit - one way.' :
            trip === 'return' ? `Uhud visit - return. ${ret}. Expected visit: ${dur}.` :
            `Ziyarat itinerary including Uhud. Expected time at each stop: ${dur}. Other stops: `;
        p.set('notes', [tripNote, notes.trim()].filter(Boolean).join(' '));
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <form onSubmit={submit} noValidate aria-labelledby="uq-title" className="rounded-2xl bg-[#fbf8f4] p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] text-[#2b2522]">
            <h2 id="uq-title" className="route-quote-title mb-4">Plan Your Uhud Visit</h2>
            <div className="space-y-4">
                <div className="min-w-0">
                    <label htmlFor="uq-from" className={label}>Pickup</label>
                    <input id="uq-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder="Hotel name or address in Madinah" autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'uq-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">{FROM.map((c) => <button key={c} type="button" onClick={() => setFrom(c)} className={chip}>{short(c)}</button>)}</div>
                </div>
                <div className="min-w-0">
                    <label htmlFor="uq-to" className={label}>Destination</label>
                    <input id="uq-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} autoComplete="off" aria-invalid={!!error && !to.trim()} aria-describedby={error ? 'uq-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">{TO.map((c) => <button key={c} type="button" onClick={() => setTo(c)} className={chip}>{c}</button>)}</div>
                </div>
                <fieldset className="min-w-0">
                    <legend className={label}>Trip type</legend>
                    <div className="grid grid-cols-3 gap-1 rounded-xl bg-stone-100 p-1">{TRIPS.map((t) => <button key={t.v} type="button" aria-pressed={trip === t.v} onClick={() => setTrip(t.v)} className={seg(trip === t.v)}>{t.l}</button>)}</div>
                </fieldset>
                {trip === 'return' && (
                    <fieldset className="min-w-0">
                        <legend className={label}>How you return</legend>
                        <div className="grid grid-cols-2 gap-1 rounded-xl bg-stone-100 p-1">{RETURN.map((r) => <button key={r} type="button" aria-pressed={ret === r} onClick={() => setRet(r)} className={seg(ret === r)}>{r}</button>)}</div>
                    </fieldset>
                )}
                {trip !== 'one' && (
                    <div>
                        <label htmlFor="uq-dur" className={label}>{trip === 'return' ? 'Expected time at Uhud' : 'Expected time at each stop'}</label>
                        <select id="uq-dur" className={field} value={dur} onChange={(e) => setDur(e.target.value as (typeof DURATION)[number])}>{DURATION.map((d) => <option key={d}>{d}</option>)}</select>
                    </div>
                )}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="uq-date" className={label}>Date</label>
                        <input id="uq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="uq-time" className={label}>Pickup time</label>
                        <input id="uq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="uq-pax" className={label}>Passengers</label>
                        <select id="uq-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>{Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}</select>
                    </div>
                    <div>
                        <label htmlFor="uq-bags" className={label}>Luggage</label>
                        <select id="uq-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>{Array.from({ length: 17 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}</select>
                    </div>
                </div>
                <div>
                    <label htmlFor="uq-vehicle" className={label}>Vehicle</label>
                    <select id="uq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        <option value="">Recommend one</option>
                        {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="uq-notes" className={label}>Notes (optional)</label>
                    <input id="uq-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={airport ? 'Flight number and arrival time' : 'Elderly passengers, child seat, other stops'} maxLength={300} autoComplete="off" />
                </div>
            </div>
            {error && <p id="uq-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#2b2522] text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f] focus-visible:ring-offset-2">
                Get Uhud Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
