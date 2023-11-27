import { FC } from 'react';

import { useGetAllEpisodesQuery } from '../../services/stapi';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber, setPageSize } from './paginationSlice';

import styles from './Pagination.module.css';

const Card: FC = () => {
  const term = useSelector((state: RootState) => state.search.term);
  const pageNumber = useSelector(
    (state: RootState) => state.pagination.pageNumber
  );
  const pageSize = useSelector((state: RootState) => state.pagination.pageSize);
  const dispatch = useDispatch();

  const { data, isLoading, isFetching } = useGetAllEpisodesQuery({
    term,
    pageNumber,
    pageSize,
  });

  const page = data?.page;

  const handlePrev = () => {
    if (pageNumber && pageNumber > 0) {
      return dispatch(setPageNumber(pageNumber - 1));
    }
  };

  const handleNext = () => {
    if (!pageNumber) {
      dispatch(setPageNumber(0));
    }
    return dispatch(setPageNumber(pageNumber + 1));
  };

  return (
    <div className={styles.pagination} aria-label="pagination">
      <button
        onClick={handlePrev}
        className={styles.pagination__button}
        disabled={!page || page.firstPage || isFetching || isLoading}
        aria-label="previous page"
      >
        Prev.
      </button>
      <button
        onClick={handleNext}
        className={styles.pagination__button}
        disabled={!page || page.lastPage || isFetching || isLoading}
        aria-label="next page"
      >
        Next.
      </button>
      {page && (
        <>
          Page {page.pageNumber + 1} of {page.totalPages}.
        </>
      )}{' '}
      Show {` `}
      <select
        value={page ? page.pageSize : '5'}
        onChange={(e) => {
          dispatch(setPageSize(Number(e.target.value)));
          dispatch(setPageNumber(0));
        }}
        disabled={!page || isFetching || isLoading}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="25">25</option>
      </select>
      {` `} items per page.
    </div>
  );
};

export default Card;
