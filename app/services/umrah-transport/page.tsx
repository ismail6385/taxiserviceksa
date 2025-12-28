import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Navigation, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import { blogService } from '@/lib/blogService';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata: Metadata = {
    title: 'Umrah Transport Service | Taxi with Driver for Makkah & Madinah',
    description: 'Complete Umrah transport service with professional drivers. Jeddah Airport to Makkah, Makkah to Madinah taxi. Fixed rates, 24/7 service. All vehicles include licensed drivers.',
    keywords: ['Umrah taxi service', 'Makkah Madinah transport', 'Umrah transport with driver', 'Jeddah Airport Makkah taxi', 'pilgrimage transport KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/umrah-transport/',
    },
    openGraph: {
        title: 'Umrah Transport Service | Taxi with Driver for Makkah & Madinah',
        description: 'Complete Umrah transport service with professional drivers. Jeddah Airport to Makkah, Makkah to Madinah taxi. Fixed rates, 24/7 service.',
        url: 'https://taxiserviceksa.com/services/umrah-transport/',
        type: 'website',
    },
};

export default async function UmrahTransportPage() {
    // Fetch related blogs
    const blogs = await blogService.getBlogsByCategory('Umrah Guide');
    const displayBlogs = blogs.slice(0, 3);

    const umrahRoutes = [
        {
            name: 'Jeddah Airport → Makkah',
            distance: '80 km',
            duration: '60-90 minutes',
            price: 'From SAR 150',
            description: 'Direct transfer from King Abdulaziz International Airport to your Makkah hotel. Meet-and-greet service included.',
            link: '/routes/jeddah-makkah',
            icon: Plane
        },
        {
            name: 'Makkah → Madinah',
            distance: '450 km',
            duration: '4-5 hours',
            price: 'From SAR 400',
            description: 'Complete your Umrah journey with comfortable transfer between the two holy cities. Rest stops included.',
            link: '/routes/makkah-madinah',
            icon: Navigation
        },
        {
            name: 'Makkah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'From SAR 30',
            description: 'Hotel to Haram taxi service. Available 24/7 for prayers and Ziyarat tours.',
            link: '/locations/makkah',
            icon: MapPin
        },
        {
            name: 'Madinah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'From SAR 30',
            description: 'Hotel to Prophet\'s Mosque and Ziyarat sites. Professional drivers with local knowledge.',
            link: '/locations/madinah',
            icon: MapPin
        },
    ];

    const vehicles = [
        {
            name: 'Toyota Camry',
            capacity: '4 passengers',
            luggage: '2 large bags',
            ideal: 'Solo travelers or couples',
            features: ['Air conditioning', 'Comfortable seats', 'Zamzam water holder']
        },
        {
            name: 'GMC Yukon',
            capacity: '7 passengers',
            luggage: '5 large bags',
            ideal: 'Families with luggage',
            features: ['Spacious interior', 'Extra cargo space', 'Child seat available']
        },
        {
            name: 'Toyota Hiace',
            capacity: '11 passengers',
            luggage: '16 large bags',
            ideal: 'Large Umrah groups',
            features: ['Group transport', 'Ample luggage space', 'Multiple Zamzam containers']
        },
    ];

    const features = [
        'Licensed drivers with Umrah route knowledge',
        'All vehicles include professional drivers (no self-drive)',
        'Flight tracking for airport pickups',
        'Meet-and-greet service at arrivals',
        'Prayer time awareness and flexibility',
        'Zamzam water container accommodation',
        'Fixed rates with no surge pricing',
        'English and Arabic speaking drivers',
    ];

    const faqs = [
        {
            question: "Do you provide self-drive car rental for Umrah?",
            answer: "No. All our vehicles come with professional licensed drivers. We do not offer self-drive car rental. This ensures safety, local route knowledge, and compliance with Saudi traffic regulations. Drivers are experienced with Umrah routes and prayer schedules."
        },
        {
            question: "What is included in the Umrah transport service?",
            answer: "Umrah transport service includes: professional driver, vehicle fuel, airport meet-and-greet (for airport pickups), flight tracking, prayer breaks, rest stops (for long journeys), and Zamzam water container accommodation. All vehicles are air-conditioned and regularly maintained."
        },
        {
            question: "How much does complete Umrah transport cost (Jeddah to Makkah to Madinah)?",
            answer: "Complete Umrah transport package: Jeddah Airport to Makkah (SAR 150-400 depending on vehicle), Makkah to Madinah (SAR 400-900), plus local transport in each city (SAR 30-50 per trip). Total cost depends on group size and vehicle type. Advance booking for full package is recommended."
        },
        {
            question: "Can the driver wait during Umrah or prayers?",
            answer: "Yes. Drivers can wait during Umrah rituals or prayers. Waiting time charges apply for extended stops (over 2 hours). For Tawaf and Sa'i, drivers typically drop off at Haram entrance and pick up after completion. Flexible scheduling is available for Ziyarat tours."
        },
        {
            question: "Do drivers speak English for international pilgrims?",
            answer: "Yes. All drivers speak English and Arabic. Many drivers also speak Urdu for Pakistani and Indian pilgrims. Drivers are trained to assist international pilgrims with basic Umrah guidance and local directions."
        },
        {
            question: "Is taxi service available 24/7 during Ramadan and Hajj season?",
            answer: "Yes. Taxi service operates 24/7 throughout the year, including Ramadan and Hajj season. During peak periods, advance booking (48-72 hours) is strongly recommended due to high demand. Priority is given to pre-booked customers."
        },
        {
            question: "Can I book a driver for multiple days during Umrah?",
            answer: "Yes. Multi-day driver service is available. Rates are quoted per day or per trip depending on itinerary. Common packages include: 3-day Makkah service, 5-day Makkah + Madinah service, or custom duration. Contact us for multi-day pricing."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "Flight tracking is included for all airport pickups. Driver monitors flight status and adjusts pickup time automatically. No extra charges for flight delays up to 3 hours. For delays over 3 hours, please notify us via email for driver rescheduling."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Umrah Transport Service with Driver",

        "serviceType": "Umrah Transport",
        "areaServed": [
            { "@type": "City", "name": "Makkah" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "Jeddah" }
        ],
        "description": "Complete Umrah transport service with professional drivers. Covers Jeddah Airport to Makkah, Makkah to Madinah, and local city transport. All vehicles include licensed drivers.",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "SAR",
            "lowPrice": "150",
            "highPrice": "900",
            "priceValidUntil": "2025-12-31"
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
                    <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                            Complete Umrah Transport
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Umrah Transport Service<br />
                            <span className="text-white">With Professional Drivers</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Complete transport solution for your Umrah journey. From Jeddah Airport arrival to Makkah, Madinah, and all Ziyarat sites. All vehicles include licensed drivers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking?service=umrah-transport">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book Umrah Transport
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

            {/* Umrah Routes Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Umrah Journey Coverage</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional taxi service with drivers for every stage of your Umrah pilgrimage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {umrahRoutes.map((route, index) => (
                            <Link key={index} href={route.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                            <route.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                                                {route.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Navigation className="w-4 h-4" />
                                                    {route.distance}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {route.duration}
                                                </span>
                                                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                                                    <DollarSign className="w-4 h-4" />
                                                    {route.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{route.description}</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicles with Professional Drivers</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            All vehicles include licensed drivers. No self-drive rental available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200 mb-4">
                                    <p className="text-sm text-gray-500 mb-3">
                                        <strong className="text-gray-900">Ideal for:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    {vehicle.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Umrah Transport Service</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Guides Section */}
            <RelatedGuides blogs={displayBlogs} title="Essential Umrah Guides" subtitle="Tips, checklists, and spiritual insights for your pilgrimage." />

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
                        Book Your Complete Umrah Transport
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional drivers, fixed rates, and 24/7 service for your entire Umrah journey. From airport arrival to departure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?service=umrah-transport">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Custom Package
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
