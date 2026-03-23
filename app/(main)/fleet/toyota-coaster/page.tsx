
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
    title: 'Toyota Coaster VIP Private Transfer Saudi Arabia | 17-Seater Bus',
    description: 'Book the elite Toyota Coaster VIP private transfer in Saudi Arabia. Premium 17-seater executive bus for corporate events, tour groups, and large families. Professional chauffeur service.',
    keywords: ['Toyota Coaster VIP transfer', 'group bus KSA', 'corporate transport Saudi Arabia', '17 seater executive bus', 'VIP bus Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/toyota-coaster/',
    },
};

export default function ToyotaCoasterPage() {
    const specifications = [
        { label: 'Capacity', value: '17 Passengers', icon: Users },
        { label: 'Luggage', value: '20 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Executive Group Bus', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Toyota Coaster VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/toyota-coaster.webp",
        "description": "Premium Toyota Coaster VIP transfer service in Saudi Arabia for corporate events and tour groups.",
        "brand": {
            "@type": "Brand",
            "name": "Toyota"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/toyota-coaster"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-coaster"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/toyota-coaster.webp', '/hero-slide-3.webp']}
                h1Text="Toyota Coaster VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Group Efficiency
                    </span>
                }
                subtitle="The Trusted Standard for Executive Group Mobility in the Kingdom"
                location="17 Passengers | 20 Bags | VIP Chauffeur"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=toyota-coaster">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Coaster
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Group Quote
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">The Versatile Executive Choice</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                Experience the pinnacle of group mobility with our <strong>Toyota Coaster VIP private transfer</strong>. Tailored for corporate delegates and large families, this 17-seater executive bus offers an unmatched chauffeur-driven journey with dedicated luggage capacity.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Generous Legroom', desc: 'Optimized seating layout for passenger comfort on long trips.' },
                                    { title: 'High-Output AC', desc: 'Superior cooling performance tailored for the Gulf climate.' },
                                    { title: 'Dedicated Storage', desc: 'Ample space for 20+ bags, keeping the cabin clutter-free.' }
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
                                brandName="Toyota VIP Logistics"
                                description="The workhorse of Saudi group tourism and corporate transport."
                                metrics={[
                                    { label: 'Trips Completed', value: '15k+', icon: Navigation },
                                    { label: 'Reliability', value: 'High', icon: ShieldCheck }
                                ]}
                            />
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-full h-2 bg-blue-600"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Ideal For</h3>
                            <div className="space-y-4 mb-10">
                                {[
                                    'Professional Corporate delegations',
                                    'Large Family Intercity Journeys',
                                    'Conference & Event Shuttle Services',
                                    'Regional Sightseeing Tours',
                                    'Religious Group Transfers (Umrah)'
                                ].map((use, i) => (
                                    <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                        <Star className="w-5 h-5 text-blue-600" />
                                        <span className="font-bold text-gray-700">{use}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-2">Protocol Note</h4>
                                <p className="text-blue-700 text-sm italic">"Our Toyota Coaster fleet is regularly inspected to ensure the highest standards of cleanliness and mechanical reliability for elite groups."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Does the Toyota Coaster VIP transfer include a chauffeur?",
                            shortAnswer: "Yes, licensed professional bus captains.",
                            detailedAnswer: "Every Toyota Coaster booking includes a professional, licensed chauffeur experienced in group group dynamics and Saudi road protocol. We do not offer self-drive rentals.",
                            perspectives: [
                                { role: 'Safety Team', icon: 'Shield', insight: 'Our drivers are trained in defensive driving for large vehicles.' }
                            ]
                        },
                        {
                            question: "How much luggage can 17 passengers bring?",
                            shortAnswer: "20 Large Suitcases.",
                            detailedAnswer: "The Coaster accommodates 20 large suitcases comfortably, typically allocated at least one large bag per passenger plus shared carry-ons.",
                            perspectives: [
                                { role: 'Baggage Lead', icon: 'Briefcase', insight: 'We use the rear cargo area to keep the passenger aisle clear and safe.' }
                            ]
                        },
                        {
                            question: "Is the AC powerful enough for all 17 passengers?",
                            shortAnswer: "Yes, multi-vent powerful AC.",
                            detailedAnswer: "Toyota Coasters are famous in the region for their powerful air conditioning. Individual vents throughout the cabin ensure every passenger remains cool even in peak summer heat.",
                            perspectives: [
                                { role: 'Climate Control', icon: 'Zap', insight: 'Tested for 45°C+ temperatures across the desert highways.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Group Fleet" />

            <div className="bg-blue-900 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-16 shadow-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase">GROUP EFFICIENCY <br/><span className="text-blue-400">WITHOUT COMPROMISE</span></h2>
                    <p className="text-blue-100/60 text-xl mb-12 max-w-2xl mx-auto font-medium">Secure the Kingdom's most reliable executive minibus. Professional chauffeurs, absolute punctuality, and group comfort at fixed rates.</p>
                    <Link href="/booking/?vehicle=toyota-coaster">
                        <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK VIP COASTER NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

