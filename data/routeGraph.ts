// Groups every /routes/<origin>-<destination>/ page by its origin city so route
// pages can cross-link to other routes departing from the same place
// (e.g. "Other routes from Jeddah" on the Jeddah → Riyadh page).

export interface RouteLink {
    name: string;
    url: string;
    description: string;
}

interface RouteNode {
    slug: string;
    origin: string;
    destination: string;
    originLabel: string;
    destinationLabel: string;
}

// Pages that don't follow the plain "<origin>-<destination>" convention
// (hotel-specific, airport-specific, train-station, or superseded pages).
const EXCLUDED_SLUGS = new Set([
    'jeddah-makkah-old',
    'jeddah-to-dar-al-taqwa-madinah',
    'jeddah-to-fairmont-makkah',
    'jeddah-to-hilton-madinah',
    'jeddah-to-oberoi-madinah',
    'jeddah-to-pullman-makkah',
    'jeddah-to-swissotel-makkah',
    'jeddah-train-station-taxi',
    'madinah-to-jeddah-airport-departures',
    'madinah-train-station-taxi',
    'dammam-airport-to-khobar',
    'dammam-airport-to-kuwait',
    'khobar-to-dammam-airport',
    'kuwait-to-dammam-airport',
]);

const ORIGIN_TOKENS = [
    'abu-dhabi', 'tabuk', 'jeddah', 'madinah', 'makkah', 'riyadh', 'dammam',
    'alula', 'yanbu', 'taif', 'khobar', 'dubai', 'doha', 'kuwait', 'bahrain',
    'sharjah', 'muscat', 'amman',
].sort((a, b) => b.length - a.length);

const LABEL_OVERRIDES: Record<string, string> = {
    'abu-dhabi': 'Abu Dhabi',
    alula: 'AlUla',
    kaec: 'KAEC',
    neom: 'NEOM',
    'al-majmaah': "Al Majma'ah",
    'al-quwayiyah': "Al-Quway'iyah",
};

function prettify(token: string): string {
    if (LABEL_OVERRIDES[token]) return LABEL_OVERRIDES[token];
    return token
        .split('-')
        .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
        .join(' ');
}

function parseSlug(slug: string): { origin: string; destination: string } | null {
    for (const token of ORIGIN_TOKENS) {
        if (slug === token) continue;
        if (slug.startsWith(`${token}-`)) {
            return { origin: token, destination: slug.slice(token.length + 1) };
        }
    }
    return null;
}

