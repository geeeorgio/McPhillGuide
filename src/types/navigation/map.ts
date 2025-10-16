import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapStackParamsList = {
  MapScreen: undefined;
  PlaceDetailsScreen: { id: string };
};

export type RecommendedStackNavigationProp = NativeStackNavigationProp<
  MapStackParamsList,
  'MapScreen'
>;
