import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import {
    getDriverDetailForAdmin,
    approveDriver,
    rejectDriver,
    requestChangesForDriver,
    suspendDriver,
    saveAdminNotes,
} from '@/lib/driverOnboardingService';
import { createSignedDocumentUrl } from '@/lib/driver-upload';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET: full profile for the admin review screen, including signed URLs
// for private documents (never returned by any public-facing endpoint).
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getAdminSession(request);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const detail = await getDriverDetailForAdmin(params.id);
    if (!detail) return NextResponse.json({ error: 'Driver not found' }, { status: 404 });

    const documents = await Promise.all(
        detail.documents.map(async (doc: any) => ({
            ...doc,
            signed_url: await createSignedDocumentUrl(doc.file_url),
        }))
    );

    return NextResponse.json({ ...detail, documents });
}

type Action = 'approve' | 'reject' | 'request_changes' | 'suspend' | 'save_notes';

// PATCH: perform an admin moderation action.
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getAdminSession(request);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    let body: { action: Action; feedback?: string; reason?: string; notes?: string };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const adminEmail = session.user.email || 'admin';
    let result: { ok: boolean; error?: string };

    switch (body.action) {
        case 'approve':
            result = await approveDriver(params.id, adminEmail);
            break;
        case 'reject':
            result = await rejectDriver(params.id, adminEmail, body.reason);
            break;
        case 'request_changes':
            result = await requestChangesForDriver(params.id, adminEmail, body.feedback || '');
            break;
        case 'suspend':
            result = await suspendDriver(params.id, adminEmail, body.reason);
            break;
        case 'save_notes':
            result = await saveAdminNotes(params.id, body.notes || '');
            break;
        default:
            return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }

    if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });
    return NextResponse.json({ success: true });
}