// All route folder slugs under app/(main)/routes/.
const ROUTE_SLUGS = [
    'abu-dhabi-dammam', 'abu-dhabi-jeddah', 'abu-dhabi-madinah', 'abu-dhabi-makkah', 'abu-dhabi-riyadh',
    'alula-jeddah', 'amman-dammam', 'amman-jeddah', 'amman-madinah', 'amman-makkah', 'amman-riyadh',
    'bahrain-dammam', 'bahrain-jeddah', 'bahrain-madinah', 'bahrain-makkah', 'bahrain-riyadh',
    'dammam-abu-dhabi', 'dammam-airport-to-khobar', 'dammam-airport-to-kuwait', 'dammam-amman',
    'dammam-bahrain', 'dammam-doha', 'dammam-dubai', 'dammam-kuwait', 'dammam-muscat', 'dammam-riyadh',
    'dammam-sharjah', 'doha-dammam', 'doha-jeddah', 'doha-madinah', 'doha-makkah', 'doha-riyadh',
    'dubai-dammam', 'dubai-jeddah', 'dubai-madinah', 'dubai-makkah', 'dubai-riyadh',
    'jeddah-abu-dhabi', 'jeddah-alula', 'jeddah-amman', 'jeddah-bahrain', 'jeddah-doha', 'jeddah-dubai',
    'jeddah-kuwait', 'jeddah-madinah', 'jeddah-makkah', 'jeddah-makkah-old', 'jeddah-muscat', 'jeddah-riyadh',
    'jeddah-sharjah', 'jeddah-taif', 'jeddah-to-dar-al-taqwa-madinah', 'jeddah-to-fairmont-makkah',
    'jeddah-to-hilton-madinah', 'jeddah-to-oberoi-madinah', 'jeddah-to-pullman-makkah',
    'jeddah-to-swissotel-makkah', 'jeddah-train-station-taxi', 'jeddah-yanbu',
    'khobar-bahrain', 'khobar-to-dammam-airport',
    'kuwait-dammam', 'kuwait-jeddah', 'kuwait-madinah', 'kuwait-makkah', 'kuwait-riyadh', 'kuwait-to-dammam-airport',
    'madinah-abu-dhabi', 'madinah-alula', 'madinah-amman', 'madinah-bahrain', 'madinah-doha', 'madinah-dubai',
    'madinah-jeddah', 'madinah-kuwait', 'madinah-makkah', 'madinah-muscat', 'madinah-sharjah',
    'madinah-to-jeddah-airport-departures', 'madinah-train-station-taxi',
    'makkah-abu-dhabi', 'makkah-amman', 'makkah-bahrain', 'makkah-doha', 'makkah-dubai', 'makkah-jeddah',
    'makkah-kuwait', 'makkah-madinah', 'makkah-muscat', 'makkah-sharjah', 'makkah-taif',
    'muscat-dammam', 'muscat-jeddah', 'muscat-madinah', 'muscat-makkah', 'muscat-riyadh',
    'riyadh-abu-dhabi', 'riyadh-amman', 'riyadh-bahrain', 'riyadh-dammam', 'riyadh-doha', 'riyadh-dubai',
    'riyadh-jeddah', 'riyadh-kuwait', 'riyadh-makkah', 'riyadh-muscat', 'riyadh-sharjah',
    'sharjah-dammam', 'sharjah-jeddah', 'sharjah-madinah', 'sharjah-makkah', 'sharjah-riyadh',
    'tabuk-abha', 'tabuk-abu-arish', 'tabuk-afif', 'tabuk-al-bad', 'tabuk-al-badai', 'tabuk-al-bahah',
    'tabuk-al-bukayriyah', 'tabuk-al-ghat', 'tabuk-al-jafr', 'tabuk-al-khafji', 'tabuk-al-kharj',
    'tabuk-al-khobar', 'tabuk-al-lith', 'tabuk-al-majardah', 'tabuk-al-majmaah', 'tabuk-al-makhwah',
    'tabuk-al-midhnab', 'tabuk-al-mubarraz', 'tabuk-al-muzahmiyya', 'tabuk-al-nairyah', 'tabuk-al-namas',
    'tabuk-al-qunfudhah', 'tabuk-al-quwayiyah', 'tabuk-al-rais', 'tabuk-al-rass', 'tabuk-al-uyun',
    'tabuk-al-wajh', 'tabuk-alula', 'tabuk-arar', 'tabuk-baljurashi', 'tabuk-bareq', 'tabuk-bishah',
    'tabuk-buqayq', 'tabuk-buraidah', 'tabuk-dammam', 'tabuk-dariya', 'tabuk-dawadmi', 'tabuk-dhahban',
    'tabuk-duba', 'tabuk-hafar-al-batin', 'tabuk-hail', 'tabuk-haql', 'tabuk-hofuf', 'tabuk-huraymila',
    'tabuk-jeddah', 'tabuk-jizan', 'tabuk-jubail', 'tabuk-kaec', 'tabuk-khafji', 'tabuk-khulais',
    'tabuk-madinah', 'tabuk-magna', 'tabuk-mahad-al-dhahab', 'tabuk-makkah', 'tabuk-masturah', 'tabuk-najran',
    'tabuk-neom', 'tabuk-qilwah', 'tabuk-qurayyat', 'tabuk-rabigh', 'tabuk-riyadh', 'tabuk-rumah',
    'tabuk-sabya', 'tabuk-sakaka', 'tabuk-samtah', 'tabuk-sharma', 'tabuk-sharurah', 'tabuk-taif',
    'tabuk-tanuma', 'tabuk-tayma', 'tabuk-thadiq', 'tabuk-thuwal', 'tabuk-turaif', 'tabuk-umluj',
    'tabuk-unaizah', 'tabuk-wadi-ad-dawasir', 'tabuk-yanbu', 'tabuk-zulfi',
    'taif-jeddah', 'yanbu-jeddah',
];

const ROUTES: RouteNode[] = ROUTE_SLUGS.filter((slug) => !EXCLUDED_SLUGS.has(slug))
    .map((slug) => {
        const parsed = parseSlug(slug);
        if (!parsed) return null;
        return {
            slug,
            origin: parsed.origin,
            destination: parsed.destination,
            originLabel: prettify(parsed.origin),
            destinationLabel: prettify(parsed.destination),
        };
    })
    .filter((r): r is RouteNode => r !== null);

const BY_ORIGIN = new Map<string, RouteNode[]>();
for (const route of ROUTES) {
    const list = BY_ORIGIN.get(route.origin) ?? [];
    list.push(route);
    BY_ORIGIN.set(route.origin, list);
}

export function getRelatedRoutes(originSlug: string, currentSlug: string, limit = 4): RouteLink[] {
    const siblings = (BY_ORIGIN.get(originSlug) ?? []).filter((r) => r.slug !== currentSlug);
    return siblings.slice(0, limit).map((r) => ({
        name: `${r.originLabel} to ${r.destinationLabel}`,
        url: `/routes/${r.slug}/`,
        description: `Private taxi transfers from ${r.originLabel} to ${r.destinationLabel}.`,
    }));
}
