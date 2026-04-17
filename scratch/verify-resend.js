require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

async function testResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
        console.error('❌ RESEND_API_KEY is missing in .env.local');
        return;
    }
    
    console.log('Testing Resend API Key:', key.substring(0, 10) + '...');
    const resend = new Resend(key);
    
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'delivered@resend.dev',
            subject: 'System Test',
            html: '<p>API Connection Test</p>'
        });
        
        if (error) {
            console.error('❌ Resend API Error:', error);
        } else {
            console.log('✅ Resend API is working! ID:', data.id);
        }
    } catch (e) {
        console.error('❌ Request failed:', e.message);
    }
}

testResend();
