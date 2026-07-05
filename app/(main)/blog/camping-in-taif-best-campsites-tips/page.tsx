import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camping in Taif: Best Campsites & Tips 2026",
  description:
    "The ultimate guide to camping in Taif, Saudi Arabia. Compare wild desert camping in Al Shafa, forest campsites in Saiysad, gear rentals, and stargazing locations for 2026.",
  keywords: [
    "camping in Taif",
    "best campsites Taif",
    "Al Shafa camping",
    "Saiysad National Park camping",
    "wild camping Saudi Arabia",
    "camping gear rental Taif",
    "stargazing in Taif",
  ],
  openGraph: {
    title: "Camping in Taif: Best Campsites & Tips 2026",
    description:
      "A complete guide to camping under the stars in the mountains and forests of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/camping-in-taif-best-campsites-tips/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/camping-in-taif-best-campsites-tips/",
  },
};

export default function CampingInTaifBestCampsitesTips() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1b1c2e] via-[#352d5b] to-[#604ea3] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Outdoor Guide · Camping · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Camping in Taif: Best Campsites & Tips
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Sleep under a canopy of stars. Explore the best wild camping peaks, national forest reserves, and overnight gear checklists.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-purple-800 mb-2">
            🏕️ The Camping Vibe
          </h2>
          <p className="text-purple-700 leading-relaxed text-sm">
            Taif is one of the premier locations in Saudi Arabia for wild camping. The high altitude keeps the air crisp, and the surrounding peaks offer a quiet escape. Wild camping is generally permitted on public land, provided you respect local agricultural properties and leave no trace behind.
          </p>
        </div>

        {/* Top Campsites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Camping Locations in Taif</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Shafa Mountains (Cliffside Overlooks)",
                type: "Wild Ridge Camping",
                desc: "Pitch your tent along the ridges of Al Shafa. At 2,200m, this is a spectacular spot for stargazing and waking up to panoramic sunrise views over the escarpment plains. Temperatures get cold, so winter gear is mandatory.",
                icon: "⛰️",
              },
              {
                name: "Saiysad National Park (Pine/Juniper Valleys)",
                type: "Forest Reserve Camping",
                desc: "Excellent for families wanting a flatter, sheltered campsite. Camp under the shade of wild juniper and pine trees alongside seasonal stream beds. More wind shelter compared to the high ridges of Al Shafa.",
                icon: "🌲",
              },
              {
                name: "Wadi Mahram Sand Pockets",
                type: "Sand & Rock Valley Camping",
                desc: "Located on the routes between Taif and Makkah. It offers soft sandy patches nestled between dramatic granite boulders. Perfect for traditional bonfire gatherings.",
                icon: "🏜️",
              },
            ].map((camp, i) => (
              <div key={i} className="flex gap-4 bg-purple-50/30 border border-purple-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{camp.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{camp.name}</h3>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    {camp.type}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{camp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packing Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Camping Packing List</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🏕️ Shelter & Comfort:</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Double-walled tent (for wind resistance)</li>
                <li>• Sleeping bag rated for 5–10°C (essential even in summer)</li>
                <li>• Cushioned sleeping pad (for rocky granite ground)</li>
                <li>• Folding camp chairs & table</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🔥 Utilities & Food:</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Portable gas stove or firewood</li>
                <li>• Headlamps & camping lanterns</li>
                <li>• Trash bags (pack out all waste)</li>
                <li>• Large cooler box with plenty of water</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Safety Tips</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Altitude Drop:** Mountain ridges can get very windy. Anchor your tent stakes securely into rocky cracks or weigh them down with heavy granite stones.</li>
            <li>• **Wild Baboons:** Do not leave food bags outside your tent. Olive baboons are native to Taif and are highly skilled at raiding campsites.</li>
            <li>• **Weather Check:** Avoid camping in low wadi beds if rain is predicted, as flash floods can sweep through valleys rapidly.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#352d5b] to-[#604ea3] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Get to Your Campsite Hassle-Free</h2>
          <p className="text-purple-100 mb-6">
            Hiring a private taxi with a large SUV allows you to transport all your camping gear comfortably to the mountain trailheads.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition">
              Book Camping Taxi
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
