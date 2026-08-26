import { supabaseAdmin } from './supabase-admin';
import { ONBOARDING_TOKEN_TTL_DAYS, firstVehicle, type OnboardingStatus } from './driver-constants';
import {
    sendOnboardingSubmittedEmail,
    sendChangesRequestedEmail,
    sendDriverApprovedEmail,
    sendDriverRejectedEmail,
    sendDriverSuspendedEmail,
} from './driver-onboarding-email';
import { driverOnboardingSubmitSchema, missingRequiredPhotos, toFieldErrors } from './driver-onboarding-validation';

/**
 * Server-only data layer for the driver onboarding system. All functions
 * use supabaseAdmin (service-role, bypasses RLS) — callers are always
 * either admin API routes (already gated by getAdminSession) or the
 * token-gated public onboarding routes, where the token itself is the
 * authorization check (see getDriverByToken).
 */

export interface DriverRow {
    id: string;
    full_name: string | null;
    display_name: string | null;
    phone_number: string | null;
    whatsapp_number: string | null;
    email: string | null;
    profile_photo_url: string | null;
    languages: string[] | null;
    years_experience: number | null;
    driver_type: string | null;
    availability: string | null;
    bio: string | null;
    additional_notes: string | null;
    slug: string | null;
    onboarding_status: OnboardingStatus;
    onboarding_token: string | null;
    onboarding_token_expires_at: string | null;
    changes_requested_feedback: string | null;
    admin_notes: string | null;
    submitted_at: string | null;
    approved_at: string | null;
    suspended_at: string | null;
    reviewed_by: string | null;
    created_at: string;
}

const DRIVER_COLUMNS = `
    id, full_name, display_name, phone_number, whatsapp_number, email, profile_photo_url,
    languages, years_experience, driver_type, availability, bio, additional_notes, slug,
    onboarding_status, onboarding_token, onboarding_token_expires_at, changes_requested_feedback,
    admin_notes, submitted_at, approved_at, suspended_at, reviewed_by, created_at
`;

function slugify(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '') || 'driver';
}

async function generateUniqueSlug(displayName: string): Promise<string> {
    const base = slugify(displayName);
    let candidate = base;
    let attempt = 0;
    while (attempt < 20) {
        const { data } = await supabaseAdmin.from('drivers').select('id').eq('slug', candidate).maybeSingle();
        if (!data) return candidate;
        attempt++;
        candidate = `${base}-${Math.random().toString(36).slice(2, 6)}`;
    }
    return `${base}-${Date.now()}`;
}

// ---------------------------------------------------------------------------
// Admin: create onboarding link
// ---------------------------------------------------------------------------

export async function createOnboardingLink(): Promise<{ id: string; token: string }> {
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + ONBOARDING_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();

    const { data, error } = await supabaseAdmin
        .from('drivers')
        .insert([{
            full_name: '',
            phone_number: '',
            email: '',
            city: '',
            vehicle_model: '',
            status: 'pending', // legacy column, kept for schema NOT NULL compatibility; unused by the new flow
            onboarding_status: 'DRAFT',
            onboarding_token: token,
            onboarding_token_expires_at: expiresAt,
        }])
        .select('id')
        .single();

    if (error || !data) throw new Error(error?.message || 'Failed to create onboarding link');
    return { id: data.id, token };
}

// ---------------------------------------------------------------------------
// Token-gated driver-facing access
// ---------------------------------------------------------------------------

export async function getDriverByToken(token: string) {
    const { data: driver, error } = await supabaseAdmin
        .from('drivers')
        .select(DRIVER_COLUMNS)
        .eq('onboarding_token', token)
        .maybeSingle();

    if (error || !driver) return null;
    if (driver.onboarding_token_expires_at && new Date(driver.onboarding_token_expires_at) < new Date()) {
        return { expired: true as const, driver: null };
    }
    if (!['DRAFT', 'PENDING_REVIEW', 'CHANGES_REQUESTED'].includes(driver.onboarding_status)) {
        // Approved/rejected/suspended profiles can no longer be self-edited via the link.
        return { expired: false as const, locked: true as const, driver: driver as unknown as DriverRow };
    }

    const [{ data: vehicle }, { data: locations }, { data: services }] = await Promise.all([
        supabaseAdmin.from('driver_vehicles').select('*').eq('driver_id', driver.id).maybeSingle(),
        supabaseAdmin.from('driver_locations').select('location_slug').eq('driver_id', driver.id),
        supabaseAdmin.from('driver_services').select('service_slug').eq('driver_id', driver.id),
    ]);

    return {
        expired: false as const,
        locked: false as const,
        driver: driver as unknown as DriverRow,
        vehicle: vehicle || null,
        locations: (locations || []).map(l => l.location_slug),
        services: (services || []).map(s => s.service_slug),
    };
}

