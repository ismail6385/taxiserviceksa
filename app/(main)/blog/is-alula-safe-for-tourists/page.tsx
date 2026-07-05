import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is AlUla Safe for Tourists? Complete Safety Guide 2026",
  description:
    "Wondering if AlUla is safe for tourists? Get the complete safety guide covering crime rates, women traveling alone, road safety, health tips, and emergency contacts for AlUla 2026.",
  keywords: [
    "is AlUla safe for tourists",
    "AlUla safety guide",
    "AlUla travel safety",
    "is AlUla safe for women",
    "AlUla crime rate",
    "Saudi Arabia tourism safety",
    "AlUla travel tips",
  ],
  openGraph: {
    title: "Is AlUla Safe for Tourists? Complete Safety Guide 2026",
    description:
      "Everything you need to know about safety in AlUla — crime, roads, health, and cultural etiquette for international visitors.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/is-alula-safe-for-tourists/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/is-alula-safe-for-tourists/",
  },
};

export default function IsAlUlaSafeForTourists() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Safety Guide · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Is AlUla Safe for Tourists?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Short answer: Yes — AlUla is one of the safest tourist destinations
            in Saudi Arabia. Here's what you need to know.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            ✅ Quick Answer
          </h2>
          <p className="text-green-700">
            AlUla is extremely safe for tourists. Saudi Arabia ranks among the
            lowest crime-rate countries in the world. AlUla specifically is a
            purpose-built heritage tourism destination with modern
            infrastructure, tourist police, and a welcoming local community.
          </p>
        </div>

        {/* Crime & General Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Crime & General Safety in AlUla
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Saudi Arabia has one of the lowest crime rates in the world, and
            AlUla is no exception. Theft, mugging, and violent crime are
            virtually unheard of in the region. The city is well-patrolled, and
            the Royal Commission for AlUla (RCU) has invested heavily in tourist
            infrastructure and security.
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              "Petty theft is extremely rare",
              "No-go zones do not exist for tourists",
              "Tourist police are stationed at major attractions",
              "CCTV coverage at all major heritage sites",
              "24/7 emergency services available",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Safety for Solo Women */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Is AlUla Safe for Women Traveling Alone?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yes. Since Saudi Arabia's Vision 2030 reforms, solo female travel
            has become much more welcoming. Women no longer need a male guardian
            (mahram) to travel within Saudi Arabia. In AlUla, many international
            female travelers visit solo and report feeling very safe.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-800 mb-2">
              Tips for Women Travelers
            </h3>
            <ul className="text-amber-700 space-y-1 text-sm">
              <li>• Dress modestly (covering shoulders and knees) in public areas</li>
              <li>• Abaya is not mandatory for tourists but is appreciated in traditional areas</li>
              <li>• Book accommodation with reputable hotels</li>
              <li>• Use official taxis or pre-booked transport services</li>
              <li>• Avoid isolated desert areas after dark without a guide</li>
            </ul>
          </div>
        </section>

        {/* Road Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Road Safety in AlUla
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Road accidents are the primary safety concern in Saudi Arabia (as in
            many countries). AlUla's main roads are well-maintained, but desert
            tracks require 4WD vehicles and caution. Driving at night in desert
            areas can be hazardous due to limited lighting and wildlife.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For peace of mind, use a professional taxi or private driver service
            rather than renting a car. Local drivers know the roads, hidden
            speed limits, and safe routes to all attractions.
          </p>
        </section>

        {/* Health & Medical */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Health & Medical Safety
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Heat & Dehydration",
                desc: "Summers hit 45°C+. Always carry water, wear sunscreen, and avoid midday outdoor activities June–August.",
                icon: "🌡️",
              },
              {
                title: "Medical Facilities",
                desc: "AlUla General Hospital provides emergency care. Major clinics are available in the city center.",
                icon: "🏥",
              },
              {
                title: "Travel Insurance",
                desc: "Strongly recommended. Ensure your policy covers emergency medical evacuation to Riyadh or Jeddah.",
                icon: "📋",
              },
              {
                title: "Food & Water",
                desc: "Tap water is generally safe but bottled water is recommended. Food hygiene standards at tourist restaurants are high.",
                icon: "💧",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cultural Etiquette & Legal Safety
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Respecting local laws and customs keeps you safe legally in Saudi
            Arabia. These aren't negotiable — violations can result in fines or
            deportation.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Rule</th>
                  <th className="text-left p-3 rounded-tr-lg">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Alcohol", "Strictly prohibited. Zero tolerance policy."],
                  ["Public Display of Affection", "Avoid kissing or hugging in public"],
                  ["Photography", "Always ask permission before photographing locals"],
                  ["Dress Code", "Modest clothing required. No revealing outfits"],
                  ["Ramadan", "No eating/drinking in public during daylight hours"],
                  ["Religious Sites", "Non-Muslims may not enter mosques without permission"],
                ].map(([rule, detail], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{rule}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-100">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Emergency Contacts in AlUla
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Police", number: "999", icon: "🚔" },
              { label: "Ambulance", number: "911", icon: "🚑" },
              { label: "Fire", number: "998", icon: "🚒" },
              { label: "Traffic", number: "993", icon: "🚗" },
            ].map((c, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                <div className="text-3xl mb-1">{c.icon}</div>
                <p className="font-bold text-red-700 text-xl">{c.number}</p>
                <p className="text-gray-600 text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Final Verdict: Is AlUla Safe?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            AlUla is an exceptionally safe destination for international
            tourists. The combination of low crime, modern infrastructure,
            tourist-focused development, and a welcoming local community makes
            it one of the most secure places to visit in the Middle East. Take
            standard travel precautions — stay hydrated, dress appropriately,
            and respect local laws — and you'll have a wonderful, worry-free
            experience.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Travel Safely with a Trusted Local Driver
          </h2>
          <p className="text-amber-100 mb-6">
            Book a professional, vetted taxi for safe transportation between
            AlUla's attractions, airports, and hotels.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Safe Taxi Now
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
