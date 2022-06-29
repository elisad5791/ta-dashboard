import { useState } from 'react';
import { useDispatch } from 'react-redux'
import '../css/SearchForm.css';
import { setTerm, setPage } from '../slices/searchSlice.js';

function SearchForm() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTerm(searchTerm));
    dispatch(setPage(1));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" id="search" name="search" value={searchTerm} onChange={handleChange} />
      <input type="submit" value="Найти" className="search__button" />
    </form>   
  );
}

export default SearchForm;
