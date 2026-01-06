import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Train, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah Train Station Taxi | Al Sulimaniyah to Airport/Hotel Transfer',
    description: 'Book a taxi from Jeddah Haramain Train Station (Al Sulimaniyah). Fixed prices to King Abdulaziz Airport (JED) or Jeddah hotels. Avoid long queues. 24/7 Service.',
    keywords: ['Jeddah train station taxi', 'Al Sulimaniyah station taxi', 'Haramain train station Jeddah to airport', 'taxi from Jeddah train station', 'Jeddah railway station transfer'],
    alternates: {
        canonical: 'https://transferksa.com/routes/jeddah-train-station-taxi/',
    },
    openGraph: {
        title: 'Jeddah Train Station Taxi (Al Sulimaniyah) - Fast & Reliable',
        description: 'Arriving by Haramain Train? Book your taxi from Jeddah Station to Airport or Hotel. Fixed prices, no waiting.',
        url: 'https://transferksa.com/routes/jeddah-train-station-taxi/',
        type: 'website',
    },
};

export default function JeddahTrainStationPage() {
    const routeDetails = [
        { label: 'Pickup Point', value: 'Al Sulimaniyah Station', icon: MapPin },
        { label: 'To Airport', value: '25-30 Minutes', icon: Clock },
        { label: 'Starting Price', value: 'SAR 100', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-4.webp',
        '/makkah-clock-tower.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Jeddah Train Station Taxi Service",
        "description": "Professional taxi transfer from Jeddah Haramain Railway Station (Al Sulimaniyah) to Jeddah Airport and Hotels.",
        "provider": {
            "@type": "TransportationService",
            "name": "VIP Transfer KSA",
            "image": "https://transferksa.com/logo.png",
            "telephone": "+966500000000",
            "priceRange": "$$"
        },
        "areaServed": "Jeddah",
        "availableLanguage": ["English", "Arabic", "Urdu"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jeddah-station"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah Train Station Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Al Sulimaniyah Station Transfer
                    </span>
                }
                subtitle="From Haramain Train Station to KAIA Airport or Hotels"
                location="25-30 Minutes | Fixed Rate SAR 100+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Station Pickup
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Last Mile Connectivity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Station to Airport & City</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Arriving at <strong>Al Sulimaniyah Haramain Station</strong>? Skip the confusion of hailing a street taxi. We provide pre-booked, fixed-price transfers directly from the station arrivals to <strong>King Abdulaziz International Airport (KAIA)</strong> or your Jeddah hotel.
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

                    {/* Traveler Essentials */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            Station Pickup Guide
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Meeting Point</h4>
                                <p className="text-sm text-gray-600">
                                    Our drivers wait at the <strong>Arrivals Hall Exit</strong> holding a sign with your name. Al Sulimaniyah is a large station, so pre-booking ensures you find your ride instantly.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Transfer to Airport</h4>
                                <p className="text-sm text-gray-600">
                                    Connecting to a flight? The drive from the Train Station to Jeddah Airport (KAIA) takes about <strong>25-30 minutes</strong> depending on traffic.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Luggage Help</h4>
                                <p className="text-sm text-gray-600">
                                    Train passengers often have heavy luggage. Our drivers assist with loading your bags into our spacious vehicles (GMC Yukon available).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Jeddah Station Transfer Rates</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Jeddah Airport</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 100</div>
                                <p className="text-xs text-gray-500">Economy Sedan</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Jeddah Hotels</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 120</div>
                                <p className="text-xs text-gray-500">City Center / Al Hamra</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Obhur / North</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 150</div>
                                <p className="text-xs text-gray-500">North Jeddah / Resorts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-10">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Jeddah Train Station from the Airport?",
                        shortAnswer: "18 km (25 mins)",
                        detailedAnswer: "The Al Sulimaniyah Haramain Station is approximately 18 km from King Abdulaziz International Airport (KAIA). The taxi journey takes about 25-30 minutes in normal traffic.",
                        perspectives: []
                    },
                    {
                        question: "Are there taxis available at Jeddah Train Station?",
                        shortAnswer: "Yes, but pre-booking recommended",
                        detailedAnswer: "While there are public taxis, queues can be long when a train arrives. Pre-booking a private transfer ensures a driver is waiting for you immediately upon arrival.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
