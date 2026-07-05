import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Hegra Worth Visiting? Honest Review of AlUla's UNESCO Site 2026",
  description:
    "Is Hegra (Madain Saleh) worth visiting? Read our honest review of Saudi Arabia's first UNESCO World Heritage Site — what to expect, costs, highlights, and tips for 2026.",
  keywords: [
    "is Hegra worth visiting",
    "Hegra review",
    "Madain Saleh worth it",
    "Hegra AlUla review",
    "Hegra UNESCO site",
    "visiting Hegra 2026",
    "Hegra tombs AlUla",
  ],
  openGraph: {
    title: "Is Hegra Worth Visiting? Honest Review of AlUla's UNESCO Site 2026",
    description:
      "An honest, detailed review of Hegra — what makes it special, what might disappoint, and whether it's worth the trip.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/is-hegra-worth-visiting/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/is-hegra-worth-visiting/",
  },
};

export default function IsHegraWorthVisiting() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Honest Review · Hegra 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Is Hegra Worth Visiting?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Saudi Arabia's first UNESCO World Heritage Site — is it worth the
            hype, the journey, and the cost? An honest review.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Verdict Banner */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            ✅ Our Verdict: Absolutely Yes
          </h2>
          <p className="text-green-700">
            Hegra is one of the most extraordinary archaeological sites in the
            world. The 111 royal tombs carved into rose-red sandstone cliffs are
            a jaw-dropping testament to Nabataean civilization. It is absolutely
            worth visiting — the only question is how to make the most of it.
          </p>
        </div>

        {/* What Is Hegra */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Hegra (Madain Saleh)?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hegra, also known as Madain Saleh, is an ancient Nabataean city
            dating back to the 1st century BCE. It was the second-largest
            settlement of the Nabataean Kingdom after Petra (in Jordan). In
            2008, it became Saudi Arabia's first UNESCO World Heritage Site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The site contains 111 well-preserved tombs with elaborate facades
            carved directly into sandstone outcrops, along with water wells,
            inscriptions, and remains of an ancient settlement.
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Top Highlights at Hegra
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Qasr Al-Fareed",
                desc: "The 'Lonely Castle' — the largest and most iconic tomb at Hegra, carved from a single isolated rock with a stunning 4-column facade.",
                icon: "🏛️",
              },
              {
                title: "Jabal Al-Banat",
                desc: "The 'Mountain of Girls' — a cluster of royal tombs belonging to Nabataean women of high status. Intricate carvings and inscriptions.",
                icon: "🗿",
              },
              {
                title: "The Ancient Wells",
                desc: "Remarkably preserved ancient water engineering that allowed the Nabataeans to thrive in this desert landscape.",
                icon: "💧",
              },
              {
                title: "Diwan & Siq",
                desc: "Rock-cut gathering chambers and narrow gorges similar to (but smaller than) Petra's famous Siq — equally atmospheric.",
                icon: "🏔️",
              },
              {
                title: "Nabataean Inscriptions",
                desc: "Over 40 inscriptions throughout the site provide rare firsthand accounts of the people who built these tombs.",
                icon: "✍️",
              },
              {
                title: "Sunrise at Qasr Al-Fareed",
                desc: "The golden morning light on the rose-red sandstone is a photographer's dream and an unforgettable visual experience.",
                icon: "🌅",
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

        {/* Honest Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Honest Downsides (What Might Disappoint)
          </h2>
          <div className="space-y-4">
            {[
              {
                con: "You can't enter the tombs",
                detail:
                  "Unlike Petra where you can walk through some chambers, Hegra's tombs are fenced off. You view them from a distance, which some visitors find frustrating.",
              },
              {
                con: "Guided tour is mandatory",
                detail:
                  "You cannot self-explore. Tours follow a fixed route at a fixed pace — less freedom than some travelers prefer.",
              },
              {
                con: "Smaller scale than Petra",
                detail:
                  "If you've visited Petra, Hegra feels more contained. It's an exceptional site, but Petra's sheer scale is unmatched.",
              },
              {
                con: "Extreme heat in summer",
                detail:
                  "Visiting June–September means brutal heat (40–45°C). Outdoor walking tours become exhausting quickly.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-semibold text-red-800 mb-1">
                  ⚠️ {item.con}
                </h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost & Practical Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hegra: Practical Information & Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Ticket Price", value: "SAR 95–195 (~$25–$52)", icon: "🎫" },
              { label: "Duration", value: "3–5 hours for full tour", icon: "⏱️" },
              { label: "Distance from AlUla", value: "~22 km (30 min drive)", icon: "📍" },
              { label: "Best Season", value: "October – March", icon: "🌤️" },
              { label: "Opening Hours", value: "8am – 6pm (seasonal variations)", icon: "🕗" },
              { label: "Booking", value: "Online via Experience AlUla app", icon: "📱" },
            ].map((info, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                <div className="text-2xl">{info.icon}</div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                  <p className="font-bold text-gray-900">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Petra */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hegra vs. Petra: How Do They Compare?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Feature</th>
                  <th className="text-left p-3">Hegra (AlUla)</th>
                  <th className="text-left p-3 rounded-tr-lg">Petra (Jordan)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Scale", "Compact (111 tombs)", "Vast (800+ monuments)"],
                  ["Crowds", "Much quieter", "Very busy year-round"],
                  ["Preservation", "Excellent", "Excellent"],
                  ["Access", "Guided tours only", "Self-guided possible"],
                  ["Cost", "Lower", "Higher"],
                  ["Experience", "Exclusive, intimate", "Epic, overwhelming"],
                  ["Photography", "Outstanding", "Outstanding"],
                ].map(([feature, hegra, petra], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{feature}</td>
                    <td className="p-3 text-amber-700 border-b border-gray-100">{hegra}</td>
                    <td className="p-3 text-blue-700 border-b border-gray-100">{petra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Final Verdict
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hegra is a once-in-a-lifetime experience. While it doesn't match
            Petra's scale, it offers something Petra no longer can: intimacy.
            With fewer crowds, pristine preservation, and an authentic
            wilderness setting, Hegra feels like a genuine discovery rather than
            a tourist circus.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you're visiting AlUla, Hegra is non-negotiable. It is the reason
            AlUla exists on the global travel map.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Get to Hegra in Comfort
          </h2>
          <p className="text-amber-100 mb-6">
            Book a private taxi from your AlUla hotel to Hegra and back — so
            you can focus on the experience, not the logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Taxi to Hegra
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
