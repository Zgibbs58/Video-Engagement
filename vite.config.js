import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // This is for local host
  // base: "/Zachary-Portfolio", // This is for github pages
  plugins: [react()],
});
