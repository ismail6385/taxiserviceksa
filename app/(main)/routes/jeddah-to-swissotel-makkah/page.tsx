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
    title: 'Taxi Jeddah Airport to Swissotel Makkah | Hotel Drop-Off',
    description: 'Book private taxi from Jeddah Airport (KAIA) to Swissotel Makkah (Clock Tower). Door-to-door drop-off at Abraj Al Bait tunnel. Affordable fixed prices. 24/7 Service.',
    keywords: ['Jeddah airport to Swissotel Makkah taxi', 'Swissotel Makkah transfer', 'taxi Jeddah to Clock Tower', 'Abraj Al Bait taxi drop off', 'Jeddah to Makkah taxi fare'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/jeddah-to-swissotel-makkah/',
    },
    openGraph: {
        title: 'Taxi Jeddah Airport to Swissotel Makkah | Fixed Price Transfer',
        description: 'Direct transfer from KAIA Airport to Swissotel Makkah (Clock Tower). VIP drop-off service.',
        url: 'https://taxiserviceksa.com/jeddah-to-swissotel-makkah/',
        type: 'website',
    },
};

export default function JeddahToSwissotelPage() {
    const routeDetails = [
        { label: 'Hotel Distance', value: '95 km', icon: Navigation },
        { label: 'Time to Lobby', value: '75-90 Mins', icon: Clock },
        { label: 'Price', value: 'Affordable', icon: DollarSign },
        { label: 'Drop-Off', value: 'Tunnel/Lobby', icon: MapPin },
    ];

    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/gmc-yukon.webp',
        '/hero-slide-3.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah Airport to Swissotel Makkah",
        "fromLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport (Jeddah)",
            "iataCode": "JED"
        },
        "toLocation": {
            "@type": "Hotel",
            "name": "Swissotel Makkah",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Abdul Aziz Endowment, Abraj Al Bait Complex",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-swissotel"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Jeddah Airport to Swissotel Makkah Taxi"
                title={
                    <span className="bg-emerald-600/90 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Hotel Transfer Specialist
                    </span>
                }
                subtitle="Direct Transfer to Abraj Al Bait Complex"
                location="KAIA (JED) ➔ Swissotel Makkah Lobby"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Swissotel%20Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Swissotel Transfer
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

            {/* Reverse Silo Link - Linking UP to Main Route Page */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4" />
                        <span>Part of our</span>
                        <Link href="/routes/jeddah-makkah/" className="text-primary font-bold hover:underline">
                            Jeddah to Makkah Taxi
                        </Link>
                        <span>network</span>
                    </div>
                </div>
            </div>

            {/* AI SEO: Early Definition & Summary, Scannable Format */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        TL;DR: Jeddah Airport to Swissotel Transfer Facts
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>Distance & Time:</strong> 95 kilometers. The drive takes 75 to 90 minutes from JED Airport.</li>
                        <li><strong>Drop-off Point:</strong> Direct to the Swissotel Makkah reception lobby via the exclusive Abraj Al Bait tunnel.</li>
                        <li><strong>Vehicle Types:</strong> Sedans (Toyota Camry) and VIP SUVs (GMC Yukon) accommodating up to 7 passengers and heavy luggage.</li>
                        <li><strong>Pricing:</strong> Affordable, fixed rates with no hidden surge fees. Bookings include meet-and-greet at the airport arrivals terminal.</li>
                    </ul>
                </div>
            </section>

            {/* Route Details Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Hotel Transfer Info</span>
                        {/* AI SEO: Clear H2 and Entity Definition */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport (JED) to Swissotel Makkah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>Swissotel Makkah</strong> is a premium luxury hotel located within the iconic <strong>Abraj Al Bait Complex (Clock Tower)</strong> in Makkah, Saudi Arabia, adjacent to the Holy Haram. Our private taxi service specializes in direct transfers from <strong>King Abdulaziz International Airport (KAIA)</strong> right to the hotel. Our experienced drivers have permits to access the specific <strong>Swissotel tunnel entrance</strong>, dropping you directly at the lobby level so you do not have to walk vast distances with your luggage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-emerald-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Specific Hotel Context */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Why Request a quote for a Private Taxi to Swissotel?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Exact Drop-Off:</strong> Swissotel is located in the Clock Tower. The drop-off is inside the tunnel. Train stations are 3km away. A specific <strong>Swissotel Makkah taxi transfer</strong> saves you this walk.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Luggage Handling:</strong> Porters at the Swissotel entrance will handle your bags directly from our trunk.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Zero Waiting:</strong> We track your flight at KAIA North Terminal or Terminal 1. Your car is ready when you land.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <Building2 className="w-10 h-10 text-emerald-400" />
                                    <div>
                                        <div className="font-bold text-lg">Swissotel Makkah</div>
                                        <div className="text-sm text-gray-400">King Abdul Aziz Endowment</div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Check-in Time</span>
                                        <span className="font-mono text-white">4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Reception Floor</span>
                                        <span className="font-mono text-white">Lobby Level</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Haram Distance</span>
                                        <span className="font-mono text-white">0 mins (Direct Access)</span>
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
                        <Building2 className="w-5 h-5 text-emerald-600" />
                        Other Popular Hotel Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/jeddah-to-pullman-makkah/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Taxi to Pullman ZamZam Makkah
                        </Link>
                        <Link href="/routes/jeddah-makkah/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
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
                        question: "How much is a taxi from Jeddah Airport to Swissotel Makkah?",
                        shortAnswer: "Fixed Rates",
                        detailedAnswer: "A private sedan (like a Toyota Camry) from Jeddah Airport to Swissotel Makkah is offered at an affordable fixed rate. A VIP SUV (like a GMC Yukon) is also available for larger families or groups with extensive luggage. All prices are fixed, pre-agreed, and include the toll fees for the Abraj Al Bait tunnel drop-off.",
                        perspectives: []
                    },
                    {
                        question: "Does the taxi drop off at the Swissotel Makkah main entrance?",
                        shortAnswer: "Yes, Tunnel Entrance",
                        detailedAnswer: "Yes. Swissotel Makkah is uniquely positioned in the Clock Tower complex. Our drivers hold the necessary permits to bypass external traffic, enter the Abraj Al Bait tunnels, and drop you off exactly at the Swissotel Makkah lobby level. You will not have to drag luggage from the street.",
                        perspectives: []
                    },
                    {
                        question: "How long is the drive from Jeddah Airport (JED) to Swissotel Makkah?",
                        shortAnswer: "75-90 Minutes",
                        detailedAnswer: "The drive from King Abdulaziz International Airport (JED) to Swissotel Makkah covers 95 kilometers and takes approximately 75 to 90 minutes. This travel time depends on traffic congestion during peak Umrah hours and processing time at the Makkah entry checkpoints.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get a quote for your Swissotel Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Guarantee your ride from Jeddah Airport to the Clock Tower. No haggling, no waiting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Swissotel%20Makkah">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Get Quote
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
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



