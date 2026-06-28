import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, AlertTriangle, CheckCircle2, Navigation, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: '21 Common Umrah Mistakes to Avoid | Hajj & Umrah Guide 2026',
    description: 'Planning your Umrah? Avoid these 21 common mistakes during Ihram, Miqat, Tawaf, Sa\'i, and Halq/Taqsir. Learn the correct Sunnah methods and Fidya (penalties).',
    keywords: [
        'common Umrah mistakes',
        'Umrah mistakes to avoid',
        'Ihram violations',
        'Tawaf errors',
        'Sa\'i mistakes',
        'Umrah hair cutting mistake',
        'what invalidates Umrah',
        'Fidya for Umrah rules',
        'Makkah pilgrim guide 2026',
        'Jeddah airport to Makkah taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/common-umrah-mistakes-to-avoid/',
    },
    openGraph: {
        title: '21 Common Umrah Mistakes to Avoid | Hajj & Umrah Guide 2026',
        description: 'Ensure your Umrah is valid and accepted. Discover the critical mistakes to avoid at every stage of the pilgrimage — from Miqat to hair cutting.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/common-umrah-mistakes-to-avoid/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What happens if you make a mistake in Ihram rules?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you violate an Ihram rule (like using perfume, cutting hair/nails, or wearing stitched clothes for men) out of genuine forgetfulness or ignorance, there is no penalty or sin, but you must stop the violation immediately. If done intentionally, you must perform expiation (Fidya), which usually involves fasting for 3 days, feeding 6 poor people, or sacrificing a sheep.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does a mistake in Tawaf invalidate Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Certain mistakes in Tawaf can render it invalid, which in turn invalidates the Umrah. These include: performing Tawaf without Wudu (according to the majority of scholars), walking clockwise instead of counter-clockwise, walking through the Hateem wall (semi-circular area), or completing fewer than 7 circuits. If any of these occur, the invalid circuits must be repeated.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you cross the Miqat boundary without Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Anyone intending to perform Hajj or Umrah must enter the state of Ihram before crossing the designated Miqat boundary. If you cross the Miqat without Ihram, you must travel back to the Miqat to enter Ihram, or sacrifice a sheep in Makkah as a penalty (Dam) if you proceed without doing so.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is taking selfies and photos inside Al-Masjid al-Haram allowed?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While basic photography for personal memory is legally allowed, excessive photography, taking selfies during Tawaf/Sa\'i, or live streaming is highly discouraged. It distracts you and other pilgrims from the solemnity of the worship and can borders on vanity (Riyaa) if done to show off.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is Fidya or Dam in Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fidya refers to the expiation/compensation required for violating certain rules of Hajj or Umrah. Depending on the gravity of the violation, the penalty (Dam) ranges from sacrificing a sheep (distributed to the poor of Makkah), feeding six needy people, or fasting for three days.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '21 Common Umrah Mistakes to Avoid: The Definitive Pilgrim Guide',
    description: 'A comprehensive, step-by-step review of the most common mistakes pilgrims make during Umrah, categorized by stage, with corrective actions and penalty rules.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/common-umrah-mistakes-to-avoid/' },
};

