import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Travel Tips, Checklist & Safety Guide 2026',
    description: 'Essential travel tips, packing checklist, and safety guide for visiting AlUla. Learn what to wear, safety precautions, and travel advice for 2026.',
    keywords: ['AlUla travel tips 2026', 'AlUla travel checklist', 'AlUla safety tips', 'what to wear in AlUla', 'AlUla travel guidelines'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-travel-tips-checklist-safety/' },
    openGraph: { title: 'AlUla Travel Tips, Checklist & Safety Guide 2026', description: 'Your essential preparation handbook for AlUla: travel tips, packing lists, and safety advice.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-travel-tips-checklist-safety/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What should I wear in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Both men and women should dress modestly. Women do not need to wear a headscarf or abaya unless visiting specific active religious sites, but should cover shoulders and knees. Men should wear long pants. Lightweight, breathable linen or cotton clothing is ideal, along with a warm jacket for chilly winter desert nights.' } },
        { '@type': 'Question', name: 'Is AlUla safe for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, AlUla is exceptionally safe. Crime levels are extremely low, and the area is highly monitored. The main safety concern is the desert heat during summer and driving on sandy or unpaved desert roads without a proper 4x4 vehicle.' } },
        { '@type': 'Question', name: 'Do I need to book activities in advance?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Due to preservation limits, the number of daily visitors allowed in Hegra, Dadan, and Jabal Ikmah is capped. Tickets must be booked online days or weeks in advance, especially during the peak winter season.' } },
    ],
};

export default function AlUlaTipsChecklistPage() {
    const checklist = [
        'Book Hegra entry tickets at least 1-2 weeks in advance',
        'Download offline Google Maps of the AlUla region',
        'Pack high SPF sunscreen and UV sunglasses',
        'Carry a warm jacket or fleece for cool desert nights',
        'Wear sturdy, comfortable closed-toe walking/hiking shoes',
        'Rent a 4x4 if driving deep into the desert; otherwise, hire a private taxi',
        'Bring a hydration backpack or reusable water bottle',
        'Buy a local Saudi SIM card at the airport for navigation data',
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Travel Tips</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🛡️ Travel Tips</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Travel Tips, Checklist<br /><span className="text-amber-300">& Safety Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Everything you need to know before visiting AlUla. From packing essentials to local customs and safety guidelines.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Essential AlUla Travel Tips</h2></div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Dress Code:</strong> Modest clothing is key. Flowy pants, long skirts, and linen shirts are perfect for staying cool and respectful.</li>
                        <li><strong>Water & Hydration:</strong> The desert air is extremely dry. Worshippers and tourists alike should drink at least 3-4 liters of water daily.</li>
                        <li><strong>Desert Navigation:</strong> Mobile reception is patchy in deep valleys. Download offline maps and keep your emergency contacts ready.</li>
                        <li><strong>Respect the Heritage:</strong> Do not touch, climb, or scratch the ancient rock carvings and tomb walls in Hegra, Dadan, or Jabal Ikmah. Doing so carries heavy fines.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">AlUla Pre-Departure Checklist</h2>
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                        <ul className="space-y-3">
                            {checklist.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Safety & Emergency Information</h2>
                    <p className="text-gray-700 leading-relaxed">AlUla is highly secure with constant tourist police patrols. However, desert environments require personal caution. Avoid hiking alone off designated trails, always inform your hotel of your route, and check weather alerts for rare but sudden flash floods in desert valleys (wadis).</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <p className="font-bold text-gray-800 text-sm">Emergency Services</p>
                            <p className="text-gray-600 text-xs">Dial <strong>911</strong> for Police, Ambulance, or Fire emergencies in Saudi Arabia.</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <p className="font-bold text-gray-800 text-sm">AlUla Hospital</p>
                            <p className="text-gray-600 text-xs">Prince Abdulaziz Bin Mosaad Hospital is the primary medical facility in the region.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Travel safely and in style with our licensed drivers who are experts in navigating the highways and roads to AlUla.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/jeddah-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Jeddah → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
