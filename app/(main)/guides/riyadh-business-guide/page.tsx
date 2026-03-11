import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { 
    Building2, MapPin, Clock, Users, Car, ArrowRight, 
    CheckCircle2, AlertCircle, Info, Briefcase, 
    Ruler, Sparkles, TrendingUp 
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Riyadh Business Travel Guide 2026 | KAFD, Corporate Transport - VIP Transfer KSA',
    description: 'Complete business travel guide for Riyadh: KAFD access, business districts, meeting venues, corporate facilities, traffic strategies, and professional transport services.',
    keywords: ['Riyadh business travel', 'KAFD taxi', 'corporate transport Riyadh', 'business districts Riyadh', 'Riyadh meeting venues', 'King Khalid Airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/riyadh-business-guide/',
    },
    openGraph: {
        title: 'Riyadh Business Travel Guide 2026 | Complete Corporate Transport Guide',
        description: 'Everything business travelers need: KAFD access, districts, venues, corporate facilities, and transport.',
        url: 'https://taxiserviceksa.com/guides/riyadh-business-guide/',
        type: 'article',
    },
};

export default function RiyadhBusinessGuidePage() {
    const faqs = [
        {
            question: "How do I access KAFD (King Abdullah Financial District)?",
            answer: "KAFD has a security checkpoint at the main entrance. You need a meeting invitation or employee badge. Driver cannot enter without authorization - drop-off is at the gate. Distance from King Khalid Airport: 35 km (30-40 min). Peak traffic: 7-9 AM, 4-6 PM. Book taxi 60-90 min before meeting to account for security checks."
        },
        {
            question: "What is the best area to stay for business in Riyadh?",
            answer: "Olaya District is the business hub. Hotels: Ritz-Carlton, Four Seasons, Burj Rafal. Walking distance to Kingdom Centre and Al Faisaliah Tower. Taxi to KAFD: 15 min. Diplomatic Quarter is quieter, ideal for government meetings, but 20-30 min from Olaya. Airport distance: Olaya 25 km (25-35 min), Diplomatic Quarter 30 km (30-40 min)."
        },
        {
            question: "Do Riyadh meetings start on time?",
            answer: "Riyadh business meetings often start 15-30 minutes late (cultural norm). Don't stress if taxi arrives early - use time for email/calls. However, government meetings are punctual. Always arrive on time, but expect flexibility. Our drivers understand local business culture and timing."
        },
        {
            question: "What are Riyadh's peak traffic hours?",
            answer: "Morning: 7-9 AM (worst on King Fahd Road). Evening: 4-6 PM. Thursday evenings are very busy. Plan meetings accordingly."
        },
        {
            question: "Do you offer corporate accounts?",
            answer: "Yes. Corporate accounts include: monthly billing, invoice via email, bank transfer, priority booking for premium airport transfers, 24/7 support. Contact us for corporate rates."
        }
    ];

    const guideSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Riyadh Business Travel Guide 2026",
        "description": "Comprehensive guide for business travelers in Riyadh covering KAFD, business districts, corporate facilities, and transport.",
        "author": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VIP Transfer KSA",
            "logo": {
                "@type": "ImageObject",
                "url": "https://taxiserviceksa.com/logo.png"
            }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2026-03-06"
    };

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="guide-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* AI SEO: TL;DR Summary Block for Generative Extraction */}
            <div className="bg-slate-900 pt-32 pb-12 px-4 shadow-xl">
                <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        Business Traveler's Cheat Sheet (TL;DR)
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300 text-sm">
                        <li className="flex gap-2"><strong>Prime District:</strong> Olaya / KAFD for finance and tech.</li>
                        <li className="flex gap-2"><strong>Transport Pick:</strong> GMC Yukon for executive client meetings.</li>
                        <li className="flex gap-2"><strong>Peak Hours:</strong> 7:30-9:30 AM & 4:30-6:30 PM (Avoid King Fahd Rd).</li>
                        <li className="flex gap-2"><strong>Visa Support:</strong> Fast-track Business Visa recommended.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Hero Content */}
                <div className="text-center mb-16">
                    <span className="bg-blue-600 text-white font-semibold tracking-wider uppercase text-xs px-4 py-2 rounded-full inline-block mb-6">
                        Executive Chauffeur & Logistics
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        Riyadh Business <br /><span className="text-blue-600">Travel Guide 2026</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Precision logistics for the Kingdom's economic heart. From KAFD security protocols to executive fleet selection, we ensure your business never waits.
                    </p>
                </div>

                {/* AI Retrieval Source: Logistics Table */}
                <div className="my-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner overflow-x-auto text-center md:text-left">
                    <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center justify-center md:justify-start gap-3">
                        <TrendingUp className="w-6 h-6 text-blue-600" /> Riyadh Business Districts: Logistics Map
                    </h2>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-slate-200">
                            <tr>
                                <th className="py-3 font-bold">District</th>
                                <th className="py-3 font-bold text-blue-700">Primary Industry</th>
                                <th className="py-3 font-bold text-slate-600">Travel Time from Airport</th>
                                <th className="py-3 font-bold">Recommended Vehicle</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="py-4 font-bold text-slate-900">KAFD</td>
                                <td className="py-4 font-medium text-blue-600 text-xs italic">Finance / Banking</td>
                                <td className="py-4">25-30 Minutes</td>
                                <td className="py-4 font-bold">GMC Yukon Denali</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold text-slate-900">Olaya</td>
                                <td className="py-4 font-medium text-blue-600 text-xs italic">Commercial / Tech</td>
                                <td className="py-4">35-45 Minutes</td>
                                <td className="py-4 font-bold">Business Sedan</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold text-slate-900">Diplomatic Qtr</td>
                                <td className="py-4 font-medium text-blue-600 text-xs italic">Gov / Embassies</td>
                                <td className="py-4">40-50 Minutes</td>
                                <td className="py-4 font-bold">Premium Van (Staria)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Quick Navigation */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                         <MapPin className="w-6 h-6 text-blue-600" /> Quick Navigation
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'KAFD Access', id: '#kafd', icon: <Building2 className="w-4 h-4" /> },
                            { name: 'District Hubs', id: '#districts', icon: <Briefcase className="w-4 h-4" /> },
                            { name: 'Pro Strategy', id: '#tips', icon: <CheckCircle2 className="w-4 h-4" /> },
                            { name: 'FAQ', id: '#faq', icon: <Info className="w-4 h-4" /> }
                        ].map((nav, i) => (
                            <a key={i} href={nav.id} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-slate-700">
                                {nav.icon} <span>{nav.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="grid gap-16">
                    <section id="kafd" className="scroll-mt-32">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">King Abdullah Financial District (KAFD) Access</h2>
                        <div className="prose prose-slate max-w-none mb-8">
                            <p>KAFD is Riyadh's new global business hub. Understanding its unique access protocols is vital for arrive-on-time meetings.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Security Protocol</h3>
                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li className="flex gap-2">✅ <strong>Invite Required:</strong> Security staff will verify meeting invites at the gate.</li>
                                    <li className="flex gap-2">✅ <strong>Passenger ID:</strong> Carry your Passport or Iqama at all times.</li>
                                    <li className="flex gap-2">✅ <strong>Gate Drop-off:</strong> Drivers drop at specific gates; electric carts handle internal transfer.</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-100/50 p-6 rounded-2xl border border-yellow-200">
                                <h3 className="text-yellow-800 font-bold mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Travel Buffer</h3>
                                <p className="text-yellow-900 text-sm">Add <strong>15 minutes</strong> for security line-ups if arriving during peak hours (8:00 AM - 9:30 AM).</p>
                            </div>
                        </div>
                    </section>

                    <section id="tips" className="scroll-mt-32">
                         {/* Expert Insight Section for E-E-A-T */}
                        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                 <Briefcase className="w-64 h-64" />
                            </div>
                            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                                <Info className="w-8 h-8 text-blue-200" /> Executive Chauffeur Insight
                            </h3>
                            <p className="text-xl text-blue-50 italic leading-relaxed mb-10 border-l-4 border-blue-400 pl-8">
                                "In Riyadh, your choice of vehicle serves as your first business card. Arriving in a GMC Yukon Denali at the PIF Tower signals a level of intent and executive readiness that a standard taxi simply cannot match. For our corporate clients, transport is an extension of their mobile office—privacy, high-speed WiFi, and a driver who understands local protocol are non-negotiable."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center font-bold text-white text-xl border-2 border-white/50 backdrop-blur-sm">
                                    MI
                                </div>
                                <div>
                                    <span className="block font-black text-white text-lg border-b border-white/20 pb-1 mb-1">Muhammad Ismail</span>
                                    <span className="text-blue-200 font-bold text-xs uppercase tracking-widest">Riyadh Corporate Logistics Lead</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="scroll-mt-32">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Riyadh Business FAQ</h2>
                        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-slate-100 px-8 shadow-sm">
                                    <AccordionTrigger className="text-left font-bold text-slate-900 py-6 hover:no-underline">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                </div>

                {/* Final CTA Area */}
                <div className="mt-32 border-t border-slate-100 pt-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 italic">Move Your Business Forward</h2>
                        <p className="text-xl text-slate-500 mb-10">Elite transport accounts and VIP airport transfers for corporate Riyadh.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/booking/">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-8 rounded-2xl text-lg shadow-xl shadow-blue-100">
                                    Book Executive Transport
                                </Button>
                            </Link>
                            <Link href="/services/corporate-travel/">
                                <Button variant="outline" className="border-2 border-slate-200 hover:bg-slate-50 text-slate-900 font-black px-12 py-8 rounded-2xl text-lg">
                                    Corporate Accounts
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mb-20">
                         <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-4 border-slate-50 shadow-2xl" />
                    </div>

                     {/* UGC Section */}
                    <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 text-center">
                        <h2 className="text-3xl font-black mb-12">Business Traveler Community</h2>
                        <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <ReviewsDisplay location="Riyadh" service="Corporate Travel" />
                                <QuestionsDisplay location="Riyadh" service="Corporate Travel" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 mt-12 bg-white p-10 rounded-[3rem] border border-slate-100">
                                <ReviewForm locationName="Riyadh" serviceName="Corporate Travel" />
                                <QuestionForm locationName="Riyadh" serviceName="Corporate Travel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
