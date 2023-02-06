import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), svelte(), react()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank",
      rel: "noreferrer"
    }]]
  }
});