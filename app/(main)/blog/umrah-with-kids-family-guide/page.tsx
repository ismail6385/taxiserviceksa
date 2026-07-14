import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Sun, Users, Baby, Navigation, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Should You Take Your Kids for Umrah? Age-by-Age Family Guide 2026',
    description: 'Torn between taking your young children on Umrah or leaving them home? A practical, age-by-age decision guide covering summer heat, splitting siblings, and family transport tips.',
    keywords: [
        'should i take my kids for umrah',
        'umrah with kids',
        'umrah with toddlers',
        'taking children for umrah',
        'umrah with young children summer',
        'best age to take child for umrah',
        'umrah with 3 year old',
        'family umrah transport Makkah Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/umrah-with-kids-family-guide/',
    },
    openGraph: {
        title: 'Should You Take Your Kids for Umrah? Age-by-Age Family Guide 2026',
        description: 'A practical decision framework for parents weighing whether to bring young children on Umrah, plus tips for a smoother trip if you do.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/umrah-with-kids-family-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best age to take a child for Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no religious minimum age, but most experienced pilgrim families find 5-6 years old is the point where a child can understand basic instructions, walk reasonable distances, and recall the trip afterward. Children under 4 generally cannot follow crowd-safety instructions and are more vulnerable to heat and dehydration, so extra precautions (stroller, night-time rituals, private transport) matter far more for that age group.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is it safe to take a toddler for Umrah during the summer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It can be done, but summer Umrah (June-August) brings outdoor temperatures of 45-50°C in Makkah and Madinah, which is genuinely risky for toddlers if you are relying on walking, public transport, or daytime rituals. If you go in summer with a toddler, perform Tawaf and Sa\'i late at night or just before Fajr, stay hydrated constantly, and book private, air-conditioned transport door-to-door instead of walking or waiting for buses in the heat.',
            },
        },
        {
            '@type': 'Question',
            name: 'Should I split up my children and only take the one who understands Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Only if the younger child is genuinely comfortable being cared for by another trusted adult for the full duration, with no distress. If your younger child would not settle without you or their sibling present, splitting the children usually causes more disruption at home than it solves. In that case it is often simpler to either bring both children or delay this specific trip to a solo trip for the parents, rather than force a separation nobody is ready for.',
            },
        },
        {
            '@type': 'Question',
            name: 'What if my child cannot handle the crowds or heat during Tawaf?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Use a lightweight, collapsible stroller for Tawaf and Sa\'i (both areas are stroller-accessible on the ground and mezzanine levels), and perform your rituals during off-peak hours: after Isha, late night, or just before Fajr, when crowd density and temperature both drop significantly. If a child becomes overwhelmed, there is no obligation to complete rituals in one continuous session with a young child in tow — you can rotate with your spouse or take breaks in the shaded courtyard areas.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Should You Take Your Kids for Umrah? An Age-by-Age Family Decision Guide',
    description: 'A practical framework for parents deciding whether to bring young children on Umrah, covering age readiness, summer heat, splitting siblings, and family-friendly transport.',
    datePublished: '2026-07-13T00:00:00+03:00',
    dateModified: '2026-07-13T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/umrah-with-kids-family-guide/' },
};

const tips = [
    { title: '🧠 Judge Readiness by the Child, Not Just Their Enthusiasm', detail: 'A child asking to go is not the same as a child being ready to go. Look at stamina for walking, ability to follow safety instructions in a dense crowd, and how they cope with unfamiliar routines — not just how excited they are about the Kaabah.' },
    { title: '🌡️ Weigh the Summer Heat Honestly', detail: 'Outdoor temperatures in Makkah and Madinah regularly hit 45-50°C between June and August. This is manageable for adults with planning, but it meaningfully raises the risk of dehydration and exhaustion for a toddler or preschooler. If your dates are flexible, a cooler month changes the calculation completely.' },
    { title: '👯 Think Twice Before Splitting Siblings for a Short Trip', detail: 'If your younger child will not settle without a parent or sibling present, separating them for a week rarely goes smoothly for anyone — the child, the grandparents, or your own peace of mind during the trip. A short trip usually is not worth engineering a separation nobody is emotionally ready for.' },
    { title: '🚗 Let Transport and Logistics Absorb the Hard Part', detail: 'Most of the real difficulty with young children on Umrah is not the rituals themselves — it is standing in heat waiting for a bus, walking long unshaded distances, or navigating crowds with a stroller. Private, air-conditioned, door-to-door transport removes most of that friction regardless of which option you choose.' },
];

