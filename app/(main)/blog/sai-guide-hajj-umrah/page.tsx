import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, AlertTriangle, CheckCircle2, Navigation, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: "Complete Sa'i Guide for Hajj & Umrah 2026 | Safa to Marwa Steps",
    description: "A step-by-step Sa'i guide for Umrah and Hajj 2026. Learn the 7 laps between Safa and Marwa, correct duas, conditions for validity, and common mistakes — with full pilgrim tips.",
    keywords: [
        "Sa'i guide",
        "how to perform Sa'i",
        "Safa and Marwa Umrah",
        "Sa'i steps Hajj",
        "Safa Marwa walk guide 2026",
        "Sa'i rules Umrah",
        "Mas'a walkway guide",
        "Umrah complete steps",
        "pilgrim guide Makkah",
        'Jeddah to Makkah taxi private',
    ],
    alternates: {
        canonical: "https://taxiserviceksa.com/blog/sai-guide-hajj-umrah/",
    },
    openGraph: {
        title: "Complete Sa'i Guide for Hajj & Umrah 2026 | Safa to Marwa Steps",
        description: "Everything you need to know to perform Sa'i correctly — 7 laps, starting direction, duas, and conditions explained for international pilgrims.",
        type: 'article',
        url: "https://taxiserviceksa.com/blog/sai-guide-hajj-umrah/",
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "How many laps (Shawts) are in Sa'i?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Sa'i consists of 7 laps (Shawts) between Safa and Marwa. The first lap starts at Safa and ends at Marwa (Lap 1). The second lap returns from Marwa back to Safa (Lap 2). This continues until the 7th lap, which ends at Marwa. So: odd laps (1, 3, 5, 7) end at Marwa, and even laps (2, 4, 6) end at Safa.",
            },
        },
        {
            '@type': 'Question',
            name: "Does Sa'i require Wudu (ritual ablution)?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "According to the majority of Islamic scholars, Wudu is recommended (Mustahabb) but NOT a condition for the validity of Sa'i. Sa'i can be performed without Wudu and it remains valid. However, it is strongly recommended to be in a state of purity while performing it out of reverence for the sacred act.",
            },
        },
        {
            '@type': 'Question',
            name: "Where does Sa'i start and end?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Sa'i always starts at Mount Safa and ends at Mount Marwa after the 7th lap. The first lap goes from Safa → Marwa, and the walk alternates direction each lap. The 7th and final lap ends at Marwa, where pilgrims then perform Halq (shaving) or Taqsir (trimming) to complete their Umrah.",
            },
        },
        {
            '@type': 'Question',
            name: "Can Sa'i be performed in a wheelchair?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes. Sa'i is fully valid when performed in a wheelchair or mobility scooter, which are available for hire within Al-Masjid al-Haram. Pilgrims with disabilities, the elderly, and those unable to walk the full distance may be pushed or ride a wheelchair through the Mas'a walkway. The reward is not diminished.",
            },
        },
        {
            '@type': 'Question',
            name: "What is the green light area in the Mas'a walkway?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "The green fluorescent light section in the Mas'a marks the area between the two small hills of Safa and Marwa where Prophet Hajar (Hagar) ran desperately searching for water for her infant son Ismail. Male pilgrims should jog/run lightly between these green markers — this act is a Sunnah of the Prophet ﷺ. Women walk at a normal pace throughout.",
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Complete Sa'i Guide for Hajj & Umrah: Step-by-Step Walk Between Safa and Marwa",
    description: "A comprehensive guide to performing Sa'i during Hajj and Umrah, including step-by-step instructions, valid conditions, duas, common mistakes, and practical tips for international pilgrims.",
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': "https://taxiserviceksa.com/blog/sai-guide-hajj-umrah/" },
};

