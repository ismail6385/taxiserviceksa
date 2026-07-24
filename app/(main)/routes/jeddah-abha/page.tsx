import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Mountain, Shield, ArrowRight, Navigation, User, Compass } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Jeddah to Abha Taxi | Private Car Service 630 km | Fixed Price | Taxi Service KSA',
    description: 'Book a private taxi from Jeddah Airport to Abha. Reliable 7-8 hour drive through the Asir mountains with professional chauffeurs. Fixed rates, door-to-door service, and comfortable SUVs for families.',
    keywords: ['Jeddah to Abha taxi', 'Jeddah airport to Abha taxi', 'taxi from Jeddah to Abha', 'private transfer Jeddah to Abha', 'chauffeur Jeddah to Abha', 'Jeddah to Abha car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-abha/',
    },
    openGraph: {
        title: 'Jeddah to Abha Taxi | Private Transfer - Fixed Price | Taxi Service KSA',
        description: 'Reliable 630 km drive through the Asir mountains. Request a quote for a comfortable ride from Jeddah to Abha. Professional service available 24/7.',
        url: 'https://taxiserviceksa.com/routes/jeddah-abha/',
        type: 'website',
    },
};

export default function JeddahAbhaRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '630 km', icon: Navigation },
        { label: 'Travel Time', value: '7-8 Hours', icon: Clock },
        { label: 'Route', value: 'Asir Mountains', icon: Mountain },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Jeddah to Abha"
                description="Professional VIP private car service from Jeddah to Abha. Reliable 24/7 door-to-door long-distance transport for families and business travelers through the Asir mountains."
                services={[
                    { name: 'Jeddah to Abha Taxi', description: 'Direct private transfer with professional chauffeurs.' },
                    { name: 'Family SUV Transfer', description: 'Spacious and safe GMC Yukons for the long drive to Abha.' },
                    { name: 'Long-Distance Chauffeur', description: 'Comfortable long-distance travel across the Kingdom.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Abha back to Jeddah at competitive rates.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Jeddah to Abha Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Abha VIP
                    </span>
                }
                subtitle="Cool Mountain Escape Through the Asir Highlands"
                location="7-8 Hours | WhatsApp Booking | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-abha">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jeddah to Abha Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">The Best Jeddah to Abha Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Trade the Red Sea heat for the cool highland air of the Asir region. Our <strong>Jeddah to Abha taxi service</strong> covers the full 630 km journey with an experienced driver who knows the mountain roads well.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                It is a long drive, so we focus on a comfortable, well-maintained vehicle with rest and prayer stops along the way. Whether you're heading to Abha city, the cable car at Al Soudah, or a family visit, we get you there safely and on your schedule.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal
                                    brandName="TaxiServiceKSA Jeddah"
                                    description="Specializing in long-distance intercity transfers across the Kingdom since 2015."
                                    metrics={[
                                        { label: 'Long Trips', value: '5k+', icon: Mountain },
                                        { label: 'Safety Rating', value: 'Elite', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Long-Distance Ready Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon Denali', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Toyota Camry', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Toyota Hiace', capacity: '11 Pax', luggage: 'Group Luggage' }
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
                route="Jeddah to Abha"
                perspectives={[
                    {
                        id: 'chauffeur-saeed',
                        targetAudience: 'Captain Saeed',
                        icon: User,
                        intent: 'Comfort & Safety',
                        description: 'The road to Abha climbs steadily into the Asir mountains, and the temperature drops fast once you pass Al Bahah. I plan the drive around rest stops for prayer and food so families arrive relaxed, not exhausted, after 7-8 hours on the road.',
                        structuredFeatures: [
                            { label: 'Mountain Experience', value: '10+ Years' },
                            { label: 'Rest Stops', value: 'Planned' },
                            { label: 'Safety Rating', value: 'Elite' }
                        ],
                        visualContext: 'A winding mountain highway through the green Asir highlands near Abha.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

                <MicroSemanticFAQ
                    contextName="Jeddah to Abha"
                    faqs={[
                        {
                            question: "How long is the taxi ride from Jeddah to Abha?",
                            shortAnswer: "Approximately 7 to 8 Hours",
                            detailedAnswer: "The journey covers around 630 km and typically takes 7-8 hours, depending on the route taken and stops along the way through the Asir mountains.",
                            perspectives: [
                                { role: 'Driver', icon: 'Clock', insight: 'We recommend an early morning departure to enjoy the cooler mountain air on arrival.' }
                            ]
                        },
                        {
                            question: "How much is a taxi from Jeddah to Abha?",
                            shortAnswer: "Fixed Rate via WhatsApp Booking",
                            detailedAnswer: "Our prices for Jeddah to Abha are fixed based on the vehicle type you choose. You'll receive a transparent, total price upfront with no hidden tolls or fuel surcharges.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'The price we agree on before departure is exactly what you pay on arrival.' }
                            ]
                        },
                        {
                            question: "Do you stop for prayer and food on the way to Abha?",
                            shortAnswer: "Yes, at your request",
                            detailedAnswer: "Yes. It's a long drive, so we plan stops at clean, well-known service stations for prayer, food, and rest. Just let your chauffeur know your preferences before departure.",
                            perspectives: [
                                { role: 'Guide', icon: 'Compass', insight: 'Al Bahah is a popular midway stop with good rest facilities and mountain views.' }
                            ]
                        },
                        {
                            question: "Is the price for the whole car or per person?",
                            shortAnswer: "Per vehicle",
                            detailedAnswer: "The price we quote is for the private vehicle and driver, not per passenger. You travel privately with your own group the entire way to Abha.",
                            perspectives: []
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Jeddah to Makkah', url: '/routes/jeddah-makkah/', description: 'Direct transfer to the Holy Mosque area.' },
                    { name: 'Jeddah to Taif', url: '/routes/jeddah-taif/', description: 'Escape to the mountain city of Taif.' },
                    { name: 'Jeddah to Madinah', url: '/routes/jeddah-madinah/', description: 'High-speed transfer to the Prophet\'s City.' }
                ]}
            />
            <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-abha" />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-t-[4rem]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Ready for the Asir Highlands?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Experience a safe, comfortable long-distance ride with our VIP Jeddah to Abha taxi service.</p>
                    <Link href="/booking/?route=jeddah-abha">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all hover:scale-105">
                            <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Quote for Your Abha Ride
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
