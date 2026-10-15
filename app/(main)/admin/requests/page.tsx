'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ksaToday } from '@/lib/ksa-time';
import { formatTime12h } from '@/lib/format-time';
import { Loader2, RefreshCw, Phone, MapPin, Users, Briefcase, Plane, RotateCcw, StickyNote, ChevronDown } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import LocationText from '@/components/admin/LocationText';

// Inbox of new booking requests: every booking still 'pending', newest first.
// Upcoming trips are the work queue; requests whose date has already passed
// are kept in a collapsed section so they don't bury the new ones.
interface Req {
    id: string;
    created_at: string;
    customer_name: string;
    customer_phone: string | null;
    customer_email: string | null;
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
    return_date: string | null;
    return_time: string | null;
    trip_type: string | null;
    duration_hours: number | null;
    booking_type: string | null;
    total_price: number | null;
    currency: string | null;
}

const FIELDS = 'id,created_at,customer_name,customer_phone,customer_email,pickup_location,destination,pickup_date,pickup_time,vehicle_type,passengers,luggage,flight_number,special_requests,has_return_trip,return_date,return_time,trip_type,duration_hours,booking_type,total_price,currency';

const ago = (iso: string) => {
    const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
    if (mins < 60) return `${mins} min ago`;
    const h = Math.round(mins / 60);
    if (h < 48) return `${h} h ago`;
    return `${Math.round(h / 24)} days ago`;
};
const dayLabel = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
const digits = (p: string) => p.replace(/[^\d]/g, '');

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
            .order('created_at', { ascending: false });
        if (!error) setRows((data as Req[]) || []);
        setLoading(false);
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            load();
        });
        // New requests appear without a refresh.
        const channel = supabase
            .channel('requests-inbox')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => load())
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, [router, load]);

    const today = ksaToday();
    const upcoming = useMemo(() => rows.filter(r => r.pickup_date >= today), [rows, today]);
    const old = useMemo(() => rows.filter(r => r.pickup_date < today), [rows, today]);

    const setStatus = async (ids: string[], status: 'quote_sent' | 'confirmed' | 'cancelled') => {
        setBusy(ids.length === 1 ? ids[0] : 'bulk');
        const { error } = await supabase.from('bookings').update({ status }).in('id', ids);
        setBusy(null);
        if (error) { alert('Could not update: ' + error.message); return; }
        setRows(prev => prev.filter(r => !ids.includes(r.id)));
    };

    const clearOld = () => {
        if (!old.length) return;
        if (!confirm(`Mark all ${old.length} old requests (date already passed) as cancelled? No email is sent to customers.`)) return;
        setStatus(old.map(r => r.id), 'cancelled');
    };

    if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;

    const Card = ({ r }: { r: Req }) => {
        const delivery = r.booking_type === 'delivery';
        const isToday = r.pickup_date === today;
        const wa = r.customer_phone ? `https://wa.me/${digits(r.customer_phone)}?text=${encodeURIComponent(`Hello ${r.customer_name}, thank you for your booking request with Taxi Service KSA (${r.pickup_location} to ${r.destination}, ${dayLabel(r.pickup_date)}).`)}` : null;
        return (
            <article className="bg-white rounded-xl border border-gray-200 p-4 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                        <p className="font-bold text-gray-900">{r.customer_name} {delivery && <span className="ml-1 text-[10px] font-black uppercase bg-amber-500 text-white rounded px-1.5 py-0.5">Delivery</span>}</p>
                        <p className="text-xs text-gray-500">Received {ago(r.created_at)} · #{r.id.slice(0, 8).toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                        <p className={`text-sm font-bold ${isToday ? 'text-red-600' : 'text-gray-900'}`}>{isToday ? 'TODAY' : dayLabel(r.pickup_date)}</p>
                        <p className="text-xs text-gray-500">{formatTime12h(r.pickup_time)}</p>
                    </div>
                </div>

                <div className="text-sm space-y-1">
                    <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" /><LocationText value={r.pickup_location} className="min-w-0" /></p>
                    {r.trip_type === 'hourly'
                        ? <p className="flex gap-2 text-gray-700">Hourly hire · {r.duration_hours || '?'} hours</p>
                        : <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" /><LocationText value={r.destination} className="min-w-0" /></p>}
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                    {r.vehicle_type && <span>{r.vehicle_type}</span>}
                    {!delivery && r.passengers != null && <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{r.passengers}</span>}
                    {!delivery && r.luggage != null && <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{r.luggage}</span>}
                    {r.flight_number && <span className="flex items-center gap-1"><Plane className="w-3.5 h-3.5" />{r.flight_number}</span>}
                    {r.has_return_trip && <span className="flex items-center gap-1 text-blue-700"><RotateCcw className="w-3.5 h-3.5" />Return {r.return_date ? dayLabel(r.return_date) : ''} {formatTime12h(r.return_time)}</span>}
                    {r.total_price ? <span className="font-semibold text-gray-900">{r.currency || 'SAR'} {r.total_price}</span> : null}
                </div>

                {r.special_requests && <p className="flex gap-2 text-xs bg-amber-50 text-amber-900 rounded-lg px-2.5 py-2"><StickyNote className="w-3.5 h-3.5 mt-0.5 shrink-0" />{r.special_requests}</p>}

                <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
                    {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700"><WhatsAppIcon className="w-3.5 h-3.5 fill-current" />WhatsApp</a>}
                    {r.customer_phone && <a href={`tel:${r.customer_phone}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-xs font-bold text-gray-800"><Phone className="w-3.5 h-3.5" />{r.customer_phone}</a>}
                    <button type="button" onClick={() => router.push(`/admin/bookings/?openId=${r.id}`)} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-bold text-gray-800 hover:border-gray-500">Open &amp; price</button>
                    <span className="ml-auto flex gap-1.5">
                        <button type="button" disabled={busy === r.id} onClick={() => setStatus([r.id], 'quote_sent')} className="rounded-lg bg-blue-50 px-2.5 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100">Quote sent</button>
                        <button type="button" disabled={busy === r.id} onClick={() => setStatus([r.id], 'confirmed')} className="rounded-lg bg-emerald-50 px-2.5 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100">Confirm</button>
                        <button type="button" disabled={busy === r.id} onClick={() => { if (confirm(`Cancel ${r.customer_name}'s request?`)) setStatus([r.id], 'cancelled'); }} className="rounded-lg bg-gray-100 px-2.5 py-2 text-xs font-bold text-gray-600 hover:bg-gray-200">Cancel</button>
                    </span>
                </div>
            </article>
        );
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">New Booking Requests</h1>
                    <p className="text-sm text-gray-500 mt-1">Pending requests from the website and manual entries. Reply, price them, then mark Quote sent or Confirm to move them off this list.</p>
                </div>
                <button type="button" onClick={() => { setLoading(true); load(); }} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:border-gray-500">
                    <RefreshCw className="w-4 h-4" /> Refresh
                </button>
            </div>

            <section className="space-y-3">
                <h2 className="font-bold text-gray-900">Upcoming trips <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">{upcoming.length}</span></h2>
                {upcoming.length
                    ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">{upcoming.map(r => <Card key={r.id} r={r} />)}</div>
                    : <p className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-10 text-center text-sm text-gray-500">No new requests. All caught up.</p>}
            </section>

            {old.length > 0 && (
                <section className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <button type="button" onClick={() => setShowOld(v => !v)} className="inline-flex items-center gap-1.5 font-bold text-gray-500 hover:text-gray-800">
                            <ChevronDown className={`w-4 h-4 transition-transform ${showOld ? 'rotate-180' : ''}`} />
                            Old requests, date already passed ({old.length})
                        </button>
                        <button type="button" disabled={busy === 'bulk'} onClick={clearOld} className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 hover:border-gray-500">
                            {busy === 'bulk' ? 'Updating…' : `Mark all ${old.length} as cancelled`}
                        </button>
                    </div>
                    {showOld && <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 opacity-80">{old.map(r => <Card key={r.id} r={r} />)}</div>}
                </section>
            )}
        </div>
    );
}
