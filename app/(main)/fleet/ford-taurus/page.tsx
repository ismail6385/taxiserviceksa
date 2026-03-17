
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
    title: 'Ford Taurus 2025 VIP Transfer Saudi Arabia | Premium Sedan',
    description: 'Book the all-new Ford Taurus 2025 VIP private transfer in Saudi Arabia. Modern 3-seater sedan with first-class technology and comfort for city and airport transfers.',
    keywords: ['Ford Taurus 2025 VIP transfer', 'Ford Taurus chauffeur KSA', 'premium sedan transfer Riyadh', 'new Ford Taurus taxi Saudi Arabia', 'Ford Taurus executive car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/ford-taurus/',
    },
};

export default function FordTaurusPage() {
    const specifications = [
        { label: 'Capacity', value: '3 Passengers', icon: Users },
        { label: 'Luggage', value: '2 standard Bags', icon: Briefcase },
        { label: 'Model Year', value: '2025 Edition', icon: Award },
        { label: 'Air Conditioning', value: 'Premium Climate Control', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Ford Taurus 2025 VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
        "description": "Modern Ford Taurus 2025 VIP transfer service in Saudi Arabia for premium city travel.",
        "brand": {
            "@type": "Brand",
            "name": "Ford"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/ford-taurus"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-taurus"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/ford-taurus-executive-sedan-saudi-arabia.webp', '/hero-slide-3.webp']}
                h1Text="Ford Taurus 2025"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Modern Executive Excellence
                    </span>
                }
                subtitle="The All-New Standard for Premium Sedan Travel in KSA"
                location="3 Passengers | 2 Bags | 2025 Model"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=ford-taurus">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Vehicle
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Next-Generation Private Travel</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Step into the future of premium transportation with our <strong>Ford Taurus 2025 VIP private transfer</strong>. Completely redesigned for the modern professional, the new Taurus combines sleek aesthetics with a whisper-quiet interior and cutting-edge technology.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Panoramic Interior', desc: 'A spacious, tech-filled cabin for maximum passenger comfort.' },
                                    { title: 'Smart Connectivity', desc: 'On-board WiFi and USB charging for every seat.' },
                                    { title: 'Safe & Stable', desc: 'Equipped with the latest driver-assist technologies for long highways.' }
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
                                brandName="Ford Premium Fleet"
                                description="Introducing the 2025 edition to our premium sedan lineup for an unmatched travel experience."
                                metrics={[
                                    { label: 'New Fleet', value: '100%', icon: ShieldCheck },
                                    { label: 'Modern Index', value: 'Elite', icon: Zap }
                                ]}
                            />
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Spec Highlights</h3>
                            <div className="space-y-6">
                                {[
                                    { label: '3-Zone Climate Control', info: 'Perfect for the Saudi Summer' },
                                    { label: 'Adaptive Cruise Control', info: 'Safety on Long Intercity Roads' },
                                    { label: 'Premium Sound System', info: 'Crystal Clear Audio' },
                                    { label: 'Ambient Lighting', info: 'Relaxing VIP Atmosphere' },
                                    { label: 'Leather Seating', info: 'Ergonomic Support' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                                        <span className="font-bold text-gray-900">{item.label}</span>
                                        <span className="text-xs font-black uppercase tracking-widest text-blue-600">{item.info}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-blue-50 rounded-2xl flex items-center gap-4 border border-blue-100">
                                <Car className="w-10 h-10 text-blue-600" />
                                <div>
                                    <div className="font-black text-blue-900 text-sm">PRO TIP</div>
                                    <p className="text-blue-700 text-xs">The 2025 Taurus offers more rear legroom than most luxury sedans in its class.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Ford Taurus 2025 FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Is the Ford Taurus 2025 suitable for long-distance travel?",
                            shortAnswer: "Yes, it is built for comfort.",
                            detailedAnswer: "The 2025 Ford Taurus features a highly aerodynamic design and advanced suspension that provides a smooth, stable ride even on the long intercity highways of Saudi Arabia.",
                            perspectives: [
                                { role: 'Comfort Review', icon: 'User', insight: 'The seats are designed for ergonomic support over 4+ hour journeys.' }
                            ]
                        },
                        {
                            question: "How many passengers and bags can it carry?",
                            shortAnswer: "3 Passengers & 2 Bags.",
                            detailedAnswer: "The Taurus comfortably seats 3 adult passengers. The trunk is spacious and designed to hold 2 standard-sized suitcases plus smaller carry-on items.",
                            perspectives: [
                                { role: 'Baggage Specialist', icon: 'Briefcase', insight: 'The trunk opening is wide, making it easy to load heavy bags.' }
                            ]
                        },
                        {
                            question: "Is the AC powerful enough for the Saudi heat?",
                            shortAnswer: "Yes, dual-zone climate control.",
                            detailedAnswer: "Our Ford Taurus fleet comes equipped with high-output climate control systems specifically tuned for the Gulf climate, ensuring cold air for all passengers.",
                            perspectives: [
                                { role: 'Climate Ops', icon: 'Zap', insight: 'Rear vents ensure the back seat stays just as cool as the front.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-blue-900 py-32 text-center px-4 relative overflow-hidden rounded-t-[5rem]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none upppercase">THE FUTURE OF <br/> VIP TRANSPORT</h2>
                    <p className="text-blue-100/60 text-xl mb-12 max-w-2xl mx-auto">Experience the all-new 2025 Ford Taurus today. Professional chauffeurs and modern luxury at fixed rates.</p>
                    <Link href="/booking/?vehicle=ford-taurus">
                        <Button size="lg" className="bg-white hover:bg-blue-100 text-blue-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK FORD TAURUS NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

