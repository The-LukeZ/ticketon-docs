import type { DocSearchClientOptions } from "@astrojs/starlight-docsearch";

export default {
  appId: "9SJHRRNA4A",
  apiKey: "f210e804b71e0790940955c62fbab1ac",
  indexName: "ticketon_docs",
  maxResultsPerGroup: 25,
  disableUserPersonalization: true,
  getMissingResultsUrl({ query }) {
    return `https://github.com/The-LukeZ/ticketon-docs/issues/new?title=${query}`;
  },
} satisfies DocSearchClientOptions;
