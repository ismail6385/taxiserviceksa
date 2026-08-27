import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { createOnboardingLink } from '@/lib/driverOnboardingService';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST: public entry point for organically-discovered drivers. Mints a
// fresh, private onboarding token per click and hands it back for the
// client to redirect into — this is the only way a public page can offer
// "start your application" without ever exposing a predictable/shared
// onboarding URL (see /driver/apply/page.tsx).
export async function POST(request: NextRequest) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`driver-apply:${ip}`, 5, 60 * 60_000)) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    try {
        const { token } = await createOnboardingLink();
        return NextResponse.json({ token });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || 'Failed to start application' }, { status: 500 });
    }
}
