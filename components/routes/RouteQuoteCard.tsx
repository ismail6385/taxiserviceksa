'use client';

import { useEffect, useState } from 'react';
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
    { value: 'Mercedes Sprinter', label: 'Mercedes Sprinter (group van)' },
];

const field =
    'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/25';
const label = 'block text-xs font-semibold uppercase tracking-wide text-stone-600 mb-1.5';

export interface RouteQuoteCardProps {
    title: string;
    cta: string;
    /** City appended to the typed pickup/destination. Leave empty for open-ended trips. */
    fromCity?: string;
    toCity?: string;
    fromPlaceholder?: string;
    toPlaceholder?: string;
    fromChips?: string[];
    toChips?: string[];
    /** Optional stop checkbox, e.g. a Miqat stop; its note is sent with the booking. */
    stop?: { label: string; note: string; defaultChecked?: boolean };
    returnNote?: string;
    /** Show an optional flight number field (sent as the booking's flight param). 'auto' shows it only once pickup or destination mentions an airport. */
    showFlight?: boolean | 'auto';
    buttonClass?: string;
    /** Extra optional text fields; each non-empty value is added to the booking notes with its label. */
    extraFields?: { id: string; label: string; placeholder?: string }[];
}

// Intercity route quote card; hands off to /booking/ with stop / return / extras as notes.
export default function RouteQuoteCard({ title, cta, fromCity = '', toCity = '', fromPlaceholder = 'Hotel or location', toPlaceholder = 'Hotel, resort or location', fromChips = [], toChips = [], stop, returnNote, showFlight = false, extraFields = [], buttonClass = 'bg-emerald-800 hover:bg-emerald-900 focus-visible:ring-emerald-700' }: RouteQuoteCardProps) {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('2');
    const [luggage, setLuggage] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [withStop, setWithStop] = useState(!!stop?.defaultChecked);
    const [ret, setRet] = useState(false);
    const [notes, setNotes] = useState('');
    const [flight, setFlight] = useState('');
    const [extra, setExtra] = useState<Record<string, string>>({});

    // Other components on the page can prefill the card: window.dispatchEvent(new CustomEvent('routequote:set', { detail: { to: 'Manama' } }))
    useEffect(() => {
        const onSet = (e: Event) => {
            const d = (e as CustomEvent<{ from?: string; to?: string }>).detail ?? {};
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
        };
        window.addEventListener('routequote:set', onSet);
        return () => window.removeEventListener('routequote:set', onSet);
    }, []);

    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const note = [...extraFields.filter((f) => extra[f.id]?.trim()).map((f) => `${f.label}: ${extra[f.id].trim()}.`), withStop && stop ? stop.note : '', ret ? returnNote ?? (toCity && fromCity ? `Return trip ${toCity} to ${fromCity} also needed - date to confirm.` : 'Return trip also needed - date and time to confirm.') : '', notes.trim()]
            .filter(Boolean)
            .join(' ');
        const place = (v: string, city: string) => (v.trim() ? (city ? `${v.trim()}, ${city}` : v.trim()) : city ? `${city} hotel` : '');
        const params = new URLSearchParams({ passengers, luggage });
        if (place(from, fromCity)) params.set('from', place(from, fromCity));
        if (place(to, toCity)) params.set('to', place(to, toCity));
        if (date) params.set('date', date);
        if (time) params.set('time', time);
        if (vehicle) params.set('vehicle', vehicle);
        if (note) params.set('notes', note);
        if (flight.trim() && (showFlight === true || /airport|\bRUH\b|\(RUH\)/i.test(`${from} ${to}`))) params.set('flight', flight.trim());
        router.push(`/booking/?${params.toString()}`);
    };

    const chips = (list: string[], set: (v: string) => void, name: string) =>
        list.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2" aria-label={name}>
                {list.map((c) => (
                    <button key={c} type="button" onClick={() => set(c)} className="rounded-full border border-stone-300 px-3 py-1 text-xs font-medium text-stone-700 hover:border-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                        {c}
                    </button>
                ))}
            </div>
        );

    return (
        <form
            onSubmit={submit}
            aria-labelledby="route-quote-title"
            className="rounded-2xl bg-white shadow-[0_24px_70px_-24px_rgba(20,20,10,0.6)] ring-1 ring-stone-200 p-5 sm:p-7 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100"
        >
            <h2 id="route-quote-title" className="route-quote-title text-lg font-bold text-gray-900 mb-5">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <label htmlFor="rq-from" className={label}>{fromCity ? `Pickup in ${fromCity}` : 'Pickup'}</label>
                    <input id="rq-from" className={field} value={from} onChange={(e) => setFrom(e.target.value)} placeholder={fromPlaceholder} autoComplete="off" />
                    {chips(fromChips, setFrom, 'Common pickup points')}
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="rq-to" className={label}>{toCity ? `Destination in ${toCity}` : 'Destination'}</label>
                    <input id="rq-to" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder={toPlaceholder} autoComplete="off" />
                    {chips(toChips, setTo, 'Common destinations')}
                </div>
                <div>
                    <label htmlFor="rq-date" className={label}>Travel date</label>
                    <input id="rq-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="rq-time" className={label}>Pickup time</label>
                    <input id="rq-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="rq-pax" className={label}>Passengers</label>
                        <select id="rq-pax" className={field} value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="rq-bags" className={label}>Suitcases</label>
                        <select id="rq-bags" className={field} value={luggage} onChange={(e) => setLuggage(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="rq-vehicle" className={label}>Vehicle</label>
                    <select id="rq-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                        {VEHICLES.map((v) => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                    {stop && (
                        <label className="flex flex-1 items-center gap-3 rounded-lg border border-stone-300 px-3 py-3 text-sm font-medium text-gray-800 cursor-pointer focus-within:ring-2 focus-within:ring-emerald-700">
                            <input type="checkbox" checked={withStop} onChange={(e) => setWithStop(e.target.checked)} className="w-4 h-4 accent-emerald-700" />
                            {stop.label}
                        </label>
                    )}
                    <label className="flex flex-1 items-center gap-3 rounded-lg border border-stone-300 px-3 py-3 text-sm font-medium text-gray-800 cursor-pointer focus-within:ring-2 focus-within:ring-emerald-700">
                        <input type="checkbox" checked={ret} onChange={(e) => setRet(e.target.checked)} className="w-4 h-4 accent-emerald-700" />
                        I also need a return trip
                    </label>
                </div>
                {extraFields.map((f) => (
                    <div key={f.id} className="sm:col-span-2">
                        <label htmlFor={`rq-${f.id}`} className={label}>{f.label} (optional)</label>
                        <input id={`rq-${f.id}`} className={field} value={extra[f.id] ?? ''} onChange={(e) => setExtra((x) => ({ ...x, [f.id]: e.target.value }))} placeholder={f.placeholder} maxLength={150} autoComplete="off" />
                    </div>
                ))}
                {(showFlight === true || (showFlight === 'auto' && /airport|\bRUH\b|\(RUH\)/i.test(`${from} ${to}`))) && (
                    <div className="sm:col-span-2">
                        <label htmlFor="rq-flight" className={label}>Flight number (optional)</label>
                        <input id="rq-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV1234" maxLength={12} autoComplete="off" />
                    </div>
                )}
                <div className="sm:col-span-2">
                    <label htmlFor="rq-notes" className={label}>Special requirements (optional)</label>
                    <input id="rq-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. child seat, extra stop" maxLength={300} autoComplete="off" />
                </div>
            </div>
            <button
                type="submit"
                className={`group mt-6 w-full h-14 rounded-xl text-white font-bold text-base inline-flex items-center justify-center gap-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonClass} active:scale-[0.99]`}
            >
                {cta}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
