import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle2, Car, Users, Shield, Compass, MapPin, User, Briefcase, Heart, Plane, Phone, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
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
    keywords: ['Madinah taxi', 'Madinah airport taxi', 'Ziyarat tour Madinah', 'Madinah to Makkah taxi', 'Masjid Nabawi transport', 'car with driver in madina', 'taxi madinah to makkah', 'rent a car from madinah to makkah', 'madinah to makkah transport', 'transport madinah to makkah', 'rent a car from makkah to madinah', 'car rental makkah to madinah', 'madinah to makkah private car'],
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
    const services = [
        { name: 'Madinah Airport Transfers', description: 'Prince Mohammad Bin Abdulaziz Airport pickup to Hotel.', icon: Plane },
        { name: 'Ziyarat Tours', description: 'Visit Quba Mosque, Mount Uhud, and Seven Mosques with a knowledgeable driver.', icon: Compass },
        { name: 'Madinah to Makkah Taxi', description: 'Private transfer for Umrah pilgrims. Direct to your hotel in Makkah.', icon: Car },
        { name: 'Hotel to Haram', description: 'Quick drop-off at King Fahd Gate or closest access point to Prophet\'s Mosque.', icon: MapPin },
    ];

    const madinahImages = [
        '/madinah-prophets-mosque.webp',
        '/madinah-night-view.webp',
        '/hero-slide-2.webp',
    ];

    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '450 km (280 mi)', time: '4-5 hours', route: 'Hijrah Hwy' },
        { destination: 'Prince Mohammad Airport', distance: '20 km (12 mi)', time: '25-30 mins', route: 'Airport Rd' },
        { destination: 'Masjid Quba', distance: '10 km (6 mi)', time: '15-20 mins', route: 'Quba Rd' },
        { destination: 'Uhud Mountain', distance: '8 km (5 mi)', time: '15 mins', route: 'King Abdullah Rd' },
        { destination: 'Miqat Dhul Hulaifah', distance: '12 km (7.5 mi)', time: '20 mins', route: 'Ali Bin Abi Talib Rd' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
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
                                "name": "Madinah",
                                "item": "https://taxiserviceksa.com/locations/madinah"
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <Hero
                images={madinahImages}
                h1Text="Online Taxi Service In Madinah"
                bookingFormTitle="Book Online Taxi Service in Madinah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        TaxiServiceKSA™ Madinah
                    </span>
                }
                subtitle="Reliable Transport for Pilgrims & Families"
                location="24/7 Airport & Ziyarat Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                </div>
            </Hero>


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
                        <span className="text-gray-900 font-semibold">Madinah</span>
                    </nav>
                </div>
            </section>

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Services in Madinah
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Madinah Taxi Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            From Prince Mohammad Airport transfers to Ziyarat tours, we offer valid and reliable transport in the City of the Prophet.
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
                </div>
            </section>

            {/* SEO Content Block - Cheap Taxi */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Users className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">For Ziyarat & Umrah</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Cheap Taxi Service in Madinah
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    We provide affordable and consistent online taxi service connecting Madinah Airport, your hotel, and Masjid An Nabawi. Our drivers are local experts who know the best routes to Ziyarat sites.
                                </p>

                                <p>
                                    Whether you need to visit <span className="font-semibold text-gray-900">Masjid Quba</span>, <span className="font-semibold text-gray-900">Mount Uhud</span>, or travel to <Link href="/locations/makkah" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">Makkah</Link> for Umrah via Miqat Dhul Hulaifah, we handle your complete journey. Our <Link href="/fleet" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">fleet</Link> includes spacious GMC Yukons and sedans suitable for families and groups.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Book your Ziyarat tour early to visit holy sites during cooler morning hours.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/madinah-ziyarat-map.png"
                                    alt="Map of Ziyarat locations in Madinah including Quba and Uhud"
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

            {/* Essential Logistics */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-4">Madinah Transport Guide</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Key distances from Masjid An Nabawi.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="Prophet's Mosque" locations={distanceData} />
                        <SeasonalTravelTips city="Madinah" />
                    </div>
                </div>
            </section>

            {/* CTA Block */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Phone className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-black">24/7 Booking</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black mb-4">
                            Need a Reliable Taxi in Madinah?
                        </h2>
                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Book safe transport for Airport Pickup, Ziyarat Tours, and Makkah Transfers.
                        </p>

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
                    </div>
                </div>
            </section>

            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Transparent Pricing</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Transparent Rates
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Fixed rates for Madinah airport and city transfers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport to Hotel</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 80
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Prince Mohammad Airport to City
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                RECOMMENDED
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Compass className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Ziyarat Tour</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Visit Quba, Uhud, Qiblatain
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">To Makkah</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 400
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Private Taxi to Makkah Hotel
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-xl text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Prices vary based on vehicle type and season. Contact us for exact quotes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Holy Sites */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Compass className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-semibold text-emerald-900">Spiritual Landmarks</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Holy Sites & Ziyarat
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Sacred places to visit in Madinah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Site 1: Masjid Nabawi */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/madinah-prophets-mosque.webp"
                                    alt="Al Masjid An Nabawi"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                    Must Visit
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Al-Masjid An-Nabawi</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    The Prophet's Mosque, housing the Rawdah and the Sacred Chamber.
                                </p>
                            </div>
                        </div>

                        {/* Site 2: Masjid Quba */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xl">
                                    <Compass className="w-12 h-12 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Masjid Quba</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    The first mosque built in Islam. Praying 2 rakat here rewards an Umrah.
                                </p>
                            </div>
                        </div>

                        {/* Site 3: Mount Uhud */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xl">
                                    <Star className="w-12 h-12 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Mount Uhud</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Site of the Battle of Uhud and the Martyrs' Cemetery (Sayyid al-Shuhada).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pilgrim Reviews */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Pilgrim Reviews</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Trusted in Madinah
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What pilgrims say about our Madinah Ziyarat service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Our Ziyarat driver was very knowledgeable. He took us to Quba early to avoid crowds. Excellent experience."</p>
                            <div className="font-bold text-gray-900">- Omar Farooq</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Booked transport from Madinah to Makkah. The GMC was very clean and the ride was smooth."</p>
                            <div className="font-bold text-gray-900">- Sarah Ahmed</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"On time pickup from Madinah Airport. Very reliable service."</p>
                            <div className="font-bold text-gray-900">- Mohammed Ali</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Madinah Transport FAQ
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-bold text-gray-900">How much is a taxi from Madinah Airport to Masjid Nabawi?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                Our private transfer starts from SAR 80 to SAR 120 depending on the vehicle. This includes meet and greet service.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-bold text-gray-900">What is included in the Ziyarat Tour?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                Our standard Ziyarat tour includes Masjid Quba, Mount Uhud, Masjid Qiblatain, and the Seven Mosques. It usually takes 3-4 hours.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-bold text-gray-900">Do you go to Makkah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                Yes, we provide private transfers from Madinah to Makkah hotels. The journey takes about 4.5 hours with a stop at the Miqat for Ihram.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Madinah" />
            </div>
        </div >
    );
}
