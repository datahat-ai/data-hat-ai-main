import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: true,
    format: 'cjs'
  },
  build: {
    ssr: true,
    rollupOptions: {
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
      }
    }
  }
});
