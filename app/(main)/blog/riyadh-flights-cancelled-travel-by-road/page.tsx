import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/riyadh-flights-cancelled-travel-by-road/';
const TITLE = 'Riyadh Flights Cancelled? How to Reach Dubai, Doha or Abu Dhabi by Road';
const DESCRIPTION = 'Flights from Riyadh cancelled or delayed? How to get to Dubai, Doha or Abu Dhabi by road instead: distances, driving times, borders, documents and private car fares.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Driving from Riyadh to Gulf airports' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'Can I drive from Riyadh to Dubai if my flight is cancelled?', a: 'Yes. Dubai is about 990–1,000 km by road via the Al Batha / Al Ghuwaifat border, roughly 9–10 hours of driving plus border time. Every passenger needs permission to enter the UAE.' },
    { q: 'Which is closer to Riyadh: Doha, Abu Dhabi or Dubai?', a: 'Doha, at about 600 km. Abu Dhabi is about 850–900 km and Dubai about 990–1,000 km.' },
    { q: 'How much does a private car from Riyadh to Doha, Dubai or Abu Dhabi cost?', a: 'With us: Doha 3,000 SAR (GMC SUV). Dubai and Abu Dhabi: Sedan 3,500 SAR, Toyota Fortuner 3,800 SAR, GMC Yukon/Tahoe 4,500 SAR. Prices are one way, per vehicle.' },
    { q: 'Is it better to fly from Dammam instead?', a: 'Dammam is the closest airport, about 4 hours away, and needs no visa. It only helps if your airline is operating from Dammam, since some carriers have paused Dammam flights as well.' },
    { q: 'How early should I leave Riyadh?', a: 'Add the driving time, a margin for the border, at least one stop and your airline’s check-in time, then work back from departure. For Dubai or Abu Dhabi that often means leaving the night before a morning flight.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="riyadh-flights-cancelled-travel-by-road"
            eyebrow="Road travel guide · October 2026"
            lead="With flights at Riyadh's King Khalid International Airport disrupted, many travellers are driving to another Gulf airport or straight to their destination. Here is how the main options compare."
            facts={[['Doha', '≈ 600 km'], ['Abu Dhabi', '≈ 850–900 km'], ['Dubai', '≈ 990–1,000 km'], ['Dammam (DMM)', '≈ 400 km']]}
            faqs={faqs}
        >
            <h2>What is happening with Riyadh flights</h2>
            <p>
                In early October 2026, flights at King Khalid International Airport (RUH) were suspended for periods after attacks on Saudi Arabia, and many departures were delayed or cancelled, as reported by <a href="https://www.thenationalnews.com/travel/2026/10/08/riyadh-airport-flights-delayed-and-cancelled-after-houthi-attacks-on-saudi-arabia/" target="_blank" rel="noopener noreferrer">The National</a>. Several foreign airlines have paused Riyadh services for a period. The airport has not shut permanently, and the picture changes from day to day.
            </p>
            <p>
                If your flight has been cancelled, or you would rather not wait for the schedule to settle, the road is a realistic alternative. Doha, Abu Dhabi and Dubai can all be reached by car from Riyadh in a single day, and each has a large international airport with onward connections.
            </p>

            <h2>Your options at a glance</h2>
            <div className="not-prose overflow-x-auto rounded-xl border border-black/10 my-6">
                <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-[#0f1f2e] text-white">
                        <tr><th scope="col" className="px-4 py-3">From Riyadh to</th><th scope="col" className="px-4 py-3">Distance</th><th scope="col" className="px-4 py-3">Driving</th><th scope="col" className="px-4 py-3">Border</th><th scope="col" className="px-4 py-3">Our fare</th></tr>
                    </thead>
                    <tbody className="divide-y divide-black/10">
                        {[
                            ['Doha (DOH)', '≈ 600 km', '6–8 h', 'Salwa / Abu Samra', 'GMC 3,000 SAR'],
                            ['Abu Dhabi (AUH)', '≈ 850–900 km', '8–9 h', 'Al Batha / Al Ghuwaifat', 'From 3,500 SAR'],
                            ['Dubai (DXB)', '≈ 990–1,000 km', '9–10 h', 'Al Batha / Al Ghuwaifat', 'From 3,500 SAR'],
                            ['Dammam (DMM)', '≈ 400 km', '≈ 4 h', 'None', 'From 1,000 SAR'],
                            ['Bahrain (BAH)', '≈ 430–480 km', '4–5 h', 'King Fahd Causeway', 'SUV 2,000 SAR'],
                        ].map(([a, b, c, d, e]) => (
                            <tr key={a}><th scope="row" className="px-4 py-3 font-bold text-[#0f1f2e]">{a}</th><td className="px-4 py-3">{b}</td><td className="px-4 py-3">{c}</td><td className="px-4 py-3">{d}</td><td className="px-4 py-3 font-semibold">{e}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p>Driving times exclude border processing and stops. Fares are one way, per vehicle, from a Riyadh address.</p>

            <h2>Doha: the shortest international drive</h2>
            <p>
                At around 600 km, Doha is the closest of the three Gulf capitals. You cross from Saudi Arabia at Salwa into Qatar at Abu Samra, then continue to Doha and Hamad International Airport. For many travellers it is the quickest way to get onto an international flight when Riyadh is disrupted. Read the full <Link href="/blog/riyadh-to-doha-by-road-guide/">Riyadh to Doha by road guide</Link>.
            </p>

            <h2>Abu Dhabi and Dubai: one border, a longer day</h2>
            <p>
                Abu Dhabi and Dubai share the same border, Al Batha on the Saudi side and Al Ghuwaifat on the UAE side, in the far east of the Kingdom. Abu Dhabi comes first, at about 850–900 km; Dubai is roughly another 140 km along the coast. Both are a full day on the road, so for a morning flight most people leave Riyadh the evening before. See <Link href="/blog/riyadh-to-abu-dhabi-by-road-guide/">Riyadh to Abu Dhabi by road</Link> and <Link href="/blog/riyadh-to-dubai-airport-by-car/">Riyadh to Dubai Airport by car</Link>.
            </p>

            <h2>Before you cross a border: documents</h2>
            <p>
                Driving into Qatar or the UAE is an international crossing, not a domestic trip. Every passenger needs a valid passport and permission to enter that country, and residents of Saudi Arabia also need a valid Iqama and an exit/re-entry visa if they plan to return. Requirements depend on nationality and residency, so check yours before you set off. Our <Link href="/blog/saudi-to-uae-qatar-by-road-documents/">documents guide</Link> goes through the checklist.
            </p>

            <h2>Staying inside Saudi Arabia instead</h2>
            <p>
                If crossing a border is not possible for everyone in your group, look at Dammam (about 4 hours) or Jeddah (a full day&apos;s drive). Neither needs a visa. Our <Link href="/riyadh-alternative-airports/">airport comparison page</Link> sets out all five airports side by side, with fares and links to each route.
            </p>

            <h2>Planning the drive around a flight</h2>
            <ul>
                <li><strong>Confirm the flight first.</strong> Make sure your new flight is operating before you leave Riyadh.</li>
                <li><strong>Work back from departure.</strong> Driving time, plus a margin for the border, plus stops, plus the airline&apos;s check-in time.</li>
                <li><strong>Keep documents in the cabin.</strong> Passports and residency cards should be in a bag with you, not in the boot.</li>
                <li><strong>Tell the driver your flight time.</strong> If the airline changes it, let us know straight away so the pickup can move.</li>
            </ul>

            <h2>Why a private car rather than a bus</h2>
            <p>
                Where scheduled coaches run, they leave on their own timetable and with luggage limits. A private car leaves from your door when you need it to, takes the whole family and its bags in one vehicle, and goes straight to the terminal. On cross-border routes the driver also handles the vehicle&apos;s side of the crossing, while each passenger goes through immigration themselves.
            </p>
            <p>
                Fares and vehicles for each route: <Link href="/routes/riyadh-doha/">Riyadh to Doha</Link>, <Link href="/routes/riyadh-abu-dhabi/">Riyadh to Abu Dhabi</Link>, <Link href="/routes/riyadh-dubai/">Riyadh to Dubai</Link>, <Link href="/routes/riyadh-to-dammam-airport/">Riyadh to Dammam Airport</Link> and <Link href="/routes/riyadh-bahrain/">Riyadh to Bahrain</Link>.
            </p>
        </ClusterArticle>
    );
}
