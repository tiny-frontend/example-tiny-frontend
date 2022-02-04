import { defineConfig } from "vite";

import { rollupExternals } from "./rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "exampleTinyFrontendContract",
      fileName: (format) => `example-tiny-frontend-contract.${format}.js`,
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
