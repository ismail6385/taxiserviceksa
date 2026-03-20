
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight, Navigation, Zap, Award, User, ShieldCheck, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Mercedes Vito VIP Van Saudi Arabia | Executive Group Travel',
    description: 'Book the elite Mercedes Vito VIP private transfer in Saudi Arabia. Premium 7-seater executive van for business teams, families, and luxury tours. Professional chauffeurs and fixed rates.',
    keywords: ['Mercedes Vito VIP transfer', 'luxury van chauffeur KSA', 'Mercedes Vito Riyadh transfer', 'executive van service Saudi Arabia', 'VIP Mercedes van hire', 'Vito airport transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/mercedes-vito/',
    },
};

export default function MercedesVitoPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Business VIP Van', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Mercedes Vito VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
        "description": "Premium Mercedes Vito VIP transfer service in Saudi Arabia for business teams and families.",
        "brand": {
            "@type": "Brand",
            "name": "Mercedes-Benz"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/mercedes-vito"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-vito"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/mercedes-vito-vip-shuttle-service-ksa.webp', '/hero-slide-2.webp']}
                h1Text="Mercedes Vito VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Team Mobility
                    </span>
                }
                subtitle="Premium German Engineering for Corporate & Family Groups"
                location="7 Passengers | 4 Bags | Business Class"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=mercedes-vito">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Mercedes Vito
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Van Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-blue-600" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">Business Efficiency on the Move</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                Seamlessly connect your business team with our <strong>Mercedes Vito VIP private transfer</strong>. Combining world-class German engineering with a versatile executive cabin, the Vito is the professional choice for medium-sized groups traveling in Saudi Arabia.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Conference Seating', desc: 'Face-to-face seating arrangements available for on-the-go meetings.' },
                                    { title: 'Smooth Sliding Access', desc: 'Dual-side sliding doors for effortless entry and exit.' },
                                    { icon: Briefcase, title: 'Optimized Cargo', desc: 'Sufficient space for luggage without compromising legroom.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-blue-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-blue-600/20">
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
                                brandName="Vito Business Class"
                                description="The Kingdom's most reliable executive van service for corporate site visits and airport runs."
                                metrics={[
                                    { label: 'Corporate Clients', value: '400+', icon: Users },
                                    { label: 'Service Score', value: 'Elite', icon: ShieldCheck }
                                ]}
                            />
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-full h-2 bg-blue-600"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Team Travel Amenities</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'AC Vents for All', status: 'Standard' },
                                    { label: 'High-Speed WiFi', status: 'Included' },
                                    { label: 'USB Charging', status: 'All Seats' },
                                    { label: 'Leather Interior', status: 'Premium' },
                                    { label: 'Silent Cabin', status: 'Acoustic Glass' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                                        <span className="font-bold text-gray-700">{item.label}</span>
                                        <span className="font-black text-blue-600 text-xs uppercase tracking-widest">{item.status}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-8 bg-gray-950 rounded-2xl text-white">
                                <div className="flex items-center gap-4 mb-4 text-blue-400">
                                    <Shield className="w-8 h-8" />
                                    <div className="font-black uppercase tracking-widest">Protocol Direct</div>
                                </div>
                                <p className="text-gray-400 text-sm italic">"Our Vito fleet is frequently used for mid-level diplomatic delegations and international business site tours across the Riyadh industrial sectors."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Mercedes Vito VIP FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Is the Mercedes Vito better for families or business groups?",
                            shortAnswer: "Excellent for both.",
                            detailedAnswer: "The Vito is uniquely versatile. Business groups love it for its capability to host meetings in conference-style seating, while families appreciate the safety and easy-access sliding doors for children and seniors.",
                            perspectives: [
                                { role: 'Family Travel', icon: 'User', insight: 'The low floor makes it the easiest van for seniors to board.' }
                            ]
                        },
                        {
                            question: "How much luggage can the Mercedes Vito handle?",
                            shortAnswer: "4 Large Suitcases + Carry-ons.",
                            detailedAnswer: "The Vito's clever design allows for 4 standard-sized bags in the trunk area while maintaining all 7 passenger seats. It is perfect for airport pickups for a medium-sized group.",
                            perspectives: [
                                { role: 'Baggage Lead', icon: 'Briefcase', insight: 'We recommend one bag per adult for the most comfortable cabin experience.' }
                            ]
                        },
                        {
                            question: "Are your Vito vans equipped with WiFi?",
                            shortAnswer: "Yes, complimentary on-board WiFi.",
                            detailedAnswer: "To support our business travelers, all Mercedes Vito VIP transfers come with high-speed 5G WiFi and charging ports at every seat to ensure productivity during the journey.",
                            perspectives: [
                                { role: 'Tech Support', icon: 'Zap', insight: 'Stay connected even during long intercity transfers.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Group Fleet" />

            <div className="bg-blue-950 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl shadow-blue-900/20">
                <div className="absolute inset-0 bg-blue-600/5"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase">EFFICIENCY MEETS <br/><span className="text-blue-500">EXECUTIVE COMFORT</span></h2>
                    <p className="text-blue-100/60 text-xl mb-12 max-w-2xl mx-auto font-medium">WhatsApp Booking for the most versatile executive van in the Kingdom. Professional chauffeurs, absolute reliability, and business-class comfort.</p>
                    <Link href="/booking/?vehicle=mercedes-vito">
                        <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK THE VITO NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

