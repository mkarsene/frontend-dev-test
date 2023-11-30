// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'

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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <h1>hello</h1>
      <InstantSearch indexName="loyverse-items-kuri" searchClient={typesenseInstantsearchAdapter.searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </Box>
  </ChakraProvider>
)
