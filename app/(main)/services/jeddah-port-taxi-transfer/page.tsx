import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Star, Shield, Anchor } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah Port Taxi Transfer | Cruise Terminal Transfers | Taxi Service KSA',
    description: 'Private taxi from Jeddah Islamic Port. Premium transfers for cruise ship passengers to Makkah (Umrah), JED Airport, and Jeddah hotels. Fixed rates, book via WhatsApp.',
    keywords: [
        'Jeddah port taxi transfer',
        'Jeddah Islamic Port transfer',
        'Jeddah cruise port taxi',
        'cruise passenger transfer Makkah',
        'Jeddah port to Makkah private car',
        'Jeddah port to airport taxi',
        'Jeddah port chauffeur service',
        'Jeddah port to Fairmont Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/jeddah-port-taxi-transfer/',
    },
};

const faqs = [
    {
        question: 'How do I book a taxi from Jeddah Islamic Port?',
        answer: 'You can pre-book a private car via WhatsApp at +966 552 202 642 or through our online form. Provide your cruise arrival time and ship name. Your chauffeur will be waiting outside the cruise terminal gate with a name sign.',
    },
    {
        question: 'Can cruise passengers travel from Jeddah Port to Makkah for Umrah?',
        answer: 'Yes. We specialize in day-trip transfers for cruise passengers who want to perform Umrah. Our Muslim-certified drivers will drive you directly to Makkah (85 km, ~1 hour), wait for you to complete your Umrah, and return you back to the ship before departure.',
    },
    {
        question: 'What is the price of a taxi from Jeddah Port to Makkah?',
        answer: 'A standard private transfer in a Toyota Camry starts from SAR 180. A GMC Yukon XL for family groups starts from SAR 300. Round-trip packages (including waiting time for Umrah) are available. All prices are fixed in advance.',
    },
    {
        question: 'How far is Jeddah Islamic Port from the airport?',
        answer: 'Jeddah Islamic Port is approximately 25 km from King Abdulaziz International Airport (JED). The drive takes around 30–40 minutes depending on traffic. We provide direct airport connections.',
    },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jeddah Port Cruise Chauffeur & Taxi Transfer',
    serviceType: 'Port Chauffeur & Private Taxi',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966569487569' },
    areaServed: { '@type': 'City', name: 'Jeddah' },
    description: 'Private taxi transfers from Jeddah Islamic Port cruise ship terminal to Makkah, JED airport, and city hotels.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '180', availability: 'https://schema.org/InStock' },
};

export default function JeddahPortTaxiTransferPage() {
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
                        <span>Jeddah Port Transfer</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-blue-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500">🚢 Cruise Terminal Pickups</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">24/7 Available</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Jeddah Islamic Port<br />
                        <span className="text-blue-300">Taxi & Chauffeur</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Pre-booked private transfers from the Jeddah Islamic Port Cruise terminal. Direct rides to Makkah Al Haram, KAIA Airport (JED), and Jeddah hotels. Professional chauffeurs, fixed rates.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20from%20Jeddah%20Islamic%20Port" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Popular Routes */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Popular Port Transfers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { to: 'Makkah Al Haram', price: 'From SAR 180', note: 'Direct Umrah pilgrim transfer. 1 hour drive.' },
                            { to: 'Jeddah Airport (JED)', price: 'From SAR 120', note: 'KAIA flight connection transfers. 35 mins.' },
                            { to: 'Jeddah City Hotels', price: 'From SAR 80', note: 'Corniche & downtown hotel drops. 20 mins.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-300 transition-all">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                    <Anchor className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{r.to}</h3>
                                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{r.note}</p>
                                <p className="font-black text-blue-700">{r.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-blue-50 border border-blue-100 rounded-3xl p-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Seamless Cruise Pickups</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            'Chauffeur greets you outside the Cruise gate',
                            'Name sign display for ease of identification',
                            'Muslim drivers certified to access Makkah Haram boundaries',
                            'GMC Yukon XL & luxury options for families and luggage',
                            'Fixed pricing with all terminal gate fees included',
                            '24/7 client dispatch via WhatsApp',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
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
            </div>
        </div>
    );
}
