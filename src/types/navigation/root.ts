import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainTabsStackParamsList } from './main';

export type RootStackParamsList = {
  OnboardingStack: undefined;
  MainStack: NavigatorScreenParams<MainTabsStackParamsList>;
  PlaceDetails: { id: string; fromScreen?: string };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;
