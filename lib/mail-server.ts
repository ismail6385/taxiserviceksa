import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_USER || 'info@taxiserviceksa.com';
const emailPass = process.env.EMAIL_PASS;
const smtpHost = process.env.SMTP_HOST || 'smtp.improvemx.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

// Create the transporter
export const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // Use SSL for port 465
    auth: {
        user: emailUser,
        pass: emailPass,
    },
    // Required for some SMTP servers like ImproveMX
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Send an email using the pre-configured transporter
 */
export async function sendMail({ to, subject, html, fromName = 'VIP Transfer KSA', replyTo }: {
    to: string;
    subject: string;
    html: string;
    fromName?: string;
    replyTo?: string;
}) {
    if (!emailPass) {
        console.warn('EMAIL_PASS not configured. Skipping email send.');
        return { message: 'Email skipped (no password)' };
    }

    try {
        const info = await transporter.sendMail({
            from: `"${fromName}" <${emailUser}>`,
            to,
            subject,
            html,
            replyTo,
        });

        console.log(`Email sent: ${info.messageId} to ${to}`);
        return info;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
}
