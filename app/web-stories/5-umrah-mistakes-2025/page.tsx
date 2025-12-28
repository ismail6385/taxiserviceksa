import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '5 Common Umrah Mistakes to Avoid in 2025 | Web Story',
    description: 'Pro tips for a smooth Umrah 2025. Avoid these 5 costly mistakes including transport, ihram, and hotels.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/web-stories/5-umrah-mistakes-2025',
    },
    other: {
        'amp-story-generator-name': 'Taxi Service KSA Story Builder',
        'amp-story-generator-version': '1.0.0',
    }
};

export default function WebStory() {
    const storyData = {
        title: "5 Umrah Mistakes 2025",
        publisher: "Taxi Service KSA",
        publisherLogo: "https://taxiserviceksa.com/logo.png",
        poster: "https://taxiserviceksa.com/locations/makkah.webp",
        pages: [
            {
                id: "cover",
                image: "https://taxiserviceksa.com/locations/makkah.webp",
                title: "5 Common Umrah Mistakes",
                subtitle: "Don't ruin your journey! 🕋",
                cta: "Swipe Up"
            },
            {
                id: "mistake-1",
                image: "https://taxiserviceksa.com/locations/jeddah-airport.webp",
                title: "1. Not Booking Transport Early",
                text: "Jeddah Airport is chaotic. Waiting for a taxi on arrival can cost you 2+ hours.",
                ctaText: "Book Taxi with us",
                ctaLink: "https://taxiserviceksa.com/booking"
            },
            {
                id: "mistake-2",
                image: "https://taxiserviceksa.com/makkah_madinah_route_map.png",
                title: "2. Underestimating the Distance",
                text: "Makkah to Madinah is 450km! It's not a short drive. Choosing a cramped bus is physically draining.",
                ctaText: "See GMC Comfort",
                ctaLink: "https://taxiserviceksa.com/makkah-to-madinah-taxi"
            },
            {
                id: "mistake-3",
                image: "https://taxiserviceksa.com/blog/hidden-makkah-spots.png",
                title: "3. Brief Ziyarat Trips",
                text: "Most pilgrims rush Ziyarat. You miss the history of Mount Uhud and Quba by rushing.",
                ctaText: "Ziyarat Guide",
                ctaLink: "https://taxiserviceksa.com/locations/madinah"
            },
            {
                id: "mistake-4",
                image: "https://taxiserviceksa.com/blog/taif-rose-festival.png",
                title: "4. Skipping Taif",
                text: "It's only 1 hour from Makkah! The Rose Festival is a once-in-a-lifetime sight.",
                ctaText: "Taif Tour Info",
                ctaLink: "https://taxiserviceksa.com/locations/taif"
            },
            {
                id: "final",
                image: "https://taxiserviceksa.com/hero-image.jpg",
                title: "Have a Blessed Journey",
                text: "We are here to serve you 24/7.",
                ctaText: "Book Now",
                ctaLink: "https://taxiserviceksa.com/booking"
            }
        ]
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        amp-story {
           font-family: 'Inter', sans-serif;
           color: white;
        }
        amp-story-page {
           background-color: black;
        }
        h1 { font-weight: 900; font-size: 2.5em; line-height: 1.1; text-shadow: 0 4px 8px rgba(0,0,0,0.5); }
        p { font-size: 1.2em; line-height: 1.5; background: rgba(0,0,0,0.6); padding: 10px; border-radius: 8px; }
        .bottom-gradient {
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            z-index: 1;
        }
        .content-layer {
            position: absolute;
            bottom: 40px;
            left: 24px;
            right: 24px;
            z-index: 2;
        }
        .logo-layer {
            position: absolute;
            top: 24px;
            left: 24px;
            z-index: 2;
            width: 50px;
            height: 50px;
            background: white;
            border-radius: 50%;
            padding: 5px;
        }
      `}} />

            {/* 
          NOTE: AMP stories must be standalone HTML documents usually. 
          In Next.js app directory, we render the raw AMP elements.
          The layout.tsx usually wraps this, but for AMP we strictly need specific head tags.
          For this simplified version, we are injecting the AMP body content.
      */}

            <div dangerouslySetInnerHTML={{
                __html: `
        <amp-story
            standalone
            title="${storyData.title}"
            publisher="${storyData.publisher}"
            publisher-logo-src="${storyData.publisherLogo}"
            poster-portrait-src="${storyData.poster}"
        >
            ${storyData.pages.map(page => `
                <amp-story-page id="${page.id}">
                    <amp-story-grid-layer template="fill">
                        <amp-img src="${page.image}"
                            width="720" height="1280"
                            layout="responsive"
                            alt="${page.title}"
                            class="animate-zoom">
                        </amp-img>
                    </amp-story-grid-layer>
                    
                    <amp-story-grid-layer template="vertical" class="bottom-gradient">
                    </amp-story-grid-layer>

                    <amp-story-grid-layer template="vertical" class="content-layer">
                        <div class="logo-layer">
                             <amp-img src="${storyData.publisherLogo}" width="40" height="40" layout="fixed"></amp-img>
                        </div>
                        <h1 animate-in="fly-in-bottom" animate-in-duration="0.5s">${page.title}</h1>
                        ${page.subtitle ? `<p animate-in="fade-in" animate-in-delay="0.3s">${page.subtitle}</p>` : ''}
                        ${page.text ? `<p animate-in="fade-in" animate-in-delay="0.3s">${page.text}</p>` : ''}
                        
                        ${page.ctaLink ? `
                            <amp-story-cta-layer>
                                <a href="${page.ctaLink}" class="button" style="text-decoration: none; color: white; background: #10b981; padding: 12px 24px; border-radius: 30px; font-weight: bold; text-align: center; display: inline-block; margin-top: 20px;">
                                    ${page.ctaText || 'Learn More'}
                                </a>
                            </amp-story-cta-layer>
                        ` : ''}
                    </amp-story-grid-layer>
                </amp-story-page>
            `).join('')}
        </amp-story>
      `}} />
        </>
    );
}
