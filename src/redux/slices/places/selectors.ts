import type { RootState } from 'src/redux/store';

export const selectPlaces = (state: RootState) => state.places.places;

export const selectSelectedPlace = (state: RootState) =>
  state.places.selectedPlace;

export const selectPlaceById = (id: string) => (state: RootState) =>
  state.places.places.find((place) => place.id === id);

export const selectFavouritePlaces = (state: RootState) =>
  state.places.favourite;

export const selectIsFavourite = (id: string) => (state: RootState) =>
  state.places.favourite.some((place) => place.id === id);
