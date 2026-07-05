import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family-Friendly Things to Do in Taif: Kids Guide 2026",
  description:
    "Planning a family vacation to Taif? Explore the top kid-friendly activities, zoo visits, water parks, cable car rides, and family resorts in 2026.",
  keywords: [
    "family friendly things to do in Taif",
    "Taif with kids",
    "kids activities Taif",
    "Taif family guide",
    "Al Kar Water Park",
    "Taif Zoo",
  ],
  openGraph: {
    title: "Family-Friendly Things to Do in Taif: Kids Guide 2026",
    description:
      "A complete guide to planning a memorable family vacation with children in the mountain city of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/family-friendly-things-to-do-in-taif/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/family-friendly-things-to-do-in-taif/",
  },
};

export default function FamilyFriendlyThingsToDoInTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2a4d7c] to-[#4299e1] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Family Guide · Kids Activities · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Family-Friendly Things to Do in Taif
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Build unforgettable family memories. Explore theme parks, mountain cable cars, water parks, and animal sanctuaries.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            👨‍👩‍👧‍👦 Family Vibe in Taif
          </h2>
          <p className="text-blue-700 leading-relaxed text-sm">
            Taif is historically designed as a family retreat. The combination of pleasant weather, wide municipal parks, amusement rides, and resort clusters makes it the most popular summer weekend destination for families from Riyadh, Jeddah, and Makkah.
          </p>
        </div>

        {/* Top Family Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Activities for Families and Children</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Al Hada Cable Car & Water Park",
                desc: "Ride the gondola down the mountainside to Al Kar Tourist Village. The lower station features large swimming pools, water slides, and toboggans. High thrill and high fun for kids.",
                icon: "🚡",
              },
              {
                title: "Al Rudaf Park Fountain Show",
                desc: "Walk along the lakeside paths and watch the massive dancing fountain show featuring synchronized laser lights and classical music. Best enjoyed with a family picnic.",
                icon: "⛲",
              },
              {
                title: "Taif Zoo & Mini Rides",
                desc: "See elephants, lions, tigers, and local birds. The zoo also features a dedicated amusement ride ring containing classic carousels and bumper cars.",
                icon: "🦁",
              },
              {
                name: "Al Shafa Fruit Orchards",
                desc: "Visit local farms where children can see how sweet pomegranates, figs, and grapes are grown, pick fresh fruits, and try mountain honey.",
                icon: "🍇",
              },
            ].map((act, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-2">{act.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{act.title || act.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Family Dining & Cafes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Family-Friendly Dining Zones</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taif features numerous family-centric dining blocks.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• **Shafa Road Restaurants:** Large traditional restaurants featuring open-air carpeted family cabins serving traditional kabsa and grilled meats.</li>
            <li>• **Al Rudaf Kiosks:** Walkways surrounding the park gate feature kiosks serving local tea, ice cream, and snacks.</li>
          </ul>
        </section>

        {/* Transport Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Families</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Car Seats:** Ride-hailing cars do not typically provide child safety seats. Pre-booking a private taxi service allows you to request vehicle classes suitable for family luggage and gear.</li>
            <li>• **Timing:** Most kids amusement sections inside parks open only in the late afternoon (after 4:00 PM). Plan your day accordingly.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#2a4d7c] to-[#4299e1] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Family Taxi</h2>
          <p className="text-blue-100 mb-6">
            Travel together in a clean, spacious SUV. Pre-book your family taxi transfers for a stress-free Taif vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition">
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
