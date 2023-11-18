import { FC, Key } from 'react';
import './CardList.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import DetailedView from '../DetailedView';
// import IPage from '../../interfaces/IPage';
import { useGetAllEpisodesQuery } from '../../services/stapi';

type TCardListProps = {
  // cards: IEpisode[] | null | undefined;
  // page: IPage | null | undefined;
  selectedCard?: string;
};

const CardList: FC<TCardListProps> = ({
  // cards,
  // page,
  selectedCard,
}: TCardListProps): React.JSX.Element => {
  const { data, isLoading } = useGetAllEpisodesQuery();

  const episodes = data?.episodes;
  const page = data?.page;

  if (isLoading || !episodes || !page) {
    return (
      <>
        <div className="content">
          <Loader />
        </div>
      </>
    );
  }

  if (episodes.length === 0) {
    return <div className="content">No data found for this search query</div>;
  }

  return (
    <>
      <div>
        <div className="content">
          <div className="cards">
            {episodes.map((card: IEpisode, index: Key) => (
              <Card card={card} key={index}></Card>
            ))}
          </div>
          {selectedCard && <DetailedView />}
        </div>
      </div>
    </>
  );
};

export default CardList;
