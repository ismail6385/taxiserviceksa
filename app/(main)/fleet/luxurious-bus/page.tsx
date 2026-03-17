
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
    title: 'Luxurious Bus Private Transfer Saudi Arabia | Premium Group Coach',
    description: 'Book the elite Luxurious Bus private transfer in Saudi Arabia. Premium 25-seater for executive groups, Umrah tours, and corporate events. High-spec luxury and professional service.',
    keywords: ['Luxurious Bus private transfer', 'luxury coach chauffeur KSA', '25 seater bus Riyadh transfer', 'executive group coach Saudi Arabia', 'VIP bus hire', 'Umrah bus transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/luxurious-bus/',
    },
};

export default function LuxuriousBusPage() {
    const specifications = [
        { label: 'Capacity', value: '25 Passengers', icon: Users },
        { label: 'Luggage', value: '30+ Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Premium VIP Coach', icon: Award },
        { label: 'Climate', value: 'Quad-Zone AC', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Luxurious Bus VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/hero-slide-4.webp", // Using premium coach image from hero slides
        "description": "Premium Luxurious Bus (25-seater) VIP transfer service in Saudi Arabia for large groups and tours.",
        "brand": {
            "@type": "Brand",
            "name": "Luxury Coach"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/luxurious-bus"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-bus"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/hero-slide-4.webp', '/hero-slide-5.webp']}
                h1Text="Luxurious Bus VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Elite Group Logistics
                    </span>
                }
                subtitle="The Ultimate Solution for Large Scale VIP Group Movement"
                location="25 Passengers | 30+ Bags | First Class Coach"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=luxurious-bus">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Bus
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get Group Quote
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">Commanding Comfort for 25+</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                Move your entire organization or large pilgrimage group with the <strong>Luxurious Bus VIP private transfer</strong>. Designed for the long road between Riyadh, Makkah, and Madinah, our coaches feature "Tourismo" style luxury with extensive amenities for every passenger.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Reclining Comfort', desc: 'Ergonomic business-class seats with individual tray tables.' },
                                    { title: 'Massive Cargo Holds', desc: 'Secure under-bus storage for 30+ large suitcases.' },
                                    { title: 'Professional Crew', desc: 'Experienced long-distance bus captains and on-board assistants.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-black rounded-full p-1 h-fit mt-1 shadow-lg">
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
                                brandName="Elite Group Captains"
                                description="Specially trained drivers for large-scale VIP logistics and diplomatic tours."
                                metrics={[
                                    { label: 'Fleet Safety', value: '100%', icon: ShieldCheck },
                                    { label: 'Client Retention', value: 'Elite', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-full h-2 bg-black"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest text-center">Group VIP Specs</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                {[
                                    { title: 'On-Board Lavatory', info: 'Available on select models.' },
                                    { title: 'PA System', info: 'Ideal for guided group tours.' },
                                    { title: 'Entertainment', info: 'HD Screens & Surround Sound.' },
                                    { title: 'Individual AC', info: 'Passenger-controlled vents.' }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                                        <p className="text-gray-900 font-bold text-sm">{item.info}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-black rounded-2xl text-white">
                                <h4 className="font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-emerald-500" />
                                    Perfect For
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div>
                                        Large Umrah & Hajj Pilgrimage Groups
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div>
                                        Corporate Delegation City Circuits
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div>
                                        Regional Sightseeing & Educational Tours
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Group Coach FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Can we use the Luxurious Bus for an 8-hour trip to Makkah?",
                            shortAnswer: "Yes, optimized for long-haul.",
                            detailedAnswer: "Yes. Our buses are equipped with high-comfort seats and superior noise isolation, specifically designed to make the long intercity journeys (like Riyadh to Makkah) feel short and pleasant for all 25 passengers.",
                            perspectives: [
                                { role: 'Travel Guide', icon: 'MapPin', insight: 'We plan regular stops at premium service areas for passenger comfort.' }
                            ]
                        },
                        {
                            question: "Is there a limit on how much luggage we can bring?",
                            shortAnswer: "Very high capacity (30+ Bags).",
                            detailedAnswer: "Our coaches feature massive under-bus cargo holds. Unless every passenger is carrying more than 2 large suitcases, there is usually ample space for everyone's belongings.",
                            perspectives: [
                                { role: 'Logistics', icon: 'Briefcase', insight: 'Perfect for international groups arriving with heavy Umrah luggage.' }
                            ]
                        },
                        {
                            question: "Does the bus include on-board entertainment?",
                            shortAnswer: "Yes, HD screens & Audio.",
                            detailedAnswer: "Every Luxurious Bus in our fleet features a professional PA system and multiple HD screens for city tours, corporate presentations, or spiritual content during Umrah journeys.",
                            perspectives: [
                                { role: 'Tech Crew', icon: 'Zap', insight: 'We can assist in setting up custom presentations for corporate groups.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Group Fleet" />

            <div className="bg-black py-40 text-center px-4 relative overflow-hidden rounded-t-[5rem]">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter uppercase">THE PEAK OF <br/> <span className="text-emerald-500">GROUP TRAVEL</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Why compromise on group logistics? Request a quote for a Luxurious Bus and experience the gold standard of group transportation in Saudi Arabia.</p>
                    <Link href="/booking/?vehicle=luxurious-bus">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK GROUP COACH
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

