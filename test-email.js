
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('Testing email configuration...');
    console.log('User:', process.env.EMAIL_USER);
    console.log('Host:', process.env.SMTP_HOST || 'smtp.gmail.com');
    console.log('Port:', process.env.SMTP_PORT || '465');

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: (process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT),
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        await transporter.verify();
        console.log('✅ Connection successful! Transporter is ready.');
        
        const info = await transporter.sendMail({
            from: `"Test" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'Test Email - SMTP Configuration',
            text: 'This is a test email to verify SMTP configuration.',
            html: '<b>This is a test email to verify SMTP configuration.</b>',
        });
        
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('❌ Email test failed:');
        console.error(error);
    }
}

testEmail();
