import { useContext } from 'react';
import { IPageStateContextValue } from '../interfaces/IPageStateContextValue';
import { PageStateContext } from '../contexts/PageStateContext';

export function usePageStateContext(): IPageStateContextValue {
  const context = useContext(PageStateContext);
  return context;
}
