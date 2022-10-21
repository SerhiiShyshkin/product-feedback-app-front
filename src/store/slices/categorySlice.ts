import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../services/settingsApi';

const initialState: Category[] = [];

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<Category>) => {
      const newCategory: Category = action.payload;
      state = [];
      return [newCategory, ...state];
    },
    resetActive: (state) => {
      state = [];
      return [];
    },
  },
});

export const { setActive, resetActive } = categorySlice.actions;

export default categorySlice.reducer;
