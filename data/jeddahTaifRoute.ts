// Jeddah <-> Taif: the one route object both /routes/jeddah-taif/ and /routes/taif-jeddah/ read,
// so distance, road time, corridor wording and vehicles cannot drift apart between the two pages.
// Distance and road time come from the site's distance data (data/distanceRoutes.ts), not from here.
import { getDistanceRoute } from './distanceRoutes';

const d = getDistanceRoute('jeddah-to-taif');
const tidy = (s?: string) => (s ?? '').replace(/^approximately\s*/i, '').replace(/ of continuous driving$/, '');

export const JEDDAH_TAIF = {
    id: 'jeddah-taif',
    origin: 'Jeddah',
    destination: 'Taif',
    region: 'Western Saudi Arabia',
    href: '/routes/jeddah-taif/',
    reverseHref: '/routes/taif-jeddah/',
    distanceHref: '/distance/jeddah-to-taif/',

    /** e.g. "167–200 km" - a range, because it changes with the pickup, the destination and the road used. */
    distance: tidy(d?.distanceRange) || '167–200 km',
    /** e.g. "~175 km" - for small cards. */
    distanceShort: d?.distanceHeadline ?? '~175 km',
    /** e.g. "2–2.5 hours" of driving. */
    roadTime: tidy(d?.drivingTimeRange) || '2–2.5 hours',
    roadTimeShort: d?.drivingTimeHeadline ?? '~2–2.5 hrs',

    primaryCorridor: 'Al Hada',
    alternateCorridors: ['Al Sail'],
    /** The only wording pages should use about which road is taken. */
    corridorNote: 'When conditions allow, the Al Hada corridor can provide the direct mountain approach toward Taif. Route selection may change because of weather, road conditions or temporary restrictions.',
    routeFactors: ['Rain', 'Fog and reduced visibility', 'Road restrictions or closures', 'Traffic', 'Seasonal conditions', 'Your exact destination'],

    /** Names must match the booking system's vehicle list (lib/supabase.ts), which owns seats and luggage. */
    vehicles: [
        { name: 'Toyota Camry', cls: 'Sedan' },
        { name: 'GMC Yukon XL / Denali', cls: 'Large SUV' },
        { name: 'Hyundai Staria VIP', cls: 'Premium van' },
        { name: 'Toyota Hiace', cls: 'Group van' },
        { name: 'Mercedes Sprinter', cls: 'Sprinter' },
    ],

    /** No fixed fare exists for this route in lib/pricing.ts, so both directions are quote-based. */
    priceFactors: ['Exact pickup', 'Exact destination', 'Vehicle', 'Passengers', 'Luggage', 'One-way or return', 'Waiting', 'Additional stops', 'Travel date'],
} as const;

/** "Estimated road time is approximately 2–2.5 hours, depending on ..." */
export const JEDDAH_TAIF_TIME_NOTE = `Estimated road time is approximately ${JEDDAH_TAIF.roadTime}, depending on your pickup point, destination, traffic and mountain-road conditions.`;
