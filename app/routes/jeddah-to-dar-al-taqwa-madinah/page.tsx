import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Dar Al Taqwa Madinah Taxi | Luxury Hotel Transfer',
    description: 'Book a luxury taxi from Jeddah Airport (JED) to Dar Al Taqwa Hotel Madinah. Professional drivers, fixed rates, and VIP service to the Haram doorstep.',
    keywords: ['Jeddah to Dar Al Taqwa Madinah taxi', 'Jeddah airport to Dar Al Taqwa hotel', 'Dar Al Taqwa transfer', 'luxury transport Jeddah Madinah', 'Madinah hotel pickup'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-dar-al-taqwa-madinah/',
    },
    openGraph: {
        title: 'Jeddah to Dar Al Taqwa Madinah - VIP Hotel Transfer',
        description: 'Private, comfortable transfer from Jeddah Airport to Dar Al Taqwa Hotel. Located at the Main Gate of the Prophet Mosque.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-dar-al-taqwa-madinah/',
        type: 'website',
    },
};

export default function JeddahToDarAlTaqwaMadinahPage() {
    const routeDetails = [
        { label: 'Destination', value: 'Dar Al Taqwa', icon: Building2 },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Proximity', value: 'Main Gate', icon: MapPin },
        { label: 'Rate', value: 'Fixed Price', icon: DollarSign },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/hero-slide-3.webp',
        '/jeddah-corniche-sunset.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Jeddah to Dar Al Taqwa Madinah Taxi",
        "description": "Luxury private taxi transfer from Jeddah King Abdulaziz Airport to Dar Al Taqwa Hotel Madinah.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VIP Transfer KSA",
            "image": "https://taxiserviceksa.com/logo.png",
            "telephone": "+966500000000",
            "priceRange": "$$$"
        },
        "areaServed": "Madinah",
        "availableLanguage": ["English", "Arabic", "Urdu"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-dar-al-taqwa"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah to Dar Al Taqwa"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Luxury Hotel Transfer
                    </span>
                }
                subtitle="Direct Ride to Dar Al Taqwa Hotel (Main Gate)"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Hotel Transfer
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Direct to Haram</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Arrival at Dar Al Taqwa Hotel</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>Dar Al Taqwa</strong> offers one of the best locations in Madinah, situated right at the main entrance of the Prophet's Mosque. Our drivers are familiar with the specific drop-off zone for this hotel to ensure your luggage is handled smoothly by the bell desk.
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
                            Why Book With Us?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Prime Location Access</h4>
                                <p className="text-sm text-gray-600">
                                    Accessing hotels near the main gate can be tricky during prayer times. Our drivers know the best routes and timing to get you as close as possible.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Luxury Vehicles</h4>
                                <p className="text-sm text-gray-600">
                                    Match your stay at a 5-star hotel with a 5-star ride. Upgrade to our GMC Yukon for maximum comfort and legroom during the 400km trip.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Flight Tracking</h4>
                                <p className="text-sm text-gray-600">
                                    We track your flight arrival at JED Airport. Even if you are delayed, your driver will be waiting for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Linking (Avalanche Theory) */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Elsewhere in Madinah?</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/routes/jeddah-to-oberoi-madinah/" className="text-primary hover:underline font-medium">To The Oberoi</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/routes/jeddah-to-hilton-madinah/" className="text-primary hover:underline font-medium">To Madinah Hilton</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/routes/jeddah-madinah/" className="text-primary hover:underline font-medium">General Madinah Transfer</Link>
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
                        question: "How long does it take to get from Jeddah Airport to Dar Al Taqwa?",
                        shortAnswer: "4 - 4.5 Hours",
                        detailedAnswer: "The journey takes approximately 4 to 4.5 hours depending on traffic exiting Jeddah. Once on the highway, it is a smooth, direct drive to Madinah.",
                        perspectives: []
                    },
                    {
                        question: "Does Dar Al Taqwa have a drop-off zone?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there is a drop-off point for guests. However, during peak prayer times (Salah), roads may be closed by traffic police. We aim to arrive between prayers for doorstep service.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
