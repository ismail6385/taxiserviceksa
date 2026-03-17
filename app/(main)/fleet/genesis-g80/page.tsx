
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
    title: 'Genesis G80 VIP Transfer Saudi Arabia | Luxury Executive Transport',
    description: 'Book the elite Genesis G80 VIP private transfer in Saudi Arabia. Premium executive sedan with sophisticated design and first-class comfort for city and airport transfers.',
    keywords: ['Genesis G80 VIP transfer', 'Genesis chauffeur KSA', 'luxury sedan Riyadh', 'Genesis executive car Saudi Arabia', 'VIP Genesis G80 taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/genesis-g80/',
    },
};

export default function GenesisG80Page() {
    const specifications = [
        { label: 'Capacity', value: '3 Passengers', icon: Users },
        { label: 'Luggage', value: '2 standard Bags', icon: Briefcase },
        { label: 'Class', value: 'Korean Luxury Elite', icon: Award },
        { label: 'Air Conditioning', value: 'Advanced Dual-Zone', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Genesis G80 VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/genesis-g80-luxury-transport-ksa.webp",
        "description": "Elite Genesis G80 VIP transfer service in Saudi Arabia for sophisticated business and private travel.",
        "brand": {
            "@type": "Brand",
            "name": "Genesis"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/genesis-g80"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-genesis"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/genesis-g80-luxury-transport-ksa.webp', '/hero-slide-3.webp']}
                h1Text="Genesis G80 VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Athletic Elegance
                    </span>
                }
                subtitle="The Pinnacle of Modern Sophistication in Saudi Arabia"
                location="3 Passengers | 2 Bags | Executive VIP"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=genesis-g80">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Genesis VIP
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Details
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-rose-600" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Quiet Power & Refined Comfort</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-8">
                                For the discerning traveler who seeks a unique blend of modern design and traditional luxury, the <strong>Genesis G80 VIP private transfer</strong> is an exceptional choice. Known for its whisper-quiet cabin and premium materials, the G80 provides a serene environment for city commutes and intercity tours.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Prime Nappa Leather', desc: 'Handcrafted interior with open-pore real wood trim.' },
                                    { title: 'Ergo Motion Seat', desc: 'Advanced seat design that reduces fatigue on long journeys.' },
                                    { title: 'Lexicon Sound System', desc: 'Immersive 18-speaker audio for a concert-like experience.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-rose-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-rose-600/20">
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
                                brandName="Genesis VIP Shield"
                                description="Winner of multiple international safety and design awards."
                                metrics={[
                                    { label: 'Safety Rating', value: 'Top Pick', icon: ShieldCheck },
                                    { label: 'Design Index', value: 'Elite', icon: Award }
                                ]}
                            />
                        </div>

                        <div className="bg-stone-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-rose-400">Luxury Specifications</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Drive Mode', value: 'Electronic Control Suspension' },
                                    { label: 'Isolation', value: 'Double-Glazed Soundproof Glass' },
                                    { label: 'Rear Comfort', value: 'Dual 9.2-inch Monitors' },
                                    { label: 'Lighting', value: 'Signature Two-Line LED' },
                                    { label: 'Safety', value: 'Highway Driving Assist II' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                        <span className="font-bold text-gray-400">{item.label}</span>
                                        <span className="font-black text-white text-xs uppercase tracking-widest">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Genesis G80 VIP FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How does the Genesis G80 compare to European luxury sedans?",
                            shortAnswer: "Equal Luxury, Modern Tech.",
                            detailedAnswer: "The G80 offers a comparable (and often superior) level of interior material quality and technology integration as its European counterparts, but with a focus on 'Athletic Elegance' and unique Korean design philosophy.",
                            perspectives: [
                                { role: 'Global Critic', icon: 'Star', insight: 'The G80 cabin is widely considered one of the quietest in its class.' }
                            ]
                        },
                        {
                            question: "Is the G80 suitable for airport transfers in Riyadh?",
                            shortAnswer: "Perfect for Executive Arrivals.",
                            detailedAnswer: "Yes. The G80 provides a sophisticated and professional image for airport pickups at RUH. Our chauffeurs ensure a smooth, private transition from the terminal to your final destination.",
                            perspectives: [
                                { role: 'Dispatch', icon: 'Plane', insight: 'The trunk easily fits 2 large bags without affecting passenger space.' }
                            ]
                        },
                        {
                            question: "What amenities are provided in the Genesis VIP fleet?",
                            shortAnswer: "First-Class Amenities.",
                            detailedAnswer: "Our Genesis fleet includes bottled water, high-speed WiFi, phone charging cables, and climate-controlled sessions to ensure you arrive refreshed.",
                            perspectives: [
                                { role: 'Concierge', icon: 'User', insight: 'We tailor the cabin environment to your temperature and music preferences.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Fleet" />

            <div className="bg-stone-950 py-32 text-center px-4 relative overflow-hidden rounded-[5rem] mx-4 mb-16 shadow-2xl">
                <div className="absolute inset-0 bg-rose-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">DEFINING NEW <br/> <span className="text-rose-600">STANDARDS</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Elevate your travel experience with the Genesis G80. Sophisticated luxury, fixed pricing, and professional service across Saudi Arabia.</p>
                    <Link href="/booking/?vehicle=genesis-g80">
                        <Button size="lg" className="bg-rose-700 hover:bg-rose-600 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK GENESIS G80
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

