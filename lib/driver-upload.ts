import sharp from 'sharp';
import { supabaseAdmin } from './supabase-admin';
import { DRIVER_STORAGE_BUCKETS } from './driver-constants';

/**
 * Server-only upload helpers for the driver onboarding system. Follows the
 * same bucket-per-purpose pattern as blogService.uploadImage() (hardcoded
 * bucket name, no env var, no provisioning code — buckets must exist in
 * Supabase already, see the setup instructions in the final report), but
 * adds server-side compression (sharp is already a build-time dependency
 * in this repo; there was no runtime upload-compression path before this).
 */

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10MB raw upload cap
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const ALLOWED_DOC_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);

export class UploadError extends Error {}

function randomFileName(ext: string): string {
    return `${crypto.randomUUID()}.${ext}`;
}

/** Compresses/resizes a photo (max 1600px on the long edge, WebP) and
 *  uploads it to a PUBLIC bucket. Returns the public URL. */
export async function uploadDriverPhoto(
    file: File,
    bucket: typeof DRIVER_STORAGE_BUCKETS[keyof typeof DRIVER_STORAGE_BUCKETS],
    folder: string
): Promise<string> {
    if (file.size > MAX_UPLOAD_BYTES) {
        throw new UploadError('File is too large (max 10MB).');
    }
    if (!ALLOWED_TYPES.has(file.type)) {
        throw new UploadError('Only JPEG, PNG or WEBP images are allowed.');
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const optimized = await sharp(buffer)
        .rotate()
        .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 78 })
        .toBuffer();

    const path = `${folder}/${randomFileName('webp')}`;
    const { error } = await supabaseAdmin.storage.from(bucket).upload(path, optimized, {
        contentType: 'image/webp',
        upsert: true,
    });
    if (error) throw new UploadError(error.message);

    const { data } = supabaseAdmin.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
}

/** Uploads a verification document (image or PDF) to the PRIVATE documents
 *  bucket. No public URL is ever generated — admin viewing goes through
 *  createSignedDocumentUrl() below. */
export async function uploadDriverDocument(file: File, driverId: string): Promise<string> {
    if (file.size > MAX_UPLOAD_BYTES) {
        throw new UploadError('File is too large (max 10MB).');
    }
    if (!ALLOWED_DOC_TYPES.has(file.type)) {
        throw new UploadError('Only JPEG, PNG, WEBP or PDF files are allowed.');
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.type === 'application/pdf' ? 'pdf' : file.type.split('/')[1];
    const path = `${driverId}/${randomFileName(ext)}`;

    const { error } = await supabaseAdmin.storage
        .from(DRIVER_STORAGE_BUCKETS.documents)
        .upload(path, buffer, { contentType: file.type, upsert: true });
    if (error) throw new UploadError(error.message);

    return path; // stored path, not a public URL — private bucket
}

/** Admin-only: mints a short-lived signed URL to view a private document. */
export async function createSignedDocumentUrl(path: string, expiresInSeconds = 300): Promise<string | null> {
    const { data, error } = await supabaseAdmin.storage
        .from(DRIVER_STORAGE_BUCKETS.documents)
        .createSignedUrl(path, expiresInSeconds);
    if (error || !data) return null;
    return data.signedUrl;
}
