
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
    title: 'Madinah to Jeddah Taxi | Airport Transfer 450km - Fixed Price',
    description: 'Taxi from Madinah to Jeddah Airport (JED). 4-5 hour comfortable journey. Fixed rates from SAR 450. Door-to-door service 24/7. Book your ride now.',
    keywords: ['Madinah to Jeddah taxi', 'Madinah to Jeddah Airport', 'taxi fare Madinah Jeddah', 'Prince Mohammad Bin Abdulaziz to King Abdulaziz Airport', 'Umrah return taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/madinah-jeddah',
    },
    openGraph: {
        title: 'Madinah to Jeddah Taxi | Airport Transfer 450km - Fixed Price',
        description: 'Taxi from Madinah to Jeddah Airport (JED). 4-5 hour comfortable journey. Fixed rates from SAR 450. Book your ride now.',
        url: 'https://taxiserviceksa.com/routes/madinah-jeddah',
        type: 'website',
    },
};

export default function MadinahJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 450', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
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
            ideal: 'Families or groups with luggage'
        },
        {
            name: 'Toyota Hiace (Van)',
            passengers: '11 passengers',
            luggage: '16 large bags',
            price: 'SAR 650',
            ideal: 'Large Umrah groups'
        },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How long is the taxi ride from Madinah to Jeddah?",
            answer: "The journey takes approximately 4 to 5 hours depending on traffic and the number of rest stops you wish to take. The distance is about 450 kilometers along the fast and modern highway."
        },
        {
            question: "How much is a taxi from Madinah to Jeddah Airport?",
            answer: "Our fixed rates start from SAR 450 for a standard sedan. SUVs are available from SAR 700, and large vans for groups start from SAR 850. These are fixed prices with no hidden fees."
        },
        {
            question: "Can we stop for breaks during the recurring journey?",
            answer: "Yes, absolutely. Since it is a longer trip (450 km), we are happy to stop at designated rest areas for food, prayer, or restrooms. Common stops include SASCO rest houses."
        },
        {
            question: "Is it better to take a taxi or the train from Madinah to Jeddah?",
            answer: "The Haramain High Speed Train is faster (approx 2 hours) but requires transport to/from stations and follows a strict schedule. A private taxi offers door-to-door convenience, flexibility with departure times, and is often more economical for groups of 3 or more."
        },
        {
            question: "Do you pick up from hotels in Madinah?",
            answer: "Yes, we provide door-to-door service. We will pick you up directly from your hotel lobby in Madinah near the Prophet's Mosque or any other location in the city."
        },
        {
            question: "Is the road between Madinah and Jeddah safe?",
            answer: "Yes, the highway connecting the two holy cities is a modern, well-maintained multi-lane expressway. Our drivers are experienced professionals who drive this route daily."
        }
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Madinah to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
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
                h1Text="Taxi from Madinah to Jeddah: 450km Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah → Jeddah Route
                    </span>
                }
                subtitle="Hotel Pickup to Jeddah Airport Drop-off"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=madinah-jeddah">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Madinah to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comfortable return journey from the Prophet's City to Jeddah. Perfect for pilgrims catching their return flights or visiting Jeddah.
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
                            <h3 className="text-2xl font-bold">Haramain Train vs Private Taxi (Madinah-Jeddah)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Haramain High Speed Railway</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Ticket: SAR 125-250 per person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Travel time: ~2 hours (station to station)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Fixed schedule (runs approx every hour)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Luggage limits apply</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Door-to-Door)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Fixed rate: SAR 450 (per vehicle)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Total flexibility (depart anytime)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Unlimited luggage (SUV/Van)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Cheaper for groups of 4+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">Our Advice:</strong> For a group of 3 or more people, a taxi is often cheaper than buying individual train tickets, plus you get the convenience of being picked up from your hotel and dropped off exactly at your terminal or hotel.
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
                            Modern, air-conditioned vehicles perfect for the long drive.
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
                        <Link href="/routes/makkah-madinah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Makkah to Madinah</h3>
                            <p className="text-gray-600 text-sm">Similar distance (450km) between Holy Cities</p>
                        </Link>
                        <Link href="/locations/madinah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Madinah City Transport</h3>
                            <p className="text-gray-600 text-sm">Ziyarah and local transfers</p>
                        </Link>
                        <Link href="/routes/jeddah-makkah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah to Makkah</h3>
                            <p className="text-gray-600 text-sm">The most popular Umrah route</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Madinah to Jeddah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Reliable, comfortable, and fixed-price transfers for your return journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=madinah-jeddah">
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
