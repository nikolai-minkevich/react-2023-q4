import ISeason from './ISeason';
import ISeries from './ISeries';
import IWriter from './IWriter';

interface IEpisode {
  uid: string;
  title: string | null;
  series: ISeries | null;
  season: ISeason | null;
  seasonNumber: number | null;
  episodeNumber: number | null;
  yearFrom: number | null;
  yearTo: number | null;
  usAirDate: string | null;
  writers: IWriter[];
}

export default IEpisode;
