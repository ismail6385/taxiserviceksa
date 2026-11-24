import { sendMail } from './mail-server';
import { supabaseAdmin } from './supabase-admin';

// Every email sent about a booking is recorded on that booking (internal_notes,
// lines starting with 📧 - shown in Admin > Booking > Email Activity and on the
// Notifications page), whether it was sent or it FAILED, with the recipient:
//   📧 [24 Nov, 14:05] ✅ Quote sent to ahmed@x.com — SAR 500
//   📧 [24 Nov, 14:06] ❌ Invoice FAILED to ahmed@x.com — Brevo 401: Key not found

type MailOptions = Parameters<typeof sendMail>[0];

const ksaStamp = () =>
    new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });

export async function appendBookingLog(bookingId: string | null | undefined, line: string) {
    if (!bookingId) return;
    try {
        const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
        const existing = (data?.internal_notes as string) || '';
        await supabaseAdmin.from('bookings').update({ internal_notes: existing ? `${existing}\n${line}` : line }).eq('id', bookingId);
    } catch (e) {
        console.error('Booking email log failed:', e);
    }
}

const recipients = (m: MailOptions) => [m.to, ...(m.cc || [])].filter(Boolean).join(', ');
const reasonOf = (e: unknown) => String((e as { message?: string })?.message || e || 'unknown error').replace(/\s+/g, ' ').slice(0, 160);

/**
 * Send an email and record the result on the booking. Re-throws on failure so
 * the caller can still report the error to the admin.
 * label: what the email is ("Quote", "Invoice", "Booking confirmation"...).
 * detail: short extra info for the log (price, status...).
 */
export async function sendLogged(bookingId: string | null | undefined, label: string, mail: MailOptions, detail?: string) {
    const to = recipients(mail);
    try {
        const info = await sendMail(mail);
        await appendBookingLog(bookingId, `📧 [${ksaStamp()}] ✅ ${label} sent to ${to}${detail ? ` — ${detail}` : ''}`);
        return info;
    } catch (e) {
        await appendBookingLog(bookingId, `📧 [${ksaStamp()}] ❌ ${label} FAILED to ${to || '(no email address)'} — ${reasonOf(e)}`);
        throw e;
    }
}
