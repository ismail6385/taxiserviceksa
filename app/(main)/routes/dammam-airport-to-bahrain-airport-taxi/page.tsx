import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Dammam Airport to Bahrain Airport Taxi | King Fahd Causeway Transfer | Taxi Service KSA',
    description: 'Book a private taxi from King Fahd International Airport (Dammam) direct to Bahrain International Airport via King Fahd Causeway. Fixed rates, door-to-door, 24/7.',
    keywords: ['Dammam Airport to Bahrain Airport taxi', 'DMM to BAH taxi', 'King Fahd Airport to Bahrain Airport', 'Dammam Airport Bahrain transfer', 'Saudi Bahrain airport taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-airport-to-bahrain-airport-taxi/',
    },
    openGraph: {
        title: 'Dammam Airport to Bahrain Airport Taxi | Fixed Price Transfer | Taxi Service KSA',
        description: 'Direct private transfer from King Fahd International Airport (DMM) to Bahrain International Airport (BAH) via the causeway.',
        url: 'https://taxiserviceksa.com/routes/dammam-airport-to-bahrain-airport-taxi/',
        type: 'website',
    },
};

export default function DammamAirportToBahrainAirportTaxiPage() {
    const routeDetails = [
        { label: 'Distance', value: '~95 km', icon: MapPin },
        { label: 'Travel Time', value: '1.5-2 Hours', icon: Clock },
        { label: 'Route', value: 'King Fahd Causeway', icon: Car },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam Airport to Bahrain Airport"
                description="Professional VIP private car service from King Fahd International Airport (Dammam) to Bahrain International Airport via King Fahd Causeway."
                services={[
                    { name: 'Dammam Airport to Bahrain Airport Taxi', description: 'Direct airport-to-airport transfer via the causeway.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business travellers.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles for families with luggage.' },
                    { name: 'Flight Connection Transfers', description: 'For travellers connecting between DMM and BAH airports.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-1.webp', '/gmc-yukon.webp', '/hero-slide-3.webp']}
                h1Text="Dammam Airport to Bahrain Airport Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Airport-to-Airport Transfer
                    </span>
                }
                subtitle="King Fahd International Airport (DMM) → Bahrain International Airport (BAH)"
                location="Via King Fahd Causeway | 1.5-2 Hours | 24/7"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Bahrain%20Airport">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Airport Transfer
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
                        NOTE: Passengers must carry a valid passport/ID for the Saudi-Bahrain border crossing at King Fahd Causeway.
                    </p>
                </div>
            </div>

            {/* Route Stats */}
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
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Airport-to-Airport Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Why Book Airport-to-Airport Instead of a City Transfer?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                There is no direct flight between Dammam and Bahrain, so travellers connecting through the Eastern Province often prefer to drive the causeway rather than book an indirect flight. Our <strong>Dammam Airport to Bahrain Airport taxi</strong> picks you up straight from the King Fahd International Airport (DMM) arrivals hall and drops you directly at the Bahrain International Airport (BAH) terminal — no detour through the city required.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This is a popular option for business travellers with tight connections, families flying into one airport and out of the other, and anyone who prefers a private, fixed-price alternative to a layover flight.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Plane className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Flight Tracking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family & Business</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Direct to Terminal</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rate</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Journey</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Pickup at DMM Arrivals</h4>
                                        <p className="text-sm text-gray-500">Your driver tracks your flight and meets you at King Fahd International Airport arrivals.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Fahd Causeway</h4>
                                        <p className="text-sm text-gray-500">A comfortable drive south past Dammam and Al Khobar, then across the 25km causeway into Bahrain.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off at BAH Terminal</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at the Bahrain International Airport departures terminal on Muharraq island.</p>
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
                        Other Dammam to Bahrain Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-manama-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Manama
                        </Link>
                        <Link href="/routes/dammam-airport-to-muharraq-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Muharraq
                        </Link>
                        <Link href="/routes/dammam-airport-to-riffa-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Riffa
                        </Link>
                        <Link href="/routes/dammam-airport-to-amwaj-islands-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Amwaj Islands
                        </Link>
                        <Link href="/routes/khobar-bahrain/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Al Khobar to Bahrain
                        </Link>
                        <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            King Fahd Causeway Border Info
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                contextName="Dammam Airport to Bahrain Airport"
                faqs={[
                    {
                        question: 'How much is a taxi from Dammam Airport to Bahrain Airport?',
                        shortAnswer: 'WhatsApp Booking',
                        detailedAnswer: 'A private sedan (like a Toyota Camry) or VIP SUV (like a GMC Yukon) is available at a fixed rate for the Dammam Airport to Bahrain Airport route. Contact us on WhatsApp for a fixed quote based on your vehicle and group size.',
                        perspectives: [],
                    },
                    {
                        question: 'How long does it take from King Fahd International Airport to Bahrain International Airport?',
                        shortAnswer: '1.5-2 Hours',
                        detailedAnswer: 'The journey covers approximately 95 kilometers, including the drive to the causeway, the 25km King Fahd Causeway crossing, and the drive on to the Bahrain airport terminal. Total time is usually 1.5 to 2 hours depending on border processing.',
                        perspectives: [],
                    },
                    {
                        question: 'Do I need a visa or passport for this route?',
                        shortAnswer: 'Yes, valid ID required',
                        detailedAnswer: 'GCC nationals and residents can cross with a valid GCC ID. Other nationalities should check Bahrain visa requirements before travel — a valid passport is required for everyone crossing King Fahd Causeway.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dammam to Bahrain Airport Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Skip the layover flight — a direct, private transfer between the two airports.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?pickup=Dammam%20Airport&dropoff=Bahrain%20Airport">
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