export interface DraftPatch {
    driverInfo?: Partial<{
        full_name: string; display_name: string; phone_number: string; whatsapp_number: string;
        email: string; languages: string[]; years_experience: number; driver_type: string;
        availability: string; bio: string; additional_notes: string; profile_photo_url: string;
    }>;
    vehicle?: Partial<{
        make: string; model: string; year: number; category: string; color: string;
        passenger_capacity: number; luggage_capacity: number; registration_info: string; notes: string;
    }>;
    locations?: string[];
    services?: string[];
}

/** Saves partial progress for a DRAFT/CHANGES_REQUESTED profile. Never
 *  changes onboarding_status — that only happens via submitOnboarding()
 *  or an admin action. */
export async function saveDraft(token: string, patch: DraftPatch): Promise<{ ok: true } | { ok: false; error: string }> {
    const result = await getDriverByToken(token);
    if (!result || result.expired) return { ok: false, error: 'This onboarding link has expired.' };
    if (result.locked) return { ok: false, error: 'This profile can no longer be edited.' };
    const driverId = result.driver!.id;

    if (patch.driverInfo && Object.keys(patch.driverInfo).length) {
        const { error } = await supabaseAdmin.from('drivers').update(patch.driverInfo).eq('id', driverId);
        if (error) return { ok: false, error: error.message };
    }

    if (patch.vehicle && Object.keys(patch.vehicle).length) {
        const { data: existing } = await supabaseAdmin.from('driver_vehicles').select('id').eq('driver_id', driverId).maybeSingle();
        if (existing) {
            const { error } = await supabaseAdmin.from('driver_vehicles').update({ ...patch.vehicle, updated_at: new Date().toISOString() }).eq('driver_id', driverId);
            if (error) return { ok: false, error: error.message };
        } else {
            const { error } = await supabaseAdmin.from('driver_vehicles').insert([{ driver_id: driverId, ...patch.vehicle }]);
            if (error) return { ok: false, error: error.message };
        }
    }

    if (patch.locations) {
        const { error: delErr } = await supabaseAdmin.from('driver_locations').delete().eq('driver_id', driverId);
        if (delErr) return { ok: false, error: delErr.message };
        if (patch.locations.length) {
            const { error } = await supabaseAdmin.from('driver_locations').insert(patch.locations.map(slug => ({ driver_id: driverId, location_slug: slug })));
            if (error) return { ok: false, error: error.message };
        }
    }

    if (patch.services) {
        const { error: delErr } = await supabaseAdmin.from('driver_services').delete().eq('driver_id', driverId);
        if (delErr) return { ok: false, error: delErr.message };
        if (patch.services.length) {
            const { error } = await supabaseAdmin.from('driver_services').insert(patch.services.map(slug => ({ driver_id: driverId, service_slug: slug })));
            if (error) return { ok: false, error: error.message };
        }
    }

    return { ok: true };
}

/** Records a photo slot URL (or a document upload) against the driver's
 *  vehicle row. Called by the upload API routes after a successful upload. */
export async function saveVehiclePhoto(token: string, slot: string, url: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const result = await getDriverByToken(token);
    if (!result || result.expired || result.locked) return { ok: false, error: 'This onboarding link is not editable.' };
    const driverId = result.driver!.id;

    const { data: existing } = await supabaseAdmin.from('driver_vehicles').select('id, photos').eq('driver_id', driverId).maybeSingle();
    const photos = { ...(existing?.photos || {}), [slot]: { url, uploaded_at: new Date().toISOString() } };

    if (existing) {
        const { error } = await supabaseAdmin.from('driver_vehicles').update({ photos, updated_at: new Date().toISOString() }).eq('driver_id', driverId);
        if (error) return { ok: false, error: error.message };
    } else {
        const { error } = await supabaseAdmin.from('driver_vehicles').insert([{ driver_id: driverId, photos }]);
        if (error) return { ok: false, error: error.message };
    }
    return { ok: true };
}

export async function saveDocument(token: string, docType: string, filePath: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const result = await getDriverByToken(token);
    if (!result || result.expired || result.locked) return { ok: false, error: 'This onboarding link is not editable.' };
    const driverId = result.driver!.id;

    const { error } = await supabaseAdmin.from('driver_documents').insert([{ driver_id: driverId, doc_type: docType, file_url: filePath }]);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
}

