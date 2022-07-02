import SearchForm from './SearchForm.js';
import Results from './Results.js';
import Pagination from './Pagination.js';
import '../css/SearchPage.css';

function SearchPage() {
  return (
    <>
      <h1 className="search-title">Поиск</h1>
      <SearchForm />
      <Results />
      <Pagination />
    </>
  );
}

export default SearchPage;
