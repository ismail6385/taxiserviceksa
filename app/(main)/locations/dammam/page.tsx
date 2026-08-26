import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Plane, ArrowRight, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

export const metadata: Metadata = {
    title: 'Dammam: Private Taxi, Airport & Intercity Transfers | Taxi Service KSA',
    description: 'Private taxi and car transfers in Dammam. King Fahd International Airport (DMM), Al Khobar, Dhahran, Jubail, Bahrain and Riyadh. Fixed rates, professional drivers.',
    keywords: ['dammam taxi', 'dammam airport transfer', 'dmm airport taxi', 'dammam to jubail taxi', 'dammam private car', 'eastern province taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/dammam/',
            'ar': 'https://taxiserviceksa.com/ar/locations/dammam/',
            'ur': 'https://taxiserviceksa.com/ur/locations/dammam/',
            'x-default': 'https://taxiserviceksa.com/locations/dammam/',
        }
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Dammam private taxi and airport transfer' }],
        siteName: 'Taxi Service KSA',
        title: 'Dammam: Private Taxi, Airport & Intercity Transfers | Taxi Service KSA',
        description: 'Private taxi and car transfers in Dammam. DMM Airport, Al Khobar, Dhahran, Jubail, Bahrain and Riyadh.',
        url: 'https://taxiserviceksa.com/locations/dammam/',
        type: 'website',
    },
};

