import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
