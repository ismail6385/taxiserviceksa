import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Car, Clock, CheckCircle2, Phone, Star, Shield } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Riyadh to Jeddah Private Car | Intercity Taxi Service | Taxi Service KSA',
    description: 'Private car from Riyadh to Jeddah (950 km). Professional intercity chauffeur, door-to-door service, fixed rates. Book Riyadh to Jeddah taxi online or via WhatsApp.',
    keywords: [
        'Riyadh to Jeddah private car',
        'Riyadh to Jeddah taxi',
        'intercity taxi Riyadh Jeddah',
        'private driver Riyadh to Jeddah',
        'car service Riyadh Jeddah',
        'Riyadh Jeddah transfer',
        'Riyadh to Jeddah chauffeur',
        'how to get from Riyadh to Jeddah by car',
        'Riyadh to Jeddah road trip',
        'taxi from Riyadh to Jeddah price',
        'intercity car hire Saudi Arabia',
        'long distance taxi Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/riyadh-to-jeddah-private-car/',
    },
    openGraph: {
        title: 'Riyadh to Jeddah Private Car | Taxi Service KSA',
        description: 'Door-to-door private car from Riyadh to Jeddah. 950 km, ~9 hours, fixed price. Book now.',
        url: 'https://taxiserviceksa.com/riyadh-to-jeddah-private-car/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How much does a private car from Riyadh to Jeddah cost?',
        answer: 'A private car from Riyadh to Jeddah costs approximately SAR 700–1,400 depending on the vehicle type. A Toyota Camry for 1–3 passengers starts from SAR 700. A GMC Yukon XL for families (up to 6) starts from SAR 1,100. Luxury Cadillac Escalade transfers start from SAR 1,400. All prices are fixed — WhatsApp us for an exact quote.',
    },
    {
        question: 'How long does it take to drive from Riyadh to Jeddah?',
        answer: 'The Riyadh to Jeddah drive is approximately 950 km along the Makkah–Riyadh Highway (Route 40). Journey time is typically 9–10 hours with one rest stop. Departure at dawn (4–5 AM) avoids peak traffic and is most comfortable for families. We include one scheduled rest stop at a service station.',
    },
    {
        question: 'Is there a train from Riyadh to Jeddah?',
        answer: 'No, there is no direct train from Riyadh to Jeddah. The Haramain High Speed Railway connects Jeddah with Makkah, Madinah, and KAIA Airport — but not Riyadh. SAR (Saudi Arabian Railways) operates Riyadh–Dammam trains but not Riyadh–Jeddah. A private car or Saudi Airlines flight are the main options.',
    },
    {
        question: 'Is it safe to drive from Riyadh to Jeddah?',
        answer: 'Yes. The Makkah–Riyadh Highway (Route 40) is a modern, well-maintained dual carriageway with service stations every 100–150 km. Speed cameras are active throughout. Our professional drivers are experienced on this route and take mandatory rest breaks. All vehicles are GPS-tracked. Journey safety is our top priority.',
    },
    {
        question: 'Can I book a one-way car from Riyadh to Jeddah?',
        answer: 'Yes. One-way transfers are available from Riyadh to Jeddah (and Jeddah to Riyadh). We also offer return trips and multi-city bookings. Book via WhatsApp at +966 552 202 642 with your preferred departure date, time, and pick-up address in Riyadh.',
    },
    {
        question: 'What stops are available on the Riyadh to Jeddah route?',
        answer: 'We include one scheduled rest stop (approximately 30 minutes) at Dawadmi or Al Dawadmi service area (midpoint at ~450 km). Additional stops at tourist sites, petrol stations, or prayer stops can be requested. We also offer Al Taif or Abha stopovers for travellers combining the trip with a mountain getaway.',
    },
];

