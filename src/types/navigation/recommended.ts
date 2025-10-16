import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { PlacesCategory } from '../places';

export type RecommendedStackParamsList = {
  RecomendedScreen: undefined;
  CategoryListScreen: { category: PlacesCategory };
  PlaceDetailsScreen: { id: string };
};

export type RecommendedStackNavigationProp = NativeStackNavigationProp<
  RecommendedStackParamsList,
  'RecomendedScreen'
>;
