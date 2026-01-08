import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '5 Common Umrah Mistakes to Avoid in 2025 | Web Story',
    description: 'Pro tips for a smooth Umrah 2025. Avoid these 5 costly mistakes including transport, ihram, and hotels.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/web-stories/5-umrah-mistakes-2025',
    },
    other: {
        'amp-story-generator-name': 'VIP Transfer KSA Story Builder',
        'amp-story-generator-version': '1.0.0',
    }
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-story': any;
            'amp-story-page': any;
            'amp-story-grid-layer': any;
            'amp-img': any;
            'amp-story-cta-layer': any;
        }
    }
}

export default function WebStory() {
    const storyData = {
        title: "5 Umrah Mistakes 2025",
        publisher: "VIP Transfer KSA",
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
                id: "mistake-5", // ID was missing/implicit before
                image: "https://taxiserviceksa.com/hero-image.jpg",
                title: "Have a Blessed Journey",
                text: "We are here to serve you 24/7.",
                ctaText: "Book Now",
                ctaLink: "https://taxiserviceksa.com/booking"
            }
        ]
    };

    return (
        <amp-story
            standalone=""
            title={storyData.title}
            publisher={storyData.publisher}
            publisher-logo-src={storyData.publisherLogo}
            poster-portrait-src={storyData.poster}
        >
            {storyData.pages.map((page, index) => (
                <amp-story-page id={page.id || `page-${index}`} key={page.id || index}>
                    <amp-story-grid-layer template="fill">
                        <amp-img src={page.image}
                            width="720" height="1280"
                            layout="responsive"
                            alt={page.title}
                            class="animate-zoom">
                        </amp-img>
                    </amp-story-grid-layer>

                    <amp-story-grid-layer template="vertical" class="bottom-gradient">
                    </amp-story-grid-layer>

                    <amp-story-grid-layer template="vertical" class="content-layer">
                        <div className="logo-layer">
                            <amp-img src={storyData.publisherLogo} width="40" height="40" layout="fixed"></amp-img>
                        </div>
                        <h1 animate-in="fly-in-bottom" animate-in-duration="0.5s">{page.title}</h1>
                        {page.subtitle && <p animate-in="fade-in" animate-in-delay="0.3s">{page.subtitle}</p>}
                        {page.text && <p animate-in="fade-in" animate-in-delay="0.3s">{page.text}</p>}

                        {page.ctaLink && (
                            <amp-story-cta-layer>
                                <a href={page.ctaLink} className="button">
                                    {page.ctaText || 'Learn More'}
                                </a>
                            </amp-story-cta-layer>
                        )}
                    </amp-story-grid-layer>
                </amp-story-page>
            ))}
        </amp-story>
    );
}
