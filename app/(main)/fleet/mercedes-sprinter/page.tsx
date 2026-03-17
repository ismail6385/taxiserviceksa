
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
    title: 'Mercedes Sprinter VIP Minibus Saudi Arabia | Luxury Group Travel',
    description: 'Book the elite Mercedes Sprinter VIP private transfer in Saudi Arabia. Premium 14-seater for executive groups, tours, and corporate events. High-spec luxury and professional service.',
    keywords: ['Mercedes Sprinter VIP transfer', 'luxury minibus chauffeur KSA', 'Mercedes Sprinter Riyadh transfer', 'executive group service Saudi Arabia', 'VIP Sprinter hire', 'Umrah group transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/mercedes-sprinter/',
    },
};

export default function MercedesSprinterPage() {
    const specifications = [
        { label: 'Capacity', value: '14 Passengers', icon: Users },
        { label: 'Luggage', value: '16+ Large Bags', icon: Briefcase },
        { label: 'Class', value: 'VIP Minibus', icon: Award },
        { label: 'Height', value: 'High Roof Luxury', icon: ArrowRight },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Mercedes Sprinter VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
        "description": "Premium Mercedes Sprinter VIP transfer service in Saudi Arabia for large families and executive groups.",
        "brand": {
            "@type": "Brand",
            "name": "Mercedes-Benz"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/mercedes-sprinter"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-sprinter"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', '/hero-slide-3.webp']}
                h1Text="Mercedes Sprinter VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Group Power
                    </span>
                }
                subtitle="The Gold Standard for Luxury Group Logistics in Saudi Arabia"
                location="14 Passengers | 16+ Bags | High-Roof VIP"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=mercedes-sprinter">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Sprinter
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Group Request
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">Large Scale Luxury Redefined</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Move your entire executive delegation or large family in unparalleled comfort with the <strong>Mercedes Sprinter VIP private transfer</strong>. Tailored for those who value both space and extreme refinement, it is the ultimate solution for large-scale VIP logistics across the Kingdom.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Custom Executive Interior', desc: 'Plush reclining leather seats with folding tray tables.' },
                                    { title: 'Standing Headroom', desc: 'High-roof design allows easy movement throughout the cabin.' },
                                    { icon: Briefcase, title: 'Dedicated Cargo', desc: 'Massive trunk space for Umrah group luggage and equipment.' }
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
                                brandName="Mercedes VIP Logistics"
                                description="The preferred transport partner for corporate delegations and diplomatic tours since 2015."
                                metrics={[
                                    { label: 'Group Trips', value: '8k+', icon: Users },
                                    { label: 'Safety Index', value: 'Elite', icon: ShieldCheck }
                                ]}
                            />
                        </div>

                        <div className="bg-black rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">On-Board Amenities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                    { title: 'Smart Screens', info: 'HDMI & Apple TV Available.' },
                                    { title: 'Fridges', info: 'Cooled Refreshments.' },
                                    { title: 'Fast Wi-Fi', info: '5G Connectivity.' },
                                    { title: 'Mood Lighting', info: 'Adjustable RGB settings.' },
                                    { title: 'Charging Ports', info: 'USB & 220V Outlets.' },
                                    { title: 'Partition', info: 'Driver Privacy Available.' }
                                ].map((item, i) => (
                                    <div key={i} className="border-l-2 border-emerald-500/30 pl-4">
                                        <h4 className="font-black text-xs uppercase tracking-widest text-emerald-200 mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.info}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Mercedes Sprinter FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How many passengers can travel in a VIP Sprinter?",
                            shortAnswer: "Up to 14 Passengers.",
                            detailedAnswer: "Our VIP Mercedes Sprinter configurations are designed for maximum comfort, typically seating up to 14 passengers in a luxury layout that provides ample legroom and reclining capabilities.",
                            perspectives: [
                                { role: 'Logostics Lead', icon: 'Users', insight: 'This vehicle replaces the need for 3-4 separate cars for large groups.' }
                            ]
                        },
                        {
                            question: "Is there enough room for luggage for 14 people?",
                            shortAnswer: "Yes, 16+ Large Bags.",
                            detailedAnswer: "The Sprinter features a dedicated cargo area at the rear, easily accommodating 16 or more large suitcases, making it perfect for international arrivals and Umrah groups.",
                            perspectives: [
                                { role: 'Travel Guide', icon: 'Briefcase', insight: 'No more worrying about excess baggage fees or space constraints.' }
                            ]
                        },
                        {
                            question: "Does the Sprinter include a professional chauffeur?",
                            shortAnswer: "Yes, experienced group captains.",
                            detailedAnswer: "Every Sprinter rental includes a professional chauffeur who is specifically trained in managing large group dynamics and navigating city and highway routes safely.",
                            perspectives: [
                                { role: 'Safety Director', icon: 'Shield', insight: 'Our drivers are experts in pathfinding for large executive vehicles.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Group Fleet" />

            <div className="bg-emerald-950 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">MOBILIZE YOUR <br/><span className="text-emerald-500">DELEGATION</span></h2>
                    <p className="text-emerald-100/60 text-xl mb-12 max-w-2xl mx-auto">Experience the peak of luxury group travel. Fixed rates, high-spec interiors, and guaranteed reliability across KSA.</p>
                    <Link href="/booking/?vehicle=mercedes-sprinter">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-950 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            RESERVE SPRINTER NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

