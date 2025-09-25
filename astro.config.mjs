// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova({
          nav: [{ href: "/", label: "Home" }],
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
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2 },
      editLink: {
        baseUrl: "https://github.com/The-LukeZ/ticketon-docs/tree/main",
      },
      lastUpdated: true,
      customCss: [
        "./src/styles/custom.css",
      ]
    }),
  ],
});
