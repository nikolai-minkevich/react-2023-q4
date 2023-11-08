import { useContext } from 'react';
import IEpisodeResponseContextValue from '../interfaces/IEpisodeResponseContextValue';
import { EpisodeResponseContext } from './EpisodeResponseContext';

export function useEpisodeResponseContext(): IEpisodeResponseContextValue {
  const context = useContext(EpisodeResponseContext);
  return context;
}
