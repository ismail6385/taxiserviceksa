import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Al Hada vs Al Shafa: Which Mountain Resort to Visit in Taif",
  description:
    "Al Hada vs Al Shafa: Compare the altitude, climate, views, cable cars, theme parks, rose gardens, and family activities of Taif's two famous mountain destinations.",
  keywords: [
    "Al Hada vs Al Shafa",
    "is Al Hada or Al Shafa better",
    "Taif mountains comparison",
    "Al Shafa visitor guide",
    "Al Hada cable car",
    "things to do in Taif",
    "Al Hada vs Al Shafa weather",
  ],
  openGraph: {
    title: "Al Hada vs Al Shafa: Which Mountain Resort to Visit in Taif",
    description:
      "A complete visitor comparison of Al Hada and Al Shafa — Taif's two premier mountain resort getaways.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/al-hada-vs-al-shafa-comparison/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/al-hada-vs-al-shafa-comparison/",
  },
};

export default function AlHadaVsAlShafaComparison() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1c122e] via-[#3c1b6e] to-[#7c3aed] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Mountain Guide · Al Hada vs Al Shafa · 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Al Hada vs Al Shafa: Which Should You Visit?
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Taif's two legendary mountain retreats compared. Find out which fits your style — developed family fun or rugged wilderness.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Verdict */}
        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-purple-800 mb-2">
            🏁 The Quick Verdict
          </h2>
          <p className="text-purple-700 leading-relaxed">
            *   Choose **Al Hada** if you want to ride the iconic cable car, visit developed amusement parks, enjoy luxury resorts, and want easy highway access.
            *   Choose **Al Shafa** if you prefer higher altitudes (colder weather), wild mountain hiking trails, exploring traditional rose distilleries, and scenic cliff-edge views with less crowds.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Feature</th>
                  <th className="text-left p-3">Al Hada</th>
                  <th className="text-left p-3 rounded-tr-lg">Al Shafa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Average Altitude", "~1,800 meters", "~2,200 meters (Higher & Cooler)"],
                  ["Vibe", "Bustling, resort-style, touristy", "Quiet, traditional, village-style"],
                  ["Cable Car Gondola", "Yes ✅", "No"],
                  ["Amusement Parks", "Yes ✅", "No"],
                  ["Rose Farms", "Yes", "Yes ✅ (Primary region)"],
                  ["Scenic Overlooks", "Winding highway lights view", "Sheer cliff-edge drop views"],
                  ["Distance from Taif", "~30 km", "~35 km"],
                ].map(([feat, hada, shafa], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{feat}</td>
                    <td className="p-3 text-green-700 border-b border-gray-100">{hada}</td>
                    <td className="p-3 text-purple-700 border-b border-gray-100">{shafa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Altitude & Weather */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Altitude & Temperature Differences</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Even though they are located in the same mountain range, the difference of 400 meters in altitude makes their climate distinct:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Al Hada (1,800m):</h3>
              <p className="text-gray-600 text-sm">
                Stays cool in the summer afternoons (25–30°C). Beautiful evenings. It receives a moderate amount of fog in the winter months.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Al Shafa (2,200m):</h3>
              <p className="text-gray-600 text-sm">
                The cooler of the two. Even in mid-summer, it rarely exceeds 22–26°C. During the winter, it can drop to freezing levels (2–10°C) with dense fog and low-lying clouds swirling through the valleys.
              </p>
            </div>
          </div>
        </section>

        {/* Rose Industry */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rose Industry</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both mountains produce the famous Damask rose water and rose oil, but they differ in farming style.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            **Al Shafa** is considered the primary agricultural rose growing region due to its higher moisture levels and terrace farming blocks. It features vast fields of rose bushes blanketing the hillsides in spring (March–April).
          </p>
          <p className="text-gray-700 leading-relaxed">
            **Al Hada** has some farms but is more celebrated for housing the primary commercial rose perfume factories (like Bin Salman and Al Qadi), making it the best location to tour distillation facilities.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Recommendation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You do not necessarily have to pick just one. Since they are located within 30–45 minutes drive of each other, **visiting both in a single day is very common**.
          </p>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-900 mb-1">💡 The Perfect Day Itinerary:</h3>
            <p className="text-gray-700 text-sm">
              Start your morning in **Al Shafa** to tour the high-altitude rose fields and enjoy the spectacular mountain cliff-edge overlooks. After lunch, take the scenic road to **Al Hada** to ride the cable car at sunset and see the spiral highway lights blink on.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1c122e] to-[#3c1b6e] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Explore Both Peaks Comfortably</h2>
          <p className="text-purple-100 mb-6">
            Book a private taxi for a full day and let an experienced local driver take you from Al Shafa to Al Hada safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition">
              Book Mountain Taxi
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
