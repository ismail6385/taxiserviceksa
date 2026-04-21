import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, ArrowRight, MapPin, Shield, ShieldCheck, Globe, Clock, Car, DollarSign, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
    title: 'Border Crossing Taxi 2026 | Saudi Arabia VIP International Transfers',
    description: 'Professional cross-border taxi services for 2026. VIP transfers to Bahrain, UAE, Qatar, Kuwait, and Jordan. Fixed rates, GCC-licensed drivers, and premium SUVs.',
    keywords: ['Saudi border taxi 2026', 'King Fahd Causeway taxi', 'cross border taxi KSA', 'Salwa border transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/',
    },
};

const BORDER_CROSSINGS = [
    {
        name: 'King Fahd Causeway',
        to: 'Bahrain',
        slug: 'taxi-king-fahd-causeway-border-crossing',
        description: 'Connecting Al Khobar with Manama. The busiest border crossing for business and tourism.',
        highlights: ['Fast-track available', 'Door-to-door', '24/7 Service'],
        price: 'From 800 SAR'
    },
    {
        name: 'Salwa Border',
        to: 'Qatar',
        slug: 'taxi-salwa-border-crossing',
        description: 'Primary gateway between Saudi Arabia and Qatar. Ideal for family travel and business.',
        highlights: ['Direct to Doha', 'Hassle-free', 'Comfortable SUVs'],
        price: 'From 1200 SAR'
    },
    {
        name: 'Al Batha Border',
        to: 'UAE',
        slug: 'taxi-al-batha-border-crossing',
        description: 'Major transit point for travelers heading to Abu Dhabi and Dubai from Saudi Arabia.',
        highlights: ['Long-distance comfort', 'Reliable', 'Express Transit'],
        price: 'From 1500 SAR'
    },
    {
        name: 'Al Haditha Border',
        to: 'Jordan',
        slug: 'taxi-al-haditha-border-crossing',
        description: 'The main crossing for those traveling between KSA and Jordan (Amman).',
        highlights: ['Amman transfers', 'Border assistance', 'Safe & Secure'],
        price: 'From 1400 SAR'
    },
    {
        name: 'Khafji Border',
        to: 'Kuwait',
        slug: 'taxi-khafji-border-crossing',
        description: 'Popular crossing for travelers between Dammam/Jubail and Kuwait City.',
        highlights: ['Dammam to Kuwait', 'Quick crossing', 'Professional drivers'],
        price: 'From 900 SAR'
    }
];

export default function BorderCrossingsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero 
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="International Border Taxis"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 GCC Crossings
                    </span>
                }
                subtitle="Seamless Private VIP Transfers Across Borders"
                location="KSA → Bahrain, UAE, Qatar, Kuwait, Jordan"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?type=cross-border">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get Cross-Border Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            B2B Inquiry
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Last Updated: April 2026 • 2026 Rates Verified</p>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-6 p-4">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Shield className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-black text-gray-900 text-lg uppercase tracking-tighter italic">GCC Permits</h3>
                            <p className="text-xs text-gray-400 font-bold">100% Legal & Authorized</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-4 border-l border-gray-100">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Globe className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-black text-gray-900 text-lg uppercase tracking-tighter italic">5 Countries</h3>
                            <p className="text-xs text-gray-400 font-bold">Total Regional Coverage</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-4 border-l border-gray-100">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Clock className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-black text-gray-900 text-lg uppercase tracking-tighter italic">24/7 Pickup</h3>
                            <p className="text-xs text-gray-400 font-bold">Immediate Border Response</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display italic underline decoration-emerald-500 decoration-8 underline-offset-4">Major Border Gateways</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Select a border crossing to view 2026 rates, wait times, and meeting instructions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BORDER_CROSSINGS.map((crossing, index) => (
                        <Link key={index} href={`/border-crossings/${crossing.slug}/`} className="group">
                            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 hover:border-emerald-500 transition-all duration-500 shadow-sm hover:shadow-2xl h-full flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">{crossing.price}</div>
                                
                                <div className="flex items-start justify-between mb-8">
                                    <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                        <Navigation className="w-7 h-7" />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                        To {crossing.to}
                                    </span>
                                </div>
                                
                                <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                    {crossing.name}
                                </h2>
                                
                                <p className="text-gray-500 mb-8 flex-1 leading-relaxed italic">
                                    "{crossing.description}"
                                </p>

                                <div className="space-y-3 mb-10">
                                    {crossing.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-gray-900 font-black text-xs uppercase tracking-[0.2em] pt-8 border-t border-gray-50">
                                    <span>Details</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform text-emerald-500" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24">
                    <BookingProcess />
                </div>

                {/* Logistics Gap Filler Section */}
                <div className="bg-gray-900 rounded-[3.5rem] p-8 md:p-20 mt-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-6 inline-block">Professional Logistics</span>
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] italic">How We Handle International Transit</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                                Traveling across borders in the GCC requires precision. Unlike local apps, our cross-border taxi service handles the complexity of international permits, insurance, and customs protocols.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/10 p-3 rounded-xl text-emerald-400"><ShieldCheck className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Commercial Permits</h4>
                                        <p className="text-xs text-gray-500">Every car holds valid KSA and GCC crossing authorizations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/10 p-3 rounded-xl text-emerald-400"><DollarSign className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Transparent Tolls</h4>
                                        <p className="text-xs text-gray-500">Bridge and border fees are always included in your fixed quote.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-8">
                                <Info className="w-8 h-8 text-emerald-500" />
                                <h3 className="text-2xl font-black italic tracking-tighter uppercase">Border Advisory</h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-300 text-sm italic leading-relaxed">
                                    "Wait times at Salwa and Al Batha borders can vary significantly during weekend rushes. We recommend booking at least 12 hours in advance for international trips to ensure driver clearance."
                                </p>
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
                                    <p className="text-emerald-400 text-sm font-black leading-relaxed">
                                        All cross-border trips are door-to-door. We pick you up at your home/hotel and drop you directly at your international destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
