import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, Globe, ArrowRight, Info, AlertTriangle, DollarSign, Car, Navigation, Shield, Star, User, Compass } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import PricingTable from '@/components/PricingTable';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
    title: 'Taxi King Fahd Causeway Border Crossing 2026 | VIP Cross-Border',
    description: 'Book the best Taxi at King Fahd Causeway Border for 2026. Reliable VIP cross-border transfers between Saudi Arabia and Bahrain. Fixed rates and expert drivers.',
    keywords: ['Taxi King Fahd Causeway border crossing 2026', 'Saudi to Bahrain taxi price', 'cross border taxi KSA Bahrain'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/taxi-king-fahd-causeway-border-crossing/',
    },
};

export default function KingFahdCausewayBorderPage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const pricingRows = [
        { vehicle: 'VIP GMC Yukon XL', description: 'Most stable for the 400km Riyadh-Bahrain run.', price: '1200', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar. Door-to-door.', price: '800', capacity: '3 Pax', isPopular: false },
        { vehicle: 'Hyundai Staria VIP', description: 'Luxury van for larger groups.', price: '1000', capacity: '7 Pax', isPopular: false },
        { vehicle: 'VIP Sprinter', description: 'For corporate teams and big families.', price: '1800', capacity: '11 Pax', isPopular: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={images}
                h1Text="Taxi at King Fahd Causeway Border"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 VIP Cross-Border
                    </span>
                }
                subtitle="The Gold Standard for Saudi-Bahrain Transfers"
                location="Al Khobar / Dammam → Manama"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=saudi-bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Causeway Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Quote
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Last Updated: April 2026 • 2026 Rates Verified</p>
            </Hero>

            {/* Cross-Border Stats */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <Navigation className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Bridge Length</span>
                        <span className="text-lg font-black text-gray-900">25 km</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Avg. Wait</span>
                        <span className="text-lg font-black text-gray-900">30 - 90 Mins</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <Globe className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Service Type</span>
                        <span className="text-lg font-black text-gray-900">Door-to-Door</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Permits</span>
                        <span className="text-lg font-black text-gray-900">GCC Cleared</span>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display leading-tight italic">Premium Saudi-Bahrain Taxi Service</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Crossing the King Fahd Causeway requires more than just a car; it requires a driver with the correct commercial insurance, valid GCC permits, and a deep understanding of border protocols.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our <strong>King Fahd Causeway taxi service</strong> is optimized for business travelers and families who value their time. We don't just drop you at the border; we provide seamless transport from Riyadh, Dammam, or Al Khobar directly to your destination in Manama.
                        </p>
                        
                        <div className="space-y-4">
                            <EntityTrustSignal 
                                brandName="TaxiServiceKSA Causeway VIP"
                                description="Specialized cross-border fleet with 10+ years of bridge experience."
                                metrics={[
                                    { label: 'Weekly Crossings', value: '200+', icon: Navigation },
                                    { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 font-display italic underline decoration-emerald-500 decoration-4">Logistics & Fees</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Info className="w-6 h-6 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Bridge Tolls Included</h4>
                                    <p className="text-sm text-gray-500">Our quotes always include the King Fahd Causeway bridge toll fees. No extra cash needed at the booths.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Weekend Wait Times</h4>
                                    <p className="text-sm text-gray-500">On Thursdays and Saturdays, wait times can exceed 2 hours. Our drivers monitor live bridge traffic to choose the best departure windows.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                                <ShieldCheck className="w-6 h-6 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-emerald-900">Visa Requirements</h4>
                                    <p className="text-sm text-emerald-800">Please ensure all passengers have valid visas for both Saudi Arabia and Bahrain before booking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PricingTable 
                    title="2026 Cross-Border Rates"
                    subtitle="Fixed Rates for Riyadh/Dammam to Manama"
                    rows={pricingRows}
                    disclaimer="Rates are for door-to-door service. Includes tolls and fuel. Prices may vary slightly during public holidays in KSA or Bahrain."
                />

                <BookingProcess />

                <section className="py-16 bg-gray-900 rounded-[40px] p-8 md:p-16 my-20 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-4 inline-block">Wait Time Strategy</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight italic">How We Handle Causeway Congestion</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                The bridge can be unpredictable. Unlike city taxis that might cancel if they see a long queue, our VIP drivers are committed to your journey.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>Real-time traffic monitoring before pickup.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>Full-AC comfort during the entire wait.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>Expertise in customs & passport lane selection.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4">Did You Know?</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                The King Fahd Causeway is one of the most expensive bridges in the world to build, costing $1.2 Billion. It consists of two 12.5m wide roads and 5 bridges spanning the Arabian Gulf.
                            </p>
                            <div className="flex items-center gap-4 text-emerald-400 font-bold uppercase tracking-tighter text-xs">
                                <Car className="w-4 h-4" /> 25km of Engineering Excellence
                            </div>
                        </div>
                    </div>
                </section>

                <TravelConsensus
                    points={[
                        {
                            topic: "Crossing with Luggage",
                            commonBelief: "Customs check takes hours for luggage.",
                            reality: "For private VIP cars, the luggage check is usually swift unless you have restricted items. Our drivers assist with unloading/loading if a scan is required.",
                            truthRange: "10-15 Mins for Private Cars",
                            factors: ["Vehicle Type", "Passenger Profile"]
                        },
                        {
                            topic: "King Fahd Causeway vs Flying",
                            commonBelief: "Flying is always faster.",
                            reality: "By the time you reach DMM airport, check-in, fly 30 mins, and exit BAH airport, our car can often get you from Khobar to Manama center faster door-to-door.",
                            truthRange: "Car is Faster for Khobar/Dammam",
                            factors: ["Airport Logistics", "Wait Times"]
                        }
                    ]}
                />
            </section>

            <RoutePerspective 
                route="Saudi-Bahrain Causeway"
                perspectives={[
                    {
                        id: 'chauffeur-fahd',
                        targetAudience: 'Captain Fahd',
                        icon: User,
                        intent: 'Comfort & Professionalism',
                        description: 'I\'ve crossed this bridge over 5,000 times. The secret to a good crossing is knowing the rhythm of the customs officers and ensuring all passenger paperwork is ready at the window. I treat every 400km Riyadh-Bahrain run like a business class flight.',
                        structuredFeatures: [
                            { label: 'Bridge Experience', value: '12 Years' },
                            { label: 'Riyadh-Manama Runs', value: '1000+' },
                            { label: 'Vehicle', value: 'GMC Yukon 2026' }
                        ],
                        visualContext: 'The sunset over the King Fahd Causeway from the middle island.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <MicroSemanticFAQ
                    faqs={[
                        {
                            question: "How much is a taxi from Riyadh to Bahrain in 2026?",
                            shortAnswer: "From 800 - 1200 SAR",
                            detailedAnswer: "In 2026, a private sedan to Bahrain from Riyadh starts at 800 SAR, while our VIP GMC Yukon is 1200 SAR. This includes all bridge tolls and door-to-door service.",
                            perspectives: []
                        },
                        {
                            question: "Do I need to pay for the bridge toll separately?",
                            shortAnswer: "No, included.",
                            detailedAnswer: "Our quoted rates are fully inclusive. The driver handles the 25 SAR (approx) toll fee at the King Fahd Causeway booths.",
                            perspectives: []
                        }
                    ]}
                />
            </div>

            <RelatedLocations 
                currentCity="Al Khobar"
                customLinks={[
                    { name: 'Dammam to Riyadh', url: '/routes/dammam-riyadh/', description: 'Fast intercity transfer between the Eastern and Central regions.' },
                    { name: 'Khobar to Bahrain', url: '/routes/khobar-bahrain/', description: 'The shortest route to the island kingdom.' }
                ]}
            />
        </div>
    );
}
