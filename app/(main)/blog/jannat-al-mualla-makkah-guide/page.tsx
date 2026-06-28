import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jannat al-Mualla Cemetery Makkah | History & Visitor Guide',
    description: 'Learn the history, significance, and rules for visiting Jannat al-Mualla (Cemetery of Mualla) in Makkah. Discover key historical figures buried there.',
    keywords: [
        'Jannat al Mualla cemetery Makkah',
        'where is Jannat al Mualla located',
        'Khadijah grave in Jannat al Mualla',
        'cemetery of Mualla historical facts',
        'Makkah ziyarat cemetery rules',
        'burials in Jannat al Mualla',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jannat-al-mualla-makkah-guide/',
    },
    openGraph: {
        title: 'Jannat al-Mualla Cemetery Makkah | History & Visitor Guide',
        description: 'Discover the historical importance and rules for visiting Jannat al-Mualla, the sacred burial ground in Makkah.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/jannat-al-mualla-makkah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Jannat al-Mualla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Jannat al-Mualla is the historic cemetery of Makkah located north of Masjid al-Haram. It is the second most sacred cemetery in Islam after Jannat al-Baqi in Madinah.',
            },
        },
        {
            '@type': 'Question',
            name: 'Who is buried in Jannat al-Mualla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Many members of the Prophet Muhammad\'s ﷺ family and early companions are buried here, including his beloved first wife Hazrat Khadijah, his mother Hazrat Aminah (according to some narrations), his grandfather Abdul Muttalib, and his uncle Abu Talib.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are women allowed to enter the cemetery?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to local regulations in Saudi Arabia, women are generally not allowed inside the burial grounds but can view the cemetery and make supplications from the viewing platforms outside the gates.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jannat al-Mualla Cemetery Makkah: History, Graves & Visitor Guide',
    description: 'A comprehensive visitor guide to the historic Jannat al-Mualla cemetery in Makkah, detailing history, prominent graves, and visiting etiquette.',
    datePublished: '2026-03-01T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/jannat-al-mualla-makkah-guide/' },
};

export default function JannatAlMuallaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Jannat al-Mualla</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Sacred Cemetery</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Jannat al-Mualla Guide:<br />
                        <span className="text-emerald-300">History, Graves & Visitor Tips</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Explore the historical significance of the Cemetery of Mualla, the final resting place of Hazrat Khadijah and early members of the Hashim clan.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Visiting Etiquette</h4>
                        <p className="leading-relaxed">
                            When visiting Jannat al-Mualla, it is Sunnah to greet the deceased by saying: <em>"Assalamu Alaikum ya ahla al-qubur..."</em>. Pilgrims are advised to follow Islamic practices and avoid innovations like touching or praying to the graves.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Historical Importance</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Jannat al-Mualla has served as the main burial ground for the citizens of Makkah since before the advent of Islam. Located in the Al-Hujoon neighborhood, it is situated within walking distance (approx. 1.2 km) from the northern courtyard of Masjid al-Haram.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Prominent Burials</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This cemetery houses the graves of some of the most influential figures in early Islamic history:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Hazrat Khadijah (R.A):</strong> The beloved first wife of the Prophet Muhammad ﷺ and the mother of his children.</li>
                        <li><strong>Qasim bin Muhammad:</strong> The eldest son of the Prophet Muhammad ﷺ who died in infancy.</li>
                        <li><strong>Abdul Muttalib:</strong> The grandfather of the Prophet Muhammad ﷺ who raised him after his parents passed away.</li>
                        <li><strong>Abu Talib:</strong> The uncle of the Prophet Muhammad ﷺ who supported him during the difficult early years of prophethood.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Guide for Pilgrims</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Pilgrims can easily visit the cemetery on foot after performing prayers at the Haram or take a short taxi ride. It is open during daytime hours. There is a pedestrian bridge overlooking the cemetery, providing a clear view for visitors.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Ziyarat Cab in Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Visit all historical landmarks of Makkah in comfort. Hire a private cab with a professional driver today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Jannat%20al-Mualla" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
