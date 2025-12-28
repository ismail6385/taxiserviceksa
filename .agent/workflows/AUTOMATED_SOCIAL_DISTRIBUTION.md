---
description: How to automate social media posting using RSS and Zapier
---

# 🤖 Automated Social Media Distribution Workflow

This guide explains how to automatically post new blog articles and service updates to **Facebook, LinkedIn, Twitter/X, and Pinterest** without manual effort.

## ✅ The Setup (Already Completed)

We have built two core components to enable this:

1.  **Brand Social Card (`opengraph-image.png`)**: 
    -   We have installed a high-quality "Master Brand" image for all your pages.
    -   Any page without a specific image will now show the "Premium Airport & Pilgrim Transport" card in Emerald/Gold style.
    -   This guarantees you never share a link with a broken image.

2.  **RSS Content Feed (`/feed.xml`)**:
    -   We created a "Live Stream" of your content at `https://taxiserviceksa.com/feed.xml`.
    -   This fees includes:
        -   All new Blog Posts (fetched from Supabase).
        -   Core Service Pages (Sticky pages like Airport Transfer).

## 🚀 How to Connect (Zapier / Make.com)

To start automating, you need a "Connector" tool. We recommend **Zapier** (easiest) or **Buffer** (best for scheduling).

### Option A: Buffer (Recommended for Formatting)
1.  Create an account on [Buffer.com](https://buffer.com).
2.  Connect your Social Channels (Facebook Page, LinkedIn Company, X/Twitter).
3.  Go to **Publishing** -> **Settings** -> **General** -> **RSS Feeds**.
4.  Add Feed URL: `https://taxiserviceksa.com/feed.xml`.
5.  **Done!** Buffer will now detect new posts and add them to your queue automatically.

### Option B: Zapier (Total Automation)
1.  Create a new Zap: **"RSS by Zapier"** -> **"New Item in Feed"**.
2.  Trigger URL: `https://taxiserviceksa.com/feed.xml`.
3.  Action: **"Create Page Post"** (Facebook) or **"Create Share Update"** (LinkedIn).
4.  Map the fields:
    -   **Message:** Use the `Title` and `Description` fields from the RSS step.
    -   **Link:** Use the `Link` field.
    -   **Image:** Use the `Image` link (or let the social platform scrape it from the link).

## 💡 How to Trigger a New Post

1.  **Write a Blog Post** in your Admin Panel.
2.  Set status to **"Standard"** (Published).
3.  Wait 1 hour (RSS feeds usually refresh hourly).
4.  **Check Social Media:** Your post will appear automatically with the featured image and link!

## 🔧 Managing Sticky Posts
The RSS feed currently "Loops" your core service pages (Jeddah Airport, Makkah Taxi) to keep them appearing in your social feed occasionally. If you want to stop this, edit `app/feed.xml/route.ts` and remove the `stickyPages` array.
