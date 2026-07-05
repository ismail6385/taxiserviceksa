import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can Non-Muslims Visit AlUla? Complete Guide for Non-Muslim Tourists 2026",
  description:
    "Can non-Muslims visit AlUla, Saudi Arabia? Yes! Find out what non-Muslim tourists can see, what restrictions apply, dress codes, cultural guidelines, and tips for a respectful visit in 2026.",
  keywords: [
    "can non-Muslims visit AlUla",
    "non-Muslim tourists Saudi Arabia",
    "AlUla non-Muslim guide",
    "Saudi Arabia non-Muslim travel",
    "AlUla tourist rules",
    "non-Muslim visit Hegra",
    "Saudi Arabia religion travel rules",
  ],
  openGraph: {
    title: "Can Non-Muslims Visit AlUla? Complete Guide for Non-Muslim Tourists 2026",
    description:
      "Non-Muslims are warmly welcome in AlUla. Here's everything you need to know about visiting as a non-Muslim tourist.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/can-non-muslims-visit-alula/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/can-non-muslims-visit-alula/",
  },
};

export default function CanNonMuslimsVisitAlUla() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Travel Guide · Non-Muslim Visitors · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Can Non-Muslims Visit AlUla?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Absolutely yes. Non-Muslims from all over the world visit AlUla
            every year. Here's your complete guide to a respectful, enjoyable
            visit.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            ✅ Yes — Non-Muslims Are Welcome in AlUla
          </h2>
          <p className="text-green-700">
            AlUla is a fully open tourism destination. Saudi Arabia launched its
            international tourist visa program in 2019, and since then, millions
            of non-Muslim visitors from around the world have explored the
            kingdom — including AlUla. No religion-based entry restrictions
            apply to tourist destinations.
          </p>
        </div>

        {/* What Non-Muslims Can Visit */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Can Non-Muslims Visit in AlUla?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Non-Muslims have full access to virtually all of AlUla's tourist
            attractions. The only typical restriction in Saudi Arabia applies to
            the holy cities of Makkah and Madinah — not AlUla.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Hegra UNESCO World Heritage Site ✅",
              "Dadan & Jabal Ikmah ✅",
              "Elephant Rock ✅",
              "Old Town AlUla ✅",
              "AlUla Oasis & Farms ✅",
              "Hot Air Balloon Rides ✅",
              "Desert Hiking & Camping ✅",
              "Harrat Uwayrid Lava Fields ✅",
              "AlUla Night Market & Restaurants ✅",
              "Luxury Resorts (Sharaan, Habitas) ✅",
            ].map((site, i) => (
              <div
                key={i}
                className="bg-green-50 rounded-lg p-3 text-green-800 text-sm font-medium"
              >
                {site}
              </div>
            ))}
          </div>
        </section>

        {/* Restricted for Non-Muslims */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Restrictions Apply to Non-Muslims?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In AlUla specifically, there are very few restrictions for
            non-Muslims. The broader Saudi Arabia rules apply:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Mosques",
                desc: "Non-Muslims are generally not permitted to enter mosques, although some historic mosques in tourist areas may have exceptions. Always ask before entering.",
                severity: "moderate",
              },
              {
                title: "Prayer Times",
                desc: "During the 5 daily prayer times, some shops briefly close. This is typically 10–20 minutes and does not affect your ability to visit outdoor sites.",
                severity: "low",
              },
              {
                title: "Ramadan Fasting Rules",
                desc: "During Ramadan, non-Muslims must not eat, drink, or smoke in public during daylight hours. Hotels and designated areas provide facilities.",
                severity: "moderate",
              },
              {
                title: "Alcohol",
                desc: "Alcohol is prohibited throughout Saudi Arabia — for Muslims and non-Muslims alike. No exceptions.",
                severity: "strict",
              },
            ].map((r, i) => {
              const colors: Record<string, string> = {
                low: "bg-yellow-50 border-yellow-200",
                moderate: "bg-orange-50 border-orange-200",
                strict: "bg-red-50 border-red-200",
              };
              return (
                <div
                  key={i}
                  className={`border rounded-xl p-5 ${colors[r.severity]}`}
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dress Code */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dress Code for Non-Muslim Visitors
          </h2>
          <div className="bg-amber-50 rounded-2xl p-6">
            <p className="text-gray-700 mb-4">
              Saudi Arabia's dress code has relaxed significantly since 2019.
              Non-Muslim women are no longer required to wear an abaya, though
              modest dress is expected and appreciated.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Appropriate</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Long trousers or skirts (below knee)</li>
                  <li>• Loose-fitting tops covering shoulders</li>
                  <li>• Light scarves (useful at heritage sites)</li>
                  <li>• Comfortable, closed-toe shoes for sites</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Avoid in Public</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shorts in traditional areas</li>
                  <li>• Sleeveless tops</li>
                  <li>• Bikini/swimwear outside the pool/beach</li>
                  <li>• Very tight or revealing clothing</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Note: Resort pools and private areas have much more relaxed dress
              standards. Check your hotel's specific policy.
            </p>
          </div>
        </section>

        {/* Visa Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Visa Requirements for Non-Muslim Visitors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Citizens of 60+ countries can obtain a Saudi tourist e-visa easily
            online via the Visit Saudi website (visitsaudi.com). The process
            typically takes minutes. The visa is valid for 1 year with multiple
            entries (90 days per visit).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Visa Type", value: "e-Visa", icon: "🌐" },
              { label: "Processing", value: "Online, instant", icon: "⚡" },
              { label: "Validity", value: "1 Year", icon: "📅" },
              { label: "Stay", value: "90 days/visit", icon: "🏨" },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{v.icon}</div>
                <p className="text-xs text-gray-500">{v.label}</p>
                <p className="font-bold text-gray-900">{v.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cultural Tips for Non-Muslim Tourists
          </h2>
          <ul className="space-y-3">
            {[
              "Greet locals with 'As-salamu alaykum' — it's warmly appreciated",
              "Ask permission before photographing Saudi nationals, especially women",
              "Accept hospitality (dates, coffee, tea) graciously — refusal can be considered impolite",
              "Friday is the Islamic holy day; expect reduced activity in the morning",
              "Public displays of affection between couples should be kept minimal",
              "Remove shoes before entering any private home if invited",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-amber-500 font-bold">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Experience AlUla?
          </h2>
          <p className="text-amber-100 mb-6">
            Book reliable, tourist-friendly transportation for your AlUla
            adventure — our drivers are experienced with international visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Your Taxi
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
