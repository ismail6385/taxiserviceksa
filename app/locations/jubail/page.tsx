import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Factory, ArrowRight, Briefcase, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur Jubail | Industrial City VIP',
    description: 'Premium VIP private transfer and executive chauffeur service in Jubail (Al Jubail). Specialized in Jubail Industrial City, Royal Commission, and DMM Airport transfers. Professional corporate excellence.',
    keywords: ['Jubail VIP private transfer', 'Executive chauffeur Jubail', 'Jubail Industrial City VIP taxi', 'Dammam Airport to Jubail VIP', 'Jubail premium driver'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jubail/',
    },
    openGraph: {
        title: 'Jubail VIP Transfer: Industrial City & Downtown',
        description: 'Need a premium VIP transfer in Jubail? We serve the Industrial City, Royal Commission, and provide transfers to Dammam Airport.',
        url: 'https://transferksa.com/locations/jubail/',
        type: 'website',
    },
};

export default function JubailPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Jubail Industrial City image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const jubailSchema = {
        "@context": "https://schema.org",
        "@type": "City",
        "name": "Jubail",
        "description": "A major industrial city in the Eastern Province on the Persian Gulf coast of Saudi Arabia.",
        "url": "https://transferksa.com/locations/jubail/",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.0000",
            "longitude": "49.6667"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jubail-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jubailSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer & Chauffeur Jubail"
                bookingFormTitle="Book Premium Transfer in Jubail"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Jubail
                    </span>
                }
                subtitle="Corporate Excellence & Industrial Connectivity"
                location="Jubail | Industrial Zone | VIP"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jubail&dropoff=Dammam%20Airport">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate Inquiry
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Industrial, Corporate, and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Business Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Serving Jubail's Industry
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Jubail is the industrial heart of the Kingdom. We specialize in providing reliable transportation for engineers, consultants, and executives visiting the Royal Commission area and the industrial plants.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We understand the strict security protocols at plant gates. Our drivers are experienced in navigating the industrial zones and ensuring you arrive at your meeting on time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Factory className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Industrial Zone</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Corporate Travel</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Airport Runs</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Service</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Areas</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Royal Commission</h4>
                                        <p className="text-sm text-gray-500">The modern residential and administrative side of Jubail (Jubail 2).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jubail Balad (Downtown)</h4>
                                        <p className="text-sm text-gray-500">The commercial center and older part of the city.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dareen Beach</h4>
                                        <p className="text-sm text-gray-500">Popular waterfront area for leisure and hotels.</p>
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
                                topic: "Distance to DMM",
                                commonBelief: "It's close.",
                                reality: "Jubail is about 100km (1 hour) from Dammam Airport. It's a significant commute, so booking a comfortable return transfer is wise.",
                                truthRange: "1 Hour Drive",
                                factors: ["Highway", "Distance"]
                            },
                            {
                                topic: "VIP Transfers vs Apps",
                                commonBelief: "Apps work well.",
                                reality: "Inside the Industrial City, app availability can be spotty. Security checks can also complicate pickups for non-regular drivers.",
                                truthRange: "Security Gates",
                                factors: ["Gate Access", "Availability"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jubail" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a VIP transfer from Dammam Airport to Jubail?",
                        shortAnswer: "SAR 300-400",
                        detailedAnswer: "The rate typically ranges from 300 to 400 SAR depending on the vehicle type (Sedan vs Yukon) and exact drop-off location.",
                        perspectives: []
                    },
                    {
                        question: "Can you enter the Industrial City?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, provided you have the necessary clearance or we can drop you at the main gate reception centers.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer monthly contracts?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we work with many companies in Jubail for daily employee shuttle and executive transport contracts.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
