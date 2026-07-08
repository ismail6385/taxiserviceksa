export interface HotelTransferData {
    slug: string; // used for /routes/jeddah-to-{slug}/
    name: string;
    shortName: string; // for buttons/CTAs
    area: string; // neighborhood/complex
    driveTimeMin: string; // e.g. "75-90"
    distanceKm: string;
    haramAccess: string; // how guests reach the mosque from the hotel
    dropOffNote: string; // where the driver actually drops guests
    complex?: string; // e.g. "Abraj Al Bait Complex"
    highlight: string; // one distinguishing fact used in the intro paragraph
    cityName: 'Makkah' | 'Madinah' | 'Jeddah';
    haramName: string; // "the Haram", "Masjid an-Nabawi", or "your hotel" for city-only stays
    hubUrl: string; // e.g. "/routes/jeddah-makkah/" or "/locations/jeddah/"
    hubLabel: string; // link text, e.g. "Jeddah to Makkah Taxi" or "Jeddah Airport Transfers"
}
