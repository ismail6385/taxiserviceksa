
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
    title: 'Toyota Camry VIP Private Transfer Saudi Arabia | Premium Sedan',
    description: 'Book the elite Toyota Camry VIP private transfer in Saudi Arabia. Premium executive sedan for business travel and airport transfers. Efficient, professional, and reliable chauffeur service.',
    keywords: ['Toyota Camry VIP transfer', 'premium sedan chauffeur KSA', 'Toyota Camry Riyadh transfer', 'executive car service Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/toyota-camry/',
    },
};

export default function ToyotaCamryPage() {
    const specifications = [
        { label: 'Capacity', value: '3-4 Passengers', icon: Users },
        { label: 'Luggage', value: '2 standard Bags', icon: Briefcase },
        { label: 'Class', value: 'Premium Economy VIP', icon: Award },
        { label: 'Efficiency', value: 'High Performance', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Toyota Camry VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/toyota-camry.webp",
        "description": "Premium Toyota Camry VIP transfer service in Saudi Arabia for business and city travel.",
        "brand": {
            "@type": "Brand",
            "name": "Toyota"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/toyota-camry"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-camry"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/toyota-camry.webp', '/hero-slide-1.webp']}
                h1Text="Toyota Camry VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Smart Executive
                    </span>
                }
                subtitle="Efficient, Professional, and Always Punctual"
                location="3 Passengers | 2 Bags | Executive Sedan"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=toyota-camry">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Camry
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Inquire Now
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Reliability Meets Modern Style</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                Experience the perfect blend of efficiency and professionalism with our <strong>Toyota Camry VIP private transfer</strong>. Ideal for business travelers and city airport transfers, our Camry fleet offers a smooth, reliable journey with all-inclusive pricing.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Executive Privacy', desc: 'Tinted windows and a quiet cabin for focused business commutes.' },
                                    { title: 'Premium Maintenance', desc: 'Vehicles are serviced weekly to ensure ultimate reliability.' },
                                    { title: 'GPS Optimized', desc: 'Our drivers use advanced real-time traffic monitoring to avoid delays.' }
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
                                brandName="Executive Chauffeur Shield"
                                description="Every journey is monitored by our dispatch center for safety and precision."
                                metrics={[
                                    { label: 'Punctuality', value: '99.9%', icon: Clock },
                                    { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="bg-stone-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">Services Provided</h3>
                            <div className="space-y-4">
                                {[
                                    'Airport Meeting & Greet',
                                    'Hourly Business Commutes',
                                    'Intercity Professional Transport',
                                    'Dedicated Daily Chauffeur',
                                    'VIP Hotel Transfers'
                                ].map((service, i) => (
                                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-xl transition-colors">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span className="font-bold">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400 text-sm">
                                "The Toyota Camry remains the gold standard for executive efficiency in the Gulf region, offering a balanced ride that business travelers trust."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Toyota Camry FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How many passengers can the Camry accommodate?",
                            shortAnswer: "3-4 Passengers.",
                            detailedAnswer: "The Toyota Camry is ideal for up to 3 passengers with heavy luggage or 4 passengers with carry-on bags only. It provides a spacious rear bench for its class.",
                            perspectives: [
                                { role: 'Driver Ibrahim', icon: 'User', insight: 'I recommend 2 adults for maximum comfort on long trips.' }
                            ]
                        },
                        {
                            question: "Is there a meeting service at the airport?",
                            shortAnswer: "Yes, Meet & Greet Included.",
                            detailedAnswer: "All our VIP airport transfers include a professional greet service at the arrivals terminal, where our chauffeur will be waiting with your name on a digital sign.",
                            perspectives: [
                                { role: 'Airport Ops', icon: 'Plane', insight: 'We monitor flight statuses in real-time to adjust for delays.' }
                            ]
                        },
                        {
                            question: "Are the rates all-inclusive?",
                            shortAnswer: "Yes, No Hidden Fees.",
                            detailedAnswer: "Our quoted rates for the Toyota Camry include fuel, professional driver fees, road tolls, and standard airport parking. What you see is what you pay.",
                            perspectives: [
                                { role: 'Finance', icon: 'DollarSign', insight: 'Corporate accounts can receive monthly itemized billing.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="Executive Fleet" />

            <div className="bg-emerald-950 py-32 text-center px-4 relative overflow-hidden rounded-[5rem] mx-4 mb-16 shadow-2xl border border-emerald-500/10">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">EFFICIENCY <br/> <span className="text-emerald-500">DEFINED</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Why settle for standard when you can have VIP? Secure your professional Toyota Camry transfer today.</p>
                    <Link href="/booking/?vehicle=toyota-camry">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK CAMRY VIP
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

