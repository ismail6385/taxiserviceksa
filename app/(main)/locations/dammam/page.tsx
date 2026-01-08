import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, Palmtree } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import RelatedLocations from '@/components/seo/RelatedLocations';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import DistanceTable from '@/components/seo/DistanceTable';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Executive Chauffeur Dammam | DMM Airport',
    description: 'Premium VIP private transfer and executive chauffeur service in Dammam. Specialized King Fahd International Airport (DMM) pickups and industrial hub transfers to Jubail. Professional corporate standards.',
    keywords: ['Dammam VIP private transfer', 'Executive chauffeur Dammam', 'DMM airport VIP pickup', 'Premium Dammam to Jubail transfer', 'Dammam corporate transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/dammam/',
            'ar': 'https://taxiserviceksa.com/ar/locations/dammam/',
            'ur': 'https://taxiserviceksa.com/ur/locations/dammam/',
            'x-default': 'https://taxiserviceksa.com/locations/dammam/',
        }
    },
    openGraph: {
        title: 'VIP Transfer in Dammam | Airport & City Travel',
        description: 'Book the premium VIP transfer in Dammam. Fast airport transfers, corniche rides & intercity travel to Khobar/Jubail. 24/7 availability.',
        url: 'https://taxiserviceksa.com/locations/dammam/',
        type: 'website',
    },
};

