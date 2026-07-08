// Geographic grouping of every /locations/<slug>/ page for genuine (non-hardcoded)
// internal linking. Each location is assigned to the real Saudi administrative
// region it sits in; RelatedLocations uses this to link a page to cities that
// are actually nearby, instead of always pointing at Makkah/Madinah/Jeddah/Riyadh.

export type RegionKey =
    | 'makkah'
    | 'madinah'
    | 'riyadh'
    | 'eastern'
    | 'asir'
    | 'bahah'
    | 'jazan'
    | 'najran'
    | 'qassim'
    | 'tabuk'
    | 'jouf'
    | 'hail'
    | 'northern';

interface LocationNode {
    slug: string;
    name: string;
    region: RegionKey;
}

const REGION_LABELS: Record<RegionKey, string> = {
    makkah: 'Holy Cities corridor',
    madinah: 'Holy Cities corridor',
    riyadh: 'capital region',
    eastern: 'Eastern Province',
    asir: 'Asir highlands',
    bahah: 'Al Bahah highlands',
    jazan: 'Jazan coast',
    najran: 'southern border region',
    qassim: 'Al Qassim region',
    tabuk: 'northwest coast & NEOM corridor',
    jouf: 'Al Jouf region',
    hail: 'north-central region',
    northern: 'Northern Borders region',
};

// Only slugs that have an actual page under app/(main)/locations/ belong here.
const LOCATIONS: LocationNode[] = [
    // Makkah region
    { slug: 'makkah', name: 'Makkah', region: 'makkah' },
    { slug: 'jeddah', name: 'Jeddah', region: 'makkah' },
    { slug: 'taif', name: 'Taif', region: 'makkah' },
    { slug: 'rabigh', name: 'Rabigh', region: 'makkah' },
    { slug: 'al-qunfudhah', name: 'Al-Qunfudhah', region: 'makkah' },
    { slug: 'al-lith', name: 'Al Lith', region: 'makkah' },
    { slug: 'khulais', name: 'Khulais', region: 'makkah' },
    { slug: 'kaec', name: 'KAEC', region: 'makkah' },
    { slug: 'thuwal', name: 'Thuwal', region: 'makkah' },
    { slug: 'dhahban', name: 'Dhahban', region: 'makkah' },
    { slug: 'masturah', name: 'Masturah', region: 'makkah' },
    { slug: 'al-majardah', name: 'Al Majardah', region: 'makkah' },
    { slug: 'jeddah-makkah', name: 'Jeddah–Makkah', region: 'makkah' },
    { slug: 'makkah-ziyarat', name: 'Makkah Ziyarat', region: 'makkah' },

    // Madinah region
    { slug: 'madinah', name: 'Madinah', region: 'madinah' },
    { slug: 'yanbu', name: 'Yanbu', region: 'madinah' },
    { slug: 'alula', name: 'AlUla', region: 'madinah' },
    { slug: 'khayber-fort', name: 'Khaybar', region: 'madinah' },
    { slug: 'mahad-al-dhahab', name: 'Mahad al-Dhahab', region: 'madinah' },

    // Riyadh region
    { slug: 'riyadh', name: 'Riyadh', region: 'riyadh' },
    { slug: 'dariya', name: 'Diriyah', region: 'riyadh' },
    { slug: 'al-kharj', name: 'Al-Kharj', region: 'riyadh' },
    { slug: 'al-majma-ah', name: "Al Majma'ah", region: 'riyadh' },
    { slug: 'al-ghat', name: 'Al-Ghat', region: 'riyadh' },
    { slug: 'al-muzahmiyya', name: 'Al-Muzahmiyya', region: 'riyadh' },
    { slug: 'thadiq', name: 'Thadiq', region: 'riyadh' },
    { slug: 'huraymila', name: 'Huraymila', region: 'riyadh' },
    { slug: 'dawadmi', name: 'Dawadmi', region: 'riyadh' },
    { slug: 'al-quway-iyah', name: "Al-Quway'iyah", region: 'riyadh' },
    { slug: 'afif', name: 'Afif', region: 'riyadh' },
    { slug: 'zulfi', name: 'Zulfi', region: 'riyadh' },
    { slug: 'rumah', name: 'Rumah', region: 'riyadh' },
    { slug: 'wadi-ad-dawasir', name: 'Wadi ad-Dawasir', region: 'riyadh' },
    { slug: 'al-jafr', name: 'Al-Jafr', region: 'riyadh' },

    // Eastern Province
    { slug: 'dammam', name: 'Dammam', region: 'eastern' },
    { slug: 'al-khobar', name: 'Al Khobar', region: 'eastern' },
    { slug: 'dhahran', name: 'Dhahran', region: 'eastern' },
    { slug: 'jubail', name: 'Jubail', region: 'eastern' },
    { slug: 'hofuf', name: 'Hofuf', region: 'eastern' },
    { slug: 'al-ahsa', name: 'Al-Ahsa', region: 'eastern' },
    { slug: 'al-mubarraz', name: 'Al-Mubarraz', region: 'eastern' },
    { slug: 'buqayq', name: 'Buqayq', region: 'eastern' },
    { slug: 'khafji', name: 'Khafji', region: 'eastern' },
    { slug: 'al-nairyah', name: 'Al-Nairyah', region: 'eastern' },
    { slug: 'tanuma', name: 'Tanuma', region: 'eastern' },
    { slug: 'hafar-al-batin', name: 'Hafar Al Batin', region: 'eastern' },

    // Asir
    { slug: 'abha', name: 'Abha', region: 'asir' },
    { slug: 'khamis-mushait', name: 'Khamis Mushait', region: 'asir' },
    { slug: 'bishah', name: 'Bishah', region: 'asir' },
    { slug: 'al-namas', name: 'Al Namas', region: 'asir' },
    { slug: 'bareq', name: 'Bareq', region: 'asir' },

    // Al Bahah
    { slug: 'al-bahah', name: 'Al Bahah', region: 'bahah' },
    { slug: 'baljurashi', name: 'Baljurashi', region: 'bahah' },
    { slug: 'al-makhwah', name: 'Al Makhwah', region: 'bahah' },
    { slug: 'qilwah', name: 'Qilwah', region: 'bahah' },

    // Jazan
    { slug: 'jizan', name: 'Jizan', region: 'jazan' },
    { slug: 'abu-arish', name: 'Abu Arish', region: 'jazan' },
    { slug: 'sabya', name: 'Sabya', region: 'jazan' },
    { slug: 'samtah', name: 'Samtah', region: 'jazan' },

    // Najran
    { slug: 'najran', name: 'Najran', region: 'najran' },
    { slug: 'sharurah', name: 'Sharurah', region: 'najran' },

    // Al Qassim
    { slug: 'buraidah', name: 'Buraidah', region: 'qassim' },
    { slug: 'al-qassim', name: 'Al-Qassim', region: 'qassim' },
    { slug: 'unaizah', name: 'Unaizah', region: 'qassim' },
    { slug: 'al-rass', name: 'Al-Rass', region: 'qassim' },
    { slug: 'al-bukayriyah', name: 'Al-Bukayriyah', region: 'qassim' },
    { slug: 'al-midhnab', name: 'Al-Midhnab', region: 'qassim' },
    { slug: 'al-badai', name: 'Al-Badai', region: 'qassim' },
    { slug: 'al-uyun', name: 'Al-Uyun', region: 'qassim' },
    { slug: 'al-rais', name: 'Al Rais', region: 'qassim' },

    // Tabuk / NEOM corridor (no standalone /locations/tabuk/ page exists)
    { slug: 'neom', name: 'NEOM', region: 'tabuk' },
    { slug: 'duba', name: 'Duba', region: 'tabuk' },
    { slug: 'al-wajh', name: 'Al Wajh', region: 'tabuk' },
    { slug: 'haql', name: 'Haql', region: 'tabuk' },
    { slug: 'tayma', name: 'Tayma', region: 'tabuk' },
    { slug: 'umluj', name: 'Umluj', region: 'tabuk' },
    { slug: 'magna', name: 'Magna', region: 'tabuk' },
    { slug: 'sharma', name: 'Sharma', region: 'tabuk' },
    { slug: 'al-bad', name: 'Al-Bad', region: 'tabuk' },

    // Al Jouf
    { slug: 'sakaka', name: 'Sakaka', region: 'jouf' },
    { slug: 'qurayyat', name: 'Qurayyat', region: 'jouf' },

    // Hail
    { slug: 'hail', name: 'Hail', region: 'hail' },

    // Northern Borders
    { slug: 'arar', name: 'Arar', region: 'northern' },
    { slug: 'turaif', name: 'Turaif', region: 'northern' },
];

