import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Al Khobar to Bahrain Taxi | King Fahd Causeway Transfer | Taxi Service KSA',
    description: 'Request a quote for a private taxi from Al Khobar to Bahrain via King Fahd Causeway. Door-to-door luxury transfers. Fixed rates, no hidden fees.',
    keywords: ['Al Khobar to Bahrain taxi', 'Khobar to Bahrain car', 'King Fahd Causeway taxi', 'Dammam to Bahrain taxi', 'Eastern Province to Bahrain transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/khobar-bahrain/',
    },
    openGraph: {
        title: 'Al Khobar to Bahrain Taxi | King Fahd Causeway | Taxi Service KSA',
        description: 'Travel from Al Khobar or Dammam to Bahrain via King Fahd Causeway. Comfortable private VIP transfers with fixed rates.',
        url: 'https://taxiserviceksa.com/routes/khobar-bahrain/',
        type: 'website',
    },
};

export default function KhobarBahrainRoutePage() {
    const images = [
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Al Khobar to Bahrain"
                description="Professional VIP private car service from Al Khobar to Bahrain via King Fahd Causeway. Reliable 24/7 door-to-door transfers with luxury vehicles."
                services={[
                    { name: 'Al Khobar to Bahrain Taxi', description: 'Premium private transfer via King Fahd Causeway.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Pickups from Bahrain Airport and all major hotels.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Al Khobar to Bahrain Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        King Fahd Causeway Route
                    </span>
                }
                subtitle="Daily Transfers via Causeway | 1.5 Hours | 100% Private VIP"
                location="Door-to-Door Private Service - Khobar to Manama"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Al%20Khobar&dropoff=Bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Route (Route Rate)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate Contract
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        NOTE: Passengers must carry valid travel documents (passport/ID) for Bahrain border crossing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Cross-Border Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Al Khobar to Bahrain: The Fastest Route
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The King Fahd Causeway connecting Saudi Arabia and Bahrain is one of the world's longest causeways at 25km. The journey from Al Khobar to Manama, Bahrain takes approximately 1.5 hours depending on border wait times.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private taxi service picks you up from your Al Khobar or Dammam location, handles the border crossing, and drops you at your Bahrain hotel or office. No shared rides, no delays.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">1.5 Hours</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Business Travel</span>
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
                                        <h4 className="font-bold text-gray-900">Pickup from Khobar/Dammam</h4>
                                        <p className="text-sm text-gray-500">We pick you up from your home, hotel, or office in Al Khobar or Dammam.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Fahd Causeway</h4>
                                        <p className="text-sm text-gray-500">Cross the 25km causeway connecting Saudi Arabia to Bahrain Island.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off in Manama</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off to your Bahrain hotel, office, or Bahrain Airport (BAH).</p>
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
                        contextName="Khobar to Bahrain"
                        points={[
                            {
                                topic: "Driving vs Flying",
                                commonBelief: "Flying to Bahrain is easier.",
                                reality: "There is no direct flight from Khobar. You would need to go to Dammam airport. The causeway drive is 1.5 hours door-to-door.",
                                truthRange: "Driving is Faster",
                                factors: ["No Airport Needed", "Door-to-Door"]
                            },
                            {
                                topic: "Shared Taxis",
                                commonBelief: "Shared taxis are cheaper.",
                                reality: "Shared taxis require waiting and multiple stops. Our private service leaves on your schedule with zero delays.",
                                truthRange: "Private is Better",
                                factors: ["Schedule", "Privacy"]
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
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Get a quote for your Al Khobar to Bahrain Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">"The easiest way to cross the causeway — private, comfortable, and on your schedule."</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=khobar-bahrain">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                Reserve Private Car
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al Khobar" />
                <RelatedRoutes originSlug="khobar" currentSlug="khobar-bahrain" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Al Khobar to Bahrain?",
                        shortAnswer: "1.5 Hours",
                        detailedAnswer: "The distance via King Fahd Causeway is approximately 60km. The journey takes about 1 to 1.5 hours depending on border wait times.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a visa for Bahrain from Saudi Arabia?",
                        shortAnswer: "GCC Nationals - No",
                        detailedAnswer: "GCC nationals and residents can cross the causeway with a valid ID. Other nationalities may need a Bahrain visa. Please check requirements before travel.",
                        perspectives: []
                    },
                    {
                        question: "Do you also pick up from Dammam and Dhahran?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province — Al Khobar, Dammam, and Dhahran — for the Bahrain causeway route.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
