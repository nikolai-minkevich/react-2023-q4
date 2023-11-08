import { useContext } from 'react';
import { EpisodesResponseContext } from './EpisodesResponseContext';
import { IEpisodesResponseContextValue } from '../interfaces/IEpisodesResponseContextValue';

export function useEpisodesResponseContext(): IEpisodesResponseContextValue {
  const context = useContext(EpisodesResponseContext);
  return context;
}
