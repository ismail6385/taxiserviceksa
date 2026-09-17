import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Resend Config (tried first if configured; harmless to leave enabled even
// while the domain is unverified there — it fails fast with a 403 and we
// fall through to SMTP below)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// SMTP Config — ImprovMX (each mailbox alias has its own SMTP credentials,
// unlike a single shared account)
const smtpHost = process.env.SMTP_HOST || 'smtp.improvmx.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

// Google/ImprovMX both display generated passwords in "xxxx xxxx xxxx xxxx"
// grouped form for readability, but the real credential has no spaces — a
// copy-paste of the displayed form fails auth with a generic "Username and
// Password not accepted" error that gives no hint the spaces are the
// problem. Stripping them here makes that mistake harmless regardless of
// how the env var gets set.
function cleanPass(pass?: string): string | undefined {
    return pass?.replace(/\s+/g, '');
}

type FromIdentity = 'info' | 'booking';

const identities: Record<FromIdentity, { user: string; pass?: string }> = {
    // Used for all customer-facing emails (quotes, invoices, receipts, driver
    // assignment, confirmations, etc.)
    info: {
        user: process.env.EMAIL_USER || 'info@taxiserviceksa.com',
        pass: cleanPass(process.env.EMAIL_PASS),
    },
    // Used only for the admin "new booking/delivery request" alert
    booking: {
        user: process.env.BOOKING_EMAIL_USER || 'booking@taxiserviceksa.com',
        pass: cleanPass(process.env.BOOKING_EMAIL_PASS),
    },
};

console.log(' Mail Config Status:', {
    hasResendKey: !!process.env.RESEND_API_KEY,
    smtpHost,
    smtpPort,
    infoUser: identities.info.user,
    hasInfoSmtpPass: !!identities.info.pass,
    bookingUser: identities.booking.user,
    hasBookingSmtpPass: !!identities.booking.pass,
});

function makeTransporter(user: string, pass?: string) {
    return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false
        }
    });
}

/**
 * Send an email using Resend (Primary) or Nodemailer/ImprovMX SMTP (Fallback)
 */
interface Attachment {
    filename: string;
    content: string; // base64 encoded
}

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
    const identity = identities[fromIdentity];

    // 1. Try Resend First (Best for Vercel)
    if (resend) {
        try {
            console.log(`📧 Sending via Resend to: ${to}${cc?.length ? ` + CC: ${cc.join(', ')}` : ''}`);
            const { data, error } = await resend.emails.send({
                from: `${fromName} <${identity.user}>`,
                to,
                cc: cc?.length ? cc : undefined,
                subject,
                html,
                replyTo: replyTo || identity.user,
                attachments: attachments?.map(a => ({
                    filename: a.filename,
                    content: a.content,
                })),
            });

            if (error) {
                console.warn('⚠️ Resend failed, falling back to SMTP:', error);
                // Continue to SMTP fallback
            } else {
                console.log(`✅ Email sent via Resend: ${data?.id}`);
                return data;
            }
        } catch (e) {
            console.error('❌ Resend Exception, falling back to SMTP:', e);
        }
    }

    // 2. Fallback to Nodemailer/ImprovMX SMTP
    if (!identity.pass) {
        console.warn(`⚠️ SMTP Fallback skipped (no password configured for ${identity.user})`);
        return { message: 'Email skipped (no secrets)' };
    }

    try {
        console.log(`📧 SMTP Fallback (${identity.user}) to: ${to}${cc?.length ? ` + CC: ${cc.join(', ')}` : ''}`);
        const transporter = makeTransporter(identity.user, identity.pass);
        const info = await transporter.sendMail({
            from: `"${fromName}" <${identity.user}>`,
            to,
            cc: cc?.length ? cc.join(', ') : undefined,
            subject,
            html,
            replyTo: replyTo || identity.user,
            attachments: attachments?.map(a => ({
                filename: a.filename,
                content: Buffer.from(a.content, 'base64'),
                contentType: 'application/pdf',
            })),
        });

        console.log(`✅ Email sent via SMTP: ${info.messageId}`);
        return info;
    } catch (error: any) {
        console.error('❌ All email providers failed!');
        throw error;
    }
}