const steps = [
    {
        num: 1,
        title: "Complete Tawaf First — Sa'i Follows Tawaf",
        detail: "Sa'i is always performed after Tawaf. For Umrah, you perform Tawaf al-Umrah (7 circuits of the Kaaba) and then pray 2 Rak'ahs at Maqam Ibrahim and drink from Zamzam. Only after these steps do you proceed to the Mas'a walkway to begin Sa'i.",
        tip: "Sa'i performed before Tawaf is invalid and must be repeated. Always: Tawaf → 2 Rak'ahs → Zamzam → Sa'i.",
    },
    {
        num: 2,
        title: 'Proceed to Mount Safa',
        detail: "After drinking Zamzam, proceed to the Mas'a — the enclosed, climate-controlled walkway between Safa and Marwa inside Al-Masjid al-Haram. Walk toward Mount Safa (Jabal Safa), which is at the southern end of the Mas'a. You will see the green fluorescent start marker and Arabic signs indicating 'Safa'.",
        tip: "The Mas'a is on the eastern side of the Haram complex. There are multiple entrances and the walkway has three separate levels to manage the huge volume of pilgrims during peak times.",
    },
    {
        num: 3,
        title: 'Climb Safa, Face the Kaaba, Make Dua',
        detail: "Ascend the steps of Mount Safa until you can see (or face the direction of) the Kaaba. Raise your hands in supplication, recite the opening supplication of Sa'i (see Duas section below), and make a sincere personal dua. Spend a moment in heartfelt worship before beginning your first lap.",
        tip: "Recite: 'Inna al-Safa wal-Marwata min sha'a'irillah' (Quran 2:158) — 'Indeed Safa and Marwa are among the symbols of Allah.' Then say 'Abda'u bima bada'allahu bih' — 'I begin with what Allah began with.'",
    },
    {
        num: 4,
        title: 'Walk Lap 1: Safa → Marwa',
        detail: "Begin walking from Safa toward Marwa at a steady, comfortable pace. As you walk, recite dhikr, send salawat upon the Prophet ﷺ, or make personal duas in any language. The complete distance of the Mas'a is approximately 394 metres (one way). Keep moving forward — do not turn back partway through a lap.",
        tip: "Men should jog/run lightly (Sa'y) between the two green fluorescent light zones marking the area where Hajar ﷺ ran. Women walk at a normal pace — running is not prescribed for women.",
    },
    {
        num: 5,
        title: 'Reach Marwa — Face Kaaba & Make Dua',
        detail: "When you reach Mount Marwa, ascend the steps, face the direction of the Kaaba, raise your hands, and make dua — just as you did at Safa. This is the end of Lap 1. Pause and make sincere supplication before turning around for Lap 2.",
        tip: "The dua at Marwa mirrors the dua at Safa. Spend a meaningful moment here — do not merely touch the wall and turn back. This moment of pause at each mountain is a Sunnah.",
    },
    {
        num: 6,
        title: "Laps 2 through 7 — Alternate Between Safa & Marwa",
        detail: "Turn around at Marwa and walk back toward Safa for Lap 2. Continue alternating: Lap 3 = Safa → Marwa, Lap 4 = Marwa → Safa, and so on. Remember to jog between the green markers for every lap. Make dua at each mountain as you arrive. At each mountain arrival, the supplication and dua are repeated.",
        tip: "Count carefully: Lap 1 (Safa→Marwa), Lap 2 (Marwa→Safa), Lap 3 (Safa→Marwa), Lap 4 (Marwa→Safa), Lap 5 (Safa→Marwa), Lap 6 (Marwa→Safa), Lap 7 (Safa→Marwa). Lap 7 ENDS at Marwa.",
    },
    {
        num: 7,
        title: 'Complete the 7th Lap at Marwa',
        detail: "After arriving at Marwa for the 4th time (completing Lap 7), your Sa'i is complete. Make a final dua at Marwa. For Umrah, you are now ready to perform Halq (shaving the head) or Taqsir (trimming the hair) — the final step of Umrah.",
        tip: "Men may shave their head (Halq) or shorten their hair (Taqsir). Women should cut a finger-tip length from their hair (Taqsir only — women never shave). After this, you exit the state of Ihram and your Umrah is complete.",
    },
];

const lapChart = [
    { lap: 1, from: 'Safa', to: 'Marwa', direction: '→' },
    { lap: 2, from: 'Marwa', to: 'Safa', direction: '←' },
    { lap: 3, from: 'Safa', to: 'Marwa', direction: '→' },
    { lap: 4, from: 'Marwa', to: 'Safa', direction: '←' },
    { lap: 5, from: 'Safa', to: 'Marwa', direction: '→' },
    { lap: 6, from: 'Marwa', to: 'Safa', direction: '←' },
    { lap: 7, from: 'Safa', to: 'Marwa', direction: '→ ENDS HERE' },
];

