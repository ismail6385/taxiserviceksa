'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, ChevronDown } from 'lucide-react';

export interface TabukSetDetail { from?: string; to?: string; project?: boolean; trip?: 'one' | 'return'; pax?: number }

const TUU = 'Tabuk Airport (TUU)';
const FROM_CHIPS = ['Tabuk city', TUU, 'Tabuk hotel', 'NEOM', 'AlUla'];
const TO_CHIPS = ['Tabuk city', TUU, 'NEOM', 'AlUla', 'Haql', 'Al Wajh', 'Madinah', 'Jeddah', 'Riyadh'];
const NOTE_CHIPS = ['NEOM project visit', 'Large luggage', 'Family group', 'Airport arrival'];
const short = (s: string) => s.replace(TUU, 'TUU Airport');

const field = 'w-full h-12 rounded-lg border border-stone-300 bg-white px-3 text-base text-[#241a12] placeholder:text-stone-400 focus:border-[#241a12] focus:outline-none focus:ring-2 focus:ring-[#e2a23b]/50';
const label = 'block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5';
const chip = 'shrink-0 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]';

// Tabuk request form. Hands off to the existing /booking/ flow; return legs, flight direction and site details travel in the notes.
export default function TabukQuoteCard({ vehicleOptions, initialFrom = '', title = 'Your Tabuk journey' }: { vehicleOptions: string[]; initialFrom?: string; title?: string }) {
    const router = useRouter();
    const [from, setFrom] = useState(initialFrom);
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [trip, setTrip] = useState<'one' | 'return'>('one');
    const [flight, setFlight] = useState('');
    const [notes, setNotes] = useState('');
    const [project, setProject] = useState(false);
    const [site, setSite] = useState({ name: '', point: '', reception: '', contact: '', access: '', equipment: '' });
    const [more, setMore] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<TabukSetDetail>).detail || {};
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
            if (d.trip) setTrip(d.trip);
            if (d.pax) setPax(String(d.pax));
            if (d.project !== undefined) {
                setProject(d.project);
                if (d.project) setMore(true);
            }
            setError('');
        };
        window.addEventListener('tabuk:set', on);
        return () => window.removeEventListener('tabuk:set', on);
    }, []);

    const isAirport = (s: string) => /airport|\b(TUU|NUM)\b/i.test(s);
    const airport = isAirport(`${from} ${to}`);
    const neom = /neom/i.test(`${from} ${to}`);
    const today = format(new Date(), 'yyyy-MM-dd');
    const addNote = (n: string) => {
        if (n === 'NEOM project visit') {
            setProject(true);
            setMore(true);
        }
        if (n === 'Airport arrival' && !from.trim()) setFrom(TUU);
        setNotes((s) => (s.includes(n) ? s : s ? `${s}. ${n}` : n));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || !to.trim()) {
            setError('Add a pickup and a destination so we can quote the journey.');
            return;
        }
        const p = new URLSearchParams({ from: from.trim(), to: to.trim(), passengers: pax, luggage: bags });
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        if (airport && flight.trim()) p.set('flight', flight.trim());
        const siteNotes = project
            ? [
                  'Business/project location.',
                  site.name.trim() && `Company/project: ${site.name.trim()}.`,
                  site.point.trim() && `Exact pickup point: ${site.point.trim()}.`,
                  site.reception.trim() && `Site/reception instructions: ${site.reception.trim()}.`,
                  site.contact.trim() && `Contact person: ${site.contact.trim()}.`,
                  site.access.trim() && `Access notes: ${site.access.trim()}.`,
                  site.equipment.trim() && `Equipment/luggage: ${site.equipment.trim()}.`,
              ]
            : [];
        const flightNote = airport ? (isAirport(from) ? 'Airport arrival.' : 'Airport departure.') : '';
        const n = [trip === 'return' ? 'Return journey needed.' : '', flightNote, ...siteNotes, notes.trim()].filter(Boolean).join(' ');
        if (n) p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    const siteField = (k: keyof typeof site, l: string, ph: string) => (
        <div>
            <label htmlFor={`tb-site-${k}`} className={label}>{l}</label>
            <input id={`tb-site-${k}`} className={field} value={site[k]} onChange={(e) => setSite((s) => ({ ...s, [k]: e.target.value }))} placeholder={ph} maxLength={120} autoComplete="off" />
        </div>
    );

    return (
        <form onSubmit={submit} noValidate aria-labelledby="tb-card-title" className="rounded-2xl bg-white p-5 sm:p-7 shadow-[0_30px_80px_-30px_rgba(36,26,18,0.7)] text-[#241a12]">
            <h2 id="tb-card-title" className="route-quote-title mb-5">{title}</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="tb-from" className={label}>Pickup</label>
                    <input id="tb-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder="Hotel, residence, business or airport" autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'tb-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {FROM_CHIPS.map((c) => <button key={c} type="button" onClick={() => { setFrom(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                <div>
                    <label htmlFor="tb-to" className={label}>Destination</label>
                    <input id="tb-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder="Address, hotel, site, city or airport" autoComplete="off" aria-invalid={!!error && !to.trim()} aria-describedby={error ? 'tb-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {TO_CHIPS.map((c) => <button key={c} type="button" onClick={() => { setTo(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                {neom && <p className="rounded-lg bg-[#fbf3e2] px-3 py-2.5 text-xs text-stone-700">NEOM is a region, not one address. Add the exact accommodation, site or meeting point below. NEOM access and project-site entry depend on the destination and current authorization requirements.</p>}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="tb-date" className={label}>Date</label>
                        <input id="tb-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tb-time" className={label}>Pickup time</label>
                        <input id="tb-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tb-pax" className={label}>Passengers</label>
                        <select id="tb-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="tb-bags" className={label}>Luggage</label>
                        <select id="tb-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                            {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                {airport && (
                    <div className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <label htmlFor="tb-flight" className={label}>Flight number ({isAirport(from) ? 'arrival' : 'departure'})</label>
                        <input id="tb-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV1234" maxLength={12} autoComplete="off" />
                    </div>
                )}

                <button type="button" aria-expanded={more} aria-controls="tb-more" onClick={() => setMore((m) => !m)} className="flex w-full items-center justify-between rounded-lg border border-dashed border-stone-300 px-4 py-3 text-sm font-bold text-[#241a12] hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">
                    Vehicle, return trip &amp; project details
                    <ChevronDown className={`w-4 h-4 transition-transform motion-reduce:transition-none ${more ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div id="tb-more" hidden={!more} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label htmlFor="tb-vehicle" className={label}>Vehicle</label>
                            <select id="tb-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                                <option value="">Recommend one</option>
                                {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tb-trip" className={label}>Trip</label>
                            <select id="tb-trip" className={field} value={trip} onChange={(e) => setTrip(e.target.value as 'one' | 'return')}>
                                <option value="one">One-way</option>
                                <option value="return">Return</option>
                            </select>
                        </div>
                    </div>
                    <fieldset>
                        <legend className={label}>Business or project location?</legend>
                        <div className="grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1">
                            {([[false, 'No'], [true, 'Yes']] as const).map(([v, l]) => (
                                <button key={l} type="button" aria-pressed={project === v} onClick={() => setProject(v)} className={`h-10 rounded-lg text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] ${project === v ? 'bg-[#241a12] text-white' : 'text-stone-600'}`}>{l}</button>
                            ))}
                        </div>
                    </fieldset>
                    {project && (
                        <div className="space-y-3 rounded-xl bg-[#fbf3e2] p-4 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                            {siteField('name', 'Company or project name', 'Who or where you are visiting')}
                            {siteField('point', 'Exact pickup point', 'e.g. main gate, reception, visitor car park')}
                            {siteField('reception', 'Site or reception instructions', 'Anything the driver should know')}
                            {siteField('contact', 'Contact person (optional)', 'Name or role')}
                            {siteField('access', 'Access notes (optional)', 'What the site has told you')}
                            {siteField('equipment', 'Equipment or luggage notes (optional)', 'Cases, tools, oversized items')}
                            <p className="text-xs text-stone-600">Site entry remains subject to the destination&apos;s own access requirements. Please don&apos;t send passwords or ID numbers here.</p>
                        </div>
                    )}
                    <div>
                        <label htmlFor="tb-notes" className={label}>Notes (optional)</label>
                        <input id="tb-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should plan for" maxLength={300} autoComplete="off" />
                    </div>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {NOTE_CHIPS.map((c) => <button key={c} type="button" onClick={() => addNote(c)} className={chip}>+ {c}</button>)}
                </div>
            </div>
            {error && <p id="tb-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#e2a23b] text-[#241a12] font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-[#ebb65c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241a12] focus-visible:ring-offset-2">
                Get My Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
