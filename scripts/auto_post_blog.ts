
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Manual .env parser
function loadEnv() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        const envFile = fs.readFileSync(envPath, 'utf8');
        const envVars: Record<string, string> = {};

        envFile.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                let value = valueParts.join('=');
                // Remove quotes and whitespace
                value = value.trim().replace(/^["']|["']$/g, '');
                envVars[key.trim()] = value;
            }
        });
        return envVars;
    } catch (error) {
        console.error('Error loading .env.local:', error);
        return {};
    }
}

const env = loadEnv();
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
// TRY TO FIND SERVICE ROLE KEY
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (env.SUPABASE_SERVICE_ROLE_KEY) {
    console.log("Using SERVICE_ROLE_KEY (Bypassing RLS)");
} else {
    console.log("Using ANON_KEY (Subject to RLS)");
}

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const blogPost = {
    title: "Buying SIM Cards at Jeddah Airport: STC vs. Mobily Prices for Pilgrims (2025)",
    slug: "buying-sim-cards-jeddah-airport",
    excerpt: "The complete guide to buying SIM cards at King Abdulaziz International Airport (KAIA). Compare STC, Mobily, and Zain prices, find kiosk locations in Terminal 1 & North Terminal, and learn activation rules for Umrah pilgrims.",
    content: `
## **You can buy a SIM card at Jeddah Airport (Arrivals Hall) for 70-100 SAR.**

**STC, Mobily, and Zain** all have kiosks operating 24/7 in **Terminal 1** and **North Terminal**. Activation requires your **Passport** and **Visa number** (Border Number). The process takes approximately **10-15 minutes**.

---

## **Quick Price Comparison (2025 Estimates)**

| Provider | Package Name | Price (SAR) | Data | Validity | Local Calls |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **STC** | Sawa Visitor 70 | 70 SAR | 20 GB | 4 Weeks | 500 Mins |
| **Mobily** | Hajj & Umrah 100 | 100 SAR | 40 GB | 4 Weeks | Unlimited Net (Social) |
| **Zain** | Ziyara 50 | 57.5 SAR | 10 GB | 4 Weeks | 100 Mins |
| **Virgin** | Tourist 80 | 80 SAR | 30 GB | 30 Days | 500 Local |

---

## **1. Where to Find SIM Kiosks at Jeddah Airport**

### **Terminal 1 (New Airport)**
*   **Location:** Immediately after **Baggage Claim**, pass through **Customs** into the **Arrivals Hall**.
*   **Landmarks:** The **STC** and **Mobily** kiosks are located directly opposite the large **Aquarium** (near the Taxi exit).
*   **Operating Hours:** 24/7 (Staff are fluent in English, Urdu, and Arabic).

### **North Terminal (Old Airport)**
*   **Location:** In the **Main Public Hall** after exiting the restricted customs area.
*   **Landmarks:** Look for the green **Zain** sign near the "Al-Wefaq" car rental desk.
*   **Note:** Queues here can be longer during Hajj season due to smaller hall space.

---

## **2. Which Provider is Best for Pilgrims?**

### **STC (Saudi Telecom Company)**
*   **Best For:** **Makkah & Madinah Highway Coverage**. STC has the strongest signal on the desert roads between cities.
*   **Pros:** Maximum coverage, widely accepted.
*   **Cons:** Slightly higher price.

### **Mobily**
*   **Best For:** **Social Media Users**. Their packages often include "Unlimited Social Data" (Snapchat, WhatsApp, Instagram).
*   **Pros:** Great value for heavy data users.
*   **Cons:** Indoor coverage in some older Makkah hotels can be weaker.

### **Zain**
*   **Best For:** **Budget Travelers**. Often the cheapest option.
*   **Pros:** Lowest entry price.
*   **Cons:** Coverage drops in remote desert areas (e.g., between Madinah and AlUla).

---

## **3. Step-by-Step Buying Process**

1.  **Queue Up:** Expect a 10-20 minute wait during flight surges.
2.  **Documents:** Hand over your **Passport**. The agent will scan it.
3.  **Fingerprint:** You must scan your fingerprint (biometric verification) on their device.
4.  **Border Number:** The system automatically pulls your "Border Number" (typed on your visa) linked to your passport. *You do not need to know this number yourself.*
5.  **Payment:** **Cash (SAR)** or **Credit Card** (Visa/Mastercard) are accepted. Apple Pay is widely supported.
6.  **Activation:** The agent will insert the SIM. **Wait until you see signal bars** before leaving the counter.
7.  **Check Balance:** Dial \`*166#\` (STC), \`*1411#\` (Mobily), or \`*142#\` (Zain) to confirm your data balance immediately.

---

## **4. Pilgrim Experience Layer: Pro Tips**

*   **Tip #1: Don't Buy "Roaming" from Home:** Roaming charges from UK/USA/India carriers are astronomical ($10/day). A local Saudi SIM is 90% cheaper.
*   **Tip #2: The "Aquarium" Meeting Point:** If you are part of a group, agree to meet at the "Aquarium" after buying SIMs. It is the most visible landmark in Terminal 1.
*   **Tip #3: WhatsApp Number:** Your WhatsApp *will not change* unless you manually change it in settings. You can use the new Saudi data to call/text on your *old* WhatsApp number without issue.
*   **Tip #4: eSim Option:** If your phone is unlocked and supports eSIM, you can buy an **Airalo** or **Holafly** eSIM *before* you fly. This saves you the 15-minute queue at the airport, though it is slightly more expensive (~$25 USD).

---

## **5. Frequently Asked Questions (Micro-Semantics)**

### **Q: Can I buy a SIM card in Makkah if I forget at the airport?**
**A:** Yes. There are STC/Mobily branches in the **Makkah Clock Tower (Abraj Al Bait)** on the P3 floor and generally near **Ibrahim Al Khalil Road**. However, airport kiosks are faster at processing "Visitor" packages.

### **Q: Does the SIM expire when I leave Saudi Arabia?**
**A:** Yes. Visitor SIMs automatically deactivate after the validity period (usually 28-30 days) or when your visa expires. You cannot keep the number permanently unless you convert it to a Resident line (Iqama required).

### **Q: Is 5G available?**
**A:** Yes, all major carriers offer 5G in Jeddah, Makkah, and Madinah. Ensure "5G" is enabled in your phone settings.

---

### **Need a Ride After Getting Your SIM?**
Don't struggle with luggage while trying to activate your phone.
**Book a private GMC Yukon transfer** with **TaxiServiceKSA**. Our drivers wait for you at the Arrivals Hall (with a name sign) and offer **free in-car WiFi** so you can connect even before you buy a SIM.

[INTERNAL LINK: Book Jeddah Airport Taxi]
    `,
    category: "Travel Guides",
    tags: ["Jeddah Airport", "SIM Cards", "Connectivity", "Pilgrim Guide", "STC", "Mobily"],
    author: "Koray AI",
    status: "draft",
    featured_image: "/jeddah-airport.webp",
    seo_title: "Buying SIM Cards at Jeddah Airport 2025 | STC vs Mobily Prices",
    seo_description: "Guide to buying SIM cards at Jeddah Airport (Terminal 1 & North). Compare STC, Mobily & Zain prices (70-100 SAR). Learn kiosk locations and activation rules.",
    seo_keywords: ["Jeddah airport sim card", "stc jeddah airport", "mobily packages umrah", "sim card saudi arabia price"]
};

async function postBlog() {
    console.log(`Attempting to post blog: "${blogPost.title}"...`);

    // 1. Check for duplicate slug
    const { data: existing } = await supabase
        .from('blogs')
        .select('id')
        .eq('slug', blogPost.slug)
        .single();

    if (existing) {
        console.log(`Blog with slug "${blogPost.slug}" already exists. Skipping.`);
        return;
    }

    // 2. Insert new blog
    const { data, error } = await supabase
        .from('blogs')
        .insert([blogPost])
        .select()
        .single();

    if (error) {
        console.error('Error inserting blog:', error.message);
    } else {
        console.log('✅ Blog posted successfully!');
        console.log('ID:', data.id);
        console.log('Status:', data.status);
    }
}

postBlog();
