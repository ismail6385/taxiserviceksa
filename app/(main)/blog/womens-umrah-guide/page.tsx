import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Women's Umrah Guide 2026 | Rules, Ihram & Menstruation",
    description: "The complete step-by-step Women's Umrah guide for 2026. Learn about the new Mahram rules, female Ihram clothing, managing menstruation, and hair cutting.",
    keywords: [
        "womens umrah guide 2026",
        "umrah without mahram rules",
        "female ihram clothing regulations",
        "menstruation during umrah rules",
        "women hair cutting umrah taqsir",
        "tawaf rules for female pilgrims",
        "saudi arabia visa for women",
        "Jeddah to Makkah taxi for women safety",
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/womens-umrah-guide/',
    },
    openGraph: {
        title: "Women's Umrah Guide 2026 | Rules, Ihram & Menstruation",
        description: "A comprehensive guide designed specifically for female pilgrims. Essential Islamic rulings, physical preparation, and travel safety advice.",
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/womens-umrah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can a woman perform Umrah without a Mahram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Saudi Ministry of Hajj & Umrah officially allows women of all ages from around the world to obtain visas and perform Hajj or Umrah without a Mahram (male guardian). Women can travel alone, in all-female tour groups, or with family.',
            },
        },
        {
            '@type': 'Question',
            name: 'What happens if a woman starts her period before entering Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If your period starts before reaching the Miqat, you must still perform physical purification (bath/Ghusl), put on your travel clothes, and enter the state of Ihram by making the intention (Niyyah) at the Miqat. However, you cannot perform Tawaf or pray. You must wait until your cycle ends, perform Ghusl to achieve purity, and then complete your Tawaf and Sa\'i.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can women wear a Niqab or gloves in the state of Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. According to the Sunnah, a woman\'s face and hands must remain uncovered while in the state of Ihram. Standard stitched Niqabs and gloves are prohibited. If you wish to veil your face in front of non-mahram men, you are permitted to drape a loose headscarf (Rida) down over your face from above your head without it being tied or stitched like a Niqab.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do women cut their hair to exit Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Women perform Taqsir (trimming) to exit Ihram. Shaving the head (Halq) is strictly prohibited (Haram) for women. You must gather all your hair at the back of your head and cut the length of a fingertip (about 1 to 2 centimetres or 1 inch) from the ends. This can be done by yourself or by another female pilgrim.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Women's Umrah Guide: Essential Rules, Ihram Attire, and Menstruation Fiqh",
    description: "A complete manual for female pilgrims performing Umrah, including Mahram updates, face-veiling guidelines, menstruation solutions, and safety advice.",
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/womens-umrah-guide/' },
};

const guidelines = [
    {
        title: "1. Understanding Mahram Rules",
        desc: "Historically, female pilgrims under 45 were required to travel with a Mahram. Under the updated Saudi Vision 2030 regulations, women of all ages are legally permitted to travel to Saudi Arabia and perform Umrah without a Mahram. You can travel independently or with companion groups.",
    },
    {
        title: "2. Rules of Ihram for Women",
        desc: "Unlike men, women do not wear unstitched towels. Your Ihram is regular, clean modest clothing (an Abaya with a headscarf). You may wear any color (white, black, blue, or green are all fine). Stitched shoes, undergarments, and socks are fully allowed. Keep your face and hands uncovered — do not wear gloves or tied Niqabs.",
    },
    {
        title: "3. Fiqh of Menstruation (Haid)",
        desc: "Tawaf al-Umrah requires state of ritual purity (Wudu/Ghusl). If your cycle begins, you cannot perform Tawaf or pray the 2 Rak'ahs behind Maqam Ibrahim. You may, however, perform Sa'i if you completed Tawaf before your period started. If not, wait in Makkah until your period ends, perform Ghusl, and then proceed to do Tawaf.",
    },
    {
        title: "4. Tawaf & Sa'i Modesty",
        desc: "Avoid pushing through crowds. It is better to perform Tawaf on the upper floors or during late-night hours when crowd density is low to avoid body contact with men. Remember that the brisk trot (Ramal) during the first 3 circuits of Tawaf and the jog between the green lights in Sa'i are for men only. Women walk normally.",
    },
    {
        title: "5. Shaving is Prohibited (Taqsir Only)",
        desc: "To exit the state of Ihram, women must cut a fingertip length (approx. 1 inch) from the ends of their hair. Shaving (Halq) is forbidden for women. Perform this in the privacy of your hotel room rather than in the public spaces around Mount Marwa to preserve modesty.",
    },
];

