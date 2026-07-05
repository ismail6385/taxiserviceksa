import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Scenic Viewpoints in Taif: Top Mountain Overlooks",
  description:
    "Explore the best scenic viewpoints in Taif, Saudi Arabia. Discover Al Shafa cliffs, Al Hada roadsides, Harrat overlooks, sunset spots, and mountain photography guides for 2026.",
  keywords: [
    "best viewpoints in Taif",
    "scenic overlooks Taif",
    "Al Shafa viewpoint",
    "Al Hada road overlook",
    "sunset spots Taif",
    "Taif mountain view",
    "photography locations Taif",
  ],
  openGraph: {
    title: "Best Scenic Viewpoints in Taif: Top Mountain Overlooks",
    description:
      "A local guide to the most breathtaking viewpoints, cliff-edge overlooks, and photography spots in Taif's mountains.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/best-scenic-viewpoints-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/best-scenic-viewpoints-taif/",
  },
};

export default function BestScenicViewpointsTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1b1c1e] via-[#3c3e41] to-[#6a6e72] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Photography Guide · Viewpoints · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Best Scenic Viewpoints in Taif
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the most breathtaking vistas, dramatic cliff overlooks, and sunset photography spots in the Sarawat Mountains of Taif.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Taif's Mountain Geography</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Situated at altitudes ranging from 1,700m to over 2,200m above sea level, Taif is bounded by the dramatic Hejaz and Sarawat escarpments. The mountains drop steeply into the Tihama plains towards the west, creating sheer cliff edges and winding mountain highways that offer some of the most dramatic scenic views in Saudi Arabia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you love nature photography, stunning sunsets, or looking down at clouds swirling in the valleys below, here are the absolute best viewpoints to visit.
          </p>
        </section>

        {/* Top 5 Viewpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Viewpoints & Scenic Overlooks</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Shafa Cliff Edge (Dakkah Mountain)",
                altitude: "~2,200m",
                desc: "This is the highest major viewpoint in the Taif region. Stand directly on the precipitous cliff edge looking down at the coastal Tihama plains 2,000 meters below. On clear winter mornings, you can watch clouds fill the valley floor like a white sea.",
                icon: "⛰️",
              },
              {
                name: "Al Hada Winding Highway Overlook",
                altitude: "~1,800m",
                desc: "Famous for the spiral, illuminated highway descending toward Makkah. Multiple roadside parkings and viewpoints along this route offer spectacular views of cars winding down the cliffs, especially beautiful at night.",
                icon: "🛣️",
              },
              {
                name: "Al Hada Cable Car Station",
                altitude: "~1,800m",
                desc: "Both the upper station platforms and the gondolas themselves offer stunning, uninterrupted views of the deep mountain ravines and rocky canyons slicing through the Hejaz mountains.",
                icon: "🚡",
              },
              {
                name: "Harrat Rahat Lava Overlooks",
                altitude: "~1,700m",
                desc: "Located on the northern edges of Taif, these rocky volcanic viewpoints overlook the vast, stark black basalt lava fields stretching out toward Madinah, offering a beautiful geological contrast.",
                icon: "🪨",
              },
              {
                name: "Dakkah Mountain Peak",
                altitude: "~2,500m (peak)",
                desc: "Accessible via mountain roads, Dakkah Mountain is one of the highest peaks in the region, offering a complete 360-degree panoramic view of the rugged Sarawat mountain chains.",
                icon: "🦅",
              },
            ].map((view, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{view.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{view.name}</h3>
                  <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    Altitude: {view.altitude}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{view.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sunset vs Sunrise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Go for the Best Photos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <h3 className="font-bold text-yellow-800 mb-2">🌅 Sunrise & Morning Mist</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Best for seeing **clouds and fog** filling the valleys below the peaks. The temperatures are crisp (5–12°C in winter), and the mountain air is crystal clear. **Al Shafa** is the prime choice for sunrise photography.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-2">🌇 Golden Hour & Sunset</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Best for capturing the glowing warm orange tones on the sandstone and granite cliffs. Watch the city lights of Taif begin to flicker on. **Al Hada road** is the best spot for sunset views.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Photographers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visitor & Safety Tips</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Bring a tripod if you plan to shoot long-exposure shots of the winding Al Hada highway at night.",
              "Stay behind the official barrier railings. Mountain winds can be very strong, and cliff edges are unstable.",
              "Temperatures drop very fast once the sun goes down. Bring warm layers and jackets.",
              "Hire a private driver to navigate the mountain roads so you can focus entirely on taking photos.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1b1c1e] to-[#3c3e41] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book a Scenic Taxi Tour</h2>
          <p className="text-gray-200 mb-6">
            Our drivers know the best panoramic viewpoints and photo-worthy spots around Taif's mountains. Let us drive you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition">
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
