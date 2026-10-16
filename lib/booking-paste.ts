// Turns a pasted "Field: value" booking summary (written by hand or by
// ChatGPT from a WhatsApp chat) into admin new-booking fields.
// The template below is what the owner asks ChatGPT to produce.

export const BOOKING_PASTE_TEMPLATE = `Name:
Phone:
Email:
Pickup:
Drop-off:
Date:
Time:
Vehicle:
Passengers:
Bags:
Flight:
Nationality:
Return trip: No
Return date:
Return time:
Price:
Currency: SAR
Payment: Cash to Driver
Driver:
Notes:`;

export const CHATGPT_BOOKING_PROMPT = `Read the WhatsApp chat below and fill this booking form. Rules:
- Keep exactly these field names, one per line, in this order.
- Date as YYYY-MM-DD. Time as 24-hour HH:MM.
- Phone with country code, e.g. +966 5x xxx xxxx.
- Leave a field empty if the chat does not say it. Do not guess.
- Return trip: Yes or No.
- Put anything else useful (child seats, extra stops, waiting) in Notes.
- Reply with the form only, nothing else.

${BOOKING_PASTE_TEMPLATE}

WhatsApp chat:
`;

export const PASTE_PLACEHOLDER = `One per line, in this order (use - to skip one):
Customer name
Phone
Email
Pickup
Drop-off
Date (20/10/2026)
Time (2:30 PM)
Vehicle
Passengers
Bags
Price
Notes`;

export interface PasteResult {
    updates: Record<string, unknown>;
    filled: string[];
    unread: string[];
}

const KEYS: Record<string, string> = {
    name: 'customer_name', customername: 'customer_name', customer: 'customer_name', fullname: 'customer_name', clientname: 'customer_name', naam: 'customer_name', guest: 'customer_name', passengername: 'customer_name',
    phone: 'customer_phone', mobile: 'customer_phone', whatsapp: 'customer_phone', contact: 'customer_phone', number: 'customer_phone', phonenumber: 'customer_phone', customerphone: 'customer_phone',
    email: 'customer_email', emailaddress: 'customer_email',
    pickup: 'pickup_location', pickuplocation: 'pickup_location', from: 'pickup_location', pickuppoint: 'pickup_location',
    dropoff: 'destination', drop: 'destination', destination: 'destination', to: 'destination', dropofflocation: 'destination', droplocation: 'destination',
    date: 'pickup_date', pickupdate: 'pickup_date', traveldate: 'pickup_date', tareekh: 'pickup_date',
    time: 'pickup_time', pickuptime: 'pickup_time', waqt: 'pickup_time',
    vehicle: 'vehicle_type', car: 'vehicle_type', vehicletype: 'vehicle_type', gaari: 'vehicle_type', gari: 'vehicle_type',
    passengers: 'passengers', pax: 'passengers', persons: 'passengers', people: 'passengers', log: 'passengers', adults: 'passengers',
    bags: 'luggage', luggage: 'luggage', suitcases: 'luggage',
    childseats: 'child_seats', childseat: 'child_seats',
    nationality: 'passenger_nationality', nationalities: 'passenger_nationality', passengernationality: 'passenger_nationality',
    flight: 'flight_number', flightnumber: 'flight_number', flightno: 'flight_number',
    return: 'has_return_trip', returntrip: 'has_return_trip', roundtrip: 'has_return_trip',
    returndate: 'return_date', returntime: 'return_time',
    returnpickup: 'return_pickup_location', returnfrom: 'return_pickup_location',
    returndropoff: 'return_destination', returnto: 'return_destination',
    hours: 'duration_hours', duration: 'duration_hours', hourlyhours: 'duration_hours',
    price: 'total_price', fare: 'total_price', amount: 'total_price', total: 'total_price', totalprice: 'total_price', kiraya: 'total_price',
    currency: 'currency',
    payment: 'payment_method', paymentmethod: 'payment_method',
    driver: 'driver_name', drivername: 'driver_name',
    notes: 'special_requests', note: 'special_requests', specialrequests: 'special_requests', remarks: 'special_requests', details: 'special_requests',
};

const LABELS: Record<string, string> = {
    customer_name: 'Name', customer_phone: 'Phone', customer_email: 'Email', pickup_location: 'Pickup', destination: 'Drop-off',
    pickup_date: 'Date', pickup_time: 'Time', vehicle_type: 'Vehicle', passengers: 'Passengers', luggage: 'Bags', child_seats: 'Child seats',
    flight_number: 'Flight', passenger_nationality: 'Nationality', has_return_trip: 'Return trip', return_date: 'Return date', return_time: 'Return time',
    return_pickup_location: 'Return pickup', return_destination: 'Return drop-off', duration_hours: 'Hours', total_price: 'Price',
    currency: 'Currency', payment_method: 'Payment', driver_name: 'Driver', special_requests: 'Notes',
};

const EMPTY = /^(-+|n\/?a|none|nil|no info|not (given|mentioned|specified)|unknown|\?+)$/i;
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const pad = (n: number) => String(n).padStart(2, '0');

