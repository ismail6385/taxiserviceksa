import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Car, Plane, ArrowRight, Building2, ShoppingBag } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

export const metadata: Metadata = {
    title: 'Al Khobar Taxi Service & Private Car Transfers | Taxi Service KSA',
    description: 'Private taxi and car transfers in Al Khobar. King Fahd Causeway to Bahrain, Dammam Airport (DMM), Dhahran, Jubail and Eastern Province travel. Fixed rates.',
    keywords: ['al khobar taxi', 'khobar to bahrain taxi', 'king fahd causeway taxi', 'al khobar private car', 'dmm airport taxi from khobar'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-khobar/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Al Khobar private taxi and Bahrain Causeway transfer' }],
        siteName: 'Taxi Service KSA',
        title: 'Al Khobar Taxi Service & Private Car Transfers | Taxi Service KSA',
        description: 'Private transfers from Al Khobar to Bahrain, Dammam Airport, Dhahran, Jubail and destinations across the Eastern Province.',
        url: 'https://taxiserviceksa.com/locations/al-khobar/',
        type: 'website',
    },
};

export default function AlKhobarPage() {
    const services = [
        { name: 'Bahrain Causeway', description: 'Private transfers from Al Khobar to Bahrain via King Fahd Causeway.', icon: Car },
        { name: 'Dammam Airport (DMM)', description: 'Pre-booked pickup and drop-off at King Fahd International Airport.', icon: Plane },
        { name: 'Hourly Chauffeur', description: 'A private driver for business meetings, shopping and multiple stops.', icon: ShoppingBag },
        { name: 'Eastern Province Routes', description: 'Transfers to Dhahran, Jubail, Dammam and Riyadh.', icon: Building2 },
    ];

    const khobarImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const vehicles = [
        { name: 'Toyota Camry', desc: 'Business travel, 1-3 passengers', link: '/fleet/toyota-camry/' },
        { name: 'Toyota Veloz / Hyundai Staria', desc: 'Families, up to 7 passengers', link: '/fleet/toyota-veloz/' },
        { name: 'GMC Yukon', desc: 'Premium groups', link: '/fleet/gmc-yukon/' },
        { name: 'Mercedes S-Class', desc: 'Executive travel', link: '/fleet/mercedes-s-class/' },
    ];

    const nearbyLinks: RelatedLink[] = [
        { name: 'Dammam', url: '/locations/dammam/', description: 'Private transfers between Al Khobar and Dammam for city and airport travel.' },
        { name: 'Dhahran', url: '/locations/dhahran/', description: 'Transfers between Al Khobar and Dhahran for Aramco visitors and business travelers.' },
        { name: 'Jubail', url: '/locations/jubail/', description: 'Private transfers between Al Khobar and Jubail Industrial City.' },
    ];

    const faqs = [
        {
            question: "Do you provide taxi transfers from Al Khobar to Bahrain?",
            shortAnswer: "Yes, via King Fahd Causeway",
            detailedAnswer: "Yes, we provide private car transfers from Al Khobar to Manama and other Bahrain destinations via King Fahd Causeway. See our Bahrain Causeway page for the full journey guide, including documents and timing.",
            perspectives: []
        },
        {
            question: "Do I need a visa to cross into Bahrain?",
            shortAnswer: "Depends on your nationality and status",
            detailedAnswer: "Bahrain entry requirements depend on your nationality and immigration status. Check the current Bahrain visa requirements before traveling. If you're unsure, confirm your eligibility before booking the transfer.",
            perspectives: []
        },
        {
            question: "How long does the Causeway crossing take?",
            shortAnswer: "Varies — allow extra time on weekends",
            detailedAnswer: "The drive itself is around 30-40 minutes under normal conditions, but total journey time including Saudi exit, Causeway crossing and Bahrain entry processing can run 1-2+ hours and longer during weekends, holidays and peak periods.",
            perspectives: []
        },
        {
            question: "How far is Al Khobar from Dammam Airport (DMM)?",
            shortAnswer: "~40-55 km, roughly 40-60 minutes",
            detailedAnswer: "Distance and time depend on your exact pickup location in Al Khobar and traffic conditions. As a general guide, allow 40-60 minutes.",
            perspectives: []
        },
        {
            question: "Can I use a rental car to cross into Bahrain?",
            shortAnswer: "Check with the rental company first",
            detailedAnswer: "If you're using a rental vehicle, confirm with the rental company in advance that cross-border travel into Bahrain is permitted and that the required authorization and insurance are provided. This is why many travelers prefer a pre-booked private transfer instead.",
            perspectives: []
        },
        {
            question: "What should I bring for the Bahrain crossing?",
            shortAnswer: "Passport and valid entry documentation",
            detailedAnswer: "Bring a valid passport and the entry permission/visa required for your nationality, along with any valid Saudi residency documentation if applicable. Requirements vary by nationality and travel status — check current Bahrain and Saudi entry requirements before departure.",
            perspectives: []
        },
        {
            question: "Do you offer a taxi to Dhahran or Jubail?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide private transfers between Al Khobar and Dhahran (including Aramco-related travel) and Jubail Industrial City.",
            perspectives: []
        },
        {
            question: "Can I book an hourly chauffeur in Al Khobar?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, a private driver can be booked by the hour or for a full day for business meetings, shopping, or multiple stops around Al Khobar and the Eastern Province.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Al Khobar"
                description="Private taxi and car transfers in Al Khobar. King Fahd Causeway to Bahrain, Dammam Airport transfers, and Eastern Province travel."
                services={services}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={khobarImages}
                h1Text="Al Khobar Taxi Service & Private Car Transfers"
                bookingFormTitle="WhatsApp Booking for Al Khobar Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Eastern Province
                    </span>
                }
                subtitle="Private transfers from Al Khobar to Bahrain, Dammam Airport, Dhahran, Jubail and destinations across the Eastern Province."
                location="Bahrain Causeway • DMM Airport • Dhahran • Jubail"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking/">
                            Book Your Al Khobar Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Quote
                        </a>
                    </Button>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Bahrain', value: 'Via Causeway', icon: Car },
                        { label: 'DMM Airport', value: 'Private Pickup', icon: Plane },
                        { label: 'Dhahran / Jubail', value: 'Eastern Province', icon: Building2 },
                        { label: 'Booking', value: 'WhatsApp or Online', icon: CheckCircle2 },
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
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Al Khobar</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Al Khobar is a coastal city in Saudi Arabia's Eastern Province, closely connected to Dammam and Dhahran, and linked to Bahrain by King Fahd Causeway. We provide private, pre-booked transfers from Al Khobar for Causeway crossings to Bahrain, airport pickup at King Fahd International Airport (DMM), and travel across the Eastern Province.
                    </p>
                </div>
            </section>

            {/* Bahrain Causeway */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Al Khobar to Bahrain Taxi</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Private car transfers from Al Khobar to Manama and other Bahrain destinations via King Fahd Causeway. Our driver assists with the vehicle-side documentation; passengers remain responsible for their own passport, visa and customs requirements.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-3">How Long Does It Take?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The drive itself is around 30-40 minutes under normal conditions. Total journey time — including Saudi exit, Causeway crossing and Bahrain entry processing — commonly runs 1-2+ hours, and can be significantly longer during weekends, holidays and peak travel periods. If you're catching a flight, allow a generous buffer.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-3">What You'll Need</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A valid passport and the Bahrain entry permission/visa required for your nationality, plus any valid Saudi residency documentation if applicable. Requirements vary by nationality and travel status — check current Bahrain and Saudi entry requirements before departure. Do not carry prohibited goods across the border; customs rules apply to all passengers and vehicles.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h4 className="font-bold text-gray-900 text-sm mb-3">Includes</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Private vehicle & professional driver</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Door-to-door pickup</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Vehicle-side border documentation</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Luggage assistance</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h4 className="font-bold text-gray-900 text-sm mb-3">Not Included</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-gray-400">–</span> Passenger visa/entry fees</li>
                                <li className="flex gap-2"><span className="text-gray-400">–</span> Personal customs charges</li>
                                <li className="flex gap-2"><span className="text-gray-400">–</span> Expenses outside the agreed booking</li>
                            </ul>
                        </div>
                    </div>

                    <Link href="/locations/al-khobar/bahrain-causeway/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Full King Fahd Causeway guide <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al Khobar Transport Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <service.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Need DMM airport pickup details? See our{' '}
                        <Link href="/dammam-airport-taxi/" className="text-primary font-semibold hover:underline">Dammam Airport Taxi page</Link>.
                    </p>
                </div>
            </section>

            {/* Distance table + fares */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <DistanceTable
                            origin="Al Khobar Corniche"
                            locations={[
                                { destination: 'Bahrain (Manama)', distance: '~45-50 km', time: '~1-2+ h (incl. border)', route: 'King Fahd Causeway' },
                                { destination: 'Dammam Airport (DMM)', distance: '~40-55 km', time: '~40-60 mins', route: 'Dhahran-Jubail Expy' },
                                { destination: 'Half Moon Bay', distance: '~30 km', time: '~25-35 mins', route: 'Aziziah Rd' },
                                { destination: 'Dhahran', distance: '~15 km', time: '~15-20 mins', route: 'King Saud Rd' },
                                { destination: 'Riyadh', distance: '~420 km', time: '~4-4.5 h', route: 'Route 40' }
                            ]}
                        />
                        <p className="text-sm text-gray-500 text-center mt-4">Approximate distances and driving times from central Al Khobar. Actual time depends on your exact pickup/drop-off location, traffic and — for Bahrain — border processing.</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Al Khobar Transfer Fares</h2>
                        <p className="text-gray-500 text-center mb-10">Starting fares — final price depends on pickup location, destination, vehicle and whether the booking is one-way or return.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Car, title: 'To Bahrain', price: '350', desc: 'Causeway transfer (starting fare)', popular: true },
                                { icon: Plane, title: 'Dammam Airport', price: '200', desc: 'Meet & greet service (starting fare)' },
                                { icon: ShoppingBag, title: 'City Disposal', price: '600', desc: 'Full-day chauffeur (8 hours, starting fare)' },
                            ].map((p) => (
                                <div key={p.title} className={`bg-white p-8 rounded-2xl border-2 text-center relative ${p.popular ? 'border-primary/30' : 'border-gray-200'}`}>
                                    {p.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold">POPULAR</div>}
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <p.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-xl font-bold text-gray-900 mb-3">{p.title}</div>
                                    <div className="text-3xl font-black text-primary mb-3"><span className="text-lg">From</span> SAR {p.price}</div>
                                    <div className="text-sm text-gray-600">{p.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Vehicle Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-4">Cross-border bookings are subject to the required vehicle documentation and current Causeway requirements.</p>
                    <div className="text-center mt-6">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pickup areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Al Khobar Pickup Areas</h2>
                    <p className="text-gray-600 text-center mb-6">We provide door-to-door pickup across Al Khobar, including:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Al Khobar Corniche', 'Al Ulaya', 'Al Aqrabiyah', 'Al Hamra', 'Hotels & Business Districts'].map((area) => (
                            <span key={area} className="bg-white border border-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl text-sm">{area}</span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ApprovedDriversForLocation location="al-khobar" />

                <RelatedLocations
                    currentCity="Al Khobar"
                    customLinks={nearbyLinks}
                    labels={{
                        title: 'Nearby Destinations from Al Khobar',
                        subtitle: 'Private transfers across the Eastern Province',
                        viewRoutes: 'View Details',
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black mt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get a Quote for Your Al Khobar Transfer</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Bahrain Causeway trips, Dammam Airport transfers, and travel across the Eastern Province.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Your Al Khobar Transfer
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
