'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Calendar, Clock, CheckCircle2, DollarSign, TrendingUp,
    BarChart2, ArrowUpRight, ExternalLink, Bell, MessageCircle,
    Zap, AlertTriangle, RefreshCw, Car
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TEAM_DRIVERS } from '@/lib/team-drivers';
import { ksaToday } from '@/lib/ksa-time';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    customer_name: string;
    customer_phone?: string | null;
    driver_name?: string | null;
    status: string;
    total_price?: number;
    currency?: string;
    deleted_at?: string | null;
}

const STATUS_COLORS: Record<string, string> = {
    pending:     '#fbbf24',
    quote_sent:  '#60a5fa',
    confirmed:   '#34d399',
    in_progress: '#a78bfa',
    completed:   '#38bdf8',
    cancelled:   '#f87171',
};

const STATUS_BADGE: Record<string, string> = {
    pending:     'bg-amber-500/15 text-amber-400',
    quote_sent:  'bg-blue-500/15 text-blue-400',
    confirmed:   'bg-emerald-500/15 text-emerald-400',
    in_progress: 'bg-purple-500/15 text-purple-400',
    completed:   'bg-sky-500/15 text-sky-400',
    cancelled:   'bg-red-500/15 text-red-400',
};

export default function AdminDashboard() {
    const router = useRouter();
    const [bookings, setBookings]       = useState<Booking[]>([]);
    const [openSupport, setOpenSupport] = useState(0);
    const [loading, setLoading]         = useState(true);
    // Driver quick-assign on the Today/Tomorrow schedule: the team first,
    // then approved drivers from the drivers table.
    const [drivers, setDrivers]         = useState<{ name: string; phone: string }[]>(TEAM_DRIVERS.map(d => ({ name: d.name, phone: '' })));
    const [assigning, setAssigning]     = useState<string | null>(null);
    const [savingDriver, setSavingDriver] = useState<string | null>(null);

    useEffect(() => {
        supabase.from('drivers').select('full_name,phone_number').eq('status', 'approved').order('full_name').then(({ data }) => {
            if (!data) return;
            const team = TEAM_DRIVERS.map(d => ({ name: d.name, phone: '' }));
            const extra = data
                .filter(d => d.full_name?.trim() && !team.some(t => t.name.toLowerCase() === d.full_name.trim().toLowerCase()))
                .map(d => ({ name: d.full_name.trim(), phone: d.phone_number || '' }));
            setDrivers([...team, ...extra]);
        });
    }, []);

    const assignDriver = async (b: Booking, name: string) => {
        setSavingDriver(b.id);
        const driver = drivers.find(d => d.name === name);
        const update: Record<string, string | null> = { driver_name: name || null };
        if (driver?.phone) update.driver_phone = driver.phone;
        const { error } = await supabase.from('bookings').update(update).eq('id', b.id);
        setSavingDriver(null);
        if (error) { alert('Could not save the driver: ' + error.message); return; }
        setBookings(prev => prev.map(x => (x.id === b.id ? { ...x, driver_name: name || null } : x)));
        setAssigning(null);
    };

    const fetchData = useCallback(async () => {
        const [{ data: bData }, { count: sCount }] = await Promise.all([
            supabase
                .from('bookings')
                .select('id,created_at,status,pickup_location,destination,pickup_date,pickup_time,vehicle_type,customer_name,customer_phone,driver_name,total_price,currency')
                .is('deleted_at', null)
                .order('created_at', { ascending: false }),
            supabase
                .from('support_inquiries')
                .select('id', { count: 'exact', head: true })
                .eq('status', 'open'),
        ]);
        setBookings((bData as Booking[]) || []);
        setOpenSupport(sCount || 0);
        setLoading(false);
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            fetchData();
        });
    }, [router, fetchData]);

    // Realtime: new bookings appear instantly
    useEffect(() => {
        const channel = supabase
            .channel('dashboard-realtime')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'bookings' }, (payload) => {
                setBookings(prev => [payload.new as Booking, ...prev]);
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'bookings' }, (payload) => {
                setBookings(prev => prev.map(b => b.id === (payload.new as Booking).id ? payload.new as Booking : b));
            })
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, []);

    // Tab title shows pending action count
    useEffect(() => {
        const count = bookings.filter(b => b.status === 'pending' || b.status === 'quote_sent').length;
        document.title = count > 0 ? `(${count}) Admin Panel` : 'Admin Panel';
        return () => { document.title = 'Admin Panel'; };
    }, [bookings]);

    if (loading) return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" />
        </div>
    );

    // Pickup dates are Saudi dates, so "today" is today in Riyadh even when
    // the admin is checking from Pakistan or elsewhere.
    const today       = ksaToday();
    const tomorrowStr = ksaToday(1);
    const dayLabel    = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short', timeZone: 'UTC' });
    const time12      = (t?: string) => {
        if (!t) return '—';
        const [h, m] = t.split(':').map(Number);
        return `${((h + 11) % 12) + 1}:${String(m || 0).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
    };

    const needsAction    = bookings.filter(b => b.status === 'pending' || b.status === 'quote_sent');
    const todaysTrips    = bookings.filter(b => b.pickup_date === today && b.status !== 'cancelled');
    const confirmedToday = bookings.filter(b => b.pickup_date === today && b.status === 'confirmed');
    const inProgress     = bookings.filter(b => b.status === 'in_progress');
    // Group by currency — mixing SAR, KWD, AED etc. into one sum under a
    // single hardcoded "SAR" label would misreport revenue.
    const revenueByCurrency = bookings
        .filter(b => b.status === 'completed')
        .reduce((acc, b) => {
            const curr = b.currency || 'SAR';
            acc[curr] = (acc[curr] || 0) + (b.total_price || 0);
            return acc;
        }, {} as Record<string, number>);

    const scheduleFor = (date: string) => bookings
        .filter(b => b.pickup_date === date && !['cancelled', 'completed'].includes(b.status))
        .sort((a, b) => (a.pickup_time || '').localeCompare(b.pickup_time || ''));
    const todaySchedule    = scheduleFor(today);
    const tomorrowSchedule = scheduleFor(tomorrowStr);

    // Monthly bookings (last 6 months)
    const monthlyMap: Record<string, number> = {};
    for (let i = 5; i >= 0; i--) {
        const d = new Date(); d.setMonth(d.getMonth() - i);
        monthlyMap[d.toLocaleString('en-US', { month: 'short', year: '2-digit' })] = 0;
    }
    bookings.forEach(b => {
        const key = new Date(b.created_at).toLocaleString('en-US', { month: 'short', year: '2-digit' });
        if (key in monthlyMap) monthlyMap[key]++;
    });
    const monthlyData = Object.entries(monthlyMap).map(([month, count]) => ({ month, count }));

    // Status pie
    const statusMap: Record<string, number> = {};
    bookings.forEach(b => { statusMap[b.status] = (statusMap[b.status] || 0) + 1; });
    const statusData = Object.entries(statusMap)
        .filter(([, v]) => v > 0)
        .map(([name, value]) => ({ name, value, color: STATUS_COLORS[name] || '#6b7280' }));

    return (
        <div className="text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Dashboard
                    </h1>
                    <p className="text-neutral-400 mt-1">
                        {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
                <Button onClick={fetchData} variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 gap-2">
                    <RefreshCw className="w-4 h-4" /> Refresh
                </Button>
            </div>

            {/* Today / Tomorrow Schedule */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">Today &amp; Tomorrow Schedule</h2>
                    <Button
                        variant="outline" size="sm"
                        onClick={() => router.push('/admin/bookings')}
                        className="border-neutral-700 text-neutral-400 hover:text-white text-xs gap-1"
                    >
                        View All <ExternalLink className="w-3 h-3" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Schedule: today and tomorrow as two clearly separate lists */}
                    <div className="lg:col-span-2 space-y-5">
                        {[
                            { key: 'today', title: 'Today', date: today, list: todaySchedule, accent: 'bg-amber-400 text-black' },
                            { key: 'tomorrow', title: 'Tomorrow', date: tomorrowStr, list: tomorrowSchedule, accent: 'bg-sky-400 text-black' },
                        ].map(day => (
                            <section key={day.key} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                                <header className="flex items-center justify-between gap-3 px-5 py-3 border-b border-neutral-700 bg-neutral-900/60">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${day.accent}`}>{day.title}</span>
                                        <span className="text-sm font-semibold text-white">{dayLabel(day.date)}</span>
                                    </div>
                                    <span className="text-xs text-neutral-400">{day.list.length} {day.list.length === 1 ? 'trip' : 'trips'}</span>
                                </header>
                                {day.list.length === 0 ? (
                                    <p className="px-5 py-6 text-sm text-neutral-500">No trips {day.key === 'today' ? 'today' : 'tomorrow'}.</p>
                                ) : (
                                    <div className="divide-y divide-neutral-700/50">
                                        {day.list.map(b => (
                                            <div
                                                role="link"
                                                tabIndex={0}
                                                key={b.id}
                                                onClick={() => router.push(`/admin/bookings/?openId=${b.id}`)}
                                                onKeyDown={(e) => { if (e.key === 'Enter') router.push(`/admin/bookings/?openId=${b.id}`); }}
                                                className="w-full text-left flex items-start gap-4 px-5 py-3.5 hover:bg-neutral-700/30 transition-colors cursor-pointer"
                                            >
                                                <div className="shrink-0 w-[72px]">
                                                    <p className="text-base font-black text-white leading-tight">{time12(b.pickup_time)}</p>
                                                </div>
                                                <div className="flex-1 min-w-0 space-y-0.5">
                                                    <p className="font-bold text-white text-sm">
                                                        {b.customer_name}
                                                        {b.customer_phone && <span className="font-normal text-neutral-400"> · {b.customer_phone}</span>}
                                                    </p>
                                                    <p className="text-xs text-neutral-300">{b.pickup_location} → {b.destination}</p>
                                                    <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                                                        <span>{b.vehicle_type} ·</span>
                                                        {assigning === b.id ? (
                                                            <select
                                                                autoFocus
                                                                value={b.driver_name || ''}
                                                                disabled={savingDriver === b.id}
                                                                onClick={(e) => e.stopPropagation()}
                                                                onChange={(e) => assignDriver(b, e.target.value)}
                                                                onBlur={() => savingDriver !== b.id && setAssigning(null)}
                                                                className="h-7 rounded-md border border-neutral-600 bg-neutral-900 px-2 text-xs text-white"
                                                            >
                                                                <option value="">No driver</option>
                                                                {drivers.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                                                                {b.driver_name && !drivers.some(d => d.name === b.driver_name) && <option value={b.driver_name}>{b.driver_name}</option>}
                                                            </select>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.stopPropagation(); setAssigning(b.id); }}
                                                                className={b.driver_name
                                                                    ? 'text-emerald-400 hover:underline'
                                                                    : 'rounded-md bg-red-500/15 px-2 py-0.5 font-semibold text-red-300 hover:bg-red-500/25'}
                                                                title="Click to assign or change the driver"
                                                            >
                                                                {b.driver_name ? `Driver: ${b.driver_name} (change)` : '+ Assign driver'}
                                                            </button>
                                                        )}
                                                        {savingDriver === b.id && <span className="text-neutral-400">Saving...</span>}
                                                    </div>
                                                </div>
                                                <Badge className={`text-[10px] border-0 shrink-0 ${STATUS_BADGE[b.status] || 'bg-neutral-700 text-neutral-400'}`}>
                                                    {b.status.replace('_', ' ')}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Summary card */}
                    <div className="bg-black rounded-xl p-5 border border-neutral-700 flex flex-col justify-between">
                        <div>
                            <h3 className="text-primary font-bold text-xs mb-4 tracking-widest uppercase flex items-center gap-2">
                                <Bell className="w-4 h-4" /> Quick Summary
                            </h3>
                            <div className="space-y-0">
                                {[
                                    { label: "Today's Pickups",    value: todaysTrips.length,    color: 'text-white' },
                                    { label: 'En Route Now',        value: inProgress.length,     color: 'text-purple-400' },
                                    { label: 'Needs Attention',     value: needsAction.length,    color: needsAction.length > 0 ? 'text-amber-400' : 'text-white' },
                                    { label: "Tomorrow's Pickups",  value: bookings.filter(b => b.pickup_date === tomorrowStr && b.status !== 'cancelled').length, color: 'text-white' },
                                ].map(({ label, value, color }) => (
                                    <div key={label} className="flex items-center justify-between border-t border-neutral-800 py-3 first:border-0">
                                        <span className="text-xs text-neutral-400">{label}</span>
                                        <span className={`text-xl font-black ${color}`}>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button
                            onClick={() => router.push('/admin/bookings')}
                            className="w-full mt-5 bg-primary text-black font-bold hover:bg-white hover:text-black transition-all"
                        >
                            Go to Dispatch Board
                        </Button>
                    </div>
                </div>
            </div>

            {/* At a glance: one compact strip instead of the old big cards */}
            <div className="mb-8 rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                {needsAction.length > 0 && (
                    <button
                        type="button"
                        onClick={() => router.push('/admin/requests')}
                        className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 px-2 py-1 font-semibold text-amber-400 hover:bg-amber-500/20"
                        title={`${bookings.filter(b => b.status === 'pending').length} new requests, ${bookings.filter(b => b.status === 'quote_sent').length} awaiting customer confirmation`}
                    >
                        <AlertTriangle className="w-3.5 h-3.5" /> {needsAction.length} need attention
                    </button>
                )}
                <span className="text-neutral-400">Total <b className="text-white">{bookings.length}</b></span>
                <span className="text-neutral-400">Today <b className="text-amber-400">{todaysTrips.length}</b></span>
                <span className="text-neutral-400">Confirmed today <b className="text-emerald-400">{confirmedToday.length}</b></span>
                {inProgress.length > 0 && <span className="text-neutral-400">En route <b className="text-purple-400">{inProgress.length}</b></span>}
                <span className="text-neutral-400" title="Completed trips only">
                    Revenue{' '}
                    <b className="text-primary">
                        {Object.keys(revenueByCurrency).length === 0
                            ? 'SAR 0'
                            : Object.entries(revenueByCurrency).map(([curr, amount]) => `${curr} ${Math.round(amount).toLocaleString()}`).join(' · ')}
                    </b>
                </span>
                <span className="ml-auto flex flex-wrap gap-1.5">
                    {[
                        { label: 'Dispatch Board', href: '/admin/bookings' },
                        { label: openSupport > 0 ? `Support (${openSupport})` : 'Support', href: '/admin/support', alert: openSupport > 0 },
                        { label: 'Customers', href: '/admin/customers' },
                        { label: 'Reports', href: '/admin/reports' },
                    ].map(l => (
                        <button
                            key={l.href}
                            type="button"
                            onClick={() => router.push(l.href)}
                            className={`rounded-md border px-2 py-1 font-semibold ${l.alert ? 'border-red-500/40 text-red-400' : 'border-neutral-700 text-neutral-300 hover:text-white'}`}
                        >
                            {l.label}
                        </button>
                    ))}
                </span>
            </div>

            {/* Analytics */}
            <div>
                <div className="flex items-center gap-2 mb-5">
                    <BarChart2 className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-bold">Analytics</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Monthly Bookings */}
                    <div className="lg:col-span-2 bg-neutral-800 rounded-xl border border-neutral-700 p-5">
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                            Monthly Bookings (Last 6 Months)
                        </p>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={monthlyData} barSize={32}>
                                <XAxis dataKey="month" tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} width={25} />
                                <Tooltip
                                    contentStyle={{ background: '#1f1f1f', border: '1px solid #333', borderRadius: 8, color: '#fff', fontSize: 12 }}
                                    formatter={(v: number) => [v, 'Bookings']}
                                />
                                <Bar dataKey="count" fill="#C6FF00" radius={[4, 4, 0, 0]} name="Bookings" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Status Pie */}
                    <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5">
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                            Booking Status
                        </p>
                        {statusData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        cx="50%" cy="45%"
                                        innerRadius={50} outerRadius={75}
                                        paddingAngle={3} dataKey="value"
                                    >
                                        {statusData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                                    </Pie>
                                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
                                    <Tooltip
                                        contentStyle={{ background: '#1f1f1f', border: '1px solid #333', borderRadius: 8, color: '#fff', fontSize: 12 }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-[200px] flex items-center justify-center text-neutral-500 text-sm">
                                No data yet
                            </div>
                        )}
                    </div>
                </div>

                {/* Revenue cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                    {(() => {
                        // Average trip value per currency, since a mixed SAR/KWD/AED
                        // average under one currency label would be meaningless.
                        const priced = bookings.filter(b => b.total_price);
                        const sumByCurrency = priced.reduce((acc, b) => {
                            const curr = b.currency || 'SAR';
                            if (!acc[curr]) acc[curr] = { sum: 0, count: 0 };
                            acc[curr].sum += b.total_price || 0;
                            acc[curr].count += 1;
                            return acc;
                        }, {} as Record<string, { sum: number; count: number }>);
                        const avgTripValue = Object.keys(sumByCurrency).length === 0
                            ? 'SAR 0'
                            : Object.entries(sumByCurrency)
                                .map(([curr, { sum, count }]) => `${curr} ${Math.round(sum / count)}`)
                                .join(' + ');

                        return [
                            { label: 'Completion Rate', value: bookings.length ? `${Math.round(bookings.filter(b => b.status === 'completed').length / bookings.length * 100)}%` : '0%', icon: CheckCircle2, color: 'text-emerald-400' },
                            { label: 'Cancel Rate',      value: bookings.length ? `${Math.round(bookings.filter(b => b.status === 'cancelled').length / bookings.length * 100)}%` : '0%', icon: Car, color: 'text-red-400' },
                            { label: 'Avg Trip Value',   value: avgTripValue, icon: DollarSign, color: 'text-sky-400' },
                            { label: 'This Month',       value: (() => { const m = new Date().toLocaleString('en-US', { month: 'short', year: '2-digit' }); return bookings.filter(b => new Date(b.created_at).toLocaleString('en-US', { month: 'short', year: '2-digit' }) === m).length; })(), icon: Calendar, color: 'text-primary' },
                        ];
                    })().map(({ label, value, icon: Icon, color }) => (
                        <div key={label} className="bg-neutral-800 rounded-xl p-5 border border-neutral-700">
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className={`w-4 h-4 ${color}`} />
                                <p className="text-xs text-neutral-400 uppercase font-bold tracking-widest">{label}</p>
                            </div>
                            <p className={`text-2xl font-black ${color}`}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