export function parseDate(v: string): string | null {
    const s = v.trim();
    let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
    if (m) return `${m[1]}-${pad(+m[2])}-${pad(+m[3])}`;
    m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{2,4})/); // day first, as written in KSA / Pakistan
    if (m) return `${m[3].length === 2 ? '20' + m[3] : m[3]}-${pad(+m[2])}-${pad(+m[1])}`;
    m = s.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]{3})[a-z]*,?\s+(\d{4})/i) || null;
    if (m) { const mo = MONTHS.indexOf(m[2].toLowerCase()); if (mo >= 0) return `${m[3]}-${pad(mo + 1)}-${pad(+m[1])}`; }
    m = s.match(/([a-z]{3})[a-z]*\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})/i);
    if (m) { const mo = MONTHS.indexOf(m[1].toLowerCase()); if (mo >= 0) return `${m[3]}-${pad(mo + 1)}-${pad(+m[2])}`; }
    return null;
}

export function parseTime(v: string): string | null {
    const m = v.trim().match(/^(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm|a\.m\.|p\.m\.)?/i);
    if (!m) return null;
    let h = +m[1];
    const min = m[2] ? +m[2] : 0;
    const ap = m[3]?.toLowerCase().replace(/\./g, '');
    if (ap === 'pm' && h < 12) h += 12;
    if (ap === 'am' && h === 12) h = 0;
    if (!m[2] && !ap) return null; // a bare "3" is too ambiguous
    if (h > 23 || min > 59) return null;
    return `${pad(h)}:${pad(min)}`;
}

const VEHICLE_HINTS: [RegExp, string][] = [
    [/camry|sedan/i, 'Toyota Camry'],
    [/yukon|gmc|tahoe|suburban|denali/i, 'GMC Yukon XL / Denali'],
    [/fortuner/i, 'Toyota Fortuner'],
    [/rav ?4/i, 'Toyota RAV4 Hybrid 2025'],
    [/staria/i, 'Hyundai Staria VIP'],
    [/starex|h-?1\b/i, 'Hyundai Starex'],
    [/hiace/i, 'Toyota Hiace'],
    [/coaster/i, 'Toyota Coaster'],
    [/s-?class/i, 'Mercedes S-Class'],
    [/bmw|7 ?series/i, 'BMW 7 Series'],
    [/sprinter/i, 'Mercedes Sprinter'],
    [/escalade|cadillac/i, 'Cadillac Escalade'],
    [/vito/i, 'Mercedes Vito'],
    [/taurus/i, 'Ford Taurus 2025'],
    [/veloz/i, 'Toyota Veloz 2024'],
    [/genesis|g80/i, 'Genesis G80 VIP'],
    [/\bbus\b/i, 'Luxurious Bus'],
];

const PAYMENTS: [RegExp, string][] = [
    [/cash/i, 'Cash to Driver'],
    [/card|visa|master/i, 'Credit Card'],
    [/bank|transfer|iban/i, 'Bank Transfer'],
    [/online|link|stc|apple/i, 'Online Payment'],
    [/free|complimentary/i, 'Complimentary'],
];

const num = (v: string) => {
    const m = v.replace(/,/g, '').match(/\d+(\.\d+)?/);
    return m ? Number(m[0]) : null;
};

const isPhone = (v: string) => /^\+?[\d\s\-()]{8,}$/.test(v) && v.replace(/\D/g, '').length >= 8;
const keyOf = (line: string) => {
    const m = line.match(/^([^:：]{1,30})[:：]/);
    return m ? KEYS[m[1].toLowerCase().replace(/[^a-z]/g, '')] : undefined;
};

// No labels at all: the owner pastes the details one per line in the order
// they fill the form (name, phone, email, pickup, drop-off, date, time, ...).
// Lines that are obviously a phone, email, date, time, vehicle or number go to
// that field wherever they appear; the remaining text fills name, pickup and
// drop-off in order, and anything after that becomes notes.
const UNLABELED_ORDER = ['customer_name', 'customer_phone', 'customer_email', 'pickup_location', 'destination', 'pickup_date', 'pickup_time', 'vehicle_type', 'passengers', 'luggage', 'total_price'];

