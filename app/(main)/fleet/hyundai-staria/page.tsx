import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Car, MapPin, ArrowRight, DoorOpen, Sun, Plane, Users2, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedFleet from '@/components/seo/RelatedFleet';

export const metadata: Metadata = {
    title: 'Hyundai Staria with Driver in Saudi Arabia | Taxi Service KSA',
    description: 'Book a chauffeur-driven Hyundai Staria in Saudi Arabia. 7-passenger private van for airport transfers, Umrah, family travel and intercity journeys.',
    keywords: ['Hyundai Staria Saudi Arabia', 'Hyundai Staria with driver', 'Hyundai Staria taxi', 'Hyundai Staria airport transfer', 'Hyundai Staria rental with driver', 'Hyundai Staria 7 seater'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/hyundai-staria/',
    },
};

export default function HyundaiStariaPage() {
    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Hyundai Staria Chauffeur Service",
        "image": "https://taxiserviceksa.com/hyundai-staria.webp",
        "description": "Chauffeur-driven Hyundai Staria van service in Saudi Arabia for airport transfers, Umrah transport and intercity travel.",
        "brand": {
            "@type": "Brand",
            "name": "Hyundai"
        }
    };

    const specifications = [
        { label: 'Capacity', value: 'Up to 7 Passengers', icon: Users },
        { label: 'Luggage', value: 'Varies by Group Size', icon: Briefcase },
        { label: 'Vehicle Type', value: 'Family Van', icon: Car },
        { label: 'Service', value: 'Chauffeur-Driven', icon: DoorOpen },
    ];

    const useCases = [
        { icon: Plane, title: 'Airport Transfers', desc: '7-seat configuration gives families more cabin space than a sedan for arrivals and departures at Jeddah, Madinah, Riyadh and other airports.' },
        { icon: Sun, title: 'Umrah Transport', desc: 'Suitable for families traveling together between Jeddah, Makkah and Madinah.' },
        { icon: MapPin, title: 'Madinah Ziyarat', desc: 'Comfortable option for a family or small group visiting multiple sites in Madinah.' },
        { icon: Users2, title: 'Family Travel', desc: 'Sliding doors and a spacious cabin make loading passengers and bags easier than a sedan.' },
        { icon: Car, title: 'Intercity Travel', desc: 'A practical choice for longer road journeys between Saudi cities.' },
        { icon: Building2, title: 'Group & Hotel Transfers', desc: 'Fits small groups traveling together from a single hotel pickup point.' },
    ];

    const faqs = [
        {
            question: "Is this a self-drive rental or a chauffeur-driven service?",
            shortAnswer: "Chauffeur-driven only",
            detailedAnswer: "This listing is for a chauffeur-driven Hyundai Staria with a professional driver. We do not offer this vehicle as a self-drive rental.",
            perspectives: []
        },
        {
            question: "How many passengers can the Hyundai Staria carry?",
            shortAnswer: "Up to 7 passengers",
            detailedAnswer: "The Hyundai Staria seats up to 7 passengers. For larger groups or heavy luggage, our team can suggest a better-suited vehicle when you book.",
            perspectives: []
        },
        {
            question: "How much luggage fits in the Hyundai Staria?",
            shortAnswer: "Depends on passenger count",
            detailedAnswer: "Luggage capacity depends on how many passengers are traveling and the size of the bags. With a full 7 passengers, space for large suitcases is limited. Tell us your passenger and luggage count when booking so we can confirm it fits, or recommend a larger vehicle.",
            perspectives: []
        },
        {
            question: "Is the Hyundai Staria suitable for long-distance travel?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes. The Staria is a practical option for families and small groups traveling between Saudi cities because it offers more cabin space than a standard sedan. It can be booked for routes such as Jeddah-Makkah, Makkah-Madinah and Riyadh-Dammam, subject to availability.",
            perspectives: []
        },
        {
            question: "What is the difference between the Hyundai Staria and the Hyundai Staria VIP?",
            shortAnswer: "Standard family van vs. our premium-spec van",
            detailedAnswer: "This page covers our standard Hyundai Staria, used for everyday family and group transfers. Our Hyundai Staria VIP is a separate, higher-spec vehicle in the fleet for travelers who want a more premium interior. See the Hyundai Staria VIP page for details.",
            perspectives: []
        },
        {
            question: "Can I book the Hyundai Staria for an airport transfer?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, the Staria is available for airport pickups and drop-offs at Jeddah, Madinah, Riyadh and other airports we serve.",
            perspectives: []
        },
        {
            question: "Does the Hyundai Staria have sliding doors?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, sliding passenger doors make it easier to load children, elderly passengers and luggage compared to a standard sedan.",
            perspectives: []
        },
        {
            question: "How much does a Hyundai Staria transfer cost?",
            shortAnswer: "Depends on route and trip details",
            detailedAnswer: "Pricing depends on route, passenger count, date, waiting time, and whether the booking is one-way, return or hourly. Send your pickup location, destination and travel date for a fixed quote.",
            perspectives: []
        },
        {
            question: "Which cities is the Hyundai Staria available in?",
            shortAnswer: "Major Saudi cities, subject to availability",
            detailedAnswer: "The Staria is available for bookings in Makkah, Madinah, Jeddah, Riyadh, Dammam, Khobar and other cities depending on availability at the time of booking.",
            perspectives: []
        },
        {
            question: "Should I book a Staria or a smaller sedan?",
            shortAnswer: "Depends on your group size",
            detailedAnswer: "For 1-3 passengers with normal luggage, a sedan like the Toyota Camry is usually more economical. For 4-7 passengers, or when you need sliding doors and extra cabin space, the Staria is a better fit.",
            perspectives: []
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-staria"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/hyundai-staria.webp', '/hero-slide-4.webp']}
                h1Text="Hyundai Staria with Driver in Saudi Arabia"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Family Van
                    </span>
                }
                subtitle="7-passenger private van for airport transfers, Umrah, family travel and intercity journeys."
                location="Up to 7 Passengers | Chauffeur-Driven | Sliding Doors"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=hyundai-staria">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Hyundai Staria
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Request a Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
                                <spec.icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{spec.label}</span>
                            <span className="text-lg font-black text-gray-900">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Driver clarification + intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8 text-sm text-indigo-900 font-medium">
                        This listing is for a chauffeur-driven Hyundai Staria with a professional driver. We do not offer this vehicle as a self-drive rental.
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About the Hyundai Staria</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        The Hyundai Staria is a 7-seat family van in our fleet, used for airport transfers, Umrah transport, Ziyarat trips and intercity journeys across Saudi Arabia. Its sliding doors and spacious cabin make it a practical choice for families and small groups traveling with children, elderly passengers, or extra luggage.
                    </p>
                </div>
            </section>

            {/* Use cases */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Why Book a Hyundai Staria?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <uc.icon className="w-6 h-6 text-indigo-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features + luggage guide */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Available Features</h2>
                        <div className="space-y-3">
                            {[
                                'Air conditioning',
                                'Sliding passenger doors',
                                'Comfortable middle-row seating',
                                'Large windows',
                                'USB charging',
                            ].map((f, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm">{f}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-4">Features can vary slightly between individual vehicles in our fleet. Let us know if a specific feature is important for your trip.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Luggage Guide</h2>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Luggage space depends on how many passengers are traveling. With fewer passengers, more of the cabin can be used for bags. With a full 7 passengers, space for large suitcases is limited.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                For 7 passengers with several large suitcases, confirm your luggage requirements before booking so we can allocate a vehicle that fits everything comfortably.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Which Vehicle Should You Choose?</h2>
                    <p className="text-gray-500 text-center mb-10">A quick comparison to help you pick the right vehicle for your group</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="text-left py-3 px-3 font-bold text-gray-900"></th>
                                    <th className="text-center py-3 px-3 font-bold text-gray-900">Toyota Camry</th>
                                    <th className="text-center py-3 px-3 font-bold text-gray-900">Hyundai Staria</th>
                                    <th className="text-center py-3 px-3 font-bold text-gray-900">GMC Yukon</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b border-gray-50">
                                    <td className="py-3 px-3 font-semibold text-gray-800">Passengers</td>
                                    <td className="text-center py-3 px-3">3-4</td>
                                    <td className="text-center py-3 px-3">Up to 7</td>
                                    <td className="text-center py-3 px-3">Up to 7</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-3 px-3 font-semibold text-gray-800">Luggage</td>
                                    <td className="text-center py-3 px-3">2 standard bags</td>
                                    <td className="text-center py-3 px-3">Varies by group size</td>
                                    <td className="text-center py-3 px-3">Up to 5 large bags</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-3 px-3 font-semibold text-gray-800">Best for</td>
                                    <td className="text-center py-3 px-3">1-3 passengers, light luggage</td>
                                    <td className="text-center py-3 px-3">Families, 4-7 passengers</td>
                                    <td className="text-center py-3 px-3">7 passengers with more luggage</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 font-semibold text-gray-800">Sliding doors</td>
                                    <td className="text-center py-3 px-3">No</td>
                                    <td className="text-center py-3 px-3">Yes</td>
                                    <td className="text-center py-3 px-3">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <span className="font-bold text-gray-900 block mb-1">1-3 passengers</span>
                            <Link href="/fleet/toyota-camry/" className="text-primary hover:underline font-medium">Toyota Camry may be more economical &rarr;</Link>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <span className="font-bold text-gray-900 block mb-1">4-7 passengers</span>
                            <span className="text-gray-500">The Staria becomes attractive</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <span className="font-bold text-gray-900 block mb-1">7 passengers, heavy luggage</span>
                            <Link href="/fleet/gmc-yukon/" className="text-primary hover:underline font-medium">Confirm luggage first, or consider a GMC Yukon &rarr;</Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Looking for a more premium-spec van? See the <Link href="/fleet/hyundai-staria-vip/" className="text-primary font-semibold hover:underline">Hyundai Staria VIP</Link>.
                    </p>
                </div>
            </section>

            {/* Routes + pricing + coverage */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Popular Routes with the Hyundai Staria</h2>
                        <div className="space-y-2">
                            {[
                                { name: 'Jeddah Airport to Makkah', href: '/routes/jeddah-makkah/' },
                                { name: 'Makkah to Madinah', href: '/routes/makkah-madinah/' },
                                { name: 'Madinah to Jeddah', href: '/routes/madinah-jeddah/' },
                                { name: 'Riyadh to Dammam', href: '/routes/riyadh-dammam/' },
                            ].map((r, i) => (
                                <Link key={i} href={r.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-sm transition-all group">
                                    <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How Much Does a Hyundai Staria Transfer Cost?</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Pricing depends on route, passenger count, date, waiting time, and whether the booking is one-way, return or hourly. Send your pickup location, destination and travel date for a fixed quote.
                        </p>
                        <h3 className="font-bold text-gray-900 mb-3 mt-6">Where the Staria Is Available</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Makkah, Madinah, Jeddah, Riyadh, Dammam, Khobar, and other cities based on availability at the time of booking.
                        </p>
                        <Link href="/booking/?vehicle=hyundai-staria">
                            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold mt-6">
                                Get a Fixed Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Hyundai Staria FAQ</h2>
                </center>
                <MicroSemanticFAQ faqs={faqs} />
            </div>

            <RelatedFleet currentSlug="hyundai-staria" />

            <div className="bg-gray-900 py-24 text-center px-4 rounded-[3rem] mx-4 mb-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Book a Hyundai Staria</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Send your pickup location, destination and travel date for a fixed quote.</p>
                    <Link href="/booking/?vehicle=hyundai-staria">
                        <Button size="lg" className="bg-white hover:bg-gray-200 text-gray-900 font-bold px-12 py-7 text-lg rounded-2xl h-auto shadow-2xl transition-all hover:scale-105">
                            Book Hyundai Staria
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
