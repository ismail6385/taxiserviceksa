import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const PAGE_URL = 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want a private car from Dammam to Bahrain. Pickup address, Bahrain destination, date and time, passengers and luggage: ')}`;
// Owner confirmed 2026-10-23: sedan 450 SAR one way, causeway toll included.
const SEDAN_FARE = '450 SAR';

const TITLE = 'Dammam to Bahrain Private Car (2026) | Causeway Guide';
const DESCRIPTION = `Private car from Dammam to Bahrain over the King Fahd Causeway: sedan from ${SEDAN_FARE} one way with the causeway toll included, how the crossing works, documents and how to book on WhatsApp.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Dammam to Bahrain over the King Fahd Causeway' }],
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const faqs = [
    { q: 'How far is Dammam from Bahrain by car?', a: 'Roughly 70–95 km from central Dammam to Manama, depending on your exact pickup and destination, including the causeway itself.' },
    { q: 'How long does the drive take?', a: 'Around 1–1.5 hours of driving, plus the time at the two border posts, which varies with queues and the day. Allow more on weekends and holidays.' },
    { q: 'How much is a private car from Dammam to Bahrain?', a: `A sedan starts from ${SEDAN_FARE} one way for the whole car, with the causeway toll included. Larger vehicles, other pickup towns and other Bahrain destinations are quoted on your trip.` },
    { q: 'Is the causeway toll included?', a: 'Yes. The causeway toll for the car is included in our fare.' },
    { q: 'Can I take Uber or Careem from Dammam to Bahrain?', a: 'App rides are built for local trips, and international trips across the causeway are generally not offered. Check with the app if you want to try, but do not count on it; a pre-booked private car is the reliable option.' },
    { q: 'Do I need a visa for Bahrain?', a: 'It depends on your nationality and residency. Some travellers can get a visa on arrival or an e-visa, others must apply before travel. Check the official Bahrain eVisa and immigration guidance for your own situation.' },
    { q: 'Can I travel with my Saudi Iqama?', a: 'Saudi residents need a valid passport, a valid Iqama and an exit/re-entry visa to come back, plus whatever Bahrain requires for their nationality. Check both before you travel.' },
    { q: 'Can you pick me up at Dammam Airport and take me to Bahrain?', a: 'Yes. Send your flight number; we track the flight, wait 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.' },
    { q: 'Can you take me to Bahrain International Airport?', a: 'Yes. Because the border time varies, leave a generous margin before your flight.' },
    { q: 'Can I book the return from Bahrain to Dammam?', a: 'Yes. Send the return date and your Bahrain pickup address; it is quoted as its own trip, or with waiting if you want the driver to stay.' },
    { q: 'Does the driver deal with the border?', a: 'The driver handles the car’s side of the crossing and shows you where to go. Your own passport control and customs are done by you with the officials.' },
    { q: 'How far ahead should I book?', a: 'At least 24 hours ahead where you can, earlier for weekends, holidays or a larger vehicle. Pickups run 24 hours a day.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BlogPosting',
            '@id': `${PAGE_URL}#article`,
            headline: 'Dammam to Bahrain by Private Car: King Fahd Causeway Guide',
            description: DESCRIPTION,
            mainEntityOfPage: PAGE_URL,
            author: { '@type': 'Person', name: 'Muhammad Ismail' },
            publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            datePublished: '2026-06-27',
            dateModified: '2026-10-23',
            image: 'https://taxiserviceksa.com/og-image.jpg',
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://taxiserviceksa.com/blog/' },
                { '@type': 'ListItem', position: 3, name: 'Dammam to Bahrain by Private Car', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const link = 'font-semibold text-emerald-700 underline-offset-2 hover:underline';
const h2 = 'text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4';
const h3 = 'text-xl font-bold text-gray-900 mt-8 mb-2';

function Cta({ label = 'Get a quote on WhatsApp' }: { label?: string }) {
    return (
        <div className="my-8 rounded-2xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <p className="text-gray-800 font-semibold">Send your pickup, Bahrain destination, date, passengers and bags. We reply with the fare for your car.</p>
            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800 shrink-0">
                <WhatsAppIcon className="w-4 h-4 fill-current" /> {label}
            </a>
        </div>
    );
}

export default function DammamToBahrainPrivateCarPage() {
    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-gray-700 leading-relaxed text-[1.05rem]">
                <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog/" className="hover:underline">Blog</Link> / <span>Dammam to Bahrain</span>
                </nav>
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Dammam to Bahrain by Private Car: King Fahd Causeway Guide</h1>
                <p className="text-sm text-gray-500 mb-8">By Muhammad Ismail · Updated 23 October 2026</p>

                <p className="text-lg">
                    Dammam and Bahrain are close enough that many people cross for a day: a meeting in Manama, a weekend with family, shopping, or a flight from Bahrain International Airport. The road runs over the King Fahd Causeway, about 25 km of bridges and embankments across the Gulf, with a Saudi border post at one end and a Bahraini one at the other.
                </p>
                <p className="mt-4">
                    This guide explains how the trip works by private car: what it costs, what happens at the border, which documents you need, and how to book a car that picks you up at your door in Dammam and drops you at your address in Bahrain.
                </p>

                <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">At a glance</h2>
                    <ul className="space-y-2 text-[0.98rem]">
                        <li><strong>Distance:</strong> roughly 70–95 km, central Dammam to Manama</li>
                        <li><strong>Driving time:</strong> around 1–1.5 hours, plus border time</li>
                        <li><strong>Fare:</strong> sedan from {SEDAN_FARE} one way, per car, causeway toll included</li>
                        <li><strong>Pickups:</strong> Dammam, Al Khobar, Dhahran and Dammam Airport, 24 hours a day</li>
                        <li><strong>Booking:</strong> WhatsApp <a href="tel:+966575806733" className={link}>+966 57 580 6733</a></li>
                    </ul>
                </div>

                <Cta />

                <h2 className={h2}>Why go by private car?</h2>
                <p>
                    You could drive yourself, take a bus, or fly the short hop to Bahrain. A private car makes sense when you would rather not deal with any of that: the car collects you from your home, hotel or office, the driver handles the car&apos;s side of both border posts, and you are dropped at the exact address you are going to in Bahrain. Nobody else rides with you, and the fare is for the car rather than per person, so a family or a group of colleagues pays the same as one traveller.
                </p>
                <p className="mt-4">
                    It is particularly useful for business visitors with a meeting time to keep, families with children and bags, Saudi residents visiting relatives, and anyone heading to Bahrain International Airport with luggage.
                </p>

                <h2 className={h2}>How the crossing works</h2>
                <ol className="space-y-4 list-decimal pl-5">
                    <li><strong>Pickup.</strong> The driver collects you at the address you gave us in Dammam, Al Khobar or Dhahran, or at Dammam Airport. Have your passports with you in the cabin, not packed in a suitcase.</li>
                    <li><strong>Drive to the causeway.</strong> From central Dammam the causeway is under an hour away, less from Al Khobar.</li>
                    <li><strong>Saudi exit.</strong> At the Saudi post, passengers go through passport control and the car through its exit checks. The driver deals with the car&apos;s papers.</li>
                    <li><strong>Over the causeway.</strong> The road crosses the water to the island in the middle, where both countries&apos; posts sit.</li>
                    <li><strong>Bahrain entry.</strong> Passport control and, if you need one, the visa check for each passenger; customs for the car and luggage.</li>
                    <li><strong>On to your address.</strong> From the border to central Manama is roughly half an hour in normal traffic; other parts of Bahrain vary.</li>
                </ol>
                <p className="mt-4">
                    How long the two posts take is the one thing nobody can schedule. On a quiet weekday it can be quick; on Thursday evenings, weekends, public holidays and Eid the queues can be long in both directions. If you have a flight or a meeting with a fixed time, leave a generous margin rather than planning around the driving time alone. More on the crossing itself: <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className={link}>King Fahd Causeway border guide</Link>.
                </p>

                <h2 className={h2}>Dammam to Bahrain private car price</h2>
                <p>
                    A sedan such as a Toyota Camry from Dammam to Bahrain starts from <strong>{SEDAN_FARE} one way</strong>, for the whole car. That includes the driver, fuel and the causeway toll. Larger vehicles, pickups outside Dammam and destinations far from Manama are quoted on your trip, and the fare is agreed before you book.
                </p>
                <h3 className={h3}>What changes the price</h3>
                <ul className="space-y-2 list-disc pl-5">
                    <li><strong>The vehicle:</strong> a sedan, a family car or a full-size SUV.</li>
                    <li><strong>Where you start and finish:</strong> Al Khobar, Dammam Airport or a far corner of Bahrain differ from central Dammam to Manama.</li>
                    <li><strong>One way or return:</strong> a return days later is its own trip; a same-day return with the driver waiting is quoted with the waiting time.</li>
                    <li><strong>Extra stops or long waits</strong> not agreed at booking.</li>
                </ul>
                <p className="mt-4">
                    Not included: passenger visa fees and anything you buy on the way. If your plans change, tell us early and we tell you whether it affects the fare.
                </p>

                <Cta label="Ask for your fare" />

                <h2 className={h2}>Which vehicle?</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full min-w-[480px] text-left text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr><th scope="col" className="px-4 py-3">Vehicle</th><th scope="col" className="px-4 py-3">Good for</th><th scope="col" className="px-4 py-3">Luggage (approx.)</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                                ['Toyota Camry', 'Up to 3 adults, business trips, couples', 'About 2 large suitcases'],
                                ['Toyota Veloz', 'Families of up to 7 with moderate luggage', 'Less with every seat used'],
                                ['GMC Yukon XL', 'Up to 7 with more room and bags', 'About 5 large suitcases'],
                                ['Toyota Hiace', 'Groups of 8–11', 'Room for a group’s bags'],
                            ].map(([v, g, l]) => (
                                <tr key={v}><th scope="row" className="px-4 py-3 font-semibold text-gray-900">{v}</th><td className="px-4 py-3">{g}</td><td className="px-4 py-3">{l}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4">Seats and bags share the same space: a seven-seat car with every seat used has little room behind. Tell us the real number of people and suitcases and we suggest the right car.</p>

                <h2 className={h2}>Documents for the causeway</h2>
                <p>
                    Every passenger needs the documents that apply to them for leaving Saudi Arabia and entering Bahrain. That depends on nationality, residency and visa type, so check it for each traveller, children included, before you book.
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-5">
                    <li><strong>A valid passport</strong>, or a national ID card for GCC citizens where it is accepted.</li>
                    <li><strong>Saudi residents:</strong> a valid Iqama and an exit/re-entry visa so you can come back.</li>
                    <li><strong>A Bahrain visa</strong> if your nationality needs one. Some travellers can get one on arrival or online, others must apply in advance; check the official Bahrain eVisa site.</li>
                    <li><strong>Children:</strong> their own passports, and any consent letter required if they travel without both parents.</li>
                </ul>
                <p className="mt-4">
                    A car booking does not decide who may enter Bahrain; the immigration officers do. If anyone in your group is unsure of their eligibility, sort it out before setting off.
                </p>

                <h2 className={h2}>What about Uber or Careem?</h2>
                <p>
                    Ride-hailing apps work well for trips inside Dammam, but they are built for local journeys, and international trips over the causeway are generally not offered. Even if a driver accepts, the car may not be set up to cross. For a planned trip to Bahrain, a pre-booked car that is arranged for the crossing is the dependable choice. We have written more about this in <Link href="/blog/is-there-uber-in-dammam/" className={link}>Is there Uber in Dammam?</Link>
                </p>

                <h2 className={h2}>From Dammam Airport to Bahrain</h2>
                <p>
                    Landing at King Fahd International Airport and going straight to Bahrain is a common booking. Send your flight number when you book: we track the flight, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. If you are heading for a flight from Bahrain International Airport instead, give us the departure time and leave a wide margin for the border. <Link href="/routes/dammam-airport-to-bahrain-airport-taxi/" className={link}>Dammam Airport to Bahrain Airport</Link>.
                </p>

                <h2 className={h2}>Coming back: Bahrain to Dammam</h2>
                <p>
                    You can book the return with the outward trip. Send the date, your Bahrain pickup address and the time. A return on another day is quoted as its own trip; if you want the driver to wait in Bahrain and bring you back the same day, the waiting is quoted up front. The border posts work the same way in reverse. <Link href="/routes/bahrain-dammam/" className={link}>Bahrain to Dammam</Link>.
                </p>

                <h2 className={h2}>How to book</h2>
                <ol className="space-y-2 list-decimal pl-5">
                    <li>Send a WhatsApp message to <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={link}>+966 57 580 6733</a> with your date and time.</li>
                    <li>Add your pickup address and your destination in Bahrain.</li>
                    <li>Tell us how many adults, children and suitcases.</li>
                    <li>We confirm the car and the fare; once you accept, the booking is final and you get the driver&apos;s details before the trip.</li>
                </ol>
                <p className="mt-4">Book at least 24 hours ahead where you can, and earlier for weekends and holidays. Pickups run around the clock.</p>

                <Cta label="Book on WhatsApp" />

                <h2 className={h2}>Frequently asked questions</h2>
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {faqs.map((f) => (
                        <details key={f.q} className="group py-4">
                            <summary className="cursor-pointer list-none font-semibold text-gray-900 flex justify-between gap-4">{f.q}<span className="text-gray-400 group-open:rotate-45 transition-transform">+</span></summary>
                            <p className="mt-2 text-gray-600">{f.a}</p>
                        </details>
                    ))}
                </div>

                <h2 className={h2}>Related pages</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                        ['Dammam to Bahrain private transfer', '/routes/dammam-bahrain/'],
                        ['Taxi service in Dammam', '/locations/dammam/'],
                        ['Dammam Airport transfers', '/dammam-airport-taxi/'],
                        ['King Fahd Causeway border guide', '/border-crossings/taxi-king-fahd-causeway-border-crossing/'],
                        ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ['Private driver and chauffeur service', '/services/private-driver/'],
                    ].map(([l, h]) => (
                        <li key={h}><Link href={h} className="block rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-900 hover:border-emerald-600">{l}</Link></li>
                    ))}
                </ul>

                <div className="mt-12">
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} />
                </div>
            </article>
        </div>
    );
}
