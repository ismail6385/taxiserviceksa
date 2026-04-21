import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Compass, Landmark, Briefcase, History, Building2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Hero from '@/components/Hero';
import PricingTable from '@/components/PricingTable';
import TrainComparison from '@/components/TrainComparison';
import BookingProcess from '@/components/BookingProcess';
import ZiyaratSites from '@/components/ZiyaratSites';

import JsonLdLocation from '@/components/JsonLdLocation';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Umrah Chauffeur Makkah 2026 | Premium Transport | Taxi Service KSA',
    description: 'Premium VIP private transfer service in Makkah 2026 for Umrah pilgrims. Executive chauffeur service for Makkah, Madinah, and Jeddah Airport pickups. High-end fleet for a dignified journey.',
    keywords: ['VIP Umrah transport Makkah 2026', 'Premium private transfer Makkah', 'Makkah VIP chauffeur', 'Executive Umrah taxi', 'Jeddah to Makkah VIP transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah/',
        },
    },
    openGraph: {
        title: 'VIP Private Transfer in Makkah | 24/7 Umrah Transport | Taxi Service KSA',
        description: 'Book premium VIP private transfers in Makkah specifically for Umrah pilgrims and families. Direct hotel to Haram transfers and Jeddah Airport pickup.',
        url: 'https://taxiserviceksa.com/locations/makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'VIP private transfer in Makkah' }],
    },
};

