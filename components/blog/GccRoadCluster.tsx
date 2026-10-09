import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Blog cluster: road travel from Riyadh to Gulf airports while Riyadh flights are disrupted (October 2026).
export const CLUSTER = [
    { slug: 'riyadh-flights-cancelled-travel-by-road', title: 'Riyadh Flights Cancelled? Reaching Dubai, Doha or Abu Dhabi by Road', short: 'The overview: options, timing, costs' },
    { slug: 'riyadh-to-doha-by-road-guide', title: 'Riyadh to Doha by Road: Salwa Border, Time and Cost', short: 'Qatar via Salwa / Abu Samra' },
    { slug: 'riyadh-to-dubai-airport-by-car', title: 'Riyadh to Dubai Airport by Car: Planning Around Your Flight', short: 'Catching a flight from DXB' },
    { slug: 'riyadh-to-abu-dhabi-by-road-guide', title: 'Riyadh to Abu Dhabi by Road: Border, Route and Cost', short: 'Abu Dhabi and Zayed International' },
    { slug: 'riyadh-flights-cancelled-india-pakistan', title: 'Riyadh Flight to India or Pakistan Cancelled? Your Options by Road', short: 'Flying home via Dammam, Jeddah or the Gulf' },
    { slug: 'saudi-to-uae-qatar-by-road-documents', title: 'Documents for Driving from Saudi Arabia to the UAE or Qatar', short: 'Passports, Iqama, exit/re-entry, visas' },
] as const;

export type ClusterSlug = (typeof CLUSTER)[number]['slug'];

const PUBLISHED = '2026-10-09';
const WA = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, my flight from Riyadh is cancelled. I need a private car from Riyadh to: ')}`;

interface Props {
    slug: ClusterSlug;
    eyebrow: string;
    lead: string;
    facts: [string, string][];
    faqs: { q: string; a: string }[];
    children: React.ReactNode;
}

export default function ClusterArticle({ slug, eyebrow, lead, facts, faqs, children }: Props) {
    const post = CLUSTER.find((p) => p.slug === slug)!;
    const url = `https://taxiserviceksa.com/blog/${slug}/`;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                '@id': `${url}#article`,
                headline: post.title,
                description: lead,
                datePublished: PUBLISHED,
                dateModified: PUBLISHED,
                mainEntityOfPage: url,
                author: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
                publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            },
            {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            },
        ],
    };

    return (
        <main className="gcc-cluster-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <header className="bg-[#0f1f2e] text-white px-4 sm:px-6 lg:px-8 pt-12 pb-14">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4">{eyebrow}</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">{post.title}</h1>
                    <p className="text-lg text-white/80 leading-relaxed mb-5">{lead}</p>
                    <p className="text-sm text-white/50">Taxi Service KSA · Updated 9 October 2026</p>
                </div>
            </header>

            <div className="px-4 sm:px-6 lg:px-8">
                <dl className="max-w-3xl mx-auto -mt-7 grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-4">
                    {facts.map(([k, v]) => (
                        <div key={k} className="p-2">
                            <dt className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{k}</dt>
                            <dd className="font-bold text-[#0f1f2e] leading-snug">{v}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <article className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto prose prose-stone prose-lg prose-headings:text-[#0f1f2e] prose-headings:font-extrabold prose-a:text-[#1d4ed8] prose-a:font-semibold prose-table:text-sm">
                    {children}
                </div>
            </article>

            <section aria-label="Book a car" className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-3xl mx-auto rounded-3xl bg-[#0f1f2e] text-white p-7 md:p-9">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need a car from Riyadh today?</h2>
                    <p className="text-white/75 mb-6">Send your pickup address, the airport or city, your flight time, passengers and luggage. You get the vehicle, the fixed fare and a pickup time before anything is confirmed.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/riyadh-alternative-airports/" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-[#0f1f2e] hover:bg-amber-300">Compare airports and fares <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                        <a href={WA} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold hover:bg-white/10"><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                </div>
            </section>

            <section aria-labelledby="faq" className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-2xl md:text-3xl font-extrabold text-[#0f1f2e] mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-black/10 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0f1f2e] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="flex gap-3 text-sm text-stone-500 mt-6"><Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />Flight schedules, border rules and visa requirements change. Check with your airline and the official authorities before you travel. We are a transport company and do not give visa or security advice.</p>
                </div>
            </section>

            <nav aria-labelledby="series" className="bg-[#f5f6f8] px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <h2 id="series" className="text-xl font-extrabold text-[#0f1f2e] mb-5">More in this guide</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CLUSTER.filter((p) => p.slug !== slug).map((p) => (
                            <li key={p.slug}>
                                <Link href={`/blog/${p.slug}/`} className="group block h-full rounded-2xl bg-white border border-black/10 p-5 hover:border-[#1d4ed8]">
                                    <span className="block font-bold text-[#0f1f2e] group-hover:text-[#1d4ed8]">{p.title}</span>
                                    <span className="block text-sm text-stone-500 mt-1">{p.short}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </main>
    );
}
