import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { getAdminSession } from '@/lib/admin-auth';
import { renderEmail, para, esc } from '@/lib/email-layout';

// Sends one outreach email to one B2B lead (Umrah/Hajj travel companies etc).
// Called once per recipient from the client-side campaign sender in
// app/(main)/admin/b2b-leads/page.tsx — deliberately not a server-side loop,
// so a large campaign never risks hitting the serverless function timeout.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const session = await getAdminSession(request);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const body = await request.json();
        const { to, cc, companyName, subject, message, attachment } = body;

        if (!to || !subject || !message) {
            return NextResponse.json({ error: 'To, subject, and message are required' }, { status: 400 });
        }

        const ccList: string[] = Array.isArray(cc)
            ? cc.filter((e: string) => e && e.includes('@'))
            : [];

        const paragraphs = String(message)
            .split(/\n{2,}/)
            .map((p: string) => para(esc(p).replace(/\n/g, '<br>')))
            .join('');

        const sig = (img: string, name: string, role: string) => `<td valign="top" style="padding:0 24px 8px 0;">
<img src="https://taxiserviceksa.com/${img}" alt="${name}" width="110" style="height:34px;width:auto;display:block;border:0;" />
<p style="margin:4px 0 0;font-size:14px;font-weight:700;color:#0f172a;">${name}</p>
<p style="margin:0;font-size:12px;color:#6b7280;">${role}</p></td>`;

        const html = renderEmail({
            preheader: String(message).replace(/\s+/g, ' ').slice(0, 110),
            title: String(subject),
            subtitle: 'Ground transport partner in Saudi Arabia',
            greeting: companyName ? `Dear <strong>${esc(companyName)}</strong> team,` : undefined,
            blocks: [paragraphs],
            signoff: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 8px;"><tr>${sig('ismail-signature.png', 'Ismail', 'Director')}${sig('zumer-signature.png', 'Zumer', 'Co-Founder')}</tr></table>`,
            footerNote: "If you'd rather not receive future updates from us, just reply and let us know.",
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

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Send B2B Email Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
