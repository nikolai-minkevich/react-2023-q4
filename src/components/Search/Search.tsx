import { FC, useState } from 'react';
import './Search.css';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm } from './searchSlice';
import { useGetAllEpisodesQuery } from '../../services/stapi';

const Search: FC = () => {
  const term = useSelector((state: RootState) => state.search.term);
  const dispatch = useDispatch();

  const [internalTerm, setInternalTerm] = useState('');

  const { isLoading } = useGetAllEpisodesQuery(term);

  const handleSearchButton = () => {
    localStorage.setItem('term', internalTerm);
    dispatch(setTerm(internalTerm));
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        defaultValue={term}
        placeholder="Search by title"
        aria-label="search input"
        onChange={(e) => setInternalTerm(e.target.value)}
      />
      <button
        className="search__button"
        aria-label="search button"
        onClick={handleSearchButton}
        disabled={isLoading}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