export async function submitOnboarding(token: string): Promise<{ ok: true } | { ok: false; error: string; fieldErrors?: Record<string, string> }> {
    const result = await getDriverByToken(token);
    if (!result || result.expired) return { ok: false, error: 'This onboarding link has expired.' };
    if (result.locked) return { ok: false, error: 'This profile has already been submitted.' };

    const driver = result.driver!;
    const vehicle = result.vehicle;

    const parsed = driverOnboardingSubmitSchema.safeParse({
        full_name: driver.full_name,
        display_name: driver.display_name,
        phone_number: driver.phone_number,
        whatsapp_number: driver.whatsapp_number,
        email: driver.email,
        languages: driver.languages || [],
        years_experience: driver.years_experience,
        driver_type: driver.driver_type,
        availability: driver.availability,
        bio: driver.bio,
        additional_notes: driver.additional_notes,
        locations: result.locations,
        services: result.services,
        vehicle: {
            make: vehicle?.make,
            model: vehicle?.model,
            year: vehicle?.year,
            category: vehicle?.category,
            color: vehicle?.color,
            passenger_capacity: vehicle?.passenger_capacity,
            luggage_capacity: vehicle?.luggage_capacity,
            registration_info: vehicle?.registration_info,
            notes: vehicle?.notes,
        },
    });

    if (!parsed.success) {
        return { ok: false, error: 'Please complete all required fields.', fieldErrors: toFieldErrors(parsed.error) };
    }

    const missingPhotos = missingRequiredPhotos(vehicle?.photos);
    if (missingPhotos.length) {
        return { ok: false, error: `Missing required vehicle photos: ${missingPhotos.join(', ')}` };
    }

    const { error } = await supabaseAdmin
        .from('drivers')
        .update({
            onboarding_status: 'PENDING_REVIEW',
            submitted_at: new Date().toISOString(),
            changes_requested_feedback: null,
        })
        .eq('id', driver.id);

    if (error) return { ok: false, error: error.message };

    await sendOnboardingSubmittedEmail({ full_name: driver.display_name || driver.full_name || 'Driver', email: driver.email });
    return { ok: true };
}

// ---------------------------------------------------------------------------
// Admin: review + moderation
// ---------------------------------------------------------------------------

export interface AdminListFilters {
    status?: OnboardingStatus | 'ALL';
    search?: string;
    location?: string;
}

export async function listDriversForAdmin(filters: AdminListFilters) {
    let query = supabaseAdmin
        .from('drivers')
        .select(`${DRIVER_COLUMNS}, driver_vehicles(make, model, category), driver_locations(location_slug)`)
        .not('onboarding_token', 'is', null)
        .order('created_at', { ascending: false });

    if (filters.status && filters.status !== 'ALL') {
        query = query.eq('onboarding_status', filters.status);
    }
    if (filters.search) {
        const term = filters.search.trim();
        if (term) query = query.or(`full_name.ilike.%${term}%,display_name.ilike.%${term}%,phone_number.ilike.%${term}%`);
    }

    const { data, error } = await query;
    if (error) throw new Error(error.message);

    let rows = data || [];
    if (filters.location) {
        rows = rows.filter((r: any) => (r.driver_locations || []).some((l: any) => l.location_slug === filters.location));
    }
    return rows;
}

export async function getDriverDetailForAdmin(id: string) {
    const { data: driver, error } = await supabaseAdmin.from('drivers').select(DRIVER_COLUMNS).eq('id', id).maybeSingle();
    if (error || !driver) return null;

    const [{ data: vehicle }, { data: locations }, { data: services }, { data: documents }] = await Promise.all([
        supabaseAdmin.from('driver_vehicles').select('*').eq('driver_id', id).maybeSingle(),
        supabaseAdmin.from('driver_locations').select('location_slug').eq('driver_id', id),
        supabaseAdmin.from('driver_services').select('service_slug').eq('driver_id', id),
        supabaseAdmin.from('driver_documents').select('*').eq('driver_id', id).order('uploaded_at', { ascending: false }),
    ]);

    return {
        driver,
        vehicle: vehicle || null,
        locations: (locations || []).map(l => l.location_slug),
        services: (services || []).map(s => s.service_slug),
        documents: documents || [],
    };
}

function onboardingLinkUrl(token: string): string {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://taxiserviceksa.com';
    return `${base}/driver/onboarding/${token}`;
}

export async function approveDriver(id: string, adminEmail: string): Promise<{ ok: true; slug: string } | { ok: false; error: string }> {
    const { data: driver } = await supabaseAdmin.from('drivers').select('display_name, full_name, email, slug').eq('id', id).maybeSingle();
    if (!driver) return { ok: false, error: 'Driver not found' };

    const slug = driver.slug || await generateUniqueSlug(driver.display_name || driver.full_name || 'driver');

    const { error } = await supabaseAdmin
        .from('drivers')
        .update({
            onboarding_status: 'APPROVED',
            approved_at: new Date().toISOString(),
            reviewed_by: adminEmail,
            slug,
            suspended_at: null,
        })
        .eq('id', id);

    if (error) return { ok: false, error: error.message };

    await sendDriverApprovedEmail({ full_name: driver.display_name || driver.full_name || 'Driver', email: driver.email, slug });
    return { ok: true, slug };
}

