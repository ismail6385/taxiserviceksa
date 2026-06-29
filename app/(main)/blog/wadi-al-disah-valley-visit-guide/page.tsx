import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Wadi Al-Disah Valley Tabuk: Complete Visit Guide 2026',
    description: 'The ultimate guide to visiting Wadi Al-Disah in Tabuk. Learn about 4x4 trails, hiking routes, oasis springs, camping, and local driver hire tips for 2026.',
    keywords: ['Wadi Al Disah valley guide 2026', 'Al Disah canyon Tabuk', 'Wadi Al Disah hiking trails', 'Disah oasis springs', 'Tabuk desert excursions'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/wadi-al-disah-valley-visit-guide/' },
    openGraph: { title: 'Wadi Al-Disah Valley Tabuk: Complete Visit Guide 2026', description: 'Plan your desert canyon excursion to Wadi Al-Disah with our step-by-step visitor guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/wadi-al-disah-valley-visit-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How do I visit Wadi Al-Disah?', acceptedAnswer: { '@type': 'Answer', text: 'Wadi Al-Disah is located 220 km south of Tabuk city (a 2-hour drive). While the main highways are paved, entering the actual sand-filled canyon requires a 4x4 vehicle. Most tourists drive a sedan to the valley entrance village (Al-Disah) and hire a local Bedouin driver with a 4x4 for SAR 150-250 for a 2-hour canyon tour.' } },
        { '@type': 'Question', name: 'Is there water in Wadi Al-Disah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wadi Al-Disah is famous for its year-round freshwater springs that bubble up through the sandy canyon floor, nourishing lush date palms, tall reeds, citrus trees, and wild herbs inside the canyon.' } },
    ],
};

export default function WadiAlDisahGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Wadi Al-Disah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🏜️ Canyon</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Wadi Al-Disah Valley:<br /><span className="text-cyan-300">Complete Canyon Visit Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Enter Saudi Arabia\'s most breathtaking sandstone canyon. Detailed tips on 4x4 hire, hiking routes, and oasis springs.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">The Oasis in the Desert</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Wadi Al-Disah (meaning "Valley of the Palms") is a 15 km long canyon carved through a massive red sandstone plateau. It represents one of Saudi Arabia\'s most beautiful natural wonders. Towering rock columns rise up to 500 meters above a flat, sand-filled canyon floor. Natural freshwater springs sustain a lush green oasis of date palms, sweet basil, and tall reeds in the middle of a barren desert.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Navigate the Canyon</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Drive to Al-Disah Village:</strong> The highway from Tabuk city is beautifully paved and can be driven in a standard sedan (a 2-hour trip).</li>
                        <li><strong>Hire a Local 4x4:</strong> Do not drive your rental sedan into the sandy canyon. Park at the village edge and hire a local Bedouin driver with an SUV/4x4. They charge around SAR 200 for a detailed tour of the canyon, springs, and archaeological ruins.</li>
                        <li><strong>Trekking/Hiking:</strong> You can walk the canyon floor on foot. The path is flat but sandy; wear high-top boots to keep sand out.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to Wadi Al-Disah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Skip the hassle of desert driving. Pre-book a private 4x4 SUV taxi directly from your hotel in Tabuk to the canyon entrance.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20Wadi%20Al-Disah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
