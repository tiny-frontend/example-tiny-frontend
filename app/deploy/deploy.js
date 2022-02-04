import { deployBundle } from "@tiny-frontend/deploy-cloudflare";
import dotenv from "dotenv";

import { tinyFrontendName, version } from "../../contract/package.json";

dotenv.config({
  path: new URL(".env", import.meta.url).pathname,
});

await deployBundle({
  name: tinyFrontendName,
  contractVersion: version,
  umdBundlePath: new URL(
    "../dist/example-tiny-frontend.umd.js",
    import.meta.url
  ).pathname,
  cssBundlePath: new URL("../dist/style.css", import.meta.url).pathname,
  cloudflare: {
    accountIdentifier: process.env.CF_ACCOUNT_ID,
    apiToken: process.env.CF_API_TOKEN,
    kvNamespaceIdentifier: process.env.CF_KV_NAMESPACE,
  },
});