export default function UmrahWithKidsFamilyGuidePage() {
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
                        <span>Umrah With Kids</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">👨‍👩‍👧‍👦 Family Care Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 9 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated July 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Should You Take Your Kids<br />
                        <span className="text-emerald-300">for Umrah This Summer?</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        One child is old enough to understand the Kaabah and has been asking to go. The other is too young to be left behind comfortably. It is one of the most common dilemmas parents face when planning a summer Umrah — here is a practical way to think it through.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20planning%20Umrah%20with%20my%20children%20and%20need%20a%20family-friendly%20taxi%20with%20child%20seats" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Ask About Family Transfers
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            View Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Banner */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Users className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">A Common Dilemma, Not a Wrong Question</h4>
                        <p className="leading-relaxed">
                            Parents with one child old enough to grasp Umrah and one who is not often assume there is a single "correct" answer. In practice, there are several reasonable options — the right one depends on your children's temperament, your travel dates, and how much of the physical strain you can absorb as parents.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why This Decision Feels Harder Than It Should</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Umrah is meant to be a spiritually focused journey, which is exactly why bringing young children into it feels complicated. A 6-year-old who has been asking about Makkah for months will genuinely feel left out if excluded. A 3-year-old who cannot yet grasp the significance may find the trip closer to an exhausting, disorienting week than a meaningful one — and if that same 3-year-old will not settle without their parents or sibling nearby, leaving them behind is not really an option either.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        None of these instincts are wrong. The way through is to separate the emotional question ("will my daughter be upset?") from the practical one ("what will this trip actually look like for a 3-year-old in the heat?") and then decide with both answers in view.
                    </p>
                </section>

                {/* Step-by-step framework */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Four Questions to Work Through First</h2>
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

                {/* Three realistic options */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Three Realistic Options — Weighed Honestly</h2>
                    <p className="text-gray-700 leading-relaxed">
                        When one child understands Umrah and the other doesn't, and the younger child cannot be left comfortably, most families end up choosing between three paths. None is objectively "correct" — each trades off differently.
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-lg font-black text-emerald-950 font-serif">Option A: Bring Both Children</h3>
                            <p className="text-gray-700 text-xs leading-relaxed">
                                Keeps the family together and avoids disappointing your eldest.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li><strong>Pros:</strong> No guilt about excluding anyone; your older child gets the trip she has been asking for.</li>
                                <li><strong>Cons:</strong> The youngest is unlikely to get much spiritual benefit from it yet, and summer heat plus a toddler adds real physical strain for both parents.</li>
                                <li><strong>Makes it easier:</strong> Private transport, night-time rituals, a stroller, and a hotel within walking distance of the Haram.</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-lg font-black text-emerald-950 font-serif">Option B: Go as a Couple, Wait for Both Kids</h3>
                            <p className="text-gray-700 text-xs leading-relaxed">
                                Treats this trip as the parents' own Umrah, and plans a full family trip later when both children are old enough to appreciate it together.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li><strong>Pros:</strong> A calmer, more spiritually focused trip for you and your wife; no risk to a toddler in extreme heat.</li>
                                <li><strong>Cons:</strong> Your 6-year-old will likely be disappointed short-term.</li>
                                <li><strong>Makes it easier:</strong> Involve her in the planning ("your Umrah is coming when your sister is old enough too"), and mark a rough timeframe together so it feels like a promise, not a no.</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-lg font-black text-emerald-950 font-serif">Option C: Only the Older Child Goes</h3>
                            <p className="text-gray-700 text-xs leading-relaxed">
                                Only realistic if the younger child is genuinely settled and happy staying with grandparents or family for the week.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li><strong>Pros:</strong> The older child gets a trip matched to her understanding; the younger avoids the heat entirely.</li>
                                <li><strong>Cons:</strong> If the younger child is not okay being separated from both parents and her sibling, this option creates more distress at home than it solves — for the child and for whoever is caring for her.</li>
                                <li><strong>Reality check:</strong> If this isn't viable for your family, it's fine to rule it out and choose between A and B instead.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Summer-specific section */}
                <section className="space-y-4 bg-amber-50 border border-amber-100 rounded-3xl p-8">
                    <div className="flex items-center gap-3">
                        <Sun className="w-6 h-6 text-amber-600" />
                        <h2 className="text-2xl font-black text-gray-900">If You Do Bring Young Children in Summer</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Choosing Option A doesn't mean accepting a miserable week. The heat is the main variable you can actually control through planning:
                    </p>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Perform rituals at night:</strong> Tawaf and Sa'i between 10 PM and 4 AM avoid both the peak heat and the densest crowds.</span></li>
                        <li className="flex gap-3"><Baby className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Bring a lightweight stroller:</strong> Both the Mataf ground floor and the Sa'i mezzanine are stroller-accessible, and it doubles as a place for a toddler to nap mid-ritual.</span></li>
                        <li className="flex gap-3"><MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Book a hotel within walking distance of the Haram:</strong> This removes the single biggest source of midday heat exposure — the commute back and forth.</span></li>
                        <li className="flex gap-3"><Navigation className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Use private, air-conditioned transport for every other leg:</strong> airport transfers, the Makkah–Madinah intercity route, and any Ziyarat trips. Waiting outdoors for shared transport with a toddler in 48°C heat is the part parents regret most, not the rituals themselves.</span></li>
                    </ul>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Parents' FAQ</h2>
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
                            { title: 'Best Time to Perform Umrah (Weather & Crowds)', href: '/blog/best-time-to-perform-umrah/', emoji: '☀️' },
                            { title: 'Ultimate Umrah Packing List 2026', href: '/blog/ultimate-umrah-packing-list/', emoji: '🧳' },
                            { title: "Women's Umrah Guide", href: '/blog/womens-umrah-guide/', emoji: '🧕' },
                            { title: 'Elderly Umrah Guide: Wheelchairs & Care Tips', href: '/blog/elderly-umrah-guide-tips/', emoji: '❤️' },
                            { title: 'Common Umrah Mistakes to Avoid', href: '/blog/common-umrah-mistakes-to-avoid/', emoji: '⚠️' },
                            { title: 'Ramadan Umrah Guide', href: '/blog/ramadan-umrah-guide/', emoji: '🌙' },
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
                    <h2 className="text-3xl font-black mb-4">Family-Friendly Transfers, Whichever You Choose</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Whether it's two adults or the whole family, book a spacious, air-conditioned Hyundai Staria or GMC Yukon XL with child seats available on request, room for a stroller and luggage, and flexible stops along the way. Fixed rates, door-to-door.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20planning%20Umrah%20with%20my%20family%20and%20need%20a%20taxi%20with%20child%20seats" target="_blank" rel="noopener noreferrer"
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
