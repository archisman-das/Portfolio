import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        projects: "projects.html",
        education: "education.html",
        skills: "skills.html",
        research: "research.html",
        achievements: "achievements.html",
        contact: "contact.html",
        notFound: "404.html",
      },
    },
  },
});
