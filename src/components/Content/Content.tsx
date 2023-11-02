import { FC, Key } from 'react';
import './Content.css';
import Card from '../Card';
import ICard from '../../interfaces/ICard';
import Loader from '../Loader';

type TContentProps = {
  cards: ICard[] | null;
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
      {cards.map(
        (
          card: { title: string; opening_crawl: string },
          index: Key | null | undefined
        ) => (
          <Card
            title={card.title}
            opening_crawl={card.opening_crawl}
            key={index}
          ></Card>
        )
      )}
    </div>
  );
};

export default Content;
