import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, AlertTriangle, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete Tawaf Guide for Hajj & Umrah 2026 | Step-by-Step',
    description: 'A complete step-by-step Tawaf guide for Umrah and Hajj 2026. Learn the 7 circuits around the Kaaba, starting point, Duas to recite, types of Tawaf, and key rules for a valid circumambulation.',
    keywords: [
        'Tawaf guide',
        'how to perform Tawaf',
        'Tawaf steps Umrah',
        'Tawaf rules Hajj',
        'types of Tawaf',
        'Tawaf dua',
        'Tawaf al-Ifadah',
        'Tawaf al-Qudum',
        'Tawaf al-Wada',
        'circumambulation Kaaba guide',
        'Makkah taxi Jeddah pilgrim',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tawaf-guide-hajj-umrah/',
    },
    openGraph: {
        title: 'Complete Tawaf Guide for Hajj & Umrah 2026 | Step-by-Step',
        description: 'Everything you need to know to perform Tawaf correctly — 7 circuits, starting point, rules, duas, and types of Tawaf explained for international pilgrims.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/tawaf-guide-hajj-umrah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How many times do you walk around the Kaaba in Tawaf?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tawaf consists of exactly 7 circuits (rounds) around the Kaaba, always moving in a counter-clockwise direction. Each circuit begins and ends at the Black Stone (Hajar al-Aswad) at the corner of the Kaaba. Completing fewer than 7 circuits renders the Tawaf invalid.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where does Tawaf start and end?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tawaf starts and ends at the Black Stone (Hajar al-Aswad), located at the eastern corner of the Kaaba. A green fluorescent line on the floor of the Tawaf area marks the starting point. Each time you pass this line, you have completed one circuit.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the conditions for a valid Tawaf?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main conditions for a valid Tawaf are: (1) Being in a state of ritual purity (Wudu/Ghusl), (2) Proper Ihram attire for Tawaf al-Qudum and Tawaf al-Umrah, (3) The Kaaba must be on the left side throughout, (4) All 7 circuits must be completed without interruption for invalid reasons, and (5) Tawaf must be performed inside Al-Masjid al-Haram.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the difference between Tawaf al-Qudum, Tawaf al-Ifadah, and Tawaf al-Wada?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tawaf al-Qudum (Arrival Tawaf) is performed by Hajj pilgrims upon first entering Makkah — it is a Sunnah, not obligatory. Tawaf al-Ifadah (Tawaf of Pilgrimage) is performed after returning from Mina during Hajj — it is the most important Tawaf and a pillar (Rukn) of Hajj. Tawaf al-Wada (Farewell Tawaf) is performed just before leaving Makkah — it is obligatory for Hajj pilgrims according to the majority of scholars. For Umrah, the main Tawaf (Tawaf al-Umrah) is a pillar of Umrah.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I perform Tawaf without Wudu?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to the majority of Islamic scholars (Hanafi, Shafi\'i, and Hanbali), Wudu (ritual ablution) is a required condition for a valid Tawaf. Performing Tawaf without Wudu requires the Tawaf to be repeated. Women who are menstruating or in a state of post-natal bleeding must wait until they are ritually pure before performing Tawaf.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Tawaf Guide for Hajj & Umrah: Step-by-Step Circumambulation Instructions',
    description: 'A comprehensive guide to performing Tawaf during Hajj and Umrah, including step-by-step instructions, types of Tawaf, key rules, duas, and practical pilgrim tips.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/tawaf-guide-hajj-umrah/' },
};