const vehicles = [
    { name: 'Toyota Camry', passengers: '1–3', luggage: '2 large bags', price: 'From SAR 700', ideal: 'Solo traveler, business trip, couple' },
    { name: 'GMC Yukon XL', passengers: '4–7', luggage: '5 large bags', price: 'From SAR 1,100', ideal: 'Families, groups' },
    { name: 'Hyundai Staria VIP', passengers: '4–7', luggage: '4 large bags', price: 'From SAR 1,200', ideal: 'VIP families, comfort travel' },
    { name: 'Cadillac Escalade', passengers: '4–7', luggage: '4 large bags', price: 'From SAR 1,400', ideal: 'Executive, luxury travel' },
    { name: 'Toyota Hiace', passengers: '8–11', luggage: '10+ bags', price: 'From SAR 1,500', ideal: 'Large groups, corporate teams' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Riyadh to Jeddah Private Car Transfer',
    serviceType: 'Intercity Private Car',
    provider: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
        telephone: '+966552202642',
    },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    description: 'Door-to-door private car service from Riyadh to Jeddah. 950 km intercity chauffeur, fixed rates, professional drivers, 24/7 availability.',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'SAR',
        price: '700',
        availability: 'https://schema.org/InStock',
    },
};

export default function RiyadhToJeddahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Riyadh to Jeddah Private Car</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">
                            🚗 950 km Intercity Transfer
                        </span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                            Door to Door
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Riyadh to Jeddah<br />
                        <span className="text-emerald-300">Private Car Service</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Door-to-door intercity chauffeur from Riyadh to Jeddah. 950 km, ~9 hours, one rest stop included.
                        Fixed price, no surge, no surprises.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20private%20car%20from%20Riyadh%20to%20Jeddah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5" />
                            Get WhatsApp Quote
                        </a>
                        <Link
                            href="/booking/"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Book Online <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Route Info Banner */}
            <section className="bg-white border-b py-5 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        {[
                            { label: 'Distance', value: '950 km' },
                            { label: 'Drive Time', value: '~9 hours' },
                            { label: 'Rest Stops', value: '1 included' },
                            { label: 'Pickup', value: 'Door to door' },
                            { label: 'Available', value: '24/7' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-black text-emerald-700">{stat.value}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Vehicle Options */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-3">Choose Your Vehicle</h2>
                    <p className="text-gray-600 mb-8">All vehicles have AC, phone chargers, and bottled water included.</p>
                    <div className="space-y-4">
                        {vehicles.map((v, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-300 transition-all flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{v.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{v.ideal}</p>
                                </div>
                                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                                    <span>👥 {v.passengers} pax</span>
                                    <span>🧳 {v.luggage}</span>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-emerald-700 text-xl">{v.price}</p>
                                    <a
                                        href={`https://wa.me/966552202642?text=Hi,%20I%20need%20${v.name}%20from%20Riyadh%20to%20Jeddah`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-green-600 font-semibold hover:underline"
                                    >
                                        Book this →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">What's Included</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'Door-to-door pickup from your Riyadh address',
                            'Drop-off at any Jeddah address or hotel',
                            'One scheduled rest stop (~30 min)',
                            'Air conditioning & comfortable seats',
                            'Bottled water for all passengers',
                            'Phone chargers (USB-A & USB-C)',
                            'Professional licensed driver',
                            'GPS tracking for safety',
                            'WhatsApp updates throughout journey',
                            'Luggage loading & unloading assistance',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">
                        Riyadh to Jeddah — Common Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Services */}
                <section className="bg-gray-100 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Intercity Routes</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
                            { href: '/jeddah-airport-transfer/', label: 'Jeddah Airport Transfer' },
                            { href: '/riyadh-to-dammam-taxi/', label: 'Riyadh to Dammam Taxi' },
                            { href: '/makkah-to-madinah-taxi/', label: 'Makkah to Madinah Taxi' },
                            { href: '/border-crossings/', label: 'Border Crossing Services' },
                            { href: '/routes/', label: 'All KSA Routes' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-gray-900 to-emerald-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Your Riyadh → Jeddah Transfer</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        Tell us your date, time, and number of passengers. We'll send you a fixed price instantly.
                    </p>
                    <a
                        href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20private%20car%20from%20Riyadh%20to%20Jeddah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg"
                    >
                        <Phone className="w-5 h-5" />
                        WhatsApp Now — Instant Quote
                    </a>
                </section>
            </div>
        </div>
    );
}
