import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Day Trips from Taif: Top Nearby Excursions 2026",
  description:
    "Discover the best day trips and excursions from Taif. Explore Thee Ayn Marble Village, Al Baha, Makkah, Jeddah, and local volcanic craters in 2026.",
  keywords: [
    "best day trips from Taif",
    "excursions from Taif",
    "day tours Taif",
    "Jeddah to Taif day trip",
    "Thee Ayn village from Taif",
    "Makkah to Taif day trip",
    "Taif surrounding attractions",
  ],
  openGraph: {
    title: "Best Day Trips from Taif: Top Nearby Excursions 2026",
    description:
      "Expand your itinerary. Explore the top historic villages, holy sites, and coastal retreats accessible via a day trip from Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/best-day-trips-from-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/best-day-trips-from-taif/",
  },
};

export default function BestDayTripsFromTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a120b] via-[#3d2712] to-[#b37d14] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Excursion Guide · Day Trips · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Best Day Trips from Taif
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Venture beyond the city gates. Explore historic marble villages, the holy sanctuaries of Makkah, or the red sea coast of Jeddah on a comfortable day tour.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expand Your Taif Adventure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif is a beautiful destination in its own right, but its strategic location in the Sarawat Mountains makes it the perfect launchpad for exploring the wider western region of Saudi Arabia. Connected by high-quality highways, you can easily descend from the cool highlands to coastal cities, holy sites, or historic slate villages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Here are the most popular and rewarding day trips you can take from Taif using private taxi services.
          </p>
        </section>

        {/* Top Day Trips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Day Trip Destinations</h2>
          <div className="space-y-6">
            {[
              {
                name: "Thee Ayn Heritage Village (Al Baha)",
                dist: "220 km (2.5 - 3 hours drive)",
                desc: "A stunning 400-year-old stone village built on a white marble hill in the Al Baha region. Tour the preserved multi-storey slate houses, stroll through banana orchards, and drink from the freshwater spring. A highly unique cultural day trip.",
                icon: "🏛️",
              },
              {
                name: "Makkah Al-Mukarramah (Holy Sanctuary)",
                dist: "85 km (1.5 hours drive)",
                desc: "For Muslim travelers, Makkah is the ultimate day trip from Taif. Enter Ihram at the Qarn al-Manazil (Sayl Al-Kabir) Meeqat on the highway and descend the mountains to perform Umrah or pray at Masjid al-Haram.",
                icon: "masjid-icon", // custom placeholder mapping
                iconText: "🕋",
              },
              {
                name: "Jeddah (The Bride of the Red Sea)",
                dist: "170 km (2.5 hours drive)",
                desc: "Descend from the cool peaks to the warm humid coast of Jeddah. Tour the historic Al-Balad district, stroll along the Jeddah Corniche, and enjoy fresh seafood overlooking the Red Sea before heading back to the cooler mountains.",
                icon: "🌊",
              },
              {
                name: "Wahbah Volcanic Crater",
                dist: "250 km (3 hours drive north)",
                desc: "A jaw-dropping geological wonder. The Wahbah Crater is a massive 250-meter-deep volcanic bowl with a white sodium phosphate salt dome on the floor. Ideal for hiking, geology enthusiasts, and dramatic photography.",
                icon: "🌋",
              },
            ].map((trip, i) => (
              <div key={i} className="flex gap-4 bg-amber-50/30 border border-amber-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{trip.iconText || trip.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{trip.name}</h3>
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    Distance: {trip.dist}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{trip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At a Glance: Excursion Choices</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Destination</th>
                  <th className="text-left p-3">Best For</th>
                  <th className="text-left p-3">Drive Time (One-way)</th>
                  <th className="text-left p-3 rounded-tr-lg">Required Level of Effort</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Makkah", "Spiritual Pilgrims", "1.5 hours", "Moderate"],
                  ["Jeddah", "Shopping, History, Seafood", "2.5 hours", "Moderate"],
                  ["Thee Ayn Village", "Heritage & Photo lovers", "3 hours", "High (Mountain driving)"],
                  ["Wahbah Crater", "Adventure & Hiking", "3 hours", "High (Remote area)"],
                ].map(([name, best, drive, effort], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-amber-700 font-semibold border-b border-gray-100">{best}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-100">{drive}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{effort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for Excursions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for a Great Day Trip</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "**Start Early:** For trips like Thee Ayn Village or Wahbah Crater, aim to depart Taif by 7:30 AM to beat the afternoon heat and maximize daylight hours.",
              "**Hire a Private Taxi:** Navigating mountain passes, toll points, and local speed cameras is exhausting. A pre-booked driver is the safest and most comfortable option.",
              "**Pack Water & Food:** The Wahbah Crater area is highly remote with no commercial shops. Carry plenty of snacks and water.",
              "**Check Makkah Permits:** Ensure you have the appropriate Umrah permits via the Nusuk app if planning a spiritual day trip to Makkah.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#3d2712] to-[#b37d14] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Day Tour Taxi</h2>
          <p className="text-amber-100 mb-6">
            Rent a private taxi for the full day to travel to Makkah, Jeddah, or Thee Ayn Village comfortably at a flat rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition">
              Book Day Tour Taxi
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
