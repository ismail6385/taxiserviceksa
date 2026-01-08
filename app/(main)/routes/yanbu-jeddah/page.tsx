import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, ArrowRight, Plane } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Yanbu to Jeddah Taxi | Airport Transfer - Fixed Price SAR 550',
    description: 'Book a taxi from Yanbu to Jeddah Airport (JED) or Jeddah City. 3.5 hour journey via Route 5. Fixed rates from SAR 550. 24/7 Service.',
    keywords: ['Yanbu to Jeddah taxi', 'taxi from Yanbu to Jeddah Airport', 'Yanbu to Jeddah taxi fare', 'Yanbu industrial city to Jeddah', 'transfer Yanbu Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/yanbu-jeddah/',
    },
    openGraph: {
        title: 'Yanbu to Jeddah Taxi (Airport Transfer) - Experienced Drivers',
        description: 'Need a ride from Yanbu (Royal Commission/Industrial) to Jeddah? Book our private taxi. Fixed price SAR 550. 24/7 Pickup.',
        url: 'https://taxiserviceksa.com/routes/yanbu-jeddah/',
        type: 'website',
    },
};

export default function YanbuToJeddahPage() {
    const routeDetails = [
        { label: 'Distance', value: '330 km', icon: MapPin },
        { label: 'Travel Time', value: '3.5 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 550', icon: DollarSign },
        { label: 'Route', value: 'Coastal Hwy 5', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-3.webp',
        '/taif-mountain-road.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Yanbu to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Yanbu",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yanbu",
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
        "distance": "330 km",
        "instrument": {
            "@type": "Taxi",
            "name": "Private Taxi",
            "image": "https://taxiserviceksa.com/fleet/camry-2024.webp"
        },
        "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "550",
            "priceCurrency": "SAR"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-yanbu-jeddah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Yanbu to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Yanbu → Jeddah Route
                    </span>
                }
                subtitle="From Royal Commission / Industrial City to Jeddah Airport"
                location="3.5 Hours | Fixed Rate SAR 550+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Yanbu to Jeddah
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Intercity Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Yanbu to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide reliable, long-distance taxi service from <strong>Yanbu</strong> (including Royal Commission, Industrial City, and Radwa) to <strong>Jeddah Airport (KAIA)</strong>. Our experienced drivers ensure a smooth 3.5-hour journey along the Red Sea coast (Route 5).
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
                                <h4 className="font-bold text-gray-900 mb-2">Coastal Route</h4>
                                <p className="text-sm text-gray-600">
                                    The drive follows <strong>Highway 5 (Coastal Road)</strong> past KAEC and Rabigh. It is a straight, well-maintained highway perfect for a comfortable nap.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Business Travel</h4>
                                <p className="text-sm text-gray-600">
                                    We specialize in corporate transfers from Yanbu Industrial City (RCBY) to Jeddah. Invoices available for company reimbursement.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Rest Stops</h4>
                                <p className="text-sm text-gray-600">
                                    Need a coffee break? We can stop at SASCO stations near Rabigh or Tuwal at your convenience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Yanbu to Jeddah Fares</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">Sedan (Camry)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 550</div>
                                <p className="text-xs text-gray-500">Up to 4 Passengers</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">SUV (GMC Yukon)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 850</div>
                                <p className="text-xs text-gray-500">7 Passengers + Luggage</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                <div className="text-lg font-bold mb-2">Family Van (Hiace)</div>
                                <div className="text-3xl font-black text-primary mb-2">SAR 700</div>
                                <p className="text-xs text-gray-500">Groups / Heavy Luggage</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-10">
                <RelatedLocations currentCity="Yanbu" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Yanbu to Jeddah?",
                        shortAnswer: "3.5 Hours",
                        detailedAnswer: "The distance is approximately 330 km. The drive usually takes 3.5 hours via the Coastal Highway (Route 5).",
                        perspectives: []
                    },
                    {
                        question: "How much is a taxi from Yanbu to Jeddah Airport?",
                        shortAnswer: "From SAR 550",
                        detailedAnswer: "Private taxi fares start at SAR 550 for a sedan and SAR 850 for a GMC Yukon. Pricing is fixed for any location in Yanbu (Royal Commission or Downtown).",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
