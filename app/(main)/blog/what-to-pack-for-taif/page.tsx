import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Pack for Taif: Complete Packing List 2026",
  description:
    "Planning your trip to Taif, Saudi Arabia? Here is the ultimate packing list covering warm layers, outdoor hiking gear, adapters, Sun protection, and medication for 2026.",
  keywords: [
    "what to pack for Taif",
    "Taif packing list",
    "travel gear Saudi Arabia",
    "mountain travel checklist",
    "what to bring to Taif",
    "Saudi Arabia power adapter",
  ],
  openGraph: {
    title: "What to Pack for Taif: Complete Packing List 2026",
    description:
      "The complete travel checklist and packing guide for visiting the mountains of Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/what-to-pack-for-taif/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/what-to-pack-for-taif/",
  },
};

export default function WhatToPackForTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a2d1d] via-[#345339] to-[#5a8c62] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Travel Checklist · Pack Smart · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            What to Pack for Taif
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            From thermal layers for chilly nights to UV protection and hiking essentials — here is your complete packing guide.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Packing Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Taif Packing Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">🧥 Clothing & Layers:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• **Lightweight daytime wear:** Cotton shirts and breathable trousers.</li>
                <li>• **Fleece / Sweater:** Essential for late afternoons and evenings.</li>
                <li>• **Windproof Jacket:** Especially useful at Al Shafa peak (2,200m).</li>
                <li>• **Modest wear:** Pants covering knees, shirts covering shoulders.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">🥾 Footwear & Outdoors:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• **Hiking Shoes/Sneakers:** Durable shoes for rocky granite paths.</li>
                <li>• **Sun Hat & Sunglasses:** Strong UV rays at high altitudes.</li>
                <li>• **Small Backpack:** For carrying water, sunscreen, and layers during day tours.</li>
                <li>• **Reusable Water Bottle:** Stay hydrated in the dry mountain air.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Electronics & Tech */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Electronics & Technical Items</h2>
          <div className="bg-blue-50 rounded-2xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li>🔌 **Power Plug Adapter:** Saudi Arabia primarily uses **Type G** plugs (three-pin UK style). If you are coming from Europe, North America, or parts of Asia, carry a universal travel adapter.</li>
              <li>🔋 **Power Bank:** Navigating mountain trails and taking photos drain phone batteries rapidly. Carry a 10,000mAh+ external charger.</li>
              <li>📷 **Camera Gear:** A wide-angle lens is perfect for the vast escarpment valleys. A tripod is recommended for night shots of Al Hada highway.</li>
            </ul>
          </div>
        </section>

        {/* Health & Toiletries */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Health, Skincare & Toiletries</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The high altitude and mountain winds make the air in Taif very dry. Make sure to pack:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• **Sunscreen (SPF 50+):** High altitude means faster sunburns.</li>
            <li>• **Lip Balm & Moisturizer:** To prevent dry skin and chapped lips.</li>
            <li>• **Motion Sickness Medication:** If you are prone to car sickness, the winding mountain highway curves can trigger nausea.</li>
            <li>• **Basic First Aid Kit:** Band-aids, painkillers, and rehydration salts.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#345339] to-[#5a8c62] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Taif Mountain Taxi</h2>
          <p className="text-green-100 mb-6">
            Pack your bags and leave the transport to us. Ride comfortably to the mountain resorts with a pre-booked driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
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
