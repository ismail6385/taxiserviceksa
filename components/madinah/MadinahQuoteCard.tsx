'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, Plane, Train, Landmark, Route } from 'lucide-react';

const AIRPORT = 'Prince Mohammad bin Abdulaziz International Airport (MED)';
const STATION = 'Madinah Haramain Train Station';

// Names must match the booking system's vehicle list (lib/supabase.ts).
const VEHICLES = [
    { value: '', label: 'Not sure - recommend one' },
    { value: 'Toyota Camry', label: 'Toyota Camry (sedan)' },
    { value: 'Hyundai Staria VIP', label: 'Hyundai Staria (family van)' },
    { value: 'GMC Yukon XL / Denali', label: 'GMC Yukon (premium SUV)' },
    { value: 'Toyota Hiace', label: 'Toyota Hiace (group van)' },
    { value: 'Toyota Coaster', label: 'Toyota Coaster (minibus)' },
];

const PRESETS = [
    { key: 'airport', label: 'Airport', icon: Plane, from: AIRPORT, to: '' },
    { key: 'ziyarat', label: 'Ziyarat', icon: Landmark, from: '', to: 'Madinah Ziyarat (Quba, Uhud, Qiblatain) and back to hotel' },
    { key: 'station', label: 'Train Station', icon: Train, from: STATION, to: '' },
    { key: 'makkah', label: 'To Makkah', icon: Route, from: '', to: 'Makkah hotel' },
];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/25';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

// Madinah quote card with quick journey presets; hands off to /booking/.
export default function MadinahQuoteCard() {
    const router = useRouter();
    const [preset, setPreset] = useState<string | null>(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [error, setError] = useState('');

    const today = format(new Date(), 'yyyy-MM-dd');

    const choose = (key: string) => {
        const p = PRESETS.find((x) => x.key === key)!;
        setPreset(key);
        setFrom(p.from);
        setTo(p.to);
        setError('');
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || !to.trim()) {
            setError('Please add both pickup and destination - a hotel name is fine.');
            return;
        }
        setError('');
        const params = new URLSearchParams({ from: from.trim(), to: to.trim(), passengers, luggage });
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="madinah-quote-title"
            className="rounded-2xl bg-white shadow-[0_24px_70px_-24px_rgba(6,40,30,0.55)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100 [animation-delay:150ms]"
        >
            <h2 id="madinah-quote-title" className="text-lg font-bold text-gray-900 mb-4">Where are you going?</h2>

            <div className="grid grid-cols-4 gap-2 mb-5" role="group" aria-label="Common Madinah journeys">
                {PRESETS.map((p) => (
                    <button
                        key={p.key}
                        type="button"
                        onClick={() => choose(p.key)}
                        aria-pressed={preset === p.key}
                        className={`flex flex-col items-center gap-1.5 rounded-xl border px-1 py-3 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${preset === p.key ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-stone-200 text-stone-600 hover:border-stone-400'}`}
                    >
                        <p.icon className="w-5 h-5" aria-hidden="true" />
                        {p.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <label htmlFor="mq-from" className={label}>Pickup</label>
                    <input id="mq-from" className={field} value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Airport, station or hotel" autoComplete="off" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mq-to" className={label}>Destination</label>
                    <input id="mq-to" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder="Hotel, Ziyarat or city" autoComplete="off" />
                    {error && <p className="text-sm text-red-600 mt-1" role="alert">{error}</p>}
                </div>
                <div>
                    <label htmlFor="mq-date" className={label}>Date</label>
                    <input id="mq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="mq-time" className={label}>Time</label>
                    <input id="mq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="mq-pax" className={label}>Passengers</label>
                        <select id="mq-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="mq-bags" className={label}>Bags</label>
                        <select id="mq-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="mq-vehicle" className={label}>Vehicle</label>
                    <select id="mq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-emerald-800 text-white font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Get My Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
