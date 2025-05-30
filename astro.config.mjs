// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  output: "static",
  site: "https://start3.tech-talent.fr", // Spécifie l'URL complète de votre site
  base: "/", // Préfixe pour les chemins relatifs (si votre app n'est pas à la racine)
  build: {
    client: "./dist/",
  },
});
