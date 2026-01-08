import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, ArrowRight, Navigation, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RecentTrips from '@/components/RecentTrips';

export const metadata: Metadata = {
    title: 'Taxi Jeddah Airport to Pullman ZamZam Makkah | Hotel Drop-Off',
    description: 'Direct taxi transfer from Jeddah Airport to Pullman ZamZam Makkah (Clock Tower). Fixed rates from SAR 250. 24/7 Service. Book Online.',
    keywords: ['Jeddah to Pullman ZamZam taxi', 'Pullman Makkah transfer', 'taxi Jeddah to Abraj Al Bait', 'Pullman ZamZam hotel taxi', 'Jeddah to Makkah transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/jeddah-to-pullman-makkah/',
    },
    openGraph: {
        title: 'Taxi Jeddah Airport to Pullman ZamZam Makkah',
        description: 'Reliable transfer from KAIA Airport to Pullman ZamZam Makkah. Door-to-door service.',
        url: 'https://taxiserviceksa.com/jeddah-to-pullman-makkah/',
        type: 'website',
    },
};

export default function JeddahToPullmanPage() {
    const routeDetails = [
        { label: 'Distance', value: '95 km', icon: Navigation },
        { label: 'Time to Lobby', value: '75-90 Mins', icon: Clock },
        { label: 'Price', value: 'SAR 250', icon: DollarSign },
        { label: 'Location', value: 'Abraj Al Bait', icon: MapPin },
    ];

    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/hyundai-staria.webp',
        '/hero-slide-3.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah Airport to Pullman ZamZam Makkah",
        "fromLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport (Jeddah)",
            "iataCode": "JED"
        },
        "toLocation": {
            "@type": "Hotel",
            "name": "Pullman ZamZam Makkah",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Abraj Al Bait Complex",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "price": "250",
        "priceCurrency": "SAR"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-pullman"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Jeddah Airport to Pullman ZamZam Taxi"
                title={
                    <span className="bg-blue-600/90 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Direct Hotel Transfer
                    </span>
                }
                subtitle="KAIA to Pullman ZamZam Makkah"
                location="Door-to-Door • Fixed Price"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Pullman%20ZamZam%20Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Reverse Silo Link */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4" />
                        <span>Available via our</span>
                        <Link href="/routes/jeddah-makkah/" className="text-primary font-bold hover:underline">
                            Jeddah to Makkah Taxi
                        </Link>
                    </div>
                </div>
            </div>

            {/* Route Details Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Pullman Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport to Pullman ZamZam Makkah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Arrive refreshed at the <strong>Pullman ZamZam Makkah</strong>. We offer reliable, fixed-price transfers from King Abdulaziz Airport directly to the hotel entrance in the <strong>Abraj Al Bait</strong> complex.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-blue-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Specific Hotel Context */}
                    <div className="bg-blue-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Pullman ZamZam Taxi Services</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-blue-400">Family Friendly:</strong> We offer Hyundai Staria and Hiace vans, perfect for larger families staying at Pullman ZamZam.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-blue-400">Abraj Al Bait Access:</strong> Our drivers are experienced with the complex tunnel system and know the direct route to the Pullman lobby.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-blue-400">Flight Monitoring:</strong> We track your arrivals at JED Airport to ensure your driver is ready when you land.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <Building2 className="w-10 h-10 text-blue-400" />
                                    <div>
                                        <div className="font-bold text-lg">Pullman ZamZam Makkah</div>
                                        <div className="text-sm text-gray-400">Clock Tower Complex</div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Check-in Time</span>
                                        <span className="font-mono text-white">4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Distance to Haram</span>
                                        <span className="font-mono text-white">Steps Away</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Vehicle Access</span>
                                        <span className="font-mono text-white">Tunnel Drop-off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avalanche Theory: Horizontal Linking */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        Other Popular Hotel Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/jeddah-to-swissotel-makkah/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-blue-500 hover:text-blue-700 transition-colors shadow-sm">
                            Taxi to Swissotel Makkah
                        </Link>
                        <Link href="/routes/jeddah-makkah/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-blue-500 hover:text-blue-700 transition-colors shadow-sm">
                            All Jeddah to Makkah Hotels
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RecentTrips />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi to Pullman ZamZam Makkah?",
                        shortAnswer: "SAR 250 Fixed Rate",
                        detailedAnswer: "Our fixed rate for a taxi from Jeddah Airport to Pullman ZamZam Makkah starts at SAR 250 for a sedan.",
                        perspectives: []
                    },
                    {
                        question: "Can the taxi enter the Clock Tower tunnels?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our vehicles are permitted to enter the Abraj Al Bait tunnels and drop you at the Pullman ZamZam entrance.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Ride to Pullman ZamZam
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Pullman%20ZamZam%20Makkah">
                            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 250)
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
