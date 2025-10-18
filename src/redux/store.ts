import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { mapReducer } from './slices/map/slice';
import { modeReducer } from './slices/mode/slice';
import { onboardingReducer } from './slices/onboarding/slice';
import { placesReducer } from './slices/places/slice';

const persistPlacesConfig = {
  key: 'places',
  storage: AsyncStorage,
};

const persistedPlacesReducer = persistReducer(
  persistPlacesConfig,
  placesReducer,
);

const persistOnboardingConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistedOnboardingReducer = persistReducer(
  persistOnboardingConfig,
  onboardingReducer,
);

const store = configureStore({
  reducer: {
    places: persistedPlacesReducer,
    onboarding: persistedOnboardingReducer,
    map: mapReducer,
    mode: modeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
