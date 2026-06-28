import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Taxi Madinah | Madinah City Driver | Taxi Service KSA',
    description: 'Private taxi and chauffeur service in Madinah. Airport transfers, Ziyarat tours, hotel pickups, Makkah transfers. Book Madinah private driver now.',
    keywords: [
        'private taxi Madinah',
        'Madinah taxi service',
        'private driver Madinah',
        'Madinah chauffeur',
        'taxi Madinah city',
        'Madinah to Makkah taxi',
        'Ziyarat tour Madinah',
        'Madinah airport taxi',
        'car hire Madinah',
        'Madinah private car',
        'taxi near Masjid Nabawi',
        'Madinah hotel taxi',
        'pilgrimage transport Madinah',
        'Umrah taxi Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/private-taxi-madinah/',
    },
    openGraph: {
        title: 'Private Taxi Madinah | Chauffeur Service | Taxi Service KSA',
        description: 'VIP private taxi in Madinah. Airport, Ziyarat, Makkah transfers. Fixed rates. Book now.',
        url: 'https://taxiserviceksa.com/private-taxi-madinah/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How do I get a taxi in Madinah near Masjid Nabawi?',
        answer: 'The easiest way to get a taxi near Masjid Nabawi is to pre-book via WhatsApp before you arrive. Street taxis and Careem are available but can be unreliable during peak times (Fajr, Maghrib prayers). Taxi Service KSA picks you up directly from your hotel lobby or designated landmark near Al Haram gate.',
    },
    {
        question: 'How much is a taxi from Madinah to Makkah?',
        answer: 'A private taxi from Madinah to Makkah costs approximately SAR 350–650 depending on vehicle type. The journey is approximately 420 km via Highway 15, taking 4–5 hours. A Toyota Camry for 1–3 passengers starts from SAR 350. GMC Yukon XL for families starts from SAR 550. We offer Muslim-certified drivers for this sacred route.',
    },
    {
        question: 'Is there a Ziyarat tour driver in Madinah?',
        answer: 'Yes. We provide dedicated Ziyarat tour drivers in Madinah covering: Masjid Nabawi, Masjid Quba, Masjid Al-Qiblatayn, Uhud Mountain, Al-Baqi Cemetery, and the dates market. A half-day Ziyarat tour (4 hours) starts from SAR 250. Full-day (8 hours) with multiple sites from SAR 400.',
    },
    {
        question: 'Is there a taxi from Madinah Airport to Masjid Nabawi?',
        answer: 'Yes. We provide airport transfers from Prince Mohammad Bin Abdulaziz Airport (MED) to all hotels near Masjid Nabawi. The distance is approximately 15 km (15–25 minutes). Fixed rate starting from SAR 70. Meet-and-greet available at arrivals.',
    },
    {
        question: 'Can I book a daily driver for my entire stay in Madinah?',
        answer: 'Yes. Daily chauffeur packages in Madinah are available for 1, 3, or 7 days. Ideal for families or groups who want a dedicated driver throughout their Umrah or Ziyarat stay. The driver is assigned exclusively to your group and is available from Fajr to Isha. Packages start from SAR 350/day.',
    },
];

const ziyaratSites = [
    { name: 'Masjid Nabawi', note: 'Prophet\'s Mosque — the main destination' },
    { name: 'Masjid Quba', note: 'First mosque in Islam, 5 km from Nabawi' },
    { name: 'Masjid Al-Qiblatayn', note: 'Mosque of Two Qiblas' },
    { name: 'Uhud Mountain', note: 'Battle of Uhud & Martyrs\' cemetery' },
    { name: 'Al-Baqi Cemetery', note: 'Companions of the Prophet buried here' },
    { name: 'Dates Market (Tamr)', note: 'Best place to buy Madinah dates' },
    { name: 'Al-Hijaz Railway Museum', note: 'Ottoman-era train station museum' },
    { name: 'Wadi Al-Aqiq', note: 'Historic valley, scenic views' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Taxi Madinah',
    serviceType: 'Private Taxi & Ziyarat Tours',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966552202642' },
    areaServed: { '@type': 'City', name: 'Madinah' },
    description: 'Private taxi and VIP chauffeur in Madinah. Ziyarat tours, airport transfers, Makkah connections. Fixed rates, Muslim-certified drivers.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '70', availability: 'https://schema.org/InStock' },
};

export default function PrivateTaxiMadinahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-green-950 via-green-900 to-teal-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-green-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Private Taxi Madinah</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-green-500">🕌 Madinah Al-Munawwarah</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">24/7 Service</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Private Taxi<br />
                        <span className="text-green-300">Madinah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Respectful, professional taxi service in Madinah Al-Munawwarah. Airport pickups, Ziyarat tours, Makkah transfers, and hotel-to-hotel service. Muslim-certified drivers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20private%20taxi%20in%20Madinah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get Instant Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Services */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Madinah Taxi Services & Prices</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: '✈️ Airport Transfer (MED)', desc: 'MED Airport to Masjid Nabawi hotels', price: 'From SAR 70', time: '15–25 min' },
                            { title: '🕌 Ziyarat Tour (Half Day)', desc: '4 hours — Nabawi, Quba, Uhud, Al-Baqi', price: 'From SAR 250', time: '4 hours' },
                            { title: '🌟 Ziyarat Tour (Full Day)', desc: '8 hours — all major sites', price: 'From SAR 400', time: '8 hours' },
                            { title: '🚌 Madinah to Makkah', desc: 'Direct transfer via Highway 15', price: 'From SAR 350', time: '4–5 hours' },
                            { title: '🏨 Hotel to Hotel Transfer', desc: 'Any Madinah address to another', price: 'From SAR 30', time: 'Varies' },
                            { title: '📅 Daily Driver Package', desc: 'Full day exclusive driver hire', price: 'From SAR 350/day', time: '8–10 hours' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-300 transition-all">
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">⏱ {s.time}</span>
                                    <span className="font-black text-green-700">{s.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ziyarat Sites */}
                <section className="bg-green-50 border border-green-100 rounded-3xl p-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-3">Madinah Ziyarat Sites We Cover</h2>
                    <p className="text-gray-600 mb-8">Our drivers know every sacred site in Madinah. They provide respectful, informed transport for pilgrims.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {ziyaratSites.map((site) => (
                            <div key={site.name} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-900">{site.name}</p>
                                    <p className="text-sm text-gray-500">{site.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Common Questions — Madinah Taxi</h2>
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
                            { href: '/madinah-airport-taxi/', label: 'Madinah Airport Taxi' },
                            { href: '/makkah-to-madinah-taxi/', label: 'Makkah to Madinah Transfer' },
                            { href: '/makkah-taxi/', label: 'Makkah Taxi Service' },
                            { href: '/jeddah-airport-transfer/', label: 'Jeddah Airport Transfer' },
                            { href: '/blog/best-hotels-masjid-nabawi-madinah/', label: 'Best Hotels Near Nabawi' },
                            { href: '/routes/', label: 'All Saudi Routes' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4" />{link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-green-900 to-teal-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Your Madinah Taxi</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        WhatsApp us with your arrival time and hotel. We'll confirm your driver details instantly.
                    </p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20private%20taxi%20in%20Madinah" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg">
                        <Phone className="w-5 h-5" /> WhatsApp Now
                    </a>
                </section>
            </div>
        </div>
    );
}
