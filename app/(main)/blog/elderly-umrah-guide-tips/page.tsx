import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Elderly Umrah Guide 2026 | Wheelchairs, Health & Travel Tips',
    description: 'Planning Umrah with elderly parents or senior citizens in 2026? Learn about wheelchair services at the Haram, electric scooter rentals, health prep, and private taxi booking.',
    keywords: [
        'elderly umrah guide 2026',
        'umrah with senior citizens tips',
        'wheelchair services masjid al haram',
        'electric scooter rental makkah',
        'disabled pilgrim services umrah',
        'medical prep for umrah seniors',
        'wheelchair accessible hotels makkah',
        'Jeddah to Makkah private car for seniors',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/elderly-umrah-guide-tips/',
    },
    openGraph: {
        title: 'Elderly Umrah Guide 2026 | Wheelchairs, Health & Travel Tips',
        description: 'Ensure a safe, comfortable, and spiritually rewarding Umrah for senior citizens. Complete guide to health, mobility, and transport logistics.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/elderly-umrah-guide-tips/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Are wheelchairs available for free inside Al-Masjid al-Haram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Haram administration provides free manual wheelchairs for pilgrims. These can be collected at designated distribution points outside the mosque (such as the Al-Shubaikah or Marwa gates). You will need to leave a deposit or show your passport/ID. However, you will need a companion or family member to push the wheelchair.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I hire an official wheelchair pusher in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Licensed wheelchair pushers wearing official uniforms (often green or gray vests) are available inside the mosque. They operate at regulated rates set by the Haram authority. You can hire them directly inside the Mataf or Mas\'a halls. Avoid hiring unlicensed pushers outside the mosque boundaries for safety and pricing guarantees.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you rent electric scooters for Tawaf and Sa\'i?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The mosque has a dedicated mezzanine level for electric scooters. Single and double-seat electric scooters are available for rent on this floor. They can be used to complete both the Tawaf and the Sa\'i. They are extremely easy to drive and highly recommended for elderly pilgrims who want autonomy.',
            },
        },
        {
            '@type': 'Question',
            name: 'Which vehicle is best for transporting elderly pilgrims and their wheelchairs?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For seniors and those with limited mobility, the Hyundai Staria VIP or GMC Yukon XL are the best options. The Hyundai Staria features sliding doors, low step-in height, and massive cabin space to easily load a folding wheelchair. The GMC Yukon XL provides premium shock-absorption and comfortable seating for long intercity drives.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Elderly Umrah Guide: Wheelchair Services, Health Prep, and Travel Logistics',
    description: 'A comprehensive planning manual for families taking senior citizens or disabled pilgrims for Hajj and Umrah, covering medical safety and transport tips.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/elderly-umrah-guide-tips/' },
};

const tips = [
    { title: '🩺 Complete a Pre-Travel Medical Check', detail: 'Visit your family doctor at least 4 weeks before departure. Obtain a complete list of prescription medications with an official doctor’s signature, as customs check these at the airport. Ensure you pack duplicate supplies of vital pills in different bags.' },
    { title: '🛵 Utilize Electric Scooters', detail: 'Head straight to the dedicated electric scooter mezzanine level inside the Haram. Renting a double-seat scooter allows a younger family member to drive while the senior sits comfortably, completing Tawaf and Sa\'i in under an hour without fatigue.' },
    { title: '🏨 Book Hotels Directly Adjacent to the Courtyard', detail: 'Minimize walking distances. Book hotels located in the Abraj Al Bait (Clock Tower) complex or Jabal Omar development. These properties have direct elevator access to the Haram courtyard levels, avoiding external stairs and steep street slopes.' },
    { title: '🚗 Avoid Bus Commutes; Use Private Cars', detail: 'Public transport terminals require walking long distances, standing in queues, and stepping onto high-floor buses. Booking a private door-to-door transfer with a low step-in vehicle is significantly safer and preserves the elder’s physical energy.' },
];

export default function ElderlyUmrahGuidePage() {
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
                        <span>Elderly Umrah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">❤️ Family Care Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Elderly Umrah Guide<br />
                        <span className="text-emerald-300">Wheelchairs & Care Tips 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Taking your parents or elderly relatives for Umrah is a blessing. Ensure their safety, physical comfort, and peace of mind by planning for healthcare, mobility devices, and reliable private transport.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20with%20elderly%20relatives%20and%20need%20a%20comfortable%20Staria/GMC%20taxi" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Senior-Friendly Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            View Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Care Banner */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Heart className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Honoring Senior Pilgrims</h4>
                        <p className="leading-relaxed">
                            Completing the physical rituals of Tawaf (approx 1.4 km) and Sa&apos;i (approx 2.8 km) is highly demanding. This guide compiles the best medical, mobility, and travel logistics to support elderly pilgrims on their journey.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Planning Matters for Seniors</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The reward of assisting parents or elderly relatives through the sacred rites of Hajj or Umrah is immeasurable. However, the high crowd densities, extreme temperatures, and walking distances pose real health risks for senior citizens.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        A successful pilgrimage for senior citizens requires detailed planning. By organizing wheelchair access, identifying licensed assistance services, and securing comfortable intercity transfers, you can protect their health and focus entirely on the spiritual beauty of the journey.
                    </p>
                </section>

                {/* Step-by-step care guidelines */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Four Essential Steps for Senior Pilgrims</h2>
                    <div className="space-y-6">
                        {tips.map((step, idx) => (
                            <div key={idx} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-950 text-white rounded-2xl flex items-center justify-center font-black text-lg">
                                    0{idx + 1}
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex-1">
                                    <h3 className="font-black text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Wheelchair vs Electric Scooter Comparison */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Mobility Options: Wheelchair vs. Scooter</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Inside Al-Masjid al-Haram, you have two primary options for pilgrims who cannot manage the long walks:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-xl font-black text-emerald-950 font-serif">Option A: Wheelchair (Manual)</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Best if the senior prefers a traditional method and has a dedicated family member or licensed helper to push them.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li>**Cost:** Wheelchair loan is free; hiring a licensed pusher charges a regulated fixed fee (approx 100-200 SAR depending on crowd density).</li>
                                <li>**Access:** Allowed on the main ground floor Mataf area (except during peak crowd control hours).</li>
                                <li>**Pros:** Allows the pilgrim to remain close to the Kaaba on the ground floor.</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-xl font-black text-emerald-950 font-serif">Option B: Electric Scooter</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Best for seniors who want independent control or families who want to travel together without physical pushing.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li>**Cost:** Flat rental fee (approx 115 SAR for single seat, 230 SAR for double seat).</li>
                                <li>**Access:** Restricted to the dedicated scooter mezzanine level.</li>
                                <li>**Pros:** Zero physical effort; safe, automatic braking; extremely fun and stress-free for the elderly.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Elderly Pilgrim FAQ</h2>
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
                    <h2 className="text-3xl font-black mb-4">Comfortable Family Transfers</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Do not let long transfers exhaust your parents. Book our premium, smooth Hyundai Staria or spacious GMC Yukon XL with extra legroom and large trunk space for wheelchairs. Fixed rates, door-to-door.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20with%20seniors%20and%20need%20a%20comfortable%20taxi%20transfer" target="_blank" rel="noopener noreferrer"
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
