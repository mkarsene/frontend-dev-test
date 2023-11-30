import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { searchClient } from '../services/product';
import Products from './Products';

const Search = () => {
  return (
    <InstantSearch
      indexName="loyverse-items-kuri"
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits hitComponent={Products} />
    </InstantSearch>
  );
};

export default Search;
