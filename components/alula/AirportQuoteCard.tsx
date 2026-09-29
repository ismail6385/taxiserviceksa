'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, PlaneLanding, PlaneTakeoff } from 'lucide-react';

const AIRPORT = 'AlUla International Airport (ULH)';

// Names must match the booking system's vehicle list (lib/supabase.ts) so the
// booking form can preselect them.
const VEHICLES = [
    { value: '', label: 'Not sure - recommend one' },
    { value: 'Toyota Camry', label: 'Toyota Camry (sedan)' },
    { value: 'Hyundai Staria VIP', label: 'Hyundai Staria (family van)' },
    { value: 'GMC Yukon XL / Denali', label: 'GMC Yukon (premium SUV)' },
    { value: 'Toyota Hiace', label: 'Toyota Hiace (group van)' },
    { value: 'Toyota Coaster', label: 'Toyota Coaster (minibus)' },
];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

// Airport-specific quote card. It collects the details an AlUla airport transfer
// needs and hands them to the existing /booking/ flow as URL params.
export default function AirportQuoteCard() {
    const router = useRouter();
    const [direction, setDirection] = useState<'arrival' | 'departure'>('arrival');
    const [place, setPlace] = useState('');
    const [flight, setFlight] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [error, setError] = useState('');

    const today = format(new Date(), 'yyyy-MM-dd');
    const arrival = direction === 'arrival';

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!place.trim()) {
            setError(arrival ? 'Tell us your hotel, resort or destination.' : 'Tell us where to collect you.');
            return;
        }
        setError('');
        const params = new URLSearchParams({
            from: arrival ? AIRPORT : place.trim(),
            to: arrival ? place.trim() : AIRPORT,
            passengers,
            luggage,
        });
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (flight.trim()) params.set('flight', flight.trim().toUpperCase());
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="quote-card-title"
            className="rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="quote-card-title" className="text-lg font-bold text-gray-900 mb-4">Get a transfer quote</h2>

            <fieldset className="mb-5">
                <legend className="sr-only">Transfer direction</legend>
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1">
                    {[
                        { v: 'arrival' as const, text: 'From the airport', icon: PlaneLanding },
                        { v: 'departure' as const, text: 'To the airport', icon: PlaneTakeoff },
                    ].map((o) => (
                        <label
                            key={o.v}
                            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold cursor-pointer transition focus-within:ring-2 focus-within:ring-primary ${direction === o.v ? 'bg-white text-gray-900 shadow-sm' : 'text-stone-600 hover:text-gray-900'}`}
                        >
                            <input type="radio" name="direction" value={o.v} checked={direction === o.v} onChange={() => setDirection(o.v)} className="sr-only" />
                            <o.icon className="w-4 h-4" aria-hidden="true" />
                            {o.text}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <label htmlFor="aq-place" className={label}>{arrival ? 'Hotel, resort or destination' : 'Pickup: hotel or resort'}</label>
                    <input id="aq-place" className={field} value={place} onChange={(e) => setPlace(e.target.value)} placeholder={arrival ? 'e.g. your hotel in AlUla' : 'Where should we collect you?'} autoComplete="off" />
                    {error && <p className="text-sm text-red-600 mt-1" role="alert">{error}</p>}
                </div>
                <div>
                    <label htmlFor="aq-flight" className={label}>Flight number</label>
                    <input id="aq-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="Enter flight number" maxLength={20} autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="aq-date" className={label}>Date</label>
                    <input id="aq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="aq-time" className={label}>{arrival ? 'Arrival time' : 'Pickup time (if known)'}</label>
                    <input id="aq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="aq-pax" className={label}>Passengers</label>
                        <select id="aq-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="aq-bags" className={label}>Suitcases</label>
                        <select id="aq-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="aq-vehicle" className={label}>Vehicle</label>
                    <select id="aq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Get My Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-stone-500">Next, you&apos;ll add your contact details and send the request. We reply with the price and pickup details.</p>
        </form>
    );
}