function parseUnlabeled(lines: string[], driverNames: string[]): PasteResult {
    const updates: Record<string, unknown> = {};
    const skipped = new Set<string>();
    let textSlots = ['customer_name', 'pickup_location', 'destination'];
    let numberSlots = ['passengers', 'luggage'];
    const notes: string[] = [];
    for (const line of lines) {
        const v = line.trim();
        if (!v || EMPTY.test(v)) {
            // "-" marks the next field in form order as empty, so a skipped
            // email doesn't push the pickup address into the wrong box.
            const skip = UNLABELED_ORDER.find(f => updates[f] === undefined && !skipped.has(f));
            if (skip) {
                skipped.add(skip);
                textSlots = textSlots.filter(f => f !== skip);
                numberSlots = numberSlots.filter(f => f !== skip);
            }
            continue;
        }
        const email = v.match(/\S+@\S+\.\S+/);
        const date = parseDate(v);
        const time = parseTime(v);
        const vehicle = VEHICLE_HINTS.find(([re]) => re.test(v));
        const driver = driverNames.find(n => n.trim().toLowerCase() === v.toLowerCase());
        const n = /^\d[\d,.]*\s*(sar|aed|qar|bhd|kwd|omr|usd)?$/i.test(v) ? Number(v.replace(/[^\d.]/g, '')) : null;
        if (email && !updates.customer_email) updates.customer_email = email[0];
        else if (isPhone(v) && !updates.customer_phone) updates.customer_phone = v;
        else if (date && !updates.pickup_date) updates.pickup_date = date;
        else if (time && !updates.pickup_time && v.length <= 10) updates.pickup_time = time;
        else if (driver && !updates.driver_name) updates.driver_name = driver;
        else if (vehicle && !updates.vehicle_type && v.length <= 40) updates.vehicle_type = vehicle[1];
        else if (n != null && n >= 100 && !updates.total_price) {
            updates.total_price = n;
            const c = v.match(/[a-z]{3}$/i);
            if (c) updates.currency = c[0].toUpperCase();
        }
        else if (n != null && numberSlots.length) updates[numberSlots.shift()!] = Math.round(n);
        else if (textSlots.length) updates[textSlots.shift()!] = v;
        else notes.push(v);
    }
    if (notes.length) updates.special_requests = notes.join('. ');
    const filled = Object.keys(updates).filter(k => LABELS[k]).map(k => LABELS[k]);
    return { updates, filled, unread: [] };
}

export function parseBookingPaste(text: string, driverNames: string[] = []): PasteResult {
    const lines = text.split(/\r?\n/).map(l => l.replace(/^[\s*•>#]+/, '').replace(/\*+/g, '').trim()).filter(Boolean);
    if (!lines.some(keyOf)) return parseUnlabeled(lines, driverNames);

    const updates: Record<string, unknown> = {};
    const unread: string[] = [];
    let lastField: string | null = null;

    for (const raw of text.split(/\r?\n/)) {
        const line = raw.replace(/^[\s*•\-–>#]+/, '').replace(/\*+/g, '').trim();
        if (!line) continue;
        const m = line.match(/^([^:：]{1,30})[:：]\s*(.*)$/);
        const field = m ? KEYS[m[1].toLowerCase().replace(/[^a-z]/g, '')] : undefined;
        if (!m || !field) {
            // A wrapped line continues the previous free-text field (usually Notes or an address).
            if (lastField && ['special_requests', 'pickup_location', 'destination'].includes(lastField) && !m) {
                updates[lastField] = `${updates[lastField]} ${line}`.trim();
            } else if (!/^booking/i.test(line)) {
                unread.push(line);
            }
            continue;
        }
        lastField = field;
        const v = m[2].trim();
        if (!v || EMPTY.test(v)) continue;

        switch (field) {
            case 'pickup_date': case 'return_date': {
                const d = parseDate(v);
                if (d) updates[field] = d; else unread.push(line);
                break;
            }
            case 'pickup_time': case 'return_time': {
                const t = parseTime(v);
                if (t) updates[field] = t; else unread.push(line);
                break;
            }
            case 'passengers': case 'luggage': case 'child_seats': case 'duration_hours': {
                const n = num(v);
                if (n != null) updates[field] = Math.round(n); else unread.push(line);
                break;
            }
            case 'total_price': {
                const n = num(v);
                if (n != null) updates.total_price = n; else unread.push(line);
                const c = v.match(/\b(SAR|AED|QAR|BHD|KWD|OMR|USD|PKR)\b/i);
                if (c && !updates.currency) updates.currency = c[1].toUpperCase();
                break;
            }
            case 'currency': {
                const c = v.match(/[a-z]{3}/i);
                if (c) updates.currency = c[0].toUpperCase();
                break;
            }
            case 'has_return_trip':
                updates.has_return_trip = /^(y|yes|haan|han|ji|true|1|return)/i.test(v);
                break;
            case 'vehicle_type':
                updates.vehicle_type = VEHICLE_HINTS.find(([re]) => re.test(v))?.[1] || v;
                break;
            case 'payment_method':
                updates.payment_method = PAYMENTS.find(([re]) => re.test(v))?.[1] || v;
                break;
            case 'driver_name':
                updates.driver_name = driverNames.find(n => n.trim().toLowerCase() === v.toLowerCase()) || v;
                break;
            case 'customer_email':
                if (/\S+@\S+\.\S+/.test(v)) updates.customer_email = v.match(/\S+@\S+\.\S+/)![0]; else unread.push(line);
                break;
            default:
                updates[field] = v;
        }
    }

    if (updates.duration_hours) updates.trip_type = 'hourly';
    if (updates.has_return_trip) {
        updates.return_pickup_location ??= updates.destination ?? '';
        updates.return_destination ??= updates.pickup_location ?? '';
    }

    const filled = Object.keys(updates).filter(k => LABELS[k]).map(k => LABELS[k]);
    return { updates, filled, unread };
}