// currentCity values that don't have their own /locations/<slug>/ page but should
// still resolve to a sensible region (e.g. the NEOM page passes currentCity="Tabuk").
const REGION_ONLY_ALIASES: Record<string, RegionKey> = {
    tabuk: 'tabuk',
};

// currentCity strings whose naive slugified form doesn't match the real folder slug.
const NAME_ALIASES: Record<string, string> = {
    "al majmaah": 'al-majma-ah',
    'al quwayiyah': 'al-quway-iyah',
    khaybar: 'khayber-fort',
};

const MAJOR_HUBS = ['jeddah', 'riyadh', 'makkah', 'madinah', 'dammam'];

const BY_SLUG = new Map(LOCATIONS.map((l) => [l.slug, l]));

function normalize(value: string): string {
    return value
        .toLowerCase()
        .replace(/['']/g, '')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

function resolveSlug(currentCity: string): string | null {
    const normalized = normalize(currentCity);
    const hyphenated = normalized.replace(/ /g, '-');
    if (NAME_ALIASES[normalized]) return NAME_ALIASES[normalized];
    if (BY_SLUG.has(hyphenated)) return hyphenated;
    return null;
}

function resolveRegion(currentCity: string, slug: string | null): RegionKey | null {
    if (slug) return BY_SLUG.get(slug)?.region ?? null;
    const normalized = normalize(currentCity).replace(/ /g, '-');
    return REGION_ONLY_ALIASES[normalized] ?? null;
}

export interface RelatedLink {
    name: string;
    url: string;
    description: string;
}

export function getRelatedLocationLinks(currentCity: string, citySlug?: string): RelatedLink[] {
    const selfSlug = citySlug ?? resolveSlug(currentCity);
    const region = resolveRegion(currentCity, selfSlug);

    let candidates: LocationNode[] = [];
    if (region) {
        candidates = LOCATIONS.filter((l) => l.region === region && l.slug !== selfSlug);
    }

    if (candidates.length < 4) {
        const existingSlugs = new Set(candidates.map((c) => c.slug));
        for (const hubSlug of MAJOR_HUBS) {
            if (candidates.length >= 4) break;
            if (hubSlug === selfSlug || existingSlugs.has(hubSlug)) continue;
            const hub = BY_SLUG.get(hubSlug);
            if (hub) {
                candidates.push(hub);
                existingSlugs.add(hubSlug);
            }
        }
    }

    return candidates.slice(0, 4).map((node) => ({
        name: node.name,
        url: `/locations/${node.slug}/`,
        description: `Direct taxi transfers between ${currentCity} and ${node.name} across the ${REGION_LABELS[node.region]}.`,
    }));
}
