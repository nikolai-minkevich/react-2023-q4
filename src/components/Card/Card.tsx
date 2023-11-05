import { FC } from 'react';
import './Card.css';
import IEpisode from '../../interfaces/IEpisode';

type TCardProps = {
  card: IEpisode;
  isSelected: boolean;
  setSelectedCard: (uid: string) => void;
};

const Card: FC<TCardProps> = ({
  card,
  isSelected,
  setSelectedCard,
}: TCardProps) => {
  const handleSelect = () => {
    setSelectedCard(card.uid);
  };
  return (
    <div
      className={`card ${isSelected && 'card_selected'}`}
      onClick={handleSelect}
    >
      <div className="card__section-about">
        <div className="card__name">{card.title}</div>
        <div className="card__description">{card.usAirDate}</div>
      </div>
    </div>
  );
};

export default Card;
