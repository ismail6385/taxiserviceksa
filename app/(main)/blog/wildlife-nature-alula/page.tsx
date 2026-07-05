import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Heart, ShieldAlert, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Wildlife & Nature in AlUla: Reserves & Species | Taxi Service KSA',
    description: 'Explore the spectacular wildlife and nature of AlUla. Complete guide to Sharaan Nature Reserve, Arabian Leopard breeding program, flora, and desert fauna.',
    keywords: ['AlUla wildlife and nature', 'Sharaan nature reserve', 'Arabian leopard AlUla', 'Saudi Arabia desert animals', 'AlUla flora fauna'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/wildlife-nature-alula/' },
    openGraph: {
        title: 'Wildlife & Nature in AlUla: Reserves & Species',
        description: 'Discover the rich flora, fauna, and protective conservation reserves in the historic valley of AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/wildlife-nature-alula/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I visit Sharaan Nature Reserve?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sharaan Nature Reserve is a protected conservation zone. Guided safaris and tours organized by approved eco-tourism operators are available to experience the wildlife and landscape.'
            }
        },
        {
            '@type': 'Question',
            name: 'Are there leopards in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The critically endangered Arabian Leopard is currently bred at a state-of-the-art conservation center in AlUla, with the goal of reintroducing them into the wild in the Sharaan Nature Reserve once ecosystem restoration is complete.'
            }
        }
    ],
};

export default function AlUlaWildlifeNaturePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Wildlife & Nature</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🐆 Conservation</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Eco-Tourism</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Wildlife & Nature in AlUla: <br />
                        <span className="text-amber-300">Reserves & Species Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Discover the thriving biodiversity of the desert. Learn about the Sharaan Nature Reserve, the Arabian Leopard project, gazelles, and native desert flora.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">AlUla\'s Natural Ecosystem</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Far from being a barren wasteland, AlUla is a rich ecological zone. It features deep sandstone canyons, fertile agricultural soil, and volcanic fields that support diverse wildlife. Through major conservation efforts, the local ecosystem is undergoing dramatic restoration.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Key Wildlife Pillars</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                🐆 Arabian Leopard
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The crown jewel of AlUla\'s conservation. State-of-the-art breeding programs aim to save this critically endangered big cat from extinction.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                🦌 Sharaan Reserve
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A 1,500 sq km protected area dedicated to re-establishing native flora, Nubian ibex, red-necked ostriches, and Arabian gazelles.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                🌿 Desert Flora
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Towering palms, wild moringa, aromatic herbs, and desert plants that have adapted to survive dry climates for centuries.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Eco-Tourism & Safety Rules</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>No Off-Roading:</strong> Off-road driving destroys delicate habitats and is strictly prohibited in nature reserves.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Do Not Feed Animals:</strong> Respect the wild animals; feeding them alters their natural behavior and diet.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Comfortable Eco-Safaris:</strong> To visit Sharaan Nature Reserve safely, book a pre-arranged tour with a professional chauffeur to handle the long drive.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Eco-Safari Ride</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Explore AlUla\'s nature comfortably. Book a private SUV with a professional driver to take you to Sharaan Reserve launch areas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20a%20safari%20in%20Sharaan%20Nature%20Reserve%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
