import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, CheckCircle2, Car, Mountain, ArrowRight, Navigation, Shield, User } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Makkah to Taif Taxi | Scenic Mountain Transfers | VIP Private Car | Taxi Service KSA',
    description: 'Book a premium private taxi from Makkah to Taif. Experience the scenic Al Hada mountain ascent in comfort. Fixed rates for hotel-to-hotel transfers and summer tours.',
    keywords: ['Taxi Makkah to Taif', 'Makkah to Taif Taxi', 'Makkah to Taif private car', 'Taif mountain transfer', 'Haram to Taif taxi', 'Umrah to Taif trip'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-taif/',
    },
};

export default function MakkahTaifRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '85 - 100 km', icon: Navigation },
        { label: 'Travel Time', value: '1.5 - 2 Hours', icon: Clock },
        { label: 'Mountain Route', value: 'Al Hada Road', icon: Mountain },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Makkah to Taif"
                description="Luxury private car service from the Holy City of Makkah to the mountain city of Taif. Reliable VIP transfers for pilgrims and families."
                services={[
                    { name: 'Makkah to Taif Taxi', description: 'Premium door-to-door transfer with professional chauffeurs.' },
                    { name: 'Taif Summer Tours', description: 'Full-day and half-day sightseeing trips to Taif attractions.' },
                    { name: 'Family SUV Service', description: 'Luxury GMC Yukon and Hyundai Staria for group comfort.' },
                    { name: 'Corporate Mountain Transfer', description: 'Executive sedans for business travelers heading to Taif.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-1.webp']}
                h1Text="Makkah to Taif Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Taif VIP
                    </span>
                }
                subtitle="From the Holy City to the City of Roses"
                location="90 min | Scenic Mountain Ascent | Fixed Rates"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=makkah-taif">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Makkah to Taif Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20VIP%20taxi%20quote%20for%20Makkah%20to%20Taif.">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            WhatsApp Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Stats Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                                <detail.icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Luxury Makkah to Taif VIP Transfers</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                After completing your Umrah in Makkah, there is no better way to relax than a trip to the cool mountains of Taif. Our <strong>Makkah to Taif taxi service</strong> offers a premium solution for pilgrims who value comfort and safety.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                The drive up the Al Hada mountain is one of the most beautiful in Saudi Arabia. Our professional chauffeurs are experts at navigating the steep curves and winding roads, allowing you to enjoy the panoramic views without any stress. Whether you're staying at an Al Hada resort or visiting the Taif city center, we provide door-to-door service that is second to none.
                            </p>
                            
                            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Makkah"
                                    description="Over 10,000 successful trips from Makkah to Taif in the last 12 months."
                                    metrics={[
                                        { label: 'Haram Pickups', value: '24/7', icon: MapPin },
                                        { label: 'Safety Record', value: '100%', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                             <div className="relative z-10">
                                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                    <Car className="text-primary w-8 h-8" /> Fleet for the Mountains
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'GMC Yukon Denali', type: 'V8 Power - Perfect for Ascent', cap: '7 Pax' },
                                        { name: 'Hyundai Staria VIP', type: 'Luxury Cabin - Panoramic Views', cap: '7 Pax' },
                                        { name: 'Toyota Camry', type: 'Efficient Executive Sedan', cap: '3 Pax' },
                                        { name: 'Ford Taurus VIP', type: 'Premium Comfort', cap: '3 Pax' }
                                    ].map((car, idx) => (
                                        <div key={idx} className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-200 hover:border-primary transition-all">
                                            <div>
                                                <h4 className="font-bold text-gray-900">{car.name}</h4>
                                                <p className="text-xs text-gray-500 font-medium">{car.type}</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] font-black">{car.cap}</Badge>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Link href="/fleet/">
                                        <Button variant="link" className="text-primary font-black uppercase tracking-widest p-0">
                                            View Full Fleet Specifications →
                                        </Button>
                                    </Link>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective 
                route="Makkah to Taif (Al Hada Ascent)"
                perspectives={[
                    {
                        id: 'pilot-ahmed',
                        targetAudience: 'Pilgrim Families',
                        icon: User,
                        intent: 'Sightseeing & Comfort',
                        description: 'Many of my passengers from Makkah are looking for a break after Umrah. I love taking them via Al Hada because the change in temperature as we climb is incredible. I always keep the cabin comfortable and point out the historical sites along the way.',
                        structuredFeatures: [
                            { label: 'Road Type', value: 'Expressway' },
                            { label: 'Elevation', value: '2000m+' },
                            { label: 'Cool Factor', value: 'Premium+' }
                        ],
                        visualContext: 'A luxury white SUV navigating the high-altitude curves of Al Hada road at sunset.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-24 px-4 bg-white rounded-[3rem] my-20 shadow-sm border border-gray-50">
                <MicroSemanticFAQ
                        contextName="Makkah to Taif" 
                    faqs={[
                        {
                            question: "How much does a taxi from Makkah to Taif cost?",
                            shortAnswer: "Fixed Pricing based on Vehicle Type.",
                            detailedAnswer: "Our rates for Makkah to Taif are fixed and inclusive of all tolls and mountain road fees. Whether you choose a sedan or a large family SUV like the GMC Yukon, you get a transparent price upfront. Please contact us on WhatsApp for the current seasonal rate.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'We don\'t use meters for this route; you pay exactly what is quoted.' }
                            ]
                        },
                        {
                            question: "Can we stop for coffee or food on the way to Taif?",
                            shortAnswer: "Yes, complimentary short stops are included.",
                            detailedAnswer: "Absolutely! The Al Hada mountain has many beautiful spots for coffee or to enjoy the views. Just let your chauffeur know if you'd like to make a short stop for photos or refreshments.",
                            perspectives: [
                                { role: 'Driver', icon: 'Compass', insight: 'There are great local stalls for mountain honey and fruit near the top.' }
                            ]
                        },
                        {
                            question: "How long does the journey take from Makkah hotels?",
                            shortAnswer: "Typically 90 minutes to 2 hours.",
                            detailedAnswer: "Depending on your hotel's location in Makkah (near Haram or further out), the journey takes between 1.5 to 2 hours. Traffic during the Umrah season can affect the departure time from Makkah city.",
                            perspectives: [
                                { role: 'Dispatch', icon: 'Clock', insight: 'Leaving early in the morning is best for clear mountain views.' }
                            ]
                        }
                    ]}
                />
            </div>

            {/* CTA */}
            <div className="bg-gray-900 py-24 text-center px-4 relative overflow-hidden rounded-t-[5rem]">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Premium Mountain Transport</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Book Your Escape to Taif</h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">Experience a higher level of service on the road to the City of Roses. Comfortable, safe, and professional.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=makkah-taif">
                            <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all hover:scale-105 uppercase tracking-widest">
                                Book Now
                            </Button>
                        </Link>
                        <Link href="/fleet/">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-black px-12 py-8 text-xl rounded-2xl h-auto uppercase tracking-widest">
                                Explore Fleet
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
