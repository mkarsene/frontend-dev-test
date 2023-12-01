// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import Dashboard from "./Dashboard";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "leYaJxicJjyC6sIE8djLfSzHo3d5taRH", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "5dbt14p7fze0l6sip-1.a1.typesense.net",
        path: "", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
        port: "443",
        protocol: "https",
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "name,description",
  },
});

const Products = () => {
  return (
    <div>
      <InstantSearch indexName="loyverse-items-kuri" searchClient={typesenseInstantsearchAdapter.searchClient}>
        {/* <Container display="flex" justifyContent="center" alignItems="center" p="20px"> */}
        <SearchBox />
        {/* </Container> */}
        <Hits hitComponent={Dashboard} />
      </InstantSearch>
    </div>
  )
}

export default Products