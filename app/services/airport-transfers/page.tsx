import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Plane, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Navigation, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Airport Transfer Service Saudi Arabia | Taxi with Driver - 8 Airports',
    description: 'Professional airport transfer service across Saudi Arabia with licensed drivers. Covers 8 major airports: Jeddah, Riyadh, Madinah, AlUla, Yanbu, Taif. Meet-and-greet, flight tracking, 24/7 service.',
    keywords: ['airport transfer Saudi Arabia', 'Jeddah Airport taxi', 'Riyadh Airport transfer', 'Madinah Airport taxi', 'airport pickup KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/airport-transfers',
    },
    openGraph: {
        title: 'Airport Transfer Service Saudi Arabia | Taxi with Driver - 8 Airports',
        description: 'Professional airport transfer service across Saudi Arabia. 8 major airports covered. Meet-and-greet, flight tracking, 24/7 service.',
        url: 'https://taxiserviceksa.com/services/airport-transfers',
        type: 'website',
    },
};

export default function AirportTransfersPage() {
    const airports = [
        {
            name: 'King Abdulaziz International Airport (JED)',
            city: 'Jeddah',
            code: 'JED',
            description: 'Largest airport in Saudi Arabia. Main gateway for Umrah pilgrims arriving to Makkah.',
            routes: ['Jeddah → Makkah (80km)', 'Jeddah → Taif (90km)', 'Jeddah City Hotels'],
            price: 'From SAR 150',
            link: '/locations/jeddah',
            isHub: true
        },
        {
            name: 'King Khalid International Airport (RUH)',
            city: 'Riyadh',
            code: 'RUH',
            description: 'Capital city airport. Business travel hub with connections to major Saudi cities.',
            routes: ['RUH → Riyadh Hotels', 'RUH → Business Districts', 'RUH → Diplomatic Quarter'],
            price: 'From SAR 80',
            link: '/locations/riyadh',
            isHub: true
        },
        {
            name: 'Prince Mohammad bin Abdulaziz Airport (MED)',
            city: 'Madinah',
            code: 'MED',
            description: 'Pilgrimage airport serving Madinah. Direct access to Prophet\'s Mosque area.',
            routes: ['MED → Madinah Hotels', 'MED → Prophet\'s Mosque', 'MED → Quba Mosque'],
            price: 'From SAR 50',
            link: '/locations/madinah'
        },
        {
            name: 'AlUla International Airport (ULH)',
            city: 'AlUla',
            code: 'ULH',
            description: 'Tourism airport for UNESCO heritage sites. Gateway to Hegra and Dadan.',
            routes: ['ULH → AlUla Hotels', 'ULH → Hegra Site', 'ULH → Khaybar (150km)'],
            price: 'From SAR 60',
            link: '/locations/alula'
        },
        {
            name: 'Prince Abdul Mohsin bin Abdulaziz Airport (YNB)',
            city: 'Yanbu',
            code: 'YNB',
            description: 'Industrial city airport. Serves port workers and Red Sea coastal access.',
            routes: ['YNB → Yanbu Hotels', 'YNB → Industrial City', 'YNB → Madinah (220km)'],
            price: 'From SAR 50',
            link: '/locations/yanbu'
        },
        {
            name: 'Taif Regional Airport (TIF)',
            city: 'Taif',
            code: 'TIF',
            description: 'Mountain resort airport. Summer destination with cooler climate.',
            routes: ['TIF → Taif Hotels', 'TIF → Mountain Resorts', 'TIF → Jeddah (90km)'],
            price: 'From SAR 40',
            link: '/locations/taif'
        },
    ];

    const features = [
        'Meet-and-greet service at arrivals hall',
        'Flight tracking with automatic delay adjustment',
        'Professional drivers with airport route knowledge',
        'Name sign display for easy identification',
        'Luggage assistance included',
        'All vehicles with licensed drivers (no self-drive)',
        'Fixed rates with no surge pricing',
        '24/7 service for all flight times',
        'Free waiting time: 60 minutes domestic, 90 minutes international',
        'Child seats available upon request',
    ];

    const vehicles = [
        {
            name: 'Toyota Camry',
            capacity: '4 passengers',
            luggage: '2 large bags',
            ideal: 'Business travelers, couples',
            airports: 'All airports'
        },
        {
            name: 'GMC Yukon',
            capacity: '7 passengers',
            luggage: '5 large bags',
            ideal: 'Families, group travelers',
            airports: 'All airports'
        },
        {
            name: 'Toyota Hiace',
            capacity: '11 passengers',
            luggage: '16 large bags',
            ideal: 'Large groups, tour groups',
            airports: 'Major airports (JED, RUH, MED)'
        },
    ];

    const faqs = [
        {
            question: "How does meet-and-greet service work at Saudi airports?",
            answer: "Driver waits at arrivals hall with name sign displaying passenger name. For Jeddah (JED), Riyadh (RUH), and Madinah (MED) airports, drivers wait at designated meeting points near baggage claim. Driver monitors flight status and adjusts pickup time for delays automatically. Contact number provided in booking confirmation."
        },
        {
            question: "What happens if my flight is delayed or arrives early?",
            answer: "Flight tracking is included for all airport pickups. Driver monitors real-time flight status via airline systems. No extra charges for delays up to 3 hours. For early arrivals, driver adjusts pickup time automatically. For delays over 3 hours, notify us via email for driver rescheduling."
        },
        {
            question: "Do you provide airport transfer service for late-night or early-morning flights?",
            answer: "Yes. Airport transfer service operates 24/7 for all flight times. Late-night pickups (10 PM - 6 AM) have the same fixed rates as daytime service. Advance booking (24-48 hours) is recommended for flights arriving between midnight and 5 AM."
        },
        {
            question: "Can I book airport transfer with child seats?",
            answer: "Yes. Child seats are available upon request for all airport transfers. Specify child age and weight during booking. Infant seats (0-1 year), toddler seats (1-4 years), and booster seats (4-8 years) are available. No extra charge for child seat provision."
        },
        {
            question: "What is the free waiting time for airport pickups?",
            answer: "Free waiting time is 60 minutes for domestic flights and 90 minutes for international flights. Waiting time starts from actual flight landing time (not scheduled time). This allows time for baggage claim, customs, and immigration. Extra waiting beyond free time is charged at SAR 20 per 30 minutes."
        },
        {
            question: "Do you provide airport transfer from Jeddah Airport to Makkah?",
            answer: "Yes. Jeddah Airport (JED) to Makkah is our most popular airport transfer route. Distance is 80 km, travel time 60-90 minutes. Fixed rate from SAR 150 (sedan) to SAR 400 (van). Meet-and-greet service included. See detailed route information at /routes/jeddah-makkah."
        },
        {
            question: "Can I book return airport transfer (hotel to airport)?",
            answer: "Yes. Return airport transfer service is available for all airports. Rates are the same for pickup and drop-off. For departure flights, driver arrives 3-4 hours before international flights, 2-3 hours before domestic flights (depending on airline check-in requirements). Advance booking recommended."
        },
        {
            question: "Do drivers speak English for international travelers?",
            answer: "Yes. All drivers speak English and Arabic. Many drivers also speak Urdu for Pakistani and Indian travelers. Drivers are trained to assist international passengers with basic directions and local information. Airport signage assistance provided for non-Arabic speakers."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Airport Transfer Service Saudi Arabia",
        "provider": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "email": "taxiserviceksa9988@gmail.com"
        },
        "serviceType": "Airport Transfer",
        "areaServed": [
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "AlUla" },
            { "@type": "City", "name": "Yanbu" },
            { "@type": "City", "name": "Taif" }
        ],
        "description": "Professional airport transfer service across 8 major Saudi airports with licensed drivers. Meet-and-greet, flight tracking, and 24/7 service.",
        "offers": {
            "@type": "Offer",
            "priceRange": "SAR 40-400",
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
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                            Airport Transfer Service
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Airport Transfers<br />
                            <span className="text-white">Across 8 Saudi Airports</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Professional airport transfer service with licensed drivers. Meet-and-greet, flight tracking, and 24/7 availability across all major Saudi airports.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking?service=airport-transfer">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book Airport Transfer
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
                </div>
            </section>

            {/* Airports Coverage Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">8 Major Airports Covered</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional taxi service with drivers at every major Saudi airport. Fixed rates, no surge pricing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {airports.map((airport, index) => (
                            <Link key={index} href={airport.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                            <Plane className="w-7 h-7 text-white" />
                                        </div>
                                        {airport.isHub && (
                                            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                                MAJOR HUB
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                                        {airport.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-600">{airport.city}</span>
                                        <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                                            {airport.code}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4 flex-1">{airport.description}</p>

                                    <div className="mb-4">
                                        <div className="text-sm font-bold text-gray-900 mb-2">Popular Routes:</div>
                                        <div className="space-y-1">
                                            {airport.routes.map((route, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                    <span>{route}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-600 font-bold">{airport.price}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Airport Transfer Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional service designed for stress-free airport arrivals and departures.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicles with Professional Drivers</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            All vehicles include licensed drivers. No self-drive rental available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                                <Car className="w-12 h-12 text-black mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200 space-y-2">
                                    <p className="text-sm text-gray-500">
                                        <strong className="text-gray-900">Ideal for:</strong> {vehicle.ideal}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <strong className="text-gray-900">Available at:</strong> {vehicle.airports}
                                    </p>
                                </div>
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
                        Book Your Airport Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional drivers, meet-and-greet service, and flight tracking across all major Saudi airports. Fixed rates, no hidden fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?service=airport-transfer">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Custom Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
