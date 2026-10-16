import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, MapPin, Users, Briefcase, Plane, Phone, Car, RotateCcw, StickyNote, FileText } from 'lucide-react';

import { supabaseAdmin } from '@/lib/supabase-admin';
import { findTeamDriver } from '@/lib/team-drivers';
import { isValidDriverLinkToken } from '@/lib/driver-links';
import { profitSplit, isMissingCostColumn } from '@/lib/profit-split';
import DriverCostForm from '@/components/DriverCostForm';

// Private trip sheet for one driver. Only reachable through the link the
// owner shares with that driver (see /admin/commissions). Shows the trips,
// and per trip the fare, the cost the driver enters, the profit and the
// driver's 50% share of it.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const metadata: Metadata = {
    title: 'My Trips',
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

interface Trip {
    id: string;
    customer_name: string;
    customer_phone: string | null;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string | null;
    vehicle_type: string | null;
    actual_vehicle: string | null;
    passengers: number | null;
    luggage: number | null;
    child_seats: number | null;
    flight_number: string | null;
    special_requests: string | null;
    status: string;
    trip_type: string | null;
    duration_hours: number | null;
    has_return_trip: boolean | null;
    return_date: string | null;
    return_time: string | null;
    return_pickup_location: string | null;
    return_destination: string | null;
    booking_type: string | null;
    recipient_name: string | null;
    recipient_phone: string | null;
    item_description: string | null;
    total_price: number | null;
    currency: string | null;
    driver_cost?: number | null;
}

const FIELDS = 'id,total_price,currency,customer_name,customer_phone,pickup_location,destination,pickup_date,pickup_time,vehicle_type,actual_vehicle,passengers,luggage,child_seats,flight_number,special_requests,status,trip_type,duration_hours,has_return_trip,return_date,return_time,return_pickup_location,return_destination,booking_type,recipient_name,recipient_phone,item_description';

const STATUS: Record<string, string> = {
    confirmed: 'bg-emerald-100 text-emerald-800',
    in_progress: 'bg-violet-100 text-violet-800',
    completed: 'bg-sky-100 text-sky-800',
    pending: 'bg-amber-100 text-amber-800',
    quote_sent: 'bg-blue-100 text-blue-800',
};

const riyadhToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Riyadh' });
const shiftDays = (iso: string, days: number) => {
    const d = new Date(`${iso}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
};
const fmtDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const fmtTime = (t: string | null) => {
    if (!t) return '';
    const [h, m] = t.split(':').map(Number);
    if (Number.isNaN(h)) return t;
    return `${((h + 11) % 12) + 1}:${String(m || 0).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
};
const digits = (p: string) => p.replace(/[^\d]/g, '');

const money = (curr: string, n: number) => `${curr} ${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

function TripCard({ t, slug, token, costsEnabled }: { t: Trip; slug: string; token: string; costsEnabled: boolean }) {
    const delivery = t.booking_type === 'delivery';
    const contactName = delivery ? t.recipient_name || t.customer_name : t.customer_name;
    const contactPhone = delivery ? t.recipient_phone || t.customer_phone : t.customer_phone;
    return (
        <article className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="flex items-center gap-2 font-bold text-gray-900">
                    <CalendarDays className="w-4 h-4 text-gray-500" />{fmtDate(t.pickup_date)}
                    {t.pickup_time && <span className="flex items-center gap-1 text-gray-700"><Clock className="w-4 h-4 text-gray-500" />{fmtTime(t.pickup_time)}</span>}
                </p>
                <span className={`text-[11px] font-bold uppercase rounded-full px-2.5 py-1 ${STATUS[t.status] || 'bg-gray-100 text-gray-700'}`}>{t.status.replace('_', ' ')}</span>
            </div>

            <div className="space-y-1.5 text-sm">
                <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" /><span><span className="text-gray-500">From: </span><span className="font-semibold text-gray-900">{t.pickup_location}</span></span></p>
                {t.trip_type === 'hourly' ? (
                    <p className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" /><span className="font-semibold text-gray-900">Hourly hire · {t.duration_hours || '?'} hours</span></p>
                ) : (
                    <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" /><span><span className="text-gray-500">To: </span><span className="font-semibold text-gray-900">{t.destination}</span></span></p>
                )}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-700">
                {(t.actual_vehicle || t.vehicle_type) && <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-gray-500" />{t.actual_vehicle || t.vehicle_type}</span>}
                {!delivery && t.passengers != null && <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gray-500" />{t.passengers} passengers</span>}
                {!delivery && t.luggage != null && <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-gray-500" />{t.luggage} bags</span>}
                {!!t.child_seats && <span>{t.child_seats} child seat{t.child_seats > 1 ? 's' : ''}</span>}
                {t.flight_number && <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-gray-500" />Flight {t.flight_number}</span>}
                {delivery && t.item_description && <span>Delivery: {t.item_description}</span>}
            </div>

            {t.has_return_trip && (t.return_date || t.return_pickup_location) && (
                <p className="flex gap-2 text-sm bg-blue-50 rounded-xl px-3 py-2 text-blue-900">
                    <RotateCcw className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Return: {t.return_date ? fmtDate(t.return_date) : 'date to confirm'}{t.return_time ? `, ${fmtTime(t.return_time)}` : ''}{t.return_pickup_location ? ` · ${t.return_pickup_location} → ${t.return_destination || ''}` : ''}</span>
                </p>
            )}

            {t.special_requests && (
                <p className="flex gap-2 text-sm bg-amber-50 rounded-xl px-3 py-2 text-amber-900"><StickyNote className="w-4 h-4 mt-0.5 shrink-0" />{t.special_requests}</p>
            )}

            {t.total_price ? (() => {
                const curr = t.currency || 'SAR';
                const split = profitSplit(t.total_price, t.driver_cost ?? null);
                return (
                    <div className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-2.5 space-y-2">
                        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                            <span><span className="text-gray-500">Fare: </span><b>{money(curr, t.total_price)}</b></span>
                            {split && <span><span className="text-gray-500">Profit: </span><b className={split.profit < 0 ? 'text-red-600' : ''}>{money(curr, split.profit)}</b></span>}
                            {split && <span><span className="text-gray-500">Your share (50%): </span><b className="text-emerald-700">{money(curr, split.driverShare)}</b></span>}
                        </div>
                        {costsEnabled
                            ? <DriverCostForm slug={slug} token={token} bookingId={t.id} initialCost={t.driver_cost ?? null} currency={curr} />
                            : <p className="text-xs text-gray-500">Cost entry will be available soon.</p>}
                    </div>
                );
            })() : null}

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
                <p className="text-sm"><span className="text-gray-500">{delivery ? 'Recipient' : 'Customer'}: </span><span className="font-semibold text-gray-900">{contactName}</span></p>
                {contactPhone && (
                    <div className="flex gap-2">
                        <a href={`tel:${contactPhone}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-800"><Phone className="w-4 h-4" />Call</a>
                        <a href={`https://wa.me/${digits(contactPhone)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">WhatsApp</a>
                    </div>
                )}
            </div>
            {/* Customer documents the driver can download and share */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Quotation', path: 'quote' },
                    { label: 'Invoice', path: 'invoice' },
                    { label: 'Receipt', path: 'receipt' },
                ].map(d => (
                    <a key={d.path} href={`/my-trips/${slug}/${token}/${t.id}/${d.path}/`} className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2 py-2.5 text-sm font-semibold text-gray-800 hover:border-gray-500">
                        <FileText className="w-4 h-4" />{d.label}
                    </a>
                ))}
            </div>
            <p className="text-[11px] font-mono text-gray-400">#{t.id.slice(0, 8).toUpperCase()}</p>
        </article>
    );
}

export default async function DriverTripsPage({ params }: { params: { slug: string; token: string } }) {
    const driver = findTeamDriver(params.slug);
    if (!driver || !isValidDriverLinkToken(driver.slug, params.token)) notFound();

    const today = riyadhToday();
    const query = (fields: string) => supabaseAdmin
        .from('bookings')
        .select(fields)
        .is('deleted_at', null)
        .ilike('driver_name', driver.name)
        .neq('status', 'cancelled')
        .gte('pickup_date', shiftDays(today, -60))
        .order('pickup_date', { ascending: true })
        .order('pickup_time', { ascending: true });
    let costsEnabled = true;
    let { data, error } = await query(`${FIELDS},driver_cost`);
    if (isMissingCostColumn(error)) {
        // driver_cost not added to the database yet: show trips without it.
        costsEnabled = false;
        ({ data, error } = await query(FIELDS));
    }

    const trips = (data as unknown as Trip[] | null) || [];
    const earned = trips.reduce((sum, t) => sum + (profitSplit(t.total_price, t.driver_cost ?? null)?.driverShare || 0), 0);
    const missingCost = trips.filter(t => t.total_price && (t.driver_cost === null || t.driver_cost === undefined) && t.pickup_date <= today).length;
    const upcoming = trips.filter(t => t.pickup_date >= today && t.status !== 'completed');
    const recent = trips.filter(t => !upcoming.includes(t)).reverse();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
                <header className="flex items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Taxi Service KSA · Driver</p>
                        <h1 className="text-2xl font-extrabold text-gray-900">{driver.name}&apos;s trips</h1>
                    </div>
                    <p className="text-xs text-gray-500 text-right">Updated<br />{new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}</p>
                </header>

                {costsEnabled && trips.some(t => t.total_price) && (
                    <div className="rounded-2xl bg-emerald-600 text-white px-4 py-3">
                        <p className="text-xs uppercase tracking-wider text-emerald-100">Your share, last 60 days</p>
                        <p className="text-2xl font-black">SAR {earned.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                        {missingCost > 0 && <p className="text-xs text-emerald-100 mt-0.5">{missingCost} past trip{missingCost === 1 ? '' : 's'} still need the trip cost.</p>}
                    </div>
                )}

                {error && <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">Could not load trips right now. Please refresh in a minute.</p>}

                <section className="space-y-3">
                    <h2 className="font-bold text-gray-900">Upcoming ({upcoming.length})</h2>
                    {upcoming.length ? upcoming.map(t => <TripCard key={t.id} t={t} slug={driver.slug} token={params.token} costsEnabled={costsEnabled} />) : (
                        <p className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-8 text-center text-sm text-gray-500">No upcoming trips assigned to you yet.</p>
                    )}
                </section>

                {recent.length > 0 && (
                    <section className="space-y-3">
                        <h2 className="font-bold text-gray-500">Last 60 days ({recent.length})</h2>
                        <div className="space-y-3">{recent.map(t => <TripCard key={t.id} t={t} slug={driver.slug} token={params.token} costsEnabled={costsEnabled} />)}</div>
                    </section>
                )}

                <p className="text-xs text-center text-gray-400 pb-6">This page is private to you. Please do not share the link.</p>
            </div>
        </div>
    );
}
