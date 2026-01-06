import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, ShoppingBag } from 'lucide-react';
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
    title: 'VIP Private Transfer & Chauffeur Al Khobar | Bahrain Causeway',
    description: 'Premium VIP private transfer and executive chauffeur service in Al Khobar. Specialized cross-border King Fahd Causeway trips to Bahrain and DMM Airport transfers. Professional international standards.',
    keywords: ['Al Khobar VIP private transfer', 'Executive chauffeur Khobar', 'Bahrain Causeway VIP pickup', 'Premium Khobar to Bahrain transfer', 'Al Khobar corporate transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/al-khobar/',
        languages: {
            'en': 'https://transferksa.com/locations/al-khobar/',
            'ar': 'https://transferksa.com/ar/locations/al-khobar/',
            'ur': 'https://transferksa.com/ur/locations/al-khobar/',
            'x-default': 'https://transferksa.com/locations/al-khobar/',
        }
    },
    openGraph: {
        title: 'VIP Transfer in Al Khobar | Corniche & Causeway Trips',
        description: 'Premium VIP transfer service in Al Khobar for local travel & Causeway trips to Bahrain. Reliable, comfortable rides to Dammam Airport and Corniche.',
        url: 'https://transferksa.com/locations/al-khobar/',
        type: 'website',
    },
};

