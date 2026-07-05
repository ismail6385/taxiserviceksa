import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adventure Activities in Taif: Top Thrill Seekers Guide 2026",
  description:
    "Looking for adventure in Taif? Explore the top extreme sports, mountain hiking, rock climbing, paragliding, off-road desert drives, and cable car rides in 2026.",
  keywords: [
    "adventure activities in Taif",
    "extreme sports Taif",
    "rock climbing Taif",
    "Al Hada cable car drop",
    "off road driving Taif",
    "outdoor adventure Saudi Arabia",
  ],
  openGraph: {
    title: "Adventure Activities in Taif: Top Thrill Seekers Guide 2026",
    description:
      "A complete guide to adrenaline-fueled activities, climbing, hiking, and off-road sports in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/adventure-activities-in-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/adventure-activities-in-taif/",
  },
};

export default function AdventureActivitiesInTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e1b18] via-[#4a3728] to-[#b87c4c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Thrill Guide · Adventure · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Adventure Activities in Taif
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Scale rugged granite peaks, fly over canyons, and crash through desert dunes. The ultimate guide for adrenaline seekers.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Top Adventures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Adventure Activities</h2>
          <div className="space-y-6">
            {[
              {
                name: "Rock Climbing on Granite Cliffs",
                desc: "Taif's mountain peaks are made of solid, high-friction granite. Several local tour companies offer guided rock climbing and rappelling experiences for both beginners and experienced climbers in the canyons of Al Shafa.",
                icon: "🧗",
              },
              {
                name: "Al Hada Old Camel Path Descent",
                desc: "Hike down the ancient stone path used by camel caravans. It is a steep, challenging descent of 6 km with a 600m drop. It is a severe test for knees and ankles, but highly rewarding.",
                icon: "🥾",
              },
              {
                name: "Off-Road Desert Duning & Wadis",
                desc: "Rent a 4WD or hire a local driver to crash through the sand pockets and rocky wadis of Wadi Mahram. Bumpy, high-speed desert dune bashing at its best.",
                icon: "🚙",
              },
              {
                name: "Al Kar Toboggan Ride",
                desc: "Located at the base of the Al Hada Cable Car descent inside Al Kar Tourist Village. Control your own speed as you fly down a winding steel track on the hillside.",
                icon: "🛷",
              },
            ].map((adv, i) => (
              <div key={i} className="flex gap-4 bg-amber-50/30 border border-amber-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{adv.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{adv.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Gear */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Adventure Safety & Gear Tips</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Guides:** Never attempt rock climbing or off-road desert driving alone. Hire local, licensed guide operators.</li>
            <li>• **Footwear:** Rocky granite cliffs require shoes with exceptional grip.</li>
            <li>• **Emergency:** High altitudes can bring rapid weather changes. Always check the weather forecast before mountain hikes or canyon climbs.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#4a3728] to-[#b87c4c] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Adventure Transport</h2>
          <p className="text-amber-100 mb-6">
            Rent a rugged SUV private taxi with an experienced driver to transport you and your adventure gear comfortably to the peaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition">
              Book Adventure Taxi
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
