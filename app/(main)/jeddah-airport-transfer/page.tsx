import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Clock, CheckCircle2, ArrowRight, MapPin, Car, Users, Shield, Star, Phone } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah Airport Transfer | King Abdulaziz International Airport (JED) | Taxi Service KSA',
    description: 'Private airport transfer at King Abdulaziz International Airport Jeddah (JED). VIP chauffeur, meet-and-greet, fixed rates, 24/7 service. Book Jeddah airport taxi now.',
    keywords: [
        'Jeddah airport transfer',
        'King Abdulaziz International Airport taxi',
        'JED airport taxi',
        'Jeddah airport pickup',
        'Jeddah airport chauffeur',
        'private driver Jeddah airport',
        'airport taxi Jeddah',
        'JED airport transfer',
        'luxury airport transfer Jeddah',
        'Jeddah airport to Makkah taxi',
        'Jeddah airport to Madinah transfer',
        'Jeddah airport car service',
        '24/7 airport taxi Jeddah',
        'meet and greet Jeddah airport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/jeddah-airport-transfer/',
    },
    openGraph: {
        title: 'Jeddah Airport Transfer | King Abdulaziz International Airport (JED)',
        description: 'Private VIP airport transfer at King Abdulaziz International Airport (JED), Jeddah. Meet-and-greet, fixed rates, 24/7. Book now.',
        url: 'https://taxiserviceksa.com/jeddah-airport-transfer/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

const faqs = [
    {
        question: 'How much does a taxi from Jeddah airport cost?',
        answer: 'A private taxi from King Abdulaziz International Airport (JED) to Jeddah city centre costs approximately SAR 100–200 depending on destination and vehicle. Transfers to Makkah cost SAR 300–600 and transfers to Madinah cost SAR 600–1,200. Taxi Service KSA offers fixed rates with no surge pricing — you know the exact price before you book.',
    },
    {
        question: 'Is there a taxi from Jeddah airport to Makkah?',
        answer: 'Yes. Taxi Service KSA provides direct private transfers from King Abdulaziz Airport (JED) to all Makkah hotels including Hilton Suites Hajar Tower, Makkah Clock Royal Tower, and Pullman ZamZam. The journey takes approximately 1–1.5 hours (85 km). Non-Muslim passengers are dropped at Makkah checkpoints. Muslim pilgrims are driven directly to their hotels.',
    },
    {
        question: 'How far is Jeddah airport from the city centre?',
        answer: 'King Abdulaziz International Airport is approximately 19 km north of Jeddah city centre, a 20–30 minute drive in normal traffic. During peak hours (7–9 AM, 4–7 PM), the journey can take 35–50 minutes. The airport has two main terminals: the North Terminal and the South Terminal (Hajj Terminal).',
    },
    {
        question: 'Is Uber available at Jeddah airport?',
        answer: 'Yes, Uber and Careem are available at Jeddah airport but can surge 2–4x during peak hours, Hajj, and Ramadan. For Umrah and Hajj travelers with luggage, a pre-booked private transfer is more reliable — your driver waits at arrivals with a name sign even if your flight is delayed.',
    },
    {
        question: 'How do I book a driver from Jeddah airport?',
        answer: 'Book via WhatsApp at +966 552 202 642 or through our website. Provide your flight number, arrival time, and destination. We track your flight live — if it is delayed, your driver waits. No extra charge for flight delays up to 90 minutes for international flights.',
    },
    {
        question: 'Can I get a transfer from Jeddah airport to Madinah?',
        answer: 'Yes. We provide direct intercity transfers from JED Airport to Madinah (approximately 420 km, 4.5–5 hours). This is a popular route for Umrah pilgrims who fly into Jeddah and travel to Madinah first. Prices start from SAR 600 in a standard vehicle. The Haramain High Speed Railway from Jeddah to Madinah is also an option (2 hours).',
    },
];

const routes = [
    { from: 'JED Airport', to: 'Jeddah City Centre', dist: '19 km', time: '20–30 min', price: 'From SAR 100' },
    { from: 'JED Airport', to: 'Makkah (Al Haram)', dist: '85 km', time: '60–90 min', price: 'From SAR 300' },
    { from: 'JED Airport', to: 'Madinah', dist: '420 km', time: '4.5–5 hrs', price: 'From SAR 600' },
    { from: 'JED Airport', to: 'Jeddah Corniche Hotels', dist: '25 km', time: '25–40 min', price: 'From SAR 120' },
    { from: 'JED Airport', to: 'Taif', dist: '130 km', time: '90–120 min', price: 'From SAR 400' },
    { from: 'JED Airport', to: 'Al Balad (Old Jeddah)', dist: '22 km', time: '25–35 min', price: 'From SAR 110' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jeddah Airport Transfer — King Abdulaziz International Airport (JED)',
    serviceType: 'Airport Transfer & Private Chauffeur',
    provider: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
        telephone: '+966552202642',
    },
    areaServed: { '@type': 'City', name: 'Jeddah' },
    serviceLocation: {
        '@type': 'Airport',
        name: 'King Abdulaziz International Airport',
        iataCode: 'JED',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jeddah',
            addressCountry: 'SA',
        },
    },
    description: 'Private VIP airport transfer at King Abdulaziz International Airport (JED), Jeddah. Meet-and-greet, fixed rates, 24/7 service to Makkah, Madinah, and Jeddah hotels.',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'SAR',
        price: '80',
        availability: 'https://schema.org/InStock',
    },
};

