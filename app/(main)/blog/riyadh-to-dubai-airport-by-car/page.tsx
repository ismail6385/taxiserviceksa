import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/riyadh-to-dubai-airport-by-car/';
const TITLE = 'Riyadh to Dubai Airport by Car: Planning Around Your Flight';
const DESCRIPTION = 'Catching a flight from Dubai (DXB) after a Riyadh cancellation? When to leave Riyadh, the Al Batha border, what to carry and private car fares from 3,500 SAR.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Riyadh to Dubai Airport by car' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'How long does it take from Riyadh to Dubai Airport by car?', a: 'Roughly 9–10 hours of driving for about 990–1,000 km, plus the Al Batha / Al Ghuwaifat border and stops. Plan for 10–12 hours or more door to terminal.' },
    { q: 'When should I leave Riyadh for a morning flight from Dubai?', a: 'Usually the evening before. Work back from departure: airline check-in time, plus 10–12 hours on the road, plus a margin.' },
    { q: 'How much is a private car from Riyadh to Dubai Airport?', a: 'Sedan 3,500 SAR, Toyota Fortuner 3,800 SAR, GMC Yukon/Tahoe 4,500 SAR, one way per vehicle.' },
    { q: 'Can you drop me at Al Maktoum (DWC) instead of DXB?', a: 'Yes, if that is where your flight leaves from. Tell us the airport when you book; DWC is south of Dubai, so the timing is slightly different.' },
    { q: 'Is Abu Dhabi airport closer?', a: 'Yes. Zayed International Airport in Abu Dhabi is on the way and roughly 1–2 hours closer by road. Check whether your airline can fly you from there.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="riyadh-to-dubai-airport-by-car"
            eyebrow="Saudi Arabia → UAE · Airport transfer"
            lead="If your Riyadh flight has been cancelled and the airline has moved you to Dubai, this is how to plan the drive so you reach the terminal on time."
            facts={[['Distance', '≈ 990–1,000 km'], ['Driving', '≈ 9–10 hours'], ['Border', 'Al Batha / Al Ghuwaifat'], ['From', '3,500 SAR']]}
            faqs={faqs}
        >
            <h2>The short version</h2>
            <p>
                Dubai International Airport (DXB) is about 990–1,000 km from Riyadh by road. Driving takes around 9–10 hours, the border adds more, and with stops most journeys take 10–12 hours or longer. For a morning flight, leave Riyadh the evening before; for an evening flight, leave early in the morning.
            </p>
            <p>
                For the general picture of road travel between the two cities, including vehicles and what the drive is like, our earlier guide <Link href="/blog/car-with-driver-riyadh-to-dubai/">Car with driver from Riyadh to Dubai</Link> covers it. This article is about one thing: getting to a flight.
            </p>

            <h2>Work back from your departure time</h2>
            <p>Take your flight time and subtract, in this order:</p>
            <ol>
                <li><strong>The airline&apos;s check-in time.</strong> Often around 3 hours for international flights, but check your airline.</li>
                <li><strong>City traffic in Dubai.</strong> The last stretch to the airport can be slow at peak hours.</li>
                <li><strong>The border.</strong> Al Batha and Al Ghuwaifat together can be quick or slow; allow a real margin.</li>
                <li><strong>Driving and stops.</strong> About 9–10 hours of driving, plus food and prayer stops.</li>
            </ol>
            <p>
                <strong>Example:</strong> for a 10:00 flight from DXB, aim to reach the airport around 07:00. Allowing 12–13 hours for the trip, that means leaving Riyadh at about 18:00 the evening before.
            </p>

            <h2>The route</h2>
            <p>
                From Riyadh the road runs south-east through Al Kharj and Haradh, then east across the desert to the Al Batha border. In the UAE, the coast road passes through Abu Dhabi emirate before reaching Dubai. The exact route depends on road conditions and on where in Riyadh you start.
            </p>

            <h2>At the border</h2>
            <p>
                You leave Saudi Arabia at Al Batha and enter the UAE at Al Ghuwaifat. Each passenger goes through immigration in person. The driver handles the vehicle side, including the papers and the UAE insurance the car needs. Keep passports and residency cards in the cabin so you are not unloading suitcases at the checkpoint. The <Link href="/border-crossings/taxi-al-batha-border-crossing/">Al Batha border crossing page</Link> has more on the crossing.
            </p>
            <p>Every passenger needs permission to enter the UAE; see our <Link href="/blog/saudi-to-uae-qatar-by-road-documents/">documents guide</Link>.</p>

            <h2>Which Dubai airport?</h2>
            <p>
                Most flights leave from Dubai International (DXB). Some airlines use Al Maktoum International (DWC) at Dubai World Central, south of the city. Check your ticket. If you are flexible, Zayed International Airport in Abu Dhabi is on the way and saves time on the road; our <Link href="/blog/riyadh-to-abu-dhabi-by-road-guide/">Riyadh to Abu Dhabi guide</Link> covers that option.
            </p>

            <h2>What it costs</h2>
            <p>
                A private car from Riyadh to Dubai Airport is <strong>3,500 SAR</strong> for a sedan, <strong>3,800 SAR</strong> for a Toyota Fortuner and <strong>4,500 SAR</strong> for a GMC Yukon/Tahoe, one way per vehicle. A family or group travelling together pays one price for the car. See the <Link href="/routes/riyadh-dubai/">Riyadh to Dubai taxi page</Link> for what is included and to book.
            </p>

            <h2>If the airline changes your flight again</h2>
            <p>
                Schedules are moving at the moment. If your new flight changes before the trip starts, message us straight away and we can move the pickup or change the destination airport, subject to availability and the fare for the new route.
            </p>
        </ClusterArticle>
    );
}
