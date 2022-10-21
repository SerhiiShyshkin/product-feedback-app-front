import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import categoryReducer from './slices/categorySlice';
import { settingsApi } from './services/settingsApi';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(settingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
