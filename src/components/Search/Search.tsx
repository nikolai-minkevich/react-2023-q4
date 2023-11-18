import { FC } from 'react';
import './Search.css';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm, search } from './searchSlice';

const Search: FC = () => {
  const term = useSelector((state: RootState) => state.search.term);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        defaultValue={term}
        placeholder="Search by title"
        aria-label="search input"
        onChange={(e) => dispatch(setTerm(e.target.value))}
      />
      <button
        className="search__button"
        aria-label="search button"
        onClick={() => dispatch(search())}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
