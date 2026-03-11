
const nodemailer = require('nodemailer');

// Hardcoded for test - will delete after
const emailUser = 'info@taxiserviceksa.com';
const emailPass = 'wymc gllv uqqg rufr'; // The one from .env.local
const adminEmail = 'info@taxiserviceksa.com';

async function testEmail() {
    console.log('Testing email configuration (hardcoded values)...');
    console.log('User:', emailUser);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: emailUser,
            pass: emailPass,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Verifying transporter...');
        await transporter.verify();
        console.log('✅ Connection successful!');
        
        const info = await transporter.sendMail({
            from: `"Test" <${emailUser}>`,
            to: adminEmail,
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
