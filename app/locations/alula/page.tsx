import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Compass } from 'lucide-react';
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
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import DistanceTable from '@/components/seo/DistanceTable';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur AlUla | Hegra Heritage Tours',
    description: 'Premium VIP private transfer and executive chauffeur service in AlUla. Specialized UNESCO heritage site transport to Hegra and ULH Airport transfers. Premium 4x4 vehicles for desert luxury.',
    keywords: ['AlUla VIP private transfer', 'Executive chauffeur AlUla', 'Hegra VIP tours', 'ULH Airport VIP pickup', 'AlUla premium desert transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/alula/',
        languages: {
            'en': 'https://transferksa.com/locations/alula/',
            'ar': 'https://transferksa.com/ar/locations/alula/',
            'ur': 'https://transferksa.com/ur/locations/alula/',
            'x-default': 'https://transferksa.com/locations/alula/',
        }
    },
    openGraph: {
        title: 'VIP Transfer in AlUla | Hegra Tours & Airport Pickup',
        description: 'VIP transfer service in AlUla for UNESCO heritage tours and airport pickups. Premium 4x4 vehicles for desert sites. Book online.',
        url: 'https://transferksa.com/locations/alula/',
        type: 'website',
    },
};

export default function AlUlaPage() {
    const services = [
        { name: 'AlUla Airport Transfer', description: 'Transfers from AlUla International Airport (ULH) to AlUla hotels and resorts', icon: Plane },
        { name: 'Hegra UNESCO Tours', description: 'Transport to Hegra archaeological site (Madain Saleh) with 4x4 desert vehicles', icon: Compass },
        { name: 'AlUla Heritage Circuit', description: 'Tours to Dadan, Jabal Ikmah, and Elephant Rock heritage sites', icon: MapPin },
        { name: 'AlUla to Khaybar Route', description: 'Intercity travel between AlUla and Khaybar Fort (150 km)', icon: Car },
    ];

    const features = [
        'Drivers with AlUla heritage site knowledge',
        '4x4 vehicles for desert terrain access',
        'Airport pickup with flight tracking',
        'Flexible tour schedules for photography',
        'Fixed fares with no hidden charges',
        'English and Arabic speaking guides',
    ];

    const alulaImages = [
        '/alula-hegra-tombs.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];





    return (
        <div className="bg-gray-50 min-h-screen">



            {/* Hero Section */}
            <Hero
                images={alulaImages}
                h1Text="VIP Private Transfer & Chauffeur AlUla"
                bookingFormTitle="Book Premium Transfer in AlUla"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service AlUla
                    </span>
                }
                subtitle="UNESCO Heritage & Desert Excellence"
                location="Premium 4x4 Desert Transfers"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ AlUla"
                        description="Professional chauffeur and heritage tour services in AlUla. We help tourists and travelers with luxury 4x4 vehicles and 24/7 availability for Hegra tours, Airport transfers, and desert exploration."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Heritage Tours', value: '3,000+', icon: Compass },
                            { label: 'Airport Pickups', value: '4,500+', icon: Plane },
                            { label: 'Reliability', value: '100%', icon: Shield }
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
                        <a href="mailto:info@transferksa.com">
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
                        OFFICIAL NOTE: We specialize in pre-booked Heritage, Intercity, and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Hegra (Madain Saleh) Access"
                    status="Insider Tip"
                    lastUpdated="Winter 2025"
                    content="Private vehicles are NOT allowed inside the Hegra archaeological site. Our driver will drop you at the Winter Park Visitor Center or your hotel, where you must board the official RCU bus for the tour."
                    tags={["HegraRules", "WinterPark", "PermitOnly", "BusTransfer"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Do I really need a VIP transfer in AlUla?"
                    intro="AlUla is vast. The distance between the Old Town and Hegra is over 25km. There is no public bus system."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Uber Availability',
                            question: 'Does Uber work here?',
                            answer: 'Very poorly. Drivers are scarce, especially at night or near remote resorts like Habitas. You risk being stranded.',
                            citation: 'Visitor Reports'
                        },
                        {
                            id: 'q2',
                            condition: 'Desert Driving',
                            question: 'Can I rent a small car?',
                            answer: 'Accessing Elephant Rock or campground parking often involves soft sand. We use 4x4 SUVs to prevent getting stuck.',
                            citation: 'Terrain Analysis'
                        },
                        {
                            id: 'q3',
                            condition: 'Site Spacing',
                            question: 'Are sites walkable?',
                            answer: 'No. Maraya Concert Hall, Hegra, and Old Town are kilometers apart. A dedicated driver for the day is highly recommended.',
                            citation: 'Map Agency'
                        }
                    ]}
                />

                <SemanticField
                    title="AlUla: The Open-Air Museum"
                    explanation="Understanding the layout of AlUla is key to planning your transport needs."
                    concepts={[
                        {
                            label: 'Winter Park',
                            description: 'The main logistics hub. All official tours to Hegra and Dadan depart from here by bus.',
                            wikiLink: 'https://www.experiencealula.com/'
                        },
                        {
                            label: 'Hegra',
                            description: 'The UNESCO site with 111 Nabataean tombs. 25km north of Old Town.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Hegra_(Mada%27in_Salih)'
                        },
                        {
                            label: 'Maraya',
                            description: 'The mirrored concert hall. Located in the Ashar Valley. Requires special permit or reservation to enter the valley gate.',
                            internalLink: '/locations/alula'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="AlUla Transport Logistics"
                    clusters={[
                        {
                            category: "Site Access",
                            relevance: "Primary",
                            items: [
                                { label: "Airport to Hotel", url: "/services/airport-transfers" },
                                { label: "Hegra Drop-off", url: "/services/heritage-tours" },
                                { label: "Winter Park Transfer", url: "/locations/alula" }
                            ]
                        },
                        {
                            category: "Adventure",
                            relevance: "Secondary",
                            items: [
                                { label: "Elephant Rock Sunset", url: "/locations/alula", description: "Evening Trips" },
                                { label: "Khaybar Day Trip", url: "/locations/khayber-fort", description: "Volcanic Fields" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Authoritative Signal */}
            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Guide Ibrahim Al-Balawi'
                        reviewerTitle='Heritage Site Specialist'
                        reviewDate="28 Dec 2025"
                        expertise={["Desert Navigation", "RCU Permits", "Photography Spots"]}
                    />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips city="AlUla" />
                    <div className="mt-12">
                        <DistanceTable
                            origin="AlUla Old Town"
                            locations={[
                                { destination: 'Hegra (Madain Saleh)', distance: '22 km', time: '25 mins', route: 'Hwy 375' },
                                { destination: 'AlUla Airport (ULH)', distance: '35 km', time: '40 mins', route: 'Airport Rd' },
                                { destination: 'Elephant Rock', distance: '12 km', time: '15 mins', route: 'Desert Track' },
                                { destination: 'Maraya Hall', distance: '18 km', time: '20 mins', route: 'Ashar Valley Gate' },
                                { destination: 'Khaybar Fort', distance: '185 km', time: '2h 15m', route: 'Route 70' }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Maraya Access",
                                    commonBelief: "We can just drive up to it.",
                                    reality: "NO. The Ashar Valley gate is strict. You need a restaurant reservation or concert ticket to pass. Taxis drop you at the gate unless you have a pass.",
                                    truthRange: "Restricted Access",
                                    factors: ["Reservation", "Security Gate"]
                                },
                                {
                                    topic: "Summer Heat",
                                    commonBelief: "It's like Riyadh.",
                                    reality: "It is hotter. Mid-day tours in July are dangerous. We schedule rides for sunrise/sunset.",
                                    truthRange: "Extreme Heat",
                                    factors: ["No Shade", "hydration"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            route="AlUla Airport to Resort (Banyan Tree/Habitas)"
                            perspectives={[
                                {
                                    id: "luxury",
                                    targetAudience: "Resort Guest",
                                    icon: Star,
                                    intent: "Relaxation",
                                    description: "Arriving at ULH airport. Our chauffeur handles all luggage and navigates the sometimes unmarked desert roads to the resort reception.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "GMC Yukon" },
                                        { label: "Luggage", value: "Full Service" },
                                        { label: "Gate", value: "Pre-Cleared" }
                                    ],
                                    visualContext: "Driving through sandstone canyons."
                                },
                                {
                                    id: "explorer",
                                    targetAudience: "History Buff",
                                    icon: Compass,
                                    intent: "Discovery",
                                    description: "Heading straight to Winter Park to pick up the Heritage Pass before checking in.",
                                    structuredFeatures: [
                                        { label: "Stop", value: "Winter Park" },
                                        { label: "Timing", value: "Tour Synced" },
                                        { label: "Flexibility", value: "High" }
                                    ],
                                    visualContext: "Passing Elephant Rock."
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Executive Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AlUla Heritage Transport</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Premium VIP private transport for UNESCO heritage tours and professional desert exploration in AlUla.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our AlUla VIP Transfer</h2>
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
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How far is Hegra from AlUla Airport?",
                                shortAnswer: "30km / 30 Minutes",
                                detailedAnswer: "Hegra (Madain Saleh) is a short drive from the airport. Note that private cars cannot enter the restricted tombs area; you must use the official bus from Winter Park or have a special permit.",
                                perspectives: [
                                    { role: "Tourist", icon: "Compass", insight: "Booking the official tour bus is mandatory for the site itself." },
                                    { role: "Driver", icon: "Car", insight: "We drop you at Winter Park or the hotel to catch the shuttle." }
                                ]
                            },
                            {
                                question: "Do you use 4x4 cars for desert tours?",
                                shortAnswer: "Yes, 4x4 Available",
                                detailedAnswer: "For Elephant Rock and remote desert campsites, we deploy GMC Yukons or Land Cruisers. Standard sedans can struggle in soft sand parking areas.",
                                perspectives: [
                                    { role: "Photographer", icon: "Maximize", insight: "4x4 is needed to get close to the best sunset spots." },
                                    { role: "Camper", icon: "Sun", insight: "Essential for reaching desert glamping sites safely." }
                                ]
                            },
                            {
                                question: "Can I book a driver for the whole day?",
                                shortAnswer: "Daily Rates Available",
                                detailedAnswer: "Since AlUla sites (Old Town, Hegra, Elephant Rock) are spread out, booking a driver for 8-10 hours is the most efficient way to see everything without waiting.",
                                perspectives: [
                                    { role: "Family", icon: "Users", insight: "Much easier than waiting for Ubers that don't exist here." }
                                ]
                            },
                            {
                                question: "Can I get a VIP transfer from AlUla to Khaybar?",
                                shortAnswer: "Yes, 2-3 Hours",
                                detailedAnswer: "The volcanic lava fields of Khaybar are 150km away. It's a popular day trip. We wait while you explore the fort and oasis.",
                                perspectives: [
                                    { role: "Historian", icon: "BookOpen", insight: "A must-see hidden gem nearby." }
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
                            <span className="text-sm font-semibold text-yellow-900">Heritage Rates</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            VIP Transport Fares
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Transparent pricing for executive airport transfers and daily chauffeur hire.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport Transfer</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 150
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                To City Hotels / Resorts
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                RECOMMENDED
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Daily Driver (8h)</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">From</span> SAR 800
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Dedicated Sedan for Tours
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Compass className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Winter Park Drop</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 100
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                One-Way Transfer
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="AlUla" />
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your AlUla Heritage Tour
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore UNESCO heritage sites with professional transport and 4x4 desert vehicles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book VIP Transfer
                            </Button>
                        </Link>
                        <a href="mailto:info@transferksa.com">
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
