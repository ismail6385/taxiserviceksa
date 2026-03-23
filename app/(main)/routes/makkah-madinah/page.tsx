import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation, Train, Shield, Briefcase, Compass, User } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';


export const metadata: Metadata = {
    title: 'Makkah to Madinah Taxi | Makkah to Madinah Private Car | Taxi Service KSA',
    description: 'Book the best online taxi from Makkah to Madinah. Premium intercity transfer with professional chauffeurs. Fixed rates, door-to-door service, and high-end SUVs for families.',
    keywords: ['Taxi Makkah to Madinah', 'Makkah to Madinah Taxi', 'Makkah to Madinah private car', 'taxi price Makkah Madinah', 'Umrah taxi Makkah Madinah', 'Makkah to Madinah car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-madinah/',
    },
};

export default function MakkahMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 hours', icon: Clock },
        { label: 'Route', value: 'Hijrah Road', icon: Navigation },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute 
                from="Makkah"
                to="Madinah"
                description="Premium intercity transfer from Makkah to Madinah. Direct door-to-door VIP car service for families and pilgrims. 450 km journey on Hijrah Road."
                distance="450 km"
                duration="PT5H"
            />

            <Hero
                images={['/locations/madinah.webp', '/makkah-kaaba-night.webp']}
                h1Text="Makkah to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Madinah VIP
                    </span>
                }
                subtitle="Premium Intercity Transfers for Pilgrims & Families"
                location="450 km | 100% Private VIP Only | Prof. Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=makkah-madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Makkah to Madinah Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Details Ribbon */}
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
                            <h2 className="text-3xl font-black text-gray-900 mb-6">The Best Makkah to Madinah Private Car Service</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Traveling between the Holy Cities requires reliability and comfort. Our <strong>Makkah to Madinah private car service</strong> offers a seamless door-to-door experience, allowing you to focus on your spiritual journey without worrying about transportation logistics.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Whether you're traveling solo or with a large family, our 2025 fleet includes everything from the flagship <strong>GMC Yukon</strong> to <strong>VIP Mercedes Sprinters</strong>, all driven by professional, uniformed chauffeurs.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="font-bold text-gray-800">WhatsApp Booking - No Hidden Charges</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="font-bold text-gray-800">24/7 Availability & Instant Booking</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="font-bold text-gray-800">Complimentary Bottled Water & Wi-Fi</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Recommended Fleet</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'GMC Yukon VIP', capacity: '7 Pax', luggage: '5 Bags' },
                                    { name: 'Mercedes S-Class', capacity: '3 Pax', luggage: '2 Bags' },
                                    { name: 'VIP Hyundai Staria', capacity: '7 Pax', luggage: '4 Bags' },
                                    { name: 'Luxurious Bus', capacity: '25 Pax', luggage: '10 Bags' }
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
                                        <Link href="/booking/?route=makkah-madinah">
                                            <Button size="sm" variant="ghost" className="text-emerald-600 font-bold group-hover:bg-emerald-50"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective 
                route="Makkah to Madinah (Hijrah Road)"
                perspectives={[
                    {
                        id: 'chauffeur-omar',
                        targetAudience: 'Captain Omar',
                        icon: User,
                        intent: 'Safety & Reliability',
                        description: 'The Hijrah Road is the most traveled pilgrimage route. We always recommend starting your journey in the early morning or late afternoon to avoid the midday sun. Our V8 GMC Yukons are the most stable vehicles for this 450km stretch, ensuring a vibration-free ride for resting pilgrims.',
                        structuredFeatures: [
                            { label: 'Stability Rating', value: '9.8/10' },
                            { label: 'Experience', value: '9 Years' },
                            { label: 'Rest Areas', value: '3 Major Stations' }
                        ],
                        visualContext: 'Interior view of a GMC Yukon on the open desert highway.'
                    }
                ]}
            />

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                        contextName="Makkah to Madinah" 
                    faqs={[
                        {
                            question: "How much is a taxi from Makkah to Madinah?",
                            shortAnswer: "WhatsApp Booking based on Vehicle",
                            detailedAnswer: "The price for a taxi from Makkah to Madinah depends on the vehicle class. We offer fixed rates starting from competitive prices for standard sedans, up to VIP rates for GMC Yukons and Mercedes Sprinters.",
                            perspectives: [
                                { role: 'Pricing Expert', icon: 'DollarSign', insight: 'Fixed rates protect you from route changes or traffic delays on the Hijrah Road.' }
                            ]
                        },
                        {
                            question: "How long is the drive from Makkah to Madinah by car?",
                            shortAnswer: "4.5 to 5 Hours",
                            detailedAnswer: "The drive via the Hijrah Road (450km) typically takes 4.5 to 5 hours, depending on traffic and the number of rest stops taken.",
                            perspectives: [
                                { role: 'Driver Perspective', icon: 'Clock', insight: 'We usually stop at Sasco or Al-Saidi rest areas for refreshment.' }
                            ]
                        },
                        {
                            question: "Is there a train alternative for Makkah to Madinah?",
                            shortAnswer: "Yes, but taxi is door-to-door.",
                            detailedAnswer: "Yes, the Haramain High-Speed Railway is available. However, our private car service offers door-to-door convenience, eliminating the need for additional transfers to and from the train stations.",
                            perspectives: [
                                { role: 'Customer Service', icon: 'Compass', insight: 'Door-to-door is often faster when considering station transfer times.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Makkah"
                customLinks={[
                    { name: 'Madinah to Makkah', url: '/routes/madinah-makkah/', description: 'Reverse pilgrimage route with Miqat stop.' },
                    { name: 'Jeddah to Makkah', url: '/routes/jeddah-makkah/', description: 'The most popular airport-to-city transfer.' },
                    { name: 'Makkah to Taif', url: '/routes/tabuk-taif/', description: 'City visit to the mountains of Taif.' }
                ]}
            />

            <div className="bg-black py-20 text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Get a quote for your Journey Today</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">"The most trusted way to travel between the Holy Cities."</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=makkah-madinah">
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



