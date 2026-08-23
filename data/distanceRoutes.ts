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
    /** Domestic Saudi routes omit the border section entirely (see borderName/borderDescription below). */
    isInternational?: boolean;

    // Quick-answer stats (all qualified — never presented as exact/guaranteed)
    distanceRange: string;          // "approximately 1,580–1,650 km"
    distanceHeadline: string;       // short stat-card value, e.g. "~1,600 km"
    drivingTimeRange: string;       // "approximately 16–18 hours of continuous driving"
    drivingTimeHeadline: string;    // short stat-card value, e.g. "~16–18 hrs"
    routeHeadline: string;          // short stat-card value, e.g. "Via Eastern Province & Riyadh"
    borderName?: string;            // short stat-card value, e.g. "Khafji / Nuwaiseeb" — omitted for domestic routes
    travelType: string;             // short stat-card value, e.g. "International (cross-border)"

    // Long-form content (kept genuinely route-specific — see note above on scaling)
    routeDescription: string[];     // paragraphs for "Road Distance" section
    drivingTimeDescription: string[]; // paragraphs for "Driving Time" section
    routeJourneyDescription: string[]; // paragraphs for "Route" section
    borderDescription?: string[];   // paragraphs for the border-crossing section — omitted for domestic routes
    byCarNote?: string;             // route-specific closing note for the "By Car" section
    journeyPlanningNote?: string;   // one extra route-specific planning consideration, appended to the generic checklist
    bestTimeNote?: string;          // one extra route-specific timing consideration

    // Map
    mapOriginQuery: string;         // used in the Google Maps directions query
    mapDestinationQuery: string;

    // Internal linking
    // Optional: a few routes (e.g. Riyadh-Madinah, Al Khobar-Makkah) have no matching
    // commercial /routes/ page at all. Per spec we never guess/create one — when this is
    // undefined, the template falls back to a generic WhatsApp CTA and shows
    // noDirectRouteNote instead of a "book this route" card.
    relatedTaxiRoute?: DistanceRelatedLink;
    relatedReturnTaxiRoute?: DistanceRelatedLink;   // reverse-direction commercial route, if it exists
    relatedTaxiRoutes: DistanceRelatedLink[];      // additional sibling commercial routes
    relatedLocationLink?: DistanceRelatedLink;      // existing destination location page, if any
    relatedBorderLink?: DistanceRelatedLink;        // existing border-crossing detail page, if any
    relatedDistanceSlugs?: string[];                // slugs of other DISTANCE_ROUTES entries to cross-link (only real ones)
    /** Shown instead of the "book this route" card when relatedTaxiRoute is undefined. */
    noDirectRouteNote?: string;

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

    'kuwait-to-madinah': {
        slug: 'kuwait-to-madinah',
        origin: 'Kuwait',
        originFull: 'Kuwait City, Kuwait',
        originCountry: 'Kuwait',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,120–1,150 km',
        distanceHeadline: '~1,130 km',
        drivingTimeRange: 'approximately 12–13.5 hours of continuous driving',
        drivingTimeHeadline: '~12–13.5 hrs',
        routeHeadline: "Via Saudi's Eastern Province & Interior",
        borderName: 'Khafji / Nuwaiseeb',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Kuwait City to Madinah is approximately 1,120 to 1,150 km — noticeably shorter than the Kuwait to Makkah route despite starting from the same border crossing, since Madinah sits further north within Saudi Arabia's Hijaz region than Makkah does.",
            "As with any 1,100+ km international trip, the exact figure shifts with your precise pickup point in Kuwait City, your exact drop-off point in Madinah, and which route a mapping tool selects. Treat the figure above as a planning range rather than an exact number.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 12 to 13.5 hours of continuous driving at normal highway speeds — the driving segment alone, calculated by a routing engine, not your full door-to-door journey time.",
            "Total journey time is longer once you add the Kuwait-Saudi border crossing, fuel and rest stops, and meals over an 1,100+ km trip. Most travelers treat this as a long single-day push with a few stops, though splitting it across two days is also common, especially for families.",
            "Traffic and border volume vary by day, time and season — Hajj and Umrah peak periods in particular add meaningful time both at the border and on the approach into Madinah.",
        ],
        routeJourneyDescription: [
            "The general road journey runs south from Kuwait City to the Kuwait-Saudi border, crosses into Saudi Arabia's Eastern Province, then continues through the Kingdom's interior toward Madinah in the northwest Hijaz region.",
            "We're not naming specific highway numbers for this route, since exact numbering can vary between routing providers. Use the map below or a live navigation app for turn-by-turn routing closer to your travel date.",
        ],
        borderDescription: [
            "This is an international route, crossing the land border between Kuwait and Saudi Arabia at the crossing known as Khafji on the Saudi side and Nuwaiseeb on the Kuwait side.",
            "On the Kuwait side you'll go through Kuwaiti exit procedures — passport control and any applicable vehicle checks. On the Saudi side, Saudi entry procedures apply — passport control, visa verification, and vehicle documentation checks for self-driven or private vehicles.",
            "Every passenger needs a valid passport and the correct visa or entry permission for Saudi Arabia — requirements vary by nationality and residency status, so confirm your own eligibility with the relevant embassy or a licensed visa service before traveling. We are a transport provider, not an immigration authority, and can't make eligibility decisions on your behalf.",
            "Border processing time genuinely varies by day, time and season, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "Given the drive is a genuinely long 12-13.5 hours before you even reach Madinah, most families and pilgrims travelling from Kuwait prefer a private chauffeur-driven transfer over self-driving the full distance — it removes both the fatigue of the drive and the responsibility of managing your own vehicle's cross-border documentation.",
        journeyPlanningNote: "If you're continuing on to Makkah afterwards, note that non-Muslims are not permitted to enter Makkah itself — Madinah has no such restriction.",
        bestTimeNote: "Madinah sees its own seasonal peaks around Ramadan and the Hajj/Umrah season, when both roads and the city itself get considerably busier — build in extra time during these periods.",

        mapOriginQuery: 'Kuwait City, Kuwait',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Kuwait to Madinah Taxi',
            url: '/routes/kuwait-madinah/',
            description: 'Pre-booked private cross-border transfer from Kuwait to Madinah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Kuwait Taxi',
            url: '/routes/madinah-kuwait/',
            description: 'Book the return leg from Madinah back to Kuwait.',
        },
        relatedTaxiRoutes: [
            { name: 'Kuwait to Makkah Taxi', url: '/routes/kuwait-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Kuwait to Riyadh Taxi', url: '/routes/kuwait-riyadh/', description: 'Private transfer from Kuwait to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedBorderLink: {
            name: 'Khafji Border Crossing Guide',
            url: '/border-crossings/taxi-khafji-border-crossing/',
            description: 'What to expect crossing the Kuwait-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['kuwait-to-makkah'],

        seoTitle: 'Kuwait to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Kuwait to Madinah distance by road, estimated driving time, route map and border information. See how far Madinah is from Kuwait by car.',
        h1: 'Kuwait to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Kuwait from Madinah by road?', shortAnswer: 'Approximately 1,120–1,150 km', detailedAnswer: "By road, Kuwait City to Madinah is approximately 1,120 to 1,150 km. The exact figure depends on your starting point, your destination point in Madinah, and which route a mapping service calculates." },
            { question: 'How long does it take to drive from Kuwait to Madinah?', shortAnswer: 'Approximately 12–13.5 hours of driving', detailedAnswer: "Pure driving time is approximately 12 to 13.5 hours at normal highway speeds. Total journey time is longer once you add the border crossing, fuel and rest stops, and meals." },
            { question: 'What is the Kuwait to Madinah driving distance?', shortAnswer: 'Roughly 1,130 km by road', detailedAnswer: "Routing tools generally put the Kuwait City to Madinah driving distance at roughly 1,120 to 1,150 km. This is road (driving) distance, not straight-line distance." },
            { question: 'Can I travel from Kuwait to Madinah by car?', shortAnswer: 'Yes, with valid travel documents', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common ways to make this trip. Every passenger needs a valid passport and the correct Saudi visa or entry permission." },
            { question: 'Which border do you cross from Kuwait to Saudi Arabia?', shortAnswer: 'Khafji (Saudi side) / Nuwaiseeb (Kuwait side)', detailedAnswer: "The main Kuwait-Saudi land crossing is known as Khafji on the Saudi side and Nuwaiseeb on the Kuwait side — the same physical crossing point under two names." },
            { question: 'Is Kuwait to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Kuwait to Madinah private taxi service, with a single vehicle from pickup in Kuwait through to your Madinah drop-off point." },
            { question: 'Can families travel from Kuwait to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks, extra luggage space, and realistic expectations around a 12+ hour drive. A private vehicle with a professional driver removes the fatigue of self-driving the full distance." },
            { question: 'Can I book a return taxi from Madinah to Kuwait?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Madinah to Kuwait taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance, which follows real highways, the border crossing, and terrain." },
            { question: 'Why do different websites show different Kuwait to Madinah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "Distance figures vary between websites because each may use a different exact starting address, destination point, mapping provider, or preferred route. That's why we present a range rather than one absolute number." },
        ],
        lastVerified: 'August 2026',
    },

    'bahrain-to-makkah': {
        slug: 'bahrain-to-makkah',
        origin: 'Bahrain',
        originFull: 'Manama, Bahrain',
        originCountry: 'Bahrain',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,330–1,500 km',
        distanceHeadline: '~1,400 km',
        drivingTimeRange: 'approximately 12.5–14.5 hours of continuous driving',
        drivingTimeHeadline: '~12.5–14.5 hrs',
        routeHeadline: 'Via King Fahd Causeway & the Interior',
        borderName: 'King Fahd Causeway',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Bahrain to Makkah is approximately 1,330 to 1,500 km. Independent route calculators generally cluster around 1,330-1,335 km, while the fuller distance across the Kingdom on the route we operate runs closer to 1,500 km — we present the wider range rather than picking one figure.",
            "This route is unusual in that it starts with a fixed-length bridge crossing — the King Fahd Causeway itself is 25 km long — before the open-road driving into Saudi Arabia begins. Your exact pickup point on Bahrain's side and drop-off point in Makkah both affect the total.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 12.5 to 14.5 hours of continuous highway driving, not counting the causeway crossing itself.",
            "Total journey time is longer once you add the causeway border crossing — which can range from roughly 30 minutes to over 2 hours depending on day and time — plus fuel and rest stops and meals over a 1,300+ km trip.",
            "Weekends (Thursdays and Saturdays) and public holidays on either side tend to bring heavier causeway traffic, adding to total journey time beyond the pure driving estimate above.",
        ],
        routeJourneyDescription: [
            "The journey starts by crossing the King Fahd Causeway from Bahrain into Saudi Arabia's Eastern Province (arriving near Al Khobar/Dammam), then continues through the Kingdom's interior toward Makkah.",
            "We're not naming specific interior highway numbers here, since routing can vary by provider. Use the map below or a live navigation app for turn-by-turn directions closer to your travel date.",
        ],
        borderDescription: [
            "This route crosses the King Fahd Causeway, the only land link between Bahrain and Saudi Arabia — a 25 km bridge with border facilities partway across.",
            "You'll go through Bahraini exit procedures on the Bahrain side and Saudi entry procedures — passport control, visa verification, and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and the correct visa or entry permission for Saudi Arabia. Requirements vary by nationality and residency status, so confirm your own eligibility before traveling — we're a transport provider, not an immigration authority.",
            "Causeway wait times vary meaningfully by day and hour; see our dedicated King Fahd Causeway border crossing guide for more detail on what affects wait times.",
        ],
        byCarNote: "At around 1,400 km and 13+ hours before reaching Makkah, most pilgrims and families crossing from Bahrain choose a pre-booked private transfer over self-driving, since it removes the driving fatigue while someone else manages both the causeway crossing and the long interior drive.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself; if any member of your group isn't Muslim, plan their arrangements separately before booking this route.",
        bestTimeNote: "Weekend causeway traffic (Thursdays/Saturdays) and Hajj/Umrah peak season both add real time to this journey — build in extra buffer during those periods.",

        mapOriginQuery: 'Manama, Bahrain',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Bahrain to Makkah Taxi',
            url: '/routes/bahrain-makkah/',
            description: 'Pre-booked private cross-border transfer from Bahrain to Makkah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Bahrain Taxi',
            url: '/routes/makkah-bahrain/',
            description: 'Book the return leg from Makkah back to Bahrain.',
        },
        relatedTaxiRoutes: [
            { name: 'Bahrain to Madinah Taxi', url: '/routes/bahrain-madinah/', description: 'Private transfer from Bahrain to Madinah.' },
            { name: 'Bahrain to Riyadh Taxi', url: '/routes/bahrain-riyadh/', description: 'Private transfer from Bahrain to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Bahrain-Saudi causeway.',
        },
        relatedDistanceSlugs: ['doha-to-makkah', 'kuwait-to-makkah'],

        seoTitle: 'Bahrain to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Bahrain to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Bahrain by car.',
        h1: 'Bahrain to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Bahrain from Makkah by road?', shortAnswer: 'Approximately 1,330–1,500 km', detailedAnswer: "By road via the King Fahd Causeway, Bahrain to Makkah is approximately 1,330 to 1,500 km, depending on your starting point and which route a mapping service calculates." },
            { question: 'How long does it take to drive from Bahrain to Makkah?', shortAnswer: 'Approximately 12.5–14.5 hours of driving', detailedAnswer: "Pure driving time (excluding the causeway crossing) is approximately 12.5 to 14.5 hours. Total journey time is longer once you add the causeway crossing, fuel/rest stops, and meals." },
            { question: 'What is the Bahrain to Makkah driving distance?', shortAnswer: 'Roughly 1,400 km by road', detailedAnswer: "Routing tools generally put the Bahrain to Makkah driving distance between roughly 1,330 and 1,500 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Bahrain to Makkah by car?', shortAnswer: 'Yes, with valid travel documents', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common. Every passenger needs a valid passport and the correct Saudi visa or entry permission, and the vehicle needs correct causeway documentation." },
            { question: 'Which border do you cross from Bahrain to Saudi Arabia?', shortAnswer: 'The King Fahd Causeway', detailedAnswer: "The only land link between Bahrain and Saudi Arabia is the King Fahd Causeway, a 25 km bridge with border facilities partway across." },
            { question: 'Is Bahrain to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Bahrain to Makkah private taxi service, with a single vehicle from your Bahrain pickup through to your Makkah drop-off point." },
            { question: 'Can families travel from Bahrain to Makkah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks, extra luggage space, and realistic expectations around a 13+ hour trip including the causeway crossing." },
            { question: 'Can I book a return taxi from Makkah to Bahrain?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Makkah to Bahrain taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the causeway entirely, and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Bahrain to Makkah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "Figures vary because each source may use a different exact starting address, destination point, mapping provider, or preferred interior route across Saudi Arabia. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'doha-to-makkah': {
        slug: 'doha-to-makkah',
        origin: 'Doha',
        originFull: 'Doha, Qatar',
        originCountry: 'Qatar',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,447–1,550 km',
        distanceHeadline: '~1,450 km',
        drivingTimeRange: 'approximately 14–16 hours of continuous driving',
        drivingTimeHeadline: '~14–16 hrs',
        routeHeadline: 'Via Salwa Border & the Interior',
        borderName: 'Salwa / Abu Samra',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Doha to Makkah is approximately 1,447 to 1,550 km depending on the source and exact route. Most routing tools cluster tightly around 1,447 km, with some showing figures as high as 1,550 km for alternate routings.",
            "Your exact pickup point in Doha and drop-off point in Makkah both shift the total by tens of kilometers, same as any long international route.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 14 to 16 hours at normal highway speeds — genuinely too long to treat as a casual single push, per multiple independent route calculators.",
            "Total journey time is longer once you add the Salwa border crossing, fuel/rest stops, and meals across the Kingdom. Many travelers on this route plan for either a long single day with several stops, or split it over two days.",
            "Border volume and interior road traffic both vary by day and season, adding uncertainty on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from Qatar into Saudi Arabia at the Salwa border (called Abu Samra on the Qatar side), then continues north and west through the Kingdom's Eastern Province and interior toward Makkah.",
            "We don't name specific interior highway numbers here, since exact numbering varies by routing provider — use the map below or live navigation for your actual travel date.",
        ],
        borderDescription: [
            "This is the only land crossing between Qatar and Saudi Arabia — known as Salwa on the Saudi side and Abu Samra on the Qatar side.",
            "You'll go through Qatari exit procedures on the Doha side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality, so confirm your own eligibility before traveling. We are a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume — we don't promise a fixed crossing time.",
        ],
        byCarNote: "At 14-16 hours of driving before reaching Makkah, most pilgrims from Doha choose a pre-booked private transfer rather than self-driving — it removes the fatigue of a genuinely demanding route and the responsibility of managing cross-border vehicle documentation yourself.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — plan separate arrangements for any non-Muslim travelers in your group.",
        bestTimeNote: "Hajj and Umrah peak seasons bring significantly more traffic on the interior roads and at the Makkah approach — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Doha, Qatar',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Doha to Makkah Taxi',
            url: '/routes/doha-makkah/',
            description: 'Pre-booked private cross-border transfer from Doha to Makkah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Doha Taxi',
            url: '/routes/makkah-doha/',
            description: 'Book the return leg from Makkah back to Doha.',
        },
        relatedTaxiRoutes: [
            { name: 'Doha to Madinah Taxi', url: '/routes/doha-madinah/', description: 'Private transfer from Doha to Madinah.' },
            { name: 'Doha to Riyadh Taxi', url: '/routes/doha-riyadh/', description: 'Private transfer from Doha to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'Salwa Border Crossing Guide',
            url: '/border-crossings/taxi-salwa-border-crossing/',
            description: 'What to expect crossing the Qatar-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['bahrain-to-makkah', 'kuwait-to-makkah'],

        seoTitle: 'Doha to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Doha to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Doha by car.',
        h1: 'Doha to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Doha from Makkah by road?', shortAnswer: 'Approximately 1,447–1,550 km', detailedAnswer: "By road via the Salwa border, Doha to Makkah is approximately 1,447 to 1,550 km, depending on your starting point and which route a mapping service calculates." },
            { question: 'How long does it take to drive from Doha to Makkah?', shortAnswer: 'Approximately 14–16 hours of driving', detailedAnswer: "Pure driving time is approximately 14 to 16 hours. Total journey time is longer once you add the border crossing, fuel/rest stops, and meals." },
            { question: 'What is the Doha to Makkah driving distance?', shortAnswer: 'Roughly 1,450 km by road', detailedAnswer: "Routing tools generally put the Doha to Makkah driving distance between roughly 1,447 and 1,550 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Doha to Makkah by car?', shortAnswer: 'Yes, with valid travel documents', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common. Every passenger needs a valid passport and the correct Saudi visa or entry permission." },
            { question: 'Which border do you cross from Doha to Saudi Arabia?', shortAnswer: 'Salwa (Saudi side) / Abu Samra (Qatar side)', detailedAnswer: "The only land crossing between Qatar and Saudi Arabia is known as Salwa on the Saudi side and Abu Samra on the Qatar side — the same physical crossing under two names." },
            { question: 'Is Doha to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Doha to Makkah private taxi service, with a single vehicle from your Doha pickup through to your Makkah drop-off point." },
            { question: 'Can families travel from Doha to Makkah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks, extra luggage space, and realistic expectations around a 14+ hour trip." },
            { question: 'Can I book a return taxi from Makkah to Doha?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Makkah to Doha taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border crossing entirely, and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Doha to Makkah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "Figures vary because each source may use a different exact starting address, destination point, mapping provider, or preferred interior route. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dubai-to-makkah': {
        slug: 'dubai-to-makkah',
        origin: 'Dubai',
        originFull: 'Dubai, UAE',
        originCountry: 'UAE',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,830–2,110 km',
        distanceHeadline: '~1,900 km',
        drivingTimeRange: 'approximately 17–21.5 hours of continuous driving',
        drivingTimeHeadline: '~17–21.5 hrs',
        routeHeadline: 'Via Al Batha Border & the Interior',
        borderName: 'Al Batha',
        travelType: 'International (cross-border, 2-day journey recommended)',

        routeDescription: [
            "The road distance from Dubai to Makkah is approximately 1,830 to 2,110 km — one of the longer GCC-to-Makkah routes. Independent route calculators generally show figures around 1,830-1,850 km, while the fuller distance across the Kingdom on the route we operate runs closer to 2,110 km.",
            "This is a genuinely long international trip, so the gap between different calculators' figures is wider than on shorter routes — treat any single precise number you see with some skepticism.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 17 to 21.5 hours of continuous highway driving — independent sources put it around 17 hours, while the full distance we operate can run closer to 21.5 hours.",
            "Given the length of this drive, we don't recommend treating it as a single non-stop push. A two-day journey with a scheduled overnight stop is the realistic, safer way to cover this distance — whether self-driving or booking a private transfer.",
            "Border processing, interior traffic, and rest stops all add to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from the UAE into Saudi Arabia at the Al Batha border, then continues a long way north and west through the Kingdom's interior toward Makkah.",
            "Given the distance, most operators — us included — plan an overnight stop partway through rather than attempting the full drive in one push. We don't name specific interior highway numbers here since routing varies by provider.",
        ],
        borderDescription: [
            "This route crosses into Saudi Arabia at the Al Batha border, the crossing point used for UAE-Saudi road travel.",
            "You'll go through UAE exit procedures on the Dubai side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality and residency status, so confirm your own eligibility before traveling. We're a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "Given the genuine length of this route — over 1,800 km and a realistic two-day journey — we plan it with a scheduled overnight stop rather than a single marathon push, whether you're self-driving or booking with us. A private chauffeur-driven transfer removes the burden of managing that distance, the overnight logistics, and the border crossing yourself.",
        journeyPlanningNote: "Because this is realistically a two-day trip, plan overnight accommodation partway through in addition to the usual document and rest-stop planning. Non-Muslims are also not permitted to enter Makkah itself.",
        bestTimeNote: "Given the length of this route, avoid starting late in the day if you're aiming to reach the scheduled overnight stop before dark. Hajj/Umrah peak season adds meaningful extra time on top of an already long journey.",

        mapOriginQuery: 'Dubai, UAE',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dubai to Makkah Taxi',
            url: '/routes/dubai-makkah/',
            description: 'Pre-booked private cross-border transfer from Dubai to Makkah, planned as a two-day journey.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Dubai Taxi',
            url: '/routes/makkah-dubai/',
            description: 'Book the return leg from Makkah back to Dubai.',
        },
        relatedTaxiRoutes: [
            { name: 'Dubai to Madinah Taxi', url: '/routes/dubai-madinah/', description: 'Private transfer from Dubai to Madinah.' },
            { name: 'Dubai to Riyadh Taxi', url: '/routes/dubai-riyadh/', description: 'Private transfer from Dubai to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'Al Batha Border Crossing Guide',
            url: '/border-crossings/taxi-al-batha-border-crossing/',
            description: 'What to expect crossing the UAE-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['abu-dhabi-to-makkah', 'kuwait-to-makkah'],

        seoTitle: 'Dubai to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Dubai to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Dubai by car.',
        h1: 'Dubai to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Dubai from Makkah by road?', shortAnswer: 'Approximately 1,830–2,110 km', detailedAnswer: "By road via the Al Batha border, Dubai to Makkah is approximately 1,830 to 2,110 km — one of the longer GCC routes, so the gap between different route calculators is wider than on shorter trips." },
            { question: 'How long does it take to drive from Dubai to Makkah?', shortAnswer: 'Approximately 17–21.5 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 17 to 21.5 hours. Given the length, we plan this as a two-day journey with a scheduled overnight stop rather than a single push." },
            { question: 'What is the Dubai to Makkah driving distance?', shortAnswer: 'Roughly 1,900 km by road', detailedAnswer: "Routing tools generally put the Dubai to Makkah driving distance between roughly 1,830 and 2,110 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Dubai to Makkah by car?', shortAnswer: 'Yes, with valid travel documents and a realistic 2-day plan', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both possible. Given the distance, plan for an overnight stop. Every passenger needs a valid passport and correct Saudi visa/entry permission." },
            { question: 'Which border do you cross from Dubai to Saudi Arabia?', shortAnswer: 'Al Batha', detailedAnswer: "The Al Batha border is the crossing point used for UAE-Saudi road travel on this route." },
            { question: 'Is Dubai to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dubai to Makkah private taxi service, planned as a two-day journey with a scheduled overnight stop." },
            { question: 'Can families travel from Dubai to Makkah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given the genuine length of this route, families typically split it over two days with an overnight stop rather than attempting it in one push." },
            { question: 'Can I book a return taxi from Makkah to Dubai?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, also planned as a two-day journey. See our Makkah to Dubai taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border entirely, and is always shorter than the actual driving distance — the gap is especially large on a route this long." },
            { question: 'Why do different websites show different Dubai to Makkah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "On a route this long, small differences in starting address, destination point, or preferred interior route compound into a wider final gap than on shorter trips. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'abu-dhabi-to-makkah': {
        slug: 'abu-dhabi-to-makkah',
        origin: 'Abu Dhabi',
        originFull: 'Abu Dhabi, UAE',
        originCountry: 'UAE',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,750–2,000 km',
        distanceHeadline: '~1,880 km',
        drivingTimeRange: 'approximately 16–19.5 hours of continuous driving',
        drivingTimeHeadline: '~16–19.5 hrs',
        routeHeadline: 'Via Al Batha Border & the Interior',
        borderName: 'Al Batha',
        travelType: 'International (cross-border, 2-day journey recommended)',

        routeDescription: [
            "The road distance from Abu Dhabi to Makkah is approximately 1,750 to 2,000 km — slightly shorter than the Dubai to Makkah route, but still one of the longer GCC-to-Makkah journeys. Independent calculators generally show 1,750-1,880 km, while the fuller distance across the Kingdom on the route we operate runs closer to 2,000 km.",
            "As with the Dubai route, this is a long enough trip that different calculators can disagree by a meaningful margin — treat the figure above as a planning range.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 16 to 19.5 hours of continuous highway driving.",
            "Given the length of this drive, we recommend a two-day journey with a scheduled overnight stop rather than a single non-stop push, whether self-driving or booking a private transfer.",
            "Border processing, interior traffic, and rest stops all add to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from the UAE into Saudi Arabia at the Al Batha border, then continues north and west through the Kingdom's interior toward Makkah.",
            "Given the distance, we plan an overnight stop partway through rather than attempting the full drive in one push. We don't name specific interior highway numbers here since routing varies by provider.",
        ],
        borderDescription: [
            "This route crosses into Saudi Arabia at the Al Batha border, the crossing point used for UAE-Saudi road travel.",
            "You'll go through UAE exit procedures on the Abu Dhabi side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality and residency status, so confirm your own eligibility before traveling. We're a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "At close to 1,880 km and a genuine two-day journey, we plan this route with a scheduled overnight stop rather than a single marathon push. A private chauffeur-driven transfer removes the burden of managing that distance, the overnight logistics, and the border crossing yourself.",
        journeyPlanningNote: "Because this is realistically a two-day trip, plan overnight accommodation partway through in addition to the usual document and rest-stop planning. Non-Muslims are also not permitted to enter Makkah itself.",
        bestTimeNote: "Given the length of this route, avoid starting late in the day if you're aiming to reach the scheduled overnight stop before dark. Hajj/Umrah peak season adds meaningful extra time on top of an already long journey.",

        mapOriginQuery: 'Abu Dhabi, UAE',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Abu Dhabi to Makkah Taxi',
            url: '/routes/abu-dhabi-makkah/',
            description: 'Pre-booked private cross-border transfer from Abu Dhabi to Makkah, planned as a two-day journey.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Abu Dhabi Taxi',
            url: '/routes/makkah-abu-dhabi/',
            description: 'Book the return leg from Makkah back to Abu Dhabi.',
        },
        relatedTaxiRoutes: [
            { name: 'Abu Dhabi to Madinah Taxi', url: '/routes/abu-dhabi-madinah/', description: 'Private transfer from Abu Dhabi to Madinah.' },
            { name: 'Abu Dhabi to Riyadh Taxi', url: '/routes/abu-dhabi-riyadh/', description: 'Private transfer from Abu Dhabi to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'Al Batha Border Crossing Guide',
            url: '/border-crossings/taxi-al-batha-border-crossing/',
            description: 'What to expect crossing the UAE-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['dubai-to-makkah', 'kuwait-to-makkah'],

        seoTitle: 'Abu Dhabi to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Abu Dhabi to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Abu Dhabi by car.',
        h1: 'Abu Dhabi to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Abu Dhabi from Makkah by road?', shortAnswer: 'Approximately 1,750–2,000 km', detailedAnswer: "By road via the Al Batha border, Abu Dhabi to Makkah is approximately 1,750 to 2,000 km — one of the longer GCC routes." },
            { question: 'How long does it take to drive from Abu Dhabi to Makkah?', shortAnswer: 'Approximately 16–19.5 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 16 to 19.5 hours. Given the length, we plan this as a two-day journey with a scheduled overnight stop." },
            { question: 'What is the Abu Dhabi to Makkah driving distance?', shortAnswer: 'Roughly 1,880 km by road', detailedAnswer: "Routing tools generally put the Abu Dhabi to Makkah driving distance between roughly 1,750 and 2,000 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Abu Dhabi to Makkah by car?', shortAnswer: 'Yes, with valid travel documents and a realistic 2-day plan', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both possible. Given the distance, plan for an overnight stop. Every passenger needs a valid passport and correct Saudi visa/entry permission." },
            { question: 'Which border do you cross from Abu Dhabi to Saudi Arabia?', shortAnswer: 'Al Batha', detailedAnswer: "The Al Batha border is the crossing point used for UAE-Saudi road travel on this route." },
            { question: 'Is Abu Dhabi to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Abu Dhabi to Makkah private taxi service, planned as a two-day journey with a scheduled overnight stop." },
            { question: 'Can families travel from Abu Dhabi to Makkah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given the genuine length of this route, families typically split it over two days with an overnight stop rather than attempting it in one push." },
            { question: 'Can I book a return taxi from Makkah to Abu Dhabi?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, also planned as a two-day journey. See our Makkah to Abu Dhabi taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border entirely, and is always shorter than the actual driving distance — the gap is especially large on a route this long." },
            { question: 'Why do different websites show different Abu Dhabi to Makkah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "On a route this long, small differences in starting address, destination point, or preferred interior route compound into a wider final gap than on shorter trips. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'riyadh-to-makkah': {
        slug: 'riyadh-to-makkah',
        origin: 'Riyadh',
        originFull: 'Riyadh, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 870–880 km',
        distanceHeadline: '~870 km',
        drivingTimeRange: 'approximately 8–9 hours of continuous driving',
        drivingTimeHeadline: '~8–9 hrs',
        routeHeadline: 'Direct via the Riyadh-Makkah Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Riyadh to Makkah is approximately 870 to 880 km. This figure is consistent across independent route calculators and matches what our own dispatch team sees on this run — one of the more tightly-agreed distances in our network, since it's an entirely domestic route with a well-established highway connection.",
            "Your exact pickup point within Riyadh and drop-off point in Makkah can still shift the total by a small amount, but the variance here is much smaller than on the longer international routes.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 8 to 9 hours at normal highway speeds — a demanding but very manageable single-day drive.",
            "Total journey time is a little longer once you add rest stops, meals, and normal daytime traffic around both cities. Most travelers on this route drive it as a single day with one or two rest stops rather than splitting it overnight.",
            "Traffic on the approach into Makkah can increase noticeably during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs west from Riyadh, crossing the central Saudi interior, before descending into the Makkah region and arriving at the city itself. As a fully domestic route, there's no border to cross.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "Riyadh to Makkah is a genuinely long day's drive at 8-9 hours — manageable for a confident self-driver with a rest stop or two, but many travelers, particularly families or business travelers who want to arrive rested, prefer a private chauffeur-driven transfer instead.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — plan separate arrangements for any non-Muslim travelers in your group.",
        bestTimeNote: "Weekday daytime traffic around both Riyadh and the Makkah approach is generally lighter than weekends and public holidays. Hajj and Umrah peak seasons bring significantly more traffic into Makkah specifically — build in extra time during these periods.",

        mapOriginQuery: 'Riyadh, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Riyadh to Makkah Taxi',
            url: '/routes/riyadh-makkah/',
            description: 'Pre-booked private transfer from Riyadh to Makkah.',
        },
        // No 'Makkah to Riyadh' commercial route page exists yet (only the outbound
        // riyadh-makkah page) — omitted rather than linking a page that doesn't exist.
        relatedTaxiRoutes: [
            { name: 'Riyadh to Jeddah Taxi', url: '/routes/riyadh-jeddah/', description: 'Private transfer from Riyadh to Jeddah.' },
            { name: 'Riyadh to Dammam Taxi', url: '/routes/riyadh-dammam/', description: 'Private transfer from Riyadh to Dammam.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['dammam-to-makkah', 'jeddah-to-makkah'],

        seoTitle: 'Riyadh to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Riyadh to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Riyadh by car.',
        h1: 'Riyadh to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Riyadh from Makkah by road?', shortAnswer: 'Approximately 870–880 km', detailedAnswer: "By road, Riyadh to Makkah is approximately 870 to 880 km — one of the more consistently reported distances in our network, since it's a fully domestic route." },
            { question: 'How long does it take to drive from Riyadh to Makkah?', shortAnswer: 'Approximately 8–9 hours of driving', detailedAnswer: "Pure driving time is approximately 8 to 9 hours at normal highway speeds. Total journey time is a little longer with rest stops and traffic." },
            { question: 'What is the Riyadh to Makkah driving distance?', shortAnswer: 'Roughly 870 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 870 to 880 km for this domestic route." },
            { question: 'Can I travel from Riyadh to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options for this fully domestic route." },
            { question: 'Is Riyadh to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — Riyadh and Makkah are both within Saudi Arabia, so there's no border crossing or international documentation required for this route." },
            { question: 'Is Riyadh to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Riyadh to Makkah private taxi service, with a single vehicle from your Riyadh pickup through to your Makkah drop-off point." },
            { question: 'Can families travel from Riyadh to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At 8-9 hours, this is a manageable single-day drive for most families, especially with a private vehicle and a rest stop or two." },
            { question: 'Can I book a return taxi from Makkah to Riyadh?', shortAnswer: 'Yes, contact us to arrange it', detailedAnswer: "Yes — contact us directly with your travel date for the return leg. Send your route and date via WhatsApp for a fixed quote on the Makkah to Riyadh direction." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance, which follows real highways and terrain." },
            { question: 'Why do different websites show different Riyadh to Makkah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established domestic route, exact pickup and drop-off points and different mapping providers can shift the total by a small amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dammam-to-makkah': {
        slug: 'dammam-to-makkah',
        origin: 'Dammam',
        originFull: 'Dammam, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,190–1,290 km',
        distanceHeadline: '~1,250 km',
        drivingTimeRange: 'approximately 12–13 hours of continuous driving',
        drivingTimeHeadline: '~12–13 hrs',
        routeHeadline: 'Via the Interior, through the Riyadh Area',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Dammam to Makkah is approximately 1,190 to 1,290 km — one of the longer domestic routes we cover. Independent calculators show a fairly wide spread across that range, and our own figure of around 1,250 km sits in the middle of it.",
            "Your exact pickup point in Dammam and drop-off point in Makkah both affect the total, as does which interior route a mapping tool selects.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 12 to 13 hours at normal highway speeds — genuinely one of the longer domestic drives in the Kingdom.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,200+ km domestic trip. Most travelers treat this as a long single-day push with a few stops.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs from Dammam across Saudi Arabia's Eastern Province and interior — generally via the Riyadh area — before continuing on to Makkah. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 12-13 hours, this is genuinely one of the longer domestic drives in the Kingdom — most families and business travelers prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — plan separate arrangements for any non-Muslim travelers in your group.",
        bestTimeNote: "Hajj and Umrah peak seasons bring significantly more traffic into Makkah specifically — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Dammam, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dammam to Makkah Taxi',
            url: '/routes/dammam-makkah/',
            description: 'Pre-booked private transfer from Dammam to Makkah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Dammam Taxi',
            url: '/routes/makkah-dammam/',
            description: 'Book the return leg from Makkah back to Dammam.',
        },
        relatedTaxiRoutes: [
            { name: 'Dammam to Jeddah Taxi', url: '/routes/dammam-jeddah/', description: 'Private transfer from Dammam to Jeddah.' },
            { name: 'Dammam to Madinah Taxi', url: '/routes/dammam-madinah/', description: 'Private transfer from Dammam to Madinah.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['riyadh-to-makkah', 'jeddah-to-makkah'],

        seoTitle: 'Dammam to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Dammam to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Dammam by car.',
        h1: 'Dammam to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Dammam from Makkah by road?', shortAnswer: 'Approximately 1,190–1,290 km', detailedAnswer: "By road, Dammam to Makkah is approximately 1,190 to 1,290 km — one of the longer domestic routes, with a wider variance than shorter Saudi routes." },
            { question: 'How long does it take to drive from Dammam to Makkah?', shortAnswer: 'Approximately 12–13 hours of driving', detailedAnswer: "Pure driving time is approximately 12 to 13 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'What is the Dammam to Makkah driving distance?', shortAnswer: 'Roughly 1,250 km by road', detailedAnswer: "Routing tools generally show approximately 1,190 to 1,290 km for this domestic route, depending on the exact interior route selected." },
            { question: 'Can I travel from Dammam to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options for this domestic route." },
            { question: 'Is Dammam to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — Dammam and Makkah are both within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Dammam to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dammam to Makkah private taxi service, with a single vehicle from your Dammam pickup through to your Makkah drop-off point." },
            { question: 'Can families travel from Dammam to Makkah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 12-13 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Can I book a return taxi from Makkah to Dammam?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Makkah to Dammam taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Dammam to Makkah distances?', shortAnswer: 'Different exact start/end points and interior route choices', detailedAnswer: "Different mapping providers can select different interior routes and starting/ending points, which compounds into a noticeable gap on a 1,200+ km trip. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'jeddah-to-makkah': {
        slug: 'jeddah-to-makkah',
        origin: 'Jeddah',
        originFull: 'Jeddah, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 85–95 km',
        distanceHeadline: '~90 km',
        drivingTimeRange: 'approximately 60–90 minutes of driving in normal traffic',
        drivingTimeHeadline: '~60–90 min',
        routeHeadline: 'Direct via the Jeddah-Makkah Expressway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance between Jeddah and Makkah is approximately 85 to 95 km — one of the shortest routes in our network. The exact figure depends heavily on your specific pickup point in Jeddah (city center versus Jeddah Airport) and your destination hotel in Makkah.",
            "Because this is a short, extremely well-traveled route between two major cities, distance calculators generally agree closely, with the main variation coming from exactly where in each city you start and end.",
        ],
        drivingTimeDescription: [
            "In normal traffic, the drive typically takes around 60 to 90 minutes. This is a much shorter, simpler journey than the other routes on this page — genuinely a same-hour trip rather than a long-distance one.",
            "Travel time can increase meaningfully during Friday traffic, Ramadan evenings, and Hajj/Umrah peak periods, when the approach into Makkah gets significantly busier — allow extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The route runs directly from Jeddah to Makkah via a well-established expressway connection — one of the most heavily traveled roads in the Kingdom, given the volume of pilgrims arriving at Jeddah's King Abdulaziz International Airport en route to Umrah and Hajj.",
            "No border crossing on this fully domestic, short-distance route.",
        ],
        byCarNote: "Given the short distance, self-driving, taxi and private chauffeur are all straightforward options for this route — the deciding factor for most travelers is luggage, group size, and whether you'd rather not navigate an unfamiliar city and highway system right after a long flight.",
        journeyPlanningNote: "This is a short trip, so the usual long-distance planning (overnight stops, extensive rest breaks) doesn't apply — the main consideration is timing your pickup around flight arrival and Makkah hotel check-in. Non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "Traffic on this route is heaviest around Friday prayers, in the evenings during Ramadan, and throughout the Hajj and Umrah peak seasons — all of which can meaningfully extend a normally 60-90 minute trip. Outside those periods, traffic is comparatively predictable.",

        mapOriginQuery: 'Jeddah, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Jeddah to Makkah Taxi',
            url: '/routes/jeddah-makkah/',
            description: 'Pre-booked private transfer from Jeddah (including the airport) to Makkah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Jeddah Taxi',
            url: '/routes/makkah-jeddah/',
            description: 'Book the return leg from Makkah back to Jeddah.',
        },
        relatedTaxiRoutes: [
            { name: 'Jeddah to Madinah Taxi', url: '/routes/jeddah-madinah/', description: 'Private transfer from Jeddah to Madinah.' },
            { name: 'Jeddah to Taif Taxi', url: '/routes/jeddah-taif/', description: 'Private transfer from Jeddah to Taif.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['madinah-to-makkah', 'riyadh-to-makkah'],

        seoTitle: 'Jeddah to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Jeddah to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Jeddah by car.',
        h1: 'Jeddah to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Jeddah from Makkah by road?', shortAnswer: 'Approximately 85–95 km', detailedAnswer: "By road, Jeddah to Makkah is approximately 85 to 95 km, depending on your exact pickup point in Jeddah (city vs. airport) and your hotel in Makkah." },
            { question: 'How long does it take to drive from Jeddah to Makkah?', shortAnswer: 'Approximately 60–90 minutes in normal traffic', detailedAnswer: "In normal traffic the drive takes around 60 to 90 minutes. This can extend meaningfully during Friday traffic, Ramadan evenings, and Hajj/Umrah peak periods." },
            { question: 'What is the Jeddah to Makkah driving distance?', shortAnswer: 'Roughly 90 km by road', detailedAnswer: "Routing tools generally show approximately 85 to 95 km for this short, well-established route." },
            { question: 'Can I travel from Jeddah to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all straightforward given the short distance." },
            { question: 'Is Jeddah to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both cities are within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Jeddah to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Jeddah to Makkah private taxi service, including direct pickups from Jeddah's King Abdulaziz International Airport." },
            { question: 'Can families travel from Jeddah to Makkah by car?', shortAnswer: 'Yes, easily', detailedAnswer: "Yes. At 60-90 minutes, this is one of the easiest routes in our network for families, especially arriving straight from a flight with luggage." },
            { question: 'Can I book a return taxi from Makkah to Jeddah?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, including drop-offs at Jeddah Airport. See our Makkah to Jeddah taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely — on a short route like this the gap is smaller than on long-distance trips, but the road distance is still the more useful planning figure." },
            { question: 'Why do different websites show different Jeddah to Makkah distances?', shortAnswer: 'Different exact start/end points within each city', detailedAnswer: "On a short route, the biggest source of variation is simply where in Jeddah (downtown vs. airport) and where in Makkah (which hotel/area) each source measures from. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'madinah-to-makkah': {
        slug: 'madinah-to-makkah',
        origin: 'Madinah',
        originFull: 'Madinah, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 435–460 km',
        distanceHeadline: '~450 km',
        drivingTimeRange: 'approximately 4–4.5 hours of pure driving (around 5 hours total with a Miqat stop)',
        drivingTimeHeadline: '~4–5 hrs',
        routeHeadline: 'Direct via the Hijrah Highway (Highway 15)',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance between Madinah and Makkah is approximately 435 to 460 km. Most sources cluster closely around 447-450 km, making this one of the more consistently reported distances on this page.",
            "As with any route, your exact pickup point in Madinah and destination in Makkah shift the total slightly, but the variance here is modest compared to longer or international routes.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 4 to 4.5 hours at normal highway speeds.",
            "Total journey time is typically closer to 5 hours once you include the stop at the Miqat point, where pilgrims continuing on to Makkah for Umrah enter Ihram before continuing.",
            "Traffic increases during Hajj and Umrah peak seasons and around major Islamic holidays — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The route between Madinah and Makkah runs primarily along the Hijrah Highway (Highway 15), a modern multi-lane expressway that directly connects the two holy cities — one of the most well-established and heavily traveled roads in the Kingdom.",
            "Pilgrims continuing on to Makkah for Umrah typically stop at the appropriate Miqat point along this route to enter Ihram before continuing.",
        ],
        byCarNote: "Given the well-established highway and moderate distance, self-driving, taxi, and private chauffeur are all common options — many pilgrims prefer a private transfer specifically because the driver knows the correct Miqat stop and timing for entering Ihram.",
        journeyPlanningNote: "If you're entering Ihram for Umrah, plan for a stop at the Miqat point along this route — most private transfers include this as standard. Non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "This route sees significant extra traffic during Hajj and Umrah peak seasons, and around major Islamic holidays — build in extra time during these periods.",

        mapOriginQuery: 'Madinah, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Madinah to Makkah Taxi',
            url: '/routes/madinah-makkah/',
            description: 'Pre-booked private transfer from Madinah to Makkah, including a Miqat stop.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Madinah Taxi',
            url: '/routes/makkah-madinah/',
            description: 'Book the return leg from Makkah back to Madinah.',
        },
        relatedTaxiRoutes: [
            { name: 'Madinah to Jeddah Taxi', url: '/routes/madinah-jeddah/', description: 'Private transfer from Madinah to Jeddah.' },
            { name: 'Madinah to Dammam Taxi', url: '/routes/madinah-dammam/', description: 'Private transfer from Madinah to Dammam.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['jeddah-to-makkah', 'kuwait-to-madinah'],

        seoTitle: 'Madinah to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Madinah to Makkah distance by road, estimated driving time, route map and Miqat information. See how far Makkah is from Madinah by car.',
        h1: 'Madinah to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Madinah from Makkah by road?', shortAnswer: 'Approximately 435–460 km', detailedAnswer: "By road, Madinah to Makkah is approximately 435 to 460 km via the Hijrah Highway (Highway 15), one of the more consistently reported distances on this page." },
            { question: 'How long does it take to drive from Madinah to Makkah?', shortAnswer: 'Approximately 4–4.5 hours of driving (around 5 hours with the Miqat stop)', detailedAnswer: "Pure driving time is approximately 4 to 4.5 hours. Total journey time is typically closer to 5 hours once you include the stop at the Miqat point for pilgrims entering Ihram." },
            { question: 'What is the Madinah to Makkah driving distance?', shortAnswer: 'Roughly 450 km by road', detailedAnswer: "Routing tools generally cluster around 447-450 km for this well-established route." },
            { question: 'Can I travel from Madinah to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options via the Hijrah Highway." },
            { question: 'Is Madinah to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both cities are within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Madinah to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Madinah to Makkah private taxi service, including the standard Miqat stop for pilgrims entering Ihram." },
            { question: 'Can families travel from Madinah to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At around 4.5-5 hours including the Miqat stop, this is a manageable day trip for most families." },
            { question: 'Can I book a return taxi from Makkah to Madinah?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Makkah to Madinah taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always somewhat shorter than the actual driving distance." },
            { question: 'Why do different websites show different Madinah to Makkah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established highway route, exact pickup and drop-off points and different mapping providers can shift the total by a small amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'bahrain-to-madinah': {
        slug: 'bahrain-to-madinah',
        origin: 'Bahrain',
        originFull: 'Manama, Bahrain',
        originCountry: 'Bahrain',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,287–1,290 km',
        distanceHeadline: '~1,290 km',
        drivingTimeRange: 'approximately 10–12 hours of continuous driving',
        drivingTimeHeadline: '~10–12 hrs',
        routeHeadline: 'Via King Fahd Causeway & the Interior',
        borderName: 'King Fahd Causeway',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Bahrain to Madinah is approximately 1,287 to 1,290 km. Independent route calculators and our own dispatch figures agree closely on this route — one of the more tightly-agreed distances among our GCC-to-Madinah routes.",
            "As with any causeway route, your exact pickup point on Bahrain's side and drop-off point in Madinah both affect the total by a modest amount.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 10 to 12 hours of continuous highway driving, not counting the causeway crossing itself.",
            "Total journey time is longer once you add the causeway border crossing, fuel and rest stops, and meals over a 1,280+ km trip. Most travelers treat this as a long single-day push with a few stops.",
            "Weekends (Thursdays and Saturdays) and public holidays on either side tend to bring heavier causeway traffic, adding to total journey time beyond the pure driving estimate above.",
        ],
        routeJourneyDescription: [
            "The journey starts by crossing the King Fahd Causeway from Bahrain into Saudi Arabia's Eastern Province, then continues through the Kingdom's interior toward Madinah in the northwest Hijaz region.",
            "We're not naming specific interior highway numbers here, since routing can vary by provider. Use the map below or a live navigation app for turn-by-turn directions closer to your travel date.",
        ],
        borderDescription: [
            "This route crosses the King Fahd Causeway, the only land link between Bahrain and Saudi Arabia — a 25 km bridge with border facilities partway across.",
            "You'll go through Bahraini exit procedures on the Bahrain side and Saudi entry procedures — passport control, visa verification, and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and the correct visa or entry permission for Saudi Arabia. Requirements vary by nationality and residency status, so confirm your own eligibility before traveling — we're a transport provider, not an immigration authority.",
            "Causeway wait times vary meaningfully by day and hour; see our dedicated King Fahd Causeway border crossing guide for more detail on what affects wait times.",
        ],
        byCarNote: "At around 1,290 km and 11+ hours before reaching Madinah, most pilgrims and families crossing from Bahrain choose a pre-booked private transfer over self-driving, since it removes the driving fatigue while someone else manages both the causeway crossing and the interior drive.",
        journeyPlanningNote: "If you're continuing on to Makkah afterwards, note that non-Muslims are not permitted to enter Makkah itself — Madinah has no such restriction.",
        bestTimeNote: "Weekend causeway traffic (Thursdays/Saturdays) and the Hajj/Umrah peak season both add real time to this journey — build in extra buffer during those periods.",

        mapOriginQuery: 'Manama, Bahrain',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Bahrain to Madinah Taxi',
            url: '/routes/bahrain-madinah/',
            description: 'Pre-booked private cross-border transfer from Bahrain to Madinah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Bahrain Taxi',
            url: '/routes/madinah-bahrain/',
            description: 'Book the return leg from Madinah back to Bahrain.',
        },
        relatedTaxiRoutes: [
            { name: 'Bahrain to Makkah Taxi', url: '/routes/bahrain-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Bahrain to Riyadh Taxi', url: '/routes/bahrain-riyadh/', description: 'Private transfer from Bahrain to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Bahrain-Saudi causeway.',
        },
        relatedDistanceSlugs: ['bahrain-to-makkah', 'doha-to-madinah'],

        seoTitle: 'Bahrain to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Bahrain to Madinah distance by road, estimated driving time, route map and border information. See how far Madinah is from Bahrain by car.',
        h1: 'Bahrain to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Bahrain from Madinah by road?', shortAnswer: 'Approximately 1,287–1,290 km', detailedAnswer: "By road via the King Fahd Causeway, Bahrain to Madinah is approximately 1,287 to 1,290 km — one of our more consistently-reported GCC-to-Madinah distances." },
            { question: 'How long does it take to drive from Bahrain to Madinah?', shortAnswer: 'Approximately 10–12 hours of driving', detailedAnswer: "Pure driving time (excluding the causeway crossing) is approximately 10 to 12 hours. Total journey time is longer once you add the causeway crossing, fuel/rest stops, and meals." },
            { question: 'What is the Bahrain to Madinah driving distance?', shortAnswer: 'Roughly 1,290 km by road', detailedAnswer: "Routing tools generally put the Bahrain to Madinah driving distance close to 1,287 to 1,290 km." },
            { question: 'Can I travel from Bahrain to Madinah by car?', shortAnswer: 'Yes, with valid travel documents', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common. Every passenger needs a valid passport and the correct Saudi visa or entry permission, and the vehicle needs correct causeway documentation." },
            { question: 'Which border do you cross from Bahrain to Saudi Arabia?', shortAnswer: 'The King Fahd Causeway', detailedAnswer: "The only land link between Bahrain and Saudi Arabia is the King Fahd Causeway, a 25 km bridge with border facilities partway across." },
            { question: 'Is Bahrain to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Bahrain to Madinah private taxi service, with a single vehicle from your Bahrain pickup through to your Madinah drop-off point." },
            { question: 'Can families travel from Bahrain to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks, extra luggage space, and realistic expectations around an 11+ hour trip including the causeway crossing." },
            { question: 'Can I book a return taxi from Madinah to Bahrain?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Madinah to Bahrain taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the causeway entirely, and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Bahrain to Madinah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "Figures vary because each source may use a different exact starting address, destination point, mapping provider, or preferred interior route across Saudi Arabia. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'doha-to-madinah': {
        slug: 'doha-to-madinah',
        origin: 'Doha',
        originFull: 'Doha, Qatar',
        originCountry: 'Qatar',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,396–1,405 km',
        distanceHeadline: '~1,400 km',
        drivingTimeRange: 'approximately 13–14 hours of continuous driving',
        drivingTimeHeadline: '~13–14 hrs',
        routeHeadline: 'Via Salwa Border & the Interior',
        borderName: 'Salwa / Abu Samra',
        travelType: 'International (cross-border)',

        routeDescription: [
            "The road distance from Doha to Madinah is approximately 1,396 to 1,405 km. Independent route calculators and the figure our own dispatch team sees on this run agree closely, making this one of the more consistently reported distances among our GCC-to-Madinah routes.",
            "Your exact pickup point in Doha and drop-off point in Madinah both shift the total by a modest amount, same as any long international route.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 13 to 14 hours at normal highway speeds — a genuinely long drive best planned with proper rest stops.",
            "Total journey time is longer once you add the Salwa border crossing, fuel/rest stops, and meals across the Kingdom. Many travelers on this route plan for a long single day with several stops.",
            "Border volume and interior road traffic both vary by day and season, adding uncertainty on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from Qatar into Saudi Arabia at the Salwa border (called Abu Samra on the Qatar side), then continues north and west through the Kingdom's Eastern Province and interior toward Madinah.",
            "We don't name specific interior highway numbers here, since exact numbering varies by routing provider — use the map below or live navigation for your actual travel date.",
        ],
        borderDescription: [
            "This is the only land crossing between Qatar and Saudi Arabia — known as Salwa on the Saudi side and Abu Samra on the Qatar side.",
            "You'll go through Qatari exit procedures on the Doha side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality, so confirm your own eligibility before traveling. We are a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume — we don't promise a fixed crossing time.",
        ],
        byCarNote: "At 13-14 hours of driving before reaching Madinah, most pilgrims from Doha choose a pre-booked private transfer rather than self-driving — it removes the fatigue of a genuinely demanding route and the responsibility of managing cross-border vehicle documentation yourself.",
        journeyPlanningNote: "If you're continuing on to Makkah afterwards, note that non-Muslims are not permitted to enter Makkah itself — Madinah has no such restriction.",
        bestTimeNote: "Hajj and Umrah peak seasons bring significantly more traffic on the interior roads and around Madinah itself — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Doha, Qatar',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Doha to Madinah Taxi',
            url: '/routes/doha-madinah/',
            description: 'Pre-booked private cross-border transfer from Doha to Madinah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Doha Taxi',
            url: '/routes/madinah-doha/',
            description: 'Book the return leg from Madinah back to Doha.',
        },
        relatedTaxiRoutes: [
            { name: 'Doha to Makkah Taxi', url: '/routes/doha-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Doha to Riyadh Taxi', url: '/routes/doha-riyadh/', description: 'Private transfer from Doha to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedBorderLink: {
            name: 'Salwa Border Crossing Guide',
            url: '/border-crossings/taxi-salwa-border-crossing/',
            description: 'What to expect crossing the Qatar-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['doha-to-makkah', 'bahrain-to-madinah'],

        seoTitle: 'Doha to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Doha to Madinah distance by road, estimated driving time, route map and border information. See how far Madinah is from Doha by car.',
        h1: 'Doha to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Doha from Madinah by road?', shortAnswer: 'Approximately 1,396–1,405 km', detailedAnswer: "By road via the Salwa border, Doha to Madinah is approximately 1,396 to 1,405 km." },
            { question: 'How long does it take to drive from Doha to Madinah?', shortAnswer: 'Approximately 13–14 hours of driving', detailedAnswer: "Pure driving time is approximately 13 to 14 hours. Total journey time is longer once you add the border crossing, fuel/rest stops, and meals." },
            { question: 'What is the Doha to Madinah driving distance?', shortAnswer: 'Roughly 1,400 km by road', detailedAnswer: "Routing tools generally cluster closely around 1,396 to 1,405 km for this route." },
            { question: 'Can I travel from Doha to Madinah by car?', shortAnswer: 'Yes, with valid travel documents', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both common. Every passenger needs a valid passport and the correct Saudi visa or entry permission." },
            { question: 'Which border do you cross from Doha to Saudi Arabia?', shortAnswer: 'Salwa (Saudi side) / Abu Samra (Qatar side)', detailedAnswer: "The only land crossing between Qatar and Saudi Arabia is known as Salwa on the Saudi side and Abu Samra on the Qatar side — the same physical crossing under two names." },
            { question: 'Is Doha to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Doha to Madinah private taxi service, with a single vehicle from your Doha pickup through to your Madinah drop-off point." },
            { question: 'Can families travel from Doha to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length of the drive, families typically plan for regular rest breaks and realistic expectations around a 13+ hour trip." },
            { question: 'Can I book a return taxi from Madinah to Doha?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Madinah to Doha taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border crossing entirely, and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Doha to Madinah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "Figures vary because each source may use a different exact starting address, destination point, mapping provider, or preferred interior route. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dubai-to-madinah': {
        slug: 'dubai-to-madinah',
        origin: 'Dubai',
        originFull: 'Dubai, UAE',
        originCountry: 'UAE',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,834–1,933 km',
        distanceHeadline: '~1,880 km',
        drivingTimeRange: 'approximately 17–19 hours of continuous driving',
        drivingTimeHeadline: '~17–19 hrs',
        routeHeadline: 'Via Al Batha Border & the Interior',
        borderName: 'Al Batha',
        travelType: 'International (cross-border, 2-day journey recommended)',

        routeDescription: [
            "The road distance from Dubai to Madinah is approximately 1,834 to 1,933 km — one of the longer GCC-to-Madinah routes. Independent route calculators show a genuine spread across that range, reflecting the different possible interior paths across Saudi Arabia.",
            "This is a long enough international trip that different calculators can disagree by a meaningful margin — treat the figure above as a planning range rather than an exact number.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 17 to 19 hours of continuous highway driving.",
            "Given the length of this drive, we don't recommend treating it as a single non-stop push. A two-day journey with a scheduled overnight stop is the realistic, safer way to cover this distance — whether self-driving or booking a private transfer.",
            "Border processing, interior traffic, and rest stops all add to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from the UAE into Saudi Arabia at the Al Batha border, then continues a long way north and west through the Kingdom's interior toward Madinah.",
            "Given the distance, we plan an overnight stop partway through rather than attempting the full drive in one push. We don't name specific interior highway numbers here since routing varies by provider.",
        ],
        borderDescription: [
            "This route crosses into Saudi Arabia at the Al Batha border, the crossing point used for UAE-Saudi road travel.",
            "You'll go through UAE exit procedures on the Dubai side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality and residency status, so confirm your own eligibility before traveling. We're a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "Given the genuine length of this route — close to 1,900 km and a realistic two-day journey — we plan it with a scheduled overnight stop rather than a single marathon push, whether you're self-driving or booking with us. A private chauffeur-driven transfer removes the burden of managing that distance, the overnight logistics, and the border crossing yourself.",
        journeyPlanningNote: "Because this is realistically a two-day trip, plan overnight accommodation partway through in addition to the usual document and rest-stop planning. If you're continuing on to Makkah afterwards, non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "Given the length of this route, avoid starting late in the day if you're aiming to reach the scheduled overnight stop before dark. Hajj/Umrah peak season adds meaningful extra time on top of an already long journey.",

        mapOriginQuery: 'Dubai, UAE',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dubai to Madinah Taxi',
            url: '/routes/dubai-madinah/',
            description: 'Pre-booked private cross-border transfer from Dubai to Madinah, planned as a two-day journey.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Dubai Taxi',
            url: '/routes/madinah-dubai/',
            description: 'Book the return leg from Madinah back to Dubai.',
        },
        relatedTaxiRoutes: [
            { name: 'Dubai to Makkah Taxi', url: '/routes/dubai-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Dubai to Riyadh Taxi', url: '/routes/dubai-riyadh/', description: 'Private transfer from Dubai to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedBorderLink: {
            name: 'Al Batha Border Crossing Guide',
            url: '/border-crossings/taxi-al-batha-border-crossing/',
            description: 'What to expect crossing the UAE-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['dubai-to-makkah', 'abu-dhabi-to-madinah'],

        seoTitle: 'Dubai to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Dubai to Madinah distance by road, estimated driving time, route map and border information. See how far Madinah is from Dubai by car.',
        h1: 'Dubai to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Dubai from Madinah by road?', shortAnswer: 'Approximately 1,834–1,933 km', detailedAnswer: "By road via the Al Batha border, Dubai to Madinah is approximately 1,834 to 1,933 km — one of the longer GCC routes, so different calculators show a wider spread than on shorter trips." },
            { question: 'How long does it take to drive from Dubai to Madinah?', shortAnswer: 'Approximately 17–19 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 17 to 19 hours. Given the length, we plan this as a two-day journey with a scheduled overnight stop rather than a single push." },
            { question: 'What is the Dubai to Madinah driving distance?', shortAnswer: 'Roughly 1,880 km by road', detailedAnswer: "Routing tools generally put the Dubai to Madinah driving distance between roughly 1,834 and 1,933 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Dubai to Madinah by car?', shortAnswer: 'Yes, with valid travel documents and a realistic 2-day plan', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both possible. Given the distance, plan for an overnight stop. Every passenger needs a valid passport and correct Saudi visa/entry permission." },
            { question: 'Which border do you cross from Dubai to Saudi Arabia?', shortAnswer: 'Al Batha', detailedAnswer: "The Al Batha border is the crossing point used for UAE-Saudi road travel on this route." },
            { question: 'Is Dubai to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dubai to Madinah private taxi service, planned as a two-day journey with a scheduled overnight stop." },
            { question: 'Can families travel from Dubai to Madinah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given the genuine length of this route, families typically split it over two days with an overnight stop rather than attempting it in one push." },
            { question: 'Can I book a return taxi from Madinah to Dubai?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, also planned as a two-day journey. See our Madinah to Dubai taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border entirely, and is always shorter than the actual driving distance — the gap is especially large on a route this long." },
            { question: 'Why do different websites show different Dubai to Madinah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "On a route this long, small differences in starting address, destination point, or preferred interior route compound into a wider final gap than on shorter trips. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'abu-dhabi-to-madinah': {
        slug: 'abu-dhabi-to-madinah',
        origin: 'Abu Dhabi',
        originFull: 'Abu Dhabi, UAE',
        originCountry: 'UAE',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 1,727–1,822 km',
        distanceHeadline: '~1,790 km',
        drivingTimeRange: 'approximately 17.5–18 hours of continuous driving',
        drivingTimeHeadline: '~17.5–18 hrs',
        routeHeadline: 'Via Al Batha Border & the Interior',
        borderName: 'Al Batha',
        travelType: 'International (cross-border, 2-day journey recommended)',

        routeDescription: [
            "The road distance from Abu Dhabi to Madinah is approximately 1,727 to 1,822 km — slightly shorter than the Dubai to Madinah route, but still one of the longer GCC-to-Madinah journeys. Independent calculators show a genuine spread across that range.",
            "As with the Dubai route, this is a long enough trip that different calculators can disagree by a meaningful margin — treat the figure above as a planning range.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 17.5 to 18 hours of continuous highway driving.",
            "Given the length of this drive, we recommend a two-day journey with a scheduled overnight stop rather than a single non-stop push, whether self-driving or booking a private transfer.",
            "Border processing, interior traffic, and rest stops all add to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from the UAE into Saudi Arabia at the Al Batha border, then continues north and west through the Kingdom's interior toward Madinah.",
            "Given the distance, we plan an overnight stop partway through rather than attempting the full drive in one push. We don't name specific interior highway numbers here since routing varies by provider.",
        ],
        borderDescription: [
            "This route crosses into Saudi Arabia at the Al Batha border, the crossing point used for UAE-Saudi road travel.",
            "You'll go through UAE exit procedures on the Abu Dhabi side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality and residency status, so confirm your own eligibility before traveling. We're a transport provider, not an immigration authority.",
            "Border processing time varies by day and volume, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "At close to 1,790 km and a genuine two-day journey, we plan this route with a scheduled overnight stop rather than a single marathon push. A private chauffeur-driven transfer removes the burden of managing that distance, the overnight logistics, and the border crossing yourself.",
        journeyPlanningNote: "Because this is realistically a two-day trip, plan overnight accommodation partway through in addition to the usual document and rest-stop planning. If you're continuing on to Makkah afterwards, non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "Given the length of this route, avoid starting late in the day if you're aiming to reach the scheduled overnight stop before dark. Hajj/Umrah peak season adds meaningful extra time on top of an already long journey.",

        mapOriginQuery: 'Abu Dhabi, UAE',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Abu Dhabi to Madinah Taxi',
            url: '/routes/abu-dhabi-madinah/',
            description: 'Pre-booked private cross-border transfer from Abu Dhabi to Madinah, planned as a two-day journey.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Abu Dhabi Taxi',
            url: '/routes/madinah-abu-dhabi/',
            description: 'Book the return leg from Madinah back to Abu Dhabi.',
        },
        relatedTaxiRoutes: [
            { name: 'Abu Dhabi to Makkah Taxi', url: '/routes/abu-dhabi-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Abu Dhabi to Riyadh Taxi', url: '/routes/abu-dhabi-riyadh/', description: 'Private transfer from Abu Dhabi to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedBorderLink: {
            name: 'Al Batha Border Crossing Guide',
            url: '/border-crossings/taxi-al-batha-border-crossing/',
            description: 'What to expect crossing the UAE-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['abu-dhabi-to-makkah', 'dubai-to-madinah'],

        seoTitle: 'Abu Dhabi to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Abu Dhabi to Madinah distance by road, estimated driving time, route map and border information. See how far Madinah is from Abu Dhabi by car.',
        h1: 'Abu Dhabi to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Abu Dhabi from Madinah by road?', shortAnswer: 'Approximately 1,727–1,822 km', detailedAnswer: "By road via the Al Batha border, Abu Dhabi to Madinah is approximately 1,727 to 1,822 km — one of the longer GCC routes." },
            { question: 'How long does it take to drive from Abu Dhabi to Madinah?', shortAnswer: 'Approximately 17.5–18 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 17.5 to 18 hours. Given the length, we plan this as a two-day journey with a scheduled overnight stop." },
            { question: 'What is the Abu Dhabi to Madinah driving distance?', shortAnswer: 'Roughly 1,790 km by road', detailedAnswer: "Routing tools generally put the Abu Dhabi to Madinah driving distance between roughly 1,727 and 1,822 km, depending on the exact route across Saudi Arabia." },
            { question: 'Can I travel from Abu Dhabi to Madinah by car?', shortAnswer: 'Yes, with valid travel documents and a realistic 2-day plan', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both possible. Given the distance, plan for an overnight stop. Every passenger needs a valid passport and correct Saudi visa/entry permission." },
            { question: 'Which border do you cross from Abu Dhabi to Saudi Arabia?', shortAnswer: 'Al Batha', detailedAnswer: "The Al Batha border is the crossing point used for UAE-Saudi road travel on this route." },
            { question: 'Is Abu Dhabi to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Abu Dhabi to Madinah private taxi service, planned as a two-day journey with a scheduled overnight stop." },
            { question: 'Can families travel from Abu Dhabi to Madinah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given the genuine length of this route, families typically split it over two days with an overnight stop rather than attempting it in one push." },
            { question: 'Can I book a return taxi from Madinah to Abu Dhabi?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, also planned as a two-day journey. See our Madinah to Abu Dhabi taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border entirely, and is always shorter than the actual driving distance — the gap is especially large on a route this long." },
            { question: 'Why do different websites show different Abu Dhabi to Madinah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "On a route this long, small differences in starting address, destination point, or preferred interior route compound into a wider final gap than on shorter trips. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'riyadh-to-madinah': {
        slug: 'riyadh-to-madinah',
        origin: 'Riyadh',
        originFull: 'Riyadh, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 830–840 km',
        distanceHeadline: '~835 km',
        drivingTimeRange: 'approximately 7–8.5 hours of continuous driving',
        drivingTimeHeadline: '~7–8.5 hrs',
        routeHeadline: 'Direct via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Riyadh to Madinah is approximately 830 to 840 km. Independent route calculators agree fairly closely on this figure, since it's a well-established domestic route.",
            "Your exact pickup point within Riyadh and drop-off point in Madinah can still shift the total by a small amount, but the variance here is modest compared to the longer international routes.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 7 to 8.5 hours at normal highway speeds — a demanding but manageable single-day drive.",
            "Total journey time is a little longer once you add rest stops, meals, and normal daytime traffic around both cities. Most travelers on this route drive it as a single day with one or two rest stops.",
            "Traffic on the approach into Madinah can increase during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs northwest from Riyadh across the central Saudi interior toward Madinah in the Hijaz region. As a fully domestic route, there's no border to cross.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "Riyadh to Madinah is a solid day's drive at 7-8.5 hours — manageable for a confident self-driver with a rest stop, but many travelers, particularly families or business travelers who want to arrive rested, prefer a private chauffeur-driven transfer instead.",
        journeyPlanningNote: "We don't currently run a dedicated Riyadh to Madinah booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Weekday daytime traffic is generally lighter than weekends and public holidays. Ramadan and the Hajj/Umrah peak season bring significantly more traffic into Madinah specifically — build in extra time during these periods.",

        mapOriginQuery: 'Riyadh, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Riyadh-Madinah commercial route page exists yet (checked both
        // directions) — per spec we don't guess or create one. See noDirectRouteNote.
        relatedTaxiRoutes: [
            { name: 'Riyadh to Makkah Taxi', url: '/routes/riyadh-makkah/', description: 'If continuing on to Makkah as part of the same trip.' },
            { name: 'Riyadh to Jeddah Taxi', url: '/routes/riyadh-jeddah/', description: 'Private transfer from Riyadh to Jeddah.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['riyadh-to-makkah', 'jeddah-to-madinah'],
        noDirectRouteNote: "We don't yet have a dedicated Riyadh to Madinah booking page on this site. Contact us directly via WhatsApp with your travel date and passenger count for a custom quote on this route — or see our Riyadh to Makkah taxi service if you're continuing on to Makkah as part of the same trip.",

        seoTitle: 'Riyadh to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Riyadh to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Riyadh by car.',
        h1: 'Riyadh to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Riyadh from Madinah by road?', shortAnswer: 'Approximately 830–840 km', detailedAnswer: "By road, Riyadh to Madinah is approximately 830 to 840 km — a well-established domestic route with fairly consistent figures across routing tools." },
            { question: 'How long does it take to drive from Riyadh to Madinah?', shortAnswer: 'Approximately 7–8.5 hours of driving', detailedAnswer: "Pure driving time is approximately 7 to 8.5 hours at normal highway speeds. Total journey time is a little longer with rest stops and traffic." },
            { question: 'What is the Riyadh to Madinah driving distance?', shortAnswer: 'Roughly 835 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 830 to 840 km for this domestic route." },
            { question: 'Can I travel from Riyadh to Madinah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both options for this fully domestic route." },
            { question: 'Is Riyadh to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — Riyadh and Madinah are both within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Riyadh to Madinah possible by private taxi?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp with your travel date and passenger count for a custom quote." },
            { question: 'Can families travel from Riyadh to Madinah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At 7-8.5 hours, this is a manageable single-day drive for most families, especially with a private vehicle and a rest stop." },
            { question: 'Can I book a return taxi from Madinah to Riyadh?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "Yes — contact us directly via WhatsApp with your travel date for a custom quote on the return leg." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance, which follows real highways and terrain." },
            { question: 'Why do different websites show different Riyadh to Madinah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established domestic route, exact pickup and drop-off points and different mapping providers can shift the total by a small amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dammam-to-madinah': {
        slug: 'dammam-to-madinah',
        origin: 'Dammam',
        originFull: 'Dammam, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 950 km to 1,220 km depending on the exact interior route',
        distanceHeadline: '~950 km',
        drivingTimeRange: 'approximately 9–11 hours of continuous driving',
        drivingTimeHeadline: '~9–11 hrs',
        routeHeadline: 'Via the Interior (Direct or via Riyadh)',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Dammam to Madinah is genuinely route-dependent: a more direct interior corridor puts it around 950 km, while calculators that route via Riyadh show closer to 1,220 km. Both are real, driveable routes — the gap comes down to which interior highway corridor is selected, not an error in either figure.",
            "Because of this, we present the fuller range rather than picking one number. Your dispatcher will confirm the specific route for your booking.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 9 to 11 hours at normal highway speeds, depending on which of the two general routes is used.",
            "Total journey time is longer once you add fuel and rest stops and meals. Most travelers treat this as a long single-day push with a few stops.",
            "Traffic on the approach into Madinah increases during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "There are two general ways to make this domestic journey: a more direct interior corridor heading northwest from Dammam, or a route that passes via the Riyadh area before continuing northwest to Madinah. As a fully domestic route, there's no border crossing either way.",
            "We're not naming specific highway numbers here, since routing can vary between providers and by which corridor is selected — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 9-11 hours, this is genuinely one of the longer domestic drives in the Kingdom — most families and business travelers prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself, though this restriction doesn't apply to Madinah — relevant if you're combining this trip with a Makkah visit.",
        bestTimeNote: "Ramadan and the Hajj/Umrah peak season bring significantly more traffic into Madinah specifically — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Dammam, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dammam to Madinah Taxi',
            url: '/routes/dammam-madinah/',
            description: 'Pre-booked private transfer from Dammam to Madinah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Dammam Taxi',
            url: '/routes/madinah-dammam/',
            description: 'Book the return leg from Madinah back to Dammam.',
        },
        relatedTaxiRoutes: [
            { name: 'Dammam to Makkah Taxi', url: '/routes/dammam-makkah/', description: 'Continue on to Makkah after Madinah, or book directly.' },
            { name: 'Dammam to Jeddah Taxi', url: '/routes/dammam-jeddah/', description: 'Private transfer from Dammam to Jeddah.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['dammam-to-makkah', 'jeddah-to-madinah'],

        seoTitle: 'Dammam to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Dammam to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Dammam by car.',
        h1: 'Dammam to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Dammam from Madinah by road?', shortAnswer: 'Approximately 950–1,220 km, depending on route', detailedAnswer: "By road, Dammam to Madinah is approximately 950 km via a more direct interior corridor, or closer to 1,220 km via a route through the Riyadh area — both are genuine driving routes." },
            { question: 'How long does it take to drive from Dammam to Madinah?', shortAnswer: 'Approximately 9–11 hours of driving', detailedAnswer: "Pure driving time is approximately 9 to 11 hours depending on the route used. Total journey time is longer with rest stops and traffic." },
            { question: 'What is the Dammam to Madinah driving distance?', shortAnswer: 'Roughly 950 km to 1,220 km by road', detailedAnswer: "Routing tools show a genuine spread here because there are two different real interior routes — a more direct corridor and one via Riyadh." },
            { question: 'Can I travel from Dammam to Madinah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options for this domestic route." },
            { question: 'Is Dammam to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — Dammam and Madinah are both within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Dammam to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dammam to Madinah private taxi service, with a single vehicle from your Dammam pickup through to your Madinah drop-off point." },
            { question: 'Can families travel from Dammam to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 9-11 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Can I book a return taxi from Madinah to Dammam?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Madinah to Dammam taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Dammam to Madinah distances?', shortAnswer: 'Two genuinely different interior routes exist', detailedAnswer: "Unlike most routes where the variance is just measurement differences, this route has two genuinely different interior corridors (direct vs. via Riyadh), which is why the range is wider than usual." },
        ],
        lastVerified: 'August 2026',
    },

    'jeddah-to-madinah': {
        slug: 'jeddah-to-madinah',
        origin: 'Jeddah',
        originFull: 'Jeddah, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 410–415 km',
        distanceHeadline: '~415 km',
        drivingTimeRange: 'approximately 4–4.5 hours of continuous driving',
        drivingTimeHeadline: '~4–4.5 hrs',
        routeHeadline: 'Direct via the Jeddah-Madinah Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Jeddah to Madinah is approximately 410 to 415 km. Independent route calculators agree closely on this figure, making it one of the more consistently reported distances in our network.",
            "Your exact pickup point in Jeddah (city versus airport) and drop-off point in Madinah shift the total slightly, but the variance here is modest.",
        ],
        drivingTimeDescription: [
            "Total travel time for this route is approximately 4 to 4.5 hours, depending on traffic within Jeddah and how many rest breaks you take along the way.",
            "This road can be windy in places, so a stable vehicle and a planned rest stop partway through make for a more comfortable trip than pushing straight through.",
            "Traffic increases during Hajj and Umrah peak periods and around major Islamic holidays — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The route runs directly from Jeddah north to Madinah via a well-established highway connection along the coastal plain before turning inland toward the city — one of the most heavily traveled pilgrim routes in the Kingdom.",
            "No border crossing on this fully domestic route. A short rest stop partway through (commonly around Rabigh or Masturah) is a common and sensible break on this run.",
        ],
        byCarNote: "Given the well-traveled highway and moderate distance, self-driving, taxi, and private chauffeur are all common options — many travelers prefer a private vehicle for the extra stability on the windier stretches and to avoid navigating an unfamiliar highway after a long flight into Jeddah.",
        journeyPlanningNote: "If you're continuing on to Makkah at any point in your trip, note that non-Muslims are not permitted to enter Makkah itself — Madinah has no such restriction.",
        bestTimeNote: "This route sees significant extra traffic during Hajj and Umrah peak seasons and around major Islamic holidays — build in extra time during these periods.",

        mapOriginQuery: 'Jeddah, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Jeddah to Madinah Taxi',
            url: '/routes/jeddah-madinah/',
            description: 'Pre-booked private transfer from Jeddah (including the airport) to Madinah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Madinah to Jeddah Taxi',
            url: '/routes/madinah-jeddah/',
            description: 'Book the return leg from Madinah back to Jeddah.',
        },
        relatedTaxiRoutes: [
            { name: 'Jeddah to Makkah Taxi', url: '/routes/jeddah-makkah/', description: 'Private transfer from Jeddah to Makkah.' },
            { name: 'Jeddah to Riyadh Taxi', url: '/routes/jeddah-riyadh/', description: 'Private transfer from Jeddah to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['jeddah-to-makkah', 'madinah-to-makkah'],

        seoTitle: 'Jeddah to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Jeddah to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Jeddah by car.',
        h1: 'Jeddah to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Jeddah from Madinah by road?', shortAnswer: 'Approximately 410–415 km', detailedAnswer: "By road, Jeddah to Madinah is approximately 410 to 415 km, one of the more consistently reported distances in our network." },
            { question: 'How long does it take to drive from Jeddah to Madinah?', shortAnswer: 'Approximately 4–4.5 hours of driving', detailedAnswer: "Total travel time is approximately 4 to 4.5 hours, depending on traffic within Jeddah and the number of rest breaks taken." },
            { question: 'What is the Jeddah to Madinah driving distance?', shortAnswer: 'Roughly 415 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 410 to 415 km for this well-established route." },
            { question: 'Can I travel from Jeddah to Madinah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options via the coastal highway." },
            { question: 'Is Jeddah to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both cities are within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Jeddah to Madinah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Jeddah to Madinah private taxi service, including direct pickups from Jeddah's King Abdulaziz International Airport." },
            { question: 'Can families travel from Jeddah to Madinah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At around 4-4.5 hours, this is a manageable trip for most families, with a rest stop along the way if needed." },
            { question: 'Can I book a return taxi from Madinah to Jeddah?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, including drop-offs at Jeddah Airport. See our Madinah to Jeddah taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely — the driving distance is somewhat longer since the road doesn't run perfectly straight between the two cities." },
            { question: 'Why do different websites show different Jeddah to Madinah distances?', shortAnswer: 'Different exact start/end points within each city', detailedAnswer: "The biggest source of variation is simply where in Jeddah (downtown vs. airport) and where in Madinah each source measures from. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'muscat-to-makkah': {
        slug: 'muscat-to-makkah',
        origin: 'Muscat',
        originFull: 'Muscat, Oman',
        originCountry: 'Oman',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: true,

        distanceRange: 'approximately 2,175–2,270 km',
        distanceHeadline: '~2,220 km',
        drivingTimeRange: 'approximately 20–22.5 hours of continuous driving',
        drivingTimeHeadline: '~20–22.5 hrs',
        routeHeadline: 'Via the Rub al Khali Border & the Interior',
        borderName: 'Rub al Khali / Ramlat Khaliya',
        travelType: 'International (cross-border, 2-day journey recommended)',

        routeDescription: [
            "The road distance from Muscat to Makkah is approximately 2,175 to 2,270 km — the longest GCC-to-Makkah route we cover. Independent route calculators show a genuine spread across that range, which is typical for a trip this long.",
            "Given the distance involved, treat any single precise figure you see online with some skepticism — a range is the more honest answer for a route of this length.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 20 to 22.5 hours of continuous highway driving — the longest of any route in our network.",
            "We plan this honestly as a two-day journey with a scheduled overnight stop, not a single exhausting push. This applies whether you're self-driving or booking a private transfer with us.",
            "Border processing, interior traffic, and rest stops all add meaningfully to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route crosses from Oman into Saudi Arabia at the border connecting the Ad Dhahirah region of Oman with the Eastern Province of Saudi Arabia, via a road that traverses the Rub' al Khali (Empty Quarter) desert, then continues a long way north and west through the Kingdom's interior toward Makkah.",
            "Given the exceptional distance, we schedule an overnight stop partway through rather than attempting the full drive in one push. We don't name specific interior highway numbers here since routing varies by provider.",
        ],
        borderDescription: [
            "This is the only land crossing between Oman and Saudi Arabia — known as Ramlat Khaliya on the Omani side and Rub al Khali on the Saudi side (also called the Empty Quarter crossing), connecting the Ad Dhahirah region of Oman with Saudi Arabia's Eastern Province through the Rub' al Khali desert.",
            "You'll go through Omani exit procedures on the Muscat side and Saudi entry procedures — passport control, visa verification and vehicle documentation checks — on the Saudi side.",
            "Every passenger needs a valid passport and correct Saudi visa/entry permission; requirements vary by nationality and residency status, so confirm your own eligibility before traveling. We're a transport provider, not an immigration authority.",
            "Given the remote desert location of this crossing, plan for a genuinely long, isolated stretch of driving on either side — border processing time itself varies by day and volume, and we don't promise a fixed crossing time.",
        ],
        byCarNote: "At over 2,200 km and more than 20 hours of driving, this is genuinely the longest route we operate — we don't book it as a single push. A scheduled overnight stop and a private chauffeur-driven transfer mean you arrive rested and ready for Umrah, not exhausted from a marathon desert crossing.",
        journeyPlanningNote: "Because this is realistically a two-day trip through remote desert terrain, plan overnight accommodation partway through, extra water and supplies, and confirm your vehicle is suited to the distance. Non-Muslims are also not permitted to enter Makkah itself.",
        bestTimeNote: "Given the remote, desert nature of this route, avoid starting late in the day. Hajj/Umrah peak season adds meaningful extra time on top of an already very long journey — build in significant buffer.",

        mapOriginQuery: 'Muscat, Oman',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Muscat to Makkah Taxi',
            url: '/routes/muscat-makkah/',
            description: 'Pre-booked private cross-border transfer from Muscat to Makkah, planned as a two-day journey.',
        },
        relatedReturnTaxiRoute: {
            name: 'Makkah to Muscat Taxi',
            url: '/routes/makkah-muscat/',
            description: 'Book the return leg from Makkah back to Muscat.',
        },
        relatedTaxiRoutes: [
            { name: 'Muscat to Madinah Taxi', url: '/routes/muscat-madinah/', description: 'Private transfer from Muscat to Madinah.' },
            { name: 'Muscat to Riyadh Taxi', url: '/routes/muscat-riyadh/', description: 'Private transfer from Muscat to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedBorderLink: {
            name: 'Rub al Khali Border Crossing Guide',
            url: '/border-crossings/taxi-rub-al-khali-border-crossing/',
            description: 'What to expect crossing the Oman-Saudi border by private vehicle.',
        },
        relatedDistanceSlugs: ['kuwait-to-makkah', 'bahrain-to-makkah'],

        seoTitle: 'Muscat to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Muscat to Makkah distance by road, estimated driving time, route map and border information. See how far Makkah is from Muscat by car.',
        h1: 'Muscat to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Muscat from Makkah by road?', shortAnswer: 'Approximately 2,175–2,270 km', detailedAnswer: "By road via the Rub al Khali border, Muscat to Makkah is approximately 2,175 to 2,270 km — the longest GCC-to-Makkah route we cover." },
            { question: 'How long does it take to drive from Muscat to Makkah?', shortAnswer: 'Approximately 20–22.5 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 20 to 22.5 hours. Given the exceptional length, we plan this as a two-day journey with a scheduled overnight stop." },
            { question: 'What is the Muscat to Makkah driving distance?', shortAnswer: 'Roughly 2,220 km by road', detailedAnswer: "Routing tools generally put the Muscat to Makkah driving distance between roughly 2,175 and 2,270 km, depending on the exact route." },
            { question: 'Can I travel from Muscat to Makkah by car?', shortAnswer: 'Yes, with valid travel documents and a realistic 2-day plan', detailedAnswer: "Yes — self-driving and private chauffeur transfer are both possible. Given the distance and remote desert crossing, plan for an overnight stop. Every passenger needs a valid passport and correct Saudi visa/entry permission." },
            { question: 'Which border do you cross from Muscat to Saudi Arabia?', shortAnswer: 'Ramlat Khaliya (Oman side) / Rub al Khali (Saudi side)', detailedAnswer: "The only land crossing between Oman and Saudi Arabia connects the Ad Dhahirah region of Oman with the Eastern Province of Saudi Arabia through the Rub' al Khali (Empty Quarter) desert." },
            { question: 'Is Muscat to Makkah possible by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Muscat to Makkah private taxi service, planned as a two-day journey with a scheduled overnight stop." },
            { question: 'Can families travel from Muscat to Makkah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given this is the longest route we operate, families should plan for two days with an overnight stop rather than attempting it in one push." },
            { question: 'Can I book a return taxi from Makkah to Muscat?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction, also planned as a two-day journey. See our Makkah to Muscat taxi page." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads and the border entirely, and is always shorter than the actual driving distance — the gap is especially large on a route this long." },
            { question: 'Why do different websites show different Muscat to Makkah distances?', shortAnswer: 'Different routing engines, start/end points and route choices', detailedAnswer: "On the longest route in our network, small differences in starting address, destination point, or preferred interior route compound into a wider final gap than on shorter trips. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'al-khobar-to-makkah': {
        slug: 'al-khobar-to-makkah',
        origin: 'Al Khobar',
        originFull: 'Al Khobar, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,190–1,293 km',
        distanceHeadline: '~1,250 km',
        drivingTimeRange: 'approximately 12–14 hours of continuous driving',
        drivingTimeHeadline: '~12–14 hrs',
        routeHeadline: 'Via the Interior, through the Riyadh Area',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Al Khobar to Makkah is approximately 1,190 to 1,293 km. Al Khobar sits in the same Eastern Province metro area as Dammam — a short local hop apart — so this route closely tracks the distance and route of our Dammam to Makkah journey, with a small variation depending on your exact pickup point.",
            "Independent route calculators show figures in this range, consistent with what we see on the closely related Dammam to Makkah run.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 12 to 14 hours at normal highway speeds — one of the longer domestic drives in the Kingdom.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,200+ km domestic trip. Most travelers treat this as a long single-day push with a few stops.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs from Al Khobar across Saudi Arabia's Eastern Province and interior — generally via the Riyadh area — before continuing on to Makkah, following essentially the same corridor as the Dammam to Makkah route. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 12-14 hours, this is genuinely one of the longer domestic drives in the Kingdom — most families and business travelers prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued.",
        journeyPlanningNote: "We don't currently run a dedicated Al Khobar to Makkah booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Hajj and Umrah peak seasons bring significantly more traffic into Makkah specifically — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Al Khobar, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated Al Khobar-Makkah commercial route page exists yet (checked both
        // directions and general "Khobar" variants) — per spec we don't guess or create
        // one. The closely related Dammam to Makkah service covers this journey in
        // practice, since Al Khobar and Dammam are part of the same metro area.
        relatedTaxiRoutes: [
            { name: 'Dammam to Makkah Taxi', url: '/routes/dammam-makkah/', description: 'The closest equivalent service — Al Khobar is a short local pickup from Dammam.' },
            { name: 'Khobar to Bahrain Taxi', url: '/routes/khobar-bahrain/', description: 'Private transfer from Al Khobar to Bahrain via the King Fahd Causeway.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['dammam-to-makkah', 'riyadh-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated Al Khobar to Makkah booking page on this site. Al Khobar sits in the same Eastern Province metro area as Dammam, so our existing Dammam to Makkah taxi service covers this journey with a local Al Khobar pickup available on request — or contact us directly via WhatsApp for a custom quote.",

        seoTitle: 'Al Khobar to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Al Khobar to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Al Khobar by car.',
        h1: 'Al Khobar to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Al Khobar from Makkah by road?', shortAnswer: 'Approximately 1,190–1,293 km', detailedAnswer: "By road, Al Khobar to Makkah is approximately 1,190 to 1,293 km — closely tracking the Dammam to Makkah distance, since Al Khobar is in the same metro area." },
            { question: 'How long does it take to drive from Al Khobar to Makkah?', shortAnswer: 'Approximately 12–14 hours of driving', detailedAnswer: "Pure driving time is approximately 12 to 14 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'What is the Al Khobar to Makkah driving distance?', shortAnswer: 'Roughly 1,250 km by road', detailedAnswer: "Routing tools generally show approximately 1,190 to 1,293 km for this domestic route." },
            { question: 'Can I travel from Al Khobar to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes — self-driving, taxi, and private chauffeur transfer are all common options for this domestic route." },
            { question: 'Is Al Khobar to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — Al Khobar and Makkah are both within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is Al Khobar to Makkah possible by private taxi?', shortAnswer: 'Yes, via our Dammam to Makkah service', detailedAnswer: "We don't have a dedicated Al Khobar to Makkah booking page yet, but our Dammam to Makkah private taxi service covers this journey with a local Al Khobar pickup available on request." },
            { question: 'Can families travel from Al Khobar to Makkah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 12-14 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Can I book a return taxi from Makkah to Al Khobar?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "Yes — contact us directly via WhatsApp with your travel date for a custom quote on the return leg, or see our Makkah to Dammam taxi page for the closest equivalent booking option." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Al Khobar to Makkah distances?', shortAnswer: 'Different exact start/end points and interior route choices', detailedAnswer: "Different mapping providers can select different interior routes and starting/ending points, which compounds into a noticeable gap on a 1,200+ km trip. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'riyadh-to-jeddah': {
        slug: 'riyadh-to-jeddah',
        origin: 'Riyadh',
        originFull: 'Riyadh, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Jeddah',
        destinationFull: 'Jeddah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 948–967 km',
        distanceHeadline: '~950 km',
        drivingTimeRange: 'approximately 9–11 hours of continuous driving',
        drivingTimeHeadline: '~9–11 hrs',
        routeHeadline: 'Direct via Highway 40',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Riyadh to Jeddah is approximately 948 to 967 km, running the width of the country via Highway 40 — one of the Kingdom's main east-west corridors. Independent route calculators and our own dispatch figures agree closely on this route.",
            "Your exact pickup point within Riyadh and drop-off point in Jeddah can still shift the total by a modest amount, but the variance here is smaller than on longer or less-established routes.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 9 to 11 hours at normal highway speeds — a demanding full-day drive on a well-maintained road.",
            "Total journey time is a little longer once you add rest stops, meals, and normal daytime traffic around both cities. Most travelers on this route drive it as a single day with a couple of planned stops.",
            "Traffic on the approach into Jeddah can increase during Umrah and Hajj peak periods, and around Ramadan — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs west from Riyadh across the central Saudi interior to Jeddah on the Red Sea coast, following Highway 40 — a well-established, multi-lane highway for essentially the entire journey. As a fully domestic route, there's no border to cross.",
            "This is one of the more heavily traveled long-distance corridors in the Kingdom, so services and rest stops along Highway 40 are more frequent than on some of the less-traveled routes we cover.",
        ],
        byCarNote: "Riyadh to Jeddah is a genuinely long day's drive at 9-11 hours — manageable for a confident self-driver with regular stops on a well-serviced highway, but many travelers, particularly families or business travelers who want to arrive rested, prefer a private chauffeur-driven transfer instead.",
        journeyPlanningNote: "If you're continuing on to Makkah after arriving in Jeddah, note that non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "Weekday daytime traffic is generally lighter than weekends and public holidays. Umrah and Hajj peak seasons bring significantly more traffic on the approach into Jeddah and onward toward Makkah — build in extra time during these periods.",

        mapOriginQuery: 'Riyadh, Saudi Arabia',
        mapDestinationQuery: 'Jeddah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Riyadh to Jeddah Taxi',
            url: '/routes/riyadh-jeddah/',
            description: 'Pre-booked private transfer from Riyadh to Jeddah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Jeddah to Riyadh Taxi',
            url: '/routes/jeddah-riyadh/',
            description: 'Book the return leg from Jeddah back to Riyadh.',
        },
        relatedTaxiRoutes: [
            { name: 'Riyadh to Makkah Taxi', url: '/routes/riyadh-makkah/', description: 'Private transfer from Riyadh to Makkah.' },
            { name: 'Riyadh to Dammam Taxi', url: '/routes/riyadh-dammam/', description: 'Private transfer from Riyadh to Dammam.' },
        ],
        relatedLocationLink: {
            name: 'Jeddah Transport Guide',
            url: '/locations/jeddah/',
            description: 'Local Jeddah taxi and airport transfer information.',
        },
        relatedDistanceSlugs: ['riyadh-to-makkah', 'jeddah-to-makkah', 'dammam-to-riyadh'],

        seoTitle: 'Riyadh to Jeddah Distance by Road | Driving Time & Map',
        metaDescription: 'Riyadh to Jeddah distance by road, estimated driving time, route map and journey information. See how far Jeddah is from Riyadh by car.',
        h1: 'Riyadh to Jeddah Distance by Road',

        faqs: [
            { question: 'How far is Riyadh from Jeddah by road?', shortAnswer: 'Approximately 948–967 km', detailedAnswer: "By road via Highway 40, Riyadh to Jeddah is approximately 948 to 967 km — one of the Kingdom's main east-west highway corridors." },
            { question: 'How long does Riyadh to Jeddah take by car?', shortAnswer: 'Approximately 9–11 hours of driving', detailedAnswer: "Pure driving time is approximately 9 to 11 hours at normal highway speeds. Total journey time is a little longer with rest stops and traffic." },
            { question: 'What route connects Riyadh and Jeddah?', shortAnswer: 'Highway 40', detailedAnswer: "Highway 40 is the main highway connecting Riyadh to Jeddah, running largely straight across the central Saudi interior to the Red Sea coast." },
            { question: 'Can I book a private Riyadh to Jeddah taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Riyadh to Jeddah private taxi service, with a single vehicle from your Riyadh pickup through to your Jeddah drop-off point." },
            { question: 'What is the Riyadh to Jeddah driving distance?', shortAnswer: 'Roughly 950 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 948 to 967 km for this well-established domestic route." },
            { question: 'Can families travel from Riyadh to Jeddah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At 9-11 hours, this is a long but manageable day's drive for most families, especially with a private vehicle and planned rest stops." },
            { question: 'Can I book a return taxi from Jeddah to Riyadh?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Jeddah to Riyadh taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance, which follows real highways and terrain." },
            { question: 'Why do different websites show different Riyadh to Jeddah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established domestic highway, exact pickup and drop-off points and different mapping providers can shift the total by a modest amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dammam-to-jeddah': {
        slug: 'dammam-to-jeddah',
        origin: 'Dammam',
        originFull: 'Dammam, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Jeddah',
        destinationFull: 'Jeddah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,300–1,370 km',
        distanceHeadline: '~1,340 km',
        drivingTimeRange: 'approximately 12–14 hours of continuous driving',
        drivingTimeHeadline: '~12–14 hrs',
        routeHeadline: 'Via the Interior, through the Riyadh Area',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Dammam to Jeddah is approximately 1,300 to 1,370 km — one of the longer domestic routes we cover, crossing the full width of the Kingdom from the Gulf coast to the Red Sea coast.",
            "Independent route calculators and our own figures agree on a range in this vicinity; your exact pickup point in Dammam and drop-off point in Jeddah shift the total modestly.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 12 to 14 hours at normal highway speeds — genuinely one of the longer domestic drives in the Kingdom.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,300+ km trip. Most travelers treat this as a long single-day push with several stops.",
            "Traffic on the approach into Jeddah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs from Dammam across Saudi Arabia's Eastern Province and interior — generally via the Riyadh area — before continuing west to Jeddah on the Red Sea coast. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers for the full corridor here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 12-14 hours, this is genuinely one of the longer domestic drives in the Kingdom — most families and business travelers prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued.",
        journeyPlanningNote: "If you're continuing on to Makkah after arriving in Jeddah, note that non-Muslims are not permitted to enter Makkah itself.",
        bestTimeNote: "Umrah and Hajj peak seasons bring significantly more traffic on the approach into Jeddah — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Dammam, Saudi Arabia',
        mapDestinationQuery: 'Jeddah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dammam to Jeddah Taxi',
            url: '/routes/dammam-jeddah/',
            description: 'Pre-booked private transfer from Dammam to Jeddah.',
        },
        relatedReturnTaxiRoute: {
            name: 'Jeddah to Dammam Taxi',
            url: '/routes/jeddah-dammam/',
            description: 'Book the return leg from Jeddah back to Dammam.',
        },
        relatedTaxiRoutes: [
            { name: 'Dammam to Makkah Taxi', url: '/routes/dammam-makkah/', description: 'Private transfer from Dammam to Makkah.' },
            { name: 'Dammam to Riyadh Taxi', url: '/routes/dammam-riyadh/', description: 'Private transfer from Dammam to Riyadh.' },
        ],
        relatedLocationLink: {
            name: 'Jeddah Transport Guide',
            url: '/locations/jeddah/',
            description: 'Local Jeddah taxi and airport transfer information.',
        },
        relatedDistanceSlugs: ['dammam-to-makkah', 'jeddah-to-makkah', 'dammam-to-riyadh'],

        seoTitle: 'Dammam to Jeddah Distance by Road | Driving Time & Map',
        metaDescription: 'Dammam to Jeddah distance by road, estimated driving time, route map and journey information. See how far Jeddah is from Dammam by car.',
        h1: 'Dammam to Jeddah Distance by Road',

        faqs: [
            { question: 'How far is Dammam from Jeddah by road?', shortAnswer: 'Approximately 1,300–1,370 km', detailedAnswer: "By road, Dammam to Jeddah is approximately 1,300 to 1,370 km, crossing the full width of the Kingdom from the Gulf coast to the Red Sea coast." },
            { question: 'How long does Dammam to Jeddah take by car?', shortAnswer: 'Approximately 12–14 hours of driving', detailedAnswer: "Pure driving time is approximately 12 to 14 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'What route connects Dammam and Jeddah?', shortAnswer: 'Via the interior, through the Riyadh area', detailedAnswer: "The route runs from Dammam across the Eastern Province and Saudi interior — generally via the Riyadh area — before continuing west to Jeddah." },
            { question: 'Can I book a private Dammam to Jeddah taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dammam to Jeddah private taxi service, with a single vehicle from your Dammam pickup through to your Jeddah drop-off point." },
            { question: 'What is the Dammam to Jeddah driving distance?', shortAnswer: 'Roughly 1,340 km by road', detailedAnswer: "Routing tools generally show approximately 1,300 to 1,370 km for this domestic cross-country route." },
            { question: 'Can families travel from Dammam to Jeddah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 12-14 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Can I book a return taxi from Jeddah to Dammam?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Jeddah to Dammam taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Dammam to Jeddah distances?', shortAnswer: 'Different exact start/end points and interior route choices', detailedAnswer: "Different mapping providers can select different interior routes and starting/ending points, which compounds into a noticeable gap on a route this long. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'dammam-to-riyadh': {
        slug: 'dammam-to-riyadh',
        origin: 'Dammam',
        originFull: 'Dammam, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Riyadh',
        destinationFull: 'Riyadh, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 400–423 km',
        distanceHeadline: '~410 km',
        drivingTimeRange: 'approximately 3.5–4 hours of continuous driving',
        drivingTimeHeadline: '~3.5–4 hrs',
        routeHeadline: 'Direct via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Dammam to Riyadh is approximately 400 to 423 km, one of the more frequently traveled and well-established domestic corridors in the Kingdom, connecting the Eastern Province to the capital.",
            "Independent route calculators agree fairly closely on this figure. Your exact pickup point in Dammam and drop-off point in Riyadh can still shift the total by a small amount.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 3.5 to 4 hours at normal highway speeds — a comfortable half-day drive on a well-maintained road.",
            "Total journey time is a little longer once you add rest stops and normal traffic around both cities.",
            "Traffic around Riyadh itself can add time during peak commuting hours and public holidays — build in a little extra buffer if your arrival time matters.",
        ],
        routeJourneyDescription: [
            "The road route runs directly west from Dammam across the Eastern Province and central Saudi interior to Riyadh — one of the busiest and most heavily serviced domestic corridors in the Kingdom, connecting two of Saudi Arabia's largest metro areas.",
            "As a fully domestic route, there's no border crossing, and services along the way are frequent given how well-traveled this corridor is.",
        ],
        byCarNote: "At around 3.5-4 hours, this is one of the more comfortable domestic drives we cover — very manageable for self-driving, though a private chauffeur transfer is still a popular choice for business travelers who want to work or rest during the trip.",
        journeyPlanningNote: "This is a well-serviced corridor with frequent rest stops, so extensive advance planning is less critical here than on our longer routes.",
        bestTimeNote: "Traffic around both Dammam and Riyadh is heavier during normal weekday commuting hours — traveling outside those windows tends to be smoother.",

        mapOriginQuery: 'Dammam, Saudi Arabia',
        mapDestinationQuery: 'Riyadh, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Dammam to Riyadh Taxi',
            url: '/routes/dammam-riyadh/',
            description: 'Pre-booked private transfer from Dammam to Riyadh.',
        },
        relatedReturnTaxiRoute: {
            name: 'Riyadh to Dammam Taxi',
            url: '/routes/riyadh-dammam/',
            description: 'Book the return leg from Riyadh back to Dammam.',
        },
        relatedTaxiRoutes: [
            { name: 'Dammam to Makkah Taxi', url: '/routes/dammam-makkah/', description: 'Private transfer from Dammam to Makkah.' },
            { name: 'Dammam to Jeddah Taxi', url: '/routes/dammam-jeddah/', description: 'Private transfer from Dammam to Jeddah.' },
        ],
        relatedLocationLink: {
            name: 'Riyadh Transport Guide',
            url: '/locations/riyadh/',
            description: 'Local Riyadh taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['dammam-to-makkah', 'riyadh-to-makkah', 'riyadh-to-jeddah'],

        seoTitle: 'Dammam to Riyadh Distance by Road | Driving Time & Map',
        metaDescription: 'Dammam to Riyadh distance by road, estimated driving time, route map and journey information. See how far Riyadh is from Dammam by car.',
        h1: 'Dammam to Riyadh Distance by Road',

        faqs: [
            { question: 'How far is Dammam from Riyadh by road?', shortAnswer: 'Approximately 400–423 km', detailedAnswer: "By road, Dammam to Riyadh is approximately 400 to 423 km — one of the most frequently traveled domestic corridors in Saudi Arabia." },
            { question: 'How long does Dammam to Riyadh take by car?', shortAnswer: 'Approximately 3.5–4 hours of driving', detailedAnswer: "Pure driving time is approximately 3.5 to 4 hours at normal highway speeds — a comfortable half-day drive." },
            { question: 'What route connects Dammam and Riyadh?', shortAnswer: 'A direct interior highway', detailedAnswer: "A well-established, heavily serviced interior highway runs directly between Dammam and Riyadh, connecting the Eastern Province to the capital." },
            { question: 'Can I book a private Dammam to Riyadh taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Dammam to Riyadh private taxi service, with a single vehicle from your Dammam pickup through to your Riyadh drop-off point." },
            { question: 'What is the Dammam to Riyadh driving distance?', shortAnswer: 'Roughly 410 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 400 to 423 km for this well-established domestic route." },
            { question: 'Can families travel from Dammam to Riyadh by car?', shortAnswer: 'Yes, easily', detailedAnswer: "Yes. At 3.5-4 hours, this is one of the easier domestic drives for families, with frequent rest stops available along the way." },
            { question: 'Can I book a return taxi from Riyadh to Dammam?', shortAnswer: 'Yes', detailedAnswer: "Yes — the return leg runs the same route in the opposite direction. See our Riyadh to Dammam taxi page to book the return journey." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always somewhat shorter than the actual driving distance." },
            { question: 'Why do different websites show different Dammam to Riyadh distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established domestic route, exact pickup and drop-off points and different mapping providers can shift the total by a modest amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'al-khobar-to-madinah': {
        slug: 'al-khobar-to-madinah',
        origin: 'Al Khobar',
        originFull: 'Al Khobar, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,235–1,270 km',
        distanceHeadline: '~1,250 km',
        drivingTimeRange: 'approximately 11–13 hours of continuous driving',
        drivingTimeHeadline: '~11–13 hrs',
        routeHeadline: 'Via the Interior (Direct or via Riyadh)',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Al Khobar to Madinah is approximately 1,235 to 1,270 km. Al Khobar sits in the same Eastern Province metro area as Dammam — a short local hop apart — so this route closely tracks the distance and route of our Dammam to Madinah journey, with a small variation depending on your exact pickup point.",
            "As with the Dammam to Madinah route, there are genuinely two general interior corridors that reach Madinah from the Eastern Province — a more direct path and one via the Riyadh area — which is part of why the range here is wider than on shorter routes.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 11 to 13 hours at normal highway speeds — one of the longer domestic drives in the Kingdom.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,200+ km trip. Most travelers treat this as a long single-day push with several stops.",
            "Traffic on the approach into Madinah increases during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs from Al Khobar across Saudi Arabia's Eastern Province and interior — either a more direct corridor or one via the Riyadh area — before continuing northwest to Madinah, following essentially the same corridor as the Dammam to Madinah route. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 11-13 hours, this is genuinely one of the longer domestic drives in the Kingdom — most families and business travelers prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued.",
        journeyPlanningNote: "We don't currently run a dedicated Al Khobar to Madinah booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Ramadan and the Hajj/Umrah peak season bring significantly more traffic into Madinah specifically — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Al Khobar, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Al Khobar-Madinah commercial route page exists yet (checked both
        // directions) — per spec we don't guess or create one. Dammam to Madinah is the
        // practical equivalent, since Al Khobar and Dammam share the same metro area.
        relatedTaxiRoutes: [
            { name: 'Dammam to Madinah Taxi', url: '/routes/dammam-madinah/', description: 'The closest equivalent service — Al Khobar is a short local pickup from Dammam.' },
            { name: 'Khobar to Bahrain Taxi', url: '/routes/khobar-bahrain/', description: 'Private transfer from Al Khobar to Bahrain via the King Fahd Causeway.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['dammam-to-madinah', 'al-khobar-to-makkah', 'al-khobar-to-riyadh'],
        noDirectRouteNote: "We don't yet have a dedicated Al Khobar to Madinah booking page on this site. Al Khobar sits in the same Eastern Province metro area as Dammam, so our existing Dammam to Madinah taxi service covers this journey with a local Al Khobar pickup available on request — or contact us directly via WhatsApp for a custom quote.",

        seoTitle: 'Al Khobar to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Al Khobar to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Al Khobar by car.',
        h1: 'Al Khobar to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Al Khobar from Madinah by road?', shortAnswer: 'Approximately 1,235–1,270 km', detailedAnswer: "By road, Al Khobar to Madinah is approximately 1,235 to 1,270 km — closely tracking the Dammam to Madinah distance, since Al Khobar is in the same metro area." },
            { question: 'How long does Al Khobar to Madinah take by car?', shortAnswer: 'Approximately 11–13 hours of driving', detailedAnswer: "Pure driving time is approximately 11 to 13 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'What route connects Al Khobar and Madinah?', shortAnswer: 'The interior — direct or via Riyadh', detailedAnswer: "There are two genuine interior corridors from the Eastern Province to Madinah — a more direct path and one via the Riyadh area — which is why the distance range is wider than usual." },
            { question: 'Can I book a private Al Khobar to Madinah taxi?', shortAnswer: 'Yes, via our Dammam to Madinah service', detailedAnswer: "We don't have a dedicated Al Khobar to Madinah booking page yet, but our Dammam to Madinah private taxi service covers this journey with a local Al Khobar pickup available on request." },
            { question: 'What is the Al Khobar to Madinah driving distance?', shortAnswer: 'Roughly 1,250 km by road', detailedAnswer: "Routing tools generally show approximately 1,235 to 1,270 km for this domestic route." },
            { question: 'Can families travel from Al Khobar to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 11-13 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Can I book a return taxi from Madinah to Al Khobar?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "Yes — contact us directly via WhatsApp with your travel date for a custom quote on the return leg, or see our Madinah to Dammam taxi page for the closest equivalent booking option." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Al Khobar to Madinah distances?', shortAnswer: 'Two genuinely different interior routes exist', detailedAnswer: "Unlike most routes where the variance is just measurement differences, this route has two genuinely different interior corridors (direct vs. via Riyadh), which is why the range is wider than usual." },
        ],
        lastVerified: 'August 2026',
    },

    'al-khobar-to-riyadh': {
        slug: 'al-khobar-to-riyadh',
        origin: 'Al Khobar',
        originFull: 'Al Khobar, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Riyadh',
        destinationFull: 'Riyadh, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 426–430 km',
        distanceHeadline: '~430 km',
        drivingTimeRange: 'approximately 3.5–4 hours of continuous driving',
        drivingTimeHeadline: '~3.5–4 hrs',
        routeHeadline: 'Direct via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Al Khobar to Riyadh is approximately 426 to 430 km. Al Khobar sits in the same Eastern Province metro area as Dammam, so this distance and route closely track our Dammam to Riyadh journey, with only a small local variation.",
            "Independent route calculators agree closely on this figure, since it's a short, well-established domestic corridor.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 3.5 to 4 hours at normal highway speeds — a comfortable half-day drive on a well-maintained, heavily serviced road.",
            "Total journey time is a little longer once you add rest stops and normal traffic around both cities.",
            "Traffic around Riyadh itself can add time during peak commuting hours and public holidays.",
        ],
        routeJourneyDescription: [
            "The road route runs directly west from Al Khobar across the Eastern Province and central Saudi interior to Riyadh, following essentially the same corridor as the Dammam to Riyadh route. As a fully domestic route, there's no border crossing.",
            "This is a well-traveled corridor connecting two of Saudi Arabia's largest metro areas, so services and rest stops are frequent along the way.",
        ],
        byCarNote: "At around 3.5-4 hours, this is one of the more comfortable domestic drives we cover — manageable for self-driving, though a private chauffeur transfer is still a popular choice for business travelers who want to work or rest during the trip.",
        journeyPlanningNote: "We don't currently run a dedicated Al Khobar to Riyadh booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Traffic around both Al Khobar/Dammam and Riyadh is heavier during normal weekday commuting hours — traveling outside those windows tends to be smoother.",

        mapOriginQuery: 'Al Khobar, Saudi Arabia',
        mapDestinationQuery: 'Riyadh, Saudi Arabia',

        // No dedicated Al Khobar-Riyadh commercial route page exists yet (checked both
        // directions) — per spec we don't guess or create one. Dammam to Riyadh is the
        // practical equivalent, since Al Khobar and Dammam share the same metro area.
        relatedTaxiRoutes: [
            { name: 'Dammam to Riyadh Taxi', url: '/routes/dammam-riyadh/', description: 'The closest equivalent service — Al Khobar is a short local pickup from Dammam.' },
            { name: 'Khobar to Bahrain Taxi', url: '/routes/khobar-bahrain/', description: 'Private transfer from Al Khobar to Bahrain via the King Fahd Causeway.' },
        ],
        relatedLocationLink: {
            name: 'Riyadh Transport Guide',
            url: '/locations/riyadh/',
            description: 'Local Riyadh taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['dammam-to-riyadh', 'al-khobar-to-makkah', 'al-khobar-to-madinah'],
        noDirectRouteNote: "We don't yet have a dedicated Al Khobar to Riyadh booking page on this site. Al Khobar sits in the same Eastern Province metro area as Dammam, so our existing Dammam to Riyadh taxi service covers this journey with a local Al Khobar pickup available on request — or contact us directly via WhatsApp for a custom quote.",

        seoTitle: 'Al Khobar to Riyadh Distance by Road | Driving Time & Map',
        metaDescription: 'Al Khobar to Riyadh distance by road, estimated driving time, route map and journey information. See how far Riyadh is from Al Khobar by car.',
        h1: 'Al Khobar to Riyadh Distance by Road',

        faqs: [
            { question: 'How far is Al Khobar from Riyadh by road?', shortAnswer: 'Approximately 426–430 km', detailedAnswer: "By road, Al Khobar to Riyadh is approximately 426 to 430 km — a short, well-established domestic corridor closely matching the Dammam to Riyadh distance." },
            { question: 'How long does Al Khobar to Riyadh take by car?', shortAnswer: 'Approximately 3.5–4 hours of driving', detailedAnswer: "Pure driving time is approximately 3.5 to 4 hours at normal highway speeds — a comfortable half-day drive." },
            { question: 'What route connects Al Khobar and Riyadh?', shortAnswer: 'A direct interior highway', detailedAnswer: "A well-established interior highway runs directly between Al Khobar/Dammam and Riyadh, connecting the Eastern Province to the capital." },
            { question: 'Can I book a private Al Khobar to Riyadh taxi?', shortAnswer: 'Yes, via our Dammam to Riyadh service', detailedAnswer: "We don't have a dedicated Al Khobar to Riyadh booking page yet, but our Dammam to Riyadh private taxi service covers this journey with a local Al Khobar pickup available on request." },
            { question: 'What is the Al Khobar to Riyadh driving distance?', shortAnswer: 'Roughly 430 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 426 to 430 km for this well-established domestic route." },
            { question: 'Can families travel from Al Khobar to Riyadh by car?', shortAnswer: 'Yes, easily', detailedAnswer: "Yes. At 3.5-4 hours, this is one of the easier domestic drives for families, with frequent rest stops available along the way." },
            { question: 'Can I book a return taxi from Riyadh to Al Khobar?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "Yes — contact us directly via WhatsApp with your travel date for a custom quote on the return leg, or see our Riyadh to Dammam taxi page for the closest equivalent booking option." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always somewhat shorter than the actual driving distance." },
            { question: 'Why do different websites show different Al Khobar to Riyadh distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Even on a well-established domestic route, exact pickup and drop-off points and different mapping providers can shift the total by a modest amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'taif-to-makkah': {
        slug: 'taif-to-makkah',
        origin: 'Taif',
        originFull: 'Taif, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 85–100 km',
        distanceHeadline: '~90 km',
        drivingTimeRange: 'approximately 1.5–2 hours of continuous driving',
        drivingTimeHeadline: '~1.5–2 hrs',
        routeHeadline: 'Via the Al Hada Mountain Road',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Taif to Makkah is approximately 85 to 100 km — a short domestic hop, but one with a genuine mountain descent that makes it slower than the distance alone suggests. Taif sits at a much higher elevation than Makkah, connected by the well-known Al Hada mountain road.",
            "Independent route calculators and figures published on our own Makkah–Taif route page agree on this range.",
        ],
        drivingTimeDescription: [
            "Driving time is approximately 1.5 to 2 hours — noticeably longer than a flat 90 km highway drive would normally take, because of the winding mountain descent via Al Hada.",
            "Total journey time can extend further with weekend or holiday traffic on the mountain road, which is a popular route for both pilgrims and local day-trippers heading up to Taif's cooler climate.",
            "Fog and reduced visibility on the upper sections of the mountain road are more common in cooler months — a private driver familiar with the route is a genuine advantage here.",
        ],
        routeJourneyDescription: [
            "The route runs via the Al Hada mountain road, a well-known winding descent connecting Taif's elevated plateau down to the Makkah plain — one of the more scenic short drives in the Kingdom, with switchbacks and views over the surrounding mountains.",
            "As a fully domestic route, there's no border crossing, and the short distance means this is a practical same-day trip in either direction.",
        ],
        byCarNote: "Given the winding mountain road, many travelers — especially those prone to motion sickness or unfamiliar with mountain driving — prefer a private taxi or chauffeur over self-driving this particular route, even though the distance itself is short.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — relevant if your group includes non-Muslim travelers heading toward Makkah from Taif.",
        bestTimeNote: "Weekends and Saudi public holidays bring more traffic to the Al Hada road, as it's a popular day-trip route for both pilgrims and local visitors escaping to Taif's cooler climate. Weekday mid-mornings tend to be quieter.",

        mapOriginQuery: 'Taif, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated Taif-to-Makkah (this direction) commercial route page exists —
        // only the reverse, Makkah-to-Taif, which our dispatch team already runs as a
        // scenic day-trip/tour service and naturally includes the return leg.
        relatedReturnTaxiRoute: {
            name: 'Makkah to Taif Taxi',
            url: '/routes/makkah-taif/',
            description: 'Our scenic mountain transfer service via Al Hada — books both directions.',
        },
        relatedTaxiRoutes: [
            { name: 'Jeddah to Taif Taxi', url: '/routes/jeddah-taif/', description: 'Private transfer from Jeddah to Taif.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['jeddah-to-makkah', 'madinah-to-makkah'],
        noDirectRouteNote: "We don't have a page specifically for the Taif to Makkah direction, but our Makkah to Taif taxi service is run as a scenic mountain transfer via Al Hada and naturally covers both directions — contact us via WhatsApp to book Taif to Makkah specifically, or see the Makkah to Taif page for full route details.",

        seoTitle: 'Taif to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Taif to Makkah distance by road, estimated driving time, route map and Al Hada mountain road information. See how far Makkah is from Taif by car.',
        h1: 'Taif to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Taif from Makkah?', shortAnswer: 'Approximately 85–100 km', detailedAnswer: "Taif to Makkah is approximately 85 to 100 km by road via the Al Hada mountain road — one of the shorter routes on this site, though the mountain descent adds time beyond what the distance alone suggests." },
            { question: 'How long does Taif to Makkah take by car?', shortAnswer: 'Approximately 1.5–2 hours', detailedAnswer: "Driving time is approximately 1.5 to 2 hours, longer than a flat 90 km drive would normally take because of the winding Al Hada mountain descent." },
            { question: 'Is Taif to Makkah suitable for a private taxi?', shortAnswer: 'Yes, and often preferred', detailedAnswer: "Yes — given the winding mountain road, many travelers prefer a private taxi or chauffeur familiar with the Al Hada descent over self-driving, even for this relatively short distance." },
            { question: 'Can families travel from Taif to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At 1.5-2 hours, this is a manageable trip for families, and a private vehicle takes the pressure off navigating the mountain road yourself." },
            { question: 'What route connects Taif and Makkah?', shortAnswer: 'The Al Hada mountain road', detailedAnswer: "The Al Hada road is the well-known route connecting Taif's elevated plateau down to the Makkah plain, featuring a scenic winding mountain descent." },
            { question: 'Can I book a private Taif to Makkah taxi?', shortAnswer: 'Yes, via our Makkah to Taif service', detailedAnswer: "We don't have a page dedicated to this exact direction, but our Makkah to Taif scenic mountain transfer service covers both directions — contact us via WhatsApp to book Taif to Makkah." },
            { question: 'Is Taif to Makkah relevant for Umrah pilgrims?', shortAnswer: 'Yes, as a day trip or extension', detailedAnswer: "Yes — Taif is a popular cooler-climate day trip or extension for Umrah pilgrims based in Makkah, thanks to its short distance and mountain scenery." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores the mountain road entirely — the actual driving distance and time reflect the winding descent, not a flat direct line." },
            { question: 'Why do different websites show different Taif to Makkah distances?', shortAnswer: 'Different exact start/end points within each city', detailedAnswer: "The biggest source of variation is exactly where in Taif and where in Makkah each source measures from, plus which point along the Al Hada road is used as the reference." },
        ],
        lastVerified: 'August 2026',
    },

    'taif-to-madinah': {
        slug: 'taif-to-madinah',
        origin: 'Taif',
        originFull: 'Taif, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 470–525 km',
        distanceHeadline: '~500 km',
        drivingTimeRange: 'approximately 5–6 hours of continuous driving',
        drivingTimeHeadline: '~5–6 hrs',
        routeHeadline: 'Via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Taif to Madinah is approximately 470 to 525 km. Independent route calculators show a real spread here — a reminder that even domestic routes can vary meaningfully depending on the specific road selected.",
            "Your exact pickup point in Taif and drop-off point in Madinah both affect the total, as does which interior route a mapping tool selects.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 5 to 6 hours at normal highway speeds — a genuinely long half-day-plus drive best planned with a rest stop.",
            "Total journey time is longer once you add fuel and rest stops and meals. Most travelers treat this as a single day's drive with a break partway through.",
            "Traffic on the approach into Madinah increases during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs north from Taif across the Saudi interior toward Madinah in the Hijaz region. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "At 5-6 hours, this is a genuinely long drive best suited to a family or group who can share the trip, or handed to a private driver so everyone can rest — particularly relevant for pilgrims or families combining a Taif visit with time in Madinah.",
        journeyPlanningNote: "We don't currently run a dedicated Taif to Madinah booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Ramadan and the Hajj/Umrah peak season bring significantly more traffic into Madinah specifically — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Taif, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Taif-Madinah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Jeddah to Taif Taxi', url: '/routes/jeddah-taif/', description: 'Private transfer from Jeddah to Taif, in the same region.' },
            { name: 'Jeddah to Madinah Taxi', url: '/routes/jeddah-madinah/', description: 'Private transfer from Jeddah to Madinah.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['jeddah-to-madinah', 'taif-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated Taif to Madinah booking page on this site. Contact us directly via WhatsApp with your travel date and passenger count for a custom quote on this route.",

        seoTitle: 'Taif to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Taif to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Taif by car.',
        h1: 'Taif to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Taif from Madinah by road?', shortAnswer: 'Approximately 470–525 km', detailedAnswer: "By road, Taif to Madinah is approximately 470 to 525 km — sources show a genuine spread depending on the exact interior route." },
            { question: 'How long does Taif to Madinah take by car?', shortAnswer: 'Approximately 5–6 hours of driving', detailedAnswer: "Pure driving time is approximately 5 to 6 hours at normal highway speeds — a long half-day-plus drive best planned with a rest stop." },
            { question: 'What route connects Taif and Madinah?', shortAnswer: 'The Saudi interior highway network', detailedAnswer: "The route runs north from Taif across the Saudi interior to Madinah — we don't name a specific highway number here since routing can vary by provider." },
            { question: 'Can I book a private Taif to Madinah taxi?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp with your travel date and passenger count for a custom quote." },
            { question: 'What is the Taif to Madinah driving distance?', shortAnswer: 'Roughly 500 km by road', detailedAnswer: "Routing tools show a range of approximately 470 to 525 km for this domestic route, depending on the exact interior road used." },
            { question: 'Can families travel from Taif to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. At 5-6 hours, families typically plan for a rest stop along the way, and many prefer a private vehicle with a professional driver for this length of trip." },
            { question: 'Can I book a return taxi from Madinah to Taif?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "Yes — contact us directly via WhatsApp with your travel date for a custom quote on the return leg." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Taif to Madinah distances?', shortAnswer: 'Genuinely different interior route options', detailedAnswer: "Sources show a real spread on this route because different interior roads can be selected between the two cities — not just measurement differences." },
        ],
        lastVerified: 'August 2026',
    },

    'alula-to-makkah': {
        slug: 'alula-to-makkah',
        origin: 'AlUla',
        originFull: 'AlUla, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 700–750 km',
        distanceHeadline: '~730 km',
        drivingTimeRange: 'approximately 8.5–9.5 hours of continuous driving',
        drivingTimeHeadline: '~8.5–9.5 hrs',
        routeHeadline: 'Via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from AlUla to Makkah is approximately 700 to 750 km. AlUla is Saudi Arabia's premium heritage tourism destination in the northwest of the country, and this route connects it to Makkah for pilgrims and tourists combining both destinations in one trip.",
            "Your exact pickup point in AlUla and drop-off point in Makkah shift the total by a modest amount, same as any long domestic route.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 8.5 to 9.5 hours at normal highway speeds — a genuinely long day's drive.",
            "Total journey time is longer once you add fuel and rest stops and meals. Most travelers treat this as a full day's drive with a couple of planned stops, or split it across two days if combining it with sightseeing along the way.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs south from AlUla across the Saudi interior toward Makkah. As a fully domestic route, there's no border crossing.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "Given the genuine length of this route and that many AlUla visitors are tourists unfamiliar with Saudi long-distance driving, a private chauffeur-driven transfer is a popular choice — it removes the fatigue and navigation burden of an 8.5+ hour drive through unfamiliar terrain.",
        journeyPlanningNote: "We don't currently run a dedicated AlUla to Makkah booking page — see the note in the Taxi section below for how to arrange this route with us. Also note that non-Muslims are not permitted to enter Makkah itself, which is relevant for tourist groups that may include non-Muslim travelers.",
        bestTimeNote: "Umrah and Hajj peak seasons bring significantly more traffic on the approach into Makkah — build in extra time if traveling during these periods. AlUla itself has a distinct tourist season (cooler months), which is worth factoring into your overall trip planning.",

        mapOriginQuery: 'AlUla, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated AlUla-Makkah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'AlUla to Jeddah Taxi', url: '/routes/alula-jeddah/', description: 'Private transfer from AlUla to Jeddah — combine with a Jeddah to Makkah transfer for a two-leg journey.' },
            { name: 'Jeddah to Makkah Taxi', url: '/routes/jeddah-makkah/', description: 'Private transfer from Jeddah to Makkah.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['jeddah-to-makkah', 'taif-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated AlUla to Makkah booking page on this site. Contact us directly via WhatsApp for a custom quote — or if your schedule is flexible, our AlUla to Jeddah service combined with a Jeddah to Makkah transfer covers the same overall journey in two legs.",

        seoTitle: 'AlUla to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'AlUla to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from AlUla by car.',
        h1: 'AlUla to Makkah Distance by Road',

        faqs: [
            { question: 'How far is AlUla from Makkah by road?', shortAnswer: 'Approximately 700–750 km', detailedAnswer: "By road, AlUla to Makkah is approximately 700 to 750 km, connecting Saudi Arabia's premier heritage tourism destination to the holy city." },
            { question: 'How long does AlUla to Makkah take by car?', shortAnswer: 'Approximately 8.5–9.5 hours of driving', detailedAnswer: "Pure driving time is approximately 8.5 to 9.5 hours at normal highway speeds — a genuinely long day's drive." },
            { question: 'Can I travel from AlUla to Makkah by private car?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp for a custom quote, or combine our AlUla to Jeddah and Jeddah to Makkah services." },
            { question: 'Is the route suitable for families and tourists?', shortAnswer: 'Yes, with rest stops planned', detailedAnswer: "Yes. Given the 8.5+ hour length, families and tourists typically plan for rest stops, and many prefer a private chauffeur given the distance and unfamiliar terrain for visitors." },
            { question: 'What is the AlUla to Makkah driving distance?', shortAnswer: 'Roughly 730 km by road', detailedAnswer: "Routing tools generally put the AlUla to Makkah driving distance at approximately 700 to 750 km." },
            { question: 'What route connects AlUla and Makkah?', shortAnswer: 'The Saudi interior highway network', detailedAnswer: "The route runs south from AlUla across the Saudi interior to Makkah — we don't name a specific highway number here since routing can vary by provider." },
            { question: 'Can I combine AlUla tourism with an Umrah trip to Makkah?', shortAnswer: 'Yes, this is a common combined itinerary', detailedAnswer: "Yes — many travelers combine AlUla's heritage sites with Umrah in Makkah as part of the same Saudi Arabia trip, given both are significant destinations within reasonable driving distance of each other." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different AlUla to Makkah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Different mapping providers and different exact starting/ending points within each destination can shift the total. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'tabuk-to-makkah': {
        slug: 'tabuk-to-makkah',
        origin: 'Tabuk',
        originFull: 'Tabuk, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,020–1,035 km',
        distanceHeadline: '~1,030 km',
        drivingTimeRange: 'approximately 10–11 hours of continuous driving',
        drivingTimeHeadline: '~10–11 hrs',
        routeHeadline: 'Via Route 15, through Madinah',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Tabuk to Makkah is approximately 1,020 to 1,035 km. Independent route calculators and our own dispatch figures agree closely on this range — one of the more consistently reported long-distance figures we cover.",
            "Tabuk to Makkah follows one of Saudi Arabia's most historically significant corridors — much of the route traces the ancient Hajj road from the Levant, now the modern Route 15 highway, which also connects Tabuk to Madinah before continuing on to Makkah.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 10 to 11 hours at normal highway speeds — a genuinely long full-day drive on a well-maintained highway.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,000+ km trip. Most travelers treat this as a long single-day push with several stops, or split it across two days.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs south from Tabuk largely along Route 15 through the Hejaz highlands, passing near Madinah before continuing on to Makkah. As a fully domestic route, there's no border crossing.",
            "This corridor is historically significant and well-serviced, given it follows the traditional pilgrim route from the north — rest stops and fuel are more frequent here than on some less-traveled routes.",
        ],
        byCarNote: "At 10-11 hours, this is one of the longer domestic drives in the Kingdom — most families and pilgrims prefer a private chauffeur-driven transfer over self-driving the full distance, arriving rested rather than fatigued for Umrah.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — relevant if your group includes non-Muslim travelers.",
        bestTimeNote: "Umrah and Hajj peak seasons bring significantly more traffic on the approach into Makkah — build in extra time if traveling during these periods.",

        mapOriginQuery: 'Tabuk, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        relatedTaxiRoute: {
            name: 'Tabuk to Makkah Taxi',
            url: '/routes/tabuk-makkah/',
            description: 'Pre-booked private transfer from Tabuk to Makkah.',
        },
        relatedTaxiRoutes: [
            { name: 'Tabuk to Jeddah Taxi', url: '/routes/tabuk-jeddah/', description: 'Private transfer from Tabuk to Jeddah.' },
            { name: 'Tabuk to Taif Taxi', url: '/routes/tabuk-taif/', description: 'Private transfer from Tabuk to Taif.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['madinah-to-makkah', 'jeddah-to-makkah'],

        seoTitle: 'Tabuk to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Tabuk to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Tabuk by car.',
        h1: 'Tabuk to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Tabuk from Makkah by road?', shortAnswer: 'Approximately 1,020–1,035 km', detailedAnswer: "By road, Tabuk to Makkah is approximately 1,020 to 1,035 km, largely following Route 15 through the Hejaz highlands." },
            { question: 'How long does Tabuk to Makkah take?', shortAnswer: 'Approximately 10–11 hours of driving', detailedAnswer: "Pure driving time is approximately 10 to 11 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'Can I travel from Tabuk to Makkah by private taxi?', shortAnswer: 'Yes', detailedAnswer: "Yes — we run a dedicated Tabuk to Makkah private taxi service, with a single vehicle from your Tabuk pickup through to your Makkah drop-off point." },
            { question: 'How should I plan the long road journey?', shortAnswer: 'Plan rest stops and realistic timing', detailedAnswer: "Given the 10-11 hour length, plan for regular rest breaks, water and snacks, and realistic arrival timing — many travelers prefer a private driver so everyone can rest during the trip." },
            { question: 'What is the Tabuk to Makkah driving distance?', shortAnswer: 'Roughly 1,030 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 1,020 to 1,035 km for this route." },
            { question: 'What route connects Tabuk and Makkah?', shortAnswer: 'Route 15, via Madinah', detailedAnswer: "The route largely follows Route 15, the historic Hajj road corridor, passing near Madinah before continuing on to Makkah." },
            { question: 'Can families travel from Tabuk to Makkah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the 10-11 hour length, families typically plan for regular rest breaks, and many prefer a private vehicle with a professional driver over self-driving the full distance." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Tabuk to Makkah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Different mapping providers and different exact starting/ending points can shift the total on a route this long. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'abha-to-makkah': {
        slug: 'abha-to-makkah',
        origin: 'Abha',
        originFull: 'Abha, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 600–650 km',
        distanceHeadline: '~620 km',
        drivingTimeRange: 'approximately 7–9 hours of continuous driving',
        drivingTimeHeadline: '~7–9 hrs',
        routeHeadline: 'Via the Interior, Descending from the Asir Highlands',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Abha to Makkah is approximately 600 to 650 km. Independent route calculators show some spread here, partly because Abha sits high in the Asir mountains (around 2,200 meters elevation), and different routing tools handle the highland descent differently.",
            "Your exact pickup point in Abha and drop-off point in Makkah both affect the total by a modest amount, same as any long domestic route.",
        ],
        drivingTimeDescription: [
            "Driving time is approximately 7 to 9 hours — longer than a flat 620 km highway drive would normally take, because of the mountain descent from Abha's highland plateau down toward the coastal plain.",
            "Total journey time is longer once you add fuel and rest stops and meals. Most travelers treat this as a long single-day drive with a couple of planned stops.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route descends from Abha's highland plateau in the Asir mountains, then continues through the interior toward Makkah. As a fully domestic route, there's no border crossing.",
            "The mountain descent section is more demanding driving than open highway — a genuine consideration when planning this route, whichever way you travel.",
        ],
        byCarNote: "Given both the distance and the mountain descent from the Asir highlands, many travelers — especially those unfamiliar with mountain driving — prefer a private taxi or chauffeur over self-driving this route, even though a confident driver can manage it comfortably.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — relevant if your group includes non-Muslim travelers.",
        bestTimeNote: "Umrah and Hajj peak seasons bring significantly more traffic on the approach into Makkah. Weather on the highland descent can occasionally affect conditions — check ahead if traveling in winter months.",

        mapOriginQuery: 'Abha, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated Abha-Makkah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Jeddah to Abha Taxi', url: '/routes/jeddah-abha/', description: 'Private transfer from Jeddah to Abha — combine with a Jeddah to Makkah transfer for a two-leg journey.' },
            { name: 'Jeddah to Makkah Taxi', url: '/routes/jeddah-makkah/', description: 'Private transfer from Jeddah to Makkah.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['abha-to-madinah', 'jeddah-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated Abha to Makkah booking page on this site. Contact us directly via WhatsApp for a custom quote — or if your schedule is flexible, our Jeddah to Abha service combined with a Jeddah to Makkah transfer covers the same overall journey in two legs.",

        seoTitle: 'Abha to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Abha to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Abha by car.',
        h1: 'Abha to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Abha from Makkah by road?', shortAnswer: 'Approximately 600–650 km', detailedAnswer: "By road, Abha to Makkah is approximately 600 to 650 km, descending from the Asir highlands to the coastal interior." },
            { question: 'How long does Abha to Makkah take by car?', shortAnswer: 'Approximately 7–9 hours of driving', detailedAnswer: "Driving time is approximately 7 to 9 hours — longer than the flat distance suggests, because of the mountain descent from Abha's highland plateau." },
            { question: 'What route connects Abha and Makkah?', shortAnswer: 'The interior highway, descending the Asir highlands', detailedAnswer: "The route descends from Abha's highland plateau (around 2,200m elevation) through the interior toward Makkah on the coastal plain." },
            { question: 'Can I travel from Abha to Makkah by private taxi?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp for a custom quote, or combine our Jeddah to Abha and Jeddah to Makkah services." },
            { question: 'Is Abha to Makkah suitable for family travel?', shortAnswer: 'Yes, with a private driver recommended', detailedAnswer: "Yes. Given the distance and the mountain descent, many families prefer a private chauffeur familiar with the route rather than self-driving." },
            { question: 'What is the Abha to Makkah driving distance?', shortAnswer: 'Roughly 620 km by road', detailedAnswer: "Routing tools show approximately 600 to 650 km, with some variation due to the highland terrain." },
            { question: 'Is Abha to Makkah possible as a day trip?', shortAnswer: 'Long but possible', detailedAnswer: "At 7-9 hours each way, it's a long day if attempted as a round trip — most travelers treat it as a one-way journey rather than a same-day round trip." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores the mountain terrain entirely — the actual driving distance and time reflect the highland descent, not a flat direct line." },
            { question: 'Why do different websites show different Abha to Makkah distances?', shortAnswer: 'Different routing through mountainous terrain', detailedAnswer: "The highland terrain around Abha means different routing tools can select noticeably different paths for the descent, which is why the range here is wider than on flatter routes." },
        ],
        lastVerified: 'August 2026',
    },

    'najran-to-makkah': {
        slug: 'najran-to-makkah',
        origin: 'Najran',
        originFull: 'Najran, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 850–895 km',
        distanceHeadline: '~870 km',
        drivingTimeRange: 'approximately 10–12 hours of continuous driving',
        drivingTimeHeadline: '~10–12 hrs',
        routeHeadline: 'Via the Southern Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Najran to Makkah is approximately 850 to 895 km. Najran sits in Saudi Arabia's far south, near the border with Yemen, making this one of the longer domestic routes in our network.",
            "Independent route calculators show a real spread across this range, reflecting Najran's remote location and the mountainous, less-traveled terrain in parts of the southern interior.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 10 to 12 hours at normal highway speeds — a genuinely long full-day drive.",
            "Total journey time is longer once you add fuel and rest stops and meals over an 850+ km trip through less densely serviced terrain than routes closer to the main coastal or central corridors.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs north and west from Najran through the southern Saudi interior toward Makkah. As a fully domestic route, there's no border crossing, though the region is genuinely remote in places.",
            "We're not naming specific highway numbers here, since routing can vary between providers — use the map below or a live navigation app for turn-by-turn directions.",
        ],
        byCarNote: "Given the genuine length and remoteness of this route, a private chauffeur-driven transfer is a popular choice — it removes both the fatigue of a 10+ hour drive and the burden of navigating less-traveled terrain yourself.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — relevant if your group includes non-Muslim travelers.",
        bestTimeNote: "Given the remote nature of parts of this route, avoid starting too late in the day. Umrah and Hajj peak seasons bring significantly more traffic on the approach into Makkah.",

        mapOriginQuery: 'Najran, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated Najran-Makkah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Tabuk to Najran Taxi', url: '/routes/tabuk-najran/', description: 'Private transfer connecting Najran to our Tabuk network.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['najran-to-madinah', 'jeddah-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated Najran to Makkah booking page on this site. Contact us directly via WhatsApp with your travel date and passenger count for a custom quote on this route.",

        seoTitle: 'Najran to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Najran to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Najran by car.',
        h1: 'Najran to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Najran from Makkah by road?', shortAnswer: 'Approximately 850–895 km', detailedAnswer: "By road, Najran to Makkah is approximately 850 to 895 km — one of the longer domestic routes, given Najran's remote southern location." },
            { question: 'How long does Najran to Makkah take?', shortAnswer: 'Approximately 10–12 hours of driving', detailedAnswer: "Pure driving time is approximately 10 to 12 hours at normal highway speeds. Total journey time is longer with rest stops and traffic." },
            { question: 'Can I travel from Najran to Makkah by private taxi?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp with your travel date and passenger count for a custom quote." },
            { question: 'How should I plan this long road journey?', shortAnswer: 'Plan generous rest stops and an early departure', detailedAnswer: "Given the genuine length and remoteness of parts of this route, plan for regular rest breaks, water and fuel stops, and an early departure to avoid arriving late at night." },
            { question: 'What is the Najran to Makkah driving distance?', shortAnswer: 'Roughly 870 km by road', detailedAnswer: "Routing tools show a range of approximately 850 to 895 km, reflecting some genuine route variation through the southern interior." },
            { question: 'Can families travel from Najran to Makkah by car?', shortAnswer: 'Yes, with careful planning', detailedAnswer: "Yes. Given the 10-12 hour length and the remote terrain in parts of the route, families typically plan for regular rest breaks and many prefer a private driver for this journey." },
            { question: 'Is Najran to Makkah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both are within Saudi Arabia, so there's no border crossing, though Najran's proximity to the Yemen border makes it one of the more remote starting points in our network." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Najran to Makkah distances?', shortAnswer: 'Remote terrain and different routing choices', detailedAnswer: "Najran's remote location means different routing tools can select genuinely different paths through the southern interior, which is why the range here is wider than usual." },
        ],
        lastVerified: 'August 2026',
    },

    'yanbu-to-makkah': {
        slug: 'yanbu-to-makkah',
        origin: 'Yanbu',
        originFull: 'Yanbu, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Makkah',
        destinationFull: 'Makkah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 368–383 km',
        distanceHeadline: '~375 km',
        drivingTimeRange: 'approximately 6.5–7.5 hours of continuous driving',
        drivingTimeHeadline: '~6.5–7.5 hrs',
        routeHeadline: 'Via the Coastal Highway through the Jeddah Area',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Yanbu to Makkah is approximately 368 to 383 km. Yanbu is a Red Sea coastal city in Western Saudi Arabia, and this route runs south along the coastal corridor before turning inland toward Makkah.",
            "Independent route calculators agree fairly closely on this figure. Your exact pickup point in Yanbu and drop-off point in Makkah shift the total by a modest amount.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 6.5 to 7.5 hours at normal highway speeds — a long but manageable single-day drive.",
            "Total journey time is a little longer once you add rest stops, meals, and normal traffic, particularly around the Jeddah area which this route passes near.",
            "Traffic on the approach into Makkah increases during Umrah and Hajj peak periods — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs south from Yanbu along Saudi Arabia's western coastal corridor, passing near Jeddah before turning inland toward Makkah. As a fully domestic route, there's no border crossing.",
            "This is a well-serviced corridor given how many pilgrims and travelers use the western coastal route between Yanbu, Jeddah, and Makkah.",
        ],
        byCarNote: "At 6.5-7.5 hours, this is a manageable single-day drive — comfortable for a confident self-driver, though many pilgrims and families still prefer a private chauffeur-driven transfer for a more restful journey ahead of Umrah.",
        journeyPlanningNote: "Non-Muslims are not permitted to enter Makkah itself — relevant if your group includes non-Muslim travelers.",
        bestTimeNote: "Umrah and Hajj peak seasons bring significantly more traffic on the approach into Makkah, and around the Jeddah area this route passes through — build in extra time during those periods.",

        mapOriginQuery: 'Yanbu, Saudi Arabia',
        mapDestinationQuery: 'Makkah, Saudi Arabia',

        // No dedicated Yanbu-Makkah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Yanbu to Jeddah Taxi', url: '/routes/yanbu-jeddah/', description: 'Private transfer from Yanbu to Jeddah — combine with a Jeddah to Makkah transfer for a two-leg journey.' },
            { name: 'Jeddah to Makkah Taxi', url: '/routes/jeddah-makkah/', description: 'Private transfer from Jeddah to Makkah.' },
        ],
        relatedLocationLink: {
            name: 'Makkah Transport Guide',
            url: '/locations/makkah/',
            description: 'Local Makkah taxi and chauffeur information, including Haram-area pickup rules.',
        },
        relatedDistanceSlugs: ['yanbu-to-madinah', 'jeddah-to-makkah', 'madinah-to-makkah'],
        noDirectRouteNote: "We don't yet have a dedicated Yanbu to Makkah booking page on this site. Contact us directly via WhatsApp for a custom quote — or if your schedule is flexible, our Yanbu to Jeddah service combined with a Jeddah to Makkah transfer covers the same overall journey in two legs.",

        seoTitle: 'Yanbu to Makkah Distance by Road | Driving Time & Map',
        metaDescription: 'Yanbu to Makkah distance by road, estimated driving time, route map and journey information. See how far Makkah is from Yanbu by car.',
        h1: 'Yanbu to Makkah Distance by Road',

        faqs: [
            { question: 'How far is Yanbu from Makkah by road?', shortAnswer: 'Approximately 368–383 km', detailedAnswer: "By road, Yanbu to Makkah is approximately 368 to 383 km, running down Saudi Arabia's western coastal corridor before turning inland." },
            { question: 'How long does Yanbu to Makkah take by car?', shortAnswer: 'Approximately 6.5–7.5 hours of driving', detailedAnswer: "Pure driving time is approximately 6.5 to 7.5 hours at normal highway speeds. Total journey time is a little longer with rest stops and traffic." },
            { question: 'Can I book a private transfer from Yanbu to Makkah?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp for a custom quote, or combine our Yanbu to Jeddah and Jeddah to Makkah services." },
            { question: 'Is this route relevant for Umrah pilgrims?', shortAnswer: 'Yes, a common western Saudi route', detailedAnswer: "Yes — Yanbu is a Red Sea coastal city, and this route is used by pilgrims and travelers moving along the western coastal corridor toward Makkah for Umrah." },
            { question: 'What is the Yanbu to Makkah driving distance?', shortAnswer: 'Roughly 375 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 368 to 383 km for this coastal-to-interior route." },
            { question: 'What route connects Yanbu and Makkah?', shortAnswer: 'The coastal highway via the Jeddah area', detailedAnswer: "The route runs south along the western coastal corridor from Yanbu, passing near Jeddah, before turning inland to Makkah." },
            { question: 'Can families travel from Yanbu to Makkah by car?', shortAnswer: 'Yes', detailedAnswer: "Yes. At 6.5-7.5 hours, this is a manageable single-day drive for most families." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Yanbu to Makkah distances?', shortAnswer: 'Different exact start/end points and routing engines', detailedAnswer: "Different mapping providers and exact starting/ending points can shift the total by a modest amount. That's why we present a range." },
        ],
        lastVerified: 'August 2026',
    },

    'yanbu-to-madinah': {
        slug: 'yanbu-to-madinah',
        origin: 'Yanbu',
        originFull: 'Yanbu, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 227–237 km',
        distanceHeadline: '~230 km',
        drivingTimeRange: 'approximately 2–2.5 hours of continuous driving',
        drivingTimeHeadline: '~2–2.5 hrs',
        routeHeadline: 'Direct via the Interior Highway',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Yanbu to Madinah is approximately 227 to 237 km — one of the shorter routes in our network, connecting the Red Sea coast to Madinah in the Hijaz interior.",
            "Independent route calculators agree closely on this figure. Your exact pickup point in Yanbu and drop-off point in Madinah shift the total by a small amount.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 2 to 2.5 hours at normal highway speeds — a comfortable, well-established short drive.",
            "Total journey time is a little longer once you add rest stops and normal traffic around Madinah.",
            "Traffic on the approach into Madinah increases during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route runs directly inland from Yanbu on the Red Sea coast to Madinah — a short, well-established domestic corridor. As a fully domestic route, there's no border crossing.",
            "Given the proximity, this route is also popular for day trips and combined itineraries between the coast and Madinah.",
        ],
        byCarNote: "Given the short distance, self-driving, taxi, and private chauffeur are all straightforward options for this route.",
        journeyPlanningNote: "This is a short trip, so extensive long-distance planning isn't necessary — the main consideration is timing your pickup around Madinah hotel check-in or Prophet's Mosque visit timing.",
        bestTimeNote: "Ramadan and the Hajj/Umrah peak season bring more traffic into Madinah specifically — outside those periods, this route is generally straightforward.",

        mapOriginQuery: 'Yanbu, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Yanbu-Madinah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Yanbu to Jeddah Taxi', url: '/routes/yanbu-jeddah/', description: 'Private transfer from Yanbu to Jeddah.' },
            { name: 'Jeddah to Madinah Taxi', url: '/routes/jeddah-madinah/', description: 'Private transfer from Jeddah to Madinah.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['yanbu-to-makkah', 'jeddah-to-madinah'],
        noDirectRouteNote: "We don't yet have a dedicated Yanbu to Madinah booking page on this site. Contact us directly via WhatsApp for a custom quote, or see our Jeddah to Madinah service if routing via Jeddah suits your schedule.",

        seoTitle: 'Yanbu to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Yanbu to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Yanbu by car.',
        h1: 'Yanbu to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Yanbu from Madinah?', shortAnswer: 'Approximately 227–237 km', detailedAnswer: "By road, Yanbu to Madinah is approximately 227 to 237 km — one of the shorter routes in our network." },
            { question: 'How long does Yanbu to Madinah take?', shortAnswer: 'Approximately 2–2.5 hours of driving', detailedAnswer: "Pure driving time is approximately 2 to 2.5 hours at normal highway speeds — a comfortable short drive." },
            { question: 'Can I book a private transfer from Yanbu to Madinah?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp for a custom quote." },
            { question: 'Is the route suitable for families?', shortAnswer: 'Yes, easily', detailedAnswer: "Yes. At around 2-2.5 hours, this is one of the easier domestic drives for families in our network." },
            { question: 'What is the Yanbu to Madinah driving distance?', shortAnswer: 'Roughly 230 km by road', detailedAnswer: "Routing tools generally agree closely on approximately 227 to 237 km for this short, well-established route." },
            { question: 'Is Yanbu close to other Western Saudi destinations?', shortAnswer: 'Yes, near Jeddah and the Red Sea coast', detailedAnswer: "Yes — Yanbu sits on the Red Sea coast within reasonable driving distance of Jeddah, making it a convenient stop for travelers exploring Western Saudi Arabia alongside Madinah." },
            { question: 'Is Yanbu to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both are within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely — the actual driving distance is somewhat longer since the road doesn't run perfectly straight." },
            { question: 'Why do different websites show different Yanbu to Madinah distances?', shortAnswer: 'Different exact start/end points', detailedAnswer: "The biggest source of variation is exactly where in Yanbu and where in Madinah each source measures from." },
        ],
        lastVerified: 'August 2026',
    },

    'abha-to-madinah': {
        slug: 'abha-to-madinah',
        origin: 'Abha',
        originFull: 'Abha, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,000–1,070 km',
        distanceHeadline: '~1,030 km',
        drivingTimeRange: 'approximately 11–13 hours of continuous driving',
        drivingTimeHeadline: '~11–13 hrs',
        routeHeadline: 'Via the Interior, Descending from the Asir Highlands',
        travelType: 'Domestic (within Saudi Arabia)',

        routeDescription: [
            "The road distance from Abha to Madinah is approximately 1,000 to 1,070 km — one of the longer domestic routes we cover, running the length of western Saudi Arabia from the southern highlands to the Hijaz.",
            "Independent route calculators show a genuine spread here, reflecting both the highland descent from Abha and the sheer length of the journey north.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 11 to 13 hours at normal highway speeds — a genuinely long drive best planned across a full day with several stops, or split across two days.",
            "Total journey time is longer once you add fuel and rest stops and meals over a 1,000+ km trip that starts with a mountain descent.",
            "Traffic on the approach into Madinah increases during Ramadan and the Hajj/Umrah peak season — build in extra time during those dates.",
        ],
        routeJourneyDescription: [
            "The road route descends from Abha's highland plateau in the Asir mountains, then runs north through the western Saudi interior toward Madinah. As a fully domestic route, there's no border crossing.",
            "Given the length, many travelers treat this as a long single day with multiple stops, or plan an overnight break partway through.",
        ],
        byCarNote: "Given both the distance and the initial mountain descent, most families and travelers prefer a private chauffeur-driven transfer over self-driving the full route — it removes the fatigue of an 11+ hour drive that starts with demanding mountain terrain.",
        journeyPlanningNote: "We don't currently run a dedicated Abha to Madinah booking page — see the note in the Taxi section below for how to arrange this route with us.",
        bestTimeNote: "Ramadan and the Hajj/Umrah peak season bring significantly more traffic into Madinah specifically. Weather on the highland descent can occasionally affect conditions — check ahead if traveling in winter months.",

        mapOriginQuery: 'Abha, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Abha-Madinah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Jeddah to Abha Taxi', url: '/routes/jeddah-abha/', description: 'Private transfer from Jeddah to Abha — combine with a Jeddah to Madinah transfer for a two-leg journey.' },
            { name: 'Jeddah to Madinah Taxi', url: '/routes/jeddah-madinah/', description: 'Private transfer from Jeddah to Madinah.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['abha-to-makkah', 'jeddah-to-madinah'],
        noDirectRouteNote: "We don't yet have a dedicated Abha to Madinah booking page on this site. Contact us directly via WhatsApp for a custom quote — or if your schedule is flexible, our Jeddah to Abha service combined with a Jeddah to Madinah transfer covers the same overall journey in two legs.",

        seoTitle: 'Abha to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Abha to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Abha by car.',
        h1: 'Abha to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Abha from Madinah by road?', shortAnswer: 'Approximately 1,000–1,070 km', detailedAnswer: "By road, Abha to Madinah is approximately 1,000 to 1,070 km, running the length of western Saudi Arabia from the southern highlands." },
            { question: 'How long does Abha to Madinah take?', shortAnswer: 'Approximately 11–13 hours of driving', detailedAnswer: "Pure driving time is approximately 11 to 13 hours at normal highway speeds — a genuinely long drive best planned with several stops." },
            { question: 'Can I book a private transfer from Abha to Madinah?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp for a custom quote, or combine our Jeddah to Abha and Jeddah to Madinah services." },
            { question: 'How should I plan this long road journey?', shortAnswer: 'Plan rest stops or an overnight break', detailedAnswer: "Given the 11-13 hour length starting with a mountain descent, plan for regular rest breaks throughout the day, or consider splitting the trip across two days." },
            { question: 'What is the Abha to Madinah driving distance?', shortAnswer: 'Roughly 1,030 km by road', detailedAnswer: "Routing tools show a range of approximately 1,000 to 1,070 km, reflecting the highland descent and route length." },
            { question: 'Can families travel from Abha to Madinah by car?', shortAnswer: 'Yes, with the right planning', detailedAnswer: "Yes. Given the length and initial mountain terrain, families typically plan for regular rest breaks, and many prefer a private driver for this journey." },
            { question: 'Is Abha to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both are within Saudi Arabia, so there's no border crossing or international documentation required." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores the mountainous terrain and roads entirely, and is always shorter than the actual driving distance." },
            { question: 'Why do different websites show different Abha to Madinah distances?', shortAnswer: 'Different routing through mountainous terrain and route length', detailedAnswer: "The highland terrain around Abha combined with the sheer length of this route means different routing tools can select noticeably different paths, which is why the range is wider than usual." },
        ],
        lastVerified: 'August 2026',
    },

    'najran-to-madinah': {
        slug: 'najran-to-madinah',
        origin: 'Najran',
        originFull: 'Najran, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Madinah',
        destinationFull: 'Madinah, Saudi Arabia',
        destinationCountry: 'Saudi Arabia',
        isInternational: false,

        distanceRange: 'approximately 1,170–1,385 km',
        distanceHeadline: '~1,280 km',
        drivingTimeRange: 'approximately 15–18 hours of continuous driving',
        drivingTimeHeadline: '~15–18 hrs',
        routeHeadline: 'Via the Interior Highway (Long-Distance)',
        travelType: 'Domestic (very long-distance — 2-day journey may be preferable)',

        routeDescription: [
            "The road distance from Najran to Madinah is approximately 1,170 to 1,385 km — the longest domestic route in our network. Najran sits in Saudi Arabia's far south near the Yemen border, while Madinah is deep in the northwest Hijaz, so this is genuinely one of the most demanding drives within the Kingdom.",
            "Independent route calculators show a wide spread on this route, more than on most others we cover — a reflection of the sheer distance and the number of plausible interior paths between two such distant points.",
        ],
        drivingTimeDescription: [
            "Pure driving time is approximately 15 to 18 hours of continuous highway driving — the longest domestic drive on this site.",
            "Given the exceptional length, we don't recommend treating this as a single non-stop push. A two-day journey with a scheduled overnight stop is the realistic, safer way to cover this distance, whether self-driving or booking a private transfer.",
            "Fuel and rest stops, traffic, and normal delays all add to total journey time on top of the pure driving estimate.",
        ],
        routeJourneyDescription: [
            "The road route runs north from Najran through Saudi Arabia's southern and central interior, then continues northwest to Madinah — a genuinely long diagonal crossing of the Kingdom. As a fully domestic route, there's no border crossing.",
            "Given the exceptional distance, we plan an overnight stop partway through rather than attempting the full drive in one push. We don't name specific highway numbers here since routing varies by provider and the distance involved.",
        ],
        byCarNote: "At 15-18 hours, this is the longest domestic route we cover — we don't recommend a single push. A scheduled overnight stop and a private chauffeur-driven transfer mean you arrive rested rather than exhausted from a genuinely demanding cross-country drive.",
        journeyPlanningNote: "Because this is realistically a two-day trip, plan overnight accommodation partway through in addition to the usual document and rest-stop planning.",
        bestTimeNote: "Given the exceptional length of this route, avoid starting late in the day. Ramadan and the Hajj/Umrah peak season add meaningful extra time on top of an already very long journey.",

        mapOriginQuery: 'Najran, Saudi Arabia',
        mapDestinationQuery: 'Madinah, Saudi Arabia',

        // No dedicated Najran-Madinah commercial route page exists yet in either
        // direction — per spec we don't guess or create one.
        relatedTaxiRoutes: [
            { name: 'Tabuk to Najran Taxi', url: '/routes/tabuk-najran/', description: 'Private transfer connecting Najran to our Tabuk network.' },
        ],
        relatedLocationLink: {
            name: 'Madinah Transport Guide',
            url: '/locations/madinah/',
            description: 'Local Madinah taxi and chauffeur information.',
        },
        relatedDistanceSlugs: ['najran-to-makkah', 'jeddah-to-madinah'],
        noDirectRouteNote: "We don't yet have a dedicated Najran to Madinah booking page on this site. Contact us directly via WhatsApp with your travel date and passenger count for a custom quote on this route — given the distance, we'd plan it as a two-day journey.",

        seoTitle: 'Najran to Madinah Distance by Road | Driving Time & Map',
        metaDescription: 'Najran to Madinah distance by road, estimated driving time, route map and journey information. See how far Madinah is from Najran by car.',
        h1: 'Najran to Madinah Distance by Road',

        faqs: [
            { question: 'How far is Najran from Madinah by road?', shortAnswer: 'Approximately 1,170–1,385 km', detailedAnswer: "By road, Najran to Madinah is approximately 1,170 to 1,385 km — the longest domestic route in our network, given Najran's remote southern location." },
            { question: 'How long does Najran to Madinah take?', shortAnswer: 'Approximately 15–18 hours, usually over two days', detailedAnswer: "Pure driving time is approximately 15 to 18 hours. Given the exceptional length, we plan this as a two-day journey with a scheduled overnight stop." },
            { question: 'Can I book a private transfer from Najran to Madinah?', shortAnswer: 'Yes, by custom quote', detailedAnswer: "We don't have a dedicated booking page for this exact route yet, but yes — contact us via WhatsApp with your travel date and passenger count for a custom quote." },
            { question: 'How should I plan this long road journey?', shortAnswer: 'Plan for a two-day trip with an overnight stop', detailedAnswer: "Given this is the longest domestic route we cover, plan for two days with a scheduled overnight stop rather than attempting it in one push." },
            { question: 'What is the Najran to Madinah driving distance?', shortAnswer: 'Roughly 1,280 km by road', detailedAnswer: "Routing tools show a wide range of approximately 1,170 to 1,385 km, reflecting the exceptional distance and multiple plausible interior paths." },
            { question: 'Can families travel from Najran to Madinah by car?', shortAnswer: 'Yes, with a two-day plan', detailedAnswer: "Yes. Given the genuine length of this route, families typically split it over two days with an overnight stop rather than attempting it in one push." },
            { question: 'Is Najran to Madinah an international route?', shortAnswer: 'No, fully domestic', detailedAnswer: "No — both are within Saudi Arabia, though Najran's proximity to the Yemen border makes it one of the more remote starting points in our network." },
            { question: 'Is driving distance the same as straight-line distance?', shortAnswer: 'No', detailedAnswer: "No. Straight-line distance ignores roads entirely, and the gap between it and the actual driving distance is especially large on a route this long." },
            { question: 'Why do different websites show different Najran to Madinah distances?', shortAnswer: 'Exceptional distance and multiple route options', detailedAnswer: "On the longest domestic route in our network, small differences in starting address, destination point, or preferred interior path compound into a wider final gap than on shorter trips." },
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
        routeSlugs: ['kuwait-to-makkah', 'bahrain-to-makkah', 'doha-to-makkah', 'dubai-to-makkah', 'abu-dhabi-to-makkah', 'muscat-to-makkah'],
    },
    {
        id: 'gcc-to-madinah',
        title: 'GCC to Madinah',
        description: 'Road distance and driving time from Gulf cities to Madinah.',
        routeSlugs: ['kuwait-to-madinah', 'bahrain-to-madinah', 'doha-to-madinah', 'dubai-to-madinah', 'abu-dhabi-to-madinah'],
    },
    {
        id: 'saudi-to-makkah',
        title: 'Saudi Cities to Makkah',
        description: 'Road distance and driving time from other Saudi cities to Makkah.',
        routeSlugs: ['riyadh-to-makkah', 'dammam-to-makkah', 'jeddah-to-makkah', 'madinah-to-makkah', 'al-khobar-to-makkah', 'tabuk-to-makkah', 'abha-to-makkah', 'najran-to-makkah', 'yanbu-to-makkah'],
    },
    {
        id: 'saudi-to-madinah',
        title: 'Saudi Cities to Madinah',
        description: 'Road distance and driving time from other Saudi cities to Madinah.',
        routeSlugs: ['riyadh-to-madinah', 'dammam-to-madinah', 'jeddah-to-madinah', 'al-khobar-to-madinah', 'yanbu-to-madinah', 'abha-to-madinah', 'najran-to-madinah'],
    },
    {
        id: 'saudi-city-to-city',
        title: 'Saudi City-to-City Distances',
        description: 'Road distance and driving time between other major Saudi cities.',
        routeSlugs: ['riyadh-to-jeddah', 'dammam-to-jeddah', 'dammam-to-riyadh', 'al-khobar-to-riyadh'],
    },
    {
        id: 'tourist-religious-routes',
        title: 'Popular Tourist & Religious Routes',
        description: 'Road distance and driving time for popular tourist and pilgrim routes.',
        routeSlugs: ['taif-to-makkah', 'taif-to-madinah', 'alula-to-makkah'],
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
