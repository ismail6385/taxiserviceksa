import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import { listDriversForAdmin, createOnboardingLink } from '@/lib/driverOnboardingService';
import type { OnboardingStatus } from '@/lib/driver-constants';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET: list driver-onboarding profiles (filter by status/search/location).
export async function GET(request: NextRequest) {
    const session = await getAdminSession(request);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    try {
        const rows = await listDriversForAdmin({
            status: (searchParams.get('status') as OnboardingStatus | 'ALL') || 'ALL',
            search: searchParams.get('search') || undefined,
            location: searchParams.get('location') || undefined,
        });
        return NextResponse.json(rows);
    } catch (e: any) {
        return NextResponse.json({ error: e.message || 'Failed to load drivers' }, { status: 500 });
    }
}

// POST: admin generates a new private onboarding link for a new driver.
export async function POST(request: NextRequest) {
    const session = await getAdminSession(request);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const { id, token } = await createOnboardingLink();
        const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://taxiserviceksa.com';
        return NextResponse.json({ id, token, url: `${base}/driver/onboarding/${token}` });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || 'Failed to create onboarding link' }, { status: 500 });
    }
}
