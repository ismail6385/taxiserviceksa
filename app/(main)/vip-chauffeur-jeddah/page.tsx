import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Star, Car } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'VIP Chauffeur Jeddah | Private Driver Service | Taxi Service KSA',
    description: 'VIP chauffeur and private driver service in Jeddah. Hourly hire, full-day tours, airport transfers, business travel. Luxury fleet. Book Jeddah chauffeur service now.',
    keywords: [
        'VIP chauffeur Jeddah',
        'private driver Jeddah',
        'chauffeur service Jeddah',
        'luxury car hire Jeddah',
        'Jeddah private driver',
        'VIP car service Jeddah',
        'executive chauffeur Jeddah',
        'chauffeur hire Jeddah',
        'Jeddah city tour driver',
        'hourly car hire Jeddah',
        'business chauffeur Jeddah',
        'personal driver Jeddah',
        'car with driver Jeddah',
        'Jeddah VIP transfer',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/vip-chauffeur-jeddah/',
    },
    openGraph: {
        title: 'VIP Chauffeur Jeddah | Private Driver Service | Taxi Service KSA',
        description: 'Professional VIP chauffeur service in Jeddah. Hourly, full-day, airport, business. Luxury fleet.',
        url: 'https://taxiserviceksa.com/vip-chauffeur-jeddah/',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How much does a private driver cost in Jeddah?',
        answer: 'Private driver rates in Jeddah: half-day (4 hours) starts from SAR 250, full-day (8 hours) from SAR 400, and hourly hire from SAR 70–100/hour depending on the vehicle. Airport transfers have fixed one-way rates starting SAR 80. Corporate monthly packages are available. WhatsApp us for a custom quote for your specific needs.',
    },
    {
        question: 'Can I hire a car with a driver for a whole day in Jeddah?',
        answer: 'Yes. Full-day chauffeur hire in Jeddah covers 8–10 hours with unlimited stops in Jeddah city. The driver is exclusively yours for the day — shopping, business meetings, Corniche tours, hospital visits, or Al Balad sightseeing. Vehicle options include Toyota Camry, GMC Yukon XL, or Cadillac Escalade.',
    },
    {
        question: 'Is there a VIP driver service near King Abdulaziz Airport Jeddah?',
        answer: 'Yes. Taxi Service KSA provides VIP meet-and-greet service at King Abdulaziz International Airport (JED). Your driver waits at arrivals with a name sign, assists with luggage, and escorts you to a luxury vehicle. Service available 24/7 including early morning Umrah flights.',
    },
    {
        question: 'Can a private driver take me from Jeddah to Makkah?',
        answer: 'Yes. Our Muslim-certified drivers provide transfers from Jeddah to Makkah (85 km, ~1 hour). Non-Muslim passengers are taken to the Makkah checkpoint. The route goes via Highway 40. Bookings available for single trips or Umrah-season recurring transfers.',
    },
    {
        question: 'What is the best way to get around Jeddah as a tourist?',
        answer: 'For tourists in Jeddah, a private driver for the day is the most comfortable option. You can visit Al Balad (UNESCO Heritage), Corniche, Floating Mosque, Red Sea Mall, and the National Museum without worrying about parking or navigation. Our English-speaking drivers also provide local knowledge. Uber and Careem also operate in Jeddah but surge heavily during peak times.',
    },
    {
        question: 'Is Jeddah safe for tourists?',
        answer: 'Yes. Jeddah is one of Saudi Arabia\'s most international cities and very safe for tourists. The Corniche, Al Balad, and hotel districts are well-policed and tourist-friendly. English is widely spoken in hotels and restaurants. Women can travel independently. Taxis and ride-hailing apps are reliable. Alcohol is prohibited but all other major tourist experiences are available.',
    },
];

