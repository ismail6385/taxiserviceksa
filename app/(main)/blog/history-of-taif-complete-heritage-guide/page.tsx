import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "History of Taif: Complete Heritage Guide 2026",
  description:
    "Explore the rich history of Taif, Saudi Arabia. Read about ancient pre-Islamic rock art, the Banu Thaqif tribe, early Islamic history, and 20th-century royal summer palaces in 2026.",
  keywords: [
    "history of Taif",
    "Taif heritage guide",
    "Banu Thaqif tribe Taif",
    "Prophet Muhammad visit to Taif",
    "historic places in Taif",
    "Shubra Palace history",
    "ancient Taif",
  ],
  openGraph: {
    title: "History of Taif: Complete Heritage Guide 2026",
    description:
      "Journey through millennia of history — from ancient petroglyphs and early Islamic battles to a royal administrative summer retreat.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/history-of-taif-complete-heritage-guide/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/history-of-taif-complete-heritage-guide/",
  },
};

export default function HistoryOfTaifCompleteHeritageGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#20150f] via-[#3d271a] to-[#6d4c38] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Heritage Guide · History · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            History of Taif: Complete Heritage Guide
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Explore the multi-layered past of Saudi Arabia's mountain capital — from ancient stone carvings and early Islamic events to summer royal governance.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Historical Eras */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Historical Eras of Taif</h2>
          <div className="space-y-6">
            {[
              {
                era: "Pre-Islamic & Banu Thaqif Era",
                desc: "Taif has been inhabited for thousands of years. Before Islam, it was the sanctuary of the Banu Thaqif tribe. The city was famous for its stone wall defenses and served as a primary agricultural hub supplying food to Makkah. It housed the famous shrine of Al-Lat.",
                icon: "🪨",
              },
              {
                era: "Early Islamic History",
                desc: "In 620 CE, Prophet Muhammad (PBUH) visited Taif to invite the Thaqif tribe to Islam, facing severe rejection. Later, following the conquest of Makkah and the Battle of Hunayn, Taif embraced Islam. The historic Addas Mosque in Wadi Mitna marks this early period.",
                icon: "🕌",
              },
              {
                era: "Ottoman Rule & The Sharifate",
                desc: "Under Ottoman governance and the Sharifs of Makkah, Taif grew as a summer retreat for wealthy Hijazi elites. Winding mountain trails were reinforced, and stone orchards expanded.",
                icon: "🏰",
              },
              {
                era: "The Saudi Royal Summer Hub",
                desc: "After the unification of Saudi Arabia, King Abdulaziz established Taif as the summer administrative capital. The city saw the construction of magnificent palaces like Shubra Palace and became the site of early diplomatic treaties.",
                icon: "👑",
              },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50/30 border border-amber-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.era}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Sites Map */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Must-Visit Heritage Sites</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• **Shubra Palace:** The white-fronted royal summer palace built in 1905.</li>
            <li>• **Addas Mosque (Wadi Mitna):** Historic sanctuary where the Prophet (PBUH) sought refuge.</li>
            <li>• **Souq Okaz Site:** The historic pre-Islamic market where poets across Arabia gathered.</li>
            <li>• **Al-Hada Old Camel Road:** Beautiful stone pathways climbing up the cliffs.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#3d271a] to-[#6d4c38] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Heritage Taxi Tour</h2>
          <p className="text-amber-100 mb-6">
            Rent a private taxi with a professional local driver to tour Taif's historic palaces and sacred locations in comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition">
              Book Historic Tour
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
