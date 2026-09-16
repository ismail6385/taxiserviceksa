import { NextRequest, NextResponse } from 'next/server';

// A dynamic route instead of a static public/ file so `resource` always
// matches whatever domain actually served the request. isitagentready.com
// (and RFC 9728 in general) treats a `resource` value that doesn't match
// the domain it was fetched from as a hard validation failure — this
// broke the check the moment Vercel's domain settings started redirecting
// the apex to www.taxiserviceksa.com, because the old static file
// hardcoded the non-www form. Self-heals if that Vercel setting changes.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
    const host = request.headers.get('host') || 'taxiserviceksa.com';
    const resource = `https://${host}`;

    return NextResponse.json({
        resource,
        authorization_servers: ['https://fdojxnluwuzsqeejslzo.supabase.co/auth/v1'],
        scopes_supported: ['openid', 'email', 'profile'],
        bearer_methods_supported: ['header'],
        resource_documentation: `${resource}/`,
        resource_signing_alg_values_supported: ['HS256'],
        agent_auth: {
            skill: 'book-taxi',
            register_uri: `${resource}/api/booking/create/`,
            identity_types_supported: ['anonymous'],
            anonymous: {
                credential_types_supported: ['none'],
            },
            claim_uri: `${resource}/api/booking/lookup/`,
        },
    });
}
