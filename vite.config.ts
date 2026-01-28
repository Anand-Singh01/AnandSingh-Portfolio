import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Enable componentTagger only in development
  ]
    .concat(mode === "development" ? [componentTagger()] : []),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- THIS IS KEY
    }
  },
  server: {
    host: "::",
    port: 8080,
  }
}));


// export default defineConfig(({ mode }) => ({
//   base: "/AnandSingh-Portfolio",
//   plugins: [
//     react(),
//     // Enable componentTagger only in development
//     mode === "development" && componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // <-- THIS IS KEY
//     },
//   },
//   server: {
//     host: "::",
//     port: 8080,
//   },
// }));
