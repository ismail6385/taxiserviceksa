import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Makkah to Madinah Taxi | 450km Umrah Route - Fixed Price SAR 450',
    description: 'Taxi from Makkah to Madinah operates 24/7. 450km pilgrimage route in 4-5 hours. Fixed rate SAR 450. Rest stops included. Complete your Umrah journey.',
    keywords: ['Makkah to Madinah taxi', 'Umrah taxi Makkah Madinah', 'taxi price Makkah Madinah', 'Makkah Madinah distance', 'pilgrimage transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-madinah/',
    },
    openGraph: {
        title: 'Makkah to Madinah Taxi | 450km Umrah Route - Fixed Price',
        description: 'Taxi from Makkah to Madinah operates 24/7. 450km pilgrimage route in 4-5 hours. Fixed rate SAR 450. Complete your Umrah journey.',
        url: 'https://taxiserviceksa.com/routes/makkah-madinah/',
        type: 'website',
    },
};

export default function MakkahMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 450', icon: DollarSign },
        { label: 'Rest Stops', value: '2-3 breaks', icon: Coffee },
    ];

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '4 passengers',
            luggage: '2 large bags',
            price: 'SAR 450',
            ideal: 'Solo travelers or couples'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '7 passengers',
            luggage: '5 large bags',
            price: 'SAR 850',
            ideal: 'Families with Zamzam containers'
        },
        {
            name: 'Toyota Hiace (Van)',
            passengers: '11 passengers',
            luggage: '16 large bags',
            price: 'SAR 650',
            ideal: 'Large Umrah groups'
        },
    ];

    const restStops = [
        {
            name: 'Badr Rest Area',
            distance: '150 km from Makkah',
            facilities: 'Restrooms, mosque, refreshments',
            duration: '15-20 minutes'
        },
        {
            name: 'Rabigh Service Station',
            distance: '80 km from Makkah',
            facilities: 'Fuel, food court, prayer area',
            duration: '10-15 minutes'
        },
        {
            name: 'Al-Juhfah Historical Marker',
            distance: '200 km from Makkah',
            facilities: 'Historical site, restrooms',
            duration: '10 minutes'
        },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/makkah-kaaba-night.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How much does a taxi cost from Makkah to Madinah?",
            answer: "Taxi rates from Makkah to Madinah start from SAR 400 for a sedan (Toyota Camry). SUV rates (GMC Yukon) start from SAR 600. Van rates (Toyota Hiace) start from SAR 900. Prices are fixed for the 450 km journey and include rest stops."
        },
        {
            question: "How long does it take to travel from Makkah to Madinah by taxi?",
            answer: "Taxi travel time from Makkah to Madinah is 4-5 hours depending on traffic and rest stops. Distance is 450 kilometers via Route 15 (Madinah Road). Early morning departures (5-7 AM) avoid peak traffic. Journey includes 2-3 rest stops for prayers and refreshments."
        },
        {
            question: "What is the best time to travel from Makkah to Madinah?",
            answer: "The best departure time is early morning (5-7 AM) after Fajr prayer. This avoids midday heat and Makkah traffic. Drivers recommend completing the journey before Dhuhr prayer to allow time for check-in at Madinah hotels and rest before Asr prayer at the Prophet's Mosque."
        },
        {
            question: "Are rest stops included in the Makkah to Madinah taxi journey?",
            answer: "Rest stops are included in the fixed rate. Standard stops include Badr rest area (150 km), Rabigh service station (80 km), and Al-Juhfah historical marker (200 km). Each stop is 10-20 minutes for restrooms, prayers, and refreshments. Additional stops are available upon request."
        },
        {
            question: "Can I book a taxi from Makkah to Madinah for same-day travel?",
            answer: "Same-day taxi booking is available subject to vehicle availability. Advance booking (24-48 hours) via email or online form is recommended, especially during Ramadan and Hajj season. Early morning departures require booking the previous evening."
        },
        {
            question: "Do you provide taxi service from Madinah back to Makkah or Jeddah Airport?",
            answer: "Return taxi service is available from Madinah to Makkah (SAR 400+) or directly to Jeddah Airport (SAR 500+). Round-trip bookings receive priority scheduling. Drivers coordinate with flight departure times for airport transfers."
        },
        {
            question: "Can the taxi accommodate Zamzam water containers from Makkah?",
            answer: "Vehicles accommodate Zamzam water containers (5-10 liters per passenger). SUVs and vans have dedicated cargo space for multiple containers. Passengers should specify Zamzam quantities during booking for appropriate vehicle assignment and secure loading."
        },
        {
            question: "Is the taxi route from Makkah to Madinah safe for night travel?",
            answer: "Route 15 (Madinah Road) is a well-maintained highway with lighting and emergency services. Night travel (8 PM - 5 AM) is safe but not recommended due to driver fatigue on long journeys. Daytime travel (6 AM - 6 PM) is preferred for visibility and rest stop access."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Makkah to Madinah",
        "fromLocation": {
            "@type": "Place",
            "name": "Makkah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "distance": "450 km",
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
                h1Text="Taxi from Makkah to Madinah: 450km Umrah Pilgrimage Route"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Madinah Route
                    </span>
                }
                subtitle="Complete Your Umrah Journey"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=makkah-madinah">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Makkah to Madinah Pilgrimage Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The sacred journey between the two holy cities. Complete your Umrah with comfortable, direct transport from Makkah hotels to Madinah accommodations.
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

                    {/* Journey Timeline */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-white" />
                            Typical Journey Timeline
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Pickup from Makkah Hotel (6:00 AM)</div>
                                    <p className="text-gray-300 text-sm">Driver arrives after Fajr prayer. Luggage and Zamzam water loading.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">First Rest Stop - Rabigh (7:00 AM)</div>
                                    <p className="text-gray-300 text-sm">80 km from Makkah. Restroom break, refreshments, fuel if needed.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Second Rest Stop - Badr (8:30 AM)</div>
                                    <p className="text-gray-300 text-sm">150 km from Makkah. Historical site, mosque for prayers, refreshments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Arrival in Madinah (10:30 AM)</div>
                                    <p className="text-gray-300 text-sm">Drop-off at hotel. Time to rest before Dhuhr prayer at Prophet's Mosque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest Stops Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rest Stops Along the Route</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comfortable breaks for prayers, refreshments, and restrooms during your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {restStops.map((stop, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Coffee className="w-8 h-8 text-primary" />
                                    <h3 className="text-xl font-bold text-gray-900">{stop.name}</h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <Navigation className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">{stop.distance}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">{stop.duration}</span>
                                    </p>
                                    <p className="text-sm mt-3">{stop.facilities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Options Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicle Options & Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the right vehicle for your group size and luggage requirements for the 450 km journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicleOptions.map((vehicle, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all">
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
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

            {/* Related Routes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Your Umrah Journey</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/routes/jeddah-makkah" className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah Airport → Makkah (80km)</h3>
                            <p className="text-gray-600 text-sm">Start your Umrah with airport transfer</p>
                        </Link>
                        <Link href="/locations/madinah" className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Madinah City Transport</h3>
                            <p className="text-gray-600 text-sm">Hotel to Prophet's Mosque taxi</p>
                        </Link>
                        <Link href="/locations/jeddah" className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Madinah → Jeddah Airport (420km)</h3>
                            <p className="text-gray-600 text-sm">Return journey for departure</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Makkah to Madinah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Complete your Umrah journey with comfortable, direct transport. Fixed rates, rest stops included, and experienced drivers who understand pilgrimage schedules.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=makkah-madinah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 450+)
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
