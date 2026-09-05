/**
 * Quick-add presets for the admin booking form's "Additional Stops"
 * editor — common named Ziyarat/sightseeing sites per city, so an admin
 * building a Makkah/Madinah/Taif/AlUla itinerary doesn't have to retype
 * the same site names every time. Purely a convenience list for the
 * admin UI; it does not affect public marketing pages, which keep their
 * own independent content.
 */
export interface ZiyaratCityPreset {
    city: string;
    sites: string[];
}

export const ZIYARAT_SITE_PRESETS: ZiyaratCityPreset[] = [
    {
        city: 'Makkah',
        sites: [
            'Jabal al-Nour (Hira Cave)',
            'Jabal Thawr',
            "Jannat al-Mu'alla",
            'Masjid al-Jinn',
            'Mina',
            'Muzdalifah',
            'Arafat (Jabal al-Rahmah)',
        ],
    },
    {
        city: 'Madinah',
        sites: [
            'Masjid Quba',
            'Mount Uhud',
            'Masjid Qiblatain',
            "Jannat al-Baqi'",
            "Seven Mosques (Sab'ah Masajid)",
            'Masjid al-Ghamama',
        ],
    },
    {
        city: 'Taif',
        sites: [
            'Masjid Abbas',
            'Masjid Addas',
            'Masjid Ali (RA)',
            'Masjid Rasool ﷺ',
            'Grapes Garden',
            'Al-Hada Cable Car',
            'Al-Hada Mountain',
        ],
    },
    {
        city: 'AlUla',
        sites: [
            'Hegra (Madain Salih)',
            'Dadan & Jabal Ikmah',
            'Elephant Rock',
            'Maraya Concert Hall',
            'AlUla Old Town',
            'Winter Park',
        ],
    },
];
