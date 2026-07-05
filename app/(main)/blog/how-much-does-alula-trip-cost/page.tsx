import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does an AlUla Trip Cost? Complete Budget Guide 2026",
  description:
    "How much does it cost to visit AlUla in 2026? Complete budget breakdown covering flights, hotels, tours, food, entrance fees, transport, and money-saving tips for every budget level.",
  keywords: [
    "AlUla trip cost",
    "how much does AlUla cost",
    "AlUla budget guide",
    "AlUla travel cost 2026",
    "AlUla hotel prices",
    "Hegra ticket price",
    "AlUla trip budget",
    "AlUla travel expenses",
  ],
  openGraph: {
    title: "How Much Does an AlUla Trip Cost? Complete Budget Guide 2026",
    description:
      "Full cost breakdown for visiting AlUla — from budget backpacker to luxury splurge, know what to expect before you go.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/how-much-does-alula-trip-cost/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/how-much-does-alula-trip-cost/",
  },
};

const budgetTiers = [
  {
    tier: "Budget Traveler",
    daily: "SAR 300–500 (~$80–$133)",
    color: "blue",
    items: [
      "Mid-range hotel or guesthouse: SAR 150–250/night",
      "Shared/public meals at local restaurants: SAR 50–80/day",
      "Self-guided sites + Hegra ticket",
      "Shared taxi or day trip groups",
    ],
  },
  {
    tier: "Mid-Range Traveler",
    daily: "SAR 700–1,200 (~$187–$320)",
    color: "amber",
    items: [
      "4-star hotel: SAR 350–600/night",
      "Mix of dining options: SAR 120–200/day",
      "Private guided tours at Hegra & Dadan",
      "Private taxi between sites",
    ],
  },
  {
    tier: "Luxury Traveler",
    daily: "SAR 2,500–8,000+ (~$667–$2,133+)",
    color: "purple",
    items: [
      "Sharaan Nature Reserve or Habitas: SAR 1,500–5,000+/night",
      "Fine dining & resort restaurants: SAR 300–600/day",
      "VIP private tours, exclusive access",
      "Private driver for full day",
    ],
  },
];

export default function HowMuchAlUlaTripCost() {
  const colorMap: Record<string, string> = {
    blue: "border-blue-500 bg-blue-50",
    amber: "border-amber-500 bg-amber-50",
    purple: "border-purple-500 bg-purple-50",
  };
  const badgeMap: Record<string, string> = {
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Budget Guide · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            How Much Does an AlUla Trip Cost?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            From budget to luxury — a complete, honest cost breakdown for
            planning your AlUla adventure in 2026.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Summary Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-amber-800 mb-2">
            💰 Quick Cost Summary (Per Person, 3 Days)
          </h2>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { label: "Budget", value: "~SAR 1,500\n(~$400)" },
              { label: "Mid-Range", value: "~SAR 4,000\n(~$1,067)" },
              { label: "Luxury", value: "~SAR 15,000+\n(~$4,000+)" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 font-medium">{t.label}</p>
                <p className="font-bold text-amber-700 whitespace-pre-line text-sm mt-1">
                  {t.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Full Cost Breakdown by Category
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Category</th>
                  <th className="text-left p-3">Budget</th>
                  <th className="text-left p-3">Mid-Range</th>
                  <th className="text-left p-3 rounded-tr-lg">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hotel (per night)", "SAR 150–250", "SAR 350–600", "SAR 1,500–5,000+"],
                  ["Hegra Ticket", "SAR 95–135", "SAR 135–195", "SAR 195 (VIP)"],
                  ["Dadan Ticket", "SAR 30–50", "SAR 50–80", "SAR 80+"],
                  ["Guided Tour", "SAR 100–150", "SAR 250–400", "SAR 600–1,200"],
                  ["Food (per day)", "SAR 50–80", "SAR 120–200", "SAR 300–600"],
                  ["Hot Air Balloon", "SAR 350–500", "SAR 500–700", "SAR 700+"],
                  ["Private Taxi (full day)", "SAR 200–300", "SAR 300–450", "SAR 450–700"],
                  ["Flight (Riyadh–AlUla)", "SAR 180–300", "SAR 300–500", "SAR 600–2,000+"],
                ].map(([cat, budget, mid, lux], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{cat}</td>
                    <td className="p-3 text-blue-700 border-b border-gray-100">{budget}</td>
                    <td className="p-3 text-amber-700 border-b border-gray-100">{mid}</td>
                    <td className="p-3 text-purple-700 border-b border-gray-100">{lux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * All prices approximate and subject to change. Check current rates before booking.
          </p>
        </section>

        {/* Budget Tier Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Budget Tier Breakdown
          </h2>
          <div className="space-y-5">
            {budgetTiers.map((tier, i) => (
              <div key={i} className={`border-l-4 rounded-xl p-6 ${colorMap[tier.color]}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`${badgeMap[tier.color]} text-white font-bold px-3 py-1 rounded-full text-sm`}>
                    {tier.tier}
                  </span>
                  <span className="font-bold text-gray-900">{tier.daily} / day</span>
                </div>
                <ul className="space-y-1">
                  {tier.items.map((item, j) => (
                    <li key={j} className="text-gray-700 text-sm flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hidden Costs to Budget For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Saudi Tourist Visa",
                cost: "SAR 300 (~$80)",
                note: "Required for most nationalities; annual multiple-entry",
                icon: "🛂",
              },
              {
                title: "Travel Insurance",
                cost: "SAR 50–150/trip",
                note: "Strongly recommended; medical evacuation coverage advised",
                icon: "🛡️",
              },
              {
                title: "Airport Transfers",
                cost: "SAR 150–350",
                note: "AlUla Airport to city hotels; pre-book for best price",
                icon: "✈️",
              },
              {
                title: "Photography Permits",
                cost: "SAR 100–300",
                note: "Professional photography at heritage sites requires permits",
                icon: "📸",
              },
              {
                title: "Winter at Tantora Events",
                cost: "SAR 100–500+",
                note: "Concert tickets and premium events are sold separately",
                icon: "🎵",
              },
              {
                title: "Camel/Desert Experiences",
                cost: "SAR 100–400",
                note: "Add-on experiences not always included in tour packages",
                icon: "🐪",
              },
            ].map((cost, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{cost.icon}</span>
                  <h3 className="font-bold text-gray-900">{cost.title}</h3>
                </div>
                <p className="text-amber-700 font-semibold text-sm">{cost.cost}</p>
                <p className="text-gray-500 text-xs mt-1">{cost.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Money Saving Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Money-Saving Tips for AlUla
          </h2>
          <ul className="space-y-3">
            {[
              "Book flights and hotels 2–3 months in advance for best prices",
              "Visit in shoulder season (April, September) for lower hotel rates and fewer crowds",
              "Group Hegra visits — sharing a guide with others reduces per-person cost",
              "Book a private taxi for the full day vs. per-trip rates — far cheaper for multiple sites",
              "Eat at local restaurants in AlUla city rather than resort restaurants",
              "Check the Experience AlUla app for discounted combo ticket packages",
              "Riyadh or Jeddah flight connections are often cheaper than direct routes",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
            Control Your Transport Costs
          </h2>
          <p className="text-amber-100 mb-6">
            Pre-book a private taxi at a fixed rate and avoid overpaying for
            ad-hoc rides. Transparent pricing, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Get Fixed-Rate Taxi
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
