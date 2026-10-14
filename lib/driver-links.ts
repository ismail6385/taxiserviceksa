import { createHmac, timingSafeEqual } from 'node:crypto';

// Each driver's trip-sheet link carries an HMAC of their slug, so the URL
// can't be guessed or edited to show another driver's trips. The secret
// never leaves the server (this repo is public). DRIVER_LINK_SECRET can be
// set to rotate every link at once; until then the service-role key is used.
function secret() {
    const s = process.env.DRIVER_LINK_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!s) throw new Error('DRIVER_LINK_SECRET / SUPABASE_SERVICE_ROLE_KEY is not set');
    return s;
}

export function driverLinkToken(slug: string) {
    return createHmac('sha256', secret()).update(`driver-trips:${slug}`).digest('base64url').slice(0, 24);
}

export function isValidDriverLinkToken(slug: string, token: string) {
    const expected = Buffer.from(driverLinkToken(slug));
    const given = Buffer.from(token);
    return expected.length === given.length && timingSafeEqual(expected, given);
}

export const driverLinkPath = (slug: string) => `/my-trips/${slug}/${driverLinkToken(slug)}/`;
