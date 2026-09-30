'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { KHAYBAR, type KhaybarNeed, type KhaybarStart } from '@/data/khaybar';

export interface KhaybarSetDetail { start?: KhaybarStart; from?: string; need?: KhaybarNeed; to?: string; notes?: string }

const field = 'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-[#1b1a18] placeholder:text-stone-400 focus:border-[#1b1a18] focus:outline-none focus:ring-2 focus:ring-[#c08a4a]/40';
const label = 'block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5';
const chip = (on: boolean) => `shrink-0 min-h-[40px] rounded-full border px-3.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a] ${on ? 'border-[#1b1a18] bg-[#1b1a18] text-white' : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-[#c08a4a]'}`;
const short = (s: string) => s.replace('Prince Mohammad bin Abdulaziz Airport (MED)', 'Madinah Airport');

// Khaybar quote card. Hands off to the existing /booking/ flow; waiting, stops and return travel in the notes.
export default function KhaybarQuoteCard({ vehicleOptions }: { vehicleOptions: string[] }) {
    const router = useRouter();
    const [start, setStart] = useState<KhaybarStart>('Madinah');
    const [custom, setCustom] = useState('');
    const [need, setNeed] = useState<KhaybarNeed>('Return trip');
    const [to, setTo] = useState('Khaybar');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('1');
    const [vehicle, setVehicle] = useState('');
    const [flight, setFlight] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<KhaybarSetDetail>).detail || {};
            if (d.start) setStart(d.start);
            if (d.from !== undefined) {
                setStart('Custom pickup');
                setCustom(d.from);
            }
            if (d.need) setNeed(d.need);
            if (d.to !== undefined) setTo(d.to);
            if (d.notes !== undefined) setNotes(d.notes);
            setError('');
        };
        window.addEventListener('khaybar:set', on);
        return () => window.removeEventListener('khaybar:set', on);
    }, []);

    const needsText = start === 'Another Saudi city' || start === 'Custom pickup';
    const airport = start.includes('(MED)');
    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const from = needsText ? custom.trim() : start;
        if (!from) {
            setError('Tell us where you are starting.');
            return;
        }
        if (!to.trim()) {
            setError('Add a destination.');
            return;
        }
        const p = new URLSearchParams({ from, to: to.trim(), passengers: pax, luggage: bags });
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        if (airport && flight.trim()) p.set('flight', flight.trim());
        const needNote: Record<KhaybarNeed, string> = {
            'One-way transfer': 'One-way transfer.',
            'Return trip': 'Return trip needed.',
            'Full-day Khaybar visit': 'Full-day Khaybar visit - driver waits during the planned visit, then return.',
            'Multi-stop itinerary': 'Multi-stop itinerary - stops: ',
            'Custom private trip': 'Custom private trip.',
        };
        p.set('notes', [`Khaybar trip. ${needNote[need]}`, notes.trim()].filter(Boolean).join(' '));
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <form onSubmit={submit} noValidate aria-labelledby="kq-title" className="rounded-2xl bg-[#faf7f1]/95 backdrop-blur p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] text-[#1b1a18]">
            <h2 id="kq-title" className="route-quote-title mb-4">Plan your Khaybar trip</h2>
            <fieldset className="mb-4 min-w-0">
                <legend className={label}>Where are you starting?</legend>
                <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap">
                    {KHAYBAR.starts.map((s) => <button key={s} type="button" aria-pressed={start === s} onClick={() => { setStart(s); setError(''); }} className={chip(start === s)}>{short(s)}</button>)}
                </div>
                {needsText && (
                    <div className="mt-3">
                        <label htmlFor="kq-custom" className="sr-only">Pickup address or city</label>
                        <input id="kq-custom" className={field} value={custom} onChange={(e) => { setCustom(e.target.value); setError(''); }} placeholder="City, hotel or address" autoComplete="off" aria-invalid={!!error && !custom.trim()} aria-describedby={error ? 'kq-error' : undefined} />
                    </div>
                )}
            </fieldset>
            <fieldset className="mb-4 min-w-0">
                <legend className={label}>What do you need?</legend>
                <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap">
                    {KHAYBAR.needs.map((n) => <button key={n} type="button" aria-pressed={need === n} onClick={() => setNeed(n)} className={chip(need === n)}>{n}</button>)}
                </div>
            </fieldset>
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                    <label htmlFor="kq-to" className={label}>Destination</label>
                    <input id="kq-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder="Khaybar, or another destination" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="kq-date" className={label}>Date</label>
                    <input id="kq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="kq-time" className={label}>Pickup time</label>
                    <input id="kq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="kq-pax" className={label}>Passengers</label>
                    <select id="kq-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                        {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="kq-bags" className={label}>Luggage</label>
                    <select id="kq-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                        {Array.from({ length: 17 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="kq-vehicle" className={label}>Vehicle</label>
                    <select id="kq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        <option value="">Recommend one</option>
                        {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                    </select>
                </div>
                {airport && (
                    <div className="col-span-2">
                        <label htmlFor="kq-flight" className={label}>Flight number</label>
                        <input id="kq-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV1234" maxLength={12} autoComplete="off" />
                    </div>
                )}
                <div className="col-span-2">
                    <label htmlFor="kq-notes" className={label}>Stops or notes (optional)</label>
                    <input id="kq-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. continue to AlUla, return by 6 pm" maxLength={300} autoComplete="off" />
                </div>
            </div>
            {error && <p id="kq-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#1b1a18] text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a] focus-visible:ring-offset-2">
                Get a Khaybar Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
