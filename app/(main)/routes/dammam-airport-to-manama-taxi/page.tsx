import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight, Shield, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';

const pricingRows = [
    { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar. Door-to-door.', price: '400', capacity: '3 Pax' },
    { vehicle: 'Toyota Fortuner', description: 'Comfortable SUV for small groups and extra luggage.', price: '450', capacity: '5 Pax', isPopular: true },
    { vehicle: 'GMC Yukon', description: 'Spacious SUV for families and executive travel.', price: '600', capacity: '7 Pax' },
];

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Service from Dammam Airport to Manama | Taxi Service KSA',
    description: 'Book a private taxi from Dammam Airport to Manama, Bahrain via King Fahd Causeway. Door-to-door service to Bahrain\'s capital. Fixed rates, no hidden fees.',
    keywords: ['Dammam Airport to Manama taxi', 'Dammam Airport to Bahrain capital taxi', 'King Fahd Causeway Manama', 'Eastern Province to Manama transfer', 'Dammam Airport to Manama car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-airport-to-manama-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Car, Taxi and Chauffeur Service from Dammam Airport to Manama | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Private Car, Taxi and Chauffeur Service from Dammam Airport to Manama | Taxi Service KSA',
        description: 'Private transfer from Dammam Airport to Manama, the capital of Bahrain, via King Fahd Causeway.',
        url: 'https://taxiserviceksa.com/routes/dammam-airport-to-manama-taxi/',
        type: 'website',
    },
};

export default function DammamToManamaTaxiPage() {
    const routeDetails = [
        { label: 'Distance', value: '~75 km', icon: MapPin },
        { label: 'Travel Time', value: '1.5-2 Hours', icon: Clock },
        { label: 'Route', value: 'King Fahd Causeway', icon: Car },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam Airport to Manama"
                description="Professional private car service from Dammam Airport to Manama, Bahrain via King Fahd Causeway. Reliable 24/7 door-to-door transfers."
                services={[
                    { name: 'Dammam Airport to Manama Taxi', description: 'Private transfer to Bahrain\'s capital via the causeway.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business meetings in Manama.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles for families with luggage.' },
                    { name: 'Hotel & Airport Transfers', description: 'Drop-off at Manama hotels or Bahrain International Airport.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-1.webp', '/gmc-yukon.webp', '/hero-slide-2.webp']}
                h1Text="Private Car, Taxi and Chauffeur Service from Dammam Airport to Manama"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        King Fahd Causeway Route
                    </span>
                }
                subtitle="Direct Transfer to Bahrain&apos;s Capital"
                location="Door-to-Door | Business & Leisure | 24/7"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Manama">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Dammam Airport to Manama Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
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
                                Dammam Airport to Manama: Bahrain&apos;s Capital
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>Manama</strong> is Bahrain&apos;s capital and business hub, home to the financial district, Bahrain City Centre mall, the Seef district, and most of the island&apos;s major hotels. The journey from Dammam Airport covers the King Fahd Causeway, one of the world&apos;s longest causeways at 25km.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private taxi service picks you up directly from King Fahd International Airport (DMM), handles the causeway crossing, and drops you directly at your Manama hotel, office, or meeting point — no shared rides, no delays.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Business District</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Corporate Travel</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Trips</span>
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
                                        <h4 className="font-bold text-gray-900">King Fahd Causeway</h4>
                                        <p className="text-sm text-gray-500">Cross the 25km causeway connecting Saudi Arabia to Bahrain Island.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off in Manama</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off to your Manama hotel, office, or the Seef business district.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PricingTable
                    title="Fixed Rates: Dammam Airport to Manama"
                    subtitle="2026 Verified Rates"
                    rows={pricingRows}
                    disclaimer="Rates are for door-to-door service and include the King Fahd Causeway toll. Prices may vary slightly during public holidays in KSA or Bahrain."
                />
            </div>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        Other Dammam Airport to Bahrain Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-bahrain-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Bahrain Airport
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
                        <Link href="/routes/manama-to-dammam-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Manama to Dammam Airport (Return)
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                contextName="Dammam Airport to Manama"
                faqs={[
                    {
                        question: 'How much is a taxi from Dammam Airport to Manama?',
                        shortAnswer: 'From 400 SAR',
                        detailedAnswer: 'Fixed rates start at 400 SAR for a standard sedan (like a Toyota Camry), 450 SAR for a Toyota Fortuner, and 600 SAR for a GMC Yukon SUV — all inclusive of the King Fahd Causeway toll. Message us on WhatsApp to confirm your vehicle and book.',
                        perspectives: [],
                    },
                    {
                        question: 'How long does the drive from Dammam Airport to Manama take?',
                        shortAnswer: '1.5-2 Hours',
                        detailedAnswer: 'The journey covers approximately 75 kilometers, including the drive to the causeway, the 25km King Fahd Causeway crossing, and the drive on to Manama. Total time is usually 1.5 to 2 hours depending on border processing.',
                        perspectives: [],
                    },
                    {
                        question: 'Can you drop us at a specific hotel or office in Manama?',
                        shortAnswer: 'Yes, door-to-door',
                        detailedAnswer: 'Yes, our service is door-to-door. Tell us your exact hotel, office, or meeting address in Manama and we will drop you there directly, including the Seef and Diplomatic Area business districts.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dammam Airport to Manama Taxi
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        The easiest way to cross the causeway — private, comfortable, and on your schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?pickup=Dammam%20Airport&dropoff=Manama">
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
