import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "exampleTinyFrontendContract",
      fileName: (format) => `example-tiny-frontend-contract.${format}.js`,
    },
  },
});
