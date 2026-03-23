
import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, Building2, User } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import FreshnessStatus from '@/components/seo/FreshnessStatus';
import TLDRSummary from '@/components/seo/TLDRSummary';
import RoutePerspective from '@/components/seo/RoutePerspective';

export const metadata: Metadata = {
    title: 'Jeddah to Riyadh Taxi | Jeddah to Riyadh Private Car (950km) | Taxi Service KSA',
    description: 'Book the best online taxi from Jeddah to Riyadh. Direct 9-10 hour intercity transfer across Saudi Arabia. Fixed rates, VIP GMC Yukons, and door-to-door service.',
    keywords: ['Taxi Jeddah to Riyadh', 'Jeddah to Riyadh Taxi', 'Jeddah to Riyadh private car', 'taxi from Jeddah to Riyadh', 'Jeddah to Riyadh car hire', 'intercity taxi Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-riyadh/',
    },
};

export default function JeddahRiyadhRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '950 km', icon: Navigation },
        { label: 'Travel Time', value: '9 - 10 Hours', icon: Clock },
        { label: 'Route', value: 'Highway 40', icon: MapPin },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    const routeImages = ['/locations/riyadh/riyadh-skyline.webp', '/hero-slide-4.webp'];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Jeddah to Riyadh"
                description="Professional VIP private car service for Jeddah to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Jeddah to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Riyadh Transfer
                    </span>
                }
                subtitle="Trans-Kingdom Private Chauffeur Service"
                location="950 km | WhatsApp Booking | Door-to-Door"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-riyadh">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
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

            {/* TLDR Summary Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="2026-03-15" />
                    <TLDRSummary 
                        title="Jeddah to Riyadh Taxi Summary"
                        summary="The ultimate alternative to flying. Our private taxi service from Jeddah to Riyadh offers a direct 950km journey with no airport waiting times and total privacy for work or rest."
                        points={[
                            "Complete door-to-door service from your Jeddah home/hotel to Riyadh",
                            "Private GMC Yukons available - perfect for relocations and families",
                            "Stop anytime for refreshments at premium SASCO rest areas",
                            "No luggage limits - ideal for moving personal belongings",
                            "Licensed drivers with deep knowledge of the Highway 40 route"
                        ]}
                        pricing="WhatsApp Booking"
                        duration="9 - 10 Hours"
                    />
                </div>
            </section>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Best Jeddah to Riyadh Online Booking</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Booking a <strong>Jeddah to Riyadh taxi</strong> online is the most efficient way to travel cross-country. We bypass the airport security queues and provide a <strong>direct car hire</strong> from the Red Sea coast to the capital city.
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

                    {/* Route Perspective */}
                    <div className="mb-16">
                        <RoutePerspective
                            route="Jeddah to Riyadh"
                            perspectives={[
                                {
                                    id: "business",
                                    targetAudience: "Business & Executive",
                                    icon: Briefcase,
                                    intent: "Productivity & Privacy",
                                    description: "Skip the 4-hour airport process. Our GMC Yukon allows you to have a mobile office on wheels, with privacy and comfort to prepare for your meetings in Riyadh.",
                                    structuredFeatures: [
                                        { label: "Privacy", value: "Tinted Windows" },
                                        { label: "Phone Charging", value: "Multi-point" },
                                        { label: "Comfort", value: "Executive Seating" }
                                    ],
                                    visualContext: "Spacious GMC interior."
                                },
                                {
                                    id: "family",
                                    targetAudience: "Family Relocation",
                                    icon: User,
                                    intent: "Moving & Luggage",
                                    description: "Moving cities? Airlines charge heavily for extra bags. Our SUVs fit 7 passengers and up to 10 suitcases, making it the most cost-effective way to relocate.",
                                    structuredFeatures: [
                                        { label: "Luggage", value: "Large Capacity" },
                                        { label: "Safety", value: "Child Seats Available" },
                                        { label: "Flexibility", value: "Stop as Needed" }
                                    ],
                                    visualContext: "Large luggage capacity."
                                }
                            ]}
                        />
                    </div>

                    {/* Comparison Section */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Plane className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Jeddah to Riyadh: Flight vs Private Car</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Commercial Flight</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">✕</span>
                                        <span>Total Time: ~5 hours (Traffic to JED + 2hr Check-in + 1.5hr Flight + Traffic to Riyadh Center)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">✕</span>
                                        <span>Luggage: Strict 23kg limits for most classes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">✕</span>
                                        <span>Privacy: Noisy terminals and cabins</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Executive Transfer)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Convenience: Door-to-Door, no airport shuttle required</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Freedom: Unlimited luggage in our large GMC fleet</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Productivity: Quiet, private environment the entire way</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-white" />
                            950 km Journey Timeline
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Departure from Jeddah</div>
                                    <p className="text-gray-300 text-sm">Chauffeur picks you up from your specific address at your chosen time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Crossing the Mountains to Taif</div>
                                    <p className="text-gray-300 text-sm">Climbing the scenic Escarpment before hitting the Central Arabian plateau.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Mid-way Lunch & Rest</div>
                                    <p className="text-gray-300 text-sm">Stopping at a premium SASCO station for meal breaks and prayer.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Arrival in Riyadh Capitol</div>
                                    <p className="text-gray-300 text-sm">Direct drop-off at your hotel or business headquarters in Riyadh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Fixed Intercity Fares</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Jeddah to Riyadh Taxi Rates
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">Executive Sedan</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Standard Fare</div>
                            <p className="text-gray-500 text-sm">4 Passengers / 2 Bags</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Cross-Country Best Seller</div>
                            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">GMC Yukon XL / Tahoe</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Executive Fare</div>
                            <p className="text-gray-500 text-sm">7 Passengers / 10 Bags</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Briefcase className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">Family Van</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Group Fare</div>
                            <p className="text-gray-500 text-sm">7-9 Passengers</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 border-t border-gray-100">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                        contextName="Jeddah to Riyadh"
                faqs={[
                    {
                        question: "How long is the taxi ride from Jeddah to Riyadh?",
                        shortAnswer: "9 - 10 Hours.",
                        detailedAnswer: "The distance from Jeddah to Riyadh is approximately 950 km. Depending on road conditions and number of rest stops, the total journey time is usually between 9 and 10 hours.",
                        perspectives: []
                    },
                    {
                        question: "What is the price of a taxi from Jeddah to Riyadh?",
                        shortAnswer: "Affordable Fixed Intercity Rates.",
                        detailedAnswer: "We offer fixed rates for the entire vehicle. For such a long distance, the GMC Yukon is our most popular choice due to its superior comfort and luggage capacity for family relocations.",
                        perspectives: []
                    },
                    {
                        question: "Is it better to fly or take a taxi from Jeddah to Riyadh?",
                        shortAnswer: "Taxi is better for luggage and privacy.",
                        detailedAnswer: "While a flight is fast, once you include airport waiting times and terminal transfers, a private taxi becomes a competitive door-to-door alternative, especially for those moving belongings or traveling in groups.",
                        perspectives: []
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get a quote for your Taxi Jeddah to Riyadh
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Experience the trans-kingdom transfer with premium comfort. Professional chauffeurs, VIP vehicles, and fixed rates for your 950km journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=jeddah-riyadh">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking (Fixed Price)
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}



