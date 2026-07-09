import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Star, Clock, Shield, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Riyadh Hotel Transfer Service | Airport & City Hotel Pickup | Taxi Service KSA',
    description: 'Private hotel pickup and transfer service in Riyadh. Airport to hotel, hotel to hotel, and hotel to business district. Luxury vehicles, meet-and-greet, 24/7. Book your Riyadh hotel transfer now.',
    keywords: [
        'Riyadh hotel pickup service',
        'hotel to airport luxury transfer Riyadh',
        'airport to hotel Riyadh',
        'Riyadh luxury suburban transfer',
        'hotel transfer Riyadh',
        'Four Seasons Riyadh transfer',
        'Ritz-Carlton Riyadh transfer',
        'hotel chauffeur Riyadh',
        'private hotel transport Riyadh',
        'luxury hotel pickup Riyadh',
        'hotel to KAFD transfer Riyadh',
        'door to door chauffeur Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/riyadh-hotel-transfer/',
    },
    openGraph: {
        title: 'Riyadh Hotel Transfer Service | Airport & City Pickup | Taxi Service KSA',
        description: 'Private hotel pickup and transfer in Riyadh. Airport to hotel, hotel to business district, and luxury hotel-to-hotel transfers. Meet-and-greet, 24/7.',
        url: 'https://taxiserviceksa.com/services/riyadh-hotel-transfer/',
        type: 'website',
    },
};

