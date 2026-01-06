import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Globe2, FileCheck, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Khobar to Bahrain | King Fahd Causeway Transfer',
    description: 'Book a reliable taxi from Khobar/Dammam to Bahrain. Cross the King Fahd Causeway with experienced drivers. Avoid insurance & permit hassles.',
    keywords: ['Taxi Khobar to Bahrain', 'Dammam to Bahrain taxi', 'King Fahd Causeway taxi', 'Bahrain airport transfer from Saudi', 'Saudi Bahrain border taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-khobar/bahrain-causeway/',
    },
    openGraph: {
        title: 'Taxi Service: Saudi to Bahrain (Causeway)',
        description: 'Direct transfer from your door in Khobar/Dammam to Manama, Bahrain. We handle the causeway driving permit and insurance.',
        url: 'https://taxiserviceksa.com/locations/al-khobar/bahrain-causeway/',
        type: 'website',
    },
};

export default function BahrainCausewayPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally King Fahd Causeway bridge image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const causewaySchema = {
        "@context": "https://schema.org",
        "@type": "Bridge",
        "name": "King Fahd Causeway",
        "description": "25km series of bridges connecting Saudi Arabia (Khobar) and Bahrain.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Khobar",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.1833",
            "longitude": "50.3500"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="causeway-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(causewaySchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi from Khobar to Bahrain"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Cross-Border Transfer
                    </span>
                }
                subtitle="King Fahd Causeway Specialists"
                location="Door-to-Door to Manama | Fixed Rates"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Khobar&dropoff=Bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Bahrain Trip
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Daily Commute Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-700 font-bold uppercase tracking-wider text-sm">International Travel</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Seamless Causeway Crossing
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Crossing the King Fahd Causeway into Bahrain requires specific vehicle insurance and authorization. Driving your own rental car is often impossible due to permit restrictions.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our taxis are fully authorized for cross-border travel. We pick you up in Khobar, Dammam, or Jubail and drive you directly to your hotel, airport, or meeting in Manama, handling the driving stress while you relax.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <FileCheck className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Permits Handle</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Manama Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Crossing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Bahrain Airport</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Requirements</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Valid Passport / ID</h4>
                                        <p className="text-sm text-gray-500">GCC citizens can use ID. Exempt expats need valid exit/re-entry visa.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Visa for Bahrain</h4>
                                        <p className="text-sm text-gray-500">Ensure you have a visa on arrival or e-visa if your nationality requires it.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">No Alcohol</h4>
                                        <p className="text-sm text-gray-500">Strict customs checks apply. Do not carry prohibited items back into KSA.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Wait Times",
                                commonBelief: "It's fast.",
                                reality: "Weekends (Thursday/Saturday) can have 2-4 hour delays at customs. Weekdays are usually under 45 minutes.",
                                truthRange: "Highly Variable",
                                factors: ["Public Holidays", "Weekend Rush"]
                            },
                            {
                                topic: "Ride Apps",
                                commonBelief: "Uber goes across.",
                                reality: "Standard Ubers CANNOT cross borders. You need a specialized cross-border taxi authorized for both countries.",
                                truthRange: "Special Taxi Only",
                                factors: ["Insurance", "Permits"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al-Khobar" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Khobar to Bahrain?",
                        shortAnswer: "SAR 300-400",
                        detailedAnswer: "Prices typically range from SAR 300 to SAR 400 for a one-way trip, including bridge tolls, depending on the drop-off location in Bahrain.",
                        perspectives: []
                    },
                    {
                        question: "Can you pick me up from Bahrain Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can pick you up from Bahrain International Airport (BAH) and bring you back to Saudi Arabia.",
                        perspectives: []
                    },
                    {
                        question: "Do I have to pay the bridge toll?",
                        shortAnswer: "Usually Included",
                        detailedAnswer: "Our quoted fixed rates usually include the King Fahd Causeway toll fee (SAR 25 each way), but please confirm when booking.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
