import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getAdminSession } from '@/lib/admin-auth';
import { renderEmail, para, esc } from '@/lib/email-layout';

// Sends a free-text email to a client from the admin panel. Unlike the
// invoice/receipt/quote routes, this has no fixed template — the admin
// writes the subject and message directly, wrapped in the same branded
// layout used elsewhere so it still reads as an official message.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

export async function POST(request: NextRequest) {
    try {
        const session = await getAdminSession(request);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const body = await request.json();
        const { to, cc, subject, message, bookingId, customerName, attachment } = body;

        if (!to || !subject || !message) {
            return NextResponse.json({ error: 'To, subject, and message are required' }, { status: 400 });
        }

        const ccList: string[] = Array.isArray(cc)
            ? cc.filter((e: string) => e && e.includes('@'))
            : [];

        const greetingName = customerName ? String(customerName).split(' ')[0] : null;
        // Admin-typed message: escape it, keep its paragraphs and line breaks.
        const paragraphs = String(message)
            .split(/\n{2,}/)
            .map((p: string) => para(esc(p).replace(/\n/g, '<br>')))
            .join('');

        const html = renderEmail({
            preheader: String(message).replace(/\s+/g, ' ').slice(0, 110),
            title: String(subject),
            greeting: greetingName ? `Dear <strong>${esc(greetingName)}</strong>,` : undefined,
            blocks: [paragraphs],
            signoff: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 6px;"><tr><td>
<img src="https://taxiserviceksa.com/ismail-signature.png" alt="Ismail" width="120" style="height:36px;width:auto;display:block;border:0;" />
<p style="margin:4px 0 0;font-size:14px;font-weight:700;color:#0f172a;">Ismail</p>
<p style="margin:0;font-size:12px;color:#6b7280;">Director, Taxi Service KSA</p>
</td></tr></table>`,
        });

        await sendMail({
            to,
            cc: ccList.length ? ccList : undefined,
            subject,
            html,
            replyTo: 'info@taxiserviceksa.com',
            attachments: attachment?.filename && attachment?.content
                ? [{ filename: attachment.filename, content: attachment.content }]
                : undefined,
        });

        if (bookingId) {
            const logTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
            await appendEmailLog(bookingId, `[${logTime}] Email sent to ${to} — Subject: "${subject}"`).catch(() => {});
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Send Client Email Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
