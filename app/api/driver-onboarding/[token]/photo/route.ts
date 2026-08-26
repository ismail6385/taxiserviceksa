import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getDriverByToken, saveVehiclePhoto } from '@/lib/driverOnboardingService';
import { uploadDriverPhoto, UploadError } from '@/lib/driver-upload';
import { VEHICLE_PHOTO_SLOTS, DRIVER_STORAGE_BUCKETS } from '@/lib/driver-constants';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const VALID_SLOTS = new Set(VEHICLE_PHOTO_SLOTS.map(s => s.key));

// POST: upload one named vehicle-photo slot (front/rear/left/right/...).
export async function POST(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-photo:${ip}`, 40, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const result = await getDriverByToken(params.token);
    if (!result || result.expired || result.locked) {
        return NextResponse.json({ error: 'This onboarding link is not editable' }, { status: 403 });
    }

    const form = await request.formData();
    const slot = String(form.get('slot') || '');
    const file = form.get('file');

    if (!VALID_SLOTS.has(slot)) {
        return NextResponse.json({ error: 'Invalid photo slot' }, { status: 400 });
    }
    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    try {
        const url = await uploadDriverPhoto(file, DRIVER_STORAGE_BUCKETS.vehiclePhotos, result.driver!.id);
        const saved = await saveVehiclePhoto(params.token, slot, url);
        if (!saved.ok) return NextResponse.json({ error: saved.error }, { status: 400 });
        return NextResponse.json({ success: true, url, slot });
    } catch (e) {
        const message = e instanceof UploadError ? e.message : 'Upload failed';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
