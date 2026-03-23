import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation, Calendar, Zap, Heart, User, Compass } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import RoutePerspective from '@/components/seo/RoutePerspective';
import JsonLdRoute from '@/components/JsonLdRoute';

export const metadata: Metadata = {
    title: 'Riyadh to Makkah Taxi | Riyadh to Makkah Private Car | Taxi Service KSA',
    description: 'Book the best online taxi from Riyadh to Makkah. Premium 8-9 hour journey with professional chauffeurs. Fixed rates, door-to-door service, and high-end SUVs.',
    keywords: ['Taxi Riyadh to Makkah', 'Riyadh to Makkah Taxi', 'private transfer Riyadh to Makkah', 'Riyadh to Makkah car with driver', 'Umrah taxi Riyadh to Makkah', 'Riyadh to Makkah transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-makkah/',
    },
};

export default function RiyadhMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '870 km', icon: Navigation },
        { label: 'Travel Time', value: '8-9 Hours', icon: Clock },
        { label: 'Base Fare', value: 'WhatsApp Booking', icon: DollarSign },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute 
                from="Riyadh"
                to="Makkah"
                description="Luxury intercity transfer from Riyadh to Makkah. Premium 8-9 hour journey with professional chauffeurs. 100% private VIP car service."
                distance="870 km"
                duration="PT9H"
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="Riyadh to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh → Makkah VIP
                    </span>
                }
                subtitle="The Premium Way to the Holy City - 100% Private VIP Direct"
                location="8-9 Hours | Private Only | Professional Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=riyadh-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Riyadh to Makkah Taxi
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

            {/* Introduction & Trust Signals */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">Luxury Riyadh to Makkah Taxi</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Crossing 870km of the Kingdom requires more than just a car; it requires a professional travel partner. Our <strong>Riyadh to Makkah taxi service</strong> is designed for families and business travelers who value privacy, safety, and comfort.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Why fly when you can travel door-to-door in a 2025 model <strong>GMC Yukon</strong> or <strong>Mercedes S-Class</strong>? We handle the long drive while you rest or work, providing a seamless transition from the capital of Riyadh to the Holy City of Makkah.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal 
                                    brandName="TaxiServiceKSA Riyadh"
                                    description="The highest-rated intercity transfer provider in the capital region."
                                    metrics={[
                                        { label: 'Long Haul Trips', value: '10k+', icon: Navigation },
                                        { label: 'Safety Index', value: 'Elite', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">Long-Distance Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon Denali', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes S-Class VIP', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'Luxurious Bus', capacity: '25 Pax', luggage: '10 Bags' },
                                    { name: 'Mercedes Sprinter', capacity: '14 Pax', luggage: '6 Bags' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50/50 transition-colors border border-gray-100">
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
                route="Riyadh to Makkah (The King's Road)"
                perspectives={[
                    {
                        id: 'chauffeur-khalid',
                        targetAudience: 'Captain Khalid',
                        icon: User,
                        intent: 'Long-Distance Mastery',
                        description: 'The Riyadh-Makkah highway is a marathon, not a sprint. We always perform a full 20-point safety check on our SUVs before starting this 870km trip. Our favorite rest stop is the Mazra\'iyah station near the halfway point, ensuring passengers can stretch and refresh properly.',
                        structuredFeatures: [
                            { label: 'Fuel Range', value: 'Full Tank' },
                            { label: 'Experience', value: '15 Years' },
                            { label: 'Avg Speed', value: '120 km/h' }
                        ],
                        visualContext: 'The endless desert horizon viewed through a clean, tinted VIP SUV window.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                        contextName="Riyadh to Makkah" 
                    faqs={[
                        {
                            question: "How much is a taxi from Riyadh to Makkah?",
                            shortAnswer: "WhatsApp Booking based on Vehicle",
                            detailedAnswer: "Taxi rates for the 870km trip from Riyadh to Makkah are fixed to avoid price gouging. Prices vary based on whether you choose a sedan, SUV, or VIP van. Contact us for the latest seasonal rates.",
                            perspectives: [
                                { role: 'Billing', icon: 'DollarSign', insight: 'Our fixed rates include fuel, toll fees, and several refreshment breaks.' }
                            ]
                        },
                        {
                            question: "Is it safe to take a car from Riyadh to Makkah?",
                            shortAnswer: "Yes, with professional drivers.",
                            detailedAnswer: "Yes, it is extremely safe. Our drivers are trained specifically for long-haul desert driving and we use 2024-2025 model vehicles with the highest safety ratings in the Kingdom.",
                            perspectives: [
                                { role: 'Safety', icon: 'Shield', insight: 'All our Riyadh to Makkah cars are equipped with satellite tracking systems.' }
                            ]
                        },
                        {
                            question: "Can we stop for prayers or food on the way?",
                            shortAnswer: "Yes, as many stops as needed.",
                            detailedAnswer: "Absolutely. Our Riyadh to Makkah private car service is tailored to your schedule. You can stop at any SASCO station or prayer area along the highway at your convenience.",
                            perspectives: [
                                { role: 'Guide', icon: 'Compass', insight: 'We recommend 2 major stops for an 8-9 hour journey.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Riyadh"
                customLinks={[
                    { name: 'Riyadh to Madinah', url: '/routes/riyadh-madinah/', description: 'Direct transfer from the capital to the Prophet\'s City.' },
                    { name: 'Riyadh to Dammam', url: '/routes/riyadh-dammam/', description: 'Connecting the capital with the Eastern Province.' },
                    { name: 'Makkah to Riyadh', url: '/routes/makkah-riyadh/', description: 'Return VIP transfer from the Holy City to Riyadh.' }
                ]}
            />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Get a quote for your Executive <br/> Riyadh to Makkah Taxi</h2>
                    <p className="text-emerald-100/60 text-lg mb-12 max-w-2xl mx-auto italic">"Providing the ultimate long-distance sanctuary for your spiritual journey."</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/booking/?route=riyadh-makkah">
                            <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto transition-all hover:scale-105 shadow-2xl">
                                Reserve My Ride
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com" className="text-white/60 hover:text-white font-bold underline underline-offset-8 transition-colors">
                            Request Custom Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}



