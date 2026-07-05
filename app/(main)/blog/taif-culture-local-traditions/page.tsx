import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif Culture & Local Traditions: Heritage Guide 2026",
  description:
    "Discover the unique culture and traditions of Taif, Saudi Arabia. Explore the hospitality rules, local honey markets, folkloric dances, and rose farming heritage in 2026.",
  keywords: [
    "Taif culture",
    "local traditions Taif",
    "Saudi culture Taif",
    "traditional dances Taif",
    "Taif hospitality",
    "Hejaz cultural traditions",
  ],
  openGraph: {
    title: "Taif Culture & Local Traditions: Heritage Guide 2026",
    description:
      "Understand the rich cultural identity, warm hospitality, folklore, and culinary heritage of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-culture-local-traditions/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-culture-local-traditions/",
  },
};

export default function TaifCultureLocalTraditions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2d1b15] via-[#4d2d24] to-[#8c503e] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Culture Guide · Traditions · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif Culture & Local Traditions
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Experience the soul of the Hejaz highlands. Learn about standard hospitality customs, folkloric dances, and agricultural heritage.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Hospitality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mountain Hospitality (Karram)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Taif's highland culture, hospitality is a cornerstone of daily life. Visitors are welcomed with traditional cups of Arabic coffee (Qahwa) served alongside fresh local dates and mint-infused tea. Accepting these gestures is highly appreciated and reflects mutual respect.
          </p>
        </section>

        {/* Local Folklore & Music */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Folkloric Music & Dances</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif has a rich tradition of folkloric arts. During national holidays and rose festivals, local troupes perform traditional dances:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• **Al-Majrour:** A traditional song and dance style unique to Taif, featuring rhythmic clapping, tambourines, and synchronized steps.</li>
            <li>• **Ardah:** The traditional Saudi sword dance representing unity and heritage, often performed at royal receptions and cultural events.</li>
          </ul>
        </section>

        {/* Rose Harvesting Culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rose Harvesting Culture</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Farming the Damask rose is not just an industry in Taif; it is a generations-old family lineage. Local families have managed the same mountain plots in Al Shafa and Al Hada for decades. The harvesting skills are passed down from grandfathers to grandchildren.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#4d2d24] to-[#8c503e] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Immerse Yourself in Taif's Culture</h2>
          <p className="text-amber-100 mb-6">
            Hire a private taxi for a full day and let a local driver guide you through the city's traditional markets and historic quarters.
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
