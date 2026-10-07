// Cloudflare Worker entry: the OpenNext-generated Next.js handler, plus a
// scheduled() handler for the daily cron jobs. It calls the same
// /api/cron/* routes with the CRON_SECRET bearer token, like Vercel did.
// @ts-ignore `.open-next/worker.js` is generated at build time
import { default as handler } from "./.open-next/worker.js";

const CRON_ROUTES: Record<string, string> = {
    "0 6 * * *": "/api/cron/send-reminders/",
    "0 8 * * *": "/api/cron/send-review-requests/",
};

export default {
    fetch: handler.fetch,

    async scheduled(event: { cron: string }, env: Record<string, any>, ctx: { waitUntil(p: Promise<unknown>): void }) {
        const path = CRON_ROUTES[event.cron];
        if (!path) return;
        const request = new Request(`https://taxiserviceksa.com${path}`, {
            headers: { authorization: `Bearer ${env.CRON_SECRET}` },
        });
        ctx.waitUntil(handler.fetch(request, env, ctx));
    },
};

// @ts-ignore `.open-next/worker.js` is generated at build time
export { DOQueueHandler, DOShardedTagCache } from "./.open-next/worker.js";
