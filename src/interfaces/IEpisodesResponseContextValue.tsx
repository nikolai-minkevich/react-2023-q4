import IEpisode from './IEpisode';
import IPage from './IPage';

export interface IEpisodesResponseContextValue {
  cards: IEpisode[] | null;
  page: IPage | null;
  fetchItems: () => Promise<void>;
}
