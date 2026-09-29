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

const PICKUPS = ['AlUla hotel or resort', 'AlUla International Airport (ULH)', 'AlUla Old Town', 'Other location'];

export const TRIP_TYPES = [
    { value: 'one-way', label: 'One-way' },
    { value: 'return', label: 'Return transfer' },
    { value: 'wait', label: 'Driver waits & returns' },
    { value: 'hourly', label: 'Hourly chauffeur' },
] as const;

const DESTINATION = 'Elephant Rock (Jabal AlFil)';

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

// Transport-only request card for Elephant Rock visits; hands off to /booking/.
export default function ElephantQuoteCard() {
    const router = useRouter();
    const [pickup, setPickup] = useState(PICKUPS[0]);
    const [pickupName, setPickupName] = useState('');
    const [date, setDate] = useState('');
    const [arrival, setArrival] = useState('');
    const [trip, setTrip] = useState<string>('wait');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('0');
    const [vehicle, setVehicle] = useState('');

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const from = pickupName.trim() ? `${pickupName.trim()} (${pickup})` : pickup;
        const arrivalNote = arrival ? `Preferred arrival at Elephant Rock: ${arrival}. ` : '';
        const params = new URLSearchParams({ from, passengers, luggage });
        if (trip === 'hourly') {
            params.set('trip', 'hourly');
            params.set('notes', `${arrivalNote}Hourly chauffeur including Elephant Rock.`);
        } else {
            const label = trip === 'return' ? 'return transfer' : trip === 'wait' ? 'driver waits and returns' : 'one-way';
            params.set('to', `${DESTINATION} [${label}]`);
            if (arrivalNote) params.set('notes', arrivalNote.trim());
        }
        if (date) params.set('date', date);
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="er-quote-title"
            className="rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="er-quote-title" className="text-lg font-bold text-gray-900 mb-1">Elephant Rock transfer</h2>
            <p className="text-sm text-stone-500 mb-5">Destination: {DESTINATION}</p>

            <fieldset className="mb-5">
                <legend className={label}>Trip type</legend>
                <div className="grid grid-cols-2 gap-2">
                    {TRIP_TYPES.map((t) => (
                        <label
                            key={t.value}
                            className={`rounded-lg border px-3 py-2.5 text-sm font-semibold text-center cursor-pointer transition focus-within:ring-2 focus-within:ring-primary ${trip === t.value ? 'border-primary bg-primary/5 text-gray-900' : 'border-stone-300 text-stone-600 hover:border-stone-400'}`}
                        >
                            <input type="radio" name="trip" value={t.value} checked={trip === t.value} onChange={() => setTrip(t.value)} className="sr-only" />
                            {t.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="er-pickup" className={label}>Pickup</label>
                    <select id="er-pickup" className={field} value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        {PICKUPS.map((p) => <option key={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="er-pickup-name" className={label}>Hotel / place name</label>
                    <input id="er-pickup-name" className={field} value={pickupName} onChange={(e) => setPickupName(e.target.value)} placeholder="e.g. your hotel" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="er-date" className={label}>Date</label>
                    <input id="er-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="er-arrival" className={label}>Preferred arrival time</label>
                    <input id="er-arrival" type="time" className={field} value={arrival} onChange={(e) => setArrival(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="er-pax" className={label}>Passengers</label>
                        <select id="er-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="er-bags" className={label}>Bags</label>
                        <select id="er-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="er-vehicle" className={label}>Vehicle</label>
                    <select id="er-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Get Elephant Rock Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-stone-500">Transportation only - we set the pickup time from your preferred arrival.</p>
        </form>
    );
}
