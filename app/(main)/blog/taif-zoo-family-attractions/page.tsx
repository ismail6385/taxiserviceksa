import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taif Zoo & Family Attractions Guide: Best Kids Activities",
  description:
    "Planning a family trip to Taif? Discover the Taif Zoo, amusement parks, Al Kar Tourist Village, and kids activities with tickets, timings, and tips for 2026.",
  keywords: [
    "Taif Zoo",
    "family attractions Taif",
    "kids activities Taif",
    "Al Kar Tourist Village Taif",
    "Taif amusement parks",
    "things to do in Taif with family",
    "Taif zoo ticket price",
  ],
  openGraph: {
    title: "Taif Zoo & Family Attractions Guide: Best Kids Activities",
    description:
      "A family-focused visitor guide to the best children's activities, animal encounters, and amusement parks in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/taif-zoo-family-attractions/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/taif-zoo-family-attractions/",
  },
};

export default function TaifZooFamilyAttractions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a3a4b] via-[#2d5a7b] to-[#4fa0d0] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Family Guide · Attractions · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Taif Zoo & Family Attractions Guide
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Plan the perfect family itinerary. Explore wild animal encounters at Taif Zoo, thrilling water slides, and theme parks your kids will love.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Taif Zoo Ticket", value: "SAR 15–20", icon: "🎫" },
            { label: "Best Age", value: "All ages", icon: "👦" },
            { label: "Top Spot", value: "Al Kar Village", icon: "🎢" },
            { label: "Zoo Hours", value: "4:00 PM – 11:00 PM", icon: "⏱️" },
          ].map((info, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-blue-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Taif Zoo Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visiting Taif Zoo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif Zoo is a popular family destination located in the Sadad district. While smaller than metropolitan zoos, it provides a pleasant evening stroll and houses a variety of animals including lions, tigers, elephants, giraffes, monkeys, and several species of birds native to the Arabian Peninsula.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The zoo features an outdoor children's amusement park section with classic carousel rides, bumper cars, and slides to keep younger children entertained.
          </p>
        </section>

        {/* Top Family Attractions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Family-Friendly Places in Taif</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Al Kar Tourist Village", desc: "A massive leisure resort located at the base of the Al Hada cable car descent. It features water parks, swimming pools, toboggan rides, and traditional dance shows.", icon: "⛲" },
              { title: "Al Hada Theme Park", desc: "Perched near the cable car top station, this park offers classic amusement rides, video arcades, and family restaurants overlooking the mountain valleys.", icon: "🎢" },
              { title: "Al Rudaf Park Dancing Fountain", desc: "A free public park offering beautiful green lawns, massive playgrounds, and a spectacular musical water fountain show playing after sunset.", icon: "⛲" },
              { title: "Green Mountain Park", desc: "A landscaped family park offering children's slides, snack stalls, and lovely views of Taif's surrounding granite peaks.", icon: "⛰️" },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Activity Comparison for Kids</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Attraction</th>
                  <th className="text-left p-3">Best Age Group</th>
                  <th className="text-left p-3">Key Feature</th>
                  <th className="text-left p-3 rounded-tr-lg">Avg. Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Taif Zoo", "Toddlers & Young Kids (2-8)", "Animal feedings & mini rides", "1.5 – 2 hours"],
                  ["Al Kar Village", "Older Kids & Teens (6-16)", "Water slides & toboggan", "3 – 5 hours"],
                  ["Al Hada Theme Park", "All ages", "Amusement rides & valley views", "2 – 3 hours"],
                  ["Al Rudaf Park", "All ages", "Dancing fountain & playgrounds", "2 – 4 hours"],
                ].map(([name, age, feat, dur], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{name}</td>
                    <td className="p-3 text-blue-700 font-semibold border-b border-gray-100">{age}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-100">{feat}</td>
                    <td className="p-3 text-gray-500 border-b border-gray-100">{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips for Families */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Tips for Parents</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "**Avoid Midday:** Most family attractions, including the Zoo, open in the late afternoon (typically 4:00 PM) to align with cooler evening temperatures.",
              "**Pack Sweaters:** Taif's altitude means evenings get cold quickly. Keep a light jacket or windbreaker handy for children.",
              "**Pre-Book Transport:** Public transport inside Taif is virtually non-existent. Booking a private taxi ensures comfortable door-to-door transit for the family.",
              "**Al Kar Swimming:** If visiting Al Kar Village water park, bring towels, extra clothes, and swim diapers for toddlers.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1a3a4b] to-[#2d5a7b] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book a Comfortable Family Taxi</h2>
          <p className="text-blue-100 mb-6">
            Skip the hassle of driving. Book a clean, air-conditioned family taxi to take you comfortably around Taif's attractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
              Book Family Taxi
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
