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
    title: 'Taxi Jeddah Airport to Fairmont Makkah Clock Royal Tower | SAR 250',
    description: 'VIP Transfer from Jeddah Airport (KAIA) to Fairmont Makkah Clock Royal Tower. Direct lobby drop-off. Luxury GMC Yukon available. Fixed Price.',
    keywords: ['Jeddah to Fairmont Makkah Taxi', 'Fairmont Clock Tower Transfer', 'Jeddah airport to Abraj Al Bait', 'Makkah Clock Royal Tower taxi', 'VIP taxi Jeddah Makkah'],
    alternates: {
        canonical: 'https://transferksa.com/jeddah-to-fairmont-makkah/',
    },
    openGraph: {
        title: 'Taxi Jeddah Airport to Fairmont Makkah | VIP Transfer',
        description: 'Direct transfer to Fairmont Makkah Clock Royal Tower. 24/7 Service.',
        url: 'https://transferksa.com/jeddah-to-fairmont-makkah/',
        type: 'website',
    },
};

export default function JeddahToFairmontPage() {
    const routeDetails = [
        { label: 'Hotel Distance', value: '95 km', icon: Navigation },
        { label: 'Time to Lobby', value: '80-90 Mins', icon: Clock },
        { label: 'Price', value: 'SAR 250', icon: DollarSign },
        { label: 'Service', value: 'VIP/Concierge', icon: Star },
    ];

    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/gmc-yukon.webp',
        '/hero-slide-3.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah Airport to Fairmont Makkah",
        "fromLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport (Jeddah)",
            "iataCode": "JED"
        },
        "toLocation": {
            "@type": "Hotel",
            "name": "Makkah Clock Royal Tower, A Fairmont Hotel",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Abdul Aziz Endowment, Abraj Al Bait Complex",
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
                id="route-schema-fairmont"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Jeddah Airport to Fairmont Makkah Taxi"
                title={
                    <span className="bg-amber-600/90 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Clock Tower Royal Transfer
                    </span>
                }
                subtitle="Direct to Fairmont Makkah Lobby"
                location="KAIA (JED) ➔ Fairmont Makkah"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Fairmont%20Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Fairmont Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Reverse Silo Link */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4" />
                        <span>Featured in our</span>
                        <Link href="/routes/jeddah-makkah/" className="text-primary font-bold hover:underline">
                            Jeddah to Makkah Taxi
                        </Link>
                        <span>services</span>
                    </div>
                </div>
            </div>

            {/* Route Details Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-amber-100 text-amber-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Luxury Hotel Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport (JED) to Fairmont Makkah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience a seamless journey to the <strong>Makkah Clock Royal Tower</strong>. Our premium fleet (GMC Yukon) ensures a comfortable ride from the airport directly to the <strong>Fairmont Makkah</strong> main entrance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-amber-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-amber-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Specific Hotel Context */}
                    <div className="bg-amber-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Why Choose Our Fairmont Transfer?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-amber-400">Royal Entrance Access:</strong> Avoid the crowds. We drop you at the designated Fairmont hotel entrance within the Clock Tower complex.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-amber-400">VIP GMC Fleet:</strong> For Fairmont guests, we recommend our GMC Yukon XL for maximum comfort and luggage capacity.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-amber-400">24/7 Concierge Support:</strong> Flight delayed? Our team monitors your arrival time and adjusts pickup automatically.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <Building2 className="w-10 h-10 text-amber-400" />
                                    <div>
                                        <div className="font-bold text-lg">Fairmont Clock Royal Tower</div>
                                        <div className="text-sm text-gray-400">Abraj Al Bait Complex</div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Check-in Time</span>
                                        <span className="font-mono text-white">4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Location</span>
                                        <span className="font-mono text-white">Clock Tower</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Proximity to Haram</span>
                                        <span className="font-mono text-white">Direct Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RecentTrips />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is VIP taxi to Fairmont Makkah?",
                        shortAnswer: "From SAR 450 (GMC)",
                        detailedAnswer: "A luxury GMC Yukon XL transfer to the Fairmont Makkah costs SAR 450. Standard sedans (Camry) are available for SAR 250.",
                        perspectives: []
                    },
                    {
                        question: "How do I find my driver at Jeddah Airport?",
                        shortAnswer: "Meet & Greet Included",
                        detailedAnswer: "Our driver will be waiting in the arrival hall holding a sign with your name. We track your flight to ensure timely pickup.",
                        perspectives: []
                    },
                    {
                        question: "Does the taxi go directly to the Fairmont lobby?",
                        shortAnswer: "Yes, Door-to-Door",
                        detailedAnswer: "Yes, we drive directly to the Fairmont drop-off zone at the Abraj Al Bait complex, so you don't need to carry luggage long distances.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Start Your Umrah with Comfort
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your reliable transfer to the Fairmont Makkah Clock Royal Tower today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Fairmont%20Makkah">
                            <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Fairmont Taxi (SAR 250)
                            </Button>
                        </Link>
                        <a href="mailto:info@transferksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for VIP Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
