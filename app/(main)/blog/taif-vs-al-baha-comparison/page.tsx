import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif vs Al Baha: Which Mountain Destination Is Better? 2026",
  description:
    "Taif vs Al Baha: Compare the weather, scenery, historical villages, forests, roads, and activities of Saudi Arabia's two neighboring mountain regions in 2026.",
  keywords: [
    "Taif vs Al Baha",
    "is Taif or Al Baha better",
    "Al Baha tourist attractions",
    "Taif vs Al Baha comparison",
    "Hejaz mountains travel",
    "Thee Ayn heritage village",
    "Al Baha guide",
  ],
  openGraph: {
    title: "Taif vs Al Baha: Which Mountain Destination Is Better? 2026",
    description:
      "A detailed visitor comparison of Taif and Al Baha — the two high-altitude retreats located in Saudi Arabia's western highlands.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-vs-al-baha-comparison/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-vs-al-baha-comparison/",
  },
};

export default function TaifVsAlBahaComparison() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1c2e17] via-[#2f5227] to-[#508a41] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Highland Battle · Taif vs Al Baha · 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif vs Al Baha: Complete Comparison
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Two neighboring mountain getaways in the Sarawat range. We break down the differences in landscapes, historic villages, and tourist attractions.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            🏁 The Quick Verdict
          </h2>
          <p className="text-green-700 leading-relaxed">
            *   Choose **Taif** if you want developed family activities, luxury mountain resorts, cable car rides, historic royal palaces, and famous rose distilleries.
            *   Choose **Al Baha** if you are looking for spectacular, winding cliff roads, wilder green forests, dense fog, and exploring dramatic heritage sites like the Thee Ayn marble village.
          </p>
        </div>

        {/* Head to Head Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Feature</th>
                  <th className="text-left p-3">Taif</th>
                  <th className="text-left p-3 rounded-tr-lg">Al Baha</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Average Altitude", "~1,879 meters", "~2,150 meters (Cooler & mistier)"],
                  ["Famous For", "Rose gardens, cable car, historic palaces", "Thee Ayn marble village, forests, winding roads"],
                  ["Atmosphere", "Bustling, historic, developed", "Wild, quiet, tranquil, traditional"],
                  ["Top Nature Spot", "Al Shafa (2,200m) & Al Hada", "Raghadan Forest Park & Khairah Forest"],
                  ["Top Cultural Spot", "Shubra Palace & Okaz Souq", "Thee Ayn Heritage Village (UNESCO candidate)"],
                  ["Accessibility", "1.5 hours drive from Jeddah/Makkah", "4 hours drive south of Taif or local flight"],
                ].map(([feat, taif, baha], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{feat}</td>
                    <td className="p-3 text-green-700 border-b border-gray-100">{taif}</td>
                    <td className="p-3 text-blue-700 border-b border-gray-100">{baha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scenery & Forests */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature & Forests</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            **Al Baha** is often called the 'Garden of Saudi Arabia' due to its high density of natural forests.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Al Baha Forests:</h3>
              <p className="text-gray-600 text-sm">
                Places like **Raghadan Forest Park** and **Khairah Forest** feature dense natural juniper forests and steep valleys that frequently fill with thick fog and low clouds during summer afternoons.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Taif Highlands:</h3>
              <p className="text-gray-600 text-sm">
                Taif is characterized by dramatic rock faces and sand valleys, with pockets of juniper and wild olive trees. It is more arid than Al Baha but features beautiful manicured public parks like Al Rudaf.
              </p>
            </div>
          </div>
        </section>

        {/* Heritage & Culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Heritage & Historical Villages</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you love traditional architecture and history, both regions offer incredible historical context.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Thee Ayn Heritage Village (Al Baha):</h3>
              <p className="text-gray-700 text-sm">
                A 400-year-old stone village built on a mountain of white marble. The multi-storey slate-stone houses are spectacularly preserved, set against banana plantations and a freshwater spring. A true must-visit.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Shubra Palace & Old Souq (Taif):</h3>
              <p className="text-gray-700 text-sm">
                Taif features grand white palaces built in the early 20th century, which served as summer retreats for the early Saudi monarchs, offering a more administrative and modern royal history.
              </p>
            </div>
          </div>
        </section>

        {/* Distance & Travel */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distance & How to Get There</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif is located approximately **220 km north of Al Baha**. The journey between the two cities takes about **2.5 to 3 hours** along the scenic Sarawat mountain highway (Route 15).
          </p>
          <p className="text-gray-700 leading-relaxed">
            The highway is beautiful, passing through dozens of mountain tunnels, cliff faces, and high-altitude agricultural valleys. Many travelers hire a private driver to make a day trip or transfer comfortably between Taif and Al Baha.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#2f5227] to-[#508a41] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Mountain Highway Taxi</h2>
          <p className="text-green-100 mb-6">
            Travel comfortably between Taif and Al Baha. Pre-book your private mountain transfer today at a fixed rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Taxi to Al Baha
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
