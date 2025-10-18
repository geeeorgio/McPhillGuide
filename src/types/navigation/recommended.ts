import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MenuItemData } from '../menu';
import type { PlacesCategory } from '../places';

export type RecommendedStackParamsList = {
  RecomendedScreen: undefined;
  CategoryListScreen: { category: PlacesCategory; description: MenuItemData };
};

export type RecommendedStackNavigationProp = NativeStackNavigationProp<
  RecommendedStackParamsList,
  'RecomendedScreen'
>;
