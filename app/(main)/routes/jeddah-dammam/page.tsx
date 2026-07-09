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
    title: 'Jeddah to Dammam Taxi | Cross-Country Private Transfers | Taxi Service KSA',
    description: 'Book a private taxi from Jeddah to Dammam. Door-to-door long-distance transfers across Saudi Arabia in a comfortable GMC or Staria. Fixed rates, professional drivers.',
    keywords: ['Taxi Jeddah to Dammam', 'Jeddah to Dammam car', 'Jeddah to Khobar taxi', 'Jeddah to Dammam transfer', 'Red Sea to Eastern Province taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-dammam/',
    },
    openGraph: {
        title: 'Private Taxi: Jeddah to Dammam | Taxi Service KSA',
        description: 'Cross-country transfer from Jeddah to Dammam in a private, air-conditioned vehicle. Overnight and multi-stop options available.',
        url: 'https://taxiserviceksa.com/routes/jeddah-dammam/',
        type: 'website',
    },
};

export default function JeddahDammamRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
    ];

    const routeDetails = [
        { label: 'Distance', value: '~1,300 km', icon: MapPin },
        { label: 'Duration', value: '13 - 14 Hours', icon: Clock },
        { label: 'Vehicle', value: 'GMC Yukon / Staria', icon: Car },
        { label: 'Capacity', value: 'Up to 7 Passengers', icon: Users },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Jeddah to Dammam"
                description="Private long-distance taxi service from Jeddah to Dammam. Reliable door-to-door transfers with luxury vehicles and professional chauffeurs, coast to coast."
                services={[
                    { name: 'Jeddah to Dammam Taxi', description: 'Premium cross-country private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for long-distance business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport Transfers', description: 'Direct pickups from Jeddah King Abdulaziz International Airport and drop-offs across Dammam / Khobar.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={images}
                h1Text="Jeddah to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Coast to Coast, Private & Direct
                    </span>
                }
                subtitle="Red Sea to the Eastern Province | 13-14 Hours | 100% Private VIP"
                location="Door-to-Door Private Service - Your Schedule, Your Comfort"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah&dropoff=Dammam">
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
                                Jeddah to Dammam: The Full Saudi Crossing
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Jeddah to Dammam is one of the longest domestic routes in the Kingdom, crossing the peninsula from the Red Sea coast to the Arabian Gulf. Most travellers fly this route, but for families, groups with heavy luggage, or anyone who prefers a private overland journey, a chauffeured car is a comfortable alternative.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our drivers run this corridor regularly, with planned rest stops along the highway. You can also split the trip with an overnight stop if preferred. No shared seats, no fixed departure times — just a private GMC Yukon or Hyundai Staria at your schedule.
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
                                    <span className="font-semibold text-gray-800">Group Travel</span>
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
                                        <h4 className="font-bold text-gray-900">Door-to-Door</h4>
                                        <p className="text-sm text-gray-500">Pick up anywhere in Jeddah including the airport or Corniche, drop off anywhere in Dammam, Khobar, or Dhahran.</p>
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
                                        <p className="text-sm text-gray-500">Leave at any hour that suits you — day or night departures both available.</p>
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
                        contextName="Jeddah to Dammam"
                        points={[
                            {
                                topic: "Flying vs Driving",
                                commonBelief: "Flying is always faster for this distance.",
                                reality: "A direct flight is around 2 hours, but for groups of 4+ with luggage, a private car often works out similar in total door-to-door time once you add airport transfers on both ends, and it's far more comfortable for long-haul family trips.",
                                truthRange: "Depends on Group Size",
                                factors: ["Group Size", "Luggage", "Budget"]
                            },
                            {
                                topic: "Is it a long drive?",
                                commonBelief: "13+ hours sounds exhausting.",
                                reality: "Most clients split the journey with a rest stop, or travel overnight so passengers sleep through most of the drive. The highway is well-maintained with frequent service stations.",
                                truthRange: "Manageable with Breaks",
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
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Get a quote for your Jeddah to Dammam Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;The preferred choice for business travellers and families seeking total privacy on the coast-to-coast crossing.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=jeddah-dammam">
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
                <RelatedLocations currentCity="Jeddah" />
                <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Jeddah to Dammam?",
                        shortAnswer: "13 - 14 Hours",
                        detailedAnswer: "The distance is approximately 1,300km. In a private car with normal rest stops, the crossing takes about 13 to 14 hours.",
                        perspectives: []
                    },
                    {
                        question: "Can we stop overnight along the way?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, many clients choose to break the journey with an overnight hotel stop. Let us know when booking and we can plan the route around your preferred stop.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up from Jeddah Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can pick you up directly from King Abdulaziz International Airport (JED) in Jeddah, or any hotel, office, or residence in the city.",
                        perspectives: []
                    },
                    {
                        question: "Do you drop off at Al Khobar too?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province including Al Khobar, Dammam, and Dhahran for the Jeddah route.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
