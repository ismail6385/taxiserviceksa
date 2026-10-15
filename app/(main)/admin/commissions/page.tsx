'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2, AlertTriangle, Check, Copy, Link2 } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { profitSplit, isMissingCostColumn } from '@/lib/profit-split';

// Internal-only view: which booking went to which driver and how each trip's
// profit is shared. Profit = fare - trip cost (entered by the driver on their
// trip link, or here), split 50/50 between the owner and the driver.

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
    driver_cost?: number | null;
}

const FIELDS = 'id,customer_name,pickup_location,destination,pickup_date,status,vehicle_type,total_price,currency,driver_name';

const PRESETS = [
    { label: 'This Month', get: () => { const d = new Date(); return { from: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`, to: '' }; } },
    { label: 'Last Month', get: () => { const d = new Date(); d.setMonth(d.getMonth() - 1); const y = d.getFullYear(), m = d.getMonth() + 1; return { from: `${y}-${String(m).padStart(2, '0')}-01`, to: `${y}-${String(m).padStart(2, '0')}-${new Date(y, m, 0).getDate()}` }; } },
    { label: 'This Year', get: () => ({ from: `${new Date().getFullYear()}-01-01`, to: '' }) },
    { label: 'All Time', get: () => ({ from: '', to: '' }) },
];

const round2 = (n: number) => Math.round(n * 100) / 100;
const money = (byCurr: Record<string, number>) => {
    const parts = Object.entries(byCurr).filter(([, v]) => v).map(([c, v]) => `${c} ${v.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
    return parts.length ? parts.join(' · ') : '—';
};
const add = (acc: Record<string, number>, curr: string, n: number) => { acc[curr] = round2((acc[curr] || 0) + n); };
const one = (curr: string, n: number) => `${curr} ${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

export default function CommissionsPage() {
    const router = useRouter();
    const [rows, setRows] = useState<Row[]>([]);
    const [loading, setLoading] = useState(true);
    const [costsEnabled, setCostsEnabled] = useState(true);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [preset, setPreset] = useState('All Time');
    const [driverFilter, setDriverFilter] = useState('');
    const [includeCancelled, setIncludeCancelled] = useState(false);
    const [onlyMissing, setOnlyMissing] = useState(false);
    const [drafts, setDrafts] = useState<Record<string, string>>({});
    const [saving, setSaving] = useState<string | null>(null);
    const [saved, setSaved] = useState<string | null>(null);
    const [links, setLinks] = useState<{ slug: string; name: string; url: string }[]>([]);
    const [linksError, setLinksError] = useState('');
    const [copied, setCopied] = useState<string | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            adminFetch('/api/admin/driver-links')
                .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
                .then(j => setLinks(j.links || []))
                .catch(() => setLinksError('Could not load driver links.'));
            const query = (fields: string) => supabase
                .from('bookings')
                .select(fields)
                .is('deleted_at', null)
                .not('driver_name', 'is', null)
                .neq('driver_name', '')
                .order('pickup_date', { ascending: false });
            let { data, error } = await query(`${FIELDS},driver_cost`);
            if (isMissingCostColumn(error)) {
                setCostsEnabled(false);
                ({ data, error } = await query(FIELDS));
            }
            setRows((data as unknown as Row[]) || []);
            setLoading(false);
        });
    }, [router]);

    const driverNames = useMemo(() => Array.from(new Set(rows.map(r => (r.driver_name || '').trim()).filter(Boolean))).sort(), [rows]);

    const filtered = useMemo(() => rows.filter(r => {
        if (!includeCancelled && r.status === 'cancelled') return false;
        if (dateFrom && r.pickup_date < dateFrom) return false;
        if (dateTo && r.pickup_date > dateTo) return false;
        if (driverFilter && (r.driver_name || '').trim() !== driverFilter) return false;
        if (onlyMissing && profitSplit(r.total_price, r.driver_cost)) return false;
        return true;
    }), [rows, includeCancelled, dateFrom, dateTo, driverFilter, onlyMissing]);

    const totals = useMemo(() => {
        const fares: Record<string, number> = {}, costs: Record<string, number> = {}, profit: Record<string, number> = {}, owner: Record<string, number> = {}, driverShare: Record<string, number> = {};
        let missing = 0;
        type D = { trips: number; fares: Record<string, number>; profit: Record<string, number>; owner: Record<string, number>; driver: Record<string, number>; missing: number };
        const perDriver = new Map<string, D>();
        for (const r of filtered) {
            const curr = r.currency || 'SAR';
            const name = (r.driver_name || '').trim();
            const d = perDriver.get(name) || { trips: 0, fares: {}, profit: {}, owner: {}, driver: {}, missing: 0 };
            d.trips++;
            if (r.total_price) { add(fares, curr, r.total_price); add(d.fares, curr, r.total_price); }
            const s = profitSplit(r.total_price, r.driver_cost);
            if (s) {
                add(costs, curr, Number(r.driver_cost));
                add(profit, curr, s.profit); add(d.profit, curr, s.profit);
                add(owner, curr, s.ownerShare); add(d.owner, curr, s.ownerShare);
                add(driverShare, curr, s.driverShare); add(d.driver, curr, s.driverShare);
            } else { missing++; d.missing++; }
            perDriver.set(name, d);
        }
        return { fares, costs, profit, owner, driverShare, missing, perDriver: Array.from(perDriver.entries()).sort((a, b) => b[1].trips - a[1].trips) };
    }, [filtered]);

    const saveCost = async (id: string, raw: string) => {
        const cost = raw.trim() === '' ? null : Number(raw);
        if (cost !== null && (!Number.isFinite(cost) || cost < 0)) { alert('Enter a valid amount.'); return; }
        setSaving(id);
        const { error } = await supabase.from('bookings').update({ driver_cost: cost }).eq('id', id);
        setSaving(null);
        if (error) { alert('Could not save: ' + error.message); return; }
        setRows(prev => prev.map(r => r.id === id ? { ...r, driver_cost: cost } : r));
        setDrafts(prev => { const { [id]: _, ...rest } = prev; return rest; });
        setSaved(id);
        setTimeout(() => setSaved(s => (s === id ? null : s)), 2000);
    };

    if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Driver Commissions</h1>
                <p className="text-sm text-gray-500 mt-1">Internal only. Profit = fare − trip cost, shared 50/50 between you and the driver. Drivers enter the trip cost on their own link; you can also enter or correct it here.</p>
            </div>

            {!costsEnabled && (
                <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    <p className="font-bold">One-time setup needed</p>
                    <p>Open Supabase → SQL Editor and run this line, then refresh this page:</p>
                    <code className="mt-1 block rounded bg-white px-2 py-1 font-mono text-xs">ALTER TABLE bookings ADD COLUMN IF NOT EXISTS driver_cost numeric(10,2);</code>
                </div>
            )}

            {/* Private driver links */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h2 className="flex items-center gap-2 font-bold text-gray-900"><Link2 className="w-4 h-4" /> Driver trip links</h2>
                <p className="text-xs text-gray-500 mt-1 mb-3">Send each driver only their own link. They see their trips and fares, enter each trip&apos;s cost, and see their 50% share of the profit.</p>
                {linksError && <p className="text-sm text-red-600">{linksError}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {links.map(l => (
                        <div key={l.slug} className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                            <span className="font-semibold text-gray-900 w-28 shrink-0">{l.name}</span>
                            <span className="flex-1 min-w-0 truncate font-mono text-[11px] text-gray-400">{l.url}</span>
                            <button type="button" title="Copy link" onClick={() => { navigator.clipboard?.writeText(l.url); setCopied(l.slug); setTimeout(() => setCopied(c => (c === l.slug ? null : c)), 1500); }}
                                className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-700 hover:border-gray-400">
                                {copied === l.slug ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}{copied === l.slug ? 'Copied' : 'Copy'}
                            </button>
                            <a href={`https://wa.me/?text=${encodeURIComponent(`Assalam o Alaikum ${l.name}, yeh aap ki trips ka link hai. Har trip ka kharcha (cost) yahan likhein, aap ka hissa khud ban jayega. Kisi aur ko share na karein: ${l.url}`)}`} target="_blank" rel="noopener noreferrer"
                                className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
                        </div>
                    ))}
                </div>
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
                <label className="flex items-center gap-2 text-sm text-gray-600 h-9"><input type="checkbox" checked={onlyMissing} onChange={e => setOnlyMissing(e.target.checked)} /> Only missing fare/cost</label>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                    ['Trips with a driver', String(filtered.length), ''],
                    ['Total fares', money(totals.fares), ''],
                    ['Total profit', money(totals.profit), ''],
                    ['Your share (50%)', money(totals.owner), 'emerald'],
                    ['Drivers’ share (50%)', money(totals.driverShare), ''],
                ].map(([k, v, tone]) => (
                    <div key={k} className={`rounded-xl p-4 border ${tone ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{k}</p>
                        <p className={`text-lg font-bold mt-1 ${tone ? 'text-emerald-700' : 'text-gray-900'}`}>{v}</p>
                    </div>
                ))}
            </div>
            {totals.missing > 0 && (
                <p className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    {totals.missing} booking{totals.missing === 1 ? '' : 's'} below have no fare or no trip cost yet, so they are not in the profit totals.
                </p>
            )}

            {/* Per driver */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
                <h2 className="px-4 pt-4 pb-2 font-bold text-gray-900">By driver</h2>
                <table className="w-full min-w-[720px] text-sm">
                    <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                        <tr><th className="px-4 py-2">Driver</th><th className="px-4 py-2">Trips</th><th className="px-4 py-2">Fares</th><th className="px-4 py-2">Profit</th><th className="px-4 py-2">Your share</th><th className="px-4 py-2">Driver share</th><th className="px-4 py-2">Missing cost</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {totals.perDriver.map(([name, d]) => (
                            <tr key={name} className="hover:bg-gray-50 cursor-pointer" onClick={() => setDriverFilter(name)}>
                                <td className="px-4 py-2 font-semibold text-gray-900">{name}</td>
                                <td className="px-4 py-2">{d.trips}</td>
                                <td className="px-4 py-2">{money(d.fares)}</td>
                                <td className="px-4 py-2">{money(d.profit)}</td>
                                <td className="px-4 py-2 font-semibold text-emerald-700">{money(d.owner)}</td>
                                <td className="px-4 py-2">{money(d.driver)}</td>
                                <td className="px-4 py-2">{d.missing ? <span className="text-amber-700">{d.missing}</span> : '—'}</td>
                            </tr>
                        ))}
                        {!totals.perDriver.length && <tr><td colSpan={7} className="px-4 py-6 text-center text-gray-400">No bookings with a driver in this range.</td></tr>}
                    </tbody>
                </table>
            </div>

            {/* Bookings */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
                <h2 className="px-4 pt-4 pb-2 font-bold text-gray-900">Bookings</h2>
                <table className="w-full min-w-[1000px] text-sm">
                    <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                        <tr>
                            <th className="px-3 py-2">Date</th><th className="px-3 py-2">Booking</th><th className="px-3 py-2">Route</th><th className="px-3 py-2">Driver</th>
                            <th className="px-3 py-2">Fare</th><th className="px-3 py-2">Trip cost</th><th className="px-3 py-2">Profit</th><th className="px-3 py-2">Your share</th><th className="px-3 py-2">Driver share</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filtered.map(r => {
                            const curr = r.currency || 'SAR';
                            const s = profitSplit(r.total_price, r.driver_cost);
                            const current = r.driver_cost != null ? String(r.driver_cost) : '';
                            const draft = drafts[r.id] ?? current;
                            const dirty = draft !== current;
                            return (
                                <tr key={r.id} className={r.status === 'cancelled' ? 'opacity-50' : ''}>
                                    <td className="px-3 py-2 whitespace-nowrap">{r.pickup_date}</td>
                                    <td className="px-3 py-2">
                                        <span className="font-mono text-xs text-gray-500">#{r.id.slice(0, 8).toUpperCase()}</span>
                                        <span className="block text-gray-900">{r.customer_name}</span>
                                        <span className="text-[11px] uppercase text-gray-400">{r.status.replace('_', ' ')}</span>
                                    </td>
                                    <td className="px-3 py-2 max-w-[220px]"><span className="line-clamp-2">{r.pickup_location} → {r.destination}</span></td>
                                    <td className="px-3 py-2 font-semibold">{r.driver_name}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{r.total_price ? one(curr, r.total_price) : <span className="text-amber-700">No fare</span>}</td>
                                    <td className="px-3 py-2">
                                        {costsEnabled ? (
                                            <div className="flex items-center gap-1">
                                                <Input type="number" min={0} step={1} value={draft} placeholder="cost"
                                                    onChange={e => setDrafts(prev => ({ ...prev, [r.id]: e.target.value }))}
                                                    className="h-8 w-24 text-sm" />
                                                {dirty && (
                                                    <Button size="sm" className="h-8 px-2 text-xs" disabled={saving === r.id} onClick={() => saveCost(r.id, draft)}>
                                                        {saving === r.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Save'}
                                                    </Button>
                                                )}
                                                {saved === r.id && <Check className="w-4 h-4 text-emerald-600" />}
                                            </div>
                                        ) : <span className="text-gray-400">—</span>}
                                    </td>
                                    <td className={`px-3 py-2 whitespace-nowrap ${s && s.profit < 0 ? 'text-red-600' : ''}`}>{s ? one(curr, s.profit) : '—'}</td>
                                    <td className="px-3 py-2 font-semibold text-emerald-700 whitespace-nowrap">{s ? one(curr, s.ownerShare) : '—'}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{s ? one(curr, s.driverShare) : '—'}</td>
                                </tr>
                            );
                        })}
                        {!filtered.length && <tr><td colSpan={9} className="px-4 py-6 text-center text-gray-400">No bookings match these filters.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
