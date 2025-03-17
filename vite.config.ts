import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "@emotion/react",
        "@emotion/styled",
        "@fontsource/roboto",
        "@mui/icons-material",
        "@mui/material/Box",
        "@mui/material/Toolbar",
        "@mui/material/Divider",
        "@mui/material/Stack",
        "@mui/material/AppBar",
        "@mui/material/Typography",
        "@mui/material/colors/grey",
        "@mui/material/CssBaseline",
        "@mui/material/Button",
        "@mui/material/FormControl",
        "@mui/material/InputLabel",
        "@mui/material/MenuItem",
        "@mui/material/Select",
        "@mui/material/styles",
        "react",
        "react/jsx-runtime",
        "react-dom",
      ],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
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
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
