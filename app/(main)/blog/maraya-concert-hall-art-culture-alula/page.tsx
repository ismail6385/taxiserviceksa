import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Maraya Concert Hall, Art & Culture Guide to AlUla 2026',
    description: 'Detailed guide to visiting Maraya Concert Hall in AlUla. Discover AlUla\'s art exhibitions, museums, architecture, and contemporary cultural projects.',
    keywords: ['Maraya Concert Hall AlUla guide', 'largest mirrored building in the world', 'AlUla art and culture 2026', 'AlUla museums guide', 'Maraya social restaurant booking'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/maraya-concert-hall-art-culture-alula/' },
    openGraph: { title: 'Maraya Concert Hall, Art & Culture Guide to AlUla 2026', description: 'Explore Maraya — the mirrored architectural masterwork — and the contemporary art scene of AlUla.', type: 'article', url: 'https://taxiserviceksa.com/blog/maraya-concert-hall-art-culture-alula/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Can you visit Maraya Concert Hall without tickets?', acceptedAnswer: { '@type': 'Answer', text: 'No. Maraya is located inside the secured Ashar Valley residential and resort zone. To enter, you must have an active booking: either tickets to a concert, a reservation at the rooftop Maraya Social restaurant, or guest status at one of the luxury resorts like Banyan Tree or Habitas.' } },
        { '@type': 'Question', name: 'What is Maraya made of?', acceptedAnswer: { '@type': 'Answer', text: 'Maraya is covered in 9,740 copper-treated tempered glass mirrors that reflect the surrounding sandstone canyons, making the building seamlessly blend into the desert landscape. It holds the Guinness World Record for the largest mirrored building.' } },
        { '@type': 'Question', name: 'What are the main art spaces in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Key art hubs include: 1) Desert X AlUla (outdoor monumental art installation). 2) Al-Jadidah arts district (street murals, galleries). 3) Madrasat AdDeera (crafts and heritage skills school). 4) Wadi AlFann (Valley of the Arts, featuring massive permanent land art).' } },
    ],
};

export default function MarayaArtCulturePage() {
    const spaces = [
        { name: 'Maraya Concert Hall', desc: 'The mirrored landmark reflecting Ashar Valley. Hosts global musicians, luxury brand product launches, and conferences inside a state-of-the-art concert hall.' },
        { name: 'Al-Jadidah Art District', desc: 'A vibrant arts and design district adjacent to Old Town. Features colorful murals, outdoor cinemas, small craft galleries, and design studios.' },
        { name: 'Wadi AlFann (Valley of the Arts)', desc: 'A massive 65 square kilometer canyon dedicated to permanent, large-scale land art commissions by world-famous contemporary artists.' },
        { name: 'Madrasat AdDeera', desc: 'A former girls school converted into a cultural arts center, teaching local women and artisans traditional crafts like pottery, weaving, and jewelry.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Maraya & Art Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🎨 Art & Culture</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Maraya Mirrored Hall:<br /><span className="text-amber-300">AlUla Art & Cultural Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Discover Maraya, the mirrored mirage of Ashar Valley, alongside the thriving contemporary art installations and cultural districts of AlUla.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Maraya: The Mirrored Mirage</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Maraya — meaning "mirror" in Arabic — is a breathtaking architectural achievement. Rising out of the sandy floor of Ashar Valley, this 500-seat theater is wrapped in 9,740 mirrored panels. Designed by Italian firm Giò Forma, the structure acts as a mirage, reflecting the red sandstone cliffs and canyons around it. It has hosted performances by Alicia Keys, Andrea Bocelli, and other global icons.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Art Spaces & Centers in AlUla</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {spaces.map((s, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-amber-800 text-base mb-2">{s.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Visit Maraya Hall</h2>
                    <p className="text-gray-700 leading-relaxed">To pass the security gates leading to Maraya in Ashar Valley, you must secure a booking in advance. The easiest way is to book lunch or dinner at **Maraya Social**, the fine-dining rooftop restaurant by Michelin-starred chef Jason Atherton. Ensure you carry your booking confirmation PDF to show at the gate.</p>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to Ashar Valley</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">We provide licensed private taxi transfers direct to the Ashar Valley gate to ensure you arrive on time for your dinner or concert at Maraya.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Maraya%20Concert%20Hall%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
