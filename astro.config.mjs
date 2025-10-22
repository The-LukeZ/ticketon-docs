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
      logo: {
        src: "./public/logo.png",
        alt: "Ticketon Logo",
        replacesTitle: false,
      },
      credits: true,
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
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "-", // Reset because of SEO issues
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#21aaff",
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
          label: "Dashboard",
          autogenerate: { directory: "dashboard" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Changelogs",
          collapsed: true,
          items: [{ label: "2025", link: "/changelogs/2025" }],
        },
      ],
      components: {
        Header: "./src/components/overrides/Header.astro",
        MarkdownContent: "./src/components/overrides/MarkdownContent.astro",
      },
      social: [
        {
          icon: "discord",
          href: "https://discord.gg/yd5JU8wjRx",
          label: "Support Server",
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
