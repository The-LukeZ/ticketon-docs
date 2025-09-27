// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import docsearch from "@astrojs/starlight-docsearch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        catppuccin({
          dark: { accent: "peach", flavor: "mocha" },
          light: { accent: "peach", flavor: "latte" },
        }),
        docsearch({
          clientOptionsModule: "./src/config/docsearch.ts",
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
            {
              label: "Unlimited",
              slug: "start/unlimited",
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
        {
          label: "Dashboard",
          items: [],
        },
        {
          label: "Commands",
          items: [],
        },
      ],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 3 },
      editLink: {
        baseUrl: "https://github.com/The-LukeZ/ticketon-docs/tree/main",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://docs.ticketon.app/logo.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "algolia-site-verification",
            content: "97B3B2D031362AC5",
          },
        },
      ],
    }),
  ],
});
