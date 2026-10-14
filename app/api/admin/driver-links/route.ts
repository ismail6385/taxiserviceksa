import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import { TEAM_DRIVERS } from '@/lib/team-drivers';
import { driverLinkPath } from '@/lib/driver-links';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Private trip-sheet links for the owner's drivers. Admin-only: the tokens
// in these URLs are what keep each driver's page private.
export async function GET(request: Request) {
    const session = await getAdminSession(request);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://taxiserviceksa.com';
    return NextResponse.json({
        links: TEAM_DRIVERS.map(d => ({ slug: d.slug, name: d.name, url: `${origin}${driverLinkPath(d.slug)}` })),
    });
}
