import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Travel Tips, Checklist, Safety & Cost Guide 2026',
    description: 'Essential travel tips, packing checklist, safety advice, cost breakdown, and FAQs for visiting Tabuk, Saudi Arabia in 2026.',
    keywords: ['Tabuk travel tips 2026', 'Tabuk travel checklist', 'Tabuk safety tips', 'Tabuk travel cost guide', 'Tabuk travel FAQs'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-travel-tips-checklist-cost/' },
    openGraph: { title: 'Tabuk Travel Tips, Checklist, Safety & Cost Guide 2026', description: 'Your essential Tabuk preparation handbook with tips, packing lists, costs, and safety info.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-travel-tips-checklist-cost/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much does a Tabuk trip cost?', acceptedAnswer: { '@type': 'Answer', text: 'A budget 4-day Tabuk trip costs approximately SAR 1,500-2,500 per person (flights, budget hotel, food, local transport). Mid-range travelers spend SAR 3,000-5,000 including a 4x4 rental or private driver and nicer dining. Luxury trips with beach resorts and guided tours run SAR 8,000+.' } },
        { '@type': 'Question', name: 'Do I need a 4x4 vehicle in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'For Tabuk city and paved highways, a regular sedan is fine. However, reaching Wadi Al-Disah, Jabal Al-Lawz, Hisma Desert, and many beach coves requires a 4x4 vehicle or a private taxi driver with an SUV. Hiring a local driver who knows the desert roads is highly recommended.' } },
    ],
};

export default function TabukTipsChecklistPage() {
    const checklist = [
        'Book flights and accommodation 2-4 weeks in advance (peak season: Oct-Mar)',
        'Download offline Google Maps for Tabuk region — cell service is patchy in remote areas',
        'Pack warm layers for winter (Dec-Feb) — desert nights drop to 0-5°C',
        'Bring SPF 50+ sunscreen, UV sunglasses, and a wide-brimmed hat',
        'Pack sturdy hiking boots for Wadi Al-Disah and mountain trails',
        'Carry 4+ liters of water per person for any desert excursion',
        'Rent a 4x4 or pre-book a private SUV taxi for off-road destinations',
        'Buy a local SIM card at Tabuk Airport for GPS navigation data',
    ];
    const costs = [
        { item: 'Budget hotel (per night)', cost: 'SAR 150 - 300' },
        { item: 'Mid-range hotel (per night)', cost: 'SAR 400 - 700' },
        { item: 'Luxury beach resort (per night)', cost: 'SAR 1,200+' },
        { item: 'Local meal (cafeteria)', cost: 'SAR 15 - 35' },
        { item: 'Restaurant dinner', cost: 'SAR 60 - 120' },
        { item: 'Private taxi (full day)', cost: 'SAR 400 - 600' },
        { item: '4x4 rental (per day)', cost: 'SAR 250 - 450' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6"><MapPin className="w-4 h-4" /><Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Tips & Costs</span></div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🛡️ Travel Tips</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Travel Tips, Checklist<br /><span className="text-cyan-300">& Cost Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Everything you need to prepare for your Tabuk adventure: packing essentials, safety warnings, cost breakdowns, and FAQs.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Pre-Departure Checklist</h2>
                    <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                        <ul className="space-y-3">{checklist.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>))}</ul>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Estimated Travel Costs</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead><tr className="bg-sky-800 text-white"><th className="p-3 text-left rounded-tl-xl">Item</th><th className="p-3 text-left rounded-tr-xl">Approx. Cost</th></tr></thead>
                            <tbody>{costs.map((c, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}><td className="p-3 text-gray-800">{c.item}</td><td className="p-3 text-cyan-700 font-bold">{c.cost}</td></tr>))}</tbody>
                        </table>
                    </div>
                </section>
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Safety & Emergency Info</h2></div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Desert driving:</strong> Never venture off paved roads into sand or wadi beds alone. Always travel with a guide or in convoy with at least two vehicles.</li>
                        <li><strong>Flash floods:</strong> Wadis (dry riverbeds) can flood rapidly during rare rainfall. Never camp inside a wadi floor.</li>
                        <li><strong>Wildlife:</strong> Scorpions and snakes are present in desert camping zones. Shake out shoes and sleeping bags before use.</li>
                        <li><strong>Emergency:</strong> Dial <strong>911</strong> for all emergencies. King Fahad Specialist Hospital is the main medical facility in Tabuk city.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Hire an Expert Local Driver</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Avoid risky desert navigation. Our drivers know every canyon route, beach access road, and mountain track in the Tabuk region.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20driver%20for%20my%20Tabuk%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/complete-tabuk-travel-guide/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Full Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
