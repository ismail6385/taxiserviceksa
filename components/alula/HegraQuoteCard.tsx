'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, Info } from 'lucide-react';

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
const DROPOFFS = ['Winter Park', 'Hegra Visitor Centre', 'Not sure yet - as per my Hegra booking'];
const RETURNS = [
    { value: 'drop-off only', label: 'Drop-off only' },
    { value: 'return transfer', label: 'Drop-off + return transfer' },
    { value: 'driver waits (chauffeur)', label: 'Driver waits (chauffeur booking)' },
];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

// Transport-only request card for Hegra visits. Hands the details to /booking/.
export default function HegraQuoteCard() {
    const router = useRouter();
    const [pickup, setPickup] = useState(PICKUPS[0]);
    const [pickupDetail, setPickupDetail] = useState('');
    const [dropoff, setDropoff] = useState(DROPOFFS[2]);
    const [date, setDate] = useState('');
    const [tourTime, setTourTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('0');
    const [vehicle, setVehicle] = useState('');
    const [ret, setRet] = useState(RETURNS[1].value);

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const from = pickupDetail.trim() ? `${pickupDetail.trim()} (${pickup})` : pickup;
        const to = `Hegra - ${dropoff}${tourTime ? `, visit starts ${tourTime}` : ''} [${ret}]`;
        const params = new URLSearchParams({ from, to, passengers, luggage });
        if (date) params.set('date', date);
        if (vehicle) params.set('vehicle', vehicle);
        router.push(`/booking/?${params.toString()}`);
    };

    return (
        <form
            onSubmit={submit}
            aria-labelledby="hegra-quote-title"
            className="rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="hegra-quote-title" className="text-lg font-bold text-gray-900 mb-1">Hegra transfer quote</h2>
            <p className="text-sm text-stone-500 mb-5">Transportation only.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="hq-pickup" className={label}>Pickup</label>
                    <select id="hq-pickup" className={field} value={pickup} onChange={(e) => setPickup(e.target.value)}>
                        {PICKUPS.map((p) => <option key={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="hq-pickup-detail" className={label}>Hotel / place name</label>
                    <input id="hq-pickup-detail" className={field} value={pickupDetail} onChange={(e) => setPickupDetail(e.target.value)} placeholder="e.g. your hotel" autoComplete="off" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="hq-dropoff" className={label}>Destination</label>
                    <select id="hq-dropoff" className={field} value={dropoff} onChange={(e) => setDropoff(e.target.value)}>
                        {DROPOFFS.map((d) => <option key={d}>{d}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="hq-date" className={label}>Visit date</label>
                    <input id="hq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="hq-time" className={label}>Hegra visit time</label>
                    <input id="hq-time" type="time" className={field} value={tourTime} onChange={(e) => setTourTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="hq-pax" className={label}>Passengers</label>
                        <select id="hq-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="hq-bags" className={label}>Bags</label>
                        <select id="hq-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="hq-vehicle" className={label}>Vehicle</label>
                    <select id="hq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="hq-return" className={label}>After your visit</label>
                    <select id="hq-return" className={field} value={ret} onChange={(e) => setRet(e.target.value)}>
                        {RETURNS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="group mt-6 w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.99]"
            >
                Request Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-stone-500 flex gap-1.5">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                Please arrange your Hegra admission and tour separately through the official AlUla booking channels.
            </p>
        </form>
    );
}
