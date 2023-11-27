import { FC } from 'react';
import IEpisode from '../../interfaces/IEpisode';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCardId } from '../CardList/CardListSlice';

import styles from './Card.module.css';

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
      className={`${styles.card} ${isSelected && styles.card_selected}`}
      onClick={() => dispatch(setSelectedCardId(card.uid))}
      aria-label="card"
    >
      <div className={styles.card__sectionAbout}>
        <div className={styles.card__name}>
          <h3>{card.title}</h3>
        </div>
        <div className={styles.card__description} aria-label="us air date">
          {card.usAirDate}
        </div>
      </div>
    </div>
  );
};

export default Card;
