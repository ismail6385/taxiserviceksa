import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';


export const metadata: Metadata = {
    title: 'Taxi Riyadh to Jeddah | Riyadh to Jeddah Private Car (950km)',
    description: 'Book the best online taxi from Riyadh to Jeddah. Direct 9-10 hour intercity transfer from Riyadh to the Red Sea coast. Fixed rates, VIP GMC Yukons, and door-to-door service.',
    keywords: ['Taxi Riyadh to Jeddah', 'Riyadh to Jeddah Taxi', 'Riyadh to Jeddah private car', 'taxi from Riyadh to Jeddah', 'Riyadh to Jeddah car hire', 'long distance taxi Saudi Arabia', 'private transfer Riyadh to Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
    },
};

export default function RiyadhJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '950 km', icon: Navigation },
        { label: 'Travel Time', value: '9 - 10 Hours', icon: Clock },
        { label: 'Availability', value: '24/7 Door-to-Door', icon: MapPin },
        { label: 'Service', value: 'VIP Experience', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute 
                from="Riyadh"
                to="Jeddah"
                description="Luxury intercity transfer from Riyadh to Jeddah. Direct 9-10 hour trans-Kingdom journey on Highway 40. 100% private VIP car service."
                distance="950 km"
                duration="PT10H"
            />

            <Hero
                images={['/jeddah-corniche-sunset.webp', '/hero-slide-3.webp']}
                h1Text="Taxi Riyadh to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh → Jeddah VIP
                    </span>
                }
                subtitle="Trans-Kingdom Private Chauffeur Service"
                location="950 km | WhatsApp Booking | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=riyadh-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Riyadh to Jeddah Taxi
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">Luxury Riyadh to Jeddah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Crossing the heart of Saudi Arabia from Riyadh to the Red Sea coast in Jeddah (950km) is a journey that deserves the highest standard of travel. Our <strong>Riyadh to Jeddah taxi service</strong> offers a premium alternative to flying, allowing you to travel door-to-door in total privacy and comfort.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Avoid the airport crowds and baggage limits. Our 2025 model <strong>GMC Yukon</strong> and <strong>Mercedes S-Class</strong> fleet is perfectly suited for the 10-hour drive, featuring reclining seats, climate control, and expert chauffeurs who know the best rest stops along Highway 40.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Riyadh"
                                    description="The capital's leader in trans-kingdom executive transfers since 2015."
                                    metrics={[
                                        { label: 'Long Haul Trips', value: '15k+', icon: Navigation },
                                        { label: 'Fleet Age', value: '< 2 Yrs', icon: Car }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Trans-Kingdom Fleet</h3>
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
                route="Riyadh to Jeddah (Hwy 40)"
                perspectives={[
                    {
                        id: 'chauffeur-nasser',
                        targetAudience: 'Captain Nasser',
                        icon: User,
                        intent: 'Execution & Safety',
                        description: 'Highway 40 is the backbone of the Kingdom. For a 950km trip, I always perform a multi-point inspection of the cooling and tire pressure systems. We recommend starting the Riyadh to Jeddah trip in the early evening to enjoy the sunset over the desert and arrive in Jeddah by morning, avoiding the midday heat.',
                        structuredFeatures: [
                            { label: 'Trip Prep', value: 'Rigorous' },
                            { label: 'Experience', value: '18 Years' },
                            { label: 'Comfort Rating', value: 'First Class' }
                        ],
                        visualContext: 'A VIP GMC Yukon Denali silhouetted against the vast desert horizon at dusk.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">Riyadh to Jeddah Taxi FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How long does a taxi from Riyadh to Jeddah take?",
                            shortAnswer: "Approximately 9 to 10 Hours",
                            detailedAnswer: "The total travel time for the 950km journey is around 9.5 hours. This includes at least two significant rest stops for refreshments, fuel, and prayers at SASCO stations along the highway.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'Night driving is often faster and much cooler for long-haul trips.' }
                            ]
                        },
                        {
                            question: "What is the price for a Riyadh to Jeddah private car?",
                            shortAnswer: "WhatsApp Booking based on Vehicle",
                            detailedAnswer: "Our rates for the Riyadh to Jeddah route are fixed. The price covers the entire vehicle, chauffeur, fuel, and all highway tolls. Contact us for a precise quote based on your fleet choice.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'One fixed price means no surprises even if there are road diversions.' }
                            ]
                        },
                        {
                            question: "Can I bring excess luggage for the Riyadh to Jeddah trip?",
                            shortAnswer: "Yes, up to vehicle capacity.",
                            detailedAnswer: "Unlike airlines, we have no weight limits. As long as your luggage fits comfortably in the selected vehicle (e.g., GMC Yukon handles 5 large bags), there is no extra charge.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Briefcase', insight: 'Our GMC Yukons are the best choice for family luggage capacity.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Riyadh"
                customLinks={[
                    { name: 'Riyadh to Makkah', url: '/routes/riyadh-makkah/', description: 'Direct pilgrimage transfer to the Holy City.' },
                    { name: 'Jeddah to Riyadh', url: '/routes/jeddah-riyadh/', description: 'Return VIP transfer back to the Saudi Capital.' },
                    { name: 'Riyadh to Dammam', url: '/routes/riyadh-dammam/', description: 'Transfers to the Eastern Province business hub.' }
                ]}
            />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Master the Journey from <br/> Riyadh to Jeddah</h2>
                    <p className="text-emerald-100/60 text-lg mb-10 max-w-2xl mx-auto">Travel the Kingdom in the ultimate luxury. Get a quote for your trans-kingdom private car today.</p>
                    <Link href="/booking/?route=riyadh-jeddah">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-transform hover:scale-110"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



