import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building, Phone, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import ServiceComparison from '@/components/ServiceComparison';
import TopicCluster from '@/components/seo/TopicCluster';
import ExpertReview from '@/components/seo/ExpertReview';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import ProcessFlow from '@/components/ProcessFlow';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Executive Chauffeur Riyadh | RUH Airport',
    description: 'Premium VIP private transfer and executive chauffeur service in Riyadh. Specialized King Khalid Airport (RUH) pickups and corporate business transport. Professional international standards.',
    keywords: ['Riyadh VIP private transfer', 'Executive chauffeur service Riyadh', 'Riyadh airport VIP pickup', 'RUH premium airport transfer', 'Riyadh corporate business transport', 'Luxury car with driver Riyadh', 'Riyadh to Makkah VIP transfer'],
    alternates: {
        canonical: 'https://transferksa.com/locations/riyadh/',
    },
    openGraph: {
        title: 'VIP Private Transfer & Executive Chauffeur Riyadh',
        description: 'Premium VIP private transfer and professional chauffeur service in Riyadh. Specialized King Khalid Airport (RUH) pickups and elite corporate transport.',
        url: 'https://transferksa.com/locations/riyadh/',
        type: 'website',
    },
};

export default function RiyadhPage() {
    const services = [
        { name: 'VIP Airport Pickup', description: 'VIP Meet & Greet service at RUH Airport (Terminals 1, 2, 3, 4 & 5).', icon: Plane },
        { name: 'VIP Corporate Transport', description: 'Professional executive chauffeur service for business meetings and events.', icon: Building },
        { name: 'Riyadh to Makkah', description: 'Long-distance VIP private transfer from Riyadh to Makkah (9 hours).', icon: Car },
        { name: 'Riyadh to Dammam', description: 'Premium intercity transfer to Dammam, Khobar, and Bahrain Causeway.', icon: MapPin },
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

    const faqs = [
        {
            question: "How much is a VIP transfer from Riyadh Airport to Olaya/Downtown?",
            answer: "Our fixed rate for VIP airport transfers to the city center starts from SAR 150. This includes professional meet & greet service and generous waiting time."
        },
        {
            question: "Do you offer monthly chauffeur services for companies?",
            answer: "Yes, we specialize in corporate executive transport. We offer daily, weekly, and monthly rates for businesses with professional English-speaking chauffeurs."
        },
        {
            question: "How much is a VIP transfer from Riyadh to Makkah?",
            answer: "A direct private VIP transfer from Riyadh to Makkah costs between SAR 1200 - 1500, depending on the vehicle type (Premium Sedan vs GMC Yukon)."
        },
        {
            question: "Can I book a VIP transfer from Riyadh to Dammam?",
            answer: "Yes, we provide premium intercity transfers to Dammam and Khobar starting from SAR 800. The journey takes about 4 hours in a comfortable executive vehicle."
        },
        {
            question: "Is the VIP chauffeur service available 24/7?",
            answer: "Yes, our operations are 24/7. Whether your flight lands at 3 AM or you have a late-night executive meeting, our chauffeurs are available."
        },
        {
            question: "Do you accept credit cards?",
            answer: "Yes, you can pay online securely or pay the driver in cash. Corporate accounts with invoicing are also available."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="riyadh-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Riyadh VIP Transfer & Chauffeur Service",
                        "areaServed": { "@type": "City", "name": "Riyadh" },
                        "description": "Premium VIP private transfer service in Riyadh for airport transfers, corporate travel, and executive intercity trips."
                    })
                }}
            />

            {/* Hero Section */}
            <Hero
                images={riyadhImages}
                h1Text="VIP Private Transfer & Chauffeur Riyadh"
                bookingFormTitle="Book Premium Transfer in Riyadh"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Riyadh
                    </span>
                }
                subtitle="Executive Business Transport & Premium Airport Transfers"
                location="Riyadh • RUH Airport • Intercity"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Airport, Intercity, and VIP Business transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Riyadh</span>
                    </nav>
                </div>
            </section>

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Available Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Premium Riyadh Transport
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Reliable VIP transport solutions for Saudi Arabia's capital. From executive airport pickups to premium corporate fleets. Book our <Link href="/fleet/gmc-yukon/" className="text-black font-bold underline decoration-primary">GMC Yukon</Link> for professional business travel.
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
                                <Building className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">Corporate & Airport</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                VIP Executive Transfer Service Riyadh
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Discover the premier <strong>VIP private transfer service in Riyadh</strong>, tailored for international business travelers and diplomatic personnel. We offer an elite alternative to standard city transport, providing a reliable, chauffeur-driven experience that meets global corporate standards.
                                </p>

                                <p>
                                    Our executive service focuses exclusively on <strong>King Khalid International Airport (RUH) pickups and long-distance intercity transfers</strong>. Whether you have meetings in the King Abdullah Financial District (KAFD) or require a private chauffeur to Dammam or Makkah, we ensure a punctual, high-end journey. Unlike app-based hailing, we guarantee fixed professional rates and a premium 2025 fleet, ensuring your transportation reflects your professional status.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Book regular corporate rides and get special monthly invoice rates!
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/hero-slide-3.webp"
                                    alt="Riyadh VIP Private Transfer Service"
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-4">Riyadh Travel Times</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Traffic in Riyadh can be heavy. Plan your trips accordingly.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="RUH Airport" locations={distanceData} />
                        <SeasonalTravelTips city="Riyadh" />
                    </div>
                </div>
            </section>


            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Competitive Rates</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Simple & Fair Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Fixed fares for peace of mind. No hidden meters.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport Transfer</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 150
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                RUH to City Center
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                POPULAR
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Riyadh to Dammam</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 800
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4-Hour Intercity Trip
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Riyadh to Makkah</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 1200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                VIP Transfer to Makkah Hotel
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-xl text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Corporate?</strong> Contact us for customized monthly billing and fleet management services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Client Feedback</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Business Trusted
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Reliable service for our visiting executives. The drivers know KAFD well and always arrive on time."</p>
                            <div className="font-bold text-gray-900">- Mohammed A., HR Manager</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Great airport pickup experience. The car was clean and cool, which is essential in Riyadh heat."</p>
                            <div className="font-bold text-gray-900">- Sarah Jenkins, Consultant</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Used them for a trip to Dammam. Much better than flying and dealing with airport security for a short trip."</p>
                            <div className="font-bold text-gray-900">- Fahad K.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Riyadh VIP Transfer FAQ
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm mb-4">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
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
                            Request Your VIP Transfer
                        </h2>
                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Professional executive transport at your service.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link href="/booking/">
                                <Button className="bg-black text-white hover:bg-black/90 font-bold px-10 py-7 text-lg rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book VIP Transfer
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:info@transferksa.com">
                                <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-2 border-black/30 hover:bg-white/30 font-bold px-10 py-7 text-lg rounded-2xl h-auto">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Email Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Internal Links Hub */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Navigation className="w-5 h-5 text-primary" /> Popular Riyadh Routes
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/routes/riyadh-jeddah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Riyadh to Jeddah (Capital to Coast)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/" className="text-primary font-bold hover:underline">View All City Routes →</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" /> Recommended Fleet for Riyadh
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>GMC Yukon (VIP Business Choice)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Toyota Camry (Efficient Solo Travel)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/" className="text-primary font-bold hover:underline">Explore Entire Fleet →</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>
        </div>
    );
}
