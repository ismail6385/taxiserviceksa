import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wadi Mitna Visitor Guide: Taif's Historical & Sacred Valley",
  description:
    "Explore Wadi Mitna in Taif, Saudi Arabia. Read about the historical sanctuary, the story of the Prophet's visit, Addas Mosque, architecture, and visitor tips for 2026.",
  keywords: [
    "Wadi Mitna Taif",
    "Addas Mosque Taif",
    "historical sites Taif",
    "Prophet Muhammad Taif visit",
    "Wadi Mitna history",
    "sacred valley Taif",
    "visiting Wadi Mitna",
  ],
  openGraph: {
    title: "Wadi Mitna Visitor Guide: Taif's Historical & Sacred Valley",
    description:
      "A visitor's guide to the historic Wadi Mitna valley in Taif, home to the Addas Mosque and rich Islamic heritage.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/wadi-mitna-visitor-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/wadi-mitna-visitor-guide/",
  },
};

export default function WadiMitnaVisitorGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1c120c] via-[#35251b] to-[#604434] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Historical Guide · Sacred Valley · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Wadi Mitna Visitor Guide
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover the serene and historic valley of Wadi Mitna — home to ancient pomegranate groves, historical sanctuaries, and the historic Addas Mosque.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Context Box */}
        <div className="bg-amber-50 border-l-4 border-amber-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-amber-800 mb-2">
            🕌 Historical Significance
          </h2>
          <p className="text-amber-700">
            Wadi Mitna (or Wadi Al-Mitna) holds a highly revered status in Islamic history. It is the valley where Prophet Muhammad (PBUH) sought refuge and rest under the shade of a vineyard after facing rejection in Taif, and where he met Addas, the Christian youth who offered him grapes.
          </p>
        </div>

        {/* History Detail */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Historical Context of Wadi Mitna</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During the Year of Sorrow (circa 620 CE), the Prophet Muhammad traveled to Taif to invite the local Banu Thaqif tribe to Islam. Met with hostility, he was forced out of the town and retreated into the surrounding agricultural orchards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In Wadi Mitna, he sought rest inside an orchard belonging to Utbah and Shaybah ibn Rabi'ah. Their servant, Addas, a Christian slave from Nineveh, brought him a plate of fresh grapes. Upon hearing the Prophet recite the name of God before eating, Addas recognized his prophethood and embraced Islam.
          </p>
        </section>

        {/* Key Landmarks */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Landmarks to See in Wadi Mitna</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Addas Mosque (Masjid Addas)", desc: "A small, quiet historic mosque built on the site of the ancient vineyard where the historical encounter between the Prophet and Addas occurred.", icon: "🕌" },
              { title: "Ancient Pomegranate Groves", desc: "The valley is still lined with traditional farm orchards growing figs, grapes, and Taif's famous sweet pomegranates.", icon: "🌳" },
              { title: "Stone Water Channels", desc: "Traditional dry-stone irrigation walls and gravity-fed water channels (falaj) that have watered the valley farms for centuries.", icon: "💧" },
              { title: "Historical Escarpment Walls", desc: "The valley is bounded by rugged granite cliffs, providing scenic valley hiking pathways and sunset viewpoints.", icon: "⛰️" },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50/50 rounded-xl p-5 border border-amber-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Your Visit</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "**Dress Modestly:** As this is a historical and religious sanctuary, modest clothing covering shoulders and knees is mandatory for both men and women.",
              "**Respect Private Farms:** Many pomegranate and grape orchards in the valley are privately owned. Do not enter farm fields or pick fruits without direct permission from local owners.",
              "**Quiet Environment:** The atmosphere around Addas Mosque is extremely peaceful. Maintain silence and respect worshipers who visit the site.",
              "**Combine Your Visit:** Combine your trip to Wadi Mitna with a visit to the historic Shubra Palace and Taif's old souq center, which are situated nearby.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        </section>

        {/* Getting There */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Find Wadi Mitna</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wadi Mitna is located in the northern outskirts of Taif city, nestled in a valley area that branches off the main roads. Because it is a traditional residential and agricultural pocket, navigation can be slightly tricky for tourists.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hiring a local driver who knows the specific locations of Addas Mosque and the valley routes is the easiest and most convenient way to explore the area.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#35251b] to-[#604434] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Historic Tour of Taif</h2>
          <p className="text-amber-100 mb-6">
            Explore Wadi Mitna, Addas Mosque, and other historic sites in Taif with a professional local driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition">
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
