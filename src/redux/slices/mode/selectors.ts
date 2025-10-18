import type { RootState } from 'src/redux/store';

export const selectIsSafeArea = (state: RootState) => state.mode.isSafeArea;
