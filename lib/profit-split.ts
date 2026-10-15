// Owner and driver share each trip's profit equally.
// Profit = fare (total_price) - driver_cost (everything spent on the trip).
export const DRIVER_PROFIT_SHARE = 0.5;

export function profitSplit(fare?: number | null, cost?: number | null) {
    if (!fare || cost === null || cost === undefined) return null;
    const round = (n: number) => Math.round(n * 100) / 100;
    const profit = round(Number(fare) - Number(cost));
    const driverShare = round(profit * DRIVER_PROFIT_SHARE);
    return { profit, driverShare, ownerShare: round(profit - driverShare) };
}

/** True when a Supabase/PostgREST error means the driver_cost column has not been added yet. */
export const isMissingCostColumn = (err?: { code?: string; message?: string } | null) =>
    !!err && (err.code === '42703' || /driver_cost/.test(err.message || ''));
