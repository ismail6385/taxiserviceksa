import { formatTime12h } from './format-time';
import { readExtras, extrasTotal } from './extra-charges';

// The WhatsApp message the office sends a driver for one booking. Kept in one
// place so the bookings page and Trips by City send exactly the same text.
// The fare the customer pays is never included; only what the driver must
// collect (cash bookings) and, if the office chooses, the driver's own pay.

export interface DriverMessageBooking {
    id: string;
    pickup_location?: string | null;
    destination?: string | null;
    pickup_date?: string | null;
    pickup_time?: string | null;
    customer_name?: string | null;
    customer_phone?: string | null;
    passengers?: number | null;
    luggage?: number | null;
    child_seats?: number | null;
    vehicle_type?: string | null;
    actual_vehicle?: string | null;
    flight_number?: string | null;
    special_requests?: string | null;
    trip_type?: string | null;
    duration_hours?: number | null;
    has_return_trip?: boolean | null;
    return_date?: string | null;
    return_time?: string | null;
    return_pickup_location?: string | null;
    return_destination?: string | null;
    itinerary_legs?: { date?: string; time?: string; pickup?: string; dropoff?: string }[] | null;
    additional_stops?: { time?: string | null; location?: string }[] | null;
    total_price?: number | null;
    deposit_amount?: number | null;
    currency?: string | null;
    payment_method?: string | null;
    payment_status?: string | null;
    vat_added?: boolean | null;
    extra_charges?: unknown;
    driver_cost?: number | null;
    driver_phone?: string | null;
    booking_type?: string | null;
    recipient_name?: string | null;
    recipient_phone?: string | null;
    item_type?: string | null;
    item_count?: number | null;
    item_size_weight?: string | null;
}

export interface DriverMessageOptions {
    customerPhone: boolean;
    collect: boolean;
    driverPay: boolean;
    mapLinks: boolean;
}

const mapLink = (place?: string | null) => (place ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}` : '');

export function prettyDate(iso?: string | null): string {
    if (!iso) return '—';
    const d = new Date(`${iso}T12:00:00Z`);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function waNumber(phone?: string | null): string {
    let p = (phone || '').replace(/[^\d]/g, '');
    if (p.startsWith('00')) p = p.slice(2);
    if (p.length === 10 && p.startsWith('05')) p = `966${p.slice(1)}`;
    else if (p.length === 9 && p.startsWith('5')) p = `966${p}`;
    return p;
}

/** Amount the driver collects in cash, or null when the customer pays the office. */
export function cashToCollect(b: DriverMessageBooking): number | null {
    if ((b.payment_method || 'Cash to Driver') !== 'Cash to Driver') return null;
    if (b.payment_status === 'paid') return null;
    const base = Number(b.total_price || 0);
    if (!base) return null;
    const withVat = b.vat_added ? base * 1.15 : base;
    const due = withVat + extrasTotal(readExtras(b.extra_charges)) - Number(b.deposit_amount || 0);
    return due > 0 ? Math.round(due) : null;
}

export function defaultDriverOptions(b: DriverMessageBooking): DriverMessageOptions {
    return { customerPhone: true, collect: cashToCollect(b) !== null, driverPay: false, mapLinks: true };
}

export function buildDriverMessage(b: DriverMessageBooking, o: DriverMessageOptions): string {
    const delivery = b.booking_type === 'delivery';
    const lines: string[] = [];
    const add = (s = '') => lines.push(s);

    add(delivery ? '*NEW DELIVERY – Taxi Service KSA*' : '*NEW TRIP – Taxi Service KSA*');
    add(`*Ref:* #${b.id.slice(0, 8).toUpperCase()}`);
    add();
    add(`📅 *Date:* ${prettyDate(b.pickup_date)}`);
    add(`⏰ *Time:* ${formatTime12h(b.pickup_time)}`);
    if (b.flight_number) add(`✈️ *Flight:* ${b.flight_number}`);
    if (b.trip_type === 'hourly') add(`⏱ *Hourly hire:* ${b.duration_hours || '?'} hours`);
    add();
    add(`📍 *Pickup:* ${b.pickup_location || '—'}`);
    if (o.mapLinks && b.pickup_location) add(mapLink(b.pickup_location));
    const stops = (b.additional_stops || []).filter((s) => s?.location);
    stops.forEach((s, i) => add(`➕ *Stop ${i + 1}:* ${s.location}${s.time ? ` (${formatTime12h(s.time)})` : ''}`));
    if (b.trip_type !== 'hourly' || b.destination) {
        add(`🏁 *Drop-off:* ${b.destination || '—'}`);
        if (o.mapLinks && b.destination) add(mapLink(b.destination));
    }

    const legs = (b.itinerary_legs || []).filter((l) => l?.pickup || l?.dropoff);
    if (legs.length) {
        add();
        add('*More trips in this booking:*');
        legs.forEach((l, i) => add(`${i + 2}. ${prettyDate(l.date)} ${l.time ? formatTime12h(l.time) : ''} – ${l.pickup || '?'} → ${l.dropoff || '?'}`));
    }
    if (b.has_return_trip && b.return_date) {
        add();
        add(`🔄 *Return:* ${prettyDate(b.return_date)}${b.return_time ? ` at ${formatTime12h(b.return_time)}` : ''}`);
        add(`   ${b.return_pickup_location || b.destination || '?'} → ${b.return_destination || b.pickup_location || '?'}`);
    } else if (b.has_return_trip) {
        add();
        add('🔄 *Return trip included* – time to confirm');
    }

    add();
    if (delivery) {
        add(`📦 *Item:* ${b.item_type || 'Item'} × ${b.item_count || 1}${b.item_size_weight ? ` (${b.item_size_weight})` : ''}`);
        add(`👤 *Recipient:* ${b.recipient_name || '—'}${b.recipient_phone ? ` – ${b.recipient_phone}` : ''}`);
    } else {
        add(`👥 *Passengers:* ${b.passengers ?? '—'}   🧳 *Bags:* ${b.luggage ?? '—'}`);
        if (b.child_seats) add(`👶 *Child seats:* ${b.child_seats}`);
    }
    add(`🚗 *Vehicle:* ${b.actual_vehicle || b.vehicle_type || '—'}`);
    add();
    add(`👤 *${delivery ? 'Sender' : 'Customer'}:* ${b.customer_name || '—'}`);
    if (o.customerPhone && b.customer_phone) {
        add(`📞 *Phone:* ${b.customer_phone}`);
        const wa = waNumber(b.customer_phone);
        if (wa) add(`https://wa.me/${wa}`);
    }

    const cur = b.currency || 'SAR';
    const collect = cashToCollect(b);
    if (o.collect && collect !== null) {
        add();
        add(`💵 *Collect from customer:* ${cur} ${collect.toLocaleString('en-US')} (cash)`);
    } else if (o.collect && (b.payment_method || 'Cash to Driver') !== 'Cash to Driver') {
        add();
        add('💳 *Paid to office – do not collect money from the customer.*');
    }
    if (o.driverPay && b.driver_cost) add(`💰 *Your payment:* ${cur} ${Number(b.driver_cost).toLocaleString('en-US')}`);

    if (b.special_requests?.trim()) {
        add();
        add(`📝 *Notes:* ${b.special_requests.trim()}`);
    }
    add();
    add('Please reply OK to confirm you have this trip. ✅');
    return lines.join('\n');
}

/** Copy text, with a fallback for browsers that block the Clipboard API. */
export async function copyText(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }
}
