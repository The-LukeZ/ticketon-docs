// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Ticketon",
      favicon: "/logo.png",
      // sidebar: [
      //   {
      //     label: "Start Here",
      //     items: [
      //       { label: "Introduction", slug: "start/intro" },
      //     ],
      //   },
      //   {
      //     label: "Reference",
      //     autogenerate: { directory: "reference" },
      //   },
      // ],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2 },
    }),
  ],
});
