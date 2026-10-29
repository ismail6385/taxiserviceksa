'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ksaToday, shiftIsoDate } from '@/lib/ksa-time';
import { Loader2, MapPin, ArrowRight, X, Search, Car } from 'lucide-react';
import DriverMessageDialog from '@/components/admin/DriverMessageDialog';
import type { DriverMessageBooking } from '@/lib/driver-message';

interface Trip extends DriverMessageBooking {
    id: string;
    pickup_location: string | null;
    destination: string | null;
    pickup_date: string | null;
    pickup_time: string | null;
    customer_name: string | null;
    customer_phone: string | null;
    vehicle_type: string | null;
    driver_name: string | null;
    status: string;
    total_price: number | null;
    currency: string | null;
}

// Each city with the words that identify it in a free-text address. Bookings
// store whatever the customer typed ("Hilton Makkah", "KAIA T1", "مكة"), so the
// city is worked out from the text; the earliest match in the address wins.
const CITIES: { city: string; words: string[] }[] = [
    { city: 'Makkah', words: ['makkah', 'mecca', 'makka', 'mekkah', 'makah', 'masjid al haram', 'masjid al-haram', 'aziziyah', 'aziziya', 'kudai', 'misfalah', 'ajyad', 'jabal omar', 'clock tower', 'abraj', 'مكة', 'مكه'] },
    { city: 'Madinah', words: ['madinah', 'medina', 'madina', 'medinah', 'nabawi', 'quba', 'المدينة', 'المدينه'] },
    { city: 'Jeddah', words: ['jeddah', 'jedda', 'jiddah', 'jidda', 'kaia', 'jed', 'king abdulaziz', 'obhur', 'جدة', 'جده'] },
    { city: 'Riyadh', words: ['riyadh', 'riyad', 'ruh', 'king khalid', 'olaya', 'kafd', 'الرياض'] },
    { city: 'Dammam', words: ['dammam', 'dmm', 'king fahd international', 'الدمام'] },
    { city: 'Khobar', words: ['khobar', 'al-khobar', 'الخبر'] },
    { city: 'Dhahran', words: ['dhahran', 'الظهران'] },
    { city: 'Jubail', words: ['jubail', 'الجبيل'] },
    { city: 'Al Ahsa', words: ['ahsa', 'hasa', 'hofuf', 'الأحساء', 'الاحساء'] },
    { city: 'Taif', words: ['taif', 'الطائف'] },
    { city: 'AlUla', words: ['alula', 'al ula', 'al-ula', 'hegra', 'العلا'] },
    { city: 'Tabuk', words: ['tabuk', 'تبوك'] },
    { city: 'Abha', words: ['abha', 'khamis mushait', 'أبها', 'ابها'] },
    { city: 'Yanbu', words: ['yanbu', 'ينبع'] },
    { city: 'Al-Qassim', words: ['qassim', 'gassim', 'buraidah', 'buraydah', 'unaizah', 'unayzah', 'rass', 'القصيم', 'بريدة'] },
    { city: 'Hail', words: ['hail', "ha'il", 'حائل'] },
    { city: 'Al-Kharj', words: ['kharj', 'الخرج'] },
    { city: 'Khafji', words: ['khafji', 'الخفجي'] },
    { city: 'Hafar Al-Batin', words: ['hafar', 'حفر الباطن'] },
    { city: 'Jizan', words: ['jizan', 'jazan', 'جازان'] },
    { city: 'Kuwait', words: ['kuwait', 'salmiya', 'hawalli', 'jahra', 'ahmadi', 'الكويت'] },
    { city: 'Bahrain', words: ['bahrain', 'manama', 'muharraq', 'causeway', 'البحرين'] },
    { city: 'Qatar', words: ['qatar', 'doha', 'قطر', 'الدوحة'] },
    { city: 'Dubai', words: ['dubai', 'دبي'] },
    { city: 'Abu Dhabi', words: ['abu dhabi', 'أبوظبي', 'ابوظبي'] },
    { city: 'Sharjah', words: ['sharjah', 'الشارقة'] },
    { city: 'Oman', words: ['oman', 'muscat', 'مسقط'] },
    { city: 'Jordan', words: ['jordan', 'amman', 'الأردن'] },
];
const OTHER = 'Other / not clear';

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Latin words must stand alone ("jed" should not match inside another word);
// Arabic has no word boundaries in JS regex, so it is matched as plain text.
const MATCHERS = CITIES.map(({ city, words }) => ({
    city,
    res: words.map((w) => (/[a-z]/i.test(w) ? new RegExp(`\\b${escapeRe(w)}\\b`, 'i') : new RegExp(escapeRe(w)))),
}));

