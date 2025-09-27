import type { DocSearchClientOptions } from "@astrojs/starlight-docsearch";

export default {
  appId: "9SJHRRNA4A",
  apiKey: "f210e804b71e0790940955c62fbab1ac",
  indexName: "Ticketon Docs v1",
  maxResultsPerGroup: 25,
  disableUserPersonalization: false,
  getMissingResultsUrl({ query }) {
    return `https://github.com/The-LukeZ/ticketon-docs/issues/new?title=${query}`;
  },
} satisfies DocSearchClientOptions;