const tawafTypes = [
    {
        name: 'Tawaf al-Umrah',
        arabic: 'طواف العمرة',
        when: 'During Umrah performance',
        status: 'Pillar (Rukn) — Obligatory',
        statusColor: 'bg-red-600',
        desc: 'This is the main Tawaf performed as a core ritual of Umrah. It is performed immediately after entering the state of Ihram and arriving at Al-Masjid al-Haram. Without this Tawaf, the Umrah is not complete.',
    },
    {
        name: 'Tawaf al-Qudum',
        arabic: 'طواف القدوم',
        when: 'Upon first arrival in Makkah (Hajj only)',
        status: 'Sunnah — Recommended',
        statusColor: 'bg-blue-600',
        desc: 'The "Arrival Tawaf" is performed by Hajj pilgrims as a greeting to the Sacred Mosque when they first enter Makkah. It is a confirmed Sunnah of the Prophet ﷺ, not obligatory. Pilgrims performing Umrah do not separately perform this — their Umrah Tawaf serves this function.',
    },
    {
        name: 'Tawaf al-Ifadah',
        arabic: 'طواف الإفاضة',
        when: 'After returning from Mina (10th Dhul Hijjah)',
        status: 'Pillar (Rukn) — Obligatory for Hajj',
        statusColor: 'bg-red-600',
        desc: 'Also called "Tawaf al-Ziyarah", this is the most important Tawaf in Hajj. It is performed after a pilgrim returns from Mina and Muzdalifah, completes the symbolic stoning of the Jamarat, and shaves their head. It is a pillar of Hajj — without it, Hajj is not valid.',
    },
    {
        name: 'Tawaf al-Wada',
        arabic: 'طواف الوداع',
        when: 'Just before departing Makkah',
        status: 'Obligatory (Wajib) for Hajj',
        statusColor: 'bg-amber-600',
        desc: 'The "Farewell Tawaf" is the final act of a Hajj pilgrim before leaving the city of Makkah. According to the majority of scholars it is obligatory (Wajib). If missed, a Fidya (expiation of sacrificing a sheep) is required. Menstruating women and those in post-natal bleeding are exempted.',
    },
    {
        name: 'Tawaf al-Nafl',
        arabic: 'طواف النافلة',
        when: 'Anytime while in Makkah',
        status: 'Voluntary — Highly Recommended',
        statusColor: 'bg-emerald-600',
        desc: 'Voluntary Tawaf can be performed at any time while in Makkah as a form of worship. Many scholars consider performing Tawaf while in the Sacred Mosque to be one of the most rewarding optional acts of worship available specifically in Makkah.',
    },
];

