import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, FileText, Plane, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Riyadh to Bahrain Taxi | Private Transfer from 800 SAR',
    description: 'Book a private Riyadh to Bahrain taxi via King Fahd Causeway. Door-to-door transfers, professional drivers, fixed fares from 800 SAR and 24/7 booking.',
    keywords: ['Riyadh to Bahrain taxi', 'Riyadh to Bahrain taxi price', 'Riyadh to Bahrain private taxi', 'Riyadh to Bahrain transfer', 'Riyadh to Manama taxi', 'Riyadh Bahrain taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-bahrain/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Riyadh to Bahrain taxi via King Fahd Causeway' }],
        siteName: 'Taxi Service KSA',
        title: 'Riyadh to Bahrain Taxi | Private Transfer from 800 SAR',
        description: 'Private door-to-door taxi from Riyadh to Bahrain via the King Fahd Causeway, with fixed vehicle pricing and professional drivers.',
        url: 'https://taxiserviceksa.com/routes/riyadh-bahrain/',
        type: 'website',
    },
};

export default function RiyadhBahrainRoutePage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const glance = [
        ['Distance', 'Approx. 430-480 km'],
        ['Driving Time', 'Around 4-5 hours'],
        ['Route', 'Riyadh → Dammam/Khobar → King Fahd Causeway → Bahrain'],
        ['Service', 'Private taxi / chauffeur transfer'],
        ['Trip Options', 'One-way or return'],
        ['Booking', '24/7'],
    ];

    const pricing = [
        { vehicle: 'Toyota Camry', cap: '1-3/4 passengers, 2 luggage', price: '800', link: '/fleet/toyota-camry/' },
        { vehicle: 'Hyundai Staria VIP', cap: 'Up to 7 passengers', price: '1,000', link: '/fleet/hyundai-staria-vip/' },
        { vehicle: 'GMC Yukon XL', cap: 'Up to 7 passengers', price: '1,200', link: '/fleet/gmc-yukon-xl/' },
        { vehicle: 'Mercedes Sprinter', cap: 'Up to 11 passengers', price: '1,800', link: '/fleet/mercedes-sprinter/' },
    ];

    const documents = ['Valid passport', 'Bahrain visa or entry permission where required', 'Valid Saudi residency documentation where applicable', 'Any required vehicle or travel authorization'];

    const riyadhPickups = ['King Khalid International Airport', 'KAFD', 'Olaya', 'Diplomatic Quarter', 'Al Malaz', 'Riyadh hotels & business districts'];
    const bahrainDropoffs = ['Manama', 'Bahrain International Airport', 'Seef', 'Juffair', 'Diplomatic Area', 'Riffa', 'Muharraq', 'Bahrain hotels'];

    const faqs = [
        {
            question: "How much is a taxi from Riyadh to Bahrain?",
            shortAnswer: "From 800 SAR",
            detailedAnswer: "Private transfers start from 800 SAR for a sedan, rising to 1,000-1,800 SAR for larger vehicles. The final price depends on the vehicle, passenger count, luggage and travel date.",
            perspectives: []
        },
        {
            question: "How far is Riyadh from Bahrain by road?",
            shortAnswer: "Approx. 430-480 km",
            detailedAnswer: "Current route estimates vary depending on the exact route and endpoints, with roughly 430-480 km commonly reported between Riyadh and Bahrain.",
            perspectives: []
        },
        {
            question: "How long does Riyadh to Bahrain take by car?",
            shortAnswer: "Around 4-5 hours driving, plus border time",
            detailedAnswer: "Driving time is usually around 4-5 hours. Border processing at the King Fahd Causeway adds further time and isn't controlled by the driver — it can vary significantly on weekends, holidays and busy travel periods. Plan for a full journey rather than a fixed arrival time.",
            perspectives: []
        },
        {
            question: "Do you cross the King Fahd Causeway?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, this route uses the King Fahd Causeway, the land link between Saudi Arabia and Bahrain. See our full King Fahd Causeway guide for the border process in detail.",
            perspectives: []
        },
        {
            question: "Can the same vehicle continue into Bahrain?",
            shortAnswer: "Yes, subject to standard cross-border requirements",
            detailedAnswer: "Yes, cross-border bookings are subject to the required vehicle documentation and current Causeway requirements, which we confirm when arranging your trip.",
            perspectives: []
        },
        {
            question: "Do I need a Bahrain visa?",
            shortAnswer: "Depends on your nationality and status",
            detailedAnswer: "That depends on your nationality, residency status and applicable Bahrain entry rules. Do not assume every passenger has the same visa requirements — check your eligibility before travelling.",
            perspectives: []
        },
        {
            question: "Are Causeway tolls included in the price?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, applicable bridge tolls are included in the quoted vehicle price.",
            perspectives: []
        },
        {
            question: "Is the price per passenger or per vehicle?",
            shortAnswer: "Per vehicle",
            detailedAnswer: "This is a private vehicle service, so the quoted price is for the vehicle and journey, not per seat.",
            perspectives: []
        },
        {
            question: "Can I book a return taxi?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, a return transfer from Bahrain to Riyadh can be requested. Provide your return date and preferred pickup time when booking.",
            perspectives: []
        },
        {
            question: "Can you pick me up from Riyadh airport?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, pickup can be arranged from King Khalid International Airport, your hotel, office or another agreed address in Riyadh.",
            perspectives: []
        },
        {
            question: "Can I travel with large luggage?",
            shortAnswer: "Depends on the vehicle",
            detailedAnswer: "Luggage capacity depends on the vehicle and passenger count. Tell us your luggage requirements when booking so we can recommend the right vehicle.",
            perspectives: []
        },
        {
            question: "Can families book a GMC Yukon?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, the GMC Yukon XL (up to 7 passengers) and Hyundai Staria VIP are both popular choices for families making this trip.",
            perspectives: []
        },
        {
            question: "Can I stop for food or prayer?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, reasonable rest stops can be arranged during the journey for food, refreshments and prayer.",
            perspectives: []
        },
        {
            question: "What happens if the border is busy?",
            shortAnswer: "Your driver waits with you",
            detailedAnswer: "Border processing time isn't controlled by the driver and can vary significantly on weekends, holidays and busy travel periods. Your driver waits with you throughout the process.",
            perspectives: []
        },
        {
            question: "Can you take me directly to Bahrain Airport?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we can drop you directly at Bahrain International Airport instead of a city address — let us know when booking.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Riyadh to Bahrain"
                description="Private taxi and car transfer from Riyadh to Bahrain via King Fahd Causeway. Door-to-door cross-border transportation with a professional driver."
                services={[
                    { name: 'Riyadh to Bahrain Taxi', description: 'Private one-way or return cross-border transfer via King Fahd Causeway.' },
                    { name: 'Family & Group Vehicles', description: 'Vehicles selected based on passenger and luggage requirements.' },
                    { name: 'Door-to-Door Pickup', description: 'Pickup from your Riyadh address, drop-off in Bahrain.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Riyadh to Bahrain Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Private Transfer via King Fahd Causeway
                    </span>
                }
                subtitle="Private door-to-door taxi from Riyadh to Bahrain via the King Fahd Causeway, with fixed vehicle pricing and professional drivers."
                location="Approx. 430-480 km | From 800 SAR | 24/7 Booking"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Riyadh%20to%20Bahrain" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Get Your Riyadh to Bahrain Taxi Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking?pickup=Riyadh&dropoff=Bahrain">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book Online
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Traveling from Riyadh to Bahrain by road? Our private Riyadh to Bahrain taxi service provides direct door-to-door transportation across Saudi Arabia and the King Fahd Causeway into Bahrain. We collect you from your home, hotel, office or King Khalid International Airport and take you directly to your destination in Bahrain.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        The road journey is roughly 430-480 km depending on your exact pickup and drop-off points. Driving time is usually around four to five hours before allowing for border processing, traffic and rest stops. Because the journey crosses an international border, passengers must carry the required passport, visa and residency documents.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Choose a private sedan, Hyundai Staria VIP, GMC Yukon XL or Mercedes Sprinter based on your group size and luggage. Fares start from 800 SAR, with fixed vehicle pricing available for popular vehicle categories.
                    </p>
                </div>
            </section>

            {/* Quick facts */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
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

            {/* Pricing */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-3 text-center">Riyadh to Bahrain Taxi Price</h2>
                    <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Starting fares from Riyadh. Final price depends on vehicle, passenger count, luggage, exact pickup/drop-off location and travel date.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse bg-white/5 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/10 text-left">
                                    <th className="py-3 px-4 font-bold">Vehicle</th>
                                    <th className="py-3 px-4 font-bold">Capacity</th>
                                    <th className="py-3 px-4 font-bold text-right">From</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {pricing.map((p) => (
                                    <tr key={p.vehicle}>
                                        <td className="py-3 px-4 font-semibold"><Link href={p.link} className="hover:underline">{p.vehicle}</Link></td>
                                        <td className="py-3 px-4 text-gray-300">{p.cap}</td>
                                        <td className="py-3 px-4 text-right font-bold text-primary">{p.price} SAR</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-xs text-center mt-4">Causeway tolls and fuel are included in the quoted price. Prices are for the vehicle, not per passenger.</p>
                </div>
            </section>

            {/* Route breakdown */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Riyadh to Bahrain Route</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        The journey runs from Riyadh east across the Eastern Province, approaching Dammam/Al Khobar before crossing into Bahrain via the King Fahd Causeway.
                    </p>
                    <div className="flex flex-col gap-3">
                        {[
                            'Pickup in Riyadh (home, hotel, office or King Khalid Airport)',
                            'Highway journey toward the Eastern Province',
                            'Approach to Dammam / Al Khobar',
                            'Saudi exit at the Causeway checkpoint',
                            'King Fahd Causeway crossing (~25 km)',
                            'Bahrain entry procedures',
                            'Continue to Manama, Seef, Juffair, Bahrain Airport or your destination',
                        ].map((step, i) => (
                            <div key={step} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <span className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                                <span className="text-sm text-gray-700">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Causeway */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Riyadh to Bahrain via King Fahd Causeway</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The King Fahd Causeway is the ~25 km land link between Saudi Arabia and Bahrain. At the border, passengers may need to complete normal passport and immigration procedures, while the vehicle is subject to the applicable border and customs requirements.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Border processing time isn't controlled by the driver and can vary significantly on weekends, holidays and busy travel periods — allow extra time if you have a fixed appointment or flight.
                    </p>
                    <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Read our full King Fahd Causeway guide <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Documents */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3"><FileText className="w-7 h-7 text-primary" /> Documents & Visa Responsibility</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our driver handles the vehicle-side requirements and guides you through the journey, while each passenger remains responsible for carrying the required passport, visa, residency documents and other entry documents.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {documents.map((d) => (
                            <div key={d} className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{d}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-4">Entry requirements vary by nationality and residency status — confirm your eligibility before travelling.</p>
                </div>
            </section>

            {/* Taxi vs flight */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Riyadh to Bahrain: Taxi vs Flight</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Flying may be faster in pure travel time, especially for a solo passenger. A private car is mainly attractive for passengers who value door-to-door convenience, privacy, flexible departure times and group travel — no separate airport transfer, no airport check-in, and one vehicle for the whole group and luggage.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        If you're travelling with family, colleagues or heavy luggage, a private taxi can be more convenient overall, even if the road journey itself takes longer than a flight.
                    </p>
                </div>
            </section>

            {/* Pickup / dropoff */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-6 h-6 text-primary" /> Popular Riyadh Pickup Locations</h2>
                        <div className="flex flex-wrap gap-2">
                            {riyadhPickups.map((p) => (
                                <span key={p} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg">{p}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Building2 className="w-6 h-6 text-primary" /> Popular Bahrain Drop-off Locations</h2>
                        <div className="flex flex-wrap gap-2">
                            {bahrainDropoffs.map((p) => (
                                <span key={p} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this for */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who Is This Transfer For?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Building2, title: 'Families', desc: 'Extra luggage space and flexible rest stops.' },
                            { icon: Car, title: 'Business Travelers', desc: 'Direct, private transport without waiting for scheduled options.' },
                            { icon: Plane, title: 'Airport Transfers', desc: 'Pickup from King Khalid Airport, drop-off at Bahrain Airport.' },
                            { icon: MapPin, title: 'Group Travel', desc: 'One vehicle for the whole group instead of coordinating multiple cars.' },
                        ].map((p) => (
                            <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                                <p.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                                <p className="text-gray-500 text-xs">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How to Book</h2>
                    <div className="space-y-5">
                        {[
                            { step: '1', title: 'Send Your Journey Details', desc: 'Contact us via WhatsApp or the booking form with your pickup and destination.' },
                            { step: '2', title: 'Choose Your Vehicle', desc: 'Pick a vehicle based on your passenger count and luggage.' },
                            { step: '3', title: 'Confirm Your Quote', desc: "We'll confirm the fare and vehicle for your trip." },
                            { step: '4', title: 'Prepare Your Documents', desc: 'Make sure your passport and Bahrain entry documents are ready.' },
                            { step: '5', title: 'Meet Your Driver', desc: 'Your vehicle collects you from the agreed Riyadh location.' },
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Riyadh to Bahrain Taxi FAQs</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Related Saudi-Bahrain Routes</h3>
                    <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
                        <Link href="/routes/bahrain-riyadh/" className="text-primary font-semibold hover:underline">Bahrain to Riyadh Taxi</Link>
                        <Link href="/routes/dammam-bahrain/" className="text-primary font-semibold hover:underline">Dammam to Bahrain Taxi</Link>
                        <Link href="/routes/khobar-bahrain/" className="text-primary font-semibold hover:underline">Al Khobar to Bahrain Taxi</Link>
                        <Link href="/routes/bahrain-dammam/" className="text-primary font-semibold hover:underline">Bahrain to Dammam Taxi</Link>
                        <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className="text-primary font-semibold hover:underline">King Fahd Causeway Taxi</Link>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Related Riyadh Routes</h3>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/routes/riyadh-dammam/" className="text-primary font-semibold hover:underline">Riyadh to Dammam</Link>
                        <Link href="/routes/riyadh-doha/" className="text-primary font-semibold hover:underline">Riyadh to Doha</Link>
                        <Link href="/routes/riyadh-kuwait/" className="text-primary font-semibold hover:underline">Riyadh to Kuwait</Link>
                        <Link href="/routes/riyadh-abu-dhabi/" className="text-primary font-semibold hover:underline">Riyadh to Abu Dhabi</Link>
                        <Link href="/services/gcc-chauffeur-service/" className="text-primary font-semibold hover:underline">GCC Chauffeur Service</Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Get Your Riyadh to Bahrain Taxi Quote</h2>
                    <p className="text-gray-400 mb-10 text-lg">Send your pickup location, travel date, passenger count and preferred vehicle to receive a quote.</p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Riyadh%20to%20Bahrain" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Book on WhatsApp</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
