import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    Plane, Clock, CheckCircle2, ArrowRight, MapPin,
    Car, Users, Shield, Star, Navigation, Phone
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
    title: 'Riyadh Airport Taxi | King Khalid International Airport (RUH) Transfer | Taxi Service KSA',
    description: 'Private airport taxi at King Khalid International Airport Riyadh (RUH). Premium chauffeur service, 24/7 meet-and-greet, fixed rates, luxury fleet. Book your Riyadh airport transfer now.',
    keywords: [
        'Riyadh airport taxi',
        'King Khalid International Airport transfer',
        'RUH airport taxi',
        'King Khalid Airport private transfer',
        'Riyadh airport chauffeur service',
        'car service from King Khalid Airport',
        'premium chauffeur service Riyadh',
        'Riyadh airport pickup service',
        'private driver Riyadh airport',
        '24/7 car with driver Riyadh',
        'King Khalid International Airport taxi',
        'best chauffeur Riyadh airport',
        'luxury airport transfer Riyadh',
        'airport transfer Riyadh',
        'professional driver Riyadh airport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/riyadh-airport-taxi/',
        languages: {
            'en': 'https://taxiserviceksa.com/riyadh-airport-taxi/',
            'ar': 'https://taxiserviceksa.com/ar/riyadh-airport-taxi/',
            'x-default': 'https://taxiserviceksa.com/riyadh-airport-taxi/',
        },
    },
    openGraph: {
        title: 'Riyadh Airport Taxi | King Khalid International Airport (RUH) | Taxi Service KSA',
        description: 'Premium private airport transfer at King Khalid International Airport (RUH), Riyadh. 24/7 meet-and-greet, luxury fleet, fixed rates. Book now.',
        url: 'https://taxiserviceksa.com/riyadh-airport-taxi/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function RiyadhAirportTaxiPage() {

    const routes = [
        { from: 'RUH Airport', to: 'Riyadh City Centre', dist: '35 km', time: '30–45 min', note: 'King Fahd Road corridor' },
        { from: 'RUH Airport', to: 'King Abdullah Financial District (KAFD)', dist: '28 km', time: '25–35 min', note: 'Business traveler route' },
        { from: 'RUH Airport', to: 'Diplomatic Quarter', dist: '30 km', time: '25–35 min', note: 'Embassy & government area' },
        { from: 'RUH Airport', to: 'Al Olaya / Four Seasons', dist: '32 km', time: '30–40 min', note: 'Luxury hotel corridor' },
        { from: 'RUH Airport', to: 'Diriyah Heritage Site', dist: '22 km', time: '20–30 min', note: 'UNESCO tourist destination' },
        { from: 'RUH Airport', to: 'Jeddah (intercity)', dist: '950 km', time: '9–10 hrs', note: 'Long-distance executive transfer' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 3, luggage: '2 bags', ideal: 'Solo business traveler, couple', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: 3, luggage: '2 bags', ideal: 'Executive arrival, VIP solo', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: 7, luggage: '5 bags', ideal: 'Families, business groups', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: 7, luggage: '4 bags', ideal: 'VIP families, delegations', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, luggage: '16 bags', ideal: 'Large groups, tourist parties', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: 7, luggage: '4 bags', ideal: 'Royal & diplomatic arrivals', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'Meet-and-greet at Terminal 3 & 4 arrivals',
        'Name sign display for easy identification',
        'Real-time flight tracking — no extra charge',
        '90 min free wait (international flights)',
        '60 min free wait (domestic flights)',
        'Ministry of Transport licensed drivers',
        'English, Arabic, and Urdu speaking',
        'Fixed rates — no surge pricing ever',
        'Luggage assistance included',
        '24/7 including 3 AM and 5 AM flights',
    ];

    // 6 people also ask questions — all with direct answers
    const faqs = [
        {
            question: 'Are taxis safe in Riyadh?',
            answer: 'Pre-booked private taxis in Riyadh are safe and reliable. Taxi Service KSA drivers are Ministry of Transport licensed, background-checked, and professionally trained. All vehicles are GPS-tracked and driver details (name, photo, vehicle plate) are shared before pickup via WhatsApp. Street-hail taxis are less regulated — pre-booking a private transfer is the safer and more comfortable option, especially for airport arrivals.',
        },
        {
            question: 'What is the easiest way to travel to Saudi Arabia but not by plane?',
            answer: 'The easiest overland routes into Saudi Arabia are: (1) King Fahd Causeway from Bahrain — a 25 km bridge crossing for GCC residents and tourists; (2) Abu Samra border from Qatar; (3) Batha border from UAE. Taxi Service KSA provides private car service for all major Saudi border crossings including the King Fahd Causeway, with the driver handling all border paperwork.',
        },
        {
            question: 'Is crazy driving common in Saudi Arabia?',
            answer: 'Driving standards in Saudi Arabia have significantly improved since 2016 under Vision 2030 reforms. Traffic enforcement is now strict with speed cameras on all major highways. Professional licensed drivers, like those used by Taxi Service KSA, are trained to drive safely and professionally. King Fahd Road and the airport expressway are modern, well-maintained highways. Using a pre-booked private transfer eliminates any concern about driver quality.',
        },
        {
            question: "What's your best advice for traveling in Saudi Arabia?",
            answer: "Pre-book all airport and city transfers in advance — especially for late-night arrivals. Uber and Careem surge significantly during peak hours and Ramadan. Carry WhatsApp on your phone as it is the primary communication tool. Women traveling alone should specifically request female-friendly drivers. Google Maps works well for navigation but local drivers know shortcuts not shown on maps. English is widely spoken in hotels and transport services in Riyadh.",
        },
        {
            question: 'Is Riyadh, Saudi Arabia open to foreigners?',
            answer: 'Yes. Riyadh is fully open to foreign tourists since Saudi Arabia launched its tourist visa programme in 2019. Over 60 nationalities can obtain a visa on arrival or via e-visa. Riyadh is a safe, modern city with world-class hotels, restaurants, entertainment, and the UNESCO-listed Diriyah heritage site. Riyadh Season (October–February) attracts hundreds of thousands of international visitors annually.',
        },
        {
            question: 'Does Riyadh have a good airport?',
            answer: "King Khalid International Airport (RUH) is one of the largest airports in the world by land area. It has four terminals — Terminal 1 (international), Terminal 2 (domestic), Terminal 3 (Saudia international), and Terminal 5 (domestic). The airport is modern, clean, and well-signposted in Arabic and English. It is approximately 35 km north of Riyadh city centre, a 30–45 minute drive depending on traffic.",
        },
    ];

    // 8 related searches — covered as additional FAQ
    const relatedSearchFaqs = [
        {
            question: 'Is there a private driver for tourists at Riyadh King Khalid International Airport?',
            answer: 'Yes. Taxi Service KSA provides private driver service specifically for tourists arriving at King Khalid International Airport (RUH). The driver meets you at arrivals with a name sign, assists with luggage, and transfers you to any Riyadh hotel, tourist site, or city destination. English-speaking drivers are available for international tourists.',
        },
        {
            question: 'What is the price of a driver for tourists from Riyadh Airport?',
            answer: 'Private driver rates from RUH Airport depend on the destination, vehicle type, and duration. A standard transfer to Riyadh city centre in a Toyota Camry is approximately SAR 120–180. A GMC Yukon XL for families costs more. Full-day tourist driver packages are also available. Contact us via WhatsApp for a fixed-price quote before your arrival.',
        },
        {
            question: 'Is there a personal driver service at King Khalid International Airport?',
            answer: 'Yes. A personally assigned driver can be booked for airport pickup at RUH. The driver is pre-assigned to you before your flight lands. You receive the driver\'s name, photo, and vehicle plate number via WhatsApp in advance. The driver holds a name sign at arrivals and remains your exclusive driver for the full booking period.',
        },
        {
            question: 'Is there a luxury chauffeur service in Riyadh?',
            answer: 'Yes. Taxi Service KSA provides luxury chauffeur service in Riyadh with Cadillac Escalade, GMC Yukon XL, Mercedes-Benz S-Class, and Genesis G80. Drivers wear professional attire and are trained in etiquette. Services include RUH airport pickup, hotel to business district, VIP event transport, and full-day private hire.',
        },
        {
            question: 'Is there a cheap driver for tourists at Riyadh Airport?',
            answer: 'Taxi Service KSA offers competitive fixed rates for airport transfers — transparent pricing with no surge and no hidden fees. For budget-conscious tourists, the Toyota Camry option is the most affordable for solo travelers or couples. Contact us on WhatsApp to compare options and get a quote before booking.',
        },
        {
            question: 'Is there a contact number for a driver at Riyadh King Khalid Airport?',
            answer: 'Yes. You can reach us via WhatsApp at +966 552 202 642 or email at info@taxiserviceksa.com. WhatsApp is the fastest way to book and get driver details confirmed. Bookings are accepted 24/7 and can be made before your arrival in Saudi Arabia.',
        },
    ];

    const allFaqs = [...faqs, ...relatedSearchFaqs];

    const airportSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Riyadh Airport Taxi — King Khalid International Airport (RUH)',
        serviceType: 'Airport Transfer & Private Chauffeur',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966552202642',
        },
        areaServed: { '@type': 'City', name: 'Riyadh' },
        serviceLocation: {
            '@type': 'Airport',
            name: 'King Khalid International Airport',
            iataCode: 'RUH',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressCountry: 'SA',
            },
        },
        description: 'Premium private airport taxi and chauffeur service at King Khalid International Airport (RUH), Riyadh. Meet-and-greet, flight tracking, luxury fleet, 24/7.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            availabilityStarts: '00:00',
            availabilityEnds: '23:59',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'RUH Airport Transfer Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RUH Airport Arrival Transfer — Meet & Greet' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RUH Airport Departure Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Driver for Tourists — Riyadh Airport' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Chauffeur Riyadh Airport' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Car with Driver Riyadh' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Riyadh Airport Taxi — King Khalid International Airport Transfer',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/riyadh-airport-taxi/',
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="ruh-airport-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }} />
            <Script id="ruh-speakable-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <JsonLdFAQ faqs={allFaqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        King Khalid International Airport
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Riyadh Airport Taxi<br />
                        <span className="text-white/80">King Khalid International (RUH)</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        Premium private chauffeur service to and from King Khalid International Airport in Riyadh. Professional drivers, luxury vehicles, fixed rates — available 24/7.
                    </p>

                    {/* TL;DR / Speakable AEO block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Plane className="w-4 h-4 text-emerald-400" /> RUH Airport Transfer — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport:</strong> King Khalid International Airport (RUH)</li>
                            <li><strong className="text-white">Distance to City:</strong> ~35 km — 30–45 min drive</li>
                            <li><strong className="text-white">Free Wait:</strong> 90 min international · 60 min domestic</li>
                            <li><strong className="text-white">Service:</strong> 24/7 · Meet-and-greet · Fixed rates</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp +966 552 202 642</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20King%20Khalid%20International%20Airport%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book RUH Airport Transfer
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

            {/* Airport Info + Why Pre-Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About King Khalid International Airport</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    <strong className="text-gray-900">King Khalid International Airport (IATA: RUH)</strong> is the main international airport serving Riyadh, the capital of Saudi Arabia. Located approximately 35 km north of the city centre, it is one of the largest airports in the world by land area.
                                </p>
                                <p>
                                    The airport has four passenger terminals:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    {[
                                        'Terminal 1 — International arrivals (non-Saudia)',
                                        'Terminal 2 — Domestic flights',
                                        'Terminal 3 — Saudia international departures',
                                        'Terminal 5 — Domestic and regional flights',
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="speakable-answer">
                                    Our drivers meet arriving passengers at the <strong className="text-gray-900">Arrivals hall exit</strong> of the relevant terminal, holding a name sign. Flight tracking ensures the driver is there even if your flight is delayed.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pre-Book vs. Airport Taxi Stand</h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Fixed price agreed before you land', sub: 'No meter, no surge, no negotiation at the taxi stand' },
                                    { label: 'Driver waiting with your name sign', sub: 'No wandering the car park looking for a cab' },
                                    { label: 'Flight tracking included', sub: 'Driver adjusts automatically for delays — no penalty' },
                                    { label: 'Luxury vehicles with luggage space', sub: 'Airport taxi ranks rarely have GMC or Hiace options' },
                                    { label: 'English-speaking confirmed in advance', sub: 'Not always guaranteed at airport taxi stands' },
                                    { label: 'Female-friendly drivers on request', sub: 'Solo female travelers — driver assigned before landing' },
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

            {/* Popular Routes Table */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Routes from King Khalid Airport</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">All distances and times are approximate. Traffic on King Fahd Road can add 10–20 minutes during peak hours (7–9 AM, 4–7 PM).</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Vehicle at RUH</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">All vehicles include a professional driver, meet-and-greet, and flight tracking as standard.</p>
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

            {/* Service Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included in Every RUH Transfer</h2>
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

            {/* How It Works */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Book Your RUH Airport Transfer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Book via WhatsApp', desc: 'Message us your flight number, arrival date, number of passengers, and destination. We confirm within 30 minutes.' },
                            { step: '2', title: 'Receive Driver Details', desc: 'Before your flight lands, we send your driver\'s name, photo, vehicle plate, and meeting point at RUH arrivals.' },
                            { step: '3', title: 'Walk Out — Driver Waiting', desc: 'Your driver stands at arrivals with your name sign. Luggage assistance included. Drive directly to your destination.' },
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Riyadh Destinations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">Riyadh City Transport</Link></li>
                                <li><Link href="/locations/riyadh/diplomatic-quarter/" className="text-gray-600 hover:text-black">Diplomatic Quarter</Link></li>
                                <li><Link href="/services/riyadh-hotel-transfer/" className="text-gray-600 hover:text-black">Hotel Transfer Riyadh</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon XL</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">Toyota Hiace (groups)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">Cadillac Escalade (VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Fleet →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur</Link></li>
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">English-Speaking Driver</Link></li>
                                <li><Link href="/services/women-transport/" className="text-gray-600 hover:text-black">Women's Transport</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">Tourist Driver Riyadh</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> Other Airports</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">All Saudi Airports</Link></li>
                                <li><Link href="/madinah-airport-taxi/" className="text-gray-600 hover:text-black">Madinah Airport (MED)</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Jeddah Airport (JED)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ — People Also Ask + Related Searches */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Riyadh Airport Transport — All Questions Answered</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Answers to every common question about traveling to and from King Khalid International Airport in Riyadh.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {allFaqs.map((faq, index) => (
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
                        Book Your King Khalid Airport Transfer Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Arriving or departing from RUH — your driver is ready. Fixed rates, meet-and-greet, flight tracking. 24/7 availability including 3 AM flights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20airport%20transfer%20at%20King%20Khalid%20International%20Airport%20Riyadh" target="_blank">
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
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">All Saudi Airports</Link>
                        {' · '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/riyadh-hotel-transfer/" className="text-gray-400 hover:text-white underline">Riyadh Hotel Transfer</Link>
                        {' · '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">Tourist Driver</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
