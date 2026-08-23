// Data model for the /distance/ category — informational "how far / how long" road-distance
// guides between GCC cities and major Saudi destinations (Makkah, Madinah, etc).
//
// This is deliberately separate from data/routeGraph.ts, which powers the *commercial*
// /routes/{origin}-{destination}/ booking pages. Distance pages are informational-intent
// (distance, driving time, route, border, map) and link OUT to the matching commercial
// route page rather than duplicating its booking content.
//
// Scaling this to more routes later: add one more entry to DISTANCE_ROUTES with genuinely
// distinct research/content (not a find-replace of the Kuwait-Makkah copy), then add its
// slug to the relevant category in DISTANCE_HUB_CATEGORIES and create
// app/(main)/distance/<slug>/page.tsx following the Kuwait-Makkah page as a structural
// (not textual) template.

export interface DistanceFAQ {
    question: string;
    shortAnswer: string;
    detailedAnswer: string;
}

export interface DistanceRelatedLink {
    name: string;
    url: string;
    description: string;
}

export interface DistanceRoute {
    slug: string;

    // Core place data
    origin: string;                 // short name, e.g. "Kuwait"
    originFull: string;             // full name for schema/map queries, e.g. "Kuwait City, Kuwait"
    originCountry: string;
    destination: string;            // short name, e.g. "Makkah"
    destinationFull: string;        // e.g. "Makkah, Saudi Arabia"
    destinationCountry: string;

    // Quick-answer stats (all qualified — never presented as exact/guaranteed)
    distanceRange: string;          // "approximately 1,580–1,650 km"
    distanceHeadline: string;       // short stat-card value, e.g. "~1,600 km"
    drivingTimeRange: string;       // "approximately 16–18 hours of continuous driving"
    drivingTimeHeadline: string;    // short stat-card value, e.g. "~16–18 hrs"
    routeHeadline: string;          // short stat-card value, e.g. "Via Eastern Province & Riyadh"
    borderName: string;             // short stat-card value, e.g. "Khafji / Nuwaiseeb"
    travelType: string;             // short stat-card value, e.g. "International (cross-border)"

    // Long-form content (kept genuinely route-specific — see note above on scaling)
    routeDescription: string[];     // paragraphs for "Road Distance" section
    drivingTimeDescription: string[]; // paragraphs for "Driving Time" section
    routeJourneyDescription: string[]; // paragraphs for "Route" section
    borderDescription: string[];    // paragraphs for the border-crossing section

    // Map
    mapOriginQuery: string;         // used in the Google Maps directions query
    mapDestinationQuery: string;

    // Internal linking
    relatedTaxiRoute: DistanceRelatedLink;         // the primary commercial route page (required)
    relatedReturnTaxiRoute?: DistanceRelatedLink;   // reverse-direction commercial route, if it exists
    relatedTaxiRoutes: DistanceRelatedLink[];      // additional sibling commercial routes
    relatedLocationLink?: DistanceRelatedLink;      // existing destination location page, if any
    relatedBorderLink?: DistanceRelatedLink;        // existing border-crossing detail page, if any

    // SEO
    seoTitle: string;
    metaDescription: string;
    h1: string;

    faqs: DistanceFAQ[];

    lastVerified: string; // human-readable freshness note, e.g. "August 2026"
}

