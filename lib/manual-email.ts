// Ready-to-send quote / invoice / receipt emails for when the owner sends
// them by hand from Gmail instead of through the site's mail provider.
// Each email is built once as structured content and rendered two ways:
//  - text: pre-filled into Gmail's compose window (Gmail URLs take plain text)
//  - html: copied to the clipboard as rich text for the designed version
import { formatTime12h } from './format-time';
import { hasStructuredReturnLeg, getReturnRoute } from './booking-validation';

export type ManualEmailKind = 'quote' | 'invoice' | 'receipt';

export interface ManualEmailBooking {
    id: string;
    customer_name: string;
    customer_email?: string | null;
    customer_phone?: string | null;
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

const BRAND = 'Taxi Service KSA';
const PHONE = '+966 57 580 6733';
const EMAIL = 'info@taxiserviceksa.com';
const SITE = 'www.taxiserviceksa.com';

const esc = (v: unknown) => String(v ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const amount = (curr: string, n: number) => `${curr} ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const longDate = (iso?: string | null) => {
    if (!iso) return '';
    const d = new Date(`${iso}T12:00:00Z`);
    return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
};
const shortRoute = (b: ManualEmailBooking) => {
    const city = (s: string) => s.split(',')[0].trim();
    return `${city(b.pickup_location)} to ${city(b.destination)}`;
};
const statusLabel = (s?: string | null) => ({ paid: 'Paid', partial: 'Partially paid', refunded: 'Refunded' }[s || ''] || 'Unpaid');

type Row = [label: string, value: string];
interface Section { title: string; rows: Row[] }
interface Content {
    subject: string;
    heading: string;
    subheading?: string;
    intro: string[];
    highlight?: { label: string; value: string; note?: string; tone: 'dark' | 'green' };
    sections: Section[];
    outro: string[];
    whatsappText?: string;
}

function customerSection(b: ManualEmailBooking, title: string): Section {
    const rows: Row[] = [['Name', b.customer_name?.trim() || '']];
    if (b.customer_email) rows.push(['Email', b.customer_email]);
    if (b.customer_phone) rows.push(['Phone', b.customer_phone]);
    return { title, rows };
}

function tripSection(b: ManualEmailBooking, title: string, refLabel: string, ref: string): Section {
    const rows: Row[] = [
        [refLabel, ref],
        ['Pickup', b.pickup_location],
        ['Drop-off', b.destination],
        ['Date & time', `${longDate(b.pickup_date)}, ${formatTime12h(b.pickup_time)} (Saudi time)`],
    ];
    if (hasStructuredReturnLeg(b)) {
        const r = getReturnRoute(b);
        rows.push(['Return trip', `${r.pickupLocation} to ${r.destination}`]);
        rows.push(['Return date & time', `${longDate(b.return_date)}, ${formatTime12h(b.return_time)}`]);
    }
    if (b.vehicle_type) rows.push(['Vehicle', `${b.vehicle_type} (private, with driver)`]);
    if (b.passengers) rows.push(['Passengers / luggage', `${b.passengers} ${b.passengers === 1 ? 'passenger' : 'passengers'}, ${b.luggage ?? 0} ${b.luggage === 1 ? 'bag' : 'bags'}`]);
    return { title, rows };
}

function content(kind: ManualEmailKind, b: ManualEmailBooking): Content {
    const ref = `#${b.id.slice(0, 8).toUpperCase()}`;
    const curr = b.currency || 'SAR';
    const total = Number(b.total_price || 0);
    const deposit = Number(b.deposit_amount || 0);
    const balance = total - deposit;
    const route = shortRoute(b);
    const name = b.customer_name?.trim() || 'Customer';

    if (kind === 'quote') {
        const price: Row[] = [['Total price', `${amount(curr, total)} per vehicle${hasStructuredReturnLeg(b) ? ', including the return trip' : ''}`], ['Included', 'Fuel, road tolls, parking and the driver']];
        if (deposit) price.push(['Advance to confirm', amount(curr, deposit)], ['Balance on the day', amount(curr, balance)]);
        return {
            subject: `Quotation ${ref}: ${route} | ${BRAND}`,
            heading: 'Your Quotation',
            intro: [`Dear ${name},`, `Thank you for contacting ${BRAND}. As requested, please find below our quotation for your private transfer from ${route}.`],
            highlight: { label: 'Total price', value: amount(curr, total), note: 'Fuel, tolls and parking included', tone: 'dark' },
            sections: [customerSection(b, 'Customer details'), tripSection(b, 'Trip details', 'Quotation ref', ref), { title: 'Price', rows: price }],
            outro: [
                'This quotation is valid for 48 hours and is subject to vehicle availability on your date.',
                `To confirm your booking, simply reply to this email or message us on WhatsApp at ${PHONE}. Once confirmed, we will share your driver's name and contact details before the pickup.`,
                'We look forward to serving you.',
            ],
            whatsappText: `Hello, I would like to confirm my booking ${ref}.`,
        };
    }

    if (kind === 'invoice') {
        const pay: Row[] = [['Total amount', amount(curr, total)]];
        if (deposit) pay.push(['Paid in advance', amount(curr, deposit)], ['Balance due', amount(curr, balance)]);
        pay.push(['Payment status', statusLabel(b.payment_status)], ['Payment method', b.payment_method || 'Cash to Driver']);
        return {
            subject: `Invoice ${ref}: ${route}, ${longDate(b.pickup_date)} | ${BRAND}`,
            heading: 'Invoice',
            intro: [`Dear ${name},`, `Thank you for booking with ${BRAND}. Please find attached the invoice for your transfer from ${route}. A summary is given below for your reference.`],
            highlight: { label: deposit && b.payment_status !== 'paid' ? 'Balance due' : 'Invoice total', value: amount(curr, deposit && b.payment_status !== 'paid' ? balance : total), tone: 'dark' },
            sections: [customerSection(b, 'Billed to'), tripSection(b, 'Booking details', 'Invoice ref', ref), { title: 'Payment', rows: pay }],
            outro: [
                'The PDF invoice is attached to this email. Please keep it for your records.',
                `If you have any questions about this invoice, please reply to this email or contact us on WhatsApp at ${PHONE}.`,
                'Thank you for choosing us.',
            ],
        };
    }

    // A partly paid booking gets a receipt for the advance, with the balance shown.
    const partial = b.payment_status === 'partial' && deposit > 0 && deposit < total;
    const received = partial ? deposit : total;
    const payRows: Row[] = [['Amount received', amount(curr, received)]];
    if (partial) payRows.push(['Booking total', amount(curr, total)], ['Balance remaining', amount(curr, balance)]);
    payRows.push(['Payment method', b.payment_method || 'Cash to Driver']);
    return {
        subject: `Payment Receipt ${ref}: ${route} | ${BRAND}`,
        heading: 'Payment Receipt',
        subheading: 'Payment received with thanks',
        intro: [`Dear ${name},`, `Thank you for your payment. This email confirms that we have received ${amount(curr, received)}${partial ? ' as an advance' : ''} for your transfer from ${route}. Your official receipt is attached.`],
        highlight: { label: 'Amount received', value: amount(curr, received), note: partial ? `Balance remaining: ${amount(curr, balance)}` : 'Payment confirmed', tone: 'green' },
        sections: [customerSection(b, 'Received from'), tripSection(b, 'Trip details', 'Receipt ref', ref), { title: 'Payment', rows: payRows }],
        outro: [
            'The PDF receipt is attached to this email. Please keep it for your records.',
            `If you need anything before or after your trip, simply reply to this email or message us on WhatsApp at ${PHONE}.`,
            `Thank you for travelling with ${BRAND}.`,
        ],
    };
}

const SIGNATURE_TEXT = `Kind regards,\n${BRAND}\nWhatsApp / phone: ${PHONE}\nEmail: ${EMAIL}\n${SITE}`;

function toText(c: Content): string {
    const sections = c.sections.map(s => `${s.title.toUpperCase()}\n${s.rows.map(([k, v]) => `${k}: ${v}`).join('\n')}`).join('\n\n');
    return [...c.intro, sections, ...c.outro, SIGNATURE_TEXT].join('\n\n');
}

function toHtml(c: Content): string {
    const p = (t: string) => `<p style="margin: 0 0 14px; font-size: 15px; color: #333;">${esc(t)}</p>`;
    const highlight = c.highlight ? (c.highlight.tone === 'green'
        ? `<div style="background-color: #f0fff4; border: 2px solid #22c55e; border-radius: 12px; padding: 18px; margin: 22px 0; text-align: center;">
            <p style="margin: 0 0 4px; font-size: 11px; color: #16a34a; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">${esc(c.highlight.label)}</p>
            <p style="margin: 0; font-size: 32px; font-weight: 900; color: #15803d;">${esc(c.highlight.value)}</p>
            ${c.highlight.note ? `<p style="margin: 6px 0 0; font-size: 12px; color: #16a34a; font-weight: bold;">✓ ${esc(c.highlight.note)}</p>` : ''}
        </div>`
        : `<div style="background-color: #000; padding: 18px; border-radius: 12px; margin: 22px 0; text-align: center;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #aaa; text-transform: uppercase; letter-spacing: 2px;">${esc(c.highlight.label)}</p>
            <p style="margin: 0; font-size: 32px; font-weight: 900; color: #C6FF00;">${esc(c.highlight.value)}</p>
            ${c.highlight.note ? `<p style="margin: 6px 0 0; font-size: 11px; color: #888;">${esc(c.highlight.note)}</p>` : ''}
        </div>`) : '';
    const sections = c.sections.map(s => `
        <div style="background-color: #f8f9fa; padding: 18px 20px; border-radius: 12px; margin: 0 0 18px; border: 1px solid #ebedf0;">
            <h3 style="margin: 0 0 10px; font-size: 15px; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 6px; display: inline-block;">${esc(s.title)}</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${s.rows.map(([k, v]) => `<tr><td style="padding: 5px 12px 5px 0; color: #666; vertical-align: top; width: 38%;">${esc(k)}</td><td style="padding: 5px 0; color: #111; font-weight: bold;">${esc(v)}</td></tr>`).join('')}
            </table>
        </div>`).join('');
    const wa = `https://wa.me/966575806733${c.whatsappText ? `?text=${encodeURIComponent(c.whatsappText)}` : ''}`;
    return `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    <div style="background-color: #000; padding: 24px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; color: #C6FF00; text-transform: uppercase; letter-spacing: 2px; font-size: 22px;">${esc(c.heading)}</h1>
        ${c.subheading ? `<p style="margin: 6px 0 0; color: #aaa; font-size: 13px;">${esc(c.subheading)}</p>` : ''}
    </div>
    <div style="padding: 28px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
        ${c.intro.map(p).join('')}
        ${highlight}
        ${sections}
        ${c.outro.map(p).join('')}
        <div style="text-align: center; margin: 24px 0;">
            <a href="${wa}" style="background-color: #25D366; color: white; padding: 12px 26px; text-decoration: none; font-weight: bold; border-radius: 30px; display: inline-block; font-size: 15px;">💬 WhatsApp ${PHONE}</a>
        </div>
        <p style="margin: 0; font-size: 15px; color: #333;">Kind regards,<br><strong>${BRAND}</strong></p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0 14px;">
        <p style="font-size: 12px; color: #999; text-align: center; margin: 0;">${BRAND} • Private Chauffeur &amp; Transfer Service, Saudi Arabia<br>${PHONE} • ${EMAIL} • ${SITE}</p>
    </div>
</div>`;
}

export function buildManualEmail(kind: ManualEmailKind, b: ManualEmailBooking): { subject: string; html: string; text: string } {
    const c = content(kind, b);
    return { subject: c.subject, html: toHtml(c), text: toText(c) };
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

/** Gmail compose window with To, Subject and the message already written. */
export const gmailComposeUrl = (to: string, subject: string, body = '') =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
