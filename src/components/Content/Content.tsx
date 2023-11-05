import { FC, Key } from 'react';
import './Content.css';
import Card from '../Card';
import IEpisode from '../../interfaces/IEpisode';
import Loader from '../Loader';
import Pagination from '../Pagination';
import IPage from '../../interfaces/IPage';

type TContentProps = {
  cards: IEpisode[] | null;
  page: IPage | null;
  setPageNumber: (pageNumber: string) => void;
  setPageSize: (pageSize: string) => void;
};

const Content: FC<TContentProps> = ({
  cards,
  page,
  setPageNumber,
  setPageSize,
}): React.JSX.Element => {
  if (!cards || !page) {
    return (
      <>
        <div className="content">
          <Loader></Loader>
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
        {cards.map((card: IEpisode, index: Key) => (
          <Card card={card} key={index}></Card>
        ))}
      </div>
    </>
  );
};

export default Content;
