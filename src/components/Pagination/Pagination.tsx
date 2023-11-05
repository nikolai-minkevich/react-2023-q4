import { FC, useCallback } from 'react';
import './Pagination.css';
import IPage from '../../interfaces/IPage';

type TCardProps = {
  page: IPage;
  setPageNumber: (prevCount: number) => number;
  setPageSize: (pageSize: number) => number;
};

const Card: FC<TCardProps> = ({ page, setPageNumber }) => {
  // pageNumber: number;
  // pageSize: number;
  // numberOfElements: number;
  // totalElements: number;
  // totalPages: number;
  // firstPage: boolean;
  // lastPage: boolean;

  const handlePrev = useCallback(() => {
    setPageNumber((prevCount: number) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
    });
  }, [setPageNumber]);
  const handleNext = useCallback(() => {
    setPageNumber((prevCount: number) => {
      console.log('prevCount', prevCount);
      if (!prevCount) {
        return 1;
      }
      return prevCount + 1;
    });
  }, [setPageNumber]);

  if (page) {
    return (
      <div className="pagination">
        <button onClick={handlePrev}>Prev.</button>
        <button onClick={handleNext}>Next.</button>
        Page #{page.pageNumber} of {page.totalPages}. Show{' '}
        {page.numberOfElements} items per page.
      </div>
    );
  }
};

export default Card;
