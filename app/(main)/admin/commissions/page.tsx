'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2, AlertTriangle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Internal-only view: which booking went to which driver, and how the fare
// splits into the owner's commission and the driver's payout. Reads the same
// bookings.driver_name / bookings.commission_rate fields the booking detail
// panel edits; nothing here is ever shown to customers.

interface Row {
    id: string;
    customer_name: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    status: string;
    vehicle_type: string;
    total_price?: number | null;
    currency?: string | null;
    driver_name?: string | null;
    commission_rate?: number | null;
}

interface Driver { full_name: string; commission_rate?: number | null }

const PRESETS = [
    { label: 'This Month', get: () => { const d = new Date(); return { from: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`, to: '' }; } },
    { label: 'Last Month', get: () => { const d = new Date(); d.setMonth(d.getMonth() - 1); const y = d.getFullYear(), m = d.getMonth() + 1; return { from: `${y}-${String(m).padStart(2, '0')}-01`, to: `${y}-${String(m).padStart(2, '0')}-${new Date(y, m, 0).getDate()}` }; } },
    { label: 'This Year', get: () => ({ from: `${new Date().getFullYear()}-01-01`, to: '' }) },
    { label: 'All Time', get: () => ({ from: '', to: '' }) },
];

const round2 = (n: number) => Math.round(n * 100) / 100;
const split = (r: Row) => {
    if (!r.total_price || r.commission_rate == null) return null;
    const commission = round2(r.total_price * (r.commission_rate / 100));
    return { commission, payout: round2(r.total_price - commission) };
};
const money = (byCurr: Record<string, number>) => {
    const parts = Object.entries(byCurr).filter(([, v]) => v).map(([c, v]) => `${c} ${v.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
    return parts.length ? parts.join(' · ') : '—';
};
const add = (acc: Record<string, number>, curr: string, n: number) => { acc[curr] = round2((acc[curr] || 0) + n); };

export default function CommissionsPage() {
    const router = useRouter();
    const [rows, setRows] = useState<Row[]>([]);
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [preset, setPreset] = useState('All Time');
    const [driverFilter, setDriverFilter] = useState('');
    const [includeCancelled, setIncludeCancelled] = useState(false);
    const [onlyMissing, setOnlyMissing] = useState(false);
    const [drafts, setDrafts] = useState<Record<string, string>>({});
    const [saving, setSaving] = useState<string | null>(null);
    const [saved, setSaved] = useState<string | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            const [b, d] = await Promise.all([
                supabase
                    .from('bookings')
                    .select('id,customer_name,pickup_location,destination,pickup_date,status,vehicle_type,total_price,currency,driver_name,commission_rate')
                    .is('deleted_at', null)
                    .not('driver_name', 'is', null)
                    .neq('driver_name', '')
                    .order('pickup_date', { ascending: false }),
                supabase.from('drivers').select('full_name,commission_rate'),
            ]);
            setRows((b.data as Row[]) || []);
            setDrivers((d.data as Driver[]) || []);
            setLoading(false);
        });
    }, [router]);

    const driverDefault = useMemo(() => {
        const m = new Map<string, number>();
        for (const d of drivers) if (d.full_name && d.commission_rate != null) m.set(d.full_name.trim().toLowerCase(), d.commission_rate);
        return m;
    }, [drivers]);

    const driverNames = useMemo(() => Array.from(new Set(rows.map(r => (r.driver_name || '').trim()).filter(Boolean))).sort(), [rows]);

    const filtered = useMemo(() => rows.filter(r => {
        if (!includeCancelled && r.status === 'cancelled') return false;
        if (dateFrom && r.pickup_date < dateFrom) return false;
        if (dateTo && r.pickup_date > dateTo) return false;
        if (driverFilter && (r.driver_name || '').trim() !== driverFilter) return false;
        if (onlyMissing && split(r)) return false;
        return true;
    }), [rows, includeCancelled, dateFrom, dateTo, driverFilter, onlyMissing]);

    const totals = useMemo(() => {
        const fares: Record<string, number> = {}, commission: Record<string, number> = {}, payout: Record<string, number> = {};
        let missing = 0;
        const perDriver = new Map<string, { trips: number; fares: Record<string, number>; commission: Record<string, number>; payout: Record<string, number>; missing: number }>();
        for (const r of filtered) {
            const curr = r.currency || 'SAR';
            const name = (r.driver_name || '').trim();
            const d = perDriver.get(name) || { trips: 0, fares: {}, commission: {}, payout: {}, missing: 0 };
            d.trips++;
            if (r.total_price) { add(fares, curr, r.total_price); add(d.fares, curr, r.total_price); }
            const s = split(r);
            if (s) {
                add(commission, curr, s.commission); add(d.commission, curr, s.commission);
                add(payout, curr, s.payout); add(d.payout, curr, s.payout);
            } else { missing++; d.missing++; }
            perDriver.set(name, d);
        }
        return { fares, commission, payout, missing, perDriver: Array.from(perDriver.entries()).sort((a, b) => b[1].trips - a[1].trips) };
    }, [filtered]);

    const saveRate = async (id: string, rate: number) => {
        if (Number.isNaN(rate) || rate < 0 || rate > 100) { alert('Enter a commission percentage between 0 and 100.'); return; }
        setSaving(id);
        const { error } = await supabase.from('bookings').update({ commission_rate: rate }).eq('id', id);
        setSaving(null);
        if (error) { alert('Could not save: ' + error.message); return; }
        setRows(prev => prev.map(r => r.id === id ? { ...r, commission_rate: rate } : r));
        setDrafts(prev => { const { [id]: _, ...rest } = prev; return rest; });
        setSaved(id);
        setTimeout(() => setSaved(s => (s === id ? null : s)), 2000);
    };

    if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Driver Commissions</h1>
                <p className="text-sm text-gray-500 mt-1">Internal only. Which booking went to which driver, your commission and the driver&apos;s payout. Set a driver on a booking from the Bookings page.</p>
            </div>

            {/* Filters */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-wrap items-end gap-3">
                <div className="flex flex-wrap gap-1.5">
                    {PRESETS.map(p => (
                        <button key={p.label} type="button" onClick={() => { const v = p.get(); setDateFrom(v.from); setDateTo(v.to); setPreset(p.label); }}
                            className={`px-3 h-9 rounded-lg text-xs font-semibold border ${preset === p.label ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                            {p.label}
                        </button>
                    ))}
                </div>
                <label className="text-xs text-gray-500">From<Input type="date" value={dateFrom} onChange={e => { setDateFrom(e.target.value); setPreset(''); }} className="h-9 mt-1 w-40" /></label>
                <label className="text-xs text-gray-500">To<Input type="date" value={dateTo} onChange={e => { setDateTo(e.target.value); setPreset(''); }} className="h-9 mt-1 w-40" /></label>
                <label className="text-xs text-gray-500">Driver
                    <select value={driverFilter} onChange={e => setDriverFilter(e.target.value)} className="block h-9 mt-1 rounded-md border border-gray-200 bg-white px-2 text-sm min-w-[160px]">
                        <option value="">All drivers</option>
                        {driverNames.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600 h-9"><input type="checkbox" checked={includeCancelled} onChange={e => setIncludeCancelled(e.target.checked)} /> Include cancelled</label>
                <label className="flex items-center gap-2 text-sm text-gray-600 h-9"><input type="checkbox" checked={onlyMissing} onChange={e => setOnlyMissing(e.target.checked)} /> Only missing price/commission</label>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                    ['Trips with a driver', String(filtered.length)],
                    ['Total fares', money(totals.fares)],
                    ['Your commission', money(totals.commission)],
                    ['Driver payouts', money(totals.payout)],
                ].map(([k, v], i) => (
                    <div key={k} className={`rounded-xl p-4 border ${i === 2 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{k}</p>
                        <p className={`text-lg font-bold mt-1 ${i === 2 ? 'text-emerald-700' : 'text-gray-900'}`}>{v}</p>
                    </div>
                ))}
            </div>
            {totals.missing > 0 && (
                <p className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    {totals.missing} booking{totals.missing === 1 ? '' : 's'} below have no price or no commission %, so they are not counted in the totals.
                </p>
            )}

            {/* Per driver */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
                <h2 className="px-4 pt-4 pb-2 font-bold text-gray-900">By driver</h2>
                <table className="w-full min-w-[640px] text-sm">
                    <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                        <tr><th className="px-4 py-2">Driver</th><th className="px-4 py-2">Trips</th><th className="px-4 py-2">Fares</th><th className="px-4 py-2">Your commission</th><th className="px-4 py-2">Driver payout</th><th className="px-4 py-2">Missing</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {totals.perDriver.map(([name, d]) => (
                            <tr key={name} className="hover:bg-gray-50 cursor-pointer" onClick={() => setDriverFilter(name)}>
                                <td className="px-4 py-2 font-semibold text-gray-900">{name}</td>
                                <td className="px-4 py-2">{d.trips}</td>
                                <td className="px-4 py-2">{money(d.fares)}</td>
                                <td className="px-4 py-2 font-semibold text-emerald-700">{money(d.commission)}</td>
                                <td className="px-4 py-2">{money(d.payout)}</td>
                                <td className="px-4 py-2">{d.missing ? <span className="text-amber-700">{d.missing}</span> : '—'}</td>
                            </tr>
                        ))}
                        {!totals.perDriver.length && <tr><td colSpan={6} className="px-4 py-6 text-center text-gray-400">No bookings with a driver in this range.</td></tr>}
                    </tbody>
                </table>
            </div>

            {/* Bookings */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
                <h2 className="px-4 pt-4 pb-2 font-bold text-gray-900">Bookings</h2>
                <table className="w-full min-w-[980px] text-sm">
                    <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                        <tr>
                            <th className="px-3 py-2">Date</th><th className="px-3 py-2">Booking</th><th className="px-3 py-2">Route</th><th className="px-3 py-2">Driver</th>
                            <th className="px-3 py-2">Fare</th><th className="px-3 py-2">Commission %</th><th className="px-3 py-2">Your commission</th><th className="px-3 py-2">Driver payout</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filtered.map(r => {
                            const curr = r.currency || 'SAR';
                            const s = split(r);
                            const def = driverDefault.get((r.driver_name || '').trim().toLowerCase());
                            const draft = drafts[r.id] ?? (r.commission_rate != null ? String(r.commission_rate) : '');
                            const dirty = draft !== (r.commission_rate != null ? String(r.commission_rate) : '');
                            return (
                                <tr key={r.id} className={r.status === 'cancelled' ? 'opacity-50' : ''}>
                                    <td className="px-3 py-2 whitespace-nowrap">{r.pickup_date}</td>
                                    <td className="px-3 py-2">
                                        <span className="font-mono text-xs text-gray-500">#{r.id.slice(0, 8).toUpperCase()}</span>
                                        <span className="block text-gray-900">{r.customer_name}</span>
                                        <span className="text-[11px] uppercase text-gray-400">{r.status.replace('_', ' ')}</span>
                                    </td>
                                    <td className="px-3 py-2 max-w-[240px]"><span className="line-clamp-2">{r.pickup_location} → {r.destination}</span></td>
                                    <td className="px-3 py-2 font-semibold">{r.driver_name}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{r.total_price ? `${curr} ${r.total_price.toLocaleString('en-US')}` : <span className="text-amber-700">No price</span>}</td>
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-1">
                                            <Input type="number" min={0} max={100} step={0.5} value={draft} placeholder="%"
                                                onChange={e => setDrafts(prev => ({ ...prev, [r.id]: e.target.value }))}
                                                className="h-8 w-16 text-sm" />
                                            {dirty && draft !== '' && (
                                                <Button size="sm" className="h-8 px-2 text-xs" disabled={saving === r.id} onClick={() => saveRate(r.id, Number(draft))}>
                                                    {saving === r.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Save'}
                                                </Button>
                                            )}
                                            {saved === r.id && <Check className="w-4 h-4 text-emerald-600" />}
                                            {r.commission_rate == null && !dirty && def != null && (
                                                <button type="button" onClick={() => saveRate(r.id, def)} className="text-[11px] font-semibold text-emerald-700 hover:underline whitespace-nowrap">Use {def}%</button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-3 py-2 font-semibold text-emerald-700 whitespace-nowrap">{s ? `${curr} ${s.commission.toLocaleString('en-US')}` : '—'}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{s ? `${curr} ${s.payout.toLocaleString('en-US')}` : '—'}</td>
                                </tr>
                            );
                        })}
                        {!filtered.length && <tr><td colSpan={8} className="px-4 py-6 text-center text-gray-400">No bookings match these filters.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
