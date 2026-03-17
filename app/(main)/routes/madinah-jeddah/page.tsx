
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, Train, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Taxi Madinah to Jeddah | Madinah to Jeddah Private Car',
    description: 'Book the best online taxi from Madinah to Jeddah. Comfortable 4-5 hour journey from Madinah hotels to Jeddah. Fixed rates, VIP GMC Yukons, and 24/7 service.',
    keywords: ['Taxi Madinah to Jeddah', 'Madinah to Jeddah Taxi', 'Madinah to Jeddah private car', 'taxi fare Madinah to Jeddah', 'Madinah to Jeddah transport', 'private transfer Madinah to Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/madinah-jeddah/',
    },
};

export default function MadinahJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4 - 5 Hours', icon: Clock },
        { label: 'Route', value: 'Hijrah Highway', icon: Navigation },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Madinah to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "450 km",
        "instrument": {
            "@type": "Car",
            "name": "GMC Yukon, Hyundai Staria, Mercedes S-Class"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-madinah-jeddah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={['/locations/madinah.webp', '/jeddah-corniche-sunset.webp']}
                h1Text="Taxi Madinah to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah → Jeddah Route
                    </span>
                }
                subtitle="Reliable Private Car Service for Families & Business"
                location="450 km | Fixed Rates | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=madinah-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Madinah to Jeddah Taxi
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">The Best Madinah to Jeddah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Traveling from the Prophet's City to the Coastal City requires a vehicle built for the long desert stretches. Our <strong>Madinah to Jeddah private car service</strong> provides a direct, door-to-door experience that avoids the hassle of train station transfers or airport check-ins.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Whether you're heading to a business meeting in the Jeddah Corniche or catching an international departure, our <strong>Madinah to Jeddah taxi</strong> service ensures you arrive refreshed. Choose from our VIP <strong>GMC Yukon Denali</strong> or <strong>Mercedes Vito</strong> for group travel.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Madinah"
                                    description="Providing luxury long-distance transfers across the Hijrah highway since 2015."
                                    metrics={[
                                        { label: 'Trip Completion', value: '100%', icon: Shield },
                                        { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Recommended Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon VIP', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes Vito VIP', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Toyota Hiace Group', capacity: '11 Pax', luggage: '16 Bags' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                        <div className="flex gap-4 items-center">
                                            <div className="bg-emerald-600 text-white p-3 rounded-xl">
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
                route="Madinah to Jeddah"
                perspectives={[
                    {
                        id: 'chauffeur-yousef',
                        targetAudience: 'Captain Yousef',
                        icon: User,
                        intent: 'Reliability & Logistics',
                        description: 'The drive from Madinah to Jeddah (450km) is a common return route for pilgrims and business travelers alike. We always monitor the wind conditions on the Hijrah highway, as it can affect stability. I recommend the GMC Yukon Denali for this specific route because of its heavy-duty suspension and superior sound insulation.',
                        structuredFeatures: [
                            { label: 'Passenger Focus', value: 'Quietness' },
                            { label: 'Experience', value: '10 Years' },
                            { label: 'Route Knowledge', value: 'Expert' }
                        ],
                        visualContext: 'A luxury GMC Yukon cruising along the bridge near Rabigh on the way to Jeddah.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Madinah to Jeddah Taxi FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How much is a taxi from Madinah to Jeddah?",
                            shortAnswer: "Fixed Rates based on Vehicle Class",
                            detailedAnswer: "The price for a taxi from Madinah to Jeddah is fixed and depends on whether you Request a quote for a standard sedan, a premium SUV (GMC Yukon), or a group van. Our rates are transparent with no hidden costs.",
                            perspectives: [
                                { role: 'Finance', icon: 'DollarSign', insight: 'Locking in a fixed rate protects you from surge pricing common in on-demand apps.' }
                            ]
                        },
                        {
                            question: "How long is the taxi ride from Madinah to Jeddah?",
                            shortAnswer: "Approximately 4.5 to 5 Hours",
                            detailedAnswer: "The 450km journey typically takes 4.5 to 5 hours, including one or two brief rest stops for refreshments or prayers at SASCO stations.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'We always aim for a steady pace to maximize passenger comfort.' }
                            ]
                        },
                        {
                            question: "Do you offer door-to-door service in Jeddah?",
                            shortAnswer: "Yes, 100% Door-to-Door",
                            detailedAnswer: "Yes. Our driver will pick you up from any hotel or residence in Madinah and drop you off at any specific address in Jeddah, including the airport or the corniche hotels.",
                            perspectives: [
                                { role: 'Customer Success', icon: 'CheckCircle2', insight: 'Our door-to-door service eliminates the final-mile taxi search after a long drive.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Madinah"
                customLinks={[
                    { name: 'Madinah to Makkah', url: '/routes/madinah-makkah/', description: 'The essential spiritual journey with Miqat stop.' },
                    { name: 'Jeddah to Madinah', url: '/routes/jeddah-madinah/', description: 'Direct transfer from Jeddah back to the Prophet\'s City.' },
                    { name: 'Madinah to Yanbu', url: '/routes/madinah-yanbu/', description: 'Scenic drive to the coastal industrial and resort city.' }
                ]}
            />

            <footer className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-t-[3rem]">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready for a Smooth Journey?</h2>
                    <p className="text-gray-400 text-lg mb-10">Premium intercity transfers between Madinah and Jeddah. Get a quote for your private car today.</p>
                    <Link href="/booking/?route=madinah-jeddah">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-transform hover:scale-110">
                            Book Madinah to Jeddah Now
                        </Button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}



