import nodemailer from 'nodemailer';

// All site email goes out over SMTP: Gmail (app password) when EMAIL_USER is
// a Gmail address, otherwise SMTP_HOST / ImprovMX. (Resend was dropped at the
// owner's request on 2026-10-16; its domain was never verified.)
// Port 465 (implicit TLS) is used by default; it was confirmed to connect
// from inside the Cloudflare Workers runtime with nodejs_compat.

// Read per call: on Cloudflare, secrets only exist while handling a request,
// so a module-level read silently fell back to the default host.
// A Gmail address can only log in to Gmail's own SMTP server.
const smtpHost = (user: string) => /@(gmail|googlemail).com$/i.test(user) ? 'smtp.gmail.com' : (process.env.SMTP_HOST?.trim() || 'smtp.improvmx.com');
const smtpPort = (host: string) => host === 'smtp.gmail.com' ? 465 : parseInt(process.env.SMTP_PORT || '465', 10);

// ImprovMX shows generated passwords grouped with spaces for readability;
// the real credential has none, so strip them in case they were pasted.
function cleanPass(pass?: string): string | undefined {
    const p = pass?.replace(/\s+/g, '');
    // Treat the old "REPLACE_WITH_..." placeholders as not configured.
    if (!p || /^REPLACE_WITH/i.test(p)) return undefined;
    return p;
}

type FromIdentity = 'info' | 'booking';

// ImprovMX issues separate SMTP credentials per mailbox alias. Read at call
// time: on Cloudflare, secrets are only available while handling a request.
// Each identity may have more than one candidate password (EMAIL_PASS, then
// APP_PASSWORD, where a Gmail app password was also saved); they are tried in
// order until one logs in.
function identity(kind: FromIdentity): { user: string; passes: string[] } {
    if (kind === 'booking') {
        const pass = cleanPass(process.env.BOOKING_EMAIL_PASS);
        // Fall back to info@ if booking@ has no credentials of its own.
        if (pass) return { user: process.env.BOOKING_EMAIL_USER?.trim() || 'booking@taxiserviceksa.com', passes: [pass] };
    }
    const passes = [cleanPass(process.env.EMAIL_PASS), cleanPass(process.env.APP_PASSWORD)].filter((v, i, a): v is string => !!v && a.indexOf(v) === i);
    return { user: process.env.EMAIL_USER?.trim() || 'info@taxiserviceksa.com', passes };
}

interface Attachment {
    filename: string;
    content: string; // base64 encoded
}

/**
 * Sends an email via ImprovMX SMTP. Throws when email is not configured or
 * the send fails, so callers report a real failure instead of a false "sent".
 */
export async function sendMail({ to, cc, subject, html, fromName = 'Taxi Service KSA', replyTo, attachments, fromIdentity = 'info' }: {
    to: string;
    cc?: string[];
    subject: string;
    html: string;
    fromName?: string;
    replyTo?: string;
    attachments?: Attachment[];
    fromIdentity?: FromIdentity;
}) {
    // Brevo HTTP API first. SMTP (nodemailer) cannot work on Cloudflare's
    // free plan: the TLS + SMTP handshake blows the 10 ms CPU limit (error
    // 1102), whereas an HTTP call only waits, and waiting is not CPU.
    const brevoKey = process.env.BREVO_API_KEY?.trim();
    if (brevoKey) {
        return sendViaBrevo(brevoKey, { to, cc, subject, html, fromName, replyTo, attachments, fromIdentity });
    }

    const from = identity(fromIdentity);
    if (!from.passes.length) {
        throw new Error(`Email is not configured: set the SMTP password for ${from.user} (EMAIL_PASS) in the Cloudflare Worker secrets.`);
    }

    const host = smtpHost(from.user);
    const port = smtpPort(host);
    let lastError: unknown;
    for (const pass of from.passes) {
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user: from.user, pass },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 30000,
        });

        try {
            const info = await transporter.sendMail({
                from: `"${fromName}" <${from.user}>`,
                to,
                cc: cc?.length ? cc.join(', ') : undefined,
                subject,
                html,
                replyTo: replyTo || from.user,
                attachments: attachments?.map(a => ({
                    filename: a.filename,
                    content: Buffer.from(a.content, 'base64'),
                    contentType: 'application/pdf',
                })),
            });
            console.log(`✅ Email sent via ${host} (${from.user}) to ${to}: ${info.messageId}`);
            return info;
        } catch (error) {
            lastError = error;
            console.error(`❌ Email to ${to} failed via ${host} (${from.user}):`, error);
            // Only a rejected login is worth retrying with the next password.
            if ((error as { code?: string })?.code !== 'EAUTH') break;
        }
    }
    throw lastError;
}

// Sender addresses live on taxiserviceksa.com, the domain authenticated in
// Brevo (DKIM brevo1/brevo2). Replies go to the same address, which ImprovMX
// forwards to the owner's Gmail, so replying to clients works as before.
const BREVO_SENDER: Record<FromIdentity, string> = {
    info: 'info@taxiserviceksa.com',
    booking: 'booking@taxiserviceksa.com',
};

const toList = (s: string | string[] | undefined) =>
    (Array.isArray(s) ? s : (s || '').split(','))
        .map(e => e.trim())
        .filter(Boolean)
        .map(email => ({ email }));

async function sendViaBrevo(apiKey: string, { to, cc, subject, html, fromName, replyTo, attachments, fromIdentity }: {
    to: string; cc?: string[]; subject: string; html: string; fromName: string;
    replyTo?: string; attachments?: Attachment[]; fromIdentity: FromIdentity;
}) {
    const sender = BREVO_SENDER[fromIdentity];
    const recipients = toList(to);
    if (!recipients.length) throw new Error('No recipient email address.');
    const ccList = toList(cc);

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
            sender: { name: fromName, email: sender },
            to: recipients,
            ...(ccList.length ? { cc: ccList } : {}),
            replyTo: { email: (replyTo || sender).trim() },
            subject,
            htmlContent: html,
            ...(attachments?.length ? { attachment: attachments.map(a => ({ name: a.filename, content: a.content })) } : {}),
        }),
    });
    const body = await res.json().catch(() => ({})) as { messageId?: string; message?: string; code?: string };
    if (!res.ok) {
        console.error(`❌ Brevo email to ${to} failed (${res.status}):`, body);
        throw new Error(`Brevo ${res.status}: ${body.message || body.code || 'send failed'}`);
    }
    console.log(`✅ Email sent via Brevo (${sender}) to ${to}: ${body.messageId}`);
    return { messageId: body.messageId };
}
