'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

const SERVICE = [
    { v: 'airport', l: 'Airport transfer' },
    { v: 'p2p', l: 'Point-to-point' },
    { v: 'hourly', l: 'Hourly chauffeur' },
    { v: 'fullday', l: 'Full-day chauffeur' },
    { v: 'multiday', l: 'Multi-day itinerary' },
    { v: 'event', l: 'Event / special occasion' },
    { v: 'custom', l: 'Custom request' },
];
const VEHICLE_PREF = ['No preference', 'Executive sedan', 'Luxury SUV', 'Luxury MPV', 'Large SUV', 'Other available vehicle'];

const field = 'w-full h-12 rounded-lg border border-white/[0.15] bg-white/[0.06] px-3 text-base text-white placeholder:text-white/[0.35] focus:border-[#d8c7a3] focus:outline-none focus:ring-2 focus:ring-[#d8c7a3]/30';
const label = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/[0.55] mb-1.5';

// Chauffeur request form - hands off to the existing /booking/ flow (hourly mode for time-based bookings).
export default function ChauffeurRequestCard() {
    const router = useRouter();
    const [service, setService] = useState('airport');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('2');
    const [hours, setHours] = useState('4');
    const [pref, setPref] = useState('No preference');
    const [flight, setFlight] = useState('');
    const [notes, setNotes] = useState('');

    const timed = service === 'hourly' || service === 'fullday';
    const airport = service === 'airport' || /airport/i.test(`${from} ${to}`);
    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const svc = SERVICE.find((s) => s.v === service)!.l;
        const p = new URLSearchParams({ passengers: pax, luggage: bags });
        if (from.trim()) p.set('from', from.trim());
        if (to.trim()) p.set('to', to.trim());
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (timed) {
            p.set('trip', 'hourly');
            p.set('hours', service === 'fullday' ? '10' : hours);
        }
        if (airport && flight.trim()) p.set('flight', flight.trim());
        const n = [`VIP chauffeur - ${svc}.`, pref !== 'No preference' ? `Vehicle preference: ${pref}.` : '', notes.trim()].filter(Boolean).join(' ');
        p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <form onSubmit={submit} aria-labelledby="vip-card-title" className="rounded-2xl border border-white/10 bg-[#161a21]/90 backdrop-blur p-5 sm:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <h2 id="vip-card-title" className="route-quote-title text-white mb-5">Arrange Your Chauffeur</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <label htmlFor="vc-service" className={label}>Service type</label>
                    <select id="vc-service" className={field} value={service} onChange={(e) => setService(e.target.value)}>
                        {SERVICE.map((s) => <option key={s.v} value={s.v} className="text-black">{s.l}</option>)}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="vc-from" className={label}>Pickup</label>
                    <input id="vc-from" className={field} value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Airport, hotel, office or residence" autoComplete="off" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="vc-to" className={label}>{timed ? 'Destination (optional)' : 'Destination'}</label>
                    <input id="vc-to" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder={timed ? 'Leave blank if the plan may change' : 'Hotel, airport, office or venue'} autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="vc-date" className={label}>Date</label>
                    <input id="vc-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="vc-time" className={label}>Pickup time</label>
                    <input id="vc-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="vc-pax" className={label}>Passengers</label>
                        <select id="vc-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                            {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n} className="text-black">{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="vc-bags" className={label}>Luggage</label>
                        <select id="vc-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                            {Array.from({ length: 13 }, (_, i) => i).map((n) => <option key={n} value={n} className="text-black">{n}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="vc-pref" className={label}>Vehicle preference</label>
                    <select id="vc-pref" className={field} value={pref} onChange={(e) => setPref(e.target.value)}>
                        {VEHICLE_PREF.map((v) => <option key={v} className="text-black">{v}</option>)}
                    </select>
                </div>
                {service === 'hourly' && (
                    <div className="sm:col-span-2">
                        <label htmlFor="vc-hours" className={label}>Hours</label>
                        <select id="vc-hours" className={field} value={hours} onChange={(e) => setHours(e.target.value)}>
                            {['3', '4', '5', '6', '8'].map((h) => <option key={h} value={h} className="text-black">{h} hours</option>)}
                        </select>
                    </div>
                )}
                {airport && (
                    <div className="sm:col-span-2">
                        <label htmlFor="vc-flight" className={label}>Flight number</label>
                        <input id="vc-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV1234" maxLength={12} autoComplete="off" />
                    </div>
                )}
                <div className="sm:col-span-2">
                    <label htmlFor="vc-notes" className={label}>Special requirements (optional)</label>
                    <input id="vc-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. corporate guest, multiple stops, child seat" maxLength={300} autoComplete="off" />
                </div>
            </div>
            <button type="submit" className="group mt-6 w-full h-14 rounded-xl bg-[#d8c7a3] text-[#0e1116] font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-[#e6d8b9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c7a3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1116]">
                Request VIP Chauffeur Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <p className="mt-3 text-xs text-white/[0.45]">Availability, vehicle and price are confirmed before your journey.</p>
        </form>
    );
}
