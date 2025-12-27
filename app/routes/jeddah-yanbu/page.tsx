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
    title: 'Jeddah to Yanbu Taxi | 330km Industrial City Route - Fixed Price',
    description: 'Taxi from Jeddah to Yanbu operates 24/7. 330km intercity transfer in 3.5-4 hours. Fixed rate from SAR 550. Professional drivers for RCY and Yanbu Industrial.',
    keywords: ['Jeddah to Yanbu taxi', 'taxi Jeddah airport to Yanbu', 'Yanbu simplified taxi', 'Jeddah Yanbu price', 'RCY transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-yanbu/',
    },
    openGraph: {
        title: 'Jeddah to Yanbu Taxi | 330km Route - Fixed Price SAR 550',
        description: 'Reliable taxi from Jeddah to Yanbu. 3.5-hour journey. Fixed rates starting SAR 550. Ideal for business travelers and residents.',
        url: 'https://taxiserviceksa.com/routes/jeddah-yanbu',
        type: 'website',
    },
};

export default function JeddahYanbuRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '330 km', icon: Navigation },
        { label: 'Travel Time', value: '3.5-4 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 550', icon: DollarSign },
        { label: 'Route', value: 'Coastal Highway', icon: MapPin },
    ];

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '4 passengers',
            luggage: '2 large bags',
            price: 'SAR 550',
            ideal: 'Business travelers, Couples'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '7 passengers',
            luggage: '5 large bags',
            price: 'SAR 800',
            ideal: 'Families, Site engineers'
        },
        {
            name: 'Hyundai Staria (Family)',
            passengers: '7 passengers',
            luggage: '4 large bags',
            price: 'SAR 750',
            ideal: 'Small groups'
        },
    ];

    const routeImages = [
        '/yanbu-lake.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Yanbu?",
            answer: "Taxi rates from Jeddah Airport to Yanbu start from SAR 550 for a standard sedan (Camry). SUVs like GMC Yukon are approximately SAR 800. Prices are fixed and include fuel and driver fees."
        },
        {
            question: "How long is the drive from Jeddah to Yanbu?",
            answer: "The drive typically takes 3.5 to 4 hours (330 km) via Route 5 (Coastal Highway). The road is well-maintained and scenic, running parallel to the Red Sea."
        },
        {
            question: "Do you drop off at Royal Commission Yanbu (RCY)?",
            answer: "Yes, we provide door-to-door service to all areas of Yanbu, including the Royal Commission (Yanbu Al Sinaiyah), Yanbu Al Bahr (Downtown), and the industrial zones."
        },
        {
            question: "Is the road from Jeddah to Yanbu safe?",
            answer: "Yes, the Coastal Highway is a modern, dual-carriageway road that is generally very safe. We recommend daytime travel for the best experience, but our drivers are experienced with night transfers as well."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Yanbu",
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
            "name": "Yanbu",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yanbu",
                "addressCountry": "SA"
            }
        },
        "distance": "330 km",
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
                h1Text="Taxi from Jeddah to Yanbu: Professional Intercity Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Yanbu Route
                    </span>
                }
                subtitle="The Pearl of the Red Sea"
                location="330 km | ~3.5 Hours | From SAR 550"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=jeddah-yanbu">
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Express Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport to Yanbu Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Fast, reliable transport between Jeddah King Abdulaziz Airport (JED) and Yanbu Industrial City or Downtown.
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

                    {/* Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-6 h-6 text-primary" />
                                Why Choose Private Taxi?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span>Direct pickup from Jeddah Airport arrivals</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span>Door-to-door drop-off in Yanbu (RCY/Downtown)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span>Private vehicle - no sharing with strangers</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span>Depart immediately - no waiting for schedules</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-gray-600" />
                                Bus Flight Alternatives
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Flights are expensive (SAR 300-500/person)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Bus schedules are limited and slower (5+ hours)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Need additional taxi current location to station</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicle Fleet & Rates</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern, air-conditioned vehicles perfect for the coastal highway drive.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Route FAQs</h2>
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
                        Ready to Visit Yanbu?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your private transfer now for a comfortable journey to the Pearl of the Red Sea.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=jeddah-yanbu">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 550+)
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
