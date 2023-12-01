// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import ListProducts from "../components/ListProducts";
import { Container } from "@chakra-ui/react";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "leYaJxicJjyC6sIE8djLfSzHo3d5taRH",
    nodes: [
      {
        host: "5dbt14p7fze0l6sip-1.a1.typesense.net",
        path: "", 
        port: "443",
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "name,description",
  },
});

const Products = () => {
  return (
    <div>
      <InstantSearch indexName="loyverse-items-kuri" searchClient={typesenseInstantsearchAdapter.searchClient}>
        <Container display="flex" justifyContent="center" alignItems="center" p="20px">
        <SearchBox />
        </Container>
        <Hits hitComponent={ListProducts} />
      </InstantSearch>
    </div>
  )
}

export default Products