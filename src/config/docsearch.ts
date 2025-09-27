import type { DocSearchClientOptions } from "@astrojs/starlight-docsearch";

export default {
  appId: import.meta.env.ALGOLIA_APP_ID,
  apiKey: import.meta.env.ALGOLIA_API_KEY,
  indexName: import.meta.env.ALGOLIA_INDEX_NAME,
  getMissingResultsUrl({ query }) {
    return `https://github.com/The-LukeZ/ticketon-docs/issues/new?title=${query}`;
  },
} satisfies DocSearchClientOptions;
