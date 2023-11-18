import { FC, useCallback, ChangeEvent } from 'react';
import './Pagination.css';
// import IPage from '../../interfaces/IPage';
import { usePageStateContext } from '../../hooks/usePageStateContext';
import { useGetAllEpisodesQuery } from '../../services/stapi';

const Card: FC = () => {
  const { data } = useGetAllEpisodesQuery();

  const page = data?.page;

  const { setPageNumber, setPageSize } = usePageStateContext();
  const handlePrev = useCallback(() => {
    setPageNumber((prevCount?: number) => {
      if (prevCount && prevCount > 1) {
        return prevCount - 1;
      }
    });
  }, [setPageNumber]);
  const handleNext = useCallback(() => {
    setPageNumber((prevCount?: number) => {
      if (!prevCount) {
        return 1;
      }
      return prevCount + 1;
    });
  }, [setPageNumber]);
  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageNumber(0);
    setPageSize(Number(e.target.value));
  };

  return (
    <div className="pagination" aria-label="pagination">
      <button
        onClick={handlePrev}
        disabled={!page || page.firstPage}
        aria-label="previous page"
      >
        Prev.
      </button>
      <button
        onClick={handleNext}
        disabled={!page || page.lastPage}
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
        onChange={handlePageSize}
        disabled={!page}
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
