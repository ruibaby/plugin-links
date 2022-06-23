import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(
      new URL("../src/main/resources/admin", import.meta.url)
    ),
    emptyOutDir: true,
    lib: {
      entry: "src/index.ts",
      name: "PluginLinks",
      formats: ["iife"],
      fileName: () => "main.js",
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-router",
        "@halo-dev/shared",
        "@halo-dev/components",
      ],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
          "@halo-dev/shared": "HaloAdminShared",
          "@halo-dev/components": "HaloComponents",
        },
      },
    },
  },
});
