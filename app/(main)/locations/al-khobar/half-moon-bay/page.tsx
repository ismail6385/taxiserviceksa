import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Users, Umbrella, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Taxi to Half Moon Bay from Al Khobar | Private Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Al Khobar to Half Moon Bay, Dana Bay and resorts. One-way and return transfers for families, groups and airport arrivals.',
    keywords: ['taxi to Half Moon Bay', 'taxi from Al Khobar to Half Moon Bay', 'Half Moon Bay taxi', 'taxi to Dana Beach Resort', 'Dana Bay taxi', 'Al Khobar beach taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-khobar/half-moon-bay/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private taxi from Al Khobar to Half Moon Bay' }],
        siteName: 'Taxi Service KSA',
        title: 'Taxi to Half Moon Bay from Al Khobar | Private Transfer',
        description: 'Private beach, resort and villa transfers from Al Khobar to Half Moon Bay, Dana Bay and surrounding coastal destinations.',
        url: 'https://taxiserviceksa.com/locations/al-khobar/half-moon-bay/',
        type: 'website',
    },
};

export default function HalfMoonBayPage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/hero-slide-1.webp',
    ];

    const nearby: RelatedLink[] = [
        { name: 'Dammam', url: '/locations/dammam/', description: 'Taxi transfers between Half Moon Bay and Dammam.' },
        { name: 'Dhahran', url: '/locations/dhahran/', description: 'Taxi transfers between Half Moon Bay and Dhahran.' },
        { name: 'Jubail', url: '/locations/jubail/', description: 'Taxi transfers between Half Moon Bay and Jubail.' },
        { name: 'Hofuf', url: '/locations/hofuf/', description: 'Taxi transfers between Half Moon Bay and Hofuf.' },
    ];

    const faqs = [
        {
            question: "How far is Half Moon Bay from Al Khobar?",
            shortAnswer: "Around 30 km, depending on destination",
            detailedAnswer: "Half Moon Bay is located south of Al Khobar. Destinations within the area vary by their exact location — Dana Beach Resort, for example, is listed at about 30 km from Al Khobar. Travel time can vary with the pickup point, destination and traffic.",
            perspectives: []
        },
        {
            question: "Can I book a taxi from Al Khobar to Dana Beach Resort?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes. Provide the resort name and your preferred pickup time when requesting the transfer quote. Dana Beach Resort is located in Half Moon Bay.",
            perspectives: []
        },
        {
            question: "Can I book a return taxi from Half Moon Bay?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes. A return journey can be requested when you make your original booking. Giving us the return date and time helps arrange the trip in advance.",
            perspectives: []
        },
        {
            question: "Do you provide Half Moon Bay transfers for families?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes. Private transfers can be requested for families and groups. Tell us the number of passengers and luggage so an appropriate vehicle can be arranged based on availability.",
            perspectives: []
        },
        {
            question: "Can you pick me up from Dammam Airport and take me to Half Moon Bay?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, you can request a private airport transfer from King Fahd International Airport to a resort, villa or other destination in the Half Moon Bay area.",
            perspectives: []
        },
        {
            question: "Should I book my Half Moon Bay taxi in advance?",
            shortAnswer: "Recommended, especially for return trips",
            detailedAnswer: "Advance booking is recommended, especially for return journeys, resort stays, larger groups and airport transfers. It also gives you the opportunity to provide the exact pickup and destination details before travelling.",
            perspectives: []
        },
        {
            question: "How do I get a quote?",
            shortAnswer: "Send your trip details on WhatsApp",
            detailedAnswer: "Send your pickup location, destination, travel date, preferred time, passenger count and luggage details through WhatsApp or the online booking form.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Al Khobar"
                description="Private taxi and car transfers from Al Khobar to Half Moon Bay, Dana Bay and surrounding coastal resorts and villas."
                services={[
                    { name: 'Half Moon Bay Taxi', description: 'Private one-way or return transfer from Al Khobar to Half Moon Bay.' },
                    { name: 'Dana Beach Resort Transfers', description: 'Private transfers to resorts, villas and chalets around Half Moon Bay.' },
                    { name: 'Family & Group Transfers', description: 'Vehicles selected based on passenger and luggage requirements.' },
                    { name: 'Airport Transfers', description: 'Private transfers between Dammam Airport and Half Moon Bay.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={images}
                h1Text="Taxi from Al Khobar to Half Moon Bay"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        A Popular Beach Escape from Al Khobar
                    </span>
                }
                subtitle="Private beach, resort and villa transfers from Al Khobar to Half Moon Bay, Dana Bay and surrounding coastal destinations."
                location="Private Vehicle • Professional Driver"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20taxi%20quote%20for%20Half%20Moon%20Bay" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking/?pickup=Khobar%20City&dropoff=Half%20Moon%20Bay">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book Your Beach Transfer
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Private Taxi Transfers to Half Moon Bay</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Half Moon Bay is a popular coastal destination south of Al Khobar, with beaches, resorts, private villas and leisure activities along the Arabian Gulf. If you're travelling from Al Khobar for a family beach day, a resort stay or a private villa booking, a pre-arranged taxi gives you a simple door-to-door option.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We provide private, pre-booked transfers from Al Khobar to Half Moon Bay. You can request a one-way ride or arrange a return journey at the same time.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Because Half Moon Bay covers a wide coastal area, your exact travel time depends on your pickup point in Al Khobar, the destination you're visiting and traffic conditions.
                    </p>
                    <div className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-5">
                        <p className="text-sm font-semibold text-gray-900">Private transfers only — no shared taxis.</p>
                        <p className="text-sm text-gray-600 mt-1">We specialize in pre-booked airport, intercity and private transfers rather than local short-distance hailing.</p>
                    </div>
                </div>
            </section>

            {/* Dana Beach Resort */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Taxi to Dana Beach Resort, Dana Bay & Private Villas</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        If you're staying at a resort or private accommodation around Half Moon Bay, provide the property name and pickup details when requesting your quote.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        One of the area's well-known resort destinations is <strong>Dana Beach Resort</strong>, located in Half Moon Bay and offering beachfront accommodation and family-oriented facilities.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {['Resort arrivals & departures', 'Private villas & chalets', 'Family beach trips', 'Pre-booked return journeys', 'Group transportation', 'Hotel-to-resort transfers'].map((item) => (
                            <div key={item} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        For resort bookings, it's best to send the resort or villa name, pickup location, date, time and number of passengers when contacting us. This allows the vehicle to be matched to your trip requirements.
                    </p>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20taxi%20quote%20for%20Half%20Moon%20Bay" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
                            Request a Half Moon Bay Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* Families & groups */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Half Moon Bay Transfers for Families & Groups</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Beach trips often involve more luggage than a normal city journey. Families may also have coolers, bags, children's items or other beach equipment.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        For that reason, tell us your passenger count and luggage requirements when booking. Depending on your group size and availability, you can request a suitable sedan, SUV or larger family vehicle.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        For larger groups, advance booking is particularly useful because the vehicle needs to be selected according to the number of passengers and luggage. The service is private, so you don't have to share the vehicle with other passengers.
                    </p>
                </div>
            </section>

            {/* Airport */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Plane className="w-7 h-7 text-primary" /> Dammam Airport to Half Moon Bay</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Arriving at King Fahd International Airport (DMM) and travelling directly to a resort or villa around Half Moon Bay? You can request an airport transfer with your flight details and destination — useful if you don't want to arrange a separate city transfer before continuing to the beach area.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">When requesting an airport quote, provide:</p>
                    <div className="flex flex-wrap gap-2">
                        {['Flight arrival date', 'Expected arrival time', 'Number of passengers', 'Luggage quantity', 'Resort, hotel or villa name', 'Return flight details if needed'].map((item) => (
                            <span key={item} className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg">{item}</span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        See our <Link href="/dammam-airport-taxi/" className="text-primary font-semibold hover:underline">Dammam Airport Taxi</Link> page for more on airport pickup.
                    </p>
                </div>
            </section>

            {/* Return trip */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Al Khobar to Half Moon Bay Taxi for a Return Trip</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        If you're visiting Half Moon Bay for the day, arranging the return journey in advance can make the trip easier. Rather than reaching the beach and trying to arrange transportation later, you can request a round-trip transfer when making your original booking.
                    </p>
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center font-semibold text-gray-800 mb-4">
                        Al Khobar pickup → Half Moon Bay destination → return time → Al Khobar drop-off
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        For resort stays, you can also arrange the return from your accommodation back to Al Khobar or another destination.
                    </p>
                    <div className="mt-6">
                        <Link href="/booking/?pickup=Khobar%20City&dropoff=Half%20Moon%20Bay">
                            <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
                                Arrange Your Return Transfer <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pickup examples */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"><MapPin className="w-7 h-7 text-primary" /> Door-to-Door Pickup & Drop-off</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Your transfer can be arranged around the actual locations involved in your journey — for example:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {['Al Khobar hotel → Dana Beach Resort', 'Al Khobar residence → private villa in Half Moon Bay', 'Dammam Airport → Half Moon Bay resort', 'Half Moon Bay → Al Khobar hotel'].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-700">{item}</div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">
                        If your destination is a private villa or chalet, sending the property's location or map pin can help avoid confusion.
                    </p>
                </div>
            </section>

            {/* How to book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How to Book a Taxi to Half Moon Bay</h2>
                    <div className="space-y-5">
                        {[
                            { step: '1', title: 'Send Your Trip Details', desc: 'Contact us through WhatsApp or the booking form with your pickup point, destination, date and time.' },
                            { step: '2', title: 'Tell Us About Your Group', desc: 'Include the number of passengers and luggage so we can understand your vehicle requirements.' },
                            { step: '3', title: 'Choose One-Way or Round Trip', desc: "If you're returning to Al Khobar after your beach visit, tell us your preferred return time when requesting the quote." },
                            { step: '4', title: 'Confirm Your Transfer', desc: "Once the trip details and quote are confirmed, you'll have the arrangements for your journey." },
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

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Half Moon Bay Taxi FAQs</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <RelatedLocations
                    currentCity="Al Khobar"
                    customLinks={nearby}
                    labels={{
                        title: 'Explore More from Al Khobar',
                        subtitle: "If you're continuing your journey around the Eastern Province",
                        viewRoutes: 'View Details',
                    }}
                />
            </div>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Half Moon Bay Transfer</h2>
                    <p className="text-gray-400 mb-10 text-lg">Whether you're heading to the coast for a day trip or staying at a resort for several nights, booking your private transportation in advance can make the journey much easier.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20taxi%20quote%20for%20Half%20Moon%20Bay" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Quote for Half Moon Bay</Button>
                        </a>
                        <Link href="/booking/?pickup=Khobar%20City&dropoff=Half%20Moon%20Bay">
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold text-lg px-10 py-7 h-auto rounded-2xl">
                                Book Your Beach Transfer
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
