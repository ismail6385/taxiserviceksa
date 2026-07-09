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
    title: 'Makkah to Dammam Taxi | Private Post-Umrah Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Makkah to Dammam after your Umrah or family visit. Door-to-door long-distance transfers in a comfortable GMC or Staria. Fixed rates, professional drivers.',
    keywords: ['Taxi Makkah to Dammam', 'Makkah to Dammam taxi', 'Makkah to Khobar taxi', 'Makkah to Dammam transfer', 'Makkah to Eastern Province taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-dammam/',
    },
    openGraph: {
        title: 'Private Taxi: Makkah to Dammam | Taxi Service KSA',
        description: 'Cross-country transfer from Makkah to Dammam in a private, air-conditioned vehicle. Ideal for pilgrims and families heading home.',
        url: 'https://taxiserviceksa.com/routes/makkah-dammam/',
        type: 'website',
    },
};

export default function MakkahDammamRoutePage() {
    const images = [
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
        '/hero-slide-1.webp',
    ];

    const routeDetails = [
        { label: 'Distance', value: '~1,250 km', icon: MapPin },
        { label: 'Duration', value: '12 - 13 Hours', icon: Clock },
        { label: 'Vehicle', value: 'GMC Yukon / Staria', icon: Car },
        { label: 'Capacity', value: 'Up to 7 Passengers', icon: Users },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Makkah to Dammam"
                description="Private long-distance taxi service from Makkah to Dammam for pilgrims and families heading back to the Eastern Province. Reliable door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Makkah to Dammam Taxi', description: 'Premium cross-country private transfer with guaranteed fixed rates.' },
                    { name: 'Post-Umrah Transfer', description: 'Direct pickup from your hotel near the Haram after completing Umrah.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Home Drop-off', description: 'Direct drop-off anywhere in Dammam, Khobar, or Dhahran.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-2.webp"
            />

            <Hero
                images={images}
                h1Text="Makkah to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Direct Private Transfer After Umrah & Family Travel
                    </span>
                }
                subtitle="Holy City to the Eastern Province | 12-13 Hours | 100% Private VIP"
                location="Door-to-Door Private Service - Your Schedule, Your Comfort"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Makkah&dropoff=Dammam">
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
                                Makkah to Dammam: A Comfortable Journey Home
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                After completing Umrah or a family visit in Makkah, many travellers from the Eastern Province prefer a direct private car back to Dammam rather than a connecting flight through Jeddah. It means no airport transfers, no layovers — just a straight door-to-door ride home.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We route the drive with planned prayer and rest breaks, and can arrange an overnight stop if you prefer. Every trip is a private booking — just your family or group in a clean, air-conditioned GMC Yukon or Hyundai Staria.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Overnight Option</span>
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
                                        <h4 className="font-bold text-gray-900">Pickup Near the Haram</h4>
                                        <p className="text-sm text-gray-500">Pick up from your hotel near the Haram or in Aziziyah, drop off anywhere in Dammam, Khobar, or Dhahran.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Planned Rest Stops</h4>
                                        <p className="text-sm text-gray-500">Regular breaks at highway service stations for prayer, food, and fuel throughout the crossing.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Flexible Departure</h4>
                                        <p className="text-sm text-gray-500">Leave at any hour that suits you — day or night departures both available after your rituals are complete.</p>
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
                        contextName="Makkah to Dammam"
                        points={[
                            {
                                topic: "Flying vs Driving",
                                commonBelief: "Flying via Jeddah is always faster.",
                                reality: "The transfer to Jeddah airport plus the flight often takes 4-5 hours door to door once you add check-in and baggage. A private direct car is around 12-13 hours but with zero transfers, ideal right after Umrah when you just want to rest.",
                                truthRange: "Depends on Priorities",
                                factors: ["No Transfers", "Comfort", "Group Size"]
                            },
                            {
                                topic: "Is it a long drive after Umrah?",
                                commonBelief: "12+ hours is exhausting after the rituals.",
                                reality: "Most travellers rest in the car during the drive, especially on an overnight departure. Prayer breaks are built into the schedule so it's a relaxed way to head home.",
                                truthRange: "Manageable with Overnight Travel",
                                factors: ["Rest Stops", "Overnight Travel"]
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
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Get a quote for your Makkah to Dammam Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;The preferred choice for pilgrims and families seeking total privacy on the journey home.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=makkah-dammam">
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
                <RelatedLocations currentCity="Makkah" />
                <RelatedRoutes originSlug="makkah" currentSlug="makkah-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Makkah to Dammam?",
                        shortAnswer: "12 - 13 Hours",
                        detailedAnswer: "The distance is approximately 1,250km. In a private car with normal rest stops, the crossing takes about 12 to 13 hours.",
                        perspectives: []
                    },
                    {
                        question: "Can we stop overnight along the way?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, many clients choose to travel overnight or break the journey with a hotel stop. Let us know when booking and we can plan the route around your preferred stop.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up near the Haram?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we pick up directly from your hotel near the Haram or anywhere else in Makkah, including Aziziyah and the outskirts.",
                        perspectives: []
                    },
                    {
                        question: "Do you drop off in Al Khobar too?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province including Al Khobar, Dammam, and Dhahran for the Dammam-bound route.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
