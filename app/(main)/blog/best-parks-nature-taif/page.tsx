import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Parks & Nature Attractions in Taif: Top Green Spots",
  description:
    "Discover the best parks and nature attractions in Taif, Saudi Arabia. Explore Al Rudaf Park, Saiysad National Park, King Fahd Park, Al Hada, and Al Shafa in 2026.",
  keywords: [
    "best parks in Taif",
    "nature attractions Taif",
    "Saiysad National Park Taif",
    "Al Rudaf Park Taif",
    "King Fahd Park Taif",
    "Taif mountains",
    "green spaces Taif",
  ],
  openGraph: {
    title: "Best Parks & Nature Attractions in Taif: Top Green Spots",
    description:
      "A local guide to the most beautiful parks, nature reserves, and green valleys in the high-altitude city of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/best-parks-nature-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/best-parks-nature-taif/",
  },
};

export default function BestParksNatureTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#132a13] via-[#31572c] to-[#4f772d] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Nature Guide · Parks · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Best Parks & Nature Attractions in Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Escape to Saudi Arabia's summer capital. Discover the most beautiful public gardens, wild national parks, and dramatic mountain peaks in Taif.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Taif: Saudi Arabia's Green Retreat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Perched in the Sarawat Mountains at an elevation of 1,879 meters, Taif has earned its reputation as the summer capital of Saudi Arabia. While cities like Riyadh and Jeddah experience intense summer heat, Taif offers refreshing mountain air and a series of spectacular public parks, forest reserves, and agricultural valleys.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are seeking a manicured lawn with playgrounds for family picnics or wild rocky valleys with natural streams, Taif has the perfect spot.
          </p>
        </section>

        {/* Top 5 Parks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Parks & Nature Reserves in Taif</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Rudaf Park (Ar Ruddaf)",
                type: "Manicured Family Park",
                desc: "Famous for its massive granite boulders integrated into lawns, floral walkways, children's play areas, and a massive dancing musical fountain show that plays every evening. Entirely free entry.",
                icon: "⛲",
              },
              {
                name: "Saiysad National Park",
                type: "Wild Nature Reserve",
                desc: "A sprawling national park situated northeast of Taif. It features dense wild juniper forests, rocky mountain backdrops, and seasonal streams and valleys. Excellent for hiking and rugged off-road drives.",
                icon: "🌲",
              },
              {
                name: "King Fahd Park",
                type: "Large Recreation Area",
                desc: "One of the oldest and largest parks in the city, boasting large artificial lakes, winding walking trails, children's play areas, and numerous dining and café kiosks.",
                icon: "🌳",
              },
              {
                name: "Al Shafa Mountain Village",
                type: "High-Altitude Peaks",
                desc: "At 2,200 meters above sea level, Al Shafa is the highest inhabited area in Taif. It offers steep cliff-edge viewpoints overlooking the plains, traditional rose farms, and rustic mountain hiking trails.",
                icon: "⛰️",
              },
              {
                name: "Al Hada Mountain Slopes",
                type: "Scenic Escarpment & Cable Car",
                desc: "Famous for its spectacular winding highway, mountain resorts, and the Al Hada Cable Car that descends over 300 meters into a dramatic mountain gorge.",
                icon: "🚡",
              },
            ].map((park, i) => (
              <div key={i} className="flex gap-4 bg-green-50/40 border border-green-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{park.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{park.name}</h3>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    {park.type}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{park.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding the Right Spot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Attraction</th>
                  <th className="text-left p-3">Best For</th>
                  <th className="text-left p-3">Facilities</th>
                  <th className="text-left p-3 rounded-tr-lg">Crowd Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Al Rudaf Park", "Families, Evening Walks, Shows", "Excellent (Cafes, Toilets)", "High"],
                  ["Saiysad National Park", "Hiking, Wilderness, Streams", "Basic (Picnic areas)", "Low to Moderate"],
                  ["King Fahd Park", "Leisurely Picnics, Lake views", "Good (Kiosks, Seating)", "Moderate"],
                  ["Al Shafa", "Escarpment Views, Rose farms", "Moderate (Local shops)", "Moderate"],
                  ["Al Hada", "Cable car, Theme parks", "Excellent (Resorts)", "High"],
                ].map(([name, best, fac, crowd], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-green-700 font-semibold border-b border-gray-100">{best}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-100">{fac}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{crowd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Touring Taif's Nature</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Bring warm clothing — temperatures drop significantly after sunset, particularly in Al Shafa and Al Hada.",
              "If visiting Saiysad National Park, carry your own trash bags, food, and water, as commercial shops inside the reserve are limited.",
              "During summer weekends, roads leading to Al Hada and Al Shafa can experience delays due to heavy holiday traffic.",
              "Book a reliable taxi service with an experienced driver to navigate the mountain climbs and winding roads safely.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#31572c] to-[#4f772d] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Explore Taif's Parks with Ease</h2>
          <p className="text-green-100 mb-6">
            Hire a private driver for a full-day tour to see Al Rudaf, Saiysad, and the mountain overlooks without any transport hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Private Taxi
            </Link>
            <Link href="/routes/taif" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition">
              View Taif Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
