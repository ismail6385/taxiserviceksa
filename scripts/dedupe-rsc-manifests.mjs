// Cloudflare-only post-build step (run by `npm run build:cf`, never by plain
// `next build`).
//
// Next 14 writes one page_client-reference-manifest.js per page, and each one
// repeats the whole app's client-component map (~42KB × 1000+ pages ≈ 45MB).
// OpenNext bundles every manifest into the single Cloudflare Worker, which
// pushed the Worker past Cloudflare's 64MiB size limit.
//
// This rewrites each manifest to pull the shared parts from one base module
// and keep only its own differences inline. The result is the same object as
// before. It only works where manifests are loaded with require() (OpenNext
// on Cloudflare). `next start` evaluates them without require, which is why
// the normal `npm run build` must not run this.
import fs from 'node:fs';
import path from 'node:path';

// OpenNext bundles from the standalone copy, so both copies are rewritten.
const APP_DIRS = [
    path.join(process.cwd(), '.next', 'server', 'app'),
    path.join(process.cwd(), '.next', 'standalone', '.next', 'server', 'app'),
].filter((dir) => fs.existsSync(dir));
const SUFFIX = '_client-reference-manifest.js';
const SHARED_FIELDS = ['moduleLoading', 'ssrModuleMapping', 'edgeSSRModuleMapping'];

function findManifests(dir, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) findManifests(p, out);
        else if (e.name.endsWith(SUFFIX)) out.push(p);
    }
    return out;
}

function parse(file) {
    const src = fs.readFileSync(file, 'utf8');
    const m = src.match(/globalThis\.__RSC_MANIFEST\[("(?:[^"\\]|\\.)*")\]=([\s\S]*?);?\s*$/);
    if (!m) throw new Error(`Unrecognised manifest format: ${file}`);
    return { key: JSON.parse(m[1]), manifest: JSON.parse(m[2]) };
}

for (const APP_DIR of APP_DIRS) {
    const BASE_FILE = path.join(APP_DIR, '__rsc_manifest_base.js');
    // Skip files a previous run already rewrote
    const files = findManifests(APP_DIR).filter((f) => !fs.readFileSync(f, 'utf8').startsWith('var b=require('));
    if (files.length === 0) continue;
    const parsed = files.map((file) => ({ file, ...parse(file) }));

    // Shared base: fields that are identical everywhere, plus the most common
    // value for each clientModules entry.
    for (const field of SHARED_FIELDS) {
        const first = JSON.stringify(parsed[0].manifest[field]);
        if (parsed.some((p) => JSON.stringify(p.manifest[field]) !== first)) {
            throw new Error(`Manifest field "${field}" differs between pages; dedupe assumptions no longer hold`);
        }
    }

    const freq = {};
    for (const { manifest } of parsed) {
        for (const [k, v] of Object.entries(manifest.clientModules)) {
            const s = JSON.stringify(v);
            freq[k] ??= {};
            freq[k][s] = (freq[k][s] || 0) + 1;
        }
    }
    const baseClientModules = {};
    for (const [k, counts] of Object.entries(freq)) {
        baseClientModules[k] = JSON.parse(Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]);
    }

    const base = { clientModules: baseClientModules };
    for (const field of SHARED_FIELDS) base[field] = parsed[0].manifest[field];
    fs.writeFileSync(BASE_FILE, `module.exports=${JSON.stringify(base)};\n`);

    let before = 0;
    let after = 0;
    for (const { file, key, manifest } of parsed) {
        before += fs.statSync(file).size;

        const extra = {};
        for (const [k, v] of Object.entries(manifest.clientModules)) {
            if (JSON.stringify(v) !== JSON.stringify(baseClientModules[k])) extra[k] = v;
        }
        const missing = Object.keys(baseClientModules).filter((k) => !(k in manifest.clientModules));

        let rel = path.relative(path.dirname(file), BASE_FILE).split(path.sep).join('/');
        if (!rel.startsWith('.')) rel = './' + rel;

        const otherFields = Object.fromEntries(
            Object.entries(manifest).filter(([k]) => k !== 'clientModules' && !SHARED_FIELDS.includes(k))
        );

        const out =
            `var b=require(${JSON.stringify(rel)});` +
            `var c=Object.assign({},b.clientModules,${JSON.stringify(extra)});` +
            (missing.length ? `${JSON.stringify(missing)}.forEach(function(k){delete c[k]});` : '') +
            `globalThis.__RSC_MANIFEST=(globalThis.__RSC_MANIFEST||{});` +
            `globalThis.__RSC_MANIFEST[${JSON.stringify(key)}]=Object.assign(` +
            `{moduleLoading:b.moduleLoading,ssrModuleMapping:b.ssrModuleMapping,edgeSSRModuleMapping:b.edgeSSRModuleMapping,clientModules:c},` +
            `${JSON.stringify(otherFields)});\n`;
        fs.writeFileSync(file, out);
        after += out.length;
    }

    console.log(
        `dedupe-rsc-manifests (${path.relative(process.cwd(), APP_DIR)}): ${files.length} manifests, ${(before / 1048576).toFixed(1)}MB -> ` +
            `${((after + fs.statSync(BASE_FILE).size) / 1048576).toFixed(1)}MB`
    );
}

// OpenNext only copies files listed in Next's .nft.json traces, so register
// the new base module in the server trace.
for (const name of ['next-server.js.nft.json', 'next-minimal-server.js.nft.json']) {
    const nftFile = path.join(process.cwd(), '.next', name);
    if (!fs.existsSync(nftFile)) continue;
    const nft = JSON.parse(fs.readFileSync(nftFile, 'utf8'));
    const entry = 'server/app/__rsc_manifest_base.js';
    if (!nft.files.includes(entry)) {
        nft.files.push(entry);
        fs.writeFileSync(nftFile, JSON.stringify(nft));
    }
}
