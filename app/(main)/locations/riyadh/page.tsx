import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Plane, ArrowRight, Building, Navigation, Briefcase, Building2, CalendarDays } from 'lucide-react';
import Hero from '@/components/Hero';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdLocation from '@/components/JsonLdLocation';

export const metadata: Metadata = {
    title: 'Riyadh Taxi, Private Car & Chauffeur Service | Taxi Service KSA',
    description: 'Book a private taxi or chauffeur in Riyadh. Airport transfers, city transportation, corporate travel and intercity journeys to Dammam, Makkah and Jeddah. Pre-booked, fixed quotes.',
    keywords: ['Riyadh taxi', 'Riyadh private car', 'Riyadh chauffeur service', 'RUH airport transfer', 'Riyadh corporate transport', 'Riyadh to Makkah taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/riyadh/',
            'ar': 'https://taxiserviceksa.com/ar/locations/riyadh/',
            'ur': 'https://taxiserviceksa.com/ur/locations/riyadh/',
            'x-default': 'https://taxiserviceksa.com/locations/riyadh/',
        },
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Riyadh private taxi and chauffeur service' }],
        siteName: 'Taxi Service KSA',
        title: 'Riyadh Taxi, Private Car & Chauffeur Service | Taxi Service KSA',
        description: 'Private taxi and chauffeur service in Riyadh — airport transfers, city and corporate transport, intercity journeys.',
        url: 'https://taxiserviceksa.com/locations/riyadh/',
        type: 'website',
    },
};

