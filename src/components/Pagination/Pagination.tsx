import { FC, useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
import './Pagination.css';
import IPage from '../../interfaces/IPage';

type TCardProps = {
  page: IPage;
  setPageNumber: Dispatch<SetStateAction<number | undefined>>;
  setPageSize: Dispatch<SetStateAction<number | undefined>>;
};

const Card: FC<TCardProps> = ({ page, setPageNumber, setPageSize }) => {
  // pageNumber: number;
  // pageSize: number;
  // numberOfElements: number;
  // totalElements: number;
  // totalPages: number;
  // firstPage: boolean;
  // lastPage: boolean;

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

  if (page) {
    return (
      <div className="pagination">
        <button onClick={handlePrev} disabled={page.firstPage}>
          Prev.
        </button>
        <button onClick={handleNext} disabled={page.lastPage}>
          Next.
        </button>
        Page {page.pageNumber + 1} of {page.totalPages}. Show
        <select value={page.pageSize} onChange={handlePageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
        items per page.
      </div>
    );
  }
};

export default Card;
