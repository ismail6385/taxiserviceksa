import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    Clock, CheckCircle2, ArrowRight, MapPin,
    Car, Users, Shield, Star, Navigation, Crown
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
    title: 'Taxi in Dammam | Private Car Dammam, Al Khobar & Eastern Province | Taxi Service KSA',
    description: 'Best private taxi service in Dammam 2026. Al Khobar, Dhahran, Bahrain Causeway, Jubail, and Riyadh transfers. Fixed rates, luxury fleet, 24/7. Book via WhatsApp.',
    keywords: [
        'taxi in Dammam',
        'private car Dammam',
        'Dammam taxi service',
        'private driver Dammam',
        'Dammam to Al Khobar taxi',
        'Dammam to Bahrain private car',
        'Dammam to Dhahran taxi',
        'car with driver Dammam',
        'Dammam airport taxi',
        'Eastern Province taxi',
        'Dammam to Riyadh private car',
        'chauffeur Dammam Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-dammam/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-dammam/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-dammam/',
        },
    },
    openGraph: {
        title: 'Taxi in Dammam | Private Car to Al Khobar, Bahrain & All KSA',
        description: 'Premium taxi and private car service in Dammam. Al Khobar, Dhahran, Bahrain Causeway, airport pickup. Fixed rates, luxury fleet, 24/7.',
        url: 'https://taxiserviceksa.com/services/taxi-in-dammam/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function TaxiInDammamPage() {

    const useCases = [
        {
            icon: <Crown className="w-8 h-8 text-black" />,
            title: 'Aramco & Dhahran Transfers',
            desc: 'Daily and weekly transfers for Saudi Aramco employees, contractors, and visitors between Dhahran compound, DMM Airport, and Al Khobar. Pre-assigned driver, fixed rates.',
            badge: 'Most Popular',
        },
        {
            icon: <Star className="w-8 h-8 text-black" />,
            title: 'Bahrain Causeway Transfers',
            desc: 'Private car from Dammam or Al Khobar to King Fahd Causeway and Bahrain (Manama). Drivers experienced with border crossing procedures. Full-day hire available.',
            badge: 'Cross-Border',
        },
        {
            icon: <MapPin className="w-8 h-8 text-black" />,
            title: 'Airport Transfers (DMM)',
            desc: 'Meet-and-greet at King Fahd International Airport. Driver waiting at arrivals with name sign. Flight tracking included. City, Al Khobar, Dhahran, and Bahrain destinations.',
            badge: 'Airport',
        },
        {
            icon: <Car className="w-8 h-8 text-black" />,
            title: 'Dammam & Al Khobar City Rides',
            desc: 'Business meetings, hotel transfers, shopping malls, hospital appointments across Dammam and Al Khobar. Half-day and full-day hire available with waiting included.',
            badge: 'City',
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: 'Jubail Industrial City Transfers',
            desc: 'Private car transfers to and from Jubail — Saudi Arabia\'s petrochemical hub, 95 km north of Dammam. Corporate and group bookings. Toyota Hiace for large teams.',
            badge: 'Industrial',
        },
        {
            icon: <Shield className="w-8 h-8 text-black" />,
            title: 'Corporate & VIP',
            desc: 'Government delegations, senior oil industry executives, and diplomatic guests visiting Eastern Province. Cadillac Escalade, fully discreet service, professional attire standard.',
            badge: 'VIP',
        },
    ];

    const routes = [
        { from: 'Dammam City', to: 'Al Khobar', dist: '20 km', time: '20–30 min', link: '/routes/dammam-airport-to-khobar/' },
        { from: 'Dammam City', to: 'Dhahran / Aramco', dist: '15 km', time: '15–20 min', link: '/locations/dammam/' },
        { from: 'Dammam Airport (DMM)', to: 'Dammam / Al Khobar / Dhahran', dist: '30–40 km', time: '25–45 min', link: '/dammam-airport-taxi/' },
        { from: 'Dammam City', to: 'Bahrain (Manama)', dist: '95 km', time: '1.5–2.5 hrs', link: '/routes/dammam-bahrain/' },
        { from: 'Dammam City', to: 'Jubail Industrial City', dist: '95 km', time: '1–1.25 hrs', link: '/locations/dammam/' },
        { from: 'Dammam City', to: 'Riyadh', dist: '400 km', time: '4–4.5 hrs', link: '/routes/dammam-riyadh/' },
        { from: 'Dammam City', to: 'Dubai (UAE)', dist: '960 km', time: '9–10 hrs', link: '/routes/dammam-dubai/' },
        { from: 'Dammam City', to: 'Kuwait City', dist: '600 km', time: '6–7 hrs', link: '/routes/dammam-kuwait/' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo business traveler, city rides', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Executive visitor, Aramco meetings', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'Corporate teams, families, Bahrain trips', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP family, delegations', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, luggage: '16 bags', ideal: 'Large groups, Jubail teams', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: 6, luggage: '4 bags', ideal: 'Diplomatic, senior executive', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'Fixed rates — no surge pricing ever',
        'Ministry of Transport licensed drivers',
        'English, Arabic, Urdu speaking',
        'Bahrain Causeway specialists',
        'Aramco compound access knowledge',
        'Driver details shared before pickup',
        'Full A/C — Gulf summer ready',
        '24/7 including early morning flights',
        'WhatsApp booking — 30 min confirmation',
        'Same driver for multi-day bookings',
    ];

    const faqs = [
        {
            question: 'What is the best taxi service in Dammam?',
            answer: 'Taxi Service KSA is a premium private car service in Dammam specialising in corporate transfers, Bahrain Causeway trips, and Aramco visits. Unlike ride-hailing apps, we provide pre-booked professional drivers with fixed rates, meet-and-greet at DMM Airport, and vehicles chosen for your specific journey — whether it\'s a city ride in Al Khobar or a cross-border transfer to Bahrain.',
        },
        {
            question: 'How do I get from Dammam to Bahrain by private car?',
            answer: 'A private car from Dammam city to Bahrain (Manama) takes approximately 1.5–2.5 hours depending on traffic and border wait time at King Fahd Causeway. The driving distance is approximately 95 km. Our drivers are experienced with Causeway crossings and know the correct lanes for tourist and resident vehicles. A GMC Yukon XL is recommended for families and groups.',
        },
        {
            question: 'Can I book a taxi from Dammam to Al Khobar?',
            answer: 'Yes. Dammam to Al Khobar is approximately 20 km — about 20–30 minutes by private car. This is one of our most frequent city transfer routes. We cover hotel-to-hotel transfers, Corniche visits, shopping mall drop-offs, and business meeting transfers between the two cities. Half-day hire is available if you need a driver to wait between stops.',
        },
        {
            question: 'How do I get from Dammam Airport to Al Khobar?',
            answer: 'King Fahd International Airport (DMM) to Al Khobar is approximately 40 km — about 35–45 minutes by private car. Book your airport transfer via WhatsApp before your flight. Your driver meets you at DMM arrivals with a name sign. The route passes through Dhahran and takes the coastal highway into Al Khobar.',
        },
        {
            question: 'How much does a taxi from Dammam cost?',
            answer: 'Dammam city rides and Al Khobar transfers cost approximately SAR 80–150 depending on distance and vehicle. Dammam to Dhahran costs SAR 80–120. Dammam to Bahrain (full trip) costs SAR 300–500 depending on vehicle and waiting time at the border. Dammam to Riyadh costs SAR 600–900. All prices are fixed — no meter, no surge. Contact us via WhatsApp for an exact quote.',
        },
        {
            question: 'Is Uber available in Dammam?',
            answer: 'Uber and Careem operate in Dammam and Al Khobar. However, app availability at DMM Airport can be unreliable for early-morning and late-night arrivals, and surge pricing is common. For guaranteed pickup, cross-border Bahrain transfers, and Aramco visits requiring a professional corporate vehicle, a pre-booked private transfer is the better choice.',
        },
        {
            question: 'Can I get a private driver from Dammam to Riyadh?',
            answer: 'Yes. Dammam to Riyadh is approximately 400 km — about 4–4.5 hours on the main Riyadh highway. This is a popular intercity transfer for business travellers avoiding the short internal flight. A GMC Yukon XL or Cadillac Escalade is recommended for comfort. Scheduled rest stops at SASCO stations are included. Contact us 24 hours in advance for this route.',
        },
        {
            question: 'Do taxis in Dammam speak English?',
            answer: 'All Taxi Service KSA drivers in Dammam and Al Khobar speak conversational English. For international Aramco visitors, Bahrain day-trippers, and corporate clients, an English-fluent driver is confirmed as standard. Urdu-speaking drivers are also available for South Asian expat workers across the Eastern Province.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Taxi in Dammam — Private Car Service',
        serviceType: 'Private Taxi & Chauffeur Dammam',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966553270009',
        },
        areaServed: [
            { '@type': 'City', name: 'Dammam' },
            { '@type': 'City', name: 'Al Khobar' },
            { '@type': 'City', name: 'Dhahran' },
            { '@type': 'Place', name: 'Eastern Province' },
        ],
        description: 'Premium private taxi and chauffeur service in Dammam, Saudi Arabia. Specialists in Dammam to Bahrain Causeway transfers, Aramco Dhahran visits, DMM airport pickup, and intercity private car hire across Eastern Province.',
        availableLanguage: [
            { '@type': 'Language', name: 'English' },
            { '@type': 'Language', name: 'Arabic' },
            { '@type': 'Language', name: 'Urdu' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Dammam Taxi Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam to Bahrain Private Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam Airport Transfer (DMM)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam to Al Khobar Private Car' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam City Rides — Hourly & Daily Hire' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam to Riyadh Intercity Transfer' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Taxi in Dammam — Private Car Service Saudi Arabia',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/services/taxi-in-dammam/',
    };

    const ratingSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Taxi in Dammam — Private Car Service',
        serviceType: 'Private Taxi & Chauffeur Dammam',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966553270009',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '118',
            bestRating: '5',
            worstRating: '1',
        },
        areaServed: [
            { '@type': 'City', name: 'Dammam' },
            { '@type': 'City', name: 'Al Khobar' },
            { '@type': 'Place', name: 'Eastern Province' },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="dammam-taxi-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="dammam-speakable" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <Script id="dammam-rating-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Dammam · Al Khobar · Dhahran · Eastern Province
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Taxi in Dammam<br />
                        <span className="text-white/80">Private Car to Bahrain, Al Khobar &amp; All KSA</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        The best private taxi service in Dammam — Bahrain Causeway transfers, Aramco Dhahran visits, airport pickup, and city rides across Eastern Province. Professional drivers, luxury fleet, fixed rates 24/7.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Car className="w-4 h-4 text-emerald-400" /> Dammam Taxi — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport (DMM):</strong> 35 km from city — 30–40 min</li>
                            <li><strong className="text-white">Al Khobar:</strong> 20 km from Dammam — 20–30 min</li>
                            <li><strong className="text-white">Bahrain:</strong> 95 km — 1.5–2.5 hrs (causeway included)</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Pricing:</strong> Fixed rates — no surge ever</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 553 270 009</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=Hello,%20I%20need%20a%20taxi%20in%20Dammam" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Dammam Taxi
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/services/" className="text-gray-500 hover:text-gray-900">Services</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Taxi in Dammam</span>
                    </nav>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses Our Taxi Service in Dammam</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From Aramco contractors to Bahrain day-trippers — one professional driver for every Eastern Province journey.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((c, i) => (
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

            {/* Routes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Dammam Taxi Routes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Click any route to see full details, pricing, and booking options.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">From</th>
                                    <th className="px-6 py-4 font-bold">To</th>
                                    <th className="px-6 py-4 font-bold">Distance</th>
                                    <th className="px-6 py-4 font-bold">Drive Time</th>
                                    <th className="px-6 py-4 font-bold">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{r.from}</td>
                                        <td className="px-6 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4">
                                            <Link href={r.link} className="text-black font-bold text-sm hover:underline flex items-center gap-1 group">
                                                View Route <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Dammam Taxi Vehicle</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">For Bahrain Causeway trips and corporate group transfers, GMC Yukon XL offers the most comfortable and spacious ride.</p>
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

            {/* Why Choose + Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why We Are the Best Taxi in Dammam
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 speakable-answer">
                                Dammam and the Eastern Province are home to Saudi Arabia's oil and gas industry, Saudi Aramco, and the King Fahd Causeway to Bahrain. The distances between the airport, the industrial zones, and the residential cities (Dammam, Al Khobar, Dhahran) require a reliable private car — not a random metered taxi.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our drivers know the Aramco compound entrances, the correct Causeway lanes for Saudi and foreign passengers, and the fastest routes between Eastern Province cities. Every vehicle is checked for Gulf summer readiness — full A/C, no breakdowns on the Bahrain highway.
                            </p>
                            <p className="text-sm text-gray-500 mb-8">
                                Further reading:{' '}
                                <a href="https://www.visitsaudi.com/en/see-do/destinations/eastern-province" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">Visit Saudi — Eastern Province</a>
                                {' · '}
                                <a href="https://www.bahrain.com/en/plan-your-visit/getting-to-bahrain/by-road" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">Bahrain Tourism — Getting There by Road</a>
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
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book a Taxi in Dammam</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'WhatsApp Us', desc: 'Send your pickup location, destination (Al Khobar, Dhahran, Bahrain, airport), date, time, and number of passengers. For Bahrain Causeway transfers, booking 24 hours ahead is recommended.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'We send your driver\'s name, photo, vehicle plate, and pickup confirmation. You know exactly who is coming and in which vehicle.' },
                            { step: '3', title: 'Driver at Your Door', desc: 'Driver arrives on time, assists with luggage, and takes you to your destination. Causeway crossings handled smoothly with an experienced driver.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="https://wa.me/966553270009?text=Hello,%20I%20need%20a%20taxi%20in%20Dammam" target="_blank">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-10 py-6 h-auto rounded-2xl">
                                Book via WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Top Dammam Routes</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/routes/dammam-bahrain/" className="text-gray-600 hover:text-black">Dammam → Bahrain</Link></li>
                                <li><Link href="/routes/dammam-riyadh/" className="text-gray-600 hover:text-black">Dammam → Riyadh</Link></li>
                                <li><Link href="/routes/dammam-dubai/" className="text-gray-600 hover:text-black">Dammam → Dubai</Link></li>
                                <li><Link href="/routes/dammam-kuwait/" className="text-gray-600 hover:text-black">Dammam → Kuwait</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon XL</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">Toyota Hiace (groups)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">Cadillac Escalade</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Fleet →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/dammam-airport-taxi/" className="text-gray-600 hover:text-black">Dammam Airport Taxi (DMM)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">Corporate Travel</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver Hire</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Eastern Province</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/dammam/" className="text-gray-600 hover:text-black">Dammam VIP Transfer</Link></li>
                                <li><Link href="/routes/dammam-airport-to-khobar/" className="text-gray-600 hover:text-black">DMM Airport → Al Khobar</Link></li>
                                <li><Link href="/services/intercity/" className="text-gray-600 hover:text-black">Intercity Transfers KSA</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Locations →</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dammam Taxi — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about booking a taxi or private car in Dammam and Eastern Province.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
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
                        Book the Best Taxi in Dammam
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Bahrain Causeway, Aramco Dhahran, airport pickup, or Al Khobar city rides — one professional driver for every Eastern Province journey. Fixed rates, luxury fleet, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=Hello,%20I%20need%20a%20taxi%20in%20Dammam" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/routes/dammam-bahrain/" className="text-gray-400 hover:text-white underline">Dammam → Bahrain</Link>
                        {' · '}
                        <Link href="/routes/dammam-riyadh/" className="text-gray-400 hover:text-white underline">Dammam → Riyadh</Link>
                        {' · '}
                        <Link href="/dammam-airport-taxi/" className="text-gray-400 hover:text-white underline">Dammam Airport (DMM)</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">All Saudi Airports</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
