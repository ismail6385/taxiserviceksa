// Columns added by one-time SQL files the owner may not have run yet. A
// booking write must never fail because of them: if the database rejects
// the write for a missing optional column, it is retried without it.
// Passenger nationality is then kept in special_requests so it is not lost.
const OPTIONAL = ['passenger_nationality', 'driver_cost', 'vat_added', 'vehicle_options'] as const;

const BLANK_TO_NULL = [
    'total_price', 'deposit_amount', 'driver_cost', 'distance_km', 'duration_hours',
    'passengers', 'luggage', 'child_seats', 'item_count',
    'pickup_date', 'pickup_time', 'trip_end_date', 'return_date', 'return_time',
    'commission_rate', 'contract_id', 'driver_arrived_at', 'trip_started_at',
];

const NUMERIC = new Set(['total_price', 'deposit_amount', 'driver_cost', 'commission_rate']);
const INTEGER = new Set(['distance_km', 'duration_hours', 'passengers', 'luggage', 'child_seats', 'item_count']);
const NOT_NULL_TEXT = ['customer_name', 'customer_email', 'customer_phone', 'pickup_location', 'destination', 'vehicle_type'];

type Result<T> = { data: T | null; error: { code?: string; message?: string } | null };

export async function writeWithOptionalColumns<T>(
    payload: Record<string, unknown>,
    run: (p: Record<string, unknown>) => PromiseLike<Result<T>>,
): Promise<Result<T>> {
    // Number/date columns reject "" ("invalid input syntax for type
    // numeric"), which is what an emptied form box sends. Save as blank.
    let current = { ...payload };
    for (const key of BLANK_TO_NULL) {
        const v = current[key];
        if (typeof v === 'number' && !Number.isFinite(v)) current[key] = null;
        if (typeof v !== 'string') continue;
        if (!v.trim()) { current[key] = null; continue; }
        // "1,500" / "1500 SAR" in a number column: keep only the number.
        if (NUMERIC.has(key) || INTEGER.has(key)) {
            const n = Number(v.replace(/[^\d.-]/g, ''));
            if (Number.isFinite(n)) current[key] = n;
        }
    }
    // Integer columns reject 95.5 km / 1.5 hours.
    for (const key of Array.from(INTEGER)) {
        const v = current[key];
        if (typeof v === 'number' && !Number.isInteger(v)) current[key] = key === 'duration_hours' ? Math.ceil(v) : Math.round(v);
    }
    // NOT NULL text columns the admin form allows to be left out.
    for (const key of NOT_NULL_TEXT) {
        if (key in current && current[key] == null) current[key] = '';
    }
    for (let attempt = 0; attempt <= OPTIONAL.length; attempt++) {
        const res = await run(current);
        const err = res.error;
        const missing = err && (err.code === '42703' || err.code === 'PGRST204')
            ? OPTIONAL.find(c => (err.message || '').includes(c) && c in current)
            : undefined;
        if (!missing) return res;
        const { [missing]: value, ...rest } = current;
        current = rest;
        if (missing === 'passenger_nationality' && typeof value === 'string' && value.trim()) {
            const line = `Passenger nationality: ${value.trim()}`;
            const sr = typeof current.special_requests === 'string' ? current.special_requests : '';
            if (!sr.includes(line)) current.special_requests = sr ? `${sr}\n${line}` : line;
        }
    }
    return run(current);
}
