import { FC } from 'react';
import IEpisode from '../../interfaces/IEpisode';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCardId } from '../CardList/CardListSlice';

type TCardProps = {
  card: IEpisode;
};

const Card: FC<TCardProps> = ({ card }: TCardProps) => {
  const selectedCardId = useSelector(
    (state: RootState) => state.cardList.selectedCardId
  );
  const dispatch = useDispatch();

  const isSelected = card.uid === selectedCardId;

  return (
    <div
      className={`card ${isSelected && 'card_selected'}`}
      onClick={() => dispatch(setSelectedCardId(card.uid))}
      aria-label="card"
    >
      <div className="card__section-about">
        <div className="card__name">
          <h3>{card.title}</h3>
        </div>
        <div className="card__description" aria-label="us air date">
          {card.usAirDate}
        </div>
      </div>
    </div>
  );
};

export default Card;
