import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';


export const metadata: Metadata = {
    title: 'Tabuk to Abha Taxi | Private Car Service 1450 km | Fixed Price | Taxi Service KSA',
    description: 'Request a quote for a private taxi from Tabuk to Abha. Reliable 14-15 Hours drive with professional drivers. Fixed rates, door-to-door service, and comfortable SUVs for families.',
    keywords: ['Tabuk to Abha taxi', 'taxi from Tabuk to Abha', 'private transfer Tabuk to Abha', 'chauffeur Tabuk to Abha', 'Tabuk to Abha car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-abha/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Tabuk to Abha Taxi | Private Transfer - Fixed Price | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Tabuk to Abha Taxi | Private Transfer - Fixed Price | Taxi Service KSA',
        description: 'Reliable 1450 km drive. Request a quote for a comfortable ride from Tabuk to Abha. Professional service available 24/7.',
        url: 'https://taxiserviceksa.com/routes/tabuk-abha/',
        type: 'website',
    },
};

export default function TabukAbhaRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '1450 km', icon: Navigation },
        { label: 'Travel Time', value: '14-15 Hours', icon: Clock },
        { label: 'Price', value: 'Fixed Rate', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Tabuk to Abha"
                description="Professional private car service from Tabuk to Abha. Reliable, door-to-door long-distance transport for families and business travelers."
                services={[
                    { name: 'Tabuk to Abha Taxi', description: 'Direct 24/7 private transfer with professional chauffeurs.' },
                    { name: 'Family SUV Transfer', description: 'Spacious and safe GMC Yukons for the drive between Tabuk and Abha.' },
                    { name: 'Long-Distance Chauffeur', description: 'Comfortable long-distance travel across Saudi Arabia with luxury vehicles.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Abha back to Tabuk at competitive rates.' }
                ]}
                
                image="https://taxiserviceksa.com/locations/tabuk.webp"
            />

            <Hero
                images={['/locations/tabuk.webp', '/hero-slide-3.webp']}
                h1Text="Tabuk to Abha Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Abha
                    </span>
                }
                subtitle="Private Car Service - WhatsApp Booking"
                location="14-15 Hours | WhatsApp Booking | Local Drivers"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=tabuk-abha">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">Travel from Tabuk to Abha</h2>
                        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                            <p>The route from Tabuk to Abha runs roughly 1450 km, ending in the cool, cloud-wrapped capital of the Asir region, sitting high on the Sarawat mountain range with a well-known cable car over the valley. We keep the trip simple: one private vehicle, one driver, and a fixed price agreed before you leave.</p>
                            <p>This route is popular with travelers going for a mountain break or a family holiday in the highlands. Figure on roughly 14-15 Hours in the car, with the driver stopping for meals or prayer whenever you ask, not on a fixed schedule.</p>
                        
                        
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Why Travelers Choose Our Service</h3>
                                <p className="text-gray-300 leading-relaxed">A private vehicle means the trip runs on your schedule, not a bus timetable. You agree the price with us before leaving Tabuk, so there's nothing to negotiate once you're on the road to Abha. Your luggage stays in the trunk, the AC and tires are checked before departure, and the driver knows this stretch of highway well.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">Local Knowledge</h4>
                                        <p className="text-sm text-gray-400">Our drivers know the best routes and safe rest points between Tabuk and Abha.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-400">The price we agree on is what you pay. No extra charges for highway tolls or fuel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Available Cars for Your Trip</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Toyota Camry', type: 'Standard Sedan', pax: '1-4' },
                                { name: 'Hyundai Staria', type: 'Family Van', pax: '1-7' },
                                { name: 'GMC Yukon', type: 'Premium SUV', pax: '1-7' },
                                { name: 'Toyota Hiace', type: 'Minibus', pax: '1-12' }
                            ].map((v, i) => (
                                <div key={i} className="bg-white border-2 border-gray-50 rounded-[2rem] p-8 shadow-sm hover:border-primary transition-all group">
                                    <Car className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-1">{v.name}</h4>
                                    <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter mb-4">{v.type}</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Users className="w-4 h-4 text-primary" /> {v.pax} Passengers
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Clock className="text-primary" /> Booking is Simple</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">01</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Get a Quote</h4>
                                        <p className="text-gray-600 text-sm">Submit your request via our booking form or email us for a custom quote.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">02</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Confirm Vehicle</h4>
                                        <p className="text-gray-600 text-sm">Pick the car that fits your group size and luggage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">03</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Meet the Driver</h4>
                                        <p className="text-gray-600 text-sm">We show up at your gate in Tabuk at the right time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <EntityTrustSignal 
                                brandName="TaxiServiceKSA"
                                description="Reliable intercity transfers for families traveling from Tabuk across the Kingdom."
                                foundingDate="2016"
                                metrics={[
                                    { label: 'Verified', value: '100%', icon: Shield },
                                    { label: 'Support', value: '24/7', icon: Clock }
                                ]}
                            />
                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-primary"><MapPin /> Door-to-Door</h4>
                                <p className="text-sm text-gray-400">Skip the taxi wait. We go from your house in Tabuk directly to your hotel in Abha.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                        contextName="Tabuk to Abha"
                faqs={[
                {
                        question: "Is the mountain road into Abha safe for a long drive?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. The highway climbs through the Asir escarpment and our drivers are used to the mountain bends and the fog that sometimes rolls in near Abha. We keep a steady, careful pace on that stretch rather than rushing it.",
                        perspectives: []
                    },
                                    {
                        question: "Can the driver help us find our hotel in Abha once we arrive?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. Once we're in Abha the driver will take you directly to your hotel or the address you give us, so you don't need to figure out the city center traffic yourself after a long trip.",
                        perspectives: []
                    },
                                    {
                        question: "Can I book a pickup in Tabuk at night or very early morning?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. We run this route 24/7, so an early morning or late night departure from Tabuk for Abha can be arranged.",
                        perspectives: []
                    },
                                    {
                        question: "What vehicles are available for this route?",
                        shortAnswer: "Verified",
                        detailedAnswer: "We offer the Toyota Camry for smaller groups, the Hyundai Staria or GMC Yukon for families, and the Toyota Hiace minibus for larger groups heading to Abha.",
                        perspectives: []
                    },
                                    {
                        question: "How long does the drive from Tabuk to Abha take?",
                        shortAnswer: "Verified",
                        detailedAnswer: "It usually takes about 14-15 Hours, covering close to 1450 km. The driver keeps a steady highway pace and adjusts for traffic or weather where needed.",
                        perspectives: []
                    },
                ]}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to go to Abha?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now to get your fixed price and Get a quote for your driver.</p>
                    <Link href="/booking/?route=tabuk-abha">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </Link>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Tabuk" />
                <RelatedRoutes originSlug="tabuk" currentSlug="tabuk-abha" />
            </div>
        </div>
    );
}


