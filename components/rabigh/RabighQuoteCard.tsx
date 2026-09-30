'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, ChevronDown } from 'lucide-react';

export interface RabighSetDetail { from?: string; to?: string; industrial?: boolean; trip?: 'one' | 'return' }

const FROM_CHIPS = ['Rabigh', 'Rabigh industrial area', 'KAEC', 'Thuwal', 'Jeddah', 'King Abdulaziz International Airport (JED)'];
const TO_CHIPS = ['Rabigh', 'Jeddah', 'KAEC', 'Thuwal', 'Madinah', 'Prince Mohammad bin Abdulaziz Airport (MED)'];
const NOTE_CHIPS = ['Industrial site', 'Family with luggage', 'Early morning pickup', 'Return same day'];
const short = (s: string) => s.replace('King Abdulaziz International Airport (JED)', 'Jeddah Airport').replace('Prince Mohammad bin Abdulaziz Airport (MED)', 'Madinah Airport');

const field = 'w-full h-12 rounded-lg border border-slate-300 bg-white px-3 text-base text-[#10213f] placeholder:text-slate-400 focus:border-[#10213f] focus:outline-none focus:ring-2 focus:ring-[#f07b5a]/40';
const label = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5';
const chip = 'shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#f07b5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]';

// Rabigh request form. Hands off to the existing /booking/ flow; return legs and site details travel in the notes.
export default function RabighQuoteCard({ vehicleOptions }: { vehicleOptions: string[] }) {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [trip, setTrip] = useState<'one' | 'return'>('one');
    const [flight, setFlight] = useState('');
    const [notes, setNotes] = useState('');
    const [industrial, setIndustrial] = useState(false);
    const [site, setSite] = useState({ name: '', gate: '', contact: '', ppe: '', point: '' });
    const [more, setMore] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<RabighSetDetail>).detail || {};
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
            if (d.trip) setTrip(d.trip);
            if (d.industrial !== undefined) {
                setIndustrial(d.industrial);
                if (d.industrial) setMore(true);
            }
            setError('');
        };
        window.addEventListener('rabigh:set', on);
        return () => window.removeEventListener('rabigh:set', on);
    }, []);

    const airport = /airport|\b(JED|MED)\b/i.test(`${from} ${to}`);
    const today = format(new Date(), 'yyyy-MM-dd');
    const addNote = (n: string) => {
        if (n === 'Industrial site') {
            setIndustrial(true);
            setMore(true);
            return;
        }
        if (n === 'Return same day') setTrip('return');
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
        const siteNotes = industrial
            ? [
                  'Industrial/business site.',
                  site.name.trim() && `Site/company: ${site.name.trim()}.`,
                  site.point.trim() && `Pickup/drop-off point: ${site.point.trim()}.`,
                  site.gate.trim() && `Gate/reception: ${site.gate.trim()}.`,
                  site.contact.trim() && `On-site contact: ${site.contact.trim()}.`,
                  site.ppe.trim() && `Access/PPE notes: ${site.ppe.trim()}.`,
              ]
            : [];
        const n = [trip === 'return' ? 'Return journey needed.' : '', ...siteNotes, notes.trim()].filter(Boolean).join(' ');
        if (n) p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    const siteField = (k: keyof typeof site, l: string, ph: string) => (
        <div>
            <label htmlFor={`rb-site-${k}`} className={label}>{l}</label>
            <input id={`rb-site-${k}`} className={field} value={site[k]} onChange={(e) => setSite((s) => ({ ...s, [k]: e.target.value }))} placeholder={ph} maxLength={120} autoComplete="off" />
        </div>
    );

    return (
        <form onSubmit={submit} noValidate aria-labelledby="rb-card-title" className="rounded-2xl bg-white p-5 sm:p-7 shadow-[0_30px_80px_-30px_rgba(16,33,63,0.6)] text-[#10213f]">
            <h2 id="rb-card-title" className="route-quote-title mb-5">Your Rabigh journey</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="rb-from" className={label}>Pickup</label>
                    <input id="rb-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder="Home, hotel, business, site or airport" autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'rb-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {FROM_CHIPS.map((c) => <button key={c} type="button" onClick={() => { setFrom(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                <div>
                    <label htmlFor="rb-to" className={label}>Destination</label>
                    <input id="rb-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder="Address, hotel, city or airport" autoComplete="off" aria-invalid={!!error && !to.trim()} aria-describedby={error ? 'rb-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {TO_CHIPS.map((c) => <button key={c} type="button" onClick={() => { setTo(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="rb-date" className={label}>Date</label>
                        <input id="rb-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="rb-time" className={label}>Pickup time</label>
                        <input id="rb-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="rb-pax" className={label}>Passengers</label>
                        <select id="rb-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                            {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="rb-bags" className={label}>Luggage</label>
                        <select id="rb-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                {airport && (
                    <div>
                        <label htmlFor="rb-flight" className={label}>Flight number</label>
                        <input id="rb-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV1234" maxLength={12} autoComplete="off" />
                    </div>
                )}

                <button type="button" aria-expanded={more} aria-controls="rb-more" onClick={() => setMore((m) => !m)} className="flex w-full items-center justify-between rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm font-bold text-[#10213f] hover:border-[#f07b5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]">
                    Vehicle, return trip &amp; site details
                    <ChevronDown className={`w-4 h-4 transition-transform motion-reduce:transition-none ${more ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div id="rb-more" hidden={!more} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label htmlFor="rb-vehicle" className={label}>Vehicle</label>
                            <select id="rb-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                                <option value="">Recommend one</option>
                                {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="rb-trip" className={label}>Trip</label>
                            <select id="rb-trip" className={field} value={trip} onChange={(e) => setTrip(e.target.value as 'one' | 'return')}>
                                <option value="one">One-way</option>
                                <option value="return">Return</option>
                            </select>
                        </div>
                    </div>
                    <fieldset>
                        <legend className={label}>Is your pickup or destination an industrial site?</legend>
                        <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                            {([[false, 'No'], [true, 'Yes']] as const).map(([v, l]) => (
                                <button key={l} type="button" aria-pressed={industrial === v} onClick={() => setIndustrial(v)} className={`h-10 rounded-lg text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] ${industrial === v ? 'bg-[#10213f] text-white' : 'text-slate-600'}`}>{l}</button>
                            ))}
                        </div>
                    </fieldset>
                    {industrial && (
                        <div className="space-y-3 rounded-xl bg-[#fdf1ec] p-4 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                            {siteField('name', 'Site or company name', 'Where you are going')}
                            {siteField('point', 'Exact pickup / drop-off point', 'e.g. main gate, visitor car park')}
                            {siteField('gate', 'Gate or reception instructions', 'Anything the driver should know')}
                            {siteField('contact', 'On-site contact (optional)', 'Name or role')}
                            {siteField('ppe', 'Access or PPE notes (optional)', 'If the site has requirements')}
                            <p className="text-xs text-slate-600">Site access stays subject to the destination&apos;s own security and visitor rules.</p>
                        </div>
                    )}
                    <div>
                        <label htmlFor="rb-notes" className={label}>Notes (optional)</label>
                        <input id="rb-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should plan for" maxLength={300} autoComplete="off" />
                    </div>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {NOTE_CHIPS.map((c) => <button key={c} type="button" onClick={() => addNote(c)} className={chip}>+ {c}</button>)}
                </div>
            </div>
            {error && <p id="rb-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#f07b5a] text-[#10213f] font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-[#f39579] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10213f] focus-visible:ring-offset-2">
                Get My Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
        </form>
    );
}
