import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { z } from 'zod';
import { renderEmail, para, card, buttons, whatsappUrl } from '@/lib/email-layout';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    subject: z.string().min(5),
    message: z.string().min(10),
});

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
    try {
        const ip = getClientIp(req);
        if (!checkRateLimit(`contact:${ip}`, 5, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await req.json();
        const { name, email, phone, subject, message } = formSchema.parse(body);

        const safeName = escapeHtml(name);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message);

        // Save to support_inquiries so it shows up in the admin Support inbox
        // instead of emailing the admin. Best-effort — a DB hiccup shouldn't
        // block the customer's auto-reply from sending.
        await supabaseAdmin.from('support_inquiries').insert([{
            name, email, phone, subject, message, status: 'open',
        }]).then(({ error }) => {
            if (error) console.error('Failed to save support inquiry:', error);
        });

        // Send Auto-Reply to Customer
        try {
            await sendMail({
                to: email,
                subject: `Re: ${subject} - Taxi Service KSA`,
                html: renderEmail({
                    preheader: `We received your message about "${subject}". We usually reply within the hour.`,
                    title: 'Message Received',
                    subtitle: safeSubject,
                    greeting: `Dear <strong>${safeName || 'Customer'}</strong>,`,
                    blocks: [
                        para(`Thank you for contacting <strong>Taxi Service KSA</strong>. We have received your message and our team will get back to you within the next hour.`),
                        card('Your Message', para(`<em>${safeMessage.length > 300 ? safeMessage.substring(0, 300) + '…' : safeMessage}</em>`, { muted: true, size: 14 })),
                        para('Need an answer right away? Message us on WhatsApp.', { size: 14 }),
                        buttons([{ href: whatsappUrl(`Hello, I just sent a message about "${subject}".`), label: '💬 WhatsApp Us', tone: 'whatsapp' }]),
                    ],
                }),
            });
        } catch (e) {
            console.warn('Auto-reply failed to send to customer:', e);
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