export default function AlKhobarPage() {
    const services = [
        { name: 'VIP Bahrain Causeway', description: 'Premium cross-border transfers via King Fahd Causeway to Bahrain.', icon: Car },
        { name: 'Executive Coastal Tour', description: 'VIP tours of Al Khobar Corniche and the Eastern Province waterfront.', icon: MapPin },
        { name: 'Full-Day VIP Chauffeur', description: 'Dedicated executive driver for business meetings and shopping at Al Rashid Mall.', icon: ShoppingBag },
        { name: 'Executive Airport Pickup', description: 'VIP meet & greet at King Fahd International Airport (DMM) to Khobar.', icon: Plane },
    ];

    const features = [
        'Experienced Causeway drivers',
        'Luxury sedans for business travel',
        '24/7 Service for mall & dinners',
        'Fixed rates to Dammam Airport',
        'Clean & Smoke-free vehicles',
        'Easy online booking',
    ];

    const khobarImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];





    return (
        <div className="bg-gray-50 min-h-screen">



            {/* Hero Section */}
            <Hero
                images={khobarImages}
                h1Text="VIP Private Transfer & Chauffeur Al Khobar"
                bookingFormTitle="Book Premium Transfer in Al Khobar"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Khobar
                    </span>
                }
                subtitle="Business & International Leisure Transport"
                location="Bahrain Causeway • DMM Airport • VIP"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Al Khobar"
                        description="Professional chauffeur and causeway transfer services in Al Khobar. We help travelers and shoppers with luxury vehicles and 24/7 availability for Bahrain Causeway trips and Corniche visits."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Causeway Trips', value: '15k+', icon: Car },
                            { label: 'Airport Pickups', value: '7,000+', icon: Plane },
                            { label: 'Safe Rides', value: '100%', icon: Shield }
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
                        OFFICIAL NOTE: We specialize in pre-booked Airport, Intercity, and VIP Causeway transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="King Fahd Causeway Status"
                    status="Traffic Alert"
                    lastUpdated="Weekend Update"
                    content="The Causeway to Bahrain experiences extreme congestion on Thursday nights and Saturday afternoons. Expect delays of 2-3 hours. Our drivers know the best times to cross."
                    tags={["CausewayTraffic", "BahrainBorder", "WeekendDelays", "BorderCrossing"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Why use a private driver for Bahrain?"
                    intro="Driving across the King Fahd Causeway involves 4 border checkpoints (Saudi Exit, Bridge Toll, Bahrain Entry, Insurance). It can be stressful."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'insurance',
                            question: 'Does my rental car work?',
                            answer: 'Most standard car rentals (Budget, Avis) do NOT allow border crossing without a specific NOC paper. Our vehicles have permanent GCC authorization.',
                            citation: 'Border Logistics'
                        },
                        {
                            id: 'q2',
                            condition: 'VIP Lane',
                            question: 'Is there a fast lane?',
                            answer: 'There is a VIP lane for diplomats/special pass holders, but taxis use the general lanes. However, our drivers know lane discipline to minimize wait times.',
                            citation: 'Causeway Rules'
                        },
                        {
                            id: 'q3',
                            condition: 'Return Trip',
                            question: 'Can you pick me up from Bahrain?',
                            answer: 'Yes, we offer round trips. We can drop you at a Manama hotel and pick you up days later.',
                            citation: 'Service Policy'
                        }
                    ]}
                />

                <SemanticField
                    title="Al Khobar: The Coastal Gem"
                    explanation="Khobar is the lifestyle capital of the Eastern Province. Knowing the districts matters."
                    concepts={[
                        {
                            label: 'Corniche',
                            description: 'The waterfront area with cafes and the Water Tower. The main destination for families.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Khobar'
                        },
                        {
                            label: 'Al Rashid Mall',
                            description: 'A historic shopping landmark. Taxis drop off at Gate 4 for easier access.',
                            internalLink: '/locations/al-khobar'
                        },
                        {
                            label: 'Half Moon Bay',
                            description: 'Beach resort area 30km south of the city. Requires a booked return ride as Ubers are rare there.',
                            internalLink: '/locations/dammam'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Khobar Cross-Border Transport"
                    clusters={[
                        {
                            category: "Bahrain Connections",
                            relevance: "Primary",
                            items: [
                                { label: "Causeway Taxi", url: "/services/intercity" },
                                { label: "Bahrain Airport (BAH)", url: "/services/airport-transfers" },
                                { label: "Manama City Tour", url: "/services/city-transport" }
                            ]
                        },
                        {
                            category: "Local Logistics",
                            relevance: "Secondary",
                            items: [
                                { label: "Dammam Airport (DMM)", url: "/locations/dammam", description: "50km Trip" },
                                { label: "Aramco Camp Access", url: "/locations/dhahran", description: "Restricted Gates" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Authoritative Signal */}
            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Driver Hussain Al-Ajmi'
                        reviewerTitle='Cross-Border Operations'
                        reviewDate="27 Dec 2025"
                        expertise={["Causeway Procedures", "Bahrain Customs", "VIP Handling"]}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Al Khobar Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connecting you to Bahrain, Dammam Airport, and the best shopping spots in the Eastern Province.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Khobar VIP Transfer</h2>
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
                            origin="Al Khobar Corniche"
                            locations={[
                                { destination: 'Bahrain (Manama)', distance: '45 km', time: '1h+', route: 'King Fahd Causeway' },
                                { destination: 'Dammam Airport (DMM)', distance: '55 km', time: '45 mins', route: 'Dhahran-Jubail Expy' },
                                { destination: 'Half Moon Bay', distance: '30 km', time: '25 mins', route: 'Aziziah Rd' },
                                { destination: 'Aramco (Dhahran)', distance: '15 km', time: '15 mins', route: 'King Saud Rd' },
                                { destination: 'Riyadh', distance: '420 km', time: '4h', route: 'Route 40' }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Causeway Visa",
                                    commonBelief: "I can just drive through.",
                                    reality: "You need a visa. GCC residents have it easier, but international visitors should get an eVisa for Bahrain beforehand to avoid delay at the bridge customs office.",
                                    truthRange: "Document Check Required",
                                    factors: ["Visa Policy", "Nationality"]
                                },
                                {
                                    topic: "Alcohol Transport",
                                    commonBelief: "It's fine to bring duty-free.",
                                    reality: "Strictly Prohibited. Bringing alcohol from Bahrain to Saudi is illegal and results in arrest. Drivers will refuse to transport if they suspect contraband.",
                                    truthRange: "Zero Tolerance",
                                    factors: ["Saudi Law", "Customs Search"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <RoutePerspective
                            route="Al Khobar to Bahrain (The Bridge)"
                            perspectives={[
                                {
                                    id: "shopper",
                                    targetAudience: "Weekend Visitor",
                                    icon: ShoppingBag,
                                    intent: "Leisure",
                                    description: "Heading to City Centre Bahrain for movies and dining. The goal is passing the bridge quickly.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "Sedan" },
                                        { label: "Timing", value: "Weekday preferred" },
                                        { label: "Docs", value: "Passport Ready" }
                                    ],
                                    visualContext: "Sunset over the Gulf water."
                                },
                                {
                                    id: "flight",
                                    targetAudience: "Transit Passenger",
                                    icon: Plane,
                                    intent: "Travel",
                                    description: "Catching a flight from Bahrain International Airport (BAH). Must leave 4-5 hours early to account for bridge traffic.",
                                    structuredFeatures: [
                                        { label: "Buffer", value: "Critical" },
                                        { label: "Luggage", value: "Customs clear" }
                                    ],
                                    visualContext: "Traffic queues at border control."
                                }
                            ]}
                        />
                    </div>

                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Is there a VIP transfer service from Al Khobar to Bahrain?",
                                shortAnswer: "Yes, VIP Causeway Trips",
                                detailedAnswer: "We specialize in cross-border VIP transfers via King Fahd Causeway. Ensure you have your passport/ID and visa ready. We handle the vehicle insurance paperwork for the bridge.",
                                perspectives: [
                                    { role: "Driver", icon: "Car", insight: "Thursday evenings are busy; weekday mornings are fastest." },
                                    { role: "Business", icon: "Briefcase", insight: "Direct hotel-to-hotel (Khobar to Manama) service is seamless." }
                                ]
                            },
                            {
                                question: "How long to Dammam Airport (DMM)?",
                                shortAnswer: "45-60 Minutes",
                                detailedAnswer: "King Fahd International Airport (DMM) is about 50km away. Traffic is usually light on the highway, but we recommend allowing 1 hour during evening rush.",
                                perspectives: [
                                    { role: "Traveler", icon: "Plane", insight: "The airport is huge; driver meeting at the specific gate is helpful." }
                                ]
                            },
                            {
                                question: "Do you wait at malls like Al Rashid?",
                                shortAnswer: "Pre-booked Return",
                                detailedAnswer: "We drop at Al Rashid or Mall of Dhahran. For return, book a specific time. Waiting on-site incurs hourly charges, so pre-booking the return leg is cheaper.",
                                perspectives: [
                                    { role: "Shopper", icon: "ShoppingBag", insight: "Convenient for carrying heavy bags back to the hotel." }
                                ]
                            },
                            {
                                question: "Can I pay with credit card?",
                                shortAnswer: "Yes, Online or POS",
                                detailedAnswer: "You can prepay online to secure the ride. Most drivers also have STC Pay or POS terminals, but cash is always a reliable backup.",
                                perspectives: [
                                    { role: "Local", icon: "CreditCard", insight: "Mada cards work perfectly." }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Fixed Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Khobar VIP Transfer Fares
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Transparent rates for Bahrain Causeway and Airport transfers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">To Bahrain</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 350
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                VIP Causeway Transfer
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                BEST VALUE
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Dammam Airport</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Meet & Greet Service
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <ShoppingBag className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">VIP City Disposal</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 600
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Full-Day Executive Chauffeur (8 hours)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Al Khobar" />
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Al Khobar VIP Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for Causeway trips, Corniche visits, and Airport transfers.
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
