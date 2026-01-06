import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Makkah to Jeddah Taxi | Door-to-Door Transfer - Fixed Price SAR 200+',
    description: 'Book a taxi from Makkah to Jeddah (City or Airport) 24/7. Reliable door-to-door transfer in 60-90 minutes. Fixed rates starting from SAR 200. Professional drivers.',
    keywords: ['Makkah to Jeddah taxi', 'Makkah to Jeddah Airport taxi', 'taxi price Makkah to Jeddah', 'Makkah to King Abdulaziz Airport', 'Haramain train vs taxi makkah', 'private taxi makkah to jeddah'],
    alternates: {
        canonical: 'https://transferksa.com/routes/makkah-jeddah/',
    },
    openGraph: {
        title: 'Makkah to Jeddah: Why Private Taxis Beat the Train (Faster & Door-to-Door)',
        description: 'Book a taxi from Makkah to Jeddah (City or Airport) 24/7. Reliable door-to-door transfer in 60-90 minutes. Fixed rates starting from SAR 200.',
        url: 'https://transferksa.com/routes/makkah-jeddah/',
        type: 'website',
    },
};

export default function MakkahJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '80-100 km', icon: Navigation },
        { label: 'Travel Time', value: '60-90 minutes', icon: Clock },
        { label: 'Starting Price', value: 'SAR 200', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-4.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Makkah to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Makkah Hotels",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Jeddah (Airport or City)",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "85 km",
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-makkah-jeddah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Reliable Taxi from Makkah to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Jeddah Route
                    </span>
                }
                subtitle="From Your Hotel to Jeddah Airport or City"
                location="60-90 Minutes | Fixed Rate SAR 200+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=makkah-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
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

            {/* Strategic Internal Links Hub */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Destinations:</span>
                            <Link href="/locations/makkah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Makkah
                            </Link>
                            <Link href="/locations/jeddah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Jeddah City
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center md:justify-end gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Top Fleet:</span>
                            <Link href="/fleet/gmc-yukon/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> GMC Yukon
                            </Link>
                            <Link href="/fleet/toyota-hiace/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> Toyota HiAce
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Transfer Guide</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Makkah to Jeddah Contactless Pickup</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you are returning from Umrah or heading to Jeddah for business, book our <strong>Makkah to Jeddah taxi</strong> for a direct door-to-door service. We pick you up from your Makkah hotel and drive you straight to Jeddah Airport or any city location via the Expressway.
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

                    {/* Traveler Essentials - Entity Injection */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            Makkah to Jeddah Essentials
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Fastest Route</h4>
                                <p className="text-sm text-gray-600">
                                    We use the <strong>Makkah-Jeddah Expressway</strong> to ensure a smooth 60-90 minute journey, avoiding city traffic where possible.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Train vs Taxi</h4>
                                <p className="text-sm text-gray-600">
                                    The <strong>Haramain High-Speed Railway</strong> is fast but drops you at Al-Sulimaniyah Station, requiring another taxi. We provide direct hotel-to-airport service.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Terminal Expertise</h4>
                                <p className="text-sm text-gray-600">
                                    Our drivers know the exact drop-off lanes for <strong className="text-gray-900">Terminal 1 (New Airport)</strong> and the North Terminal for international departures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Local SEO Hierarchy: Neighborhood Coverage */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage Areas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" /> Makkah Pickup Zones
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    We provide 24/7 distinct pickup from all major Makkah neighborhoods, ensuring a prompt start to your journey.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Aziziyah', 'Jabal Omar', 'Abraj Al Bait (Clock Tower)', 'Al Naseem', 'Kudai', 'Ajyad', 'Al Awali', 'Misfalah'].map((zone) => (
                                        <span key={zone} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-700">
                                            {zone}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-emerald-600" /> Jeddah Drop-off Districts
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Beyond the airport, we deliver directly to your doorstep in any Jeddah district.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Al Hamra', 'Al Shati', 'Al Rawdah', 'Al Bawadi', 'Obhur', 'Al Balad', 'Al Safa', 'Prince Majed Rd'].map((zone) => (
                                        <span key={zone} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-700">
                                            {zone}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Plane className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Catching a Flight from Jeddah (JED)?</h3>
                        </div>
                        <p className="text-lg text-emerald-100 mb-8 max-w-3xl">
                            We recommend scheduling your pickup at least 4 hours before your flight. The drive usually takes 75 minutes, allowing for buffer time and airport security checks.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 p-6 rounded-xl">
                                <h4 className="font-bold mb-3">Service Benefits</h4>
                                <ul className="space-y-2 text-sm text-emerald-100">
                                    <li>• Luggage assistance from hotel lobby</li>
                                    <li>• Air-conditioned, late-model vehicles</li>
                                    <li>• Drivers who know the terminal locations</li>
                                    <li>• No wait times or price haggling</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl">
                                <h4 className="font-bold mb-3">Pricing Guarantee</h4>
                                <ul className="space-y-2 text-sm text-emerald-100">
                                    <li>• Fixed rates - No surge during Ramadan</li>
                                    <li>• All parking/toll fees included</li>
                                    <li>• Complimentary 30-min wait time</li>
                                    <li>• Free cancellation up to 12 hours</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-12">Makkah to Jeddah Vehicle Fares</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="text-lg font-bold mb-2">Economy Sedan</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 200</div>
                            <p className="text-sm text-gray-500">Camry / Sonata (4 Pax)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-primary">
                            <div className="text-lg font-bold mb-2">Luxury SUV</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 400</div>
                            <p className="text-sm text-gray-500">GMC Yukon / Tahoe (7 Pax)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="text-lg font-bold mb-2">Group Van</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 300</div>
                            <p className="text-sm text-gray-500">Hyundai Staria / H1 (7 Pax)</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-20">
                <RelatedLocations currentCity="Makkah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Makkah to Jeddah Airport?",
                        shortAnswer: "SAR 200 - 250",
                        detailedAnswer: "A standard sedan taxi from Makkah to King Abdulaziz International Airport (Jeddah) costs SAR 200-250. Larger vehicles like the GMC Yukon for families cost SAR 400.",
                        perspectives: []
                    },
                    {
                        question: "What is the travel time from Makkah to Jeddah?",
                        shortAnswer: "75 Minutes",
                        detailedAnswer: "The distance is roughly 85km. In normal traffic, it takes about 1 hour and 15 minutes. During peak prayer times or Ramadan, we recommend allowing 2 hours.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a taxi for Makkah to Jeddah at 3 AM?",
                        shortAnswer: "Yes, 24/7",
                        detailedAnswer: "Our service is available 24 hours a day. We specialize in early morning and late night transfers for flight departures.",
                        perspectives: []
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Your Return Transfer</h2>
                    <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto">
                        <Link href="/booking/?route=makkah-jeddah">Book Makkah to Jeddah Now</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

