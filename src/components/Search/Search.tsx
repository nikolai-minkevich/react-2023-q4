import { FC, useState } from 'react';
import { setTerm } from './searchSlice';
import { useGetAllEpisodesQuery } from '../../services/stapi';
import { setSelectedCardId } from '../CardList/CardListSlice';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Search.module.css';

const Search: FC = () => {
  const term = useSelector((state: RootState) => state.search.term);
  const pageNumber = useSelector(
    (state: RootState) => state.pagination.pageNumber
  );
  const pageSize = useSelector((state: RootState) => state.pagination.pageSize);
  const dispatch = useDispatch();

  const [internalTerm, setInternalTerm] = useState('');

  const { isLoading, isFetching } = useGetAllEpisodesQuery({
    term,
    pageNumber,
    pageSize,
  });

  const handleSearchButton = () => {
    localStorage.setItem('term', internalTerm);
    dispatch(setTerm(internalTerm));
    dispatch(setSelectedCardId(''));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        defaultValue={term}
        placeholder="Search by title"
        aria-label="search input"
        onChange={(e) => setInternalTerm(e.target.value)}
      />
      <button
        className={styles.search__button}
        aria-label="search button"
        onClick={handleSearchButton}
        disabled={isLoading || isFetching}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
