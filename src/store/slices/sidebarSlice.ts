import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
