// Tabuk route network: the one list the Tabuk hub reads its journey cards and links from.
// Each dedicated route page owns that journey's distance, duration, price and FAQs.
//
// distanceKm / duration are deliberately unset: the figures published across the site disagree
// (Tabuk-NEOM 180 vs 190 km, Tabuk-Haql 230 vs 320 km, Tabuk-Al Wajh 330 vs 200 km,
// Tabuk-Jeddah 920 vs 1,100 km). Fill them in here once verified and have pages read them from this file.
export type TabukRouteGroup = 'airport' | 'neom' | 'alula' | 'coast' | 'intercity';

export interface TabukRoute {
    to: string;
    /** Journey type shown on the card. */
    kind: string;
    group: TabukRouteGroup;
    /** Dedicated page that owns the journey details. */
    href: string;
    /** Destination hub, where one exists. */
    guide?: string;
    quote: { from: string; to: string };
    distanceKm?: number;
    duration?: string;
}

export const TUU = 'Tabuk Airport (TUU)';

export const TABUK_ROUTES: TabukRoute[] = [
    { to: 'NEOM', kind: 'Project / long-distance', group: 'neom', href: '/routes/tabuk-neom/', guide: '/locations/neom/', quote: { from: 'Tabuk', to: 'NEOM' } },
    { to: 'AlUla', kind: 'Tourism / intercity', group: 'alula', href: '/routes/tabuk-alula/', guide: '/locations/alula/', quote: { from: 'Tabuk', to: 'AlUla' } },
    { to: 'Haql', kind: 'Coastal', group: 'coast', href: '/routes/tabuk-haql/', guide: '/locations/haql/', quote: { from: 'Tabuk', to: 'Haql' } },
    { to: 'Al Wajh', kind: 'Coastal', group: 'coast', href: '/routes/tabuk-al-wajh/', guide: '/locations/al-wajh/', quote: { from: 'Tabuk', to: 'Al Wajh' } },
    { to: 'Madinah', kind: 'Intercity', group: 'intercity', href: '/routes/tabuk-madinah/', guide: '/locations/madinah/', quote: { from: 'Tabuk', to: 'Madinah' } },
    { to: 'Jeddah', kind: 'Long-distance', group: 'intercity', href: '/routes/tabuk-jeddah/', guide: '/locations/jeddah/', quote: { from: 'Tabuk', to: 'Jeddah' } },
    { to: 'Riyadh', kind: 'Long-distance', group: 'intercity', href: '/routes/tabuk-riyadh/', guide: '/locations/riyadh/', quote: { from: 'Tabuk', to: 'Riyadh' } },
    { to: 'TUU Airport', kind: 'Airport', group: 'airport', href: '/tabuk-airport-taxi/', quote: { from: 'Tabuk', to: TUU } },
];

export const tabukRoute = (to: string) => TABUK_ROUTES.find((r) => r.to === to)!;
