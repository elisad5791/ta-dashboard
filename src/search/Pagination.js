import { useSelector, useDispatch } from 'react-redux';
import '../css/Pagination.css';
import { setPage } from '../slices/searchSlice.js';

function Pagination() {
  const range = Array(10).fill(0).map((_, i) => i + 1);
  const page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();

  const handleClick = (i) => () => {
    dispatch(setPage(i));
  };

  return (
    <ul className="pagination">
      {range.map((i) => {
        return (
        <li className="pagination__item" key={i}>
          {page == i 
            ? <span className="pagination__chosen">{i}</span> 
            : <button type="button" onClick={handleClick(i)} className="pagination__button">{i}</button>
          }
        </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
