import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    Clock, CheckCircle2, ArrowRight, MapPin,
    Car, Users, Shield, Star, Navigation, Crown, Briefcase
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Private Chauffeur Riyadh | Corporate Car with Driver Saudi Arabia | Taxi Service KSA',
    description: 'Best private chauffeur service in Riyadh 2026. Corporate chauffeur, professional driver, car with driver for business meetings & tourism. Fixed rates, 24/7. Book now.',
    keywords: [
        'private chauffeur Riyadh',
        'corporate chauffeur service Riyadh',
        'car with driver Saudi Arabia',
        'best chauffeur service Riyadh',
        'private driver Riyadh',
        'limousine service Riyadh',
        'professional driver Riyadh',
        'private car service Riyadh',
        'top private driver Riyadh',
        'driver for business meeting Riyadh',
        'driver for tourists Riyadh business meeting',
        'executive chauffeur Riyadh',
        'chauffeured limousine Riyadh',
        'profi driver Riyadh',
        'car with driver Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/riyadh-chauffeur/',
        languages: {
            'en': 'https://taxiserviceksa.com/riyadh-chauffeur/',
            'ar': 'https://taxiserviceksa.com/ar/riyadh-chauffeur/',
            'x-default': 'https://taxiserviceksa.com/riyadh-chauffeur/',
        },
    },
    openGraph: {
        title: 'Private Chauffeur Riyadh | Best Corporate Driver Service Saudi Arabia',
        description: 'Premium corporate chauffeur and private driver service in Riyadh. Car with driver for business meetings, tourism, airport transfers. Fixed rates, 24/7.',
        url: 'https://taxiserviceksa.com/riyadh-chauffeur/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function RiyadhChauffeurPage() {

    const clientTypes = [
        {
            icon: <Briefcase className="w-8 h-8 text-black" />,
            title: 'Corporate Executives',
            desc: 'Board meetings, investor roadshows, KAFD office commutes. Discreet, punctual, professional-attire drivers who understand business travel.',
            badge: 'Most Popular',
        },
        {
            icon: <Crown className="w-8 h-8 text-black" />,
            title: 'VIP & Diplomatic Guests',
            desc: 'Royal family guests, ambassadors, and delegations. Cadillac Escalade and GMC Yukon XL with security-trained drivers. Fully confidential.',
            badge: 'VIP Tier',
        },
        {
            icon: <MapPin className="w-8 h-8 text-black" />,
            title: 'Business Meeting Visitors',
            desc: 'Visiting Riyadh for a specific meeting or conference? Your driver handles hotel pickup, meeting point drop-off, and waiting time.',
            badge: 'Single-Day',
        },
        {
            icon: <Star className="w-8 h-8 text-black" />,
            title: 'International Tourists',
            desc: 'Diriyah, Al-Masmak Fortress, Kingdom Tower, Boulevard City. A knowledgeable English-speaking driver who doubles as your Riyadh guide.',
            badge: 'Tourist Package',
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: 'Families & Relocating Expats',
            desc: 'School runs, mall trips, medical appointments, villa-to-villa moves. Reliable weekly or monthly private driver contracts available.',
            badge: 'Long-Term',
        },
        {
            icon: <Shield className="w-8 h-8 text-black" />,
            title: 'Female Travelers',
            desc: 'Solo businesswomen, expat wives, medical patients. Female-friendly drivers confirmed in advance. Driver details shared before pickup.',
            badge: 'Safe & Private',
        },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo executive, daily commute', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Senior executive, VIP arrival', link: '/fleet/genesis-g80/' },
        { name: 'Cadillac Escalade', seats: 6, luggage: '4 bags', ideal: 'Diplomatic, corporate delegation', link: '/fleet/cadillac-escalade/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'Management team, family', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP family, delegation group', link: '/fleet/hyundai-staria/' },
        { name: 'Mercedes-Benz S-Class', seats: 3, luggage: '2 bags', ideal: 'Premium executive, investor guest', link: '/fleet/' },
    ];

    const packages = [
        { title: 'Airport Transfer', duration: 'One-way', desc: 'RUH Airport to any Riyadh destination. Meet-and-greet, flight tracking, fixed rate.', link: '/riyadh-airport-taxi/' },
        { title: 'Half-Day Hire', duration: '4 hours', desc: 'Meetings, site visits, city sightseeing. Driver waits between stops.', link: '/services/private-driver/' },
        { title: 'Full-Day Hire', duration: '8–10 hours', desc: 'Full working day or tourist exploration. Most popular for business visitors.', link: '/services/private-driver/' },
        { title: 'Weekly / Monthly', duration: '5–30 days', desc: 'Dedicated driver assigned to you for the contract period. Rates on request.', link: '/services/private-driver/' },
    ];

    const riyadhRoutes = [
        { from: 'Riyadh City Centre', to: 'KAFD (Financial District)', dist: '18 km', time: '20–30 min', note: 'Business hub route' },
        { from: 'Four Seasons Riyadh', to: 'Diplomatic Quarter', dist: '12 km', time: '15–20 min', note: 'Embassy district' },
        { from: 'RUH Airport', to: 'Al Olaya (City Centre)', dist: '35 km', time: '30–45 min', note: 'Airport corridor' },
        { from: 'Riyadh', to: 'Diriyah UNESCO Site', dist: '22 km', time: '20–30 min', note: 'Top tourist attraction' },
        { from: 'Riyadh', to: 'Jeddah', dist: '950 km', time: '9–10 hrs', note: 'Intercity executive transfer' },
        { from: 'Riyadh', to: 'Dammam / Al Khobar', dist: '400 km', time: '3.5–4 hrs', note: 'Eastern Province business' },
    ];

    const features = [
        'Fixed rates — no surge pricing ever',
        'Ministry of Transport licensed drivers',
        'English, Arabic, Urdu speaking',
        'Professional attire standard',
        'Driver details shared before pickup',
        'Waiting included between stops',
        'Clean, fully-airconditioned vehicles',
        '24/7 including early-morning & late-night',
        'WhatsApp booking — confirmed in 30 min',
        'Same driver for multi-day bookings',
    ];

    const faqs = [
        {
            question: 'Should you rent a car when visiting Riyadh?',
            answer: 'For most visitors to Riyadh, hiring a private driver is smarter than renting a car. Riyadh is a large, spread-out city where distances between attractions are 15–40 km. Driving yourself means navigating multilane highways in unfamiliar traffic, finding parking at malls and hotels, and dealing with GPS that occasionally fails on newer roads. A private chauffeur costs a similar daily rate to a rental car once you add fuel, parking, and insurance — and you arrive at every meeting fresh and on time. Renting a car makes more sense only if you plan to stay 2+ weeks and drive at your own pace between cities.',
        },
        {
            question: 'What is a corporate chauffeur service in Riyadh?',
            answer: 'A corporate chauffeur service in Riyadh provides an assigned professional driver for business-related travel — airport pickups, intercity transfers, hotel to meeting, and full-day hire. Unlike ride-hailing apps, corporate chauffeurs wear professional attire, drive premium vehicles (Cadillac Escalade, Genesis G80, GMC Yukon), wait at every stop, and are pre-booked for a fixed rate. Taxi Service KSA serves Saudi Aramco, SABIC, Ministry delegations, and visiting corporate teams across Riyadh.',
        },
        {
            question: 'What is the best limousine service in Riyadh 2026?',
            answer: 'Taxi Service KSA is one of Riyadh\'s top-rated private chauffeur services in 2026. The fleet includes Cadillac Escalade, GMC Yukon XL, Mercedes-Benz S-Class, Genesis G80, and Hyundai Staria VIP. All drivers are Ministry of Transport licensed, background-checked, and trained in business etiquette. Booking is available 24/7 via WhatsApp with fixed transparent pricing and no surge fees.',
        },
        {
            question: 'Is there a private driver for tourists at Riyadh for business meetings?',
            answer: 'Yes. Taxi Service KSA provides private drivers specifically for international tourists visiting Riyadh for business meetings. The driver picks you up from your hotel, transfers you to the meeting location, waits during the meeting, and returns you to the hotel or airport. Rates depend on vehicle choice and duration. Contact us on WhatsApp for a fixed-price quote before your visit.',
        },
        {
            question: 'How much does a private driver for a business meeting in Riyadh cost?',
            answer: 'A half-day private driver (4 hours) for a business meeting in Riyadh starts from approximately SAR 250–350 in a Toyota Camry, or SAR 500–700 in a Cadillac Escalade. Full-day rates (8–10 hours) range from SAR 450–600 for standard executive and SAR 900–1,400 for luxury. Rates include waiting time between stops and are fixed — no meter running. Contact us on WhatsApp for a precise quote based on your schedule.',
        },
        {
            question: 'What is the cost of a private driver for tourists in Riyadh for a business meeting?',
            answer: 'For international tourists visiting Riyadh on a business agenda, a full-day private driver package costs approximately SAR 450–600 (Toyota Camry / Genesis G80) or SAR 900–1,400 (Cadillac Escalade / GMC Yukon XL). This covers hotel pickup, all meeting transfers, and return drop-off. An English-speaking driver is included as standard at no extra charge. Fixed pricing with no hidden fees — get your quote via WhatsApp before booking.',
        },
        {
            question: 'Can I get a professional chauffeur in Riyadh for a single meeting only?',
            answer: 'Yes. A single-trip or point-to-point transfer from your hotel to one meeting and back is available with no minimum hours. However, if your meeting may run long or you have multiple stops, a half-day hire (4 hours with waiting included) is usually the better value option. Confirm your schedule on WhatsApp and we will recommend the right package.',
        },
        {
            question: 'Do Riyadh private drivers speak English?',
            answer: 'Yes. All Taxi Service KSA drivers in Riyadh speak conversational English as a minimum. Several drivers are fluent in English and experienced with international corporate clients. If you need an Urdu-speaking driver — common among Pakistani expats working in Riyadh — this can also be arranged on request.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Private Chauffeur Service Riyadh — Corporate & VIP',
        serviceType: 'Private Chauffeur & Corporate Car with Driver',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966552202642',
        },
        areaServed: [
            { '@type': 'City', name: 'Riyadh' },
            { '@type': 'City', name: 'Jeddah' },
            { '@type': 'City', name: 'Dammam' },
            { '@type': 'Country', name: 'Saudi Arabia' },
        ],
        description: 'Premium private chauffeur and corporate car with driver service in Riyadh. Business meetings, airport transfers, tourism, VIP transport. Fixed rates, 24/7, Ministry of Transport licensed drivers.',
        availableLanguage: [
            { '@type': 'Language', name: 'English' },
            { '@type': 'Language', name: 'Arabic' },
            { '@type': 'Language', name: 'Urdu' },
        ],
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            availabilityStarts: '00:00',
            availabilityEnds: '23:59',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Riyadh Chauffeur Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Chauffeur Riyadh — Business Meetings' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Driver for Tourists Riyadh' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Limousine Service Riyadh — Cadillac Escalade & S-Class' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car with Driver Saudi Arabia — Hourly & Daily Hire' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airport Transfer Riyadh — King Khalid International' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Private Chauffeur Riyadh — Best Corporate Driver Service Saudi Arabia',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/riyadh-chauffeur/',
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="riyadh-chauffeur-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="riyadh-chauffeur-speakable" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Riyadh · Saudi Arabia · Middle East
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Private Chauffeur Riyadh<br />
                        <span className="text-white/80">Corporate &amp; VIP Car with Driver</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        The best private chauffeur service in Riyadh — for executives, diplomats, business visitors, and international tourists. Professional drivers, luxury fleet, fixed rates 24/7.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Car className="w-4 h-4 text-emerald-400" /> Riyadh Chauffeur — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Service Area:</strong> Riyadh · All Saudi Arabia</li>
                            <li><strong className="text-white">Fleet:</strong> Camry → Cadillac Escalade → S-Class</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Packages:</strong> Airport · Half-Day · Full-Day · Monthly</li>
                            <li><strong className="text-white">Pricing:</strong> Fixed rates — no surge ever</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 552 202 642</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20chauffeur%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Riyadh Chauffeur
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Corporate Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations/riyadh/" className="text-gray-500 hover:text-gray-900 transition-colors">Riyadh</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Private Chauffeur Riyadh</span>
                    </nav>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses Our Private Chauffeur in Riyadh</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From Fortune 500 executives to first-time visitors — one professional driver for every journey in Saudi Arabia.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clientTypes.map((c, i) => (
                            <div key={i} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-black hover:shadow-lg transition-all">
                                <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {c.badge}
                                </span>
                                <div className="mb-4">{c.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chauffeur Hire Packages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Flexible booking — from a single airport transfer to a month-long dedicated driver.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg, i) => (
                            <Link key={i} href={pkg.link} className="group">
                                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-black">{pkg.title}</h3>
                                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">{pkg.duration}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{pkg.desc}</p>
                                    <div className="mt-4 flex items-center gap-1 text-sm font-bold text-black group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Riyadh Chauffeur Vehicle</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">All vehicles include a professional driver, bottled water, and full A/C as standard.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((v, i) => (
                            <Link key={i} href={v.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all h-full">
                                    <Car className="w-10 h-10 text-black mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black">{v.name}</h3>
                                    <div className="space-y-1 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-gray-400" />
                                            <span>{v.seats} passengers</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                                            <span>{v.luggage}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 border-t border-gray-200 pt-3">{v.ideal}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/fleet/">
                            <Button variant="outline" className="border-2 border-black font-bold px-8 py-3">
                                View Full Fleet <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Routes Table */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Riyadh Chauffeur Routes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Distances and times are approximate. Traffic on King Fahd Road can add 10–20 minutes during peak hours.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">From</th>
                                    <th className="px-6 py-4 font-bold">To</th>
                                    <th className="px-6 py-4 font-bold">Distance</th>
                                    <th className="px-6 py-4 font-bold">Time</th>
                                    <th className="px-6 py-4 font-bold">Note</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {riyadhRoutes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{r.from}</td>
                                        <td className="px-6 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">{r.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Taxi Service KSA is the Top Chauffeur in Riyadh
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 speakable-answer">
                                Unlike ride-hailing apps that match you with the nearest random driver, Taxi Service KSA assigns you a dedicated, pre-screened professional. Your driver is confirmed before the booking begins, not after you open the app. This means you know who is coming, in what vehicle, at what time — with zero surprises.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We serve Saudi Aramco delegations, visiting embassies, international hotel guests, and corporate road-shows across Riyadh. Our fleet is maintained to luxury hotel standards and our rates are fixed — no surge during Ramadan, Riyadh Season, or National Day.
                            </p>
                            <div className="grid grid-cols-3 gap-6 border-t pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">4.9</div>
                                    <div className="text-sm text-gray-500 mt-1">Star Rating</div>
                                </div>
                                <div className="text-center border-x border-gray-200">
                                    <div className="text-3xl font-black text-black">24/7</div>
                                    <div className="text-sm text-gray-500 mt-1">Availability</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">0</div>
                                    <div className="text-sm text-gray-500 mt-1">Surge Fees</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book a Private Chauffeur in Riyadh</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Message on WhatsApp', desc: 'Send your pickup location, destination, date, time, number of passengers, and any special requirements. We confirm within 30 minutes.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'We send your driver\'s full name, photo, vehicle make, and plate number. You know exactly who is collecting you.' },
                            { step: '3', title: 'Driver at Your Door', desc: 'Driver arrives on time, assists with luggage, and takes you to your destination in comfort. Waiting time included.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20chauffeur%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-10 py-6 h-auto rounded-2xl">
                                Book via WhatsApp Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links Hub */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Riyadh Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/riyadh-airport-taxi/" className="text-gray-600 hover:text-black">RUH Airport Transfer</Link></li>
                                <li><Link href="/services/riyadh-hotel-transfer/" className="text-gray-600 hover:text-black">Hotel Pickup Riyadh</Link></li>
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">Riyadh City Transport</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">Cadillac Escalade</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon XL</Link></li>
                                <li><Link href="/fleet/genesis-g80/" className="text-gray-600 hover:text-black">Genesis G80</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Fleet →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">Corporate Travel</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver Hire</Link></li>
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">English-Speaking Driver</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Other Cities</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Jeddah Chauffeur</Link></li>
                                <li><Link href="/locations/dammam/" className="text-gray-600 hover:text-black">Dammam Driver</Link></li>
                                <li><Link href="/services/intercity/" className="text-gray-600 hover:text-black">Intercity Transfers</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Locations →</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Riyadh Private Chauffeur — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Common questions from business visitors, tourists, and expats booking a private driver in Riyadh.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2 speakable-answer">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Author */}
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book the Best Private Chauffeur in Riyadh
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Corporate meetings, airport transfers, tourism, or full-day hire — one professional driver for every Riyadh journey. Fixed rates, luxury fleet, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20chauffeur%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                Email for Corporate Quote
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/riyadh-airport-taxi/" className="text-gray-400 hover:text-white underline">RUH Airport Transfer</Link>
                        {' · '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">Corporate Travel</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">Private Driver</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
