import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Makkah to Jeddah Taxi | Private Car Transfer | Taxi Service KSA',
    description: 'Private taxi from Makkah to Jeddah (85 km). Direct transfer to Jeddah Airport, hotels, and Corniche. Fixed rates, Muslim drivers. Book Makkah Jeddah taxi now.',
    keywords: [
        'Makkah to Jeddah taxi',
        'Makkah to Jeddah private car',
        'taxi from Makkah to Jeddah',
        'Makkah Jeddah transfer',
        'Makkah to Jeddah airport taxi',
        'private driver Makkah to Jeddah',
        'Makkah to Jeddah price',
        'how to get from Makkah to Jeddah',
        'Makkah to Jeddah car service',
        'Makkah to JED airport',
        'intercity taxi Makkah Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/makkah-to-jeddah-taxi/',
    },
    openGraph: {
        title: 'Makkah to Jeddah Taxi | Private Transfer | Taxi Service KSA',
        description: 'Direct private taxi from Makkah to Jeddah. 85 km, ~1 hour. Airport, hotels, Corniche. Fixed rates.',
        url: 'https://taxiserviceksa.com/makkah-to-jeddah-taxi/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How much is a taxi from Makkah to Jeddah?',
        answer: 'A private taxi from Makkah to Jeddah costs SAR 150–350 depending on the vehicle and destination. A Toyota Camry to Jeddah city centre starts from SAR 150. Transfer to King Abdulaziz Airport (JED) starts from SAR 180 (slightly farther north). GMC Yukon XL for families starts from SAR 280. All prices are fixed — no meter running.',
    },
    {
        question: 'How long is the drive from Makkah to Jeddah?',
        answer: 'The Makkah to Jeddah drive is approximately 85 km via Highway 40 (Makkah–Jeddah Expressway). Journey time is typically 1–1.5 hours in normal traffic. During Hajj and Umrah peak season (especially after Friday prayers), traffic can extend this to 2–3 hours on certain routes. Early morning departures are fastest.',
    },
    {
        question: 'Is there a bus from Makkah to Jeddah?',
        answer: 'Yes, SAPTCO buses run between Makkah and Jeddah. However, for pilgrims with heavy luggage, families, or those connecting to Jeddah Airport for a flight, a private car is significantly more convenient and reliable. The bus does not go directly to the airport.',
    },
    {
        question: 'Can a taxi take me from Makkah to Jeddah Airport?',
        answer: 'Yes. We provide direct transfers from any Makkah hotel (near Al Haram) to King Abdulaziz International Airport (JED). The airport is approximately 100 km from the centre of Makkah (airport is north of Jeddah city). Allow 90 minutes minimum for the journey during normal traffic, 2 hours during Umrah season.',
    },
    {
        question: 'Do I need a Muslim driver to travel from Makkah?',
        answer: 'All drivers entering the Makkah Haram boundaries must be Muslim. All Taxi Service KSA drivers serving Makkah are Muslim and have valid access permits. Non-Muslim passengers are transported to and from Makkah checkpoints.',
    },
    {
        question: 'Can I book a taxi from Makkah to Jeddah for the same day?',
        answer: 'Yes, same-day bookings are available subject to driver availability. WhatsApp us at +966 552 202 642 with your hotel name and required departure time. During Hajj and Umrah peak seasons, we recommend booking at least 24 hours in advance to guarantee your vehicle.',
    },
];

const routes = [
    { to: 'Jeddah City Centre', dist: '85 km', time: '60–90 min', price: 'From SAR 150' },
    { to: 'JED Airport (King Abdulaziz)', dist: '100 km', time: '75–105 min', price: 'From SAR 180' },
    { to: 'Jeddah Corniche', dist: '90 km', time: '65–95 min', price: 'From SAR 160' },
    { to: 'Al Balad (Old Jeddah)', dist: '88 km', time: '65–90 min', price: 'From SAR 155' },
    { to: 'Jeddah Port (King Fahd)', dist: '95 km', time: '70–100 min', price: 'From SAR 170' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Makkah to Jeddah Private Taxi',
    serviceType: 'Intercity Taxi Transfer',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966552202642' },
    description: 'Private taxi from Makkah to Jeddah (85 km). Airport, city centre, Corniche. Fixed rates, Muslim drivers.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '150', availability: 'https://schema.org/InStock' },
};

export default function MakkahToJeddahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <span>Makkah to Jeddah Taxi</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-teal-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-teal-500">🕌 From Al Haram</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">85 km · ~1 hour</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Makkah to Jeddah<br />
                        <span className="text-teal-300">Private Taxi</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Direct private taxi from Makkah hotels to Jeddah — city centre, airport (JED), or Corniche.
                        Muslim-certified drivers. Fixed price. No surge during Umrah season.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20taxi%20from%20Makkah%20to%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-teal-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white border-b py-5 px-4">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
                    {[{ v: '85 km', l: 'Distance' }, { v: '~1 hr', l: 'Journey' }, { v: 'SAR 150', l: 'Starting From' }, { v: '24/7', l: 'Available' }, { v: '✅ Muslim', l: 'Drivers' }].map((s) => (
                        <div key={s.l}><p className="text-2xl font-black text-teal-700">{s.v}</p><p className="text-xs text-gray-500 uppercase font-semibold">{s.l}</p></div>
                    ))}
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Routes */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Makkah to Jeddah — Routes & Prices</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {routes.map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-teal-300 transition-all">
                                <p className="text-xs text-gray-500 uppercase mb-1">Makkah (Al Haram) → {r.to}</p>
                                <p className="font-black text-2xl text-teal-700 mb-2">{r.price}</p>
                                <p className="text-sm text-gray-500">📍 {r.dist} · ⏱ {r.time}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Included */}
                <section className="bg-teal-50 border border-teal-100 rounded-3xl p-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">What's Included</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {['Muslim-certified driver', 'Pickup from your Makkah hotel lobby', 'Drop-off at Jeddah destination', 'Fixed price — confirmed before travel', 'AC vehicle, bottled water', 'No surge during Umrah season', 'WhatsApp driver details before travel', 'Luggage assistance'].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related */}
                <section className="bg-gray-100 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Services</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { href: '/makkah-taxi/', label: 'Makkah City Taxi' },
                            { href: '/makkah-to-madinah-taxi/', label: 'Makkah to Madinah' },
                            { href: '/jeddah-airport-transfer/', label: 'Jeddah Airport Transfer' },
                            { href: '/jeddah-to-fairmont-makkah/', label: 'Jeddah to Makkah' },
                            { href: '/private-taxi-madinah/', label: 'Private Taxi Madinah' },
                            { href: '/routes/', label: 'All Routes' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4" />{link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-teal-900 to-emerald-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Makkah → Jeddah Now</h2>
                    <p className="text-gray-300 mb-8">Share your hotel name and departure time. Fixed price confirmed in minutes.</p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20taxi%20from%20Makkah%20to%20Jeddah" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg">
                        <Phone className="w-5 h-5" /> WhatsApp — Instant Quote
                    </a>
                </section>
            </div>
        </div>
    );
}