export default function WomensUmrahGuidePage() {
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
                        <span>Women&apos;s Umrah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🧕 Female Pilgrim Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 9 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Women&apos;s Umrah Guide<br />
                        <span className="text-emerald-300">Rules, Ihram & Fiqh 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        A detailed guide tailored specifically for female pilgrims. Understand the latest rules on traveling without a Mahram, Ihram clothing restrictions, menstruation guidelines, and safety practices.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20Makkah%20for%20a%20female%20traveller/group" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Safe Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Rates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modesty Banner */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Heart className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Focus on Modesty & Ease</h4>
                        <p className="leading-relaxed">
                            Umrah is a highly physical journey. Our guide prioritizes practical solutions for female pilgrims — ensuring you understand both the religious obligations and safety tips for intercity travel and mosque navigation.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Spiritual Preparation for Women</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        While the core rituals of Umrah — Ihram, Tawaf, Sa&apos;i, and hair cutting — are identical for both men and women, the application of Islamic jurisprudence (Fiqh) has specific rules designed to accommodate women.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        From clothing guidelines that prioritize modesty to rules handling natural biological cycles, this guide answers the most common questions raised by female pilgrims before they embark on their spiritual journey.
                    </p>
                </section>

                {/* Categorized Guidelines */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-black text-gray-900">Key Guidelines & Rulings</h2>
                    
                    <div className="grid gap-6">
                        {guidelines.map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-3">
                                <h3 className="text-xl font-black text-emerald-950 font-serif">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Women's Safety & Travel Tips */}
                <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-2xl font-black text-gray-900">Safety & Travel Tips for Women</h2>
                    </div>
                    <ul className="space-y-4 text-gray-700 text-sm pl-4 list-disc">
                        <li>
                            <strong>Travel in Groups or Couples:</strong> Even though a Mahram is not legally required for visas, traveling with family or a group provides security, logistical ease, and mutual support during the crowded rituals.
                        </li>
                        <li>
                            <strong>Footwear:</strong> Choose closed, supportive walking sneakers for the long walk of Sa&apos;i (approx. 2.8 km in total). Do not wear brand new shoes; wear them in before travel to avoid blisters.
                        </li>
                        <li>
                            <strong>Keep a Backpack/Shoe Bag:</strong> You must keep your shoes with you in a drawstring bag. Avoid leaving them in open shoe racks where they might get lost or moved, leaving you barefoot at the exit.
                        </li>
                        <li>
                            <strong>Secure Private Transportation:</strong> At Jeddah Airport, public buses can be crowded and local taxis require aggressive bargaining. Pre-booking a private, verified transfer with a professional driver ensures a safe, direct journey straight to your Makkah hotel.
                        </li>
                    </ul>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Women&apos;s Umrah FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related pilgrim links */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Pilgrim Guides</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Tawaf Guide — 7 Circuits of the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Complete Sa\'i Guide (Safa to Marwa)', href: '/blog/sai-guide-hajj-umrah/', emoji: '🏃' },
                            { title: 'Common Umrah Mistakes to Avoid', href: '/blog/common-umrah-mistakes-to-avoid/', emoji: '⚠️' },
                        ].map((b, i) => (
                            <Link key={i} href={b.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 transition-all flex gap-3 items-start">
                                <span className="text-2xl">{b.emoji}</span>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{b.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Safe & Reliable Transfers for Female Pilgrims</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Your safety is our top priority. Pre-book your private, comfortable, air-conditioned sedan or family SUV from Jeddah Airport (JED) straight to Makkah. Professional drivers and 24/7 client support.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20safe%20taxi%20transfer" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View Transfer Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
