import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Al Ula Taxi | 700km Heritage Route - Fixed Price',
    description: 'Taxi from Jeddah to Al Ula operates 24/7. 700km scenic journey to Hegra in 7-8 hours. Fixed rate from SAR 1400. Luxury SUVs for the long drive.',
    keywords: ['Jeddah to Al Ula taxi', 'taxi Jeddah airport to Al Ula', 'Al Ula transport', 'Jeddah Alula price', 'Hegra taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-alula/',
    },
    openGraph: {
        title: 'Jeddah to Al Ula Taxi | 700km Route - Fixed Price SAR 1400',
        description: 'Comfortable private transfer from Jeddah to Al Ula. 700km journey. Fixed rates starting SAR 1400. Visit the ancient city of Hegra.',
        url: 'https://taxiserviceksa.com/routes/jeddah-alula/',
        type: 'website',
    },
};

export default function JeddahAlulaRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '700 km', icon: Navigation },
        { label: 'Travel Time', value: '7-8 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 1400', icon: DollarSign },
        { label: 'Terrain', value: 'Desert & Mountain', icon: Mountain },
    ];

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '3 passengers',
            luggage: '2 large bags',
            price: 'SAR 1400',
            ideal: 'Couples on a budget'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '6 passengers',
            luggage: '5 large bags',
            price: 'SAR 1800',
            ideal: 'Families, Comfort seekers'
        },
        {
            name: 'Hyundai Staria (Family)',
            passengers: '7 passengers',
            luggage: '6 large bags',
            price: 'SAR 1600',
            ideal: 'Groups of friends'
        },
    ];

    const routeImages = [
        '/alula-hegra.webp',
        '/hero-slide-3.webp',
        '/jeddah-airport.webp',
    ];

    const faqs = [
        {
            question: "How long is the taxi ride from Jeddah to Al Ula?",
            answer: "The journey from Jeddah to Al Ula is approximately 700 km and takes about 7 to 8 hours by car. The route passes through scenic desert landscapes and small towns."
        },
        {
            question: "What is the price of a taxi from Jeddah to Al Ula?",
            answer: "Fixed rates start from SAR 1400 for a sedan and SAR 1800 for a luxury GMC Yukon SUV. This price includes fuel, driver service, and taxes."
        },
        {
            question: "Is it better to fly or drive to Al Ula?",
            answer: "Flying is faster (1 hour flight) but flights can be infrequent and expensive. Driving offers flexibility, door-to-door service, and the chance to see the changing Saudi landscape. It's often more economical for groups."
        },
        {
            question: "Are there rest stops on the way to Al Ula?",
            answer: "Yes, there are several gas stations and rest areas along the highway (Route 15 & Route 328) where you can stop for food, prayer, and restrooms. Drivers are happy to make stops as needed."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Al Ula",
        "fromLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Al Ula",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Ula",
                "addressCountry": "SA"
            }
        },
        "distance": "700 km",
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
                h1Text="Taxi from Jeddah to Al Ula: The Ancient Kingdom Route"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Al Ula Route
                    </span>
                }
                subtitle="Journey to Hegra & Elephant Rock"
                location="700 km | ~7.5 Hours | From SAR 1400"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=jeddah-alula">
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Long Distance</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah to Al Ula Heritage Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comfortable, long-distance journey from the Red Sea coast to the ancient deserts of Al Ula.
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

                    {/* Features */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Drive to Al Ula?</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    The drive to Al Ula is an adventure in itself. As you leave the coastal humidity of Jeddah, you'll ascend into the mountains and then across the vast, beautiful Saudi desert. Arrive directly at your resort or camp in Al Ula without the hassle of airport transfers or car rentals.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Mountain className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>See the changing landscapes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Car className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Maximum comfort in GMC Yukon</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Flexible departure times</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl mb-4">Recommended Schedule</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">08:00 AM</span>
                                        <p className="text-sm text-gray-300">Depart Jeddah to avoid rush hour</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">12:00 PM</span>
                                        <p className="text-sm text-gray-300">Lunch & Prayer Stop (Halfway)</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">03:30 PM</span>
                                        <p className="text-sm text-gray-300">Arrive in Al Ula for Check-in</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">05:00 PM</span>
                                        <p className="text-sm text-gray-300">Sunset at Elephant Rock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comfort Class Vehicles</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            For long-distance travel, we highly recommend our SUV range for extra legroom and luggage space.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Questions?</h2>
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Experience Al Ula
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Don't let flight schedules dictate your adventure. Book your private ride to Al Ula today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=jeddah-alula">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 1400+)
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
