// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // Si vous utilisez un framework avec routage côté client comme React, Vue, etc.
  // integrations: [react()], // ou vue(), svelte(), etc.
  build: {
    // Assurez-vous que ceci est activé si vous utilisez un routage sur le client
    client: "./dist/",
  },
});
