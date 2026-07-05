import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif Cable Car Guide 2026: Tickets, Views & Tips",
  description:
    "Complete guide to the Taif Cable Car (Al Hada Gondola) — ticket prices, opening hours, what to expect, best time to go, and how to combine it with other Taif attractions in 2026.",
  keywords: [
    "Taif cable car",
    "Al Hada cable car guide",
    "Taif gondola",
    "Taif cable car ticket price",
    "Al Hada gondola 2026",
    "Taif cable car hours",
    "visiting Taif cable car",
  ],
  openGraph: {
    title: "Taif Cable Car Guide 2026: Tickets, Views & Tips",
    description:
      "Everything you need to know before riding the Taif cable car — tickets, timing, views, and insider tips.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-cable-car-guide-2026/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-cable-car-guide-2026/",
  },
};

export default function TaifCableCarGuide2026() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001a33] via-[#003366] to-[#0066cc] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Attraction Guide · Taif Cable Car 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif Cable Car Guide 2026
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Soar over the dramatic Al Hada valley gorge on Saudi Arabia's most scenic cable car — the highlight of any Taif trip.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* At a Glance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Ticket Price", value: "SAR 30–50", icon: "🎫" },
            { label: "Duration", value: "~10 min/way", icon: "⏱️" },
            { label: "Height", value: "~300m drop", icon: "📏" },
            { label: "Location", value: "Al Hada, 30km from Taif", icon: "📍" },
          ].map((info, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-blue-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview: Taif's Cable Car</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Al Hada Cable Car (Taif Gondola) is the most iconic attraction in the Taif region. Located in the Al Hada mountain resort, 30 km from Taif city, the cable car takes passengers on a breathtaking ride over the Al Hada valley — a deep gorge carved into the Hejaz escarpment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From the gondola, you experience bird's-eye views of the terraced mountain slopes above and the sheer drop to the valley floor below. On clear days, you can see the Tihama coastal plains stretching toward the Red Sea in the distance.
          </p>
        </section>

        {/* Tickets & Hours */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tickets, Hours & Practical Info</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Adult Ticket (one way)", value: "SAR 30–40" },
                { label: "Adult Ticket (return)", value: "SAR 50–70" },
                { label: "Children (under 5)", value: "Free" },
                { label: "Children (5–12)", value: "SAR 20–30" },
                { label: "Operating Hours (weekdays)", value: "10am – 9pm" },
                { label: "Operating Hours (weekends)", value: "9am – 11pm" },
                { label: "Closure", value: "Closed during strong winds/rain" },
                { label: "Booking", value: "On-site only (no online booking)" },
              ].map((d, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-lg p-3 border border-gray-100">
                  <p className="text-sm text-gray-600">{d.label}</p>
                  <p className="font-bold text-blue-700 text-sm">{d.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">* Prices approximate. Verify on-site as they are subject to change.</p>
          </div>
        </section>

        {/* The Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Cable Car Experience Is Like</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Board at the Upper Station", desc: "You board gondolas at the upper Al Hada station. Gondolas hold 4–6 people and depart every few minutes." },
              { step: "02", title: "Descend into the Gorge", desc: "The gondola descends steeply over the valley — you look directly down into the gorge far below. Slightly thrilling for those with a fear of heights!" },
              { step: "03", title: "Valley Floor Station", desc: "You arrive at the lower station in the valley. There's a small café and rest area here. Walk around briefly before the return ride." },
              { step: "04", title: "Return to the Top", desc: "The return ride gives a completely different perspective — looking up at the mountains as you ascend. Equally spectacular." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-blue-50 rounded-xl p-5">
                <div className="text-3xl font-black text-blue-200 w-12 flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Times */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Time to Ride the Cable Car</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { time: "Early Morning (9–11am)", verdict: "Best", reason: "Shortest queues, clearest air, best photography light", color: "bg-green-50 border-green-200" },
              { time: "Afternoon (2–5pm)", verdict: "Good", reason: "Comfortable temperatures; moderate crowds on weekdays", color: "bg-yellow-50 border-yellow-200" },
              { time: "Evening (7–10pm)", verdict: "Magical", reason: "Night views of the illuminated valley are spectacular but queues are longest", color: "bg-purple-50 border-purple-200" },
            ].map((t, i) => (
              <div key={i} className={`border rounded-xl p-4 ${t.color}`}>
                <p className="font-bold text-gray-900 text-sm">{t.time}</p>
                <p className="text-xs font-semibold text-blue-700 mb-1">{t.verdict}</p>
                <p className="text-gray-600 text-xs">{t.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Nearby */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Combine with Nearby Attractions</h2>
          <ul className="space-y-3">
            {[
              { place: "Al Hada Theme Park", dist: "Adjacent", note: "Right next to the cable car station — easy to combine in one visit" },
              { place: "Al Hada Valley Viewpoints", dist: "0–2 km", note: "Multiple scenic pullouts on the mountain road near the cable car" },
              { place: "Al Shafa Mountain Village", dist: "~10 km", note: "Continue driving up the mountain after the cable car for even higher views" },
              { place: "Local Fruit Stands", dist: "On-route", note: "Roadside vendors selling pomegranates, honey, and rose products" },
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-blue-500 font-bold text-sm w-16 flex-shrink-0">{p.dist}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{p.place}</p>
                  <p className="text-gray-500 text-xs">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Insider Tips</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Go on a Tuesday or Wednesday — significantly fewer crowds than weekends",
              "The cable car closes during high winds and rain — have a backup plan",
              "Bring a jacket — the valley floor is noticeably cooler than the top station",
              "Sit on the right side of the gondola on the way down for the best valley views",
              "Photography is allowed — bring a wide-angle lens for the dramatic gorge shots",
              "Combine with the Al Hada Theme Park — one ticket often covers both",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Get to the Cable Car Hassle-Free</h2>
          <p className="text-blue-100 mb-6">
            Book a private Taif taxi and get dropped directly at the Al Hada cable car station — no navigation, no parking stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
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
