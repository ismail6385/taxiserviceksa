import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/riyadh-to-abu-dhabi-by-road-guide/';
const TITLE = 'Riyadh to Abu Dhabi by Road: Border, Route and Cost (2026)';
const DESCRIPTION = 'Driving from Riyadh to Abu Dhabi: about 850–900 km via Al Batha / Al Ghuwaifat. Journey time, Zayed International Airport drop-off, documents and private car fares.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Riyadh to Abu Dhabi by road' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'How far is Abu Dhabi from Riyadh by road?', a: 'About 850–900 km, depending on your pickup in Riyadh and where in Abu Dhabi you are going.' },
    { q: 'How long is the drive from Riyadh to Abu Dhabi?', a: 'Around 8–9 hours of driving, plus the Al Batha / Al Ghuwaifat border and stops. Allow 10–11 hours or more in total.' },
    { q: 'How much is a private car from Riyadh to Abu Dhabi?', a: 'Sedan 3,500 SAR, Toyota Fortuner 3,800 SAR, GMC Yukon/Tahoe 4,500 SAR, one way per vehicle.' },
    { q: 'What is the airport in Abu Dhabi called now?', a: 'Zayed International Airport (AUH), formerly Abu Dhabi International Airport.' },
    { q: 'Is Abu Dhabi on the way to Dubai?', a: 'Yes. The road from the Saudi border reaches Abu Dhabi first; Dubai is roughly another 140 km along the coast.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="riyadh-to-abu-dhabi-by-road-guide"
            eyebrow="Saudi Arabia → UAE"
            lead="Abu Dhabi is the first major UAE city you reach driving from Riyadh, and its airport is a strong alternative when Riyadh flights are cancelled. Here is what the trip involves."
            facts={[['Distance', '≈ 850–900 km'], ['Driving', '≈ 8–9 hours'], ['Border', 'Al Batha / Al Ghuwaifat'], ['From', '3,500 SAR']]}
            faqs={faqs}
        >
            <h2>Why Abu Dhabi</h2>
            <p>
                When flights from Riyadh are disrupted, travellers heading to the UAE often think of Dubai first. Abu Dhabi is worth a look: it is on the same road, it comes up an hour or two sooner, and Zayed International Airport (AUH), the home of Etihad, has a wide network of onward flights. If you are also weighing Doha or Dubai, our <Link href="/blog/riyadh-flights-cancelled-travel-by-road/">overview of the road options</Link> compares them.
            </p>

            <h2>The route</h2>
            <p>
                The drive leaves Riyadh to the south-east through Al Kharj and Haradh, then crosses the eastern desert to Al Batha, the Saudi border post. After Al Ghuwaifat on the UAE side, the road follows the coast east through the Al Dhafra region and into Abu Dhabi. The route can vary with road conditions and your exact pickup and drop-off.
            </p>

            <h2>Journey time</h2>
            <p>
                Expect around 8–9 hours of driving for about 850–900 km. The border crossing adds time that changes from day to day, and on a drive this long you will want at least one or two stops. Most passengers should allow 10–11 hours or more door to door. We cannot guarantee an arrival time.
            </p>

            <h2>Crossing at Al Batha and Al Ghuwaifat</h2>
            <p>
                It is the same crossing used for Dubai. At Al Batha, passengers clear Saudi exit and the vehicle&apos;s papers are checked; at Al Ghuwaifat, passengers clear UAE immigration and the car goes through entry and insurance checks. The driver takes care of the vehicle side; each passenger handles their own passport and entry permission. Read more on the <Link href="/border-crossings/taxi-al-batha-border-crossing/">Al Batha border crossing page</Link>, and check the <Link href="/blog/saudi-to-uae-qatar-by-road-documents/">documents guide</Link> before you go.
            </p>

            <h2>Dropping off at Zayed International Airport</h2>
            <p>
                The car can take you straight to the departures area at AUH. Send your flight number and departure time when booking, and we will suggest a pickup time in Riyadh that leaves room for the border, stops and check-in. For a morning flight, that usually means leaving the evening before.
            </p>

            <h2>Abu Dhabi or Dubai?</h2>
            <ul>
                <li><strong>Abu Dhabi (AUH):</strong> shorter drive, Etihad&apos;s hub, a good choice if your airline flies from there.</li>
                <li><strong>Dubai (DXB):</strong> the largest choice of flights and airlines, but roughly another 140 km. See <Link href="/blog/riyadh-to-dubai-airport-by-car/">Riyadh to Dubai Airport by car</Link>.</li>
            </ul>

            <h2>What it costs</h2>
            <p>
                A private car from Riyadh to Abu Dhabi is <strong>3,500 SAR</strong> for a sedan, <strong>3,800 SAR</strong> for a Toyota Fortuner and <strong>4,500 SAR</strong> for a GMC Yukon/Tahoe, one way per vehicle, the same as Riyadh to Dubai. Booking and details are on the <Link href="/routes/riyadh-abu-dhabi/">Riyadh to Abu Dhabi taxi page</Link>. Heading home afterwards? See <Link href="/routes/abu-dhabi-riyadh/">Abu Dhabi to Riyadh</Link>.
            </p>
        </ClusterArticle>
    );
}
