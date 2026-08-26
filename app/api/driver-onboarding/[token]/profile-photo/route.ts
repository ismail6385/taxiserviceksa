import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getDriverByToken, saveDraft } from '@/lib/driverOnboardingService';
import { uploadDriverPhoto, UploadError } from '@/lib/driver-upload';
import { DRIVER_STORAGE_BUCKETS } from '@/lib/driver-constants';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST: upload the driver's own profile photo.
export async function POST(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-profile-photo:${ip}`, 20, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const result = await getDriverByToken(params.token);
    if (!result || result.expired || result.locked) {
        return NextResponse.json({ error: 'This onboarding link is not editable' }, { status: 403 });
    }

    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    try {
        const url = await uploadDriverPhoto(file, DRIVER_STORAGE_BUCKETS.profilePhotos, result.driver!.id);
        const saved = await saveDraft(params.token, { driverInfo: { profile_photo_url: url } });
        if (!saved.ok) return NextResponse.json({ error: saved.error }, { status: 400 });
        return NextResponse.json({ success: true, url });
    } catch (e) {
        const message = e instanceof UploadError ? e.message : 'Upload failed';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
