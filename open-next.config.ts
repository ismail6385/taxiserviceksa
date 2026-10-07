import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Runs scripts/dedupe-rsc-manifests.mjs after `next build` to keep the Worker
// under Cloudflare's 64MiB size limit.
config.buildCommand = "npm run build:cf";

export default config;
