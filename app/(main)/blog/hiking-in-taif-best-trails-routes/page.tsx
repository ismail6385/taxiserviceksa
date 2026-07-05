import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiking in Taif: Best Trails & Walking Routes 2026",
  description:
    "Explore the best hiking trails and walking routes in Taif, Saudi Arabia. Detailed guide to Al Shafa peak trails, Al Hada routes, Saiysad wilderness hikes, and safety tips for 2026.",
  keywords: [
    "hiking in Taif",
    "best hiking trails Taif",
    "Al Shafa hiking",
    "Al Hada walking routes",
    "Saiysad National Park hiking",
    "mountain hiking Saudi Arabia",
    "outdoor activities Taif",
  ],
  openGraph: {
    title: "Hiking in Taif: Best Trails & Walking Routes 2026",
    description:
      "A complete guide to mountain hiking and walking trails in the high-altitude resort of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/hiking-in-taif-best-trails-routes/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/hiking-in-taif-best-trails-routes/",
  },
};

export default function HikingInTaifBestTrailsRoutes() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#122e1b] via-[#244f31] to-[#3a754b] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Outdoor Guide · Hiking · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Hiking in Taif: Best Trails & Walking Routes
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover the rugged beauty of the Sarawat Mountains. Your complete guide to peak climbs, wild canyon tracks, and valley walks.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Summary */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            🥾 Hiking at Altitude
          </h2>
          <p className="text-green-700 leading-relaxed text-sm">
            Taif sits at an average altitude of 1,879 meters, with peaks extending over 2,200 meters. The cooler climate makes it the most pleasant hiking location in western Saudi Arabia, especially during summer months when lower cities are too hot.
          </p>
        </div>

        {/* Top Trails */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Hiking Trails in Taif</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Shafa Peak Trail (Jabal Dakkah)",
                difficulty: "Moderate to Hard",
                distance: "5.5 km (Round trip)",
                desc: "Climb through ancient juniper forests up to the slopes of Dakkah Mountain. Offers breathtaking cliff-edge views looking down into the Tihama coastal plains. Best hiked in the early morning to capture mist rising between the peaks.",
                icon: "⛰️",
              },
              {
                name: "Saiysad National Park Valley Hikes",
                difficulty: "Easy to Moderate",
                distance: "Varies (2 - 8 km trails)",
                desc: "Hike along dry riverbeds (wadis) that fill with water during rain events. The paths wind past wild vegetation, natural springs, and historic stone dams. A great option for families seeking a less steep trek.",
                icon: "🌲",
              },
              {
                name: "Al Hada Old Camel Trail",
                difficulty: "Hard (Steep descent)",
                distance: "6.0 km (One-way)",
                desc: "A historic stone path historically used by camel caravans climbing from Makkah to Taif. The trail descends steeply alongside the modern Al Hada Cable Car route, featuring ancient stone masonry and sheer rocky drops.",
                icon: "🐪",
              },
            ].map((trail, i) => (
              <div key={i} className="bg-green-50/40 border border-green-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-2">{trail.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{trail.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {trail.difficulty}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {trail.distance}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{trail.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trail Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trail Comparison at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Trail</th>
                  <th className="text-left p-3">Elevation Gain</th>
                  <th className="text-left p-3">Best Season</th>
                  <th className="text-left p-3 rounded-tr-lg">Family Friendly?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Al Shafa Peak Trail", "350 meters", "Year-round", "No (Steep)"],
                  ["Saiysad Valleys", "50 meters", "Winter / Spring", "Yes ✅"],
                  ["Al Hada Camel Path", "600 meters", "Winter / Autumn", "No (Very steep)"],
                ].map(([name, gain, season, fam], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-green-700 font-bold border-b border-gray-100">{gain}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-100">{season}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{fam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety & Etiquette Tips</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Altitude Acclimatization:** Give yourself a few hours in Taif city before tackling steep climbs to adjust to the thinner air.</li>
            <li>• **Hydration:** The air is thin and dry; you will dehydrate faster. Carry at least 2 liters of water per person.</li>
            <li>• **Navigation:** Most trails are not signposted. Use GPS apps like Wikiloc or AllTrails to prevent losing the path.</li>
            <li>• **Flora/Fauna:** Do not disturb local wildlife (like the baboons often found near Al Hada roadsides) and avoid picking wild juniper leaves.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#244f31] to-[#3a754b] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Ride to the Trailhead</h2>
          <p className="text-green-100 mb-6">
            Many trailheads are located in remote sectors of Al Shafa or Saiysad. Pre-book a private taxi to drop you off and pick you up comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Trailhead Taxi
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
