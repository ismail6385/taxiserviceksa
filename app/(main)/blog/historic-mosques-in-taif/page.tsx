import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Historic Mosques in Taif: Sacred Sites & Visitor Guide 2026",
  description:
    "Discover the most historically significant mosques in Taif. A complete guide to Masjid Addas, Masjid Al-Qantara, and other sacred sites in 2026.",
  keywords: [
    "historic mosques in Taif",
    "Masjid Addas Taif",
    "sacred sites Taif",
    "mosques to visit in Taif",
    "Taif Islamic heritage",
    "Wadi Mitna mosque",
    "Taif pilgrim sites",
  ],
  openGraph: {
    title: "Historic Mosques in Taif: Sacred Sites & Visitor Guide 2026",
    description:
      "A complete guide to the most historically significant mosques and sacred sites in Taif, Saudi Arabia.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/historic-mosques-in-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/historic-mosques-in-taif/",
  },
};

export default function HistoricMosquesInTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0c1a14] via-[#1b3a28] to-[#2d6045] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Islamic Heritage · Sacred Sites · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Historic Mosques in Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Walk through the footsteps of history. A guide to Taif's most sacred and historically significant mosques and Islamic sites.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif holds a deeply revered place in early Islamic history. It is the city where Prophet Muhammad (PBUH) sought to spread Islam before the conquest of Makkah, and where several companions of the Prophet found refuge and performed acts of devotion. As a result, several mosques and sacred sites carry immense historical and spiritual importance.
          </p>
        </section>

        {/* Key Mosques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Historic Mosques & Sacred Sites</h2>
          <div className="space-y-6">
            {[
              {
                name: "Masjid Addas (Wadi Mitna)",
                significance: "Most Historically Significant",
                desc: "Built on the site of the ancient vineyard in Wadi Mitna where Prophet Muhammad (PBUH) rested after facing rejection in Taif. It was here that Addas, a Christian slave, offered him grapes and embraced Islam. The mosque is small, quiet, and deeply atmospheric.",
                tip: "Visit in the early morning for a quiet, uninterrupted spiritual experience.",
                icon: "🕌",
              },
              {
                name: "Masjid Al-Qantara",
                significance: "Early Islamic Site",
                desc: "One of the oldest mosque sites in Taif, traditionally associated with early Muslim prayers and gatherings after the Battle of Taif during the Prophet's time.",
                tip: "Located in the historic city center near the old souq district.",
                icon: "🕌",
              },
              {
                name: "Masjid Al-Wahab (Grand Mosque)",
                significance: "Modern Landmark",
                desc: "Taif's primary grand mosque, featuring stunning Islamic geometric architecture, twin minarets, and a large open courtyard that fills with thousands of worshipers for Jumu'ah (Friday prayer).",
                tip: "Non-Muslim tourists should observe from respectful distance outside.",
                icon: "🕌",
              },
            ].map((mosque, i) => (
              <div key={i} className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-2">{mosque.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{mosque.name}</h3>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                  {mosque.significance}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{mosque.desc}</p>
                <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
                  <p className="text-amber-700 text-xs font-semibold">💡 Visitor Tip: {mosque.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visitor Etiquette */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mosque Visitor Etiquette</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <ul className="space-y-2 text-gray-700 text-sm font-medium">
              <li>• <strong>Remove Shoes:</strong> Always remove footwear before entering any mosque.</li>
              <li>• <strong>Modest Dress:</strong> Full body coverage is required. Women must cover their hair with a scarf.</li>
              <li>• <strong>Prayer Times:</strong> Avoid visiting during active prayer times unless you intend to pray.</li>
              <li>• <strong>Non-Muslims:</strong> Non-Muslims are generally NOT permitted to enter active mosques in Saudi Arabia. Exterior appreciation and photography from outside are acceptable.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1b3a28] to-[#2d6045] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Sacred Sites Tour</h2>
          <p className="text-green-100 mb-6">
            Visit Masjid Addas, Wadi Mitna, and other historic Islamic sites in Taif with a knowledgeable local driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Sacred Tour Taxi
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
