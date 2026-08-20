import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, Globe, ArrowRight, Info, AlertTriangle, DollarSign, Car, Navigation, Shield, Star, User, Compass, Luggage, PhoneCall, FileCheck, Plane, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import PricingTable from '@/components/PricingTable';
import BookingProcess from '@/components/BookingProcess';
import RouteFleetSection from '@/components/RouteFleetSection';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Service at King Fahd Causeway Border Crossing | Taxi Service KSA',
    description: 'Book the best Taxi at King Fahd Causeway Border for 2026. Reliable cross-border transfers between Saudi Arabia and Bahrain. Fixed rates and expert drivers.',
    keywords: ['Taxi King Fahd Causeway border crossing 2026', 'Saudi to Bahrain taxi price', 'cross border taxi KSA Bahrain'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/taxi-king-fahd-causeway-border-crossing/',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'King Fahd Causeway Taxi and Chauffeur Service',
    description: 'Private chauffeur-driven transfers across the King Fahd Causeway between the Eastern Province of Saudi Arabia and Bahrain, including Al Khobar, Dammam, Dammam Airport, and Riyadh to Manama.',
    provider: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
    areaServed: [
        { '@type': 'City', name: 'Al Khobar' },
        { '@type': 'City', name: 'Dammam' },
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'Country', name: 'Bahrain' },
    ],
    serviceType: 'Cross-Border Private Taxi Transfer',
    url: 'https://taxiserviceksa.com/border-crossings/taxi-king-fahd-causeway-border-crossing/',
};

