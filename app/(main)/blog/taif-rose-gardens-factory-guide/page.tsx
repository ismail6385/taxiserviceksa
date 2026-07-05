import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif Rose Gardens & Rose Factory Guide: Complete Visitor Info",
  description:
    "Explore Taif's famous rose gardens and perfume factories. Learn about the Damask rose harvest season (March–April), oil distillation, top factory tours, and prices for 2026.",
  keywords: [
    "Taif rose gardens",
    "Taif rose factory tour",
    "Al Qadi rose factory",
    "Taif rose water distillation",
    "visiting rose farms Taif",
    "Taif rose perfume",
    "Damask rose harvest Saudi Arabia",
  ],
  openGraph: {
    title: "Taif Rose Gardens & Rose Factory Guide: Complete Visitor Info",
    description:
      "A complete guide to touring Taif's historic rose gardens and learning the traditional art of rose oil distillation.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-rose-gardens-factory-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-rose-gardens-factory-guide/",
  },
};

export default function TaifRoseGardensFactoryGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#4c0519] via-[#881337] to-[#db2777] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Industry & Culture · Rose Factories · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif Rose Gardens & Rose Factory Guide
          </h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Journey into the heart of Saudi Arabia's fragrant high-altitude farms. Learn how millions of Damask roses are harvested and distilled into the world's most luxurious oils.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-rose-800 mb-2">
            🌸 When is Rose Season in Taif?
          </h2>
          <p className="text-rose-700">
            The famous Taif rose harvest takes place annually during the spring, usually starting in **early March** and lasting until **mid-April**. During this 6-week window, you can witness the farms in full bloom and see the copper distillation stills in active production.
          </p>
        </div>

        {/* The Distillation Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Rose Water & Oil Distillation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif roses belong to the *Rosa damascena* species (Damask Rose), famed for its deep, rich, and honey-sweet fragrance. Generating a single 12-gram vial (a tola) of pure rose oil requires distilling tens of thousands of individual hand-picked blossoms, making it one of the most expensive cosmetic ingredients in the world.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { title: "1. Dawn Harvest", desc: "Local farmers pick the blossoms at dawn, before the morning sun evaporates the delicate rose oil from the petals.", icon: "🌅" },
              { title: "2. Copper Distillation", desc: "Petals are mixed with water in large traditional copper stills, heated over wood or gas fires for 10-12 hours.", icon: "🏺" },
              { title: "3. Separation", desc: "The vapor condenses and rises. The pure rose oil floats on top of the rose water, where it is carefully extracted by hand.", icon: "🧪" },
            ].map((step, i) => (
              <div key={i} className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                <div className="text-2xl mb-2">{step.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                <p className="text-gray-600 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Factory Tours */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Rose Factories to Tour in Taif</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most perfume factories are located around the Al Hada and Al Shafa regions. Many welcome visitors during the harvest season for free or nominal fees.
          </p>
          <div className="space-y-4">
            {[
              { name: "Al Qadi Rose Factory", desc: "One of the oldest and most famous rose factories in Taif, offering informative tours explaining the traditional distillation stills and custom fragrance blending.", location: "Al Hada, Taif" },
              { name: "Bin Salman Rose Factory", desc: "Highly popular among tourists. Offers interactive farm walks, a manufacturing viewing room, and a retail store selling authentic soaps, water, and pure rose oil.", location: "Al Hada, Taif" },
              { name: "Al Kamal Rose Factory", desc: "A historic farm and factory that has been run by the same family for generations, featuring classic copper distillation lines.", location: "Al Shafa, Taif" },
            ].map((fac, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900">{fac.name}</h3>
                <p className="text-xs text-rose-700 font-semibold mb-2">📍 {fac.location}</p>
                <p className="text-gray-600 text-sm">{fac.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Buy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentic Souvenirs & Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Product</th>
                  <th className="text-left p-3">Price Range</th>
                  <th className="text-left p-3 rounded-tr-lg">Best Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pure Rose Oil (1 Tola / 12g)", "SAR 800 – 1,500+", "Luxury perfume; extremely concentrated"],
                  ["Rose Water (Premium)", "SAR 30 – 50", "Skin toner, cooking, or aromatherapy spray"],
                  ["Rose Soap & Lotions", "SAR 15 – 40", "Gentle skincare souvenirs"],
                  ["Rose Tea (Infused)", "SAR 20 – 35", "Fragrant herbal beverage served in local cafes"],
                ].map(([prod, price, use], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-rose-50/20" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{prod}</td>
                    <td className="p-3 text-rose-700 font-bold border-b border-gray-100">{price}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for Visiting */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Visitors</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "If visiting outside of March/April, you can still tour the factories and purchase products, but the fresh roses will not be blooming and the stills will not be actively burning.",
              "Prepare to smell very strongly of roses by the end of your visit, as factories offer samples of their luxury products.",
              "Ask for 'Kadi Water' (water infused with Pandanus flowers), which is another unique floral distillate produced locally.",
              "Hire a private driver to take you to the farms in Al Shafa and Al Hada, as they are located up winding mountain roads.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#881337] to-[#db2777] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Rose Farm Taxi Tour</h2>
          <p className="text-rose-100 mb-6">
            Our experienced drivers can take you directly to the best rose farms and distilleries in Al Hada and Al Shafa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-rose-800 font-bold px-8 py-3 rounded-full hover:bg-rose-50 transition">
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
