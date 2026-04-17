import { sendMail } from './lib/mail-server';

async function testResend() {
    console.log('🚀 Starting Resend API Test...');
    try {
        const result = await sendMail({
            to: 'ismail6385@gmail.com', // Assuming this is the user's email based on the CorpusName
            subject: 'Test Email from Taxi KSA Admin',
            html: '<h1>Resend API Working!</h1><p>This is a test email to confirm the Resend integration is functional.</p>'
        });
        console.log('✅ Test Result:', result);
    } catch (error) {
        console.error('❌ Test Failed:', error);
    }
}

testResend();
