import { FC } from 'react';
import './Card.css';
import IEpisode from '../../interfaces/IEpisode';
import { usePageStateContext } from '../../contexts/usePageStateContext';

type TCardProps = {
  card: IEpisode;
};

const Card: FC<TCardProps> = ({ card }: TCardProps) => {
  const { selectedCard, setSelectedCard } = usePageStateContext();
  const handleSelect = () => {
    setSelectedCard(card.uid);
  };
  const isSelected = card.uid === selectedCard;

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
