import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Car } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Riyadh to Dammam Taxi | Private Car Eastern Province | Taxi Service KSA',
    description: 'Private taxi from Riyadh to Dammam (400 km). Intercity chauffeur to Al Khobar, Dhahran, Jubail. Fixed rates, professional drivers. Book Riyadh Dammam transfer now.',
    keywords: [
        'Riyadh to Dammam taxi',
        'Riyadh to Dammam private car',
        'Riyadh Dammam transfer',
        'taxi from Riyadh to Dammam',
        'Riyadh to Al Khobar taxi',
        'intercity taxi Eastern Province',
        'Riyadh to Jubail private car',
        'Riyadh to Dhahran transfer',
        'private driver Riyadh Dammam',
        'how to get from Riyadh to Dammam',
        'Riyadh Dammam car service',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/riyadh-to-dammam-taxi/',
    },
    openGraph: {
        title: 'Riyadh to Dammam Taxi | Private Car | Taxi Service KSA',
        description: 'Private intercity car from Riyadh to Dammam (400 km, ~4 hours). Fixed price. WhatsApp to book.',
        url: 'https://taxiserviceksa.com/riyadh-to-dammam-taxi/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How much is a taxi from Riyadh to Dammam?',
        answer: 'A private taxi from Riyadh to Dammam costs approximately SAR 400–800 depending on vehicle type. A Toyota Camry starts from SAR 400 for 1–3 passengers. A GMC Yukon XL for families starts from SAR 650. All prices are fixed — no meter, no surge. WhatsApp us for an exact quote for your travel date.',
    },
    {
        question: 'How long is the drive from Riyadh to Dammam?',
        answer: 'The Riyadh to Dammam drive is approximately 400 km along Highway 40 (Dammam Highway). Journey time is typically 3.5–4.5 hours in normal traffic. Early morning departures are recommended to avoid the industrial traffic near Dammam.',
    },
    {
        question: 'Is there a bus from Riyadh to Dammam?',
        answer: 'Yes, SAPTCO operates bus services from Riyadh Bus Station to Dammam. The Haramain High Speed Railway does not cover this route. A private car is faster (door-to-door), more comfortable for families, and can drop you directly at Al Khobar, Dhahran, or Jubail — not just Dammam city.',
    },
    {
        question: 'Can I get a taxi from Riyadh to Al Khobar?',
        answer: 'Yes. We provide direct transfers from Riyadh to Al Khobar (approximately 420 km, 4–4.5 hours). Al Khobar is 20 km from Dammam city centre. The price is similar to Riyadh–Dammam. Many business travelers prefer Al Khobar for its Corniche hotels and proximity to the King Fahd Causeway to Bahrain.',
    },
    {
        question: 'Is there a train from Riyadh to Dammam?',
        answer: 'Yes. Saudi Railways (SAR) operates daily trains from Riyadh Railway Station to Dammam Railway Station. The journey takes approximately 4.5 hours. For travelers with heavy luggage, families, or those needing door-to-door service, a private car is more convenient.',
    },
];

const routes = [
    { to: 'Dammam City', dist: '400 km', time: '3.5–4.5 hrs', price: 'From SAR 400' },
    { to: 'Al Khobar', dist: '420 km', time: '4–4.5 hrs', price: 'From SAR 420' },
    { to: 'Dhahran', dist: '410 km', time: '4–4.5 hrs', price: 'From SAR 410' },
    { to: 'Jubail Industrial City', dist: '490 km', time: '4.5–5 hrs', price: 'From SAR 500' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Riyadh to Dammam Intercity Taxi',
    serviceType: 'Intercity Private Car',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966552202642' },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    description: 'Private intercity taxi from Riyadh to Dammam, Al Khobar, Dhahran, and Jubail. Fixed rates, door-to-door.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '400', availability: 'https://schema.org/InStock' },
};

export default function RiyadhToDammamPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Riyadh to Dammam Taxi</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Riyadh to Dammam<br />
                        <span className="text-blue-300">Private Taxi</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Door-to-door private car from Riyadh to Dammam, Al Khobar, Dhahran, and Jubail.
                        400 km, ~4 hours. Fixed price, professional driver, 24/7.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20taxi%20from%20Riyadh%20to%20Dammam" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white border-b py-5 px-4">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
                    {[{ label: 'Distance', value: '400 km' }, { label: 'Drive Time', value: '~4 hrs' }, { label: 'Starting Price', value: 'SAR 400' }, { label: 'Service', value: '24/7' }].map((stat) => (
                        <div key={stat.label}>
                            <p className="text-2xl font-black text-blue-700">{stat.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Routes Table */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Routes & Prices from Riyadh</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {routes.map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-300 transition-all">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Riyadh → {r.to}</p>
                                <p className="font-black text-2xl text-blue-700 mb-2">{r.price}</p>
                                <p className="text-sm text-gray-600">📍 {r.dist} &nbsp;·&nbsp; ⏱ {r.time}</p>
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
                            { href: '/dammam-airport-taxi/', label: 'Dammam Airport Taxi' },
                            { href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
                            { href: '/riyadh-to-jeddah-private-car/', label: 'Riyadh to Jeddah' },
                            { href: '/border-crossings/', label: 'Dammam to Bahrain' },
                            { href: '/routes/', label: 'All Routes' },
                            { href: '/fleet/', label: 'Our Fleet' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4" />{link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-blue-900 to-emerald-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Riyadh → Dammam Now</h2>
                    <p className="text-gray-300 mb-8">Share your travel date and we send you a fixed price in minutes.</p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20taxi%20from%20Riyadh%20to%20Dammam" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg">
                        <Phone className="w-5 h-5" /> WhatsApp — Instant Quote
                    </a>
                </section>
            </div>
        </div>
    );
}
