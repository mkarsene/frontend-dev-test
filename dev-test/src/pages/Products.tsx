// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import ListProducts from "../components/ListProducts";
import { Container } from "@chakra-ui/react";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.REACT_APP_API_KEY,
    nodes: [
      {
        host: process.env.REACT_APP_HOST,
        port: process.env.REACT_APP_PORT,
        protocol: process.env.REACT_APP_PROTOCOL,
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
        <Hits hitComponent={ListProducts}  />
      </InstantSearch>
    </div>
  )
}

export default Products