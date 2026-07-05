import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Taif: Travel FAQ 2026",
  description:
    "Get answers to the most frequently asked questions about Taif. Learn about the best time to visit, cable car timings, dress code, roses, safety, and transportation in 2026.",
  keywords: [
    "Taif FAQ",
    "frequently asked questions about Taif",
    "visiting Taif questions",
    "best time to visit Taif",
    "Taif rose season",
    "Taif cable car details",
  ],
  openGraph: {
    title: "Frequently Asked Questions About Taif: Travel FAQ 2026",
    description:
      "All your questions answered — cover travel logistics, timing, weather, safety, and activities in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/frequently-asked-questions-about-taif/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/frequently-asked-questions-about-taif/",
  },
};

const faqs = [
  {
    q: "When is the best time to visit Taif?",
    a: "The best time to visit is during spring (March–April) to experience the famous rose harvest, or summer (June–August) to escape the hot temperatures of low-lying cities. Winters (December–February) are cool and foggy.",
  },
  {
    q: "Is Taif safe for solo female travelers?",
    a: "Yes, Taif is exceptionally safe. Crime rates are very low across Saudi Arabia. Women can travel solo, rent accommodations, and book taxi services without a guardian.",
  },
  {
    q: "How do I get to the Taif Cable Car?",
    a: "The Cable Car is located in Al Hada, about 30 km from Taif city center. You can easily reach it via the Al Hada Highway. Booking a private taxi is the most convenient way to get there.",
  },
  {
    q: "What should tourists wear in Taif?",
    a: "Modest dress is required in public spaces. Women should cover shoulders and knees, and men should avoid short shorts in public areas like malls or historic sites. Abaya is not legally required for foreign tourists.",
  },
  {
    q: "When is the Taif Rose Festival?",
    a: "The Rose Festival takes place during the annual rose harvest season, which usually runs from early March through mid-April. This is when the farms are pink and distilleries are active.",
  },
  {
    q: "Can I do a day trip to Taif from Jeddah or Makkah?",
    a: "Absolutely! Taif is only 1.5 to 2 hours drive from Makkah and Jeddah, making it a very popular day-trip destination for locals and pilgrims.",
  },
  {
    q: "Is there public transport inside Taif?",
    a: "Public transit options within Taif are very limited. Taxis and private driver services are the primary and most reliable methods of transportation for tourists.",
  },
];

export default function FrequentlyAskedQuestionsAboutTaif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#374151] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Travel Guide · FAQ · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Frequently Asked Questions About Taif
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about weather, travel logistics, safety, dress code, and attractions in Taif.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* FAQ List */}
        <section className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                <span className="text-blue-600 font-extrabold">Q:</span>
                <span>{faq.q}</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-2xl p-8 text-white text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">
            Pre-book a private taxi tour and let a knowledgeable local driver show you around Taif's top attractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Book Taif Taxi
            </Link>
            <Link
              href="/routes/taif"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              View Taif Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
