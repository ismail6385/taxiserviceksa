import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, ArrowRight, Plane } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Taif to Jeddah Taxi | Airport Transfer - Fixed Price SAR 350',
    description: 'Book a taxi from Taif to Jeddah Airport (JED) or Jeddah City. 2.5 hour journey via Al Hada Mountain Road. Fixed rates from SAR 350. 24/7 service.',
    keywords: ['Taif to Jeddah taxi', 'taxi from Taif to Jeddah Airport', 'Taif to Jeddah taxi price', 'Al Hada road taxi', 'Taif to Jeddah cab'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/taif-jeddah/',
    },
    openGraph: {
        title: 'Taif to Jeddah Taxi (Airport Transfer) - Reliable & Affordable',
        description: 'Need a ride from Taif to Jeddah? Book our private taxi via Al Hada. Fixed price SAR 350. Door-to-door pickup.',
        url: 'https://taxiserviceksa.com/routes/taif-jeddah/',
        type: 'website',
    },
};

export default function TaifToJeddahPage() {
    const routeDetails = [
        { label: 'Distance', value: '170 km', icon: MapPin },
        { label: 'Travel Time', value: '2.5 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 350', icon: DollarSign },
        { label: 'Route', value: 'Al Hada Mtn', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/taif-mountain-road.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-4.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Taif to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Taif",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Taif",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Jeddah (KAIA Airport)",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "170 km",
        "instrument": {
            "@type": "Taxi",
            "name": "Private Taxi",
            "image": "https://taxiserviceksa.com/fleet/camry-2024.webp"
        },
        "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "350",
            "priceCurrency": "SAR"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-taif-jeddah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Taif to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taif → Jeddah Route
                    </span>
                }
                subtitle="Door-to-Door Transfer to Jeddah Airport (KAIA)"
                location="2.5 Hours | Fixed Rate SAR 350+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taif to Jeddah
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Comfortable Return</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Taif to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Returning from the City of Roses? Our <strong>Taif to Jeddah taxi</strong> service takes you through the scenic <strong>Al Hada Mountain Road</strong> directly to King Abdulaziz International Airport (JED) or your Jeddah home. Enjoy a safe descent with our experienced drivers.
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
                            Traveler Essentials
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Mountain Route</h4>
                                <p className="text-sm text-gray-600">
                                    We primarily use the scenic <strong>Al Hada Road</strong> (Kara) which is shorter and faster. If closed due to rain/fog, we use the alternate Al Sail Road.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Fruit Market Stops</h4>
                                <p className="text-sm text-gray-600">
                                    Want to buy Taif roses, pomegranates, or figs on the way back? Just ask the driver to stop at the Al Hada fruit stalls.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Airport Drop-off</h4>
                                <p className="text-sm text-gray-600">
                                    We drop you directly at the departures level of Terminals 1 (Saudia/Flynas) or North Terminal (Foreign Airlines).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Taif to Jeddah Fares</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">Sedan (Camry)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 350</div>
                                <p className="text-xs text-gray-500">Up to 4 Passengers</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">SUV (GMC Yukon)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 500</div>
                                <p className="text-xs text-gray-500">7 Passengers + Luggage</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">Family Van (H1)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 450</div>
                                <p className="text-xs text-gray-500">7-9 Passengers</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-10">
                <RelatedLocations currentCity="Taif" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Taif to Jeddah?",
                        shortAnswer: "2 - 2.5 Hours",
                        detailedAnswer: "The drive from Taif to Jeddah via Al Hada Mountain takes about 2 to 2.5 hours (170 km). If traveling during rain or fog, we may take the Al Sail Road which adds 45 minutes.",
                        perspectives: []
                    },
                    {
                        question: "How much is a taxi from Taif to Jeddah Airport?",
                        shortAnswer: "From SAR 350",
                        detailedAnswer: "A standard sedan from Taif to Jeddah Airport starts at SAR 350. Larger SUVs for families start at SAR 500. Prices are fixed and include fuel/tolls.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
