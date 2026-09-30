// Central list of the site's service pages, used to render the /services/ hub.
// Each page keeps its own hand-written content; this only describes how the hub groups and links them.

export type ServiceCategory = 'airport' | 'intercity' | 'chauffeur' | 'tourism' | 'pilgrimage' | 'business' | 'group' | 'cross-border' | 'local';
export type Journey = 'airport' | 'intercity' | 'hourly' | 'tourism' | 'pilgrimage' | 'corporate' | 'cross-border' | 'city';
export type Audience = 'solo' | 'family' | 'group' | 'business' | 'vip';
export type Region = 'western' | 'central' | 'eastern' | 'southern' | 'northern' | 'gcc';
export type BookingType = 'transfer' | 'hourly' | 'custom';
export type ServiceStatus = 'active' | 'coming-soon' | 'unavailable';

export interface Service {
    id: string;
    name: string;
    category: ServiceCategory;
    tier: 'primary' | 'specialist';
    shortDescription: string;
    bestFor: string[];
    href: string;
    journeys: Journey[];
    audiences: Audience[];
    regions: Region[];
    passengerRange: string;
    bookingType: BookingType;
    status: ServiceStatus;
}

const ALL: Region[] = ['western', 'central', 'eastern', 'southern', 'northern'];

export const SERVICES: Service[] = [
    { id: 'airport', name: 'Airport Transfers', category: 'airport', tier: 'primary', shortDescription: 'Private pickups and drop-offs at Saudi airports.', bestFor: ['Arrivals to a hotel or home', 'Departures with time to spare', 'Families with luggage'], href: '/services/airport-transfers/', journeys: ['airport'], audiences: ['solo', 'family', 'group', 'business', 'vip'], regions: ALL, passengerRange: '1–17', bookingType: 'transfer', status: 'active' },
    { id: 'intercity', name: 'Intercity Transfers', category: 'intercity', tier: 'primary', shortDescription: 'Door-to-door travel from one Saudi city to another.', bestFor: ['Jeddah, Makkah and Madinah', 'Riyadh to Jeddah or Dammam', 'Groups with luggage'], href: '/services/intercity/', journeys: ['intercity'], audiences: ['solo', 'family', 'group', 'business'], regions: ALL, passengerRange: '1–17', bookingType: 'transfer', status: 'active' },
    { id: 'gcc', name: 'GCC Chauffeur Service', category: 'cross-border', tier: 'primary', shortDescription: 'Private road transfers between Saudi Arabia and neighbouring GCC countries.', bestFor: ['Saudi ↔ Bahrain', 'Saudi ↔ Qatar, Kuwait, UAE', 'Business trips across the border'], href: '/services/gcc-chauffeur-service/', journeys: ['cross-border'], audiences: ['solo', 'family', 'business', 'vip'], regions: ['eastern', 'gcc'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },

    { id: 'vip', name: 'VIP Chauffeur', category: 'chauffeur', tier: 'primary', shortDescription: 'A premium vehicle and chauffeur for a planned private journey.', bestFor: ['Hosted guests', 'Premium arrivals', 'Full days and itineraries'], href: '/services/vip-chauffeur/', journeys: ['airport', 'hourly', 'city'], audiences: ['vip', 'business'], regions: ALL, passengerRange: '1–7', bookingType: 'custom', status: 'active' },
    { id: 'private-driver', name: 'Private Driver', category: 'chauffeur', tier: 'primary', shortDescription: 'A car and driver by the hour, day or longer.', bestFor: ['Several stops in a day', 'Shopping and errands', 'Multi-day hire'], href: '/services/private-driver/', journeys: ['hourly', 'city'], audiences: ['solo', 'family', 'business'], regions: ALL, passengerRange: '1–11', bookingType: 'hourly', status: 'active' },
    { id: 'business', name: 'Business Chauffeur', category: 'chauffeur', tier: 'primary', shortDescription: 'One-off trips for meetings, clients and business days.', bestFor: ['Meetings and site visits', 'Client pickups', 'Airport to office'], href: '/services/business/', journeys: ['corporate', 'airport', 'city'], audiences: ['business', 'vip'], regions: ALL, passengerRange: '1–7', bookingType: 'transfer', status: 'active' },

    { id: 'tourism', name: 'Tourism Transport', category: 'tourism', tier: 'primary', shortDescription: 'A private driver for sightseeing, shopping and road trips.', bestFor: ['City sightseeing', 'Day trips', 'Road trips between regions'], href: '/services/tourism-transport/', journeys: ['tourism', 'hourly'], audiences: ['solo', 'family', 'group'], regions: ALL, passengerRange: '1–11', bookingType: 'hourly', status: 'active' },
    { id: 'heritage', name: 'Heritage Tours', category: 'tourism', tier: 'primary', shortDescription: 'Transport to AlUla and other heritage destinations.', bestFor: ['AlUla', 'Historic sites', 'Photography trips'], href: '/services/heritage-tours/', journeys: ['tourism'], audiences: ['solo', 'family', 'group'], regions: ['western', 'northern'], passengerRange: '1–7', bookingType: 'custom', status: 'active' },
    { id: 'tours', name: 'Combination Tours', category: 'tourism', tier: 'primary', shortDescription: 'Several attractions in one private booking.', bestFor: ['Multi-stop sightseeing', 'Family days out', 'First-time visitors'], href: '/services/tours/', journeys: ['tourism'], audiences: ['solo', 'family', 'group'], regions: ALL, passengerRange: '1–11', bookingType: 'custom', status: 'active' },

    { id: 'umrah', name: 'Umrah Transport', category: 'pilgrimage', tier: 'primary', shortDescription: 'Transfers between Jeddah, Makkah and Madinah for Umrah journeys.', bestFor: ['JED Airport → Makkah', 'Makkah → Madinah', 'Madinah → airport'], href: '/services/umrah-transport/', journeys: ['pilgrimage', 'airport', 'intercity'], audiences: ['solo', 'family', 'group'], regions: ['western'], passengerRange: '1–17', bookingType: 'transfer', status: 'active' },
    { id: 'makkah-city', name: 'Makkah City Transport', category: 'pilgrimage', tier: 'primary', shortDescription: 'Journeys within Makkah and to its airports and cities.', bestFor: ['Hotel journeys', 'Ziyarat', 'Airport connections'], href: '/services/makkah-city-transport/', journeys: ['pilgrimage', 'city'], audiences: ['solo', 'family', 'group'], regions: ['western'], passengerRange: '1–11', bookingType: 'transfer', status: 'active' },
    { id: 'madinah-city', name: 'Madinah City Transport', category: 'pilgrimage', tier: 'primary', shortDescription: 'Journeys within Madinah, including to and from MED airport.', bestFor: ['Hotel journeys', 'Ziyarat', 'MED Airport'], href: '/services/madinah-city-transport/', journeys: ['pilgrimage', 'city'], audiences: ['solo', 'family', 'group'], regions: ['western'], passengerRange: '1–11', bookingType: 'transfer', status: 'active' },
    { id: 'madinah-ziyarat', name: 'Madinah Ziyarat', category: 'pilgrimage', tier: 'primary', shortDescription: 'A private vehicle for visiting historic sites around Madinah.', bestFor: ['Quba and Uhud', 'Families', 'Half-day visits'], href: '/services/madinah-ziyarat/', journeys: ['pilgrimage', 'tourism'], audiences: ['solo', 'family', 'group'], regions: ['western'], passengerRange: '1–11', bookingType: 'custom', status: 'active' },

    { id: 'corporate', name: 'Corporate Travel', category: 'business', tier: 'primary', shortDescription: 'Recurring transport arranged for a company.', bestFor: ['Regular staff travel', 'Visiting teams', 'Company guests'], href: '/services/corporate-travel/', journeys: ['corporate'], audiences: ['business'], regions: ALL, passengerRange: '1–17', bookingType: 'custom', status: 'active' },
    { id: 'events', name: 'Event & Wedding Transport', category: 'business', tier: 'primary', shortDescription: 'Guest transport for weddings, conferences and events.', bestFor: ['Hotel ↔ venue', 'Airport ↔ hotel for guests', 'Several vehicles on one schedule'], href: '/services/event-transport/', journeys: ['corporate', 'city'], audiences: ['group', 'business', 'family'], regions: ALL, passengerRange: 'Groups', bookingType: 'custom', status: 'active' },
    { id: 'b2b', name: 'B2B Transport', category: 'business', tier: 'primary', shortDescription: 'Transport arranged for travel agencies, hotels and tour operators.', bestFor: ['Travel agencies', 'Umrah operators', 'Hotels'], href: '/services/b2b-solutions/', journeys: ['corporate', 'pilgrimage'], audiences: ['business', 'group'], regions: ALL, passengerRange: 'Groups', bookingType: 'custom', status: 'active' },

    { id: 'hiace', name: 'Toyota Hiace Group Hire', category: 'group', tier: 'primary', shortDescription: 'A van with driver for larger families and groups.', bestFor: ['Large families', 'Pilgrim groups', 'Tour parties'], href: '/services/group-hiace-hire/', journeys: ['intercity', 'airport', 'pilgrimage', 'tourism'], audiences: ['group', 'family'], regions: ALL, passengerRange: 'Up to 11', bookingType: 'transfer', status: 'active' },
    { id: 'wheelchair', name: 'Wheelchair & Senior-Friendly Transport', category: 'group', tier: 'primary', shortDescription: 'Journeys planned around wheelchair users and slower-mobility passengers.', bestFor: ['Airport and Umrah journeys', 'Hospital visits', 'Elderly travellers'], href: '/services/wheelchair-taxi/', journeys: ['airport', 'city', 'pilgrimage'], audiences: ['family', 'solo'], regions: ALL, passengerRange: '1–7', bookingType: 'transfer', status: 'active' },

    { id: 'riyadh-hotel', name: 'Riyadh Hotel Transfers', category: 'local', tier: 'specialist', shortDescription: 'Hotel pickups and drop-offs in Riyadh.', bestFor: ['Airport ↔ hotel', 'Hotel ↔ venue'], href: '/services/riyadh-hotel-transfer/', journeys: ['city', 'airport'], audiences: ['solo', 'family', 'business'], regions: ['central'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'jeddah-corniche', name: 'Jeddah Corniche Transfers', category: 'local', tier: 'specialist', shortDescription: 'Transfers to and from Corniche hotels in Jeddah.', bestFor: ['Corniche hotels', 'Airport ↔ Corniche'], href: '/services/jeddah-corniche-hotel-taxi/', journeys: ['city', 'airport'], audiences: ['solo', 'family'], regions: ['western'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'jeddah-port', name: 'Jeddah Cruise Port Transfers', category: 'local', tier: 'specialist', shortDescription: 'Transfers for passengers at Jeddah Islamic Port.', bestFor: ['Cruise passengers', 'Port ↔ hotel or Makkah'], href: '/services/jeddah-port-taxi-transfer/', journeys: ['city', 'pilgrimage'], audiences: ['solo', 'family', 'group'], regions: ['western'], passengerRange: '1–11', bookingType: 'transfer', status: 'active' },
    { id: 'cable-car', name: 'Cable Car Station Transfers', category: 'local', tier: 'specialist', shortDescription: 'Transport to cable car stations in Taif and Abha.', bestFor: ['Taif (Al Hada)', 'Abha'], href: '/services/cable-car/', journeys: ['tourism'], audiences: ['family', 'solo'], regions: ['western', 'southern'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'women', name: 'Women’s Private Transport', category: 'local', tier: 'specialist', shortDescription: 'Private journeys for women travelling alone, with family or for work.', bestFor: ['Solo travel', 'Appointments', 'Family outings'], href: '/services/women-transport/', journeys: ['city', 'airport', 'hourly'], audiences: ['solo', 'family'], regions: ALL, passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'bilingual', name: 'Bilingual Chauffeur', category: 'local', tier: 'specialist', shortDescription: 'Request a language preference for your driver.', bestFor: ['Visitors from abroad', 'Expats'], href: '/services/bilingual-chauffeur/', journeys: ['hourly', 'city', 'tourism'], audiences: ['solo', 'family', 'business'], regions: ALL, passengerRange: '1–7', bookingType: 'hourly', status: 'active' },
    { id: 'taxi-jeddah', name: 'Taxi in Jeddah', category: 'local', tier: 'specialist', shortDescription: 'Pre-booked private rides in Jeddah.', bestFor: ['City rides', 'Airport runs'], href: '/services/taxi-in-jeddah/', journeys: ['city', 'airport'], audiences: ['solo', 'family'], regions: ['western'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'taxi-makkah', name: 'Taxi in Makkah', category: 'local', tier: 'specialist', shortDescription: 'Pre-booked private rides in Makkah.', bestFor: ['Hotel journeys', 'Airport runs'], href: '/services/taxi-in-makkah/', journeys: ['city', 'pilgrimage'], audiences: ['solo', 'family'], regions: ['western'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'taxi-dammam', name: 'Taxi in Dammam & Eastern Province', category: 'local', tier: 'specialist', shortDescription: 'Pre-booked private rides around Dammam and the Eastern Province.', bestFor: ['City rides', 'DMM Airport'], href: '/services/taxi-in-dammam/', journeys: ['city', 'airport'], audiences: ['solo', 'family', 'business'], regions: ['eastern'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
    { id: 'taxi-tabuk', name: 'Taxi in Tabuk', category: 'local', tier: 'specialist', shortDescription: 'A pre-booked private car with driver in Tabuk.', bestFor: ['One-way and return trips', 'Hourly hire'], href: '/services/taxi-in-tabuk/', journeys: ['city', 'intercity'], audiences: ['solo', 'family', 'business'], regions: ['northern'], passengerRange: '1–7', bookingType: 'transfer', status: 'active' },
];

export const activeServices = SERVICES.filter((s) => s.status !== 'unavailable');
export const byId = (id: string) => SERVICES.find((s) => s.id === id);
export const byCategory = (c: ServiceCategory) => activeServices.filter((s) => s.category === c);
