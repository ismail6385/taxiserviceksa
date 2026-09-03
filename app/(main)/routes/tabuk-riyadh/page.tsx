import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Briefcase, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Tabuk to Riyadh Taxi | Private Car Transfer | Taxi Service KSA',
    description: 'Book a private Tabuk to Riyadh taxi with door-to-door pickup, professional drivers, flexible departure times and fixed quotes. Get a fare on WhatsApp.',
    keywords: ['Tabuk to Riyadh taxi', 'taxi from Tabuk to Riyadh', 'private transfer Tabuk to Riyadh', 'Tabuk to Riyadh car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-riyadh/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Tabuk to Riyadh private taxi transfer' }],
        siteName: 'Taxi Service KSA',
        title: 'Tabuk to Riyadh Taxi | Private Car Transfer | Taxi Service KSA',
        description: 'Book a private Tabuk to Riyadh taxi with door-to-door pickup and fixed quotes.',
        url: 'https://taxiserviceksa.com/routes/tabuk-riyadh/',
        type: 'website',
    },
};

export default function TabukRiyadhRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '~1,280 km', icon: Navigation },
        { label: 'Travel Time', value: '~12-13 Hours', icon: Clock },
        { label: 'Service', value: 'Private', icon: CheckCircle2 },
        { label: 'Pickup / Drop-off', value: 'Tabuk / Riyadh', icon: MapPin },
    ];

    const vehicles = [
        { name: 'Toyota Camry', desc: '1-3 passengers with luggage', link: '/fleet/toyota-camry/' },
        { name: 'Hyundai Staria', desc: 'Families, 4-7 passengers', link: '/fleet/hyundai-staria/' },
        { name: 'GMC Yukon', desc: 'Premium family/group transfer', link: '/fleet/gmc-yukon/' },
        { name: 'Mercedes Sprinter', desc: 'Larger groups', link: '/fleet/mercedes-sprinter/' },
    ];

    const relatedRoutes = [
        { label: 'Tabuk to Jeddah', href: '/routes/tabuk-jeddah/' },
        { label: 'Tabuk to Madinah', href: '/routes/tabuk-madinah/' },
        { label: 'Tabuk to Makkah', href: '/routes/tabuk-makkah/' },
        { label: 'Tabuk to NEOM', href: '/routes/tabuk-neom/' },
        { label: 'Tabuk to AlUla', href: '/routes/tabuk-alula/' },
    ];

    const faqs = [
        {
            question: "How long does Tabuk to Riyadh take?",
            shortAnswer: "~12-13 hours",
            detailedAnswer: "The drive is approximately 1,280 km and usually takes around 12-13 hours by private car. Actual travel time depends on traffic, route conditions and rest stops.",
            perspectives: []
        },
        {
            question: "How much is a Tabuk to Riyadh taxi?",
            shortAnswer: "Depends on vehicle, passengers and trip type",
            detailedAnswer: "The fare depends on the vehicle, passenger count, luggage, and whether the booking is one-way or round trip. Contact us on WhatsApp with your travel date and passenger details for a fixed quote before booking.",
            perspectives: []
        },
        {
            question: "Can you pick us up from our hotel or home in Tabuk?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we can arrange door-to-door pickup from an agreed address in Tabuk and drop you at your hotel, home or other destination in Riyadh, including business districts like Olaya or KAFD.",
            perspectives: []
        },
        {
            question: "Can we stop during the journey?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, private transfers allow planned rest, prayer and meal stops. Tell us your preferred stops when booking.",
            perspectives: []
        },
        {
            question: "Can I travel overnight or very early morning?",
            shortAnswer: "Yes, subject to availability",
            detailedAnswer: "Departure times can be arranged according to availability. For a journey of this length, we recommend choosing a departure time that gives you enough time for rest and safe travel.",
            perspectives: []
        },
        {
            question: "How much luggage can I bring?",
            shortAnswer: "Depends on the vehicle",
            detailedAnswer: "Luggage capacity depends on the vehicle and passenger count. Let us know your luggage requirements when booking so we can recommend the right vehicle.",
            perspectives: []
        },
        {
            question: "What vehicles are available for this route?",
            shortAnswer: "Sedan, van, SUV or minibus",
            detailedAnswer: "We offer the Toyota Camry for smaller groups, the Hyundai Staria or GMC Yukon for families, and the Mercedes Sprinter for larger groups traveling to Riyadh.",
            perspectives: []
        },
        {
            question: "Can I book a return trip from Riyadh to Tabuk?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, return bookings from Riyadh back to Tabuk can be arranged. Let us know your return date when booking.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Tabuk to Riyadh"
                description="Private car service from Tabuk to Riyadh. Door-to-door long-distance transport for families and business travelers."
                services={[
                    { name: 'Tabuk to Riyadh Taxi', description: 'Private door-to-door transfer with a professional driver.' },
                    { name: 'Family Vehicle Transfer', description: 'Spacious vehicles for the drive between Tabuk and Riyadh.' },
                    { name: 'Long-Distance Chauffeur', description: 'Private long-distance travel across Saudi Arabia.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Riyadh back to Tabuk.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Tabuk to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Riyadh
                    </span>
                }
                subtitle="Private Car Service — Door-to-Door, WhatsApp Booking"
                location="12-13 Hours | Private Car | Door-to-Door"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Tabuk%20to%20Riyadh" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Request Your Fare
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Need a private taxi from Tabuk to Riyadh? We provide pre-booked, door-to-door transfers with a professional driver, flexible departure times and private vehicles for individuals, families and groups. The road journey is approximately 1,280 km and usually takes around 12-13 hours, depending on the route, traffic and rest stops.
                    </p>
                </div>
            </section>

            {/* Quick facts */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Is a Tabuk to Riyadh Taxi?</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        The fare depends on the vehicle, passenger count, luggage, and whether the booking is one-way or round trip. Contact us on WhatsApp with your travel date and passenger details for a fixed quote before booking.
                    </p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Tabuk%20to%20Riyadh" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-bold">
                            Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* Route details */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tabuk to Riyadh Route Details</h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                        This is a full-day road journey rather than a short city transfer. Most passengers should plan several rest stops for meals, prayer and refreshments. Your driver can coordinate stops along the route while keeping the journey moving safely.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Distance', value: '~1,280 km' },
                            { label: 'Typical Drive', value: '~12-13 hours' },
                            { label: 'Stops', value: 'Flexible, on request' },
                            { label: 'Pickup', value: 'Tabuk address/hotel' },
                            { label: 'Drop-off', value: 'Riyadh address/hotel' },
                            { label: 'Vehicle', value: 'Private only' },
                        ].map((d) => (
                            <div key={d.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{d.label}</p>
                                <p className="text-sm font-bold text-gray-900">{d.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why book private */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Book a Private Transfer?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Private door-to-door travel without changing vehicles or following a fixed departure schedule. You set the pickup time, decide where to stop along the way, and travel without sharing the vehicle with strangers. The fare is agreed before you travel.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {['Door-to-door pickup and drop-off', 'No shared passengers', 'Flexible rest, prayer and meal stops', 'Luggage space depends on vehicle chosen'].map((f) => (
                            <div key={f} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who is this for */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Who Is This Transfer For?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Briefcase, title: 'Business Travel', desc: 'Private vehicle with direct hotel or office drop-off in Riyadh.' },
                            { icon: Users, title: 'Family Travel', desc: 'More luggage space and flexible rest stops for the long drive.' },
                            { icon: MapPin, title: 'Long-Distance / Relocation', desc: 'One-way private transport with substantial luggage for those moving between cities.' },
                        ].map((c) => (
                            <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                                <c.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Available Vehicles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
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

            {/* Booking process */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">How Booking Works</h2>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Request a Quote', desc: 'Send your travel date, passenger count and preferred vehicle via WhatsApp.' },
                            { step: '2', title: 'Confirm Vehicle & Date', desc: "We confirm the vehicle and fare — the price we agree on is what you pay." },
                            { step: '3', title: 'Driver Pickup', desc: 'Your driver meets you at the agreed address in Tabuk at the arranged time.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Related Tabuk Routes</h3>
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
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to go to Riyadh?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now for your fixed quote and driver details.</p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Tabuk%20to%20Riyadh" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