function cityOf(text: string | null | undefined): string {
    if (!text) return OTHER;
    let best: { city: string; at: number } | null = null;
    for (const { city, res } of MATCHERS) {
        for (const re of res) {
            const m = re.exec(text);
            if (m && (best === null || m.index < best.at)) best = { city, at: m.index };
        }
    }
    return best ? best.city : OTHER;
}

const PRESETS = [
    { label: 'This month', range: () => ({ from: `${ksaToday().slice(0, 8)}01`, to: '' }) },
    { label: 'Last month', range: () => { const first = `${ksaToday().slice(0, 8)}01`; return { from: shiftIsoDate(first, { months: -1 }), to: shiftIsoDate(first, { days: -1 }) }; } },
    { label: 'Last 3 months', range: () => ({ from: shiftIsoDate(ksaToday(), { months: -3 }), to: '' }) },
    { label: 'This year', range: () => ({ from: `${ksaToday().slice(0, 4)}-01-01`, to: '' }) },
    { label: 'All time', range: () => ({ from: '', to: '' }) },
];

// Upcoming view: trips from today (Saudi date) that are still to be driven.
const UPCOMING_STATUSES = ['pending', 'quote_sent', 'confirmed', 'in_progress'];
const UPCOMING_PRESETS = [
    { label: 'Today', range: () => ({ from: ksaToday(), to: ksaToday() }) },
    { label: 'Tomorrow', range: () => ({ from: ksaToday(1), to: ksaToday(1) }) },
    { label: 'Next 7 days', range: () => ({ from: ksaToday(), to: ksaToday(7) }) },
    { label: 'Next 30 days', range: () => ({ from: ksaToday(), to: ksaToday(30) }) },
    { label: 'All upcoming', range: () => ({ from: ksaToday(), to: '' }) },
];

const STATUS_FILTERS = [
    { key: 'active', label: 'Without cancelled', test: (s: string) => s !== 'cancelled' },
    { key: 'completed', label: 'Completed only', test: (s: string) => s === 'completed' },
    { key: 'upcoming', label: 'Not done yet', test: (s: string) => ['pending', 'quote_sent', 'confirmed', 'in_progress'].includes(s) },
    { key: 'all', label: 'Everything', test: () => true },
];

const STATUS_STYLE: Record<string, string> = {
    completed: 'bg-sky-100 text-sky-800',
    confirmed: 'bg-emerald-100 text-emerald-800',
    in_progress: 'bg-violet-100 text-violet-800',
    quote_sent: 'bg-blue-100 text-blue-800',
    pending: 'bg-amber-100 text-amber-800',
    cancelled: 'bg-red-100 text-red-800',
};

const money = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

