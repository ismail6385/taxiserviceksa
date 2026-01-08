import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Cloud, ArrowRight, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Al Hada Taif | Cable Car & Mountain Resort Transfer',
    description: 'Book a taxi to Al Hada Mountain in Taif. Visit the Cable Car (Telefric), Fruit Markets, and Resort Hotels. Reliable mountain driving service.',
    keywords: ['Al Hada taxi', 'Taif cable car taxi', 'Al Hada mountain transport', 'Taif to Al Hada', 'Al Hada resorts taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/taif/al-hada/',
    },
    openGraph: {
        title: 'Taxi to Al Hada Mountain & Cable Car',
        description: 'Private transfer to Al Hada, Taif. Experience the winding mountain roads and cable car with our experienced drivers.',
        url: 'https://taxiserviceksa.com/locations/taif/al-hada/',
        type: 'website',
    },
};

export default function AlHadaPage() {
    const images = [
        '/hero-slide-2.webp', // Ideally an Al Hada mountain view
        '/hero-slide-3.webp',
        '/jeddah-airport.webp',
    ];

    const alHadaSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Al Hada",
        "description": "Mountain resort area known for its cooler climate, rose farms, and cable car.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.3656",
            "longitude": "40.2922"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="alhada-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(alHadaSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Al Hada Mountain & Cable Car"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taif Mountain Tour
                    </span>
                }
                subtitle="The High Road to Taif's Best Views"
                location="Cable Car | Rose Farms | 5-Star Hotels"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Taif&dropoff=Al%20Hada">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Al Hada Trip
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Tour Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Mountain Getaway</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Explore Al Hada with Confidence
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al Hada is famous for its winding mountain highway (Kara Road), offering breathtaking views of Makkah below. It is home to the Taif Cable Car (Telefric), fruit markets, and luxury resorts like the Sheraton.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Driving these steep, winding roads requires skill and a powerful vehicle. Our drivers are locals who navigate these turns safely daily, allowing you to relax and enjoy the spectacular scenery.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Cloud className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Cooler Climate</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Safe Mountain Driving</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Cable Car Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Hourly Rental</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Stops</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Taif Cable Car (Telefric Al Hada)</h4>
                                        <p className="text-sm text-gray-500">Ride down to Al Kar Tourist Village (Water Park).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fruit Stalls</h4>
                                        <p className="text-sm text-gray-500">Buy fresh seasonal fruits (figs, pomegranates, grapes).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rose Factories</h4>
                                        <p className="text-sm text-gray-500">Visit traditional distilleries producing Taif Rose water.</p>
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
                                topic: "The Road (Kara Mountain Rd)",
                                commonBelief: "It's scary to drive.",
                                reality: "It is a steep, winding engineering marvel. It is safe, but best driven by professionals if you want to enjoy the view.",
                                truthRange: "Scenic but Winding",
                                factors: ["Steep Drops", "Sharp Turns", "Monkeys"]
                            },
                            {
                                topic: "Monkeys",
                                commonBelief: "You can feed them.",
                                reality: "There are many baboons along the road. It is advised NOT to feed them as they can be aggressive and it is officially discouraged.",
                                truthRange: "Do Not Feed",
                                factors: ["Wildlife Safety"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Taif" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Al Hada from Taif city center?",
                        shortAnswer: "20 km",
                        detailedAnswer: "Al Hada is about 20km from downtown Taif. It sits on the edge of the escarpment overlooking Makkah.",
                        perspectives: []
                    },
                    {
                        question: "Can you take us to the Cable Car station?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can drop you at the upper station (Top of Al Hada) or pick you up from the bottom station (Al Kar Village) if you are coming from Makkah.",
                        perspectives: []
                    },
                    {
                        question: "Is it cold in Al Hada?",
                        shortAnswer: "Usually Cool",
                        detailedAnswer: "Yes, due to its high altitude (2000m+), Al Hada is significantly cooler than Jeddah and Makkah, especially in the evenings.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
