// Every pickup date and time in this system is Saudi local time. "Today",
// "tomorrow" and "now" must therefore be worked out in Asia/Riyadh, not in
// the timezone of whoever has the page open (the owner works from Pakistan,
// 2 hours ahead; servers run on UTC). Riyadh has no daylight saving, so
// adding whole days in milliseconds is safe.
export const KSA_TZ = 'Asia/Riyadh';

/** Saudi date as YYYY-MM-DD, optionally shifted by whole days (e.g. 1 = tomorrow). */
export function ksaToday(offsetDays = 0): string {
    return new Date(Date.now() + offsetDays * 86_400_000).toLocaleDateString('en-CA', { timeZone: KSA_TZ });
}

/** Current Saudi time as HH:MM (24-hour), comparable with bookings.pickup_time. */
export function ksaNowTime(): string {
    return new Date().toLocaleTimeString('en-GB', { timeZone: KSA_TZ, hour: '2-digit', minute: '2-digit', hour12: false });
}

/** Shift a YYYY-MM-DD date by whole days or months without timezone drift. */
export function shiftIsoDate(iso: string, { days = 0, months = 0 }: { days?: number; months?: number }): string {
    const d = new Date(`${iso}T12:00:00Z`);
    if (months) d.setUTCMonth(d.getUTCMonth() + months);
    if (days) d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
}
