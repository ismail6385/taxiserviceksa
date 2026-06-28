import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Star, Hotel } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah Corniche Hotel Taxi | Luxury Chauffeur Transfers | Taxi Service KSA',
    description: 'Private hotel taxi transfers along the Jeddah Corniche. Luxury chauffeur service for Ritz-Carlton, Shangri-La, Hilton, Waldorf Astoria, and Rosewood. Fixed rates, 24/7.',
    keywords: [
        'Jeddah Corniche hotel taxi',
        'hotel transfer Jeddah Corniche',
        'Waldorf Astoria Jeddah taxi',
        'Ritz-Carlton Jeddah chauffeur',
        'Shangri-La Jeddah private car',
        'Rosewood Jeddah taxi service',
        'Jeddah hotel to airport taxi',
        'Jeddah hotel to Makkah transfer',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/jeddah-corniche-hotel-taxi/',
    },
};

const faqs = [
    {
        question: 'Which hotels do you serve along the Jeddah Corniche?',
        answer: 'We provide premium pick-up and drop-off services for all hotels on the Corniche, including The Ritz-Carlton Jeddah, Shangri-La Jeddah, Hilton Jeddah, Waldorf Astoria Jeddah - Qasr Al Sharq, and Rosewood Jeddah.',
    },
    {
        question: 'Can I book a private transfer from a Jeddah Corniche hotel to Makkah?',
        answer: 'Yes. We offer direct hotel-to-hotel transfers from the Corniche directly to hotels in Makkah near Al Haram (approximately 90 km, 1 hour 15 minutes drive). Standard and luxury family vehicles (GMC Yukon XL) are available.',
    },
    {
        question: 'What is the price of an airport transfer to a Corniche hotel?',
        answer: 'Fixed-price transfers from King Abdulaziz International Airport (JED) to Jeddah Corniche hotels start from SAR 80–120 depending on the vehicle class. All rates are agreed before travel with no extra charges for flight delays.',
    },
    {
        question: 'Do you offer full-day chauffeur hire from Corniche hotels?',
        answer: 'Yes. You can hire a professional driver with a vehicle of your choice for a full day (8–10 hours) starting from the hotel lobby. Perfect for shopping tours, corporate meetings, and city sightseeing.',
    },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jeddah Corniche Hotel Chauffeur & Taxi Transfer',
    serviceType: 'Hotel Chauffeur & Private Taxi',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966569487569' },
    areaServed: { '@type': 'City', name: 'Jeddah' },
    description: 'Luxury hotel taxi and chauffeur transfers along the Jeddah Corniche for premium hotel guests.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '80', availability: 'https://schema.org/InStock' },
};

export default function JeddahCornicheHotelTaxiPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <span>Jeddah Corniche Hotel Taxi</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">⭐ Premium Hotel Transfers</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Lobby Pickups</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Jeddah Corniche<br />
                        <span className="text-emerald-300">Hotel Taxi Service</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Chauffeur-driven private hotel transfers starting directly from your hotel lobby on the Jeddah Corniche. Seamless transport to Jeddah Airport, Makkah Haram, and central business hubs.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20hotel%20transfer%20on%20Jeddah%20Corniche" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> WhatsApp Booking
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-zinc-950 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Book Online <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Hotels We Serve */}
                <section>
                    <h2 className="text-3xl font-black text-zinc-900 mb-8">Premium Hotels We Serve</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'The Ritz-Carlton Jeddah', location: 'Al Hamra Corniche' },
                            { name: 'Shangri-La Jeddah', location: 'Ash Shati Corniche' },
                            { name: 'Waldorf Astoria Qasr Al Sharq', location: 'North Corniche' },
                            { name: 'Rosewood Jeddah', location: 'North Corniche Road' },
                            { name: 'Jeddah Hilton', location: 'North Corniche' },
                            { name: 'InterContinental Jeddah', location: 'Al Hamra District' },
                        ].map((h, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-300 transition-all flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Hotel className="w-6 h-6 text-emerald-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-900 text-base leading-tight mb-1">{h.name}</h3>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">{h.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="bg-emerald-950 text-white rounded-3xl p-10">
                    <h2 className="text-3xl font-black mb-8 text-center">Hotel Chauffeur Capabilities</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Airport Transfers', desc: 'Direct pickups from JED Airport terminal to your hotel lobby. 24/7 flight tracking.' },
                            { title: 'Intercity Travels', desc: 'Direct luxury transfers to Makkah Clock Tower, Madinah, or corporate hubs in Riyadh.' },
                            { title: 'Hourly Private Hire', desc: 'Hire a luxury Sedan or SUV with a driver for business meetings or family shopping.' },
                            { title: 'Pristine Luxury Fleet', desc: 'Cadillac Escalade, Mercedes S-Class, GMC Yukon XL, and Genesis G80 available.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-emerald-300 mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-zinc-900 mb-8">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-zinc-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