export default function RiyadhHotelTransferPage() {
    const hotels = [
        { name: 'Four Seasons Hotel Riyadh', area: 'Kingdom Centre, Al Olaya', routes: ['RUH Airport', 'KAFD', 'Diplomatic Quarter'] },
        { name: 'The Ritz-Carlton Riyadh', area: 'Al Hada District', routes: ['RUH Airport', 'King Fahd Road offices', 'Al Olaya'] },
        { name: 'Rosewood Riyadh', area: 'King Abdullah Financial District', routes: ['RUH Airport', 'Business district', 'Old Diriyah'] },
        { name: 'Mandarin Oriental Riyadh', area: 'King Abdullah Financial District', routes: ['RUH Airport', 'KAFD', 'Embassy District'] },
        { name: 'Hilton Riyadh Hotel', area: 'Olaya Street', routes: ['RUH Airport', 'Shopping districts', 'Conference centres'] },
        { name: 'Marriott Riyadh', area: 'Al Muroj', routes: ['RUH Airport', 'Business districts', 'Diplomatic Quarter'] },
    ];

    const transferTypes = [
        { title: 'RUH Airport → Hotel', desc: 'Meet-and-greet at King Khalid International Airport (RUH). Private transfer to any Riyadh hotel with name sign, flight tracking, and 90-minute free wait.', icon: MapPin },
        { title: 'Hotel → RUH Airport', desc: 'Departure transfer from any Riyadh hotel to RUH. Driver arrives 3 hours before international, 2 hours before domestic flights.', icon: Clock },
        { title: 'Hotel → Business District', desc: "Door-to-door transfers from major Riyadh hotels to KAFD, King Fahd Road, Olaya Street, and all business corridors. On-time, professional.", icon: Shield },
        { title: 'Hotel → Hotel Transfer', desc: 'Private vehicle between Riyadh hotels for relocating guests or delegations. Available for single trips or multi-day transfer contracts.', icon: Car },
        { title: 'Hotel City Tours', desc: 'Private driver from your hotel for Riyadh sightseeing — Diriyah, National Museum, Edge of the World, and Riyadh Season venues.', icon: Star },
        { title: 'Late Night Hotel Pickup', desc: 'Reliable hotel pickup for late-night flights, events, and early-morning departures. No surge pricing at any hour.', icon: Users },
    ];

    const features = [
        'Flight tracking for all airport pickups',
        'Name sign display at RUH arrivals',
        '90-min free waiting time (international)',
        'Ministry of Transport licensed drivers',
        'English and Arabic speaking',
        'GMC Yukon, Camry, Staria fleet',
        'Fixed rates — no surge pricing',
        '24/7 including late night & early morning',
        'Luggage assistance included',
        'Child seats available on request',
    ];

    const faqs = [
        {
            question: 'Is there a hotel pickup service in Riyadh?',
            answer: 'Yes. Taxi Service KSA provides private hotel pickup and transfer service across all major hotels in Riyadh. Services include airport-to-hotel, hotel-to-airport, hotel-to-business-district, and hotel sightseeing tours. All vehicles are private — no shared rides. Booking is done via WhatsApp 24–48 hours in advance.',
        },
        {
            question: 'What is the best way to get from Riyadh Airport (RUH) to my hotel?',
            answer: 'Pre-booking a private transfer is the most reliable option. Our driver meets you at the arrivals terminal with a name sign after your flight lands. Flight tracking means the driver adjusts for any delays. Free waiting time is 90 minutes for international flights and 60 minutes for domestic. Vehicles available include Toyota Camry (solo/couple) to GMC Yukon XL (families/groups).',
        },
        {
            question: 'Do you provide hotel transfers for the Four Seasons, Ritz-Carlton, and Rosewood Riyadh?',
            answer: 'Yes. We regularly serve guests of Riyadh\'s top five-star hotels including Four Seasons Kingdom Centre, The Ritz-Carlton Riyadh, Rosewood KAFD, Mandarin Oriental, Hilton Riyadh, and Marriott. Booking can be coordinated directly or via the hotel concierge team.',
        },
        {
            question: 'Is there a luxury hotel to airport transfer in Riyadh?',
            answer: 'Yes. Luxury hotel-to-RUH airport transfers are available with GMC Yukon XL or Cadillac Escalade for VIP guests. The driver arrives at your hotel at the required time, assists with luggage, and provides door-to-terminal service. Fixed rates with no surge pricing.',
        },
        {
            question: 'Can I book a late-night hotel transfer in Riyadh?',
            answer: 'Yes. Late-night and early-morning hotel transfers in Riyadh are available 24/7. Common late-night transfer needs include post-event returns, overnight flight departures, and early morning (2–5 AM) RUH airport runs. No additional charge for unsociable hours.',
        },
        {
            question: 'Is there hotel transport to the KAFD business district in Riyadh?',
            answer: 'Yes. Hotel-to-KAFD (King Abdullah Financial District) transfers are available from all major Riyadh hotels. This is popular for business travelers staying at King Fahd Road and Olaya hotels who have meetings in KAFD. Daily and multi-trip packages are available.',
        },
        {
            question: 'What vehicles are available for hotel transfers in Riyadh?',
            answer: 'Vehicle options include Toyota Camry (1–3 passengers, executive travel), GMC Yukon XL (4–7 passengers, families and groups), Hyundai Staria VIP (VIP families), and Cadillac Escalade (ultra-luxury). All vehicles are late-model, air-conditioned, and include a professional driver.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Riyadh Hotel Transfer Service',
        serviceType: 'Hotel Pickup & Transfer — Riyadh',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [{ '@type': 'City', name: 'Riyadh' }],
        description: 'Private hotel pickup and transfer service in Riyadh. Airport to hotel, hotel to airport, hotel to business district. Meet-and-greet, luxury fleet, 24/7.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="riyadh-hotel-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">Riyadh Hotel Transfer</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hotel Transfer Service<br /><span className="text-white/80">in Riyadh</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Private airport-to-hotel, hotel-to-business-district, and luxury hotel pickup service across Riyadh. Meet-and-greet, flight tracking, fixed rates — available 24/7.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Hotel Transfer — Quick Facts</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Airport:</strong> RUH (King Khalid International)</li>
                            <li><strong className="text-white">Wait Time:</strong> 90 min international, 60 min domestic</li>
                            <li><strong className="text-white">Availability:</strong> 24/7 including late night</li>
                            <li><strong className="text-white">Fleet:</strong> Camry, GMC Yukon, Escalade, Staria</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20hotel%20transfer%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Hotel Transfer <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transfer Services</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transferTypes.map((t, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><t.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hotels We Serve in Riyadh</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{h.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{h.area}</p>
                                <div className="space-y-1">
                                    {h.routes.map((r, j) => (
                                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />{r}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-500">Don't see your hotel? We cover <strong>all hotels</strong> in Riyadh. <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20hotel%20transfer%20in%20Riyadh" className="text-black font-bold hover:underline">Contact us →</Link></p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included</h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black">Toyota Camry (Solo/Couple)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon (Families)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">Cadillac Escalade (VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Riyadh Destinations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">Riyadh City Transport</Link></li>
                                <li><Link href="/locations/riyadh/diplomatic-quarter/" className="text-gray-600 hover:text-black">Diplomatic Quarter</Link></li>
                                <li><Link href="/routes/" className="text-gray-600 hover:text-black">All Riyadh Routes</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-black font-bold hover:underline">Airport Transfers →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">VIP Chauffeur Service</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver (Hourly)</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">Corporate Travel</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">Tourism Transport</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Riyadh Hotel Transfer Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Your Riyadh Hotel Transfer</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Airport arrivals, hotel to business district, city tours, or late-night returns — private vehicles with professional drivers available 24/7 across Riyadh.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20hotel%20transfer%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
