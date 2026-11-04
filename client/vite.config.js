import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Tailwind v4 ካለህ

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // ቪቴ ፋይሉን እዚህ ፎልደር ውስጥ እንዲያስቀምጥ ያስገድደዋል
  },
});
