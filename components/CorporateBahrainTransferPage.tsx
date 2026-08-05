import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, Shield, Briefcase, FileText, Users, Timer } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import { toyotaVelozHighlight } from '@/data/areaFleetHighlights';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';
import { CorporateTransferCompany, getSectorSiblings } from '@/data/corporateBahrainTransfers';

const pricingRows = [
    { vehicle: 'Business Sedan (Camry)', description: 'Solo executive travel, door-to-door.', price: '400', capacity: '3 Pax' },
    { vehicle: 'GMC Yukon XL (Executive SUV)', description: 'Preferred by project teams — laptop bags and gear fit easily.', price: '650', capacity: '6 Pax', isPopular: true },
    { vehicle: 'Mercedes S-Class (VIP)', description: 'Chauffeur-driven VIP sedan for senior staff and client visits.', price: '950', capacity: '3 Pax' },
];

const routeDetails = [
    { label: 'Distance', value: '~75 km', icon: MapPin },
    { label: 'Travel Time', value: '1.5-2 Hours', icon: Clock },
    { label: 'Route', value: 'King Fahd Causeway', icon: Car },
    { label: 'Service', value: 'VIP Corporate 24/7', icon: CheckCircle2 },
];

interface CorporateBahrainTransferPageProps {
    company: CorporateTransferCompany;
}

export default function CorporateBahrainTransferPage({ company }: CorporateBahrainTransferPageProps) {
    const siblings = getSectorSiblings(company.slug, 4);

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName={`${company.name} Dammam to Bahrain`}
                description={`VIP executive car service from Dammam, Al Khobar and Dhahran to Bahrain via King Fahd Causeway, built for corporate travel including ${company.name} staff, contractors and visiting professionals.`}
                services={[
                    { name: `${company.name} Dammam to Bahrain Taxi`, description: 'VIP private transfer for corporate and project travel via the causeway.' },
                    { name: 'Executive Chauffeur', description: 'Professional, discreet drivers for business meetings in Manama.' },
                    { name: 'Corporate Invoicing', description: 'Receipts and monthly billing available for companies and teams.' },
                    { name: 'Multi-Site Pickup', description: 'Pickup from offices, yards or hotels across Dammam, Al Khobar and Dhahran.' },
                ]}
                image="https://taxiserviceksa.com/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp', '/gmc-yukon.webp']}
                h1Text={`${company.name} Dammam to Bahrain VIP Taxi`}
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        King Fahd Causeway | {company.heroBadge}
                    </span>
                }
                subtitle="Executive Transfer for Business Professionals"
                location="VIP Corporate Transfer | Eastern Province to Manama, Bahrain"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Dammam to Bahrain Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Corporate Account Inquiry</Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        NOTE: Passengers must carry a valid passport/ID for the Saudi-Bahrain border crossing at King Fahd Causeway.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">{company.sector}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Dammam to Bahrain, Built for Business Travel
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {company.context}
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {company.travelReason} Taxi Service KSA is an independent private chauffeur provider used by professionals making that trip — we pick you up directly from your office, yard or hotel, handle the King Fahd Causeway crossing, and drop you at your Manama meeting point, on schedule, with no shared rides.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <FileText className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Corporate Invoicing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Executive Chauffeur</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Multi-Site Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Timer className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">On-Time Guarantee</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Route Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Pickup Across the Eastern Province</h4>
                                        <p className="text-sm text-gray-500">Your chauffeur meets you at your office, yard, hotel or Dammam Airport arrivals — Dammam, Al Khobar or Dhahran.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Fahd Causeway</h4>
                                        <p className="text-sm text-gray-500">Cross the 25km causeway connecting Saudi Arabia to Bahrain Island; your driver handles the paperwork.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Drop-off in Manama</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at your Bahrain office, project site or hotel — no detours, no waiting.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PricingTable
                    title="Fixed VIP Rates: Dammam to Bahrain"
                    subtitle="Corporate & Executive Fleet"
                    rows={pricingRows}
                    disclaimer="Rates are for door-to-door service and include the King Fahd Causeway toll. Corporate invoicing and monthly team accounts available on request."
                />
            </div>

            <RouteFleetSection areaHighlight={toyotaVelozHighlight} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-900 rounded-3xl p-8 md:p-10 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Traveling for {company.name} or Another Eastern Province Employer?</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        We set up monthly corporate accounts with fixed rates and consolidated invoicing for teams making regular Dammam-Bahrain trips.
                    </p>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold px-8 py-6 h-auto">
                            Request a Corporate Account
                        </Button>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        Other Eastern Province to Bahrain Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        {siblings.map((sib) => (
                            <Link
                                key={sib.slug}
                                href={`/routes/${sib.slug}-dammam-to-bahrain-taxi/`}
                                className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm"
                            >
                                {sib.name} to Bahrain
                            </Link>
                        ))}
                        <Link href="/routes/khobar-bahrain/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Al Khobar to Bahrain
                        </Link>
                        <Link href="/routes/dammam-airport-to-manama-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Dammam Airport to Manama
                        </Link>
                        <Link href="/vip-transfer-dammam/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            VIP Transfer Dammam
                        </Link>
                        <Link href="/services/corporate-travel/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Corporate Travel Service
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                contextName={`${company.name} Dammam to Bahrain`}
                faqs={[
                    {
                        question: `Is this an official ${company.name} transportation service?`,
                        shortAnswer: 'No, independent VIP provider',
                        detailedAnswer: `Taxi Service KSA is an independent private chauffeur company. This page is for professionals traveling to or from ${company.name} offices or sites on the Dammam-Bahrain route — it is not an official partnership or corporate account with ${company.name}.`,
                        perspectives: [],
                    },
                    {
                        question: company.uniqueFaq.question,
                        shortAnswer: company.uniqueFaq.shortAnswer,
                        detailedAnswer: company.uniqueFaq.detailedAnswer,
                        perspectives: [],
                    },
                    {
                        question: 'Do you provide invoicing for corporate or contractor travel?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. We can issue receipts per trip or set up a monthly consolidated invoice for teams and companies making regular Dammam-Bahrain trips. Email or WhatsApp us to set up a corporate account.',
                        perspectives: [],
                    },
                    {
                        question: 'How much is a VIP taxi from Dammam to Bahrain?',
                        shortAnswer: 'From 400 SAR',
                        detailedAnswer: 'Fixed rates start at 400 SAR for a business sedan, 650 SAR for a GMC Yukon XL executive SUV, and 950 SAR for a chauffeur-driven Mercedes S-Class — all inclusive of the King Fahd Causeway toll.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your VIP Dammam to Bahrain Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Punctual, private and professional — the way corporate travel across the causeway should be.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?pickup=Dammam&dropoff=Bahrain">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
