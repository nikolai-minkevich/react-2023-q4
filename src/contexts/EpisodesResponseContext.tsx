import { PropsWithChildren, createContext, useState, useCallback } from 'react';
import { getEpisodes } from '../services/stapi';
import IEpisode from '../interfaces/IEpisode';
import IPage from '../interfaces/IPage';
import { usePageStateContext } from './usePageStateContext';
import { IEpisodesResponseContextValue } from '../interfaces/IEpisodesResponseContextValue';

export const EpisodesResponseContext =
  createContext<IEpisodesResponseContextValue>(
    {} as IEpisodesResponseContextValue
  );

export const EpisodesResponseProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [cards, setCards] = useState<IEpisode[] | null>(null);
  const [page, setPage] = useState<IPage | null>(null);
  const { term, pageNumber, pageSize } = usePageStateContext();

  const fetchItems = useCallback(async () => {
    setCards(null);
    setPage(null);
    const response = await getEpisodes({ term, pageNumber, pageSize });
    setCards(response.episodes);
    setPage(response.page);
  }, [term, pageNumber, pageSize]);
  const contextValue = { cards, page, fetchItems };
  return (
    <EpisodesResponseContext.Provider value={contextValue}>
      {children}
    </EpisodesResponseContext.Provider>
  );
};
