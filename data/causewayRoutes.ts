// Saudi <-> Bahrain route network via King Fahd Causeway.
// The Causeway hub links here; each route page owns its own journey details and pricing.
export interface CausewayRoute {
    from: string;
    to: string;
    href: string;
    note: string;
    quote: { from: string; to: string };
}

export const SAUDI_START: CausewayRoute[] = [
    { from: 'Al Khobar', to: 'Bahrain', href: '/routes/khobar-bahrain/', note: 'The closest major city to the Causeway.', quote: { from: 'Al Khobar', to: 'Manama, Bahrain' } },
    { from: 'Dammam', to: 'Bahrain', href: '/routes/dammam-bahrain/', note: 'City pickups, north of Al Khobar.', quote: { from: 'Dammam', to: 'Manama, Bahrain' } },
    { from: 'Dammam Airport (DMM)', to: 'Bahrain', href: '/routes/dammam-airport-to-manama-taxi/', note: 'Straight from arrivals to Bahrain.', quote: { from: 'King Fahd International Airport (DMM)', to: 'Manama, Bahrain' } },
    { from: 'Riyadh', to: 'Bahrain', href: '/routes/riyadh-bahrain/', note: 'A long-distance journey across the country first.', quote: { from: 'Riyadh', to: 'Manama, Bahrain' } },
];

export const BAHRAIN_START: CausewayRoute[] = [
    { from: 'Manama', to: 'Dammam', href: '/routes/bahrain-dammam/', note: 'Bahrain to Dammam city.', quote: { from: 'Manama, Bahrain', to: 'Dammam' } },
    { from: 'Manama', to: 'Dammam Airport (DMM)', href: '/routes/manama-to-dammam-airport-taxi/', note: 'For a flight out of Dammam.', quote: { from: 'Manama, Bahrain', to: 'King Fahd International Airport (DMM)' } },
    { from: 'Bahrain Airport (BAH)', to: 'Dammam Airport (DMM)', href: '/routes/bahrain-airport-to-dammam-airport-taxi/', note: 'Airport to airport across the Causeway.', quote: { from: 'Bahrain International Airport (BAH)', to: 'King Fahd International Airport (DMM)' } },
    { from: 'Bahrain', to: 'Riyadh', href: '/routes/bahrain-riyadh/', note: 'Across the Causeway, then on to the capital.', quote: { from: 'Manama, Bahrain', to: 'Riyadh' } },
];
