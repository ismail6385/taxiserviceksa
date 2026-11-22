// Several vehicle quotes for the SAME trip on one booking (e.g. Sedan
// 1,250 SAR vs Tahoe 1,500 SAR). Stored as structured JSON in
// bookings.vehicle_options (see add_booking_vehicle_options.sql); null/empty
// means an ordinary single-vehicle booking, which keeps using vehicle_type +
// total_price exactly as before.
//
// When the admin marks an option Selected, its vehicle/price/currency are
// also copied onto vehicle_type / total_price / currency (applySelectedOption)
// so every existing screen (invoice, receipt, driver message, reports) works
// without knowing about options. The other options stay for reference.

export type VehicleOptionTrip = 'one_way' | 'round_trip';

export interface VehicleOption {
    id: string;
    vehicle: string;
    price: number;
    currency: string;
    trip: VehicleOptionTrip;
    notes?: string | null;
    selected?: boolean;
}

export const TRIP_LABEL: Record<VehicleOptionTrip, string> = {
    one_way: 'One Way',
    round_trip: 'Round Trip',
};

export const newOptionId = () => Math.random().toString(36).slice(2, 10);

/** Tolerant reader for whatever is stored (null, old/partial rows). */
export function readVehicleOptions(value: unknown): VehicleOption[] {
    if (!Array.isArray(value)) return [];
    return value
        .filter(v => v && typeof v === 'object')
        .map((v: Record<string, unknown>) => ({
            id: String(v.id || newOptionId()),
            vehicle: String(v.vehicle ?? '').trim(),
            price: Number(v.price) || 0,
            currency: String(v.currency || 'SAR').toUpperCase(),
            trip: (v.trip === 'round_trip' ? 'round_trip' : 'one_way') as VehicleOptionTrip,
            notes: v.notes ? String(v.notes) : null,
            selected: !!v.selected,
        }))
        .filter(o => o.vehicle);
}

/** Drop blank rows before saving; null when nothing is left. */
export function cleanVehicleOptions(options: VehicleOption[] | null | undefined): VehicleOption[] | null {
    const clean = readVehicleOptions(options);
    // At most one selected option.
    let seen = false;
    for (const o of clean) {
        if (o.selected && !seen) seen = true;
        else o.selected = false;
    }
    return clean.length ? clean : null;
}

export const selectedOption = (options: VehicleOption[]) => options.find(o => o.selected) || null;

/** Mark one option selected (or none with null) and mirror it onto the
 *  booking's main vehicle/price fields. */
export function applySelectedOption<T extends { vehicle_type?: string; total_price?: number | null; currency?: string | null }>(
    booking: T,
    options: VehicleOption[],
    selectedId: string | null,
): T & { vehicle_options: VehicleOption[] } {
    const next = options.map(o => ({ ...o, selected: o.id === selectedId }));
    const chosen = next.find(o => o.selected);
    return {
        ...booking,
        vehicle_options: next,
        ...(chosen ? { vehicle_type: chosen.vehicle, total_price: chosen.price, currency: chosen.currency } : {}),
    };
}

/** Server-side: the fields to write for a booking's options. Cleans them,
 *  and when one is selected, mirrors it onto vehicle_type/total_price/currency
 *  so the main fields can never disagree with the chosen option. */
export function vehicleOptionFields(options: unknown): Record<string, unknown> {
    const clean = cleanVehicleOptions(readVehicleOptions(options));
    const chosen = clean ? selectedOption(clean) : null;
    return {
        vehicle_options: clean,
        ...(chosen ? { vehicle_type: chosen.vehicle, total_price: chosen.price, currency: chosen.currency } : {}),
    };
}

export const formatOptionPrice = (o: Pick<VehicleOption, 'price' | 'currency'>) =>
    `${o.currency} ${Number(o.price).toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

/** Plain-text list for WhatsApp messages. */
export function vehicleOptionsText(options: VehicleOption[]): string {
    return options
        .map((o, i) => `${i + 1}. ${o.vehicle} — ${TRIP_LABEL[o.trip]} — ${formatOptionPrice(o)}${o.selected ? ' ✅ (selected)' : ''}${o.notes ? ` (${o.notes})` : ''}`)
        .join('\n');
}
