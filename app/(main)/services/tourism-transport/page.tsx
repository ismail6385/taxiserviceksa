import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, MapPin, Globe, Camera,
    Car, Users, Star, Sun, Compass
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Saudi Arabia Tourism Transport | Private Driver for Tourists | Taxi Service KSA',
    description: 'Private car with driver for tourists in Saudi Arabia. City tours, desert trips, shopping tours, and sightseeing in Riyadh, Jeddah, AlUla, and Makkah. English-speaking drivers. Book now.',
    keywords: [
        'Saudi tourism car service',
        'driver for international tourists Saudi',
        'private driver for tourists Riyadh',
        'Saudi tourist SUV rental with driver',
        'Riyadh sightseeing chauffeur',
        'Jeddah tourist transport',
        'private desert tour driver Saudi',
        'Saudi Arabia luxury road trips',
        'driver for foreign families Saudi',
        'Riyadh night tour chauffeur',
        'private city tour chauffeur Saudi',
        'driver for Americans in Saudi Arabia',
        'driver for tourists from UAE',
        'Saudi Arabia travel concierge transport',
        'chauffeur for Riyadh season visitors',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/tourism-transport/',
    },
    openGraph: {
        title: 'Saudi Arabia Tourism Transport | Private Driver for Tourists | Taxi Service KSA',
        description: 'Private chauffeur for tourists across Saudi Arabia. City tours, desert trips, shopping, and sightseeing in Riyadh, Jeddah, AlUla, and Makkah. English-speaking drivers.',
        url: 'https://taxiserviceksa.com/services/tourism-transport/',
        type: 'website',
    },
};

