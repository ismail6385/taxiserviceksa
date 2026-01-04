import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', request.nextUrl.pathname);

    const hostname = request.headers.get('host') || '';
    if (hostname.startsWith('www.')) {
        const url = request.nextUrl.clone();
        url.hostname = hostname.replace('www.', '');
        return NextResponse.redirect(url, 308);
    }

    // Handle WordPress paths - return 410 Gone (permanently removed)
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/wp-content/') || pathname.startsWith('/wp-admin/') || pathname.startsWith('/wp-includes/')) {
        return new NextResponse(null, { status: 410 });
    }

    // Handle WordPress-style date URLs (e.g., /2025/11/12/hello-world/)
    if (pathname.match(/^\/\d{4}\/\d{1,2}\/\d{1,2}\//)) {
        return new NextResponse(null, { status: 410 });
    }

    // Handle timestamped image files (e.g., makkah_kaaba_night_1765976683486.png)
    if (pathname.match(/_\d{13}\.(png|jpg|jpeg|webp)$/i)) {
        return new NextResponse(null, { status: 410 });
    }

    // Handle missing feed URLs
    if (pathname === '/feed' || pathname.startsWith('/feed/') || pathname.startsWith('/comments/feed')) {
        const url = request.nextUrl.clone();
        url.pathname = '/feed.xml';
        return NextResponse.redirect(url, 301);
    }

    // Redirect URLs without trailing slash to trailing slash (except for files and API routes)
    // Skip if it's already a file extension, API route, or has trailing slash
    if (
        pathname !== '/' &&
        !pathname.endsWith('/') &&
        !pathname.startsWith('/api/') &&
        !pathname.startsWith('/_next/') &&
        !pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|css|js|json|xml|txt|pdf|woff|woff2|ttf|eot)$/i)
    ) {
        const url = request.nextUrl.clone();
        url.pathname = pathname + '/';
        // Preserve query string
        if (request.nextUrl.search) {
            url.search = request.nextUrl.search;
        }
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - robots.txt (robots file)
         * - sitemap.xml (sitemap file)
         */
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
