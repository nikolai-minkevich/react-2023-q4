import { FC, useEffect, useState, useCallback } from 'react';
import getEpisodes from '../../services/stapi';
import Nav from '../Nav';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import IEpisode from '../../interfaces/IEpisode';
import IPage from '../../interfaces/IPage';
import './Page.css';

type TSearchState = string;

const Page: FC = (): React.JSX.Element => {
  const defaultTerm = localStorage.getItem('term') ?? '';
  const [term, setTerm] = useState<TSearchState>(defaultTerm);
  const [cards, setCards] = useState<IEpisode[] | null>(null);
  const [page, setPage] = useState<IPage | null>(null);

  const fetchItems = useCallback(async () => {
    setCards(null);
    setPage(null);
    const cards = await getEpisodes(term);
    setCards(cards.episodes);
    setPage(cards.page);
  }, [term]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems, term]);

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
          <Nav setTerm={setTerm}></Nav>

          <Content cards={cards} page={page}></Content>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
