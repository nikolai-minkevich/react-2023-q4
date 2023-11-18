import { FC, Key } from 'react';
import './Content.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import Pagination from '../Pagination';
import DetailedView from '../DetailedView';
import IPage from '../../interfaces/IPage';

type TContentProps = {
  cards: IEpisode[] | null;
  page: IPage | null;
  selectedCard?: string;
};

const Content: FC<TContentProps> = ({
  cards,
  page,
  selectedCard,
}: TContentProps): React.JSX.Element => {
  if (!cards || !page) {
    return (
      <>
        <div className="content">
          <Loader />
        </div>
      </>
    );
  }

  if (cards.length === 0) {
    return <div className="content">No data found for this search query</div>;
  }

  return (
    <>
      <div>
        <Pagination page={page}></Pagination>
        <div className="content">
          <div className="cards">
            {cards.map((card: IEpisode, index: Key) => (
              <Card card={card} key={index}></Card>
            ))}
          </div>
          {selectedCard && <DetailedView />}
        </div>
      </div>
    </>
  );
};

export default Content;
