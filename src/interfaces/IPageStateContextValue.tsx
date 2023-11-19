import { TSearchState } from '../components/Page/Page';

export interface IPageStateContextValue {
  term: TSearchState;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  pageNumber?: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedCard?: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | undefined>>;
  pageSize?: number;
  setPageSize: React.Dispatch<React.SetStateAction<number | undefined>>;
}
