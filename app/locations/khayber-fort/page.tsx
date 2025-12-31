import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Landmark, Mountain, Sun, Camera, ArrowRight, Compass } from 'lucide-react';
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
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Taxi Service to Khaybar Fort | Madinah & AlUla Transfers',
    description: 'Taxi service requires 4x4 vehicles for white volcanoes (Harrat Khaybar). Transfers from Madinah and AlUla available. Tours include Al-Qamus Fort and ancient dams.',
    keywords: ['Khaybar Fort taxi', 'Madinah to Khaybar taxi', 'AlUla to Khaybar transfer', 'Harrat Khaybar 4x4', 'Al-Qamus Fort tour'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/khayber-fort/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/khayber-fort/',
            'ar': 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
            'ur': 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
            'x-default': 'https://taxiserviceksa.com/locations/khayber-fort/',
        }
    },
    openGraph: {
        title: 'Taxi Service to Khaybar Fort | Madinah & AlUla Transfers',
        description: 'Transport to Khaybar Oasis from Madinah (170km). 4x4 vehicles available for volcanic tours.',
        url: 'https://taxiserviceksa.com/locations/khayber-fort/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-2.webp', alt: 'Khaybar Fort on volcanic rock' }],
    },
};

export default function KhayberPage() {
    const services = [
        { name: 'Madinah to Khayber Day Trip', description: 'Full-day historical excursion', icon: Car },
        { name: 'Khaybar Volcano Tour', description: '4x4 Access to White Volcanoes', icon: Mountain },
        { name: 'AlUla Connection', description: 'One-way transfer via scenic route', icon: MapPin },
        { name: 'Oasis & Springs', description: 'Guided visits to ancient irrigation', icon: Sun },
    ];

    const khayberImages = [
        '/khayber-fort-oasis.png', // New Generated Image
        '/hero-slide-2.webp', // Khaybar specific
        '/hero-slide-5.webp', // Desert generic
    ];

    const faqs = [
        {
            question: "How long is the drive from Madinah to Khaybar?",
            answer: "Drive time from Madinah to Khaybar is approximately 1 hour 45 minutes to 2 hours (170 km). Route follows the highway through Harrat Khaybar volcanic fields."
        },
        {
            question: "Is Khaybar open for tourists?",
            answer: "Khaybar Oasis welcomes tourists at the new Welcome Center. Specific fort zones access depends on ongoing restoration work managed by RCU."
        },
        {
            question: "Can I do Khaybar and AlUla in one day?",
            answer: "Combined itinerary involves travel from Madinah to Khaybar (stopover) and continuing to AlUla. Total journey covers significant distance."
        },
        {
            question: "Do I need a ticket to enter Khaybar Fort?",
            answer: "Entry requires tickets managed by the Royal Commission for AlUla (RCU). Online booking is recommended prior to arrival."
        },
        {
            question: "Is there food available in Khaybar?",
            answer: "Dining options are limited to small cafes near the heritage village. Highway rest houses provide alternative meal stops."
        }
    ];

    const distanceData = [
        { destination: 'Madinah (Haram)', distance: '170 km', time: '1h 50m', route: 'Route 15' },
        { destination: 'AlUla Old Town', distance: '180 km', time: '2h 10m', route: 'Route 375' },
        { destination: 'Jeddah Airport', distance: '580 km', time: '6h', route: 'Haramain Expy' },
        { destination: 'White Volcanoes', distance: '45 km (Off-road)', time: '1h+', route: 'Track' },
        { destination: 'Tabuk', distance: '500 km', time: '5h 30m', route: 'Route 15' }
    ];



    return (
        <div className="bg-gray-50 min-h-screen">

            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Khaybar Historical Tours",

                        "areaServed": { "@type": "City", "name": "Khaybar" },
                        "description": "Private transport and guided tours to the Khaybar Fort and Oasis from Madinah."
                    })
                }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={khayberImages}
                h1Text="Taxi Service to Khaybar Fort: Madinah and AlUla Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Explore Khaybar
                    </span>
                }
                subtitle="Reliable 4x4 Tours & Intercity Transfers"
                location="Madinah • Khaybar • AlUla"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Heritage"
                        description="Professional chauffeur and historical tour services to Khaybar. We help history enthusiasts and travelers with luxury 4x4 vehicles and 24/7 availability for Madinah to Khaybar excursion."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Shield Trips', value: '850+', icon: Shield },
                            { label: 'Distance Covered', value: '1.2M km', icon: Car },
                            { label: 'Safety Rating', value: '100%', icon: CheckCircle2 }
                        ]}
                        theme="dark"
                    />
                </div>

                <div className="bg-black/40 backdrop-blur-md p-2 rounded-3xl mt-10 max-w-xl mx-auto border border-white/10">
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-[10px] items-center gap-1 flex text-neutral-600 font-bold tracking-wider uppercase mb-1">
                                    <MapPin className="w-3 h-3" /> Pickup
                                </span>
                                <span className="font-black text-black">Madinah City</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-[10px] items-center gap-1 flex text-neutral-600 font-bold tracking-wider uppercase mb-1">
                                    <Clock className="w-3 h-3" /> Duration
                                </span>
                                <span className="font-black text-black">Full Day Trip</span>
                            </div>
                        </div>
                        <Button asChild size="lg" className="w-full bg-black text-white hover:bg-neutral-800 font-bold text-lg h-16 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-black/20">
                            <Link href="/booking" className="w-full block">
                                View Available Vehicles
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </Link>
                        </Button>
                        <div className="mt-3 text-center">
                            <span className="text-xs text-neutral-500 font-medium">
                                Instant Confirmation • No Hidden Fees
                            </span>
                        </div>
                    </div>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="The Khaybar Volcano Camp"
                    status="Insider Tip"
                    lastUpdated="December 2025"
                    content="The new 'Khaybar Volcano Camp' offers glamping experiences near the White Volcanoes. The access road is rough. Regular sedans will struggle. Our GMC Yukon fleet ensures you reach the camp comfort without damaging the vehicle."
                    tags={["VolcanoTourism", "HarratKhaybar", "Glamping", "4x4Required"]}
                />
            </div>

            <QuestionGrouper
                mainQuestion="Is Khaybar worth the 2-hour drive from Madinah?"
                intro="Many pilgrims confuse Khaybar with just 'another old building'. In reality, it is a geological and historical marvel sitting on a massive lava field (Harrat)."
                subQuestions={[
                    {
                        id: 'q1',
                        condition: 'History Buffs',
                        question: 'What is there to see?',
                        answer: 'The Fortress of Al-Qamus (Marhab\'s Fort), ancient dams, and the lush green oasis contrasting with black lava rock. It is visually unique.',
                        citation: 'Islamic History Archives'
                    },
                    {
                        id: 'q2',
                        condition: 'Connecting to AlUla',
                        question: 'Is it a good stopover?',
                        answer: 'Excellent. Instead of a boring 4-hour highway drive from Madinah to AlUla, stop at Khaybar for 2 hours. It breaks the journey perfectly.',
                        citation: 'Route Optimization Expert'
                    },
                    {
                        id: 'q3',
                        condition: 'Safety',
                        question: 'Is the road safe?',
                        answer: 'The road is paved but moves through open desert with camels crossing. Night driving is dangerous. We strongly recommend daytime travel with an experienced driver.',
                        citation: 'Highway Safety Report'
                    }
                ]}
            />

            <section className="py-24 px-4 bg-[#Fdfbf7] border-y border-black">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
                    <div className="sticky top-24 h-fit">
                        <h2 className="font-black text-5xl md:text-7xl text-black leading-[0.85] tracking-tighter mb-8">
                            THE<br />CONTEXT
                        </h2>
                        <p className="text-xl font-bold text-black border-l-4 border-black pl-6 py-1">
                            Khaybar is not just ruins. It is a complex city of fortresses requiring orientation.
                        </p>
                    </div>

                    <div className="relative space-y-16 pl-6 md:pl-12 border-l border-black/20">
                        {/* Timeline / Concept Stream */}
                        {[
                            {
                                label: 'Al-Qamus Fort',
                                description: 'The main citadel perched high on a rock. This is the primary photo spot and the site of the famous battle.',
                                meta: 'Primary Landmark'
                            },
                            {
                                label: 'Harrat Khaybar',
                                description: 'One of Saudi Arabia\'s largest volcanic fields. The black basalt rock creates a surreal landscape found nowhere else.',
                                meta: 'Geology'
                            },
                            {
                                label: 'The Oasis',
                                description: 'Thousands of date palms thriving in the middle of volcanic rock, fed by ancient springs unlike the sandy oases of AlUla.',
                                meta: 'Ecosystem'
                            },
                            {
                                label: 'White Volcanoes',
                                description: 'Rare silica-rich volcanoes (Jabal Abyad) located deeper in the Harrat. Requires special permits and 4x4 vehicles.',
                                meta: 'Adventure'
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[31px] md:-left-[55px] top-2 w-4 h-4 bg-black rounded-full border-4 border-[#Fdfbf7]"></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-black mb-2 block">{item.meta}</span>
                                <h3 className="text-3xl font-black text-black mb-3">{item.label}</h3>
                                <p className="text-lg text-black/80 font-medium leading-relaxed max-w-xl">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TopicCluster
                mainTopic="Khaybar Regional Connections"
                clusters={[
                    {
                        category: "Nearby Hubs",
                        relevance: "Primary",
                        items: [
                            { label: "Madinah City Taxi", url: "/locations/madinah" },
                            { label: "AlUla Tour Transfer", url: "/locations/alula" },
                            { label: "Prince Mohammad Airport", url: "/locations/madinah" }
                        ]
                    },
                    {
                        category: "Tour Types",
                        relevance: "Secondary",
                        items: [
                            { label: "History & Heritage Tour", url: "/booking?type=history", description: "Focus on Forts" },
                            { label: "Volcano 4x4 Safari", url: "/booking?type=adventure", description: "Geological focus" },
                            { label: "Oasis Photography", url: "/booking?type=photo", description: "Landscape focus" }
                        ]
                    }
                ]}
            />

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 transition-colors">Locations</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Khaybar Fort</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-black py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Dr. Hassan Al-Amri'
                        reviewerTitle='History Researcher & Guide'
                        reviewDate="24 Dec 2025"
                        expertise={["Islamic Battles", "Volcanic Geology", "Ancient Irrigation"]}
                        theme="dark"
                    />
                </div>
            </section>

            {/* Main Services - Interactive Rows */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-6">
                        <div>
                            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 inline-block">
                                Select Your Path
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-black mt-2 tracking-tighter">
                                TOUR<br />OPTIONS
                            </h2>
                        </div>
                        <p className="text-black font-medium max-w-xs text-right mt-4 md:mt-0">
                            Service options include historical tours and volcanic safaris.
                        </p>
                    </div>

                    <div className="flex flex-col divide-y divide-black/10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 py-8 hover:bg-stone-50 transition-colors cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-stone-100 flex items-center justify-center border-2 border-black rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform">{service.name}</h3>
                                    <p className="text-black/70 font-medium max-w-lg">{service.description}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-black">View Details</span>
                                    <div className="w-12 h-12 flex items-center justify-center border border-black/20 rounded-full group-hover:bg-accent group-hover:border-primary transition-all">
                                        <ArrowRight className="w-5 h-5 text-black" />
                                    </div>
                                </div>

                                {/* Full Link Overlay */}
                                <Link href="/booking" className="absolute inset-0 z-10" aria-label={`Book ${service.name}`}></Link>
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
                                <Landmark className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">Historical Deep Dive</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
                                Visit the Battlegrounds of 628 CE
                            </h2>
                            <p className="text-lg text-black font-medium mb-6 leading-relaxed">
                                Touring Khaybar is a somber and majestic experience. The ruins of <span className="font-extrabold bg-primary/20 px-1">Al-Nizar</span> and <span className="font-extrabold bg-primary/20 px-1">Al-Qamus</span> stand as silent witnesses to history.
                            </p>
                            <p className="text-black mb-6 leading-relaxed">
                                Unlike the polished tourism of other sites, Khaybar feels raw. The black volcanic rock absorbs heat, making <span className="font-bold underline decoration-black decoration-4 underline-offset-4">air-conditioned transport</span> essential. Our drivers will drop you as close to the viewpoints as permitted.
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-black p-4 rounded-xl border border-gray-800">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                    <div><h3 className="font-bold text-white">History Conscious</h3><p className="text-sm text-gray-400">Respectful of the site&apos;s significance</p></div>
                                </div>
                                <div className="flex items-start gap-3 bg-black p-4 rounded-xl border border-gray-800">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                    <div><h3 className="font-bold text-white">Water Provided</h3><p className="text-sm text-gray-400">Hydration is critical here</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/hero-slide-2.webp"
                                    alt="Black volcanic rock fortress of Khaybar"
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
                    <SeasonalTravelTips city="Khaybar" />
                    <div className="mt-12">
                        <DistanceTable origin="Khaybar Welcome Center" locations={distanceData} />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Self-Drive vs Driver",
                                    commonBelief: "I can rent a car and go.",
                                    reality: "The road is single-lane in parts and has heavy truck traffic connecting Madinah/Tabuk. Signal can be lost in the Harrat.",
                                    truthRange: "Driver Recommended",
                                    factors: ["Safety", "Signal", "Navigation"]
                                },
                                {
                                    topic: "Summer Visits",
                                    commonBelief: "It's just hot.",
                                    reality: "The black basalt rock radiates heat, making ground temperatures 10 degrees higher than air temp. Mid-day visits in summer are dangerous.",
                                    truthRange: "Winter/Morning Only",
                                    factors: ["Basalt Heat Effect"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            route="Madinah to Khaybar (The Oasis Route)"
                            perspectives={[
                                {
                                    id: "pilgrim",
                                    targetAudience: "Ziyarat Group",
                                    icon: Users,
                                    intent: "Education",
                                    description: "A day trip to reflect on Seerah. The focus is on seeing the forts mentioned in Hadith. We provide a respectful, quiet environment for the group.",
                                    structuredFeatures: [
                                        { label: "Pacing", value: "Slow / Contemplative" },
                                        { label: "Stopovers", value: "Prayer times priority" },
                                        { label: "Audio", value: "Seerah lectures available" }
                                    ],
                                    visualContext: "Route passes historically significant valleys."
                                },
                                {
                                    id: "adventure",
                                    targetAudience: "Geology Tourist",
                                    icon: Mountain,
                                    intent: "Nature",
                                    description: "Heading deep into the Harrat to see the White Volcanoes. This requires our specialized 4x4 vehicles with high clearance.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "GMC Yukon / Land Cruiser" },
                                        { label: "Terrain", value: "Off-road / Lava Field" },
                                        { label: "Supplies", value: "Full catering provided" }
                                    ],
                                    visualContext: "Satellite map showing the white cinder cones."
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            theme="dark"
                            faqs={[
                                {
                                    question: "Can we walk inside the forts?",
                                    shortAnswer: "Restricted",
                                    detailedAnswer: "Most forts are unstable and fenced off for safety. There are designated viewing platforms and walkways built by the RCU.",
                                    perspectives: [
                                        { role: "Safety Officer", icon: "Shield", insight: "Falling rocks are a real hazard. Stick to the wooden paths." }
                                    ]
                                },
                                {
                                    question: "Are there restrooms?",
                                    shortAnswer: "At Welcome Center Only",
                                    detailedAnswer: "Once you enter the oasis trail, there are NO facilities. Use the restrooms at the Welcome Center before starting the tour.",
                                    perspectives: [
                                        { role: "Guide", icon: "MapPin", insight: "Plan ahead. The tour loop can take 2 hours." }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-black px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold text-white">Expedition Rates</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Khaybar Tour Packages
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive transport including waiting time and off-road capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-black/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Day Trip (Sedan)</div>
                            <div className="text-4xl font-black text-black mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 600
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Madinah Round Trip (8 Hours)
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-black hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold">
                                ADVENTURE CHOICE
                            </div>
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Mountain className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">4x4 Volcano Safari</div>
                            <div className="text-4xl font-black text-black mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 1200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                GMC Yukon (Off-Road Access)
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-black/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">AlUla Connection</div>
                            <div className="text-4xl font-black text-black mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 500
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                One-Way Transfer
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Khaybar" />
            </div>



            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Book Your Transfer to Khaybar</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Private 4x4 and sedan transport available for Khaybar tours.
                    </p>
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-8 rounded-full">
                            Book Khaybar Taxi
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
