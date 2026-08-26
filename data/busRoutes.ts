// Data model for the /bus/ section — commercial bus/coach charter and group
// transportation pages, separate from the /routes/ (private car taxi) and
// /distance/ (informational) sections.
//
// IMPORTANT — verified-facts discipline for this section specifically:
// - The only confirmed bus/coach vehicle in the TaxiServiceKSA fleet is the
//   "Luxurious Bus" (25 passengers, 30+ bags) documented at /fleet/luxurious-bus/.
//   Do not invent additional bus/coach models or capacities anywhere in this file.
// - The business has no confirmed fixed/daily bus schedule and no published
//   per-seat ticket pricing. Every route is framed as a private/group coach
//   charter arranged on request ("request a quote"), never as a scheduled
//   service with departure times or seat prices.
// - All 6 initial routes are international (cross into Bahrain or the UAE).
//   Running a coach (as opposed to a private car) across a GCC land border is a
//   materially bigger, operationally-unverified claim than the private-car
//   cross-border service already documented on /routes/. Every field that
//   touches cross-border capability must be phrased as "can be arranged /
//   contact us to confirm eligibility for your date," never as a standing,
//   guaranteed service — this applies to every one of the 6 initial routes.

export interface BusFAQ {
    question: string;
    shortAnswer: string;
    detailedAnswer: string;
}

export interface BusRelatedLink {
    name: string;
    url: string;
    description: string;
}

export interface BusRoute {
    slug: string;

    origin: string;
    originFull: string;
    originCountry: string;
    destination: string;
    destinationFull: string;
    destinationCountry: string;
    isInternational: boolean;

    // Quick-answer stats — only populated where independently verified. Journey
    // duration is a road-distance estimate for planning purposes, not a promised
    // transfer time (border processing is separate and variable — see borderNote).
    distanceRange?: string;
    journeyDurationRange?: string;

    // Long-form, genuinely route-specific content (not a city-name swap of another route).
    aboutRouteParagraphs: string[];
    borderCrossingName?: string;           // e.g. "King Fahd Causeway" — only when verified
    borderParagraphs?: string[];           // cross-border section content (international only)
    crossBorderCoachNote?: string;         // the hedged "can be arranged, subject to confirmation" note

    // Internal linking
    relatedTaxiRoute?: BusRelatedLink;         // existing /routes/ commercial page, if one exists
    relatedTaxiRouteNote?: string;             // shown instead when no matching /routes/ page exists
    relatedDistanceRoute?: BusRelatedLink;     // existing /distance/ page, if one exists
    relatedBusSlugs: string[];                 // sibling /bus/ route slugs to cross-link
    relatedBorderLink?: BusRelatedLink;        // existing /border-crossings/ detail page, if any

    seoTitle: string;
    metaDescription: string;
    h1: string;

    faqs: BusFAQ[];

    lastVerified: string;
}

// The one verified bus/coach vehicle in the TaxiServiceKSA fleet. Sourced directly
// from the live /fleet/luxurious-bus/ page — do not add further vehicles here
// without the same level of verification.
export const VERIFIED_COACH = {
    name: 'Luxurious Bus',
    capacityLabel: '25 Passengers',
    luggageLabel: '30+ Large Bags',
    classLabel: 'Premium Coach',
    features: [
        'Reclining, ergonomic seating',
        'Large under-bus cargo holds',
        'Individual/multi-zone air conditioning',
        'PA system and onboard entertainment screens',
    ],
    fleetPageUrl: '/fleet/luxurious-bus/',
    bookingUrl: '/booking/?vehicle=luxurious-bus',
};

