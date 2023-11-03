import IEpisode from './IEpisode';
import IPage from './IPage';

interface IEpisodesResponse {
  page: IPage;
  episodes: IEpisode[] | null;
}

export default IEpisodesResponse;
