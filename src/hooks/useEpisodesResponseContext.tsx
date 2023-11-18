import { useContext } from 'react';
import { EpisodesResponseContext } from '../contexts/EpisodesResponseContext';
import { IEpisodesResponseContextValue } from '../interfaces/IEpisodesResponseContextValue';

export function useEpisodesResponseContext(): IEpisodesResponseContextValue {
  const context = useContext(EpisodesResponseContext);
  return context;
}