export default async function MakkahPage() {
    const services = [
        { name: 'VIP Airport Pickup', description: 'Executive pickup from KAIA Terminal 1 & North Terminal directly to your Hotel.', icon: Plane },
        { name: 'Executive Umrah Transfers', description: 'Premium intercity travel between Makkah, Madinah, and Jeddah with VIP hospitality.', icon: Landmark },
        { name: 'VIP Makkah Ziyarat', description: 'Explore historical sites (Arafat, Mina, Jabal Al-Nour) in a luxury SUV with a professional driver.', icon: Compass },
        { name: 'Full-Day Chauffeur', description: 'Dedicated private chauffeur for your entire stay in Makkah. Punctual & Professional.', icon: Briefcase },
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

    const distanceData = [
        { destination: 'Jeddah Airport (KAIA)', distance: '95 km (59 mi)', time: '60-80 mins', route: 'Haramain Hwy' },
        { destination: 'Madinah (Prophet\'s Mosque)', distance: '450 km (280 mi)', time: '4-5 hours', route: 'Route 15' },
        { destination: 'Taif (City Center)', distance: '85 km (53 mi)', time: '60-90 mins', route: 'Al Hada Mtn' },
        { destination: 'Aziziyah (Makkah)', distance: '3-7 km (2-4 mi)', time: '10-20 mins', route: 'Tunnel Access' },
        { destination: 'Jabal Omar Hotels', distance: '1-3 km (0.6-1.8 mi)', time: '5-10 mins', route: 'King Abdulaziz Rd' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Makkah" 
                description="Premium VIP private transfer service in Makkah for Umrah pilgrims. Executive chauffeur service for Makkah, Madinah, and Jeddah Airport pickups. High-end fleet for a dignified journey."
                services={services}
                
                image="https://taxiserviceksa.com/makkah-kaaba-night.webp"
            />


            {/* Hero Section with Makkah-Focused H1 */}
            <Hero
                images={makkahImages}
                h1Text="VIP Private Transfer Makkah"
                bookingFormTitle="2026 Premium Umrah Transfer"
                title={
                    <span className="bg-primary/20 text-primary font-bold tracking-wider uppercase px-4 py-2 rounded-lg inline-block leading-snug">
                        2026 VIP Chauffeur Service
                    </span>
                }
                subtitle="Dignified & Reliable Transport for Pilgrims"
                location="Makkah Holy City"
            />

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Umrah, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Contextual Link Hub - Strategic Linking */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Popular Makkah Routes:</span>
                        <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors font-medium border-b border-gray-200">Jeddah to Makkah</Link>
                        <Link href="/routes/makkah-madinah/" className="text-gray-600 hover:text-primary transition-colors font-medium border-b border-gray-200">Makkah to Madinah</Link>
                        <Link href="/routes/makkah-jeddah/" className="text-gray-600 hover:text-primary transition-colors font-medium border-b border-gray-200">Makkah to Jeddah Airport</Link>
                    </div>
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
                        <span className="text-gray-900 font-semibold">Makkah</span>
                    </nav>
                </div>
            </section>

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            VIP Transport Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Experience the <Link href="/" className="text-primary font-semibold hover:underline">Best Online Taxi Service in Saudi Arabia</Link>. We offer specialized vehicles for every pilgrim group size.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Train vs Taxi Comparison Section */}
                    <div className="mb-24">
                        <TrainComparison 
                            route="Makkah to Madinah"
                            taxiPrice="400"
                            trainPrice="150"
                        />
                    </div>

                    {/* Recommended Fleet for Makkah */}
                    <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:max-w-2xl">
                                <h3 className="text-3xl md:text-4xl font-black mb-6">Recommended Fleet for Makkah</h3>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">For families and large groups performing Umrah, we recommend our spacious SUVs and Vans for maximum comfort and luggage space.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Link href="/fleet/gmc-yukon/" className="flex items-center gap-4 group p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Car className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-lg block">GMC Yukon</span>
                                            <span className="text-sm text-gray-500">7 Adults | 5 Bags</span>
                                        </div>
                                    </Link>
                                    <Link href="/fleet/toyota-hiace/" className="flex items-center gap-4 group p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Car className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-lg block">Toyota HiAce</span>
                                            <span className="text-sm text-gray-500">12 Adults | 16 Bags</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/fleet/" className="w-full lg:w-auto">
                                <Button className="w-full bg-primary text-white hover:bg-white hover:text-primary font-black px-12 py-8 h-auto text-xl rounded-2xl transition-all shadow-2xl shadow-primary/20">
                                    Explore All
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Makkah Neighborhood Guides - Micro-Niche Strategy */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Local Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Makkah Transport by Neighborhood
                            </h2>
                            <p className="text-gray-600 mt-4 text-lg">
                                Whether you are staying in the heart of the luxury district or a quiet residential pocket, we provide specialized taxi services for every corner of Makkah.
                            </p>
                        </div>
                        <Link href="/locations/" className="text-primary font-bold flex items-center gap-2 group border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                            Explore All Locations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {[
                            { name: 'Aziziyah', slug: 'aziziyah', desc: 'Pilgrim accommodation heart.', icon: Building2 },
                            { name: 'Jabal Omar', slug: 'jabal-omar', desc: 'Luxury district near Haram.', icon: Star },
                            { name: 'Kudai', slug: 'kudai', desc: 'Vital transport hub.', icon: MapPin },
                            { name: 'Misfalah', slug: 'misfalah', desc: 'Bustling area with hotels.', icon: Users },
                            { name: 'Jarwal', slug: 'jarwal', desc: 'Modern area near expansion.', icon: Landmark },
                        ].map((district, idx) => (
                            <Link
                                key={idx}
                                href={`/locations/makkah/${district.slug}/`}
                                className="group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    <district.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{district.name}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                    {district.desc}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                                    Guide <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Premium Experience</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                VIP Private Transfer for Umrah Pilgrims
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Experience a <strong>dignified and premium Umrah journey</strong> with our VIP private transfer service. We provide an executive alternative to standard city transport, ensuring that your spiritual focus remains uninterrupted by logistical challenges.
                                </p>

                                <p>
                                    Our service is dedicated to <strong>high-end intercity travel and airport pickups</strong>. Whether you are arriving at King Abdulaziz International Airport or require a dedicated chauffeur for the journey to Madinah, we offer a specialized 2025 fleet designed for pilgrims and families. We prioritize international guests, providing professional, English-speaking chauffeurs and a level of hospitality that reflects the sanctity of your visit.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Prayer Time Respect</h3>
                                        <p className="text-sm text-gray-500">Drivers understand Salah timings</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Zamzam Safe</h3>
                                        <p className="text-sm text-gray-500">Secure space for holy water</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/makkah-taxi-pilgrims.png"
                                    alt="Umrah pilgrims in Makkah"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Essential Makkah Logistics */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Travel Logistics</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Makkah Transport Guide</h2>
                        <p className="text-gray-600 text-lg max-w-2xl">Key distances and seasonal advice for your pilgrimage journey in 2026.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <DistanceTable origin="Makkah Haram" locations={distanceData} />
                        <SeasonalTravelTips city="Makkah" />
                    </div>
                </div>
            </section>


            {/* CTA Block 1 - High Contrast */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-gray-900 rounded-[3rem] p-12 md:p-20 shadow-2xl">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/makkah-pattern.png')] opacity-10 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                    
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Reliable Umrah Taxi <span className="text-primary">Available 24/7</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Book safe, spacious vehicles for your family Ziyarat and Haram transfers with drivers who respect your spiritual focus.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/booking/" className="w-full sm:w-auto">
                                <Button className="w-full bg-primary text-white hover:bg-white hover:text-primary font-black px-12 py-8 h-auto text-xl rounded-2xl transition-all shadow-2xl shadow-primary/20">
                                    Book VIP Now
                                </Button>
                            </Link>
                            <a href="mailto:info@taxiserviceksa.com" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full bg-transparent text-white border-2 border-white/20 hover:bg-white/10 font-bold px-12 py-8 h-auto text-xl rounded-2xl">
                                    Contact Support
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Pricing Information */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Fixed Rates</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Makkah Transfer Pricing</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            No hidden fees or surge pricing. Fixed, all-inclusive rates for your peace of mind during your spiritual journey in 2026.
                        </p>
                    </div>

                    <PricingTable />

                    <div className="mt-24 pt-24 border-t border-gray-200">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-black text-gray-900 mb-4">How to Book</h3>
                            <p className="text-gray-600 text-lg">Secure your premium ride in three simple steps.</p>
                        </div>
                        <BookingProcess />
                    </div>
                </div>
            </section>


            {/* Holy Sites */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">

                    <ZiyaratSites 
                        title="Holy Sites & 2026 Ziyarat Guide"
                        subtitle="Comprehensive details on sacred places in Makkah, including historical significance and 2026 visitation tips."
                        locationSlug="makkah"
                        sites={[
                            {
                                name: "Al Masjid Al Haram",
                                description: "The most sacred point in Islam, housing the Holy Kaaba. It is the focal point for every Muslim and the site of the annual Hajj pilgrimage.",
                                significance: "Praying in Masjid Al Haram is equivalent to 100,000 prayers performed elsewhere.",
                                location: "Central Makkah",
                                image: "/makkah-grand-mosque.webp"
                            },
                            {
                                name: "Jabal Al-Nour (Hira Cave)",
                                description: "The 'Mountain of Light' housing the Hira Cave, where Prophet Muhammad (PBUH) received the first revelation of the Quran from Angel Jibril.",
                                significance: "The birthplace of the Islamic message and a site of deep contemplation.",
                                location: "7km Northeast of Haram",
                                image: "/makkah-hira.webp"
                            },
                            {
                                name: "Mount Arafat (Jabal al-Rahmah)",
                                description: "The 'Mountain of Mercy' where the Prophet (PBUH) delivered his Farewell Sermon. It is the most critical site for the Hajj pilgrimage.",
                                significance: "Standing on Arafat is the pinnacle of Hajj; without it, the pilgrimage is incomplete.",
                                location: "20km Southeast of Makkah",
                                image: "/makkah-arafat.webp"
                            },
                            {
                                name: "Mina (City of Tents)",
                                description: "A valley where pilgrims stay in tents during the Hajj days. It is the site of the Jamarat (Stoning of the Devil) ritual.",
                                significance: "A massive logistical marvel and a key station of the spiritual journey.",
                                location: "5km East of Haram",
                                image: "/makkah-mina.webp"
                            }
                        ]}
                    />
                </div>
            </section>


            {/* Customer Testimonials */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Trust Signals</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Makkah Pilgrim Reviews</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">See why thousands of pilgrims trust us for their spiritual journey every year.</p>
                    </div>
                    <ReviewsDisplay location="Makkah" limit={6} />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Common Questions</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg">Everything you need to know about Makkah transfers.</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-primary transition-colors hover:no-underline py-6">
                                    How much is a taxi from Jeddah Airport to Makkah?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                                    Our fixed rate for a standard sedan starts from SAR 250. For larger families needing a GMC Yukon or HiAce, prices range from SAR 400-500. There are no hidden fees or surge charges.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b border-gray-100 last:border-0">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-primary transition-colors hover:no-underline py-6">
                                    Do you offer 24/7 service to Masjid al-Haram?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                                    Yes, we operate 24 hours a day, 7 days a week. We can pick you up from any hotel in Makkah for any prayer time, including Tahajjud and Fajr.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b border-gray-100 last:border-0">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-primary transition-colors hover:no-underline py-6">
                                    How can I book an online taxi in Makkah?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                                    The fastest way to book is via our WhatsApp link at the top of the page. You can also use the booking form or contact us via email. We recommend booking 24 hours in advance.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* UGC Section - Pilgrim Stories & Questions */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Community</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Makkah Pilgrim Stories</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Share your experience or ask a question about specialized transport in the Holy City.</p>
                    </div>

                    <div className="space-y-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="bg-gray-50 p-10 rounded-[2.5rem]">
                                <h3 className="text-2xl font-black text-gray-900 mb-8">Share Your Review</h3>
                                <ReviewForm locationName="Makkah" />
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem]">
                                <h3 className="text-2xl font-black text-gray-900 mb-8">Ask a Question</h3>
                                <QuestionForm locationName="Makkah" />
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-24">
                            <QuestionsDisplay location="Makkah" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Hub & Related Locations */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="bg-gray-900 rounded-[3rem] p-12 md:p-16 mb-24 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white text-xl font-bold mb-6">Umrah Fleet</h4>
                            <ul className="space-y-4">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-400 hover:text-primary transition-colors">GMC Yukon (Luxury)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-400 hover:text-primary transition-colors">Toyota Hiace (Van)</Link></li>
                                <li><Link href="/fleet/" className="text-primary font-bold">Compare All →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-bold mb-6">Popular Routes</h4>
                            <ul className="space-y-4">
                                <li><Link href="/routes/jeddah-makkah/" className="text-gray-400 hover:text-primary transition-colors">Jeddah to Makkah</Link></li>
                                <li><Link href="/routes/makkah-madinah/" className="text-gray-400 hover:text-primary transition-colors">Makkah to Madinah</Link></li>
                                <li><Link href="/routes/" className="text-primary font-bold">All Routes →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-bold mb-6">Travel Guides</h4>
                            <ul className="space-y-4">
                                <li><Link href="/guides/makkah-umrah-guide/" className="text-gray-400 hover:text-primary transition-colors">Complete Umrah Guide</Link></li>
                                <li><Link href="/guides/" className="text-primary font-bold">All Guides →</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <RelatedLocations currentCity="Makkah" />
            </div>
        </div>
    );
}

