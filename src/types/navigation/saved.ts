import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SavedStackParamsList = {
  SavedScreen: undefined;
};

export type SavedStackNavigationProp = NativeStackNavigationProp<
  SavedStackParamsList,
  'SavedScreen'
>;
