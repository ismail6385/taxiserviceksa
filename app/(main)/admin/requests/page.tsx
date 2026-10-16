'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ksaToday } from '@/lib/ksa-time';
import { formatTime12h } from '@/lib/format-time';
import { Loader2, RefreshCw, ChevronDown, Users, Plane, RotateCcw } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import LocationText from '@/components/admin/LocationText';

// New booking requests (status 'pending'), kept deliberately simple:
// sorted by trip date and grouped Today / Tomorrow / Later, one line per
// request, two actions (WhatsApp, Open) plus a small "Move to" status menu.
// Requests whose date has passed sit in a collapsed section at the bottom.
interface Req {
    id: string;
    created_at: string;
    customer_name: string;
    customer_phone: string | null;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string | null;
    vehicle_type: string | null;
    passengers: number | null;
    luggage: number | null;
    flight_number: string | null;
    special_requests: string | null;
    has_return_trip: boolean | null;
    trip_type: string | null;
    duration_hours: number | null;
    booking_type: string | null;
    total_price: number | null;
    currency: string | null;
}

const FIELDS = 'id,created_at,customer_name,customer_phone,pickup_location,destination,pickup_date,pickup_time,vehicle_type,passengers,luggage,flight_number,special_requests,has_return_trip,trip_type,duration_hours,booking_type,total_price,currency';

const digits = (p: string) => p.replace(/[^\d]/g, '');
const dayLabel = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
const ago = (iso: string) => {
    const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
    if (mins < 60) return `${mins} min ago`;
    const h = Math.round(mins / 60);
    return h < 48 ? `${h} h ago` : `${Math.round(h / 24)} days ago`;
};
// The booking form appends boilerplate like "Please Provide Quote" and
// "| Source: /calculator/"; show only what the customer actually wrote.
const cleanNote = (n: string | null) => (n || '')
    .replace(/Please Provide Quote/gi, '')
    .replace(/\|?\s*Source:\s*\S+/gi, '')
    .replace(/Request:\s*One Way\.?/gi, '')
    .replace(/\s*\.\s*\./g, '.')
    .replace(/^[\s.|]+|[\s.|]+$/g, '')
    .trim();

