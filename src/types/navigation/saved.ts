import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SavedStackParamsList = {
  SavedScreen: undefined;
  PlaceDetailsScreen: { id: string };
};

export type SavedStackNavigationProp = NativeStackNavigationProp<
  SavedStackParamsList,
  'SavedScreen'
>;
