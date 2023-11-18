import IEpisodeDetailed from './IEpisodeDetailed';

export default interface IEpisodeResponseContextValue {
  detailedInfo: IEpisodeDetailed | null;
  fetchItem: () => Promise<void>;
}
