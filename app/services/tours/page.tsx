
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button'; // Assuming Button is available
import { MapPin, Camera, Sun, Clock, Users, Star, Car, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import TravelConsensus from '@/components/seo/TravelConsensus'; // Reusing components
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices'; // Reusing components
import ReviewsDisplay from '@/components/ReviewsDisplay'; // Reusing
import QuestionsDisplay from '@/components/QuestionsDisplay'; // Reusing
import ReviewForm from '@/components/seo/ReviewForm'; // Reusing
import QuestionForm from '@/components/seo/QuestionForm'; // Reusing
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Saudi Arabia Tours & Sightseeing | Historical & Heritage Trips',
    description: 'Discover Saudi Arabia with private guided tours. Makkah & Madinah Ziyarat, AlUla Heritage sites, Taif sightseeing, and Jeddah historical tours. Book your private driver today.',
    keywords: ['Saudi Arabia tours', 'Madinah Ziyarat tour', 'AlUla heritage tour', 'Taif sightseeing', 'Jeddah historical tour', 'Private tour driver KSA'],
    alternates: {
        canonical: 'https://transferksa.com/services/tours/',
    },
};

export default function ToursPage() {
    const popularTours = [
        {
            name: 'Madinah Ziyarat',
            duration: '3-4 Hours',
            spots: ['Masjid Quba', 'Mount Uhud', 'Seven Mosques', 'Qiblatain'],
            price: 'From SAR 150',
            image: '/madinah-prophets-mosque.webp', // Using existing asset
            link: '/services/madinah-ziyarat'
        },
        {
            name: 'Makkah Ziyarat',
            duration: '3-4 Hours',
            spots: ['Jabal Al-Nour', 'Jabal Thawr', 'Mina/Arafat', 'Jannat al-Mualla'],
            price: 'From SAR 200',
            image: '/locations/makkah.webp', // Placeholder path, falling back if not exists is handled in Hero usually, here in card just img tag
            link: '/locations/makkah-ziyarat'
        },
        {
            name: 'AlUla Heritage Tour',
            duration: 'Full Day',
            spots: ['Hegra (Madain Saleh)', 'Elephant Rock', 'Old Town', 'Dadan'],
            price: 'From SAR 400',
            image: '/alula-hegra.webp', // User provided link content
            link: '/locations/alula'
        },
        {
            name: 'Taif City Tour',
            duration: '4-6 Hours',
            spots: ['Shubra Palace', 'Al Rudaf Park', 'Taif Rose Factory', 'Al Hada Mountain'],
            price: 'From SAR 350',
            image: '/locations/taif.webp', // Placeholder
            link: '/locations/taif'
        },
        {
            name: 'Jeddah Historical Tour',
            duration: '4 Hours',
            spots: ['Al-Balad (Old Jeddah)', 'Corniche', 'King Fahd Fountain', 'Floating Mosque'],
            price: 'From SAR 250',
            image: '/jeddah-airport.webp', // Using existing asset
            link: '/locations/jeddah'
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Saudi Arabia Private Tours",

        "description": "Private sightseeing and historical tours across Saudi Arabia including Ziyarat and Heritage sites.",
        "areaServed": "Saudi Arabia",
        "serviceType": "TourOperator"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="tour-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/hero-slide-2.webp', '/alula-hegra.webp']}
                h1Text="Private Tours & Sightseeing in Saudi Arabia"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Discover the Kingdom
                    </span>
                }
                subtitle="Historical & Cultural Journeys"
                location="KSA Historic Sites"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Tours"
                        description="Experience the deep history of Arabia with knowledgeable private drivers. From the sacred paths of the Prophets to ancient Nabatean tombs."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Tour Routes', value: '50+', icon: MapPin },
                            { label: 'Happy Tourists', value: '10k+', icon: DefaultUserIcon },
                            { label: 'Local Experts', value: '100%', icon: Star }
                        ]}
                    />
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Taif Rose Season"
                    status="Seasonal Update"

                    lastUpdated="Spring 2025"
                    content="Experience the blooming of the famous Taif Roses in spring (March-April). Our Taif City Tour includes visits to traditional rose water distilleries during this fragrant season."
                    tags={["TaifRoses", "Nature", "Seasonal"]}
                    linkText="Book Taif Tour"
                />
            </div>

            {/* Popular Tours Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Popular Tour Packages</h2>
                    <p className="text-center text-gray-600 mb-12">Curated experiences for spiritual and cultural enrichment</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularTours.map((tour, idx) => (
                            <Link href={tour.link} key={idx} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                                <div className="h-48 bg-gray-200 relative">
                                    {/* In a real scenario, use actual Next/Image here with proper sources. 
                                        Since I am assuming paths, I'll use a placeholder div or text if image fails to load visually but code structure is there.
                                     */}
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                        {/* Placeholder for Image */}
                                        <Camera className="w-12 h-12 opacity-20" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{tour.name}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</div>
                                        <div className="flex items-center gap-1 font-semibold text-emerald-600">{tour.price}</div>
                                    </div>
                                    <div className="space-y-1 mb-4">
                                        {tour.spots.map((spot, sIdx) => (
                                            <div key={sIdx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                {spot}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-blue-600 font-medium text-sm mt-4">
                                        View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Semantic Guide Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Ziyarat: Guided vs Self-Guided",
                                commonBelief: "I can just use Google Maps.",
                                reality: "While maps work for navigation, a local driver-guide knows the best parking spots, the historical context (Seerah), and the optimal order to visit sites to avoid crowds and prayer time closures.",
                                truthRange: "Guided = Richer Experience",
                                factors: ["Context", "Efficiency", "Access"]
                            },
                            {
                                topic: "AlUla Tour Requirements",
                                commonBelief: "I can drive to Hegra myself.",
                                reality: "Access to the UNESCO site of Hegra is restricted. You generally need tickets and must use their official buses OR have a special permit. Our drivers take you to the Winter Park assembly point or handle transfers between widespread resort areas.",
                                truthRange: "Requires Planning",
                                factors: ["Permits", "Transport Rules", "Distances"]
                            }
                        ]}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Do the drivers speak English?",
                                    shortAnswer: "Yes, English/Urdu/Arabic.",
                                    detailedAnswer: "Our tour drivers are selected for their language skills and ability to communicate historical information basic to the sites. For specialized deep historical lectures, we recommend hiring a licensed tour guide, but our drivers provide excellent logistical and basic historical support.",
                                    perspectives: [
                                        {
                                            role: "Tourist",
                                            icon: "Users",
                                            insight: "Communication is key. Being able to ask 'What is this mountain?' and get an answer makes the trip memorable."
                                        }
                                    ]
                                },
                                {
                                    question: "Are tickets to sites included?",
                                    shortAnswer: "Transport Only.",
                                    detailedAnswer: "Our prices cover the private vehicle, fuel, and driver. Entry tickets to specific gated museums or AlUla sites must be purchased separately (e.g., via Experience AlUla app). Mosques and open historical sites are free.",
                                    perspectives: [
                                        {
                                            role: "Booking Agent",
                                            icon: "Shield",
                                            insight: "We can advise you on where and how to book tickets, but we focus on the logistics of getting you there comfortably."
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* UGC */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Questons & Reviews</h2>
                    </div>
                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Tours" />
                        <QuestionsDisplay location="Tours" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Tours" />
                        <QuestionForm locationName="Tours" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function DefaultUserIcon(props: any) {
    return <Users {...props} />
}

import { ArrowRight } from 'lucide-react';

