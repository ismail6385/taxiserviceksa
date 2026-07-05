import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fruit Farms & Seasonal Experiences in Taif: Harvest Guide",
  description:
    "Explore Taif's famous agricultural heritage. Learn about the harvest seasons for sweet pomegranates, grapes, figs, apricots, and honey tours in 2026.",
  keywords: [
    "fruit farms Taif",
    "seasonal experiences Taif",
    "Taif pomegranate harvest",
    "Taif grapes and figs",
    "visiting farms in Taif",
    "Taif honey tour",
    "Saudi Arabia agricultural tourism",
  ],
  openGraph: {
    title: "Fruit Farms & Seasonal Experiences in Taif: Harvest Guide",
    description:
      "A complete guide to seasonal fruit picking, farm tours, and honey tasting experiences in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/fruit-farms-seasonal-experiences-taif/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/fruit-farms-seasonal-experiences-taif/",
  },
};

export default function FruitFarmsSeasonalExperiencesTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a3d13] via-[#315f23] to-[#70b145] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Agricultural Guide · Farm Tours · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Fruit Farms & Seasonal Experiences in Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover Taif's lush orchards. Taste the legendary mountain pomegranates, sweet figs, grapes, and rich honey straight from local farms.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Taif's Rich Agricultural Valley Heritage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While much of Saudi Arabia is characterized by desert dunes, Taif's high-altitude climate and fertile volcanic valleys have supported active terrace farming for millennia. The region is highly celebrated across the Gulf for producing some of the sweetest, highest-quality fruits in the Middle East.
          </p>
        </section>

        {/* Harvest Calendar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fruit Harvest Calendar (Best Times to Visit)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Fruit / Product</th>
                  <th className="text-left p-3">Harvest Months</th>
                  <th className="text-left p-3 rounded-tr-lg">Key Region</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Damask Roses", "March – April", "Al Hada & Al Shafa"],
                  ["Apricots & Peaches", "May – June", "Al Shafa Valleys"],
                  ["Figs (Tin)", "July – August", "Wadi Mitna & Shafa"],
                  ["Grapes (Enab)", "July – September", "Al Hada outskirts"],
                  ["Pomegranates (Rumman)", "August – October (Highly famous)", "Al Shafa (Best quality)"],
                  ["Sidr & Talh Honey", "Year-round extraction", "Highland forests"],
                ].map(([name, months, region], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-green-50/20" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-green-700 font-bold border-b border-gray-100">{months}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Farm Experiences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Farm Experiences for Tourists</h2>
          <div className="space-y-4">
            {[
              {
                name: "Al Shafa Pomegranate Farm Walk",
                desc: "Tour the beautiful terrace orchards during September. Taste the large, juicy, ruby-red seeds of Taif's pomegranates, which are prized for their unique sweet flavor.",
              },
              {
                name: "Local Honey Tasting",
                desc: "Visit local bee farms nestled in the juniper highlands. Learn how bees forage on wild Acacia and Sidr flowers and buy pure, raw mountain honey directly from beekeepers.",
              },
              {
                name: "Distillery & Garden Walks",
                desc: "Walk through pink rose fields in Al Hada during early spring (March–April) and see how traditional copper stills distillate petals into precious rose water.",
              },
            ].map((exp, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{exp.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for Visitors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Farm Visits</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Respect Property:** Do not trespass or pick fruits without permission. Use official agro-tourism farms.</li>
            <li>• **Cash Needed:** Roadside fruit stalls and local farmers often do not accept bank cards. Carry physical cash (SAR).</li>
            <li>• **Transport:** Farm valleys are located off main roads. Hire a private driver to navigate local valley tracks.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#315f23] to-[#70b145] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Farm Tour Taxi</h2>
          <p className="text-green-100 mb-6">
            Hire a private taxi with a local driver to take you to the best agricultural valleys and fruit stands in Taif.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Farm Taxi
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
