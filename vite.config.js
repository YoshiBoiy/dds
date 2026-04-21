import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        data: resolve(__dirname, "data.html"),
        recommendations: resolve(__dirname, "recommendations.html"),
      },
    },
  },
});