export async function rejectDriver(id: string, adminEmail: string, reason?: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const { data: driver } = await supabaseAdmin.from('drivers').select('display_name, full_name, email').eq('id', id).maybeSingle();
    if (!driver) return { ok: false, error: 'Driver not found' };

    const { error } = await supabaseAdmin
        .from('drivers')
        .update({ onboarding_status: 'REJECTED', reviewed_by: adminEmail })
        .eq('id', id);
    if (error) return { ok: false, error: error.message };

    await sendDriverRejectedEmail({ full_name: driver.display_name || driver.full_name || 'Driver', email: driver.email }, reason);
    return { ok: true };
}

export async function requestChangesForDriver(id: string, adminEmail: string, feedback: string): Promise<{ ok: true } | { ok: false; error: string }> {
    if (!feedback?.trim()) return { ok: false, error: 'Feedback is required when requesting changes.' };

    const { data: driver } = await supabaseAdmin.from('drivers').select('display_name, full_name, email, onboarding_token').eq('id', id).maybeSingle();
    if (!driver) return { ok: false, error: 'Driver not found' };

    const { error } = await supabaseAdmin
        .from('drivers')
        .update({ onboarding_status: 'CHANGES_REQUESTED', changes_requested_feedback: feedback, reviewed_by: adminEmail })
        .eq('id', id);
    if (error) return { ok: false, error: error.message };

    if (driver.onboarding_token) {
        await sendChangesRequestedEmail(
            { full_name: driver.display_name || driver.full_name || 'Driver', email: driver.email },
            feedback,
            onboardingLinkUrl(driver.onboarding_token)
        );
    }
    return { ok: true };
}

export async function suspendDriver(id: string, adminEmail: string, reason?: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const { data: driver } = await supabaseAdmin.from('drivers').select('display_name, full_name, email').eq('id', id).maybeSingle();
    if (!driver) return { ok: false, error: 'Driver not found' };

    const { error } = await supabaseAdmin
        .from('drivers')
        .update({ onboarding_status: 'SUSPENDED', suspended_at: new Date().toISOString(), reviewed_by: adminEmail })
        .eq('id', id);
    if (error) return { ok: false, error: error.message };

    await sendDriverSuspendedEmail({ full_name: driver.display_name || driver.full_name || 'Driver', email: driver.email }, reason);
    return { ok: true };
}

export async function saveAdminNotes(id: string, notes: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const { error } = await supabaseAdmin.from('drivers').update({ admin_notes: notes }).eq('id', id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
}

// ---------------------------------------------------------------------------
// Public reads (approved-only, used by Server Components — never exposed
// to the browser via the anon client)
// ---------------------------------------------------------------------------

const PUBLIC_DRIVER_COLUMNS = `
    id, display_name, slug, profile_photo_url, bio, languages, years_experience,
    availability, approved_at,
    driver_vehicles(make, model, year, category, color, passenger_capacity, luggage_capacity, photos),
    driver_locations(location_slug),
    driver_services(service_slug)
`;

export async function getApprovedDriversForLocation(locationSlug: string, limit = 6) {
    const { data, error } = await supabaseAdmin
        .from('drivers')
        .select(PUBLIC_DRIVER_COLUMNS)
        .eq('onboarding_status', 'APPROVED')
        .order('approved_at', { ascending: false });

    if (error || !data) return [];
    return data
        .filter((d: any) => (d.driver_locations || []).some((l: any) => l.location_slug === locationSlug))
        .slice(0, limit);
}

export interface DirectoryFilters {
    location?: string;
    vehicleCategory?: string;
    service?: string;
}

export async function listApprovedDrivers(filters: DirectoryFilters) {
    const { data, error } = await supabaseAdmin
        .from('drivers')
        .select(PUBLIC_DRIVER_COLUMNS)
        .eq('onboarding_status', 'APPROVED')
        .order('approved_at', { ascending: false });

    if (error || !data) return [];

    return data.filter((d: any) => {
        if (filters.location && !(d.driver_locations || []).some((l: any) => l.location_slug === filters.location)) return false;
        if (filters.service && !(d.driver_services || []).some((s: any) => s.service_slug === filters.service)) return false;
        if (filters.vehicleCategory && firstVehicle(d)?.category !== filters.vehicleCategory) return false;
        return true;
    });
}

export async function getApprovedDriverBySlug(slug: string) {
    const { data, error } = await supabaseAdmin
        .from('drivers')
        .select(PUBLIC_DRIVER_COLUMNS)
        .eq('slug', slug)
        .eq('onboarding_status', 'APPROVED')
        .maybeSingle();

    if (error || !data) return null;
    return data;
}