export const DISTANCE_ROUTES: Record<string, DistanceRoute> = {
    'kuwait-to-makkah': {
        slug: 'kuwait-to-makkah',

        origin: 'Kuwait',
        originFull: 'Kuwait City, Kuwait',
        originCountry: 'Kuwait',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',

        distanceRange: 'approximately 1,580–1,650 km',
        distanceHeadline: '~1,600 km',
        drivingTimeRange: 'approximately 16–18 hours of continuous driving',
        drivingTimeHeadline: '~16–18 hrs',
        routeHeadline: "Via Saudi's Eastern Province & Riyadh",
        borderName: 'Khafji / Nuwaiseeb',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Kuwait City to Makkah is approximately 1,580 to 1,650 km, depending on the exact starting address, the exact drop-off point in Makkah, and which route a mapping service selects. Independent route calculators we checked return figures in this range, and it lines up with what our own dispatch team sees on this run.",
            "That range exists because \"distance\" isn't a single fixed number for a 1,600 km international trip. Your exact pickup point in Kuwait City, your exact hotel or drop-off zone in Makkah, and whether the routing engine favors the interior road through Riyadh or an alternative alignment can each shift the total by tens of kilometers. Treat any single-decimal-point distance figure you see online with some skepticism — a range is the more honest answer.",
        ],
        drivingTimeDescription: [
            "Pure driving time for this route is approximately 16 to 18 hours, assuming continuous driving at normal highway speeds with no major stops. That figure is what a routing engine calculates for the driving segment alone — it is not the same as your total journey time.",
            "Total journey time is longer once you add the Kuwait–Saudi border crossing, fuel and rest stops over a 1,600 km drive, meals, and normal daytime traffic through the cities the route passes near. Most travelers doing this route treat it as a long single push with a handful of stops, or split it into two driving days with an overnight stop — both are common and there's no single \"correct\" way to do it.",
            "Traffic, road conditions, and border volume all vary by day, time, and season (Hajj and Umrah peak periods in particular can add meaningful time at the border and around Makkah itself), so treat any driving-time figure as an estimate for planning purposes, not a guarantee.",
        ],
        routeJourneyDescription: [
            "The general road journey runs south from Kuwait City to the Kuwait–Saudi border, crosses into Saudi Arabia's Eastern Province, and continues through the interior of the country — passing near the Eastern Province cities and through the Riyadh area — before continuing west toward Makkah.",
            "We're intentionally not naming specific highway numbers here: exact route numbering can change between routing providers and over time, and we'd rather point you to the general path than state a number we can't stand behind. If you want turn-by-turn routing, use the map below or a live navigation app closer to your travel date.",
        ],
        borderDescription: [
            "This is an international route, so it crosses a land border between Kuwait and Saudi Arabia. The relevant crossing for Kuwait City–bound traffic is known as Khafji on the Saudi side and Nuwaiseeb on the Kuwait side — the same physical crossing point referred to by two different names depending which country's signage you're reading.",
            "On the Kuwait side, you'll go through Kuwaiti exit procedures — passport control and any applicable vehicle checks. On the Saudi side, you'll go through Saudi entry procedures — passport control, visa verification, and vehicle documentation checks if you're self-driving or in a private vehicle.",
            "Every passenger is responsible for holding a valid passport and the correct visa or entry permission for Saudi Arabia before travel — requirements vary by nationality and residency status, so confirm your own eligibility with the relevant embassy or a licensed visa service before you travel. We are not a visa or immigration authority and can't make eligibility decisions or promises on your behalf.",
            "Border processing time genuinely varies — by day of the week, time of day, season (Hajj and Umrah periods see heavier cross-border traffic), and how many vehicles are ahead of you. We don't promise a fixed border-crossing time, and any website that does is guessing.",
        ],

        mapOriginQuery: 'Kuwait City, Kuwait',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Kuwait to Makkah Taxi',
            url: '/routes/kuwait-makkah/',
            description: 'Pre-booked private cross-border transfer from Kuwait to Makkah with a professional driver.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Kuwait Taxi',
            url: '/routes/makkah-kuwait/',
            description: 'Book the return leg from Makkah back to Kuwait.',
        },
        relatedTaxiRoutes: [
            {
                name: 'Kuwait to Madinah Taxi',
                url: '/routes/kuwait-madinah/',
                description: 'Private transfer from Kuwait to Madinah for pilgrims visiting both holy cities.',
            },
            {
                name: 'Kuwait to Riyadh Taxi',
                url: '/routes/kuwait-riyadh/',
                description: 'Private transfer from Kuwait to Riyadh, a common stop along this corridor.',
            },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'Khafji Border Crossing Guide',
            url: '/border-crossings/taxi-khafji-border-crossing/',
            description: 'What to expect crossing the Kuwait-Saudi border by private vehicle.',
        },

        seoTitle: 'Kuwait to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Kuwait to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Kuwait by car.',
        h1: 'Kuwait to Makkah Distance by Road',

        faqs: [
            {
                question: 'How far is Kuwait from Makkah by road?',
                shortAnswer: 'Approximately 1,580–1,650 km',
                detailedAnswer: "By road, Kuwait City to Makkah is approximately 1,580 to 1,650 km. The exact figure depends on your starting point, your destination point in Makkah, and which route a mapping service calculates — different tools can show slightly different numbers for the same trip.",
            },
            {
                question: 'How long does it take to drive from Kuwait to Makkah?',
                shortAnswer: 'Approximately 16–18 hours of driving',
                detailedAnswer: "Pure driving time is approximately 16 to 18 hours at normal highway speeds. Your total journey time will be longer once you add the border crossing, fuel and rest stops, meals, and traffic — most travelers either drive it as one long push with stops or split it across two days.",
            },
            {
                question: 'What is the Kuwait to Makkah driving distance?',
                shortAnswer: 'Roughly 1,600 km by road',
                detailedAnswer: "Routing tools generally put the Kuwait City to Makkah driving distance at roughly 1,580 to 1,650 km. This is the road (driving) distance, not the straight-line distance — see the FAQ below on why those two numbers differ.",
            },
            {
                question: 'Can I travel from Kuwait to Makkah by car?',
                shortAnswer: 'Yes, with valid travel documents',
                detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common ways to make this trip. Whichever way you travel, every passenger needs a valid passport and the correct Saudi visa or entry permission, and a self-driven vehicle needs the correct cross-border documentation.",
            },
            {
                question: 'Which border do you cross from Kuwait to Saudi Arabia?',
                shortAnswer: 'Khafji (Saudi side) / Nuwaiseeb (Kuwait side)',
                detailedAnswer: "The main Kuwait-Saudi land crossing for Kuwait City-bound traffic is known as Khafji on the Saudi side and Nuwaiseeb on the Kuwait side — it's the same physical crossing point, just named differently depending on which country's signage you're reading.",
            },
            {
                question: 'Is Kuwait to Makkah possible by private taxi?',
                shortAnswer: 'Yes',
                detailedAnswer: "Yes — we run a dedicated Kuwait to Makkah private taxi service for this exact route, with a single vehicle from pickup in Kuwait through to your Makkah drop-off point. See our Kuwait to Makkah taxi page for details.",
            },
            {
                question: 'Can families travel from Kuwait to Makkah by car?',
                shortAnswer: 'Yes, with the right planning',
                detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks, extra luggage space, snacks and water, and realistic expectations around children's and elderly passengers' comfort over a 16+ hour drive. A private vehicle with a professional driver removes the fatigue of self-driving the full distance.",
            },
            {
                question: 'Can I book a return taxi from Makkah to Kuwait?',
                shortAnswer: 'Yes',
                detailedAnswer: "Yes — the return leg runs on the same route in the opposite direction. See our Makkah to Kuwait taxi page to book the return journey.",
            },
            {
                question: 'Is driving distance the same as straight-line distance?',
                shortAnswer: 'No',
                detailedAnswer: "No. Straight-line (\"as the crow flies\") distance measures a direct line between two points and ignores roads entirely, so it's always shorter than the actual driving distance, which follows real highways, border crossings, and terrain. The ~1,600 km figure on this page is road/driving distance, not straight-line distance.",
            },
            {
                question: 'Why do different websites show different Kuwait to Makkah distances?',
                shortAnswer: 'Different routing engines, start/end points and route choices',
                detailedAnswer: "Distance figures vary between websites because each one may use a different exact starting address, a different exact destination point, a different underlying mapping/routing provider, or a different preferred route (e.g. via the interior versus an alternative alignment). None of these is necessarily \"wrong\" — they're just answering slightly different versions of the same question. That's why we present a range rather than one absolute number.",
            },
        ],

        lastVerified: 'August 2026',
    },
};

