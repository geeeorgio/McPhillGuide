import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainTabsStackParamsList = {
  RecommendedStack: undefined;
  MapStack: undefined;
  SavedStack: undefined;
  AboutScreen: undefined;
};

export type MainStackProp = NativeStackNavigationProp<
  MainTabsStackParamsList,
  'RecommendedStack'
>;
