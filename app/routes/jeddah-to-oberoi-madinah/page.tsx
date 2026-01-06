import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Oberoi Madinah Taxi | VIP Transfer - Fixed Price',
    description: 'Book a VIP luxury taxi from Jeddah Airport to The Oberoi Madinah Hotel. Door-to-door first-class service for executive guests. 24/7 Availability.',
    keywords: ['Jeddah to Oberoi Madinah taxi', 'Jeddah airport to The Oberoi Hotel Madinah', 'VIP transfer Madinah Oberoi', 'luxury taxi Jeddah to Madinah', 'Oberoi Madinah transport'],
    alternates: {
        canonical: 'https://transferksa.com/routes/jeddah-to-oberoi-madinah/',
    },
    openGraph: {
        title: 'VIP Transfer: Jeddah Airport to The Oberoi Madinah',
        description: 'First-class private transfer to The Oberoi Madinah. GMC Yukon & luxury options available. Direct drop-off at hotel entrance.',
        url: 'https://transferksa.com/routes/jeddah-to-oberoi-madinah/',
        type: 'website',
    },
};

export default function JeddahToOberoiMadinahPage() {
    const routeDetails = [
        { label: 'Destination', value: 'The Oberoi', icon: Building2 },
        { label: 'Travel Time', value: '4 Hours', icon: Clock },
        { label: 'VIP Service', value: 'GMC Yukon', icon: Car },
        { label: 'Rate', value: 'Fixed Price', icon: DollarSign },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/hero-slide-3.webp',
        '/makkah-clock-tower.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Jeddah to Oberoi Madinah Taxi",
        "description": "Luxury VIP transfer from Jeddah King Abdulaziz Airport to The Oberoi Hotel Madinah.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VIP Transfer KSA",
            "image": "https://transferksa.com/logo.png",
            "telephone": "+966500000000",
            "priceRange": "$$$$"
        },
        "areaServed": "Madinah",
        "availableLanguage": ["English", "Arabic", "Urdu"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-oberoi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah to The Oberoi Madinah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Hotel Transfer
                    </span>
                }
                subtitle="First Class Transfer from Jeddah to The Oberoi Hotel"
                location="Luxury GMC Yukon | Direct Hotel Drop-off"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Ride
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
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">5-Star Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Arrival at The Oberoi Madinah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>The Oberoi Madinah</strong> is the most exclusive address in the Holy City, located directly adjacent to the Prophet's Mosque. Our drivers are trained to provide a discreet, smooth, and professional arrival experience befitting Oberoi guests.
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
                            Premium Transfer Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Gate Access</h4>
                                <p className="text-sm text-gray-600">
                                    The Oberoi has a secured entrance. Our drivers know the exact protocol for dropping you off right at the main lobby steps for luggage service.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Luxury Fleet</h4>
                                <p className="text-sm text-gray-600">
                                    We recommend our <strong>GMC Yukon</strong> or <strong>Chevy Tahoe</strong> for this route—spacious, quiet, and perfectly suited for a 4-hour desert highway drive.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Airport Meet & Greet</h4>
                                <p className="text-sm text-gray-600">
                                    Your driver will be waiting inside the Jeddah Airport arrivals hall with a name board, ready to assist with your luggage immediately.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Linking (Avalanche Theory) */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Elsewhere in Madinah?</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/routes/jeddah-to-hilton-madinah/" className="text-primary hover:underline font-medium">To Madinah Hilton</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/routes/jeddah-to-dar-al-taqwa-madinah/" className="text-primary hover:underline font-medium">To Dar Al Taqwa</Link>
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
                        question: "How much is a taxi from Jeddah Airport to Oberoi Madinah?",
                        shortAnswer: "Fixed Rate",
                        detailedAnswer: "We offer fixed rates for Jeddah to Oberoi Madinah transfers. A standard sedan starts from SAR 450, while a luxury GMC Yukon is SAR 850. Prices are all-inclusive.",
                        perspectives: []
                    },
                    {
                        question: "How far is The Oberoi from the Prophet's Mosque?",
                        shortAnswer: "0 Steps",
                        detailedAnswer: "The Oberoi Madinah is located directly facing the Prophet's Mosque (Masjid Nabawi). It is literally steps away from the Women's Gate (Gate 25).",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
