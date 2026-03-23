
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
    title: 'Cadillac Escalade VIP Chauffeur Saudi Arabia | Luxury SUV',
    description: 'Elite Cadillac Escalade VIP private transfer and luxury SUV chauffeur service in Saudi Arabia. Premium 7-seater SUV for high-profile business and VIP travel. Fixed rates and expert drivers.',
    keywords: ['Cadillac Escalade VIP transfer', 'luxury SUV chauffeur KSA', 'Escalade Riyadh transfer', 'executive SUV service Saudi Arabia', 'VIP Cadillac car hire', 'Jeddah to Makkah Cadillac Escalade'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/cadillac-escalade/',
    },
};

export default function CadillacEscaladePage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Ultra Luxury SUV', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Cadillac Escalade VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
        "description": "Ultra-luxury Cadillac Escalade VIP transfer service in Saudi Arabia for high-profile travelers.",
        "brand": {
            "@type": "Brand",
            "name": "Cadillac"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/cadillac-escalade"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-escalade"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/cadillac-escalade-chauffeur-service-ksa.webp', '/hero-slide-2.webp']}
                h1Text="Cadillac Escalade VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Master of Presence
                    </span>
                }
                subtitle="The Ultimate American Luxury SUV Experience in KSA"
                location="7 Passengers | 4 Bags | Ultra-VIP Status"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=cadillac-escalade">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Escalade VIP
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Concierge Inquiry
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-amber-600" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight mb-6 uppercase tracking-tighter">Command the Road in Luxury</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                Our <strong>Cadillac Escalade VIP private transfer</strong> is designed for high-profile travelers who require both space and undeniable prestige. With its imposing design and handcrafted interior, the Escalade is the flagship SUV of our Saudi Arabian fleet.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Whether you are traveling for a high-stakes board meeting in Riyadh or a family pilgrimage to Makkah, the Escalade provides a first-class cabin experience equipped with the latest OLED technology and premium leather seating.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <EntityTrustSignal 
                                    brandName="Escalade VIP Concierge"
                                    description="Serving royals, diplomats, and industry leaders with absolute precision."
                                    metrics={[
                                        { label: 'Excellence Score', value: '100%', icon: ShieldCheck },
                                        { label: 'Client Retention', value: 'Elite', icon: Star }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-500"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Premium Fleet Standards</h3>
                            <div className="space-y-8">
                                {[
                                    { icon: Zap, title: 'AKG Studio Sound', desc: '36-speaker immersive audio system for your playlist.' },
                                    { icon: Shield, title: 'Enhanced Safety', desc: 'Active safety features and professional defensive drivers.' },
                                    { icon: Users, title: 'Family Comfort', desc: 'Perfect for large families requiring 7-seat luxury.' },
                                    { icon: Briefcase, title: 'Massive Cargo', desc: 'Extraordinarily large trunk for all your luggage needs.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="bg-amber-100 p-4 rounded-2xl h-fit shadow-sm">
                                            <item.icon className="w-6 h-6 text-amber-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-900 py-24 px-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black text-amber-500 mb-4 tracking-tighter">2025</div>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Model Year Fleet</p>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-amber-500 mb-4 tracking-tighter">0.1s</div>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Booking Response</p>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-amber-500 mb-4 tracking-tighter">99%</div>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">On-Time Arrival</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How does the Cadillac Escalade compare to the GMC Yukon?",
                            shortAnswer: "Higher Luxury & Prestige",
                            detailedAnswer: "While both share a platform, the Escalade features superior materials, advanced tech (like the Curved OLED display), and a significantly more prestigious brand image, making it the top choice for VIPs.",
                            perspectives: [
                                { role: 'Luxury Advisor', icon: 'Star', insight: 'Choose the Escalade for special events or high-level business meetings.' }
                            ]
                        },
                        {
                            question: "Does the Escalade include a professional chauffeur?",
                            shortAnswer: "Yes, VIP Protocol Driver.",
                            detailedAnswer: "Every Escalade booking comes with our most experienced chauffeurs, trained in executive protocol, defensive driving, and specialized VIP service standards.",
                            perspectives: [
                                { role: 'Protocol Lead', icon: 'User', insight: 'Our drivers act as your personal concierge during the trip.' }
                            ]
                        },
                        {
                            question: "Is there enough room for all our luggage in the Escalade?",
                            shortAnswer: "Massive Cargo Capacity.",
                            detailedAnswer: "Yes! The Escalade is famous for its cargo space. It can comfortably swallow 4-5 large suitcases while still seating 7 passengers. If seats are folded, the space is unmatched.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Briefcase', insight: 'Perfect for long-term travelers arriving with multiple large bags.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP SUV Fleet" />

            <div className="bg-amber-600 py-32 text-center px-4 relative overflow-hidden mx-4 mb-8 rounded-[4rem] shadow-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">The Pinnacle of <br/> Power & Luxury</h2>
                    <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">Secure the most prestigious SUV in Saudi Arabia. Professional chauffeurs, absolute privacy, and total comfort.</p>
                    <Link href="/booking/?vehicle=cadillac-escalade">
                        <Button size="lg" className="bg-black hover:bg-white hover:text-black text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK THE ESCALADE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