const mistakeCategories = [
    {
        title: '1. Miqat & Intention (Niyyah) Mistakes',
        mistakes: [
            {
                name: 'Crossing the Miqat without Ihram',
                desc: 'Many pilgrims flying directly to Jeddah Airport plan to change into Ihram at the airport. This is a major mistake because the flight crosses the Miqat line before landing in Jeddah. You must put on your Ihram clothing and make your intention (Niyyah) on the aircraft before crossing the Miqat.',
                fix: 'If you cross the Miqat without Ihram, you must travel back to the nearest Miqat boundary to enter Ihram, or sacrifice a sheep in Makkah (Dam) as expiation.',
            },
            {
                name: 'Entering Ihram without making the formal Niyyah',
                desc: 'Simply putting on the white sheets (Ihram clothing) does not put you in the state of Ihram. Ihram is a state of mind and spirit that only begins when you make the formal intention (Niyyah) and recite the Talbiyah.',
                fix: 'Ensure you make the conscious intention in your heart: "O Allah, I intend to perform Umrah, so make it easy for me and accept it from me," followed by reciting the Talbiyah.',
            },
        ],
    },
    {
        title: '2. Ihram State & Attire Mistakes',
        mistakes: [
            {
                name: 'Using scented toiletries while in Ihram',
                desc: 'Using perfumed soaps, shampoos, body washes, wet wipes, or deodorants once in the state of Ihram is prohibited.',
                fix: 'Buy unscented, fragrance-free soaps and toiletries specifically labeled for Hajj & Umrah use. Avoid using the hotel soaps if they have fragrance.',
            },
            {
                name: 'Wearing stitched footwear (for men)',
                desc: 'Men often wear regular shoes or socks, which cover the ankles and the upper arch (instep) of the foot.',
                fix: 'Men must wear sandals or slippers that leave both the ankles and the top arch of the foot completely exposed.',
            },
            {
                name: 'Covering the head (for men) or the face (for women)',
                desc: 'Men sometimes cover their heads with caps, towels, or their Ihram sheet to protect against the sun. Women sometimes wear standard stitched face veils (Niqab) or gloves.',
                fix: 'Men must keep their heads completely uncovered. Women must keep their faces and hands exposed, though they may drape a cloth over their face in the presence of non-mahram men.',
            },
        ],
    },
    {
        title: '3. Tawaf (Circumambulation) Mistakes',
        mistakes: [
            {
                name: 'Walking inside the Hateem (Hijr Ismail)',
                desc: 'The Hateem is the semi-circular walled area adjacent to the Kaaba. It is structurally part of the Kaaba itself. Walking through this area during Tawaf invalidates that circuit.',
                fix: 'You must walk around the outside of the semi-circular wall. If you walked inside the Hateem, you must repeat that circuit.',
            },
            {
                name: 'Pointing or waving at the Yemeni Corner (Al-Rukn al-Yamani)',
                desc: 'Pilgrims often point, wave, or say "Allahu Akbar" towards the Yemeni Corner. This is only prescribed for the Black Stone (Hajar al-Aswad).',
                fix: 'Touch the Yemeni Corner with your right hand if possible without causing harm to others. If you cannot reach it, pass by silently without pointing or waving.',
            },
            {
                name: 'Pushing and shoving to kiss the Black Stone',
                desc: 'Many pilgrims desperately push, shove, and fight through crowds to touch or kiss the Black Stone, causing physical harm to others.',
                fix: 'Kissing the stone is a Sunnah, but causing harm to others is Haram. Pointing your right hand towards the Black Stone from a distance and saying "Allahu Akbar" is fully valid and rewarded.',
            },
            {
                name: 'Practicing Idtiba during the entire stay in Makkah',
                desc: 'Idtiba (leaving the right shoulder exposed) is only Sunnah during the actual Tawaf of Umrah or Arrival Tawaf. Keeping the shoulder exposed during the 2 Rak\'ahs of prayer, Sa\'i, or daily Salah is incorrect.',
                fix: 'Cover both shoulders as soon as you finish the 7th circuit of Tawaf, before starting the 2 Rak\'ahs prayer behind Maqam Ibrahim.',
            },
        ],
    },
    {
        title: '4. Sa\'i (Safa & Marwa Walk) Mistakes',
        mistakes: [
            {
                name: 'Starting the Sa\'i at Mount Marwa',
                desc: 'Some pilgrims begin their walk at Marwa instead of Safa. This makes the first lap invalid.',
                fix: 'Always begin Sa\'i at Mount Safa. If you started at Marwa, discard that lap and begin counting Lap 1 from Safa to Marwa.',
            },
            {
                name: 'Counting one round-trip as a single lap',
                desc: 'Walking from Safa to Marwa and back to Safa is often counted as 1 lap. If you do this, you will end up walking 14 laps instead of 7.',
                fix: 'Safa to Marwa is Lap 1. Marwa to Safa is Lap 2. Your 7th lap will always end at Mount Marwa.',
            },
            {
                name: 'Women running between the green lights',
                desc: 'Women sometimes jog or run between the green fluorescent lights. This running (Sa\'y) is a Sunnah exclusive to male pilgrims.',
                fix: 'Women must maintain a normal walking pace throughout all 7 laps of the Mas\'a walkway.',
            },
        ],
    },
    {
        title: '5. Halq & Taqsir (Hair Cutting) Mistakes',
        mistakes: [
            {
                name: 'Trimming only a few strands of hair',
                desc: 'Many pilgrims (both men and women) simply cut three or four hairs from the front of their head and assume their Umrah is complete.',
                fix: 'Men must shave the entire head (Halq) or trim at least a fingertip length (approx. 1 inch) from all sides of the head (Taqsir). Women must cut a fingertip length from the bottom of all their gathered hair.',
            },
            {
                name: 'Shaving the head of a female pilgrim',
                desc: 'Shaving the head of a woman is strictly forbidden (Haram) in Islamic law.',
                fix: 'Women must only perform Taqsir (trimming a fingertip length from the end of their hair).',
            },
            {
                name: 'Exiting Ihram before the hair is actually cut',
                desc: 'After finishing Sa\'i, some pilgrims remove their Ihram sheets, take a shower, put on regular clothes, or use perfume before they cut their hair.',
                fix: 'You are in the state of Ihram until the hair is cut. Do not change clothes, shave your beard, or use scented products until your head is shaved or trimmed.',
            },
        ],
    },
];

