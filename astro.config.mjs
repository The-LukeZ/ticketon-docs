// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        catppuccin({
          dark: { accent: "peach", flavor: "mocha" },
          light: { accent: "peach", flavor: "latte" },
        }),
      ],
      title: "Ticketon",
      favicon: "/logo.png",
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Introduction",
              slug: "start/intro",
            },
            {
              label: "About",
              slug: "start/about",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Example Guide",
              slug: "guides/example",
            },
          ],
        },
      ],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 3 },
      editLink: {
        baseUrl: "https://github.com/The-LukeZ/ticketon-docs/tree/main",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
