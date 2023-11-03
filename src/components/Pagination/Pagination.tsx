import { FC } from 'react';
import './Pagination.css';
import IPage from '../../interfaces/IPage';

type TCardProps = {
  page: IPage;
};

const Card: FC<TCardProps> = ({ page }) => {
  // pageNumber: number;
  // pageSize: number;
  // numberOfElements: number;
  // totalElements: number;
  // totalPages: number;
  // firstPage: boolean;
  // lastPage: boolean;

  if (page) {
    return (
      <div className="card">
        <div className="card__section-about">
          <div className="card__name">{page.pageNumber}</div>
        </div>
      </div>
    );
  }
};

export default Card;
