
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
    title: 'GMC Yukon VIP Private Transfer Saudi Arabia | Premium Chauffeur',
    description: 'Book the elite GMC Yukon VIP private transfer in Saudi Arabia. Premium 7-seater SUV for airport transfers, business travel, and Umrah journeys. Best-in-class comfort and reliability.',
    keywords: ['GMC Yukon VIP transfer', 'luxury SUV chauffeur KSA', 'GMC Yukon Riyadh transfer', 'executive chauffeur service Saudi Arabia', 'GMC Yukon VIP car', 'Jeddah to Makkah GMC Yukon'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/gmc-yukon/',
    },
};

export default function GMCYukonPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '5 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Premium Luxury SUV', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "GMC Yukon Luxury Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
        "description": "Premium GMC Yukon VIP transfer service in Saudi Arabia for Umrah and airport transfers.",
        "brand": {
            "@type": "Brand",
            "name": "GMC"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/gmc-yukon"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "ratingCount": "240"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-yukon"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', '/hero-slide-3.webp']}
                h1Text="GMC Yukon VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug text-sm md:text-base">
                        The Kingdom's Favorite SUV
                    </span>
                }
                subtitle="The Ultimate Balance of Power & Family Comfort"
                location="7 Passengers | 5 Bags | All-Terrain Luxury"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=gmc-yukon">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book GMC Yukon
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Fleet Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-gray-900" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">Engineered for the Road to Makkah</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>GMC Yukon VIP private transfer</strong> is our most requested service for a reason. Its massive interior space, superior road stability, and advanced dual AC system make it the perfect vehicle for the long-distance Saudi highways.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Ideal for both executive delegations and large families performing Umrah/Hajj, the Yukon provides a quiet, refined cabin that allows you to relax or work while our professional chauffeurs manage the 950km journey across the desert.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <EntityTrustSignal 
                                    brandName="GMC Premium Chauffeur"
                                    description="The backbone of our fleet, trusted by thousands of families every year."
                                    metrics={[
                                        { label: 'Annual Trips', value: '25k+', icon: Navigation },
                                        { label: 'Fleet Security', value: 'High', icon: ShieldCheck }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                           <div className="bg-emerald-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">Premium Amenities</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: 'Extra Legroom', desc: 'Extended wheelbase for comfort.' },
                                        { title: 'Free WiFi', desc: 'Stay connected on the long road.' },
                                        { title: 'Privacy Glass', desc: 'Full privacy for families.' },
                                        { title: 'Dual AC', desc: 'Front and rear climate control.' }
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <h4 className="font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                {item.title}
                                            </h4>
                                            <p className="text-emerald-100/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                           </div>

                           <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Ideal Use Cases</h3>
                                <div className="space-y-4">
                                    {[
                                        'Family Umrah Pilgrimage (JED to Makkah)',
                                        'Executive Airport Transfers (JED/RUH)',
                                        'Long Distance Intercity (Riyadh to Jeddah)',
                                        'Full Day City Tours & Sightseeing',
                                        'Corporate Delegation Transport'
                                    ].map((use, i) => (
                                        <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
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
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">GMC Yukon VIP FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How much luggage can the GMC Yukon hold?",
                            shortAnswer: "5 Large Suitcases.",
                            detailedAnswer: "The GMC Yukon comfortably holds 5 large suitcases in the rear cargo area. For airport transfers, we can even fold the third-row seats if you have fewer passengers but more baggage.",
                            perspectives: [
                                { role: 'Baggage Master', icon: 'Briefcase', insight: 'Our drivers are experts at organizing luggage for maximum space.' }
                            ]
                        },
                        {
                            question: "Is the GMC Yukon comfortable for a 9-hour trip?",
                            shortAnswer: "Absolutely, highly recommended.",
                            detailedAnswer: "Yes! Many of our passengers book the Yukon for the Riyadh to Jeddah or Riyadh to Makkah route precisely because of its smooth ride and wide, supportive seating.",
                            perspectives: [
                                { role: 'Long-Haul Guide', icon: 'Navigation', insight: 'The heavy frame of the Yukon makes it very stable even in desert crosswinds.' }
                            ]
                        },
                        {
                            question: "Are your GMC Yukons the latest models?",
                            shortAnswer: "Yes, 2023-2025 Models.",
                            detailedAnswer: "We take pride in maintaining a fresh fleet. All our GMC Yukons are late-model vehicles (2023 or newer) with clean interiors and fully functional premium features.",
                            perspectives: [
                                { role: 'Fleet Manager', icon: 'Shield', insight: 'Every vehicle undergoes a safety check before every long-distance booking.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-emerald-950 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Experience THE <br/><span className="text-emerald-500 uppercase">KING OF THE ROAD</span></h2>
                    <p className="text-emerald-100/60 text-xl mb-12 max-w-2xl mx-auto">WhatsApp Booking for the most reliable and spacious luxury SUV in Saudi Arabia. Professional chauffeurs and guaranteed comfort.</p>
                    <Link href="/booking/?vehicle=gmc-yukon">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK GMC YUKON NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

