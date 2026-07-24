import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { getAdminSession } from '@/lib/admin-auth';

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
        const { to, companyName, subject, message } = body;

        if (!to || !subject || !message) {
            return NextResponse.json({ error: 'To, subject, and message are required' }, { status: 400 });
        }

        const paragraphs = String(message)
            .split(/\n{2,}/)
            .map((p: string) => `<p style="margin: 0 0 14px 0;">${p.replace(/\n/g, '<br/>')}</p>`)
            .join('');

        const html = `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
            <div style="background-color: #000; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; color: #C6FF00; font-size: 20px; letter-spacing: 1px;">Taxi Service KSA</h1>
                <p style="color: #aaa; margin: 6px 0 0; font-size: 12px;">Ground Transport Partner in Saudi Arabia</p>
            </div>
            <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
                ${companyName ? `<p style="font-size: 16px; margin-top: 0;">Dear <strong>${companyName}</strong> team,</p>` : ''}
                ${paragraphs}
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                <p style="font-size: 12px; color: #999; text-align: center;">
                    Taxi Service KSA &bull; info@taxiserviceksa.com &bull; +966 56 948 7569 &bull; www.taxiserviceksa.com
                </p>
                <p style="font-size: 11px; color: #bbb; text-align: center;">
                    If you'd rather not receive future updates from us, just reply and let us know.
                </p>
            </div>
        </div>`;

        await sendMail({
            to,
            subject,
            html,
            replyTo: 'info@taxiserviceksa.com',
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Send B2B Email Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
