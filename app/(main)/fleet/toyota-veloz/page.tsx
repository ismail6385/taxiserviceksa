
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight, Navigation, Zap, Award, User } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Toyota Veloz 2024 Chauffeur | Dammam, Jubail & Bahrain Transfers',
    description: 'Book the brand new Toyota Veloz 2024 for private transfers in Dammam, Jubail, Al Khobar, and Bahrain (via King Fahd Causeway). Spacious 7-seater MPV, ideal for families and Umrah groups.',
    keywords: ['Toyota Veloz 2024 Dammam', 'Toyota Veloz Jubail taxi', 'Toyota Veloz Bahrain transfer', 'Dammam to Bahrain private car', 'Jubail airport transfer vehicle', 'Dammam Umrah transport MPV'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/toyota-veloz/',
    },
};

export default function ToyotaVelozPage() {
    const specifications = [
        { label: 'Capacity', value: '6-7 Passengers', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Model Year', value: '2024 (New)', icon: Award },
        { label: 'Class', value: 'Family MPV', icon: Zap },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Toyota Veloz 2024 Chauffeur Service",
        "image": "https://taxiserviceksa.com/fleet/toyota-veloz-2024-dammam-jubail-bahrain-chauffeur.webp",
        "description": "Brand new 2024 Toyota Veloz private chauffeur MPV serving Dammam, Jubail, Al Khobar and Bahrain (King Fahd Causeway) routes.",
        "brand": {
            "@type": "Brand",
            "name": "Toyota"
        },
        "areaServed": ["Dammam", "Jubail", "Al Khobar", "Dhahran", "Bahrain"]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-veloz"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/fleet/toyota-veloz-2024-dammam-jubail-bahrain-chauffeur.webp', '/fleet/toyota-veloz-2024-bahrain-causeway-khobar-taxi.webp']}
                h1Text="Toyota Veloz 2024"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        New 2024 Model
                    </span>
                }
                subtitle="Dammam • Jubail • Al Khobar • Bahrain Causeway"
                location="7 Passengers | 4 Bags | Family MPV"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=Toyota-Veloz-2024">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Toyota Veloz
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20the%20Toyota%20Veloz%202024%20for%20Dammam%2FJubail%2FBahrain." target="_blank" rel="nofollow noopener noreferrer">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            WhatsApp Us
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
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Fresh Off The Lot, Ready For The Road</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                Our <strong>Toyota Veloz 2024</strong> is one of the newest additions to the fleet, based in the <strong>Eastern Province</strong>. It's the ideal pick for families and small groups travelling between <strong>Dammam, Jubail, and Al Khobar</strong>, and for cross-border trips to <strong>Bahrain via the King Fahd Causeway</strong>.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Eastern Province Based', desc: 'Stationed in Dammam for fast pickups across Jubail, Dhahran, and Al Khobar.' },
                                    { title: 'Bahrain Border Ready', desc: 'Fully equipped for King Fahd Causeway crossings to Manama, Riffa, and Amwaj Islands.' },
                                    { title: 'Umrah Family Transfers', desc: 'Roomy 7-seat layout with luggage space, ideal for Dammam to Makkah or Madinah Umrah trips.' }
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
                                brandName="Eastern Province Chauffeur Shield"
                                description="Dispatched from Dammam with live tracking for every Jubail, Khobar, and Bahrain crossing."
                                metrics={[
                                    { label: 'Punctuality', value: '99.9%', icon: Clock },
                                    { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                ]}
                            />
                        </div>

                        <div className="bg-stone-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-emerald-400">Coverage Area</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Dammam City & Corniche', href: '/locations/dammam/' },
                                    { label: 'Jubail & Jubail Industrial City', href: '/locations/jubail/' },
                                    { label: 'Al Khobar & Dhahran', href: '/locations/al-khobar/' },
                                    { label: 'Dammam → Bahrain (Causeway)', href: '/routes/dammam-bahrain/' },
                                    { label: 'Dammam → Makkah / Madinah (Umrah)', href: '/routes/dammam-makkah/' },
                                ].map((service, i) => (
                                    <Link key={i} href={service.href} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-xl transition-colors group">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span className="font-bold flex-1">{service.label}</span>
                                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400 text-sm">
                                "The Veloz gives Eastern Province families a brand new, spacious option for Bahrain runs and Umrah transfers without the wait time of an SUV booking."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Toyota Veloz 2024 FAQ</h2>
                </center>
                <MicroSemanticFAQ
                    faqs={[
                        {
                            question: "Is the Toyota Veloz 2024 available for Dammam to Bahrain transfers?",
                            shortAnswer: "Yes, including King Fahd Causeway crossings.",
                            detailedAnswer: "The Veloz is based in Dammam and regularly covers the Al Khobar to Bahrain corridor via the King Fahd Causeway, including drop-offs in Manama, Riffa, and Amwaj Islands.",
                            perspectives: [
                                { role: 'Dispatch Dammam', icon: 'User', insight: 'We recommend booking a day ahead for smooth border paperwork.' }
                            ]
                        },
                        {
                            question: "Can I book the Veloz for a Jubail airport or industrial city transfer?",
                            shortAnswer: "Yes, it regularly serves Jubail.",
                            detailedAnswer: "The Toyota Veloz 2024 covers Jubail and Jubail Industrial City transfers, including staff pickups and airport runs, from its Dammam base.",
                            perspectives: [
                                { role: 'Driver Ahmed', icon: 'User', insight: 'Jubail runs are quickest via the coastal road early morning.' }
                            ]
                        },
                        {
                            question: "How many passengers and bags does the Veloz fit?",
                            shortAnswer: "Up to 7 passengers, 4 large bags.",
                            detailedAnswer: "As a 7-seat MPV, the Toyota Veloz 2024 comfortably fits small families or groups along with 4 large suitcases, making it a strong option for Umrah trips from Dammam.",
                            perspectives: [
                                { role: 'Driver Ibrahim', icon: 'User', insight: 'For 4+ large bags, the third row seat count is best kept to 5 passengers.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="Dammam" />

            <div className="bg-emerald-950 py-32 text-center px-4 relative overflow-hidden rounded-[5rem] mx-4 mb-16 shadow-2xl border border-emerald-500/10">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">EASTERN <br /> <span className="text-emerald-500">PROVINCE READY</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Book the new Toyota Veloz 2024 for your next Dammam, Jubail, or Bahrain transfer today.</p>
                    <Link href="/booking/?vehicle=Toyota-Veloz-2024">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK VELOZ
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
