
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdLocation from '@/components/JsonLdLocation';

export const metadata: Metadata = {
    title: 'Makkah to Jeddah Taxi | Makkah to Jeddah Private Car | Taxi Service KSA',
    description: 'Book the best online taxi from Makkah to Jeddah. Reliable 24/7 transfer from Makkah hotels to Jeddah city or airport. Fixed rates, VIP GMC Yukons, and door-to-door excellence.',
    keywords: ['Taxi Makkah to Jeddah', 'Makkah to Jeddah Taxi', 'Makkah to Jeddah private car', 'taxi price Makkah to Jeddah', 'Makkah to Jeddah transport', 'private transfer Makkah to Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-jeddah/',
    },
};

export default function MakkahJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '85 - 95 km', icon: Navigation },
        { label: 'Travel Time', value: '75 - 90 Minutes', icon: Clock },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
        { label: 'Service', value: 'Door-to-Door', icon: MapPin },
    ];


    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Makkah to Jeddah"
                description="Professional VIP return transfers from Makkah to Jeddah. Providing door-to-door service to Jeddah Airport (JED) and city hotels using luxury GMC Yukons."
                services={[
                    { name: 'Makkah to JED Airport', description: 'VIP transfers for departing flights with luggage assistance.' },
                    { name: 'Makkah to Jeddah City', description: 'Direct transfers to hotels in Jeddah Corniche and Obhur.' },
                    { name: 'Makkah to Jeddah Port', description: 'Transfers for cruise passengers and industrial port visitors.' },
                    { name: 'VIP Hourly Chauffeur', description: 'Dedicated executive driver for business in Jeddah after Makkah stay.' }
                ]}
                
                image="https://taxiserviceksa.com/makkah-kaaba-night.webp"
            />

            <Hero
                images={['/makkah-kaaba-night.webp', '/jeddah-corniche-sunset.webp']}
                h1Text="Makkah to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Jeddah VIP
                    </span>
                }
                subtitle="Direct Intercity Transfers with Premium Chauffeurs"
                location="85 km | WhatsApp Booking | 24/7 Availability"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=makkah-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Makkah to Jeddah Taxi
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Premium Makkah to Jeddah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Return from your pilgrimage or business trip in the ultimate comfort. Our <strong>Makkah to Jeddah private car service</strong> provides a seamless, stress-free transfer from any hotel in Makkah directly to your destination in Jeddah, including King Abdulaziz Airport or the city center.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Why struggle with local taxis or heavy luggage? Pre-Get a quote for your <strong>Makkah to Jeddah taxi</strong> and experience VIP treatment. We specialize in 2025 model <strong>GMC Yukons</strong> and <strong>VIP Vans</strong> for larger families.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Makkah"
                                    description="The premium choice for pilgrims returning from the Holy City since 2015."
                                    metrics={[
                                        { label: 'Reliability', value: '100%', icon: Shield },
                                        { label: 'Meet & Greet', value: 'Yes', icon: Users }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Return Trip Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'Cadillac Escalade VIP', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'GMC Yukon Denali', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Mercedes S-Class VIP', capacity: '3 Pax', luggage: '2 Bags' }
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
                route="Makkah to Jeddah"
                perspectives={[
                    {
                        id: 'chauffeur-fahed',
                        targetAudience: 'Captain Fahed',
                        icon: User,
                        intent: 'Punctuality & Safety',
                        description: 'Leaving Makkah for Jeddah, especially for a flight, requires precise timing. We always factor in the time to exit the Haram area, which can be congested during prayer times. I prefer driving the Cadillac Escalade for this route; its presence on the highway ensures a smooth, commanding ride back to Jeddah.',
                        structuredFeatures: [
                            { label: 'Exit Strategy', value: 'Optimized' },
                            { label: 'Experience', value: '14 Years' },
                            { label: 'Punctuality', value: '99%' }
                        ],
                        visualContext: 'A VIP Cadillac Escalade merging onto the main Makkah-Jeddah highway.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                        contextName="Makkah to Jeddah" 
                    faqs={[
                        {
                            question: "How much is a taxi from Makkah to Jeddah?",
                            shortAnswer: "Fixed Premium Pricing",
                            detailedAnswer: "Our prices for a taxi from Makkah to Jeddah are fixed based on your vehicle choice. We provide upfront pricing for GMC Yukons, Mercedes S-Class, and large group vans, ensuring no hidden costs during your trip.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'Fixed rates are inclusive of all tolls and parking fees in Makkah.' }
                            ]
                        },
                        {
                            question: "How long does it take from Makkah to Jeddah by car?",
                            shortAnswer: "75 to 90 Minutes",
                            detailedAnswer: "The journey typically takes between 75 to 90 minutes. However, during Ramadan or Hajj seasons, travel times can increase due to heavy traffic around the Holy Mosque.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'We recommend leaving Makkah at least 4 hours before any flight departure.' }
                            ]
                        },
                        {
                            question: "Can you drop us off at any location in Jeddah?",
                            shortAnswer: "Yes, fully flexible drop-off.",
                            detailedAnswer: "Yes. Our private car service from Makkah can drop you off at King Abdulaziz Airport (All terminals), any hotel in the Jeddah Corniche, or any residential district within the city.",
                            perspectives: [
                                { role: 'Guide', icon: 'MapPin', insight: 'Most passengers choose airport drop-off, but we also serve the major commercial districts.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Makkah"
                customLinks={[
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Continue your pilgrimage journey to the Prophet\'s City.' },
                    { name: 'Jeddah to Makkah', url: '/routes/jeddah-makkah/', description: 'Direct transfer from King Abdulaziz Airport to Makkah.' },
                    { name: 'Makkah to Riyadh', url: '/routes/makkah-riyadh/', description: 'Long-distance VIP transfer to the Saudi Capital.' }
                ]}
            />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[3rem] mx-4 mb-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Reserve Your Return?</h2>
                    <p className="text-emerald-100/60 text-lg mb-10">Get a quote for your Makkah to Jeddah taxi today for a guaranteed on-time, VIP experience.</p>
                    <Link href="/booking/?route=makkah-jeddah">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-12 py-8 text-xl rounded-2xl h-auto transition-transform hover:scale-110">
                            Book Makkah to Jeddah Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



