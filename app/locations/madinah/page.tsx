import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle2, Car, Users, Shield, Compass, MapPin, User, Briefcase, Heart, Plane } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import RelatedServices from '@/components/seo/RelatedServices';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import { blogService } from '@/lib/blogService';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata: Metadata = {
    title: 'Taxi Service in Madinah | Airport Transfers & Ziyarat Tours',
    description: 'Taxi service in Madinah for Prince Mohammad Airport transfers and Ziyarat tours. Transport to Prophet\'s Mosque and Makkah available. 7-seater vehicles for families.',
    keywords: ['Madinah taxi', 'Madinah airport taxi', 'Ziyarat tour Madinah', 'Madinah to Makkah taxi', 'Masjid Nabawi transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/madinah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/madinah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/madinah/',
            'x-default': 'https://taxiserviceksa.com/locations/madinah/',
        }
    },
};

export default async function MadinahPage() {
    // Fetch related blogs
    const blogs = await blogService.getBlogsByCategory('Madinah Guide');
    const displayBlogs = blogs.slice(0, 6);

    const services = [
        { name: 'Airport Transfers', description: 'Prince Mohammad Airport to hotels' },
        { name: 'Ziyarat Tours', description: 'Holy sites and historical places' },
        { name: 'Makkah Transport', description: 'Madinah to Makkah and return' },
        { name: 'Local Taxi Service', description: 'Within Madinah city' },
        { name: 'Mosque Transfers', description: 'Hotel to Masjid Nabawi' },
        { name: 'Group Transport', description: 'For families and groups' },
    ];

    const features = [
        'Drivers with local route knowledge',
        'Vehicles with air conditioning',
        'Fixed rates for all trips',
        '24/7 service availability',
        'English and Arabic speaking drivers',
        'Prayer time compliant schedules',
    ];



    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '450 km (280 mi)', time: '4-5 hours', route: 'Hijrah Hwy' },
        { destination: 'Prince Mohammad Airport', distance: '20 km (12 mi)', time: '25-30 mins', route: 'Airport Rd' },
        { destination: 'Masjid Quba', distance: '10 km (6 mi)', time: '15-20 mins', route: 'Quba Rd' },
        { destination: 'Uhud Mountain', distance: '8 km (5 mi)', time: '15 mins', route: 'King Abdullah Rd' }
    ];

    const madinahImages = [
        '/madinah-prophets-mosque.webp',
        '/madinah-night-view.webp',
        '/hero-slide-2.webp',
    ];

    const faqs = [
        {
            question: "What is the taxi fare from Madinah Airport to Masjid An Nabawi?",
            answer: "Taxi fare from Prince Mohammad Bin Abdulaziz International Airport (MED) to Masjid An Nabawi ranges from SAR 80 to SAR 120. Fixed rates are available for pre-booked transfers."
        },
        {
            question: "Can I visit Ziyarat places in Madinah by taxi?",
            answer: "Ziyarat packages include visits to Mount Uhud, Masjid Quba, Masjid Qiblatayn, and the Seven Mosques. Drivers follow historical routes for all Islamic sites."
        },
        {
            question: "How far is the train station from the Prophet's Mosque?",
            answer: "Haramain High-Speed Railway station is 15-20 minutes by taxi from Al-Masjid an-Nabawi. Travel time depends on traffic conditions."
        },
        {
            question: "Do you provide transport from Madinah to Makkah?",
            answer: "Private taxi transfers from Madinah to Makkah (450 km) take approximately 4-5 hours. Service includes door-to-door pickup and drop-off."
        },
        {
            question: "Are there female drivers available in Madinah?",
            answer: "Fleet is operated by professional male chauffeurs. Service protocols ensure privacy and safety for all family members."
        }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Madinah",
        "image": "https://taxiserviceksa.com/madinah-prophets-mosque.webp",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/madinah",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Madinah",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "2100"
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
                        "name": "Madinah Ziyarat & Airport Taxi",
                        "provider": { "@type": "LocalBusiness", "name": "TaxiServiceKSA Madinah" },
                        "areaServed": { "@type": "City", "name": "Madinah" },
                        "description": "Professional taxi service for Prophet's Mosque visits and Madinah airport transfers."
                    })
                }}
            />
            <Hero
                images={madinahImages}
                h1Text="Taxi Service in Madinah: Airport Transfers and Ziyarat Tours"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah Taxi Service
                    </span>
                }
                subtitle="Ziyarat Tours"
                location="Prophet's Mosque"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Madinah"
                        description="Specialized Ziyarat transport experts with deep historical knowledge of Madinah's sacred sites (Uhud, Quba, Qiblatain). Trust your Ziyarat to locals who know the stories, not just the roads."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Ziyarat Tours', value: '8,000+', icon: Compass },
                            { label: 'Pilgrim Rating', value: '5.0', icon: Star },
                            { label: 'Local Drivers', value: '100%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            {/* Trending Note: Freshness Signal */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Ziyarat Timing Alert: Masjid Quba & Uhud"
                    status="Insider Tip"
                    lastUpdated="December 2024"
                    content="To avoid the tourist buses and scorching afternoon heat, our local drivers recommend starting your Ziyarat tour immediately after Fajr prayer (around 6:00 AM). You'll experience a serene atmosphere at Masjid Quba and clear views at Mount Uhud before the crowds arrive."
                    tags={["MadinahZiyarat", "QubaMosque", "LocalTips", "BestTimeVisit"]}
                    linkText="Book Morning Ziyarat Tour"
                />
            </div>

            {/* Wrapped QuestionGrouper for Desktop */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <QuestionGrouper
                    mainQuestion="When is the best time to perform Ziyarat in Madinah to avoid crowds?"
                    intro="The 'Best Time' isn't a single answer. It depends heavily on your specific goals: Do you want spiritual quietness, historical engagement, or just cool weather?"
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Goal : Spiritual Quietness',
                            question: 'When is Quba Mosque least crowded?',
                            answer: 'Immediately after Fajr prayer (Sunrise). Most tour groups arrive after 8:00 AM. Going early allows you to pray the Sunnah rakats in peace.',
                            citation: 'Local Prayer Time & Crowd Analysis'
                        },
                        {
                            id: 'q2',
                            condition: 'Goal : Historical Photography',
                            question: 'Best light for Mount Uhud?',
                            answer: 'Late afternoon (Asr time). The sun hits the Archers\' Hill from the west, creating depth and shadows that make the historical geography easier to visualize.',
                            citation: 'Photography Guide for Madinah'
                        },
                        {
                            id: 'q3',
                            condition: 'Condition : Summer Heat (May-Sept)',
                            question: 'How to do Ziyarat in summer?',
                            answer: 'Night Ziyarat. Many sites, including Seven Mosques and Quba, are beautifully lit at night. Avoid the 10 AM - 4 PM window entirely.',
                            citation: 'Climate Data & Safety Guidelines'
                        }
                    ]}
                />
            </div>

            {/* Semantic Authority: Madinah Pilgrim Logistics */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="madinah-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Knowledge Graph (Entities) */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
                                <Compass className="w-4 h-4 text-emerald-700" />
                                <span className="text-sm font-bold text-emerald-900">Essential Pilgrim Logistics</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Mastering the City of the Prophet ﷺ
                            </h3>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Madinah is not just a destination; it's a sanctuary with specific protocols. From entering the <span className="font-bold text-gray-900">Rawdah</span> to departing from <span className="font-bold text-gray-900">Miqat Dhul Hulaifah</span>, our local experts guide you through every spiritual node.
                            </p>

                            <div className="space-y-6">
                                {/* Entity 1: Rawdah & Gates */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-emerald-600">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <Shield className="w-5 h-5 text-emerald-600" />
                                        Masjid Nabawi Logistics
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Accessing the Rawdah requires a Nusuk permit. We drop you at the precise gates to minimize walking during your allotted slot time.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700">
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md">Gate 37 (Rawdah Entry)</span>
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md">Gate 338 (Ladies Ziyarah)</span>
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md">King Fahd Gate (North)</span>
                                    </div>
                                </div>

                                {/* Entity 2: Miqat Departure */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-black">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <MapPin className="w-5 h-5 text-black" />
                                        Miqat Dhul Hulaifah (Abyar Ali)
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Departing for Makkah? This is your mandatory stop for Ihram. Unlike passing trains, our private taxis pause here for 45+ minutes, allowing you to shower, pray, and make Niyyah comfortably before the highway journey.
                                    </p>
                                </div>

                                {/* Entity 3: The Ziyarat Circuit */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-blue-500">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        Sunnah Ziyarat Circuit
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-2">
                                        Our drivers follow the comprehensive Sunnah route, not just the tourist shortcuts.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Masjid Quba (Saturday Sunnah)</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Mount Uhud & Archers' Hill</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Masjid Al-Qiblatain</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>The Seven Mosques (Khandaq)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual Context */}
                        <div className="relative h-full min-h-[500px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
                            <div className="absolute inset-0">
                                <Image
                                    src="/madinah-ziyarat-map.png"
                                    alt="Map of Madinah Ziyarat sites including Quba and Uhud"
                                    width={700}
                                    height={800}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Guided by Tradition</div>
                                        <div className="text-gray-300 text-sm">Following the Sunnah Sequence</div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/20 pt-4 mt-4">
                                    "We don't just drive you to a mosque; we take you to the exact spot where history happened. Pray two rakats at Quba for the reward of an Umrah, exactly as the Prophet ﷺ did."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wrapped TopicCluster for Desktop */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
                <TopicCluster
                    mainTopic="Madinah Ziyarat & Logistics Guide"
                    clusters={[
                        {
                            category: "Ziyarat & Tours",
                            relevance: "Primary",
                            items: [
                                { label: "Book Full Ziyarat Package", url: "/services/madinah-ziyarat" },
                                { label: "Madinah to Makkah Transfer", url: "/madinah-to-makkah-taxi" },
                                { label: "Airport to Hotel", url: "/madinah-airport-taxi" }
                            ]
                        },
                        {
                            category: "Historical Insights",
                            relevance: "Secondary",
                            items: [
                                { label: "Battle of Uhud Site Guide", url: "/guides/uhud-history", description: "Understanding the geography of the Archers' Hill." },
                                { label: "Seven Mosques Tour", url: "/guides/seven-mosques", description: "Visiting the sites of the Battle of the Trench." },
                                { label: "Quba Mosque Walking Path", url: "/guides/quba-walking-path", description: "Guide to the pedestrian path connecting Haram to Quba." }
                            ]
                        },
                        {
                            category: "Travel Essentials",
                            relevance: "Tertiary",
                            items: [
                                { label: "Prayer Times", url: "/guides/madinah-prayer-times" },
                                { label: "Weather Tips", url: "/guides/madinah-weather" },
                                { label: "Restaurants Nearby", url: "/guides/madinah-food" },
                                { label: "Currency Exchange", url: "/guides/currency" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Madinah</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewDate="25 Dec 2024"
                        expertise={["Rawdah Slot Logistics", "Ziyarat Sunnah Route", "Madinah Hotel Zones"]}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Taxi Services in Madinah
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Complete transportation solutions in the blessed city of Madinah
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all">
                                <Car className="w-8 h-8 text-gray-700 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Taxi Service in Madinah
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Taxi service covers all areas of Madinah including Masjid Nabawi, Prince Mohammad Airport, and historical Ziyarat sites. Drivers are licensed and experienced with local routes.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Clock className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Available</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">4000+</div>
                                <div className="text-sm text-gray-600">Happy Pilgrims</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                                <div className="text-sm text-gray-600">Rating</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200">
                                <Shield className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Safe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Semantic SEO */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips city="Madinah" />
                    <DistanceTable origin="Masjid Nabawi" locations={distanceData} />

                    <div className="mt-12">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Madinah Airport to Hotel Fare",
                                    commonBelief: "It costs around 50 SAR.",
                                    reality: "Official airport taxis often charge 80-120 SAR. Private transfers offer fixed rates (starting from 150 SAR) with meet-and-greet, avoiding long queues at the terminal.",
                                    truthRange: "80 SAR - 150 SAR",
                                    factors: ["Terminal Fees", "Vehicle Type", "Meet & Greet Service"]
                                },
                                {
                                    topic: "Ziyarat Tour Duration",
                                    commonBelief: "It takes 2 hours.",
                                    reality: "While visiting just Quba and Uhud takes 2 hours, a complete spiritual tour including Seven Mosques and Qiblatain with prayer stops typically requires 3-4 hours.",
                                    truthRange: "3 - 4 Hours",
                                    factors: ["Prayer Times", "Traffic at Sites", "Number of Stops"]
                                },
                                {
                                    topic: "Madinah to Makkah Travel",
                                    commonBelief: "Train is 2 hours.",
                                    reality: "The High-Speed Train ride is 2.5 hours, but station transfers add significant time. VIP Taxi/GMC takes 4-5 hours door-to-door but allows Ihram stops at Miqat (Dhul Hulaifah) without stress.",
                                    truthRange: "4 - 5 Hours (Taxi)",
                                    factors: ["Miqat Stop", "Door-to-Door Convenience", "Luggage"]
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "How much is a taxi from Madinah Airport to Masjid An Nabawi?",
                                    shortAnswer: "80 - 120 SAR (Metered)",
                                    detailedAnswer: "Public airport taxis run on meters. The final price depends on traffic and waiting time. During peak Umrah season, obtaining a taxi can be chaotic with long queues.",
                                    perspectives: [
                                        {
                                            role: "Peace of Mind",
                                            icon: "Shield",
                                            insight: "A private pre-booked transfer costs slightly more (~150 SAR) but guarantees a driver waiting at arrivals, zero queueing, and a fixed price regardless of traffic."
                                        },
                                        {
                                            role: "Group/Family",
                                            icon: "Users",
                                            insight: "Standard taxis only take 4 passengers. Families of 5+ need two taxis (200+ SAR total). A single GMC/Hiace booking is far more economical."
                                        }
                                    ]
                                },
                                {
                                    question: "How long does a Ziyarat tour take?",
                                    shortAnswer: "3 - 4 Hours",
                                    detailedAnswer: "A comprehensive tour of the main sites (Quba Mosque, Mount Uhud, Qiblatain) takes about 3 to 4 hours, allowing for 20-30 minutes at each stop.",
                                    perspectives: [
                                        {
                                            role: "Spiritual Priority",
                                            icon: "Heart",
                                            insight: "Don't rush Quba. The Prophet (PBUH) said praying there is equal to an Umrah. Allocate at least 45 minutes here for wudu and prayer."
                                        },
                                        {
                                            role: "Historical Enthusiast",
                                            icon: "Compass",
                                            insight: "Mount Uhud deserves time. Ask the driver to stop at the Archers' Hill to visualize the battleground context."
                                        }
                                    ]
                                },
                                {
                                    question: "Is there a train from Madinah to Makkah?",
                                    shortAnswer: "Yes, Haramain HHR.",
                                    detailedAnswer: "The High Speed train runs daily. It takes ~2.5 hours station-to-station. However, you must arrange transport to the station (30 mins) and from Makkah station to Haram (40 mins).",
                                    perspectives: [
                                        {
                                            role: "Door-to-Door Seeker",
                                            icon: "User",
                                            insight: "Taxi is 4.5 hours but takes you from Hotel Lobby to Hotel Lobby. No luggage hauling at stations, no multi-leg transfers."
                                        },
                                        {
                                            role: "Budget Solo",
                                            icon: "Briefcase",
                                            insight: "Train economy class is affordable. If traveling light and alone, it's a great option. For families with luggage, taxi is superior."
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>

                    <RoutePerspective
                        route="Madinah to Makkah (Hijrah Route)"
                        perspectives={[
                            {
                                id: "pilgrim-outbound",
                                targetAudience: "Pilgrim (To Makkah)",
                                icon: User,
                                intent: "Umrah Intention (Niyyah)",
                                description: "The journey starts at Miqat Dhul Hulaifah (Abyar Ali) to enter Ihram. This stop is crucial. The drive is a period of Talbiyah recitation. Most pilgrims prefer a calm, steady drive to maintain the spiritual state initiated at the Miqat.",
                                structuredFeatures: [
                                    { label: "Key Stop", value: "Dhul Hulaifah (Miqat)" },
                                    { label: "Duration", value: "4-5 Hours" },
                                    { label: "Preparation", value: "Ihram & Ghusl" },
                                    { label: "Best Time", value: "After Fajr / Asr" }
                                ],
                                visualContext: "Route Map highlighting the distance from Prophet's Mosque to Miqat (12km) and then onto the highway."
                            },
                            {
                                id: "tourist-ziyarat",
                                targetAudience: "Ziyarat Tourist",
                                icon: Compass,
                                intent: "Historical Exploration",
                                description: "Madinah is an open-air museum. The route isn't just about leaving; it's about passing historic battlefields (Badr is near the route) and valleys mentioned in Seerah. Daylight travel is recommended to witness the changing desert landscapes.",
                                structuredFeatures: [
                                    { label: "Sightseeing", value: "Badr (Off-route)" },
                                    { label: "Landscape", value: "Scenic Valleys" },
                                    { label: "Stops", value: "Flexible" },
                                    { label: "Guide", value: "Recommended" }
                                ],
                                visualContext: "Timeline showing potential detour to Badr and scenic rest areas."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Related Guides Section */}
            <RelatedGuides blogs={displayBlogs} title="Expert Madinah Travel Guides" subtitle="Discover hidden gems, Ziyarat history, and local food in the City of the Prophet." />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our taxi service</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Book Your Ride in Madinah?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Professional taxi service available 24/7. Book now for instant confirmation!
                    </p>
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                        <Link href="/booking">
                            Book Your Taxi Now
                        </Link>
                    </Button>
                </div>
            </section>

            {/* User-Generated Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Madinah Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow pilgrims by sharing your experience or asking questions about Madinah transport and Ziyarat.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Madinah" />
                        <QuestionsDisplay location="Madinah" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Madinah" />
                        <QuestionForm locationName="Madinah" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Umrah Transport',
                        description: 'Complete Umrah journey including Madinah Ziyarat sites and transport to Makkah.',
                        href: '/services/umrah-transport',
                        icon: MapPin
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer from Prince Mohammad Airport with meet-and-greet.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Madinah"
                description="Professional taxi services with licensed drivers for pilgrims and travelers."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <RelatedLocations currentCity="Madinah" />
            </div>
        </div >
    );
}
