import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Plane, Building2, Compass, ArrowRight, MapPin, Crown, Globe, Clock, Users, Heart, Languages, Briefcase, Mountain, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Services Across Saudi Arabia | Taxi Service KSA',
    description: 'Complete range of private transport services in Saudi Arabia — chauffeur, airport transfers, tourism transport, private driver hire, event transport, and more. Book now.',
    keywords: ['VIP Private Transfers', 'Executive Chauffeur Service', 'Taxi Service KSA', 'Long Distance Transfer', 'Umrah Private Transport', 'Business Chauffeur', 'Tourism Transport Saudi', 'Private Driver Saudi Arabia', 'English Speaking Driver Saudi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/',
            'ar': 'https://taxiserviceksa.com/ar/services/',
            'ur': 'https://taxiserviceksa.com/ur/services/',
            'x-default': 'https://taxiserviceksa.com/services/',
        },
    },
};

export default function ServicesPage() {
    const featuredServices = [
        {
            name: 'Luxury Chauffeur',
            description: 'Private chauffeur for royal guests, diplomats, CEOs, and elite visitors. Discreet, licensed drivers with Cadillac Escalade, GMC Yukon, and Mercedes S-Class fleet.',
            icon: Crown,
            href: '/services/vip-chauffeur/',
            features: ['Royal & diplomatic transport', 'Embassy guest transfers', 'Luxury hotel concierge', '24/7 availability'],
            isNew: true,
        },
        {
            name: 'Tourism Transport',
            description: 'Private driver for international tourists across Saudi Arabia. City tours, desert trips, shopping tours, and AlUla road trips. English-speaking drivers.',
            icon: Globe,
            href: '/services/tourism-transport/',
            features: ['Riyadh sightseeing tours', 'Desert day trips', 'AlUla luxury road trips', 'Foreign visitor friendly'],
            isNew: true,
        },
        {
            name: 'Private Driver — Hourly & Daily',
            description: 'Hire a private driver by the hour, full day, week, or month in Riyadh and Jeddah. Shopping, meetings, family outings — your schedule, your driver.',
            icon: Clock,
            href: '/services/private-driver/',
            features: ['Hourly, daily, weekly, monthly', 'Shopping driver Riyadh', 'GMC Yukon & Hiace available', 'Fixed rates'],
            isNew: true,
        },
        {
            name: 'Event & Wedding Transport',
            description: 'Coordinated transport for weddings, conferences, exhibitions, and Riyadh Season events. Multi-vehicle logistics with a dedicated event coordinator.',
            icon: Heart,
            href: '/services/event-transport/',
            features: ['Wedding guest shuttles', 'Conference delegates', 'Riyadh Season events', 'Expo & exhibition transport'],
            isNew: true,
        },
        {
            name: 'English-Speaking Bilingual Driver',
            description: 'English and Arabic speaking private driver for foreign visitors and expats. Female-friendly service available. Booking in English — no Arabic needed.',
            icon: Languages,
            href: '/services/bilingual-chauffeur/',
            features: ['English, Arabic, Urdu', 'Foreign visitor friendly', 'Female-friendly drivers', 'Expat daily hire'],
            isNew: true,
        },
        {
            name: 'Women\'s Private Transport',
            description: 'Safe, discreet transport for women traveling solo, with family, or for business. Pre-assigned professional drivers with driver details shared in advance.',
            icon: Users,
            href: '/services/women-transport/',
            features: ['Solo female travelers', 'Family transport', 'Medical visits', '24/7 including late night'],
            isNew: true,
        },
        {
            name: 'Makkah City Transport',
            description: 'Family transport in Makkah. Hotel to Haram, Ziyarat tours, JED airport transfers, and Makkah to Madinah. All-Muslim drivers with full city access.',
            icon: MapPin,
            href: '/services/makkah-city-transport/',
            features: ['Hotel to Haram transfers', 'Makkah Ziyarat tours', 'JED → Makkah airport run', 'All prayer times'],
            isNew: true,
        },
        {
            name: 'Madinah City Transport',
            description: 'Luxury family transfer and private chauffeur in Madinah. Hotel to Prophet\'s Mosque, Ziyarat tours, MED airport, and Madinah to Makkah.',
            icon: MapPin,
            href: '/services/madinah-city-transport/',
            features: ['Hotel to Prophet\'s Mosque', 'Madinah Ziyarat tours', 'MED airport pickup', 'Family vehicles'],
            isNew: true,
        },
        {
            name: 'Toyota Hiace Group Hire',
            description: 'Private 11-seat Toyota Hiace with driver for families, pilgrim groups, tourist parties, and corporate teams across Saudi Arabia.',
            icon: Users,
            href: '/services/group-hiace-hire/',
            features: ['11 passengers + luggage', 'Pilgrim & family groups', 'Tourist group tours', 'Daily & multi-day hire'],
            isNew: true,
        },
        {
            name: 'Riyadh Hotel Transfer',
            description: 'Private airport-to-hotel, hotel-to-business-district, and hotel pickup service across Riyadh. Meet-and-greet, flight tracking, all major hotels covered.',
            icon: Building2,
            href: '/services/riyadh-hotel-transfer/',
            features: ['RUH airport meet & greet', '90-min free wait', 'All Riyadh hotels', 'Late night available'],
            isNew: true,
        },
        {
            name: 'Umrah Transfers',
            description: 'Exclusive private transport for pilgrims between Jeddah Airport, Makkah, and Madinah. Luxury family transfers with ample luggage space.',
            icon: Car,
            href: '/services/umrah-transport/',
            features: ['Executive Meeqat assistance', 'Spacious pilgrim luxury vans', 'Multilingual chauffeurs', 'All-day private hire'],
            isNew: false,
        },
        {
            name: 'Executive Airport Pickups',
            description: 'Meet-and-greet service at all major Saudi airports. Chauffeurs wait at the terminal with personalized signage.',
            icon: Plane,
            href: '/services/airport-transfers/',
            features: ['Personalized name signs', 'Flight tracker integration', 'VIP terminal assistance', 'Luxury sedan & SUV'],
            isNew: false,
        },
        {
            name: 'Corporate Travel',
            description: 'Dedicated corporate travel accounts for businesses. Monthly billing, multi-trip contracts, and fleet allocation for your company.',
            icon: Building2,
            href: '/services/corporate-travel/',
            features: ['Executive vehicles', 'Monthly billing', 'Priority booking', 'Business districts'],
            isNew: false,
        },
        {
            name: 'Heritage Tour Transport',
            description: 'Heritage tour transport to UNESCO sites like AlUla. Professional drivers with 4x4 vehicles for desert excursions.',
            icon: Compass,
            href: '/services/heritage-tours/',
            features: ['AlUla Hegra tours', '4x4 desert vehicles', 'English-speaking guides', 'Flexible schedules'],
            isNew: false,
        },
        {
            name: 'Intercity Transfers',
            description: 'Intercity transfers connecting all major Saudi cities. Fixed flat rates for Riyadh to Jeddah, Jeddah to Madinah, and all long-distance routes.',
            icon: Compass,
            href: '/services/intercity/',
            features: ['Long distance comfort', 'Multiple city stops', 'Fixed intercity rates', '24/7 highway service'],
            isNew: false,
        },
        {
            name: 'GCC Chauffeur Service',
            description: 'Private cross-border transfers from Saudi Arabia to the UAE, Kuwait, Qatar, and Bahrain. Fixed rates, single private vehicle, door-to-door.',
            icon: Globe,
            href: '/services/gcc-chauffeur-service/',
            features: ['Dubai, Kuwait, Doha, Bahrain', 'Fixed cross-border rates', '100% private vehicle', 'One-way or round trip'],
            isNew: true,
        },
        {
            name: 'Sightseeing & Ziyarat Tours',
            description: 'Sightseeing and Ziyarat tours in Makkah, Madinah, and Taif with knowledgeable drivers.',
            icon: MapPin,
            href: '/services/tours/',
            features: ['Makkah Ziyarat', 'Madinah historical sites', 'Taif mountain tours', 'Flexible itinerary'],
            isNew: false,
        },
        {
            name: 'Wheelchair Accessible Transfer',
            description: 'Wheelchair accessible transfer service for pilgrims and passengers with special needs. Specially equipped vehicles with ramps.',
            icon: Car,
            href: '/services/wheelchair-taxi/',
            features: ['Ramp equipped vehicles', 'Safe luggage storage', 'Trained helpful drivers', 'Door-to-door assistance'],
            isNew: false,
        },
        {
            name: 'B2B Transport Solutions',
            description: 'Bulk transport contracts for travel agencies, hotels, and tour operators. Custom pricing, invoicing, and fleet allocation.',
            icon: Building2,
            href: '/services/b2b-solutions/',
            features: ['Travel agency partners', 'Hotel concierge contracts', 'Bulk booking discounts', 'Custom invoicing'],
            isNew: false,
        },
        {
            name: 'Business Traveler Transport',
            description: 'Book a premium car by the single trip — no account or contract needed. Perfect for one-off meetings, client visits, or an airport run while you\'re in town.',
            icon: Briefcase,
            href: '/services/business/',
            features: ['Pay per trip, no account', 'Same-day booking', 'Executive sedans & SUVs', 'WhatsApp booking'],
            isNew: false,
        },
        {
            name: 'Taxi in Jeddah — Local City Rides',
            description: 'Same-day local rides within Jeddah — Corniche, malls, business districts, and hotel-to-hotel — without booking a full intercity transfer.',
            icon: Car,
            href: '/services/taxi-in-jeddah/',
            features: ['Corniche & waterfront', 'Malls & shopping', 'Business district meetings', 'Same-day booking'],
            isNew: false,
        },
        {
            name: 'Taxi in Makkah — Hotel to Haram',
            description: 'Local rides between your Makkah hotel and Al Haram, plus short Ziyarat trips to nearby sites. Fixed fares, no meters.',
            icon: Car,
            href: '/services/taxi-in-makkah/',
            features: ['Hotel to Haram shuttle', 'Local Ziyarat sites', 'Fixed fares, no meter', '24/7 prayer times'],
            isNew: false,
        },
        {
            name: 'Madinah Ziyarat Packages',
            description: 'Tiered Ziyarat tour packages covering Quba Mosque, Mount Uhud, the Seven Mosques, and Al-Baqi — with a driver who waits at every site.',
            icon: MapPin,
            href: '/services/madinah-ziyarat/',
            features: ['Quba, Uhud, Seven Mosques', 'Al-Baqi Cemetery', 'Driver waits on-site', 'Package pricing'],
            isNew: false,
        },
        {
            name: 'Taxi in Dammam & Eastern Province',
            description: 'Private car service across Dammam, Al Khobar, and Dhahran — plus Bahrain Causeway crossings and Aramco compound transfers.',
            icon: MapPin,
            href: '/services/taxi-in-dammam/',
            features: ['Al Khobar & Dhahran', 'Bahrain Causeway specialists', 'Aramco compound access', 'DMM airport pickup'],
            isNew: false,
        },
        {
            name: 'Taxi in Tabuk & NEOM',
            description: 'Private car service for NEOM workers and AlUla-bound tourists across Tabuk province.',
            icon: MapPin,
            href: '/services/taxi-in-tabuk/',
            features: ['NEOM worker transfers', 'AlUla tourist trips', 'Tabuk city rides', 'Fixed rates'],
            isNew: false,
        },
        {
            name: 'Jeddah Corniche Hotel Taxi',
            description: 'Lobby pickups at Ritz-Carlton, Shangri-La, Waldorf Astoria, and every major hotel on the Jeddah Corniche. Airport and Makkah transfers included.',
            icon: Building2,
            href: '/services/jeddah-corniche-hotel-taxi/',
            features: ['All Corniche luxury hotels', 'Lobby pickup', 'Airport & Makkah transfers', 'Fixed rates'],
            isNew: false,
        },
        {
            name: 'Jeddah Cruise Port Transfer',
            description: 'Pre-booked transfers from Jeddah Islamic Port for cruise passengers — direct to Makkah for Umrah, JED Airport, or city hotels.',
            icon: Anchor,
            href: '/services/jeddah-port-taxi-transfer/',
            features: ['Cruise terminal pickup', 'Makkah Umrah day-trips', 'Airport connections', 'Fixed rates'],
            isNew: false,
        },
        {
            name: 'Cable Car Station Transfer',
            description: 'Private transport to the Taif and Abha cable car stations. Mountain-road drivers, timed for your cable car booking.',
            icon: Mountain,
            href: '/services/cable-car/',
            features: ['Taif & Abha stations', 'Mountain-road drivers', 'Timed for your booking', 'Round-trip available'],
            isNew: false,
        },
    ];

    const services = featuredServices;

    const newServices = services.filter(s => s.isNew);
    const coreServices = services.filter(s => !s.isNew);

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        All Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Private Car, Taxi and Chauffeur<br />{' '}
                        <span className="text-black">Services Across Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> Pre-booked private journeys across the Kingdom — from chauffeur and tourist transport to Umrah transfers and group hire. No street-hail, no surge pricing.
                    </p>
                </div>

                {/* New Services */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                        Specialist Services
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {newServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-black transition-all h-full flex flex-col">
                                <div className="p-8 border-b border-gray-200">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="p-8 flex-1">
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <Link href={service.href} className="block">
                                        <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold group">
                                            View Service
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Services */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {coreServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-black transition-all h-full flex flex-col">
                                <div className="p-8 border-b border-gray-200">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="p-8 flex-1">
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 pt-0">
                                    <Link href={service.href} className="block">
                                        <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold group">
                                            View Service Details
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed text-lg">
                        Message us on WhatsApp with your travel dates and destination. We&apos;ll recommend the right service and vehicle for your group.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966563573531?text=Hello,%20I%20need%20help%20choosing%20a%20transport%20service" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold">
                                WhatsApp Us
                            </Button>
                        </Link>
                        <Link href="/booking/">
                            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

