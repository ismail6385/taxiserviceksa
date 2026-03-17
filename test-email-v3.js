
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

console.log('Testing Email with Config:', {
    user: emailUser,
    host: smtpHost,
    port: smtpPort,
    hasPass: !!emailPass
});

async function test() {
    if (!emailPass) {
        console.error('ERROR: EMAIL_PASS is missing in environment!');
        return;
    }

    const transporter = nodemailer.createTransport({
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

    try {
        console.log('Verifying connection...');
        await transporter.verify();
        console.log('✅ Connection verified!');

        const to = process.env.ADMIN_EMAIL || emailUser;
        console.log(`Sending test email to: ${to}`);

        const info = await transporter.sendMail({
            from: `"Test Service" <${emailUser}>`,
            to: to,
            subject: 'Test Email from Taxi KSA',
            html: '<h1>SMTP Test</h1><p>This is a test email to verify the SMTP configuration.</p>'
        });

        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (err) {
        console.error('❌ Failed to send email:');
        console.error(err);
    }
}

test();
