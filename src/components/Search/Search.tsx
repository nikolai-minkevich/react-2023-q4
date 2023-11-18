import { FC } from 'react';
import './Search.css';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm } from './searchSlice';

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
        onChange={(e) => dispatch(setTerm(e.target.value))}
        aria-label="search input"
      />
      <button className="search__button" aria-label="search button">
        Search
      </button>
    </div>
  );
};

export default Search;
