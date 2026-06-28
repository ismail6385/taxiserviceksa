import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How to Book & Visit Rawdah in Madinah via Nusuk App 2026',
    description: 'Step-by-step guide to booking and visiting the Rawdah al-Sharif in Masjid an-Nabawi. Learn how to use the Nusuk app, timings, rules, and what to expect.',
    keywords: ['how to book Rawdah Madinah', 'Nusuk app Rawdah booking', 'visit Rawdah al-Sharif guide', 'Rawdah Madinah timings 2026', 'Rawdah reservation steps'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/how-to-book-visit-rawdah-madinah/' },
    openGraph: { title: 'How to Book & Visit Rawdah in Madinah via Nusuk 2026', description: 'Step-by-step Rawdah booking guide using the Nusuk app with tips for a successful visit.', type: 'article', url: 'https://taxiserviceksa.com/blog/how-to-book-visit-rawdah-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the Rawdah in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'The Rawdah al-Sharif (Garden of Paradise) is a small area inside Masjid an-Nabawi between the Prophet\'s ﷺ pulpit (Minbar) and his burial chamber. The Prophet ﷺ said: "Between my house and my pulpit is a garden from the gardens of Paradise." (Bukhari & Muslim). It is one of the most spiritually significant places in the world.' } },
        { '@type': 'Question', name: 'How do I book a Rawdah visit through Nusuk?', acceptedAnswer: { '@type': 'Answer', text: 'Download the Nusuk app (iOS/Android), create an account with your Iqama or passport number, go to Madinah services, select Rawdah visit, choose your preferred date and time slot, and confirm the booking. Slots open 2-3 days in advance and fill up quickly, especially during peak seasons.' } },
        { '@type': 'Question', name: 'Are women allowed in the Rawdah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Women have dedicated timings to visit the Rawdah, typically in the early mornings (after Fajr) and certain afternoon slots. The schedule varies and is updated in the Nusuk app. Women must be fully covered per Madinah dress code requirements.' } },
    ],
};

export default function RawdahBookingGuidePage() {
    const steps = [
        { step: '01', title: 'Download Nusuk App', desc: 'Available on iOS App Store and Google Play. Search "Nusuk" — official Saudi Ministry of Hajj app.' },
        { step: '02', title: 'Create Account', desc: 'Register using your passport number or Iqama. Verify via OTP on your Saudi or international mobile number.' },
        { step: '03', title: 'Select Madinah Services', desc: 'On the home screen, tap "Madinah" then "Prophet\'s Mosque" then "Rawdah Reservation".' },
        { step: '04', title: 'Choose Date & Time Slot', desc: 'Slots typically open 2-3 days ahead. Early morning slots (Fajr to Dhuhr) are most in-demand. Book quickly.' },
        { step: '05', title: 'Confirm & Save QR Code', desc: 'After booking, a QR code is generated. Screenshot it. You\'ll show this to security at the Rawdah entrance gate.' },
        { step: '06', title: 'Arrive 15 Mins Early', desc: 'Go to the designated entry gate at least 15 minutes before your slot. Follow security directions respectfully.' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Rawdah Booking Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📱 Step-by-Step Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">How to Book & Visit<br /><span className="text-emerald-300">Rawdah al-Sharif via Nusuk App 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The Rawdah is one of the most sacred spots on Earth. Here is the complete, updated guide to booking your visit through the official Nusuk app.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">What is the Rawdah?</h2></div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                        <p className="text-emerald-900 text-lg italic font-medium leading-relaxed">"Between my house and my pulpit is a garden from the gardens of Paradise, and my pulpit is on my Hawd (Basin)."</p>
                        <p className="text-emerald-700 text-sm mt-2 font-bold">— Prophet Muhammad ﷺ (Sahih al-Bukhari, 1196)</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">The Rawdah al-Sharif is the area inside Masjid an-Nabawi between the Prophet's ﷺ pulpit (Minbar) and his burial chamber. This small space, historically identified by a green carpet, is one of the most spiritually significant places on Earth. Prayers offered here carry immense reward.</p>
                </section>
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Smartphone className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">6-Step Nusuk App Booking Guide</h2></div>
                    <div className="space-y-4">
                        {steps.map((s) => (
                            <div key={s.step} className="flex gap-4 border border-gray-200 rounded-2xl p-5 hover:border-emerald-300 transition-colors">
                                <span className="text-3xl font-black text-emerald-200 flex-shrink-0">{s.step}</span>
                                <div>
                                    <h3 className="font-black text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Important Rawdah Rules</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>No cameras or photography inside the Rawdah area.</li>
                        <li>Recite Durood (Salawat) when entering and near the burial chamber.</li>
                        <li>Do not push or rush — security may remove you from the queue.</li>
                        <li>Women visiting the Rawdah must wear full hijab; niqab is recommended.</li>
                        <li>If your slot is missed, you cannot re-enter without a new booking.</li>
                    </ul>
                </section>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <p className="text-amber-800 font-bold text-sm">⚠️ Pro Tip: During Ramadan and Hajj season, Rawdah slots sell out within minutes of opening. Set an alarm for slot release time (usually 12 AM KSA time) and book the moment they open.</p>
                </div>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Travel to Madinah Comfortably</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Start your Rawdah journey right — book a private transfer from Makkah or Madinah Airport.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20to%20Madinah%20for%20Rawdah%20visit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/masjid-an-nabawi-complete-guide-history/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Nabawi Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
