import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Madinah Hilton Taxi | Hotel Transfer - Fixed Price',
    description: 'Book a taxi from Jeddah Airport (JED) to Madinah Hilton Hotel. 4-5 hour journey. Fixed rates from SAR 450. Door-to-door service near King Fahd Gate.',
    keywords: ['Jeddah to Madinah Hilton taxi', 'taxi Jeddah airport to Hilton Madinah', 'Madinah Hilton transfer', 'transport Jeddah to Madinah Hilton', 'Madinah hotel taxi'],
    alternates: {
        canonical: 'https://transferksa.com/routes/jeddah-to-hilton-madinah/',
    },
    openGraph: {
        title: 'Jeddah to Madinah Hilton Hotel Transfer - Trusted Service',
        description: 'Direct private taxi from Jeddah Airport to Madinah Hilton. Located steps from King Fahd Gate. Book your ride now.',
        url: 'https://transferksa.com/routes/jeddah-to-hilton-madinah/',
        type: 'website',
    },
};

export default function JeddahToHiltonMadinahPage() {
    const routeDetails = [
        { label: 'Destination', value: 'Madinah Hilton', icon: Building2 },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Location', value: 'King Fahd Gate', icon: MapPin },
        { label: 'Rate', value: 'Fixed Price', icon: DollarSign },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/hero-slide-4.webp',
        '/makkah-clock-tower.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Jeddah to Madinah Hilton Taxi",
        "description": "Private taxi transfer from Jeddah King Abdulaziz Airport to Madinah Hilton Hotel.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VIP Transfer KSA",
            "image": "https://transferksa.com/logo.png",
            "telephone": "+966500000000",
            "priceRange": "$$"
        },
        "areaServed": "Madinah",
        "availableLanguage": ["English", "Arabic", "Urdu"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-hilton"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah to Madinah Hilton"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Hotel Transfer
                    </span>
                }
                subtitle="Direct Ride to Madinah Hilton (King Fahd Gate)"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Hilton Transfer
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Door-to-Door</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Arrive at Madinah Hilton With Ease</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The <strong>Madinah Hilton Hotel</strong> is perfectly situated on King Fahd Street, just a short walk from the Main Gate of the Holy Mosque. Avoid the hassle of buses and let our driver drop you and your luggage right at the hotel's entrance.
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
                            Why Choose Private Transfer?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Shopping District</h4>
                                <p className="text-sm text-gray-600">
                                    The Madinah Hilton is located in the heart of the shopping district. Having a private car means plenty of trunk space for your shopping and luggage.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">No Waiting</h4>
                                <p className="text-sm text-gray-600">
                                    After a long flight to Jeddah, the last thing you want is to wait for a scheduled bus. We depart immediately upon your arrival.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Family Friendly</h4>
                                <p className="text-sm text-gray-600">
                                    Traveling with elderly parents or kids? We can stop at rest houses (SASCO) whenever you need a break during the 400km journey.
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
                        question: "How much is a taxi from Jeddah Airport to Madinah Hilton?",
                        shortAnswer: "From SAR 450",
                        detailedAnswer: "Our fixed price for a Sedan (Camry) is SAR 450. A larger family car (GMC Yukon) costs SAR 850. Prices include the driver, fuel, and highway tolls.",
                        perspectives: []
                    },
                    {
                        question: "Is Madinah Hilton close to the Haram?",
                        shortAnswer: "Yes, 2 mins walk",
                        detailedAnswer: "Yes, Madinah Hilton is centrally located in the Markaziyah area, just a 2-minute walk from the King Fahd Gate of the Prophet's Mosque.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
