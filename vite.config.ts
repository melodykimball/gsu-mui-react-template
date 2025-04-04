import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import copy from "rollup-plugin-copy-assets";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^(?![./]).+/],
      input: Object.fromEntries(
        glob
          .sync(["src/**/*.{ts,tsx,bmp,gif,png,jpg,svg}"], {
            ignore: ["src/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/styles/[name][extname]",
        entryFileNames: function ({ facadeModuleId, name }) {
          const extname = facadeModuleId?.split(".")?.pop();
          if (extname === "ts" || extname === "tsx") {
            return `${name}.js`;
          }
          if (typeof extname === "string") {
            return `${name}.${extname}`;
          }
          return name;
        },
      },
      plugins: [
        copy({
          assets: ["assets/images"],
        }),
      ],
    },
  },
});
