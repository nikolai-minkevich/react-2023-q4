import { useContext } from 'react';
import { IPageStateContextValue } from '../interfaces/IPageStateContextValue';
import { PageStateContext } from './PageStateContext';

export function usePageStateContext(): IPageStateContextValue {
  const context = useContext(PageStateContext);
  return context;
}
