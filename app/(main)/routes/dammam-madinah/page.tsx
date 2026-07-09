import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Dammam to Madinah Taxi | Private Ziyarat Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Dammam to Madinah for Ziyarat or a family visit. Door-to-door long-distance transfers in a comfortable GMC or Staria. Fixed rates, professional drivers.',
    keywords: ['Taxi Dammam to Madinah', 'Dammam to Madinah Ziyarat taxi', 'Khobar to Madinah taxi', 'Dammam to Madinah transfer', 'Eastern Province to Madinah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-madinah/',
    },
    openGraph: {
        title: 'Private Taxi: Dammam to Madinah | Taxi Service KSA',
        description: 'Cross-country transfer from Dammam to Madinah in a private, air-conditioned vehicle. Ideal for Ziyarat visitors and families.',
        url: 'https://taxiserviceksa.com/routes/dammam-madinah/',
        type: 'website',
    },
};

export default function DammamMadinahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/hero-slide-1.webp',
    ];

    const routeDetails = [
        { label: 'Distance', value: '~950 km', icon: MapPin },
        { label: 'Duration', value: '9 - 10 Hours', icon: Clock },
        { label: 'Vehicle', value: 'GMC Yukon / Staria', icon: Car },
        { label: 'Capacity', value: 'Up to 7 Passengers', icon: Users },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam to Madinah"
                description="Private long-distance taxi service from Dammam to Madinah for Ziyarat and family visits. Reliable door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam to Madinah Taxi', description: 'Premium cross-country private transfer with guaranteed fixed rates.' },
                    { name: 'Ziyarat Transfer', description: 'Direct transfer to the Prophet’s Mosque area for visitors travelling from the Eastern Province.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Hotel Drop-off', description: 'Direct drop-off at any hotel in the Central Zone near Al-Masjid an-Nabawi.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={images}
                h1Text="Dammam to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Direct Private Transfer for Ziyarat & Family Travel
                    </span>
                }
                subtitle="Eastern Province to the City of the Prophet | 9-10 Hours | 100% Private VIP"
                location="Door-to-Door Private Service - Your Schedule, Your Comfort"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Route (Route Rate)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate Contract
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {routeDetails.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-2 p-4">
                            <item.icon className="w-7 h-7 text-primary" />
                            <span className="font-bold text-gray-900 text-lg">{item.value}</span>
                            <span className="text-sm text-gray-500">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">City-to-City</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Dammam to Madinah: The Shortest Cross-Country Route
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Madinah is the closest of the two holy cities to the Eastern Province, making the drive noticeably shorter than the Makkah or Jeddah crossing. Many families and Ziyarat visitors travel this route directly rather than flying, especially when heading onward to Makkah afterwards.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We route the drive with planned prayer and rest breaks along the highway. Every trip is a private booking — just your family or group in a clean, air-conditioned GMC Yukon or Hyundai Staria, with a direct drop-off near Al-Masjid an-Nabawi.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Shortest KSA Crossing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Ample Luggage Space</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family & Group Travel</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rate</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Route Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct to the Mosque</h4>
                                        <p className="text-sm text-gray-500">Pick up anywhere in Dammam, Khobar, or Dhahran, drop off at your hotel in the Central Zone near Al-Masjid an-Nabawi.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Planned Rest Stops</h4>
                                        <p className="text-sm text-gray-500">Regular breaks at highway service stations for prayer, food, and fuel throughout the drive.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Onward to Makkah</h4>
                                        <p className="text-sm text-gray-500">Many pilgrims combine this with a Madinah-Makkah leg afterwards — ask us about a combined itinerary.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Dammam to Madinah"
                        points={[
                            {
                                topic: "Flying vs Driving",
                                commonBelief: "Flying is always faster for this distance.",
                                reality: "A direct flight is under 2 hours, but for families and groups, a private car at 9-10 hours means no airport transfers, no check-in queues, and no baggage handling — often similar in total effort for a comfortable overnight or day drive.",
                                truthRange: "Depends on Group Size",
                                factors: ["Group Size", "Luggage", "No Transfers"]
                            },
                            {
                                topic: "Is Madinah closer than Makkah?",
                                commonBelief: "All holy city routes take about the same time.",
                                reality: "Madinah is roughly 300km closer to Dammam than Makkah is, thanks to a more direct highway corridor, cutting 3-4 hours off the total drive time.",
                                truthRange: "Yes, Noticeably Shorter",
                                factors: ["Highway Route", "Distance"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Get a quote for your Dammam to Madinah Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;The preferred choice for Ziyarat visitors and families seeking total privacy on the journey to the Prophet&apos;s Mosque.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=dammam-madinah">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                Reserve Private Car
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Dammam to Madinah?",
                        shortAnswer: "9 - 10 Hours",
                        detailedAnswer: "The distance is approximately 950km. In a private car with normal rest stops, the drive takes about 9 to 10 hours.",
                        perspectives: []
                    },
                    {
                        question: "Is Madinah closer to Dammam than Makkah?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, Madinah is roughly 300km closer to Dammam than Makkah, so the drive is about 3-4 hours shorter.",
                        perspectives: []
                    },
                    {
                        question: "Do you drop off near the Prophet's Mosque?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we drop off directly at your hotel in the Central Zone near Al-Masjid an-Nabawi, or anywhere else in Madinah.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up from Al Khobar too?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province including Al Khobar, Dammam, and Dhahran for the Madinah route.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
