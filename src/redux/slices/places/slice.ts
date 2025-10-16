import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { PLACES } from 'src/constants';
import type { Place } from 'src/types';

interface PlacesState {
  places: Place[];
  selectedPlace?: Place;
  favourite: Place[];
}

const initiaPlaceslState: PlacesState = {
  places: PLACES,
  selectedPlace: undefined,
  favourite: [],
};

const slice = createSlice({
  name: 'places',
  initialState: initiaPlaceslState,
  reducers: {
    setSelectedPlace: (state, { payload }: PayloadAction<Place>) => {
      state.selectedPlace = payload;
    },
    resetSelectedPlace: (state) => {
      state.selectedPlace = undefined;
    },
    toggleFavourite: (state, { payload }: PayloadAction<string>) => {
      const existingPlace = state.favourite.find(
        (place) => place.id === payload,
      );

      if (existingPlace) {
        state.favourite = state.favourite.filter(
          (place) => place.id !== payload,
        );
      } else {
        const placeToAdd = state.places.find((place) => place.id === payload);
        if (placeToAdd) {
          state.favourite.push(placeToAdd);
        }
      }
    },
  },
});

export const { setSelectedPlace, resetSelectedPlace, toggleFavourite } =
  slice.actions;

export const placesReducer = slice.reducer;
