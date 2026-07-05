import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Info, Moon, Sun, Coffee } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Ramadan Travel Guide: Opening Hours & Tips | Taxi Service KSA',
    description: 'The complete guide to visiting AlUla during Ramadan. Essential tips on restaurant opening times, tour hours at Hegra, cultural behaviors, and transport guidelines.',
    keywords: ['AlUla Ramadan guide', 'Hegra hours during Ramadan', 'AlUla restaurants Ramadan', 'Ramadan travel Saudi Arabia', 'AlUla transport Ramadan'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-ramadan-travel-guide/' },
    openGraph: {
        title: 'AlUla Ramadan Travel Guide: Opening Hours & Tips',
        description: 'Discover how to plan a respectful and rewarding trip to AlUla during the holy month of Ramadan.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-ramadan-travel-guide/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Are tourist sites in AlUla open during Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, major heritage sites like Hegra, Dadan, and Jabal Ikmah remain open during Ramadan, though their tour slots may shift to early morning or late afternoon to avoid the heat during fasting hours.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can non-Muslims eat in public during the day in Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Eating, drinking, or smoking in public during daylight hours is discouraged out of respect for those fasting. Most restaurants will be closed or offer delivery only during the day, opening fully after sunset (Iftar).'
            }
        }
    ],
};

export default function AlUlaRamadanGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Ramadan Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🕌 Ramadan Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Cultural Travel</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla Ramadan Travel Guide: <br />
                        <span className="text-amber-300">Tips, Rules & Opening Hours</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Plan a smooth and respectful visit to AlUla during the holy month of Ramadan. Understand daytime restrictions, evening celebrations, and site hours.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Moon className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Traveling During the Holy Month</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Ramadan is a peaceful, spiritual month in Saudi Arabia. Visiting AlUla during this period offers a unique cultural perspective, characterized by quiet days and lively, celebratory desert nights.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">What to Expect & Key Adjustments</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Sun className="w-5 h-5 text-amber-700" /> Daytime Quiet
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Most shops, cafes, and restaurants remain closed during the day. Locals rest, and public areas are very quiet.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Coffee className="w-5 h-5 text-amber-700" /> Evening Iftar
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                At sunset, the city comes alive. Families gather for Iftar, and restaurants stay open until the early morning hours (Suhoor).
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Info className="w-5 h-5 text-amber-700" /> Site Hours
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Heritage site tours at Hegra are scheduled in the morning and late afternoon to bypass mid-day heat.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Practical Travel Tips</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Plan Meals:</strong> Arrange lunch with your hotel resort as they often serve international guests in private dining rooms during the day.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Respect Fasting:</strong> Avoid eating, drinking water, or chewing gum in public outdoor spaces during the day.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Transportation:</strong> Pre-arrange your private transfer before sunset, as local drivers will be having Iftar with their families.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Moon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Secure Your Ramadan Transport</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Make your journey stress-free. Book a private chauffeur service to handle your day tours and dinner transfers during Ramadan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20in%20AlUla%20during%20Ramadan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
