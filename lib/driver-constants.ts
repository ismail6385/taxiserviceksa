import { cities } from '@/data/cities';

/**
 * Canonical taxonomy for the driver onboarding + directory system.
 * Vehicle categories intentionally match VEHICLE_TYPES in
 * app/(main)/admin/fleet/page.tsx exactly, so this doesn't introduce a
 * second, conflicting vehicle-type vocabulary for the site.
 */
export const VEHICLE_CATEGORIES = [
    'Sedan',
    'Luxury Sedan',
    'SUV',
    'Luxury SUV',
    'Van',
    'Minibus',
    'Bus',
    'Limousine',
] as const;

export type VehicleCategory = typeof VEHICLE_CATEGORIES[number];

export interface DriverServiceOption {
    slug: string;
    label: string;
}

export const DRIVER_SERVICES: DriverServiceOption[] = [
    { slug: 'airport-transfers', label: 'Airport Transfers' },
    { slug: 'intercity-transfers', label: 'Intercity Transfers' },
    { slug: 'local-chauffeur', label: 'Local Chauffeur' },
    { slug: 'hourly-chauffeur', label: 'Hourly Chauffeur' },
    { slug: 'ziyarat-tours', label: 'Ziyarat Tours' },
    { slug: 'corporate-transfers', label: 'Corporate Transfers' },
    { slug: 'family-transfers', label: 'Family Transfers' },
    { slug: 'long-distance-transfers', label: 'Long-Distance Transfers' },
    { slug: 'cross-border-transfers', label: 'Cross-Border Transfers' },
];

export function driverServiceLabel(slug: string): string {
    return DRIVER_SERVICES.find(s => s.slug === slug)?.label || slug;
}

export interface DriverLocationOption {
    slug: string;
    name: string;
}

/** Reuses the site's existing public location taxonomy (data/cities.ts) —
 *  the same slugs that back /locations/[city] pages — so a driver's
 *  service areas always map onto a real, existing location page. */
export const DRIVER_LOCATIONS: DriverLocationOption[] = Object.values(cities)
    .map(c => ({ slug: c.slug, name: c.name }))
    .sort((a, b) => a.name.localeCompare(b.name));

export function driverLocationName(slug: string): string {
    return DRIVER_LOCATIONS.find(l => l.slug === slug)?.name || slug;
}

export const LANGUAGE_OPTIONS = [
    'English',
    'Arabic',
    'Urdu',
    'Hindi',
    'Bengali',
    'Tagalog',
    'French',
] as const;

export const DRIVER_TYPES = [
    'Independent Driver-Partner',
    'Corporate Partner',
] as const;

export const AVAILABILITY_OPTIONS = [
    'Full-time',
    'Part-time',
    'Weekends Only',
    'On-Demand',
] as const;

export interface PhotoSlotDef {
    key: string;
    label: string;
    required: boolean;
}

export const VEHICLE_PHOTO_SLOTS: PhotoSlotDef[] = [
    { key: 'front', label: 'Vehicle Front', required: true },
    { key: 'rear', label: 'Vehicle Rear', required: true },
    { key: 'left', label: 'Vehicle Left Side', required: true },
    { key: 'right', label: 'Vehicle Right Side', required: true },
    { key: 'interior_front', label: 'Interior Front', required: true },
    { key: 'interior_rear', label: 'Interior Rear', required: true },
    { key: 'boot', label: 'Luggage / Boot Space', required: true },
    { key: 'dashboard', label: 'Dashboard', required: false },
    { key: 'additional', label: 'Additional Vehicle Photo', required: false },
];

export const REQUIRED_PHOTO_SLOTS = VEHICLE_PHOTO_SLOTS.filter(s => s.required).map(s => s.key);

export interface DocumentTypeDef {
    key: string;
    label: string;
}

export const DOCUMENT_TYPES: DocumentTypeDef[] = [
    { key: 'id_license', label: 'Driver ID / License' },
    { key: 'vehicle_registration', label: 'Vehicle Registration' },
    { key: 'insurance', label: 'Insurance / Authorization Document' },
];

export const ONBOARDING_STATUSES = [
    'DRAFT',
    'PENDING_REVIEW',
    'CHANGES_REQUESTED',
    'APPROVED',
    'REJECTED',
    'SUSPENDED',
] as const;

export type OnboardingStatus = typeof ONBOARDING_STATUSES[number];

export const ONBOARDING_STATUS_LABELS: Record<OnboardingStatus, string> = {
    DRAFT: 'Draft',
    PENDING_REVIEW: 'Pending Review',
    CHANGES_REQUESTED: 'Changes Requested',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    SUSPENDED: 'Suspended',
};

export const ONBOARDING_TOKEN_TTL_DAYS = 30;

/** PostgREST embeds a to-one relation (driver_vehicles.driver_id is UNIQUE)
 *  inconsistently as either an object or a single-item array depending on
 *  version — normalize once here so every UI component can just call
 *  firstVehicle(driver) instead of re-deriving this each time. Lives in
 *  this pure constants module (not driverOnboardingService.ts) so
 *  presentational components like DriverCard don't have to pull in the
 *  service-role Supabase client just to read a shape helper. */
export function firstVehicle(driver: any): any | null {
    const v = driver?.driver_vehicles;
    if (!v) return null;
    return Array.isArray(v) ? (v[0] || null) : v;
}

export const DRIVER_STORAGE_BUCKETS = {
    profilePhotos: 'driver-profile-photos',
    vehiclePhotos: 'driver-vehicle-photos',
    documents: 'driver-documents',
} as const;
