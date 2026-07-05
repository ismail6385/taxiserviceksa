import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Al Shafa Mountain Taif: Complete Visitor Guide 2026",
  description:
    "Complete guide to Al Shafa Mountain in Taif — scenic viewpoints, rose farms, cool climate, activities, hotels, and how to get there in 2026.",
  keywords: [
    "Al Shafa Mountain Taif",
    "Al Shafa Taif guide",
    "Al Shafa visitor guide",
    "Al Shafa rose farms",
    "visiting Al Shafa Taif",
    "Al Shafa 2026",
    "Taif mountain Al Shafa",
  ],
  openGraph: {
    title: "Al Shafa Mountain Taif: Complete Visitor Guide 2026",
    description:
      "Al Shafa — Taif's hidden mountain gem with rose farms, cool air, panoramic views, and authentic village charm.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/al-shafa-mountain-taif-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/al-shafa-mountain-taif-guide/",
  },
};

export default function AlShafaMountainTaifGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a2e] via-[#3a1a5e] to-[#7c3aed] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Visitor Guide · Al Shafa · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Al Shafa Mountain Taif
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Taif's most authentic mountain village — rose farms, panoramic escarpments, cool mist, and a pace of life that feels centuries removed from city chaos.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Altitude", value: "~2,200m", icon: "⛰️" },
            { label: "Distance from Taif", value: "~35 km", icon: "📍" },
            { label: "Famous For", value: "Rose Farms & Views", icon: "🌹" },
            { label: "Type", value: "Mountain Village", icon: "🏘️" },
          ].map((info, i) => (
            <div key={i} className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-purple-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* What is Al Shafa */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Al Shafa?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Shafa is a high-altitude mountain village situated approximately 35 km from Taif, perched at around 2,200 metres — making it one of the highest inhabited areas in western Saudi Arabia. Unlike the more developed Al Hada, Al Shafa retains a quieter, more authentic character that appeals to visitors seeking tranquility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The village is particularly celebrated for its rose cultivation — many of Taif's famous Damask rose farms extend into the Al Shafa hills — as well as its dramatic cliff-edge viewpoints overlooking the Tihama coastal plains far below.
          </p>
        </section>

        {/* Top Attractions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Attractions at Al Shafa</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Al Shafa Escarpment Viewpoint", desc: "Standing at the cliff edge with the Tihama plains 2,000m below is one of the most dramatic natural views in all of Saudi Arabia.", icon: "🔭" },
              { title: "Rose Farms", desc: "Al Shafa's high-altitude farms grow the famous Taif Damask rose. In season (March–April), the hillsides are carpeted in pink blooms.", icon: "🌹" },
              { title: "Al Shafa Village Market", desc: "A traditional market selling fresh mountain honey, rose products, fruits, and local crafts — an authentic slice of Hejaz highland culture.", icon: "🛒" },
              { title: "Hiking Trails", desc: "Unmarked but accessible trails wind through juniper-covered hillsides. The cool altitude makes hiking pleasant even in summer months.", icon: "🥾" },
              { title: "Mountain Honey", desc: "Al Shafa produces some of the finest mountain honey (sidr honey) in Saudi Arabia, prized for its medicinal properties and rich flavor.", icon: "🍯" },
              { title: "Stargazing", desc: "At 2,200m with minimal light pollution, Al Shafa offers superb stargazing conditions on clear nights.", icon: "⭐" },
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Al Shafa vs Al Hada */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Al Shafa vs Al Hada: Which Should You Visit?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Feature</th>
                  <th className="text-left p-3">Al Shafa</th>
                  <th className="text-left p-3 rounded-tr-lg">Al Hada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Altitude", "~2,200m (higher)", "~1,800m"],
                  ["Atmosphere", "Quiet & authentic", "Busier & developed"],
                  ["Cable Car", "No", "Yes ✅"],
                  ["Theme Park", "No", "Yes ✅"],
                  ["Rose Farms", "Yes ✅", "Some"],
                  ["Best For", "Solitude, nature, photography", "Family fun, cable car, views"],
                  ["Crowds", "Low", "High on weekends"],
                ].map(([feat, shafa, hada], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{feat}</td>
                    <td className="p-3 text-purple-700 border-b border-gray-100">{shafa}</td>
                    <td className="p-3 text-green-700 border-b border-gray-100">{hada}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">
            💡 Recommendation: Visit both on the same day. Al Shafa in the morning for authenticity and views, Al Hada in the afternoon for the cable car.
          </p>
        </section>

        {/* How to Get There */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get to Al Shafa from Taif</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Shafa is approximately 35 km from Taif city, accessible via the Taif–Al Hada–Al Shafa Highway. The mountain road winds up dramatic switchbacks — a private taxi is strongly recommended. The journey takes 40–50 minutes.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-800 mb-2">⚠️ Important Driving Note</h3>
            <p className="text-amber-700 text-sm">
              The mountain road has steep gradients and tight hairpin bends. First-time visitors and those not experienced with mountain driving are strongly advised to use a professional local taxi driver.
            </p>
          </div>
        </section>

        {/* Best Time */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Time to Visit Al Shafa</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { season: "Rose Season (March–April)", desc: "The absolute best time — rose farms in full bloom, rose water distilleries running, and a beautiful pink landscape.", icon: "🌹", rating: "⭐⭐⭐⭐⭐" },
              { season: "Summer (June–August)", desc: "Al Shafa at 2,200m stays 15–25°C while the rest of Saudi Arabia bakes. Peak local tourism season.", icon: "☀️", rating: "⭐⭐⭐⭐" },
              { season: "Autumn (September–November)", desc: "Harvest season for mountain fruits and honey. Quieter crowds and pleasant temperatures.", icon: "🍂", rating: "⭐⭐⭐⭐" },
              { season: "Winter (December–February)", desc: "Can be very cold (0–10°C) with fog and occasional frost. Dramatic but requires warm clothing.", icon: "❄️", rating: "⭐⭐⭐" },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl mb-1">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm">{s.season}</h3>
                <p className="text-xs text-gray-400 mb-1">{s.rating}</p>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#3a1a5e] to-[#7c3aed] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Explore Al Shafa with a Local Driver</h2>
          <p className="text-purple-100 mb-6">
            Book a professional Taif taxi and leave the mountain roads to someone who knows every bend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition">
              Book Taif Taxi
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