export default function TripsByCity({ initialView = 'all' }: { initialView?: 'all' | 'upcoming' }) {
    const router = useRouter();
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [preset, setPreset] = useState(initialView === 'upcoming' ? 'All upcoming' : 'All time');
    const [from, setFrom] = useState(initialView === 'upcoming' ? ksaToday() : '');
    const [to, setTo] = useState('');
    const [statusKey, setStatusKey] = useState('active');
    const [selected, setSelected] = useState<string | null>(null);
    const [pair, setPair] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const view = initialView;
    const [driverMsg, setDriverMsg] = useState<Trip | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            // All columns: the driver message needs stops, return leg, payment and more.
            const cols = '*';
            let res = await supabase.from('bookings').select(cols).is('deleted_at', null).order('pickup_date', { ascending: false });
            // Older databases may not have the soft-delete column.
            if (res.error) res = await supabase.from('bookings').select(cols).order('pickup_date', { ascending: false });
            if (res.error) setError(res.error.message);
            setTrips((res.data as Trip[]) || []);
            setLoading(false);
        });
    }, [router]);

    const withCities = useMemo(() => trips.map((t) => ({ ...t, fromCity: cityOf(t.pickup_location), toCity: cityOf(t.destination) })), [trips]);

    const filtered = useMemo(() => {
        const test = view === 'upcoming' ? (s: string) => UPCOMING_STATUSES.includes(s) : STATUS_FILTERS.find((s) => s.key === statusKey)!.test;
        const rows = withCities.filter((t) => {
            if (!test(t.status)) return false;
            if (from && (!t.pickup_date || t.pickup_date < from)) return false;
            if (to && (!t.pickup_date || t.pickup_date > to)) return false;
            return true;
        });
        // Upcoming: soonest first, so the next trip is at the top.
        if (view === 'upcoming') rows.sort((a, b) => `${a.pickup_date} ${a.pickup_time || ''}`.localeCompare(`${b.pickup_date} ${b.pickup_time || ''}`));
        return rows;
    }, [withCities, statusKey, from, to, view]);

    const cities = useMemo(() => {
        const map = new Map<string, { city: string; total: number; from: number; to: number; sar: number; next: string }>();
        const row = (city: string) => {
            if (!map.has(city)) map.set(city, { city, total: 0, from: 0, to: 0, sar: 0, next: '' });
            return map.get(city)!;
        };
        for (const t of filtered) {
            const sar = (t.currency || 'SAR') === 'SAR' ? Number(t.total_price || 0) : 0;
            const when = `${t.pickup_date || ''} ${t.pickup_time?.slice(0, 5) || ''}`.trim();
            for (const c of t.fromCity === t.toCity ? [t.fromCity] : [t.fromCity, t.toCity]) {
                const r = row(c);
                if (when && (!r.next || when < r.next)) r.next = when;
            }
            const a = row(t.fromCity);
            a.from++; a.total++; a.sar += sar;
            if (t.toCity !== t.fromCity) {
                const b = row(t.toCity);
                b.to++; b.total++; b.sar += sar;
            } else {
                a.to++;
            }
        }
        return Array.from(map.values()).sort((x, y) => (x.city === OTHER ? 1 : y.city === OTHER ? -1 : y.total - x.total));
    }, [filtered]);

    const pairs = useMemo(() => {
        const map = new Map<string, { key: string; fromCity: string; toCity: string; count: number; sar: number }>();
        for (const t of filtered) {
            if (selected && t.fromCity !== selected && t.toCity !== selected) continue;
            const key = `${t.fromCity} → ${t.toCity}`;
            if (!map.has(key)) map.set(key, { key, fromCity: t.fromCity, toCity: t.toCity, count: 0, sar: 0 });
            const p = map.get(key)!;
            p.count++;
            if ((t.currency || 'SAR') === 'SAR') p.sar += Number(t.total_price || 0);
        }
        return Array.from(map.values()).sort((a, b) => b.count - a.count);
    }, [filtered, selected]);

    const list = useMemo(() => {
        const q = search.trim().toLowerCase();
        return filtered.filter((t) => {
            if (selected && t.fromCity !== selected && t.toCity !== selected) return false;
            if (pair && `${t.fromCity} → ${t.toCity}` !== pair) return false;
            if (q && ![t.customer_name, t.customer_phone, t.pickup_location, t.destination, t.driver_name].some((v) => (v || '').toLowerCase().includes(q))) return false;
            return true;
        });
    }, [filtered, selected, pair, search]);

    const presets = view === 'upcoming' ? UPCOMING_PRESETS : PRESETS;

    const applyPreset = (p: { label: string; range: () => { from: string; to: string } }) => {
        const r = p.range();
        setFrom(r.from); setTo(r.to); setPreset(p.label);
    };

    const pickCity = (city: string) => {
        setPair(null);
        setSelected((cur) => (cur === city ? null : city));
    };

    if (loading) {
        return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;
    }

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <DriverMessageDialog booking={driverMsg} onClose={() => setDriverMsg(null)} />
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{view === 'upcoming' ? 'Upcoming Trips by City' : 'Trips by City'}</h1>
                <p className="text-sm text-gray-500 mt-1">{view === 'upcoming'
                    ? 'Trips from today (Saudi time) that are not done or cancelled yet, soonest first. Tap a city to see its trips.'
                    : 'Every booking sorted by the city it starts in and the city it goes to. Tap a city to see its trips.'}</p>
                <div className="inline-flex mt-4 rounded-lg border border-gray-300 bg-white p-1">
                    {([['all', 'All trips', '/admin/trips-by-city'], ['upcoming', 'Upcoming trips', '/admin/upcoming-by-city']] as const).map(([v, label, href]) => (
                        <Link key={v} href={href}
                            className={`rounded-md px-4 py-1.5 text-sm font-semibold ${view === v ? 'bg-emerald-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {error && <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">Could not load bookings: {error}</div>}

            {/* ---------- Filters ---------- */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                    {presets.map((p) => (
                        <button key={p.label} type="button" onClick={() => applyPreset(p)}
                            className={`rounded-full px-3 py-1.5 text-sm font-medium border ${preset === p.label ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'}`}>
                            {p.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap items-end gap-3">
                    <label className="text-xs text-gray-500">From
                        <input type="date" value={from} onChange={(e) => { setFrom(e.target.value); setPreset(''); }} className="block mt-1 rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900" />
                    </label>
                    <label className="text-xs text-gray-500">To
                        <input type="date" value={to} onChange={(e) => { setTo(e.target.value); setPreset(''); }} className="block mt-1 rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900" />
                    </label>
                    {view === 'all' && <label className="text-xs text-gray-500">Status
                        <select value={statusKey} onChange={(e) => setStatusKey(e.target.value)} className="block mt-1 rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 bg-white">
                            {STATUS_FILTERS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                        </select>
                    </label>}
                    <p className="text-sm text-gray-600 ml-auto"><strong className="text-gray-900">{filtered.length}</strong> {view === 'upcoming' ? 'upcoming trips' : 'trips in this period'}</p>
                </div>
            </div>

            {/* ---------- City cards ---------- */}
            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Cities</h2>
                {cities.length === 0 ? (
                    <p className="text-sm text-gray-500">No trips in this period.</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {cities.map((c) => (
                            <button key={c.city} type="button" onClick={() => pickCity(c.city)}
                                className={`text-left rounded-xl border p-4 transition-colors ${selected === c.city ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600/30' : 'border-gray-200 bg-white hover:border-gray-400'}`}>
                                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900"><MapPin className="w-4 h-4 text-emerald-700 shrink-0" />{c.city}</div>
                                <div className="text-3xl font-bold text-gray-900 mt-1">{c.total}</div>
                                <div className="text-xs text-gray-500 mt-1">{c.from} from · {c.to} to</div>
                                {c.sar > 0 && <div className="text-xs text-gray-500 mt-0.5">SAR {money(c.sar)}</div>}
                                {view === 'upcoming' && c.next && <div className="text-xs font-medium text-emerald-700 mt-1">Next: {c.next}</div>}
                            </button>
                        ))}
                    </div>
                )}
                <p className="text-xs text-gray-400 mt-2">&quot;From&quot; = trips starting in the city, &quot;to&quot; = trips ending there. SAR totals count SAR bookings only. &quot;{OTHER}&quot; means the address did not name a city we recognise.</p>
            </section>

            {/* ---------- Routes ---------- */}
            {pairs.length > 0 && (
                <section className="rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">{selected ? `Routes for ${selected}` : 'All routes'}</h2>
                        {(selected || pair) && (
                            <button type="button" onClick={() => { setSelected(null); setPair(null); }} className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"><X className="w-4 h-4" />Clear</button>
                        )}
                    </div>
                    <ul className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                        {pairs.map((p) => (
                            <li key={p.key}>
                                <button type="button" onClick={() => setPair((cur) => (cur === p.key ? null : p.key))}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${pair === p.key ? 'bg-emerald-50' : ''}`}>
                                    <span className="font-medium text-gray-900 flex items-center gap-1.5 min-w-0 flex-1 flex-wrap">{p.fromCity}<ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />{p.toCity}</span>
                                    <span className="text-gray-500 whitespace-nowrap">{p.sar > 0 ? `SAR ${money(p.sar)}` : ''}</span>
                                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-semibold text-gray-800 whitespace-nowrap">{p.count}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* ---------- Trip list ---------- */}
            <section className="rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900 mr-auto">
                        {pair ? pair : selected ? `Trips for ${selected}` : 'All trips'} <span className="text-gray-500 font-normal">({list.length})</span>
                    </h2>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Customer, phone, address, driver" className="rounded-md border border-gray-300 pl-8 pr-3 py-1.5 text-sm text-gray-900 w-64 max-w-full" />
                    </div>
                </div>
                {list.length === 0 ? (
                    <p className="px-4 py-8 text-center text-sm text-gray-500">No trips match.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                                <tr>
                                    <th className="px-4 py-2 font-medium">Date</th>
                                    <th className="px-4 py-2 font-medium">Customer</th>
                                    <th className="px-4 py-2 font-medium">From → To</th>
                                    <th className="px-4 py-2 font-medium">Vehicle / driver</th>
                                    <th className="px-4 py-2 font-medium">Status</th>
                                    <th className="px-4 py-2 font-medium text-right">Price</th>
                                    <th className="px-4 py-2 font-medium" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {list.slice(0, 500).map((t) => (
                                    <tr key={t.id} className="align-top">
                                        <td className="px-4 py-2.5 whitespace-nowrap text-gray-900">{t.pickup_date || '-'}<div className="text-xs text-gray-500">{t.pickup_time?.slice(0, 5)}</div></td>
                                        <td className="px-4 py-2.5 text-gray-900">{t.customer_name || '-'}<div className="text-xs text-gray-500">{t.customer_phone}</div></td>
                                        <td className="px-4 py-2.5">
                                            <div className="font-medium text-gray-900">{t.fromCity} → {t.toCity}</div>
                                            <div className="text-xs text-gray-500 max-w-xs">{t.pickup_location} → {t.destination}</div>
                                        </td>
                                        <td className="px-4 py-2.5 text-gray-700">{t.vehicle_type || '-'}<div className="text-xs text-gray-500">{t.driver_name}</div></td>
                                        <td className="px-4 py-2.5"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLE[t.status] || 'bg-gray-100 text-gray-700'}`}>{t.status.replace('_', ' ')}</span></td>
                                        <td className="px-4 py-2.5 text-right whitespace-nowrap text-gray-900">{t.total_price ? `${t.currency || 'SAR'} ${money(Number(t.total_price))}` : '-'}</td>
                                        <td className="px-4 py-2.5 whitespace-nowrap">
                                            <button type="button" onClick={() => setDriverMsg(t)} className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-100"><Car className="w-3.5 h-3.5" />Driver</button>
                                            <Link href={`/admin/bookings/${t.id}/letterhead`} className="ml-2 text-emerald-700 hover:underline text-xs font-medium">Quotation</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {list.length > 500 && <p className="px-4 py-3 text-xs text-gray-500">Showing the latest 500. Narrow the dates to see the rest.</p>}
                    </div>
                )}
            </section>
        </div>
    );
}
