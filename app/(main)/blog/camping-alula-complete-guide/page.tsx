import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Moon, Calendar, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Camping in AlUla: Complete Guide | Taxi Service KSA',
    description: 'The ultimate guide to camping in AlUla. Learn about luxury glamping resorts, traditional desert camping, wild camping rules, gear rentals, and stargazing locations.',
    keywords: ['camping in AlUla', 'AlUla luxury glamping', 'desert camping Saudi Arabia', 'stargazing Gharameel AlUla', 'AlUla campsites'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/camping-alula-complete-guide/' },
    openGraph: {
        title: 'Camping in AlUla: Complete Guide',
        description: 'Sleep under a blanket of stars. Discover the best camping and glamping experiences in AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/camping-alula-complete-guide/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is wild camping allowed in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Wild camping on protected archaeological sites or private lands is strictly prohibited. However, camping in designated public desert areas, volcanic fields (Harrat), or booking private glamping resorts is completely legal and highly recommended.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the best month for camping in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best months are from November through March, when daytime temperatures are pleasant (15°C - 24°C) and nights are cold, perfect for sitting around a campfire.'
            }
        }
    ],
};

export default function CampingAlUlaGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Camping Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">⛺ Glamping</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Winter Camping</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Camping in AlUla: <br />
                        <span className="text-amber-300">The Ultimate Desert Sleepover Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Sleep under one of the darkest skies on earth. Discover luxury glamping resorts, traditional camp setups, and key desert survival rules.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Types of Camping in AlUla</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        AlUla offers a range of overnight desert experiences, catering to both rugged adventurers looking to set up their own tents and luxury travelers looking for high-end glamping:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">🛋️ Luxury Glamping</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Book retro Airstreams or luxury canvas tents at resorts like Caravan by Habitas or Canyon RV. Enjoy fire pits, private bathrooms, and room service.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">🔥 Traditional Desert Camping</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Go deep into the canyons (like Gharameel or Sharaan) with an organized tour operator. Includes Bedouin tents, carpets, wood stoves, and traditional food.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Essential Camping Rules</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Desert Warmth:</strong> Desert nights in winter can drop below 5°C. Bring heavy sleeping bags, thermal wear, and heavy jackets.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>No Litters:</strong> AlUla is a nature reserve. Keep campgrounds spotless and dispose of garbage in designated containers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Stargazing:</strong> Choose a moonless night for camping to see the Milky Way galaxy in full glory.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Moon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Arrange Your Camp Transport</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Need help getting your gear and family to a remote campsite? Book a spacious private 4x4 SUV taxi to take you deep into the AlUla desert.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20SUV%20taxi%20for%20a%20camping%20trip%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
