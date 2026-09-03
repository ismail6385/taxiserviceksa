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
    title: 'Private Car, Taxi and Chauffeur Service from Riffa to Dammam Airport | Taxi Service KSA',
    description: 'Book a private taxi from Riffa, Bahrain to Dammam Airport via King Fahd Causeway. Pickup from home, hotel, or office. Fixed rates, door-to-door, 24/7.',
    keywords: ['Riffa to Dammam Airport taxi', 'Riffa to Saudi Airport taxi', 'King Fahd Causeway Riffa to Dammam', 'Riffa to Eastern Province transfer', 'Riffa to Dammam Airport car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riffa-to-dammam-airport-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Car, Taxi and Chauffeur Service from Riffa to Dammam Airport | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Private Car, Taxi and Chauffeur Service from Riffa to Dammam Airport | Taxi Service KSA',
        description: 'Private transfer from Riffa, Bahrain to Dammam Airport via King Fahd Causeway.',
        url: 'https://taxiserviceksa.com/routes/riffa-to-dammam-airport-taxi/',
        type: 'website',
    },
};

export default function RiffaToDammamAirportTaxiPage() {
    const routeDetails = [
        { label: 'Distance', value: '~90 km', icon: MapPin },
        { label: 'Travel Time', value: '1.75-2.25 Hours', icon: Clock },
        { label: 'Route', value: 'King Fahd Causeway', icon: Car },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Riffa to Dammam Airport"
                description="Professional private car service from Riffa, Bahrain to Dammam Airport via King Fahd Causeway. Reliable 24/7 door-to-door transfers."
                services={[
                    { name: 'Riffa to Dammam Airport Taxi', description: 'Private transfer from Bahrain\'s second-largest city via the causeway.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business travellers departing Riffa.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles for families with luggage.' },
                    { name: 'Home & Hotel Pickups', description: 'Pickup from your Riffa home, hotel, or office.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-1.webp', '/gmc-yukon.webp', '/hero-slide-2.webp']}
                h1Text="Private Car, Taxi and Chauffeur Service from Riffa to Dammam Airport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        King Fahd Causeway Route
                    </span>
                }
                subtitle="Direct Transfer to King Fahd International Airport"
                location="Door-to-Door | Business & Leisure | 24/7"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riffa&dropoff=Dammam%20Airport">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Riffa to Dammam Airport Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966590209905">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        NOTE: Passengers must carry a valid passport/ID for the Bahrain-Saudi border crossing at King Fahd Causeway.
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
                                Riffa to Dammam Airport for Your Flight
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>Riffa</strong> sits further inland than Manama, so the drive to Dammam Airport continues a little past the capital once you cross the causeway. Our private taxi collects you directly from your Riffa home, hotel, or office, handles the King Fahd Causeway crossing, and drops you at the Dammam Airport departures terminal in good time for your flight.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This route is a comfortable option for Riffa residents and families flying out via King Fahd International Airport (DMM), avoiding the need to self-drive and park at a Bahrain airport.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Home className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Residential Pickup</span>
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
                                        <h4 className="font-bold text-gray-900">Pickup in Riffa</h4>
                                        <p className="text-sm text-gray-500">Your driver collects you from your home, hotel, or office in Riffa.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Fahd Causeway</h4>
                                        <p className="text-sm text-gray-500">Cross the 25km causeway connecting Bahrain Island to Saudi Arabia.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off at Dammam Airport</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at the King Fahd International Airport departures terminal.</p>
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
                        Other Bahrain to Dammam Airport Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/bahrain-airport-to-dammam-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Bahrain Airport to Dammam Airport
                        </Link>
                        <Link href="/routes/manama-to-dammam-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Manama to Dammam Airport
                        </Link>
                        <Link href="/routes/muharraq-to-dammam-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Muharraq to Dammam Airport
                        </Link>
                        <Link href="/routes/amwaj-islands-to-dammam-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Amwaj Islands to Dammam Airport
                        </Link>
                        <Link href="/routes/dammam-airport-to-riffa-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Riffa
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                contextName="Riffa to Dammam Airport"
                faqs={[
                    {
                        question: 'How much is a taxi from Riffa to Dammam Airport?',
                        shortAnswer: 'WhatsApp Booking',
                        detailedAnswer: 'A private sedan (like a Toyota Camry) or SUV (like a GMC Yukon) is available at a fixed rate for the Riffa to Dammam Airport route. Contact us on WhatsApp for a fixed quote based on your vehicle and group size.',
                        perspectives: [],
                    },
                    {
                        question: 'How long does the drive from Riffa to Dammam Airport take?',
                        shortAnswer: '1.75-2.25 Hours',
                        detailedAnswer: 'The journey covers approximately 90 kilometers, including the drive from Riffa to the causeway, the 25km King Fahd Causeway crossing, and the drive on to Dammam Airport. Total time is usually 1.75 to 2.25 hours depending on border processing.',
                        perspectives: [],
                    },
                    {
                        question: 'Can you pick us up from home in Riffa?',
                        shortAnswer: 'Yes, door-to-door',
                        detailedAnswer: 'Yes, our service is door-to-door. Give us your exact home, hotel, or office address in Riffa and we will collect you there directly, timed for your flight.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Riffa to Dammam Airport Taxi
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        The easiest way to cross the causeway for your flight — private, comfortable, and on your schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?pickup=Riffa&dropoff=Dammam%20Airport">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
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
