
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
    title: 'BMW 7-Series VIP Chauffeur Saudi Arabia | Luxury Sedan',
    description: 'Book the elite BMW 7-Series VIP private transfer in Saudi Arabia. Ultimate luxury sedan with professional chauffeur service for business and VIP travel. Experience German engineering at its finest.',
    keywords: ['BMW 7-Series VIP transfer', 'BMW chauffeur KSA', 'luxury sedan Riyadh', 'BMW executive car Saudi Arabia', 'VIP BMW 7-Series taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/bmw-7-series/',
    },
};

export default function BMW7SeriesPage() {
    const specifications = [
        { label: 'Capacity', value: '3 Passengers', icon: Users },
        { label: 'Luggage', value: '2 standard Bags', icon: Briefcase },
        { label: 'Class', value: 'First Class VIP', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "BMW 7-Series VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
        "description": "Elite BMW 7-Series VIP transfer service in Saudi Arabia for high-end corporate and private travel.",
        "brand": {
            "@type": "Brand",
            "name": "BMW"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/bmw-7-series"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-bmw"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/bmw-7-series-luxury-chauffeur-saudi.webp', '/hero-slide-3.webp']}
                h1Text="BMW 7-Series VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Precision Meets Prestige
                    </span>
                }
                subtitle="The Ultimate Dynamic Luxury Sedan Experience in KSA"
                location="3 Passengers | 2 Bags | VIP Chauffeur"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=bmw-7-series">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book BMW VIP
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Request
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all hover:shadow-indigo-500/10">
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">The Pinnacle of German Luxury</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                For those who appreciate both dynamic performance and rear-seat luxury, our <strong>BMW 7-Series VIP private transfer</strong> is the perfect choice. Whether navigating the bustling business districts of Riyadh or cruising to Jeddah, the 7-Series offers an unparalleled lounge-like experience.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Executive Lounge Seating', desc: 'Reclining rear seats with massage and cooling functions.' },
                                    { title: 'Panoramic Sky Lounge', desc: 'An immersive glass roof experience for night transfers.' },
                                    { title: 'Discrete Security', desc: 'Optional low-profile armored vehicles available upon request.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-indigo-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-indigo-600/20">
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
                                brandName="BMW VIP Excellence"
                                description="The preferred choice for high-tech executives and diplomatic traveling."
                                metrics={[
                                    { label: 'Precision Rating', value: '10/10', icon: ShieldCheck },
                                    { label: 'Client Trust', value: 'Elite', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="bg-indigo-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-indigo-400">Technical Features</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Executive Drive', value: 'Active Chassis Pro' },
                                    { label: 'Acoustics', value: 'Whisper-Quiet Cabin' },
                                    { label: 'Comfort', value: 'Massaging Seats' },
                                    { label: 'Technology', value: 'BMW Theatre Screen' },
                                    { label: 'Safety', value: 'Active Protection' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                        <span className="font-bold text-gray-300">{item.label}</span>
                                        <span className="font-black text-white text-xs uppercase tracking-widest">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 group cursor-pointer">
                                <Link href="/booking/?vehicle=bmw-7-series">
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
                                        <div className="font-black uppercase tracking-widest text-sm text-indigo-300">Reserve This Ride</div>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">BMW 7-Series VIP FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "What makes the BMW 7-Series better for business travel?",
                            shortAnswer: "Ultimate Rear-Seat Tech.",
                            detailedAnswer: "The BMW 7-Series is designed with the 'Executive Lounge' concept. It features extensive rear-seat technology, including the Theatre Screen in newer models, allowing executives to work or relax in complete privacy.",
                            perspectives: [
                                { role: 'Biz Travel', icon: 'Briefcase', insight: 'The quiet cabin is perfect for confidential phone calls during transfers.' }
                            ]
                        },
                        {
                            question: "Do you offer BMW 7-Series transfers from Riyadh Airport?",
                            shortAnswer: "Yes, VIP Meet & Greet Included.",
                            detailedAnswer: "Yes. We offer premium pickup at King Khalid International Airport (RUH). Our chauffeur will meet you at the terminal and escort you to your 7-Series for a seamless transfer to your hotel or office.",
                            perspectives: [
                                { role: 'Arrivals', icon: 'Plane', insight: 'We track your flight in real-time to ensure zero wait time.' }
                            ]
                        },
                        {
                            question: "How many passengers fits in the BMW 7-Series?",
                            shortAnswer: "3 Passengers comfortably.",
                            detailedAnswer: "The 7-Series is optimized for maximum rear-seat comfort. It comfortably seats 3 passengers (ideally 2 in the back and 1 in the front) with 2 large suitcases in the trunk.",
                            perspectives: [
                                { role: 'Dispatcher', icon: 'Users', insight: 'For larger groups, we recommend our GMC Yukon fleet.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-black py-40 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full -mt-40"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter uppercase">THE NEXT LEVEL <br/> OF <span className="text-indigo-500">INDULGENCE</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Why settle for ordinary when you can travel in a BMW 7-Series? Experience the peak of German automotive luxury in the heart of the Kingdom.</p>
                    <Link href="/booking/?vehicle=bmw-7-series">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK BMW 7-SERIES
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

