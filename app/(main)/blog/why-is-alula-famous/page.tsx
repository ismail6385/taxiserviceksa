import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Is AlUla Famous? 10 Reasons AlUla Is Saudi Arabia's Crown Jewel",
  description:
    "Why is AlUla famous? Discover the 10 reasons that make AlUla one of the world's most extraordinary destinations — from Hegra UNESCO site to ancient rock art, oasis landscapes, and luxury tourism.",
  keywords: [
    "why is AlUla famous",
    "what is AlUla known for",
    "AlUla significance",
    "why visit AlUla",
    "AlUla attractions",
    "AlUla history",
    "AlUla Saudi Arabia famous",
  ],
  openGraph: {
    title: "Why Is AlUla Famous? 10 Reasons AlUla Is Saudi Arabia's Crown Jewel",
    description:
      "From UNESCO heritage sites to ancient rock art and luxury desert resorts — here's why AlUla has captured the world's attention.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/why-is-alula-famous/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/why-is-alula-famous/",
  },
};

const reasons = [
  {
    number: "01",
    title: "Hegra — Saudi Arabia's First UNESCO World Heritage Site",
    desc: "Hegra (Madain Saleh) is the ancient Nabataean city with 111 rock-carved tombs. Designated in 2008, it put AlUla on the global heritage map and remains the most visited site in the region.",
    icon: "🏛️",
  },
  {
    number: "02",
    title: "10,000+ Years of Continuous Human Habitation",
    desc: "AlUla's oasis valley has been inhabited since at least the Neolithic period. Successive civilizations — Dadanites, Lihyanites, Nabataeans, Romans, and Islamic empires — all left their mark here.",
    icon: "⏳",
  },
  {
    number: "03",
    title: "Dadan — Capital of an Ancient Arabian Kingdom",
    desc: "Dadan was the capital of the Dadanite and Lihyanite kingdoms (7th–2nd century BCE). The archaeological site contains royal tombs and lion sculptures, pre-dating even the Nabataeans.",
    icon: "🦁",
  },
  {
    number: "04",
    title: "Jabal Ikmah — An Open-Air Library of Ancient Scripts",
    desc: "One of the largest concentrations of ancient inscriptions in the Arabian Peninsula. Thousands of inscriptions in Dadanitic, Lihyanite, Nabataean, and other scripts cover the cliff walls of Jabal Ikmah.",
    icon: "📜",
  },
  {
    number: "05",
    title: "Spectacular Desert Landscapes & Geological Wonders",
    desc: "AlUla's landscape is otherworldly — towering sandstone formations, vast lava fields (Harrat Uwayrid), and a lush date palm oasis cutting through a dramatic canyon make it visually unlike anywhere else.",
    icon: "🏜️",
  },
  {
    number: "06",
    title: "Elephant Rock (Jabal AlFil)",
    desc: "A naturally-formed sandstone rock that resembles a giant elephant has become AlUla's most iconic landmark and Instagram phenomenon — drawing visitors at sunset for spectacular photos.",
    icon: "🐘",
  },
  {
    number: "07",
    title: "Vision 2030 Mega-Tourism Development",
    desc: "Saudi Arabia's Royal Commission for AlUla (RCU) is investing $15+ billion in world-class tourism infrastructure — bringing luxury resorts, international events, and global art installations to the desert.",
    icon: "🏗️",
  },
  {
    number: "08",
    title: "Winter at Tantora — A World-Class Cultural Festival",
    desc: "The Winter at Tantora festival brings international music acts, art installations, and cultural events to AlUla every winter — drawing global celebrities and tourists seeking a unique luxury experience.",
    icon: "🎵",
  },
  {
    number: "09",
    title: "Prehistoric Rock Art & Petroglyphs",
    desc: "Thousands of petroglyphs scattered across AlUla's rock faces depict animals, hunting scenes, and human figures from 8,000+ years ago — one of the most significant rock art concentrations in Arabia.",
    icon: "🎨",
  },
  {
    number: "10",
    title: "AlUla's Ancient Oasis — A Living Agricultural Heritage",
    desc: "The AlUla oasis contains over 200,000 date palms that have been farmed continuously for millennia. The ancient falaj irrigation system still flows, and the oasis remains an UNESCO candidate for Living Heritage.",
    icon: "🌴",
  },
];

export default function WhyIsAlUlaFamous() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            AlUla Guide · History & Heritage 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Why Is AlUla Famous?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            10 extraordinary reasons why AlUla has become Saudi Arabia's most
            celebrated destination and one of the world's great travel
            discoveries.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Intro */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-12">
          <p className="text-amber-700 leading-relaxed">
            AlUla is famous for its unparalleled concentration of ancient
            history, stunning natural landscapes, and a bold vision for the
            future of luxury tourism. In a region where neighboring countries
            have long been celebrated for their heritage, AlUla stands apart as
            Arabia's hidden treasure — only recently opened to the world.
          </p>
        </div>

        {/* 10 Reasons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            10 Reasons AlUla Is World-Famous
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex-shrink-0 text-4xl font-black text-amber-200 w-12">
                  {reason.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{reason.icon}</span>
                    <h3 className="font-bold text-gray-900">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* By the Numbers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AlUla by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "200,000+", label: "Years of habitation" },
              { value: "111", label: "Nabataean tombs at Hegra" },
              { value: "10,000+", label: "Ancient inscriptions" },
              { value: "$15B+", label: "Tourism investment" },
              { value: "200,000+", label: "Date palms in oasis" },
              { value: "2008", label: "Year Hegra became UNESCO site" },
              { value: "1M+", label: "Annual visitors (2024)" },
              { value: "26,000+", label: "Square km of history" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-amber-700">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future of AlUla */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why AlUla Is Only Getting More Famous
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AlUla is in the early stages of what will become one of the world's
            most ambitious heritage tourism projects. The Royal Commission for
            AlUla (RCU) has laid out a masterplan extending to 2035 that
            includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              "New archaeological excavations revealing previously unknown civilizations",
              "A UNESCO Natural & Living Heritage nomination for AlUla's oasis",
              "Completion of luxury resort clusters (Sharaan Nature Reserve, Aman AlUla)",
              "Expansion of the Winter at Tantora festival to year-round cultural programming",
              "AlUla International Airport expansion for direct global connections",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Experience AlUla Before It Changes the World
          </h2>
          <p className="text-amber-100 mb-6">
            Visit now while AlUla still feels like a discovery. Book your
            transportation and explore this extraordinary destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Taxi in AlUla
            </Link>
            <Link
              href="/routes/alula"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              View AlUla Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