export const BUS_ROUTES: Record<string, BusRoute> = {
    'riyadh-to-bahrain': {
        slug: 'riyadh-to-bahrain',
        origin: 'Riyadh',
        originFull: 'Riyadh, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Bahrain',
        destinationFull: 'Manama, Bahrain',
        destinationCountry: 'Bahrain',
        isInternational: true,

        distanceRange: 'approximately 430–480 km',
        journeyDurationRange: 'approximately 4–5 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Riyadh to Bahrain is one of the longer coach routes we're building out — a genuine cross-Kingdom journey from the capital, through the Eastern Province, and across the King Fahd Causeway into Bahrain.",
            "For groups, families or companies who don't want to coordinate multiple private cars or book flights for everyone separately, a single coach can be a more practical way to move a larger party together, arrive together, and keep the group intact for the whole journey.",
        ],
        borderCrossingName: 'King Fahd Causeway',
        borderParagraphs: [
            "This route crosses the King Fahd Causeway, the land link between Saudi Arabia and Bahrain, after first crossing the Kingdom from Riyadh to the Eastern Province.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status — this varies by passenger, so don't assume everyone in your group has the same requirements. Check current entry requirements before travel.",
            "Border processing time isn't fixed and can vary significantly by day, time and season, especially on weekends and holidays — this applies to any vehicle crossing the causeway, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers for a group this size involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, causeway documentation and coach availability are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        relatedTaxiRoute: {
            name: 'Riyadh to Bahrain Taxi',
            url: '/routes/riyadh-bahrain/',
            description: 'Private car transfer from Riyadh to Bahrain via King Fahd Causeway.',
        },
        relatedBusSlugs: ['al-khobar-to-bahrain', 'dammam-to-bahrain'],
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Saudi-Bahrain causeway.',
        },

        seoTitle: 'Riyadh to Bahrain Bus Service | Seats, Groups & Coach Booking',
        metaDescription: 'Riyadh to Bahrain bus and coach transport for families, groups and companies. Private coach charter via King Fahd Causeway — request a quote for your travel date.',
        h1: 'Riyadh to Bahrain Bus Service',

        faqs: [
            { question: 'Is there a bus from Riyadh to Bahrain?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Can families book together?', shortAnswer: 'Yes', detailedAnswer: "Yes — a private coach charter is well suited to families and extended groups traveling together, since everyone travels on the same vehicle from pickup to Bahrain." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid Bahrain entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 4–5 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 4 to 5 hours before border processing, which varies and isn't controlled by the driver — plan for a full travel day rather than a fixed arrival time." },
            { question: 'Can companies book group transportation?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is available for corporate group bookings, including business delegations and employee transportation, arranged the same way as a family or group charter." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Bahrain to Riyadh when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. We confirm coach availability for the causeway crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },

    'al-khobar-to-bahrain': {
        slug: 'al-khobar-to-bahrain',
        origin: 'Al Khobar',
        originFull: 'Al Khobar, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Bahrain',
        destinationFull: 'Manama, Bahrain',
        destinationCountry: 'Bahrain',
        isInternational: true,

        distanceRange: 'approximately 50–60 km',
        journeyDurationRange: 'approximately 1–1.5 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Al Khobar sits closest to the King Fahd Causeway of any city we cover, making this the shortest of our Bahrain coach routes by distance — a genuinely short hop across the causeway rather than a long-haul journey.",
            "That makes it a practical option for groups making a short trip across — a company outing, a family weekend, or a group booking that doesn't want to split across multiple private cars for such a short crossing.",
        ],
        borderCrossingName: 'King Fahd Causeway',
        borderParagraphs: [
            "This route crosses the King Fahd Causeway directly from Al Khobar, the closest Saudi city to the Bahrain border.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status — check current requirements before travel, since this varies by passenger.",
            "Border processing time isn't fixed and can vary by day, time and season, particularly on weekends and holidays — this applies to any vehicle crossing the causeway, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers for a group this size involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, causeway documentation and coach availability are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        relatedTaxiRoute: {
            name: 'Al Khobar to Bahrain Taxi',
            url: '/routes/khobar-bahrain/',
            description: 'Private car transfer from Al Khobar to Bahrain via King Fahd Causeway.',
        },
        relatedBusSlugs: ['dammam-to-bahrain', 'riyadh-to-bahrain'],
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Saudi-Bahrain causeway.',
        },

        seoTitle: 'Al Khobar to Bahrain Bus Service | Seats, Groups & Coach Booking',
        metaDescription: 'Al Khobar to Bahrain bus and coach transport for families, groups and companies. Private coach charter via King Fahd Causeway — request a quote for your travel date.',
        h1: 'Al Khobar to Bahrain Bus Service',

        faqs: [
            { question: 'Is there a bus from Al Khobar to Bahrain?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Is this a short enough trip for a coach?', shortAnswer: 'Yes, one of our shortest routes', detailedAnswer: "Yes — at roughly 50-60 km, this is the shortest of our Bahrain coach routes by distance, given how close Al Khobar sits to the causeway." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid Bahrain entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 1–1.5 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 1 to 1.5 hours before border processing, which varies and isn't controlled by the driver." },
            { question: 'Can companies book group transportation?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is available for corporate group bookings, including business outings and employee transportation, arranged the same way as a family or group charter." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Bahrain to Al Khobar when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. We confirm coach availability for the causeway crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },

    'dammam-to-bahrain': {
        slug: 'dammam-to-bahrain',
        origin: 'Dammam',
        originFull: 'Dammam, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Bahrain',
        destinationFull: 'Manama, Bahrain',
        destinationCountry: 'Bahrain',
        isInternational: true,

        distanceRange: 'approximately 90 km',
        journeyDurationRange: 'approximately 1.5–2 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Dammam to Bahrain via the King Fahd Causeway is a short, well-established cross-border corridor — one of the most frequently traveled routes between the Eastern Province and Bahrain.",
            "For groups — families, wedding parties, corporate teams — a coach keeps everyone together for the crossing rather than splitting across several cars, which can be simpler to coordinate at the border and on arrival.",
        ],
        borderCrossingName: 'King Fahd Causeway',
        borderParagraphs: [
            "This route crosses the King Fahd Causeway, reached via Al Khobar from Dammam, then continues into Bahrain.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status — check current requirements before travel, since this varies by passenger.",
            "Border processing time isn't fixed and can vary by day, time and season, particularly on weekends and holidays — this applies to any vehicle crossing the causeway, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers for a group this size involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, causeway documentation and coach availability are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        relatedTaxiRoute: {
            name: 'Dammam to Bahrain Taxi',
            url: '/routes/dammam-bahrain/',
            description: 'Private car transfer from Dammam to Bahrain via King Fahd Causeway.',
        },
        relatedBusSlugs: ['al-khobar-to-bahrain', 'jubail-to-bahrain'],
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Saudi-Bahrain causeway.',
        },

        seoTitle: 'Dammam to Bahrain Bus Service | Seats, Groups & Coach Booking',
        metaDescription: 'Dammam to Bahrain bus and coach transport for families, groups and companies. Private coach charter via King Fahd Causeway — request a quote for your travel date.',
        h1: 'Dammam to Bahrain Bus Service',

        faqs: [
            { question: 'Is there a bus from Dammam to Bahrain?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Can families book together?', shortAnswer: 'Yes', detailedAnswer: "Yes — a private coach charter suits families and extended groups traveling together, since everyone stays on the same vehicle for the crossing." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid Bahrain entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 1.5–2 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 1.5 to 2 hours before border processing, which varies and isn't controlled by the driver." },
            { question: 'Can companies book group transportation?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is available for corporate group bookings, including business delegations and employee transportation, arranged the same way as a family or group charter." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Bahrain to Dammam when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. We confirm coach availability for the causeway crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },

    'al-ahsa-to-bahrain': {
        slug: 'al-ahsa-to-bahrain',
        origin: 'Al Ahsa',
        originFull: 'Al Ahsa, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Bahrain',
        destinationFull: 'Manama, Bahrain',
        destinationCountry: 'Bahrain',
        isInternational: true,

        distanceRange: 'approximately 196–218 km',
        journeyDurationRange: 'approximately 2–2.5 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Al Ahsa to Bahrain runs from the Eastern Province's inland oasis region out to the coast and across the King Fahd Causeway — a genuine but manageable regional crossing.",
            "For groups based in Al Ahsa — families, companies, or event groups — a coach charter avoids coordinating several private cars for the same trip and keeps everyone traveling together to the causeway and into Bahrain.",
        ],
        borderCrossingName: 'King Fahd Causeway',
        borderParagraphs: [
            "This route runs from Al Ahsa toward the coast and reaches the King Fahd Causeway via the Eastern Province, then continues into Bahrain.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status — check current requirements before travel, since this varies by passenger.",
            "Border processing time isn't fixed and can vary by day, time and season, particularly on weekends and holidays — this applies to any vehicle crossing the causeway, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers for a group this size involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, causeway documentation and coach availability are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        // No dedicated Al Ahsa-Bahrain commercial taxi route page exists yet — per
        // spec we don't guess or create one.
        relatedTaxiRouteNote: "We don't yet have a dedicated Al Ahsa to Bahrain private car page on this site. Contact us directly via WhatsApp for a custom quote, or see our Dammam to Bahrain taxi service for the closest equivalent route from the Eastern Province.",
        relatedBusSlugs: ['dammam-to-bahrain', 'jubail-to-bahrain'],
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Saudi-Bahrain causeway.',
        },

        seoTitle: 'Al Ahsa to Bahrain Bus Service | Seats, Groups & Coach Booking',
        metaDescription: 'Al Ahsa to Bahrain bus and coach transport for families, groups and companies. Private coach charter via King Fahd Causeway — request a quote for your travel date.',
        h1: 'Al Ahsa to Bahrain Bus Service',

        faqs: [
            { question: 'Is there a bus from Al Ahsa to Bahrain?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Can families book together?', shortAnswer: 'Yes', detailedAnswer: "Yes — a private coach charter suits families and extended groups traveling together from Al Ahsa." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid Bahrain entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 2–2.5 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 2 to 2.5 hours before border processing, which varies and isn't controlled by the driver." },
            { question: 'Can companies book group transportation?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is available for corporate group bookings, including business delegations and employee transportation, arranged the same way as a family or group charter." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Bahrain to Al Ahsa when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. We confirm coach availability for the causeway crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },

    'jubail-to-bahrain': {
        slug: 'jubail-to-bahrain',
        origin: 'Jubail',
        originFull: 'Jubail, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Bahrain',
        destinationFull: 'Manama, Bahrain',
        destinationCountry: 'Bahrain',
        isInternational: true,

        distanceRange: 'approximately 153–170 km',
        journeyDurationRange: 'approximately 2–2.5 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Jubail to Bahrain runs down the Eastern Province coast from the industrial city of Jubail, through Dammam/Al Khobar, and across the King Fahd Causeway.",
            "This route is particularly relevant for companies moving employees or delegations out of Jubail's industrial base for meetings, events or travel connections in Bahrain — a coach charter consolidates a group into one vehicle rather than several taxis.",
        ],
        borderCrossingName: 'King Fahd Causeway',
        borderParagraphs: [
            "This route runs south from Jubail through the Eastern Province to reach the King Fahd Causeway, then continues into Bahrain.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status — check current requirements before travel, since this varies by passenger.",
            "Border processing time isn't fixed and can vary by day, time and season, particularly on weekends and holidays — this applies to any vehicle crossing the causeway, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers for a group this size involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, causeway documentation and coach availability are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        // No dedicated Jubail-Bahrain commercial taxi route page exists yet — per
        // spec we don't guess or create one.
        relatedTaxiRouteNote: "We don't yet have a dedicated Jubail to Bahrain private car page on this site. Contact us directly via WhatsApp for a custom quote, or see our Dammam to Bahrain taxi service for the closest equivalent route from the Eastern Province.",
        relatedBusSlugs: ['dammam-to-bahrain', 'al-khobar-to-bahrain'],
        relatedBorderLink: {
            name: 'King Fahd Causeway Border Guide',
            url: '/border-crossings/taxi-king-fahd-causeway-border-crossing/',
            description: 'What to expect crossing the Saudi-Bahrain causeway.',
        },

        seoTitle: 'Jubail to Bahrain Bus Service | Seats, Groups & Coach Booking',
        metaDescription: 'Jubail to Bahrain bus and coach transport for families, groups and companies. Private coach charter via King Fahd Causeway — request a quote for your travel date.',
        h1: 'Jubail to Bahrain Bus Service',

        faqs: [
            { question: 'Is there a bus from Jubail to Bahrain?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Can companies book employee transportation from Jubail?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is well suited to corporate bookings from Jubail's industrial base, including employee transportation and business delegations." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid Bahrain entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct Bahrain visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 2–2.5 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 2 to 2.5 hours before border processing, which varies and isn't controlled by the driver." },
            { question: 'Can families book together?', shortAnswer: 'Yes', detailedAnswer: "Yes — a private coach charter also suits families and groups traveling together, not just corporate bookings." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Bahrain to Jubail when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. We confirm coach availability for the causeway crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },

    'riyadh-to-dubai': {
        slug: 'riyadh-to-dubai',
        origin: 'Riyadh',
        originFull: 'Riyadh, Saudi Arabia',
        originCountry: 'Saudi Arabia',
        destination: 'Dubai',
        destinationFull: 'Dubai, UAE',
        destinationCountry: 'UAE',
        isInternational: true,

        distanceRange: 'approximately 1,000 km',
        journeyDurationRange: 'approximately 10–12 hours of driving, before border processing',

        aboutRouteParagraphs: [
            "Riyadh to Dubai is a genuine long-distance crossing — roughly 1,000 km from the Saudi capital, across the Al Batha border, and on into the UAE. This is one of the longest cross-border corridors we cover for group transport.",
            "For a large delegation, sports team, tour group or company relocating staff, a coach can consolidate a long journey like this into a single vehicle rather than a convoy of private cars, with everyone arriving together.",
        ],
        borderCrossingName: 'Al Batha',
        borderParagraphs: [
            "This route crosses into the UAE at the Al Batha border (known as Al Ghuwaifat on the UAE side), after crossing the length of Saudi Arabia from Riyadh.",
            "Because the journey crosses an international border, every passenger is responsible for carrying a valid passport and the correct UAE visa or entry permission for their nationality and residency status — this varies by passenger, so confirm eligibility before travel.",
            "Border processing time isn't fixed and can vary significantly by day, time and season, especially on weekends and holidays — this applies to any vehicle crossing at Al Batha, coach included.",
        ],
        crossBorderCoachNote: "Cross-border coach transfers on a route this long involve additional vehicle-side requirements beyond what applies to a single private car — vehicle eligibility, border documentation and coach availability for the Al Batha crossing are confirmed per booking. Contact us with your travel date and group size to confirm a cross-border coach can be arranged for this route before you finalize your plans.",

        relatedTaxiRoute: {
            name: 'Riyadh to Dubai Taxi',
            url: '/routes/riyadh-dubai/',
            description: 'Private car transfer from Riyadh to Dubai via Al Batha border.',
        },
        relatedBusSlugs: [],
        relatedBorderLink: {
            name: 'Al Batha Border Crossing Guide',
            url: '/border-crossings/taxi-al-batha-border-crossing/',
            description: 'What to expect crossing the Saudi-UAE border.',
        },

        seoTitle: 'Riyadh to Dubai Bus & Coach Service | Seats, Groups & Coach Booking',
        metaDescription: 'Riyadh to Dubai bus and coach transport for families, groups and companies. Private coach charter via the Al Batha border — request a quote for your travel date.',
        h1: 'Riyadh to Dubai Bus & Coach Service',

        faqs: [
            { question: 'Is there a bus from Riyadh to Dubai?', shortAnswer: 'Private coach charter can be arranged', detailedAnswer: "We don't currently run a fixed daily scheduled bus service on this route. What we can arrange is a private coach charter for your group, booked in advance — contact us with your travel date and passenger count." },
            { question: 'How do I book a seat?', shortAnswer: 'This is a private group charter, not per-seat ticketing', detailedAnswer: "This service is arranged as a private coach charter for your whole group rather than individual seat sales. Tell us your group size and we'll confirm the right vehicle and a quote." },
            { question: 'Is this a realistic route for a coach given the distance?', shortAnswer: 'It\'s genuinely long — plan accordingly', detailedAnswer: "Yes, though at roughly 1,000 km and 10-12 hours of driving before border processing, this is one of the longer routes we cover. Plan for a full travel day and confirm timing when booking." },
            { question: 'Can I book a private coach?', shortAnswer: 'Yes, that\'s how this service is arranged', detailedAnswer: "Yes — every booking on this route is arranged as a private coach for your group rather than shared or scheduled seating." },
            { question: 'How much luggage can I bring?', shortAnswer: 'Confirmed at booking', detailedAnswer: "Luggage allowance is confirmed during booking based on the selected coach and passenger count." },
            { question: 'What documents are required?', shortAnswer: 'Passport and valid UAE entry permission for every passenger', detailedAnswer: "Every passenger needs a valid passport and the correct UAE visa or entry permission for their nationality and residency status. Requirements vary by passenger — confirm eligibility before booking." },
            { question: 'How long does the journey take?', shortAnswer: 'Approximately 10–12 hours of driving, plus border time', detailedAnswer: "Driving time is approximately 10 to 12 hours before border processing at Al Batha, which varies and isn't controlled by the driver — plan for a full travel day." },
            { question: 'Can companies book group transportation?', shortAnswer: 'Yes', detailedAnswer: "Yes — this route is available for corporate group bookings, including business delegations, event groups and staff relocations." },
            { question: 'Can I arrange a return journey?', shortAnswer: 'Yes, by request', detailedAnswer: "Yes — let us know if you need a return leg from Dubai to Riyadh when booking, and we'll confirm it as part of the same arrangement." },
            { question: 'Is cross-border coach travel guaranteed on this route?', shortAnswer: 'It can be arranged, subject to confirmation', detailedAnswer: "Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing, and this is a genuinely long route. We confirm coach availability for the Al Batha crossing per booking rather than guaranteeing it as a standing service — contact us with your date to check." },
        ],
        lastVerified: 'August 2026',
    },
};

export function getBusRoute(slug: string): BusRoute | undefined {
    return BUS_ROUTES[slug];
}

export function getAllBusRoutes(): BusRoute[] {
    return Object.values(BUS_ROUTES);
}
