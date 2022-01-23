import { deployBundle } from "@smol-frontend/deploy-cloudflare";

await deployBundle({
  name: "example-smol-frontend",
  contractVersion: "1.0.0",
  umdBundlePath: new URL(
    "../dist/example-smol-frontend.umd.js",
    import.meta.url
  ).pathname,
  cloudflare: {
    accountIdentifier: process.env.CF_ACCOUNT_IDENTIFIER,
    authEmail: process.env.CF_AUTH_EMAIL,
    authKey: process.env.CF_AUTH_KEY,
    kvNamespaceIdentifier: process.env.CF_KV_NAMESPACE,
  },
});
