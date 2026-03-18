import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Resend Config (Recommended for Vercel)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// SMTP Config (Fallback)
const emailUser = process.env.EMAIL_USER || 'info@taxiserviceksa.com';
const emailPass = process.env.EMAIL_PASS;
let smtpHost = process.env.SMTP_HOST;
if (!smtpHost) {
    smtpHost = emailUser.endsWith('@gmail.com') ? 'smtp.gmail.com' : 'smtp.gmail.com';
}
const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

console.log(' Mail Config Status:', {
    provider: resend ? 'Resend' : 'Nodemailer (SMTP)',
    user: emailUser,
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasSmtpPass: !!emailPass
});

// Create the Nodemailer transporter (Fallback)
export const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
        user: emailUser,
        pass: emailPass,
    },
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Send an email using Resend (Primary) or Nodemailer (Fallback)
 */
export async function sendMail({ to, subject, html, fromName = 'VIP Transfer KSA', replyTo }: {
    to: string;
    subject: string;
    html: string;
    fromName?: string;
    replyTo?: string;
}) {
    // 1. Try Resend First (Best for Vercel)
    if (resend) {
        try {
            console.log(`📧 Sending via Resend to: ${to}`);
            const { data, error } = await resend.emails.send({
                from: `${fromName} <info@taxiserviceksa.com>`,
                to,
                subject,
                html,
                replyTo: replyTo || 'info@taxiserviceksa.com',
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

    // 2. Fallback to Nodemailer/SMTP
    if (!emailPass) {
        console.warn('⚠️ SMTP Fallback skipped (no password configured)');
        return { message: 'Email skipped (no secrets)' };
    }

    try {
        console.log(`📧 SMTP Fallback to: ${to}`);
        const info = await transporter.sendMail({
            from: `"${fromName}" <${emailUser}>`,
            to,
            subject,
            html,
            replyTo: replyTo || emailUser,
        });

        console.log(`✅ Email sent via SMTP: ${info.messageId}`);
        return info;
    } catch (error: any) {
        console.error('❌ All email providers failed!');
        throw error;
    }
}
