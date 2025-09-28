// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import docsearch from "@astrojs/starlight-docsearch";
import tailwindcss from "@tailwindcss/vite";
import starlightImageZoomPlugin from "starlight-image-zoom";
import sitemap from "@astrojs/sitemap";

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
        starlightImageZoomPlugin(),
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
          label: "Welcome",
          items: [
            { label: "Getting Started", link: "/getting-started" },
            { label: "About Ticketon", link: "/about" },
            { label: "Unlimited", link: "/unlimited" },
          ],
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
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
