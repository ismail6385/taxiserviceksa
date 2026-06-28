import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Sunset } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Stargazing, Gharameel & Best Sunset Spots Guide 2026',
    description: 'Explore the night skies of AlUla. Complete guide to stargazing in Gharameel, camping under the stars, hidden spots, and best sunrise & sunset views.',
    keywords: ['AlUla stargazing guide 2026', 'Gharameel stargazing AlUla', 'AlUla camping guide', 'best sunset spots in AlUla', 'AlUla hidden gems'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/stargazing-camping-sunset-spots-alula/' },
    openGraph: { title: 'AlUla Stargazing, Gharameel & Best Sunset Spots Guide 2026', description: 'Experience the magical dark skies, camping spots, and scenic viewpoints of AlUla.', type: 'article', url: 'https://taxiserviceksa.com/blog/stargazing-camping-sunset-spots-alula/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Why is Gharameel famous for stargazing?', acceptedAnswer: { '@type': 'Answer', text: 'Gharameel is a remote desert area in AlUla featuring towering thin sandstone pillars. Because it is completely isolated from city lights, it offers a pristine, dark sky (Bortle Scale 1-2) where the Milky Way galaxy, constellations, and shooting stars are visible to the naked eye with stunning clarity.' } },
        { '@type': 'Question', name: 'Can you go camping in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AlUla offers several designated camping and "glamping" zones, ranging from luxury air-conditioned Airstream trailers and dome tents in Ashar Valley to traditional bedouin camp settings in the Gharameel desert.' } },
        { '@type': 'Question', name: 'Where is the best sunset view in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'The Harrat Viewpoint (Harrat Uwayrid) is the ultimate sunset spot, offering a panoramic look over the entire green oasis valley and its dramatic sandstone canyons from a high volcanic plateau.' } },
    ],
};

export default function AlUlaNightSkiesPage() {
    const locations = [
        { name: 'Gharameel Desert', type: '🌌 Stargazing & Rock Pillars', desc: 'A dramatic dark sky reserve. Stand between alien-like rock pillars while a local guide highlights constellations and planets using laser pointers.' },
        { name: 'Harrat Viewpoint', type: '🌅 Sunset & Oasis Panoramas', desc: 'Set on a high volcanic plateau. Offers a viewing deck, fire pits, and cozy seating to watch the sunset over the valley. Features the upscale Greek restaurant OKTO.' },
        { name: 'Elephant Rock (Jabal AlFil)', type: '🍹 Sunset Lounging', desc: 'Watch the sun sink behind the elephant trunk monolith as the sand-sunken couches light up fire pits.' },
        { name: 'Ashar Valley Canyons', type: '⛺ Luxury Glamping', desc: 'Glamp in futuristic mirror pods or vintage Airstream trailers tucked directly under towering canyon walls.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Stargazing & Sunsets</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🌌 Night Skies</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Stargazing, Camping<br /><span className="text-amber-300">& Best Sunset Lookout Spots 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Experience AlUla after dark. Your guide to stargazing in Gharameel, volcanic lookouts, desert camping, and hidden gems.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><Sunset className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Magical Sunsets & Dark Skies</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">AlUla is just as magical after the sun goes down. Free from urban air and light pollution, the vast desert skies become a canvas of infinite stars, nebulae, and passing satellites. Watching the sunset from high volcanic lookouts, followed by a stargazing session in the remote Gharameel desert, is an essential AlUla experience.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Scenic Lookout & Night Spots</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {locations.map((loc, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">{loc.type}</span>
                                <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">{loc.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Tips for Stargazing & Camping</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Book Stargazing early:</strong> Gharameel stargazing tours (starts around **SAR 250** per person including dinner) sell out quickly, especially during new moon weeks when skies are darkest.</li>
                        <li><strong>Pack warm layers:</strong> Desert temperatures drop rapidly after sunset, falling as low as 5°C (41°F) during winter nights. A heavy coat is essential.</li>
                        <li><strong>Photography tips:</strong> Bring a sturdy tripod and set your smartphone camera or DSLR to "Night Mode" or manual exposure (10-15 seconds shutter speed) to capture the Milky Way.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Sunset & Night Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Gharameel is located 1 hour north of AlUla through unlit desert highways. Don\'t stress about night driving — book a private taxi and enjoy the ride.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Gharameel%20or%20Harrat%20Viewpoint%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
