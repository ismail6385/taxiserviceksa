import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, Building2, Waves, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Script from 'next/script';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata: Metadata = {
    title: 'Taxi Service in Jeddah | Airport Taxi & Makkah Transfers',
    description: 'Taxi service in Jeddah for King Abdulaziz Airport (KAIA) transfers. Direct transport to Makkah hotels and Madinah. Terminal 1 and North Terminal pickups.',
    keywords: ['Jeddah taxi service', 'KAIA airport transfer', 'Jeddah to Makkah taxi', 'Terminal 1 taxi', 'North Terminal pickup', 'Jeddah chauffeur'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jeddah',
        languages: {
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah',
            'ur': 'https://taxiserviceksa.com/ur/locations/jeddah',
        }
    },
    openGraph: {
        title: 'Taxi Service in Jeddah | Airport Taxi & Makkah Transfers',
        description: 'Pre-booked private transfers from KAIA Terminal 1 & North Terminal directly to hotels. Fixed rates available.',
        url: 'https://taxiserviceksa.com/locations/jeddah',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'Jeddah Corniche Waterfront' }],
    },
};

export default function JeddahPage() {
    const services = [
        { name: 'KAIA Airport Transfer', description: 'Meet & Greet at T1 Aquarium or North Gate 2', icon: Plane },
        { name: 'Jeddah to Makkah', description: 'Direct Hotel Drop-off (75 mins)', icon: Car },
        { name: 'Business Chauffeur', description: 'Hourly rental for meetings', icon: Building2 },
        { name: 'Al-Balad & Corniche', description: 'Sightseeing tours of Historic Jeddah', icon: Waves },
    ];

    const jeddahImages = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const faqs = [
        {
            question: "Where do I meet my driver at Jeddah Airport (KAIA)?",
            answer: "Meeting point for Terminal 1 is the 'Aquarium' near arrivals exit. For North Terminal, meeting point is Gate 2. Flight tracking is included for all bookings."
        },
        {
            question: "Is it better to take the Train to Makkah?",
            answer: "Haramain Train stops at Rusaifa Station (15-20 mins from Haram). Direct taxi service offers hotel lobby drop-off. Taxi transport is recommended for groups with luggage."
        },
        {
            question: "Do you have GMC Yukons for large families?",
            answer: "Fleet includes GMC Yukon and Chevrolet Suburban XL. Vehicles accommodate 7 passengers and 5-6 large suitcases. Suitable for Umrah groups."
        },
        {
            question: "Can we stop at the Corniche on the way to Makkah?",
            answer: "Stopovers at Jeddah Corniche or other locations can be arranged. Hourly rates apply for additional stops."
        },
        {
            question: "What if my flight is delayed?",
            answer: "Flight status is monitored using flight number. Driver waits up to 90 minutes after actual landing time at no extra cost."
        }
    ];

    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '95 km', time: '1h 15m', route: 'Haramain Expy' },
        { destination: 'Madinah', distance: '415 km', time: '4h', route: 'Route 15' },
        { destination: 'Taif', distance: '170 km', time: '2h 15m', route: 'Al Hada Rd' },
        { destination: 'KAIA Airport', distance: '25 km (from City)', time: '30 mins', route: 'Madinah Rd' },
        { destination: 'Obhur (North)', distance: '35 km', time: '40 mins', route: 'Corniche Rd' }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Jeddah",
        "image": "https://taxiserviceksa.com/jeddah-airport-taxi.jpg",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/jeddah",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Jeddah",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1250"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="location-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Jeddah Airport Transfer",
                        "provider": { "@type": "LocalBusiness", "name": "TaxiServiceKSA Jeddah" },
                        "areaServed": { "@type": "City", "name": "Jeddah" },
                        "description": "Private VIP transfer from King Abdulaziz International Airport to Makkah and Madinah."
                    })
                }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={jeddahImages}
                h1Text="Taxi Service in Jeddah: Airport Transfers and Makkah Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Gateway to Makkah
                    </span>
                }
                subtitle="KAIA Airport Transfers"
                location="Jeddah • Makkah • Madinah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Jeddah"
                        description="Navigating the massive King Abdulaziz International Airport (KAIA) can be confusing. We provide clear meeting points at Terminal 1 and North Terminal, ensuring you don't get lost in the arrivals chaos."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Airport Pickups', value: '25,000+', icon: Plane },
                            { label: 'Business Clients', value: '450+', icon: Building2 },
                            { label: 'On-Time Rate', value: '99.8%', icon: Clock }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Airport Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#pricing">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            View Fixed Rates
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Jeddah Traffic: Al Haramain Expy"
                    status="Traffic Alert"
                    lastUpdated="Daily Update"
                    content="The main highway to Makkah (Haramain Expy) experiences heavy congestion during 5 PM - 8 PM on weekdays. Our drivers use real-time GPS re-routing via the Old Makkah Road or Briman branch to save you 20-30 minutes."
                    tags={["TrafficAvoidance", "Terminal1", "RushHour", "SmartRouting"]}
                />
            </div>

            {/* SEO Content Semantic Hub - Wrapped for Desktop Responsiveness */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Is the Train or Taxi better for Makkah?"
                    intro="The Haramain High Speed Train is a marvel of engineering, but it solves a different problem than most travelers have."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Solo Traveler / Couple',
                            question: 'Is it cheaper?',
                            answer: 'Yes. The train ticket is cheaper for 1-2 people. However, you must add the taxi cost from Makkah Station to your hotel.',
                            citation: 'Cost Benefit Analysis'
                        },
                        {
                            id: 'q2',
                            condition: 'Family with Luggage',
                            question: 'Is it convenient?',
                            answer: 'No. Managing 6 suitcases on a train, then transferring to a taxi in Makkah is exhausting. A direct GMC Yukon from Airport to Hotel Lobby is far superior for groups.',
                            citation: 'Logistics Expert'
                        },
                        {
                            id: 'q3',
                            condition: 'Timing',
                            question: 'Is it faster?',
                            answer: 'The train ride is 55 mins. But with boarding time + waiting + final taxi, the total door-to-door time is often 2+ hours. A taxi is ~75 mins direct.',
                            citation: 'Time Sample Data'
                        }
                    ]}
                />

                <SemanticField
                    title="Jeddah: Where Tradition Meets Modernity"
                    explanation="Jeddah is more than just an airport. It is a UNESCO heritage site and a modern business hub. Our drivers know the city inside out."
                    concepts={[
                        {
                            label: 'KAIA Terminal 1',
                            description: 'The massive new terminal serving Saudia, Flynas, and major international carriers. Features the famous Aquarium.',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Abdulaziz_International_Airport'
                        },
                        {
                            label: 'Al-Balad',
                            description: 'The historic district with coral houses like Nasseef House. Narrow streets make drop-off points tricky; we know the best spots.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Al-Balad,_Jeddah'
                        },
                        {
                            label: 'Jeddah Corniche',
                            description: 'The 30km waterfront hosting the F1 track and the Yacht Club. Perfect for a relaxing drive after arrival.',
                            internalLink: '/locations/jeddah'
                        },
                        {
                            label: 'King Fahd\'s Fountain',
                            description: 'The tallest of its kind in the world. Visible from many parts of the city.',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Fahd%27s_Fountain'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Jeddah Transport Network"
                    clusters={[
                        {
                            category: "Airport Connections",
                            relevance: "Primary",
                            items: [
                                { label: "Book Airport Pickup", url: "/booking?pickup=kaia" },
                                { label: "Makkah Transfers", url: "/locations/makkah" },
                                { label: "Madinah Transfers", url: "/locations/madinah" }
                            ]
                        },
                        {
                            category: "City Logistics",
                            relevance: "Secondary",
                            items: [
                                { label: "Corporate Events", url: "/services/business", description: "Jeddah Superdome" },
                                { label: "Shopping Tours", url: "/blog/jeddah-shopping-guide", description: "Red Sea Mall" },
                                { label: "Historic Tours", url: "/services/tours", description: "Al-Balad" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 transition-colors">Locations</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Jeddah</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Captain Tariq Al-Sayed'
                        reviewerTitle='Airport Logistics Manager'
                        reviewDate="26 Dec 2024"
                        expertise={["Terminal 1 Ops", "VIP Protocol", "Makkah Route Optimization"]}
                    />
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Available Services
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mt-6 mb-4">
                            Airport and City Transport
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Transport services cover King Abdulaziz International Airport (KAIA) and Jeddah city locations. Vehicles are air-conditioned.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-black/50 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Block */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Plane className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">The Comfort of Private Transfer</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                                Avoid the &quot;Taxi Line&quot; Humidity
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Jeddah is humid. Waiting in the outdoor taxi queue after a long flight can be exhausting. Our driver greets you <span className="italic">inside</span> the terminal or at the nearest curbside point with a pre-cooled car.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                We specialize in &quot;Last Mile&quot; comfort. While the train drops you at the station, we drop you at the hotel reception. For families with children and elderly, this convenience is priceless.
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h4 className="font-bold">Wait Time Included</h4><p className="text-sm text-gray-500">90 mins free waiting for delays</p></div>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h4 className="font-bold">Family Vans</h4><p className="text-sm text-gray-500">Hyundia Staria & GMC Available</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/jeddah-airport-terminal.webp"
                                    alt="Luxury Transfer at Jeddah KAIA Airport"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips city="Jeddah" />
                    <div className="mt-12">
                        <DistanceTable origin="KAIA Airport" locations={distanceData} />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Train to Makkah",
                                    commonBelief: "Always faster.",
                                    reality: "Actual travel time is similar when you add the taxi from Makkah station to Haram. Train is only better for solo travelers with light backpacks.",
                                    truthRange: "Situation Dependent",
                                    factors: ["Luggage Count", "Group Size", "Hotel Location"]
                                },
                                {
                                    topic: "Uber at Airport",
                                    commonBelief: "Easy availability.",
                                    reality: "Surge pricing is common during flight banks. Drivers often cancel for short trips or if they don't like the payment method.",
                                    truthRange: "Unreliable",
                                    factors: ["Surge Pricing", "Cancellations"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            route="Jeddah to Makkah (The Sacred Route)"
                            perspectives={[
                                {
                                    id: "pilgrim",
                                    targetAudience: "Umrah Group",
                                    icon: Users,
                                    intent: "Worship",
                                    description: "The primary goal is getting to the hotel to rest before Umrah. Our driver puts on Talbiyah audio if requested and drives smoothly.",
                                    structuredFeatures: [
                                        { label: "Checkpoints", value: "Permit Ready" },
                                        { label: "Luggage", value: "High Capacity" },
                                        { label: "Ac", value: "Max Cooling" }
                                    ],
                                    visualContext: "Passing the Quran Gate structure."
                                },
                                {
                                    id: "business",
                                    targetAudience: "Corporate",
                                    icon: Building2,
                                    intent: "Efficiency",
                                    description: "Heading to a meeting in Jeddah. Needs WiFi hotspot (available on request) and efficient route avoiding Corniche traffic.",
                                    structuredFeatures: [
                                        { label: "Privacy", value: "Tinted Windows" },
                                        { label: "Route", value: "Express" },
                                        { label: "Payment", value: "Invoice Available" }
                                    ],
                                    visualContext: "Skyline views of HQ towers."
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Are there different terminals?",
                                    shortAnswer: "Yes: T1 & North",
                                    detailedAnswer: "Terminal 1 (New) serves Saudia & major international. North Terminal serves some budget carriers. OLD South Terminal is closed. Check your ticket carefully.",
                                    perspectives: [
                                        { role: "Dispatcher", icon: "Plane", insight: "T1 and North are 20km apart! Tell us your flight number." }
                                    ]
                                },
                                {
                                    question: "Can I wear Ihram in the taxi?",
                                    shortAnswer: "Yes",
                                    detailedAnswer: "Most pilgrims arrive in Ihram. If you need to change, there are facilities at the airport, but lines are long. Doing it on the plane is recommended.",
                                    perspectives: [
                                        { role: "Driver", icon: "User", insight: "We keep the car extra cool for those in Ihram cloths." }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Practical Information - Koray's Entity-Attribute Coverage */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Practical Information
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Essential Information for Jeddah Airport Travelers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world details to help you navigate King Abdulaziz International Airport and Jeddah city.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Prayer Facilities */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Prayer Facilities</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Terminal 1 (New):</p>
                                    <p className="text-sm">Prayer room on Level 2 (after security). Separate sections for men and women. Wudu facilities available.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">North Terminal:</p>
                                    <p className="text-sm">Musalla near Gate 5. Smaller facility but well-maintained. Prayer times displayed on screens.</p>
                                </div>
                            </div>
                        </div>

                        {/* Currency & SIM Cards */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Currency & SIM Cards</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Currency Exchange:</p>
                                    <p className="text-sm">Available in arrivals hall (both terminals). Rates are standard. ATMs accept international cards (Visa, Mastercard).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">SIM Cards:</p>
                                    <p className="text-sm">Mobily and STC kiosks in arrivals. Tourist SIM: SAR 50-100 (includes data). Passport required for activation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Ihram Facilities */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ihram Facilities</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Changing Rooms:</p>
                                    <p className="text-sm">Terminal 1: Level 1, near baggage claim. Separate facilities for men and women.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Important Note:</p>
                                    <p className="text-sm">Lines can be 30+ minutes during Hajj season (Dhul Hijjah). Recommendation: Change into Ihram on the plane before landing.</p>
                                </div>
                            </div>
                        </div>

                        {/* Climate & Weather */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <Waves className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Climate & Weather</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Temperature:</p>
                                    <p className="text-sm">Summer (May-Sep): 35-45°C. Winter (Nov-Feb): 20-30°C. Humidity is high year-round (coastal city).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">AC in Vehicles:</p>
                                    <p className="text-sm">All our vehicles have strong AC. Essential for Ihram-wearing pilgrims. We keep temperature at 20-22°C for comfort.</p>
                                </div>
                            </div>
                        </div>

                        {/* Luggage & Storage */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <Car className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Luggage & Storage</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Baggage Claim:</p>
                                    <p className="text-sm">Terminal 1: Carousels 1-8 (international), 9-12 (domestic). Average wait time: 20-30 minutes.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Vehicle Capacity:</p>
                                    <p className="text-sm">GMC Yukon: 5-6 large suitcases. Toyota Camry: 2-3 large suitcases. Zamzam containers accommodated in all vehicles.</p>
                                </div>
                            </div>
                        </div>

                        {/* Meeting Point Details */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                <Plane className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Point Details</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Terminal 1:</p>
                                    <p className="text-sm">Meet at the "Aquarium" (large fish tank near arrivals exit). Driver holds name sign. Landmark: Near Starbucks.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">North Terminal:</p>
                                    <p className="text-sm">Meet at Gate 2 (main exit). Driver waits outside customs area. Look for name sign with "Taxi Service KSA" logo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips Section */}
                    <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                            Pro Tips from Our Drivers
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-white mb-2">📱 Stay Connected:</p>
                                <p className="text-gray-300 text-sm">Buy SIM card BEFORE exiting customs. You'll need data to contact driver if needed. WhatsApp works on Saudi SIMs.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🕌 Ihram Timing:</p>
                                <p className="text-gray-300 text-sm">If flying during Hajj season, wear Ihram on plane. Airport changing rooms have 30+ min wait. Miqat boundary is before Jeddah.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">💰 Currency:</p>
                                <p className="text-gray-300 text-sm">Exchange small amount (SAR 200-300) at airport for immediate needs. Better rates in Makkah city. ATMs widely available.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🚗 Traffic Timing:</p>
                                <p className="text-gray-300 text-sm">Jeddah→Makkah traffic peaks 4-7 PM (weekdays). Early morning (5-8 AM) is fastest. Friday afternoons are busiest (Jummah prayer).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User-Generated Content Section */}
            <section className="mb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Jeddah Airport and transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Jeddah" />
                        <QuestionsDisplay location="Jeddah" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Jeddah" />
                        <QuestionForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service across 8 major Saudi airports with meet-and-greet.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                    {
                        name: 'Umrah Transport',
                        description: 'Complete Umrah journey transport from Jeddah Airport to Makkah and Madinah.',
                        href: '/services/umrah-transport',
                        icon: Car
                    },
                ]}
                title="Services Available in Jeddah"
                description="Professional taxi services with licensed drivers for all your Jeddah transport needs."
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Arrive with Peace of Mind</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Don&apos;t leave your arrival to chance. Book a guaranteed pickup from Jeddah Airport today.
                    </p>
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-8 rounded-full">
                        <Link href="/booking">
                            Book Airport Transfer
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
