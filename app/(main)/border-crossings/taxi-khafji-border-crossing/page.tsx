import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, Globe, ArrowRight, Car, FileText } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Khafji Border Crossing Taxi & Private Transfer | Taxi Service KSA',
    description: 'Pre-book a private car from Khafji Border Crossing to Dammam, Al Khobar, Riyadh and other Saudi destinations. Fixed quotes, professional drivers.',
    keywords: ['Taxi Khafji border crossing', 'Khafji border to Saudi Arabia taxi', 'Taxi from Khafji to Riyadh', 'Khafji border pickup', 'Khafji to Dammam taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/taxi-khafji-border-crossing/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Khafji Border Crossing private taxi transfer' }],
        siteName: 'Taxi Service KSA',
        title: 'Khafji Border Crossing Taxi & Private Transfer | Taxi Service KSA',
        description: 'Pre-book a private car from Khafji Border Crossing to Dammam, Al Khobar, Riyadh and other Saudi destinations.',
        url: 'https://taxiserviceksa.com/border-crossings/taxi-khafji-border-crossing/',
        type: 'website',
    },
};

export default function KhafjiBorderPage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Taxi Khafji Border Crossing",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": [
            { "@type": "Place", "name": "Khafji Border" },
            { "@type": "Country", "name": "Saudi Arabia" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Border Crossing Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Onward Saudi Transfer from Khafji Border",
                        "description": "Pre-booked private transport from Khafji Border Crossing to Saudi destinations."
                    }
                }
            ]
        }
    };

    const faqs = [
        {
            question: "Can I book a taxi from Khafji Border Crossing to Riyadh?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide pre-booked private transfers from Khafji Border Crossing to Riyadh. It's approximately 500+ km depending on your exact drop-off point in Riyadh, so we recommend booking in advance.",
            perspectives: []
        },
        {
            question: "Where will the driver meet me?",
            shortAnswer: "At the permitted meeting point on the Saudi side",
            detailedAnswer: "Border pickup locations can change according to immigration, customs and security procedures. Your driver will confirm the current permitted meeting point before your pickup.",
            perspectives: []
        },
        {
            question: "Can your vehicle cross the Kuwait-Saudi border?",
            shortAnswer: "This service covers Saudi-side pickup",
            detailedAnswer: "This service is for onward transport on the Saudi side after you cross the border. Cross-border vehicle eligibility depends on documentation, insurance and current border requirements — confirm with our team when booking if you need something different.",
            perspectives: []
        },
        {
            question: "What documents do I need?",
            shortAnswer: "Passport and valid entry documentation",
            detailedAnswer: "Bring your passport and the Saudi entry permission/visa required for your nationality. Requirements vary by nationality and travel status, so check current Saudi entry requirements before departure. Your driver handles vehicle-side matters only — passengers remain responsible for their own immigration and customs procedures.",
            perspectives: []
        },
        {
            question: "Can I book a transfer before reaching the border?",
            shortAnswer: "Yes, this is recommended",
            detailedAnswer: "Yes — send us your expected crossing time and destination before you arrive so your driver can plan the pickup. Because the border is outside a normal city-center pickup area, pre-booking is recommended rather than relying on an app at the last minute.",
            perspectives: []
        },
        {
            question: "Can you pick up passengers after Saudi immigration?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, once you've cleared Saudi immigration and customs, your driver will meet you at the confirmed pickup point and take you to your destination.",
            perspectives: []
        },
        {
            question: "How long does Khafji to Riyadh take?",
            shortAnswer: "Several hours, depending on the route",
            detailedAnswer: "The distance is roughly 500+ km depending on your exact destination in Riyadh. For a full breakdown of this journey, including the border crossing itself, see our Kuwait to Riyadh route guide.",
            perspectives: []
        },
        {
            question: "Do you offer transfers to Dammam and Al Khobar?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide onward transfers from Khafji Border to Dammam, Al Khobar and other Eastern Province destinations.",
            perspectives: []
        },
        {
            question: "Can I book a return transfer?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, return transfers can be arranged. Let us know your return date and crossing plans when booking.",
            perspectives: []
        },
        {
            question: "What happens if my border crossing takes longer than expected?",
            shortAnswer: "Tell us as soon as possible",
            detailedAnswer: "Border processing times can change. If you experience a delay, contact us as soon as possible with your updated crossing status and we'll coordinate with the driver and adjust the pickup where operationally possible.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="border-schema-taxi-khafji-border-crossing"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="Khafji Border Crossing Taxi & Private Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Border Pickup Service
                    </span>
                }
                subtitle="Pre-book a private car from Khafji Border Crossing to Dammam, Al Khobar, Riyadh and other Saudi destinations."
                location="Pre-Booked Border Transfers"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Khafji%20Border%20Crossing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking?pickup=Khafji%20Border&dropoff=Riyadh" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full">
                            Book Online
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Border Pickup', value: 'Saudi Side', icon: MapPin },
                        { label: 'Dammam', value: 'Onward Transfer', icon: Car },
                        { label: 'Al Khobar', value: 'Onward Transfer', icon: Car },
                        { label: 'Riyadh', value: '~500+ km', icon: Clock },
                    ].map((f) => (
                        <div key={f.label} className="flex flex-col items-center text-center">
                            <f.icon className="w-6 h-6 text-primary mb-3" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{f.label}</span>
                            <span className="text-sm font-black text-gray-900">{f.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Cross-Border Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Onward Saudi Transfers from Khafji Border</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Need onward transport after crossing the Khafji border? Pre-book a private transfer to your Saudi destination. This service covers pickup on the Saudi side of the crossing — arrange your vehicle in advance so your driver knows where and when to meet you.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We provide long-distance SUV and sedan transfers to Dammam, Al Khobar, Riyadh and other Saudi cities. Cross-border bookings are subject to applicable vehicle, insurance and border requirements.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Booking Support</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Licensed Drivers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <FileText className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Border Process Guidance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">SUV & Sedan Fleet</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Khafji Border Pickup Works</h3>
                            <ul className="space-y-6">
                                {[
                                    { step: '1', title: 'Book Before Reaching the Border', desc: 'Send your expected crossing time and destination.' },
                                    { step: '2', title: 'Complete Immigration & Customs', desc: 'Passengers complete the required border procedures.' },
                                    { step: '3', title: 'Driver Coordination', desc: 'Your driver confirms the permitted meeting location.' },
                                    { step: '4', title: 'Continue to Your Destination', desc: 'Travel directly to Dammam, Al Khobar, Riyadh or elsewhere.' },
                                ].map((s) => (
                                    <li key={s.step} className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">{s.step}</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{s.title}</h4>
                                            <p className="text-sm text-gray-500">{s.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8 max-w-3xl">
                        Border pickup locations can change according to immigration, customs and security procedures. Your driver will confirm the permitted meeting point before pickup.
                    </p>
                </div>
            </section>

            {/* Where can we take you */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Where Can We Take You?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/locations/dammam/" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                            <h3 className="font-bold text-gray-900 mb-2">Khafji to Dammam</h3>
                            <p className="text-gray-600 text-sm">Onward transfer for passengers continuing to Dammam and the Eastern Province.</p>
                        </Link>
                        <Link href="/locations/al-khobar/" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                            <h3 className="font-bold text-gray-900 mb-2">Khafji to Al Khobar</h3>
                            <p className="text-gray-600 text-sm">Door-to-door transfer to Al Khobar and the Corniche area.</p>
                        </Link>
                        <Link href="/routes/kuwait-riyadh/" className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                            <h3 className="font-bold text-gray-900 mb-2">Khafji to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Long-distance private car, approximately 500+ km. See our full Kuwait-Riyadh route guide for journey details.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Documents + delays */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">Have These Ready</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {['Passport', 'Saudi visa/entry permission where applicable', 'Expected border crossing time', 'Final destination', 'Number of passengers and luggage'].map((item) => (
                                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {item}</li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-4">Requirements vary by nationality and travel status. Check current Saudi entry requirements before departure.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">What If My Crossing Is Delayed?</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Border processing times can change. If you experience a delay, contact us as soon as possible with your updated crossing status. We'll coordinate with the driver and adjust the pickup where operationally possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Vehicle Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Toyota Camry', desc: '1-3 passengers', link: '/fleet/toyota-camry/' },
                            { name: 'Toyota Veloz / Staria', desc: 'Families and small groups', link: '/fleet/toyota-veloz/' },
                            { name: 'GMC Yukon', desc: 'Premium families/groups', link: '/fleet/gmc-yukon/' },
                            { name: 'Mercedes Sprinter', desc: 'Large groups', link: '/fleet/mercedes-sprinter/' },
                        ].map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View full fleet <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Khafji Border Transfer Prices</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Prices depend on your destination, vehicle type, passenger count and pickup requirements. Contact us with your crossing time and destination for a fixed quote before you travel.
                    </p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Khafji%20Border%20Crossing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold">
                            Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* Why pre-book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Pre-Book Your Khafji Border Transfer?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Khafji is a border area rather than a normal urban pickup location. Because it's outside a typical city-center pickup zone, pre-booking is recommended rather than relying on an app at the last minute. If you already know your onward destination, booking your vehicle before reaching the border can reduce uncertainty after immigration and help your driver coordinate the pickup.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Routes</h3>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/routes/kuwait-riyadh/" className="text-primary font-semibold hover:underline">Kuwait to Riyadh</Link>
                        <Link href="/routes/kuwait-dammam/" className="text-primary font-semibold hover:underline">Kuwait to Dammam</Link>
                        <Link href="/locations/dammam/" className="text-primary font-semibold hover:underline">Dammam Taxi</Link>
                        <Link href="/locations/al-khobar/" className="text-primary font-semibold hover:underline">Al Khobar Taxi</Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Book Your Khafji Border Transfer</h2>
                    <p className="text-gray-400 text-lg mb-10">Send your expected crossing time and destination — we'll confirm your pickup in advance.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Khafji%20Border%20Crossing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
                        >
                            <WhatsAppIcon className="w-6 h-6 fill-current" />
                            Book on WhatsApp
                        </a>
                        <Link
                            href="/booking?pickup=Khafji%20Border&dropoff=Riyadh"
                            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all"
                        >
                            Online Booking
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
