import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Time to Perform Umrah 2026 | Weather, Crowd & Cost Guide',
    description: 'When is the best time to perform Umrah? Compare weather conditions, crowd densities, pricing seasons, and the virtues of Umrah in Ramadan in our 2026 guide.',
    keywords: [
        'best time to perform Umrah',
        'best month for Umrah 2026',
        'Umrah off peak season',
        'weather in Makkah and Madinah',
        'Umrah in Ramadan virtues',
        'cheapest time for Umrah',
        'Makkah crowd density calendar',
        'Jeddah to Makkah transport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-time-to-perform-umrah/',
    },
    openGraph: {
        title: 'Best Time to Perform Umrah 2026 | Weather, Crowd & Cost Guide',
        description: 'Plan your pilgrimage with confidence. A complete breakdown of Makkah weather, crowd density cycles, and budget-friendly seasons.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-time-to-perform-umrah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'When is the cheapest month to perform Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The cheapest months to perform Umrah are typically right after the Hajj season ends (Muharram and Safar) and during late Rabi al-Awwal and Rabi al-Thani. During these periods, hotels in Makkah and Madinah reduce their rates, and flight costs drop significantly compared to peak times like Ramadan and school holidays.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Umrah allowed during Hajj season?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. The Saudi Ministry of Hajj & Umrah suspends the issuance of Umrah visas and Nusuk permits for general visitors starting from mid-Dhul Qadah until the completion of Hajj (around mid-Dhul Hijjah). Only registered Hajj pilgrims are permitted inside Makkah during this period to ensure safety and smooth logistics.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the weather like in Makkah and Madinah during winter?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Winter (November to February) is the most pleasant time weather-wise. Temperatures in Makkah range from 18°C to 30°C, while Madinah can get quite cool, dropping to 10°C at night. This comfortable weather makes outdoor rituals like Tawaf and Sa\'i physically much easier, though this is also a peak tourist season with higher crowd levels.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the virtues of performing Umrah in Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Performing Umrah during the holy month of Ramadan holds immense spiritual value. The Prophet Muhammad ﷺ said: "An Umrah performed in Ramadan is equivalent to Hajj (with me) in reward." However, Ramadan is also the peak crowd season with the highest hotel and travel costs.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time to Perform Umrah: The Definitive 2026 Weather & Crowd Calendar',
    description: 'A comprehensive monthly analysis of climate, crowds, costs, and travel dynamics to help pilgrims select the ideal time for their Umrah.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/best-time-to-perform-umrah/' },
};

const seasons = [
    {
        name: '❄️ Winter Season (November – February)',
        temp: '18°C – 30°C (Comfortable & Pleasant)',
        crowd: 'High Density (Peak General Tourism)',
        cost: 'Moderate to High',
        desc: 'This is universally considered the best time weather-wise. Days are warm but comfortable, and evenings in Madinah can be surprisingly chilly. Because the weather is ideal, it is highly popular for families, senior citizens, and group tours, leading to busy mosques and moderately high hotel rates.',
    },
    {
        name: '🌸 Spring Season (March – May)',
        temp: '22°C – 38°C (Warm but Manageable)',
        crowd: 'Varies (Extremely High in Ramadan)',
        cost: 'Varies (Ramadan is Peak Pricing)',
        desc: 'Spring brings rising temperatures, but mornings and nights remain pleasant. If Ramadan falls in this period, Makkah operates at 100% capacity with maximum hotel prices. Non-Ramadan weeks in spring are excellent shoulder-season choices for pilgrims wanting moderate weather with fewer crowds.',
    },
    {
        name: '☀️ Summer Season (June – August)',
        temp: '32°C – 45°C+ (Extremely Hot)',
        crowd: 'Low (Except during Hajj dates)',
        cost: 'Budget Friendly (Low hotel rates)',
        desc: 'Summer in Saudi Arabia is characterized by dry, intense heat, often exceeding 43°C during mid-day. Aside from the Hajj period (which blocks Umrah visas), this is the off-peak season. Hotels offer major discounts. If you travel now, perform your Tawaf and Sa\'i after Isha or before Sunrise to avoid the blazing sun.',
    },
    {
        name: '🍂 Autumn Season (September – October)',
        temp: '26°C – 39°C (Warm Transition)',
        crowd: 'Moderate / Low',
        cost: 'Affordable / Off-Peak Rates',
        desc: 'Autumn is a fantastic transition period. The extreme summer heat begins to decline, and the winter rush has not yet started. This is one of the best windows for budget-conscious pilgrims who also want to avoid massive crowds and long queues for Rawdah permits.',
    },
];

