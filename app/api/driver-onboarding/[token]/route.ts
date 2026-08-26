import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getDriverByToken, saveDraft, submitOnboarding, type DraftPatch } from '@/lib/driverOnboardingService';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET: load a driver's onboarding profile by their private token.
export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-get:${ip}`, 60, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const result = await getDriverByToken(params.token);
    if (!result) return NextResponse.json({ error: 'Invalid onboarding link' }, { status: 404 });
    if (result.expired) return NextResponse.json({ error: 'This onboarding link has expired' }, { status: 410 });

    return NextResponse.json(result);
}

// PATCH: save draft progress (any subset of driverInfo/vehicle/locations/services).
export async function PATCH(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-patch:${ip}`, 60, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    let patch: DraftPatch;
    try {
        patch = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const result = await saveDraft(params.token, patch);
    if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });
    return NextResponse.json({ success: true });
}

// POST: submit the completed profile for review.
export async function POST(request: NextRequest, { params }: { params: { token: string } }) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-onboarding-submit:${ip}`, 10, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const result = await submitOnboarding(params.token);
    if (!result.ok) {
        return NextResponse.json({ error: result.error, fieldErrors: result.fieldErrors }, { status: 400 });
    }
    return NextResponse.json({ success: true });
}
