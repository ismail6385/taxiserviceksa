import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Info, CheckCircle2, Navigation, DollarSign, User, Shield, Star, Car } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ZiyaratSites from '@/components/ZiyaratSites';
import PricingTable from '@/components/PricingTable';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
    title: 'Ziyarat in Makkah 2026 | Full Holy Sites Tour | VIP Taxi Service',
    description: 'Book the best Makkah Ziyarat tour for 2026. Visit Jabal al-Nour, Jabal Thawr, Mina, Arafat, and more with professional chauffeurs. Fixed rates and VIP cars.',
    keywords: ['Ziyarat in Makkah 2026', 'Makkah holy sites tour taxi', 'Jabal al-Nour taxi price', 'Makkah ziyarah guide'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ziyarat-in-makkah/',
    },
};

export default function ZiyaratInMakkahPage() {
    const makkahSites = [
        {
            name: 'Jabal al-Nour (Hira Cave)',
            description: 'The mountain where the Prophet Muhammad (PBUH) received the first revelation. A significant site for reflection and history.',
            significance: 'Site of the first Quranic revelation.',
            recommendedTime: '2-3 Hours'
        },
        {
            name: 'Jabal Thawr',
            description: 'The cave where the Prophet (PBUH) and Abu Bakr (RA) took refuge during the Hijrah to Madinah.',
            significance: 'Crucial turning point in Islamic history.',
            recommendedTime: '1.5 Hours'
        },
        {
            name: 'Mina, Muzdalifah & Arafat',
            description: 'The essential sites of the Hajj pilgrimage. Our tour takes you through the tents of Mina and the plains of Arafat.',
            significance: 'The core landmarks of the Hajj journey.',
            recommendedTime: '2 Hours'
        },
        {
            name: 'Jannat al-Mu\'alla',
            description: 'The historical cemetery where many of the Prophet\'s relatives, including Khadija (RA), are buried.',
            significance: 'Final resting place of the Sahaba and early Muslims.',
            recommendedTime: '45 Mins'
        },
        {
            name: 'Masjid al-Jinn',
            description: 'A historic mosque located near the cemetery, where a group of Jinn are said to have embraced Islam.',
            significance: 'Commemorates the interaction between the Prophet (PBUH) and Jinn.',
            recommendedTime: '30 Mins'
        }
    ];

    const pricingRows = [
        { vehicle: 'Standard Sedan', description: 'Up to 3 pax. Best for small families.', price: '150', capacity: '3 Pax', isPopular: false },
        { vehicle: 'GMC Yukon XL', description: 'Up to 7 pax. Ultimate VIP comfort.', price: '250', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Hyundai Staria VIP', description: 'Up to 7 pax. Luxury captain seats.', price: '220', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Toyota Hiace', description: 'Up to 11 pax. For large Umrah groups.', price: '350', capacity: '11 Pax', isPopular: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Makkah Ziyarat"
                description="Comprehensive private taxi tours to holy Islamic sites in Makkah. Visit Jabal al-Nour, Jabal Thawr, and the Hajj landmarks with experienced local drivers."
                services={[
                    { name: 'Standard Makkah Ziyarat', description: '3-hour guided visit to essential historical sites in Makkah.' },
                    { name: 'Full History Tour', description: 'In-depth 6-hour exploration of Makkah\'s prophetic landmarks.' },
                    { name: 'Family Group Transport', description: 'Comfortable SUVs and vans suitable for large groups of pilgrims.' }
                ]}
                image="https://taxiserviceksa.com/locations/makkah.webp"
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-1.webp']}
                h1Text="Ziyarat in Makkah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 Holy Sites Tour
                    </span>
                }
                subtitle="Walk through the history of the Prophet (PBUH)"
                location="Makkah Al-Mukarramah | VIP Private Cars"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?service=ziyarat">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ziyarat Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Package
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Last Updated: April 2026 • 2026 Prices Verified</p>
            </Hero>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center border-r border-gray-100 last:border-0">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <Navigation className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Standard Duration</span>
                        <span className="text-lg font-black text-gray-900">3 - 4 Hours</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-r border-gray-100 last:border-0">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Major Sites</span>
                        <span className="text-lg font-black text-gray-900">7+ Locations</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-r border-gray-100 last:border-0">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <DollarSign className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Price Range</span>
                        <span className="text-lg font-black text-gray-900">From 150 SAR</span>
                    </div>
                    <div className="flex flex-col items-center text-center last:border-0">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Type</span>
                        <span className="text-lg font-black text-gray-900">100% Private</span>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display leading-tight italic">Why Pre-Book Your Makkah Ziyarat?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Finding a reliable taxi in the busy streets of Makkah can be difficult, especially when you want to visit multiple historical sites. Street taxis often charge high rates per stop or may not know the exact locations of the smaller historical landmarks.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our <strong>Makkah Ziyarat taxi service</strong> provides you with a professional, knowledgeable chauffeur who stays with you throughout the tour. We offer fixed rates, modern vehicles, and a respectful environment for your spiritual exploration.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="bg-emerald-100 p-2 rounded-full">
                                    <Clock className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="font-bold text-gray-800">Unlimited Waiting Time at Each Site</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="bg-emerald-100 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="font-bold text-gray-800">Knowledgeable Local Chauffeurs</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 font-display italic underline decoration-emerald-500 decoration-4">Pilgrim Favorites</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'Jabal al-Nour (Hira Cave)', price: 'Included', info: 'Most Popular' },
                                { name: 'Jabal Thawr', price: 'Included', info: 'Historical' },
                                { name: 'Plain of Arafat', price: 'Included', info: 'Essential' }
                            ].map((site, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-emerald-600 text-white p-3 rounded-xl">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900">{site.name}</h4>
                                            <p className="text-xs text-gray-400 font-bold uppercase">{site.info}</p>
                                        </div>
                                    </div>
                                    <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">{site.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Sites Component (Thoroughness Gap) */}
            <ZiyaratSites 
                title="Historical Sites of Makkah"
                subtitle="Our 2026 Ziyarat packages cover all the major prophetic landmarks with high-end luxury transport."
                sites={makkahSites}
                locationSlug="makkah"
            />

            <PricingTable 
                title="2026 Ziyarat Pricing (Makkah)"
                subtitle="Standard 3-Hour Full Tour Packages"
                rows={pricingRows}
                disclaimer="Prices include the full 3-hour tour and wait time at each site. No hidden fees. Entrance fees to museums (if any) are not included."
            />

            <BookingProcess />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <RoutePerspective 
                        route="Makkah Ziyarat"
                        perspectives={[
                            {
                                id: 'guide-ahmed',
                                targetAudience: 'Br. Ahmed (Local Guide)',
                                icon: User,
                                intent: 'Spiritual Fulfillment',
                                description: 'Makkah is a city of mountains and valleys. Many of the most important sites are tucked away. I always tell my guests that Ziyarat is not just a sightseeing trip, but a way to connect with the Seerah. We ensure the car is cool, the water is cold, and the drive is respectful.',
                                structuredFeatures: [
                                    { label: 'Site Knowledge', value: 'Excellent' },
                                    { label: 'Punctuality', value: '100%' },
                                    { label: 'Safety', value: 'VIP Standard' }
                                ],
                                visualContext: 'A panoramic view of the mountains of Makkah.'
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                        contextName="Makkah Ziyarat 2026" 
                    faqs={[
                        {
                            question: "What is the best time for Ziyarat in Makkah?",
                            shortAnswer: "Early Morning (6 AM - 10 AM)",
                            detailedAnswer: "We highly recommend starting your Ziyarat early in the morning to avoid the intense midday heat and the heavy evening traffic around the Haram.",
                            perspectives: [
                                { role: 'Driver', icon: 'Sun', insight: 'Morning light is also best for photography at the historical mountains.' }
                            ]
                        },
                        {
                            question: "How long does a full Ziyarat in Makkah take?",
                            shortAnswer: "3 to 4 Hours",
                            detailedAnswer: "A standard tour covering all the major sites (Jabal al-Nour, Thawr, Mina, Arafat, etc.) takes approximately 3 to 4 hours including wait times.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Clock', insight: 'If you plan to climb Jabal al-Nour, you will need a custom 6-hour package.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Makkah"
                customLinks={[
                    { name: 'Madinah Ziyarat', url: '/services/madinah-ziyarat/', description: 'Explore the prophetic sites in Madinah.' },
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Transfer between the two Holy Cities.' }
                ]}
            />
        </div>
    );
}