const monthlyGuide = [
    { month: 'January', temp: 'Cool & Pleasant', crowd: 'Very Busy', cost: 'High', verdict: 'Best for Seniors' },
    { month: 'February', temp: 'Warm & Pleasant', crowd: 'Busy', cost: 'Medium-High', verdict: 'Excellent Weather' },
    { month: 'March', temp: 'Warm / Hot', crowd: 'Varies', cost: 'Varies', verdict: 'Check Ramadan Calendar' },
    { month: 'April', temp: 'Hot Days', crowd: 'High', cost: 'High', verdict: 'Peak Ramadan / Spring' },
    { month: 'May', temp: 'Very Hot', crowd: 'Moderate', cost: 'Medium', verdict: 'Good for Budget Travelers' },
    { month: 'June', temp: 'Extreme Heat', crowd: 'Blocked for Hajj', cost: 'N/A', verdict: 'Hajj Season - No Umrah Visas' },
    { month: 'July', temp: 'Extreme Heat', crowd: 'Low', cost: 'Very Low', verdict: 'Cheapest Rates (Post-Hajj opening)' },
    { month: 'August', temp: 'Extreme Heat', crowd: 'Low-Medium', verdict: 'Hot but Affordable' },
    { month: 'September', temp: 'Very Warm', crowd: 'Moderate', cost: 'Low-Medium', verdict: 'Best Balance of Crowd/Cost' },
    { month: 'October', temp: 'Warm & Pleasant', crowd: 'Moderate', cost: 'Medium', verdict: 'Highly Recommended' },
    { month: 'November', temp: 'Pleasant Days', crowd: 'Busy', cost: 'Medium-High', verdict: 'Winter Season Commences' },
    { month: 'December', temp: 'Cool & Pleasant', crowd: 'Very Busy', cost: 'High', verdict: 'Peak Winter / Holidays' },
];

export default function BestTimeToPerformUmrahPage() {
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
                        <span>Best Time for Umrah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📅 Pilgrim Planning</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Best Time to Perform Umrah<br />
                        <span className="text-emerald-300">Weather & Crowd Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Selecting when to travel to Makkah depends on your priorities: pleasant weather, budget savings, or spiritual peaks. Read our comprehensive seasonal analysis to find your ideal travel window.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Airport to Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Check Taxi Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Summary Highlights */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                            <div className="text-2xl mb-1">🌤️</div>
                            <div className="text-lg font-black text-emerald-800">November – February</div>
                            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Best Weather Season</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                            <div className="text-2xl mb-1">💰</div>
                            <div className="text-lg font-black text-emerald-800">July – September</div>
                            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Most Budget Friendly</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                            <div className="text-2xl mb-1">🕌</div>
                            <div className="text-lg font-black text-emerald-800">Ramadan (Last 10 Days)</div>
                            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Highest Spiritual Reward</div>
                        </div>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Understanding the Umrah Calendar</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Unlike Hajj, which must be performed on specific dates during the Islamic month of Dhul Hijgah, Umrah (the minor pilgrimage) can be performed at almost any time of the year. However, the experience of your pilgrimage will vary dramatically based on when you travel.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Factors like intense summer temperatures, massive crowd surges during school holidays and Ramadan, and fluctuating hotel prices in Makkah all play a vital role. In this guide, we break down these factors to help you make an informed decision for your family.
                    </p>
                </section>

                {/* Seasonal Analysis */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Seasonal Breakdown</h2>
                    <div className="space-y-6">
                        {seasons.map((s, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
                                <h3 className="text-xl font-black text-emerald-950 font-serif">{s.name}</h3>
                                <div className="grid sm:grid-cols-3 gap-2 text-xs text-gray-500 font-semibold">
                                    <p>🌡️ Temp: <span className="text-gray-800 font-bold">{s.temp}</span></p>
                                    <p>👥 Crowds: <span className="text-gray-800 font-bold">{s.crowd}</span></p>
                                    <p>💳 Cost: <span className="text-gray-800 font-bold">{s.cost}</span></p>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Monthly Analysis Table */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Makkah Monthly Guide</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">A detailed monthly summary to help you plan flight bookings, taxi services, and hotel reservations:</p>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-emerald-400" />
                            <h3 className="font-bold text-lg">Umrah Monthly Calendar Matrix</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-6 py-4">Month</th>
                                        <th className="text-left px-6 py-4">Weather</th>
                                        <th className="text-left px-6 py-4">Crowds</th>
                                        <th className="text-left px-6 py-4">Price</th>
                                        <th className="text-left px-6 py-4">Verdict</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    {monthlyGuide.map((m, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-6 py-4 font-black">{m.month}</td>
                                            <td className="px-6 py-4">{m.temp}</td>
                                            <td className="px-6 py-4">{m.crowd || 'Low-Medium'}</td>
                                            <td className="px-6 py-4">{m.cost || 'Low'}</td>
                                            <td className="px-6 py-4 font-semibold text-emerald-800">{m.verdict}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Important Tips for Off-Peak & Hot Weather */}
                <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h2 className="text-2xl font-black text-gray-900">Tips for Traveling in Off-Peak/Summer</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        If you choose to travel during the cheaper, hotter summer months (July to September), follow these survival tips:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: '⏰ Time Your Rituals', detail: 'Perform Tawaf and Sa\'i during cool hours: between 9:00 PM and 4:00 AM. Avoid walking on the courtyard floors during mid-day.' },
                            { title: '💧 Drink Zamzam Constantly', detail: 'Stay hydrated. Zamzam water is readily available in cooled dispensers throughout Al-Masjid al-Haram.' },
                            { title: '👟 Socks are Vital', detail: 'The marble floors are cooled by internal water pipes, but the outdoor courtyard floor can get extremely hot. Wear socks to protect your feet.' },
                            { title: '🚗 Pre-book Transportation', detail: 'Standing outside in 42°C heat trying to negotiate with taxi drivers at Jeddah Airport is exhausting. Pre-book an air-conditioned private transfer.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-amber-100">
                                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Best Time for Umrah FAQ</h2>
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
                            { title: 'Tawaf Guide — 7 Circuits around the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
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
                    <h2 className="text-3xl font-black mb-4">Secure Your Umrah Taxi Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Whenever you decide to travel, ensure your intercity transfers are comfortable and stress-free. Book your air-conditioned Camry, Staria, or GMC Yukon XL from Jeddah to Makkah in advance.
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
