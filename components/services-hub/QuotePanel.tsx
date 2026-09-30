'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight, X } from 'lucide-react';

export interface QuoteOption { id: string; name: string; bookingType: 'transfer' | 'hourly' | 'custom' }
export interface OpenQuoteDetail { service?: string }

const field = 'w-full h-12 rounded-lg border border-slate-300 bg-white px-3 text-base text-[#131a2e] placeholder:text-slate-400 focus:border-[#131a2e] focus:outline-none focus:ring-2 focus:ring-[#c8a24a]/40';
const label = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5';

export function openQuote(service?: string) {
    window.dispatchEvent(new CustomEvent<OpenQuoteDetail>('services:quote', { detail: { service } }));
}

// One shared quote form for the whole hub. Opens as a slide-over (full screen on phones) with the
// service the visitor picked already selected, then hands off to the existing /booking/ flow.
export default function QuotePanel({ options, vehicleOptions }: { options: QuoteOption[]; vehicleOptions: string[] }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [service, setService] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pax, setPax] = useState('2');
    const [bags, setBags] = useState('2');
    const [vehicle, setVehicle] = useState('');
    const [hours, setHours] = useState('4');
    const [ret, setRet] = useState(false);
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');
    const panel = useRef<HTMLDivElement>(null);
    const opener = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const on = (e: Event) => {
            const d = (e as CustomEvent<OpenQuoteDetail>).detail || {};
            opener.current = document.activeElement as HTMLElement | null;
            if (d.service) setService(d.service);
            setError('');
            setOpen(true);
        };
        window.addEventListener('services:quote', on);
        return () => window.removeEventListener('services:quote', on);
    }, []);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const first = panel.current?.querySelector<HTMLElement>('select, input, button');
        first?.focus();
        const key = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
            if (e.key === 'Tab' && panel.current) {
                const f = Array.from(panel.current.querySelectorAll<HTMLElement>('button, input, select, a[href]')).filter((x) => !x.hasAttribute('disabled'));
                if (!f.length) return;
                const a = f[0], z = f[f.length - 1];
                if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
                else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
            }
        };
        document.addEventListener('keydown', key);
        return () => {
            document.body.style.overflow = prev;
            document.removeEventListener('keydown', key);
            opener.current?.focus?.();
        };
    }, [open]);

    const sel = options.find((o) => o.id === service);
    const hourly = sel?.bookingType === 'hourly';
    const today = format(new Date(), 'yyyy-MM-dd');

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from.trim() || (!hourly && !to.trim())) {
            setError(hourly ? 'Add a pickup location.' : 'Add a pickup and a destination so we can quote the journey.');
            return;
        }
        const p = new URLSearchParams({ from: from.trim(), passengers: pax, luggage: bags });
        if (to.trim()) p.set('to', to.trim());
        if (date) p.set('date', date);
        if (time) p.set('time', time);
        if (vehicle) p.set('vehicle', vehicle);
        if (hourly) {
            p.set('trip', 'hourly');
            p.set('hours', hours);
        }
        const n = [sel ? `Service: ${sel.name}.` : '', ret ? 'Return journey needed.' : '', notes.trim()].filter(Boolean).join(' ');
        if (n) p.set('notes', n);
        router.push(`/booking/?${p.toString()}`);
    };

    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <button type="button" aria-label="Close quote form" tabIndex={-1} onClick={() => setOpen(false)} className="absolute inset-0 bg-[#131a2e]/60 backdrop-blur-sm animate-in fade-in motion-reduce:animate-none" />
            <div ref={panel} role="dialog" aria-modal="true" aria-labelledby="qp-title" className="relative h-full w-full sm:max-w-md overflow-y-auto bg-white shadow-2xl animate-in slide-in-from-right duration-300 motion-reduce:animate-none">
                <form onSubmit={submit} noValidate className="p-5 sm:p-7">
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <h2 id="qp-title" className="route-quote-title text-[#131a2e]">Get a Quote</h2>
                        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="w-11 h-11 -mt-2 -mr-2 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]"><X className="w-5 h-5" aria-hidden="true" /></button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="qp-service" className={label}>Service</label>
                            <select id="qp-service" className={field} value={service} onChange={(e) => setService(e.target.value)}>
                                <option value="">Not sure - recommend one</option>
                                {options.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="qp-from" className={label}>Pickup</label>
                            <input id="qp-from" className={field} value={from} onChange={(e) => { setFrom(e.target.value); setError(''); }} placeholder="Airport, hotel, city or address" autoComplete="off" aria-invalid={!!error && !from.trim()} aria-describedby={error ? 'qp-error' : undefined} />
                        </div>
                        <div>
                            <label htmlFor="qp-to" className={label}>{hourly ? 'Destination (optional)' : 'Destination'}</label>
                            <input id="qp-to" className={field} value={to} onChange={(e) => { setTo(e.target.value); setError(''); }} placeholder="Airport, hotel, city or address" autoComplete="off" aria-invalid={!!error && !hourly && !to.trim()} aria-describedby={error ? 'qp-error' : undefined} />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="qp-date" className={label}>Date</label>
                                <input id="qp-date" type="date" min={today} className={field} value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="qp-time" className={label}>Time</label>
                                <input id="qp-time" type="time" className={field} value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="qp-pax" className={label}>Passengers</label>
                                <select id="qp-pax" className={field} value={pax} onChange={(e) => setPax(e.target.value)}>
                                    {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="qp-bags" className={label}>Luggage</label>
                                <select id="qp-bags" className={field} value={bags} onChange={(e) => setBags(e.target.value)}>
                                    {Array.from({ length: 21 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className={hourly ? '' : 'col-span-2'}>
                                <label htmlFor="qp-vehicle" className={label}>Vehicle</label>
                                <select id="qp-vehicle" className={field} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                                    <option value="">Recommend one</option>
                                    {vehicleOptions.map((v) => <option key={v} value={v}>{v.split(' /')[0]}</option>)}
                                </select>
                            </div>
                            {hourly && (
                                <div>
                                    <label htmlFor="qp-hours" className={label}>Hours</label>
                                    <select id="qp-hours" className={field} value={hours} onChange={(e) => setHours(e.target.value)}>
                                        {['3', '4', '5', '6', '8', '10', '12'].map((h) => <option key={h} value={h}>{h} hours</option>)}
                                    </select>
                                </div>
                            )}
                        </div>
                        <label className="flex items-center gap-3 min-h-[44px] cursor-pointer">
                            <input type="checkbox" checked={ret} onChange={(e) => setRet(e.target.checked)} className="w-5 h-5 accent-[#131a2e]" />
                            <span className="text-sm font-semibold text-[#131a2e]">I need a return journey</span>
                        </label>
                        <div>
                            <label htmlFor="qp-notes" className={label}>Notes (optional)</label>
                            <input id="qp-notes" className={field} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Flight number, stops, child seat…" maxLength={300} autoComplete="off" />
                        </div>
                    </div>
                    {error && <p id="qp-error" role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}
                    <button type="submit" className="group mt-5 w-full h-14 rounded-xl bg-[#131a2e] text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] focus-visible:ring-offset-2">
                        Get My Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </button>
                </form>
            </div>
        </div>
    );
}
