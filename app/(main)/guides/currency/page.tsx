
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Coins, CreditCard, DollarSign, Building, AlertTriangle, ArrowRight, Car, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Saudi Currency Guide for Pilgrims | SAR Exchange Rates & Tips',
    description: 'Traveler guide to Saudi Riyal (SAR). Where to exchange money in Makkah and Madinah, ATM usage, and accepting credit cards. Avoid high exchange fees.',
    keywords: ['Saudi currency guide', 'Exchange money Makkah', 'SAR exchange rate', 'ATM Madinah', 'Currency exchange Saudi Airport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/currency/',
    },
};

export default function CurrencyGuidePage() {

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Saudi Arabia Currency Guide",
        "description": "Essential financial tips for Umrah and Hajj pilgrims.",
        "image": "https://taxiserviceksa.com/hero-slide-1.webp"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="currency-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/hero-slide-1.webp', '/hero-slide-3.webp']}
                h1Text="Saudi Riyal (SAR) Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Financial Tips
                    </span>
                }
                subtitle="Money Matters for Pilgrims"
                location="KSA"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        The official currency of Saudi Arabia is the Saudi Riyal (SAR). You will likely first encounter it upon landing at <Link href="/locations/jeddah/" className="text-white underline hover:text-primary transition-colors">Jeddah Airport (Arrivals)</Link>.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Coins className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Cash is Still King</h3>
                            <p className="text-gray-600 text-sm">
                                While cards are widely accepted, small shops, markets, and street taxi drivers often prefer cash. To avoid carrying large amounts of cash for transport, you should <Link href="/booking/" className="text-emerald-700 font-bold underline">book a taxi online with a fixed price</Link> before you arrive.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <CreditCard className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Card Payments (Mada)</h3>
                            <p className="text-gray-600 text-sm">
                                Visa, Mastercard, and Apple Pay are accepted almost everywhere, including supermarkets and pharmacies. Look for the 'Mada' or WiFi symbol on payment terminals.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Building className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Exchange Locations</h3>
                            <p className="text-gray-600 text-sm">
                                Avoid exchanging large amounts at airports. Use banks in the city centers of Makkah and Madinah for better rates. Most guests using our <Link href="/services/airport-transfers/" className="text-purple-700 hover:underline">premium airport transfers</Link> find it easier to withdraw cash from a city ATM.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Can I use US Dollars in Saudi Arabia?",
                                shortAnswer: "Rarely.",
                                detailedAnswer: "You cannot pay directly with USD in shops. You must exchange it for SAR. Some hotels might accept USD but will give you a poor exchange rate.",
                                perspectives: [
                                    {
                                        role: "Tip",
                                        icon: "DollarSign",
                                        insight: "ATMs are the best way to get cash. You get the official bank rate minus a small foreign transaction fee."
                                    }
                                ]
                            },
                            {
                                question: "How much cash should I carry?",
                                shortAnswer: "200-500 SAR daily.",
                                detailedAnswer: "For food and small shopping, 200 SAR/day per person is safe. Large purchases like gold or electronics can be paid by card.",
                                perspectives: [
                                    {
                                        role: "Safety",
                                        icon: "AlertTriangle",
                                        insight: "Pickpocketing is rare but possible in crowded areas. Don't carry all your cash at once."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
