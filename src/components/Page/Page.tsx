import { FC, useEffect } from 'react';
import Nav from '../Nav';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import './Page.css';
import { useNavigate } from 'react-router-dom';
import { usePageStateContext } from '../../hooks/usePageStateContext';
import { useEpisodesResponseContext } from '../../hooks/useEpisodesResponseContext';
import { useEpisodeResponseContext } from '../../hooks/useEpisodeResponseContext';
import { Counter } from '../../features/counter/Counter';

// Fix me: тип  TSearchState нужно перенести в контекст где будут храниться term

export type TSearchState = string;

const Page: FC = (): React.JSX.Element => {
  const { fetchItems, cards, page } = useEpisodesResponseContext();
  const { term, selectedCard, pageNumber, pageSize } = usePageStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, [fetchItems, term]);

  useEffect(() => {
    let url = `${location.pathname}?`;
    if (pageNumber) {
      url += `pageNumber=${pageNumber}&`;
    }
    if (pageSize) {
      url += `pageSize=${pageSize}&`;
    }
    if (selectedCard) {
      url += `&detailed=${selectedCard}`;
    }
    navigate(url);
  }, [navigate, pageNumber, pageSize, selectedCard]);

  const { fetchItem } = useEpisodeResponseContext();

  useEffect(() => {
    if (selectedCard) {
      fetchItem();
    }
  }, [fetchItem, selectedCard]);

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

          <Content cards={cards} page={page} selectedCard={selectedCard} />

          <Counter />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
