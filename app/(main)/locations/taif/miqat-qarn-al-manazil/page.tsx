import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, BookOpen, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Miqat Qarn al-Manazil (As-Sayl Al-Kabir) | Taif Ziyarat',
    description: 'Book a taxi to Miqat Qarn al-Manazil (As-Sayl Al-Kabir) from Taif or Jeddah. Reliable Ihram stop services for pilgrims. 24/7 availability.',
    keywords: ['Miqat Qarn al-Manazil taxi', 'As-Sayl Al-Kabir taxi', 'Taif Miqat taxi', 'Jeddah to Miqat Taif', 'Umrah taxi Taif'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/taif/miqat-qarn-al-manazil/',
    },
    openGraph: {
        title: 'Taxi to Miqat Qarn al-Manazil (As-Sayl Al-Kabir)',
        description: 'Official taxi service to Miqat Qarn al-Manazil. Stop for Ihram on your way to Makkah. Experienced drivers.',
        url: 'https://taxiserviceksa.com/locations/taif/miqat-qarn-al-manazil/',
        type: 'website',
    },
};

export default function MiqatQarnAlManazilPage() {
    const images = [
        '/makkah-kaaba-night.webp', // Placeholder, ideally specific Miqat image
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const contentSchema = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "Miqat Qarn al-Manazil",
        "alternateName": "As-Sayl Al-Kabir",
        "description": "The Miqat for pilgrims travelling from Najd, Taif, and Riyadh.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "As Sayl Al Kabir",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.6367",
            "longitude": "40.4286"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="miqat-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Miqat Qarn al-Manazil (As-Sayl Al-Kabir)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taif Miqat Service
                    </span>
                }
                subtitle="Ihram Stop for Pilgrims from Riyadh & Taif"
                location="24/7 Service | Waiting Time Included"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Taif&dropoff=Miqat%20Qarn%20al-Manazil">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ride to Miqat
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Contact Us
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Sacred Journey</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Stop at Miqat Qarn al-Manazil
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Qarn al-Manazil (also known as As-Sayl Al-Kabir) is the designated Miqat for pilgrims traveling from Najd, Riyadh, Taif, and the UAE. It is located approximately 75-80 kilometers from Makkah.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our taxi service understands the importance of this stop. We provide ample waiting time for you to shower, change into Ihram, and offer two Raka'at of prayer before proceeding to Al-Haram.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Waiting Time Included</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Privacy</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Ihram-Friendly Vehicles</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Direct Makkah Drop</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Pickup</h4>
                                        <p className="text-sm text-gray-500">From any hotel in Taif or Jeddah Airport.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Miqat Stop (As-Sayl Al-Kabir)</h4>
                                        <p className="text-sm text-gray-500">Stop for ~45-60 minutes for Ihram preparation and Niyaah.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Arrival at Makkah</h4>
                                        <p className="text-sm text-gray-500">Drop-off at your hotel or near Al-Haram.</p>
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
                                topic: "Proximity to Taif",
                                commonBelief: "It's inside Taif city.",
                                reality: "No, it is about 55km north of Taif city center. You need a booked ride to get there and continue to Makkah.",
                                truthRange: "55km Distance",
                                factors: ["Remote Location", "Highway Access"]
                            },
                            {
                                topic: "Facilities",
                                commonBelief: "Basic facilities only.",
                                reality: "The government has renovated it. There are large prayer halls, hundreds of showers, and shops selling Ihram clothes.",
                                truthRange: "Excellent Facilities",
                                factors: ["Showers", "Mosque", "Shops"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
                <RelatedLocations currentCity="Taif" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Miqat Qarn al-Manazil from Taif?",
                        shortAnswer: "55 km",
                        detailedAnswer: "It is approximately 55 km from Taif city center, taking about 45 minutes to reach by taxi.",
                        perspectives: []
                    },
                    {
                        question: "Can the taxi wait while we wear Ihram?",
                        shortAnswer: "Yes, Included",
                        detailedAnswer: "Yes, our service includes a waiting period (usually 1 hour) at the Miqat for you to perform Ghusl, wear Ihram, and pray, at no extra cost.",
                        perspectives: []
                    },
                    {
                        question: "Do you go to Qarn al-Manazil from Jeddah Airport?",
                        shortAnswer: "Yes, Upon Request",
                        detailedAnswer: "While most pilgrims landing in Jeddah use Dhul Hulaifah (if going to Medina) or wear Ihram on the plane, if you specifically need to go to Qarn al-Manazil first, we can arrange that detour.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
