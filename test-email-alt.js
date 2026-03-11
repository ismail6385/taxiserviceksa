
const nodemailer = require('nodemailer');

// Trying with the other account mentioned in history
const emailUser = 'taxiserviceksa9988@gmail.com'; 
const emailPass = 'wymc gllv uqqg rufr'; 
const adminEmail = 'info@taxiserviceksa.com';

async function testEmail() {
    console.log('Testing email configuration (taxiserviceksa9988@gmail.com)...');

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
            from: `"Test" <info@taxiserviceksa.com>`,
            to: adminEmail,
            subject: 'Test Email - SMTP Configuration',
            text: 'This is a test email to verify SMTP configuration.',
        });
        
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('❌ Email test failed:');
        console.error(error);
    }
}

testEmail();
