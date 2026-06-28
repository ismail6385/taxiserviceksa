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
    title: 'Hyundai Staria VIP Private Transfer Saudi Arabia | Premium Van',
    description: 'Book the elite Hyundai Staria VIP private transfer in Saudi Arabia. Premium 7-seater executive van with luxury pilot seating, panoramic windows, and ultimate family comfort.',
    keywords: ['Hyundai Staria VIP transfer', 'Hyundai Staria VIP Saudi Arabia', 'premium van chauffeur KSA', 'executive Staria transfer', 'Hyundai Staria VIP hire Riyadh', 'Staria VIP Jeddah airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/hyundai-staria-vip/',
    },
};

export default function HyundaiStariaVIPPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'VIP Executive Van', icon: Award },
        { label: 'Comfort', value: 'Electric Pilot Seats', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Hyundai Staria VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/hyundai-staria.webp",
        "description": "Premium Hyundai Staria VIP transfer service in Saudi Arabia for executive groups and luxury family transport.",
        "brand": {
            "@type": "Brand",
            "name": "Hyundai"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-staria-vip"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/hyundai-staria.webp', '/hero-slide-4.webp']}
                h1Text="Hyundai Staria VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Business Class Van
                    </span>
                }
                subtitle="Future-Forward Luxury with Electric Relaxation Seats"
                location="7 Passengers | 4 Bags | Premium Lounge Cabin"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=hyundai-staria-vip">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Hyundai Staria VIP
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20want%20to%20book%20a%20Hyundai%20Staria%20VIP">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book via WhatsApp
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-indigo-600" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">First-Class Executive Comfort on Wheels</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>Hyundai Staria VIP transfer</strong> offers a first-class airline experience for your road journeys in Saudi Arabia. Featuring luxury electric relaxation seats in the second row that recline at the touch of a button, it is designed for passengers who prioritize relaxation during transfers.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                With its futuristic exterior design and expansive panoramic windows, the Staria VIP provides a bright, lounge-like ambiance. It is the premier choice for corporate executives, VIP delegations, and families who want a highly comfortable ride near Masjid Nabawi or across the Kingdom.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <EntityTrustSignal 
                                    brandName="Staria VIP Chauffeur"
                                    description="Next-generation luxury travel featuring electric reclining leg rests and panoramic views."
                                    metrics={[
                                        { label: 'Passenger Rating', value: '4.95/5', icon: Star },
                                        { label: 'VIP Amenities', value: 'Premium', icon: ShieldCheck }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                           <div className="bg-indigo-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-indigo-400 font-sans">Staria VIP Amenities</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: 'Premium Reclining Seats', desc: 'Second-row electric captain seats with leg rests.' },
                                        { title: 'Panoramic Stargazing', desc: 'Low beltline design with massive side windows.' },
                                        { title: 'Individual AC Controls', desc: 'Fully adjustable climate zones for all passengers.' },
                                        { title: 'Smart Connectivity', desc: 'USB ports for every passenger and ambient lighting.' }
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <h4 className="font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2 text-indigo-200">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                                {item.title}
                                            </h4>
                                            <p className="text-indigo-100/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                           </div>

                           <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Hyundai Staria VIP Ideal Uses</h3>
                                <div className="space-y-4">
                                    {[
                                        'Corporate airport pickup at Jeddah (JED) or Riyadh (RUH)',
                                        'Masjid Nabawi and historic Ziyarat tours in Madinah',
                                        'VIP delegation transfers between government offices',
                                        'Luxury family travel for Umrah and Hajj groups',
                                        'Chauffeur-driven city tours in Riyadh and Jeddah Corniche'
                                    ].map((use, i) => (
                                        <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                            <span className="font-bold text-gray-700">{use}</span>
                                        </div>
                                    ))}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "What makes the Hyundai Staria VIP different from a standard Staria?",
                            shortAnswer: "Luxury pilot seats and premium interior finishes.",
                            detailedAnswer: "The VIP model features electric relaxation seats in the second row that offer one-touch posture adjustment and integrated leg supports, high-grade leather upholstery, Bose premium sound, and dual-zone sun roofs.",
                            perspectives: [
                                { role: 'Comfort Reviewer', icon: 'Zap', insight: 'The pilot seats mimic the zero-gravity seating profile of long-haul business class flights.' }
                            ]
                        },
                        {
                            question: "How many suitcases fit in the Hyundai Staria VIP?",
                            shortAnswer: "Up to 4 large suitcases.",
                            detailedAnswer: "The Staria VIP comfortably carries 7 passengers along with 4 large suitcases in the rear cargo boot. If you have fewer passengers, the sliding rear row can be shifted forward to expand the cargo zone.",
                            perspectives: [
                                { role: 'Baggage Consultant', icon: 'Briefcase', insight: 'Excellent for standard family groups. For excessive luggage requirements, we recommend the GMC Yukon XL.' }
                            ]
                        },
                        {
                            question: "Can I book the Hyundai Staria VIP for intercity travel?",
                            shortAnswer: "Yes, available for all routes nationwide.",
                            detailedAnswer: "Yes, you can book the Staria VIP for long-distance transfers between Jeddah, Makkah, Madinah, Riyadh, and other cities. It is highly favored for its smooth ride and superior highway cruising comfort.",
                            perspectives: [
                                { role: 'Touring Guide', icon: 'Navigation', insight: 'The massive windows offer incredible scenic views of the Saudi landscape and mountain routes.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-indigo-950 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Experience Luxury With<br/><span className="text-indigo-400 uppercase font-sans">STARIA VIP</span></h2>
                    <p className="text-indigo-100/60 text-xl mb-12 max-w-2xl mx-auto">Book your first-class private transfer via WhatsApp. Transparent pricing, professional drivers, and pristine luxury guaranteed.</p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20want%20to%20book%20a%20Hyundai%20Staria%20VIP">
                        <Button size="lg" className="bg-white hover:bg-indigo-50 text-indigo-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK HYUNDAI STARIA VIP NOW
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
