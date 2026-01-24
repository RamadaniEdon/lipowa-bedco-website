import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [svgr(), dts(), react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@types": path.resolve(__dirname, "./src/types"),
        },
    },
    server: {
        port: 3000,
    },
});
