import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Al Hada Mountain Taif: Complete Visitor Guide 2026",
  description:
    "Everything you need to know about visiting Al Hada Mountain in Taif — cable car, resorts, waterfalls, activities, hotels, best time to visit, and how to get there in 2026.",
  keywords: [
    "Al Hada Mountain Taif",
    "Al Hada Taif guide",
    "Al Hada cable car",
    "Al Hada resort Taif",
    "visiting Al Hada",
    "Al Hada Taif 2026",
    "Taif mountain resort",
  ],
  openGraph: {
    title: "Al Hada Mountain Taif: Complete Visitor Guide 2026",
    description:
      "Discover Al Hada Mountain — Taif's most scenic mountain resort with cable car, waterfalls, green valleys, and cool mountain air.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/al-hada-mountain-taif-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/al-hada-mountain-taif-guide/",
  },
};

export default function AlHadaMountainTaifGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2b1a] via-[#1a4a2e] to-[#2d7a4f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Visitor Guide · Al Hada · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Al Hada Mountain Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Taif's crown jewel — a lush mountain escape with cable cars, cool breezes, and breathtaking valley views at 1,800m above sea level.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Altitude", value: "~1,800m", icon: "⛰️" },
            { label: "Distance from Taif", value: "~30 km", icon: "📍" },
            { label: "Best Season", value: "Year-Round", icon: "🌤️" },
            { label: "Type", value: "Mountain Resort", icon: "🏔️" },
          ].map((info, i) => (
            <div key={i} className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-green-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* What is Al Hada */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Al Hada?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Hada is a spectacular mountain resort town perched on the slopes of the Hejaz Mountains, about 30 km from Taif city. Famous for its cool climate, green terraced valleys, and the iconic Al Hada cable car, it is one of the most visited natural destinations in western Saudi Arabia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike Taif's rose gardens and city attractions, Al Hada is all about nature — dramatic escarpments, juniper forests, and panoramic views of the Tihama plains stretching toward Makkah below.
          </p>
        </section>

        {/* Top Attractions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Attractions at Al Hada</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Al Hada Cable Car", desc: "The main attraction — ride the gondola over the stunning Al Hada valley gorge. The views of the terraced mountains and distant plains are unforgettable.", icon: "🚡" },
              { title: "Al Hada Theme Park", desc: "A large family entertainment park adjacent to the cable car station with rides, restaurants, and entertainment for all ages.", icon: "🎡" },
              { title: "Al Hada Valley Viewpoints", desc: "Multiple scenic overlooks on the mountain road offer extraordinary views of the terraced valley carved by centuries of erosion.", icon: "🔭" },
              { title: "Juniper Forests", desc: "Al Hada's slopes are covered in ancient juniper trees — a rare ecosystem unique to the Hejaz highlands. Ideal for shaded walks.", icon: "🌲" },
              { title: "Al Hada Mountain Road", desc: "The winding mountain road itself is an attraction, offering a series of dramatic hairpin bends and viewpoints on the descent toward Makkah.", icon: "🛣️" },
              { title: "Local Fruit Stands", desc: "Al Hada is famous for fresh pomegranates, grapes, figs, and honey sold by roadside vendors — a must-try on any visit.", icon: "🍇" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cable Car Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Al Hada Cable Car: What to Expect</h2>
          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Ticket Price", value: "SAR 30–50 per person" },
                { label: "Duration", value: "~10 minutes (one way)" },
                { label: "Height", value: "~300m above valley floor" },
                { label: "Operating Hours", value: "9am – 10pm (seasonal)" },
                { label: "Capacity", value: "4–6 persons per gondola" },
                { label: "Best For", value: "Photos, views, family fun" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <div>
                    <p className="text-xs text-gray-400">{d.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">* Check current prices and hours on arrival as schedules vary seasonally.</p>
          </div>
        </section>

        {/* Climate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate & Best Time to Visit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Hada's high altitude gives it one of the most pleasant climates in Saudi Arabia year-round. Even in summer (June–August), temperatures rarely exceed 28–30°C — a dramatic contrast to the 42°C+ heat on the plains below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Season</th>
                  <th className="text-left p-3">Temperature</th>
                  <th className="text-left p-3 rounded-tr-lg">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Spring (Mar–May)", "15–25°C", "Wildflowers, green valleys, ideal hiking"],
                  ["Summer (Jun–Aug)", "20–30°C", "Peak Saudi visitor season; escape from heat"],
                  ["Autumn (Sep–Nov)", "15–25°C", "Pomegranate & fruit harvest; fewer crowds"],
                  ["Winter (Dec–Feb)", "5–15°C", "Fog, misty mornings; bring warm layers"],
                ].map(([season, temp, highlights], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{season}</td>
                    <td className="p-3 text-green-700 font-semibold border-b border-gray-100">{temp}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Get There */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get to Al Hada from Taif</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Hada is approximately 30 km from Taif city center, accessible via the Al Hada–Taif Highway. The scenic mountain road is well-maintained but has many hairpin bends — a private taxi or car is strongly recommended over self-driving for first-time visitors.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { method: "Private Taxi", time: "35–45 min", note: "Best option — driver knows the bends", icon: "🚖" },
              { method: "Rental Car", time: "35–45 min", note: "International license required", icon: "🚗" },
              { method: "Shared Taxi", time: "45–60 min", note: "Available from Taif city center", icon: "🚌" },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{t.icon}</div>
                <p className="font-bold text-gray-900">{t.method}</p>
                <p className="text-green-700 font-semibold text-sm">{t.time}</p>
                <p className="text-gray-500 text-xs mt-1">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Visitor Tips</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Arrive on weekdays — weekends are very busy with Saudi families especially in summer",
              "Bring a light jacket even in summer — evenings can be surprisingly cool at altitude",
              "Try the fresh pomegranate juice from roadside stalls — a local specialty",
              "The cable car queues can be long in peak season; go first thing in the morning",
              "Combine Al Hada with Al Shafa on the same day — they are close to each other",
              "Photography is best in early morning when clouds swirl below the peaks",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Ride to Al Hada</h2>
          <p className="text-green-100 mb-6">
            Let a professional driver navigate the mountain roads while you enjoy the views. Pre-book your Taif taxi today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
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
