import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { getAdminSession } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Email diagnostic: sends one test email to info@ and returns the real error
// instead of the silent success the booking email route gives. Admin session
// or the CRON_SECRET bearer only.
export async function POST(request: NextRequest) {
    const secret = process.env.CRON_SECRET;
    const bearerOk = !!secret && request.headers.get('authorization') === `Bearer ${secret}`;
    if (!bearerOk && !(await getAdminSession(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const provider = process.env.BREVO_API_KEY?.trim() ? 'brevo' : 'smtp';
    const started = Date.now();
    try {
        const info = await sendMail({
            to: 'info@taxiserviceksa.com',
            subject: 'Website email test',
            html: '<p>This is a test email from the Taxi Service KSA website. If you see it, website email works.</p>',
        });
        return NextResponse.json({ ok: true, provider, ms: Date.now() - started, messageId: (info as { messageId?: string })?.messageId });
    } catch (e) {
        const err = e as { message?: string; code?: string };
        return NextResponse.json({ ok: false, provider, ms: Date.now() - started, error: err?.message || String(e), code: err?.code }, { status: 500 });
    }
}