export default function RiyadhPage() {
    const jsonLdServices = [
        { name: 'Riyadh Airport Transfers', description: 'Private pickup and drop-off at King Khalid International Airport (RUH).' },
        { name: 'Riyadh Chauffeur Service', description: 'Professional driver for business meetings, appointments and hourly bookings.' },
        { name: 'Riyadh City Transfers', description: 'Pre-booked transportation between hotels, offices and attractions.' },
        { name: 'Riyadh Intercity Transfers', description: 'Private journeys from Riyadh to Dammam, Makkah, Jeddah and other Saudi cities.' },
    ];

    const riyadhImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const distanceData = [
        { destination: 'King Khalid Airport (RUH)', distance: '~35 km', time: '~35-45 mins', route: 'King Salman Rd' },
        { destination: 'KAFD (Financial District)', distance: '~15 km', time: '~20 mins', route: 'King Fahd Rd' },
        { destination: 'Olaya / Kingdom Centre', distance: '~5 km', time: '~10-15 mins', route: 'Olaya St' },
        { destination: 'Diplomatic Quarter', distance: '~12 km', time: '~20 mins', route: 'Makkah Rd' },
        { destination: 'Dammam', distance: '~400 km', time: '~4 hours', route: 'Route 40' },
        { destination: 'Makkah', distance: '~950 km', time: '~9-10 hours', route: 'Route 40 / Route 15' },
    ];

    const serviceMatrix = [
        { name: 'Airport Transfers', desc: 'Private pickup and drop-off at King Khalid International Airport (RUH).', icon: Plane, href: '/services/airport-transfers/' },
        { name: 'Chauffeur Service', desc: 'Professional driver for business meetings, appointments, shopping and hourly bookings.', icon: Briefcase, href: '/services/vip-chauffeur/' },
        { name: 'City Transfers', desc: 'Pre-booked transportation between hotels, offices, attractions and residential areas.', icon: Car, href: '/booking/' },
        { name: 'Intercity Transfers', desc: 'Private journeys from Riyadh to Dammam, Jeddah, Makkah, Madinah and other Saudi cities.', icon: Navigation, href: '/services/intercity/' },
        { name: 'Corporate Transportation', desc: 'Regular transportation for companies, executives and visiting employees.', icon: Building2, href: '/services/corporate-travel/' },
        { name: 'Event Transportation', desc: 'Pre-booked transport for conferences, exhibitions and major Riyadh events.', icon: CalendarDays, href: '/events/riyadh-event-transportation/' },
    ];

    const areas: RelatedLink[] = [
        { name: 'KAFD', url: '/locations/riyadh/kafd/', description: "Riyadh's financial district — private transfers to meetings and offices." },
        { name: 'Olaya', url: '/locations/riyadh/olaya/', description: 'Central Riyadh, including Kingdom Centre — hotels, restaurants and shopping.' },
        { name: 'Diplomatic Quarter', url: '/locations/riyadh/diplomatic-quarter/', description: 'Embassies and international residences.' },
        { name: 'Boulevard World', url: '/locations/riyadh/boulevard-world/', description: 'Entertainment and event venue transfers.' },
    ];

    const routes: RelatedLink[] = [
        { name: 'Riyadh to Dammam', url: '/routes/riyadh-dammam/', description: 'Business and Eastern Province travel.' },
        { name: 'Riyadh to Makkah', url: '/routes/riyadh-makkah/', description: 'Private pilgrimage transfer.' },
        { name: 'Riyadh to Jeddah', url: '/routes/riyadh-jeddah/', description: 'Long-distance private transfer.' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', desc: '1-4 passengers', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon', desc: 'Family / group travel', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria', desc: 'Groups, up to 7 passengers', link: '/fleet/hyundai-staria/' },
        { name: 'Mercedes S-Class', desc: 'Executive travel', link: '/fleet/mercedes-s-class/' },
    ];

    const faqs = [
        {
            question: "How much is a transfer from Riyadh Airport to the city center?",
            shortAnswer: "From SAR 150",
            detailedAnswer: "Our starting fare for RUH airport transfers to selected city-center destinations is SAR 150. The final price depends on the exact pickup/drop-off location and vehicle.",
            perspectives: []
        },
        {
            question: "What happens if my flight is delayed?",
            shortAnswer: "Send your flight number when booking",
            detailedAnswer: "Send us your flight number when booking so the pickup can be coordinated around the scheduled arrival. Any waiting-time conditions are confirmed with your booking.",
            perspectives: []
        },
        {
            question: "Do you provide corporate chauffeur service?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, businesses can book private vehicles for airport pickups, meetings, employee transportation and longer-term arrangements. Contact us for corporate billing options.",
            perspectives: []
        },
        {
            question: "How much is a transfer from Riyadh to Makkah?",
            shortAnswer: "From SAR 1,200",
            detailedAnswer: "Current fares start from SAR 1,200 for selected vehicles. The final fare depends on vehicle type, passenger count and booking requirements.",
            perspectives: []
        },
        {
            question: "Can I book a transfer from Riyadh to Dammam?",
            shortAnswer: "Yes, from SAR 800",
            detailedAnswer: "Yes, intercity transfers to Dammam start from SAR 800. The journey is approximately 400 km and takes around 4 hours.",
            perspectives: []
        },
        {
            question: "Are Riyadh transfers available 24/7?",
            shortAnswer: "Yes, subject to availability",
            detailedAnswer: "Pre-booked transfers can be arranged for early-morning, daytime and late-night travel, subject to vehicle availability.",
            perspectives: []
        },
        {
            question: "Do you accept card payments?",
            shortAnswer: "Yes, online payment options are available",
            detailedAnswer: "Yes, online payment options are available for Riyadh bookings, alongside other payment methods. Confirm your preferred option when booking.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Riyadh"
                description="Private taxi and chauffeur service in Riyadh. King Khalid International Airport (RUH) transfers, corporate transport, and intercity travel."
                services={jsonLdServices}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={riyadhImages}
                h1Text="Riyadh Taxi, Private Car & Chauffeur Service"
                bookingFormTitle="WhatsApp Booking for Riyadh Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh
                    </span>
                }
                subtitle="Airport transfers • City transportation • Chauffeur service • Intercity travel"
                location="Riyadh • RUH Airport • Intercity"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Your Riyadh Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations/" className="text-gray-500 hover:text-gray-900 transition-colors">Locations</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Riyadh</span>
                    </nav>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Need a private taxi or chauffeur in Riyadh? Taxi Service KSA provides pre-booked private transportation for airport pickups, business travel, hotel transfers and long-distance journeys from Riyadh. Choose a private sedan, SUV or van and arrange your pickup time in advance.
                    </p>
                </div>
            </section>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'RUH Airport', value: 'Private Pickup', icon: Plane },
                        { label: 'Vehicles', value: 'Sedan, SUV, Van', icon: Car },
                        { label: 'Booking', value: '24/7 Pre-Booking', icon: Clock },
                        { label: 'Coverage', value: 'City + Intercity', icon: MapPin },
                    ].map((f) => (
                        <div key={f.label} className="flex flex-col items-center text-center">
                            <f.icon className="w-6 h-6 text-primary mb-3" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{f.label}</span>
                            <span className="text-sm font-black text-gray-900">{f.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service matrix */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Riyadh Transportation Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceMatrix.map((s) => (
                            <Link key={s.name} href={s.href} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <s.icon className="w-7 h-7 text-primary mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport transfers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Riyadh Airport Taxi &amp; Pickup</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Book your RUH airport transfer before your flight and receive pickup instructions in advance. For arrivals, the driver meets you at the agreed terminal pickup point and assists with luggage before taking you directly to your Riyadh hotel, office or residence.
                    </p>
                </div>
            </section>

            {/* Travel times */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Riyadh Travel Times</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Approximate distances and times. Traffic in Riyadh can be heavy, so plan your trips accordingly.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="RUH Airport / City Center" locations={distanceData} />
                        <SeasonalTravelTips city="Riyadh" />
                    </div>
                </div>
            </section>

            {/* Popular areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Popular Places We Serve in Riyadh</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {areas.map((a) => (
                            <Link key={a.name} href={a.url} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <h3 className="font-bold text-gray-900 mb-2">{a.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Need a hotel transfer? Pre-book a private car from RUH Airport to your Riyadh hotel, or arrange transfers between hotels, offices and other destinations across the city.
                    </p>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Riyadh Transfer Prices</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Fares vary by pickup location, destination, vehicle and travel time. The following are starting prices for selected services.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Plane, title: 'RUH Airport → Riyadh', price: '150' },
                            { icon: MapPin, title: 'Riyadh → Dammam', price: '800', popular: true },
                            { icon: Car, title: 'Riyadh → Makkah', price: '1,200' },
                        ].map((p) => (
                            <div key={p.title} className={`bg-white p-8 rounded-2xl border-2 text-center relative ${p.popular ? 'border-primary/30' : 'border-gray-200'}`}>
                                {p.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold">POPULAR</div>}
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <p.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-xl font-bold text-gray-900 mb-3">{p.title}</div>
                                <div className="text-3xl font-black text-primary mb-1"><span className="text-lg">From</span> SAR {p.price}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">Get an exact quote for your date and vehicle via WhatsApp or our booking form.</p>
                </div>
            </section>

            {/* Popular routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Popular Routes from Riyadh</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {routes.map((r) => (
                            <Link key={r.name} href={r.url} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between group">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{r.name}</h3>
                                    <p className="text-gray-500 text-sm">{r.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary shrink-0 ml-2" />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/routes/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all routes <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Choose Your Vehicle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
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

            {/* Why pre-book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Pre-Book?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        A pre-booked vehicle gives you a confirmed pickup time and driver before your journey — useful for airport arrivals, scheduled meetings and longer intercity trips. The fare is agreed before you travel.
                    </p>
                </div>
            </section>

            {/* Reviews & Questions */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Customer Reviews</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Share your experience or ask a question about our Riyadh services.</p>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Riyadh" />
                        <QuestionsDisplay location="Riyadh" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ReviewForm locationName="Riyadh" />
                        <QuestionForm locationName="Riyadh" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-4 pb-4 pt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Riyadh Transfer FAQ</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mt-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Riyadh Taxi</h2>
                    <p className="text-gray-400 text-lg mb-10">Send your pickup location, destination and travel date for a fixed quote.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 font-black px-10 py-6 h-auto text-lg rounded-2xl">
                                Book Your Riyadh Transfer
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold px-10 py-6 h-auto text-lg rounded-2xl">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>
        </div>
    );
}
