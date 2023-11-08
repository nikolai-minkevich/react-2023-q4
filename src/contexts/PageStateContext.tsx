import { PropsWithChildren, createContext, useState } from 'react';
import { TSearchState } from '../components/Page/Page';
import { IPageStateContextValue } from '../interfaces/IPageStateContextValue';
export const PageStateContext = createContext<IPageStateContextValue>(
  {} as IPageStateContextValue
);

const DEFAULT_PAGE_SIZE = 5;

export const PageStateProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const defaultTerm = localStorage.getItem('term') ?? '';
  const [term, setTerm] = useState<TSearchState>(defaultTerm);
  const [pageNumber, setPageNumber] = useState<number | undefined>();
  const [pageSize, setPageSize] = useState<number | undefined>(
    DEFAULT_PAGE_SIZE
  );
  const [selectedCard, setSelectedCard] = useState<string | undefined>();

  const contextValue = {
    term,
    setTerm,
    pageNumber,
    setPageNumber,
    selectedCard,
    setSelectedCard,
    pageSize,
    setPageSize,
  };
  return (
    <PageStateContext.Provider value={contextValue}>
      {children}
    </PageStateContext.Provider>
  );
};