export default function TourismTransportPage() {
    const tourTypes = [
        {
            title: 'Riyadh City & Cultural Tours',
            description: 'Explore Diriyah UNESCO site, Edge of the World, Masmak Fortress, and the Kingdom Centre Tower with a knowledgeable local driver. Full-day or half-day tours available.',
            icon: Compass,
            highlights: ['Diriyah Heritage Site', 'Edge of the World (Jebel Fihrayn)', 'National Museum of Saudi Arabia', 'Riyadh Season venues'],
            link: '/locations/riyadh/',
        },
        {
            title: 'Jeddah Historic & Coastal Tours',
            description: 'Discover Al-Balad UNESCO World Heritage Site, the Corniche, Floating Mosque, and Jeddah\'s vibrant souks. Private driver picks you up from your hotel.',
            icon: Camera,
            highlights: ['Al-Balad Historic District', 'King Fahd Fountain views', 'Jeddah Corniche', 'Al-Shallal Theme Park'],
            link: '/locations/jeddah/',
        },
        {
            title: 'Desert & Nature Tours',
            description: 'Private driver for desert excursions from Riyadh — including the famous Edge of the World, Al Wahbah Crater, and Wadi Hanifah valley. Comfortable SUV included.',
            icon: Sun,
            highlights: ['Edge of the World day trip', 'Al Wahbah Crater', 'Wadi Hanifah walk', 'Camel farm visits'],
            link: '/locations/riyadh/',
        },
        {
            title: 'AlUla Luxury Road Trips',
            description: 'Private chauffeur-driven transfers from Madinah or Riyadh to AlUla. Day trip itineraries covering Hegra (Mada\'in Saleh), Dadan, and AlUla old town.',
            icon: Star,
            highlights: ['Hegra (UNESCO World Heritage)', 'Dadan archaeological site', 'Maraya Concert Hall', 'AlUla old town'],
            link: '/locations/alula/',
        },
        {
            title: 'Shopping Tours — Riyadh & Jeddah',
            description: 'Dedicated shopping driver for Riyadh\'s malls and souks. Driver waits while you shop, assists with luggage, and transfers between destinations at your pace.',
            icon: MapPin,
            highlights: ['Mall of Arabia / Mall of Saudi', 'Al Nakheel Mall', 'Riyadh Park', 'Balad Souk (Jeddah)'],
            link: '/locations/riyadh/',
        },
        {
            title: 'Multi-City Tourist Itineraries',
            description: 'Private transport connecting Riyadh, Jeddah, Makkah, Madinah, Taif, and AlUla. Flexible scheduling for independent travellers and tourist groups.',
            icon: Globe,
            highlights: ['Riyadh → Jeddah day transfer', 'Jeddah → Makkah → Madinah loop', 'Custom Saudi road trip planning', 'Group SUV and van options'],
            link: '/routes/',
        },
    ];

    const visitorTypes = [
        { label: 'International Tourists', detail: 'Americans, Europeans, UAE visitors, South Asians' },
        { label: 'GCC Tourists', detail: 'UAE, Kuwait, Bahrain, Qatar, Oman visitors' },
        { label: 'Riyadh Season Visitors', detail: 'Event attendees, entertainment tourists' },
        { label: 'Business Tourists', detail: 'Mixing work and leisure in Riyadh or Jeddah' },
        { label: 'Family Groups', detail: 'Families requiring spacious, comfortable transport' },
        { label: 'Solo Female Travelers', detail: 'Female-friendly drivers available across KSA' },
    ];

    const features = [
        'English, Arabic, and Urdu speaking drivers',
        'No hidden charges — fixed tour rates',
        'Driver waits during your entire visit',
        'GMC Yukon, Hiace, Staria for groups',
        'Hotel pickup and drop-off included',
        'Ministry of Transport licensed drivers',
        'Flexible start times including early morning',
        'Multi-stop itineraries on request',
        'Child seats available',
        'Female-friendly drivers on request',
    ];

    const faqs = [
        {
            question: 'Can I hire a private driver for sightseeing in Riyadh?',
            answer: 'Yes. We provide private drivers for full-day or half-day sightseeing tours in Riyadh. Popular destinations include Diriyah, the Edge of the World, National Museum, and Riyadh Season venues. The driver picks you up from your hotel, takes you to each site, and waits while you explore. English-speaking drivers are available.',
        },
        {
            question: 'Is there a private tourism transport service for foreign tourists in Saudi Arabia?',
            answer: 'Yes. Taxi Service KSA provides private car with driver service specifically for international tourists in Saudi Arabia. We serve visitors from the USA, Europe, UAE, and across the GCC. All drivers speak English and are familiar with tourist routes and attractions across Riyadh, Jeddah, AlUla, and Makkah.',
        },
        {
            question: 'Can I book a private driver for a desert tour from Riyadh?',
            answer: 'Yes. We offer private driver service for desert day trips from Riyadh. The most popular route is the Edge of the World (Jebel Fihrayn), approximately 90 km from Riyadh. Full-day (10–12 hours) packages include hotel pickup, guided route, waiting time at the site, and return. A 4x4 or SUV is used for desert terrain.',
        },
        {
            question: 'Do you offer tourism transport for visitors from the UAE?',
            answer: 'Yes. We regularly serve GCC tourists, including visitors from the UAE, Kuwait, and Bahrain. Many UAE tourists visiting Riyadh for events or leisure hire our private driver service for city tours and shopping. Booking can be done via WhatsApp before arrival in Saudi Arabia.',
        },
        {
            question: 'Is there a private driver for shopping tours in Riyadh?',
            answer: 'Yes. Our shopping tour driver service allows you to visit multiple malls and souks in Riyadh without worrying about transport. The driver waits at each location and assists with luggage. Common stops include Mall of Arabia, Riyadh Park, Al Nakheel Mall, and Al Zal Souk. Half-day and full-day shopping tours are available.',
        },
        {
            question: 'What vehicle is recommended for a tourist group in Saudi Arabia?',
            answer: 'For groups of 5–7 tourists, the GMC Yukon XL or Hyundai Staria VIP is ideal — spacious, comfortable, and equipped with luggage space. For larger groups of 8–14, the Toyota Hiace or Toyota Coaster is recommended. All vehicles come with a professional driver included.',
        },
        {
            question: 'Can Americans and Western tourists book a private driver in Saudi Arabia?',
            answer: 'Yes. We frequently serve American, British, European, and other Western tourists visiting Saudi Arabia. Our English-speaking drivers understand the needs of international visitors and can assist with basic navigation, local tips, and airport coordination. Booking is done via WhatsApp or email — no Saudi phone number required.',
        },
        {
            question: 'Is there a tourism transport service for Riyadh Season events?',
            answer: 'Yes. During Riyadh Season (typically October–February), we provide dedicated tourist transport packages for event visitors. These include hotel pickups, venue transfers, and late-night returns after shows. Advance booking is strongly recommended during peak Riyadh Season weeks as demand is high.',
        },
        {
            question: 'Do you offer luxury road trips across Saudi Arabia?',
            answer: 'Yes. Multi-city luxury road trip packages are available covering routes like Riyadh → AlUla, Jeddah → Taif → Makkah, or Riyadh → Jeddah with stops. A dedicated driver is assigned for the full itinerary. Vehicles include GMC Yukon or Cadillac Escalade depending on group size.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Saudi Arabia Tourism Transport Service',
        serviceType: 'Tourist Transport & Private Driver',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'Riyadh' },
            { '@type': 'City', name: 'Jeddah' },
            { '@type': 'City', name: 'AlUla' },
            { '@type': 'City', name: 'Makkah' },
            { '@type': 'City', name: 'Madinah' },
            { '@type': 'City', name: 'Taif' },
            { '@type': 'AdministrativeArea', name: 'Saudi Arabia' },
        ],
        description: 'Private car with driver for tourists in Saudi Arabia. City tours, desert excursions, shopping tours, and multi-city road trips. English-speaking drivers across Riyadh, Jeddah, and AlUla.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Tourism Transport Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riyadh City Sightseeing Tour' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jeddah Historic District Tour' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desert Day Trip from Riyadh' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AlUla Luxury Road Trip' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Saudi Shopping Tour with Driver' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-City Tourist Itinerary' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="tourism-transport-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-2.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Saudi Tourism Transport
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Private Driver for Tourists<br />
                        <span className="text-white/80">in Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Explore Riyadh, Jeddah, AlUla, and the Saudi desert with your own private English-speaking driver. City tours, shopping trips, desert excursions, and luxury road trips — all in one service.
                    </p>

                    {/* AEO Quick Facts */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-emerald-400" /> Tourism Transport — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Destinations:</strong> Riyadh, Jeddah, AlUla, Taif, Makkah</li>
                            <li><strong className="text-white">Tour Types:</strong> City, Desert, Shopping, Road Trips</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp before arrival — no Saudi SIM needed</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20Tourist%20Transport%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Tourist Driver
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Custom Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Tour Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tourist Transport Packages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From UNESCO heritage sites to desert adventures — every Saudi experience with your own private driver.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourTypes.map((tour, index) => (
                            <Link key={index} href={tour.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all h-full">
                                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                        <tour.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">{tour.title}</h3>
                                    <p className="text-gray-600 mb-5 leading-relaxed">{tour.description}</p>
                                    <ul className="space-y-2">
                                        {tour.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visitor Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses Our Tourist Transport</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We serve tourists from across the world visiting Saudi Arabia for leisure, events, and cultural exploration.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {visitorTypes.map((v, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
                                <Users className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{v.label}</p>
                                    <p className="text-gray-500 text-xs mt-1">{v.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Tourists Choose Us</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Top Tourist Destinations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">Riyadh Sightseeing Driver</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">Jeddah Tourist Transport</Link></li>
                                <li><Link href="/locations/alula/" className="text-gray-600 hover:text-black transition-colors">AlUla Private Driver</Link></li>
                                <li><Link href="/locations/taif/" className="text-gray-600 hover:text-black transition-colors">Taif Mountain Tours</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Destinations →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> Tourist Fleet
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">GMC Yukon (Groups)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">Toyota Hiace (Large Groups)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black transition-colors">Hyundai Staria VIP</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">Full Fleet →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Related Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">Airport Transfers</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">Private Driver (Hourly/Daily)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur Service</Link></li>
                                <li><Link href="/services/heritage-tours/" className="text-gray-600 hover:text-black transition-colors">Heritage Tours</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tourist Transport Questions</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Everything international tourists need to know about hiring a private driver in Saudi Arabia.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Explore Saudi Arabia With Your Own Private Driver
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Riyadh city tours, Jeddah coastal trips, AlUla heritage drives, or custom Saudi road trips — book your English-speaking tourist driver today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20Tourist%20Transport%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Custom Tour
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Also available:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">Private Driver (Hourly)</Link>
                        {' · '}
                        <Link href="/services/heritage-tours/" className="text-gray-400 hover:text-white underline">Heritage Tours</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
