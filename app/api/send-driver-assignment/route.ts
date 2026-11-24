import { NextRequest, NextResponse } from 'next/server';
import { sendLogged } from '@/lib/email-log';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getAdminSession } from '@/lib/admin-auth';
import { renderEmail, para, card, rows, notice, buttons, whenText } from '@/lib/email-layout';

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

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

export async function POST(request: NextRequest) {
    try {
        const session = await getAdminSession(request);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { booking } = await request.json();

        if (!booking?.customer_email || !booking?.driver_name || !booking?.driver_phone) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const safeName = escapeHtml(booking.customer_name);
        const safeDriver = escapeHtml(booking.driver_name);
        const safePhone = escapeHtml(booking.driver_phone);
        const safePlate = escapeHtml(booking.driver_plate);
        const safeVehicle = escapeHtml(booking.actual_vehicle || booking.vehicle_type);
        const safeFrom = escapeHtml(booking.pickup_location);
        const safeTo = escapeHtml(booking.destination);
        const refId = `#${String(booking.id).slice(0, 8).toUpperCase()}`;
        const isDelivery = booking.booking_type === 'delivery';

        // wa.me needs digits with country code: "+966 5x…" / "05x…" -> "9665x…"
        let waDigits = String(booking.driver_phone).replace(/\D/g, '');
        if (waDigits.startsWith('05') && waDigits.length === 10) waDigits = `966${waDigits.slice(1)}`;
        const when = whenText(booking.pickup_date, booking.pickup_time);
        const whenPlain = when.replace(/<[^>]+>/g, '');

        await sendLogged(booking.id, 'Driver details email', {
            to: booking.customer_email,
            subject: `🚗 Your Driver is Assigned — ${whenPlain}`,
            html: renderEmail({
                preheader: `${booking.driver_name} will be your driver${booking.driver_plate ? ` (plate ${booking.driver_plate})` : ''}. ${whenPlain}.`,
                title: 'Your Driver is Assigned',
                subtitle: `Booking ${refId}`,
                greeting: `Dear <strong>${safeName || 'Customer'}</strong>,`,
                blocks: [
                    para(`A driver has been assigned to your ${isDelivery ? 'delivery' : 'trip'}. Here are the details:`),
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;border-collapse:separate;"><tr><td class="card" style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:12px;padding:18px 20px;">
<p style="margin:0 0 2px;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:#047857;font-weight:700;">Your Driver</p>
<p style="margin:0;font-size:20px;line-height:1.3;font-weight:800;color:#0f172a;">${safeDriver}</p>
<p style="margin:6px 0 0;font-size:16px;font-weight:700;"><a href="tel:${escapeHtml(String(booking.driver_phone).replace(/\s/g, ''))}" style="color:#047857;text-decoration:none;">📞 ${safePhone}</a></p>
${safeVehicle || safePlate ? `<p style="margin:6px 0 0;font-size:14px;color:#374151;">${safeVehicle}${safeVehicle && safePlate ? ' · ' : ''}${safePlate ? `Plate <strong>${safePlate}</strong>` : ''}</p>` : ''}
</td></tr></table>`,
                    card('Trip', rows([
                        ['Booking Ref', refId],
                        ['Pickup Time', when],
                        ['Pickup', safeFrom],
                        ['Destination', safeTo],
                    ])),
                    notice('💡 <strong>Please be ready 10 minutes before pickup.</strong> Your driver will contact you on arrival.', 'warning'),
                    buttons([
                        { href: `https://wa.me/${waDigits}?text=${encodeURIComponent(`Hello ${booking.driver_name}, I'm your passenger for booking ${refId}.`)}`, label: '💬 WhatsApp Your Driver', tone: 'whatsapp' },
                        { href: `tel:${escapeHtml(String(booking.driver_phone).replace(/\s/g, ''))}`, label: '📞 Call Driver', tone: 'light' },
                    ]),
                ],
            }),
        }, `${booking.driver_name} / ${booking.driver_phone}`);


        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('send-driver-assignment error:', err);
        return NextResponse.json({ error: 'Failed to send driver assignment email' }, { status: 500 });
    }
}
