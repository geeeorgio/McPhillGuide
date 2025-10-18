import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MapStackParamsList } from './map';
import type { RecommendedStackParamsList } from './recommended';
import type { SavedStackParamsList } from './saved';

export type MainTabsStackParamsList = {
  RecommendedStack: NavigatorScreenParams<RecommendedStackParamsList>;
  MapStack: NavigatorScreenParams<MapStackParamsList>;
  SavedStack: NavigatorScreenParams<SavedStackParamsList>;
  AboutScreen: undefined;
};

export type MainStackProp = NativeStackNavigationProp<
  MainTabsStackParamsList,
  'RecommendedStack'
>;
