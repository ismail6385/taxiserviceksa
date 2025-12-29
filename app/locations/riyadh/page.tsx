import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import ExpertReview from '@/components/seo/ExpertReview';
import DistanceTable from '@/components/seo/DistanceTable';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';

export const metadata: Metadata = {
    title: 'Taxi Service in Riyadh | Airport Transfer & Corporate Transport KSA',
    description: 'Taxi service in Riyadh operates 24/7 for airport transfers and corporate travel. King Khalid Airport to Riyadh city center. Fixed rates for business transport.',
    keywords: ['taxi service in Riyadh', 'Riyadh taxi', 'King Khalid Airport transfer', 'Riyadh corporate transport', 'business taxi Riyadh', 'rent a car with driver in riyadh', 'chauffeur service in riyadh', 'toyota hiace for rent in riyadh monthly', '7 seater rent a car riyadh', 'luxury car rental riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/',
    },
    openGraph: {
        title: 'Taxi Service in Riyadh | Airport Transfer & Corporate Transport',
        description: 'Taxi service in Riyadh operates 24/7. King Khalid Airport transfers and corporate travel. Fixed rates. Book online.',
        url: 'https://taxiserviceksa.com/locations/riyadh/',
        type: 'website',
    },
};

export default function RiyadhPage() {
    const services = [
        { name: 'King Khalid Airport Transfer', description: 'Transfers from King Khalid International Airport (RUH) to Riyadh hotels and business districts', icon: Plane },
        { name: 'Corporate Transport Riyadh', description: 'Executive transport for business meetings, conferences, and corporate events', icon: Building2 },
        { name: 'Riyadh to Jeddah Taxi', description: 'Intercity travel between Riyadh and Jeddah (950 km, 9-10 hours)', icon: Car },
        { name: 'Riyadh City Tours', description: 'Transport to Kingdom Centre, Masmak Fort, and Diriyah UNESCO site', icon: MapPin },
    ];

    const features = [
        'Licensed drivers with Riyadh route knowledge',
        'Airport pickup with flight tracking',
        'Executive vehicles for corporate clients',
        '24/7 availability for business travel',
        'Fixed fares with no surge pricing',
        'English and Arabic speaking staff',
    ];

    const riyadhImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const distanceData = [
        { destination: 'King Khalid Airport (RUH)', distance: '35 km', time: '35-45 mins', route: 'King Salman Rd' },
        { destination: 'KAFD (Financial District)', distance: '15 km', time: '20 mins', route: 'King Fahd Rd' },
        { destination: 'Kingdom Centre (Olaya)', distance: '5 km', time: '10-15 mins', route: 'Olaya St' },
        { destination: 'Diplomatic Quarter', distance: '12 km', time: '20 mins', route: 'Makkah Rd' },
        { destination: 'Dammam/Khobar', distance: '400 km', time: '3.5-4 hours', route: 'Route 40' }
    ];





    return (
        <div className="bg-gray-50 min-h-screen">



            {/* Hero Section */}
            <Hero
                images={riyadhImages}
                h1Text="Taxi Service in Riyadh: Airport Transfers and Corporate Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh Taxi Service
                    </span>
                }
                subtitle="Professional Business Transport"
                location="24/7 Airport & Corporate Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Riyadh"
                        description="Professional chauffeur and corporate transport services in Riyadh. We help business executives and travelers with luxury vehicles and 24/7 availability for King Khalid International Airport (RUH) and KAFD meetings."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Corporate Clients', value: '1,200+', icon: Building2 },
                            { label: 'Airport Trips', value: '18k+', icon: Plane },
                            { label: 'Reliability', value: '99.9%', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taxi Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email Us
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Riyadh Metro & Traffic"
                    status="Traffic Alert"
                    lastUpdated="Daily Update"
                    content="Ongoing roadworks for Riyadh Metro and Green Riyadh projects are causing significant delays in Olaya and Malaz. We use Waze-optimized alternative routes to avoid bottlenecks."
                    tags={["RiyadhMetro", "Roadworks", "OlayaTraffic", "SmartRouting"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Uber vs Private Chauffeur in Riyadh?"
                    intro="Richer travelers and executives often debate this. The answer depends on your value of time and certainty."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Reliability',
                            question: 'Can I rely on Uber for meetings?',
                            answer: 'Risky. Cancellations are frequent during peak heat or traffic. A private chauffeur is contractually bound to be there 15 mins early.',
                            citation: 'Business Traveler Survey'
                        },
                        {
                            id: 'q2',
                            condition: 'Vehicle Quality',
                            question: 'Are cars clean?',
                            answer: 'Ride-share quality varies. Our corporate fleet (GMC/BMW/Camry) undergoes daily detailing and smoke-free checks.',
                            citation: 'Fleet Standards'
                        },
                        {
                            id: 'q3',
                            condition: 'Security',
                            question: 'KAFD Access?',
                            answer: 'Ride-share drivers often lack security clearance for gated compounds. We register driver IDs in advance for seamless entry.',
                            citation: 'Security Protocol'
                        }
                    ]}
                />

                <SemanticField
                    title="Riyadh: The Power Center"
                    explanation="Riyadh is the heartbeat of Vision 2030. Navigating its sprawling geography requires understanding its key nodes."
                    concepts={[
                        {
                            label: 'KAFD',
                            description: 'King Abdullah Financial District. The futurist business hub. Requires specific gate access.',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Abdullah_Financial_District'
                        },
                        {
                            label: 'Diriyah Gate',
                            description: 'The birthplace of the Saudi state. A UNESCO heritage site requiring timed entry for vehicles.',
                            internalLink: '/locations/riyadh'
                        },
                        {
                            label: 'The Line (Connection)',
                            description: 'Riyadh is the HQ for NEOM projects. Many executives travel between RUH and Tabuk.',
                            internalLink: '/services/corporate-travel'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Riyadh Business Logistics"
                    clusters={[
                        {
                            category: "Corporate Services",
                            relevance: "Primary",
                            items: [
                                { label: "Monthly Chauffeur", url: "/services/corporate-travel" },
                                { label: "Event Transport", url: "/services/events" },
                                { label: "Airport VIP", url: "/services/airport-transfers" }
                            ]
                        },
                        {
                            category: "Districts",
                            relevance: "Secondary",
                            items: [
                                { label: "Olaya Guide", url: "/locations/riyadh", description: "Central Business District" },
                                { label: "Diplomatic Quarter", url: "/locations/riyadh", description: "Embassies & Ministries" }
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
                        <span className="text-gray-900 font-semibold">Riyadh</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Fahad Al-Malki'
                        reviewerTitle='Corporate Transport Manager'
                        reviewDate="26 Dec 2025"
                        expertise={["KAFD Access Protocols", "VIP Security", "Dammam Highway"]}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Riyadh Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional taxi service for business travelers and airport transfers in Saudi Arabia's capital city.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Riyadh Taxi Service</h2>
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

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips city="Riyadh" />
                    <div className="mt-12">
                        <DistanceTable origin="King Khalid Airport" locations={distanceData} />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Riyadh Metro Status",
                                    commonBelief: "It's fully open.",
                                    reality: "While parts are operational, full city-wide connectivity is still rolling out. Key business districts like KAFD are linked, but last-mile transport to hotels often still requires a taxi.",
                                    truthRange: "Partially Operational",
                                    factors: ["Station Access", "Timings", "Last Mile"]
                                },
                                {
                                    topic: "Traffic Jam Timing",
                                    commonBelief: "Avoid 5 PM.",
                                    reality: "Riyadh traffic peaks from 4 PM to 8 PM continuously. Thursday evenings are gridlocked until 10 PM. Early morning flights (before 6 AM) are the best way to beat the rush.",
                                    truthRange: "4 PM - 9 PM",
                                    factors: ["School Runs", "Office Exit"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            route="King Khalid Airport to Downtown (Olaya)"
                            perspectives={[
                                {
                                    id: "business",
                                    targetAudience: "Executive",
                                    icon: Building2,
                                    intent: "Meeting Punctuality",
                                    description: "The priority is reaching the meeting on time. We take the express lane on King Salman Road to avoid the local exits. The vehicle becomes a mobile office.",
                                    structuredFeatures: [
                                        { label: "Route", value: "King Fahd Exp" },
                                        { label: "WiFi", value: "High Speed" },
                                        { label: "Privacy", value: "High" }
                                    ],
                                    visualContext: "Skyline view of KAFD approaching from North."
                                },
                                {
                                    id: "family",
                                    targetAudience: "Relocation Family",
                                    icon: Users,
                                    intent: "Comfort",
                                    description: "Arriving with 10+ suitcases for a long stay. We use the GMC Yukon XL to fit everything without needing a second car. Direct to compound gate.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "Yukon XL" },
                                        { label: "Luggage", value: "8+ Bags" },
                                        { label: "Child Seat", value: "Available" }
                                    ],
                                    visualContext: "Spacious trunk loading at Terminal 2."
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* Micro-Semantic FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How long is the taxi ride from Riyadh Airport to the city center?",
                                shortAnswer: "30-45 Minutes",
                                detailedAnswer: "King Khalid International Airport (RUH) is 35km from Olaya/Downtown. Rush hour (7-9 AM, 4-6 PM) can extend this to 60+ minutes. We track flight arrivals to adjust pickup times.",
                                perspectives: [
                                    { role: "Business", icon: "Building2", insight: "Take King Fahd Rd for speed, but Olaya St for better hotel access." },
                                    { role: "Local", icon: "Clock", insight: "Avoid Sunday morning rush hour if possible." }
                                ]
                            },
                            {
                                question: "How much is a taxi from Riyadh to Jeddah?",
                                shortAnswer: "From 1200 SAR",
                                detailedAnswer: "The 950km journey takes 9-10 hours. We provide comfortable SUVs (GMC/Tahoe) for this long haul, including rest stops. It's a popular overnight option for those who prefer ground travel.",
                                perspectives: [
                                    { role: "Driver", icon: "Car", insight: "Route 40 is a safe, dual highway. We stop at SASCO stations for fuel and food." },
                                    { role: "Family", icon: "Users", insight: "Cheaper than 5 flight tickets and more flexible with luggage." }
                                ]
                            },
                            {
                                question: "Do you offer monthly car rental with driver?",
                                shortAnswer: "Yes, Corporate Rates",
                                detailedAnswer: "We specialize in monthly contracts for corporate executives. Includes fuel, insurance, maintenance, and a dedicated English-speaking driver knowledgeable in Riyadh business districts.",
                                perspectives: [
                                    { role: "Expat", icon: "User", insight: "Hassle-free compared to buying a car or dealing with daily Uber scheduling." },
                                    { role: "Company", icon: "Shield", insight: "VAT invoices provided for expensing." }
                                ]
                            },
                            {
                                question: "Is taxi service available 24/7 in Riyadh?",
                                shortAnswer: "Yes, All Areas",
                                detailedAnswer: "Riyadh is a 24-hour city. We operate round the clock, serving airport arrivals, late-night business meetings, and early morning departures.",
                                perspectives: [
                                    { role: "Night Shift", icon: "Clock", insight: "Reliable pickup from KAFD even at 3 AM." }
                                ]
                            },
                            {
                                question: "Do drivers know KAFD and Diplomatic Quarter?",
                                shortAnswer: "Yes, Permit Holders",
                                detailedAnswer: "Our drivers are familiar with the security protocols for entering Key business zones like KAFD and the Diplomatic Quarter (DQ).",
                                perspectives: [
                                    { role: "Security", icon: "Shield", insight: "We provide driver ID details in advance for gate clearance." }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Practical Information - Riyadh Business Focus */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Practical Information
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Essential Information for Riyadh Business Travelers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world details to help you navigate Riyadh's business districts and maximize productivity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Business Districts */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Building2 className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Districts</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">King Abdullah Financial District (KAFD):</h4>
                                    <p className="text-sm">35 km from airport (30-40 min). Major banks, financial institutions. Peak traffic: 7-9 AM, 4-6 PM.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Olaya District:</h4>
                                    <p className="text-sm">25 km from airport (25-35 min). Kingdom Centre, Al Faisaliah Tower. Business hub with hotels and restaurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* King Khalid Airport */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Plane className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">King Khalid Airport (RUH)</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Terminals:</h4>
                                    <p className="text-sm">Terminal 1: Saudia domestic. Terminal 2: International. Terminal 3: Low-cost carriers. Terminal 5: Saudia international.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Meeting Point:</h4>
                                    <p className="text-sm">Terminal 2: Arrivals hall, near Starbucks. Driver holds name sign. Free WiFi available.</p>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Facilities */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Facilities</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Monthly Billing:</h4>
                                    <p className="text-sm">Corporate accounts available. Invoice sent monthly. Payment via bank transfer. Minimum 10 trips/month.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Priority Booking:</h4>
                                    <p className="text-sm">Corporate clients get priority during peak hours. Dedicated account manager. 24/7 booking support via email.</p>
                                </div>
                            </div>
                        </div>

                        {/* Meeting Venues */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Venues</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Popular Venues:</h4>
                                    <p className="text-sm">Riyadh International Convention Center (RICC), Four Seasons Hotel, Ritz-Carlton. Drivers know all major venues.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Timing Advice:</h4>
                                    <p className="text-sm">Book taxi 60-90 min before meeting. Riyadh traffic unpredictable. Allow extra time for security checks at towers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Accommodation */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Car className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hotels</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Olaya District Hotels:</h4>
                                    <p className="text-sm">Ritz-Carlton, Four Seasons, Burj Rafal. Walking distance to Kingdom Centre. Taxi needed for KAFD (15 min).</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Diplomatic Quarter:</h4>
                                    <p className="text-sm">Quieter area. 20 km from Olaya (20-30 min). Ideal for government meetings. Limited restaurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Transport Timing */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Clock className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic & Timing</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Peak Hours:</h4>
                                    <p className="text-sm">Morning: 7-9 AM (worst on King Fahd Road). Evening: 4-6 PM. Thursday evenings: Very busy (weekend starts).</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Best Times:</h4>
                                    <p className="text-sm">Early morning (6-7 AM): Minimal traffic. Midday (12-2 PM): Moderate. Friday mornings: Empty roads (prayer time).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips Section */}
                    <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                            Pro Tips for Business Travelers
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-white mb-2">🏢 KAFD Access:</p>
                                <p className="text-gray-300 text-sm">Security checkpoint at KAFD entrance. Have meeting invitation ready. Driver can't enter without authorization. Drop-off at gate.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">⏰ Meeting Timing:</p>
                                <p className="text-gray-300 text-sm">Riyadh meetings often start 15-30 min late (cultural norm). Don't stress if taxi arrives early. Use time for email/calls.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">📱 WiFi Strategy:</p>
                                <p className="text-gray-300 text-sm">Airport WiFi is free but slow. Buy local SIM (Mobily/STC) at airport. Data plans: SAR 100-200/month. Essential for maps/email.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🚗 Vehicle Choice:</p>
                                <p className="text-gray-300 text-sm">GMC Yukon for client meetings (premium impression). Toyota Camry for solo travel (efficient). Both have WiFi hotspot on request.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🌡️ Climate:</p>
                                <p className="text-gray-300 text-sm">Summer (May-Sep): 40-48°C. Wear light suit. Our vehicles maintain 20-22°C AC. Carry water bottle (we provide).</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🕌 Prayer Times:</p>
                                <p className="text-gray-300 text-sm">Shops/offices close 15-20 min for each prayer (5 times daily). Plan meetings around prayer times. Friday: Jummah prayer 12-2 PM (everything closed).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User-Generated Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Business Travel Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow business travelers by sharing your experience or asking questions about corporate transport in Riyadh.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Riyadh" />
                        <QuestionsDisplay location="Riyadh" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Riyadh" />
                        <QuestionForm locationName="Riyadh" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Corporate Travel',
                        description: 'Executive transport for business professionals with monthly billing and priority booking.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from King Khalid Airport with meet-and-greet.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Riyadh"
                description="Professional taxi services with licensed drivers for business and airport transport."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Riyadh Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for business travelers and airport transfers in Saudi Arabia's capital.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <Link href="/booking">
                                Book Your Ride
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                Email Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
