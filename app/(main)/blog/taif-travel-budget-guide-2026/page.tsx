import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif Travel Budget Guide 2026: Cost Breakdown",
  description:
    "How much does it cost to visit Taif, Saudi Arabia in 2026? Read our detailed travel budget guide covering hotel rates, dining costs, ticket fees, and taxi fares.",
  keywords: [
    "Taif travel budget",
    "how much is hotel in Taif",
    "Taif travel cost 2026",
    "Taif budget guide",
    "Taif taxi fare",
    "cheap hotels Taif",
    "Saudi Arabia trip cost",
  ],
  openGraph: {
    title: "Taif Travel Budget Guide 2026: Cost Breakdown",
    description:
      "A complete cost breakdown for traveling to Taif — from budget hotels and street food to luxury mountain resorts.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-travel-budget-guide-2026/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-travel-budget-guide-2026/",
  },
};

export default function TaifTravelBudgetGuide2026() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1d1d1b] via-[#3c3c3a] to-[#6d6d6a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Budget Guide · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif Travel Budget Guide 2026
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Plan your expenses. A complete breakdown of accommodation, dining, transportation, and entry fees in Taif.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Daily Budgets */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estimated Daily Expenses by Traveler Tier</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tier: "Budget Traveler",
                cost: "SAR 150–250 / day",
                hotel: "SAR 100–150 (guesthouses)",
                food: "SAR 30–50 (local restaurants/street food)",
                transport: "Shared taxis / walking",
                color: "border-blue-500 bg-blue-50/50",
              },
              {
                tier: "Mid-Range Traveler",
                cost: "SAR 400–700 / day",
                hotel: "SAR 250–450 (3 or 4-star hotels)",
                food: "SAR 100–150 (family restaurants/resort cafes)",
                transport: "Private taxi transfers",
                color: "border-green-500 bg-green-50/50",
              },
              {
                tier: "Luxury Traveler",
                cost: "SAR 1,500–3,500+ / day",
                hotel: "SAR 1,000–2,500+ (high-end mountain resorts)",
                food: "SAR 300–500 (fine dining & resort clubs)",
                transport: "Private driver / full day rental",
                color: "border-purple-500 bg-purple-50/50",
              },
            ].map((t, i) => (
              <div key={i} className={`border-t-4 rounded-xl p-5 shadow-sm ${t.color}`}>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{t.tier}</h3>
                <p className="text-green-700 font-extrabold text-sm mb-3">{t.cost}</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>🏨 **Stay:** {t.hotel}</li>
                  <li>🍽️ **Food:** {t.food}</li>
                  <li>🚖 **Transit:** {t.transport}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions Fees */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Attractions Entry Fees (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Attraction</th>
                  <th className="text-left p-3">Ticket Price</th>
                  <th className="text-left p-3 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Al Rudaf Park", "Free ✅", "Fountain shows are also free"],
                  ["Al Hada Cable Car", "SAR 30–50 (One-way) / SAR 50–70 (Return)", "Tickets bought on-site"],
                  ["Taif Zoo", "SAR 15–20", "Mini ride tickets bought inside"],
                  ["Shubra Palace Museum", "Free (Temporary restoration limits)", "Exterior views always free"],
                  ["Al Shafa Rose Farms", "Free ✅", "Distillery tours are usually free; products cost extra"],
                  ["Saiysad National Park", "Free ✅", "Excellent for low-cost hiking"],
                ].map(([name, price, notes], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-green-700 font-bold border-b border-gray-100">{price}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transportation Costs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transportation Expenses</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because Taif's attractions are scattered between the city center and the mountain villages (30-40km away), transport is a significant portion of the budget.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• **Jeddah/Makkah to Taif Transfer:** A one-way private taxi ranges from **SAR 350 to SAR 700**, depending on vehicle size.</li>
            <li>• **City Taxi Rides:** Short trips within Taif city center cost **SAR 15 to SAR 30**.</li>
            <li>• **Mountain Day Tours:** Hiring a private driver for a full 8-hour day to Al Shafa and Al Hada ranges from **SAR 350 to SAR 500**.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#3c3c3a] to-[#6d6d6a] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Control Your Transport Budget</h2>
          <p className="text-gray-200 mb-6">
            Avoid overpaying on ad-hoc taxis. Pre-book your fixed-rate private transfers with us for complete budget transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition">
              Book Fixed-Rate Taxi
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
