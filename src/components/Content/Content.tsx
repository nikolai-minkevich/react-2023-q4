import { FC, Key, useCallback, useEffect, useState } from 'react';
import './Content.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import Pagination from '../Pagination';
import DetailedView from '../DetailedView';
import IPage from '../../interfaces/IPage';
import { getEpisode } from '../../services/stapi';

type TContentProps = {
  cards: IEpisode[] | null;
  page: IPage | null;
  setPageNumber: (pageNumber: string) => void;
  setPageSize: (pageSize: string) => void;
  selectedCard: string;
  setSelectedCard: (selectedCard: string) => void;
};

const Content: FC<TContentProps> = ({
  cards,
  page,
  setPageNumber,
  setPageSize,
  selectedCard,
  setSelectedCard,
}): React.JSX.Element => {
  const [detailedInfo, setDetailedInfo] = useState<IEpisode | null>(null);

  const fetchItem = useCallback(async () => {
    setDetailedInfo(null);
    const response = await getEpisode({ uid: selectedCard });
    setDetailedInfo(response.episode);
  }, [selectedCard]);

  useEffect(() => {
    if (selectedCard) {
      fetchItem();
    }
  }, [fetchItem, selectedCard]);

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
        {selectedCard && detailedInfo && (
          <DetailedView detailedInfo={detailedInfo} />
        )}
      </div>
    </>
  );
};

export default Content;
