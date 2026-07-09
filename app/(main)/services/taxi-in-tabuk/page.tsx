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
    title: 'Taxi in Tabuk | Private Car Tabuk to NEOM, AlUla & KSA | Taxi Service KSA',
    description: 'Best private taxi service in Tabuk 2026. Specialists in Tabuk to NEOM transfers, AlUla, Jeddah, and city rides. Fixed rates, luxury fleet, 24/7. Book via WhatsApp.',
    keywords: [
        'taxi in Tabuk',
        'private car Tabuk',
        'Tabuk to NEOM taxi',
        'Tabuk taxi service',
        'private driver Tabuk',
        'Tabuk to AlUla taxi',
        'car with driver Tabuk',
        'Tabuk airport taxi',
        'Tabuk to Jeddah private car',
        'long distance taxi Tabuk',
        'VIP transfer Tabuk',
        'chauffeur Tabuk Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
        },
    },
    openGraph: {
        title: 'Taxi in Tabuk | Private Car to NEOM, AlUla & All Saudi Arabia',
        description: 'Premium taxi and private car service in Tabuk. NEOM specialists, AlUla transfers, airport pickup. Fixed rates, luxury fleet, 24/7.',
        url: 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function TaxiInTabukPage() {

    const useCases = [
        {
            icon: <Crown className="w-8 h-8 text-black" />,
            title: 'NEOM Project Workers',
            desc: 'Daily and weekly transfers for consultants, engineers, and executives heading to NEOM from Tabuk. 190 km — 2–2.5 hour drive. Pre-assigned driver, fixed monthly rate available.',
            badge: 'Most Popular',
        },
        {
            icon: <Star className="w-8 h-8 text-black" />,
            title: 'AlUla Heritage Tourists',
            desc: 'International tourists flying into Tabuk Airport (TUU) to visit AlUla, Hegra, and the Dedan archaeological site. English-speaking driver, 330 km — 3.5–4 hours.',
            badge: 'Tourist Route',
        },
        {
            icon: <MapPin className="w-8 h-8 text-black" />,
            title: 'Airport Transfers (TUU)',
            desc: 'Meet-and-greet at Prince Sultan Bin Abdulaziz Airport. Driver waiting at arrivals with name sign. Flight tracking included. City, NEOM, and AlUla destinations.',
            badge: 'Airport',
        },
        {
            icon: <Car className="w-8 h-8 text-black" />,
            title: 'Tabuk City Rides',
            desc: 'Business meetings, hotel transfers, shopping, hospital appointments across Tabuk city. Half-day and full-day hire available with waiting included between stops.',
            badge: 'City',
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: 'Family & Group Travel',
            desc: 'Large families traveling Tabuk to Jeddah, Madinah, or Makkah by private car. GMC Yukon XL and Toyota Hiace for groups up to 11 with full luggage.',
            badge: 'Groups',
        },
        {
            icon: <Shield className="w-8 h-8 text-black" />,
            title: 'Corporate & VIP',
            desc: 'Diplomatic guests, government delegations, and senior executives visiting Tabuk region. Cadillac Escalade, fully discreet service, professional attire standard.',
            badge: 'VIP',
        },
    ];

    const routes = [
        { from: 'Tabuk City', to: 'NEOM (Sharma)', dist: '190 km', time: '2–2.5 hrs', link: '/routes/tabuk-neom/' },
        { from: 'Tabuk City', to: 'AlUla', dist: '330 km', time: '3.5–4 hrs', link: '/routes/tabuk-alula/' },
        { from: 'Tabuk Airport (TUU)', to: 'Tabuk City Centre', dist: '14 km', time: '15–20 min', link: '/tabuk-airport-taxi/' },
        { from: 'Tabuk City', to: 'Jeddah', dist: '1,100 km', time: '10–11 hrs', link: '/routes/tabuk-jeddah/' },
        { from: 'Tabuk City', to: 'Madinah', dist: '680 km', time: '6.5–7 hrs', link: '/routes/tabuk-madinah/' },
        { from: 'Tabuk City', to: 'Al Wajh', dist: '220 km', time: '2.5 hrs', link: '/routes/tabuk-al-wajh/' },
        { from: 'Tabuk City', to: 'Haql', dist: '320 km', time: '3.5 hrs', link: '/routes/tabuk-haql/' },
        { from: 'Tabuk City', to: 'Riyadh', dist: '1,450 km', time: '13–14 hrs', link: '/routes/tabuk-riyadh/' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo business traveler, city rides', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Executive visitor, VIP solo', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'NEOM teams, families, groups', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP family, delegations', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, luggage: '16 bags', ideal: 'Large groups, tourist parties', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: 6, luggage: '4 bags', ideal: 'Diplomatic, senior executive', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'Fixed rates — no surge pricing ever',
        'Ministry of Transport licensed drivers',
        'English, Arabic, Urdu speaking',
        'Long-distance highway specialists',
        'Driver details shared before pickup',
        'Rest stops included on long routes',
        'Full A/C — desert heat ready',
        '24/7 including early morning flights',
        'WhatsApp booking — 30 min confirmation',
        'Same driver for multi-day bookings',
    ];

    const faqs = [
        {
            question: 'What is the best taxi service in Tabuk?',
            answer: 'Taxi Service KSA is one of the top-rated private car services in Tabuk, specialising in long-distance transfers to NEOM, AlUla, and across the Kingdom. Unlike ride-hailing apps with inconsistent Tabuk coverage, we provide pre-booked professional drivers with fixed rates, meet-and-greet at Tabuk Airport, and vehicles chosen for long desert highway drives.',
        },
        {
            question: 'How long is the drive from Tabuk to NEOM?',
            answer: 'The drive from Tabuk city to the NEOM Sharma area is approximately 190 km and takes 2–2.5 hours on the main highway. Our drivers know the route well, including the correct checkpoints and access roads for NEOM. A GMC Yukon XL or Cadillac Escalade is recommended for this journey for highway comfort and luggage capacity.',
        },
        {
            question: 'Can I book a taxi from Tabuk to AlUla?',
            answer: 'Yes. Tabuk to AlUla is approximately 330 km — a 3.5–4 hour drive through the northwest Saudi highlands. This route is popular with international tourists visiting the Hegra (Madain Salih) UNESCO heritage site and the AlUla old town. An English-speaking driver is available as standard. Book 24 hours in advance for this route.',
        },
        {
            question: 'Is there a private car from Tabuk to Jeddah?',
            answer: 'Yes. Tabuk to Jeddah is approximately 1,100 km — a 10–11 hour intercity transfer. This is a specialist long-distance route requiring an experienced highway driver and a vehicle in excellent condition. We deploy GMC Yukon XL or Toyota Hiace for this route. Scheduled rest stops at SASCO stations are included. Contact us 48 hours in advance for long-distance bookings.',
        },
        {
            question: 'How much does a taxi from Tabuk cost?',
            answer: 'Tabuk city rides (hotel to meeting, airport transfer within city) cost approximately SAR 50–120 depending on distance. Tabuk to NEOM costs SAR 400–700 depending on vehicle. Tabuk to AlUla costs SAR 600–1,000. All prices are fixed — agreed before the trip, no meter. Contact us via WhatsApp for an exact quote for your specific route and vehicle.',
        },
        {
            question: 'Is Uber available in Tabuk?',
            answer: 'Uber and Careem have limited and inconsistent coverage in Tabuk compared to Riyadh and Jeddah. App availability is particularly unreliable at Tabuk Airport, on long-distance routes to NEOM and AlUla, and during late-night hours. For guaranteed pickup — especially for airport arrivals and NEOM-bound transfers — a pre-booked private transfer is strongly recommended.',
        },
        {
            question: 'Can I get a monthly driver contract in Tabuk?',
            answer: 'Yes. For NEOM project workers and Tabuk-based expats requiring daily or weekly transport, a dedicated driver contract is available. A fixed monthly rate covers a pre-assigned driver for your regular routes — Tabuk to NEOM, hotel to site, airport runs. Contact us via WhatsApp to discuss your schedule and requirements.',
        },
        {
            question: 'Do drivers speak English in Tabuk?',
            answer: 'Yes. All Taxi Service KSA drivers in Tabuk speak conversational English. For international tourists visiting AlUla and NEOM project visitors, an English-fluent driver is confirmed as standard. Urdu-speaking drivers are also available on request for Pakistani and South Asian project workers in the Tabuk and NEOM region.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Taxi in Tabuk — Private Car Service',
        serviceType: 'Private Taxi & Chauffeur Tabuk',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966552202642',
        },
        areaServed: [
            { '@type': 'City', name: 'Tabuk' },
            { '@type': 'Place', name: 'NEOM' },
            { '@type': 'City', name: 'AlUla' },
            { '@type': 'Country', name: 'Saudi Arabia' },
        ],
        description: 'Premium private taxi and chauffeur service in Tabuk, Saudi Arabia. Specialists in Tabuk to NEOM transfers, AlUla tourism routes, airport pickup, and intercity private car hire.',
        availableLanguage: [
            { '@type': 'Language', name: 'English' },
            { '@type': 'Language', name: 'Arabic' },
            { '@type': 'Language', name: 'Urdu' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Tabuk Taxi Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk to NEOM Private Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk Airport Transfer (TUU)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk to AlUla Private Car' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk City Rides — Hourly & Daily Hire' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk to Jeddah Intercity Transfer' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Taxi in Tabuk — Private Car Service Saudi Arabia',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="tabuk-taxi-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="tabuk-speakable" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Tabuk · NEOM Gateway · Northwest Saudi Arabia
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Taxi in Tabuk<br />
                        <span className="text-white/80">Private Car to NEOM, AlUla &amp; All KSA</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        The best private taxi service in Tabuk — NEOM transfers, AlUla tourism routes, airport pickup, and city rides. Professional drivers, luxury fleet, fixed rates 24/7.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Car className="w-4 h-4 text-emerald-400" /> Tabuk Taxi — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport:</strong> TUU — 14 km from city, 15–20 min</li>
                            <li><strong className="text-white">NEOM:</strong> 190 km — 2–2.5 hrs from Tabuk</li>
                            <li><strong className="text-white">AlUla:</strong> 330 km — 3.5–4 hrs from Tabuk</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Pricing:</strong> Fixed rates — no surge ever</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 552 202 642</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20taxi%20in%20Tabuk" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Tabuk Taxi
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
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
                        <span className="text-gray-900 font-semibold">Taxi in Tabuk</span>
                    </nav>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses Our Taxi Service in Tabuk</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From NEOM project teams to AlUla tourists — one professional driver for every Tabuk journey.</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Tabuk Taxi Routes</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Tabuk Taxi Vehicle</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">For NEOM and AlUla long-distance routes, we recommend GMC Yukon XL or larger for comfort on 2–4 hour drives.</p>
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
                                Why We Are the Best Taxi in Tabuk
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 speakable-answer">
                                Tabuk is the gateway to Saudi Arabia's most ambitious mega-projects — NEOM, The Line, Sindalah Island, and the Red Sea Project. Distances between sites are vast. Uber and Careem coverage is inconsistent. Standard taxis are not built for 2–4 hour desert highway drives.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our drivers are Tabuk-based long-distance specialists. They know the NEOM access checkpoints, the best SASCO rest stops between Tabuk and AlUla, and the fastest routes to Haql on the Red Sea coast. Every vehicle is highway-checked before departure.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book a Taxi in Tabuk</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'WhatsApp Us', desc: 'Send your pickup location, destination, date, time, and number of passengers. For NEOM and AlUla routes, booking 24 hours ahead is recommended.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'We send your driver\'s name, photo, vehicle plate, and pickup confirmation. You know exactly who is coming and in which vehicle.' },
                            { step: '3', title: 'Driver at Your Door', desc: 'Driver arrives on time, assists with luggage, and takes you to your destination. Rest stops included on long routes.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20taxi%20in%20Tabuk" target="_blank">
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Top Tabuk Routes</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/routes/tabuk-neom/" className="text-gray-600 hover:text-black">Tabuk → NEOM</Link></li>
                                <li><Link href="/routes/tabuk-alula/" className="text-gray-600 hover:text-black">Tabuk → AlUla</Link></li>
                                <li><Link href="/routes/tabuk-jeddah/" className="text-gray-600 hover:text-black">Tabuk → Jeddah</Link></li>
                                <li><Link href="/routes/tabuk-madinah/" className="text-gray-600 hover:text-black">Tabuk → Madinah</Link></li>
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
                                <li><Link href="/tabuk-airport-taxi/" className="text-gray-600 hover:text-black">Tabuk Airport Taxi (TUU)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">Tourist Transport</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver Hire</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Tabuk Locations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/tabuk/" className="text-gray-600 hover:text-black">Tabuk City VIP Transfer</Link></li>
                                <li><Link href="/locations/neom/" className="text-gray-600 hover:text-black">NEOM Transport</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tabuk Taxi — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about booking a taxi or private car in Tabuk.</p>
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
                        Book the Best Taxi in Tabuk
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        NEOM transfers, AlUla trips, airport pickup, or city rides — one professional driver for every Tabuk journey. Fixed rates, luxury fleet, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20taxi%20in%20Tabuk" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/routes/tabuk-neom/" className="text-gray-400 hover:text-white underline">Tabuk → NEOM</Link>
                        {' · '}
                        <Link href="/routes/tabuk-alula/" className="text-gray-400 hover:text-white underline">Tabuk → AlUla</Link>
                        {' · '}
                        <Link href="/tabuk-airport-taxi/" className="text-gray-400 hover:text-white underline">Tabuk Airport (TUU)</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">All Saudi Airports</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