export default function JeddahAirportTransferPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Jeddah Airport Transfer</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-emerald-500">
                            ✈️ King Abdulaziz Airport (JED)
                        </span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                            24/7 Available
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Jeddah Airport Transfer<br />
                        <span className="text-emerald-300">Private & Reliable</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Pre-booked private chauffeur from King Abdulaziz International Airport (JED).
                        Meet-and-greet, flight tracking, fixed rates — to Makkah, Madinah, or anywhere in Saudi Arabia.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20Jeddah%20Airport%20transfer%20(JED)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5" />
                            Book via WhatsApp
                        </a>
                        <Link
                            href="/booking/"
                            className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Get Instant Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="bg-white border-b border-gray-100 py-5 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-600">
                        {['✅ Fixed Rates — No Surge', '🛩️ Real-Time Flight Tracking', '📍 Meet & Greet at Arrivals', '🕐 90 Min Free Wait', '🗣️ English & Arabic Drivers', '⭐ 4.9/5 Rating'].map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Routes & Prices */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-3">
                        Jeddah Airport Transfer Routes & Prices
                    </h2>
                    <p className="text-gray-600 mb-8">
                        All prices are fixed — no surge, no hidden fees. WhatsApp us for an exact quote.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {routes.map((route, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">From</p>
                                        <p className="font-bold text-gray-900">{route.from}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-emerald-500 mt-5 flex-shrink-0" />
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">To</p>
                                        <p className="font-bold text-gray-900">{route.to}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 pt-3 border-t border-gray-50">
                                    <span>📍 {route.dist} &nbsp;·&nbsp; ⏱ {route.time}</span>
                                    <span className="font-bold text-emerald-700">{route.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Book With Us */}
                <section className="bg-emerald-900 text-white rounded-3xl p-10">
                    <h2 className="text-3xl font-black mb-8 text-center">Why Choose Taxi Service KSA?</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { icon: '✈️', title: 'Flight Tracking', desc: 'We monitor your flight live. 90-minute free wait for international arrivals — no extra charge.' },
                            { icon: '📋', title: 'Name Sign at Arrivals', desc: 'Your driver is at the arrivals gate with your name displayed. No searching, no stress.' },
                            { icon: '🔒', title: 'Fixed Rates', desc: 'No Uber surge, no metered surprises. One fixed price agreed before you travel.' },
                            { icon: '🕐', title: '24/7 Service', desc: '3 AM Umrah flight? 5 AM business meeting? We operate around the clock, every day.' },
                            { icon: '🌟', title: 'Professional Drivers', desc: 'Ministry of Transport licensed, English-speaking, trained for international travelers.' },
                            { icon: '🚗', title: 'Luxury Fleet', desc: 'Toyota Camry to Cadillac Escalade. Choose the vehicle that fits your group and budget.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-emerald-200 mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">
                        Frequently Asked Questions — Jeddah Airport Transfer
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

                {/* Internal Links */}
                <section className="bg-gray-100 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Services</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { href: '/jeddah-to-fairmont-makkah/', label: 'Jeddah to Fairmont Makkah' },
                            { href: '/jeddah-to-pullman-makkah/', label: 'Jeddah to Pullman Makkah' },
                            { href: '/makkah-taxi/', label: 'Makkah Taxi Service' },
                            { href: '/makkah-to-madinah-taxi/', label: 'Makkah to Madinah Transfer' },
                            { href: '/madinah-airport-taxi/', label: 'Madinah Airport Taxi' },
                            { href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors shadow-sm border border-gray-100"
                            >
                                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Ready to Book Your Jeddah Airport Transfer?</h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
                        WhatsApp us now for an instant fixed-price quote. We reply within minutes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20Jeddah%20Airport%20transfer%20(JED)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
                        >
                            <Phone className="w-5 h-5" />
                            WhatsApp: +966 552 202 642
                        </a>
                        <Link
                            href="/booking/"
                            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Book Online <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
