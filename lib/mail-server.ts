import nodemailer from 'nodemailer';

// All site email goes out through ImprovMX SMTP, the same provider that
// already receives mail for taxiserviceksa.com. (Resend was dropped at the
// owner's request on 2026-10-16; its domain was never verified.)
// Port 465 (implicit TLS) is used by default; it was confirmed to connect
// from inside the Cloudflare Workers runtime with nodejs_compat.

const smtpHost = process.env.SMTP_HOST || 'smtp.improvmx.com';
const smtpPort = () => parseInt(process.env.SMTP_PORT || '465', 10);

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
function identity(kind: FromIdentity): { user: string; pass?: string } {
    if (kind === 'booking') {
        const pass = cleanPass(process.env.BOOKING_EMAIL_PASS);
        // Fall back to info@ if booking@ has no credentials of its own.
        if (pass) return { user: process.env.BOOKING_EMAIL_USER || 'booking@taxiserviceksa.com', pass };
    }
    return { user: process.env.EMAIL_USER || 'info@taxiserviceksa.com', pass: cleanPass(process.env.EMAIL_PASS) };
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
    const from = identity(fromIdentity);
    if (!from.pass) {
        throw new Error(`Email is not configured: set the ImprovMX SMTP password for ${from.user} (EMAIL_PASS) in the Cloudflare Worker secrets.`);
    }

    const port = smtpPort();
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure: port === 465,
        auth: { user: from.user, pass: from.pass },
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
        console.log(`✅ Email sent via ImprovMX (${from.user}) to ${to}: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error(`❌ Email to ${to} failed via ImprovMX (${from.user}):`, error);
        throw error;
    }
}
