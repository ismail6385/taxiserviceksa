// Copy-and-paste versions of the quote / invoice / receipt emails, for when
// the owner sends them by hand from Gmail instead of through the site's mail
// provider. Same content and styling as the /api/send-*-email routes; the
// HTML is copied to the clipboard as rich text so it pastes formatted.
import { formatTime12h } from './format-time';
import { hasStructuredReturnLeg, getReturnRoute } from './booking-validation';

export type ManualEmailKind = 'quote' | 'invoice' | 'receipt';

export interface ManualEmailBooking {
    id: string;
    customer_name: string;
    customer_email?: string | null;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time?: string | null;
    vehicle_type?: string | null;
    passengers?: number | null;
    luggage?: number | null;
    total_price?: number | null;
    deposit_amount?: number | null;
    currency?: string | null;
    payment_status?: string | null;
    payment_method?: string | null;
    has_return_trip?: boolean | null;
    return_date?: string | null;
    return_time?: string | null;
    return_pickup_location?: string | null;
    return_destination?: string | null;
}

const esc = (v: unknown) => String(v ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const money = (n?: number | null) => Number(n || 0).toFixed(2);

const WRAP_OPEN = `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">`;
const header = (title: string, sub = '') => `
<div style="background-color: #000; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0; color: #C6FF00; text-transform: uppercase; letter-spacing: 2px;">${title}</h1>
    ${sub ? `<p style="margin: 8px 0 0; color: #aaa; font-size: 13px;">${sub}</p>` : ''}
</div>`;
const FOOTER = `
    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
    <p style="font-size: 12px; color: #999; text-align: center;">Taxi Service KSA • Premium Chauffeur &amp; Private Transport Service<br>info@taxiserviceksa.com • www.taxiserviceksa.com • +966 57 580 6733</p>`;
const whatsappButton = (label: string, text = '') =>
    `<a href="https://wa.me/966575806733${text ? `?text=${encodeURIComponent(text)}` : ''}" style="background-color: #25D366; color: white; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 30px; display: inline-block; font-size: 15px;">💬 ${label}</a>`;

function tripRows(b: ManualEmailBooking, refLabel: string, ref: string) {
    const ret = hasStructuredReturnLeg(b) ? getReturnRoute(b) : null;
    return [
        `<p style="margin: 10px 0;"><strong>${refLabel}:</strong> ${ref}</p>`,
        `<p style="margin: 5px 0;"><strong>Pickup:</strong> ${esc(b.pickup_location)}</p>`,
        `<p style="margin: 5px 0;"><strong>Destination:</strong> ${esc(b.destination)}</p>`,
        `<p style="margin: 5px 0;"><strong>Date/Time:</strong> ${esc(b.pickup_date)} at ${formatTime12h(b.pickup_time)}</p>`,
        ret ? `<p style="margin: 5px 0;"><strong>Return Route:</strong> ${esc(ret.pickupLocation)} → ${esc(ret.destination)}</p><p style="margin: 5px 0;"><strong>Return Date/Time:</strong> ${esc(b.return_date)} at ${formatTime12h(b.return_time)}</p>` : '',
        `<p style="margin: 5px 0;"><strong>Vehicle:</strong> ${esc(b.vehicle_type)}</p>`,
        b.passengers ? `<p style="margin: 5px 0;"><strong>Passengers / Bags:</strong> ${b.passengers} / ${b.luggage ?? 0}</p>` : '',
    ].join('\n');
}

function tripText(b: ManualEmailBooking, refLabel: string, ref: string) {
    const ret = hasStructuredReturnLeg(b) ? getReturnRoute(b) : null;
    return [
        `${refLabel}: ${ref}`,
        `Pickup: ${b.pickup_location}`,
        `Destination: ${b.destination}`,
        `Date/Time: ${b.pickup_date} at ${formatTime12h(b.pickup_time)}`,
        ret ? `Return: ${ret.pickupLocation} → ${ret.destination}, ${b.return_date} at ${formatTime12h(b.return_time)}` : '',
        `Vehicle: ${b.vehicle_type || ''}`,
        b.passengers ? `Passengers / Bags: ${b.passengers} / ${b.luggage ?? 0}` : '',
    ].filter(Boolean).join('\n');
}

export function buildManualEmail(kind: ManualEmailKind, b: ManualEmailBooking): { subject: string; html: string; text: string } {
    const ref = `#${b.id.slice(0, 8).toUpperCase()}`;
    const curr = b.currency || 'SAR';
    const total = money(b.total_price);
    const deposit = b.deposit_amount ? Number(b.deposit_amount) : 0;
    const balance = money(Number(b.total_price || 0) - deposit);
    const name = esc(b.customer_name);

    if (kind === 'quote') {
        const html = `${WRAP_OPEN}${header('Your Quote')}
<div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
    <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>
    <p>Thank you for your request. Here is your quote for your journey with <strong>Taxi Service KSA</strong>.</p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #ebedf0;">
        <h3 style="margin-top: 0; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 8px; display: inline-block;">Trip Details</h3>
        ${tripRows(b, 'Quote Ref', ref)}
    </div>
    <div style="background-color: #000; color: #fff; padding: 20px 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
        <p style="margin: 0 0 5px; font-size: 13px; color: #aaa; text-transform: uppercase; letter-spacing: 2px;">Total Quote Price</p>
        <p style="margin: 0; font-size: 36px; font-weight: 900; color: #C6FF00;">${curr} ${total}</p>
        <p style="margin: 8px 0 0; font-size: 11px; color: #777;">Includes fuel, toll, and parking fees</p>
        ${deposit ? `<p style="margin: 12px 0 0; font-size: 12px; color: #ccc;">Deposit: <strong style="color:#fff;">${curr} ${money(deposit)}</strong> · Balance due: <strong style="color:#fff;">${curr} ${balance}</strong></p>` : ''}
    </div>
    <p style="font-size: 14px; color: #555;">This quote is valid for <strong>48 hours</strong>. To confirm, simply reply to this email or message us on WhatsApp.</p>
    <div style="text-align: center; margin: 30px 0;">${whatsappButton('Confirm on WhatsApp', `Hello, I want to confirm my booking ${ref}.`)}</div>
    ${FOOTER}
</div></div>`;
        const text = `Dear ${b.customer_name},\n\nThank you for your request. Here is your quote for your journey with Taxi Service KSA.\n\n${tripText(b, 'Quote Ref', ref)}\n\nTotal price: ${curr} ${total} (includes fuel, toll and parking)${deposit ? `\nDeposit: ${curr} ${money(deposit)} · Balance due: ${curr} ${balance}` : ''}\n\nThis quote is valid for 48 hours. To confirm, reply to this email or WhatsApp us on +966 57 580 6733.\n\nTaxi Service KSA`;
        return { subject: `Your Quote ${ref} - Taxi Service KSA`, html, text };
    }

    if (kind === 'invoice') {
        const html = `${WRAP_OPEN}${header('Your Invoice')}
<div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
    <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>
    <p>Please find your invoice attached for your journey with <strong>Taxi Service KSA</strong>.</p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #ebedf0;">
        <h3 style="margin-top: 0; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 8px; display: inline-block;">Booking Summary</h3>
        ${tripRows(b, 'Invoice Ref', ref)}
        <p style="margin: 5px 0;"><strong>Amount:</strong> ${curr} ${total}</p>
        ${deposit ? `<p style="margin: 5px 0;"><strong>Deposit Paid:</strong> ${curr} ${money(deposit)}</p><p style="margin: 5px 0;"><strong>Balance Due:</strong> ${curr} ${balance}</p>` : ''}
        <p style="margin: 5px 0;"><strong>Payment Status:</strong> ${esc((b.payment_status || 'unpaid').replace(/^./, c => c.toUpperCase()))}</p>
        <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${esc(b.payment_method || 'Cash to Driver')}</p>
    </div>
    <p style="font-size: 14px; color: #666;">The PDF invoice is attached to this email. Please save it for your records.</p>
    <div style="text-align: center; margin: 30px 0;">${whatsappButton('Contact Us on WhatsApp')}</div>
    ${FOOTER}
</div></div>`;
        const text = `Dear ${b.customer_name},\n\nPlease find your invoice attached for your journey with Taxi Service KSA.\n\n${tripText(b, 'Invoice Ref', ref)}\nAmount: ${curr} ${total}${deposit ? `\nDeposit paid: ${curr} ${money(deposit)}\nBalance due: ${curr} ${balance}` : ''}\nPayment status: ${b.payment_status || 'unpaid'}\nPayment method: ${b.payment_method || 'Cash to Driver'}\n\nThe PDF invoice is attached. Please save it for your records.\n\nTaxi Service KSA · +966 57 580 6733`;
        return { subject: `Your Invoice ${ref} - Taxi Service KSA`, html, text };
    }

    const html = `${WRAP_OPEN}${header('Payment Receipt', 'Payment Successfully Received')}
<div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
    <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>
    <p>Thank you for your payment. Please find your payment receipt attached. This confirms that your trip with <strong>Taxi Service KSA</strong> is paid.</p>
    <div style="background-color: #f0fff4; border: 2px solid #22c55e; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center;">
        <p style="margin: 0 0 4px; font-size: 11px; color: #16a34a; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Amount Paid</p>
        <p style="margin: 0; font-size: 36px; font-weight: 900; color: #15803d;">${curr} ${total}</p>
        <p style="margin: 8px 0 0; font-size: 12px; color: #16a34a; font-weight: bold;">✓ PAYMENT CONFIRMED</p>
    </div>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #ebedf0;">
        <h3 style="margin-top: 0; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 8px; display: inline-block;">Trip Details</h3>
        ${tripRows(b, 'Receipt Ref', ref)}
        <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${esc(b.payment_method || 'Cash to Driver')}</p>
    </div>
    <p style="font-size: 14px; color: #666;">The PDF receipt is attached. Please save it for your records.</p>
    <div style="text-align: center; margin: 30px 0;">${whatsappButton('Contact Us on WhatsApp')}</div>
    ${FOOTER}
</div></div>`;
    const text = `Dear ${b.customer_name},\n\nThank you for your payment. Please find your payment receipt attached.\n\nAmount paid: ${curr} ${total} — PAYMENT CONFIRMED\n\n${tripText(b, 'Receipt Ref', ref)}\nPayment method: ${b.payment_method || 'Cash to Driver'}\n\nTaxi Service KSA · +966 57 580 6733`;
    return { subject: `Payment Receipt ${ref} - Taxi Service KSA`, html, text };
}

/** Copies the email body as rich text (falls back to plain text). Returns true on success. */
export async function copyRichEmail(html: string, text: string): Promise<boolean> {
    try {
        if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
            await navigator.clipboard.write([new ClipboardItem({
                'text/html': new Blob([html], { type: 'text/html' }),
                'text/plain': new Blob([text], { type: 'text/plain' }),
            })]);
            return true;
        }
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
    }
}

/** Gmail compose window with To and Subject already filled in. */
export const gmailComposeUrl = (to: string, subject: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}`;