const steps = [
    {
        num: 1,
        title: 'Enter Al-Masjid al-Haram & Make Intention (Niyyah)',
        detail: 'Enter the Masjid with the right foot, recite Bismillah, and make the intention in your heart to perform Tawaf. For Umrah, say: "Allahumma inni uridu al-Tawafa li-baytik al-haram fa-yassirhu li wa taqabbalhu minni." There is no specific verbal formula required — the intention of the heart is sufficient.',
        tip: 'Enter through Bab al-Salam (Gate of Peace) or any of the 95 gates. Keep right foot first.',
    },
    {
        num: 2,
        title: 'Proceed to the Black Stone (Hajar al-Aswad)',
        detail: 'The Hajar al-Aswad is set in the eastern corner of the Kaaba. It is a dark reddish-black stone surrounded by a silver frame. The floor has a green fluorescent line extending from this corner — this is your starting line for each circuit.',
        tip: 'During busy periods, physically kissing or touching the Black Stone may not be possible. Pointing toward it and saying "Allahu Akbar" is perfectly valid and accepted.',
    },
    {
        num: 3,
        title: 'Istilam: Kiss, Touch or Point to the Black Stone',
        detail: 'If possible, face the Kaaba, raise both hands to your earlobes, say "Bismillahi Allahu Akbar," then kiss the Black Stone, or touch it with your hand and kiss your hand. If unable to reach it (which is common in peak Hajj/Umrah season), simply face it, raise your right hand toward it, and say "Bismillahi Allahu Akbar."',
        tip: 'Do not push or harm fellow pilgrims to reach the Stone. Pointing is fully accepted and rewarded equally.',
    },
    {
        num: 4,
        title: 'Begin Walking — Keep the Kaaba on Your Left',
        detail: 'Begin walking counter-clockwise (anti-clockwise) with the Kaaba always on your LEFT side. This is the direction in which all Tawaf must be performed — it mirrors the natural rotation of the cosmos and is the command of Allah. Walk at a steady pace — not so fast as to push others, not so slow as to block the circuit.',
        tip: 'Men perform "Ramal" (a brisk, short-stepped trot) during the first 3 circuits of Tawaf al-Qudum and Tawaf al-Umrah as a Sunnah. This is not required of women.',
    },
    {
        num: 5,
        title: 'Idtiba for Men (During Umrah/Qudum Tawaf)',
        detail: 'Men performing Tawaf al-Umrah or Tawaf al-Qudum should practice "Idtiba" — placing the Ihram sheet under the right armpit, leaving the right shoulder bare, while the left shoulder remains covered. This is a Sunnah practice for the entire duration of these specific Tawafs.',
        tip: 'Idtiba applies to Tawaf only. Replace your Ihram sheet back over both shoulders when performing prayer after Tawaf.',
    },
    {
        num: 6,
        title: 'Pass the Yemeni Corner (Al-Rukn al-Yamani)',
        detail: 'On each circuit, when you reach the Yemeni Corner (the second-to-last corner of the Kaaba, on the south-west side), touch it with your right hand if possible and say "Bismillahi Allahu Akbar." If you cannot touch it, pass by without pointing toward it — unlike the Black Stone, pointing toward the Yemeni Corner is not prescribed.',
        tip: 'Between the Yemeni Corner and the Black Stone, recite: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhab an-nar" (Our Lord, grant us good in this world, good in the Hereafter, and protect us from the Fire).',
    },
    {
        num: 7,
        title: 'Complete All 7 Circuits & Make Final Istilam',
        detail: 'Each circuit is complete when you return to the Black Stone line. Perform Istilam (kiss, touch or point) at the start of each new circuit. After completing the 7th circuit, perform Istilam one final time at the Black Stone. Your Tawaf is now complete.',
        tip: 'Count your circuits carefully. Many pilgrims use a small counting bead or clicker to avoid losing count. The circuits are: 1st starting at Istilam → arriving back at Istilam = 1 complete circuit.',
    },
    {
        num: 8,
        title: 'Pray 2 Rak\'ahs Behind Maqam Ibrahim',
        detail: 'After completing the 7 circuits, proceed to pray 2 Rak\'ahs behind Maqam Ibrahim (the Station of Ibrahim) — the golden enclosure containing the stone upon which Prophet Ibrahim ﷺ stood while building the Kaaba. In the 1st Rak\'ah recite Surah al-Kafirun, and in the 2nd Rak\'ah recite Surah al-Ikhlas after al-Fatiha.',
        tip: 'If Maqam Ibrahim is too crowded, these 2 Rak\'ahs can be performed anywhere in Al-Masjid al-Haram — there is no sin in doing so.',
    },
    {
        num: 9,
        title: 'Drink from Zamzam & Proceed to Sa\'i',
        detail: 'After the 2 Rak\'ahs, drink from the blessed Zamzam water available throughout the mosque in cooled dispensers. Make a sincere dua while drinking. For Umrah, you will then proceed to perform Sa\'i (the walk between Safa and Marwa) to complete your Umrah.',
        tip: 'Drink Zamzam facing the Kaaba if possible. The Prophet ﷺ said: "Zamzam water is for whatever purpose it is drunk for." Make a sincere intention while drinking.',
    },
];

