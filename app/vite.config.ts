import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { tinyFrontendName } from "../contract/package.json";
import { rollupExternals } from "../contract/rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./lib/index.tsx",
      name: tinyFrontendName,
      fileName: (format) => `example-tiny-frontend.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
