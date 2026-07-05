import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romantic Places to Visit in Taif: Top Couples Getaways",
  description:
    "Planning a couples getaway to Taif? Discover the most romantic places to visit including Al Shafa sunset overlooks, luxury resorts, cozy cafes, and rose farm tours in 2026.",
  keywords: [
    "romantic places in Taif",
    "couples getaway Taif",
    "places for couples in Taif",
    "Taif honeymoon guide",
    "Al Shafa romantic sunset",
    "luxury resorts Taif",
  ],
  openGraph: {
    title: "Romantic Places to Visit in Taif: Top Couples Getaways",
    description:
      "A romantic visitor guide to the best sunsets, high-end resorts, and scenic spots for couples in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/romantic-places-to-visit-in-taif/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/romantic-places-to-visit-in-taif/",
  },
};

export default function RomanticPlacesToVisitInTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#3b0764] via-[#581c87] to-[#a855f7] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Couples Guide · Romantic Spots · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Romantic Places to Visit in Taif
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Plan a perfect escape for two. Discover scenic sunset peaks, luxurious mountain villa resorts, and quiet rose-scented garden paths.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Why Taif for Couples */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            With its misty mountain peaks, cool weather, and the delicate scent of millions of blooming roses, Taif is one of the most romantic destinations in Saudi Arabia. It offers couples a quiet highland sanctuary to escape city buzz and connect amidst nature.
          </p>
        </section>

        {/* Top 4 Romantic Spots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Spots for Couples</h2>
          <div className="space-y-6">
            {[
              {
                name: "Al Shafa Peak Sunset Overlooks",
                desc: "Drive to the highest edge of Al Shafa as the sun sets. Sip hot mint tea from your folding chairs as the golden light paints the rugged Sarawat peaks and mist rolls through the valleys below.",
                icon: "🌅",
              },
              {
                name: "Luxury Mountain Villa Stays",
                desc: "Book a private villa featuring private pools and fireplaces in mountain resorts nestled in Al Hada. Excellent for a cozy weekend getaway.",
                icon: "🏨",
              },
              {
                name: "Taif Rose Garden Walks",
                desc: "Stroll hand-in-hand through the rose gardens of Al Shafa during the spring harvest (March–April). The pink blooms and sweet fragrance create a highly romantic setting.",
                icon: "🌹",
              },
              {
                name: "Cozy Al Hada Mountain Cafes",
                desc: "Sip specialty coffee at clifftop cafes offering panoramic windows looking down into the winding highway lights descending to Makkah.",
                icon: "☕",
              },
            ].map((spot, i) => (
              <div key={i} className="flex gap-4 bg-purple-50/30 border border-purple-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl">{spot.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{spot.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packing & Etiquette Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Couples</h2>
          <ul className="space-y-2 text-gray-700 text-sm font-medium">
            <li>• **Pack Layers:** The high altitude means mountain evenings are chilly. Bring a jacket or shawl to stay warm.</li>
            <li>• **PDA Rules:** Public Displays of Affection (like kissing or hugging) are not permitted under Saudi public rules. Hold hands and keep interactions subtle.</li>
            <li>• **Reservations:** Book luxury resort villas and dining tables at clifftop restaurants well in advance, especially during rose season or summer weekends.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#581c87] to-[#a855f7] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Romantic Mountain Ride</h2>
          <p className="text-purple-100 mb-6">
            Rent a private taxi with a professional driver to transport you smoothly to Taif's top romantic overlooks and resorts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition">
              Book Couples Taxi
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
