export const metadata = {
    title: 'Web Stories | Taxi Service KSA',
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
