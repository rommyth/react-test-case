import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { highlightApi } from '../features/Highlight/highlightApi';

export const store = configureStore({
  reducer: {
    [highlightApi.reducerPath]: highlightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(highlightApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
