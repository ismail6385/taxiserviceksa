import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Historical Mosques in Makkah | 2026 Ziyarat Guide',
    description: 'A complete visitor guide to the historic mosques in Makkah. Learn the history and location of Masjid al-Jinn, Masjid al-Rayah, and Masjid al-Taneem.',
    keywords: [
        'historical mosques in Makkah',
        'Masjid al Jinn Makkah history',
        'Masjid al Taneem Aisha mosque',
        'Masjid al Rayah flag mosque',
        'visitor guide to Makkah mosques',
        'Makkah ziyarat taxi tours',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/historical-mosques-makkah/',
    },
    openGraph: {
        title: 'Historical Mosques in Makkah | 2026 Ziyarat Guide',
        description: 'Discover the rich history, spiritual significance, and location details of Makkah\'s historical mosques outside the Grand Mosque.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/historical-mosques-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the history of Masjid al-Jinn?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Masjid al-Jinn (the Mosque of the Jinn) is built on the site where a group of Jinn gathered to listen to the recitation of the Holy Quran by the Prophet Muhammad ﷺ and later embraced Islam.',
            },
        },
        {
            '@type': 'Question',
            name: 'Why is Masjid al-Taneem called the Aisha Mosque?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Masjid al-Taneem is located at the boundary of the Haram area. It is called the Aisha Mosque because the Prophet\'s wife Aisha (R.A) entered into the state of Ihram from this location during the Farewell Hajj. It serves as the primary Miqat for pilgrims residing within Makkah.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where is Masjid al-Rayah located?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Masjid al-Rayah (the Mosque of the Flag) is located near the Grand Mosque in the Al-Gazza district. It marks the spot where the Prophet ﷺ planted his flag during the Conquest of Makkah.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Historical Mosques in Makkah: Heritage and Visitor Guide',
    description: 'Learn about the top historical mosques to visit in Makkah, including Masjid al-Jinn, Masjid al-Taneem, and Masjid al-Rayah.',
    datePublished: '2026-04-15T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/historical-mosques-makkah/' },
};

export default function HistoricalMosquesPage() {
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
                        <span>Historical Mosques</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Historic Mosques</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Historical Mosques:<br />
                        <span className="text-emerald-300">Explore Makkah\'s Heritage</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Beyond the Grand Mosque, explore the smaller historic mosques in Makkah that commemorate monumental moments in early Islamic history.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Miqat Guide</h4>
                        <p className="leading-relaxed">
                            For pilgrims looking to perform a second or subsequent Umrah during their stay, Masjid al-Taneem (Aisha Mosque) is the closest and most convenient Miqat to assume Ihram.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Key Historical Mosques</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Several mosques in Makkah mark key milestones of the Prophet\'s ﷺ life and early conversions:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li><strong>Masjid al-Jinn:</strong> Located in the Al-Gazza district, built where a group of Jinn pledged their alliance to the Prophet ﷺ.</li>
                        <li><strong>Masjid al-Taneem (Aisha Mosque):</strong> Serving as a primary Miqat, located about 7.5 kilometers north of Masjid al-Haram.</li>
                        <li><strong>Masjid al-Rayah:</strong> The Mosque of the Flag, marking the spot where the Prophet ﷺ planted the flag during the Conquest of Makkah.</li>
                        <li><strong>Masjid al-Khayf:</strong> Located in Mina, this mosque holds historical significance as the spot where multiple prophets are said to have offered prayers.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Etiquette</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Make sure to offer two Rakats of <em>Tahiyyat al-Masjid</em> (greeting the mosque) upon entry. Maintain silence and respect those offering prayers inside these sacred halls.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Ziyarat Taxi to Makkah Mosques</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Want to visit Aisha Mosque, Masjid al-Jinn, and other historical spots? Hire a private car or van with a professional driver.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20visit%20historical%20mosques%20in%20Makkah" target="_blank" rel="noopener noreferrer"
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
