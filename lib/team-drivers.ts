// The owner's own team of drivers. Names here are what gets written to
// bookings.driver_name when one of them is picked in admin, and what each
// driver's private trip sheet (/my-trips/[slug]/[token]) matches on.
export const TEAM_DRIVERS = [
    { slug: 'ajmal', name: 'Ajmal' },
    { slug: 'fahed', name: 'Fahed' },
    { slug: 'yasir', name: 'Yasir' },
    { slug: 'ashraf', name: 'Ashraf' },
    { slug: 'sheraz', name: 'Sheraz' },
    { slug: 'umer', name: 'Umer' },
    { slug: 'naimat-ullah', name: 'Naimat Ullah' },
] as const;

export type TeamDriver = (typeof TEAM_DRIVERS)[number];

export const findTeamDriver = (slug: string) => TEAM_DRIVERS.find(d => d.slug === slug);
