import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercelEdge from "@astrojs/vercel/edge";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), react()],
  output: "server",
  adapter: vercel()
});