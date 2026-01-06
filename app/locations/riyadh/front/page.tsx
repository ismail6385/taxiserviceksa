import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, Briefcase, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Riyadh Front | Premium Event Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service for Riyadh Front (Roshn Front). Professional transport for LEAP, Cityscape, and business exhibitions.',
    keywords: ['Riyadh Front VIP transfer', 'Roshn Front premium chauffeur', 'Riyadh Exhibition Center executive car', 'LEAP Riyadh VIP transport', 'Airport to Riyadh Front VIP'],
    alternates: {
        canonical: 'https://transferksa.com/locations/riyadh/front/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Riyadh Front (Exhibition Center)',
        description: 'Attending an event at Riyadh Front? Premium VIP private transfer and professional chauffeur service from hotels and King Khalid Airport.',
        url: 'https://transferksa.com/locations/riyadh/front/',
        type: 'website',
    },
};

export default function RiyadhFrontPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Riyadh Front / Business Gate image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const frontSchema = {
        "@context": "https://schema.org",
        "@type": "ExhibitionEvent",
        "name": "Riyadh Front",
        "description": "A major mixed-use destination in Riyadh hosting the Riyadh Exhibition & Convention Center, shopping, and dining.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.8643",
            "longitude": "46.7214"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="front-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(frontSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Riyadh Front"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Event Chauffeur
                    </span>
                }
                subtitle="VIP Transfers for LEAP, Cityscape & Major Business Events"
                location="Roshn Front | Exhibition & Convention Center"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20Hotel&dropoff=Riyadh%20Front">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Convention Capital</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Heart of Riyadh Business Events
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Riyadh Front (now Roshn Front) is the city's premier destination for mega-events like LEAP, Black Hat, and Cityscape. It combines a massive convention center with a high-end open-air shopping and dining district.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Located just 10-15 minutes from King Khalid International Airport (RUH), it attracts thousands of business travelers daily. Finding a taxi *after* a major event can be chaos. We offer pre-booked pickups to avoid the queue.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Convention Center</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Business Gate</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP Transfers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Wait & Return</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">The Exhibition Center</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at the VIP or main visitor entrances.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">The Shopping Zone</h4>
                                        <p className="text-sm text-gray-500">Pickups from the dining area after your business dinner.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Khalid Airport (RUH)</h4>
                                        <p className="text-sm text-gray-500">Very close (15 mins). Perfect for layover meetings.</p>
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
                                commonBelief: "It's always traffic-free.",
                                reality: "During exhibitions (LEAP, etc.), the roads around Riyadh Front jam completely. Allow an extra 30-45 minutes.",
                                truthRange: "Event Traffic",
                                factors: ["Exhibitions", "Rush Hour"]
                            },
                            {
                                topic: "Availability",
                                commonBelief: "Easy to hail a cab.",
                                reality: "Thousands of people leave at once when events end. Ride-share prices surge 3x. Pre-booking a private VIP chauffeur saves you money and stress.",
                                truthRange: "Surge Pricing",
                                factors: ["High Demand", "Queues"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Riyadh Front from the Airport?",
                        shortAnswer: "10-15 mins",
                        detailedAnswer: "It is located on the Airport Road, very close to King Khalid International Airport (approx. 10-15 min drive).",
                        perspectives: []
                    },
                    {
                        question: "Can you wait for me during the exhibition?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we offer hourly or full-day booking services so you have a car waiting for you immediately when you finish.",
                        perspectives: []
                    },
                    {
                        question: "Is it close to the city center?",
                        shortAnswer: "25-30 mins",
                        detailedAnswer: "No, it is in the north. It takes about 25-30 minutes to reach Olaya or the Diplomatic Quarter.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
