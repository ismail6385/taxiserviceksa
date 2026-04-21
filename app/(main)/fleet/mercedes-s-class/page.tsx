
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight, Navigation, Zap, Award, User, ShieldCheck, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Mercedes S-Class VIP Chauffeur Saudi Arabia | Executive Car',
    description: 'Book the elite Mercedes S-Class VIP private transfer in Saudi Arabia. Premium executive chauffeur service for business travel and VIP intercity transfers. Fixed rates and professional service.',
    keywords: ['Mercedes S-Class VIP transfer', 'luxury sedan chauffeur KSA', 'Mercedes S-Class Riyadh transfer', 'executive chauffeur service Saudi Arabia', 'Mercedes VIP car', 'Makkah to Madinah Mercedes S-Class'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/mercedes-s-class/',
    },
};

export default function MercedesSClassPage() {
    const specifications = [
        { label: 'Capacity', value: '3 Passengers', icon: Users },
        { label: 'Luggage', value: '2 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'First Class VIP', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Mercedes S-Class VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
        "description": "Premium Mercedes S-Class VIP transfer service in Saudi Arabia for executives and business travelers.",
        "brand": {
            "@type": "Brand",
            "name": "Mercedes-Benz"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-sclass"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp', '/hero-slide-3.webp']}
                h1Text="Mercedes S-Class VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Gold Standard of VIP Travel
                    </span>
                }
                subtitle="Flagship Executive Chauffeur Service in Saudi Arabia"
                location="3 Passengers | 2 Bags | VIP Protocol"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=mercedes-s-class">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Vehicle
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-transform hover:scale-[1.01]">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{spec.label}</span>
                            <span className="text-lg font-black text-gray-900">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">Pure Executive Refinement</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                The <strong>Mercedes S-Class VIP private transfer</strong> is more than just a ride; it is a statement of success. Engineered for maximum silence and passenger comfort, it serves as your mobile office or sanctuary between Riyadh, Jeddah, and the Holy Cities.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Privacy Focused', desc: 'Tinted acoustic glass and rear privacy blinds.' },
                                    { title: 'Executive Chauffeurs', desc: 'Professionally trained in VIP protocol and discretion.' },
                                    { title: 'Airport Meet & Greet', desc: 'Personalized gate-to-car service at all major airports.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-emerald-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-emerald-600/20">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 uppercase text-sm tracking-wide">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <EntityTrustSignal 
                                brandName="S-Class Executive Service"
                                description="The Kingdom's premier high-end sedan fleet, serving over 500+ corporate clients yearly."
                                metrics={[
                                    { label: 'VIP Trips', value: '10k+', icon: ShieldCheck },
                                    { label: 'Rating', value: '4.9/5', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-black rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">Ideal Use Cases</h3>
                                <ul className="space-y-6">
                                    {[
                                        'VIP Corporate Meetings & Conferences',
                                        'Executive Airport Transfers (JED/RUH)',
                                        'Luxury Intercity Tours & Sightseeing',
                                        'Diplomatic & High-Profile Transport',
                                        'Wedding & Special Event Transportation'
                                    ].map((use, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg font-medium opacity-90">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Pricing & Terms</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-50">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-widest">Fixed Rate</span>
                                        <span className="font-black text-emerald-600">Yes</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-50">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-widest">Wait Time</span>
                                        <span className="font-black text-gray-900">60 Mins Incl.</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-50">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-widest">Cancellation</span>
                                        <span className="font-black text-gray-900">Free 24h Prior</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-widest">WiFi & Refreshments</span>
                                        <span className="font-black text-gray-900 uppercase">Complimentary</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Mercedes S-Class FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Is the Mercedes S-Class suitable for long-distance intercity travel?",
                            shortAnswer: "Yes, it is the most comfortable choice.",
                            detailedAnswer: "Absolutely. The Mercedes S-Class is specifically engineered for high-speed stability and interior silence, making it the ideal vehicle for 4-9 hour journeys between cities like Riyadh, Jeddah, and Makkah.",
                            perspectives: [
                                { role: 'Comfort Guide', icon: 'User', insight: 'The air suspension technology makes even the longest trips feel effortless.' }
                            ]
                        },
                        {
                            question: "What is the luggage capacity of the S-Class?",
                            shortAnswer: "2 Large Suitcases",
                            detailedAnswer: "The trunk is designed to accommodate 2 large suitcases. For travelers with more luggage, we recommend our GMC Yukon or Mercedes Vito VIP options.",
                            perspectives: [
                                { role: 'Baggage Expert', icon: 'Briefcase', insight: 'We always recommend bringing hard-shell suitcases for a perfect fit.' }
                            ]
                        },
                        {
                            question: "Are the chauffeurs trained for VIP protocol?",
                            shortAnswer: "Yes, fully professional chauffeurs.",
                            detailedAnswer: "All our Mercedes S-Class drivers undergo rigorous training in executive etiquette, pathfinding, and defensive driving to ensure a world-class experience.",
                            perspectives: [
                                { role: 'Service Manager', icon: 'Shield', insight: 'Discretion and safety are our top priorities for every VIP booking.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-black py-32 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/50 rounded-full"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/30 rounded-full"></div>
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none">ARRIVE IN <br/><span className="text-emerald-500 uppercase">ABSOLUTE LUXURY</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Experience the flagship of elite travel in Saudi Arabia. Get a quote for your Mercedes S-Class today and redefine your journey.</p>
                    <Link href="/booking/?vehicle=mercedes-s-class">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-16 py-10 text-2xl rounded-[2rem] h-auto shadow-2xl shadow-emerald-600/20 transition-all hover:scale-110">
                            RESERVE S-CLASS NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
