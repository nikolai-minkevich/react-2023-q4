import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './components/Search/searchSlice';
import cardListSlice from './components/CardList/CardListSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { episodesApi } from './services/stapi';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cardList: cardListSlice,
    [episodesApi.reducerPath]: episodesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(episodesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