export default function SaiGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Sa&apos;i Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-teal-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-teal-500">🕌 Hajj & Umrah Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Complete Sa&apos;i Guide<br />
                        <span className="text-teal-300">Safa to Marwa — Hajj & Umrah 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Sa&apos;i — the sacred walk between the hills of Safa and Marwa — is a pillar of both Umrah and Hajj. This comprehensive guide covers every step, dua, rule, and common mistake to ensure your Sa&apos;i is correct and spiritually complete.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Jeddah → Makkah Transfer
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            View Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <div className="bg-teal-50 border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Total Laps', value: '7 Shawts', icon: '🔁' },
                            { label: 'Start Point', value: 'Mount Safa', icon: '⛰️' },
                            { label: 'End Point', value: 'Mount Marwa', icon: '🏔️' },
                            { label: 'Total Distance', value: '~2.76 km', icon: '📏' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-teal-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-lg font-black text-teal-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* What is Sa'i */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-teal-700" />
                        <h2 className="text-3xl font-black text-gray-900">What is Sa&apos;i?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Sa&apos;i (السعي) means &quot;to strive&quot; or &quot;to walk with purpose.&quot; It is the act of walking seven laps between the two small hills of <strong>Safa (الصفا)</strong> and <strong>Marwa (المروة)</strong> inside Al-Masjid al-Haram in Makkah. Sa&apos;i is a pillar (Rukn) of both Umrah and Hajj — it cannot be omitted or replaced.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Sa&apos;i commemorates one of the most powerful acts of faith in human history: the desperate run of <strong>Hajar (Hagar) ﷺ</strong> — the wife of Prophet Ibrahim ﷺ — between these same hills in search of water for her infant son, the Prophet Ismail ﷺ. Left alone in the barren desert valley, she ran back and forth seven times in total submission and trust in Allah. In response to her trust, Allah caused the miraculous spring of Zamzam to burst from the earth.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Today, the Mas&apos;a — a magnificent, climate-controlled walkway — encases the ancient path of Hajar between Safa and Marwa entirely within the expanded Al-Masjid al-Haram complex. Millions of pilgrims walk this same path annually, reenacting her striving in an act of profound spiritual remembrance.
                    </p>
                    <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5">
                        <p className="text-teal-900 text-sm font-semibold leading-relaxed">
                            🕌 Allah says: <em>&quot;Indeed, Safa and Marwa are among the symbols (Sha&apos;air) of Allah. So whoever makes Hajj to the House or performs Umrah — there is no blame upon him for walking between them.&quot;</em> — Quran 2:158
                        </p>
                    </div>
                </section>

                {/* Sa'i Status */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Ruling on Sa&apos;i</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: "Sa'i in Umrah", status: 'Pillar (Rukn)', color: 'border-red-500 bg-red-50', badge: 'bg-red-600', detail: "Sa'i is a Rukn (pillar) of Umrah. Omitting it — even forgetfully — invalidates the Umrah entirely. It cannot be compensated by a Fidya." },
                            { title: "Sa'i in Hajj", status: 'Pillar (Rukn)', color: 'border-red-500 bg-red-50', badge: 'bg-red-600', detail: "Sa'i is also a Rukn of Hajj according to the majority of scholars. It is performed after Tawaf al-Qudum (arrival Tawaf) or Tawaf al-Ifadah (main pilgrimage Tawaf)." },
                            { title: "Sa'i al-Nafl", status: 'Not Permitted', color: 'border-gray-400 bg-gray-50', badge: 'bg-gray-600', detail: "Unlike Tawaf, voluntary Sa'i is NOT prescribed. Sa'i may only be performed as part of the obligatory rituals of Hajj or Umrah — there is no extra/voluntary Sa'i." },
                        ].map((item, i) => (
                            <div key={i} className={`rounded-2xl p-5 border-2 ${item.color}`}>
                                <span className={`text-xs text-white font-bold px-3 py-1 rounded-full ${item.badge} inline-block mb-3`}>{item.status}</span>
                                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lap Chart */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Sa&apos;i Lap Chart — 7 Shawts</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">Use this reference chart to track your 7 laps. Remember: <strong>always start at Safa</strong>, and your 7th lap will always end at Marwa.</p>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <div className="bg-teal-950 text-white px-6 py-4">
                            <h3 className="font-bold text-lg">Sa&apos;i Direction Reference</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-6 py-3">Lap (Shawt)</th>
                                        <th className="text-left px-6 py-3">Start</th>
                                        <th className="text-center px-4 py-3">Direction</th>
                                        <th className="text-left px-6 py-3">End</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {lapChart.map((row, i) => (
                                        <tr key={i} className={row.lap === 7 ? 'bg-teal-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-6 py-3 font-black text-gray-700">
                                                Lap {row.lap} {row.lap === 7 && <span className="text-teal-700 text-xs font-bold ml-1">(FINAL)</span>}
                                            </td>
                                            <td className="px-6 py-3 text-gray-700 font-semibold">{row.from}</td>
                                            <td className="px-4 py-3 text-center text-teal-600 font-bold text-lg">{row.direction.includes('→') ? '→' : '←'}</td>
                                            <td className={`px-6 py-3 font-semibold ${row.lap === 7 ? 'text-teal-700 font-black' : 'text-gray-700'}`}>{row.to}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Conditions */}
                <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 space-y-5">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h2 className="text-2xl font-black text-gray-900">Conditions for a Valid Sa&apos;i</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { cond: '🔢 7 Complete Laps', detail: "Exactly 7 laps must be completed, starting from Safa. Performing 6 laps (ending at Safa) renders the Sa'i incomplete and it must be corrected." },
                            { cond: '⛰️ Start at Safa', detail: 'The first lap must begin at Mount Safa and the last (7th) lap must end at Mount Marwa. Starting at Marwa is incorrect — the first lap must be repeated.' },
                            { cond: "🕌 Performed After Tawaf", detail: "Sa'i must be preceded by a valid Tawaf. If the Tawaf it follows is invalid, the Sa'i is also invalid." },
                            { cond: '💧 Ritual Purity (Recommended)', detail: "Wudu is not an obligatory condition for Sa'i — unlike Tawaf. However, it is strongly recommended (Mustahabb) to perform Sa'i in a state of Wudu." },
                            { cond: '🚶 Entire Mas\'a Must Be Covered', detail: 'Each lap must cover the full length of the Mas\'a from one mountain to the other. Stopping partway through a lap means that lap is not counted.' },
                            { cond: '🦽 Wheelchair: Fully Valid', detail: "Sa'i performed entirely by wheelchair or mobility scooter is 100% valid. Pilgrims who cannot walk may use the wheelchairs available throughout the Haram." },
                        ].map((c, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-amber-100">
                                <p className="font-bold text-gray-900 text-sm mb-1">{c.cond}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{c.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step-by-Step */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Step-by-Step: How to Perform Sa&apos;i</h2>
                    <div className="space-y-6">
                        {steps.map((step) => (
                            <div key={step.num} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-950 text-white rounded-2xl flex items-center justify-center font-black text-lg">
                                    {step.num}
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1">
                                    <h3 className="font-black text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm mb-3">{step.detail}</p>
                                    <div className="flex items-start gap-2 bg-teal-50 rounded-xl p-3 text-xs text-teal-800">
                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-600" />
                                        <p className="font-medium">{step.tip}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Duas */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Duas to Recite During Sa&apos;i</h2>
                    <p className="text-gray-700 leading-relaxed">
                        There are no fixed obligatory duas for each lap of Sa&apos;i — any sincere supplication is welcome. The following duas are from the Sunnah of the Prophet ﷺ and are highly recommended:
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                when: "Upon ascending Safa (start of Sa'i) — Quranic verse",
                                arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
                                transliteration: "Inna al-Safa wal-Marwata min sha'a'irillah",
                                translation: 'Indeed, Safa and Marwa are among the symbols (rituals) of Allah. (Quran 2:158)',
                            },
                            {
                                when: 'Declaration before beginning the first lap',
                                arabic: "أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ",
                                transliteration: "Abda'u bima bada'allahu bih",
                                translation: 'I begin with that which Allah began with.',
                            },
                            {
                                when: 'At Safa and Marwa — Facing the Kaaba direction',
                                arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ — لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
                                transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar, wa lillahil hamd — La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadir",
                                translation: 'Allah is the Greatest (×3), and to Allah belongs all praise. There is no god but Allah alone, with no partner. His is the dominion, His is all praise, and He is over all things powerful.',
                            },
                            {
                                when: 'Between Safa and Marwa (during walking)',
                                arabic: 'رَبِّ اغْفِرْ وَارْحَمْ، إِنَّكَ أَنتَ الْأَعَزُّ الْأَكْرَمُ',
                                transliteration: "Rabbighfir warham, innaka antal-a'azzul-akram",
                                translation: 'O Lord, forgive and have mercy. Verily You are the Most Mighty, the Most Generous.',
                            },
                        ].map((dua, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">{dua.when}</p>
                                <p className="text-2xl text-right font-arabic text-gray-800 mb-2 leading-loose">{dua.arabic}</p>
                                <p className="text-sm italic text-gray-500 mb-1">{dua.transliteration}</p>
                                <p className="text-sm text-gray-700 font-medium">{dua.translation}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5 text-teal-900 text-sm">
                        <Info className="w-4 h-4 inline mr-2" />
                        <strong>Important:</strong> The full dua at Safa and Marwa is recited <strong>3 times</strong> at the start of each lap, followed by personal duas of your choice. Making heartfelt personal supplication in your own language is encouraged and spiritually powerful.
                    </div>
                </section>

                {/* Common Mistakes */}
                <section className="bg-red-50/40 rounded-3xl border border-red-100 p-8 space-y-5">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-700" />
                        <h2 className="text-2xl font-black text-red-950">Common Mistakes to Avoid in Sa&apos;i</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { mistake: '❌ Starting at Marwa instead of Safa', fix: "Sa'i must always begin at Safa. If you start at Marwa by mistake, that first lap (Marwa→Safa) does not count. Begin again from Safa." },
                            { mistake: '❌ Performing only 6 laps and stopping at Safa', fix: "6 laps ending at Safa is incomplete. The 7th lap (Safa→Marwa) must be completed. The Sa'i ends only at Marwa." },
                            { mistake: "❌ Performing Sa'i before Tawaf", fix: "Sa'i performed before the required Tawaf is invalid. Always perform Tawaf first, then Sa'i." },
                            { mistake: '❌ Women running between the green markers', fix: "Running between the green markers is a Sunnah for men only. Women should walk at a normal pace throughout all 7 laps." },
                            { mistake: '❌ Not covering the full Mas\'a distance', fix: "Each lap must cover the full length of the Mas'a. Stopping before reaching the mountain on either end means that lap is incomplete." },
                            { mistake: "❌ Leaving Sa'i to pray Salah and not resuming", fix: "If a Fardh prayer is called during Sa'i, pause and pray, then resume Sa'i from where you stopped. You do not need to restart from Safa." },
                        ].map((m, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
                                <p className="font-bold text-red-900 text-sm mb-1">{m.mistake}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{m.fix}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* After Sa'i */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">What Comes After Sa&apos;i?</h2>
                    <p className="text-gray-700 leading-relaxed">After completing Sa&apos;i at Marwa, pilgrims perform <strong>Halq or Taqsir</strong> — the cutting of hair — which marks the end of Umrah and exits the pilgrim from the state of Ihram:</p>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            {
                                title: 'Halq — Full Head Shave',
                                icon: '✂️',
                                who: 'Men (Preferred)',
                                detail: "Shaving the entire head is the preferred act for men. The Prophet ﷺ made du'a three times for those who shave (Halq) and once for those who trim (Taqsir), indicating Halq is more virtuous for men.",
                            },
                            {
                                title: 'Taqsir — Trimming',
                                icon: '💇',
                                who: 'Women (Obligatory) / Men (Valid)',
                                detail: "Women cut a fingertip-length from their hair — never more than that. For men, Taqsir (trimming at least an inch from all of the hair) is also valid if they prefer not to shave. However, Halq is more virtuous for men.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{item.who}</span>
                                <h3 className="font-black text-gray-900 text-lg mt-1 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl p-5 text-emerald-900 text-sm">
                        <strong>🎉 Mabrook! Your Umrah is Complete!</strong> After Halq/Taqsir, you officially exit the state of Ihram. All Ihram restrictions are lifted, and your Umrah has been accepted — Insha&apos;Allah.
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Sa&apos;i FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pilgrim Cluster */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Complete Your Pilgrim Knowledge</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Tawaf Guide — 7 Circuits of the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Jeddah to Makkah: Private Transfer Guide', href: '/routes/jeddah-makkah/', emoji: '🚗' },
                            { title: 'Complete Jeddah Travel Guide', href: '/blog/complete-jeddah-guide/', emoji: '🗺️' },
                        ].map((b, i) => (
                            <Link key={i} href={b.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-300 transition-all flex gap-3 items-start">
                                <span className="text-2xl">{b.emoji}</span>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{b.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-teal-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Ready to Arrive in Makkah?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Start your Umrah journey with comfort. Book a private, air-conditioned transfer from Jeddah Airport or any Jeddah hotel directly to your Makkah hotel. English-speaking drivers, fixed rates, 24/7 service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20transfer%20from%20Jeddah%20to%20Makkah" target="_blank" rel="noopener noreferrer"
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
