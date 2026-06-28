import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Abraj Al Bait (Makkah Clock Tower) Guide | Hotels & Mall',
    description: 'The ultimate guide to the Abraj Al Bait Clock Tower complex in Makkah. Learn about the luxury hotels, shopping mall, observation deck, and history.',
    keywords: [
        'Abraj Al Bait Clock Tower Makkah guide 2026',
        'Makkah Clock Tower hotels list',
        'Abraj Al Bait shopping mall hours',
        'Clock Tower museum ticket price',
        'how high is Makkah Clock Tower',
        'best places to eat near Masjid al Haram',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/abraj-al-bait-clock-tower-makkah/',
    },
    openGraph: {
        title: 'Abraj Al Bait (Makkah Clock Tower) Guide | Hotels & Mall',
        description: 'Plan your stay and shopping experience at the Makkah Clock Tower. Discover premium hotel recommendations and observation deck details.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/abraj-al-bait-clock-tower-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Which hotels are inside the Makkah Clock Tower?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Clock Tower complex houses several luxury 5-star hotels: Fairmont Makkah Clock Royal Tower, Swissôtel Makkah, Swissôtel Al Maqam Makkah, Pullman ZamZam Makkah, and Raffles Makkah Palace.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there an observation deck in the Makkah Clock Tower?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Clock Tower houses a multi-level Astronomy Museum and an observation deck located right behind the giant clock face, offering panoramic views of Masjid al-Haram and Makkah.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far is the Clock Tower from Masjid al-Haram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Abraj Al Bait complex is located directly in front of the southern gates of Masjid al-Haram (specifically King Abdulaziz Gate), offering immediate pedestrian access to the prayer areas.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Abraj Al Bait (Makkah Clock Tower): Visitor Guide & Hotel Directory',
    description: 'Discover the architecture, hotels, dining options, shopping mall, and museum details of the famous Makkah Clock Tower complex.',
    datePublished: '2026-03-05T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/abraj-al-bait-clock-tower-makkah/' },
};

export default function ClockTowerGuidePage() {
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
                        <span>Makkah Clock Tower</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏙️ Landmark Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Makkah Clock Tower:<br />
                        <span className="text-emerald-300">Hotels, Mall & Visitor Tips 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Abraj Al Bait is one of the tallest skyscrapers in the world. Learn how to navigate its shopping centers, dining halls, and premium hotels.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Architecture Note</h4>
                        <p className="leading-relaxed">
                            The central tower stands 601 meters (1,972 feet) high, making it the third-tallest building in the world. Its giant clock face measures 43 meters in diameter and is visible from miles away.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Luxury Hotels Directory</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The complex features seven towers that host five of Makkah\'s premier luxury hotels:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Fairmont Makkah Clock Royal Tower:</strong> Located in the tallest central tower, providing stunning Kaaba-view suites.</li>
                        <li><strong>Raffles Makkah Palace:</strong> An all-suite luxury hotel located in the front pavilion.</li>
                        <li><strong>Swissôtel Makkah & Al Maqam:</strong> Popular options offering large rooms, excellent buffet selections, and direct mall access.</li>
                        <li><strong>Pullman ZamZam Makkah:</strong> Known for family suites and its proximity to the main escalators leading to the Haram courtyard.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Abraj Al Bait Mall</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The lower floors of the complex host a massive 5-story shopping mall containing thousands of stores. It is a premier destination for pilgrims looking for souvenirs, perfumes, traditional clothing (abayas, thobes), and electronic items. It also houses two large food courts serving diverse international cuisines.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Clock Tower Museum & Astronomy Center</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Located at the top of the tower, this museum offers visitors an educational journey into how time is measured, universe models, solar systems, and details about the construction of the giant clock itself.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Car to Clock Tower Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Arriving at Jeddah Airport with families and heavy luggage? Reserve our GMC Yukon or luxury Sedan for a smooth, direct drive to the Makkah Clock Tower hotels.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20Clock%20Tower" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
