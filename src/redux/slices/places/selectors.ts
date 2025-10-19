import type { RootState } from 'src/redux/store';
import type { Place } from 'src/types';

export const selectPlaces = (state: RootState) => state.places.places;

export const selectSelectedPlace = (state: RootState) =>
  state.places.selectedPlace;

export const selectPlaceById =
  (id?: string | null | undefined) =>
  (state: RootState): Place | undefined => {
    if (!id) {
      return undefined;
    }

    return state.places.places.find((place) => place.id === id);
  };

export const selectFavouritePlaces = (state: RootState) =>
  state.places.favourite;

export const selectIsFavourite = (id: string) => (state: RootState) =>
  state.places.favourite.some((place) => place.id === id);
