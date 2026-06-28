import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, AlertTriangle, CheckCircle2, Navigation, Scissors } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Halq vs Taqsir Guide | Hair Cutting Rules for Hajj & Umrah',
    description: 'Understand the rules of Halq (shaving) and Taqsir (trimming) for Hajj & Umrah 2026. Learn the virtues, requirements for men & women, barber locations in Makkah, and how to exit Ihram.',
    keywords: [
        'Halq vs Taqsir',
        'hair cutting Umrah',
        'shaving head Hajj rules',
        'Taqsir hair trim women',
        'exiting Ihram hair cut',
        'Makkah barbers near Haram',
        'rules of Halq',
        'how to cut hair for Umrah',
        'pilgrim hair cutting guide',
        'Jeddah to Makkah transport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/halq-vs-taqsir-hair-cutting-umrah/',
    },
    openGraph: {
        title: 'Halq vs Taqsir Guide | Hair Cutting Rules for Hajj & Umrah',
        description: 'Learn the differences, spiritual virtues, and strict rulings of Halq and Taqsir for pilgrims to correctly complete their Umrah and Hajj.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/halq-vs-taqsir-hair-cutting-umrah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the difference between Halq and Taqsir?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Halq refers to completely shaving the entire head (for men only). Taqsir refers to clipping or trimming the hair (cutting at least the length of a fingertip from all sides of the head). Halq is highly preferred and holds greater spiritual reward for men, whereas women must perform Taqsir and are prohibited from shaving their heads.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much hair must be cut for Taqsir (trimming)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to the majority of scholars, the minimum amount of hair that must be cut for a valid Taqsir is the length of a fingertip (about 1 to 2 centimetres or roughly an inch) from all over the head. Trimming only a few strands at the front of the head is not sufficient under most madhhabs; the trim should affect the entire circumference of the hair.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can a pilgrim cut their own hair to exit Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Once you have completed the Sa\'i, you may cut your own hair or shave your own head to exit the state of Ihram. Alternatively, another pilgrim who is still in Ihram can cut your hair, or you can go to a professional barber shop outside Al-Masjid al-Haram.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where are the barbers located in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Barber shops are located directly outside the gates of Al-Masjid al-Haram. Major concentrations can be found in the Safwah Tower complex, the Abraj Al Bait Clock Tower mall, and near the Marwa gate exit. Always ensure the barber uses a new, sealed disposable blade for hygiene and safety.',
            },
        },
        {
            '@type': 'Question',
            name: 'What happens if I forget to cut my hair after Sa\'i?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you forget to cut your hair, you remain in the state of Ihram. You must cut your hair as soon as you remember. If you engaged in any prohibited actions of Ihram (like wearing stitched clothes or using perfume) before cutting your hair out of genuine forgetfulness or ignorance, there is no penalty, but you must cut your hair immediately to complete your Umrah.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Halq vs Taqsir: The Complete Guide to Hair Cutting Rules in Hajj and Umrah',
    description: 'Learn the complete Islamic rulings, hygienic guidelines, and step-by-step methods for Halq (shaving) and Taqsir (trimming) to successfully exit the state of Ihram.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/halq-vs-taqsir-hair-cutting-umrah/' },
};

