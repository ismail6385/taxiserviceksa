import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Clock, Users, Car, ArrowRight, CheckCircle2, AlertCircle, Info, Briefcase } from 'lucide-react';
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


export const metadata: Metadata = {
    title: 'Riyadh Business Travel Guide 2024 | KAFD, Corporate Transport - VIP Transfer KSA',
    description: 'Complete business travel guide for Riyadh: KAFD access, business districts, meeting venues, corporate facilities, traffic strategies, and professional transport services.',
    keywords: ['Riyadh business travel', 'KAFD taxi', 'corporate transport Riyadh', 'business districts Riyadh', 'Riyadh meeting venues', 'King Khalid Airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/riyadh-business-guide/',
    },
    openGraph: {
        title: 'Riyadh Business Travel Guide 2024 | Complete Corporate Transport Guide',
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
            answer: "Morning: 7-9 AM (worst on King Fahd Road). Evening: 4-6 PM. Thursday evenings are very busy (weekend starts Friday). Best times: Early morning 6-7 AM (minimal traffic), Midday 12-2 PM (moderate), Friday mornings (empty roads during Jummah prayer 12-2 PM). Plan meetings around these times."
        },
        {
            question: "Do you offer corporate accounts for Riyadh businesses?",
            answer: "Yes. Corporate accounts include: monthly billing, invoice via email, payment by bank transfer, priority booking during peak hours, dedicated account manager, 24/7 booking support. Minimum 10 trips/month. Contact info@taxiserviceksa.com for corporate rates and setup."
        },
        {
            question: "Should I choose GMC Yukon or Toyota Camry for business meetings?",
            answer: "GMC Yukon for client meetings (premium impression, spacious, executive feel). Toyota Camry for solo travel (efficient, professional, cost-effective). Both vehicles: clean, well-maintained, WiFi hotspot on request, professional drivers in business attire. Vehicle choice depends on meeting importance and number of passengers."
        },
    ];

    const guideSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Riyadh Business Travel Guide 2024",
        "description": "Comprehensive guide for business travelers in Riyadh covering KAFD, business districts, corporate facilities, and transport.",


        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <Script
                id="guide-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        Complete Business Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Riyadh Business Travel Guide 2024
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything business travelers need for Riyadh: KAFD access, business districts, meeting venues, corporate facilities, traffic strategies, and professional transport.
                    </p>
                </div>

                {/* Quick Navigation */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="#kafd" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Building2 className="w-4 h-4" />
                            <span>KAFD Access</span>
                        </a>
                        <a href="#districts" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <MapPin className="w-4 h-4" />
                            <span>Business Districts</span>
                        </a>
                        <a href="#venues" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Users className="w-4 h-4" />
                            <span>Meeting Venues</span>
                        </a>
                        <a href="#hotels" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Car className="w-4 h-4" />
                            <span>Hotels</span>
                        </a>
                        <a href="#traffic" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Clock className="w-4 h-4" />
                            <span>Traffic</span>
                        </a>
                        <a href="#corporate" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Briefcase className="w-4 h-4" />
                            <span>Corporate Services</span>
                        </a>
                        <a href="#tips" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Pro Tips</span>
                        </a>
                        <a href="#faq" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Info className="w-4 h-4" />
                            <span>FAQs</span>
                        </a>
                    </div>
                </div>

                {/* KAFD Access Guide */}
                <section id="kafd" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">KAFD (King Abdullah Financial District) Access</h2>
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Information</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Distance from Airport:</strong> 35 km (30-40 min drive)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Security:</strong> Checkpoint at main entrance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Access Required:</strong> Meeting invitation or employee badge</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Drop-off:</strong> At gate (driver cannot enter)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>Peak Hours:</strong> 7-9 AM, 4-6 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Major Companies in KAFD</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• Saudi National Bank (SNB)</li>
                                    <li>• Al Rajhi Bank</li>
                                    <li>• Riyad Bank</li>
                                    <li>• Saudi Investment Bank</li>
                                    <li>• HSBC Saudi Arabia</li>
                                    <li>• Citibank Saudi Arabia</li>
                                    <li>• PwC, Deloitte, KPMG offices</li>
                                    <li>• Various financial institutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-bold text-yellow-900 mb-2">KAFD Access Tips</p>
                                <p className="text-yellow-800 text-sm mb-2">1. Have meeting invitation ready (email or physical copy)</p>
                                <p className="text-yellow-800 text-sm mb-2">2. Book taxi 60-90 min before meeting (security + traffic)</p>
                                <p className="text-yellow-800 text-sm mb-2">3. Inform driver you're going to KAFD (they know the procedure)</p>
                                <p className="text-yellow-800 text-sm">4. Carry passport/Iqama for security checkpoint</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Districts */}
                <section id="districts" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Districts in Riyadh</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Olaya District</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance from Airport:</strong> 25 km (25-35 min)</li>
                                <li><strong>Landmarks:</strong> Kingdom Centre, Al Faisaliah Tower</li>
                                <li><strong>Hotels:</strong> Ritz-Carlton, Four Seasons, Burj Rafal</li>
                                <li><strong>Restaurants:</strong> Numerous high-end options</li>
                                <li><strong>Best for:</strong> Finance, consulting, corporate HQs</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Timing:</strong> To KAFD: 15 min. To Airport: 25-35 min. Peak traffic adds 15-20 min.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Diplomatic Quarter (DQ)</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance from Airport:</strong> 30 km (30-40 min)</li>
                                <li><strong>Features:</strong> Embassies, government offices</li>
                                <li><strong>Hotels:</strong> Limited (mostly in Olaya)</li>
                                <li><strong>Atmosphere:</strong> Quieter, more residential</li>
                                <li><strong>Best for:</strong> Government meetings, diplomatic work</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Timing:</strong> To Olaya: 20-30 min. To KAFD: 25-35 min. Limited restaurants.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">King Fahd Road Corridor</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Length:</strong> 60+ km main business artery</li>
                                <li><strong>Features:</strong> Shopping malls, offices, hotels</li>
                                <li><strong>Traffic:</strong> Worst during peak hours</li>
                                <li><strong>Alternatives:</strong> Northern Ring Road (faster)</li>
                                <li><strong>Best for:</strong> Retail, hospitality businesses</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Avoid:</strong> 7-9 AM, 4-6 PM. Use alternative routes during peak times.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Al Malqa District</h3>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance from Airport:</strong> 20 km (20-30 min)</li>
                                <li><strong>Features:</strong> Tech companies, startups</li>
                                <li><strong>Atmosphere:</strong> Modern, developing area</li>
                                <li><strong>Hotels:</strong> Limited (use Olaya)</li>
                                <li><strong>Best for:</strong> Tech meetings, innovation hubs</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Timing:</strong> To Olaya: 15-20 min. To KAFD: 20-25 min.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pro Tips */}
                <section id="tips" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips for Business Travelers</h2>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-white mb-2">🏢 KAFD Security:</p>
                                <p className="text-gray-300 text-sm">Always have meeting invitation ready. Security checks can take 10-15 min. Driver drops at gate. Walk to building from there.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">⏰ Meeting Culture:</p>
                                <p className="text-gray-300 text-sm">Meetings often start 15-30 min late (cultural norm). Arrive on time, but don't stress. Use waiting time productively.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">📱 WiFi & SIM:</p>
                                <p className="text-gray-300 text-sm">Airport WiFi is slow. Buy local SIM (Mobily/STC) at airport. Data plans: SAR 100-200/month. Essential for maps/email.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🚗 Vehicle Choice:</p>
                                <p className="text-gray-300 text-sm">GMC Yukon for client meetings (premium). Toyota Camry for solo (efficient). Both have WiFi on request.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🌡️ Climate:</p>
                                <p className="text-gray-300 text-sm">Summer: 40-48°C. Wear light suit. Our vehicles: 20-22°C AC. We provide water bottles.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🕌 Prayer Times:</p>
                                <p className="text-gray-300 text-sm">Shops/offices close 15-20 min per prayer (5x daily). Plan meetings around prayer. Friday 12-2 PM: everything closed (Jummah).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-2 border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                {/* User-Generated Content Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Business Travel Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow business travelers by sharing your experience or asking questions about corporate transport in Riyadh.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Riyadh" service="Corporate Travel" />
                        <QuestionsDisplay location="Riyadh" service="Corporate Travel" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Riyadh" serviceName="Corporate Travel" />
                        <QuestionForm locationName="Riyadh" serviceName="Corporate Travel" />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need Corporate Transport in Riyadh?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional taxi service for business travelers. Airport transfers, KAFD access, corporate accounts, monthly billing, and priority booking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto">
                            <Link href="/booking/">
                                Book Corporate Transport
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto">
                            <Link href="/services/corporate-travel">
                                View Corporate Services
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
