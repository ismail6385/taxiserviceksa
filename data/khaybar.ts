// Khaybar destination data - one place for the facts, links and trip options the Khaybar page uses.
// Distances and journey times are deliberately not stored here: no verified figure exists in the
// site's route data (data/distanceRoutes.ts) for Madinah-Khaybar or Khaybar-AlUla yet.

export const KHAYBAR = {
    name: 'Khaybar',
    region: 'Northwest Saudi Arabia',
    type: 'heritage-destination',
    pageUrl: 'https://taxiserviceksa.com/locations/khayber-fort/',

    // Example corridor shown on the page - not a fixed route.
    corridor: [
        { key: 'madinah', name: 'Madinah', note: 'City or airport pickup', href: '/locations/madinah/' },
        { key: 'khaybar', name: 'Khaybar', note: 'Historic oasis and volcanic landscapes', href: null },
        { key: 'alula', name: 'AlUla', note: 'Continue your Northwest Saudi journey', href: '/locations/alula/' },
    ],

    // Dedicated pages that exist today. Each owns its own journey details.
    routes: {
        alulaKhaybar: '/routes/alula-khaybar/',
        madinahAlula: '/routes/madinah-alula/',
        tabukAlula: '/routes/tabuk-alula/',
    },

    starts: ['Madinah', 'Prince Mohammad bin Abdulaziz Airport (MED)', 'AlUla', 'Another Saudi city', 'Custom pickup'] as const,
    needs: ['One-way transfer', 'Return trip', 'Full-day Khaybar visit', 'Multi-stop itinerary', 'Custom private trip'] as const,

    // Official sources - linked, not copied.
    official: {
        rcu: 'https://www.rcu.gov.sa/en/strategic-initiatives/khaybar-heritage-village',
        experienceAlula: 'https://www.experiencealula.com/en/places-to-go/khaybar',
    },
};

export type KhaybarStart = (typeof KHAYBAR.starts)[number];
export type KhaybarNeed = (typeof KHAYBAR.needs)[number];
