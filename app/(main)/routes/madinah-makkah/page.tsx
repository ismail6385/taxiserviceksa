
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Train, Coffee, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RoutePerspective from '@/components/seo/RoutePerspective';

export const metadata: Metadata = {
    title: 'Taxi Madinah to Makkah | Madinah to Makkah Private Car | Miqat Stop',
    description: 'Book the best online taxi from Madinah to Makkah. Specializing in Hajj/Umrah transfers with a mandatory stop at Miqat Abyar Ali. Door-to-door service and fixed pricing.',
    keywords: ['Taxi Madinah to Makkah', 'Madinah to Makkah Taxi', 'Madinah to Makkah private car', 'taxi with Miqat stop', 'Madinah to Makkah private transfer', 'How much is taxi from Madinah to Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/madinah-makkah/',
    },
};

import JsonLdRoute from '@/components/JsonLdRoute';

export default function MadinahToMakkahPage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4.5 - 5 Hours', icon: Clock },
        { label: 'Miqat Stop', value: 'Abyar Ali (Included)', icon: MapPin },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute 
                from="Madinah"
                to="Makkah"
                description="Luxury intercity transfer for Umrah pilgrims from Madinah to Makkah. Includes mandatory stop at Miqat Abyar Ali. 100% private VIP car service."
                distance="450 km"
                duration="PT5H"
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="Taxi Madinah to Makkah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah → Makkah Route
                    </span>
                }
                subtitle="The Spiritual Pilgrimage Journey - 100% Private VIP Only"
                location="450 km | Private Direct | Mandatory Miqat Stop Included"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=madinah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Madinah to Makkah Taxi
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Elite Madinah to Makkah Taxi Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Embark on your Umrah journey with the premier <strong>Madinah to Makkah private car service</strong>. We understand the sanctity of this trip, which is why all our bookings include a mandatory stop at <strong>Miqat Abyar Ali</strong> for prayers and Ihram at no extra cost.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our fleet is meticulously maintained for long-distance desert travel. Choose from the **GMC Yukon XL** for families or the **Mercedes Vito** for business groups, all equipped with high-performance AC systems designed for the Saudi heat.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Madinah"
                                    description="Officially licensed pilgrimage transport provider for the Madinah-Makkah route."
                                    metrics={[
                                        { label: 'Success Rate', value: '100%', icon: Shield },
                                        { label: 'Punctuality', value: '99%', icon: Clock }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Available Fleet for pilgrims</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon 2025', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes Vito VIP', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Hyundai Staria Premium', capacity: '7 Pax', luggage: '4 Bags' },
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
                route="Madinah to Makkah (Miqat Stop)"
                perspectives={[
                    {
                        id: 'chauffeur-faisal',
                        targetAudience: 'Captain Faisal',
                        icon: User,
                        intent: 'Spiritual Fulfillment',
                        description: 'The stop at Miqat Abyar Ali is the most important part of this journey. We always ensure my passengers have enough time (45-60 mins) to perform their prayers and enter Ihram comfortably. I drive the GMC Yukon specifically for this route because its wide wheelbase makes the long desert roads feel like a smooth flight.',
                        structuredFeatures: [
                            { label: 'Pilgrim Satisfaction', value: '99%' },
                            { label: 'Experience', value: '12 Years' },
                            { label: 'On-Time Arrival', value: '100%' }
                        ],
                        visualContext: 'The Miqat station background with a clean VIP GMC Yukon.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Does the Madinah to Makkah taxi price include the Miqat stop?",
                            shortAnswer: "Yes, 100% Included.",
                            detailedAnswer: "Yes, our fixed rates for Madinah to Makkah transfers include a mandatory 45-60 minute stop at Miqat Abyar Ali. Our chauffeurs will assist you with luggage if you need to access your Ihram.",
                            perspectives: [
                                { role: 'Guide', icon: 'MapPin', insight: 'We wait near the main entrance for easy pickup after prayers.' }
                            ]
                        },
                        {
                            question: "How long does a taxi take from Madinah to Makkah?",
                            shortAnswer: "Approximately 5 Hours",
                            detailedAnswer: "The total travel time is usually around 5 hours. This includes the 450km drive and the stop at the Miqat station.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'We avoid midday traffic whenever possible for a faster trip.' }
                            ]
                        },
                        {
                            question: "Can I Request a quote for a car for more than 7 people?",
                            shortAnswer: "Yes, Hiace and Buses Available",
                            detailedAnswer: "Yes, for larger groups we offer the Toyota Hiace (up to 11 Pax) or our Luxurious Bus (up to 25 Pax) for intercity travel between Madinah and Makkah.",
                            perspectives: [
                                { role: 'Fleet Manager', icon: 'Users', insight: 'Buses include dedicated luggage compartments for Umrah groups.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Madinah"
                customLinks={[
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Direct pilgrimage route back to the Prophet\'s City.' },
                    { name: 'Jeddah to Madinah', url: '/routes/jeddah-madinah/', description: 'Direct transfer from King Abdulaziz Airport.' },
                    { name: 'Madinah City Ziyarat', url: '/services/madinah-ziyarat/', description: 'Visit historic sites in the Holy City of Madinah.' }
                ]}
            />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Ready for Your Spiritual Journey?</h2>
                    <p className="text-emerald-100 text-lg mb-10 opacity-80 italic">"Travel in peace, comfort, and absolute privacy on your sacred path."</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=madinah-makkah">
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



