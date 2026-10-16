import { supabase } from './supabase';

// Quotation / invoice / receipt pages are shared by the admin
// (/admin/bookings/[id]/...) and a driver's private trip link
// (/my-trips/[slug]/[token]/[id]/...). In driver mode the booking is loaded
// through the token-checked API instead of the admin's Supabase session.
export type DriverDoc = { slug: string; token: string } | null;

export function driverDocFromParams(params: Record<string, string | string[]> | null): DriverDoc {
    const slug = params?.slug, token = params?.token;
    return typeof slug === 'string' && typeof token === 'string' ? { slug, token } : null;
}

export async function loadDocBooking<T>(id: string, driver: DriverDoc, opts: { invoice?: boolean } = {}): Promise<T> {
    if (driver) {
        const q = new URLSearchParams({ slug: driver.slug, token: driver.token, id, ...(opts.invoice ? { invoice: '1' } : {}) });
        const res = await fetch(`/api/driver-trips/booking/?${q}`);
        const j = await res.json().catch(() => ({}));
        if (!res.ok || !j.booking) throw new Error(j.error || 'Could not load this trip');
        return j.booking as T;
    }
    const { data, error } = await supabase.from('bookings').select('*').eq('id', id).single();
    if (error) throw error;
    return data as T;
}
