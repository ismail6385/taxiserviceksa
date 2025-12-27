import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Compass, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Mountain, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Heritage Tours Saudi Arabia | UNESCO Sites Transport with 4x4 Vehicles',
    description: 'Professional heritage tour transport for AlUla, Khaybar, and UNESCO sites. 4x4 desert vehicles with licensed drivers. English-speaking guides available.',
    keywords: ['AlUla tours', 'Hegra transport', 'UNESCO sites Saudi Arabia', 'heritage tours KSA', '4x4 desert tours'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/heritage-tours',
    },
    openGraph: {
        title: 'Heritage Tours Saudi Arabia | UNESCO Sites Transport with 4x4',
        description: 'Professional heritage tour transport for AlUla, Khaybar, and UNESCO sites. 4x4 desert vehicles with licensed drivers.',
        url: 'https://taxiserviceksa.com/services/heritage-tours',
        type: 'website',
    },
};

export default function HeritageToursPage() {
    const heritageSites = [
        {
            name: 'AlUla Heritage Circuit',
            description: 'UNESCO World Heritage Site. Hegra (Madain Saleh) Nabataean tombs, Dadan ancient city, and Elephant Rock formations.',
            highlights: ['Hegra UNESCO Site', 'Dadan Ancient City', 'Elephant Rock', 'Old Town AlUla'],
            duration: 'Full day (8-10 hours)',
            price: 'From SAR 600',
            link: '/locations/alula',
            isUNESCO: true
        },
        {
            name: 'Khaybar Historical Tour',
            description: 'Ancient oasis and fortress ruins. Historical sites from early Islamic period with 4x4 desert terrain access.',
            highlights: ['Khaybar Fort', 'Ancient Oases', 'Desert Terrain', 'Historical Markers'],
            duration: 'Half day (4-6 hours)',
            price: 'From SAR 400',
            link: '/locations/khayber-fort'
        },
        {
            name: 'AlUla to Khaybar Circuit',
            description: 'Combined heritage tour covering both AlUla UNESCO sites and Khaybar historical areas. 150km desert route.',
            highlights: ['Hegra + Khaybar', 'Desert Route', 'Historical Circuit', 'Photography Stops'],
            duration: '2 days recommended',
            price: 'From SAR 1,200',
            link: '/locations/alula'
        },
    ];

    const features = [
        '4x4 desert vehicles (Toyota Land Cruiser)',
        'Licensed drivers with heritage site knowledge',
        'English-speaking guides available',
        'Flexible tour schedules',
        'Photography stop accommodations',
        'Desert terrain expertise',
        'UNESCO site access coordination',
        'Historical context and storytelling',
        'Water and refreshments included',
        'Sunrise and sunset tour options',
    ];

    const vehicles = [
        {
            name: 'Toyota Land Cruiser (4x4)',
            capacity: '5-7 passengers',
            terrain: 'Desert, rocky, sand dunes',
            ideal: 'Heritage tours, desert exploration'
        },
        {
            name: 'GMC Yukon (SUV)',
            capacity: '7 passengers',
            terrain: 'Paved roads, light off-road',
            ideal: 'City to heritage site transfers'
        },
    ];

    const faqs = [
        {
            question: "Do you provide 4x4 vehicles for AlUla desert tours?",
            answer: "Yes. All AlUla heritage tours use 4x4 vehicles (Toyota Land Cruiser) suitable for desert terrain. Vehicles are equipped for sand dunes, rocky paths, and off-road access to Hegra, Elephant Rock, and Dadan sites. Drivers have desert driving expertise and heritage site knowledge."
        },
        {
            question: "Can I book a full-day tour of AlUla UNESCO sites?",
            answer: "Yes. Full-day AlUla heritage tour (8-10 hours) covers Hegra (Madain Saleh), Dadan ancient city, Elephant Rock, and Old Town AlUla. Tour includes 4x4 transport, driver, and flexible schedule for photography. Price from SAR 600. English-speaking guide available for additional SAR 200."
        },
        {
            question: "Is transport available for Khaybar Fort historical tours?",
            answer: "Yes. Khaybar Fort tour (4-6 hours) includes 4x4 transport to fortress ruins and ancient oases. Route requires desert terrain vehicles due to unpaved roads. Tour includes historical context from driver. Price from SAR 400. Advance booking (48 hours) recommended."
        },
        {
            question: "Do drivers provide historical information about heritage sites?",
            answer: "Yes. All drivers for heritage tours have basic knowledge of site history and can provide context. For detailed historical tours, English-speaking guides are available for additional SAR 200 per day. Guides provide in-depth information about Nabataean civilization, early Islamic period, and archaeological significance."
        },
        {
            question: "Can I book sunrise or sunset tours at Hegra?",
            answer: "Yes. Sunrise tours depart 5:00-5:30 AM for optimal lighting at Hegra tombs. Sunset tours depart 3:00-4:00 PM for Elephant Rock and desert views. Both options include photography stops and flexible timing. Same pricing as standard tours. Weather-dependent (sandstorms may require rescheduling)."
        },
        {
            question: "Is the AlUla to Khaybar route accessible by regular vehicles?",
            answer: "No. AlUla to Khaybar route (150km) requires 4x4 vehicles due to desert terrain and unpaved sections. Route includes sand dunes, rocky paths, and historical markers. Travel time 2-3 hours depending on stops. 2-day tour recommended to explore both areas thoroughly."
        },
        {
            question: "Do you provide water and refreshments during desert tours?",
            answer: "Yes. All heritage tours include bottled water and light refreshments. For full-day tours (8+ hours), lunch stop can be arranged at local restaurants in AlUla or Khaybar (meal cost not included). Drivers carry emergency supplies for desert conditions."
        },
        {
            question: "Can I customize the heritage tour itinerary?",
            answer: "Yes. Heritage tour itineraries are flexible. You can prioritize specific sites (e.g., focus on Hegra only, or combine Elephant Rock with Dadan). Custom photography tours, archaeology-focused tours, and multi-day circuits are available. Contact us for custom itinerary pricing."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Heritage Tours Saudi Arabia",
        "provider": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "email": "taxiserviceksa9988@gmail.com"
        },
        "serviceType": "Heritage Tourism Transport",
        "areaServed": [
            { "@type": "City", "name": "AlUla" },
            { "@type": "City", "name": "Khaybar" }
        ],
        "description": "Professional heritage tour transport for UNESCO sites with 4x4 desert vehicles and licensed drivers. AlUla, Khaybar, and historical circuits.",
        "offers": {
            "@type": "Offer",
            "priceRange": "SAR 400-1200",
            "priceCurrency": "SAR"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/alula-hegra-tombs.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                            Heritage Tours
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            UNESCO Heritage Sites<br />
                            <span className="text-white">4x4 Desert Transport</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Professional heritage tour transport for AlUla, Khaybar, and UNESCO sites. 4x4 desert vehicles with licensed drivers and English-speaking guides.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking?service=heritage-tours">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book Heritage Tour
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                    Email for Custom Tour
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Heritage Sites Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Heritage Tour Packages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore Saudi Arabia's UNESCO World Heritage Sites and ancient historical landmarks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {heritageSites.map((site, index) => (
                            <Link key={index} href={site.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                            <Compass className="w-7 h-7 text-white" />
                                        </div>
                                        {site.isUNESCO && (
                                            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                                UNESCO
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                                        {site.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 flex-1">{site.description}</p>

                                    <div className="mb-4">
                                        <div className="text-sm font-bold text-gray-900 mb-2">Tour Highlights:</div>
                                        <div className="space-y-1">
                                            {site.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Duration:</span>
                                            <span className="text-gray-900 font-medium">{site.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-600 font-bold">{site.price}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Desert-Ready Vehicles</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            4x4 vehicles equipped for desert terrain and heritage site access.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                                <Car className="w-12 h-12 text-black mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Mountain className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.terrain}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500">
                                        <strong className="text-gray-900">Ideal for:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Heritage Tour Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Heritage Tour
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore Saudi Arabia's UNESCO World Heritage Sites with professional 4x4 transport and knowledgeable drivers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?service=heritage-tours">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Tour
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Custom Itinerary
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
