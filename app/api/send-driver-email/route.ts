import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { renderEmail, para, card, buttons, whatsappUrl } from '@/lib/email-layout';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function escapeHtml(str: string | undefined | null): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
    try {
        const ip = getClientIp(request);
        if (!checkRateLimit(`driver-email:${ip}`, 5, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await request.json();
        if (!body || !body.driver) {
            return NextResponse.json({ error: 'Missing driver data' }, { status: 400 });
        }

        // Public route: only email an applicant who was really just saved in
        // the drivers table (last 30 minutes), using the saved row, so the
        // route cannot be used to send our emails to arbitrary addresses.
        const email = String(body.driver.email || '').trim().toLowerCase();
        if (!email.includes('@')) {
            return NextResponse.json({ error: 'Missing email' }, { status: 400 });
        }
        const since = new Date(Date.now() - 30 * 60_000).toISOString();
        const { data: saved } = await supabaseAdmin
            .from('drivers')
            .select('full_name, phone_number, email, city, vehicle_model, created_at')
            .ilike('email', email)
            .gte('created_at', since)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle();
        if (!saved) {
            return NextResponse.json({ success: true, message: 'No recent application for this email' });
        }

        const rawDriver = { ...saved, owns_car: body.driver.owns_car };
        const driver = {
            full_name: escapeHtml(rawDriver.full_name),
            phone_number: escapeHtml(rawDriver.phone_number),
            email: rawDriver.email, // used as an email address, not interpolated raw into HTML text
            city: escapeHtml(rawDriver.city),
            vehicle_model: escapeHtml(rawDriver.vehicle_model),
            owns_car: rawDriver.owns_car,
        };
        console.log('Sending driver application emails for:', driver.full_name);

        // Applications are already saved to the `drivers` table (see
        // partners/driver-registration) so they show up in Admin > Drivers —
        // no separate admin alert email needed.

        // Send Applicant Confirmation Email
        try {
            await sendMail({
                to: driver.email,
                subject: 'Partnership Application Received - Taxi Service KSA',
                html: renderEmail({
                    audience: 'driver',
                    preheader: 'We received your application to drive with Taxi Service KSA.',
                    title: 'Application Received',
                    subtitle: 'Driver partnership',
                    greeting: `Dear <strong>${driver.full_name || 'Driver'}</strong>,`,
                    blocks: [
                        para('Thank you for your interest in joining the <strong>Taxi Service KSA</strong> driver network.'),
                        para('We have received your details. Our team is now reviewing your profile and vehicle information.'),
                        card("What's Next?", para(`If your profile matches our needs${driver.city ? ` in <strong>${driver.city}</strong>` : ''}, our team will contact you within <strong>48–72 hours</strong>. Please keep your documents ready for verification.`, { size: 14 })),
                        buttons([{ href: whatsappUrl('Hello, I applied to drive with Taxi Service KSA.'), label: '💬 WhatsApp Our Team', tone: 'whatsapp' }]),
                    ],
                    signoff: '<p style="margin:0 0 4px;font-size:14px;color:#1f2937;">Best regards,</p><p style="margin:0 0 16px;font-size:14px;font-weight:700;color:#1f2937;">Onboarding Team, Taxi Service KSA</p>',
                }),
            });
        } catch (error) {
            console.warn('Failed to send applicant confirmation email:', error);
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error: any) {
        console.error('Driver Email API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
