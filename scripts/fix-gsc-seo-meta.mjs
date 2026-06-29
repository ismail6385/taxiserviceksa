/**
 * fix-gsc-seo-meta.mjs
 *
 * GSC Analysis: Pages with HIGH impressions but ZERO clicks.
 * Root cause: weak title tags & meta descriptions in Supabase.
 * This script patches seo_title, seo_description, and seo_keywords
 * for every affected slug via the Supabase REST API.
 *
 * Run: node scripts/fix-gsc-seo-meta.mjs
 */

const SUPABASE_URL = "https://fdojxnluwuzsqeejslzo.supabase.co";
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb2p4bmx1d3V6c3FlZWpzbHpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTg4NDMyOCwiZXhwIjoyMDgxNDYwMzI4fQ.FoMKTuznOjWu2MdD-32RrNXK8Birul1GY28dDXnVHlo";

// ─────────────────────────────────────────────────────────────────────────────
// SEO UPDATES — derived from GSC data (0 clicks despite impressions)
// ─────────────────────────────────────────────────────────────────────────────
const SEO_UPDATES = [
  // ── SIM Card blogs — highest impression pages with 0 clicks ──────────────
  {
    slug: "best-sim-card-umrah-internet-packages",
    seo_title: "Best SIM Card for Umrah 2026: Zain, STC or Mobily? (Full Guide)",
    seo_description:
      "Confused which SIM card to buy for Umrah? We compare Zain, STC & Mobily prepaid packages — price, data, coverage in Makkah & Madinah. Get the best deal for pilgrims in 2026.",
    seo_keywords: [
      "best sim card for umrah",
      "umrah sim card saudi arabia",
      "zain sim card umrah",
      "stc sim card umrah",
      "mobily sim card pilgrims",
      "saudi arabia tourist sim card",
      "sim card for umrah ksa",
      "best sim for umrah ksa tourist",
    ],
  },
  {
    slug: "buying-sim-cards-jeddah-airport",
    seo_title: "Buying a SIM Card at Jeddah Airport 2026: Which Counter, Cost & Tips",
    seo_description:
      "Step-by-step guide to buying a SIM card at King Abdulaziz International Airport Jeddah. Find out where the counters are, which plans to pick, and how to avoid common mistakes for Umrah & tourist visits.",
    seo_keywords: [
      "sim card jeddah airport",
      "buying sim card jeddah airport",
      "jeddah airport sim card tourist",
      "stc jeddah airport",
      "zain jeddah airport sim",
      "umrah sim card jeddah",
      "saudi tourist sim card airport",
    ],
  },

  // ── Riyadh Airport taxi — strong query intent, 0 clicks ──────────────────
  {
    slug: "how-much-is-taxi-from-riyadh-airport",
    seo_title: "Riyadh Airport Taxi Fare 2026: Exact Cost from KAIA to City",
    seo_description:
      "Find out the exact taxi fare from King Khalid International Airport Riyadh to hotels and the city centre. Fixed price vs meter explained. Book a private cab in advance and avoid overcharging.",
    seo_keywords: [
      "taxi from riyadh airport",
      "how much is taxi from riyadh airport",
      "riyadh airport taxi fare",
      "kaia taxi cost",
      "riyadh airport to city taxi price",
      "riyadh airport transportation",
      "airport taxi service riyadh",
    ],
  },

  // ── Jubail & Dammam location pages ───────────────────────────────────────
  {
    slug: "jubail-taxi-service",
    seo_title: "Taxi Service in Jubail 2026: Book a Private Car or Airport Transfer",
    seo_description:
      "Looking for a reliable taxi in Jubail Industrial City? Book a private car, airport transfer or intercity ride from Jubail to Dammam, Al Khobar & Riyadh. Flat-rate pricing, available 24/7.",
    seo_keywords: [
      "taxi jubail",
      "jubail taxi service",
      "taxi service in jubail",
      "jubail to dammam taxi",
      "jubail airport transfer",
      "private car jubail",
      "cab jubail saudi arabia",
    ],
  },
  {
    slug: "dammam-taxi-service",
    seo_title: "Taxi & Chauffeur Service in Dammam 2026 | Private Car Booking",
    seo_description:
      "Book a professional chauffeur or taxi in Dammam. Private transfers to King Fahd International Airport, Al Khobar, Jubail & Riyadh. Fixed rates, English-speaking drivers, 24/7 availability.",
    seo_keywords: [
      "taxi dammam",
      "chauffeur service dammam",
      "dammam chauffeur service",
      "chauffeur service in dammam",
      "dammam private car",
      "dammam airport transfer",
      "taxi in dammam saudi arabia",
    ],
  },

  // ── Jeddah → Makkah taxi — query has clicks, optimise for more ───────────
  {
    slug: "jeddah-airport-makkah-taxi-fare-2025",
    seo_title: "Jeddah to Makkah Taxi Fare 2026: Cost, Time & Best Booking Options",
    seo_description:
      "Planning a taxi from Jeddah Airport (or city) to Makkah? See the exact fare, travel time, and how to pre-book a private car for Umrah pilgrims and tourists. Avoid waiting in line.",
    seo_keywords: [
      "jeddah to makkah taxi",
      "jeddah to mecca taxi",
      "taxi from jeddah airport to makkah",
      "jeddah to makkah taxi service",
      "makkah taxi service",
      "jeddah airport makkah transfer",
      "jeddah makkah private car fare",
    ],
  },

  // ── Madinah airport transfer ──────────────────────────────────────────────
  {
    slug: "madinah-airport-taxi-transfer-guide",
    seo_title: "Madinah Airport Taxi Transfer 2026: Prince Mohammed Bin Abdulaziz Airport Guide",
    seo_description:
      "Everything you need to know about getting from Madinah Airport (MED) to the Prophet's Mosque. Compare taxis, private cars & shuttle options. Pre-book for a smooth Umrah arrival.",
    seo_keywords: [
      "madinah airport taxi",
      "taxi from madinah airport",
      "madinah airport transfer",
      "madinah airport to masjid nabawi taxi",
      "prince mohammed airport madinah transfer",
      "med airport taxi",
      "umrah airport taxi madinah",
    ],
  },

  // ── Jeddah to Madinah / Yanbu routes ─────────────────────────────────────
  {
    slug: "from-jeddah-to-yanbu",
    seo_title: "Jeddah to Yanbu Taxi & Private Car 2026: Fare, Distance & Travel Time",
    seo_description:
      "Need to travel from Jeddah to Yanbu? Book a comfortable private taxi or shared transfer. See the exact distance (370 km), travel time, and current 2026 fares. Easy online booking available.",
    seo_keywords: [
      "jeddah to yanbu",
      "from jeddah to yanbu",
      "jeddah to yanbu taxi",
      "jeddah yanbu private car",
      "jeddah to yanbu distance",
      "jeddah yanbu transfer",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Supabase REST helper
// ─────────────────────────────────────────────────────────────────────────────
async function fetchBlogIdBySlug(slug) {
  const url = `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&select=id,slug,seo_title`;
  const res = await fetch(url, {
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed for slug "${slug}": ${res.status} ${res.statusText}`);
  }

  const rows = await res.json();
  return rows.length > 0 ? rows[0] : null;
}

async function patchBlogSeo(id, slug, patch) {
  const url = `${SUPABASE_URL}/rest/v1/blogs?id=eq.${id}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      seo_title: patch.seo_title,
      seo_description: patch.seo_description,
      seo_keywords: patch.seo_keywords,
      updated_at: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PATCH failed for slug "${slug}" (id: ${id}): ${res.status} — ${body}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main runner
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🔍  GSC SEO Meta Fix Script");
  console.log("════════════════════════════════════════════════════════════\n");

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const entry of SEO_UPDATES) {
    process.stdout.write(`  ➜  ${entry.slug} … `);

    try {
      const row = await fetchBlogIdBySlug(entry.slug);

      if (!row) {
        console.log("⚠️  NOT FOUND in DB (slug missing)");
        skipped++;
        continue;
      }

      await patchBlogSeo(row.id, entry.slug, entry);
      console.log(`✅ Updated  →  "${entry.seo_title}"`);
      updated++;
    } catch (err) {
      console.log(`❌ ERROR — ${err.message}`);
      failed++;
    }
  }

  console.log("\n════════════════════════════════════════════════════════════");
  console.log(`✅ Updated : ${updated}`);
  console.log(`⚠️  Skipped : ${skipped}  (slugs not in DB)`);
  console.log(`❌ Failed  : ${failed}`);
  console.log("════════════════════════════════════════════════════════════\n");

  if (skipped > 0) {
    console.log("ℹ️  Skipped slugs might be stored under a different name.");
    console.log("   Run this to list all blog slugs in the DB:\n");
    console.log(
      "   node -e \"fetch('https://fdojxnluwuzsqeejslzo.supabase.co/rest/v1/blogs?select=slug',{headers:{apikey:'SERVICE_KEY',Authorization:'Bearer SERVICE_KEY'}}).then(r=>r.json()).then(d=>d.forEach(b=>console.log(b.slug)))\"\n"
    );
  }
}

main().catch((err) => {
  console.error("\n💥 Fatal:", err.message);
  process.exit(1);
});
