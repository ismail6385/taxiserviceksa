// Customers see a short booking ref: the first 8 characters of the booking's
// UUID (e.g. "480e03df" from 480e03df-6ac7-...). Postgres cannot run LIKE /
// ILIKE on a uuid column ("operator does not exist: uuid ~~* unknown"), so a
// prefix search is done as a range instead:
//   480e03df-0000-0000-0000-000000000000 <= id <= 480e03df-ffff-ffff-ffff-ffffffffffff
// Returns null for a ref that is not hex (nothing can match it).
export function uuidPrefixRange(ref: string): { lo: string; hi: string } | null {
    const hex = String(ref || '').toLowerCase().replace(/[^0-9a-f]/g, '').slice(0, 32);
    if (hex.length < 4) return null;
    const fmt = (h: string) => `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`;
    return { lo: fmt(hex.padEnd(32, '0')), hi: fmt(hex.padEnd(32, 'f')) };
}
