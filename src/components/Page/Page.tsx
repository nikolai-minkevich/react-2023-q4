import { FC, useEffect, useState, useCallback } from 'react';
import { getEpisode, getEpisodes } from '../../services/stapi';
import Nav from '../Nav';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import IEpisode from '../../interfaces/IEpisode';
import IPage from '../../interfaces/IPage';
import './Page.css';
import { useNavigate } from 'react-router-dom';
import IEpisodeDetailed from '../../interfaces/IEpisodeDetailed';

type TSearchState = string;

const DEFAULT_PAGE_SIZE = 5;

const Page: FC = (): React.JSX.Element => {
  const defaultTerm = localStorage.getItem('term') ?? '';
  const [term, setTerm] = useState<TSearchState>(defaultTerm);
  const [cards, setCards] = useState<IEpisode[] | null>(null);
  const [page, setPage] = useState<IPage | null>(null);
  const [pageNumber, setPageNumber] = useState<number | undefined>();
  const [pageSize, setPageSize] = useState<number | undefined>(
    DEFAULT_PAGE_SIZE
  );
  const [selectedCard, setSelectedCard] = useState<string | undefined>();
  const [detailedInfo, setDetailedInfo] = useState<IEpisodeDetailed | null>(
    null
  );

  const navigate = useNavigate();

  const fetchItems = useCallback(async () => {
    setCards(null);
    setPage(null);
    const response = await getEpisodes({ term, pageNumber, pageSize });
    setCards(response.episodes);
    setPage(response.page);
  }, [term, pageNumber, pageSize]);

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

  const fetchItem = useCallback(async () => {
    setDetailedInfo(null);
    if (selectedCard) {
      const response = await getEpisode({ uid: selectedCard });
      setDetailedInfo(response.episode);
    }
  }, [selectedCard]);

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
          <Nav setTerm={setTerm}></Nav>

          <Content
            cards={cards}
            page={page}
            setPageNumber={setPageNumber}
            setPageSize={setPageSize}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            detailedInfo={detailedInfo}
          />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
