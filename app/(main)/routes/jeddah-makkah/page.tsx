
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Building2, Shield, User, Compass } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';

export const metadata: Metadata = {
    title: 'Taxi Jeddah to Makkah | Jeddah to Makkah Private Car',
    description: 'Book the best online taxi from Jeddah to Makkah. Premium intercity transfer with professional chauffeurs. Fixed rates, door-to-door service, and high-end SUVs.',
    keywords: ['Taxi Jeddah to Makkah', 'Jeddah to Makkah Taxi', 'Jeddah to Makkah private car', 'taxi price Jeddah Makkah', 'booking taxi Jeddah to Makkah', 'Jeddah to Makkah car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-makkah/',
    },
};

export default function JeddahMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '85-95 km', icon: Navigation },
        { label: 'Travel Time', value: '60-80 minutes', icon: Clock },
        { label: 'Base Fare', value: 'Fixed Rates', icon: DollarSign },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute 
                from="Jeddah" 
                to="Makkah" 
                description="Book the best online taxi from Jeddah to Makkah. Premium intercity transfer with professional chauffeurs. Fixed rates, door-to-door service, and high-end SUVs."
                distance="90 km"
                duration="70 mins"
            />

            <Hero
                images={['/makkah-kaaba-night.webp', '/hero-slide-3.webp']}
                h1Text="Taxi Jeddah to Makkah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Makkah VIP
                    </span>
                }
                subtitle="Exclusive VIP Private Transfers for Pilgrims & Families"
                location="60-90 mins | 100% Private | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jeddah to Makkah Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get Custom Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Stats */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Premium Jeddah to Makkah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Experience the gold standard of ground transportation with the best <strong>Jeddah to Makkah private car service</strong>. We provide a seamless, stress-free journey from any location in Jeddah directly to your hotel in Makkah.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Avoid the hassle of local taxi hailing. Pre-Get a quote for your <strong>Jeddah to Makkah taxi</strong> and enjoy a fixed rate, a professionally trained chauffeur, and a late-model luxury vehicle. We specialize in executive travel and VIP pilgrimage transport.
                            </p>
                            
                            <div className="space-y-4">
                               <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Jeddah"
                                    description="Providing luxury intercity transfers since 2015 with a 99% satisfaction rate."
                                    metrics={[
                                        { label: 'Jeddah Reach', value: '100%', icon: MapPin },
                                        { label: 'Verified VIP', value: 'Yes', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Recommended Vehicles</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'Cadillac Escalade VIP', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'GMC Yukon XL 2025', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes S-Class VIP', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                        <div className="flex gap-4 items-center">
                                            <div className="bg-black text-white p-3 rounded-xl">
                                                <Car className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900">{car.name}</h4>
                                                <p className="text-xs text-gray-400 font-bold uppercase">{car.capacity} | {car.luggage}</p>
                                            </div>
                                        </div>
                                        <Link href="/booking/?route=jeddah-makkah">
                                            <Button size="sm" variant="ghost" className="text-emerald-600 font-bold group-hover:bg-emerald-50">Get Quote</Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective 
                route="Jeddah to Makkah"
                perspectives={[
                    {
                        id: 'chauffeur-tariq',
                        targetAudience: 'Captain Tariq',
                        icon: User,
                        intent: 'Efficiency & Speed',
                        description: 'The 90km drive between Jeddah and Makkah is the busiest intercity route in the world during peak season. We use advanced real-time traffic monitoring to avoid the main highway congestion, often using the Old Makkah Road for a smooth, uninterrupted entry into the city.',
                        structuredFeatures: [
                            { label: 'VIP Bookings', value: '5000+' },
                            { label: 'Experience', value: '15 Years' },
                            { label: 'Safety Rating', value: 'Master Class' }
                        ],
                        visualContext: 'A birds-eye view of the Jeddah-Makkah highway showing moderate traffic.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How much is a taxi from Jeddah to Makkah?",
                            shortAnswer: "Fixed Pricing Model",
                            detailedAnswer: "Our prices for a taxi from Jeddah to Makkah are fixed based on the vehicle selected. Whether you choose a standard sedan or a VIP Cadillac Escalade, you'll know the price upfront with no hidden surcharges.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'Transparency is our core value; what you see is what you pay.' }
                            ]
                        },
                        {
                            question: "What is the fastest way to get to Makkah from Jeddah?",
                            shortAnswer: "Private Car (Door-to-Door)",
                            detailedAnswer: "While the Haramain Train is fast, our private car service is often the most efficient overall because it provides door-to-door service, eliminating the need for terminal transfers and additional taxi rides from the Makkah station to your hotel.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Navigation', insight: 'Door-to-door saves on average 45 minutes compared to train station transfers.' }
                            ]
                        },
                        {
                            question: "Can I Request a quote for a Jeddah to Makkah private car with a female driver?",
                            shortAnswer: "Currently Male Chauffeurs only",
                            detailedAnswer: "Currently, our fleet is operated by professional male chauffeurs. We specialize in providing a safe, respectful, and private environment for families and women traveling solo.",
                            perspectives: [
                                { role: 'Management', icon: 'Shield', insight: 'Our drivers are vetted for family travel safety.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Continue your pilgrimage from Makkah to Madinah.' },
                    { name: 'Jeddah to Taif', url: '/routes/jeddah-taif/', description: 'Escape the heat to the mountain city of Taif.' },
                    { name: 'Jeddah to KAEC', url: '/locations/kaec/', description: 'Business travel to King Abdullah Economic City.' }
                ]}
            />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Get a quote for your VIP Jeddah to Makkah Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">"Travel with dignity, comfort, and complete privacy."</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=jeddah-makkah">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                Reserve Private Car
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}



