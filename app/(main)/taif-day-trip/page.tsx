import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, DollarSign, ArrowRight, Navigation, Mountain, Cloud, Flower2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RouteFleetSection from '@/components/RouteFleetSection';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Taif Day Trip Tour from Makkah & Jeddah | Cable Car & Rose Gardens | Taxi Service KSA',
    description: 'Book a private Taif day trip from Makkah or Jeddah. Round-trip transport with wait time for the Al Hada Cable Car, Rose Gardens, and mountain viewpoints. Fixed rates.',
    keywords: ['Taif day trip', 'Taif day trip from Makkah', 'Taif tour from Jeddah', 'Al Hada cable car tour', 'Taif rose gardens tour', 'private Taif tour'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/taif-day-trip/',
    },
    openGraph: {
        title: 'Taif Day Trip Tour | Cable Car, Rose Gardens & Mountain Views | Taxi Service KSA',
        description: 'A private round-trip day tour to Taif from Makkah or Jeddah, with wait time built in at each stop.',
        url: 'https://taxiserviceksa.com/taif-day-trip/',
        type: 'website',
    },
};

export default function TaifDayTripPage() {
    const tripDetails = [
        { label: 'From Makkah', value: '90 mins', icon: Navigation },
        { label: 'From Jeddah', value: '2-2.5 Hours', icon: Clock },
        { label: 'Trip Type', value: 'Round-Trip + Wait', icon: MapPin },
        { label: 'Climate', value: 'Cool Mountain Air', icon: Cloud },
    ];

    const itinerary = [
        {
            title: 'Al Hada Mountain Road',
            description: 'A scenic drive up the winding Kara mountain highway, with viewpoints overlooking the escarpment toward Makkah.',
        },
        {
            title: 'Al Hada Cable Car (Telefric)',
            description: 'Ride the cable car between the mountain top and Al Kar Tourist Village, one of Taif’s best-known attractions.',
        },
        {
            title: 'Rose Gardens & Distilleries',
            description: 'Visit a traditional Taif rose factory to see rose water and oil production, especially rewarding during the spring harvest.',
        },
        {
            title: 'Fruit Markets & Souq Okaz',
            description: 'Stop at roadside fruit stalls for seasonal figs, pomegranates and grapes, with time to browse Taif’s historic souq.',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Taif Day Trip"
                description="Private round-trip day tour to Taif from Makkah or Jeddah, including the Al Hada cable car, rose gardens, and mountain viewpoints, with driver wait time at each stop."
                services={[
                    { name: 'Taif Day Trip from Makkah', description: 'Round-trip private tour with wait time at each stop.' },
                    { name: 'Taif Day Trip from Jeddah', description: 'Full-day mountain tour with an experienced local driver.' },
                    { name: 'Cable Car & Rose Garden Tour', description: 'Guided stops at Al Hada Cable Car and rose distilleries.' },
                    { name: 'Family SUV Tours', description: 'Spacious vehicles for families touring the mountains together.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-2.webp"
            />

            <Hero
                images={['/hero-slide-2.webp', '/hero-slide-3.webp', '/jeddah-airport.webp']}
                h1Text="Taif Day Trip Tour"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Private Round-Trip Tour
                    </span>
                }
                subtitle="Cable Car, Rose Gardens & Mountain Views in One Day"
                location="From Makkah or Jeddah | Wait Time Included"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Taif%20Day%20Trip">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taif Day Trip
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            {/* TL;DR */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        TL;DR: Taif Day Trip Facts
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>From Makkah:</strong> About 90 minutes each way, making Taif an easy day trip during an Umrah stay.</li>
                        <li><strong>From Jeddah:</strong> About 2-2.5 hours each way via the Al Hada mountain road.</li>
                        <li><strong>Included:</strong> Round-trip private car with the driver waiting at each stop — no need to arrange separate rides.</li>
                        <li><strong>Best For:</strong> Escaping the heat, cable car rides, rose gardens, and photos at the mountain viewpoints.</li>
                    </ul>
                </div>
            </section>

            {/* Trip Stats */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Day Trip Details</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Full Day in the Taif Mountains</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>Taif</strong> sits high above Makkah in the Sarawat mountains, offering cooler air, rose farms, and the famous <strong>Al Hada Cable Car</strong>. Our private day-trip service picks you up from your hotel, drives the scenic mountain route, and waits with you at each stop before returning you the same evening.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {tripDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-emerald-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Itinerary */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-8">
                            <Flower2 className="w-8 h-8 text-emerald-400" />
                            <h3 className="text-3xl font-bold">Suggested Day-Trip Itinerary</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {itinerary.map((stop, index) => (
                                <div key={index} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</div>
                                        <h4 className="font-bold text-lg">{stop.title}</h4>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{stop.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm mt-8 italic">
                            The exact stops and order can be adjusted to your group&apos;s preferences — let us know via WhatsApp what matters most to you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Mountain className="w-5 h-5 text-emerald-600" />
                        Related Taif Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/makkah-taif/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Makkah to Taif Taxi
                        </Link>
                        <Link href="/routes/jeddah-taif/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Jeddah to Taif Taxi
                        </Link>
                        <Link href="/locations/taif/al-hada/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Al Hada Cable Car &amp; Resorts
                        </Link>
                        <Link href="/routes/jeddah-to-shaza-al-hada-taif/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Shaza Al Hada Transfer
                        </Link>
                    </div>
                </div>
            </div>

            <RouteFleetSection />

            <MicroSemanticFAQ
                contextName="Taif Day Trip"
                faqs={[
                    {
                        question: 'How much does a Taif day trip from Makkah cost?',
                        shortAnswer: 'WhatsApp Booking',
                        detailedAnswer: 'Pricing depends on the vehicle and how long the driver waits at each stop. A standard sedan (Toyota Camry) or a VIP SUV (GMC Yukon) are both available. Contact us on WhatsApp with your preferred stops and group size for a fixed quote.',
                        perspectives: [],
                    },
                    {
                        question: 'Does the driver wait with us during the trip?',
                        shortAnswer: 'Yes, throughout the day',
                        detailedAnswer: 'Yes. Unlike a one-way transfer, this is a round-trip service where the driver waits for you at the cable car, rose gardens, and any other stops, then brings you back to your hotel the same day.',
                        perspectives: [],
                    },
                    {
                        question: 'Can we do a Taif day trip in one day from Jeddah?',
                        shortAnswer: 'Yes, it is a long but doable day',
                        detailedAnswer: 'Yes, though it makes for a longer day (around 5 hours of driving total). Many visitors prefer doing the Taif day trip from Makkah instead, since it is only about 90 minutes each way.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Taif Day Trip
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Escape the heat for a day of cable cars, rose gardens, and mountain views.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Taif%20Day%20Trip">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Taif" />
            </div>
        </div>
    );
}