export default function DammamPage() {
    const services = [
        { name: 'King Fahd Airport (DMM)', description: 'Fast and reliable transfers to/from King Fahd International Airport', icon: Plane },
        { name: 'Dammam Corniche', description: 'Leisure rides to the Dammam Corniche and Dolphin Village', icon: Palmtree },
        { name: 'Intercity to Jubail', description: 'Direct transfers to Jubail Industrial City for business travelers', icon: Building2 },
        { name: 'Half Moon Bay Trips', description: 'Day trips to Half Moon Bay for family recreation', icon: Car },
    ];

    const features = [
        'Drivers with Eastern Province expertise',
        '24/7 Airport pickup service',
        'Vehicles for families & groups',
        'Fixed fares to Jubail & Khobar',
        'Safe & Insured rides',
        'Online booking confirmation',
    ];

    const dammamImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "Is there a taxi pickup at Dammam Airport?",
            answer: "Yes, we provide 24/7 pickup service from King Fahd International Airport (DMM). We track your flight and meet you at the arrivals terminal. It's best to book online."
        },
        {
            question: "Is there a taxi from Dammam to Al Khobar?",
            answer: "Yes, we have frequent taxi services connecting Dammam, Al Khobar, and Dhahran. It's affordable and connects the whole tri-city area."
        },
        {
            question: "What is the quickest way from Dammam to Jubail?",
            answer: "Our private taxi is the fastest way to travel from Dammam to Jubail. The trip takes about 1 hour and is direct, unlike buses."
        },
        {
            question: "Can I book a taxi to Half Moon Bay?",
            answer: "Yes, you can book a taxi for a day trip to Half Moon Bay. We can drop you off and pick you up whenever you like."
        },
        {
            question: "Do you offer corporate car rental in Dammam?",
            answer: "Yes, we specialize in corporate transport. Many companies use our 'rent a car with driver' service for employee commutes to Jubail and Khobar."
        },
        {
            question: "How do I pay for my taxi in Dammam?",
            answer: "You can pay by cash or use our secure online payment system when you book through our website."
        }
    ];



    return (
        <div className="bg-gray-50 min-h-screen">

            <Script
                id="dammam-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />


            {/* Hero Section */}
            <Hero
                images={dammamImages}
                h1Text="VIP Private Transfer & Chauffeur Dammam"
                bookingFormTitle="Book Premium Transfer in Dammam"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Dammam
                    </span>
                }
                subtitle="Eastern Province Metro Hub & Industrial Artery"
                location="DMM Airport • Jubail • Corporate"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Dammam"
                        description="Professional chauffeur and airport transfer services in Dammam. We help business travelers and families with luxury vehicles and 24/7 availability for King Fahd International Airport (DMM) and Jubail transfers."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Airport Trips', value: '12k+', icon: Plane },
                            { label: 'Jubail Transfers', value: '8,000+', icon: Building2 },
                            { label: 'Reliability', value: '99.8%', icon: Shield }
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
                        OFFICIAL NOTE: We specialize in pre-booked Airport, Intercity, and VIP Corporate transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Dammam Airport Distance"
                    status="Traffic Alert"
                    lastUpdated="Daily Update"
                    content="King Fahd International Airport (DMM) is 45km away from Dammam City Center. The highway is fast but prone to speed radar traps. Allow 50-60 mins for the trip during rush hour."
                    tags={["AirportDistance", "SpeedCams", "RushHour", "DMM"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Understanding Dammam Transport"
                    intro="Dammam is part of a massive metropolitan area including Dhahran and Al Khobar. Locals call it the 'Tri-City'."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Inter-City',
                            question: 'Are Dammam and Khobar the same?',
                            answer: 'Geographically connected but distinct. Moving between them during peak work hours (7-9 AM) can take 40+ mins due to highway traffic.',
                            citation: 'Traffic Analysis'
                        },
                        {
                            id: 'q2',
                            condition: 'Airport Info',
                            question: 'Why is the airport so far?',
                            answer: 'DMM is the largest airport in the world by land area, built far from the city to allow expansion. Taxis are the only reliable link.',
                            citation: 'Airport Facts'
                        },
                        {
                            id: 'q3',
                            condition: 'Industrial Hub',
                            question: 'Taxi to Jubail?',
                            answer: 'Jubail Industrial City is 100km north (1 hr drive). We provide flat-rate transfers for contractors and engineers.',
                            citation: 'Route Map'
                        }
                    ]}
                />

                <SemanticField
                    title="The Eastern Province Context"
                    explanation="Dammam is the administrative capital, but the centers of gravity for oil and business are spread out."
                    concepts={[
                        {
                            label: 'Dammam City',
                            description: 'The administrative heart. Home to the Corniche, government offices, and the central railway station.',
                            wikiLink: 'https://en.wikipedia.org/wiki/Dammam'
                        },
                        {
                            label: 'Dhahran',
                            description: 'The Aramco Oil Hub. Highly secured residential camps and huge business parks (Techno Valley).',
                            internalLink: '/locations/dhahran'
                        },
                        {
                            label: 'Al Khobar',
                            description: 'The social hub. Restaurants, malls, and the Causeway bridge to Bahrain.',
                            internalLink: '/locations/al-khobar'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Dammam Transport Network"
                    clusters={[
                        {
                            category: "Major Routes",
                            relevance: "Primary",
                            items: [
                                { label: "Airport Transfer (DMM)", url: "/services/airport-transfers" },
                                { label: "Dammam to Bahrain", url: "/locations/al-khobar" },
                                { label: "Dammam to Riyadh (Train Station)", url: "/services/city-transport" }
                            ]
                        },
                        {
                            category: "Corporate",
                            relevance: "Secondary",
                            items: [
                                { label: "Jubail Commute", url: "/services/corporate-travel", description: "Daily Staff Transport" },
                                { label: "2nd Industrial City", url: "/services/industrial", description: "Factory Staff" }
                            ]
                        }
                    ]}
                />
            </div>

            {/* Authoritative Signal */}
            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Captain Nasser Al-Dawsari'
                        reviewerTitle='Eastern Province Route Manager'
                        reviewDate="29 Dec 2025"
                        expertise={["Dammman-Jubail Hwy", "Airport Logistics", "Industrial Security"]}
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Executive Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">VIP Dammam Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Premium chauffeur-driven experiences connecting Dammam to King Fahd Airport (DMM), Jubail Industrial City, and corporate hubs across the Eastern Province.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Dammam VIP Transfer</h2>
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

            {/* Micro-Semantic FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-12 mb-16">
                        <DistanceTable
                            origin="Dammam City Center"
                            locations={[
                                { destination: 'King Fahd Airport (DMM)', distance: '45 km', time: '40 mins', route: 'King Fahd Rd' },
                                { destination: 'Al Khobar Corniche', distance: '25 km', time: '30 mins', route: 'Coastal Hwy' },
                                { destination: 'Jubail Industrial City', distance: '95 km', time: '60 mins', route: 'Jubail Hwy' },
                                { destination: 'Bahrain Causeway', distance: '40 km', time: '45 mins', route: 'Khobar Rd' },
                                { destination: 'Riyadh', distance: '410 km', time: '4h', route: 'Route 40' }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Dammam vs Khobar Stay",
                                    commonBelief: "It doesn't matter where I stay.",
                                    reality: "It matters. Khobar has the dining/social life. Dammam has cheaper hotels and government offices. Traffic between them is heavy.",
                                    truthRange: "Choose Based on Purpose",
                                    factors: ["Traffic", "Lifestyle"]
                                },
                                {
                                    topic: "Uber at DMM Airport",
                                    commonBelief: "Always available.",
                                    reality: "DMM is very far. Ubers often reject the trip due to 'deadheading' (returning empty). Pre-booked taxis are reliable.",
                                    truthRange: "Unreliable Availability",
                                    factors: ["Distance", "Driver Preference"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mb-16">
                        <RoutePerspective
                            route="Dammam to Jubail (The Industrial Artery)"
                            perspectives={[
                                {
                                    id: "engineer",
                                    targetAudience: "Project Manager",
                                    icon: Building2,
                                    intent: "Business",
                                    description: "A daily commute for thousands. Speed cameras are everywhere (Limit 120km/h). Our drivers use cruise control to ensure safety and punctuality.",
                                    structuredFeatures: [
                                        { label: "Vehicle", value: "Comfort Sedan" },
                                        { label: "Route", value: "Hwy 615" },
                                        { label: "Reliability", value: "Critical" }
                                    ],
                                    visualContext: "Wide highway flanked by refineries."
                                },
                                {
                                    id: "family",
                                    targetAudience: "Weekend Visitor",
                                    icon: Palmtree,
                                    intent: "Leisure",
                                    description: "Visiting Jubail's Fanateer Beach. A smooth drive on weekends.",
                                    structuredFeatures: [
                                        { label: "Stop", value: "Fanateer Mall" },
                                        { label: "Timing", value: "Before Sunset" }
                                    ],
                                    visualContext: "Coastal road views."
                                }
                            ]}
                        />
                    </div>

                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How much is a VIP transfer from Dammam Airport to the city?",
                                shortAnswer: "150-200 SAR",
                                detailedAnswer: "King Fahd International Airport (DMM) is 45-50km from the city. The standard fare reflects this distance. Uber pricing surges, but our fixed rate includes meet & greet.",
                                perspectives: [
                                    { role: "Business", icon: "Plane", insight: "Company expense accounts prefer our fixed receipts." },
                                    { role: "Family", icon: "Users", insight: "Cheaper than 2 Ubers for a large group." }
                                ]
                            },
                            {
                                question: "Can you take me to Bahrain?",
                                shortAnswer: "Yes, with Papers",
                                detailedAnswer: "We offer transfers to the Bahrain border. If you need to cross, we can arrange a specific vehicle with authorization (requires advance booking and valid visa).",
                                perspectives: [
                                    { role: "Expat", icon: "Shield", insight: "Visa on arrival is available at the causeway." }
                                ]
                            },
                            {
                                question: "Is there a VIP transfer to Riyadh?",
                                shortAnswer: "Yes, 4 Hours",
                                detailedAnswer: "We provide intercity transfers to Riyadh (400km). It is a smooth highway drive. Popular for those who miss flights or carry heavy luggage.",
                                perspectives: [
                                    { role: "Driver", icon: "Car", insight: "We stop at SASCO midway for breaks." }
                                ]
                            },
                            {
                                question: "Do you serve the 2nd Industrial City?",
                                shortAnswer: "Yes, Daily",
                                detailedAnswer: "We have specific routes covering Dammam's 1st and 2nd Industrial Cities, knowing the gate systems and factory locations.",
                                perspectives: [
                                    { role: "Contractor", icon: "Building2", insight: "Gate passes are needed for some zones." }
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
                            <span className="text-sm font-semibold text-yellow-900">Fixed Rates</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Dammam VIP Transfer Fares
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Flat rates to/from King Fahd International Airport (DMM).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">VIP Airport Pickup</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                MED Airport to Dammam Center (Fixed)
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                POPULAR
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">To Jubail</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 350
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Industrial City Transfer
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">To Al Khobar</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                King Fahd Causeway / Corniche
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Dammam" />
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dammam VIP Transfer Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Reliable transport for airport transfers, Jubail trips, and city travel.
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
