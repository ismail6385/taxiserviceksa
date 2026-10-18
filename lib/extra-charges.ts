import { supabase } from './supabase';

// Extra charges added on top of the fare (border crossing fee, tolls,
// waiting...). Stored on the booking (extra_charges jsonb, see
// add_booking_extra_charges.sql) so the quotation, invoice and receipt all
// show the same lines.
export interface ExtraCharge {
    label: string;
    amount: number;
}

export function readExtras(value: unknown): ExtraCharge[] {
    if (!Array.isArray(value)) return [];
    return value
        .map(v => ({ label: String(v?.label ?? '').trim(), amount: Number(v?.amount) || 0 }))
        .filter(v => v.label && v.amount > 0);
}

export const extrasTotal = (extras: ExtraCharge[]) => extras.reduce((sum, e) => sum + e.amount, 0);

export async function saveExtras(bookingId: string, extras: ExtraCharge[], transferPrice?: number | null): Promise<string | null> {
    const payload: Record<string, unknown> = { extra_charges: extras.length ? extras : null };
    if (transferPrice !== undefined) payload.transfer_price = transferPrice && transferPrice > 0 ? transferPrice : null;
    const { error } = await supabase.from('bookings').update(payload).eq('id', bookingId);
    if (!error) return null;
    if (error.code === '42703' || error.code === 'PGRST204') {
        return 'Not saved: run add_booking_extra_charges.sql in the Supabase SQL Editor once. The lines still show on this document.';
    }
    return `Not saved: ${error.message}`;
}
