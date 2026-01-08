import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight, Briefcase, Navigation, Plane, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import RoutePerspective from '@/components/seo/RoutePerspective';

export const metadata: Metadata = {
    title: 'Jeddah to Riyadh Taxi | Long Distance Private Transfer (950km)',
    description: 'Book a private taxi from Jeddah to Riyadh. Comfortable 9-10 hour journey in GMC Yukon or Sedan. Door-to-door intercity travel. Fixed rates.',
    keywords: ['Jeddah to Riyadh taxi', 'Jeddah Riyadh car hire', 'transport Jeddah to Riyadh', 'taxi from Jeddah airport to Riyadh', 'long distance taxi saudi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-riyadh/',
    },
    openGraph: {
        title: 'Jeddah to Riyadh Private Taxi - 950km Executive Transfer',
        description: 'Skip the flight hassle. Direct door-to-door taxi from Jeddah to Riyadh. VIP GMC Yukon available for business travel.',
        url: 'https://taxiserviceksa.com/routes/jeddah-riyadh/',
        type: 'website',
    },
};

export default function JeddahToRiyadhPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jed-ruh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Jeddah to Riyadh Taxi Transfer",
                        "provider": {
                            "@type": "TransportationService",
                            "name": "VIP Transfer KSA",
                            "image": "https://taxiserviceksa.com/logo.png"
                        },
                        "serviceType": "Intercity Taxi",
                        "areaServed": {
                            "@type": "City",
                            "name": "Riyadh"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "1500",
                            "priceCurrency": "SAR",
                            "description": "Starting price for Sedan"
                        }
                    })
                }}
            />

            <Hero
                images={['/locations/riyadh/riyadh-skyline.webp', '/hero-slide-4.webp']}
                h1Text="Jeddah to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Cross-Country Transfer
                    </span>
                }
                subtitle="Direct 950km Journey (Door-to-Door)"
                location="9-10 Hours | Fixed Rate"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Intercity"
                        description="Looking for an alternative to flying? Our long-distance private taxi service takes you from Jeddah directly to your Riyadh doorstep. Ideal for families with luggage or business travelers who need privacy."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Distance', value: '950 km', icon: MapPin },
                            { label: 'Duration', value: '9-10 Hrs', icon: Clock },
                            { label: 'Vehicle', value: 'GMC/Sedan', icon: Car }
                        ]}
                    />
                </div>
            </Hero>

            {/* Traveler Essentials / Route Perspective */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <RoutePerspective
                        route="Jeddah to Riyadh"
                        perspectives={[
                            {
                                id: "business",
                                targetAudience: "Business Traveler",
                                icon: Briefcase,
                                intent: "Productivity & Privacy",
                                description: "Flights take 1.5 hours, but airport security, check-in, and waiting adds 4 hours. A private car (GMC Yukon) allows you to work, make calls in privacy, and sleep comfortably for the entire journey.",
                                structuredFeatures: [
                                    { label: "Wi-Fi", value: "Mobile Hotspot" },
                                    { label: "Privacy", value: "Tinted Windows" },
                                    { label: "Route", value: "Direct Highway" }
                                ],
                                visualContext: "Executive car interior with laptop setup."
                            },
                            {
                                id: "family",
                                targetAudience: "Family Relocation",
                                icon: User,
                                intent: "Moving & Luggage",
                                description: "Moving between cities? Airlines charge heavily for extra bags. Our GMC Yukon XL fits 7 passengers and 6-8 large suitcases, making it the most cost-effective way to move your family and belongings.",
                                structuredFeatures: [
                                    { label: "Luggage", value: "Unlimited" },
                                    { label: "Stops", value: "On Request" },
                                    { label: "Safety", value: "Child Seats" }
                                ],
                                visualContext: "Family loading luggage into GMC trunk."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Why Choose Us vs Flight */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Flight vs. Private Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-red-500">
                                <Plane className="w-6 h-6" /> Flying (JED to RUH)
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-2"><span className="text-red-500">✕</span> Airport transfer costs (both ends)</li>
                                <li className="flex gap-2"><span className="text-red-500">✕</span> 2 hours check-in + security</li>
                                <li className="flex gap-2"><span className="text-red-500">✕</span> Strict luggage limits</li>
                                <li className="flex gap-2"><span className="text-red-500">✕</span> Flight delays common</li>
                            </ul>
                        </div>
                        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-emerald-700">
                                <Car className="w-6 h-6" /> Private Taxi
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Door-to-Door (Hotel to Hotel)</li>
                                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Leave whenever you want</li>
                                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Unlimited luggage (in GMC)</li>
                                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Sleep/Relax the whole way</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Jeddah to Riyadh Taxi Fare</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sedan */}
                        <div className="border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-gray-500 font-medium mb-2">Economy Sedan</div>
                            <div className="text-3xl font-black text-gray-900 mb-4">1500 SAR</div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li>Camry / Sonata</li>
                                <li>Max 3 Passengers</li>
                                <li>2 Suitcases</li>
                            </ul>
                            <Link href="/booking?vehicle=Standard+Sedan&from=Jeddah&to=Riyadh">
                                <Button className="w-full bg-black text-white">Book Sedan</Button>
                            </Link>
                        </div>

                        {/* GMC */}
                        <div className="border-2 border-primary rounded-2xl p-6 text-center shadow-xl relative transform scale-105">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                            <div className="text-primary font-bold mb-2">VIP GMC Yukon</div>
                            <div className="text-3xl font-black text-gray-900 mb-4">2200 SAR</div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li>Yukon XL / Tahoe</li>
                                <li>Max 7 Passengers</li>
                                <li>8-10 Suitcases</li>
                                <li>Ultra Comfortable</li>
                            </ul>
                            <Link href="/booking?vehicle=GMC+Yukon+XL&from=Jeddah&to=Riyadh">
                                <Button className="w-full bg-primary text-white font-bold hover:bg-black">Book GMC</Button>
                            </Link>
                        </div>

                        {/* Van */}
                        <div className="border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-gray-500 font-medium mb-2">Family Van</div>
                            <div className="text-3xl font-black text-gray-900 mb-4">1800 SAR</div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li>Hyundai Staria</li>
                                <li>Max 7 Passengers</li>
                                <li>5 Suitcases</li>
                            </ul>
                            <Link href="/booking?vehicle=Family+Van&from=Jeddah&to=Riyadh">
                                <Button className="w-full bg-black text-white">Book Van</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How long is the drive from Jeddah to Riyadh?",
                                shortAnswer: "9-10 Hours",
                                detailedAnswer: "The distance is approximately 950km via Route 40. The drive typically takes 9 to 10 hours depending on rest stops and traffic entering Riyadh.",
                                perspectives: []
                            },
                            {
                                question: "Are there rest stops along the way?",
                                shortAnswer: "Yes, many",
                                detailedAnswer: "Yes, the Jeddah-Riyadh highway is fully serviced with SASCO and other large rest stops featuring petrol stations, mosques, restaurants (McDonald's, Al Baik), and clean restrooms.",
                                perspectives: []
                            },
                            {
                                question: "Is it safe to travel by taxi at night?",
                                shortAnswer: "Yes, very safe",
                                detailedAnswer: "The highway is wide, well-maintained, and patrolled. However, we recommend daytime travel for better views and less fatigue, but our drivers are available 24/7.",
                                perspectives: []
                            }
                        ]}
                    />
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Passenger Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="JeddahToRiyadh" />
                        <QuestionsDisplay location="JeddahToRiyadh" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="JeddahToRiyadh" />
                        <QuestionForm locationName="JeddahToRiyadh" />
                    </div>
                </div>
            </section>
        </div>
    );
}