export default function DammamPage() {
    const services = [
        { name: 'King Fahd Airport (DMM)', description: 'Private pickup and drop-off at King Fahd International Airport', icon: Plane },
        { name: 'Al Khobar & Dhahran', description: 'City and hotel transfers across the Eastern Province', icon: Building2 },
        { name: 'Jubail Industrial City', description: 'Transfers for business travelers and contractors', icon: Car },
        { name: 'Bahrain & Riyadh', description: 'Cross-border and long-distance private transfers', icon: MapPin },
    ];

    const dammamImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const vehicles = [
        { name: 'Toyota Camry', desc: 'For 1-3 passengers, city and airport rides', link: '/fleet/toyota-camry/' },
        { name: 'Toyota Veloz / Hyundai Staria', desc: 'For families, up to 7 passengers', link: '/fleet/toyota-veloz/' },
        { name: 'GMC Yukon', desc: 'For premium groups and corporate travel', link: '/fleet/gmc-yukon/' },
        { name: 'Mercedes Sprinter', desc: 'For larger groups and teams', link: '/fleet/mercedes-sprinter/' },
    ];

    const nearbyLinks: RelatedLink[] = [
        { name: 'Al Khobar', url: '/locations/al-khobar/', description: 'Private transfers between Dammam and Al Khobar for city rides, hotels and the Bahrain Causeway.' },
        { name: 'Dhahran', url: '/locations/dhahran/', description: 'Transfers between Dammam and Dhahran for Aramco visitors and business travelers.' },
        { name: 'Jubail', url: '/locations/jubail/', description: 'Private transfers for business travelers, contractors and families traveling to Jubail Industrial City.' },
        { name: 'Hofuf', url: '/locations/hofuf/', description: 'Private transfers between Dammam and Hofuf (Al-Ahsa).' },
    ];

    const faqs = [
        {
            question: "Is Dammam the same as Al Khobar?",
            shortAnswer: "No, but they're closely connected",
            detailedAnswer: "Dammam, Dhahran and Al Khobar are separate cities within the same Eastern Province urban area. They're closely connected, but travel time between them varies with traffic, especially during weekday commuting hours.",
            perspectives: []
        },
        {
            question: "How far is Dammam from King Fahd International Airport?",
            shortAnswer: "~35-40 km, about 30-40 minutes",
            detailedAnswer: "DMM Airport is located outside central Dammam. Travel time depends on your exact pickup or drop-off location and traffic, but is typically 30-40 minutes from central Dammam.",
            perspectives: []
        },
        {
            question: "Can I book a private taxi from Dammam to Jubail?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide private transfers between Dammam and Jubail Industrial City for business travelers, contractors and families. See our fare guide below for starting prices.",
            perspectives: []
        },
        {
            question: "Can I book a private car from Dammam to Bahrain?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, private transfers to the King Fahd Causeway and into Bahrain are available. Passengers are responsible for their own valid passport and entry requirements.",
            perspectives: []
        },
        {
            question: "Is there a taxi service from Dammam to Riyadh?",
            shortAnswer: "Yes, around 4-4.5 hours",
            detailedAnswer: "Yes, we provide intercity transfers from Dammam to Riyadh, a journey of approximately 400 km.",
            perspectives: []
        },
        {
            question: "Do you offer corporate transport in Dammam?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, we provide pre-booked transport for business travelers, contractors and teams traveling between Dammam, Dhahran, Al Khobar and Jubail Industrial City. See our Corporate Travel service for details.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam"
                description="Private taxi and car transfers in Dammam. King Fahd International Airport (DMM), Al Khobar, Dhahran, Jubail and intercity travel."
                services={services}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={dammamImages}
                h1Text="Dammam: Private Taxi, Airport & Intercity Transfers"
                bookingFormTitle="WhatsApp Booking for Dammam Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Eastern Province
                    </span>
                }
                subtitle="DMM Airport • Al Khobar • Dhahran • Jubail"
                location="Private Vehicle • Fixed Fares"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking/">
                            Book Your Dammam Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                        <a href="https://wa.me/966563573531?text=Hello,%20I%20need%20a%20taxi%20in%20Dammam" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Quote
                        </a>
                    </Button>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'DMM Airport', value: 'Private Pickup', icon: Plane },
                        { label: 'Al Khobar / Dhahran', value: 'City Transfers', icon: Building2 },
                        { label: 'Jubail', value: 'Business Transfers', icon: Car },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Dammam</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Dammam is the administrative capital of Saudi Arabia's Eastern Province. Dammam, Dhahran and Al Khobar form the core of the region's main urban area — three closely connected cities, though travel time between them varies with traffic, especially during weekday commuting hours.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We provide private, pre-booked transfers in Dammam for airport pickup, city and corporate travel, and longer trips to Jubail, Bahrain and Riyadh. For full details on booking a taxi in Dammam, including pricing, vehicle options and FAQs, see our{' '}
                        <Link href="/services/taxi-in-dammam/" className="text-primary font-semibold hover:underline">Taxi in Dammam service page</Link>.
                    </p>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Dammam Transport Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <service.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Need DMM airport pickup details — flight tracking, waiting time, terminal info? See our{' '}
                        <Link href="/dammam-airport-taxi/" className="text-primary font-semibold hover:underline">Dammam Airport Taxi page</Link>.
                    </p>
                </div>
            </section>

            {/* Distance table + fares */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <DistanceTable
                            origin="Dammam City Center"
                            locations={[
                                { destination: 'King Fahd Airport (DMM)', distance: '~35-40 km', time: '~30-40 mins', route: 'King Fahd Rd' },
                                { destination: 'Al Khobar', distance: '~20-25 km', time: '~20-30 mins', route: 'Coastal Hwy' },
                                { destination: 'Jubail Industrial City', distance: '~95-103 km', time: '~60-75 mins', route: 'Jubail Hwy' },
                                { destination: 'Bahrain Causeway', distance: '~40 km', time: '~45 mins', route: 'Khobar Rd' },
                                { destination: 'Riyadh', distance: '~400 km', time: '~4-4.5 h', route: 'Route 40' }
                            ]}
                        />
                        <p className="text-sm text-gray-500 text-center mt-4">Approximate distances and driving times from central Dammam. Actual time depends on your exact pickup/drop-off location and traffic.</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Dammam Transfer Fares</h2>
                        <p className="text-gray-500 text-center mb-10">Starting fares — exact price depends on pickup location, destination, vehicle and booking time.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Plane, title: 'Airport Pickup', price: '200', desc: 'DMM Airport to Dammam city (starting fare)' },
                                { icon: Building2, title: 'To Jubail', price: '350', desc: 'Industrial City transfer (starting fare)', popular: true },
                                { icon: MapPin, title: 'To Al Khobar', price: '200', desc: 'City & Corniche transfer (starting fare)' },
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Vehicle Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Corporate */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Corporate & Industrial Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Pre-booked transportation for business travelers, contractors and teams traveling between Dammam, Dhahran, Al Khobar and Jubail Industrial City.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/services/corporate-travel/" className="text-primary font-semibold hover:underline">Corporate Travel &rarr;</Link>
                        <Link href="/services/airport-transfers/" className="text-primary font-semibold hover:underline">Airport Transfers &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Pickup areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Dammam Pickup Areas</h2>
                    <p className="text-gray-600 text-center mb-6">We provide door-to-door pickup across Dammam, including:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Dammam City Center', 'Corniche', 'Al Faisaliyah', 'Al Shati', 'Al Mazruiyah', 'Hotels & Residential Areas'].map((area) => (
                            <span key={area} className="bg-white border border-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl text-sm">{area}</span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ApprovedDriversForLocation location="dammam" />

                <RelatedLocations
                    currentCity="Dammam"
                    customLinks={nearbyLinks}
                    labels={{
                        title: 'Nearby Destinations from Dammam',
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get a Quote for Your Dammam Transfer</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Airport transfers, Jubail trips, corporate travel, and intercity transfers to Bahrain and Riyadh.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <Link href="/booking/">
                                Book Your Dammam Transfer
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <a href="https://wa.me/966563573531?text=Hello,%20I%20need%20a%20taxi%20in%20Dammam" target="_blank" rel="noopener noreferrer">
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
