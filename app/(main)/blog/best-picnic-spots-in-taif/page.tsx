import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Picnic Spots in Taif: Top Scenic Parks & Gardens",
  description:
    "A guide to the best picnic spots in Taif, Saudi Arabia. Explore family parks, green mountain viewpoints, rose gardens, and valley retreats in 2026.",
  keywords: [
    "best picnic spots in Taif",
    "picnic areas Taif",
    "Taif family picnic",
    "Al Rudaf Park picnic",
    "Al Shafa picnic spots",
    "King Fahd Park picnic",
    "where to picnic in Taif",
  ],
  openGraph: {
    title: "Best Picnic Spots in Taif: Top Scenic Parks & Gardens",
    description:
      "Looking for the perfect spot to layout a blanket and enjoy Taif's cool weather? Read our local picnic guide.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/best-picnic-spots-in-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/best-picnic-spots-in-taif/",
  },
};

export default function BestPicnicSpotsInTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1b3d1b] via-[#2d5c2d] to-[#4fa34f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Leisure Guide · Picnic Spots · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Best Picnic Spots in Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Layout a blanket and enjoy the cool mountain air. The best public gardens, cliff overlooks, and wadi spots for a family picnic.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Why Picnic in Taif */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Picnicking is a major cultural activity in Saudi Arabia, and Taif is the ultimate location for it. Thanks to the city's high elevation, visitors can sit outdoors comfortably throughout the afternoon. During the summer, local families flock to the hillsides and municipal parks to escape the coastal heat.
          </p>
        </section>

        {/* Top 4 Spots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Recommended Picnic Locations</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Rudaf Park (Manicured Lawns)",
                bestFor: "Families with young children",
                desc: "A massive public park featuring soft green lawns surrounding natural granite boulders. There are dedicated childrens play areas, toilets, and cafés nearby. The park is highly secure and perfectly clean.",
                icon: "⛲",
              },
              {
                name: "Al Shafa Ridge Viewpoints",
                bestFor: "Scenic mountain views & sunsets",
                desc: "Drive up to the mountain ridges of Al Shafa, unpack your camp chairs, and enjoy a hot pot of Arabic coffee (qahwa) while watching the sun set over the sheer rock faces. Bring a jacket, as the breeze is chilly.",
                icon: "⛰️",
              },
              {
                name: "King Fahd Park (Lakeside)",
                bestFor: "Relaxing by the water",
                desc: "One of the most established parks in Taif, boasting winding walking paths, shade trees, and artificial lakes. Ideal for laying out a picnic mat under the shade.",
                icon: "🌳",
              },
              {
                name: "Saiysad National Park (Wadi Bed)",
                bestFor: "Wilderness & rustic picnics",
                desc: "For those who prefer a wilder setting. Sit under juniper and pine trees in the natural valley beds. Note: carry your own supplies as there are no commercial shops nearby.",
                icon: "🌲",
              },
            ].map((spot, i) => (
              <div key={i} className="flex gap-4 bg-green-50/40 border border-green-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{spot.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{spot.name}</h3>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    Best for: {spot.bestFor}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Picnic Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for a Perfect Picnic</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Timing:** On summer weekends, arrive at public parks by 4:00 PM to secure a good spot on the lawns.</li>
            <li>• **Warm Beverage:** Pack a thermos of mint tea or ginger-infused Arabic coffee — a staple for Saudi mountain picnics.</li>
            <li>• **Decency:** Maintain public cleanliness. Littering in public parks is subject to municipal fines.</li>
            <li>• **Seating:** Most parks do not have picnic tables. Bring your own folding mats or lawn chairs.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#2d5c2d] to-[#4fa34f] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book a Taxi for Your Picnic Outing</h2>
          <p className="text-green-100 mb-6">
            Pack your mats, coolers, and snacks. Let a private driver transport your family and gear comfortably to Taif's top parks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Picnic Taxi
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
