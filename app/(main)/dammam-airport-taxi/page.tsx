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
    title: 'Dammam Airport Taxi | King Fahd International Airport (DMM) Transfer | Taxi Service KSA',
    description: 'Private airport taxi at King Fahd International Airport Dammam (DMM). Meet-and-greet, fixed rates, luxury fleet, 24/7. Transfer to Al Khobar, Dhahran, Aramco, Bahrain Causeway. Book now.',
    keywords: [
        'Dammam airport taxi',
        'King Fahd International Airport transfer',
        'DMM airport taxi',
        'Dammam airport to city',
        'private transfer Dammam airport',
        'Dammam airport to Al Khobar',
        'Dammam airport to Dhahran',
        'Dammam airport to Bahrain',
        'airport transfer Dammam',
        'car with driver Dammam airport',
        'KFIA taxi',
        'Eastern Province airport transfer',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/dammam-airport-taxi/',
        languages: {
            'en': 'https://taxiserviceksa.com/dammam-airport-taxi/',
            'ar': 'https://taxiserviceksa.com/ar/dammam-airport-taxi/',
            'x-default': 'https://taxiserviceksa.com/dammam-airport-taxi/',
        },
    },
    openGraph: {
        title: 'Dammam Airport Taxi | King Fahd International Airport (DMM) | Taxi Service KSA',
        description: 'Premium private airport transfer at Dammam Airport (DMM). Meet-and-greet, fixed rates, luxury fleet. Transfers to Al Khobar, Dhahran, Aramco, and Bahrain Causeway. Book now.',
        url: 'https://taxiserviceksa.com/dammam-airport-taxi/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function DammamAirportTaxiPage() {

    const routes = [
        { from: 'DMM Airport', to: 'Dammam City Centre', dist: '35 km', time: '30–40 min', note: 'Hotels, corniche, business districts' },
        { from: 'DMM Airport', to: 'Al Khobar City', dist: '40 km', time: '35–45 min', note: 'Business hub, Half Moon Bay' },
        { from: 'DMM Airport', to: 'Dhahran / Aramco HQ', dist: '30 km', time: '25–35 min', note: 'Saudi Aramco campus gate' },
        { from: 'DMM Airport', to: 'King Fahd Causeway', dist: '60 km', time: '50–60 min', note: 'Bahrain border crossing' },
        { from: 'DMM Airport', to: 'Jubail Industrial City', dist: '95 km', time: '1–1.25 hrs', note: 'Petrochemical hub' },
        { from: 'DMM Airport', to: 'Riyadh (intercity)', dist: '400 km', time: '4–4.5 hrs', note: 'Long-distance executive' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo traveler, business visit', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Executive arrival, VIP solo', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'Families, Aramco project teams', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP delegations, large families', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, luggage: '16 bags', ideal: 'Large groups, corporate parties', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: 6, luggage: '4 bags', ideal: 'Aramco executives, diplomatic guests', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'Meet-and-greet at arrivals hall with name sign',
        'Real-time flight tracking — no extra charge',
        '90 min free wait (international flights)',
        '60 min free wait (domestic flights)',
        'Ministry of Transport licensed drivers',
        'English, Arabic, and Urdu speaking',
        'Fixed rates — no surge pricing ever',
        'Eastern Province specialists: Aramco & Bahrain routes',
        'Luggage assistance included',
        '24/7 including early morning and late-night flights',
    ];

    const faqs = [
        {
            question: 'How far is Dammam Airport from the city centre?',
            answer: 'King Fahd International Airport (DMM) is approximately 35 km from Dammam city centre — about 30–40 minutes by car. The airport is located northwest of the city, between Dammam and Riyadh. It also serves Al Khobar (40 km, 35–45 min) and Dhahran (30 km, 25–35 min). A pre-booked private transfer is the fastest way to reach your destination.',
        },
        {
            question: 'Is there a taxi at Dammam Airport?',
            answer: 'Metered taxis are available at King Fahd International Airport arrivals. However, availability varies — especially for late-night or early-morning flights. Pre-booking a private transfer guarantees a driver waiting at arrivals with your name sign. Uber and Careem are available in the Eastern Province but app availability at the airport can be inconsistent and surge pricing is common.',
        },
        {
            question: 'Can I get a transfer from Dammam Airport to Bahrain?',
            answer: 'Yes. Taxi Service KSA provides direct private transfers from Dammam Airport to the King Fahd Causeway and Bahrain (Manama). The airport to Bahrain Causeway is approximately 60 km — 50–60 minutes. Total journey from DMM to central Manama is approximately 90–120 minutes depending on causeway traffic and border processing. Book in advance for Bahrain transfers.',
        },
        {
            question: 'How much does a taxi from Dammam Airport cost?',
            answer: 'A private transfer from Dammam Airport to Dammam city centre or Al Khobar costs approximately SAR 120–180 in a Toyota Camry. Transfers to Dhahran or Aramco cost SAR 130–170. Dammam Airport to Bahrain (full journey including causeway) costs SAR 300–500 depending on vehicle and wait time at the border. All prices are fixed — agreed before your flight lands. Contact us via WhatsApp for a precise quote.',
        },
        {
            question: 'Can I get a transfer from Dammam Airport to Aramco (Dhahran)?',
            answer: 'Yes. Saudi Aramco headquarters in Dhahran is approximately 30 km from King Fahd International Airport — about 25–35 minutes by private car. This is one of our most frequently requested corporate routes. Drivers know the Aramco compound entrances and visitor procedures. A Genesis G80 or GMC Yukon XL is recommended for executive visits.',
        },
        {
            question: 'Is Uber available at Dammam Airport?',
            answer: 'Uber and Careem operate in the Eastern Province (Dammam, Al Khobar, Dhahran), but app availability at the airport can be inconsistent. Surge pricing is common when flights arrive simultaneously. For guaranteed pickup — especially for Bahrain-bound transfers or Aramco visits — pre-booking a private transfer is strongly recommended.',
        },
        {
            question: 'What is King Fahd International Airport (DMM)?',
            answer: 'King Fahd International Airport (IATA: DMM) is the main international airport serving Dammam and the Eastern Province of Saudi Arabia. It is one of the largest airports in the world by land area. The airport handles flights from across the Gulf, Asia, Europe, and the Americas. It serves the industrial and oil hub of Eastern Province — including Saudi Aramco in Dhahran, Al Khobar, and Jubail.',
        },
        {
            question: 'How do I book a private transfer from Dammam Airport?',
            answer: 'Book via WhatsApp at +966 553 270 009. Send your flight number, arrival date, number of passengers, and destination (Dammam city, Al Khobar, Dhahran, Bahrain, or other). We confirm your booking and send driver details — name, photo, vehicle plate — before your flight lands. The driver meets you at arrivals with a name sign.',
        },
    ];

    const airportSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dammam Airport Taxi — King Fahd International Airport (DMM)',
        serviceType: 'Airport Transfer & Private Chauffeur',
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
        serviceLocation: {
            '@type': 'Airport',
            name: 'King Fahd International Airport',
            iataCode: 'DMM',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dammam',
                addressCountry: 'SA',
            },
        },
        description: 'Premium private airport taxi and chauffeur service at King Fahd International Airport (DMM), Dammam. Specialists in Al Khobar, Dhahran/Aramco, and Bahrain Causeway transfers. Meet-and-greet, fixed rates, 24/7.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'DMM Airport Transfer Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam Airport to City Centre Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam Airport to Al Khobar Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam Airport to Dhahran / Aramco Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dammam Airport to Bahrain Causeway Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meet and Greet at DMM Airport' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dammam Airport Taxi — King Fahd International Airport Transfer',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/dammam-airport-taxi/',
    };

    const ratingSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dammam Airport Taxi — King Fahd International Airport (DMM)',
        serviceType: 'Airport Transfer & Private Chauffeur',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966553270009',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '134',
            bestRating: '5',
            worstRating: '1',
        },
        areaServed: [
            { '@type': 'City', name: 'Dammam' },
            { '@type': 'City', name: 'Al Khobar' },
            { '@type': 'City', name: 'Dhahran' },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="dmm-airport-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }} />
            <Script id="dmm-speakable-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <Script id="dmm-rating-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        King Fahd International Airport · DMM
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Dammam Airport Taxi<br />
                        <span className="text-white/80">Private Transfer from DMM</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        Premium private chauffeur to and from King Fahd International Airport in Dammam. Al Khobar, Dhahran, Aramco, Bahrain Causeway — fixed rates 24/7.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Plane className="w-4 h-4 text-emerald-400" /> DMM Airport Transfer — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport:</strong> King Fahd International Airport (DMM)</li>
                            <li><strong className="text-white">Dammam City:</strong> 35 km — 30–40 min drive</li>
                            <li><strong className="text-white">Al Khobar:</strong> 40 km — 35–45 min drive</li>
                            <li><strong className="text-white">Dhahran / Aramco:</strong> 30 km — 25–35 min drive</li>
                            <li><strong className="text-white">Service:</strong> 24/7 · Meet-and-greet · Fixed rates</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 553 270 009</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20Dammam%20Airport%20(DMM)" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book DMM Airport Transfer
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
                        <Link href="/locations/dammam/" className="text-gray-500 hover:text-gray-900">Dammam</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Dammam Airport Taxi</span>
                    </nav>
                </div>
            </section>

            {/* Airport Info + Why Pre-Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About King Fahd International Airport (DMM)</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-gray-900">King Fahd International Airport (IATA: DMM)</strong> is the main international airport serving Dammam and the Eastern Province of Saudi Arabia. Located approximately 35 km northwest of Dammam city centre, it is one of the largest airports in the world by land area.
                                </p>
                                <p>
                                    The airport serves as the primary gateway for:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    {[
                                        'Saudi Aramco employees and contractors visiting Dhahran HQ (30 km)',
                                        'Business travellers heading to Al Khobar\'s commercial district (40 km)',
                                        'Visitors crossing to Bahrain via King Fahd Causeway (60 km)',
                                        'Industrial and petrochemical workers heading to Jubail (95 km)',
                                        'Government and diplomatic delegations to Eastern Province',
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="speakable-answer">
                                    While ride-hailing apps operate in the Eastern Province, airport availability can be unpredictable for early-morning and late-night arrivals. <strong className="text-gray-900">Pre-booking a private transfer</strong> guarantees your driver is at arrivals — name sign held — regardless of flight time.
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    Official information:{' '}
                                    <a href="https://www.gaca.gov.sa/en/Airports/Pages/airports.aspx" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">Saudi Civil Aviation Authority (GACA)</a>
                                    {' · '}
                                    <a href="https://www.visitsaudi.com/en/plan/getting-around" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">Visit Saudi — Getting Around</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pre-Book vs. Airport Taxi Stand</h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Fixed price agreed before you land', sub: 'No meter, no negotiation at the taxi rank' },
                                    { label: 'Driver waiting with your name sign', sub: 'No searching the car park — driver finds you at arrivals' },
                                    { label: 'Bahrain Causeway specialists on standby', sub: 'Drivers know the border crossing routine — no surprises' },
                                    { label: 'Aramco compound access knowledge', sub: 'Drivers familiar with Dhahran visitor entrances and procedures' },
                                    { label: 'English-speaking confirmed in advance', sub: 'Critical for international and expat arrivals' },
                                    { label: 'Right vehicle for your group size', sub: 'GMC Yukon for teams and families — not an undersized sedan' },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Routes from Dammam Airport</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">All distances and times are approximate. Bahrain transfers may include additional wait time at King Fahd Causeway border.</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Vehicle at DMM</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">For corporate groups and families, GMC Yukon XL provides the most comfortable ride across Eastern Province distances.</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What&apos;s Included in Every DMM Transfer</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book Your Dammam Airport Transfer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Book via WhatsApp', desc: 'Message us your flight number, arrival date, destination (Dammam / Al Khobar / Dhahran / Bahrain), and number of passengers. We confirm within 30 minutes.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'Before your flight lands, we send your driver\'s name, photo, vehicle plate, and meeting point at DMM arrivals hall.' },
                            { step: '3', title: 'Driver Waiting at Arrivals', desc: 'Your driver holds a name sign at arrivals. Luggage assistance included. Straight to your destination in Eastern Province.' },
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Eastern Province</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/dammam/" className="text-gray-600 hover:text-black">Dammam City Transport</Link></li>
                                <li><Link href="/routes/dammam-bahrain/" className="text-gray-600 hover:text-black">Dammam → Bahrain Route</Link></li>
                                <li><Link href="/routes/dammam-riyadh/" className="text-gray-600 hover:text-black">Dammam → Riyadh Route</Link></li>
                                <li><Link href="/routes/dammam-airport-to-khobar/" className="text-gray-600 hover:text-black">DMM Airport → Al Khobar</Link></li>
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
                                <li><Link href="/services/taxi-in-dammam/" className="text-gray-600 hover:text-black">Taxi in Dammam</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">English-Speaking Driver</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">Corporate Travel</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Other Airports</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">All Saudi Airports</Link></li>
                                <li><Link href="/riyadh-airport-taxi/" className="text-gray-600 hover:text-black">Riyadh Airport (RUH)</Link></li>
                                <li><Link href="/tabuk-airport-taxi/" className="text-gray-600 hover:text-black">Tabuk Airport (TUU)</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dammam Airport Transfer — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Every common question about getting to and from King Fahd International Airport in Dammam.</p>
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
                        Book Your Dammam Airport Transfer Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Arriving at DMM — heading to Dammam, Al Khobar, Dhahran, or Bahrain. Your driver is ready. Fixed rates, meet-and-greet, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20Dammam%20Airport%20(DMM)" target="_blank">
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
                        <Link href="/routes/dammam-bahrain/" className="text-gray-400 hover:text-white underline">Dammam → Bahrain</Link>
                        {' · '}
                        <Link href="/routes/dammam-riyadh/" className="text-gray-400 hover:text-white underline">Dammam → Riyadh</Link>
                        {' · '}
                        <Link href="/services/taxi-in-dammam/" className="text-gray-400 hover:text-white underline">Taxi in Dammam</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">All Saudi Airports</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
