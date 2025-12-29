import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Makkah Taxi | Airport Transfer 80km - Fixed Price SAR 250',
    description: 'Taxi from Jeddah to Makkah operates 24/7. King Abdulaziz Airport to Makkah hotels in 60-90 minutes. Fixed rate SAR 250. Meet-and-greet service. Book online.',
    keywords: ['Jeddah to Makkah taxi', 'Jeddah Airport to Makkah', 'taxi price Jeddah Makkah', 'King Abdulaziz Airport Makkah transfer', 'Haramain train alternative', 'makkah to jeddah taxi service', 'jeddah to makkah taxi fare 7 seater', 'airport pick and drop', 'how much is taxi from jeddah to makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-makkah/',
    },
    openGraph: {
        title: 'Jeddah to Makkah Taxi | Airport Transfer 80km - Fixed Price',
        description: 'Taxi from Jeddah to Makkah operates 24/7. King Abdulaziz Airport to Makkah hotels in 60-90 minutes. Fixed rate SAR 250. Book online.',
        url: 'https://taxiserviceksa.com/routes/jeddah-makkah/',
        type: 'website',
    },
};

export default function JeddahMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '80-95 km', icon: Navigation },
        { label: 'Travel Time', value: '60-90 minutes', icon: Clock },
        { label: 'Starting Price', value: 'SAR 250', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '4 passengers',
            luggage: '2 large bags',
            price: 'SAR 250',
            ideal: 'Solo travelers or couples'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '7 passengers',
            luggage: '5 large bags',
            price: 'SAR 450',
            ideal: 'Families or groups with luggage'
        },
        {
            name: 'Toyota Hiace (Van)',
            passengers: '11 passengers',
            luggage: '16 large bags',
            price: 'SAR 350',
            ideal: 'Large Umrah groups'
        },
    ];

    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How much does a taxi cost from Jeddah Airport to Makkah?",
            answer: "Taxi rates from King Abdulaziz International Airport (Jeddah) to Makkah start from SAR 150 for a sedan (Toyota Camry). A 7 seater (GMC/Starex) starts from SAR 250. Van rates (Toyota Hiace) start from SAR 400. Prices are fixed with no surge charges."
        },
        {
            question: "How long is the taxi ride from Jeddah to Makkah?",
            answer: "The taxi ride from Jeddah to Makkah takes about 60 to 90 minutes. Distance is 80-95 kilometers via the Haramain Highway. Early mornings are fastest, but traffic can increase during Ramadan and Hajj."
        },
        {
            question: "Is it better to take a taxi or the Haramain Train to Makkah?",
            answer: "A taxi provides direct door-to-door service from the airport to your hotel. The Haramain Train is faster (35 mins) but requires two extra taxi rides (Airport to Station, and Makkah Station to Hotel). For families with luggage, a direct taxi is usually faster overall."
        },
        {
            question: "Do you offer meet-and-greet at Jeddah Airport?",
            answer: "Yes, meet-and-greet is included. Our driver waits at the arrivals hall with a name sign. We track your flight to ensure we are there when you land. We also help with luggage."
        },
        {
            question: "Can I get a taxi from Jeddah to Makkah late at night?",
            answer: "Yes, our taxi service operates 24/7. Late-night pickups (10 PM - 6 AM) cost the same fixed rate. We recommend booking in advance for late arrivals."
        },
        {
            question: "Which route do you take from Jeddah to Makkah?",
            answer: "We primarily use the Haramain Highway (Route 40) via the Makkah Tunnel, which takes 60-75 minutes. If there is roadwork, we may use the Old Makkah Road (Route 15). Drivers always choose the fastest route."
        },
        {
            question: "Do you take Zamzam water and extra luggage?",
            answer: "Yes, our vehicles can carry Zamzam water and extra luggage. If you have a lot of bags, please book an SUV or Van to ensure enough space."
        },
        {
            question: "Can we stop for a break on the way to Makkah?",
            answer: "Yes, you can ask for a rest stop at designated areas like Al Shumaisi (40 km from Jeddah). Stops usually last 10-15 minutes for restrooms or snacks."
        },
        {
            question: "Is your service better than renting a car in Jeddah?",
            answer: "Our private chauffeur service is more convenient than renting. You get a professional driver, no deposit is required, and there are no insurance worries. It's a stress-free way to travel."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Makkah",
        "fromLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Makkah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "distance": "80 km",

    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />
            <Script
                id="speakable-schema-jeddah-makkah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Speakable",
                        "cssSelector": [".faq-answer"]
                    })
                }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Taxi from Jeddah to Makkah: Airport Transfer 80km Route"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Makkah Route
                    </span>
                }
                subtitle="King Abdulaziz Airport to Makkah Hotels"
                location="60-90 Minutes | Fixed Rate SAR 250+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=jeddah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport to Makkah Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The most popular route for Umrah pilgrims arriving at King Abdulaziz International Airport. Direct transfer to Makkah hotels via Haramain Highway.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Train vs Taxi Comparison */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Train className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Haramain Train vs Private Taxi</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Haramain High Speed Railway</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Ticket: SAR 35-60 (economy/business)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Travel time: 35 minutes (station to station)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Requires taxi to/from stations (+SAR 40-80)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Total journey time: 90-120 minutes</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Door-to-Door)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Fixed rate: SAR 250-500 (vehicle type)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Direct: Airport → Hotel (no transfers)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Total journey time: 60-90 minutes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Best for families with luggage (3+ people)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">Verdict:</strong> For families (3+ passengers) with luggage, private taxi is 40% more time-efficient and cost-effective when total journey time is considered. Solo travelers with light luggage benefit from train pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicle Options & Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right vehicle for your group size and luggage requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicleOptions.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all">
                                <div className="text-center mb-6">
                                    <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                    <div className="text-3xl font-black text-primary mb-4">{vehicle.price}</div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.passengers}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
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

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
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

            {/* Related Routes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Related Routes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/locations/makkah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Makkah City Transport</h3>
                            <p className="text-gray-600 text-sm">Hotel to Haram taxi service</p>
                        </Link>
                        <Link href="/locations/jeddah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah Airport Transfers</h3>
                            <p className="text-gray-600 text-sm">All Jeddah taxi services</p>
                        </Link>
                        <Link href="/locations/madinah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Makkah to Madinah (450km)</h3>
                            <p className="text-gray-600 text-sm">Intercity pilgrimage route</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Jeddah to Makkah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Fixed rates, meet-and-greet service, and direct door-to-door transport from King Abdulaziz Airport to your Makkah hotel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=jeddah-makkah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 250+)
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
