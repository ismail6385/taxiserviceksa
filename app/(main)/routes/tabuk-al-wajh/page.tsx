import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Briefcase, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Tabuk to Al Wajh Taxi | Private Car Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Tabuk to Al Wajh with door-to-door pickup, professional drivers and fixed quotes. Approx. 330 km, 3.5-4 hours. Get a fare on WhatsApp.',
    keywords: ['Tabuk to Al Wajh taxi', 'taxi from Tabuk to Al Wajh', 'private transfer Tabuk to Al Wajh', 'Tabuk to Al Wajh car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-al-wajh/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Tabuk to Al Wajh private taxi transfer' }],
        siteName: 'Taxi Service KSA',
        title: 'Tabuk to Al Wajh Taxi | Private Car Transfer | Taxi Service KSA',
        description: 'Book a private taxi from Tabuk to Al Wajh with door-to-door pickup and fixed quotes.',
        url: 'https://taxiserviceksa.com/routes/tabuk-al-wajh/',
        type: 'website',
    },
};

export default function TabukAlWajhRoutePage() {
    const glance = [
        ['Distance', 'Approx. 330 km'],
        ['Driving Time', 'Around 3.5-4 hours'],
        ['Service Type', 'Private taxi / chauffeur transfer'],
        ['Pickup', 'Hotel, home, airport or agreed location'],
        ['Drop-off', 'Any address in Al Wajh'],
        ['Trip Options', 'One-way or return'],
        ['Passengers', 'Sedan, SUV and van options'],
        ['Booking', 'Advance booking'],
    ];

    const useCases = ['Hotel-to-hotel transfers', 'Home-to-hotel journeys', 'Airport pickups', 'Business travel', 'Family trips', 'One-way journeys', 'Return transfers'];

    const journeyStages = [
        { title: 'Leaving Tabuk', desc: 'Pickup can be arranged from your hotel, residence, airport or another agreed location.' },
        { title: 'During the Journey', desc: 'The driver can make reasonable rest or prayer stops when requested.' },
        { title: 'Arriving in Al Wajh', desc: 'You can be dropped directly at your hotel, residence, business address or another agreed destination.' },
    ];

    const personas = [
        { title: 'Families', desc: 'Families with children can choose a larger vehicle when they need additional passenger or luggage space.' },
        { title: 'Business Travelers', desc: 'For business trips, a private vehicle provides direct transportation without waiting for scheduled public transport.' },
        { title: 'Red Sea Travelers', desc: "Al Wajh is useful as part of a wider trip through northwestern Saudi Arabia. If you're continuing toward another destination, you can ask about arranging the next transfer as well." },
        { title: 'Local & Visiting Travelers', desc: 'Whether traveling for a family visit or personal trip, the service can be arranged around your preferred departure time.' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', cap: 'Up to 4 passengers', desc: 'A practical choice for individuals, couples and small groups.', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon XL', cap: 'Up to 7 passengers', desc: 'Better for families, groups and passengers carrying more luggage.', link: '/fleet/gmc-yukon-xl/' },
        { name: 'Hyundai Staria VIP', cap: 'Up to 7 passengers', desc: 'A spacious option for families and longer journeys.', link: '/fleet/hyundai-staria-vip/' },
        { name: 'Toyota Hiace', cap: 'Up to 11 passengers', desc: 'Suitable for larger groups traveling together.', link: '/hiace-11-seater/' },
    ];

    const fromTabuk = [
        { label: 'Tabuk to Al Wajh', href: '/routes/tabuk-al-wajh/' },
        { label: 'Tabuk to Riyadh', href: '/routes/tabuk-riyadh/' },
        { label: 'Tabuk to Duba', href: '/routes/tabuk-duba/' },
        { label: 'Tabuk to NEOM', href: '/routes/tabuk-neom/' },
        { label: 'Tabuk to Al Bad', href: '/routes/tabuk-al-bad/' },
    ];

    const faqs = [
        {
            question: "How far is Al Wajh from Tabuk?",
            shortAnswer: "Approximately 330 km",
            detailedAnswer: "Al Wajh is approximately 330 km from Tabuk by road.",
            perspectives: []
        },
        {
            question: "How long does a taxi from Tabuk to Al Wajh take?",
            shortAnswer: "Around 3.5-4 hours",
            detailedAnswer: "The journey normally takes around 3.5-4 hours, depending on the pickup location, road conditions and stops.",
            perspectives: []
        },
        {
            question: "Can I book a private car from Tabuk to Al Wajh?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, you can book a private vehicle for a direct one-way or return transfer.",
            perspectives: []
        },
        {
            question: "Can I be picked up from my hotel in Tabuk?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, pickup can be arranged from your hotel, residence, airport or another agreed location.",
            perspectives: []
        },
        {
            question: "Can I book a return taxi from Al Wajh to Tabuk?",
            shortAnswer: "Yes, subject to availability",
            detailedAnswer: "Yes, return transfers are available subject to vehicle availability.",
            perspectives: []
        },
        {
            question: "Can we stop during the journey?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, you can discuss reasonable rest or prayer stops with the driver when arranging the trip.",
            perspectives: []
        },
        {
            question: "Which vehicle is best for a family?",
            shortAnswer: "Depends on group size",
            detailedAnswer: "For a small family, a Camry may be sufficient. Larger families or groups with more luggage should consider a GMC Yukon XL, Hyundai Staria or Toyota Hiace.",
            perspectives: []
        },
        {
            question: "Is the price per passenger?",
            shortAnswer: "No, it's per vehicle",
            detailedAnswer: "This is a private vehicle service, so the quote is generally based on the vehicle and journey rather than individual seats. Confirm the exact fare before booking.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Tabuk to Al Wajh"
                description="Private taxi and car transfer from Tabuk to Al Wajh. Door-to-door service with a professional driver."
                services={[
                    { name: 'Tabuk to Al Wajh Taxi', description: 'Private one-way or return transfer with a professional driver.' },
                    { name: 'Family Vehicle Transfer', description: 'Spacious vehicles for the drive between Tabuk and Al Wajh.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Al Wajh back to Tabuk.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Tabuk to Al Wajh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Al Wajh
                    </span>
                }
                subtitle="Private Car with Professional Driver"
                location="3.5-4 Hours | Approx. 330 km | Private Door-to-Door Transfer"
            >
                <p className="text-white/70 max-w-2xl mx-auto text-center mb-8">
                    Travel from Tabuk to Al Wajh in a private, comfortable vehicle with pickup from your hotel, home, airport or another agreed location in Tabuk. The journey is approximately 330 km and normally takes around 3.5-4 hours, depending on your exact pickup point, road conditions and stops.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Tabuk%20to%20Al%20Wajh" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Al%20Wajh" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get a Fixed Quote
                        </Button>
                    </a>
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold mt-6 text-center">Private Vehicle • Professional Driver • One-Way & Return Trips</p>
            </Hero>

            {/* At a glance */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tabuk to Al Wajh Taxi at a Glance</h2>
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

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Private Taxi from Tabuk to Al Wajh</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        If you're traveling from Tabuk to Al Wajh, a private car gives you a direct alternative to scheduled public transport. Instead of traveling according to a fixed departure time, you can arrange your pickup around your own schedule.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Your driver collects you from the agreed location in Tabuk and takes you directly to your destination in Al Wajh. The service can be arranged for:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {useCases.map((u) => (
                            <span key={u} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl">{u}</span>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        For a long road journey, you can also request a suitable rest or prayer stop during the trip.
                    </p>
                </div>
            </section>

            {/* Distance */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How Far Is Tabuk from Al Wajh?</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The road distance between Tabuk and Al Wajh is approximately 330 km. A normal private-car journey takes roughly 3.5 to 4 hours, although the actual time can vary depending on where you start in Tabuk, your destination in Al Wajh, road conditions and any stops along the way.
                    </p>
                    <p className="text-gray-500 text-sm">
                        For this reason, we recommend treating the journey time as an estimate rather than a guaranteed arrival time.
                    </p>
                </div>
            </section>

            {/* What the journey is like */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What the Journey Is Like</h2>
                    <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-10">
                        The journey takes you from inland Tabuk toward Al Wajh on Saudi Arabia's Red Sea coast. For passengers making the trip for the first time, the main thing to plan is the journey length rather than complicated connections. A private vehicle lets you travel directly without changing vehicles during the trip.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {journeyStages.map((s) => (
                            <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who uses this */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who Uses the Tabuk to Al Wajh Taxi Service?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {personas.map((p) => (
                            <div key={p.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Choose the Right Vehicle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-xs font-bold text-primary mb-2">{v.cap}</p>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* One-way / return */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tabuk to Al Wajh Taxi: One-Way or Return</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">One-Way Transfer</h3>
                            <p className="text-gray-600 text-sm">Travel directly from Tabuk to your destination in Al Wajh.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Return Transfer</h3>
                            <p className="text-gray-600 text-sm">Need to come back to Tabuk? Request a return journey when making your booking so the availability and price can be confirmed for both directions.</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Al%20Wajh" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold">
                                Get Your Route Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Booking process */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Booking a Tabuk to Al Wajh Taxi</h2>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Send Your Details', desc: 'Tell us your pickup location, destination, travel date, preferred time and number of passengers.' },
                            { step: '2', title: 'Choose Your Vehicle', desc: "We'll recommend a suitable vehicle based on your group size and luggage." },
                            { step: '3', title: 'Confirm Your Trip', desc: 'Once the fare and vehicle are confirmed, your driver and pickup details can be arranged.' },
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

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Tabuk to Al Wajh Taxi FAQs</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Continue Your Journey — From Tabuk</h3>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        {fromTabuk.map((r) => (
                            <Link key={r.href} href={r.href} className="text-primary font-semibold hover:underline">{r.label}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Need a Taxi from Tabuk to Al Wajh?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Tell us your travel date, pickup location, number of passengers and luggage requirements. We'll confirm the available vehicle and provide your route quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Tabuk%20to%20Al%20Wajh" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Book Tabuk to Al Wajh Taxi via WhatsApp</Button>
                        </a>
                        <Link href="/booking/?route=tabuk-al-wajh">
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold text-lg px-10 py-7 h-auto rounded-2xl">
                                Request a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
