export const metadata = {
    title: 'Web Stories | VIP Transfer KSA',
    description: 'Visual stories and guides for Umrah pilgrims.',
}

export default function WebStoryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html amp="" lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
                
                {/* AMP Custom Styles */}
                <style amp-custom="">{`
                    amp-story { font-family: 'Poppins', sans-serif; color: white; }
                    amp-story-page { background-color: black; }
                    h1 { font-weight: 900; font-size: 2.5em; line-height: 1.1; text-shadow: 0 4px 8px rgba(0,0,0,0.5); }
                    p { font-size: 1.2em; line-height: 1.5; background: rgba(0,0,0,0.6); padding: 10px; border-radius: 8px; }
                    .bottom-gradient {
                        background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                        position: absolute; bottom: 0; left: 0; right: 0; height: 50%; z-index: 1;
                    }
                    .content-layer {
                        position: absolute; bottom: 40px; left: 24px; right: 24px; z-index: 2;
                    }
                    .logo-layer {
                        position: absolute; top: 24px; left: 24px; z-index: 2;
                        width: 50px; height: 50px; background: white; border-radius: 50%; padding: 5px;
                    }
                    .button {
                        text-decoration: none; color: white; background: #10b981;
                        padding: 12px 24px; border-radius: 30px; font-weight: bold;
                        text-align: center; display: inline-block; margin-top: 20px;
                    }
                    .animate-zoom {
                         animation: zoom-in 20s infinite alternate;
                    }
                    @keyframes zoom-in {
                        0% { transform: scale(1); }
                        100% { transform: scale(1.1); }
                    }
                `}</style>
                
                {/* Recommended AMP Boilerplate */}
                <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
                <noscript><style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
