import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import { settingsApi } from './settingsApi';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(settingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
