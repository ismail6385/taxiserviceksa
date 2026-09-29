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

const PICKUPS = ['Madinah hotel', 'Central Area hotel', 'Madinah Airport (MED)', 'Haramain Station', 'Other Madinah location'];

const TRIPS = [
    { value: 'one-way', label: 'One way' },
    { value: 'return', label: 'Return to hotel' },
    { value: 'wait', label: 'Wait & return' },
    { value: 'ziyarat', label: 'Add Ziyarat stops' },
];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/25';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

interface Props {
    /** Destination as it should appear in the booking, e.g. "Masjid Quba, Madinah". */
    destination: string;
    title: string;
    cta: string;
}

// Transport request card for a single Madinah destination (Quba, Uhud, ...).
// Hands off to the existing /booking/ flow; the trip type travels in the destination text.
export default function DestinationQuoteCard({ destination, title, cta }: Props) {
    const router = useRouter();
    const [pickup, setPickup] = useState(PICKUPS[0]);
    const [pickupName, setPickupName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('0');
    const [vehicle, setVehicle] = useState('');
    const [trip, setTrip] = useState('return');

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const from = pickupName.trim() ? `${pickupName.trim()} (${pickup})` : pickup;
        const tripLabel = TRIPS.find((t) => t.value === trip)!.label.toLowerCase();
        const params = new URLSearchParams({ from, to: `${destination} [${tripLabel}]`, passengers, luggage });
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="dest-quote-title"
            className="rounded-2xl bg-white shadow-[0_24px_70px_-24px_rgba(6,40,30,0.55)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="dest-quote-title" className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
            <p className="text-sm text-stone-500 mb-5">Destination: {destination}</p>

            <fieldset className="mb-5">
                <legend className={label}>Your trip</legend>
                <div className="grid grid-cols-2 gap-2">
                    {TRIPS.map((t) => (
                        <label
                            key={t.value}
                            className={`rounded-lg border px-3 py-2.5 text-sm font-semibold text-center cursor-pointer transition focus-within:ring-2 focus-within:ring-emerald-700 ${trip === t.value ? 'border-emerald-700 bg-emerald-50 text-emerald-900' : 'border-stone-300 text-stone-600 hover:border-stone-400'}`}
                        >
                            <input type="radio" name="dest-trip" value={t.value} checked={trip === t.value} onChange={() => setTrip(t.value)} className="sr-only" />
                            {t.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="dq2-pickup" className={label}>Pickup</label>
                    <select id="dq2-pickup" className={field} value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        {PICKUPS.map((p) => <option key={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="dq2-name" className={label}>Hotel / place name</label>
                    <input id="dq2-name" className={field} value={pickupName} onChange={(e) => setPickupName(e.target.value)} placeholder="e.g. your hotel" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="dq2-date" className={label}>Date</label>
                    <input id="dq2-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="dq2-time" className={label}>Pickup time</label>
                    <input id="dq2-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="dq2-pax" className={label}>Passengers</label>
                        <select id="dq2-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dq2-bags" className={label}>Bags</label>
                        <select id="dq2-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="dq2-vehicle" className={label}>Vehicle</label>
                    <select id="dq2-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-emerald-800 text-white font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                {cta}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
