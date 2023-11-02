import { FC, useEffect, useState, useCallback } from 'react';
import fetchAll from '../../services/swapi';
import Nav from '../Nav';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import ICard from '../../interfaces/ICard';
import './Page.css';

type TPageState = ICard[] | null;
type TSearchState = string;

const Page: FC = (): React.JSX.Element => {
  const defaultTerm = localStorage.getItem('term') ?? '';
  const [term, setTerm] = useState<TSearchState>(defaultTerm);
  const [cards, setCards] = useState<TPageState>(null);

  const fetchItems = useCallback(async () => {
    setCards(null);
    const cards = await fetchAll(term);

    setCards(cards);
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

          <Content cards={cards}></Content>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
