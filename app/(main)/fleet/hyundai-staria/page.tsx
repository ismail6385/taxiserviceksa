
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
    description: 'Book the elite Hyundai Staria VIP private transfer in Saudi Arabia. Premium 7-seater "Business Class" van for families and VIP groups. Panoramic views and superior comfort.',
    keywords: ['Hyundai Staria VIP transfer', 'premium van chauffeur KSA', 'Hyundai Staria Riyadh transfer', 'executive group transport Saudi Arabia', 'VIP van Jeddah airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/hyundai-staria/',
    },
};

export default function HyundaiStariaPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Modern Executive Van', icon: Award },
        { label: 'Comfort', value: 'Pilot Seating', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Hyundai Staria VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/hyundai-staria.webp",
        "description": "Premium Hyundai Staria VIP transfer service in Saudi Arabia for families and VIP groups.",
        "brand": {
            "@type": "Brand",
            "name": "Hyundai"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-staria"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/hyundai-staria.webp', '/hero-slide-4.webp']}
                h1Text="Hyundai Staria VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Business Class Van
                    </span>
                }
                subtitle="Future-Forward Luxury with Panoramic Perspectives"
                location="7 Passengers | 4 Bags | Premium Pilot Seats"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=hyundai-staria">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Staria
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Step into the Future of VIP Vans</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>Hyundai Staria VIP transfer</strong> is often called "The Spaceship" of our fleet. With its ultra-modern design and massive panoramic windows, it provides an airy, lounge-like atmosphere that is perfect for families touring Makkah, Madinah, or Riyadh.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Pilot Seating', desc: 'Premium middle-row seats that recline fully for ultimate relaxation.' },
                                    { title: 'Panoramic Views', desc: 'Floor-to-ceiling windows for an immersive experience of the Saudi landscape.' },
                                    { title: 'Advanced Suspension', desc: 'Multi-link rear suspension ensures a car-like, nausea-free ride.' }
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
                                brandName="Staria VIP Shield"
                                description="Hyundai's flagship multi-purpose vehicle, awarded for safety and innovation."
                                metrics={[
                                    { label: 'Safety Index', value: 'Elite', icon: ShieldCheck },
                                    { label: 'Comfort Score', value: '10/10', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="bg-stone-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-indigo-400">Cabin Amenities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: 'Tech', value: 'USB Ports at Every Seat' },
                                    { label: 'Lighting', value: 'Ambient Mood Lighting' },
                                    { label: 'Entry', value: 'Smart Power Sliding Doors' },
                                    { label: 'Climate', value: 'Multi-Zone Auto AC' },
                                    { label: 'Noise', value: 'Enhanced Sound Insulation' }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">{item.label}</h4>
                                        <p className="text-white font-bold text-sm">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 p-8 bg-indigo-600/10 rounded-2xl border border-indigo-500/20 italic text-indigo-200 text-sm">
                                "The Staria changed the game for family travel in KSA. It's the first van children actually look forward to riding in."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Hyundai Staria FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How many people can realistically fit with luggage?",
                            shortAnswer: "7 People + 4 Large Bags.",
                            detailedAnswer: "The Staria excels at moving 5-7 people. For 7 passengers, we recommend limiting luggage to 4 large suitcases or a mix of smaller bags to ensure cabin comfort.",
                            perspectives: [
                                { role: 'Load Master', icon: 'Briefcase', insight: 'If you have more than 5 bags for 7 people, we suggest upgrading to the Sprinter.' }
                            ]
                        },
                        {
                            question: "Is it suitable for long intercity journeys?",
                            shortAnswer: "The Gold Standard for Comfort.",
                            detailedAnswer: "Yes. Due to its advanced multi-link suspension, the Staria feels like a luxury sedan even on the 450km journey between Makkah and Madinah.",
                            perspectives: [
                                { role: 'Captain Yasser', icon: 'Navigation', insight: 'Passengers frequently fall asleep within 15 minutes because the ride is so smooth.' }
                            ]
                        },
                        {
                            question: "Do you offer the VIP model with pilot seats?",
                            shortAnswer: "Yes, our fleet is Premium Spec.",
                            detailedAnswer: "Our Staria fleet is specifically curated for VIP transfers, featuring the high-spec interior with reclining middle-row 'Pilot' chairs for maximum comfort.",
                            perspectives: [
                                { role: 'VIP Desk', icon: 'Award', insight: 'We ensure your vehicle is the premium business-class variant.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="Premium Van Fleet" />

            <div className="bg-indigo-950 py-32 text-center px-4 relative overflow-hidden rounded-[5rem] mx-4 mb-16 shadow-2xl border border-indigo-500/10">
                <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">THE FUTURE <br/> <span className="text-indigo-500">IS HERE</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Elevate your group travel experience with the Hyundai Staria. Modern luxury, panoramic views, and professional service.</p>
                    <Link href="/booking/?vehicle=hyundai-staria">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK STARIA VIP
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
