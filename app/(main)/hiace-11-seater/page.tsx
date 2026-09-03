import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Car, Plane, MapPin, ArrowRight, Star, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Toyota Hiace 11 Seater with Driver Saudi Arabia | Taxi Service KSA',
    description: 'Book a private Toyota Hiace 11-seater with driver in Saudi Arabia for Umrah, airport transfers and intercity travel. Get a fixed quote via WhatsApp.',
    keywords: ['Toyota Hiace 11 seater Saudi Arabia', 'Toyota Hiace 11 seater with driver', 'Hiace for Umrah', 'Hiace airport transfer', 'Hiace rental with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/hiace-11-seater/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Toyota Hiace 11-seater with driver in Saudi Arabia' }],
        siteName: 'Taxi Service KSA',
        title: 'Toyota Hiace 11 Seater with Driver Saudi Arabia | Taxi Service KSA',
        description: 'Book a private Toyota Hiace 11-seater with driver in Saudi Arabia for Umrah, airport transfers and intercity travel.',
        url: 'https://taxiserviceksa.com/hiace-11-seater/',
        type: 'website',
    },
};

export default function Hiace11SeaterPage() {
    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Toyota Hiace 11-Seater Chauffeur Service",
        "image": "https://taxiserviceksa.com/toyota-hiace.webp",
        "description": "Private chauffeur-driven Toyota Hiace 11-seater in Saudi Arabia for airport transfers, Umrah trips, intercity journeys and family/group transportation.",
        "brand": {
            "@type": "Brand",
            "name": "Toyota"
        }
    };

    const quickFacts = [
        { label: 'Capacity', value: 'Up to 11 Passengers', icon: Users },
        { label: 'Luggage', value: 'Large Capacity', icon: Briefcase },
        { label: 'Service', value: 'Private Chauffeur', icon: Car },
        { label: 'Best For', value: 'Families & Groups', icon: Star },
    ];

    const whyChoose = [
        { title: 'One Vehicle for Your Group', desc: 'Travel together instead of splitting passengers between multiple sedans.' },
        { title: 'More Luggage Space', desc: 'Suitable for passengers travelling with suitcases, bags and other travel luggage. Let us know your luggage quantity when requesting a quote so we can confirm the appropriate vehicle.' },
        { title: 'Comfortable for Long Trips', desc: 'The spacious cabin makes the Hiace a practical option for longer journeys between Saudi cities.' },
        { title: 'Private Door-to-Door Service', desc: 'Your driver collects the group from the agreed pickup location and takes you directly to your destination.' },
        { title: 'Flexible Travel', desc: 'Private bookings allow you to arrange your departure time and request suitable rest stops during long-distance journeys.' },
    ];

    const umrahRoutes = [
        { name: 'Jeddah Airport → Makkah', href: '/routes/jeddah-makkah/' },
        { name: 'Makkah → Madinah', href: '/routes/makkah-madinah/' },
        { name: 'Madinah → Makkah', href: '/routes/makkah-madinah/' },
        { name: 'Madinah Airport → Hotel', href: '/madinah-airport-taxi/' },
        { name: 'Makkah → Jeddah Airport', href: '/jeddah-airport-transfer/' },
        { name: 'Ziyarat Transportation (Makkah & Madinah)', href: '/services/madinah-ziyarat/' },
    ];

    const airports = [
        { name: 'King Abdulaziz International Airport — Jeddah', href: '/jeddah-airport-transfer/' },
        { name: 'Prince Mohammad bin Abdulaziz International Airport — Madinah', href: '/madinah-airport-taxi/' },
        { name: 'King Khalid International Airport — Riyadh', href: '/riyadh-airport-taxi/' },
        { name: 'King Fahd International Airport — Dammam', href: '/dammam-airport-taxi/' },
    ];

    const intercityRoutes = [
        { name: 'Jeddah ↔ Makkah', href: '/routes/jeddah-makkah/' },
        { name: 'Makkah ↔ Madinah', href: '/routes/makkah-madinah/' },
        { name: 'Jeddah ↔ Madinah', href: '/routes/jeddah-madinah/' },
        { name: 'Madinah ↔ AlUla', href: '/routes/madinah-alula/' },
        { name: 'Riyadh ↔ Dammam', href: '/routes/riyadh-dammam/' },
        { name: 'Tabuk ↔ Riyadh', href: '/routes/tabuk-riyadh/' },
    ];

    const personas = [
        { icon: Users, title: 'Families', desc: 'A practical option when several family members need to travel together.' },
        { icon: Star, title: 'Umrah Groups', desc: 'Useful for pilgrims travelling between airports, hotels and the Holy Cities.' },
        { icon: MapPin, title: 'Small Tour Groups', desc: 'Keep your group together without needing multiple cars.' },
        { icon: Building2, title: 'Corporate Groups', desc: 'Suitable for transporting small teams between airports, hotels, meetings and business locations.' },
    ];

    const faqs = [
        {
            question: "How many passengers can the Toyota Hiace carry?",
            shortAnswer: "Up to 11 passengers",
            detailedAnswer: "Our Toyota Hiace is suitable for up to 11 passengers, subject to the specific vehicle configuration and luggage requirements.",
            perspectives: []
        },
        {
            question: "Is the Toyota Hiace available with a driver?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, our Hiace service is provided as a private chauffeur-driven transfer.",
            perspectives: []
        },
        {
            question: "Can I book a Hiace for Umrah?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, the Hiace can be booked for airport transfers, Makkah-Madinah transportation and other private Umrah journeys.",
            perspectives: []
        },
        {
            question: "Can I book a Toyota Hiace from Jeddah Airport to Makkah?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, private group transfers from Jeddah Airport to Makkah can be arranged in advance.",
            perspectives: []
        },
        {
            question: "Is the Hiace suitable for long-distance travel?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, its larger cabin makes it a practical choice for families and groups travelling between Saudi cities.",
            perspectives: []
        },
        {
            question: "Can we stop during an intercity journey?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, for private long-distance bookings, suitable rest, prayer and meal stops can be arranged.",
            perspectives: []
        },
        {
            question: "How much does a Toyota Hiace transfer cost?",
            shortAnswer: "Depends on route, date and group size",
            detailedAnswer: "The fare depends on the route, travel date, passenger count, luggage and whether the booking is one-way or return. Contact us for a fixed quote.",
            perspectives: []
        },
        {
            question: "Can I book the Hiace for several days?",
            shortAnswer: "Yes, subject to availability",
            detailedAnswer: "Yes, subject to availability. Contact us with your itinerary and we'll provide a quotation for multi-day transportation.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-hiace-11-seater"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/toyota-hiace.webp', '/hero-slide-4.webp']}
                h1Text="Toyota Hiace 11-Seater with Driver"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Group & Family Van
                    </span>
                }
                subtitle="11 Passengers | Large Luggage Capacity | Private Chauffeur"
                location="Airport • Umrah • Intercity • Family Travel"
            >
                <p className="text-white/70 max-w-2xl mx-auto text-center mb-8">
                    Travel comfortably with a private Toyota Hiace 11-seater for airport transfers, Umrah trips, intercity journeys and family transportation across Saudi Arabia. Ideal for larger families and groups who need more passenger and luggage space than a standard sedan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Toyota%20Hiace%2011-seater" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking/?vehicle=toyota-hiace">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Request a Quote
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {quickFacts.map((f) => (
                        <div key={f.label} className="flex flex-col items-center text-center">
                            <f.icon className="w-6 h-6 text-primary mb-3" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{f.label}</span>
                            <span className="text-sm font-black text-gray-900">{f.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Private Toyota Hiace with Driver</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        The Toyota Hiace is a practical choice when a family or group needs to travel together in one vehicle. Instead of booking several cars, you can keep your group together and travel directly between your pickup and destination.
                    </p>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        We provide the Hiace with a professional driver for airport transfers, Makkah and Madinah transportation, intercity journeys and other pre-booked trips in Saudi Arabia.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Whether you're arriving with a group at Jeddah Airport, travelling between Makkah and Madinah, or heading to another Saudi city, the Hiace gives you the space needed for a longer journey.
                    </p>
                </div>
            </section>

            {/* Why choose */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose a Toyota Hiace for Group Travel?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whyChoose.map((w) => (
                            <div key={w.title} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{w.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Umrah */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Toyota Hiace 11-Seater for Umrah</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The Hiace is particularly useful for families and groups travelling for Umrah. We can arrange private transportation for routes such as:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {umrahRoutes.map((r) => (
                            <Link key={r.name} href={r.href} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/50 transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        For larger groups carrying ihram bags, suitcases and other luggage, the Hiace can be more practical than booking several smaller cars.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Need a different vehicle? <Link href="/fleet/" className="text-primary font-semibold hover:underline">Compare our full fleet</Link> before booking.
                    </p>
                </div>
            </section>

            {/* Airport transfers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Toyota Hiace Airport Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Arriving in Saudi Arabia with a group? Book a private Hiace for airport pickup from major airports including:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {airports.map((a) => (
                            <Link key={a.name} href={a.href} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-primary/50 transition-colors">
                                <Plane className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-sm font-semibold text-gray-800">{a.name}</span>
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        For airport bookings, send us your flight number, arrival date, arrival time, passenger count and luggage quantity. This allows our team to arrange the appropriate vehicle and pickup instructions.
                    </p>
                </div>
            </section>

            {/* Intercity */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Toyota Hiace for Intercity Travel</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The Hiace is also suitable for long-distance private transfers between Saudi cities. Popular group routes include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                        {intercityRoutes.map((r) => (
                            <Link key={r.name} href={r.href} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/50 transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        For long journeys, passengers can request suitable stops for meals, prayer and refreshments.
                    </p>
                </div>
            </section>

            {/* Who is this for */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who Is the Toyota Hiace Best For?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {personas.map((p) => (
                            <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                                <p.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capacity table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Toyota Hiace Passenger & Luggage Capacity</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    ['Passenger capacity', 'Up to 11'],
                                    ['Vehicle type', 'Passenger van'],
                                    ['Service', 'Private chauffeur'],
                                    ['Airport transfers', 'Yes'],
                                    ['Intercity travel', 'Yes'],
                                    ['Umrah transport', 'Yes'],
                                    ['Group travel', 'Yes'],
                                    ['Child seats', 'Available on request'],
                                ].map(([label, value]) => (
                                    <tr key={label}>
                                        <td className="py-3 px-4 font-semibold text-gray-800">{label}</td>
                                        <td className="py-3 px-4 text-gray-600 text-right">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        Important: Actual luggage capacity depends on the number and size of suitcases. Tell us your passenger and luggage count before booking so we can recommend the right vehicle.
                    </p>
                </div>
            </section>

            {/* How to book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">How to Book a Toyota Hiace</h2>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Send Your Trip Details', desc: 'Tell us your pickup location, destination, date, time, passenger count and luggage.' },
                            { step: '2', title: 'Receive Your Quote', desc: "We'll confirm the available Hiace and provide the applicable fare." },
                            { step: '3', title: 'Confirm Your Booking', desc: "Once the booking is confirmed, we'll provide the pickup details." },
                            { step: '4', title: 'Meet Your Driver', desc: 'Your professional driver arrives at the agreed pickup location and takes your group directly to the destination.' },
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

            {/* vs Sedan */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Toyota Hiace vs Sedan for Group Travel</h2>
                    <p className="text-gray-600 leading-relaxed mb-2">
                        If you're travelling alone or as a couple, a <Link href="/fleet/toyota-camry/" className="text-primary font-semibold hover:underline">Toyota Camry</Link> may be more economical.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        For a larger group, however, a Hiace can be more convenient because everyone travels together and you don't need to coordinate multiple vehicles.
                    </p>
                    <p className="text-gray-900 font-semibold text-sm">
                        Choose Hiace when: you have a larger group, substantial luggage or want everyone to travel together.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mt-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Book a Toyota Hiace 11-Seater in Saudi Arabia</h2>
                    <p className="text-gray-400 text-lg mb-4">
                        Travelling with family or a group? Book a private Toyota Hiace with a professional driver for your airport, Umrah or intercity journey.
                    </p>
                    <p className="text-gray-500 mb-10 text-sm">
                        Send us your pickup location, destination, travel date and number of passengers to receive a quote.
                    </p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Toyota%20Hiace%2011-seater" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 font-black px-10 py-6 h-auto text-lg rounded-2xl">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book Toyota Hiace via WhatsApp
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
