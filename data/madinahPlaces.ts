// Central facts for Madinah destination pages. Distances are stated once here and every page reads them,
// so the Uhud page, the Central Area table and anything else show the same figure.
//
// Source for Mount Uhud: Visit Saudi ("about 5 km north of the Prophet's Mosque"; no entry ticket).
// Travel time is deliberately not fixed - it depends on the hotel, the exact stop and traffic.

export interface PlaceRoute {
    origin: string;
    destination: string;
    /** Human-readable distance as published by the source. */
    distance: string;
    /** Shown in place of a fixed duration. */
    durationNote: string;
    source: { label: string; href: string };
}

export const madinahToUhud: PlaceRoute = {
    origin: 'Masjid an-Nabawi / central Madinah',
    destination: 'Mount Uhud',
    distance: 'About 5 km',
    durationNote: 'A short drive; the time depends on your hotel, the exact Uhud stop and traffic.',
    source: { label: 'Visit Saudi', href: 'https://www.visitsaudi.com/en/madinah/attractions/uhud-mountain-in-madinah' },
};

export const mountUhud = {
    id: 'mount-uhud',
    city: 'Madinah',
    type: 'ziyarat-destination',
    pageUrl: 'https://taxiserviceksa.com/locations/madinah/uhud/',
    route: madinahToUhud,
    visitorInfo: {
        ticket: 'Visit Saudi currently lists no entry ticket for Mount Uhud.',
        change: 'Current visitor arrangements can change. Follow site instructions and any temporary restrictions when you arrive.',
        source: madinahToUhud.source,
    },
    // Stops a visit to the Uhud area can include.
    stops: ['Mount Uhud', "Uhud Martyrs' Cemetery area", 'Jabal al-Rumah area'],
    links: {
        madinah: '/locations/madinah/',
        ziyarat: '/services/madinah-ziyarat/',
        quba: '/locations/madinah/quba/',
        qiblatain: '/locations/madinah/qiblatain/',
        trainStation: '/locations/madinah/train-station/',
        airport: '/locations/madinah/madinah-airport/',
        makkah: '/routes/madinah-makkah/',
    },
};