export default function RequestsPage() {
    const router = useRouter();
    const [rows, setRows] = useState<Req[]>([]);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState<string | null>(null);
    const [showOld, setShowOld] = useState(false);

    const load = useCallback(async () => {
        const { data, error } = await supabase
            .from('bookings')
            .select(FIELDS)
            .eq('status', 'pending')
            .is('deleted_at', null)
            .order('pickup_date', { ascending: true })
            .order('pickup_time', { ascending: true });
        // Soonest trip first: by date, then pickup time.
        if (!error) setRows(((data as Req[]) || []).slice().sort((x, y) => (x.pickup_date + (x.pickup_time || '00:00')).localeCompare(y.pickup_date + (y.pickup_time || '00:00'))));
        setLoading(false);
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            load();
        });
        const channel = supabase
            .channel('requests-inbox')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => load())
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, [router, load]);

    const today = ksaToday();
    const tomorrow = ksaToday(1);
    const groups = useMemo(() => ({
        today: rows.filter(r => r.pickup_date === today),
        tomorrow: rows.filter(r => r.pickup_date === tomorrow),
        later: rows.filter(r => r.pickup_date > tomorrow),
        old: rows.filter(r => r.pickup_date < today).reverse(),
    }), [rows, today, tomorrow]);
    const upcomingCount = groups.today.length + groups.tomorrow.length + groups.later.length;

    const setStatus = async (ids: string[], status: 'quote_sent' | 'confirmed' | 'cancelled') => {
        setBusy(ids.length === 1 ? ids[0] : 'bulk');
        const { error } = await supabase.from('bookings').update({ status }).in('id', ids);
        setBusy(null);
        if (error) { alert('Could not update: ' + error.message); return; }
        setRows(prev => prev.filter(r => !ids.includes(r.id)));
    };

    const open = (id: string) => router.push(`/admin/bookings/?openId=${id}`);

    if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;

    const Row = ({ r }: { r: Req }) => {
        const note = cleanNote(r.special_requests);
        const wa = r.customer_phone ? `https://wa.me/${digits(r.customer_phone)}?text=${encodeURIComponent(`Hello ${r.customer_name}, thank you for your booking request with Taxi Service KSA.`)}` : null;
        return (
            <li
                onClick={(e) => { if (!(e.target as HTMLElement).closest('a, button, select')) open(r.id); }}
                className="cursor-pointer px-4 py-3 hover:bg-gray-50 grid grid-cols-1 md:grid-cols-[90px_minmax(0,1.1fr)_minmax(0,1.6fr)_auto] gap-x-4 gap-y-1 items-center"
            >
                {/* When */}
                <div className="flex md:block items-baseline gap-2">
                    <p className="text-base font-black text-gray-900">{formatTime12h(r.pickup_time)}</p>
                    <p className="text-xs text-gray-500">{dayLabel(r.pickup_date)}</p>
                </div>

                {/* Who */}
                <div className="min-w-0">
                    <p className="font-bold text-gray-900 truncate">{r.customer_name}{r.booking_type === 'delivery' && <span className="ml-1.5 text-[10px] font-black uppercase bg-amber-500 text-white rounded px-1.5 py-0.5 align-middle">Delivery</span>}</p>
                    <p className="text-xs text-gray-500">{r.customer_phone || 'No phone'} · asked {ago(r.created_at)}</p>
                </div>

                {/* Trip */}
                <div className="min-w-0 text-sm text-gray-800">
                    <p className="[overflow-wrap:anywhere]">
                        <LocationText value={r.pickup_location} /> <span className="text-gray-400">→</span>{' '}
                        {r.trip_type === 'hourly' ? <span>{r.duration_hours || '?'} hours hourly hire</span> : <LocationText value={r.destination} />}
                    </p>
                    <p className="text-xs text-gray-500 flex flex-wrap gap-x-3">
                        {r.vehicle_type && <span>{r.vehicle_type}</span>}
                        {r.passengers != null && r.booking_type !== 'delivery' && <span className="inline-flex items-center gap-0.5"><Users className="w-3 h-3" />{r.passengers}</span>}
                        {r.flight_number && <span className="inline-flex items-center gap-0.5"><Plane className="w-3 h-3" />{r.flight_number}</span>}
                        {r.has_return_trip && <span className="inline-flex items-center gap-0.5 text-blue-700"><RotateCcw className="w-3 h-3" />Return</span>}
                        <span className={r.total_price ? 'font-semibold text-gray-800' : 'text-amber-700'}>{r.total_price ? `${r.currency || 'SAR'} ${r.total_price}` : 'No price yet'}</span>
                    </p>
                    {note && <p className="text-xs text-gray-600 italic mt-0.5 line-clamp-2">“{note}”</p>}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:justify-end pt-1 md:pt-0">
                    {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700"><WhatsAppIcon className="w-3.5 h-3.5 fill-current" />WhatsApp</a>}
                    <button type="button" onClick={() => open(r.id)} className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-black">Open</button>
                    <select
                        aria-label="Move to"
                        value=""
                        disabled={busy === r.id}
                        onChange={(e) => {
                            const v = e.target.value as 'quote_sent' | 'confirmed' | 'cancelled';
                            if (!v) return;
                            if (v === 'cancelled' && !confirm(`Cancel ${r.customer_name}'s request?`)) return;
                            setStatus([r.id], v);
                        }}
                        className="h-8 rounded-lg border border-gray-300 bg-white px-1.5 text-xs text-gray-600"
                    >
                        <option value="">Move to…</option>
                        <option value="quote_sent">Quote sent</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </li>
        );
    };

    const Group = ({ title, list, tone }: { title: string; list: Req[]; tone: string }) => list.length === 0 ? null : (
        <section className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <p role="heading" aria-level={2} className={`px-4 py-2 text-sm font-black uppercase tracking-wider ${tone}`}>{title} <span className="font-semibold normal-case tracking-normal">· {list.length}</span></p>
            <ul className="divide-y divide-gray-100">{list.map(r => <Row key={r.id} r={r} />)}</ul>
        </section>
    );

    return (
        <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">New Requests <span className="ml-1 rounded-full bg-red-500 px-2.5 py-0.5 text-sm text-white align-middle">{upcomingCount}</span></h1>
                    <p className="text-sm text-gray-500 mt-1">Customers waiting for your reply, soonest trip first. Click a request to open it.</p>
                </div>
                <button type="button" onClick={() => { setLoading(true); load(); }} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:border-gray-500">
                    <RefreshCw className="w-4 h-4" /> Refresh
                </button>
            </div>

            {upcomingCount === 0 && <p className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-10 text-center text-sm text-gray-500">No new requests. All caught up.</p>}
            <Group title="Today" list={groups.today} tone="bg-red-50 text-red-700" />
            <Group title="Tomorrow" list={groups.tomorrow} tone="bg-amber-50 text-amber-800" />
            <Group title="Later" list={groups.later} tone="bg-gray-50 text-gray-700" />

            {groups.old.length > 0 && (
                <section className="space-y-2 pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <button type="button" onClick={() => setShowOld(v => !v)} className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-800">
                            <ChevronDown className={`w-4 h-4 transition-transform ${showOld ? 'rotate-180' : ''}`} />
                            Old requests, trip date already passed ({groups.old.length})
                        </button>
                        <button type="button" disabled={busy === 'bulk'} onClick={() => { if (confirm(`Mark all ${groups.old.length} old requests as cancelled? No email is sent.`)) setStatus(groups.old.map(r => r.id), 'cancelled'); }} className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:border-gray-500">
                            {busy === 'bulk' ? 'Updating…' : `Clear all ${groups.old.length} old requests`}
                        </button>
                    </div>
                    {showOld && <div className="opacity-80"><Group title="Old" list={groups.old} tone="bg-gray-50 text-gray-500" /></div>}
                </section>
            )}
        </div>
    );
}
