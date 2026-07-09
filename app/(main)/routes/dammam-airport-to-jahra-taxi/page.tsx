import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Home, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Dammam Airport to Jahra Taxi | Nuwaiseeb Border Transfer | Taxi Service KSA',
    description: 'Book a private taxi from King Fahd International Airport (Dammam) to Jahra, Kuwait via the Nuwaiseeb border. Fixed rates, door-to-door, 24/7.',
    keywords: ['Dammam Airport to Jahra taxi', 'DMM to Jahra taxi', 'Nuwaiseeb border Jahra', 'Dammam Airport Jahra transfer', 'Saudi Jahra taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-airport-to-jahra-taxi/',
    },
    openGraph: {
        title: 'Dammam Airport to Jahra Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct private transfer from King Fahd International Airport (DMM) to Jahra, Kuwait via the Nuwaiseeb border crossing.',
        url: 'https://taxiserviceksa.com/routes/dammam-airport-to-jahra-taxi/',
        type: 'website',
    },
};

export default function DammamAirportToJahraTaxiPage() {
    const routeDetails = [
        { label: 'Distance', value: '~450 km', icon: MapPin },
        { label: 'Travel Time', value: '4.75-5.5 Hours', icon: Clock },
        { label: 'Route', value: 'Nuwaiseeb Border', icon: Car },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam Airport to Jahra"
                description="Professional VIP private car service from Dammam Airport to Jahra, Kuwait via the Nuwaiseeb border. Reliable 24/7 door-to-door transfers."
                services={[
                    { name: 'Dammam Airport to Jahra Taxi', description: 'Private transfer to Jahra via the border.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and family travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles for families with luggage.' },
                    { name: 'Hotel & Residence Transfers', description: 'Direct drop-off at Jahra homes, hotels, or offices.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-1.webp', '/gmc-yukon.webp', '/hero-slide-2.webp']}
                h1Text="Dammam Airport to Jahra Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Nuwaiseeb Border Route
                    </span>
                }
                subtitle="Direct Transfer to Kuwait&apos;s Northwestern Governorate"
                location="Door-to-Door | Residential & Outskirts | 24/7"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Jahra">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Dammam Airport to Jahra Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        NOTE: Passengers must carry a valid passport and Kuwait visa/e-visa for the Nuwaiseeb border crossing.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Cross-Border Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Dammam Airport to Jahra: Kuwait&apos;s Northwest
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>Jahra</strong> is Kuwait&apos;s northwestern governorate, more residential and spread out than the coastal districts, and closer to the historic Red Fort (Jahra Fort). It sits a little further from the Nuwaiseeb border than Kuwait City itself.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private taxi service picks you up directly from King Fahd International Airport (DMM), handles the Nuwaiseeb border crossing, and drops you at your home, hotel, or office in Jahra.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Home className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Residential Area</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Trips</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
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
                                        <h4 className="font-bold text-gray-900">Pickup at Dammam Airport</h4>
                                        <p className="text-sm text-gray-500">Your driver tracks your flight and meets you at King Fahd International Airport (DMM) arrivals.</p>
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
                                        <h4 className="font-bold text-gray-900">Drop-off in Jahra</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at your Jahra home, hotel, or office, past Kuwait City.</p>
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
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        Other Dammam Airport to Kuwait Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-kuwait-city-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Kuwait City
                        </Link>
                        <Link href="/routes/dammam-airport-to-salmiya-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Salmiya
                        </Link>
                        <Link href="/routes/dammam-airport-to-hawally-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Hawally
                        </Link>
                        <Link href="/routes/dammam-airport-to-fahaheel-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Fahaheel
                        </Link>
                        <Link href="/routes/khobar-to-kuwait-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Al Khobar to Kuwait
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                contextName="Dammam Airport to Jahra"
                faqs={[
                    {
                        question: 'How much is a taxi from Dammam Airport to Jahra?',
                        shortAnswer: 'WhatsApp Booking',
                        detailedAnswer: 'A private sedan or VIP SUV (like a GMC Yukon) is available at a fixed rate for the Dammam Airport to Jahra route. Contact us on WhatsApp for a fixed quote based on your vehicle and group size.',
                        perspectives: [],
                    },
                    {
                        question: 'How long does the drive from Dammam Airport to Jahra take?',
                        shortAnswer: '4.75-5.5 Hours',
                        detailedAnswer: 'The journey covers approximately 450 kilometers via the Nuwaiseeb land border. Total time is usually 4.75 to 5.5 hours depending on border processing.',
                        perspectives: [],
                    },
                    {
                        question: 'Is Jahra far from Kuwait City?',
                        shortAnswer: 'About 30km further',
                        detailedAnswer: 'Jahra sits roughly 30km northwest of Kuwait City, so the drive from Dammam takes slightly longer than a trip straight to the capital. We can also route through Kuwait City first if you have stops to make.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dammam Airport to Jahra Taxi
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        A direct, private transfer from arrivals to Jahra — no rental car, no hassle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?pickup=Dammam%20Airport&dropoff=Jahra">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