export default function UmrahMistakesPage() {
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
                        <span>Umrah Mistakes</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Hajj & Umrah Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 12 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        21 Common Umrah Mistakes<br />
                        <span className="text-emerald-300">To Avoid in Hajj & Umrah 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        An accepted Umrah (Umrah Maqboolah) requires following the authentic Sunnah of the Prophet ﷺ. Learn the most common errors during Miqat, Ihram, Tawaf, Sa&apos;i, and hair cutting to keep your worship valid.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Jeddah → Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Check Taxi Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Warning Callout */}
            <div className="bg-amber-50 border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 py-5 flex items-start gap-3 text-amber-950 text-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                        <strong>⚠️ Why this matters:</strong> Certain mistakes in Umrah can invalidate specific rituals (like walking through the Hateem in Tawaf), meaning you remain bound in the state of Ihram. Other violations require a penalty (Dam or Fidya) such as sacrificing a sheep. Understanding these rules protects your pilgrimage and saves you from complex expiations.
                    </p>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction Section */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Study Umrah Mistakes?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Umrah is a beautiful journey of love and devotion. However, because it is an act of structured worship (Ibadah), it has specific pillars (Arkan), obligations (Wajibati), and prohibitions (Mahdhuraat) that must be respected. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Often, out of excitement, lack of preparation, or following incorrect cultural traditions, pilgrims make mistakes that can compromise their state of Ihram or render their rituals invalid. This guide is built to help you identify these pitfalls in advance, referencing established Islamic jurisprudence (Fiqh) and practical hygiene standards.
                    </p>
                </section>

                {/* Categorized Mistakes */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-black text-gray-900">Categorized List of Common Mistakes</h2>
                    
                    {mistakeCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-2xl font-black text-emerald-950 border-b border-emerald-100 pb-2 font-serif">{cat.title}</h3>
                            
                            <div className="space-y-5">
                                {cat.mistakes.map((mistake, mIdx) => (
                                    <div key={mIdx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
                                        <h4 className="font-black text-red-700 text-lg flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center font-bold">{mIdx + 1}</span>
                                            {mistake.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{mistake.desc}</p>
                                        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-xs text-emerald-900 flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <strong>How to do it correctly:</strong> {mistake.fix}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* General Spiritual Mistakes */}
                <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-2xl font-black text-gray-900">General & Spiritual Mistakes</h2>
                    </div>
                    <ul className="space-y-4 text-gray-700 text-sm pl-4 list-disc">
                        <li>
                            <strong>Excessive Photography & Selfies:</strong> While taking a quick photo is permissible, taking selfies during Tawaf and Sa&apos;i ruins focus and can border on vanity (Riyaa) if shared to show off. Focus on the spiritual weight of where you are standing.
                        </li>
                        <li>
                            <strong>Shouting Duas in Unison:</strong> Groups sometimes follow a guide who shouts out duas, and the group repeats in unison. This creates a noisy environment that disturbs other pilgrims. Supplicating silently and personally is closer to the Sunnah.
                        </li>
                        <li>
                            <strong>Pushing & Harming Others:</strong> Trying to touch the Kaaba, pray directly behind Maqam Ibrahim, or reach the Black Stone by violently pushing other pilgrims is a sin. Protecting the safety of fellow Muslims is far more obligatory than kissing the Stone.
                        </li>
                        <li>
                            <strong>Wasting Time Shopping Before Completing Umrah:</strong> Some pilgrims shop, dine, or rest excessively before completing their Umrah rituals. It is best to go straight to Al-Masjid al-Haram from your arrival to complete your Umrah as quickly as possible.
                        </li>
                    </ul>
                </section>

                {/* Expiation (Fidya) Guide */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Understanding Expiation (Fidya/Dam)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        If you violate an Ihram rule or skip an obligatory ritual, you may be required to pay expiation (Fidya). The penalty depends on the type of violation:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            {
                                type: '🐑 Dam (Sacrifice)',
                                rules: 'Required for skipping an obligatory act (like crossing the Miqat without Ihram or missing the Farewell Tawaf in Hajj).',
                                penalty: 'Sacrificing a sheep in Makkah. The meat must be distributed to the poor inside the Haram boundary.',
                            },
                            {
                                type: '🍲 Feeding the Poor',
                                rules: 'An alternative penalty for minor Ihram violations (like cutting hair/nails or using perfume due to illness/necessity).',
                                penalty: 'Feeding 6 needy people inside the Haram boundary (giving each half a Sa\'a of food, approx. 1.5kg).',
                            },
                            {
                                type: '📅 Fasting',
                                rules: 'Another alternative option for minor Ihram violations, which can be done anywhere in the world.',
                                penalty: 'Fasting for 3 consecutive days. There is no requirement to fast inside Makkah.',
                            },
                        ].map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between">
                                <div>
                                    <h4 className="font-black text-emerald-950 text-lg mb-2">{f.type}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{f.rules}</p>
                                </div>
                                <div className="bg-emerald-50 rounded-xl p-3 text-xs text-emerald-900">
                                    <strong>Penalty:</strong> {f.penalty}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Umrah Mistakes FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related guides */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Pilgrim Guides</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Tawaf Guide — 7 Circuits around the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Complete Sa\'i Guide (Safa to Marwa)', href: '/blog/sai-guide-hajj-umrah/', emoji: '🏃' },
                            { title: 'Halq vs Taqsir (Hair Cutting Rules)', href: '/blog/halq-vs-taqsir-hair-cutting-umrah/', emoji: '✂️' },
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
                    <h2 className="text-3xl font-black mb-4">Travel to Makkah in Complete Peace</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Do not let travel exhaustion affect your focus. Book your private, air-conditioned taxi from Jeddah Airport (JED) straight to your Makkah hotel door. Muslim-certified drivers, fixed prices, 24/7 service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20taxi%20transfer%20to%20Makkah" target="_blank" rel="noopener noreferrer"
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
