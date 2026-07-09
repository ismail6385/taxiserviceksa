import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Al Khobar to Kuwait Taxi | Nuwaiseeb Border Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Al Khobar to Kuwait via the Nuwaiseeb border crossing. Door-to-door luxury transfers, fixed rates, no hidden fees.',
    keywords: ['Al Khobar to Kuwait taxi', 'Khobar to Kuwait car', 'Nuwaiseeb border taxi', 'Dammam to Kuwait taxi', 'Eastern Province to Kuwait transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/khobar-to-kuwait-taxi/',
    },
    openGraph: {
        title: 'Al Khobar to Kuwait Taxi | Nuwaiseeb Border | Taxi Service KSA',
        description: 'Travel from Al Khobar or Dammam to Kuwait via the Nuwaiseeb border. Comfortable private VIP transfers with fixed rates.',
        url: 'https://taxiserviceksa.com/routes/khobar-to-kuwait-taxi/',
        type: 'website',
    },
};

export default function KhobarToKuwaitTaxiPage() {
    const routeDetails = [
        { label: 'Distance', value: '~420 km', icon: MapPin },
        { label: 'Travel Time', value: '4.5-5.25 Hours', icon: Clock },
        { label: 'Route', value: 'Nuwaiseeb Border', icon: Car },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Al Khobar to Kuwait"
                description="Professional VIP private car service from Al Khobar to Kuwait via the Nuwaiseeb border. Reliable 24/7 door-to-door transfers with luxury vehicles."
                services={[
                    { name: 'Al Khobar to Kuwait Taxi', description: 'Premium private transfer via the Nuwaiseeb border.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Pickups from Kuwait Airport and all major hotels.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-1.webp', '/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Al Khobar to Kuwait Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Nuwaiseeb Border Route
                    </span>
                }
                subtitle="Daily Transfers via the Border | 4.5-5.25 Hours | 100% Private VIP"
                location="Door-to-Door Private Service - Khobar to Kuwait"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Al%20Khobar&dropoff=Kuwait">
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
                        NOTE: Passengers must carry valid travel documents (passport/Kuwait visa) for the Nuwaiseeb border crossing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Cross-Border Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Al Khobar to Kuwait: The Direct Route
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Unlike the Bahrain causeway, there&apos;s no direct crossing at Khobar itself — the journey heads north along the coastal highway, past Dammam and Khafji, to the Nuwaiseeb land border into Kuwait. The full journey covers approximately 420 kilometers and takes about 4.5 to 5.25 hours depending on border wait times.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private taxi service picks you up from your Al Khobar or Dammam location, handles the border crossing, and drops you at your Kuwait hotel or office. No shared rides, no delays.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">4.5-5.25 Hours</span>
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
                                        <h4 className="font-bold text-gray-900">Nuwaiseeb Border Crossing</h4>
                                        <p className="text-sm text-gray-500">A desert highway drive north past Khafji to the Nuwaiseeb land border into Kuwait.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off in Kuwait</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off to your Kuwait hotel, office, or the airport.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Specific Kuwait Destinations from the Eastern Province</h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-kuwait-city-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            Dammam Airport to Kuwait City
                        </Link>
                        <Link href="/routes/dammam-airport-to-salmiya-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            Dammam Airport to Salmiya
                        </Link>
                        <Link href="/routes/dammam-airport-to-hawally-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            Dammam Airport to Hawally
                        </Link>
                        <Link href="/routes/dammam-airport-to-fahaheel-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            Dammam Airport to Fahaheel
                        </Link>
                        <Link href="/routes/dammam-airport-to-jahra-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            Dammam Airport to Jahra
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al Khobar" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Al Khobar to Kuwait?",
                        shortAnswer: "4.5-5.25 Hours",
                        detailedAnswer: "The distance via the Nuwaiseeb border is approximately 420km. The journey takes about 4.5 to 5.25 hours depending on border wait times.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a visa for Kuwait from Saudi Arabia?",
                        shortAnswer: "GCC Nationals - No",
                        detailedAnswer: "GCC nationals and residents can cross the border with a valid ID. Other nationalities may need a Kuwait visa or e-visa. Please check requirements before travel.",
                        perspectives: []
                    },
                    {
                        question: "Do you also pick up from Dammam and Dhahran?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province — Al Khobar, Dammam, and Dhahran — for the Kuwait border route.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
