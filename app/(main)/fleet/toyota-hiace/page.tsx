
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
    title: 'Toyota Hiace VIP Private Transfer Saudi Arabia | Group Transport',
    description: 'Book the elite Toyota Hiace VIP private transfer in Saudi Arabia. Professional 11-seater van for Umrah groups, large families, and executive transfers. Reliable and spacious group logistics.',
    keywords: ['Toyota Hiace VIP transfer', 'group transport KSA', 'Umrah van chauffeur', '11 seater Saudi Arabia', 'Hiace Jeddah Airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/toyota-hiace/',
    },
};

export default function ToyotaHiacePage() {
    const specifications = [
        { label: 'Capacity', value: '11 Passengers', icon: Users },
        { label: 'Luggage', value: '16 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Prime Group Van', icon: Award },
        { label: 'Availability', value: '24/7 Nationwide', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Toyota Hiace VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/toyota-hiace.webp",
        "description": "Premium Toyota Hiace VIP transfer service in Saudi Arabia for groups and families.",
        "brand": {
            "@type": "Brand",
            "name": "Toyota"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/toyota-hiace"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-hiace"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/toyota-hiace.webp', '/hero-slide-3.webp']}
                h1Text="Toyota Hiace VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Group Workhorse
                    </span>
                }
                subtitle="Reliable & Spacious Group Travel Across the Kingdom"
                location="11 Passengers | 16 Bags | Multi-Zone AC"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=toyota-hiace">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Hiace
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Group Inquiry
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all hover:shadow-amber-500/10">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-amber-600" />
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Step Up to Group Travel Excellence</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>Toyota Hiace VIP transfer</strong> is our most popular choice for medium-sized groups and large families. Known for its indestructible reliability and expansive interior, it provides a functional and comfortable experience for Umrah groups and corporate event logistics.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Dedicated Cargo Room', desc: 'No bags on seats. Ample rear space for 16 original large suitcases.' },
                                    { title: 'Ceiling AC Vents', desc: 'Independent cooling for every passenger row, vital for Saudi summers.' },
                                    { title: 'Safety First', desc: 'Equipped with multiple airbags and modern stability control systems.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-amber-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-amber-600/20">
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
                                brandName="Hiace Group Captains"
                                description="Expert drivers trained in managing large-group dynamics and airport protocol."
                                metrics={[
                                    { label: 'Annual Pax', value: '50k+', icon: Users },
                                    { label: 'Reliability Index', value: '10/10', icon: ShieldCheck }
                                ]}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 mb-8">
                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">Why Groups Choose Hiace</h3>
                                <div className="space-y-4">
                                    {[
                                        'Indestructible reliability on long desert roads.',
                                        'Retractable side step for easy boarding.',
                                        'High-roof for better passenger headroom.',
                                        'Fixed all-inclusive per-route pricing.',
                                        'Professional, uniformed chauffeurs.'
                                    ].map((use, i) => (
                                        <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                            <span className="font-bold text-gray-700">{use}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gray-900 p-8 rounded-[3rem] text-white">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-black font-black">!</div>
                                    <div className="font-black uppercase tracking-widest text-sm self-center">Pro Logistics Tip</div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">"For groups of 10 or 11 with multiple heavy check-in bags, the Hiace is the only vehicle that guarantees everyone sits comfortably while the luggage stays securely in the rear."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Toyota Hiace FAQ</h2>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "Does the Toyota Hiace include a chauffeur?",
                            shortAnswer: "Yes, professional group drivers.",
                            detailedAnswer: "Every Toyota Hiace VIP transfer includes a professional, uniformed chauffeur. We specialize in group logistics and executive transport; we do not offer self-drive options.",
                            perspectives: [
                                { role: 'Safety Lead', icon: 'Shield', insight: 'Our drivers are experts at city navigation and highway safety.' }
                            ]
                        },
                        {
                            question: "How many passengers and bags can it carry?",
                            shortAnswer: "11 Passengers & 16 Bags.",
                            detailedAnswer: "The Toyota Hiace comfortably accommodates 11 passengers with 16 large suitcases. It is specifically designed to maximize cargo space without affecting seats.",
                            perspectives: [
                                { role: 'Baggage Master', icon: 'Briefcase', insight: 'We ensure all luggage is securely stored to keep the cabin safe.' }
                            ]
                        },
                        {
                            question: "Is the AC powerful enough for the back row?",
                            shortAnswer: "Yes, multi-row ceiling vents.",
                            detailedAnswer: "Our newer Hiace models feature dedicated ceiling vents for every passenger row, ensuring the entire group stays cool even in the extreme Saudi desert heat.",
                            perspectives: [
                                { role: 'Climate Ops', icon: 'Zap', insight: 'Tested for maximum comfort in 45°C+ temperatures.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Group Fleet" />

            <div className="bg-amber-600 py-32 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-16 shadow-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase">THE KING OF <br/><span className="text-black">GROUP LOGISTICS</span></h2>
                    <p className="text-white text-xl mb-12 max-w-2xl mx-auto font-medium">Get Quote for the Kingdom's most reliable and spacious group van. Professional chauffeurs and guaranteed comfort at fixed rates.</p>
                    <Link href="/booking/?vehicle=toyota-hiace">
                        <Button size="lg" className="bg-black hover:bg-white hover:text-black text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK HIACE NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

