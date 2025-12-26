
import { Metadata } from 'next';
import Link from 'next/link';
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
    title: 'Riyadh to Jeddah Taxi | Long Distance 950km Transfer',
    description: 'Private taxi from Riyadh to Jeddah. Comfortable long-distance travel (950 km). Professional drivers, luxury cars, door-to-door service. Book your intercity ride.',
    keywords: ['Riyadh to Jeddah taxi', 'Riyadh to Jeddah distance', 'taxi fare Riyadh Jeddah', 'intercity taxi Saudi Arabia', 'long distance taxi KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-jeddah',
    },
    openGraph: {
        title: 'Riyadh to Jeddah Taxi | Long Distance Transfer',
        description: 'Private taxi from Riyadh to Jeddah. Comfortable long-distance travel (950 km). Professional drivers, luxury cars, door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/riyadh-jeddah',
        type: 'website',
    },
};

export default function RiyadhJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '950 km', icon: Navigation },
        { label: 'Travel Time', value: '10-12 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 1800', icon: DollarSign },
        { label: 'Availability', value: 'Advance Booking', icon: CheckCircle2 },
    ];

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '3 passengers',
            luggage: '2 large bags',
            price: 'SAR 1800',
            ideal: 'Solo travelers (Max comfort)'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '5 passengers',
            luggage: '5 large bags',
            price: 'SAR 2500',
            ideal: 'Families or VIPs'
        },
        {
            name: 'Toyota Hiace (Van)',
            passengers: '10 passengers',
            luggage: '10 large bags',
            price: 'SAR 3000',
            ideal: 'Large groups / Relocation'
        },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp', // Need a Riyadh image ideally, but will reuse existing for now or generic highway
        '/makkah-kaaba-night.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How long does it take time to drive from Riyadh to Jeddah?",
            answer: "The drive from Riyadh to Jeddah takes approximately 10 to 12 hours depending on traffic and speed. The distance is about 950 km. We recommend starting early in the morning."
        },
        {
            question: "How much does a taxi cost from Riyadh to Jeddah?",
            answer: "Private taxi fares from Riyadh to Jeddah start from SAR 1800 for a sedan. SUVs are priced around SAR 2500. This includes fuel, driver, and tolls. Prices may vary slightly based on specific pickup/drop-off locations."
        },
        {
            question: "Is it safe to travel by taxi from Riyadh to Jeddah?",
            answer: "Yes, the route follows major highways which are well-maintained and safe. Our drivers are experienced in long-distance travel and ensure a safe, steady pace with necessary rest stops."
        },
        {
            question: "Can we stop for breaks?",
            answer: "Absolutely. For a 10-12 hour journey, multiple rest stops (for food, prayer, restrooms) are essential and included. You can request stops whenever you need."
        },
        {
            question: "Is flying better than taking a taxi for this route?",
            answer: "Flying is much faster (1.5 hours flight time). Taxi is only recommended if you have a lot of luggage, are moving pets, dislike flying, or want to enjoy a road trip across the Kingdom."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Riyadh to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Riyadh",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "950 km",
        "provider": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "email": "taxiserviceksa9988@gmail.com"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Taxi from Riyadh to Jeddah: 950km Long Distance Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh → Jeddah Route
                    </span>
                }
                subtitle="Riyadh City/Airport to Jeddah"
                location="10-12 Hours | Starting SAR 1800"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=riyadh-jeddah">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Riyadh to Jeddah Intercity Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A premium long-distance chauffeur service connecting the capital, Riyadh, to the gateway of the holy cities, Jeddah.
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

                    {/* Flight vs Taxi Comparison */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Plane className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Flight vs Private Taxi (Riyadh-Jeddah)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Domestic Flight</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Flight time: 1.5 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Cost: ~SAR 300-600 per person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Strict luggage limits</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Road Trip)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Door-to-door convenience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Unlimited luggage (SUV/Van)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Travel time: 10-12 hours</span>
                                    </li>
                                </ul>
                            </div>
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
                            Reliable vehicles for long-distance travel.
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
                        <Link href="/routes/jeddah-makkah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah to Makkah</h3>
                            <p className="text-gray-600 text-sm">Popular Umrah route</p>
                        </Link>
                        <Link href="/routes/jeddah-taif" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah to Taif</h3>
                            <p className="text-gray-600 text-sm">Mountain destination trip</p>
                        </Link>
                        <Link href="/locations/riyadh" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Riyadh City Transport</h3>
                            <p className="text-gray-600 text-sm">Local Riyadh taxi services</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Riyadh to Jeddah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        A long journey requires a comfortable vehicle and a trusted driver. Book with Taxi Service KSA for peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=riyadh-jeddah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 1800+)
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
