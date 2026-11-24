import { NextRequest, NextResponse } from 'next/server';
import { sendLogged } from '@/lib/email-log';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getAdminSession, isInternalRequest } from '@/lib/admin-auth';
import { renderEmail, para, card, rows, buttons, whatsappUrl } from '@/lib/email-layout';

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function escapeHtml(str: unknown): string {
    if (str === null || str === undefined || str === '') return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function formatValue(field: string, value: unknown, currency: string): string {
    if (value === null || value === undefined || value === '') return '—';
    if (field === 'Price') return `${currency} ${Number(value).toFixed(2)}`;
    if (field === 'Round Trip') return value ? 'Yes' : 'No';
    return String(value);
}

interface Change {
    field: string;
    oldValue: unknown;
    newValue: unknown;
}

export async function POST(request: NextRequest) {
    try {
        if (!isInternalRequest(request)) {
            const session = await getAdminSession(request);
            if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const ip = getClientIp(request);
        if (!checkRateLimit(`update-email:${ip}`, 10, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await request.json();
        const { bookingId, customerEmail, customerName, currency, changes } = body as {
            bookingId: string; customerEmail: string; customerName: string; currency?: string; changes: Change[];
        };

        if (!bookingId || !customerEmail || !Array.isArray(changes) || changes.length === 0) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const safeName = escapeHtml(customerName);
        const curr = currency || 'SAR';
        const refId = bookingId.slice(0, 8).toUpperCase();

        // Each changed field: the new value, with the previous one struck
        // through underneath (stacks cleanly on a phone).
        const changeRows = changes.map((c): [string, string] => [
            c.field,
            `${escapeHtml(formatValue(c.field, c.newValue, curr))}<br><span style="font-size:12px;font-weight:400;color:#9ca3af;text-decoration:line-through;">${escapeHtml(formatValue(c.field, c.oldValue, curr))}</span>`,
        ]);

        const subject = `✏️ Your Booking Has Been Updated - #${refId}`;
        const html = renderEmail({
            preheader: `Updated on booking #${refId}: ${changes.map(c => c.field).join(', ')}.`,
            title: 'Booking Updated',
            subtitle: `Booking #${refId}`,
            greeting: `Dear <strong>${safeName || 'Customer'}</strong>,`,
            blocks: [
                para(`We have updated the following detail${changes.length > 1 ? 's' : ''} on your booking <strong>#${refId}</strong>:`),
                card('What Changed', rows(changeRows)),
                para('New value is shown first; the previous value is crossed out below it.', { muted: true, size: 12 }),
                para('Questions about this change? Reply to this email or message us on WhatsApp.', { muted: true, size: 14 }),
                buttons([{ href: whatsappUrl(`Hello, about the update to my booking #${refId}.`), label: '💬 WhatsApp Us', tone: 'whatsapp' }]),
            ],
        });

        await sendLogged(bookingId, 'Update email', { to: customerEmail, subject, html }, `${changes.map(c => c.field).join(', ')} changed`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending update email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
