import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Users, ArrowRight, Briefcase, Navigation, Plane, Star } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Tabuk to Madinah Taxi – Private Door-to-Door Transfer | Taxi Service KSA',
    description: 'Book a private Tabuk to Madinah taxi with door-to-door pickup, professional drivers and comfortable vehicles. Get your exact fare on WhatsApp.',
    keywords: ['Tabuk to Madinah taxi', 'Tabuk to Madinah private car', 'taxi from Tabuk to Madinah', 'Tabuk to Madinah car hire'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-madinah/',
    },
};

export default function TabukMadinahRoutePage() {
    const glance = [
        ['Distance', 'Approx. 680-690 km'],
        ['Typical Travel Time', 'Around 7-8 hours'],
        ['Service Type', 'Private taxi / chauffeur transfer'],
        ['Trip Options', 'One-way or return'],
        ['Pickup', 'Hotel, home, airport or agreed address in Tabuk'],
        ['Drop-off', 'Any address in Madinah'],
    ];

    const included = ['Private vehicle', 'Professional driver', 'Door-to-door pickup', 'Fuel', 'Air-conditioned vehicle', 'Luggage assistance (within vehicle capacity)', 'Flexible comfort stops', 'Direct drop-off in Madinah'];
    const notIncluded = ['Additional waiting beyond what was agreed', 'Extra stops/detours not arranged in advance', 'Return journey (unless booked)', 'Special vehicle requests outside standard fleet'];

    const vehicles = [
        { name: 'Toyota Camry', cap: '1-4 passengers, 2 bags', desc: 'A practical choice for individuals, couples and small groups.', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon XL', cap: '1-7 passengers, 6 bags', desc: 'Best for families and long-drive comfort.', link: '/fleet/gmc-yukon-xl/' },
        { name: 'Hyundai Staria VIP', cap: '5-7 passengers', desc: 'A spacious option for families and longer journeys.', link: '/fleet/hyundai-staria-vip/' },
        { name: 'Mercedes Sprinter', cap: '8-14 passengers', desc: 'Suitable for larger groups traveling together.', link: '/fleet/mercedes-sprinter/' },
    ];

    const personas = ['Families traveling with luggage', 'Umrah visitors', 'Couples', 'Small groups', 'Business travelers', 'Travelers who prefer private transport', 'Passengers continuing from Tabuk toward Makkah or Jeddah'];

    const relatedRoutes = [
        { label: 'Tabuk to Makkah', href: '/routes/tabuk-makkah/' },
        { label: 'Tabuk to Jeddah', href: '/routes/tabuk-jeddah/' },
        { label: 'Tabuk to AlUla', href: '/routes/tabuk-alula/' },
        { label: 'Tabuk to Riyadh', href: '/routes/tabuk-riyadh/' },
        { label: 'Tabuk Airport Transfers', href: '/tabuk-airport-taxi/' },
    ];

    const faqs = [
        {
            question: "How far is Tabuk from Madinah by road?",
            shortAnswer: "Approx. 680-690 km",
            detailedAnswer: "Road distance is approximately 680-690 km depending on the exact route and endpoints used.",
            perspectives: []
        },
        {
            question: "How long does a private taxi from Tabuk to Madinah take?",
            shortAnswer: "Around 7-8 hours",
            detailedAnswer: "Typical travel time is around 7-8 hours. Actual journey time depends on pickup location, traffic, stops and road conditions, so treat this as an estimate rather than a guaranteed arrival time.",
            perspectives: []
        },
        {
            question: "How much is a taxi from Tabuk to Madinah?",
            shortAnswer: "Depends on vehicle, passengers and date",
            detailedAnswer: "Private taxi prices depend on the vehicle, passenger count, luggage and pickup location. Send us your travel date and number of passengers on WhatsApp and we'll provide the exact fare before you book.",
            perspectives: []
        },
        {
            question: "Can I book a taxi from Tabuk to Madinah today?",
            shortAnswer: "Often yes, subject to availability",
            detailedAnswer: "While advance booking is preferred for long intercity trips, we can often arrange a pickup in Tabuk within 1-2 hours of your request, subject to vehicle availability.",
            perspectives: []
        },
        {
            question: "Do you provide pickup from Tabuk Airport?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we can arrange a private pickup from Tabuk Regional Airport and drive you directly to your hotel in Madinah.",
            perspectives: []
        },
        {
            question: "Do you go to Madinah Airport instead of the city?",
            shortAnswer: "Yes, on request",
            detailedAnswer: "We also provide private transfers from Tabuk to Prince Mohammad bin Abdulaziz International Airport in Madinah. Request a quote with your flight details if this is what you need instead of a city drop-off.",
            perspectives: []
        },
        {
            question: "Which vehicle should I choose for 6 passengers?",
            shortAnswer: "GMC Yukon XL or Hyundai Staria VIP",
            detailedAnswer: "For 6 passengers, a GMC Yukon XL or Hyundai Staria VIP is recommended. Tell us your luggage count as well so we can confirm it fits comfortably.",
            perspectives: []
        },
        {
            question: "Can I stop for prayer or food during the journey?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, you can request stops for fuel, food, prayer or refreshments during the journey.",
            perspectives: []
        },
        {
            question: "Do you provide return transfers from Madinah to Tabuk?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, if you need a return transfer, provide your return date and time when booking so we can quote the complete journey.",
            perspectives: []
        },
        {
            question: "Can you drop me at my hotel near Masjid an-Nabawi?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide direct drop-off at your Madinah hotel or requested address, including areas around Masjid an-Nabawi, Quba and central Madinah.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Tabuk to Madinah"
                description="Private taxi and car transfer from Tabuk to Madinah. Door-to-door service with a professional driver."
                services={[
                    { name: 'Tabuk to Madinah Taxi', description: 'Private one-way or return transfer with a professional driver.' },
                    { name: 'Family Vehicle Transfer', description: 'Spacious vehicles for the drive between Tabuk and Madinah.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Madinah back to Tabuk.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Tabuk to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Madinah
                    </span>
                }
                subtitle="Private Door-to-Door Transfer"
                location="Approx. 680-690 km | 24/7 Booking"
            >
                <p className="text-white/70 max-w-2xl mx-auto text-center mb-8">
                    Travel from Tabuk to Madinah in a private, air-conditioned vehicle with a professional driver. Pickup is available from your hotel, home, airport or any address in Tabuk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Get Exact Quote on WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold mt-6 text-center">Private Vehicle | Professional Driver | 24/7 Booking</p>
            </Hero>

            {/* Quick facts */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Quick Route Facts</h2>
                    <div className="overflow-hidden rounded-2xl border border-gray-100">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-gray-100">
                                {glance.map(([label, value]) => (
                                    <tr key={label} className="odd:bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-800 w-1/3">{label}</td>
                                        <td className="py-3 px-4 text-gray-600">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Price */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" id="pricing">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Tabuk to Madinah Taxi Price</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Prices depend on vehicle type, passenger count, luggage and pickup location. Send us your travel date and number of passengers on WhatsApp and we'll provide the exact fare before you book.
                    </p>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-bold">
                            Get a Fixed Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* What's included */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {included.map((i) => (
                                <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {i}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Not Included</h2>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {notIncluded.map((i) => (
                                <li key={i} className="flex gap-2"><span className="text-gray-400">–</span> {i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Distance & travel time */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Distance & Travel Time</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The road distance between Tabuk and Madinah is approximately 680-690 km — different route calculators return slightly different figures depending on the exact start and end points. A private-car journey typically takes around 7-8 hours.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Actual journey time depends on pickup location, traffic, stops and road conditions, so treat the estimate as a guide rather than a guaranteed arrival time.
                    </p>
                </div>
            </section>

            {/* Pickup & drop-off */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Pickup & Drop-off</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Pickup Anywhere in Tabuk</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                We can collect you from your hotel, home, airport, office or another address in Tabuk. Enter your exact pickup location when requesting a quote.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Al Rawda', 'Al Murooj', 'Al Salam', 'Al Olaya', 'Al Nakhil', 'Al Wurood'].map((zone) => (
                                    <span key={zone} className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-xs font-medium text-gray-700">{zone}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-emerald-600" /> Madinah Arrival</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Direct drop-off at your Madinah hotel or requested address. Popular drop-off areas include hotels around Masjid an-Nabawi, Quba and central Madinah.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Plane className="w-5 h-5 text-primary" /> Tabuk Airport to Madinah</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Flying into Tabuk and continuing to Madinah? We can arrange a private pickup from Tabuk Regional Airport and drive you directly to your hotel in Madinah. See our <Link href="/tabuk-airport-taxi/" className="text-primary font-semibold hover:underline">Tabuk Airport transfers</Link> page.
                            </p>
                        </div>
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Plane className="w-5 h-5 text-primary" /> Need Madinah Airport Instead?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We also provide private transfers from Tabuk to Prince Mohammad bin Abdulaziz International Airport. Request a quote with your flight details — see our <Link href="/madinah-airport-taxi/" className="text-primary font-semibold hover:underline">Madinah Airport taxi</Link> page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How the Transfer Works</h2>
                    <div className="space-y-5">
                        {[
                            { step: '1', title: 'Book', desc: 'Send your pickup location, destination, date, time and passenger count via WhatsApp.' },
                            { step: '2', title: 'Driver Confirmation', desc: 'We confirm the vehicle, fare and driver details before your trip.' },
                            { step: '3', title: 'Pickup', desc: 'Your driver arrives at the agreed location in Tabuk and assists with luggage.' },
                            { step: '4', title: 'Journey', desc: 'You can request stops for fuel, food, prayer or refreshments during the drive.' },
                            { step: '5', title: 'Madinah Drop-off', desc: 'Direct drop-off at your hotel or requested address in Madinah.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-100">
                                <span className="text-3xl font-black text-primary/40 shrink-0">{s.step}</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Choose Your Vehicle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-xs font-bold text-primary mb-2">{v.cap}</p>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">
                        VIP vehicles (Cadillac Escalade, Mercedes S-Class) available on request.
                    </p>
                    <div className="text-center mt-4">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who this is for */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who This Transfer Is For</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {personas.map((p) => (
                            <span key={p} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl">{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking & cancellation */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Booking & Cancellation</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Confirm your pickup date, time, passenger count and vehicle before booking. Cancellation and changes may be subject to our booking terms, especially for long-distance trips where a vehicle has already been dispatched — ask our team for the specific terms when you book.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Other Routes from Tabuk</h3>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        {relatedRoutes.map((r) => (
                            <Link key={r.href} href={r.href} className="text-primary font-semibold hover:underline">{r.label}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Book Your Tabuk to Madinah Taxi</h2>
                    <p className="text-gray-400 mb-10 text-lg">Send your travel date, pickup location and number of passengers. We'll confirm the available vehicle and provide your exact fare.</p>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Tabuk-Madinah Taxi Quote</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
