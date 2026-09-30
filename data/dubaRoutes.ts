// Duba destination and route network: the one list the Duba page reads its journeys and links from.
// Each dedicated route or destination page owns that journey's details.
//
// distanceKm / duration are deliberately unset: no verified Duba figure exists in data/distanceRoutes.ts,
// and the Tabuk figures published across the site disagree (see data/tabukRoutes.ts). Fill them in here
// once verified.
export interface DubaRoute {
    id: 'tabuk' | 'neom' | 'haql' | 'alWajh' | 'umluj' | 'alula';
    to: string;
    kind: string;
    /** Dedicated route page, where one exists. */
    route?: string;
    /** Destination guide page. */
    guide: string;
    distanceKm?: number;
    duration?: string;
}

export const DUBA = {
    id: 'duba',
    name: 'Duba',
    region: 'Tabuk Region',
    type: 'coastal-city',
    pageUrl: 'https://taxiserviceksa.com/locations/duba/',
};

export const DUBA_ROUTES: DubaRoute[] = [
    { id: 'tabuk', to: 'Tabuk', kind: 'Inland city & TUU airport', route: '/routes/tabuk-duba/', guide: '/locations/tabuk/' },
    { id: 'neom', to: 'NEOM area', kind: 'Northwest coast', guide: '/locations/neom/' },
    { id: 'haql', to: 'Haql', kind: 'Gulf of Aqaba coast', guide: '/locations/haql/' },
    { id: 'alWajh', to: 'Al Wajh', kind: 'Red Sea coast, south', guide: '/locations/al-wajh/' },
    { id: 'umluj', to: 'Umluj', kind: 'Red Sea coast, further south', guide: '/locations/umluj/' },
    { id: 'alula', to: 'AlUla', kind: 'Inland heritage', guide: '/locations/alula/' },
];

export const dubaRoute = (id: DubaRoute['id']) => DUBA_ROUTES.find((r) => r.id === id)!;

export const TUU = { code: 'TUU', name: 'Prince Sultan bin Abdulaziz Airport, Tabuk', quote: 'Tabuk Airport (TUU)', href: '/tabuk-airport-taxi/' };