export function getDistanceRoute(slug: string): DistanceRoute | undefined {
    return DISTANCE_ROUTES[slug];
}

export interface DistanceHubCategory {
    id: string;
    title: string;
    description: string;
    routeSlugs: string[]; // only slugs present in DISTANCE_ROUTES are ever rendered as links
}

// Hub category scaffolding — see file header note on scaling. Categories with zero
// routeSlugs are described in the hub's intro copy but never rendered with fake/dead links.
export const DISTANCE_HUB_CATEGORIES: DistanceHubCategory[] = [
    {
        id: 'gcc-to-makkah',
        title: 'GCC to Makkah',
        description: 'Road distance and driving time from Gulf cities to Makkah.',
        routeSlugs: ['kuwait-to-makkah'],
    },
    {
        id: 'gcc-to-madinah',
        title: 'GCC to Madinah',
        description: 'Road distance and driving time from Gulf cities to Madinah.',
        routeSlugs: [],
    },
    {
        id: 'saudi-to-makkah',
        title: 'Saudi Cities to Makkah',
        description: 'Road distance and driving time from other Saudi cities to Makkah.',
        routeSlugs: [],
    },
    {
        id: 'saudi-to-madinah',
        title: 'Saudi Cities to Madinah',
        description: 'Road distance and driving time from other Saudi cities to Madinah.',
        routeSlugs: [],
    },
    {
        id: 'other-saudi',
        title: 'Other Saudi Road Distances',
        description: 'Road distance guides between other major Saudi destinations.',
        routeSlugs: [],
    },
];

export function getAllDistanceRoutes(): DistanceRoute[] {
    return Object.values(DISTANCE_ROUTES);
}
