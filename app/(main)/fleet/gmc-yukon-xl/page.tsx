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
    title: 'GMC Yukon XL VIP Private Transfer Saudi Arabia | Premium Chauffeur',
    description: 'Book the premium GMC Yukon XL VIP private transfer in Saudi Arabia. Luxury 7-seater SUV with extended wheelbase (XL) for extra luggage space, airport transfers, and family Umrah.',
    keywords: ['GMC Yukon XL VIP transfer', 'GMC Yukon XL Saudi Arabia', 'luxury SUV chauffeur KSA', 'GMC Yukon XL Riyadh transfer', 'family SUV transfer Makkah', 'Jeddah to Makkah GMC Yukon XL'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/gmc-yukon-xl/',
    },
};

export default function GMCYukonXLPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage Space', value: '6 Large Bags (XL)', icon: Briefcase },
        { label: 'Class', value: 'Extended Premium SUV', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "GMC Yukon XL Luxury Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
        "description": "Premium GMC Yukon XL VIP transfer service in Saudi Arabia for family Umrah and corporate airport transfers.",
        "brand": {
            "@type": "Brand",
            "name": "GMC"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-yukon-xl"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', '/hero-slide-3.webp']}
                h1Text="GMC Yukon XL VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug text-sm md:text-base">
                        Extended Wheelbase Luxury
                    </span>
                }
                subtitle="Unmatched Space, Premium Power & Ultimate Comfort"
                location="7 Passengers | 6 Large Bags | XL Luggage Capacity"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=gmc-yukon-xl">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book GMC Yukon XL
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20want%20to%20book%20a%20GMC%20Yukon%20XL">
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">The Ultimate XL SUV for Family Transfers</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>GMC Yukon XL VIP transfer</strong> is our premium extended-length SUV service. Unlike standard SUVs, the XL model features an extended wheelbase that dramatically increases rear cargo capacity, ensuring that all 7 passengers can travel together with their full luggage complement.
                            </p>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Whether you are arriving at Jeddah Airport (JED) with large suitcases for Umrah, or traveling between Riyadh and Dammam for business, the GMC Yukon XL offers whisper-quiet cabin acoustics, multi-zone automatic climate control, and superior luxury seating.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <EntityTrustSignal 
                                    brandName="GMC Yukon XL Chauffeur"
                                    description="The premium standard for family travel, offering massive luggage storage and top-tier safety."
                                    metrics={[
                                        { label: 'Trips Completed', value: '15k+', icon: Navigation },
                                        { label: 'Luggage Volume', value: 'Extra Large', icon: Briefcase }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                           <div className="bg-emerald-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">Premium XL Amenities</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: 'Extended Cargo Space', desc: 'Huge boot area even with third-row seats fully occupied.' },
                                        { title: 'Executive Ride Quality', desc: 'Extended wheelbase guarantees smooth, stable highway cruising.' },
                                        { title: 'Tri-Zone Climate Control', desc: 'Keeps all rows cool during the peak Saudi summer.' },
                                        { title: 'Onboard Refreshments', desc: 'Chilled bottled water and charging ports in every row.' }
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
                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">GMC Yukon XL Ideal Uses</h3>
                                <div className="space-y-4">
                                    {[
                                        'Jeddah Airport (JED) to Makkah with heavy Umrah luggage',
                                        'Riyadh (RUH) Airport transfers for executive delegations',
                                        'Long-distance intercity family road trips across Saudi Arabia',
                                        'VIP group transport for Riyadh Season and cultural festivals',
                                        'Premium hourly private hire for corporate meetings'
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
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "What is the difference between GMC Yukon and GMC Yukon XL?",
                            shortAnswer: "Yukon XL has double the cargo volume behind the 3rd row.",
                            detailedAnswer: "The GMC Yukon XL is approximately 20 inches longer overall than the standard Yukon. This extra length goes entirely to the rear trunk area, allowing you to load up to 6 large travel suitcases easily without folding down any seats.",
                            perspectives: [
                                { role: 'Luggage Consultant', icon: 'Briefcase', insight: 'If you are 5 to 7 passengers with more than 4 large bags, the XL is highly recommended.' }
                            ]
                        },
                        {
                            question: "How many passengers can the GMC Yukon XL carry?",
                            shortAnswer: "Up to 7 Passengers comfortably.",
                            detailedAnswer: "Our luxury GMC Yukon XL configuration features captain seats in the second row and a spacious bench in the third row, allowing up to 7 passengers to ride in luxurious air-conditioned comfort.",
                            perspectives: [
                                { role: 'Comfort Specialist', icon: 'Users', insight: 'Adults can sit comfortably in the third row due to the extended legroom of the XL chassis.' }
                            ]
                        },
                        {
                            question: "Does the booking price include a professional chauffeur?",
                            shortAnswer: "Yes, all bookings include driver, fuel, and tolls.",
                            detailedAnswer: "We operate exclusively as a premium chauffeur service. All bookings come with a professional, licensed driver who manages the route, handles luggage, and coordinates pickup/dropoff. We do not offer self-drive rentals.",
                            perspectives: [
                                { role: 'Service Coordinator', icon: 'Shield', insight: 'Our drivers speak English and Arabic, and monitor your flight details in real-time.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-emerald-950 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Book Your Premium<br/><span className="text-emerald-500 uppercase">GMC YUKON XL</span></h2>
                    <p className="text-emerald-100/60 text-xl mb-12 max-w-2xl mx-auto">Instant WhatsApp booking with transparent fixed rates. Experience the ultimate executive SUV for travel in Saudi Arabia.</p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20want%20to%20book%20a%20GMC%20Yukon%20XL">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK GMC YUKON XL NOW
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
