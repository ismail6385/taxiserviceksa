
import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, CloudSun, ArrowRight, User, Compass, Shield, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Jeddah to Taif Taxi | Al Hada Mountain Transfers | Private Car | Taxi Service KSA',
    description: 'Book the best online taxi from Jeddah to Taif. Enjoy the scenic drive up Al Hada mountain in a private car. Reliable transfers to Taif city, resorts, and historic sites.',
    keywords: ['Taxi Jeddah to Taif', 'Jeddah to Taif Taxi', 'Al Hada mountain taxi service', 'Taif cable car transfer', 'Jeddah to Taif car with driver', 'private transfer Jeddah to Taif'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-taif/',
    },
};

export default function JeddahTaifRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '170 km', icon: Navigation },
        { label: 'Travel Time', value: '2 - 2.5 Hours', icon: Clock },
        { label: 'Route', value: 'Al Hada Mountain', icon: Mountain },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Jeddah to Taif"
                description="Professional VIP private car service for Jeddah to Taif. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Jeddah to Taif Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Jeddah to Taif Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Taif VIP
                    </span>
                }
                subtitle="The Cool Mountain Escape | Scenic Al Hada Route"
                location="2 Hours | WhatsApp Booking | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-taif">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jeddah to Taif Taxi
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

            {/* Stats Ribbon */}
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">The Best Jeddah to Taif Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Escape the humidity of Jeddah for the cool mountain air of Taif. Our <strong>Jeddah to Taif taxi service</strong> is the preferred choice for families looking for a safe, comfortable ascent up the spectacular Al Hada mountain road.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Why drive the winding roads yourself when you can relax in a <strong>VIP GMC Yukon</strong>? Our chauffeurs are highly experienced with mountain terrain, ensuring your trip to the City of Roses is as enjoyable as the destination itself.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Jeddah"
                                    description="Specializing in mountain transfers and summer tours since 2015."
                                    metrics={[
                                        { label: 'Mountain Ascents', value: '5k+', icon: Mountain },
                                        { label: 'Safety Rating', value: 'Elite', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Mountain-Ready Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon Denali', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Cadillac Escalade VIP', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Mercedes S-Class VIP', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50 transition-colors border border-gray-100">
                                        <div className="flex gap-4 items-center">
                                            <div className="bg-emerald-600 text-white p-3 rounded-xl shadow-lg shadow-emerald-600/20">
                                                <Car className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900">{car.name}</h4>
                                                <p className="text-xs text-gray-400 font-bold uppercase">{car.capacity} | {car.luggage}</p>
                                            </div>
                                        </div>
                                        <Link href="/fleet/">
                                            <Button size="sm" variant="ghost" className="text-emerald-600 font-bold">Details</Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective 
                route="Jeddah to Taif (Al Hada)"
                perspectives={[
                    {
                        id: 'chauffeur-mansour',
                        targetAudience: 'Captain Mansour',
                        icon: User,
                        intent: 'Comfort & Sightseeing',
                        description: 'Driving to Taif is not just about getting there; it\'s about the views. I always suggest the Al Hada route over the Sail road for its beauty. I drive the GMC Yukon specifically for this ascent because its powerful V8 engine makes the steep climb feel effortless for my passengers.',
                        structuredFeatures: [
                            { label: 'Ascent Grade', value: 'Smooth' },
                            { label: 'Experience', value: '12 Years' },
                            { label: 'Photo Stops', value: 'Included' }
                        ],
                        visualContext: 'A panoramic view of the winding Al Hada road with a VIP SUV in the foreground.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                        contextName="Jeddah to Taif" 
                    faqs={[
                        {
                            question: "How long is the taxi ride from Jeddah to Taif?",
                            shortAnswer: "Approximately 2 to 2.5 Hours",
                            detailedAnswer: "The journey covers 170km and typically takes around 2 hours. If you choose the scenic Al Hada route, it might take slightly longer due to the mountain curves, especially during weekends.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'We recommend leaving early Friday morning to avoid the weekend rush.' }
                            ]
                        },
                        {
                            question: "How much is a taxi from Jeddah to Taif?",
                            shortAnswer: "Starting from WhatsApp Booking",
                            detailedAnswer: "Our prices for Jeddah to Taif are fixed based on the vehicle type. Whether you're heading to a resort in Al Hada or Taif city, you'll receive a transparent, total price upfront.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'Our fixed rates include the mountain road toll and the drive up to the resorts.' }
                            ]
                        },
                        {
                            question: "Do you offer stops at the Al Hada fruit market?",
                            shortAnswer: "Yes, 100% Optional Stop.",
                            detailedAnswer: "Yes! Many of our passengers enjoy stopping at the famous fruit market on the mountain. Just let our chauffeur know, and we'll pause for your local shopping at no extra charge.",
                            perspectives: [
                                { role: 'Guide', icon: 'Compass', insight: 'The local figs and grapes are best in late summer.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Jeddah to Makkah', url: '/routes/jeddah-makkah/', description: 'Direct transfer to the Holy Mosque area.' },
                    { name: 'Jeddah to Madinah', url: '/routes/jeddah-madinah/', description: 'High-speed transfer to the Prophet\'s City.' },
                    { name: 'Taif to Makkah', url: '/routes/tabuk-makkah/', description: 'Visit Makkah from the mountains of Taif.' }
                ]}
            />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-t-[4rem]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Escape to the Mountains</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Experience the most scenic drive in the Kingdom with our VIP Jeddah to Taif taxi service.</p>
                    <Link href="/booking/?route=jeddah-taif">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all hover:scale-105">
                            Get a quote for your Taif Ride
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



