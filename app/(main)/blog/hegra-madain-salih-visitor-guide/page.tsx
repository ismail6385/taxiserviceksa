import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hegra (Mada\'in Salih) AlUla: Complete Visitor Guide 2026',
    description: 'Detailed guide to visiting Hegra (Mada\'in Salih) in AlUla. History of the Nabataean tombs, UNESCO status, booking tickets, opening hours, and rules.',
    keywords: ['Hegra visitor guide 2026', 'Madain Salih tombs AlUla', 'UNESCO site Hegra Saudi Arabia', 'Hegra ticket booking guide', 'tomb of lihyan son of kuza'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/hegra-madain-salih-visitor-guide/' },
    openGraph: { title: 'Hegra (Mada\'in Salih) AlUla: Complete Visitor Guide 2026', description: 'Everything you need to know to visit Hegra: history, ticket booking, rules, and top tombs.', type: 'article', url: 'https://taxiserviceksa.com/blog/hegra-madain-salih-visitor-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is Hegra (Mada\'in Salih) and why is it famous?', acceptedAnswer: { '@type': 'Answer', text: 'Hegra is the first UNESCO World Heritage site in Saudi Arabia. It was the southern capital of the Nabataean Kingdom (the same civilization that built Petra in Jordan) and features 111 monumental rock-cut tombs dating from the 1st century BCE to the 1st century CE.' } },
        { '@type': 'Question', name: 'Can you go inside the tombs in Hegra?', acceptedAnswer: { '@type': 'Answer', text: 'To protect the ancient inscriptions and burial chambers, visitors are not allowed to step inside the rock tombs. You can view them closely from the outside, take pictures, and learn about their history from local guides ("Rawi") stationed at each tomb cluster.' } },
        { '@type': 'Question', name: 'How do you tour Hegra?', acceptedAnswer: { '@type': 'Answer', text: 'Hegra cannot be toured independently on foot. Visitors must book official bus tours, vintage Land Rover tours, or private horse-carriage experiences through the official Experience AlUla platform.' } },
    ],
};

export default function HegraVisitorGuidePage() {
    const keyTombs = [
        { name: 'Tomb of Lihyan Son of Kuza (Qasr al-Farid)', desc: 'The most famous, majestic tomb in AlUla. Standing 4 stories tall, this monolithic structure was carved out of a single rock and left unfinished, showing Nabataean carving techniques.' },
        { name: 'Jabal Ithlib', desc: 'A dramatic natural slit in the rock resembling Petra\'s Siq, serving as a sacred site with a large dining hall (Diwan) used for ancient religious assemblies.' },
        { name: 'Jabal al-Banat', desc: 'One of the largest tomb clusters in Hegra, featuring nearly 30 tombs with elaborate facade carvings dedicated to Nabataean women.' },
        { name: 'Jabal al-Ahmar', desc: 'A red sandstone outcrop housing 18 tombs, named after its distinct reddish hue that glows intensely at sunrise and sunset.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Hegra Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🏛️ UNESCO Site</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Hegra (Mada'in Salih):<br /><span className="text-amber-300">Complete AlUla Visitor Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Step into the ancient Nabataean kingdom. Detailed tips on tickets, tour options, and must-see tombs at Saudi Arabia's premier UNESCO site.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">History of Hegra</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Hegra (also known as Mada'in Salih or Al-Hijr) was the second city of the Nabataean Empire, which ruled spice trade routes across the Middle East from its capital Petra in Jordan. Dating from the 1st century BCE, the Nabataeans carved massive, highly detailed monumental tombs into sandstone rocks. While Petra was built in a narrow canyon, Hegra is set in an open desert valley, making it visually distinct and dramatic.</p>
                    <p className="text-gray-700 leading-relaxed">In 2008, Hegra was officially declared a UNESCO World Heritage site, the first in Saudi Arabia, recognizing its outstanding historical significance and preservation quality.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Most Famous Tombs & Sites to See</h2>
                    <div className="grid gap-6">
                        {keyTombs.map((t, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-amber-800 text-base mb-2">⭐ {t.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Ticket Booking & Tour Types</h2>
                    <p className="text-gray-700 leading-relaxed">Entrance tickets must be booked online at <em>experiencealula.com</em>. General entry starts at **SAR 95** per person. You can choose from these tour methods:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Standard Tour Bus:</strong> Air-conditioned bus stopping at key tomb clusters with an official guide (Rawi) at each stop. (Included in basic ticket)</li>
                        <li><strong>Vintage Land Rover Tour:</strong> Explore the tombs in an open-top retro 4x4 Land Rover with a private driver-guide. (Premium price)</li>
                        <li><strong>Horse-Carriage Tour:</strong> Take a traditional carriage ride through the desert valleys of Hegra.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to Hegra Entrance</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Need a lift to the Hegra Winter Park visitor center? We provide direct private transfers from your resort to the site entrance.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Hegra%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
