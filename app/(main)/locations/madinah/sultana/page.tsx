import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Utensils, ShoppingBag, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Sultana Road Madinah | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service to Sultana Road (Sultanah) in Madinah. Luxury transport for shopping, dining, and cafes.',
    keywords: ['Sultana Road VIP transfer', 'Madinah shopping premium chauffeur', 'Sultanah VIP transport', 'Madinah executive lifestyle car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/sultana/',
    },
    openGraph: {
        title: 'Taxi to Sultana Road (Dining Hub)',
        description: 'Enjoy the nightlife of Madinah on Sultana Road. We provide reliable transfers from your hotel to the best restaurants and shops.',
        url: 'https://taxiserviceksa.com/locations/madinah/sultana/',
        type: 'website',
    },
};

export default function SultanaPage() {
    const images = [
        '/hero-slide-3.webp', // Ideally a night shot of a busy street/restaurant
        '/madinah-prophets-mosque.webp',
        '/jeddah-airport.webp',
    ];

    const sultanaSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Sultana Road",
        "description": "The main commercial street in Madinah featuring restaurants, cafes, and fashion boutiques.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.4942",
            "longitude": "39.5857"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="sultana-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(sultanaSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Sultana Road"
                bookingFormTitle="Book Premium Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Lifestyle Chauffeur
                    </span>
                }
                subtitle="Exclusive Access to Madinah's Premier Shopping District"
                location="Luxury Dining | Designer Malls | VIP Lounges"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Madinah%20Hotel&dropoff=Sultana%20Road">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Full Day Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Leisure, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Nightlife & Food</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Experience Sultana Road
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Sultana Road (officially Abu Bakr Al Siddiq Rd) is the bustling commercial artery of Madinah. It is lined with hundreds of international and local restaurants, fashion boutiques, cafes, and shopping centers like Al Rashid Mega Mall nearby.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                After prayer times at the Prophet's Mosque, traffic to Sultana increases. Booking a private taxi ensures you arrive comfortably for dinner or shopping without waiting for hailed cabs.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Utensils className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Dining Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Mall Transfers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Late Night Service</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Wait & Return</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fine Dining Restaurants</h4>
                                        <p className="text-sm text-gray-500">Arabesque, Swiss House, and local Mandi spots.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Rashid Mega Mall</h4>
                                        <p className="text-sm text-gray-500">The largest mall in Madinah, located just off Sultana.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Coffee Shops</h4>
                                        <p className="text-sm text-gray-500">Specialty cafes like Barns, Starbucks, and local roasters.</p>
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
                                topic: "Traffic",
                                commonBelief: "It's always jammed.",
                                reality: "Evenings (8 PM - 12 AM) are busy. We know the side roads to get you to your restaurant faster.",
                                truthRange: "Evening Rush",
                                factors: ["Dinner Time", "Weekend"]
                            },
                            {
                                topic: "Walking from Haram",
                                commonBelief: "We can walk.",
                                reality: "It is too far (4-5 km) to walk comfortably, especially after a tiring day. A taxi takes 10-15 minutes.",
                                truthRange: "Taxi Needed",
                                factors: ["Distance", "Heat"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Sultana Road from the Prophet's Mosque?",
                        shortAnswer: "10-15 mins",
                        detailedAnswer: "It is about a 10-15 minute drive (5 km) depending on traffic.",
                        perspectives: []
                    },
                    {
                        question: "Can the driver wait for us while we eat?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we offer 'Wait and Return' service so you don't have to worry about finding another taxi after dinner.",
                        perspectives: []
                    },
                    {
                        question: "Is Sultana safe at night?",
                        shortAnswer: "Very Safe",
                        detailedAnswer: "Yes, it is a very family-friendly area and stays active very late into the night.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
