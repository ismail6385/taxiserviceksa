require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

async function testResend() {
    console.log('=== Resend API Test ===');
    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    console.log('Admin Email:', process.env.ADMIN_EMAIL);

    if (!process.env.RESEND_API_KEY) {
        console.error('❌ RESEND_API_KEY is missing!');
        return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // First check account/usage info
        const domains = await resend.domains.list();
        console.log('\n=== Resend Domains ===');
        console.log(JSON.stringify(domains, null, 2));

        // Now try to send a test email
        console.log('\n=== Sending test email ===');
        const { data, error } = await resend.emails.send({
            from: 'VIP Transfer KSA <info@taxiserviceksa.com>',
            to: process.env.ADMIN_EMAIL,
            subject: '🧪 Resend API Test - ' + new Date().toISOString(),
            html: '<h2>Resend Test</h2><p>If you receive this, Resend is working correctly at: ' + new Date().toLocaleString() + '</p>',
        });

        if (error) {
            console.error('❌ Resend error:', error);
        } else {
            console.log('✅ Email sent via Resend!');
            console.log('Email ID:', data.id);
        }
    } catch (err) {
        console.error('❌ Exception:', err.message);
        if (err.statusCode === 429) {
            console.error('🚨 RATE LIMIT HIT — This is why messages stopped!');
        }
        if (err.statusCode === 403) {
            console.error('🚨 DOMAIN NOT VERIFIED — Emails not sending!');
        }
    }
}

testResend();
