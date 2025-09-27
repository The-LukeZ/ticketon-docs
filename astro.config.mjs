// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import docsearch from "@astrojs/starlight-docsearch";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.ticketon.app",
  trailingSlash: "ignore",
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
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 3 },
      editLink: {
        baseUrl: "https://github.com/The-LukeZ/ticketon-docs/tree/main",
      },
      lastUpdated: true,
      customCss: ["./src/styles/global.css"],
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
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "start" },
        },
        {
          label: "Commands",
          autogenerate: { directory: "commands" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Dashboard",
          autogenerate: { directory: "dashboard" },
        },
        {
          label: "Changelogs",
          autogenerate: { directory: "changelogs" },
          collapsed: true,
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
