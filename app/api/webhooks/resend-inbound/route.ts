import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend's inbound "email.received" webhook — fires whenever someone
// emails an address on the verified receiving domain (e.g.
// info@taxiserviceksa.com). We don't build a mailbox for it; we just
// relay every received email straight to ADMIN_EMAIL (the Gmail inbox
// already used for the SMTP fallback in lib/mail-server.ts) so it's
// readable/reply-able from Gmail like a normal forward.
//
// Setup required in the Resend dashboard (see driver-onboarding report):
//   1. Add + verify a Receiving domain (MX record) for taxiserviceksa.com.
//   2. Dashboard -> Webhooks -> Add Webhook -> event "email.received" ->
//      endpoint https://taxiserviceksa.com/api/webhooks/resend-inbound/
//      MUST include the trailing slash — next.config.js sets
//      trailingSlash: true, so the no-slash URL 308-redirects and Resend
//      does not follow redirects on webhook delivery (confirmed via its
//      delivery logs: http_status_code 308, endless "attempting" retries,
//      including the very Gmail "Send mail as" verification email getting
//      silently lost this way once already — don't reintroduce this).
//   3. Copy the webhook's signing secret into RESEND_WEBHOOK_SECRET
//      (.env.local locally, and the Vercel project's env vars in prod).
export async function POST(request: NextRequest) {
    const payload = await request.text();
    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.error('RESEND_WEBHOOK_SECRET is not configured — rejecting inbound webhook.');
        return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    let event;
    try {
        event = resend.webhooks.verify({
            payload,
            headers: {
                id: request.headers.get('svix-id') || '',
                timestamp: request.headers.get('svix-timestamp') || '',
                signature: request.headers.get('svix-signature') || '',
            },
            webhookSecret,
        });
    } catch (e) {
        console.error('Resend inbound webhook: signature verification failed', e);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    if (event.type !== 'email.received') {
        // We only asked Resend for email.received, but ignore anything else defensively.
        return NextResponse.json({ received: true });
    }

    const forwardTo = process.env.ADMIN_EMAIL || 'info@taxiserviceksa.com';
    const receivedAt = event.data.to[0] || 'info@taxiserviceksa.com';

    try {
        await resend.emails.receiving.forward(
            {
                emailId: event.data.email_id,
                to: forwardTo,
                from: receivedAt,
                passthrough: true,
            },
            { idempotencyKey: event.data.email_id }
        );
    } catch (e) {
        console.error('Failed to forward inbound email:', e);
        return NextResponse.json({ error: 'Forward failed' }, { status: 500 });
    }

    return NextResponse.json({ received: true, forwarded: true });
}
