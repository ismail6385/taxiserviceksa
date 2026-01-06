import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Anchor } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import DistanceTable from '@/components/seo/DistanceTable';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur Yanbu | Airport & Industrial Port',
    description: 'Premium VIP private transfer and executive chauffeur service in Yanbu. Specialized Prince Abdul Mohsin Airport (YNB) pickups and industrial city port transfers. Professional corporate standards.',
    keywords: ['Yanbu VIP private transfer', 'Executive chauffeur Yanbu', 'YNB Airport VIP pickup', 'Yanbu industrial port transfer', 'Yanbu corporate transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/yanbu/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/yanbu/',
            'ar': 'https://taxiserviceksa.com/ar/locations/yanbu/',
            'ur': 'https://taxiserviceksa.com/ur/locations/yanbu/',
            'x-default': 'https://taxiserviceksa.com/locations/yanbu/',
        }
    },
    openGraph: {
        title: 'VIP Transfer in Yanbu | Airport Transfer & Industrial Transport',
        description: 'VIP transfer service in Yanbu operates 24/7. Premium airport transfers and industrial city transport. Fixed rates. Book online.',
        url: 'https://taxiserviceksa.com/locations/yanbu/',
        type: 'website',
    },
};

export default function YanbuPage() {
    const services = [
        { name: 'Yanbu Airport Transfer', description: 'Transfers from Prince Abdul Mohsin bin Abdulaziz Airport (YNB) to Yanbu hotels', icon: Plane },
        { name: 'Industrial City Transport', description: 'Transport to Yanbu Industrial City, petrochemical facilities, and port areas', icon: Anchor },
        { name: 'Yanbu to Madinah VIP Transfer', description: 'Intercity travel between Yanbu and Madinah (220 km, 2.5-3 hours)', icon: Car },
        { name: 'Red Sea Waterfront Tours', description: 'Transport to Yanbu Corniche, diving centers, and Red Sea beaches', icon: MapPin },
    ];

    const features = [
        'Licensed drivers with Yanbu route knowledge',
        'Airport pickup with flight tracking',
        'Industrial area access permits',
        '24/7 availability for shift workers',
        'Fixed fares with no surge pricing',
        'English and Arabic speaking staff',
    ];

    const yanbuImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];





    return (
        <div className="bg-gray-50 min-h-screen">


            {/* Hero Section */}
            <Hero
                images={yanbuImages}
                h1Text="VIP Private Transfer & Chauffeur Yanbu"
                bookingFormTitle="Book Premium Transfer in Yanbu"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Yanbu
                    </span>
                }
                subtitle="Industrial Hub & Red Sea Executive Gateway"
                location="24/7 VIP Airport & Port Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Yanbu"
                        description="Professional chauffeur and airport transfer services in Yanbu. We help industrial workers, port personnel, and travelers with luxury vehicles and 24/7 availability for Yanbu Airport and Industrial City transport."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Industrial Trips', value: '10k+', icon: Anchor },
                            { label: 'Airport Pickups', value: '5,000+', icon: Plane },
                            { label: 'Reliability', value: '99.9%', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking/">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                        <a href="mailto:info@taxiserviceksa.com">
                            Email Us
                        </a>
                    </Button>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Airport, Port, and VIP Industrial transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Royal Commission Access"
                    status="Traffic Alert"
                    lastUpdated="Gate Protocols"
                    content="Access to Yanbu Industrial City (Royal Commission) usually requires ID checks at checkpoints. Taxis dropped at the main entries unless you have a Resident Sponsorship."
                    tags={["RCYanbu", "GateCheck", "IDRequired", "IndustrialZone"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Is Yanbu one city or two?"
                    intro="Visitors are often confused. Yanbu is split into 'Yanbu Al Bahr' (Old Town/Beach) and 'Yanbu Al Sinaiyah' (Industrial City). They are 20km apart."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Airport',
                            question: 'Where is the airport?',
                            answer: 'Yanbu Airport (YNB) is closer to the Old Town/Resorts. To get to the Industrial City hotels (Royal Commission), it is a 20-25 min highway drive.',
                            citation: 'City Map'
                        },
                        {
                            id: 'q2',
                            condition: 'Diving',
                            question: 'Where are the dive centers?',
                            answer: 'Most dive centers and the new waterfront are in Yanbu Al Bahr. Taxis are essential to move between your hotel and the marina with gear.',
                            citation: 'Diving Guide'
                        },
                        {
                            id: 'q3',
                            condition: 'Port Access',
                            question: 'Can I go to the Commercial Port?',
                            answer: 'Commercial Port access is strictly for crew and authorized personnel. We drop at the Seamen\'s Club gate or the Main Customs gate.',
                            citation: 'Port Authority'
                        }
                    ]}
                />

                <SemanticField
                    title="The Dual Cities of Yanbu"
                    explanation="Understanding the layout is critical for booking the right hotel and transport."
                    concepts={[
                        {
                            label: 'Yanbu Al Sinaiyah',
                            description: 'The Royal Commission sector. Modern, organized, home to refineries and expat compounds. The \'Industrial Heart\'.',
                            wikiLink: 'https://rcrc.gov.sa/'
                        },
                        {
                            label: 'Yanbu Al Bahr',
                            description: 'The historic connector. Crowded souqs, resorts, and the Sharm Yanbu (Creek). The \'Tourist Heart\'.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Yanbu'
                        },
                        {
                            label: 'Yanbu Al Nakhl',
                            description: 'The agricultural villages inland. Famous for date farms and springs. A 40-minute drive from the coast.',
                            internalLink: '/locations/yanbu'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Yanbu Transport Logistics"
                    clusters={[
                        {
                            category: "Industrial Support",
                            relevance: "Primary",
                            items: [
                                { label: "Shift Transport", url: "/services/corporate-travel" },
                                { label: "Plant Shuttle", url: "/services/industrial" },
                                { label: "Port Transfer", url: "/services/city-transport" }
                            ]
                        },
                        {
                            category: "Red Sea Tourism",
                            relevance: "Secondary",
                            items: [
                                { label: "Hotel to Marina", url: "/services/city-transport", description: "Diving Gear Friendly" },
                                { label: "Yanbu to Madinah", url: "/locations/madinah", description: "Post-Umrah Relax" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Authoritative Signal */}
            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Coordinator Saad Al-Juhani'
                        reviewerTitle='Yanbu Fleet Supervisor'
                        reviewDate="28 Dec 2025"
                        expertise={["RC Regulations", "Port Security", "Madinah Route"]}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Executive Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Yanbu Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Professional VIP chauffeur service for industrial executives, port personnel, and Red Sea travelers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Yanbu VIP Transfer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* Micro-Semantic FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-12 mb-16">
                        <DistanceTable
                            origin="Yanbu Airport (YNB)"
                            locations={[
                                { destination: 'Royal Commission (RC)', distance: '25 km', time: '20 mins', route: 'King Abdulaziz Rd' },
                                { destination: 'Yanbu Commercial Port', distance: '15 km', time: '15 mins', route: 'Port Rd' },
                                { destination: 'Yanbu Al Bahr (Old Town)', distance: '10 km', time: '12 mins', route: 'Corniche Rd' },
                                { destination: 'Madinah', distance: '220 km', time: '2h 30m', route: 'Route 60' },
                                { destination: 'Jeddah', distance: '330 km', time: '3h 30m', route: 'Coastal Hwy' }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "VIP Service Availability",
                                    commonBelief: "I can hail one on the street.",
                                    reality: "In the Royal Commission (Industrial City), street taxis are BANNED/non-existent. You MUST book a private VIP transfer or use a licensed app. Street hailing only works in Old Town.",
                                    truthRange: "Booking Required (RC)",
                                    factors: ["RC Rules", "Zoning"]
                                },
                                {
                                    topic: "Driving to Madinah",
                                    commonBelief: "It's a long trip.",
                                    reality: "It's actually very fast. The highway (Route 60) is excellent. Many pilgrims visit Yanbu for a beach day after Ziyarat.",
                                    truthRange: "Easy Day Trip",
                                    factors: ["Highway Quality"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <RoutePerspective
                            route="Yanbu Airport to Refinery/Plant"
                            perspectives={[
                                {
                                    id: "engineer",
                                    targetAudience: "Technical Expert",
                                    icon: Anchor,
                                    intent: "Work",
                                    description: "Flying in for a shutdown or maintenance. Needs direct transport to the contractor camp or plant gate.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "SUV" },
                                        { label: "Permit", value: "Gate Pass Ready" }
                                    ],
                                    visualContext: "Passing flame towers and pipe racks."
                                },
                                {
                                    id: "diver",
                                    targetAudience: "Tourist",
                                    icon: MapPin,
                                    intent: "Leisure",
                                    description: "Arriving with heavy dive bags. Heading to a resort in Sharm Yanbu.",
                                    structuredFeatures: [
                                        { label: "Trunk", value: "Extra Large" },
                                        { label: "Route", value: "Coastal Scenics" }
                                    ],
                                    visualContext: "Blue water views."
                                }
                            ]}
                        />
                    </div>

                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How far is Yanbu Airport from the Industrial City?",
                                shortAnswer: "15-20 Minutes",
                                detailedAnswer: "Prince Abdul Mohsin Airport (YNB) is located about 10-15km from the Royal Commission/Industrial area. It is a quick highway drive. We track all inbound flights.",
                                perspectives: [
                                    { role: "Worker", icon: "Clock", insight: "Shift changes are prompt; transfer is reliable." },
                                    { role: "Expat", icon: "Plane", insight: "Small, efficient airport. Driver waits at the single exit gate." }
                                ]
                            },
                            {
                                question: "How much is a VIP transfer from Yanbu to Madinah?",
                                shortAnswer: "400 - 500 SAR",
                                detailedAnswer: "The 220km trip via Route 60 takes about 2.5 hours. We use reliable sedans or SUVs. We can drop you at the Haramain Train Station or your hotel in Madinah.",
                                perspectives: [
                                    { role: "Pilgrim", icon: "MapPin", insight: "Perfect for connecting flights if Madinah airport is busy." },
                                    { role: "Driver", icon: "Car", insight: "Smooth, well-lit dual carriageway." }
                                ]
                            },
                            {
                                question: "Do taxis have access to Yanbu Commercial Port?",
                                shortAnswer: "Yes, with Permits",
                                detailedAnswer: "We serve the port layout. However, for restricted ISPS zones inside the port, we need prior clearance or we drop at the main gate.",
                                perspectives: [
                                    { role: "Shipping Agent", icon: "Anchor", insight: "Essential for crew transfers. Book in advance." }
                                ]
                            },
                            {
                                question: "Do you offer shift transport for workers?",
                                shortAnswer: "Yes, 24/7",
                                detailedAnswer: "We understand the 24-hour nature of Yanbu's petrochemical industry. We guarantee pre-booked pickups for night shifts or early morning starts.",
                                perspectives: [
                                    { role: "Manager", icon: "Users", insight: "Corporate billing available for team transport." }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Industrial & City Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            VIP Yanbu Transfer Rates
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates for Royal Commission, Airport, and Intercity trips.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport to RC</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 100
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                To Industrial City / Hotels
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                MOST BOOKED
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Yanbu to Madinah</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">From</span> SAR 400
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                One-Way Intercity Trip
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Anchor className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Port Transfer</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 150
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Crew & Staff Transport
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Yanbu" />
            </div>



            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Yanbu VIP Transfer Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for industrial workers, port access, and Red Sea travel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book VIP Transfer
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
