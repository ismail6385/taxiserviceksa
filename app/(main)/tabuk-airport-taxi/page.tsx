import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    Plane, Clock, CheckCircle2, ArrowRight, MapPin,
    Car, Users, Shield, Star, Navigation
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
    title: 'Tabuk Airport Taxi | Prince Sultan Bin Abdulaziz Airport (TUU) Transfer | Taxi Service KSA',
    description: 'Private airport taxi at Prince Sultan Bin Abdulaziz Airport Tabuk (TUU). Meet-and-greet, fixed rates, luxury fleet, 24/7. Transfer to NEOM, AlUla, city centre. Book now.',
    keywords: [
        'Tabuk airport taxi',
        'Prince Sultan Bin Abdulaziz Airport transfer',
        'TUU airport taxi',
        'Tabuk airport to city',
        'private transfer Tabuk airport',
        'Tabuk airport to NEOM',
        'Tabuk airport chauffeur',
        'taxi from Tabuk airport',
        'airport transfer Tabuk',
        'car with driver Tabuk airport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/tabuk-airport-taxi/',
        languages: {
            'en': 'https://taxiserviceksa.com/tabuk-airport-taxi/',
            'ar': 'https://taxiserviceksa.com/ar/tabuk-airport-taxi/',
            'x-default': 'https://taxiserviceksa.com/tabuk-airport-taxi/',
        },
    },
    openGraph: {
        title: 'Tabuk Airport Taxi | Prince Sultan Bin Abdulaziz Airport (TUU) | Taxi Service KSA',
        description: 'Premium private airport transfer at Tabuk Airport (TUU). Meet-and-greet, fixed rates, luxury fleet, transfers to NEOM and AlUla. Book now.',
        url: 'https://taxiserviceksa.com/tabuk-airport-taxi/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function TabukAirportTaxiPage() {

    const routes = [
        { from: 'TUU Airport', to: 'Tabuk City Centre', dist: '14 km', time: '15–20 min', note: 'Hotels, city districts' },
        { from: 'TUU Airport', to: 'NEOM (Sharma area)', dist: '190 km', time: '2–2.5 hrs', note: 'Giga-project site' },
        { from: 'TUU Airport', to: 'AlUla', dist: '330 km', time: '3.5–4 hrs', note: 'Heritage tourism route' },
        { from: 'TUU Airport', to: 'Haql (Red Sea)', dist: '320 km', time: '3.5 hrs', note: 'Coastal destination' },
        { from: 'TUU Airport', to: 'Al Wajh', dist: '200 km', time: '2.5 hrs', note: 'Sindalah / Red Sea Project' },
        { from: 'TUU Airport', to: 'Jeddah (intercity)', dist: '1,100 km', time: '10–11 hrs', note: 'Long-distance executive' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo traveler, business visit', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Executive arrival, VIP solo', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'Families, NEOM project teams', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP delegations, large families', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, luggage: '16 bags', ideal: 'Large groups, tourist parties', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: 6, luggage: '4 bags', ideal: 'NEOM executives, diplomatic guests', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'Meet-and-greet at arrivals hall with name sign',
        'Real-time flight tracking — no extra charge',
        '90 min free wait (international flights)',
        '60 min free wait (domestic flights)',
        'Ministry of Transport licensed drivers',
        'English, Arabic, and Urdu speaking',
        'Fixed rates — no surge pricing ever',
        'Long-distance specialists: NEOM & AlUla routes',
        'Luggage assistance included',
        '24/7 including early morning and late-night flights',
    ];

    const faqs = [
        {
            question: 'How far is Tabuk Airport from the city centre?',
            answer: 'Prince Sultan Bin Abdulaziz Airport (TUU) is approximately 14 km from Tabuk city centre — about 15–20 minutes by car. The airport is located north of the city along the main highway. A pre-booked private transfer is the fastest and most comfortable way to get from the airport to your hotel or meeting point.',
        },
        {
            question: 'Is there a taxi at Tabuk Airport?',
            answer: 'There are metered taxis available outside Tabuk Airport arrivals. However, availability is inconsistent — especially for late-night or early-morning flights. Pre-booking a private transfer guarantees a driver waiting at arrivals with your name sign, regardless of flight time. Uber and Careem coverage in Tabuk is limited compared to Riyadh or Jeddah.',
        },
        {
            question: 'Can I get a transfer from Tabuk Airport to NEOM?',
            answer: 'Yes. Taxi Service KSA specialises in transfers from Tabuk Airport (TUU) directly to NEOM — approximately 190 km, 2–2.5 hours. This is the most common long-distance transfer from Tabuk Airport, used by NEOM project staff, consultants, and executives. A GMC Yukon XL or Cadillac Escalade is recommended for this route for comfort and luggage space.',
        },
        {
            question: 'How much does a taxi from Tabuk Airport to NEOM cost?',
            answer: 'A private transfer from Tabuk Airport to NEOM costs approximately SAR 400–600 in a Toyota Camry or Genesis G80 for solo/couple travelers. A GMC Yukon XL for groups or families costs SAR 700–1,000. All prices are fixed — agreed before your flight lands, no meter running. Contact us via WhatsApp for a precise quote.',
        },
        {
            question: 'Can I get a transfer from Tabuk Airport to AlUla?',
            answer: 'Yes. AlUla is approximately 330 km from Tabuk Airport — a 3.5–4 hour drive through the northwest Saudi highlands. This route is popular with international tourists visiting AlUla\'s UNESCO heritage sites and the Hegra archaeological site. A GMC Yukon XL is recommended for this journey with luggage.',
        },
        {
            question: 'Is Uber available at Tabuk Airport?',
            answer: 'Uber and Careem have limited coverage in Tabuk compared to major cities. App availability at the airport is inconsistent, and surge pricing is common when flights arrive. For guaranteed pickup — especially for NEOM-bound or AlUla-bound transfers — pre-booking a private transfer is strongly recommended.',
        },
        {
            question: 'What is Prince Sultan Bin Abdulaziz Airport (TUU)?',
            answer: 'Prince Sultan Bin Abdulaziz Airport (IATA: TUU) is the main airport serving Tabuk, located in the northwest of Saudi Arabia. It handles domestic Saudi flights (Riyadh, Jeddah, Dammam) and select international routes. The airport serves as the main entry point for NEOM project workers, AlUla tourists, and business travelers visiting the Tabuk region.',
        },
        {
            question: 'How do I book a private transfer from Tabuk Airport?',
            answer: 'Book via WhatsApp at +966 552 202 642. Send your flight number, arrival date, number of passengers, destination (city, NEOM, or AlUla), and any luggage details. We confirm your booking and send driver details — name, photo, vehicle plate — before your flight lands. The driver meets you at arrivals with a name sign.',
        },
    ];

    const airportSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Tabuk Airport Taxi — Prince Sultan Bin Abdulaziz Airport (TUU)',
        serviceType: 'Airport Transfer & Private Chauffeur',
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
        ],
        serviceLocation: {
            '@type': 'Airport',
            name: 'Prince Sultan Bin Abdulaziz Airport',
            iataCode: 'TUU',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tabuk',
                addressCountry: 'SA',
            },
        },
        description: 'Premium private airport taxi and chauffeur service at Prince Sultan Bin Abdulaziz Airport (TUU), Tabuk. Specialists in NEOM and AlUla transfers. Meet-and-greet, fixed rates, 24/7.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'TUU Airport Transfer Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk Airport to City Centre Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk Airport to NEOM Private Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabuk Airport to AlUla Private Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meet and Greet at TUU Airport' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Car with Driver Tabuk Airport' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Tabuk Airport Taxi — Prince Sultan Bin Abdulaziz Airport Transfer',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/tabuk-airport-taxi/',
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="tuu-airport-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }} />
            <Script id="tuu-speakable-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Prince Sultan Bin Abdulaziz Airport · TUU
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Tabuk Airport Taxi<br />
                        <span className="text-white/80">Private Transfer from TUU</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        Premium private chauffeur to and from Prince Sultan Bin Abdulaziz Airport in Tabuk. NEOM specialists, AlUla transfers, city runs — fixed rates 24/7.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Plane className="w-4 h-4 text-emerald-400" /> TUU Airport Transfer — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport:</strong> Prince Sultan Bin Abdulaziz Airport (TUU)</li>
                            <li><strong className="text-white">City Distance:</strong> 14 km — 15–20 min drive</li>
                            <li><strong className="text-white">NEOM Distance:</strong> 190 km — 2–2.5 hrs drive</li>
                            <li><strong className="text-white">AlUla Distance:</strong> 330 km — 3.5–4 hrs drive</li>
                            <li><strong className="text-white">Service:</strong> 24/7 · Meet-and-greet · Fixed rates</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 552 202 642</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20Tabuk%20Airport%20(TUU)" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book TUU Airport Transfer
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
                        <Link href="/locations/tabuk/" className="text-gray-500 hover:text-gray-900">Tabuk</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Tabuk Airport Taxi</span>
                    </nav>
                </div>
            </section>

            {/* Airport Info + Why Pre-Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Prince Sultan Bin Abdulaziz Airport (TUU)</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-gray-900">Prince Sultan Bin Abdulaziz Airport (IATA: TUU)</strong> is the main international airport serving Tabuk, located in the northwest of Saudi Arabia. It sits approximately 14 km north of Tabuk city centre.
                                </p>
                                <p>
                                    The airport is the primary gateway for:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    {[
                                        'NEOM project workers, consultants, and executives (190 km southwest)',
                                        'AlUla heritage tourists and archaeology visitors (330 km southeast)',
                                        'Red Sea Project and Sindalah Island travelers',
                                        'Business visitors and government delegations to Tabuk city',
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="speakable-answer">
                                    Unlike major Saudi airports, Tabuk has limited ride-hailing app coverage. <strong className="text-gray-900">Pre-booking a private transfer</strong> is the most reliable option — your driver meets you at arrivals regardless of flight time.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pre-Book vs. Airport Taxi Stand</h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Fixed price agreed before you land', sub: 'No meter, no negotiation at the taxi rank' },
                                    { label: 'Driver waiting with your name sign', sub: 'No searching the car park for a cab' },
                                    { label: 'Uber/Careem coverage is limited in Tabuk', sub: 'App availability inconsistent at TUU especially late night' },
                                    { label: 'Long-distance specialists on standby', sub: 'NEOM & AlUla routes need experienced drivers — not random cabs' },
                                    { label: 'English-speaking confirmed in advance', sub: 'Critical for international NEOM and AlUla visitors' },
                                    { label: 'Correct vehicle for the distance', sub: 'GMC Yukon for 3+ hour drives — far more comfortable than a sedan' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Routes Table */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Routes from Tabuk Airport</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">All distances and times are approximate. NEOM and AlUla routes include scheduled rest stops at driver's discretion.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">From</th>
                                    <th className="px-6 py-4 font-bold">To</th>
                                    <th className="px-6 py-4 font-bold">Distance</th>
                                    <th className="px-6 py-4 font-bold">Drive Time</th>
                                    <th className="px-6 py-4 font-bold">Note</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
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

            {/* Vehicle Options */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Vehicle at TUU</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">For long-distance routes to NEOM and AlUla, we recommend GMC Yukon XL or larger for comfort over 2–4 hour drives.</p>
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
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What&apos;s Included in Every TUU Transfer</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book Your Tabuk Airport Transfer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Book via WhatsApp', desc: 'Message us your flight number, arrival date, destination (city / NEOM / AlUla), and number of passengers. We confirm within 30 minutes.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'Before your flight lands, we send your driver\'s name, photo, vehicle plate, and meeting point at TUU arrivals.' },
                            { step: '3', title: 'Driver Waiting at Arrivals', desc: 'Your driver holds a name sign at arrivals. Luggage assistance included. Straight to your destination.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Tabuk Destinations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/tabuk/" className="text-gray-600 hover:text-black">Tabuk City Transport</Link></li>
                                <li><Link href="/routes/tabuk-neom/" className="text-gray-600 hover:text-black">Tabuk → NEOM Route</Link></li>
                                <li><Link href="/routes/tabuk-alula/" className="text-gray-600 hover:text-black">Tabuk → AlUla Route</Link></li>
                                <li><Link href="/routes/tabuk-jeddah/" className="text-gray-600 hover:text-black">Tabuk → Jeddah Route</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon XL (recommended)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">Toyota Hiace (groups)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">Cadillac Escalade (VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Fleet →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/taxi-in-tabuk/" className="text-gray-600 hover:text-black">Taxi in Tabuk</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">English-Speaking Driver</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">Tourist Transport</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Other Airports</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">All Saudi Airports</Link></li>
                                <li><Link href="/riyadh-airport-taxi/" className="text-gray-600 hover:text-black">Riyadh Airport (RUH)</Link></li>
                                <li><Link href="/madinah-airport-taxi/" className="text-gray-600 hover:text-black">Madinah Airport (MED)</Link></li>
                                <li><Link href="/guides/jeddah-airport-guide/" className="text-gray-600 hover:text-black">Jeddah Airport (JED)</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tabuk Airport Transfer — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Every common question about getting to and from Prince Sultan Bin Abdulaziz Airport in Tabuk.</p>
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
                        Book Your Tabuk Airport Transfer Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Arriving at TUU — heading to NEOM, AlUla, or Tabuk city. Your driver is ready. Fixed rates, meet-and-greet, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20Tabuk%20Airport%20(TUU)" target="_blank">
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
                        <Link href="/services/taxi-in-tabuk/" className="text-gray-400 hover:text-white underline">Taxi in Tabuk</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">All Saudi Airports</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
