import { FC, Key } from 'react';
import './Content.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';

type TContentProps = {
  cards: IEpisode[] | null;
};

const Content: FC<TContentProps> = ({ cards }): React.JSX.Element => {
  if (!cards) {
    return (
      <div className="content">
        <Loader></Loader>
      </div>
    );
  }

  if (cards.length === 0) {
    return <div className="content">No data found for this search query</div>;
  }

  return (
    <div className="content">
      {cards.map((card: IEpisode, index: Key) => (
        <Card card={card} key={index}></Card>
      ))}
    </div>
  );
};

export default Content;
