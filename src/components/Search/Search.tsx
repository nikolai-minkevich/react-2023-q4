import { FC } from 'react';
import './Search.css';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm } from './searchSlice';
import { useGetAllEpisodesQuery } from '../../services/stapi';

const Search: FC = () => {
  const term = useSelector((state: RootState) => state.search.term);
  const dispatch = useDispatch();

  const { isLoading, refetch } = useGetAllEpisodesQuery();

  console.log('isLoading 2', isLoading);
  const handle = () => {
    localStorage.setItem('term', term);
    refetch();
  };

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
        onClick={handle}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
