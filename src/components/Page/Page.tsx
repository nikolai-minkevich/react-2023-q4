import { FC } from 'react';
import Nav from '../Nav';
import CardList from '../CardList';
import ErrorBoundary from '../ErrorBoundary';
import './Page.css';
import Pagination from '../Pagination';

export type TSearchState = string;

const Page: FC = (): React.JSX.Element => {
  // useEffect(() => {
  //   fetchItems();
  // }, [fetchItems, term]);

  // useEffect(() => {
  //   let url = `${location.pathname}?`;
  //   if (pageNumber) {
  //     url += `pageNumber=${pageNumber}&`;
  //   }
  //   if (pageSize) {
  //     url += `pageSize=${pageSize}&`;
  //   }
  //   if (selectedCard) {
  //     url += `&detailed=${selectedCard}`;
  //   }
  //   navigate(url);
  // }, [navigate, pageNumber, pageSize, selectedCard]);

  // const { fetchItem } = useEpisodeResponseContext();

  // useEffect(() => {
  //   if (selectedCard) {
  //     fetchItem();
  //   }
  // }, [fetchItem, selectedCard]);

  return (
    <>
      <ErrorBoundary
        fallback={
          <p>
            🥳 Don't worry! It is just an example of error handling by the{' '}
            <strong>ErrorBoundary</strong> component. Refresh page for continue.
          </p>
        }
      >
        <div className="page">
          <Nav></Nav>
          <Pagination />
          <CardList />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
