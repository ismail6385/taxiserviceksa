import { z } from 'zod';
import { REQUIRED_PHOTO_SLOTS, VEHICLE_CATEGORIES } from './driver-constants';

/**
 * Single source of truth for driver-onboarding validation — shared by the
 * public onboarding wizard (client-side step gating) and the
 * /api/driver-onboarding/[token] route (server-side, authoritative).
 * Mirrors the shape of lib/booking-validation.ts: plain shapes + a Zod
 * schema built from the same field definitions, plus toFieldErrors() so
 * client and server errors render identically.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const driverInfoShape = {
    full_name: z.string().min(2, 'Please enter your full name.'),
    display_name: z.string().min(2, 'Please enter a display name.'),
    phone_number: z.string().min(6, 'Please enter a valid phone number.'),
    whatsapp_number: z.string().optional().nullable(),
    email: z.string().refine(v => !v || EMAIL_RE.test(v), { message: 'Please enter a valid email address.' }).optional().nullable(),
    languages: z.array(z.string()).min(1, 'Select at least one language.'),
    years_experience: z.number().int().min(0, 'Enter years of experience.').optional().nullable(),
    driver_type: z.string().optional().nullable(),
    availability: z.string().optional().nullable(),
    bio: z.string().max(1000, 'Bio is too long.').optional().nullable(),
    additional_notes: z.string().max(1000).optional().nullable(),
};

export const vehicleInfoShape = {
    make: z.string().min(1, 'Vehicle make is required.'),
    model: z.string().min(1, 'Vehicle model is required.'),
    year: z.number().int().min(1990, 'Enter a valid year.').max(new Date().getFullYear() + 1, 'Enter a valid year.'),
    category: z.enum(VEHICLE_CATEGORIES as unknown as [string, ...string[]], { errorMap: () => ({ message: 'Select a vehicle category.' }) }),
    color: z.string().min(1, 'Vehicle color is required.'),
    passenger_capacity: z.number().int().min(1, 'Enter passenger capacity.'),
    luggage_capacity: z.number().int().min(0, 'Enter luggage capacity.'),
    registration_info: z.string().optional().nullable(),
    notes: z.string().max(1000).optional().nullable(),
};

export const driverInfoSchema = z.object(driverInfoShape);
export const vehicleInfoSchema = z.object(vehicleInfoShape);

export const locationsSchema = z.array(z.string()).min(1, 'Select at least one service area.');
export const servicesSchema = z.array(z.string()).min(1, 'Select at least one service.');

export interface PhotosInput {
    [slot: string]: { url: string; uploaded_at: string } | undefined;
}

/** Returns the required photo slot keys that are still missing. */
export function missingRequiredPhotos(photos: PhotosInput | null | undefined): string[] {
    const present = photos || {};
    return REQUIRED_PHOTO_SLOTS.filter(slot => !present[slot]?.url);
}

// Full submit-time validation (everything the driver wizard collects).
// Uses the same field shapes as the individual step schemas above so the
// per-step client validation and the final server-side submit check can
// never drift apart.
export const driverOnboardingSubmitSchema = z.object({
    ...driverInfoShape,
    locations: locationsSchema,
    services: servicesSchema,
    vehicle: vehicleInfoSchema,
});

export type DriverOnboardingSubmitInput = z.infer<typeof driverOnboardingSubmitSchema>;

/** Flattens a caught ZodError into a { field: message } map, matching
 *  toFieldErrors() in lib/booking-validation.ts. Nested paths (e.g.
 *  vehicle.make) are joined with '.'. */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
    const fieldErrors: Record<string, string> = {};
    for (const issue of error.issues) {
        const field = issue.path.join('.') || 'form';
        if (!fieldErrors[field]) {
            fieldErrors[field] = issue.message;
        }
    }
    return fieldErrors;
}
