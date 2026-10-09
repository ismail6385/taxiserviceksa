import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/riyadh-to-doha-by-road-guide/';
const TITLE = 'Riyadh to Doha by Road: Salwa Border, Time and Cost (2026)';
const DESCRIPTION = 'Driving from Riyadh to Doha: about 600 km via the Salwa / Abu Samra border. Route, journey time, documents and what a private GMC transfer costs.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Riyadh to Doha by road' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'How far is Riyadh from Doha by road?', a: 'About 600 km, depending on where in Riyadh you start and where in Doha you are going.' },
    { q: 'How long does Riyadh to Doha take by car?', a: 'Around 6–8 hours of driving, plus the border at Salwa / Abu Samra and any stops.' },
    { q: 'Which border do you cross from Riyadh to Qatar?', a: 'You leave Saudi Arabia at Salwa and enter Qatar at Abu Samra. It is the only land border between the two countries.' },
    { q: 'How much is a private car from Riyadh to Doha?', a: 'We run this route with a private GMC Yukon / Denali at 3,000 SAR one way, for up to 6–7 passengers.' },
    { q: 'Can you drop me at Hamad International Airport?', a: 'Yes. Drop-off at Hamad International Airport (DOH) can be booked; send your flight time so the pickup leaves enough margin for the border.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="riyadh-to-doha-by-road-guide"
            eyebrow="Saudi Arabia → Qatar"
            lead="Doha is the closest Gulf capital to Riyadh by road. This guide covers the route, the Salwa border, how long it takes, what you need to carry, and what a private car costs."
            facts={[['Distance', '≈ 600 km'], ['Driving', '≈ 6–8 hours'], ['Border', 'Salwa / Abu Samra'], ['Private GMC', '3,000 SAR']]}
            faqs={faqs}
        >
            <h2>Why travellers are driving to Doha</h2>
            <p>
                With flights from Riyadh disrupted in October 2026, Doha has become one of the most practical ways to reach an international airport. Hamad International Airport (DOH) is a large hub with connections across Asia, Europe and Africa, and the drive from Riyadh is short enough to do in a working day. If you are still deciding where to fly from, start with our <Link href="/blog/riyadh-flights-cancelled-travel-by-road/">overview of road options from Riyadh</Link>.
            </p>

            <h2>The route</h2>
            <p>
                The road heads east out of Riyadh across the central desert towards the Al Ahsa region, then south-east to Salwa, the Saudi border town at the base of the Qatar peninsula. After Saudi exit formalities you cross to Abu Samra, Qatar&apos;s border post, and continue north-east to Doha. Most of the drive is on main highways with fuel stations and places to stop along the way.
            </p>
            <p>The exact route can vary with road conditions and with your pickup and drop-off points.</p>

            <h2>How long it really takes</h2>
            <p>
                Driving is around 6–8 hours. The border adds a variable amount on top: sometimes it is quick, sometimes there are queues, especially at weekends and during holidays. Add at least one stop for food and prayer. Nobody can promise an exact arrival time, so if you have a flight from Doha, leave a generous margin.
            </p>

            <h2>At the border: Salwa and Abu Samra</h2>
            <p>
                There are two checkpoints. On the Saudi side at Salwa, passengers go through exit and passport control, and the vehicle&apos;s papers are checked. On the Qatar side at Abu Samra, passengers go through immigration and the vehicle goes through entry and insurance checks.
            </p>
            <p>
                A driver who does this route regularly handles the vehicle side: the registration, the exit paperwork and the insurance the car needs in Qatar. Each passenger is responsible for their own passport, visa and immigration status. The driver cannot speed up immigration. For more on the crossing itself, see our <Link href="/border-crossings/taxi-salwa-border-crossing/">Salwa border crossing</Link> and <Link href="/border-crossings/taxi-abu-samra-border-crossing/">Abu Samra border crossing</Link> pages.
            </p>

            <h2>Documents to carry</h2>
            <ul>
                <li>A valid passport for every passenger (GCC citizens may be able to use their national ID).</li>
                <li>Permission to enter Qatar, where your nationality or residency requires it.</li>
                <li>For Saudi residents: a valid Iqama and an exit/re-entry visa if you plan to come back.</li>
            </ul>
            <p>Requirements change and depend on nationality. Our <Link href="/blog/saudi-to-uae-qatar-by-road-documents/">documents guide</Link> explains what to check and where.</p>

            <h2>What it costs</h2>
            <p>
                We run Riyadh to Doha with a private GMC Yukon / Denali SUV at <strong>3,000 SAR one way</strong>, for up to 6–7 passengers with room for about 5 large suitcases. The price is for the whole vehicle, not per person. Fuel, tolls and the car&apos;s Qatar insurance are included. Details and booking are on the <Link href="/routes/riyadh-doha/">Riyadh to Doha taxi page</Link>.
            </p>

            <h2>Dropping off at Hamad International Airport</h2>
            <p>
                If you are flying out of Doha, the car can take you straight to the departures area at DOH. Send your flight number and departure time when you book and we will suggest when to leave Riyadh, allowing for the border, a stop and the airline&apos;s check-in time.
            </p>

            <h2>Coming back</h2>
            <p>
                The return trip works the same way in reverse, at the same fare. If you land in Doha and need to reach Riyadh, see <Link href="/routes/doha-riyadh/">Doha to Riyadh</Link>.
            </p>
        </ClusterArticle>
    );
}
