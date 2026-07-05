import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Is Taif Called the City of Roses? History & Origins",
  description:
    "Discover why Taif earned the title 'City of Roses'. Learn about the Damask rose, the history of rose cultivation in Al Shafa and Al Hada, and what makes Taif roses so world-famous.",
  keywords: [
    "why is Taif called the City of Roses",
    "Taif rose history",
    "Damask rose Taif",
    "Taif rose oil",
    "city of roses Saudi Arabia",
    "Al Shafa rose farms history",
    "Taif roses facts",
  ],
  openGraph: {
    title: "Why Is Taif Called the City of Roses? History & Origins",
    description:
      "The fascinating story behind Taif's iconic title — and what makes the rose so central to its culture and identity.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/why-is-taif-called-city-of-roses/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/why-is-taif-called-city-of-roses/",
  },
};

export default function WhyIsTaifCalledCityOfRoses() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#4a0018] via-[#7f0027] to-[#d4006a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Cultural Story · Rose History · Taif
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Why Is Taif Called the City of Roses?
          </h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Every spring, the mountains of Taif turn pink. Here is the fascinating history behind Saudi Arabia's most fragrant title.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-rose-800 mb-2">🌹 The Short Answer</h2>
          <p className="text-rose-700 leading-relaxed">
            Taif is called the "City of Roses" because it is home to the world's most celebrated cultivation of the <em>Rosa damascena</em> — the Damask rose. These high-altitude mountain farms produce a precious rose oil so rare and fragrant that it perfumes the Holy Kaaba and is used by the world's top luxury perfume houses.
          </p>
        </div>

        {/* The Damask Rose */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes the Taif Rose Unique?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Damask rose (<em>Rosa damascena</em>) thrives at high altitudes with cool nights and dry air — exactly the conditions found in the Sarawat Mountains of Taif. The high elevation (1,800–2,200m) concentrates the essential oils in the petals, creating a depth and sweetness of fragrance unmatched by roses grown at sea level.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { label: "Altitude of Farms", value: "1,800 – 2,200 meters", icon: "⛰️" },
              { label: "Annual Rose Production", value: "~400 tons of petals", icon: "🌹" },
              { label: "Pure Oil per Tola (12g)", value: "Requires ~60,000 blossoms", icon: "💧" },
            ].map((fact, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-5 text-center border border-rose-100">
                <div className="text-3xl mb-2">{fact.icon}</div>
                <p className="text-xs text-gray-500">{fact.label}</p>
                <p className="font-bold text-rose-900 text-sm mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Roots */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">A Centuries-Old Tradition</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The cultivation of Damask roses in Taif began centuries ago, believed to have been introduced through ancient trade routes connecting Persia and the Levant to the Arabian Peninsula. The unique mountain microclimate of Taif's Al Shafa and Al Hada highlands proved to be the perfect environment for the rose to flourish.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over time, local families developed highly refined traditional distillation techniques using copper pot stills (called <em>Anbiqs</em>). The resulting rose water became a staple of Hijazi cuisine, Islamic cleansing rituals, and eventually a global luxury commodity.
          </p>
        </section>

        {/* The Kaaba Connection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Kaaba Connection</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-amber-800 leading-relaxed">
              One of the most revered uses of Taif rose water is in the ritual washing of the Holy Kaaba. Each year, senior officials use pure Taif rose water to cleanse the Kaaba's exterior walls — a tradition maintained for centuries. This sacred role has elevated the status of Taif roses to the highest spiritual significance in the Islamic world.
            </p>
          </div>
        </section>

        {/* Rose Season Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See the Roses in Bloom</h2>
          <p className="text-gray-700 leading-relaxed">
            Taif rose farms typically bloom between <strong>early March and mid-April</strong>. During this 6-week season, the hillsides of Al Shafa and Al Hada are blanketed in pink, and distillation factories run day and night. This is absolutely the best time to visit for the full rose experience.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#7f0027] to-[#d4006a] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Visit the Farms Behind the Legend</h2>
          <p className="text-rose-100 mb-6">
            Book a private taxi to tour the Al Shafa rose farms and distilleries during the spring harvest season.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-rose-800 font-bold px-8 py-3 rounded-full hover:bg-rose-50 transition">
              Book Rose Farm Tour
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
