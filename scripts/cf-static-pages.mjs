// Cloudflare-only step, run after `opennextjs-cloudflare build`.
//
// The Workers Free plan allows 10ms of CPU per request, which is too little
// to render a Next.js page inside the Worker. This copies every page Next
// already prerendered at build time (the ~1,000 static pages, sitemaps and
// the feed) into the Worker's static assets folder. Cloudflare serves static
// assets directly, without running the Worker, so these requests cost no CPU.
// Anything not found there (API routes, dynamic pages, redirects, the
// middleware's 410 rules) still goes to the Worker as before.
//
// Static assets skip next.config.js headers(), so the site-wide security
// headers are copied into the assets _headers file as well.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = process.cwd();
const APP_DIR = path.join(root, '.next', 'server', 'app');
const ASSETS_DIR = path.join(root, '.open-next', 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
    throw new Error('.open-next/assets not found; run `opennextjs-cloudflare build` first');
}

// Prerendered files that must keep going through the Worker
const SKIP = new Set(['_not-found', '404', '500']);

function walk(dir, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p, out);
        else if (e.name.endsWith('.html') || e.name.endsWith('.body')) out.push(p);
    }
    return out;
}

function readMeta(file) {
    const metaFile = file.replace(/\.(html|body)$/, '.meta');
    if (!fs.existsSync(metaFile)) return { status: 200, headers: {} };
    return JSON.parse(fs.readFileSync(metaFile, 'utf8'));
}

let pages = 0;
let files = 0;
for (const file of walk(APP_DIR)) {
    const rel = path.relative(APP_DIR, file).split(path.sep).join('/');
    // Route groups like (main) never appear in prerendered output paths, but
    // guard anyway so nothing lands in assets under a group name.
    if (rel.split('/').some((seg) => seg.startsWith('('))) continue;

    const route = rel.replace(/\.(html|body)$/, '');
    if (SKIP.has(route)) continue;

    const meta = readMeta(file);
    if (meta.status && meta.status !== 200) continue;
    const contentType = String(meta.headers?.['content-type'] || '');

    let dest;
    if (file.endsWith('.html') || contentType.startsWith('text/html')) {
        // trailingSlash: true → /about/ is served from about/index.html
        dest = route === 'index' ? 'index.html' : `${route}/index.html`;
        pages++;
    } else if (path.extname(route)) {
        // Route handlers with a file extension in the URL (sitemap*.xml,
        // feed.xml) keep their name so Cloudflare infers the content type.
        dest = route;
        files++;
    } else {
        continue;
    }

    const target = path.join(ASSETS_DIR, dest);
    if (fs.existsSync(target)) continue; // never overwrite a real public/ file
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
}

// Site-wide headers from next.config.js → assets _headers
const require = createRequire(import.meta.url);
const nextConfig = require(path.join(root, 'next.config.js'));
const rules = await nextConfig.headers();
const siteWide = rules.find((r) => r.source === '/(.*)');
if (!siteWide) throw new Error('Site-wide headers rule "/(.*)" not found in next.config.js');

const headersFile = path.join(ASSETS_DIR, '_headers');
const existing = fs.existsSync(headersFile) ? fs.readFileSync(headersFile, 'utf8') : '';
const block = ['/*', ...siteWide.headers.map((h) => `  ${h.key}: ${h.value}`)].join('\n');
fs.writeFileSync(headersFile, `${block}\n\n${existing}`);

console.log(`cf-static-pages: ${pages} pages and ${files} files copied to static assets`);
