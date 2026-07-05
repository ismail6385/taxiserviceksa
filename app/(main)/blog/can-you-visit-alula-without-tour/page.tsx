import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can You Visit AlUla Without a Tour? Independent Travel Guide 2026",
  description:
    "Can you visit AlUla independently without a guided tour? Find out which sites require guides, which you can explore solo, and how to plan a self-guided AlUla trip in 2026.",
  keywords: [
    "visit AlUla without tour",
    "AlUla self guided tour",
    "AlUla independent travel",
    "AlUla without guide",
    "do you need a guide in AlUla",
    "AlUla tour required",
    "AlUla solo travel",
  ],
  openGraph: {
    title: "Can You Visit AlUla Without a Tour? Independent Travel Guide 2026",
    description:
      "Which AlUla sites require a guide? Which ones can you visit solo? Get the complete independent traveler's guide.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/can-you-visit-alula-without-tour/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/can-you-visit-alula-without-tour/",
  },
};

export default function CanYouVisitAlUlaWithoutTour() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Independent Travel · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Can You Visit AlUla Without a Tour?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Yes — but some iconic sites require a licensed guide. Here's exactly
            what you can explore independently and what needs a tour.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            📌 Quick Answer
          </h2>
          <p className="text-blue-700">
            You can visit many parts of AlUla independently — including
            Elephant Rock, Old Town, farms, and viewpoints. However,{" "}
            <strong>Hegra (Madain Saleh) requires a ticket and guided tour</strong>. 
            Dadan and Jabal Ikmah can be partially explored solo with audio
            guides via the AlUla app.
          </p>
        </div>

        {/* Sites Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Guide Required vs. Self-Guided: Site-by-Site Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Site</th>
                  <th className="text-left p-3">Guide Required?</th>
                  <th className="text-left p-3 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hegra (Madain Saleh)", "✅ Yes", "Mandatory guided tour via AlUla app or operator"],
                  ["Dadan", "⚠️ Partially", "Guided tours recommended; app audio guides available"],
                  ["Jabal Ikmah", "⚠️ Partially", "Open air site; self-explore with AlUla app"],
                  ["Elephant Rock", "❌ No", "Fully self-guided; parking available on-site"],
                  ["Old Town AlUla (Al-Deerah)", "❌ No", "Walk freely; guided tours available optionally"],
                  ["AlUla Oasis", "❌ No", "Public area; free to explore"],
                  ["AlUla Night Market", "❌ No", "Public event; no guide needed"],
                  ["Harrat Uwayrid Lava Fields", "⚠️ Recommended", "Remote area; guide strongly recommended for safety"],
                  ["Hot Air Balloon", "❌ No*", "Operated by licensed company; booking required"],
                  ["Jabal AlFil Hiking", "⚠️ Recommended", "Trail is marked; guide recommended for solo hikers"],
                ].map(([site, req, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{site}</td>
                    <td className="p-3 border-b border-gray-100">{req}</td>
                    <td className="p-3 text-gray-500 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The AlUla App */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The AlUla App: Your Self-Guided Companion
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 mb-4">
              The <strong>Experience AlUla</strong> app (available on iOS and
              Android) is a powerful self-guided tool that includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                "Interactive maps of all major sites",
                "Audio guides for Dadan, Jabal Ikmah, and Old Town",
                "AR (Augmented Reality) features at select heritage points",
                "Ticket booking for Hegra and other sites",
                "Real-time opening hours and site conditions",
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Download "Experience AlUla" from the App Store or Google Play
              before your trip.
            </p>
          </div>
        </section>

        {/* Why Hire a Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When Is Hiring a Guide Worth It?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Hegra Deep Dive",
                desc: "Licensed guides unlock stories behind each tomb. The Nabataean history becomes dramatically richer with expert context.",
                icon: "🏛️",
              },
              {
                title: "Desert & Off-Road Areas",
                desc: "Remote lava fields and unmarked desert tracks are genuinely dangerous without local knowledge.",
                icon: "🏜️",
              },
              {
                title: "Photography Tours",
                desc: "Specialized photo guides know the best lighting angles and restricted-access vantage points.",
                icon: "📸",
              },
              {
                title: "First-Time Visitors",
                desc: "If it's your first visit, a guide helps you prioritize and avoid time-wasting false starts.",
                icon: "🗺️",
              },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transport for Independent Travelers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Getting Around AlUla Independently
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the main challenge for independent travelers. AlUla has{" "}
            <strong>no public bus system</strong> connecting the major
            attractions, and ride-hailing apps have limited coverage. The sites
            are spread over a 30+ km corridor.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                option: "Rent a Car",
                pros: "Maximum flexibility",
                cons: "International license needed; navigating desert tracks",
                rating: "⭐⭐⭐",
              },
              {
                option: "Private Taxi",
                pros: "Flexible, door-to-door, driver knows routes",
                cons: "Pre-booking required",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                option: "Resort Shuttles",
                pros: "Convenient if staying at Sharaan or Habitas",
                cons: "Limited to hotel guests and select sites only",
                rating: "⭐⭐⭐",
              },
            ].map((opt, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{opt.option}</h3>
                <p className="text-xs text-gray-500 mb-3">{opt.rating}</p>
                <p className="text-sm text-green-600 mb-1">✅ {opt.pros}</p>
                <p className="text-sm text-red-500">⚠️ {opt.cons}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Explore AlUla on Your Own Terms
          </h2>
          <p className="text-amber-100 mb-6">
            Book a flexible private taxi that waits for you at each site — no
            tour schedule, no rush.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Private Taxi
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
