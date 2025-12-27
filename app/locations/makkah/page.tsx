import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, User, Briefcase, Compass, Heart } from 'lucide-react';
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
import RelatedLocations from '@/components/seo/RelatedLocations';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective, { RoutePerspectiveItem } from '@/components/seo/RoutePerspective';
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
import { blogService } from '@/lib/blogService';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata: Metadata = {
    title: 'Taxi Service in Makkah | Umrah Transport & Airport Transfers',
    description: 'Taxi service in Makkah for Umrah pilgrims and airport transfers. Service operates 24/7. Fixed rates for Jeddah Airport to Makkah hotels. Family vehicles available.',
    keywords: ['taxi service in Makkah', 'Makkah taxi', 'Umrah transport', 'Jeddah to Makkah taxi', 'Makkah airport transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah/',
        }
    },
    openGraph: {
        title: 'Taxi Service in Makkah | Umrah Transport & Airport Transfers',
        description: 'Taxi service in Makkah operates 24/7 for Umrah pilgrims and airport transfers. Fixed rates from Jeddah Airport to Makkah hotels. Book online.',
        url: 'https://taxiserviceksa.com/locations/makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'Taxi service in Makkah near Masjid al Haram' }],
    },
};

export default async function MakkahPage() {
    // Fetch related blogs
    const makkahBlogs = await blogService.getBlogsByCategory('Makkah Guide');
    const umrahBlogs = await blogService.getBlogsByCategory('Umrah Guide');
    const displayBlogs = [...makkahBlogs, ...umrahBlogs].slice(0, 6);

    const services = [
        { name: 'Makkah Airport Taxi', description: 'Transfers from King Abdulaziz Airport (Jeddah) to Makkah hotels', icon: Plane },
        { name: 'Umrah Taxi Service', description: 'Transport for Umrah pilgrims and Ziyarat tours', icon: MapPin },
        { name: 'Makkah to Madinah Taxi', description: 'Intercity travel between Makkah and Madinah (450 km)', icon: Car },
        { name: 'Hotel to Haram Taxi', description: 'Transport between Makkah hotels and Masjid al Haram', icon: Clock },
    ];

    const features = [
        'Experienced drivers knowing Makkah routes',
        'Hotels & Haram pickup/drop-off service',
        'Spacious vehicles for pilgrims & luggage',
        '24/7 availability for late prayers',
        'Fixed fares with no hidden charges',
        'English & Arabic speaking staff',
    ];

    // Makkah-specific hero images
    const makkahImages = [
        '/makkah-kaaba-night.webp',
        '/makkah-grand-mosque.webp',
        '/makkah-clock-tower.webp',
    ];

    const faqs = [
        {
            question: "How far is Jeddah Airport from Makkah by taxi?",
            answer: "The distance from Jeddah Airport (King Abdulaziz International) to Makkah is 80-90 kilometers. Taxi travel time is approximately 60-90 minutes depending on traffic. Airport transfers include flight tracking and meet-and-greet service."
        },
        {
            question: "Is taxi service available 24/7 in Makkah for Umrah pilgrims?",
            answer: "Taxi service in Makkah operates 24/7. Use of service includes transport for prayer times, late-night arrivals, and early morning departures. Drivers are available near Masjid al Haram and major hotels."
        },
        {
            question: "Do you provide taxis for large Umrah families in Makkah?",
            answer: "Taxi fleet includes 7-seater GMC Yukons and larger vans for groups. Vehicles accommodate luggage, Zamzam water containers, and personal belongings. Family bookings are available via email or online form."
        },
        {
            question: "How much does a taxi cost from Jeddah Airport to Makkah?",
            answer: "Taxi rates from Jeddah Airport to Makkah start from SAR 250. Pricing depends on vehicle type (sedan, SUV, or van) and hotel location. Fares are fixed with no surge charges."
        },
        {
            question: "Can I book a taxi from Makkah to Madinah for Umrah?",
            answer: "Intercity taxi service is available from Makkah to Madinah (450 km). Travel time is 4-5 hours. Rates start from SAR 450. Service includes rest stops."
        },
        {
            question: "How early should I book a taxi for Fajr prayer at the Haram?",
            answer: "Booking 45-60 minutes before Fajr prayer is recommended. Traffic volume increases during Ramadan. Drivers pick up from hotels between 4:00-4:30 AM."
        },
        {
            question: "Can your taxis accommodate wheelchairs for elderly pilgrims?",
            answer: "Vehicles with wheelchair capacity are available. Drivers assist with wheelchair loading and boarding. Wheelchair requirements must be specified during booking."
        },
        {
            question: "Is it safe to carry Ihram clothing and valuables in your taxis?",
            answer: "Vehicles are secure for luggage and Ihram garments. Passengers should keep important documents and money on their person. Drivers are licensed and vetted."
        }
    ];

    const distanceData = [
        { destination: 'Jeddah Airport (KAIA)', distance: '95 km (59 mi)', time: '60-80 mins', route: 'Haramain Hwy' },
        { destination: 'Madinah (Prophet\'s Mosque)', distance: '450 km (280 mi)', time: '4-5 hours', route: 'Route 15' },
        { destination: 'Taif (City Center)', distance: '85 km (53 mi)', time: '60-90 mins', route: 'Al Hada Mtn' },
        { destination: 'Aziziyah (Makkah)', distance: '5-10 km (3-6 mi)', time: '15-20 mins', route: 'Tunnel Access' },
        { destination: 'Jabal Omar Hotels', distance: '1-3 km (0.6-1.8 mi)', time: '5-10 mins', route: 'King Abdulaziz Rd' }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Makkah",
        "image": "https://taxiserviceksa.com/makkah-kaaba-night.webp",

        "url": "https://taxiserviceksa.com/locations/makkah",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Makkah",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Makkah",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "5000"
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
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://taxiserviceksa.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Locations",
                                "item": "https://taxiserviceksa.com/locations"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Makkah",
                                "item": "https://taxiserviceksa.com/locations/makkah"
                            }
                        ]
                    })
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@type": "Service",
                                "serviceType": "Umrah Taxi Service",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Taxi Service Makkah"
                                },
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Makkah"
                                },
                                "description": "Specialized taxi service for Umrah pilgrims in Makkah, providing reliable transportation to Masjid al Haram and Ziyarat tours."
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Airport Taxi to Makkah",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Taxi Service Makkah"
                                },
                                "areaServed": [
                                    {
                                        "@type": "City",
                                        "name": "Jeddah"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Makkah"
                                    }
                                ],
                                "description": "Direct airport transfer service from King Abdulaziz International Airport (Jeddah) to hotels in Makkah."
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Hotel to Haram Taxi",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Taxi Service Makkah"
                                },
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Makkah"
                                },
                                "description": "Quick pickup and drop-off service between hotels and Masjid al Haram for daily prayers."
                            }
                        ]
                    })
                }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section with Rank-Focused H1 */}
            <Hero
                images={makkahImages}
                h1Text="Taxi Service in Makkah: Umrah Transport and Ziyarat Tours"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah Taxi Service
                    </span>
                }
                subtitle="Safe & Comfortable Pilgrimage Transport"
                location="24/7 Hotel to Haram Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Makkah"
                        description="The official transportation partner for over 10,000 Umrah pilgrims. We don't just 'drive'; we facilitate your spiritual journey with verified, licensed, and knowledgeable local drivers."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Pilgrims Served', value: '15k+', icon: Users },
                            { label: 'Google Rating', value: '4.9', icon: Star },
                            { label: 'On-Time Rate', value: '99.8%', icon: Clock }
                        ]}
                    />
                </div>

                {/* Dual CTAs - Fern Style */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taxi Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#pricing">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            View Pricing
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note: Freshness Signal / Trending Node */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Jeddah Airport to Makkah: New Train vs Taxi Reality"
                    status="High Demand"
                    lastUpdated="December 2024"
                    content="While the Haramain Train is operational, recent pilgrim feedback suggests that for families (3+ pax) with luggage, the 'Door-to-Door' taxi service remains 40% more time-efficient than the multi-leg train journey (Train + Taxi to Station + Taxi to Hotel). Book a private GMC for the smoothest experience."
                    tags={["HaramainTrain", "JeddahAirportTaxi", "FamilyTransport", "Umrah2025"]}
                />
            </div>

            {/* SEO Content Semantic Hub - Wrapped for Desktop Responsiveness */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Is it better to take the Haramain Train or a Private Taxi from Jeddah to Makkah?"
                    intro="Many pilgrims assume the train is always the 'best' option because of speed, but the Reality changes drastically when you introduce conditions like luggage, family size, and hotel location."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Solo Traveler (Light Luggage)',
                            question: 'Is the train faster for a single person?',
                            answer: 'Yes. For a solo traveler with one backpack, the train (35 SAR) is unbeatable. You can easily navigate the station to the bus/taxi stand in Makkah.',
                            citation: 'Haramain High Speed Railway Schedule 2024'
                        },
                        {
                            id: 'q2',
                            condition: 'Family of 4+ with 3+ Suitcases',
                            question: 'Is the train convenient for families?',
                            answer: 'No. The logistics of moving luggage from Airport -> Train -> Makkah Station -> Hotel involve 3 separate transfers. A 250 SAR taxi ride is cheaper than 4 train tickets + 2 local taxi fares, and offers door-to-door service.',
                            citation: 'Travel Consensus: User Reviews &Cost Analysis'
                        },
                        {
                            id: 'q3',
                            condition: 'Hotel Distance from Haram',
                            question: 'Does my hotel location matter?',
                            answer: 'Critically. If your hotel is in Aziziyah or far from the Haram, the taxi from Makkah Train Station can cost 50-80 SAR extra. A direct Jeddah taxi avoids this "last mile" surge pricing.',
                            citation: 'Local Rate Monitor (Dec 2024)'
                        }
                    ]}
                />

                <SemanticField
                    title="Understanding the Pilgrim's Journey"
                    explanation="Your taxi ride is not just transport; it is the bridge between crucial spiritual rites. We ensure seamless connectivity between these sacred concepts:"
                    concepts={[
                        {
                            label: 'Meeqat (Station of Ihram)',
                            description: 'The boundary point where pilgrims must enter the state of Ihram. Our drivers know the exact stop locations for Qarn al-Manazil (Taif route) and Dhul Hulaifah.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Miqat'
                        },
                        {
                            label: 'Tawaf al-Qudum',
                            description: 'The initial "Arrival Tawaf" performed upon entering the Haram. We drop you at the access point closest to the King Abdulaziz Gate to minimize your walking distance.',
                            internalLink: '/guides/umrah-tawaf-guide'
                        },
                        {
                            label: 'Haram Boundary (Al-Hil)',
                            description: 'The specific geographic limit of the Sacred Sanctuary. Vital for knowing where to stay for cheaper rates (Aziziyah) vs. calculating prayer times.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Haram_(site)'
                        },
                        {
                            label: 'Nusuk App Compliance',
                            description: 'The government digital platform for permits. Our vehicles are compatible with all drop-off zones designated for Nusuk permit holders.',
                            wikiLink: 'https://www.nusuk.sa/'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Makkah Transportation & Logistics Hub"
                    clusters={[
                        {
                            category: "Core Travel Needs",
                            relevance: "Primary",
                            items: [
                                { label: "Jeddah Airport to Makkah", url: "/jeddah-airport-to-makkah-taxi" },
                                { label: "Makkah to Madinah Taxi", url: "/makkah-to-madinah-taxi" },
                                { label: "Haramain Train Station Transfer", url: "/makkah-train-station-taxi" }
                            ]
                        },
                        {
                            category: "Pilgrim Planning Guides",
                            relevance: "Secondary",
                            items: [
                                { label: "Ihram & Meeqat Locations Guide", url: "/guides/meeqat-locations", description: "Where to stop for Ihram when coming from Jeddah/Taif." },
                                { label: "Accessing Haram Gates by Taxi", url: "/guides/haram-gates-access", description: "Best drop-off points for King Abdulaziz & King Fahd Gates." },
                                { label: "Wheelchair Accessible Transport", url: "/services/wheelchair-taxi", description: "Vehicles equipped for elderly pilgrims." }
                            ]
                        },
                        {
                            category: "Regional Connections",
                            relevance: "Tertiary",
                            items: [
                                { label: "Taif City Tour", url: "/locations/taif" },
                                { label: "Jeddah City Tour", url: "/locations/jeddah" },
                                { label: "Ziyarat Sites Makkah", url: "/locations/makkah-ziyarat" },
                                { label: "Shopping Malls", url: "/guides/makkah-shopping" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Makkah</span>
                    </nav>
                </div>
            </section>

            {/* Authoritative Signal */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewDate="25 Dec 2024"
                        expertise={["Haram Tunnels", "Miqat Zones", "Ajyad Traffic Patterns"]}
                    />
                </div>
            </section>

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Our Services
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Taxi Services Available in Makkah
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            From airport transfers to hotel pickups, we offer a complete range of <Link href="/" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">taxi services across Saudi Arabia</Link>. Choose the service that fits your travel needs in Makkah.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Services Visual Banner */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/makkah-services.png"
                            alt="Complete taxi services in Makkah including airport transfers, hotel pickups, and Ziyarat tours"
                            width={1400}
                            height={450}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>


            {/* SEO Content Block 1 - Umrah Pilgrims */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Users className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">For Pilgrims & Tourists</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Makkah Taxi for Umrah Pilgrims & Tourists
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    We provide reliable taxi service connecting Jeddah Airport, Makkah hotels, and Masjid al-Haram specifically for Umrah pilgrims and families. Our drivers understand the spiritual journey, respect prayer times, and navigate efficiently through Makkah's unique road network during peak Umrah seasons.
                                </p>

                                <p>
                                    Performing Umrah involves coordinating multiple travel points—from your arrival at King Abdulaziz International Airport to your hotel in Aziziyah or Jabal Omar, then daily trips to Masjid al Haram for prayers. We handle this complete journey, including Ziyarat tours to historical sites, transfers to <Link href="/locations/madinah" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">Madinah</Link>, and <Link href="/locations/jeddah" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">return airport pickups</Link>. Our <Link href="/fleet" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">family-friendly vehicles</Link> accommodate luggage, Zamzam water, and multiple passengers comfortably.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Prayer Time Respect</h4>
                                        <p className="text-sm text-gray-600">Drivers understand Salah timings</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Zamzam Safe Transport</h4>
                                        <p className="text-sm text-gray-600">Secure space for holy water</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Book your taxi before entering Ihram to avoid travel delays during your pilgrimage.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/makkah-taxi-pilgrims.png"
                                    alt="Umrah pilgrims traveling to Masjid al-Haram in Makkah by taxi"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Semantic Authority: Pilgrim Logistics Master Guide */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Deep Knowledge Graph (Entities) */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
                                <MapPin className="w-4 h-4 text-emerald-700" />
                                <span className="text-sm font-bold text-emerald-900">Critical Pilgrim Logistics</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Mastering Makkah's Transport Nodes
                            </h3>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                A successful Umrah requires navigating specific <span className="font-bold text-gray-900">Miqat boundaries</span> and restricted <span className="font-bold text-gray-900">Haram zones</span>. Unlike standard ride-hailing apps, our specialized drivers are trained on the exact geofenced drop-off loops allowed by local authorities.
                            </p>

                            <div className="space-y-6">
                                {/* Entity 1: Miqat Points */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-black">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <Compass className="w-5 h-5 text-black" />
                                        Miqat Stops (Ihram Boundary)
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        We guarantee 45-minute stopovers at key Miqat points for you to wear Ihram and make Niyyah before entering the Haram boundary.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-800">Qarn al-Manazil (Taif Route)</span>
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-800">Dhul Hulayfah (Madinah Route)</span>
                                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-800">Yalamlam (Coastal Route)</span>
                                    </div>
                                </div>

                                {/* Entity 2: Haram Gates & Drop-off */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-blue-500">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <Shield className="w-5 h-5 text-blue-600" />
                                        Haram Drop-Off Zones
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Private vehicles cannot stop at the main King Abdulaziz Gate. We utilize the closest authorized underground tunnels and bus loops to minimize your walking distance.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-700">
                                        <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Ajyad Tunnel (Clock Tower Access)</div>
                                        <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Gaza Loop (Marwah Side)</div>
                                        <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Kudai Parking (Shuttle Link)</div>
                                        <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Jiyad Mobility Center</div>
                                    </div>
                                </div>

                                {/* Entity 3: Terminals & Nusuk */}
                                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-emerald-500">
                                    <h4 className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
                                        <Plane className="w-5 h-5 text-emerald-600" />
                                        Terminals & Permits
                                    </h4>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p><span className="font-bold text-gray-900">Jeddah Airport (KAIA):</span> We track arrivals at <span className="underline decoration-emerald-300">Terminal 1 (New)</span> and <span className="underline decoration-emerald-300">North Terminal</span>.</p>
                                        <p><span className="font-bold text-gray-900">Nusuk Compliance:</span> All our vehicles carry the necessary digital permits to access Makkah's central zones during Hajj and Ramadan seasons.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual Context (Map/Image Placeholder) */}
                        <div className="relative h-full min-h-[500px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
                            <div className="absolute inset-0">
                                <Image
                                    src="/makkah-peak-season.png"
                                    alt="Map of Makkah Miqat points and Haram drop-off zones for taxi"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Smart Timing</div>
                                        <div className="text-gray-300 text-sm">We avoid prayer-time road closures</div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/20 pt-4 mt-4">
                                    "The difference between a 15-minute drop-off and a 1-hour traffic jam is knowing which tunnel to take. Our local drivers navigate Makkah's complex ring roads daily."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Semantic SEO: Seasonal Tips & Distances */}
                    <div className="mt-16">
                        <SeasonalTravelTips city="Makkah" />
                        <DistanceTable origin="Makkah Haram" locations={distanceData} />

                        <div className="mt-12">
                            <TravelConsensus
                                points={[
                                    {
                                        topic: "Jeddah Airport to Makkah Cost",
                                        commonBelief: "Standard taxi fare is usually 150-200 SAR.",
                                        reality: "While apps show basic rates, VIP/GMC services often reach 450+ SAR. Hajj/Ramadan surge pricing can double these rates. Our fixed rates start at 250 SAR to avoid these seasonal spikes.",
                                        truthRange: "250 SAR - 450 SAR",
                                        factors: ["Vehicle Type (Sedan vs GMC)", "Seasonality (Ramadan)", "Surge Pricing"]
                                    },
                                    {
                                        topic: "Travel Time to Jeddah Airport",
                                        commonBelief: "Google Maps says 60 minutes.",
                                        reality: "Checkpoints at the Haram boundary (Shumaisi) and airport terminal congestion often add 30+ minutes. Departing after Friday prayers can add another hour due to road closures.",
                                        truthRange: "75 - 110 Minutes",
                                        factors: ["Haramain Checkpoint", "Friday Prayers", "Terminal Traffic"]
                                    },
                                    {
                                        topic: "Taxi vs Train vs Bus",
                                        commonBelief: "Train is always faster.",
                                        reality: "The Haramain High Speed Train is fast (55 mins) but requires getting to/from Rusaifah station, adding 20-40 mins taxi time. Direct taxis are often faster door-to-door for hotels near the Haram.",
                                        truthRange: "Comparable (Door-to-Door)",
                                        factors: ["Station Transfer Time", "Luggage Handling", "Waiting Time"]
                                    }
                                ]}
                            />
                        </div>

                        <RoutePerspective
                            route="Makkah to Madinah (Hijrah Route)"
                            perspectives={[
                                {
                                    id: "pilgrim",
                                    targetAudience: "Umrah Pilgrim",
                                    icon: User,
                                    intent: "Spiritual Journey & Ziyarat",
                                    description: "For pilgrims, this isn't just a commute; it's a transition between two sanctuaries. The journey typically involves a stop at the Miqat if traveling towards Makkah, or a direct spiritual longing for the Prophet's city if leaving. Comfort for prayer / rest is paramount.",
                                    structuredFeatures: [
                                        { label: "Stopover", value: "Available (Miqat)" },
                                        { label: "Luggage", value: "High Capacity (Zumzum)" },
                                        { label: "Dress Code", value: "Ihram Friendly" },
                                        { label: "Pacing", value: "Relaxed / Prayer Focus" }
                                    ],
                                    visualContext: "Route map highlights Miqat locations and rest stops suitable for prayer (Salah)."
                                },
                                {
                                    id: "express",
                                    targetAudience: "Express Traveler",
                                    icon: Briefcase,
                                    intent: "Speed & Efficiency",
                                    description: "Focused on getting from Hotel A to Hotel B in minimal time. Utilizes the Haramain Highway efficiently, bypassing potential congestion points near Ziyarat sites. Ideal for business visitors or those on tight flight schedules.",
                                    structuredFeatures: [
                                        { label: "Avg Speed", value: "120-140 km/h" },
                                        { label: "Route Type", value: "Direct Highway" },
                                        { label: "Stops", value: "Minimal / Fuel Only" },
                                        { label: "Pacing", value: "Fast / Time-Critical" }
                                    ],
                                    visualContext: "Linear timeline showing direct highway segments and estimated checkpoint durations."
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "How much is a taxi from Jeddah Airport to Makkah?",
                                    shortAnswer: "250 SAR (Fixed Price)",
                                    detailedAnswer: "The standard market rate for a private sedan start from 250 SAR. Official airport taxis run on meters and often cost more due to waiting time and airport surcharges. Apps like Uber/Careem fluctuate heavily with surge pricing.",
                                    perspectives: [
                                        {
                                            role: "Budget Traveler",
                                            icon: "Briefcase",
                                            insight: "Haramain Train is cheaper (35 SAR) but requires a taxi from Rusaifa station to your hotel (40-50 SAR). Total cost stacks up for groups."
                                        },
                                        {
                                            role: "Family Head (5+ Pax)",
                                            icon: "Users",
                                            insight: "Booking two sedans costs 500 SAR. A single GMC Yukon XL costs 450 SAR, saving money and keeping the family together."
                                        }
                                    ]
                                },
                                {
                                    question: "How long is the journey from Jeddah to Makkah?",
                                    shortAnswer: "75 - 90 Minutes",
                                    detailedAnswer: "The distance is roughly 100km via the Prince Main Highway. Under normal traffic, it's a smooth 75-minute drive.",
                                    perspectives: [
                                        {
                                            role: "Umrah Pilgrim",
                                            icon: "Heart",
                                            insight: "The Haram Boundary checkpoint (Shumaisi) usually adds 10-20 minutes for permit checks. Usually faster for tourists/GCC residents."
                                        },
                                        {
                                            role: "Local Expert",
                                            icon: "Shield",
                                            insight: "Avoid departing Jeddah between 5:00 PM - 7:00 PM (Work rush). On Fridays, access to Haram hotels is blocked from 10:30 AM to 2:30 PM for prayers."
                                        }
                                    ]
                                },
                                {
                                    question: "Can I wear Ihram in the taxi?",
                                    shortAnswer: "Yes, it is standard.",
                                    detailedAnswer: "90% of our passengers are pilgrims. Our cars are kept cool (AC), and seats are clean for those in Ihram.",
                                    perspectives: [
                                        {
                                            role: "Spiritual Guide",
                                            icon: "User",
                                            insight: "This journey is an ibadah. Drivers respect this, offering silence or Quran recitation rather than loud music."
                                        },
                                        {
                                            role: "Comfort Seeker",
                                            icon: "Compass",
                                            insight: "Sedans can be tight for men in Ihram. Just for legroom and ease of movement, upgrading to an SUV (GMC) is highly recommended."
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Related Guides Section */}
            <RelatedGuides blogs={displayBlogs} title="Expert Makkah Travel Guides" subtitle="Plan your Ziyarat and spiritual journey with our detailed local guides." />



            {/* Umrah Journey Flow */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                            <Plane className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-gray-900">Complete Journey</span>
                        </div>

                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Your Complete Umrah Travel Journey in Makkah
                        </h3>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From airport arrival to departure, we handle every transportation need during your spiritual journey
                        </p>
                    </div>

                    {/* Journey Banner Image */}
                    <div className="mb-16 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 via-transparent to-gray-100 rounded-3xl blur-2xl"></div>
                        <Image
                            src="/umrah-journey-makkah.png"
                            alt="Complete Umrah travel journey in Makkah from airport to Masjid al-Haram"
                            width={1400}
                            height={400}
                            className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                    </div>

                    {/* Journey Steps Timeline */}
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Step 1 */}
                        <div className="relative flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <div className="w-0.5 h-full bg-gradient-to-b from-black/50 to-transparent absolute left-6 top-12"></div>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-black/30 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Plane className="w-5 h-5 text-black" />
                                    <h4 className="text-xl font-bold text-gray-900">Airport Arrival & Hotel Transfer</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Land at Jeddah Airport, clear customs, and meet your driver for a comfortable 60-90 minute journey to your hotel in Makkah (Aziziyah, Jabal Omar, or Clock Tower area). <Link href="/locations/jeddah" className="text-black font-semibold underline decoration-black/30 hover:decoration-black underline-offset-4 transition-all">Learn more about our Jeddah airport transfer service</Link>.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        {/* Step 2 */}
                        <div className="relative flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent absolute left-6 top-12"></div>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <h4 className="text-xl font-bold text-gray-900">Daily Haram Visits for Prayers</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Multiple daily trips between your hotel and Masjid al-Haram for Tawaf, Salah, and worship. Our drivers understand prayer schedules and peak traffic times around the Haram. <Link href="/booking" className="text-primary font-semibold underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-all">Book your daily Haram transport now</Link>.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent absolute left-6 top-12"></div>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="w-5 h-5 text-primary" />
                                    <h4 className="text-xl font-bold text-gray-900">Ziyarat Tours to Historical Sites</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Visit sacred locations like Ghar Hira (Cave of Hira), Jabal Thawr, Jannat al-Mu'alla cemetery, and Mount Arafat. Half-day or full-day tours can be arranged based on your schedule.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    4
                                </div>
                                <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent absolute left-6 top-12"></div>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Car className="w-5 h-5 text-primary" />
                                    <h4 className="text-xl font-bold text-gray-900">Intercity Travel to Madinah</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    After completing Umrah in Makkah, many pilgrims travel to Madinah to visit the Prophet's Mosque. The 450km journey takes 4-5 hours with rest stops along the way.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    5
                                </div>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <Plane className="w-5 h-5 text-primary rotate-45" />
                                    <h4 className="text-xl font-bold text-gray-900">Return Airport Transfer</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    On your departure day, we ensure timely pickup from your hotel to reach Jeddah Airport with plenty of time before your international flight home.
                                </p>
                            </div>
                        </div>
                    </div >

                    {/* Bottom CTA */}
                    < div className="mt-12 text-center bg-primary/5 border-2 border-primary/20 p-8 rounded-3xl" >
                        <p className="text-lg text-gray-900 font-semibold flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            We coordinate all these trips so you can focus entirely on your spiritual journey.
                        </p>
                    </div >
                </div >
            </section >


            {/* Micro Trust Block */}
            < section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-transparent rounded-3xl blur-2xl"></div>
                                <Image
                                    src="/makkah-driver-trust.png"
                                    alt="Professional experienced taxi driver in Makkah with local route knowledge"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                                <Shield className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-900">Trusted Drivers</span>
                            </div>

                            <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Why Pilgrims Trust Our Makkah Drivers
                            </h4>

                            {/* Trust Points */}
                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-2">Local Route Expertise</h5>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our drivers have spent years navigating Makkah's unique road system, including the restricted zones around Masjid al-Haram and the alternative routes during peak Umrah seasons like Ramadan and Dhul Hijjah. They understand when roads close for prayer times and which routes remain accessible.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-2">Family-Friendly Service</h5>
                                        <p className="text-gray-600 leading-relaxed">
                                            For families traveling with elderly members or young children, our drivers provide patient assistance with luggage, wheelchair access, and extra time for boarding. They communicate in English and Arabic, making it easier for international pilgrims to coordinate their daily travel needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mb-2">Prayer-Centered Scheduling</h5>
                                        <p className="text-gray-600 leading-relaxed">
                                            We plan pickups around your prayer schedule, not the other way around. If you're delayed at the Haram after Maghrib or Isha, your driver waits without rushing you—because we know this journey is about worship, not just transportation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">10+</div>
                                    <div className="text-xs text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center border-x border-gray-200">
                                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                                    <div className="text-xs text-gray-600">Available</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-xs text-gray-600">Licensed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Block 1 */}
            < section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50" >
                <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Phone className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-black">24/7 Booking Available</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-black mb-4">
                            Need a Reliable Umrah Taxi in Makkah?
                        </h2>

                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Book safe and spacious vehicles for your family Ziyarat and Haram transfers. Professional drivers who understand your spiritual journey.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link href="/booking">
                                <Button className="bg-black text-white hover:bg-black/90 font-bold px-10 py-7 text-lg rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book Taxi Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-2 border-black/30 hover:bg-white/30 font-bold px-10 py-7 text-lg rounded-2xl h-auto">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Email Us
                                </Button>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6 text-black/80">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Available 24/7</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Trusted by Pilgrims</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Licensed Drivers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Why Choose Us & Airport Transfers */}
            {/* Why Choose Us & Airport Transfers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                                <Plane className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-semibold text-green-900">Airport Service</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Airport Transfers to and from Makkah
                            </h2>

                            <div className="space-y-4 mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We provide 24/7 airport taxi services from Jeddah Airport (King Abdulaziz International) to Makkah hotels, ideal for Umrah pilgrims and families arriving for religious visits. Our drivers track your flight arrival and provide meet-and-greet services at the terminal.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    The journey from Jeddah Airport to Makkah typically takes 60-90 minutes depending on traffic. We plan routes based on prayer times and current traffic flow to ensure you reach your hotel efficiently. Our <Link href="/fleet" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">comfortable vehicles</Link> include GMC Yukons for families and VIPs, with ample space for luggage and Zamzam containers.
                                </p>
                            </div>

                            {/* Content Configuration: Internal Linking to Blog */}
                            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                                <div className="max-w-7xl mx-auto">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Makkah Travel Guides</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {/* Guide 1: Hidden Spots */}
                                        <Link href="/blog/hidden-makkah-spots" className="group">
                                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                                <div className="h-48 bg-gray-200 relative">
                                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                        <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Hidden Gems</span>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full uppercase">Culture</span>
                                                        <span className="text-gray-500 text-xs">Dec 2024</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                                        5 Hidden Historical Spots in Makkah That Most Pilgrims Miss
                                                    </h3>
                                                    <p className="text-gray-600 text-sm line-clamp-2">
                                                        Discover the Jinn Mosque, the Prophet's Birthplace, and other secret Ziyarat locations beyond the main Haram area.
                                                    </p>
                                                    <div className="mt-4 flex items-center text-emerald-600 font-bold text-sm">
                                                        Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Travel Time Logic */}
                            {/* Travel Tip */}
                            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl mb-8">
                                <p className="text-sm text-gray-900 font-semibold">
                                    💡 <strong>Travel Tip:</strong> No surge pricing during peak Umrah days. Fixed rates ensure budget transparency for pilgrims.
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-xl text-center border-2 border-gray-100 hover:border-primary/30 transition-all">
                                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                                    <div className="text-xs text-gray-600">Service</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl text-center border-2 border-gray-100 hover:border-primary/30 transition-all">
                                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 mb-1">5k+</div>
                                    <div className="text-xs text-gray-600">Pilgrims</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl text-center border-2 border-gray-100 hover:border-primary/30 transition-all">
                                    <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
                                    <div className="text-xs text-gray-600">Rating</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl text-center border-2 border-gray-100 hover:border-primary/30 transition-all">
                                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                                    <div className="text-xs text-gray-600">Safe</div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-green-200/30 to-transparent rounded-3xl blur-2xl"></div>
                                <Image
                                    src="/jeddah-airport-transfer.png"
                                    alt="Airport taxi transfer from Jeddah to Makkah hotels near Clock Tower"
                                    width={700}
                                    height={550}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Transparent Pricing</span>
                        </div>

                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Transparent Pricing for Makkah Taxi Services
                        </h3>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            No hidden fees, no surge pricing. Fixed rates for your peace of mind during your spiritual journey.
                        </p>
                    </div>

                    {/* Pricing Image Banner */}
                    <div className="mb-12 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200/20 via-transparent to-yellow-200/20 rounded-3xl blur-2xl"></div>
                        <Image
                            src="/makkah-pricing.png"
                            alt="Transparent taxi pricing in Makkah with clear fare breakdown"
                            width={1200}
                            height={350}
                            className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport Transfers</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 150
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Jeddah Airport to Makkah hotels
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                MOST POPULAR
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Hotel to Haram</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 30
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Quick trips within Makkah
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Intercity Travel</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 400
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Makkah to Madinah or Taif
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-xl text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Prices vary based on vehicle type, distance, and travel time. Contact us for exact quotes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topical Authority: Makkah Travel Guide */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Block 1: Daily Taxi Needs */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Taxi Services in Makkah for Pilgrims and Visitors
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For pilgrims and visitors, reliable daily transportation is the backbone of a successful stay in the holy city. Moving between hotels and the Haram for daily prayers requires a service that is both punctual and familiar with the intricate road networks of Makkah. Avoiding the stress of peak-hour traffic allows you to focus entirely on your spiritual obligations. Our professional chauffeurs are trained to navigate efficiently through busy districts like Aziziyah and Misfalah. Whether you need a quick ride for Ziyarat or a scheduled pickup after Isha, reliable <Link href="/locations" className="text-gray-900 font-medium underline decoration-gray-200 hover:decoration-gray-900 underline-offset-4 transition-all">taxi services available in Makkah</Link> ensure that your movement around the city is always safe, comfortable, and consistent with your itinerary.
                            </p>
                        </div>

                        {/* Block 2: Airport Transfers */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Airport Transfers and Arrival Travel in Makkah
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The journey from King Abdulaziz International Airport to Makkah is distinct from any other travel experience, often marking the beginning of a sacred pilgrimage. After a long international flight, the last thing a visitor needs is uncertainty regarding their transfer. Securing a private ride ensures that you and your luggage are handled with care immediately upon arrival. This direct service eliminates the profound fatigue associated with waiting for buses or hailing cabs. By choosing dedicated <Link href="/locations/jeddah" className="text-gray-900 font-medium underline decoration-gray-200 hover:decoration-gray-900 underline-offset-4 transition-all">airport taxi services in Makkah</Link>, travelers guarantee a smooth, air-conditioned transition from the terminal directly to their hotel lobby, allowing them to enter the state of Ihram or rest without unnecessary delay.
                            </p>
                        </div>

                        {/* Block 3: Vehicle Choice */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Choosing the Right Taxi Vehicle for Travel in Makkah
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Travel logistics in Makkah often depend heavily on the size of your group and the amount of luggage you carry. For families performing Umrah, a standard sedan is frequently insufficient for multiple suitcases and Zamzam containers. It is crucial to assess your spatial needs beforehand to prevent the inconvenience of splitting your group into multiple vehicles. Large SUVs and private vans offer the necessary legroom and cargo space for a relaxed journey. Selecting the most <Link href="/fleet" className="text-gray-900 font-medium underline decoration-gray-200 hover:decoration-gray-900 underline-offset-4 transition-all">comfortable taxi vehicles for Makkah travel</Link> ensures that every family member, from the elderly to children, travels together safely, maintaining the unity and spirit of your religious visit.
                            </p>
                        </div>
                    </div>
                </div>
            </section >


            {/* CTA Block 2 */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-700">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">Ready to Book?</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-white mb-6">
                                Book Your Taxi in Makkah Today
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Don't wait. Secure your <span className="text-primary font-bold">Umrah taxi service in Makkah</span> now for a stress-free pilgrimage.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/booking" className="w-full sm:w-auto">
                                    <Button className="w-full bg-primary text-white hover:text-black hover:bg-accent/90 font-bold text-lg px-10 py-7 rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                        Confirm Booking
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <a href="mailto:taxiserviceksa9988@gmail.com" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl h-auto">
                                        <Phone className="mr-2 w-5 h-5" />
                                        Email to Book
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Information - Makkah Pilgrimage Focus */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Practical Information
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Essential Information for Makkah Pilgrims
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world details to help you navigate Makkah and maximize your Umrah experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Haram Access & Parking */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Haram Access & Drop-off</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Closest Drop-off Points:</p>
                                    <p className="text-sm">King Abdul Aziz Gate (Gate 1), Umrah Gate (Gate 79), King Fahd Gate (Gate 1). Distance to Kaaba: 200-400 meters walking.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Peak Times:</p>
                                    <p className="text-sm">Maghrib-Isha (busiest). Fajr (4-5 AM) is least crowded. Ramadan nights: expect 30+ min delays near Haram.</p>
                                </div>
                            </div>
                        </div>

                        {/* Prayer Times & Tawaf */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Clock className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Prayer Times & Tawaf</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Best Tawaf Times:</p>
                                    <p className="text-sm">After Fajr (5-7 AM): Less crowded. After Isha (9-11 PM): Cooler weather. Avoid: 12-3 PM (extreme heat).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Taxi Timing:</p>
                                    <p className="text-sm">Book 45-60 min before prayer time. Fajr pickup: 4:00-4:30 AM. Drivers wait at hotel lobby.</p>
                                </div>
                            </div>
                        </div>

                        {/* Ziyarat Sites */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Compass className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ziyarat Sites</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Popular Ziyarat:</p>
                                    <p className="text-sm">Jabal al-Nour (Cave Hira): 7km, 20 min drive. Jabal Thawr: 5km, 15 min. Masjid Aisha (Taneem): 8km, 20 min.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Timing Advice:</p>
                                    <p className="text-sm">Visit Jabal al-Nour early morning (6-8 AM) to avoid heat. Climb takes 30-45 min. Bring water.</p>
                                </div>
                            </div>
                        </div>

                        {/* Zamzam & Supplies */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Zamzam & Supplies</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Zamzam Containers:</p>
                                    <p className="text-sm">Available at shops near Haram (SAR 5-20). Standard sizes: 5L, 10L, 20L. All our vehicles accommodate Zamzam containers.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Ihram Supplies:</p>
                                    <p className="text-sm">Shops in Aziziyah area sell Ihram (SAR 20-50), prayer mats, and Umrah essentials. Open 24/7 during Ramadan.</p>
                                </div>
                            </div>
                        </div>

                        {/* Hotel Zones */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Car className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Zones</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Walking Distance Hotels:</p>
                                    <p className="text-sm">Clock Tower, Jabal Omar: 5-10 min walk to Haram. Taxi not needed for prayers. Use taxi for Ziyarat only.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Taxi-Dependent Hotels:</p>
                                    <p className="text-sm">Aziziyah, Misfalah, Rusayfah: 2-5 km from Haram. Taxi essential for all prayers. Travel time: 10-20 min.</p>
                                </div>
                            </div>
                        </div>

                        {/* Climate & Comfort */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Shield className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Climate & Comfort</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Temperature:</p>
                                    <p className="text-sm">Summer (May-Sep): 40-50°C. Winter (Nov-Feb): 25-35°C. Ramadan varies (depends on Islamic calendar).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Ihram Comfort:</p>
                                    <p className="text-sm">Our vehicles maintain 20-22°C AC. Essential for Ihram-wearing pilgrims. Umbrella recommended for outdoor walking.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips Section */}
                    <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                            Pro Tips from Experienced Drivers
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-primary mb-2">🕌 Tawaf Strategy:</p>
                                <p className="text-gray-300 text-sm">First Tawaf: Do it immediately after check-in (even if tired). Crowds increase daily. Early completion = peace of mind.</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary mb-2">🚗 Hotel Location:</p>
                                <p className="text-gray-300 text-sm">If staying in Aziziyah/Misfalah, book taxi for ALL prayers. Walking 2-3km in heat (5 times daily) exhausts pilgrims. Taxi is essential.</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary mb-2">⏰ Fajr Prayer:</p>
                                <p className="text-gray-300 text-sm">Fajr at Haram is special. Book taxi night before (4:00 AM pickup). Traffic is minimal. You'll get best Tawaf experience after Fajr.</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary mb-2">💧 Zamzam Transport:</p>
                                <p className="text-gray-300 text-sm">Buy Zamzam containers on last day. We transport to airport (no extra charge). Don't carry heavy containers throughout Umrah.</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary mb-2">🏔️ Jabal al-Nour:</p>
                                <p className="text-gray-300 text-sm">Visit early (6-7 AM). Climb takes 30-45 min. Bring water, wear good shoes. Taxi waits at base (no extra charge for waiting).</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary mb-2">📅 Ramadan Nights:</p>
                                <p className="text-gray-300 text-sm">Last 10 nights of Ramadan: Extreme crowds. Book taxi 90 min before Taraweeh. Consider walking if hotel is within 1km.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">Frequently Asked Questions About Taxi Service in Makkah</h2>
                        <p className="text-gray-600">Answers to common questions about our taxi service in Makkah</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item - ${index} `} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Content Freshness Signal */}
                    <p className="text-center text-xs text-gray-500 mt-8 italic">
                        This Makkah taxi service page is regularly updated to match current Umrah travel needs and seasonal requirements.
                    </p>

                    {/* Service Area Expansion */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-semibold text-purple-900">Coverage Areas</span>
                            </div>

                            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                We Serve All Major Areas in Makkah
                            </h3>

                            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                                Our drivers are familiar with all neighborhoods and can navigate efficiently to any location in Makkah.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {['Aziziyah', 'Misfalah', 'Ajyad', 'Jabal Omar', 'Clock Tower', 'Kudai', 'Shisha', 'Rusayfah', 'Jarwal', 'Taneem'].map((area, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                                    <MapPin className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-semibold text-gray-900">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* User-Generated Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Makkah Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow pilgrims by sharing your experience or asking questions about Makkah transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Makkah" />
                        <QuestionsDisplay location="Makkah" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Makkah" />
                        <QuestionForm locationName="Makkah" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Umrah Transport',
                        description: 'Complete Umrah journey transport from Jeddah Airport to Makkah, Makkah to Madinah, and all Ziyarat sites.',
                        href: '/services/umrah-transport',
                        icon: MapPin
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from Jeddah Airport with meet-and-greet and flight tracking.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Makkah"
                description="Professional taxi services with licensed drivers for pilgrims and travelers."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Makkah" />
            </div>
        </div >
    );
}