const services = [
    { icon: '✈️', title: 'Airport Transfer', desc: 'Jeddah JED airport pickup & drop-off. Meet and greet, name sign, free wait.', price: 'From SAR 80' },
    { icon: '🕐', title: 'Hourly Hire', desc: 'Flexible hourly hire — medical, shopping, meetings. Driver stays with you.', price: 'From SAR 70/hr' },
    { icon: '🌅', title: 'Full-Day Hire', desc: '8 hours, unlimited stops. Perfect for tourism or business visits.', price: 'From SAR 400/day' },
    { icon: '🕌', title: 'Jeddah to Makkah', desc: 'Direct transfer to Al Haram area hotels. Muslim-certified drivers.', price: 'From SAR 180' },
    { icon: '🏢', title: 'Corporate Travel', desc: 'Monthly packages for businesses. Invoice provided, fixed rates.', price: 'Custom quote' },
    { icon: '🚗', title: 'Intercity Transfer', desc: 'Jeddah to Riyadh, Madinah, Taif. Door-to-door.', price: 'From SAR 250' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VIP Chauffeur Service Jeddah',
    serviceType: 'Private Chauffeur & Luxury Car Hire',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966552202642' },
    areaServed: { '@type': 'City', name: 'Jeddah' },
    description: 'VIP chauffeur and private driver service in Jeddah. Hourly hire, full-day tours, airport transfers, business travel. Luxury fleet.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '80', availability: 'https://schema.org/InStock' },
};

export default function VipChauffeurJeddahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>VIP Chauffeur Jeddah</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-500/30">⭐ VIP Service</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">24/7 Jeddah</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        VIP Chauffeur<br />
                        <span className="text-emerald-300">Jeddah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        Professional private driver service in Jeddah — airport transfers, full-day hire, corporate travel, and Makkah connections. Luxury fleet, English-speaking drivers, fixed rates.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20VIP%20chauffeur%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="bg-white border-b py-5 px-4">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-600">
                    {['⭐ 4.9/5 Rating', '🔒 Fixed Rates', '🗣️ English Speaking', '📱 WhatsApp Updates', '🚗 Luxury Fleet', '⏰ 24/7 Service'].map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Services Grid */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Jeddah Chauffeur Services</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all">
                                <span className="text-3xl block mb-3">{s.icon}</span>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                                <p className="font-black text-emerald-700">{s.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why VIP */}
                <section className="bg-black text-white rounded-3xl p-10">
                    <h2 className="text-3xl font-black mb-8 text-center">The VIP Difference</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Assigned Driver', desc: 'One driver, assigned to you. Not a rotating pool. You know who is picking you up before they arrive.' },
                            { title: 'Named Pickup', desc: 'Your driver holds a name sign at the airport. No hunting around arrivals for an unmarked car.' },
                            { title: 'Premium Vehicles', desc: 'Choose from Genesis G80, GMC Yukon XL, Cadillac Escalade, or Hyundai Staria VIP.' },
                            { title: 'Business Invoice', desc: 'Tax invoices available for corporate travel. We can bill your company directly.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-emerald-300 mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related */}
                <section className="bg-gray-100 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Services in Jeddah</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { href: '/jeddah-airport-transfer/', label: 'Jeddah Airport Transfer' },
                            { href: '/jeddah-to-fairmont-makkah/', label: 'Jeddah to Fairmont Makkah' },
                            { href: '/jeddah-to-pullman-makkah/', label: 'Jeddah to Pullman Makkah' },
                            { href: '/riyadh-to-jeddah-private-car/', label: 'Riyadh to Jeddah Car' },
                            { href: '/makkah-taxi/', label: 'Makkah Taxi Service' },
                            { href: '/fleet/', label: 'View Our Fleet' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-sm border border-gray-100">
                                <ArrowRight className="w-4 h-4" />{link.label}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-black to-emerald-900 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-black mb-3">Book Your Jeddah Chauffeur</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        Tell us the date, time, and service type. We confirm within minutes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966552202642?text=Hi,%20I%20need%20a%20VIP%20chauffeur%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg">
                            <Phone className="w-5 h-5" /> WhatsApp Now
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Book Online <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