export default function TawafGuidePage() {
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
                        <span>Tawaf Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Hajj & Umrah Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 10 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Complete Tawaf Guide<br />
                        <span className="text-emerald-300">For Hajj & Umrah 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Tawaf — the sacred circumambulation of the Holy Kaaba — is one of the most profound acts of worship in Islam. This step-by-step guide explains how to perform it correctly, with full detail on rules, duas, and types.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Jeddah → Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Total Circuits', value: '7 Rounds', icon: '🔄' },
                            { label: 'Direction', value: 'Anti-clockwise', icon: '↺' },
                            { label: 'Starting Point', value: 'Black Stone', icon: '⚫' },
                            { label: 'After Tawaf', value: 'Sa\'i (Umrah)', icon: '🚶' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-lg font-black text-emerald-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* What is Tawaf */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">What is Tawaf?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Tawaf (طواف) literally means "to go around" or "to circumambulate." In Islamic worship, it refers to the sacred act of walking in circles around the Holy Kaaba — the cube-shaped house of Allah at the centre of Al-Masjid al-Haram in Makkah, Saudi Arabia.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Tawaf is one of the most ancient acts of monotheistic worship on earth, tracing back to the Prophet Ibrahim (Abraham) ﷺ who, commanded by Allah, built the Kaaba alongside his son Ismail ﷺ. The practice was continued by every prophet who visited Makkah, and was revived in its pure form by the Prophet Muhammad ﷺ during the Farewell Pilgrimage of 10 AH.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Today, Tawaf is performed continuously — 24 hours a day, 7 days a week — by Muslims from every corner of the earth. During Hajj season, over 2 million pilgrims may simultaneously be performing Tawaf, creating one of the most extraordinary human gatherings on the planet.
                    </p>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5">
                        <p className="text-emerald-900 text-sm font-semibold leading-relaxed">
                            🕋 The Prophet ﷺ said: <em>"Tawaf around the House is like prayer, except that Allah has permitted you to speak during it. Whoever speaks should only speak good."</em> (Tirmidhi, declared Sahih by al-Albani)
                        </p>
                    </div>
                </section>

                {/* Types of Tawaf */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Tawaf</h2>
                    <div className="space-y-5">
                        {tawafTypes.map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="text-2xl font-black text-gray-300">0{i + 1}</span>
                                    <div>
                                        <h3 className="font-black text-gray-900 text-lg leading-tight">{t.name}</h3>
                                        <p className="text-gray-400 text-sm font-arabic">{t.arabic}</p>
                                    </div>
                                    <span className={`ml-auto text-xs text-white font-bold px-3 py-1.5 rounded-full ${t.statusColor}`}>{t.status}</span>
                                </div>
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">Performed: {t.when}</p>
                                <p className="text-gray-600 leading-relaxed text-sm">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conditions for Valid Tawaf */}
                <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h2 className="text-2xl font-black text-gray-900">Conditions for a Valid Tawaf</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { cond: '💧 Ritual Purity (Wudu)', detail: 'Wudu must be maintained throughout all 7 circuits. If it breaks, leave the Tawaf area, perform Wudu, and recommence from where you left off.' },
                            { cond: '🧵 Proper Awrah Coverage', detail: 'Men\'s Ihram must cover correctly; women must be in full proper modest dress covering everything except face and hands.' },
                            { cond: '🕋 Kaaba on the Left', detail: 'The Holy Kaaba must be on your LEFT side for the entire duration of every circuit. Walking clockwise (Kaaba on right) is invalid.' },
                            { cond: '🔢 7 Complete Circuits', detail: 'Exactly 7 full circuits must be completed starting and ending at the Black Stone line. Partial circuits do not count.' },
                            { cond: '📍 Inside Al-Masjid al-Haram', detail: 'Tawaf must be performed within the boundaries of Al-Masjid al-Haram. The outer boundaries of the mosque are valid.' },
                            { cond: '🚶 Continuous Movement', detail: 'Tawaf should be continuous without major breaks. Short pauses for prayer times or emergency are permissible — resume from where you stopped.' },
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
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Step-by-Step: How to Perform Tawaf</h2>
                    <div className="space-y-6">
                        {steps.map((step) => (
                            <div key={step.num} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-950 text-white rounded-2xl flex items-center justify-center font-black text-lg">
                                    {step.num}
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1">
                                    <h3 className="font-black text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm mb-3">{step.detail}</p>
                                    <div className="flex items-start gap-2 bg-emerald-50 rounded-xl p-3 text-xs text-emerald-800">
                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                                        <p className="font-medium">{step.tip}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Duas */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Key Duas to Recite During Tawaf</h2>
                    <p className="text-gray-700 leading-relaxed">
                        There are no specific obligatory duas for each circuit of Tawaf — you may make any sincere supplication in any language. However, the following duas are from the Sunnah and highly recommended:
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                when: 'At the Black Stone (start of each circuit)',
                                arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
                                transliteration: 'Bismillahi Allahu Akbar',
                                translation: 'In the name of Allah, Allah is the Greatest',
                            },
                            {
                                when: 'Between the Yemeni Corner and the Black Stone',
                                arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                                transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar',
                                translation: 'Our Lord! Grant us good in this world and good in the Hereafter, and protect us from the torment of the Fire.',
                            },
                            {
                                when: 'After completing all 7 circuits (at Maqam Ibrahim)',
                                arabic: 'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى',
                                transliteration: 'Wattakhidhu min maqami Ibrahima musalla',
                                translation: 'And take the Station of Ibrahim as a place of prayer. (Quran 2:125)',
                            },
                            {
                                when: 'Drinking Zamzam after prayer at Maqam Ibrahim',
                                arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ',
                                transliteration: 'Allahumma inni as\'aluka ilman nafi\'an wa rizqan wasi\'an wa shifa\'an min kulli da\'',
                                translation: 'O Allah, I ask You for beneficial knowledge, vast provision, and healing from all illness.',
                            },
                        ].map((dua, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">{dua.when}</p>
                                <p className="text-2xl text-right font-arabic text-gray-800 mb-2 leading-loose">{dua.arabic}</p>
                                <p className="text-sm italic text-gray-500 mb-1">{dua.transliteration}</p>
                                <p className="text-sm text-gray-700 font-medium">{dua.translation}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Common Mistakes */}
                <section className="bg-red-50/40 rounded-3xl border border-red-100 p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-700" />
                        <h2 className="text-2xl font-black text-red-950">Common Mistakes to Avoid in Tawaf</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { mistake: '❌ Walking inside the Hateem', fix: 'The Hateem (semi-circular wall) is part of the Kaaba. Tawaf must go around the outside of it. Walking through the Hateem invalidates that circuit.' },
                            { mistake: '❌ Walking clockwise', fix: 'Tawaf must ALWAYS be counter-clockwise (anti-clockwise) with the Kaaba on the LEFT. Any clockwise circuits must be repeated.' },
                            { mistake: '❌ Performing Tawaf without Wudu', fix: 'Wudu is required. If Wudu breaks mid-Tawaf, exit, renew Wudu, and continue from where you stopped (you do not restart from the beginning).' },
                            { mistake: '❌ Losing count of circuits', fix: 'Use a clicker or prayer beads. If in doubt, count the lower number — i.e., if unsure whether you completed 5 or 6, assume 5 and complete accordingly.' },
                            { mistake: '❌ Pointing to the Yemeni Corner', fix: 'Only the Black Stone requires pointing if you cannot reach it. The Yemeni Corner should be touched with the right hand or passed by silently — not pointed at.' },
                            { mistake: '❌ Praying Rak\'ahs directly behind Maqam Ibrahim during peak times', fix: 'If the area is packed, pray the 2 Rak\'ahs anywhere in the Haram. This is fully valid and avoids causing disruption to others\' Tawaf.' },
                        ].map((m, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
                                <p className="font-bold text-red-900 text-sm mb-1">{m.mistake}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{m.fix}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Tawaf FAQ</h2>
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
                            { title: 'Jeddah to Makkah: Route & Pricing', href: '/routes/jeddah-makkah/', emoji: '🚗' },
                            { title: 'Complete Jeddah Travel Guide', href: '/blog/complete-jeddah-guide/', emoji: '🗺️' },
                            { title: 'Why Visit Al-Balad in Jeddah', href: '/blog/why-you-should-visit-al-balad-in-jeddah/', emoji: '🏛️' },
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
                    <h2 className="text-3xl font-black mb-4">Begin Your Journey to Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Arrive at the Haram in peace and comfort. Book your private door-to-door transfer from Jeddah Airport or your Jeddah hotel to Makkah. English-speaking drivers, fixed rates, 24/7 availability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20transfer%20from%20Jeddah%20to%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp (English)
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View Transfer Pricing <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