export default function HalqVsTaqsirPage() {
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
                        <span>Halq vs Taqsir</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Hajj & Umrah Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 7 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Halq vs Taqsir Guide<br />
                        <span className="text-emerald-300">Hair Cutting Rules for Umrah & Hajj</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        To successfully complete your Umrah or Hajj and exit the restrictions of Ihram, you must perform either Halq (shaving) or Taqsir (trimming). Discover the rules, virtues, and vital safety guidelines for this final ritual.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Jeddah → Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Route Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Summary Grid */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex items-start gap-3">
                            <span className="text-2xl">✂️</span>
                            <div>
                                <h4 className="font-black text-emerald-800 text-sm">Halq (Complete Shave)</h4>
                                <p className="text-gray-500 text-xs mt-1">Shaving the entire head with a razor. For men only. Highly recommended.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex items-start gap-3">
                            <span className="text-2xl">💇</span>
                            <div>
                                <h4 className="font-black text-emerald-800 text-sm">Taqsir (Trimming)</h4>
                                <p className="text-gray-500 text-xs mt-1">Cutting at least a fingertip length (approx. 1 inch) from all sides. Mandatory for women; optional for men.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex items-start gap-3">
                            <span className="text-2xl">🔓</span>
                            <div>
                                <h4 className="font-black text-emerald-800 text-sm">Exiting Ihram</h4>
                                <p className="text-gray-500 text-xs mt-1">Doing this ritual officially ends your Ihram state. You can now wear regular clothing and use perfume.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Introduction to the Ritual</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Once you finish Sa&apos;i (the seven walks between Safa and Marwa), the physical components of your Umrah are almost complete. However, you remain inside the sacred state of Ihram — and bound by its strict rules — until you complete the final symbolic act of shaving or cutting your hair.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This ritual is split into two options for male pilgrims: <strong>Halq (الحلق)</strong>, which means shaving the head completely, and <strong>Taqsir (التقصير)</strong>, which means trimming or shortening the hair. For female pilgrims, only Taqsir is permitted.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This act represents absolute humility, self-purification, and a spiritual rebirth. By stripping away our hair — which is traditionally a symbol of vanity, status, and worldly beauty — we acknowledge that all human beings are equal in front of Allah, seeking only His pleasure and forgiveness.
                    </p>
                </section>

                {/* The Sunnah Proofs & Virtues */}
                <section className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-8 space-y-4">
                    <h2 className="text-2xl font-black text-gray-900 font-serif">The Virtues & Sunnah Rulings</h2>
                    <p className="text-gray-700 leading-relaxed">
                        While both shaving (Halq) and trimming (Taqsir) are permissible for men, the Prophet Muhammad ﷺ explicitly highlighted the superiority of Halq. 
                    </p>
                    <div className="bg-white border-l-4 border-emerald-600 rounded-r-xl p-5 my-4">
                        <p className="text-emerald-950 font-serif text-sm italic leading-relaxed">
                            🕋 Yahya bin Al-Husain reported that his grandfather said: I heard the Prophet ﷺ reciting supplications during the Farewell Pilgrimage:
                            <br />
                            <strong>&quot;O Allah! Forgive those who shave their heads.&quot;</strong>
                            <br />
                            The people said: &quot;O Messenger of Allah, what about those who trim their hair?&quot;
                            <br />
                            He said: <strong>&quot;O Allah! Forgive those who shave their heads.&quot;</strong>
                            <br />
                            They asked again, and on the third or fourth time, he added: <strong>&quot;And those who trim their hair.&quot;</strong>
                            <br />
                            — (Sahih Muslim)
                        </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Because the Prophet ﷺ prayed for those who shave their heads three times, and only once for those who trim, scholars consensus is that <strong>Halq is three times more virtuous and rewarding for men</strong>.
                    </p>
                </section>

                {/* Direct Comparison Table */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Comparison: Halq vs Taqsir</h2>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center gap-2">
                            <Scissors className="w-5 h-5 text-emerald-400" />
                            <h3 className="font-bold text-lg">Key Differences at a Glance</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-6 py-4">Feature</th>
                                        <th className="text-left px-6 py-4">Halq (Complete Shave)</th>
                                        <th className="text-left px-6 py-4">Taqsir (Trimming)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 font-black bg-gray-50/50">Definition</td>
                                        <td className="px-6 py-4">Shaving the head down to the scalp using a razor blade.</td>
                                        <td className="px-6 py-4">Trimming/shortening the hair using scissors or clippers.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-black bg-gray-50/50">For Men</td>
                                        <td className="px-6 py-4 text-emerald-800 font-bold">Highly Recommended (Sunnah Mu&apos;akkadah)</td>
                                        <td className="px-6 py-4 text-amber-800 font-bold">Permissible (Valid, but less reward)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-black bg-gray-50/50">For Women</td>
                                        <td className="px-6 py-4 text-red-700 font-bold">🚫 Strictly Prohibited (Haram)</td>
                                        <td className="px-6 py-4 text-emerald-800 font-bold">✅ Obligatory (Fardh/Wajib)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-black bg-gray-50/50">Minimum Cut</td>
                                        <td className="px-6 py-4">Entire scalp must be shaved clean.</td>
                                        <td className="px-6 py-4">At least one fingertip length (1-2 cm) from all over the head.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-black bg-gray-50/50">Spiritual Reward</td>
                                        <td className="px-6 py-4 font-bold text-emerald-700">Maximum Reward (3× blessings prayed by Prophet)</td>
                                        <td className="px-6 py-4">Standard Reward (1× blessing prayed by Prophet)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Rules for Men and Women */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Specific Rules for Pilgrims</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-xl font-black text-emerald-950 font-serif">Rules for Men</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Men have a choice, but are highly encouraged to shave their head (Halq). Here are the key rules:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li>If you are bald or have very little hair, you must still pass a razor blade over your scalp to symbolically complete the ritual.</li>
                                <li>If you plan to perform both Umrah and Hajj in a single trip (Tamattu&apos;), it is recommended to perform Taqsir (trimming) for Umrah, saving Halq (shaving) for the final Hajj completion.</li>
                                <li>Partial shaving (shaving only the front or sides, known as Qaza) is prohibited in Islam. Shaving must cover the entire head.</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-xl font-black text-emerald-950 font-serif">Rules for Women</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Women are prohibited from shaving their head under any circumstances. They must trim:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-2 pl-2">
                                <li>Women must gather all of their hair together at the back of the head.</li>
                                <li>A mahram (husband, father, brother, son) or another female pilgrim should cut a fingertip length (approx. 1-2 cm or 1 inch) from the bottom of the gathered hair.</li>
                                <li>Women can cut their own hair once Sa&apos;i is completed to release themselves from Ihram.</li>
                                <li>There is no requirement to cut hair in public view. It is best to do this inside hotel rooms or private areas to preserve modesty.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Safety & Hygiene */}
                <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h2 className="text-2xl font-black text-gray-900">Safety & Hygiene Guidelines (Crucial)</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        With millions of pilgrims shaving their heads in Makkah, hygiene is extremely important to prevent the transmission of blood-borne infections (like Hepatitis B, Hepatitis C, and HIV). Always follow these safety protocols:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: '❌ Avoid Street Barbers', detail: 'Never use unlicensed street side barbers who operate illegally. They often reuse razor blades across multiple pilgrims, posing a severe health hazard.' },
                            { title: '🧼 Demand Disposable Blades', detail: 'Always ensure your barber opens a brand new, sealed, disposable blade pack in front of you. Never allow them to reuse a blade.' },
                            { title: '📍 Licensed Barbers Only', detail: 'Use officially licensed barber shops located in the commercial complexes surrounding the Haram (e.g., Safwah Tower, Clock Tower, or outside the Marwa exit).' },
                            { title: '🧴 Disinfect After Shaving', detail: 'Ensure your scalp is thoroughly cleaned and disinfected after shaving to prevent bacterial infections on minor cuts.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-amber-100">
                                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Common Mistakes */}
                <section className="bg-red-50/40 rounded-3xl border border-red-100 p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-700" />
                        <h2 className="text-2xl font-black text-red-950">Common Mistakes to Avoid</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { mistake: '❌ Trimming only a few hair strands', fix: 'Trimming just three or four hairs at the front is invalid under the Shafi\'i, Maliki, and Hanbali schools. The hair must be trimmed from all parts of the head.' },
                            { mistake: '❌ Cutting hair while still on the Sa\'i path', fix: 'Pilgrims should wait until they reach Mount Marwa and completely finish the 7th lap before cutting hair. Do not cut it in the middle of the Mas\'a walkway.' },
                            { mistake: '❌ Engaging in Ihram prohibitions before cutting', fix: 'Remember, you are in the state of Ihram until the hair is actually cut. You cannot apply perfume, wear stitched clothes, or cut nails until the hair-cutting ritual is complete.' },
                            { mistake: '❌ Shaving women\'s heads', fix: 'Shaving the head of a female pilgrim is prohibited (Haram) in Islamic jurisprudence. Women must only trim the required fingertip length.' },
                        ].map((m, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
                                <p className="font-bold text-red-950 text-sm mb-1">{m.mistake}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{m.fix}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Halq & Taqsir FAQ</h2>
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
                            { title: 'Complete Sa\'i Guide (Safa to Marwa)', href: '/blog/sai-guide-hajj-umrah/', emoji: '🏃' },
                            { title: 'Tawaf Guide — 7 Circuits around the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Jeddah to Makkah Taxi Pricing', href: '/routes/jeddah-makkah/', emoji: '🚗' },
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
                    <h2 className="text-3xl font-black mb-4">Complete Your Umrah Journey Safely</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Ensure a smooth, comfortable transition from Makkah back to Jeddah Airport (JED) or to your next hotel destination. Book your certified private taxi with fixed rates and premium air conditioning.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20taxi%20booking" target="_blank" rel="noopener noreferrer"
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
