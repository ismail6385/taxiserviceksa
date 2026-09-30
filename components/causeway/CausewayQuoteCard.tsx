'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, ArrowLeftRight, AlertTriangle } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

type Dir = 'sa-bh' | 'bh-sa';
const SAUDI = ['Al Khobar', 'Dammam', 'King Fahd International Airport (DMM)', 'Riyadh'];
const BAHRAIN = ['Manama, Bahrain', 'Bahrain International Airport (BAH)', 'Muharraq, Bahrain', 'Riffa, Bahrain'];
const NOTE_CHIPS = ['Family with luggage', 'Airport connection', 'Return same day', 'Need larger vehicle'];
const short = (s: string) => s.replace(', Bahrain', '').replace('King Fahd International Airport (DMM)', 'Dammam Airport').replace('Bahrain International Airport (BAH)', 'Bahrain Airport');

const field = 'w-full h-12 rounded-lg border border-slate-300 bg-white px-3 text-base text-[#06232b] placeholder:text-slate-400 focus:border-[#0f5e6e] focus:outline-none focus:ring-2 focus:ring-[#0f5e6e]/30';
const label = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5';
const chip = 'shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#0f5e6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e]';

export interface CausewaySetDetail { direction?: Dir; from?: string; to?: string }

// Cross-border request form. Hands off to the existing /booking/ flow; return legs travel in the notes.
export default function CausewayQuoteCard({ vehicleOptions, whatsappHref }: { vehicleOptions: string[]; whatsappHref: string }) {
    const router = useRouter();
    const [dir, setDir] = useState<Dir>('sa-bh');
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
    const [error, setError] = useState('');

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<CausewaySetDetail>).detail || {};
            if (d.direction) setDir(d.direction);
            if (d.from !== undefined) setFrom(d.from);
            if (d.to !== undefined) setTo(d.to);
            setError('');
        };
        window.addEventListener('causeway:set', on);
        return () => window.removeEventListener('causeway:set', on);
    }, []);

    const flip = (d: Dir) => {
        if (d === dir) return;
        setDir(d);
        setFrom(to);
        setTo(from);
    };

    const fromChips = dir === 'sa-bh' ? SAUDI : BAHRAIN;
    const toChips = dir === 'sa-bh' ? BAHRAIN : SAUDI;
    const airport = /airport|\b(DMM|BAH)\b/i.test(`${from} ${to}`);
    const today = format(new Date(), 'yyyy-MM-dd');

    const addNote = (n: string) => setNotes((s) => (s.includes(n) ? s : s ? `${s}. ${n}` : n));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || !to.trim()) {
            setError('Add a pickup and a destination so we can check the cross-border option.');
            return;
        }
        const p = new URLSearchParams({ from: from.trim(), to: to.trim(), passengers: pax, luggage: bags });
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        if (airport && flight.trim()) p.set('flight', flight.trim());
        const n = [
            `Cross-border via King Fahd Causeway (${dir === 'sa-bh' ? 'Saudi Arabia to Bahrain' : 'Bahrain to Saudi Arabia'}).`,
            trip === 'return' ? 'Return journey needed.' : '',
            notes.trim(),
        ].filter(Boolean).join(' ');
        p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    return (
        <form onSubmit={submit} noValidate aria-labelledby="cw-card-title" className="rounded-2xl bg-white p-5 sm:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] text-[#06232b]">
            <h2 id="cw-card-title" className="route-quote-title mb-4">Arrange Your Saudi–Bahrain Transfer</h2>

            <fieldset className="mb-4">
                <legend className={label}>Direction</legend>
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                    {([['sa-bh', 'Saudi → Bahrain'], ['bh-sa', 'Bahrain → Saudi']] as const).map(([v, l]) => (
                        <button key={v} type="button" aria-pressed={dir === v} onClick={() => flip(v)} className={`h-11 rounded-lg text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e] ${dir === v ? 'bg-[#06232b] text-white shadow' : 'text-slate-600 hover:text-[#06232b]'}`}>{l}</button>
                    ))}
                </div>
            </fieldset>

            <div className="space-y-4">
                <div>
                    <label htmlFor="cw-from" className={label}>Pickup</label>
                    <input id="cw-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder={dir === 'sa-bh' ? 'City, hotel, home or airport in Saudi Arabia' : 'Hotel, home or airport in Bahrain'} autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'cw-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {fromChips.map((c) => <button key={c} type="button" onClick={() => { setFrom(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                <div className="flex justify-center -my-2">
                    <button type="button" onClick={() => flip(dir === 'sa-bh' ? 'bh-sa' : 'sa-bh')} aria-label="Swap direction" className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#0f5e6e] hover:border-[#0f5e6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e]">
                        <ArrowLeftRight className="w-4 h-4 rotate-90" aria-hidden="true" />
                    </button>
                </div>
                <div>
                    <label htmlFor="cw-to" className={label}>Destination</label>
                    <input id="cw-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder={dir === 'sa-bh' ? 'Hotel, address or airport in Bahrain' : 'City, address or airport in Saudi Arabia'} autoComplete="off" aria-invalid={!!error && !to.trim()} aria-describedby={error ? 'cw-error' : undefined} />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {toChips.map((c) => <button key={c} type="button" onClick={() => { setTo(c); setError(''); }} className={chip}>{short(c)}</button>)}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="cw-date" className={label}>Date</label>
                        <input id="cw-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cw-time" className={label}>Pickup time</label>
                        <input id="cw-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cw-pax" className={label}>Passengers</label>
                        <select id="cw-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                            {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cw-bags" className={label}>Luggage</label>
                        <select id="cw-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                            {Array.from({ length: 17 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cw-vehicle" className={label}>Vehicle</label>
                        <select id="cw-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                            <option value="">Recommend one</option>
                            {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cw-trip" className={label}>Trip</label>
                        <select id="cw-trip" className={field} value={trip} onChange={(e) => setTrip(e.target.value as 'one' | 'return')}>
                            <option value="one">One-way</option>
                            <option value="return">Return</option>
                        </select>
                    </div>
                </div>
                {airport && (
                    <div>
                        <label htmlFor="cw-flight" className={label}>Flight number</label>
                        <input id="cw-flight" className={field} value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. GF170" maxLength={12} autoComplete="off" />
                    </div>
                )}
                <div>
                    <label htmlFor="cw-notes" className={label}>Notes (optional)</label>
                    <input id="cw-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should plan for" maxLength={300} autoComplete="off" />
                    <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                        {NOTE_CHIPS.map((c) => <button key={c} type="button" onClick={() => addNote(c)} className={chip}>+ {c}</button>)}
                    </div>
                </div>
            </div>

            <p className="mt-5 flex gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs leading-relaxed text-amber-900">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Important:</strong> a transportation booking does not guarantee entry into Saudi Arabia or Bahrain. Passengers remain responsible for meeting the current immigration and entry requirements.</span>
            </p>
            {error && <p id="cw-error" role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="group mt-4 w-full h-14 rounded-xl bg-[#06232b] text-white font-bold text-base inline-flex items-center justify-center gap-2 transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872] focus-visible:ring-offset-2">
                Get Cross-Border Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </button>
            <a href={whatsappHref} target="_blank" rel="nofollow noopener noreferrer" className="mt-3 flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 font-bold text-[#06232b] hover:border-[#0f5e6e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e]">
                <WhatsAppIcon className="w-5 h-5 fill-current" /> WhatsApp Booking
            </a>
        </form>
    );
}
