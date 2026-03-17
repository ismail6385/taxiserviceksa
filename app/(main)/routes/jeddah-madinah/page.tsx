
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Train, Coffee, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Taxi Jeddah to Madinah | Jeddah to Madinah Private Car',
    description: 'Book the best online taxi from Jeddah to Madinah. High-speed 415km transfer from Jeddah to Madinah hotels. Fixed rates, VIP GMC Yukons, and 24/7 airport pickup available.',
    keywords: ['Taxi Jeddah to Madinah', 'Jeddah to Madinah Taxi', 'Jeddah to Madinah private car', 'taxi from Jeddah to Madinah', 'Jeddah to Madinah taxi fare', 'Madinah taxi booking', 'private transfer Jeddah to Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-madinah/',
    },
};

export default function JeddahMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '415 km', icon: Navigation },
        { label: 'Travel Time', value: '4 - 4.5 Hours', icon: Clock },
        { label: 'Availability', value: '24/7 Door-to-Door', icon: MapPin },
        { label: 'Service', value: 'VIP Experience', icon: CheckCircle2 },
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Madinah",
        "fromLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "distance": "415 km",
        "instrument": {
            "@type": "Car",
            "name": "GMC Yukon, Hyundai Staria, Mercedes S-Class"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jeddah-madinah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={['/madinah-prophets-mosque.webp', '/jeddah-corniche-sunset.webp']}
                h1Text="Taxi Jeddah to Madinah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Madinah VIP
                    </span>
                }
                subtitle="The Premium Way to the City of the Prophet"
                location="415 km | Fixed Rates | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jeddah to Madinah Taxi
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

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Elite Jeddah to Madinah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Experience the pinnacle of intercity travel with our <strong>Jeddah to Madinah private car service</strong>. We provide a direct, door-to-door transfer covering the 415km stretch between the coastal commercial hub and the Holy City of Madinah.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Why settle for shared transport when you can enjoy the privacy of a 2025 model <strong>GMC Yukon</strong>? Our chauffeurs are experts on the Jeddah-Madinah highway, ensuring a smooth ride with optional stops for refreshments or prayers.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Jeddah"
                                    description="Providing luxury long-distance transfers since 2015 with a 99% satisfaction rate."
                                    metrics={[
                                        { label: 'Long Haul Success', value: '100%', icon: Shield },
                                        { label: 'Safety Index', value: 'Elite', icon: CheckCircle2 }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Premium Long-Distance Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon VIP', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes S-Class VIP', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Toyota Hiace Group', capacity: '11 Pax', luggage: '16 Bags' }
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
                route="Jeddah to Madinah"
                perspectives={[
                    {
                        id: 'chauffeur-samir',
                        targetAudience: 'Captain Samir',
                        icon: User,
                        intent: 'Comfort & Stability',
                        description: 'The road to Madinah from Jeddah is a 415km straight run, but it can be windy. I always recommend the GMC Yukon for my passengers because its weight provides incredible stability even in crosswinds. We usually take a short break in Rabigh or Masturah to ensure everyone stays refreshed for the arrival in the Prophet\'s City.',
                        structuredFeatures: [
                            { label: 'Route Stability', value: '9.8/10' },
                            { label: 'Experience', value: '11 Years' },
                            { label: 'Guest Comfort', value: 'Master' }
                        ],
                        visualContext: 'The sunset over the red sea coast visible from the highway on the way to Madinah.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">Jeddah to Madinah Taxi FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How much is a taxi from Jeddah to Madinah?",
                            shortAnswer: "Fixed Premium Rates",
                            detailedAnswer: "Prices for a taxi from Jeddah to Madinah are fixed based on the vehicle selected. Whether you're booking from King Abdulaziz Airport or a hotel in Jeddah, we provide upfront prices for premium sedans, SUVs, and group vans.",
                            perspectives: [
                                { role: 'Finance', icon: 'DollarSign', insight: 'Our fixed rates include all highway fees and standard wait times.' }
                            ]
                        },
                        {
                            question: "How long is the drive from Jeddah to Madinah?",
                            shortAnswer: "4 to 4.5 Hours",
                            detailedAnswer: "The total travel time for the 415km trip is approximately 4 to 4.5 hours. This depends on traffic within Jeddah city and the number of breaks you wish to take at SASCO rest areas.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'Early morning departures are best for avoiding city traffic in Jeddah.' }
                            ]
                        },
                        {
                            question: "Do you offer airport pickup in Jeddah for Madinah trips?",
                            shortAnswer: "Yes, VIP Meet & Greet Included.",
                            detailedAnswer: "Yes. We offer seamless airport pickup at King Abdulaziz International Airport (JED). Our driver will wait in the arrivals hall with a nameplate and escort you directly to your private car for the journey to Madinah.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Plane', insight: 'We monitor flight arrivals and adjust pickup times for any delays.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Jeddah to Makkah', url: '/routes/jeddah-makkah/', description: 'Direct transfer to the Holy Mosque area.' },
                    { name: 'Madinah to Jeddah', url: '/routes/madinah-jeddah/', description: 'Return transfer back to the coastal city or airport.' },
                    { name: 'Jeddah City Tour', url: '/services/jeddah-city-tour/', description: 'Explore the historic Al-Balad and Corniche area.' }
                ]}
            />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl transition-all hover:shadow-emerald-500/20">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Your Direct Path to Madinah</h2>
                    <p className="text-emerald-100/60 text-lg mb-10 max-w-2xl mx-auto">Get Quote for the most reliable Jeddah to Madinah taxi service. Travel in 2025 model VIP vehicles with professional chauffeurs.</p>
                    <Link href="/booking/?route=jeddah-madinah">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl shadow-emerald-500/30">
                            Get Quote
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



