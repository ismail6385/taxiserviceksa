import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Mountain, CloudFog, Flower2, ArrowRight, Plane } from 'lucide-react';
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
import RelatedServices from '@/components/seo/RelatedServices';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

export const metadata: Metadata = {
    title: 'Taxi Service in Taif | Makkah Transfers & Al Hada Tours',
    description: 'Taxi service requires mountain-ready vehicles for Al Hada road. Transfers from Makkah to Taif and Jeddah Airport available. Tours to Al Shafa rose farms.',
    keywords: ['Taif taxi service', 'Makkah to Taif taxi', 'Jeddah to Taif taxi', 'Al Hada transport', 'Taif rose farm tour', 'Qarn al Manazil taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/taif',
        languages: {
            'ar': 'https://taxiserviceksa.com/ar/locations/taif',
            'ur': 'https://taxiserviceksa.com/ur/locations/taif',
        }
    },
    openGraph: {
        title: 'Taxi Service in Taif | Makkah Transfers & Al Hada Tours',
        description: 'Private transport to Taif via Al Hada mountain road. Service includes stops at cable car and rose factories.',
        url: 'https://taxiserviceksa.com/locations/taif',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/taif-mountains-view.webp', alt: 'Taif Al Hada Mountain Road' }],
    },
};

export default function TaifPage() {
    const services = [
        { name: 'Makkah to Taif Transfer', description: 'Cool mountain escape (1 hr)', icon: Car },
        { name: 'Jeddah Airport to Taif', description: 'Direct transfer (2 hrs)', icon: MapPin },
        { name: 'Al Hada & Cable Car', description: 'Drop-off at top station', icon: CloudFog },
        { name: 'Rose Farm Tours', description: 'Seasonal factory visits (Mar-Apr)', icon: Flower2 },
    ];

    const taifImages = [
        '/taif-mountains-view.webp',
        '/taif-rose-gardens.webp',
        '/hero-slide-5.webp',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Makkah to Taif?",
            answer: "Taxi fare from Makkah to Taif ranges from 200-300 SAR. Distance is 90km via Al Hada road. Travel time is 60-75 minutes."
        },
        {
            question: "Is the road to Taif dangerous?",
            answer: "Al Hada mountain road is a dual carriageway with winding turns. Fog conditions occur frequently. Drivers are experienced with high-altitude navigation."
        },
        {
            question: "Can I visit the Taif Rose Farms anytime?",
            answer: "Rose harvesting season occurs in March and April. Factories in Al Shafa demonstrate oil distillation during this period. Farms remain open year-round for sightseeing."
        },
        {
            question: "Is there a Miqat in Taif?",
            answer: "Qarn al-Manazil (As-Sayl Al-Kabir) is the Miqat for pilgrims approaching Makkah from the East. Stops for Ihram are available upon request."
        },
        {
            question: "Is Uber available in Taif?",
            answer: "Ride-hailing apps operate in Taif city center. Private bookings are recommended for Al Shafa, Al Hada, and remote nature reserves due to connection reliability."
        }
    ];

    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '88 km', time: '1h 10m', route: 'Al Hada Rd' },
        { destination: 'Jeddah Airport', distance: '170 km', time: '2h', route: 'Taif-Jeddah Hwy' },
        { destination: 'Riyadh', distance: '780 km', time: '7h 30m', route: 'Route 40' },
        { destination: 'Miqat (Qarn al Manazil)', distance: '55 km', time: '45 mins', route: 'Non-Mountain' },
        { destination: 'Al Shafa Mountains', distance: '25 km (from City)', time: '30 mins', route: 'Shafa Rd' }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Taif",
        "image": "https://taxiserviceksa.com/taif-roses.jpg",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/taif",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Taif",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "640"
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
                        "name": "Taif Mountain Transfer",
                        "provider": { "@type": "LocalBusiness", "name": "TaxiServiceKSA Taif" },
                        "areaServed": { "@type": "City", "name": "Taif" },
                        "description": "Professional transport from Makkah to Taif via Al Hada mountain road."
                    })
                }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={taifImages}
                h1Text="Taxi Service in Taif: Makkah Transfers and Al Hada Tours"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        City of Roses
                    </span>
                }
                subtitle="Cool Mountain Breeze"
                location="Al Hada • Shafa • City Center"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Taif"
                        description="Driving the Al Hada mountain road requires skill and confidence. Our fleet is maintained for high-altitude performance, ensuring your ascent to the 'Summer Capital' is smooth and safe."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Mountain Trips', value: '5,000+', icon: Mountain },
                            { label: 'Pilgrims Served', value: '12k+', icon: Users },
                            { label: 'Fog Driving', value: 'Expert', icon: CloudFog }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking">
                            Book Taif Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                        <Link href="#pricing">
                            View Prices
                        </Link>
                    </Button>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Al Hada Road Status: Fog Alerts"
                    status="Traffic Alert"
                    lastUpdated="Winter 2024"
                    content="The Al Hada mountain road frequently closes during heavy rain or dense fog for safety. When closed, the alternative route (As-Sayl) adds 45 minutes to the trip. Our drivers monitor traffic police updates in real-time to choose the open route."
                    tags={["RoadClosure", "AlHada", "FogSafety", "DetourAlert"]}
                />
            </div>

            {/* SEO Content Semantic Hub - Wrapped for Desktop Responsiveness */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Is the drive from Makkah just about the destination?"
                    intro="No. The drive up the Al Hada escarpment is an experience in itself, often called the 'Road above the Clouds'. However, it comes with specific considerations."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Motion Sickness',
                            question: 'Is the road curvy?',
                            answer: 'Extremely. The road has dual carriageways but winds sharply up the cliff face. We recommend sitting in the front seat if you are prone to car sickness.',
                            citation: 'Traveler Health Tip'
                        },
                        {
                            id: 'q2',
                            condition: 'Temperature Drop',
                            question: 'Is it really cooler?',
                            answer: 'Yes. Expect a 10-15°C drop in temperature compared to Makkah. You might need a light jacket even in summer.',
                            citation: 'Weather Data'
                        },
                        {
                            id: 'q3',
                            condition: 'Fruit Markets',
                            question: 'Can we stop for fruit?',
                            answer: 'Absolutely. The road is lined with stalls selling seasonal Taif fruits (Pomegranates, Grapes, Figs, Prickly Pear). Just ask your driver.',
                            citation: 'Local Culture'
                        }
                    ]}
                />

                <SemanticField
                    title="Taif: The Fragrant Summit"
                    explanation="Taif usually serves two distinct purposes for our clients: a summer escape from the heat, or a transit point for pilgrims."
                    concepts={[
                        {
                            label: 'Al Hada',
                            description: 'The first mountain resort area you reach from Makkah. Famous for the Cable Car (Teleferic) and water park.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Hada'
                        },
                        {
                            label: 'Al Shafa',
                            description: 'Higher elevation than Al Hada, more rural, and home to the best rose farms. The road is steeper here.',
                            internalLink: '/locations/taif'
                        },
                        {
                            label: 'Souq Okaz',
                            description: 'An ancient pre-Islamic market revived as a massive cultural festival. located north of the city.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Souq_Okaz'
                        },
                        {
                            label: 'Shubra Palace',
                            description: 'The historical royal residence turned museum. A key stop for history lovers inside the city.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Shubra_Palace'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Taif Travel Hub"
                    clusters={[
                        {
                            category: "Key Routes",
                            relevance: "Primary",
                            items: [
                                { label: "Makkah to Taif Taxi", url: "/locations/makkah" },
                                { label: "Jeddah Airport to Taif", url: "/locations/jeddah" },
                                { label: "Riyadh to Taif (Overland)", url: "/services/intercity" }
                            ]
                        },
                        {
                            category: "Attractions",
                            relevance: "Secondary",
                            items: [
                                { label: "Rose Festival Tours", url: "/blog/taif-rose-festival-guide", description: "March/April Only" },
                                { label: "Cable Car Transfers", url: "/services/cable-car", description: "Top Station Dropoff" },
                                { label: "Miqat Ziyarat", url: "/guides/miqat-locations", description: "Qarn al-Manazil" }
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
                        <span className="text-gray-900 font-semibold">Taif</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Captain Waleed Al-Thaqafi'
                        reviewerTitle='High-Altitude Driving Specialist'
                        reviewDate="26 Dec 2024"
                        expertise={["Mountain Safety", "Fog Navigation", "Local Farm Access"]}
                    />
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Our Fleet Services
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mt-6 mb-4">
                            Mountain Transport Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Transport options include transfers to Al Hada, Al Shafa, and Qarn al-Manazil Miqat. Vehicles are maintained for steep mountain ascents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                    <service.icon className="w-8 h-8 text-primary" />
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
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <CloudFog className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-gray-900">Weather & Terrain</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                                Why You Need a Pro Driver for Taif
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                The road from Makkah to Taif is an engineering marvel, but it is steep. Driving it in a rented small sedan can be stressful due to overheating engines and brake fade on the descent.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our fleet consists of powerful V6/V8 SUVs (GMC Yukon, Chevy Tahoe) that handle the incline effortlessly. Plus, our drivers know exactly where the <span className="italic">monkeys gathering spots</span> are for photos (and how to keep your windows safe!).
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h4 className="font-bold">Brake Check</h4><p className="text-sm text-gray-500">Compulsory safety stops included</p></div>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h4 className="font-bold">Family Space</h4><p className="text-sm text-gray-500">Room for picnic gear & strollers</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/taif-mountains-view.webp"
                                    alt="Winding Al Hada mountain road to Taif"
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
                    <SeasonalTravelTips city="Taif" />
                    <div className="mt-12">
                        <DistanceTable origin="Taif City Center" locations={distanceData} />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Cable Car Start Point",
                                    commonBelief: "It starts from the bottom.",
                                    reality: "Most tourists take the Cable Car from the TOP (Al Hada Ring Road) down to the water park resort, and then back up. Finding a taxi at the bottom station is difficult.",
                                    truthRange: "Start at Top Station",
                                    factors: ["Parking", "Taxi Availability", "Views"]
                                },
                                {
                                    topic: "Visiting Rose Farms",
                                    commonBelief: "Open all year.",
                                    reality: "The factories are open, but the ROSES are only blooming and being harvested in cool mornings of March & April. Other times, it's just green bushes.",
                                    truthRange: "Seasonal (Spring)",
                                    factors: ["Harvest Season"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            route="Makkah to Taif (Al Hada Ascent)"
                            perspectives={[
                                {
                                    id: "family",
                                    targetAudience: "Summer Vacationer",
                                    icon: Users,
                                    intent: "Leisure",
                                    description: "A fun escape from Makkah heat. The goal is the Cable Car and the Strawberry farms. Many families rent villas in Al Shafa.",
                                    structuredFeatures: [
                                        { label: "Stops", value: "Fruit Stalls" },
                                        { label: "Vibe", value: "Excited / Scenic" },
                                        { label: "Luggage", value: "Heavy (Picnic gear)" }
                                    ],
                                    visualContext: "Road overlooks Makkah Clock Tower at night."
                                },
                                {
                                    id: "pilgrim",
                                    targetAudience: "Umrah Traveler",
                                    icon: Star,
                                    intent: "Religious",
                                    description: "Visiting the Miqat (Qarn al Manazil) to enter Ihram before going to Makkah. Or visiting the mosques of Ibn Abbas.",
                                    structuredFeatures: [
                                        { label: "Stop", value: "Qarn al Manazil" },
                                        { label: "Dress", value: "Changing to Ihram" },
                                        { label: "Timing", value: "Pre-Maghrib" }
                                    ],
                                    visualContext: "Route diverts to Sayl al Kabir."
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Are there wild monkeys?",
                                    shortAnswer: "Yes, many.",
                                    detailedAnswer: "You will see baboons along the Al Hada road. They are generally harmless if you stay in the car, but they will steal food if windows are open.",
                                    perspectives: [
                                        { role: "Local", icon: "Shield", insight: "Do not feed them. It causes traffic jams and aggression." }
                                    ]
                                },
                                {
                                    question: "Can we swim in Taif?",
                                    shortAnswer: "At Water Parks",
                                    detailedAnswer: "Taif has no sea, but it has excellent water parks (Al Kar Tourist Village) at the bottom of the cable car ride.",
                                    perspectives: [
                                        { role: "Family", icon: "Sun", insight: "Great cooling option for kids." }
                                    ]
                                }
                            ]}
                        />
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
                            Share Your Taif Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Taif mountain transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Taif" />
                        <QuestionsDisplay location="Taif" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Taif" />
                        <QuestionForm locationName="Taif" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Airport transfer service from Taif Regional Airport and connections to Jeddah/Makkah.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Taif"
                description="Professional taxi services with licensed drivers for mountain travel."
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Book Your Ride to Taif</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Private SUVs available for Makkah to Taif transfers. Instant confirmation.
                    </p>
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-8 rounded-full">
                            Book Taif Taxi
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
