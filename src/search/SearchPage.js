import SearchForm from './SearchForm.js';
import Results from './Results.js';
import Pagination from './Pagination.js';

function SearchPage() {
  return (
    <>
      <h1>Поиск</h1>
      <SearchForm />
      <Results />
      <Pagination />
    </>
  );
}

export default SearchPage;