export default function KingFahdCausewayBorderPage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const pricingRowsLocal = [
        { vehicle: 'Al Khobar → Bahrain', description: 'Sedan or SUV. The shortest hop to the causeway — pickup anywhere in Al Khobar.', price: '350', capacity: '4-7 Pax', isPopular: true },
        { vehicle: 'Dammam City → Bahrain (Sedan)', description: 'Toyota Camry or similar. Pickup anywhere in Dammam city.', price: '400', capacity: '4 Pax', isPopular: false },
        { vehicle: 'Dammam City → Bahrain (SUV)', description: 'GMC Yukon or similar. Pickup anywhere in Dammam city.', price: '400-500', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Dammam Airport → Bahrain (Sedan)', description: 'Toyota Camry or similar. From Dammam King Fahd International Airport (DMM).', price: '450', capacity: '4 Pax', isPopular: false },
        { vehicle: 'Dammam Airport → Bahrain (SUV)', description: 'GMC Yukon or similar. From Dammam King Fahd International Airport (DMM).', price: '450-600', capacity: '7 Pax', isPopular: false },
    ];

    const pricingRowsRiyadh = [
        { vehicle: 'GMC Yukon XL (Riyadh)', description: 'Most stable for the 400km Riyadh-Bahrain journey.', price: '1200', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Standard Sedan (Riyadh)', description: 'Toyota Camry or similar. Door-to-door.', price: '800', capacity: '3 Pax', isPopular: false },
        { vehicle: 'Hyundai Staria VIP (Riyadh)', description: 'Luxury van for larger groups.', price: '1000', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Mercedes Sprinter (Riyadh)', description: 'For corporate teams and big families.', price: '1800', capacity: '11 Pax', isPopular: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />
            <script
                id="king-fahd-causeway-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={images}
                h1Text="Private Car, Taxi and Chauffeur Service at King Fahd Causeway Border Crossing"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 Cross-Border
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
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Custom Quote
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Last Updated: April 2026 • 2026 Rates Verified</p>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Breadcrumbs />
            </div>

            {/* Cross-Border Stats */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
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

                {/* H2 #1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display leading-tight italic">King Fahd Causeway Taxi and Chauffeur Service</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Crossing the King Fahd Causeway requires more than just a car; it requires a driver with the correct commercial insurance, valid GCC permits, and a deep understanding of border protocols. The bridge itself is 25 km long, but your actual journey is usually much longer — the full drive is around 400 km if you're starting from Riyadh, and considerably shorter from Al Khobar or Dammam.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our <strong>King Fahd Causeway taxi service</strong> is built for business travelers, families, and pilgrims who value their time. This service is for anyone travelling between Saudi Arabia and Bahrain who wants a fixed price, a professional chauffeur, and one vehicle for the entire door-to-door journey — no shared transport, no changing cars at the border.
                        </p>

                        <div className="space-y-4">
                            <EntityTrustSignal
                                brandName="TaxiServiceKSA Causeway"
                                description="Specialized cross-border fleet with 10+ years of bridge experience."
                                metrics={[
                                    { label: 'Weekly Crossings', value: '200+', icon: Navigation },
                                    { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                ]}
                            />
                        </div>
                    </div>

                    {/* H2 #2 */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black text-gray-900 mb-2 font-display italic underline decoration-emerald-500 decoration-4">Private Car Transfers Across King Fahd Causeway</h2>
                        <p className="text-gray-500 text-sm mb-6">
                            We run private transfers in both directions — Saudi Arabia to Bahrain, and Bahrain back to Saudi Arabia — with the same fixed-rate, door-to-door model either way.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Info className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Causeway Tolls Included</h4>
                                    <p className="text-sm text-gray-500">King Fahd Causeway tolls are included in every quoted fare. No extra cash needed at the booths.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Weekend Wait Times</h4>
                                    <p className="text-sm text-gray-500">On Thursdays and Saturdays, wait times can exceed 2 hours. Our drivers monitor live bridge traffic to choose the best departure windows.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                                <ShieldCheck className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-emerald-900">Visa Requirements</h4>
                                    <p className="text-sm text-emerald-800">Please ensure all passengers have valid visas for both Saudi Arabia and Bahrain before booking. See Travel Requirements below.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* H2 #3 */}
                <div className="mt-24">
                    <span className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-3 inline-block">Popular Routes</span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">King Fahd Causeway Taxi Routes</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
                        Every route below crosses the same King Fahd Causeway — the difference is simply where your journey starts or ends. Pick your route for route-specific pricing, travel time, and booking.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { href: '/routes/khobar-bahrain/', title: 'Al Khobar → Manama', desc: 'The shortest crossing — closest city to the bridge.' },
                            { href: '/routes/dammam-bahrain/', title: 'Dammam → Manama', desc: 'Direct private transfer from Dammam city.' },
                            { href: '/routes/riyadh-bahrain/', title: 'Riyadh → Manama', desc: 'The full 400km capital-to-capital run.' },
                            { href: '/routes/dammam-airport-to-bahrain-airport-taxi/', title: 'Dammam Airport → Bahrain Airport', desc: 'Airport-to-airport, flight-tracked pickup.' },
                            { href: '/routes/bahrain-dammam/', title: 'Manama → Dammam', desc: 'The return leg, Bahrain to Dammam.' },
                            { href: '/routes/bahrain-riyadh/', title: 'Manama → Riyadh', desc: 'The return leg, Bahrain to Riyadh.' },
                        ].map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <MapPin className="w-5 h-5 text-emerald-600" />
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-black text-gray-900 mb-1">{route.title}</h3>
                                <p className="text-sm text-gray-500">{route.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Starting from Al Khobar specifically? See our dedicated{' '}
                        <Link href="/locations/al-khobar/bahrain-causeway/" className="text-emerald-700 font-bold underline decoration-emerald-300 hover:decoration-emerald-600">
                            Khobar to Bahrain causeway page
                        </Link>{' '}
                        for local pickup details.
                    </p>
                </div>

                {/* H2 #4 */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">King Fahd Causeway Border Pickup and Drop-Off</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We pick you up and drop you off at the exact address you give us — never just "at the border." Here's how pickup and drop-off actually work on each side.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700"><strong>Saudi side pickup</strong> — home, office, or hotel address anywhere in Al Khobar, Dammam, or Riyadh.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700"><strong>Bahrain side drop-off</strong> — hotels, residences, or business addresses across Manama and the wider island.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700"><strong>Hotel pickup</strong> — the driver waits in the lobby or designated hotel taxi area with a name board.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700"><strong>Airport pickup</strong> — available at Dammam King Fahd International Airport (DMM) and Bahrain International Airport (BAH).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700"><strong>Door-to-door transfer</strong> — one vehicle, one driver, from your exact starting point to your exact destination.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col justify-center">
                        <Plane className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-bold mb-3">Flying into Dammam or Bahrain?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            For airport pickups on either side, we confirm your flight status before dispatching your driver, so your car is ready even if your flight is delayed.
                        </p>
                        <Link
                            href="/services/airport-transfers/"
                            className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors"
                        >
                            See our Airport Transfer Service <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* CTA #2 — after routes/pickup */}
                <div className="mt-20 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Travelling from Saudi Arabia to Bahrain?</h3>
                        <p className="text-gray-600">Tell us your pickup location, destination, date and passenger count. We'll send you a private transfer quote.</p>
                    </div>
                    <Link href="/booking/?route=saudi-bahrain" className="shrink-0">
                        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            Get My Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                {/* H2 #5 */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">King Fahd Causeway Taxi Prices</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
                        Every price below is a fixed, all-inclusive fare — tolls and fuel included, no meter, no surprise fees at the booth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                            <h3 className="font-black text-gray-900 text-lg mb-2">Sedan Taxi to Bahrain</h3>
                            <p className="text-gray-500 text-sm">A Toyota Camry or similar sedan, ideal for 1-3 passengers with standard luggage. Starts from 350 SAR from Al Khobar, rising to 800 SAR from Riyadh depending on distance.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                            <h3 className="font-black text-gray-900 text-lg mb-2">GMC Yukon XL Private Transfer</h3>
                            <p className="text-gray-500 text-sm">Our most-booked vehicle for the causeway — spacious, stable, and comfortable for families or groups of up to 7. From 400 SAR locally, 1200 SAR from Riyadh.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                            <h3 className="font-black text-gray-900 text-lg mb-2">Hyundai Staria VIP Transfer</h3>
                            <p className="text-gray-500 text-sm">A luxury van option for larger groups who still want a premium interior — 1000 SAR from Riyadh, with local Eastern Province quotes available on request.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                            <h3 className="font-black text-gray-900 text-lg mb-2">Mercedes Sprinter Group Transfer</h3>
                            <p className="text-gray-500 text-sm">Built for corporate teams and large families of up to 11 passengers travelling together — 1800 SAR from Riyadh.</p>
                        </div>
                    </div>

                    <PricingTable
                        title="2026 Local Crossing Rates"
                        subtitle="Al Khobar, Dammam City & Dammam Airport to Manama"
                        rows={pricingRowsLocal}
                        disclaimer="Rates are for door-to-door service from the Eastern Province. Includes tolls and fuel. Prices may vary slightly during public holidays in KSA or Bahrain."
                    />

                    <PricingTable
                        title="Long-Distance Rates"
                        subtitle="Riyadh to Manama (400km Run)"
                        rows={pricingRowsRiyadh}
                        disclaimer="Rates are for door-to-door service. Includes tolls and fuel. Prices may vary slightly during public holidays in KSA or Bahrain."
                    />
                </div>

                {/* CTA #3 — after fleet/pricing */}
                <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Choose Your Vehicle</h3>
                        <p className="text-gray-400">Travelling alone, with family, or as a group? Choose a sedan, SUV or VIP van.</p>
                    </div>
                    <Link href="/fleet/" className="shrink-0">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            View Vehicles & Book <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <BookingProcess title="How to Book a King Fahd Causeway Taxi" subtitle="No complex forms. No payment upfront. Just professional service via WhatsApp." />

                {/* H2 #6 */}
                <div className="mt-8 mb-24">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 font-display italic">What Is Included in Your Causeway Transfer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Car, label: 'Private vehicle' },
                            { icon: User, label: 'Professional driver' },
                            { icon: DollarSign, label: 'Fuel' },
                            { icon: ShieldCheck, label: 'Causeway tolls' },
                            { icon: MapPin, label: 'Door-to-door service' },
                            { icon: Luggage, label: 'Luggage assistance' },
                            { icon: Plane, label: 'Flight status check for airport pickups' },
                            { icon: PhoneCall, label: '24/7 booking support' },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
                                <item.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span className="text-sm font-bold text-gray-800">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="py-16 bg-gray-900 rounded-[40px] p-8 md:p-16 my-4 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-4 inline-block">Wait Time Strategy</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight italic">How We Handle Causeway Congestion</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                The bridge can be unpredictable. Unlike city taxis that might cancel if they see a long queue, our drivers are committed to your journey.
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

                {/* H2 #7 */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">How Long Does King Fahd Causeway Crossing Take?</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
                        We don't promise a fixed crossing time — border wait times genuinely vary by day and hour. Here's a realistic breakdown by route.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">Al Khobar to Manama Travel Time</h3>
                            <p className="text-gray-500 text-sm">Typically 1 - 2 hours door-to-door, including the bridge crossing and average border wait. Al Khobar sits closest to the causeway of any city we serve.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">Dammam to Manama Travel Time</h3>
                            <p className="text-gray-500 text-sm">Usually 1.5 - 2.5 hours door-to-door, slightly longer than from Al Khobar due to the extra driving distance to reach the bridge.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">Riyadh to Manama Travel Time</h3>
                            <p className="text-gray-500 text-sm">Around 5 - 6.5 hours in total for the roughly 400 km drive plus the causeway crossing itself — this is a genuine long-distance journey, not a quick hop.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">Border Waiting Time</h3>
                            <p className="text-gray-500 text-sm">Usually 30 - 90 minutes for passport and customs checks. On Thursdays, Saturdays, and public holidays, this can exceed 2 hours — our drivers plan around known busy windows where possible.</p>
                        </div>
                    </div>
                </div>

                <TravelConsensus
                    points={[
                        {
                            topic: "Crossing with Luggage",
                            commonBelief: "Customs check takes hours for luggage.",
                            reality: "For private cars, the luggage check is usually swift unless you have restricted items. Our drivers assist with unloading/loading if a scan is required.",
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

                {/* H2 #8 */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 font-display italic">Why Book a Private Chauffeur for King Fahd Causeway?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: MapPin, title: 'Door-to-Door Convenience', desc: 'No transfers, no walking across the bridge — one vehicle the whole way.' },
                            { icon: Users, title: 'No Shared Taxi', desc: 'Your vehicle, your schedule — never combined with strangers.' },
                            { icon: User, title: 'Professional Driver', desc: 'Experienced with border protocols and both sides of the causeway.' },
                            { icon: Shield, title: 'Family-Friendly Travel', desc: 'Spacious SUVs and vans built for families and children.' },
                            { icon: Luggage, title: 'Large Luggage Capacity', desc: 'GMC Yukon and Sprinter options for heavy luggage or group trips.' },
                            { icon: Compass, title: 'Business Travel', desc: 'Wi-Fi-ready sedans and a quiet cabin for calls or work en route.' },
                            { icon: Car, title: 'Comfortable Long-Distance Vehicles', desc: 'Built for the 400km Riyadh run as much as the short Khobar hop.' },
                            { icon: FileCheck, title: 'Border-Crossing Experience', desc: 'Drivers who cross the causeway daily and know its rhythm.' },
                        ].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl bg-white border border-gray-100">
                                <item.icon className="w-6 h-6 text-emerald-600 mb-3" />
                                <h3 className="font-black text-gray-900 mb-1 text-sm">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
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

            {/* H2 #9 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 font-display italic text-center">Our Vehicles for Saudi-Bahrain Transfers</h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-4">Sedan, SUV, or VIP van — every vehicle on the causeway route from our full fleet.</p>
            </div>
            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* H2 #11 */}
                <div className="mt-4 mb-24">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 font-display italic">King Fahd Causeway Travel Requirements</h2>
                    <div className="bg-white rounded-3xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FileCheck className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Passport</h3>
                                    <p className="text-sm text-gray-500">A valid passport is required for every passenger crossing the causeway, including children.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Saudi Entry/Exit Requirements</h3>
                                    <p className="text-sm text-gray-500">Residents need a valid Iqama or re-entry permit; visitors need a valid Saudi visa or entry permit before crossing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Bahrain Entry Requirements</h3>
                                    <p className="text-sm text-gray-500">Requirements depend on your nationality — some travellers can get a visa on arrival, others need one arranged in advance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Visa Requirements</h3>
                                    <p className="text-sm text-gray-500">Visa rules change and depend on your nationality — please confirm current requirements with the official Saudi and Bahrain immigration authorities before booking.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Car className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Vehicle/Border Requirements</h3>
                                    <p className="text-sm text-gray-500">Our vehicles carry the correct GCC commercial insurance and causeway permits — you don't need to arrange anything for the car itself.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Luggage className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Luggage/Customs Considerations</h3>
                                    <p className="text-sm text-gray-500">Standard personal luggage clears quickly. Restricted or commercial goods may be checked more thoroughly by customs on either side.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-6 italic">
                        Entry and visa rules can change without notice. Always verify current requirements directly with Saudi and Bahrain immigration authorities before travelling.
                    </p>
                </div>
            </div>

            {/* H2 #12 */}
            <div className="max-w-4xl mx-auto py-4 px-4">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 font-display italic text-center">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto pb-20 px-4">
                <MicroSemanticFAQ
                    faqs={[
                        {
                            question: "How much is a taxi from Saudi Arabia to Bahrain?",
                            shortAnswer: "From 350 SAR",
                            detailedAnswer: "It depends entirely on where you start. From Al Khobar it's 350 SAR, from Dammam 400-600 SAR, and from Riyadh 800-1200 SAR. See the full pricing tables above for every vehicle type.",
                            perspectives: []
                        },
                        {
                            question: "How much is a taxi from Al Khobar to Manama?",
                            shortAnswer: "From 350 SAR",
                            detailedAnswer: "A taxi from Al Khobar to Manama starts from 350 SAR for a sedan or SUV, including causeway tolls. This is the shortest and most affordable crossing we offer.",
                            perspectives: []
                        },
                        {
                            question: "How much is a taxi from Dammam to Bahrain?",
                            shortAnswer: "400 - 600 SAR",
                            detailedAnswer: "From Dammam city it's 400 SAR for a sedan and 400-500 SAR for an SUV. From Dammam King Fahd International Airport (DMM) it's 450 SAR for a sedan and 450-600 SAR for an SUV.",
                            perspectives: []
                        },
                        {
                            question: "How much is a taxi from Riyadh to Bahrain in 2026?",
                            shortAnswer: "From 800 - 1200 SAR",
                            detailedAnswer: "In 2026, a private sedan to Bahrain from Riyadh starts at 800 SAR, while our GMC Yukon is 1200 SAR. This includes all bridge tolls and door-to-door service.",
                            perspectives: []
                        },
                        {
                            question: "How long does it take to cross King Fahd Causeway?",
                            shortAnswer: "30 - 90 minutes typically",
                            detailedAnswer: "The border crossing itself usually takes 30-90 minutes for passport and customs checks. On Thursdays, Saturdays, and public holidays, this can exceed 2 hours, so we recommend building in extra time.",
                            perspectives: []
                        },
                        {
                            question: "Can a private taxi cross King Fahd Causeway?",
                            shortAnswer: "Yes",
                            detailedAnswer: "Yes — our vehicles carry the correct GCC commercial insurance and causeway crossing permits, so your driver takes you all the way across in one vehicle without switching cars at the border.",
                            perspectives: []
                        },
                        {
                            question: "Can I book a taxi from Bahrain to Saudi Arabia?",
                            shortAnswer: "Yes, both directions",
                            detailedAnswer: "Yes, we run the same fixed-rate, door-to-door service from Bahrain back to Al Khobar, Dammam, or Riyadh. Just let us know your Bahrain pickup address when booking.",
                            perspectives: []
                        },
                        {
                            question: "Do you provide door-to-door transfers to Manama?",
                            shortAnswer: "Yes",
                            detailedAnswer: "Yes, every booking is door-to-door — we pick you up from your exact address in Saudi Arabia and drop you at your exact destination in Manama or elsewhere in Bahrain.",
                            perspectives: []
                        },
                        {
                            question: "Can I book a GMC Yukon or Staria for the Causeway?",
                            shortAnswer: "Yes",
                            detailedAnswer: "Yes, both the GMC Yukon XL and Hyundai Staria VIP are available for causeway crossings, alongside standard sedans and the larger Mercedes Sprinter for groups.",
                            perspectives: []
                        },
                        {
                            question: "Are King Fahd Causeway toll fees included?",
                            shortAnswer: "Yes, always included.",
                            detailedAnswer: "Yes — every quoted fare on this page already includes the King Fahd Causeway toll fees. You never need to pay anything extra at the booths.",
                            perspectives: []
                        }
                    ]}
                />
            </div>

            {/* CTA #4 — bottom */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Cross King Fahd Causeway?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Book your private Saudi-Bahrain transfer today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=saudi-bahrain">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                                Request a Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
                <Link href="/services/airport-transfers/" className="text-gray-500 hover:text-emerald-700 underline decoration-gray-300">Airport Transfers</Link>
                <Link href="/services/intercity/" className="text-gray-500 hover:text-emerald-700 underline decoration-gray-300">Intercity Transfers</Link>
                <Link href="/services/business/" className="text-gray-500 hover:text-emerald-700 underline decoration-gray-300">Business & Executive Chauffeur</Link>
                <Link href="/services/gcc-chauffeur-service/" className="text-gray-500 hover:text-emerald-700 underline decoration-gray-300">GCC Chauffeur Service</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-emerald-700 underline decoration-gray-300">Our Fleet</Link>
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
