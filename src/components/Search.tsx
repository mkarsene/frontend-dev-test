import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { searchClient } from '../services/product';
import Products from './Products';
import 'instantsearch.css/themes/satellite.css';
import './styles/Search.css';
import { Box } from '@chakra-ui/react';

const Search = () => {
  return (
    <div className="search-card">
      <InstantSearch
        indexName="loyverse-items-kuri"
        searchClient={searchClient}
      >
        <SearchBox />
        <Box>
          <Hits hitComponent={Products} />
        </Box>
      </InstantSearch>
    </div>
  );
};

export default Search;
