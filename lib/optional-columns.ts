// Columns added by one-time SQL files the owner may not have run yet. A
// booking write must never fail because of them: if the database rejects
// the write for a missing optional column, it is retried without it.
// Passenger nationality is then kept in special_requests so it is not lost.
const OPTIONAL = ['passenger_nationality', 'driver_cost'] as const;

type Result<T> = { data: T | null; error: { code?: string; message?: string } | null };

export async function writeWithOptionalColumns<T>(
    payload: Record<string, unknown>,
    run: (p: Record<string, unknown>) => PromiseLike<Result<T>>,
): Promise<Result<T>> {
    let current = { ...payload };
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
