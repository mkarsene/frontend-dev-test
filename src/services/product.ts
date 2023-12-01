import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'leYaJxicJjyC6sIE8djLfSzHo3d5taRH',
    nodes: [
      {
        host: '5dbt14p7fze0l6sip-1.a1.typesense.net',
        port: 443,
        protocol: 'https',
      },
    ],
    connectionTimeoutSeconds: 1,
    numRetries: 8,
  },

  additionalSearchParameters: {
    query_by: 'name,description',
    typoTokensThreshold: 1,
  },
});
export const searchClient = typesenseInstantsearchAdapter.searchClient;
