import { FC } from 'react';
import './Card.css';
import IEpisode from '../../interfaces/IEpisode';

type TCardProps = {
  card: IEpisode;
};

const Card: FC<TCardProps> = ({ card }) => {
  return (
    <div className="card">
      <div className="card__section-about">
        <div className="card__name">{card.title}</div>
      </div>
    </div>
  );
};

export default Card;
