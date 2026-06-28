import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'VIP Transfer Dammam | Private Car Dammam Al Khobar | Taxi Service KSA',
    description: 'VIP transfer and private car service in Dammam, Al Khobar, and Dhahran. Airport taxi, intercity, corporate travel. Fixed rates. Book Eastern Province taxi now.',
    keywords: [
        'VIP transfer Dammam',
        'private car Dammam',
        'Dammam taxi service',
        'private driver Dammam',
        'Al Khobar taxi',
        'chauffeur Dammam',
        'Dammam airport taxi',
        'luxury car Dammam',
        'Dammam to Bahrain taxi',
        'Eastern Province private car',
        'Dhahran taxi service',
        'Jubail taxi service',
        'Dammam VIP car',
        'car with driver Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/vip-transfer-dammam/',
    },
    openGraph: {
        title: 'VIP Transfer Dammam | Private Car Eastern Province | Taxi Service KSA',
        description: 'VIP private car in Dammam, Al Khobar, Dhahran. Airport, intercity, corporate. Fixed rates.',
        url: 'https://taxiserviceksa.com/vip-transfer-dammam/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'Is there a VIP car service in Dammam?',
        answer: 'Yes. Taxi Service KSA provides VIP private car service in Dammam, Al Khobar, and Dhahran. Vehicle options include Toyota Camry, Genesis G80, GMC Yukon XL, and Cadillac Escalade. Services include airport pickups from KKIA (DMM), hotel transfers, corporate travel, and intercity trips to Riyadh, Jubail, or the Bahrain causeway.',
    },
    {
        question: 'How much is a taxi from Dammam Airport to Al Khobar?',
        answer: 'A private taxi from King Fahd International Airport (DMM) to Al Khobar city costs approximately SAR 80–150 depending on the vehicle. The distance is about 30 km and takes 25–35 minutes. A Toyota Camry starts from SAR 80. GMC Yukon for families from SAR 130. WhatsApp us for an exact quote.',
    },
    {
        question: 'Can I get a private car from Dammam to Bahrain?',
        answer: 'Yes. We provide private car service from Dammam to Bahrain via the King Fahd Causeway (approximately 40 km). Our drivers handle all causeway paperwork. Single-trip pricing starts from SAR 200. This service is popular for business travelers and weekend trips. GCC residents only — valid visa/permit required.',
    },
    {
        question: 'Is there a taxi from Dammam to Jubail?',
        answer: 'Yes. Private taxis from Dammam to Jubail Industrial City (90 km, ~1 hour) start from SAR 180. We serve Jubail Industrial City, Fanateer Beach area, and Royal Commission areas. Corporate accounts available for businesses in Jubail Industrial City.',
    },
    {
        question: 'How do I book a chauffeur in Al Khobar?',
        answer: 'Book via WhatsApp at +966 552 202 642 or through our website. Specify: pickup location in Al Khobar (street address or landmark), destination, date and time, and number of passengers. We confirm within minutes. For corporate accounts, call or WhatsApp for monthly package rates.',
    },
];

const areas = [
    { city: 'Dammam', desc: 'King Fahd International Airport, Old Dammam, Al Faisaliyah' },
    { city: 'Al Khobar', desc: 'Corniche, Prince Sultan Street, Al Rashid Mall area' },
    { city: 'Dhahran', desc: 'Saudi Aramco HQ, KFUPM University, Dhahran Mall' },
    { city: 'Jubail', desc: 'Jubail Industrial City, Royal Commission, Fanateer Beach' },
    { city: 'Al Ahsa', desc: 'Al Hofuf, Al Mubarraz, Al Ahsa National Park' },
    { city: 'Half Moon Bay', desc: 'Beach resorts, weekend getaways from Dammam' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VIP Transfer Dammam — Eastern Province Private Car',
    serviceType: 'VIP Transfer & Private Chauffeur',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966552202642' },
    areaServed: { '@type': 'City', name: 'Dammam' },
    description: 'VIP private car in Dammam, Al Khobar, Dhahran. Airport, intercity, Bahrain causeway, corporate travel.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '80', availability: 'https://schema.org/InStock' },
};

export default function VipTransferDammamPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <span>VIP Transfer Dammam</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-blue-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500">🚗 Eastern Province</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Dammam · Khobar · Dhahran</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        VIP Transfer<br />
                        <span className="text-blue-300">Dammam</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Private VIP car service across the Eastern Province — Dammam, Al Khobar, Dhahran, Jubail.
                        Airport pickups, corporate travel, Bahrain causeway. Fixed rates, 24/7.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20VIP%20transfer%20in%20Dammam" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Services */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Eastern Province Services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { icon: '✈️', title: 'KKIA Airport (DMM)', desc: 'Meet & greet at King Fahd International Airport. 24/7.', price: 'From SAR 80' },
                            { icon: '🌉', title: 'Dammam to Bahrain', desc: 'King Fahd Causeway crossing. Driver handles paperwork.', price: 'From SAR 200' },
                            { icon: '🏭', title: 'Jubail Industrial City', desc: 'Corporate transfers for aramco contractors & executives.', price: 'From SAR 180' },
                            { icon: '🏢', title: 'Corporate Monthly', desc: 'Fixed monthly packages for Aramco & SABIC employees.', price: 'Custom quote' },
                            { icon: '🌆', title: 'City Tours', desc: 'Al Khobar Corniche, Dhahran, Half Moon Bay.', price: 'From SAR 200/day' },
                            { icon: '🚗', title: 'Intercity to Riyadh', desc: 'Dammam to Riyadh direct. 400 km, ~4 hours.', price: 'From SAR 400' },
                        ].map((s) => (
                            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-300 transition-all">
                                <span className="text-2xl mb-3 block">{s.icon}</span>
                                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                                <p className="font-black text-blue-700">{s.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Areas Covered */}
                <section className="bg-blue-50 border border-blue-100 rounded-3xl p-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Areas We Cover in Eastern Province</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {areas.map((a) => (
                            <div key={a.city} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-900">{a.city}</p>
                                    <p className="text-sm text-gray-500">{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
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
                            { href: '/riyadh-to-dammam-taxi/', label: 'Riyadh to Dammam Taxi' },
                            { href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
                            { href: '/border-crossings/', label: 'Border Crossing Services' },
                            { href: '/fleet/', label: 'Our VIP Fleet' },
                            { href: '/routes/', label: 'All Routes' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4" />{link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Your Dammam VIP Transfer</h2>
                    <p className="text-gray-300 mb-8">Fast response, fixed price, professional driver — Eastern Province covered.</p>
                    <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20VIP%20transfer%20in%20Dammam" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg">
                        <Phone className="w-5 h-5" /> WhatsApp Now
                    </a>
                </section>
            </div>
        </div>
    );
}
