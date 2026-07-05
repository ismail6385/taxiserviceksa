import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Days Do You Need in AlUla? 2026 Itinerary Guide",
  description:
    "Planning your AlUla trip? Find out exactly how many days you need — from a quick 2-day weekend to a full 7-day immersive experience. Includes day-by-day itineraries for 2026.",
  keywords: [
    "how many days in AlUla",
    "AlUla itinerary",
    "AlUla trip duration",
    "AlUla 3 day itinerary",
    "AlUla 5 day itinerary",
    "how long to spend in AlUla",
    "AlUla trip planning 2026",
  ],
  openGraph: {
    title: "How Many Days Do You Need in AlUla? 2026 Itinerary Guide",
    description:
      "2-day, 3-day, 5-day and 7-day AlUla itineraries to help you plan the perfect trip duration.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/how-many-days-alula/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/how-many-days-alula/",
  },
};

const itineraries = [
  {
    days: "2 Days",
    type: "Weekend Getaway",
    color: "blue",
    items: [
      "Day 1: Hegra (Madain Saleh), Dadan, Jabal Ikmah",
      "Day 2: Old Town AlUla, Elephant Rock, Sunset at viewpoint",
    ],
    verdict: "Best for: Short-haul Saudi residents on a quick escape",
  },
  {
    days: "3 Days",
    type: "Classic Trip",
    color: "amber",
    items: [
      "Day 1: Hegra UNESCO site, Madain Saleh tombs",
      "Day 2: Dadan, Jabal Ikmah open library, Old Town AlUla",
      "Day 3: Elephant Rock, hot air balloon ride, AlUla Night Market",
    ],
    verdict: "Best for: Most international tourists — the sweet spot",
  },
  {
    days: "5 Days",
    type: "Immersive Explorer",
    color: "green",
    items: [
      "Day 1: Arrive, settle in, Old Town evening stroll",
      "Day 2: Hegra — full guided tour",
      "Day 3: Dadan & Jabal Ikmah + Harrat Uwayrid lava fields",
      "Day 4: Hot air balloon at sunrise, Elephant Rock, AlUla art district",
      "Day 5: Hiking Jabal AlFil, AlUla farms visit, farm-to-table lunch",
    ],
    verdict: "Best for: Culture & adventure enthusiasts",
  },
  {
    days: "7 Days",
    type: "Deep Dive",
    color: "purple",
    items: [
      "Days 1–5: Above immersive itinerary",
      "Day 6: Rock climbing, desert safari, stargazing camp",
      "Day 7: AlUla's oasis trail, local souq, farewell dinner",
    ],
    verdict: "Best for: Photography, history buffs, wellness retreats",
  },
];

export default function HowManyDaysAlUla() {
  const colorMap: Record<string, string> = {
    blue: "border-blue-500 bg-blue-50",
    amber: "border-amber-500 bg-amber-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
  };
  const badgeMap: Record<string, string> = {
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Trip Planning · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            How Many Days Do You Need in AlUla?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            From a 2-day weekend sprint to a 7-day deep dive — find the perfect
            trip length for your AlUla adventure.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-amber-800 mb-2">
            ⏱️ Quick Recommendation
          </h2>
          <p className="text-amber-700">
            <strong>3–5 days</strong> is the ideal duration for most tourists.
            3 days covers the essential sites comfortably, while 5 days allows
            for deeper exploration, adventure activities, and a relaxed pace.
          </p>
        </div>

        {/* What Affects Duration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Affects How Long You Should Stay?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Your Interests",
                desc: "History lovers need more time at Hegra & Dadan. Adventure seekers need time for hiking and rock climbing.",
                icon: "🎯",
              },
              {
                title: "Season",
                desc: "Winter (Oct–Mar) has more outdoor activities. Summer limits outdoor hours to early morning and evening.",
                icon: "🌤️",
              },
              {
                title: "Budget",
                desc: "Hegra permits, guided tours, and experiences add up. More days = more budget for activities.",
                icon: "💰",
              },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itineraries */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AlUla Itineraries by Trip Length
          </h2>
          <div className="space-y-6">
            {itineraries.map((itin, i) => (
              <div
                key={i}
                className={`border-l-4 rounded-xl p-6 ${colorMap[itin.color]}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`${badgeMap[itin.color]} text-white font-bold px-3 py-1 rounded-full text-sm`}
                  >
                    {itin.days}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {itin.type}
                  </h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {itin.items.map((item, j) => (
                    <li key={j} className="text-gray-700 text-sm flex gap-2">
                      <span>📍</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-gray-500 italic">
                  {itin.verdict}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Sites & Time Required */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Time Required at Each AlUla Attraction
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Attraction</th>
                  <th className="text-left p-3">Time Needed</th>
                  <th className="text-left p-3 rounded-tr-lg">Best Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hegra (Madain Saleh)", "3–5 hours", "Morning"],
                  ["Dadan Archaeological Site", "1.5–2 hours", "Morning"],
                  ["Jabal Ikmah", "1–2 hours", "Morning/Afternoon"],
                  ["Old Town AlUla (Al-Deerah)", "1.5–2 hours", "Evening"],
                  ["Elephant Rock", "30–60 min", "Sunset"],
                  ["Hot Air Balloon", "3–4 hours", "Sunrise"],
                  ["AlUla Oasis & Farms", "2–3 hours", "Afternoon"],
                  ["Harrat Uwayrid Lava Fields", "2–3 hours", "Morning"],
                  ["Jabal AlFil Hiking", "3–4 hours", "Morning"],
                  ["AlUla Night Market", "1–2 hours", "Evening"],
                ].map(([site, time, best], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">
                      {site}
                    </td>
                    <td className="p-3 text-amber-700 font-semibold border-b border-gray-100">
                      {time}
                    </td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">
                      {best}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pro Tips to Maximize Your Time
          </h2>
          <ul className="space-y-3">
            {[
              "Book Hegra tickets in advance — they often sell out, especially on weekends",
              "Start every morning early (before 9am) to beat the heat and crowds",
              "Group geographically close sites together to minimize travel time",
              "Use a private driver for flexibility — public transport in AlUla is very limited",
              "AlUla events and festivals (especially Winter at Tantora) require extra days",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Maximize Every Day in AlUla
          </h2>
          <p className="text-amber-100 mb-6">
            Don't waste precious hours waiting for transport. Book a private
            taxi and get from attraction to attraction seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Private Driver
            </Link>
            <Link
              href="/routes/alula"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              View AlUla Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
