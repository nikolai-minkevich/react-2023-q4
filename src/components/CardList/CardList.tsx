import { FC, Key } from 'react';
import './CardList.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import DetailedView from '../DetailedView';

import { useGetAllEpisodesQuery } from '../../services/stapi';
import type { RootState } from '../../store';
import { useSelector } from 'react-redux';

const CardList: FC = (): React.JSX.Element => {
  const term = useSelector((state: RootState) => state.search.term);
  const selectedCardId = useSelector(
    (state: RootState) => state.cardList.selectedCardId
  );
  const { data, isLoading } = useGetAllEpisodesQuery(term);

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
          {selectedCardId && <DetailedView />}
        </div>
      </div>
    </>
  );
};

export default CardList;
