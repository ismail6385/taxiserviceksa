import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Taif Safe for Tourists? Complete Safety Guide 2026",
  description:
    "Is Taif safe for international tourists? Read our comprehensive 2026 safety guide covering crime rates, solo female travel, road conditions, health tips, and emergency contacts.",
  keywords: [
    "is Taif safe for tourists",
    "Taif safety guide",
    "Saudi Arabia travel safety",
    "is Taif safe for solo female travelers",
    "Taif crime rate",
    "safety tips Taif",
    "emergency numbers Taif",
  ],
  openGraph: {
    title: "Is Taif Safe for Tourists? Complete Safety Guide 2026",
    description:
      "A complete guide to visitor safety in Taif — covering crime, road safety, health, and cultural rules.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/is-taif-safe-for-tourists/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/is-taif-safe-for-tourists/",
  },
};

export default function IsTaifSafeForTourists() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1b2b34] via-[#2d3e48] to-[#4f6472] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Safety Guide · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Is Taif Safe for Tourists?
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get the facts on crime, solo travel, mountain road safety, health, and local laws in Saudi Arabia's summer capital.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            ✅ Quick Answer: Yes, Extremely Safe
          </h2>
          <p className="text-green-700 leading-relaxed">
            Taif is exceptionally safe for tourists. Saudi Arabia boasts one of the lowest violent crime rates in the world, and Taif, as a tranquil mountain resort city, shares this high level of security. Whether you are traveling solo, as a female traveler, or with family, you can explore the city and mountains with peace of mind.
          </p>
        </div>

        {/* Crime Rates */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Crime & General Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Petty crimes like pickpocketing or bag snatching are extremely rare in Taif. Violent crime against tourists is virtually non-existent. The city has a strong, visible police presence, and the local community is very welcoming and hospitable to foreign guests.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✓ **Zero-No-Go Zones:** There are no areas in Taif that are considered unsafe to walk in.</li>
            <li>✓ **Safe Night Walks:** Walking through parks like Al Rudaf or city souqs late at night is completely safe.</li>
            <li>✓ **High Security:** Major tourist areas and hotels feature CCTV security.</li>
          </ul>
        </section>

        {/* Solo Female Travel */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Is Taif Safe for Solo Female Travelers?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yes, solo female travel in Saudi Arabia has grown significantly and is very safe. Women do not need a male guardian (mahram) to travel, check into hotels, or hire transport services.
          </p>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">Tips for Female Visitors:</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Dress modestly: Cover shoulders and knees in public.</li>
              <li>• Abaya is not required but wearing one helps you blend in and avoids stares.</li>
              <li>• Use reputable taxi platforms or pre-book transport.</li>
            </ul>
          </div>
        </section>

        {/* Road Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mountain Road Safety</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ The Main Safety Risk</h3>
            <p className="text-yellow-700 text-sm">
              The primary safety concern in Taif is not crime, but **driving on the winding mountain roads**. High-altitude roads like the Al Hada Highway and Al Shafa routes are steep with tight switchbacks. They can get highly congested, foggy, or slippery during rains.
            </p>
            <p className="text-yellow-700 text-sm mt-2">
              If you are not experienced with steep mountain driving, avoid renting a car. Use professional taxi drivers who navigate these roads daily.
            </p>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contact Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "General Emergency", num: "911", icon: "🚨" },
              { name: "Police", num: "999", icon: "🚔" },
              { name: "Ambulance", num: "997", icon: "🚑" },
              { name: "Traffic Accidents", num: "993", icon: "🚗" },
            ].map((e, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-3xl mb-1">{e.icon}</div>
                <p className="text-xs text-gray-500">{e.name}</p>
                <p className="font-bold text-gray-900 text-lg mt-1">{e.num}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#2d3e48] to-[#4f6472] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Travel Safely in Taif</h2>
          <p className="text-blue-100 mb-6">
            Book a trusted, professional taxi to navigate the mountain peaks and city streets safely. Fixed prices, zero hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
              Book Safe Taxi
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
