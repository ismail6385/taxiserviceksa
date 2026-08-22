import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, FileText, Plane, Building2, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Dammam to Bahrain Taxi | Private Transfer from 400 SAR',
    description: 'Book a private Dammam to Bahrain taxi via King Fahd Causeway. Door-to-door transfers, professional drivers, fixed fares from 400 SAR and 24/7 booking.',
    keywords: ['Dammam to Bahrain taxi', 'Dammam to Bahrain taxi price', 'Dammam Bahrain taxi fare', 'Dammam to Bahrain transfer', 'Dammam to Manama taxi', 'Dammam Bahrain private taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-bahrain/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-bahrain/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-bahrain/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-bahrain/',
        },
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Dammam to Bahrain taxi via King Fahd Causeway' }],
        siteName: 'Taxi Service KSA',
        title: 'Dammam to Bahrain Taxi | Private Transfer from 400 SAR',
        description: 'Private door-to-door taxi from Dammam to Bahrain via the King Fahd Causeway, with fixed vehicle pricing and professional drivers.',
        url: 'https://taxiserviceksa.com/routes/dammam-bahrain/',
        type: 'website',
    },
};

export default function DammamBahrainRoutePage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const glance = [
        ['Distance', 'Approx. 90 km'],
        ['Driving Time', 'Around 1.5-2 hours in normal conditions'],
        ['Border Processing', 'Variable — adds to total journey time'],
        ['Total Journey', 'Often 1-3+ hours depending on Causeway traffic'],
        ['Route', 'Dammam → Al Khobar → King Fahd Causeway → Bahrain'],
        ['Booking', '24/7'],
    ];

    const pricing = [
        { pickup: 'Dammam City — Sedan', price: '400' },
        { pickup: 'Dammam City — SUV', price: '400-500' },
        { pickup: 'Dammam Airport (DMM) — Sedan', price: '450' },
        { pickup: 'Dammam Airport (DMM) — SUV', price: '450-600' },
    ];

    const vehicles = [
        { name: 'Toyota Veloz (2024)', cap: 'Up to 7 passengers, 4 luggage', desc: 'Dammam-based, featured for this route.', link: '/fleet/toyota-veloz/' },
        { name: 'Toyota Camry', cap: '1-3/4 passengers, 2 luggage', desc: 'A practical option for smaller groups.', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon XL', cap: 'Up to 7 passengers, 5 luggage', desc: 'Premium families and groups.', link: '/fleet/gmc-yukon-xl/' },
        { name: 'Mercedes Sprinter', cap: 'Up to 14 passengers', desc: 'Larger groups travelling together.', link: '/fleet/mercedes-sprinter/' },
    ];

    const documents = ['Valid passport', 'Bahrain visa or entry permission where required', 'Valid Saudi residency documentation (Iqama) where applicable', 'GCC residency requirements where applicable'];

    const bahrainDestinations = [
        { name: 'Dammam Airport to Manama', href: '/routes/dammam-airport-to-manama-taxi/' },
        { name: 'Dammam Airport to Bahrain Airport', href: '/routes/dammam-airport-to-bahrain-airport-taxi/' },
        { name: 'Dammam Airport to Muharraq', href: '/routes/dammam-airport-to-muharraq-taxi/' },
        { name: 'Dammam Airport to Riffa', href: '/routes/dammam-airport-to-riffa-taxi/' },
        { name: 'Dammam Airport to Amwaj Islands', href: '/routes/dammam-airport-to-amwaj-islands-taxi/' },
    ];

    const nearby: RelatedLink[] = [
        { name: 'Al Khobar', url: '/locations/al-khobar/', description: 'Taxi transfers between Dammam and Al Khobar, including onward Bahrain Causeway trips.' },
        { name: 'Dhahran', url: '/locations/dhahran/', description: 'Taxi transfers between Dammam and Dhahran.' },
        { name: 'Jubail', url: '/locations/jubail/', description: 'Taxi transfers between Dammam and Jubail.' },
        { name: 'Hofuf', url: '/locations/hofuf/', description: 'Taxi transfers between Dammam and Hofuf.' },
    ];

    const corporateCompanies = [
        { slug: 'abb-dammam-to-bahrain-taxi', name: 'ABB' },
        { slug: 'baker-hughes-dammam-to-bahrain-taxi', name: 'Baker Hughes' },
        { slug: 'bechtel-dammam-to-bahrain-taxi', name: 'Bechtel' },
        { slug: 'carrefour-dammam-to-bahrain-taxi', name: 'Carrefour' },
        { slug: 'db-schenker-dammam-to-bahrain-taxi', name: 'DB Schenker' },
        { slug: 'dhl-dammam-to-bahrain-taxi', name: 'DHL' },
        { slug: 'emerson-dammam-to-bahrain-taxi', name: 'Emerson Electric' },
        { slug: 'exxonmobil-dammam-to-bahrain-taxi', name: 'ExxonMobil' },
        { slug: 'fedex-dammam-to-bahrain-taxi', name: 'FedEx' },
        { slug: 'fluor-dammam-to-bahrain-taxi', name: 'Fluor' },
        { slug: 'ge-dammam-to-bahrain-taxi', name: 'GE' },
        { slug: 'halliburton-dammam-to-bahrain-taxi', name: 'Halliburton' },
        { slug: 'hilton-dammam-to-bahrain-taxi', name: 'Hilton' },
        { slug: 'honeywell-dammam-to-bahrain-taxi', name: 'Honeywell' },
        { slug: 'hyundai-enc-dammam-to-bahrain-taxi', name: 'Hyundai E&C' },
        { slug: 'hyundai-motor-dammam-to-bahrain-taxi', name: 'Hyundai Motor' },
        { slug: 'ikea-dammam-to-bahrain-taxi', name: 'IKEA' },
        { slug: 'intercontinental-dammam-to-bahrain-taxi', name: 'InterContinental' },
        { slug: 'jacobs-dammam-to-bahrain-taxi', name: 'Jacobs Engineering' },
        { slug: 'johnson-controls-dammam-to-bahrain-taxi', name: 'Johnson Controls' },
        { slug: 'lt-dammam-to-bahrain-taxi', name: 'Larsen & Toubro (L&T)' },
        { slug: 'maersk-dammam-to-bahrain-taxi', name: 'Maersk' },
        { slug: 'marriott-dammam-to-bahrain-taxi', name: 'Marriott' },
        { slug: 'mcdermott-dammam-to-bahrain-taxi', name: 'McDermott' },
        { slug: 'msc-dammam-to-bahrain-taxi', name: 'MSC' },
        { slug: 'nissan-dammam-to-bahrain-taxi', name: 'Nissan' },
        { slug: 'samsung-engineering-dammam-to-bahrain-taxi', name: 'Samsung Engineering' },
        { slug: 'schlumberger-dammam-to-bahrain-taxi', name: 'Schlumberger (SLB)' },
        { slug: 'shell-dammam-to-bahrain-taxi', name: 'Shell' },
        { slug: 'siemens-dammam-to-bahrain-taxi', name: 'Siemens' },
        { slug: 'sinopec-dammam-to-bahrain-taxi', name: 'Sinopec' },
        { slug: 'technip-energies-dammam-to-bahrain-taxi', name: 'Technip Energies' },
        { slug: 'totalenergies-dammam-to-bahrain-taxi', name: 'TotalEnergies' },
        { slug: 'toyota-dammam-to-bahrain-taxi', name: 'Toyota' },
        { slug: 'weatherford-dammam-to-bahrain-taxi', name: 'Weatherford' },
    ];

    const faqs = [
        { question: "How much is a taxi from Dammam to Bahrain?", shortAnswer: "From 400 SAR", detailedAnswer: "Private transfers start from 400 SAR for a sedan from Dammam city (450 SAR from Dammam Airport), and 400-500 SAR for an SUV (450-600 SAR from the airport). Prices are per vehicle, not per passenger.", perspectives: [] },
        { question: "How long does Dammam to Bahrain take?", shortAnswer: "Often 1-3+ hours total", detailedAnswer: "Driving time is around 1.5-2 hours in normal conditions. Border processing at the King Fahd Causeway adds further time and can vary significantly, especially on weekends and holidays — plan for a full journey rather than a fixed arrival time.", perspectives: [] },
        { question: "How far is Dammam from Bahrain?", shortAnswer: "Approx. 90 km", detailedAnswer: "The road distance is approximately 90 km, primarily via Al Khobar and the King Fahd Causeway.", perspectives: [] },
        { question: "Does the taxi cross the King Fahd Causeway?", shortAnswer: "Yes", detailedAnswer: "Yes, this route uses the King Fahd Causeway. See our full King Fahd Causeway guide for the detailed border process.", perspectives: [] },
        { question: "What documents do I need?", shortAnswer: "Passport and valid entry documentation", detailedAnswer: "Bring your passport, the Bahrain entry permission/visa required for your nationality, and any valid Saudi residency documentation if applicable. Requirements vary by nationality and status — check current requirements before travelling.", perspectives: [] },
        { question: "Is a Bahrain visa included in the price?", shortAnswer: "No", detailedAnswer: "No, visa arrangements and fees are the passenger's own responsibility. The quoted vehicle price does not include personal visa costs.", perspectives: [] },
        { question: "Are Causeway fees included?", shortAnswer: "Yes", detailedAnswer: "Yes, applicable bridge tolls and vehicle crossing insurance are included in the quoted vehicle price.", perspectives: [] },
        { question: "Is the price per vehicle or per passenger?", shortAnswer: "Per vehicle", detailedAnswer: "This is a private vehicle service, so the quoted price is for the vehicle and journey, not per seat.", perspectives: [] },
        { question: "Can I book a return trip?", shortAnswer: "Yes", detailedAnswer: "Yes, a return transfer from Bahrain to Dammam can be requested. Provide your return date and time when booking.", perspectives: [] },
        { question: "Can you pick me up from Dammam Airport?", shortAnswer: "Yes", detailedAnswer: "Yes, pickup can be arranged from Dammam Airport (DMM), your hotel, home or office.", perspectives: [] },
        { question: "Can you drop me at Bahrain Airport?", shortAnswer: "Yes", detailedAnswer: "Yes, we can drop you directly at Bahrain International Airport instead of a city address.", perspectives: [] },
        { question: "Which vehicle is best for 6-7 passengers?", shortAnswer: "GMC Yukon XL or Toyota Veloz", detailedAnswer: "For 6-7 passengers, a GMC Yukon XL or Toyota Veloz is recommended. Tell us your luggage count as well so we can confirm it fits comfortably.", perspectives: [] },
        { question: "Can corporate clients book recurring transfers?", shortAnswer: "Yes", detailedAnswer: "Yes, we support recurring corporate bookings for companies with regular Dammam-Bahrain staff travel. See our corporate transfer options below or contact us to discuss recurring arrangements.", perspectives: [] },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam to Bahrain"
                description="Private taxi and car transfer from Dammam to Bahrain via King Fahd Causeway. Door-to-door cross-border transportation with a professional driver."
                services={[
                    { name: 'Dammam to Bahrain Taxi', description: 'Private one-way or return cross-border transfer via King Fahd Causeway.' },
                    { name: 'Family & Group Vehicles', description: 'Vehicles selected based on passenger and luggage requirements.' },
                    { name: 'Corporate Transfers', description: 'Recurring transfers for companies with regular Dammam-Bahrain staff travel.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Dammam to Bahrain Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Private Transfer via King Fahd Causeway
                    </span>
                }
                subtitle="Private door-to-door taxi from Dammam to Bahrain via the King Fahd Causeway. Choose a sedan, family MPV, premium SUV or van for one-way or return travel."
                location="Approx. 90 km | From 400 SAR | 24/7 Booking"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966563573531?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Bahrain" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Get a Quote from 400 SAR
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking?pickup=Dammam&dropoff=Bahrain">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book Online
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Quick facts */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="overflow-hidden rounded-2xl border border-gray-100">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-gray-100">
                                {glance.map(([label, value]) => (
                                    <tr key={label} className="odd:bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-800 w-1/3">{label}</td>
                                        <td className="py-3 px-4 text-gray-600">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-3 text-center">Dammam to Bahrain Taxi Price</h2>
                    <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Prices are per vehicle, not per passenger. Final fare may vary based on exact pickup/drop-off location, passenger count, luggage and travel date.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse bg-white/5 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/10 text-left">
                                    <th className="py-3 px-4 font-bold">Pickup / Vehicle</th>
                                    <th className="py-3 px-4 font-bold text-right">From</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {pricing.map((p) => (
                                    <tr key={p.pickup}>
                                        <td className="py-3 px-4 font-semibold">{p.pickup}</td>
                                        <td className="py-3 px-4 text-right font-bold text-primary">{p.price} SAR</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-xs text-center mt-4">Standard luggage is included within the vehicle's capacity. Oversized or unusually large items may require a larger vehicle — let us know when booking. Causeway tolls and vehicle crossing insurance are included.</p>
                </div>
            </section>

            {/* Journey breakdown */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How the Journey Works</h2>
                    <div className="flex flex-col gap-3">
                        {[
                            'Pickup in Dammam (home, hotel, office or airport)',
                            'Drive toward Al Khobar',
                            'Saudi border — exit procedures',
                            'King Fahd Causeway crossing',
                            'Bahrain entry — immigration and customs',
                            'Final destination (Manama, airport, hotel, etc.)',
                        ].map((step, i) => (
                            <div key={step} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <span className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                                <span className="text-sm text-gray-700">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Causeway + documents */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dammam to Bahrain via King Fahd Causeway</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our driver manages the vehicle-side requirements and guides you through the journey. Passengers remain responsible for carrying the passport, visa, residency permit and other documents required for entry into Bahrain.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                            Our driver can guide you through the cross-border process and explain where to go, while immigration and customs decisions remain with the relevant authorities.
                        </p>
                        <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            Read our full King Fahd Causeway guide <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-primary" /> Documents for Dammam to Bahrain Travel</h2>
                        <div className="space-y-2 mb-4">
                            {documents.map((d) => (
                                <div key={d} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">{d}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs">Visa eligibility depends on nationality and residency status. Check current Bahrain entry requirements before travel.</p>
                    </div>
                </div>
            </section>

            {/* Taxi vs own car */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Taxi vs Driving Your Own Car</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Private Taxi</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Chauffeur-driven, no driving fatigue</li>
                                <li>Door-to-door pickup and drop-off</li>
                                <li>Vehicle-side cross-border requirements handled for you</li>
                                <li>Useful for business travel and groups</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Your Own Vehicle</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>More flexibility on timing</li>
                                <li>You handle your own vehicle documentation and insurance</li>
                                <li>You drive both sides of the border yourself</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Best Vehicles for Dammam to Bahrain</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-xs font-bold text-primary mb-2">{v.cap}</p>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View all vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who uses this */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who Uses Dammam to Bahrain Taxi Transfers?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Users, title: 'Families', desc: 'Direct journey with luggage, no transfers.' },
                            { icon: Building2, title: 'Business Travelers', desc: 'Flexible departure, hotel or office pickup.' },
                            { icon: MapPin, title: 'GCC Residents', desc: 'Cross-border convenience.' },
                            { icon: Plane, title: 'Bahrain Airport Passengers', desc: 'Direct transfer to or from the airport.' },
                            { icon: Car, title: 'Groups', desc: 'One shared private vehicle instead of separate cars.' },
                        ].map((p) => (
                            <div key={p.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                                <p.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 text-xs mb-1">{p.title}</h3>
                                <p className="text-gray-500 text-xs">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bahrain destinations */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Popular Dammam to Bahrain Taxi Routes</h4>
                    <div className="flex flex-wrap gap-4">
                        {bahrainDestinations.map((d) => (
                            <Link key={d.href} href={d.href} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                                {d.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Corporate */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Corporate & Recurring Transfers: Dammam to Bahrain</h4>
                    <p className="text-sm text-gray-500 mb-4">Independent VIP transfer pages for professionals travelling to or working with these companies. Not an official partnership with the companies listed.</p>
                    <div className="flex flex-wrap gap-3">
                        {corporateCompanies.map((company) => (
                            <Link
                                key={company.slug}
                                href={`/routes/${company.slug}/`}
                                className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm"
                            >
                                {company.name}
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        Need recurring transfers for your team? See our <Link href="/services/corporate-travel/" className="text-primary font-semibold hover:underline">corporate travel service</Link>.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations
                    currentCity="Dammam"
                    customLinks={nearby}
                    labels={{
                        title: 'Nearby Destinations from Dammam',
                        subtitle: 'Private transfers across the Eastern Province',
                        viewRoutes: 'View Details',
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Dammam to Bahrain Taxi FAQs</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center mt-16">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Book Your Dammam to Bahrain Transfer</h2>
                    <p className="text-gray-400 mb-10 text-lg">Send your pickup location, travel date, passenger count and preferred vehicle to receive a quote.</p>
                    <a href="https://wa.me/966563573531?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Bahrain" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get a Quote from 400 SAR</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
