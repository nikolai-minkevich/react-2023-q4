import { FC } from 'react';
import './Card.css';

type TCardProps = {
  title: string;
  opening_crawl: string;
};

const Card: FC<TCardProps> = ({ title, opening_crawl }) => {
  return (
    <div className="card">
      <div className="card__section-about">
        <div className="card__name">{title}</div>
        <div className="card__description">
          {opening_crawl.substring(0, 125)}...
        </div>
      </div>
    </div>
  );
};

export default Card;
