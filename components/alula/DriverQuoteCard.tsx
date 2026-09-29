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

// Hourly hire in the booking system takes any whole number of hours; "full day"
// and "several days" are passed as notes so the hours are agreed with the quote.
const DURATIONS = [
    { value: '3', label: '3 hours' },
    { value: '4', label: '4 hours' },
    { value: '5', label: '5 hours' },
    { value: '6', label: '6 hours' },
    { value: '8', label: '8 hours' },
    { value: 'full-day', label: 'Full day' },
    { value: 'multi-day', label: 'Several days' },
];

const PICKUPS = ['AlUla hotel or resort', 'AlUla International Airport (ULH)', 'Other location in AlUla'];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

export default function DriverQuoteCard() {
    const router = useRouter();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('full-day');
    const [pickup, setPickup] = useState(PICKUPS[0]);
    const [pickupName, setPickupName] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [stops, setStops] = useState('');

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const from = pickupName.trim() ? `${pickupName.trim()} (${pickup})` : pickup;
        const durationNote = duration === 'full-day' ? 'Full-day private driver in AlUla. ' : duration === 'multi-day' ? 'Private driver for several days in AlUla. ' : '';
        const notes = `${durationNote}${stops.trim() ? `Planned stops: ${stops.trim()}` : 'Itinerary to be discussed.'}`;
        const params = new URLSearchParams({ trip: 'hourly', from, passengers, notes });
        if (/^\d+$/.test(duration)) params.set('hours', duration);
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="driver-quote-title"
            className="rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="driver-quote-title" className="text-lg font-bold text-gray-900 mb-1">Private driver quote</h2>
            <p className="text-sm text-stone-500 mb-5">One vehicle and driver for the time you choose.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="dq-date" className={label}>Date</label>
                    <input id="dq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="dq-time" className={label}>Start time</label>
                    <input id="dq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="dq-duration" className={label}>Duration</label>
                    <select id="dq-duration" className={field} value={duration} onChange={(e) => setDuration(e.target.value)}>
                        {DURATIONS.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="dq-pax" className={label}>Passengers</label>
                    <select id="dq-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                        {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="dq-pickup" className={label}>Pickup</label>
                    <select id="dq-pickup" className={field} value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        {PICKUPS.map((p) => <option key={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="dq-pickup-name" className={label}>Hotel / place name</label>
                    <input id="dq-pickup-name" className={field} value={pickupName} onChange={(e) => setPickupName(e.target.value)} placeholder="e.g. your hotel" autoComplete="off" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="dq-vehicle" className={label}>Vehicle</label>
                    <select id="dq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="dq-stops" className={label}>Planned stops</label>
                    <textarea
                        id="dq-stops"
                        rows={3}
                        maxLength={600}
                        className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        value={stops}
                        onChange={(e) => setStops(e.target.value)}
                        placeholder="Tell us where you'd like to go"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Request Private Driver Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-stone-500">Availability is confirmed with your quote.</p>
        </form>
    );
}
