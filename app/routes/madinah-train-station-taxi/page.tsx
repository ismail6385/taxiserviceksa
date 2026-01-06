import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Train, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Madinah Train Station Taxi | Haramain Station to Hotel Transfer',
    description: 'Book a taxi from Madinah Haramain Train Station to your hotel (Markaziyah / Central Area). Fixed price SAR 50-80. Reliable pickup for train arrivals.',
    keywords: ['Madinah train station taxi', 'Haramain station Madinah to hotel', 'taxi from Madinah railway station to prophet mosque', 'Madinah station transfer'],
    alternates: {
        canonical: 'https://transferksa.com/routes/madinah-train-station-taxi/',
    },
    openGraph: {
        title: 'Madinah Train Station Taxi to Hotel (Markaziyah) - Fixed Price',
        description: 'Arriving in Madinah by train? Get a direct taxi transfer from the station to your hotel near Masjid Nabawi.',
        url: 'https://transferksa.com/routes/madinah-train-station-taxi/',
        type: 'website',
    },
};

export default function MadinahTrainStationPage() {
    const routeDetails = [
        { label: 'Pickup Point', value: 'Madinah Haramain Station', icon: MapPin },
        { label: 'To Haram', value: '15-20 Minutes', icon: Clock },
        { label: 'Starting Price', value: 'SAR 50', icon: DollarSign },
        { label: 'Availability', value: 'Train Schedule', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/hero-slide-3.webp',
        '/makkah-clock-tower.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Madinah Train Station Taxi Service",
        "description": "Taxi transfer from Madinah Haramain Railway Station to Hotels in Central Area (Markaziyah).",
        "provider": {
            "@type": "TransportationService",
            "name": "VIP Transfer KSA",
            "image": "https://transferksa.com/logo.png",
            "telephone": "+966500000000",
            "priceRange": "$"
        },
        "areaServed": "Madinah",
        "availableLanguage": ["English", "Arabic", "Urdu"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-madinah-station"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Madinah Train Station Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Haramain Station Transfer
                    </span>
                }
                subtitle="From Train Station to Your Hotel (Markaziyah)"
                location="15-20 Minutes | Fixed Rate SAR 50+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Hotel Transfer
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Station to Hotel</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Madinah Station to Masjid Nabawi</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The <strong>Madinah Haramain Station</strong> is located about 9-10 km from the Prophet's Mosque. Our <strong>Madinah station taxi service</strong> ensures a quick, hassle-free transfer directly to your hotel lobby in the Central Area (Markaziyah).
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
                            Madinah Arrival Guide
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Distance to Haram</h4>
                                <p className="text-sm text-gray-600">
                                    The station is located on King Abdulaziz Road, approximately <strong>9 to 10 kilometers</strong> from Al Masjid An Nabawi.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Hotel Zones</h4>
                                <p className="text-sm text-gray-600">
                                    We cover all zones: <strong>Markaziyah North, South, East, and West</strong>. Just provide your hotel name, and we will drop you at the entrance.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Ziyarat Add-on</h4>
                                <p className="text-sm text-gray-600">
                                    Want to visit Quba Mosque or Mount Uhud right after arrival? You can upgrade your transfer to include a Ziyarat tour.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Madinah Station Transfer Fares</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Markaziyah (Central)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 50</div>
                                <p className="text-xs text-gray-500">Economy Sedan</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Markaziyah (SUV)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 80</div>
                                <p className="text-xs text-gray-500">GMC / Family Car</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">To Madinah Airport</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 80</div>
                                <p className="text-xs text-gray-500">Station to Airport Transfer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-10">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Madinah Train Station from the Prophet's Mosque?",
                        shortAnswer: "10 km (15 mins)",
                        detailedAnswer: "The Haramain Station is about 9-10 km from the Prophet's Mosque (Al Masjid An Nabawi). It takes 15-20 minutes by taxi.",
                        perspectives: []
                    },
                    {
                        question: "Is there a shuttle bus from Madinah station to Haram?",
                        shortAnswer: "Yes, SAPTCO",
                        detailedAnswer: "Yes, SAPTCO buses are available, but they run on a set schedule and drop off at general points. A private taxi takes you directly to your hotel reception.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
