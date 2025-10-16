import type { RootState } from 'src/redux/store';

export const selectIsMapOpen = (state: RootState) => state.map.isMapOpen;
