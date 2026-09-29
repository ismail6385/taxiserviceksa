'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

// Names must match the booking system's vehicle list (lib/supabase.ts).
const VEHICLES = [
    { value: '', label: 'Not sure - recommend one' },
    { value: 'Toyota Camry', label: 'Toyota Camry (sedan)' },
    { value: 'Hyundai Staria VIP', label: 'Hyundai Staria (family van)' },
    { value: 'GMC Yukon XL / Denali', label: 'GMC Yukon (premium SUV)' },
    { value: 'Toyota Hiace', label: 'Toyota Hiace (group van)' },
    { value: 'Toyota Coaster', label: 'Toyota Coaster (minibus)' },
];

const PICKUP_CHIPS = ['Central Area hotel', 'Madinah Airport (MED)', 'Madinah Haramain Station'];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/25';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

// Madinah -> Makkah quote card; hands off to /booking/. Miqat stop, return and
// special requirements travel as booking notes.
export default function MadinahMakkahQuoteCard() {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [miqat, setMiqat] = useState(true);
    const [ret, setRet] = useState(false);
    const [notes, setNotes] = useState('');

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const note = [
            miqat ? 'Please plan a stop at the Miqat (Dhul-Hulayfah / Abyar Ali).' : '',
            ret ? 'Return trip Makkah to Madinah also needed - date to confirm.' : '',
            notes.trim(),
        ]
            .filter(Boolean)
            .join(' ');
        const params = new URLSearchParams({
            from: from.trim() ? `${from.trim()}, Madinah` : 'Madinah hotel',
            to: to.trim() ? `${to.trim()}, Makkah` : 'Makkah hotel',
            passengers,
            luggage,
        });
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (vehicle) params.set('vehicle', vehicle);
        if (note) params.set('notes', note);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="mm-quote-title"
            className="rounded-2xl bg-white shadow-[0_24px_70px_-24px_rgba(6,40,30,0.6)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="mm-quote-title" className="text-lg font-bold text-gray-900 mb-5">Madinah → Makkah quote</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <label htmlFor="mm-from" className={label}>Pickup in Madinah</label>
                    <input id="mm-from" className={field} value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Hotel or location" autoComplete="off" />
                    <div className="flex flex-wrap gap-1.5 mt-2" aria-label="Common pickup points">
                        {PICKUP_CHIPS.map((c) => (
                            <button key={c} type="button" onClick={() => setFrom(c)} className="rounded-full border border-stone-300 px-3 py-1 text-xs font-medium text-stone-700 hover:border-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mm-to" className={label}>Destination in Makkah</label>
                    <input id="mm-to" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder="Hotel or location" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="mm-date" className={label}>Travel date</label>
                    <input id="mm-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="mm-time" className={label}>Pickup time</label>
                    <input id="mm-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="mm-pax" className={label}>Passengers</label>
                        <select id="mm-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="mm-bags" className={label}>Suitcases</label>
                        <select id="mm-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="mm-vehicle" className={label}>Vehicle</label>
                    <select id="mm-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                    <label className="flex flex-1 items-center gap-3 rounded-lg border border-stone-300 px-3 py-3 text-sm font-medium text-gray-800 cursor-pointer focus-within:ring-2 focus-within:ring-emerald-700">
                        <input type="checkbox" checked={miqat} onChange={(e) => setMiqat(e.target.checked)} className="w-4 h-4 accent-emerald-700" />
                        Plan a Miqat stop
                    </label>
                    <label className="flex flex-1 items-center gap-3 rounded-lg border border-stone-300 px-3 py-3 text-sm font-medium text-gray-800 cursor-pointer focus-within:ring-2 focus-within:ring-emerald-700">
                        <input type="checkbox" checked={ret} onChange={(e) => setRet(e.target.checked)} className="w-4 h-4 accent-emerald-700" />
                        I also need a return trip
                    </label>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mm-notes" className={label}>Special requirements (optional)</label>
                    <input id="mm-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. child seat, wheelchair, extra stop" maxLength={300} autoComplete="off" />
                </div>
            </div>
            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-emerald-800 text-white font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Get My Route Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
