import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'map',
  initialState: {
    isMapOpen: false,
  },
  reducers: {
    toggleMap: (state) => {
      state.isMapOpen = !state.isMapOpen;
    },
  },
});

export const { toggleMap } = slice.actions;

export const mapReducer = slice.reducer;
