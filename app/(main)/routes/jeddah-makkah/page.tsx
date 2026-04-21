import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Building2, Shield, User, Compass, Info } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';
import TrainComparison from '@/components/TrainComparison';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
    title: 'Jeddah to Makkah Taxi 2026 | VIP Private Transfers | Fixed Rates',
    description: 'Book the best Jeddah to Makkah Taxi for 2026. Premium intercity transfer with professional chauffeurs. Fixed rates starting from 200 SAR. Door-to-door VIP service.',
    keywords: ['Jeddah to Makkah Taxi 2026', 'Jeddah to Makkah taxi price', 'Jeddah to Makkah private car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-makkah/',
    },
};

export default function JeddahMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '85-95 km', icon: Navigation },
        { label: 'Travel Time', value: '60-80 minutes', icon: Clock },
        { label: '2026 Base Fare', value: 'From 200 SAR', icon: DollarSign },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    const pricingRows = [
        { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar. Perfect for solo or couples.', price: '200', capacity: '3 Pax', isPopular: false },
        { vehicle: 'GMC Yukon XL', description: 'The ultimate VIP experience for families.', price: '350', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Hyundai Staria VIP', description: 'Modern luxury van with captain seats.', price: '300', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Toyota Hiace', description: 'For large groups and heavy luggage.', price: '450', capacity: '11 Pax', isPopular: false },
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
                h1Text="Jeddah to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 VIP Transfers
                    </span>
                }
                subtitle="Exclusive Private Transfers for Pilgrims & Families"
                location="Jeddah Airport → Makkah | Fixed Rates | Verified Chauffeurs"
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
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Last Updated: April 2026 • 2026 Prices Verified</p>
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display leading-tight italic">Premium Jeddah to Makkah Private Car Service</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Experience the gold standard of ground transportation with the best <strong>Jeddah to Makkah private car service</strong>. We provide a seamless, stress-free journey from any location in Jeddah directly to your hotel in Makkah.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Avoid the hassle of roadside negotiations or shared rides. Our <strong>Jeddah to Makkah taxi</strong> service offers fixed rates, professional chauffeurs, and a late-model luxury fleet specifically optimized for pilgrim comfort.
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
                        <h3 className="text-2xl font-black text-gray-900 mb-6 font-display italic underline decoration-emerald-500 decoration-4">Recommended Vehicles</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'GMC Yukon XL 2026', capacity: '7 Pax', luggage: '5 Bags' },
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
                                        <Button size="sm" variant="ghost" className="text-emerald-600 font-bold group-hover:bg-emerald-50"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp</Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* New Pricing Table Section */}
                <PricingTable 
                    title="2026 Price List: Jeddah to Makkah"
                    subtitle="Verified Fixed Rates • No Hidden Surcharges"
                    rows={pricingRows}
                    disclaimer="Prices are per vehicle, not per person. Rates include all tolls, fuel, and chauffeur fees. Seasonal surcharges may apply during Ramadan and Hajj."
                />

                {/* New Train Comparison Section */}
                <TrainComparison />

                {/* New Booking Process Section */}
                <BookingProcess />

                {/* Airport Pickup Instructions (The "Thoroughness" Gap) */}
                <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 my-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-4 inline-block">Airport Guide</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Where to Meet Your Driver at Jeddah Airport (JED)?</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Don't fall for unauthorized airport touts. Our chauffeurs monitor your flight and will be waiting at the designated arrival hall.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Terminal 1 (New Airport)</h4>
                                        <p className="text-gray-500 text-sm italic">Meeting point: Outside International Arrivals Gate (Near the large Aquarium).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">North Terminal (International)</h4>
                                        <p className="text-gray-500 text-sm italic">Meeting point: Directly outside the arrival exit gate with a name board.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-white font-black uppercase tracking-tighter text-xl italic">Safety Warning</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Official taxis and pre-booked transfers in KSA are highly regulated. Never accept a ride from individuals inside the terminal building—these are often uninsured and overcharged.
                            </p>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                                <p className="text-emerald-400 text-xs font-bold leading-relaxed">
                                    Our drivers will always send you their car details and photo via WhatsApp 30 minutes before your arrival.
                                </p>
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
                        contextName="Jeddah to Makkah 2026" 
                    faqs={[
                        {
                            question: "How much is a taxi from Jeddah to Makkah in 2026?",
                            shortAnswer: "From 200 SAR (Fixed)",
                            detailedAnswer: "In 2026, our rates start from 200 SAR for a standard sedan (Toyota Camry) and 350 SAR for a VIP GMC Yukon. These are fixed rates including tolls and airport fees.",
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
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Continue your pilgrimage from Makkah to Madinah.' },
                    { name: 'Jeddah to Taif', url: '/routes/jeddah-taif/', description: 'Escape the heat to the mountain city of Taif.' }
                ]}
            />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready for Your VIP 2026 Makkah Journey?</h2>
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
