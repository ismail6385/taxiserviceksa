import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shubra Palace Museum Guide: Taif's Historical Masterpiece",
  description:
    "Discover Shubra Palace Museum in Taif. Read about its architectural style, royal history, gallery exhibits, ticket prices, and opening hours for 2026.",
  keywords: [
    "Shubra Palace Taif",
    "Shubra Palace Museum",
    "historical places Taif",
    "Taif heritage museum",
    "Shubra Palace tickets",
    "Shubra Palace architecture",
    "King Abdulaziz Taif palace",
  ],
  openGraph: {
    title: "Shubra Palace Museum Guide: Taif's Historical Masterpiece",
    description:
      "Visit Shubra Palace, the historic royal residence in Taif featuring a fusion of Hijazi and Roman architecture.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/shubra-palace-museum-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/shubra-palace-museum-guide/",
  },
};

export default function ShubraPalaceMuseumGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2b1b17] via-[#4a2e2b] to-[#7f4f46] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Heritage Guide · Shubra Palace · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Shubra Palace Museum Guide
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Step back in time at Taif's most iconic royal residence — an architectural marvel blending traditional Hijazi heritage with elegant Roman styles.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Built In", value: "1905", icon: "🏛️" },
            { label: "Location", value: "Shubra Street, Taif", icon: "📍" },
            { label: "Architecture", value: "Hijazi-Roman", icon: "🎨" },
            { label: "Historical Role", value: "Royal Residence", icon: "👑" },
          ].map((info, i) => (
            <div key={i} className="bg-amber-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-amber-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* What is Shubra Palace */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Shubra Palace?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shubra Palace is one of the most prominent historical landmarks in Taif. Erected in 1905 on the orders of Sharif Ali Pasha, the former ruler of Makkah, it was later adopted as a royal residence by King Abdulaziz, the founding monarch of Saudi Arabia, and King Faisal during their summer visits to Taif.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The palace is highly celebrated for its distinctive white plaster facade, grand staircases, marble columns, and beautiful hand-carved wooden latticework windows (Rowashin) which reflect traditional Hijazi craft.
          </p>
        </section>

        {/* Architectural Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Architectural Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Elegant Wooden Rowashin", desc: "Intricately carved teakwood bay windows adorn the exterior, allowing breeze to enter while preserving indoor privacy.", icon: "🪟" },
              { title: "Carrara Marble Columns", desc: "The grand foyer features beautiful Italian Carrara marble pillars supporting the towering arched ceilings.", icon: "🏛️" },
              { title: "Four-Storey Structure", desc: "Consists of a basement and three spacious floors containing over 150 rooms designed for royal administrative and residential use.", icon: "🏢" },
              { title: "Grand Twin Staircases", desc: "A majestic double staircase sweeps up from the central lobby, providing a breathtaking view of the interior layout.", icon: "🪜" },
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Status & Renovation Alert */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Visitor Status & Hours</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ RCU Restoration Project</h3>
            <p className="text-yellow-700 text-sm mb-3">
              Shubra Palace has been undergoing extensive restoration works by the Ministry of Culture to preserve its plasterwork and structural timbers. The interior museum exhibitions may have restricted access or temporary closure periods during these heritage works.
            </p>
            <p className="text-yellow-700 text-sm">
              Even when the interior is restricted, the exterior gardens and stunning white facades are beautiful to view from Shubra Street. Always check with local authorities for the latest interior tour availability.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for History Enthusiasts</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Visit in the late afternoon to see the golden hour light hitting the white marble and plaster walls.",
              "Take a walk around the surrounding Shubra neighborhood to see other historic (but unrestored) villas.",
              "Ask a local guide or driver about the history of the palace as a summer administrative hub for the early Saudi government.",
              "Prepare to spend about 45 minutes to an hour viewing the architecture and taking photographs.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#4a2e2b] to-[#7f4f46] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Historic Taif Tour</h2>
          <p className="text-amber-100 mb-6">
            Explore Shubra Palace and Taif's historic quarters with a local driver who knows the city's rich history.
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
