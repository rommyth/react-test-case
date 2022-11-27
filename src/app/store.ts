import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { highlightApi } from '../features/Highlight/highlightApi';
import { everythinghtApi } from '../features/Everything/everythingApi';

export const store = configureStore({
  reducer: {
    [highlightApi.reducerPath]: highlightApi.reducer,
    [everythinghtApi.reducerPath]: everythinghtApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      highlightApi.middleware,
      everythinghtApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
