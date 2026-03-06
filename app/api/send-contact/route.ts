import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    subject: z.string().min(5),
    message: z.string().min(10),
});

// Helper function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone: string): string {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) return cleaned.substring(1);
    if (!cleaned.startsWith('966')) return `966${cleaned}`;
    return cleaned;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = formSchema.parse(body);

        const adminEmail = process.env.ADMIN_EMAIL || 'info@taxiserviceksa.com';

        // Send Email using centralized utility
        await sendMail({
            to: adminEmail,
            replyTo: email,
            subject: `New Contact Form: ${subject}`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #333;">New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <h3 style="color: #555;">Message:</h3>
              <p style="white-space: pre-wrap; color: #666; font-size: 16px;">${message}</p>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="https://wa.me/${formatPhoneForWhatsApp(phone)}?text=${encodeURIComponent(`Hello ${name}, regarding your inquiry: "${subject}"`)}" 
                   style="display: inline-block; background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px;">
                  💬 Reply via WhatsApp
                </a>
              </div>
            </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
