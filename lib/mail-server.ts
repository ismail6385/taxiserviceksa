import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_USER || 'info@taxiserviceksa.com';
const emailPass = process.env.EMAIL_PASS;
// Priority: 1. ENV SMTP_HOST, 2. Detect Gmail from user, 3. Default to gmail
let smtpHost = process.env.SMTP_HOST;
if (!smtpHost) {
    smtpHost = emailUser.endsWith('@gmail.com') ? 'smtp.gmail.com' : 'smtp.gmail.com';
}
const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

console.log(' Mail Config Initialization:', {
    user: emailUser,
    host: smtpHost,
    port: smtpPort,
    hasPass: !!emailPass
});

// Create the transporter
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
        console.warn('⚠️ EMAIL_PASS not configured. Skipping email send.');
        return { message: 'Email skipped (no password)' };
    }

    try {
        console.log(`📧 Attempting to send email to: ${to} using host: ${smtpHost}`);
        
        // Gmail requires the 'from' address to be the authenticated user or an alias
        const fromEmail = emailUser.includes('@') ? emailUser : 'info@taxiserviceksa.com';

        const info = await transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            to,
            subject,
            html,
            replyTo: replyTo || fromEmail,
        });

        console.log(`✅ Email sent: ${info.messageId} to ${to}`);
        return info;
    } catch (error: any) {
        console.error('❌ Email sending failed!');
        console.error('Error details:', {
            code: error.code,
            command: error.command,
            address: error.address,
            host: smtpHost
        });
        throw error;
    }
}
