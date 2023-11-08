import { PropsWithChildren, createContext, useState, useCallback } from 'react';
import { getEpisode } from '../services/stapi';
import { usePageStateContext } from './usePageStateContext';
import IEpisodeDetailed from '../interfaces/IEpisodeDetailed';
import IEpisodeResponseContextValue from '../interfaces/IEpisodeResponseContextValue';

export const EpisodeResponseContext =
  createContext<IEpisodeResponseContextValue>(
    {} as IEpisodeResponseContextValue
  );

export const EpisodeResponseProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { selectedCard } = usePageStateContext();
  const [detailedInfo, setDetailedInfo] = useState<IEpisodeDetailed | null>(
    null
  );

  const fetchItem = useCallback(async () => {
    setDetailedInfo(null);
    if (selectedCard) {
      const response = await getEpisode({ uid: selectedCard });
      setDetailedInfo(response.episode);
    }
  }, [selectedCard]);

  const contextValue = { detailedInfo, fetchItem };
  return (
    <EpisodeResponseContext.Provider value={contextValue}>
      {children}
    </EpisodeResponseContext.Provider>
  );
};
