import { Dispatch, FC, Key, SetStateAction } from 'react';
import './Content.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import Pagination from '../Pagination';
import DetailedView from '../DetailedView';
import IPage from '../../interfaces/IPage';
import IEpisodeDetailed from '../../interfaces/IEpisodeDetailed';
type TContentProps = {
  cards: IEpisode[] | null;
  page: IPage | null;
  setPageNumber: Dispatch<SetStateAction<number | undefined>>;
  setPageSize: Dispatch<SetStateAction<number | undefined>>;
  selectedCard?: string;
  setSelectedCard: Dispatch<SetStateAction<string | undefined>>;
  detailedInfo: IEpisodeDetailed | null;
};

const Content: FC<TContentProps> = ({
  cards,
  page,
  setPageNumber,
  setPageSize,
  selectedCard,
  setSelectedCard,
  detailedInfo,
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
        <Pagination
          page={page}
          setPageNumber={setPageNumber}
          setPageSize={setPageSize}
        ></Pagination>
        <div className="content">
          <div className="cards">
            {cards.map((card: IEpisode, index: Key) => (
              <Card
                card={card}
                key={index}
                isSelected={card.uid === selectedCard ? true : false}
                setSelectedCard={setSelectedCard}
              ></Card>
            ))}
          </div>
          {selectedCard && (
            <DetailedView
              detailedInfo={detailedInfo}
              setSelectedCard={setSelectedCard}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
