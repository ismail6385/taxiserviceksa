import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getDriverByToken, saveDocument } from '@/lib/driverOnboardingService';
import { uploadDriverDocument, UploadError } from '@/lib/driver-upload';
import { DOCUMENT_TYPES } from '@/lib/driver-constants';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const VALID_DOC_TYPES = new Set(DOCUMENT_TYPES.map(d => d.key));

// POST: upload a private verification document. Stored in a private
// bucket — never publicly readable, see lib/driver-upload.ts.
export async function POST(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-document:${ip}`, 20, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const result = await getDriverByToken(params.token);
    if (!result || result.expired || result.locked) {
        return NextResponse.json({ error: 'This onboarding link is not editable' }, { status: 403 });
    }

    const form = await request.formData();
    const docType = String(form.get('docType') || '');
    const file = form.get('file');

    if (!VALID_DOC_TYPES.has(docType)) {
        return NextResponse.json({ error: 'Invalid document type' }, { status: 400 });
    }
    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    try {
        const path = await uploadDriverDocument(file, result.driver!.id);
        const saved = await saveDocument(params.token, docType, path);
        if (!saved.ok) return NextResponse.json({ error: saved.error }, { status: 400 });
        return NextResponse.json({ success: true });
    } catch (e) {
        const message = e instanceof UploadError ? e.message : 'Upload failed';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
